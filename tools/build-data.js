#!/usr/bin/env node
/**
 * tools/build-data.js — v3 题库构建脚本
 *
 * 作用：把 data/ 下的按知识点分片（kps.js + q-<kp>.js）合并成部署产物 data.js，
 *      并在写盘前做 schema / 分布 / 去重 校验。
 *
 * 零依赖：只用 node 内建 fs / path / vm，无 npm、无网络。
 *
 * 用法：
 *   node tools/build-data.js                  # 构建：校验 + 写 data.js + tools/dedupe-report.txt
 *   node tools/build-data.js --check          # 只校验，**不写任何文件**；退出码语义相同
 *   node tools/build-data.js --root <dir>     # 指定站点根（默认 = 本脚本所在目录的上一级）
 *
 * 退出码：0 = 全部通过（WARN 不影响）；1 = 有 FAIL（此时不写 data.js）。
 *
 * 输出约定（stdout 每行）：`[PASS|WARN|FAIL] <rule-id> <detail>`，
 * 末行 `BUILD OK` 或 `BUILD FAILED (n errors)`。
 *
 * ⚠️ 产物必须与 v2 的 data.js 逐字节相同（sha256 b35d424a…），
 *    因此 DEPLOY_HEADER / DEPLOY_Q_COMMENT / 数组拼接方式都是**冻结常量**，请勿改动。
 */

'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

// ---------------------------------------------------------------------------
// 冻结常量：部署产物的静态文本（逐字节取自 v2 data.js，改一个字符就破坏 byte-identity）
// ---------------------------------------------------------------------------
const DEPLOY_HEADER = [
  "/* =============================================================",
  " * data.js — 九年级数学学习工作台 · 题库与知识点讲解（只读数据）",
  " * 暴露全局：window.KPS / window.QUESTIONS",
  " * 硬约束：普通 <script src> 引入，禁用 ES module / fetch / 网络请求",
  " * 公式一律纯文本 + <sup>/<sub>，不引入任何数学渲染库",
  " * ============================================================= */",
].join('\n') + '\n\n';

const DEPLOY_Q_COMMENT = [
  "/* -------------------------------------------------------------",
  " * 36 道题：6 知识点 × (basic 2 / medium 2 / hard 2)",
  " * 每道题的答案均在 QUESTION_CHECK.md 中给出独立复算过程",
  " * ----------------------------------------------------------- */",
].join('\n') + '\n';

// ---------------------------------------------------------------------------
// 冻结常量：源文件契约
// ---------------------------------------------------------------------------
const KPS_FILE = 'kps.js';
const KPS_MARKER = 'window.KPS = [';
const KPS_CLOSER = '];';

const Q_MARKER = 'window.QUESTIONS = (window.QUESTIONS || []).concat([';
const Q_CLOSER = ']);';

/**
 * 硬编码读取顺序（**不要改成 readdir**，否则产物顺序随文件系统变化，byte-identity 就没了）。
 * 新增知识点时在这里加一行，并同步更新下面的 V6 期望表。
 */
const QUESTION_FILES = [
  'q-quad-eq.js',
  'q-quad-func.js',
  'q-rotation.js',
  'q-circle.js',
  'q-similarity.js',
  'q-probability.js',
];

const kpSlugOf = (file) => file.replace(/^q-/, '').replace(/\.js$/, '');

// ---------------------------------------------------------------------------
// 冻结常量：字段白名单 / 枚举
// ---------------------------------------------------------------------------
const ALLOWED_Q_FIELDS = ['id', 'kp', 'difficulty', 'type', 'stem', 'options', 'answer', 'answers', 'explanation'];
const ALLOWED_KP_FIELDS = ['id', 'name', 'subtitle', 'concepts', 'formulas', 'pitfalls'];
const DIFFICULTIES = ['basic', 'medium', 'hard'];
const TYPES = ['single', 'fill'];
const ID_RE = /^q-[a-z0-9-]+-\d{2}$/;

// ---------------------------------------------------------------------------
// 冻结常量：V6 期望分布（逐格核对；svg 为"至少"）
// ---------------------------------------------------------------------------
const SVG_RE = /<svg[\s>]/i;
const EXPECT = {
  'quad-eq':     { total: 12, basic: 3, medium: 4, hard: 5, single: 7, fill: 5, svgMin: 4 },
  'quad-func':   { total: 12, basic: 3, medium: 4, hard: 5, single: 7, fill: 5, svgMin: 5 },
  'rotation':    { total: 12, basic: 3, medium: 4, hard: 5, single: 6, fill: 6, svgMin: 5 },
  'circle':      { total: 12, basic: 3, medium: 4, hard: 5, single: 6, fill: 6, svgMin: 5 },
  'similarity':  { total: 12, basic: 3, medium: 4, hard: 5, single: 6, fill: 6, svgMin: 5 },
  'probability': { total: 12, basic: 3, medium: 4, hard: 5, single: 7, fill: 5, svgMin: 4 },
};
const EXPECT_TOTAL = { total: 72, basic: 18, medium: 24, hard: 30, single: 39, fill: 33, svgMin: 28 };

// ---------------------------------------------------------------------------
// 冻结常量：去重阈值
// ---------------------------------------------------------------------------
const DEDUPE_HARD = 0.95; // >= 判 FAIL（几乎/完全相同）
const DEDUPE_WARN = 0.80; // [0.80, 0.95) 只 WARN
const DEDUPE_LIST_FLOOR = 0.80; // dedupe-report.txt 收录 >= 此值的对

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------
function parseArgs(argv) {
  const out = { root: path.resolve(__dirname, '..'), check: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--check') out.check = true;
    else if (a === '--root') {
      if (i + 1 >= argv.length) { console.error('[FAIL] V0 --root 需要一个目录参数'); process.exit(2); }
      out.root = path.resolve(argv[++i]);
    } else if (a === '--help' || a === '-h') {
      console.log('usage: node tools/build-data.js [--root <dir>] [--check]');
      process.exit(0);
    } else {
      console.error('[FAIL] V0 未知参数: ' + a);
      process.exit(2);
    }
  }
  return out;
}

// ---------------------------------------------------------------------------
// 输出：所有行都是 `[LEVEL] RULEID detail`
// ---------------------------------------------------------------------------
const fails = [];
const warns = [];
let lastPairs = []; // 供 dedupe-report.txt 使用（d >= DEDUPE_LIST_FLOOR，已按 d 降序）

function pass(rule, detail) { console.log('[PASS] ' + rule + ' ' + detail); }
function warn(rule, detail) { warns.push({ rule, detail }); console.log('[WARN] ' + rule + ' ' + detail); }
function fail(rule, detail) { fails.push({ rule, detail }); console.log('[FAIL] ' + rule + ' ' + detail); }

// ---------------------------------------------------------------------------
// 切片：拿到分片文件的"正文"（marker 与 closer 之间的数组元素文本，逐字节原样）
// ---------------------------------------------------------------------------
function extractBody(src, marker, closer, label) {
  const first = src.indexOf(marker);
  if (first < 0) throw new Error(label + ': 找不到 marker `' + marker + '`');
  if (src.indexOf(marker, first + marker.length) >= 0) throw new Error(label + ': marker 出现多次，只允许恰好一处');
  let body = src.slice(first + marker.length);
  if (body.startsWith('\r\n')) body = body.slice(2);
  else if (body.startsWith('\n')) body = body.slice(1);
  else throw new Error(label + ': marker 之后必须紧跟换行');
  const trimmed = body.replace(/\s+$/, '');
  if (!trimmed.endsWith(closer)) throw new Error(label + ': 文件必须以 `' + closer + '` 结束');
  body = trimmed.slice(0, trimmed.length - closer.length);
  if (body.endsWith('\r\n')) body = body.slice(0, -2);
  else if (body.endsWith('\n')) body = body.slice(0, -1);
  if (!body.trim()) throw new Error(label + ': 数组为空');
  if (/,\s*$/.test(body)) {
    throw new Error(label + ': 数组元素区不能以逗号结尾（逗号由 build 统一添加；否则会插入数组空位 (hole)）');
  }
  return body;
}

function evalFile(src, label) {
  const sandbox = { window: {} };
  try {
    vm.runInNewContext(src, sandbox, { filename: label, timeout: 10000 });
  } catch (e) {
    throw new Error(label + ': 执行失败 — ' + e.message);
  }
  return sandbox.window;
}

// ---------------------------------------------------------------------------
// 去重：归一化 + bigram Dice
// ---------------------------------------------------------------------------
function normStem(stem) {
  let s = String(stem);
  s = s.replace(/<figure[\s\S]*?<\/figure>/g, ''); // 1. 整段图形
  s = s.replace(/<[^>]+>/g, '');                   // 2. HTML 标签
  s = s.replace(/\u00a0/g, ' ');                   // 3. 不换行空格 -> 半角空格
  s = s.replace(/\d+/g, '#');                      // 4. 数字归一（换数字不换结构 = 伪新题）
  // 5. 去标点 / 空白 / 运算符
  const punct = '，。、；：？！“”‘’（）【】' + ',.;:?!()[]"\'`' + '~…—+-/=<>×÷±√²³';
  const drop = new Set(Array.from(punct));
  let out = '';
  for (const ch of s) {
    if (/\s/.test(ch)) continue;
    if (drop.has(ch)) continue;
    out += ch;
  }
  return out;
}

function bigramCounts(str) {
  const chars = Array.from(str);
  const m = new Map();
  if (chars.length === 0) return m;
  if (chars.length === 1) { m.set(chars[0], 1); return m; }
  for (let i = 0; i < chars.length - 1; i++) {
    const g = chars[i] + chars[i + 1];
    m.set(g, (m.get(g) || 0) + 1);
  }
  return m;
}

function dice(a, b) {
  const A = bigramCounts(a);
  const B = bigramCounts(b);
  let na = 0; let nb = 0;
  for (const v of A.values()) na += v;
  for (const v of B.values()) nb += v;
  if (na + nb === 0) return 0;
  let inter = 0;
  for (const [g, c] of A) {
    const c2 = B.get(g);
    if (c2) inter += Math.min(c, c2);
  }
  return (2 * inter) / (na + nb);
}

// ---------------------------------------------------------------------------
// 校验工具
// ---------------------------------------------------------------------------
const isNonEmptyString = (v) => typeof v === 'string' && v.trim() !== '';
const stripTags = (s) => String(s).replace(/<[^>]+>/g, '').replace(/\u00a0/g, ' ').trim();
const isStringArray = (v, minLen) => Array.isArray(v) && v.length >= minLen && v.every(isNonEmptyString);

// ---------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------
function main() {
  const args = parseArgs(process.argv.slice(2));
  const root = args.root;

  // ---------- 读取源分片（顺序硬编码） ----------
  const blocks = new Map(); // file -> body
  const evaled = new Map(); // file -> window
  let sourceOk = true;

  const readOne = (rel) => {
    const abs = path.join(root, 'data', rel);
    try {
      return fs.readFileSync(abs, 'utf8');
    } catch (e) {
      fail('V0', '读取失败 data/' + rel + ' — ' + e.code);
      sourceOk = false;
      return null;
    }
  };

  const kpsSrc = readOne(KPS_FILE);
  if (kpsSrc) {
    try {
      blocks.set(KPS_FILE, extractBody(kpsSrc, KPS_MARKER, KPS_CLOSER, 'data/' + KPS_FILE));
      evaled.set(KPS_FILE, evalFile(kpsSrc, 'data/' + KPS_FILE));
    } catch (e) { fail('V0', e.message); sourceOk = false; }
  }

  const qBodies = [];
  for (const file of QUESTION_FILES) {
    const src = readOne(file);
    if (!src) continue;
    try {
      const body = extractBody(src, Q_MARKER, Q_CLOSER, 'data/' + file);
      const win = evalFile(src, 'data/' + file);
      blocks.set(file, body);
      evaled.set(file, win);
      qBodies.push({ file, body });
    } catch (e) { fail('V0', e.message); sourceOk = false; }
  }

  if (!sourceOk) return finish(root, args, null);
  pass('V0', 'sources data/' + KPS_FILE + ' + ' + QUESTION_FILES.length + ' 个题目分片全部读取并执行成功');

  // ---------- 汇总题目（带来源文件信息） ----------
  const entries = []; // { q, file, slug }
  for (const file of QUESTION_FILES) {
    const win = evaled.get(file);
    const slug = kpSlugOf(file);
    const arr = win && win.QUESTIONS;
    if (!Array.isArray(arr)) { fail('V0', 'data/' + file + ' 未导出数组 window.QUESTIONS'); continue; }
    for (const q of arr) entries.push({ q, file, slug });
  }
  const questions = entries.map((e) => e.q);

  // ---------- 分布统计（供 V5 / V6 共用） ----------
  const stat = new Map();
  for (const slug of Object.keys(EXPECT)) stat.set(slug, { total: 0, basic: 0, medium: 0, hard: 0, single: 0, fill: 0, svg: 0 });
  const totalStat = { total: 0, basic: 0, medium: 0, hard: 0, single: 0, fill: 0, svg: 0 };
  for (const { q, slug } of entries) {
    if (!stat.has(slug)) { fail('V6', slug + ': 不在 V6 期望表中（新增知识点请同步更新 EXPECT / EXPECT_TOTAL）'); continue; }
    const s = stat.get(slug);
    s.total++; totalStat.total++;
    if (DIFFICULTIES.includes(q.difficulty)) { s[q.difficulty]++; totalStat[q.difficulty]++; }
    if (TYPES.includes(q.type)) { s[q.type]++; totalStat[q.type]++; }
    if (typeof q.stem === 'string' && SVG_RE.test(q.stem)) { s.svg++; totalStat.svg++; }
  }

  // ---------- V1 必填字段 / 类型 ----------
  let v1 = 0;
  for (const { q, file } of entries) {
    const label = (q && typeof q.id === 'string' ? q.id : '<无 id @' + file + '>');
    const problems = [];
    for (const f of ['id', 'kp', 'difficulty', 'type', 'explanation']) {
      if (!isNonEmptyString(q[f])) problems.push(f + ' 必须是非空字符串');
    }
    if (!isNonEmptyString(q.stem)) problems.push('stem 必须是非空字符串');
    else if (stripTags(q.stem) === '') problems.push('stem 剥离标签后为空');
    for (const p of problems) { fail('V1', label + ': ' + p); v1++; }
  }
  if (!v1) pass('V1', entries.length + ' 题的必填字段与类型均合法');

  // ---------- V2 id 格式 + 全局唯一 ----------
  let v2 = 0;
  const seen = new Map();
  for (const { q } of entries) {
    const id = q.id;
    if (typeof id !== 'string' || !ID_RE.test(id)) { fail('V2', String(id) + ': 不符合 ' + ID_RE.source); v2++; }
    const k = String(id);
    if (seen.has(k)) { fail('V2', id + ': id 重复（另见 ' + seen.get(k) + '）'); v2++; }
    else seen.set(k, (q.kp || '?') + '/' + (q.type || '?'));
  }
  if (!v2) pass('V2', entries.length + ' 个 id 格式合法且全局唯一');

  // ---------- V3 kp 归属 ----------
  let v3 = 0;
  for (const { q, file, slug } of entries) {
    if (q.kp !== slug) { fail('V3', String(q.id) + ': kp=' + JSON.stringify(q.kp) + ' 与所在文件 data/' + file + '（slug=' + slug + '）不一致'); v3++; }
  }
  if (!v3) pass('V3', '每题的 kp 都等于所在文件名的 slug');

  // ---------- V4 枚举 ----------
  let v4 = 0;
  for (const { q } of entries) {
    if (!DIFFICULTIES.includes(q.difficulty)) { fail('V4', String(q.id) + ': difficulty=' + JSON.stringify(q.difficulty) + ' 不在 {' + DIFFICULTIES.join(',') + '}'); v4++; }
    if (!TYPES.includes(q.type)) { fail('V4', String(q.id) + ': type=' + JSON.stringify(q.type) + ' 不在 {' + TYPES.join(',') + '}'); v4++; }
  }
  if (!v4) pass('V4', 'difficulty / type 枚举全部合法');

  // ---------- V5 答案结构 ----------
  let v5 = 0;
  for (const { q } of entries) {
    const hasAnswer = Object.prototype.hasOwnProperty.call(q, 'answer');
    const hasAnswers = Object.prototype.hasOwnProperty.call(q, 'answers');
    if (hasAnswer && hasAnswers) { fail('V5', String(q.id) + ': answer 与 answers 不得同时出现'); v5++; continue; }
    if (q.type === 'single') {
      if (!isStringArray(q.options, 2)) { fail('V5', String(q.id) + ': single 的 options 必须是 >=2 项的非空字符串数组'); v5++; }
      if (!hasAnswer) { fail('V5', String(q.id) + ': single 缺少 answer'); v5++; }
      else if (!Number.isInteger(q.answer)) { fail('V5', String(q.id) + ': answer 必须是整数，实际 ' + JSON.stringify(q.answer)); v5++; }
      else if (Array.isArray(q.options) && (q.answer < 0 || q.answer >= q.options.length)) { fail('V5', String(q.id) + ': answer=' + q.answer + ' 越界（options.length=' + q.options.length + '）'); v5++; }
      if (hasAnswers) { fail('V5', String(q.id) + ': single 不应带 answers'); v5++; }
    } else if (q.type === 'fill') {
      if (!isStringArray(q.answers, 1)) { fail('V5', String(q.id) + ': fill 的 answers 必须是 >=1 项的非空字符串数组'); v5++; }
      if (hasAnswer) { fail('V5', String(q.id) + ': fill 不应带 answer'); v5++; }
    }
  }
  if (!v5) pass('V5', 'single/fill 的答案结构全部合法（' + totalStat.single + ' single + ' + totalStat.fill + ' fill = ' + totalStat.total + '）');

  // ---------- V6 分布 ----------
  let v6 = 0;
  for (const [slug, exp] of Object.entries(EXPECT)) {
    const s = stat.get(slug) || {};
    for (const k of ['total', 'basic', 'medium', 'hard', 'single', 'fill']) {
      if (s[k] !== exp[k]) { fail('V6', slug + '.' + k + '=' + s[k] + '，期望 ' + exp[k]); v6++; }
    }
    if (s.svg < exp.svgMin) { fail('V6', slug + '.svg=' + s.svg + '，期望 >= ' + exp.svgMin); v6++; }
  }
  for (const k of ['total', 'basic', 'medium', 'hard', 'single', 'fill']) {
    if (totalStat[k] !== EXPECT_TOTAL[k]) { fail('V6', 'TOTAL.' + k + '=' + totalStat[k] + '，期望 ' + EXPECT_TOTAL[k]); v6++; }
  }
  if (totalStat.svg < EXPECT_TOTAL.svgMin) { fail('V6', 'TOTAL.svg=' + totalStat.svg + '，期望 >= ' + EXPECT_TOTAL.svgMin); v6++; }
  if (!v6) {
    pass('V6', '分布逐格匹配：72 题 / basic 18 / medium 24 / hard 30 / single 39 / fill 33 / 含 SVG ' + totalStat.svg);
  }

  // ---------- V7 去重 ----------
  const normed = entries.map(({ q }) => ({ id: String(q.id), slug: q.kp, n: normStem(q.stem) }));
  const pairs = [];
  for (let i = 0; i < normed.length; i++) {
    for (let j = i + 1; j < normed.length; j++) {
      const d = dice(normed[i].n, normed[j].n);
      if (d >= DEDUPE_LIST_FLOOR) pairs.push({ d, a: normed[i].id, b: normed[j].id });
    }
  }
  pairs.sort((x, y) => (y.d - x.d) || (x.a < y.a ? -1 : 1) || (x.b < y.b ? -1 : 1));
  lastPairs = pairs;
  const hardPairs = pairs.filter((p) => p.d >= DEDUPE_HARD);
  let v7 = 0;
  for (const p of hardPairs) { fail('V7', 'd=' + p.d.toFixed(4) + ' ' + p.a + ' ' + p.b + ' >= ' + DEDUPE_HARD + '（疑重复/伪新题）'); v7++; }
  if (!v7) {
    const top = pairs.length ? '；最高 d=' + pairs[0].d.toFixed(4) + '（' + pairs[0].a + ' vs ' + pairs[0].b + '）' : '；无 >= ' + DEDUPE_LIST_FLOOR + ' 的相似对';
    pass('V7', normed.length + ' 题两两比对：>= ' + DEDUPE_HARD + ' 的对 ' + hardPairs.length + ' 个' + top);
  }
  for (const p of pairs) {
    if (p.d >= DEDUPE_HARD) continue; // 已按 FAIL 报过
    warn('V7', '[0.80,0.95) 相似对 d=' + p.d.toFixed(4) + ' ' + p.a + ' ' + p.b);
  }

  // ---------- V8 KPS ----------
  const kpsArr = evaled.get(KPS_FILE) && evaled.get(KPS_FILE).KPS;
  let v8 = 0;
  const expectSlugs = QUESTION_FILES.map(kpSlugOf);
  if (!Array.isArray(kpsArr)) { fail('V8', 'data/' + KPS_FILE + ' 未导出数组 window.KPS'); v8++; }
  else {
    if (kpsArr.length !== expectSlugs.length) { fail('V8', 'KPS 项数=' + kpsArr.length + '，期望 ' + expectSlugs.length); v8++; }
    const gotIds = kpsArr.map((k) => k && k.id);
    for (const slug of expectSlugs) if (!gotIds.includes(slug)) { fail('V8', 'KPS 缺少知识点 id=' + slug); v8++; }
    for (const id of gotIds) if (!expectSlugs.includes(id)) { fail('V8', 'KPS 出现未知知识点 id=' + JSON.stringify(id)); v8++; }
    const dupIds = gotIds.filter((id, i) => gotIds.indexOf(id) !== i);
    for (const id of new Set(dupIds)) { fail('V8', 'KPS id 重复：' + id); v8++; }
    for (const k of kpsArr) {
      const label = 'KPS ' + (k && k.id ? k.id : '<?>');
      for (const f of ['id', 'name', 'subtitle']) if (!isNonEmptyString(k && k[f])) { fail('V8', label + ': ' + f + ' 必须是非空字符串'); v8++; }
      for (const f of ['concepts', 'formulas', 'pitfalls']) {
        if (!Array.isArray(k && k[f]) || k[f].length === 0) { fail('V8', label + ': ' + f + ' 必须是非空数组'); v8++; }
        else if (!k[f].every(isNonEmptyString)) { fail('V8', label + ': ' + f + ' 里有空项'); v8++; }
      }
    }
  }
  if (!v8) pass('V8', 'KPS 恰好 ' + expectSlugs.length + ' 项，id 集合与知识点 slug 完全一致，字段齐全');

  // ---------- V9 未知字段（WARN） ----------
  let v9 = 0;
  for (const { q, file } of entries) {
    for (const f of Object.keys(q)) {
      if (!ALLOWED_Q_FIELDS.includes(f)) { warn('V9', String(q.id) + ': 未知字段 ' + JSON.stringify(f) + '（data/' + file + '）'); v9++; }
    }
  }
  if (Array.isArray(kpsArr)) {
    for (const k of kpsArr) {
      for (const f of Object.keys(k)) {
        if (!ALLOWED_KP_FIELDS.includes(f)) { warn('V9', 'KPS ' + String(k.id) + ': 未知字段 ' + JSON.stringify(f)); v9++; }
      }
    }
  }
  if (!v9) pass('V9', '未发现白名单外的字段');

  // ---------- V10 编号连续性（WARN） ----------
  let v10 = 0;
  const byKp = new Map();
  for (const { q, slug } of entries) {
    const m = /-(\d{2})$/.exec(String(q.id));
    if (!m) continue;
    if (!byKp.has(slug)) byKp.set(slug, []);
    byKp.get(slug).push(Number(m[1]));
  }
  for (const slug of expectSlugs) {
    const nums = (byKp.get(slug) || []).slice().sort((a, b) => a - b);
    if (!nums.length) continue;
    const expected = Array.from({ length: nums.length }, (_, i) => i + 1);
    const gaps = [];
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== expected[i]) { gaps.push(nums[i]); }
    }
    const dup = nums.filter((n, i) => nums.indexOf(n) !== i);
    for (const n of new Set(dup)) { warn('V10', slug + ': 序号 ' + String(n).padStart(2, '0') + ' 重复'); v10++; }
    if (gaps.length) { warn('V10', slug + ': 序号不连续，实为 ' + nums.map((n) => String(n).padStart(2, '0')).join(',') + '（期望 01..' + String(nums.length).padStart(2, '0') + '）'); v10++; }
  }
  if (!v10) pass('V10', '各知识点内序号 01..N 连续、无重复');

  // ---------- 组装产物 ----------
  const kpsBody = blocks.get(KPS_FILE);
  // 拼装规则（与 v2 完全一致）：块注释 + window.KPS = [\n ... \n]; + 空行 + 题区注释 + window.QUESTIONS = [\n<body>,…\n];
  const assembled =
    DEPLOY_HEADER +
    KPS_MARKER + '\n' + kpsBody + '\n' + KPS_CLOSER +
    '\n\n' +
    DEPLOY_Q_COMMENT +
    'window.QUESTIONS = [\n' +
    qBodies.map((b) => b.body + ',').join('\n') +
    '\n];';

  // ---------- V11 产物语义等价（执行产物，与分片聚合结果 deep-compare） ----------
  let v11 = 0;
  let built = null;
  try {
    built = evalFile(assembled, '<assembled data.js>');
  } catch (e) {
    fail('V11', '产物无法执行：' + e.message); v11++;
  }
  if (built) {
    const srcKps = JSON.stringify(kpsArr);
    const outKps = JSON.stringify(built.KPS);
    if (srcKps !== outKps) { fail('V11', 'KPS 语义不等（拼装前后不一致）'); v11++; }
    const srcQ = JSON.stringify(questions);
    const outQ = JSON.stringify(built.QUESTIONS);
    if (srcQ !== outQ) { fail('V11', 'QUESTIONS 语义不等（拼装前后不一致）'); v11++; }
    if (Array.isArray(built.QUESTIONS) && built.QUESTIONS.length !== questions.length) { fail('V11', '题目数变了：' + built.QUESTIONS.length + ' != ' + questions.length); v11++; }
  }
  if (!v11) pass('V11', '产物执行后 KPS/QUESTIONS 与分片聚合结果 JSON deep-equal');

  // ---------- V12 未登记的分片文件（WARN） ----------
  // 只用于诊断，不参与读取顺序（读取顺序永远是上面的 QUESTION_FILES 硬编码数组）。
  let v12 = 0;
  try {
    const inData = fs.readdirSync(path.join(root, 'data')).filter((f) => /^q-.*\.js$/.test(f)).sort();
    for (const f of inData) {
      if (!QUESTION_FILES.includes(f)) {
        warn('V12', 'data/' + f + ' 存在但不在 QUESTION_FILES 里，构建会**忽略整个文件**（请加到 QUESTION_FILES，或删掉该文件）');
        v12++;
      }
    }
  } catch (e) {
    warn('V12', '无法列出 data/ 目录（' + e.code + '），跳过未登记分片检查');
    v12++;
  }
  if (!v12) pass('V12', 'data/ 下每个 q-*.js 都已登记在 QUESTION_FILES，无孤儿分片');

  return finish(root, args, assembled);
}

// ---------------------------------------------------------------------------
// 收尾：写盘 / 报告 / 退出码
// ---------------------------------------------------------------------------
function finish(root, args, assembled) {
  if (fails.length) {
    console.log('BUILD FAILED (' + fails.length + ' errors)');
    process.exitCode = 1;
    return;
  }
  if (args.check) {
    pass('OUT', '--check 模式：校验通过，未写任何文件（data.js / dedupe-report.txt 均未改动）');
    console.log('BUILD OK');
    process.exitCode = 0;
    return;
  }

  const dataPath = path.join(root, 'data.js');
  fs.writeFileSync(dataPath, assembled, 'utf8');
  const bytes = Buffer.byteLength(assembled, 'utf8');
  pass('OUT', 'data.js 已写入（' + bytes + ' bytes）');

  // dedupe-report.txt
  const reportPath = path.join(root, 'tools', 'dedupe-report.txt');
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, buildDedupeReport(), 'utf8');
  pass('OUT', 'tools/dedupe-report.txt 已写入');

  console.log('BUILD OK');
  process.exitCode = 0;
}

let cachedReport = null;
function buildDedupeReport() {
  if (cachedReport !== null) return cachedReport;
  cachedReport = lastPairs.map((p) => 'd=' + p.d.toFixed(3) + '  ' + p.a + '  ' + p.b + '\n').join('');
  return cachedReport;
}

main();
