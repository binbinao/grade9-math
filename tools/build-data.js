#!/usr/bin/env node
/**
 * tools/build-data.js — v4 题库构建脚本（super-set of v3）
 *
 * 作用：把 data/ 下的按知识点分片（kps.js + q-<kp>.js）合并成部署产物 data.js，
 *      并在写盘前做 schema / 分布 / 去重 / tags 校验。
 *
 * 零依赖：只用 node 内建 fs / path / vm，无 npm、无网络。
 *
 * 用法：
 *   node tools/build-data.js                             # 默认 --profile v4：校验 + 写 data.js + tools/dedupe-report.txt
 *   node tools/build-data.js --check                     # 只校验，**不写任何文件**；退出码语义相同
 *   node tools/build-data.js --profile legacy72          # 用 v3 冻结期望表（72 题时代 + 综合题期望 0）
 *   node tools/build-data.js --only <slug> --root <dir>  # 单分片自检（并行写题库时用；绝不写盘）
 *   node tools/build-data.js --root <dir>                # 指定站点根（默认 = 本脚本所在目录的上一级）
 *
 * 退出码：0 = 全部通过（WARN 不影响）；1 = 有 FAIL（此时不写 data.js）；
 *        2 = 命令行参数非法（未知参数 / --root 缺值 / 未知 profile / 未知 --only slug）。
 *
 * 输出约定（stdout 每行）：`[PASS|WARN|FAIL] <rule-id> <detail>`，
 * 末行 `BUILD OK` / `BUILD FAILED (n errors)`（--only 模式为 `ONLY OK`）。
 *
 * 规则清单：
 *   V0  源读取      V1 必填字段/类型   V2 id 格式+唯一   V3 kp 归属
 *   V4  枚举        V5 答案结构        V6 分布(profile)  V7 去重(≥0.95 FAIL / ≥0.80 WARN)
 *   V8  KPS         V9 未知字段(WARN)  V10 编号连续(WARN) V11 产物语义等价
 *   V12 孤儿分片(WARN)  V13 tags 合法性(FAIL)  V14 综合题数量(profile)
 *   V15 图泄答案(FAIL)：<text>/aria-label 里的数字若等于答案且题干未给 → FAIL（详见 checkV15）
 *
 * ⚠️ 产物必须与 v3 的 data.js 逐字节相同（sha256 b35d424a…），
 *    因此 DEPLOY_HEADER / DEPLOY_Q_COMMENT / 数组拼接方式都是**冻结常量**，请勿改动。
 */

'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

// ---------------------------------------------------------------------------
// 冻结常量：部署产物的静态文本（逐字节取自 v2/v3 data.js，改一个字符就破坏 byte-identity）
// ---------------------------------------------------------------------------
const DEPLOY_HEADER = [
  "/* =============================================================",
  " * data.js — 九年级数学学习工作台 · 题库与知识点讲解（只读数据）",
  " * 暴露全局：window.KPS / window.QUESTIONS",
  " * 硬约束：普通 <script src> 引入，禁用 ES module / fetch / 网络请求",
  " * 公式一律纯文本 + <sup>/<sub>，不引入任何数学渲染库",
  " * ============================================================= */",
].join('\n') + '\n\n';

// ⚠️ 这段注释里的「36 道题」文案已经过时（现在是 72/300 题规模），但**刻意保留不改**：
//    orchestrator 决策 = 字节等价（sha256 b35d424a…）优先于注释文案准确性。
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
 * 新增知识点时在这里加一行，并同步更新下面的 profile 期望表。
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
const ALLOWED_Q_FIELDS = ['id', 'kp', 'difficulty', 'type', 'stem', 'options', 'answer', 'answers', 'explanation', 'tags'];
const ALLOWED_KP_FIELDS = ['id', 'name', 'subtitle', 'concepts', 'formulas', 'pitfalls'];
const DIFFICULTIES = ['basic', 'medium', 'hard'];
const TYPES = ['single', 'fill'];
const ID_RE = /^q-[a-z0-9-]+\-\d{2}$/;

// tags（综合题标记）：只允许 6 个知识点 slug，长度 1–5，不含自身 kp，无重复
const TAGS_ALLOWED = ['quad-eq', 'quad-func', 'rotation', 'circle', 'similarity', 'probability'];
const TAGS_MIN = 1;
const TAGS_MAX = 5;

// ---------------------------------------------------------------------------
// 分布期望表：V6 每格核对 + svgMin 为"至少"；composite 由 V14 单独核对
// ---------------------------------------------------------------------------
const SVG_RE = /<svg[\s>]/i;

/** v3 冻结表（72 题时代，逐字节等价的唯一合法 profile） */
const LEGACY72_EXPECT = {
  'quad-eq':     { total: 12, basic: 3, medium: 4, hard: 5, single: 7, fill: 5, svgMin: 4 },
  'quad-func':   { total: 12, basic: 3, medium: 4, hard: 5, single: 7, fill: 5, svgMin: 5 },
  'rotation':    { total: 12, basic: 3, medium: 4, hard: 5, single: 6, fill: 6, svgMin: 5 },
  'circle':      { total: 12, basic: 3, medium: 4, hard: 5, single: 6, fill: 6, svgMin: 5 },
  'similarity':  { total: 12, basic: 3, medium: 4, hard: 5, single: 6, fill: 6, svgMin: 5 },
  'probability': { total: 12, basic: 3, medium: 4, hard: 5, single: 7, fill: 5, svgMin: 4 },
};
const LEGACY72_TOTAL = { total: 72, basic: 18, medium: 24, hard: 30, single: 39, fill: 33, svgMin: 28 };

/** v4 目标表（每 kp 50 题；不做 single/fill 等值校验——用户未规定题型配比） */
const V4_EXPECT = {
  'quad-eq':     { total: 50, basic: 12, medium: 18, hard: 20, svgMin: 16 },
  'quad-func':   { total: 50, basic: 12, medium: 18, hard: 20, svgMin: 16 },
  'rotation':    { total: 50, basic: 12, medium: 18, hard: 20, svgMin: 16 },
  'circle':      { total: 50, basic: 12, medium: 18, hard: 20, svgMin: 16 },
  'similarity':  { total: 50, basic: 12, medium: 18, hard: 20, svgMin: 16 },
  'probability': { total: 50, basic: 12, medium: 18, hard: 20, svgMin: 16 },
};
const V4_TOTAL = { total: 300, basic: 72, medium: 108, hard: 120, svgMin: 96 };

const PROFILES = {
  // v4：扩张目标（默认）。checkKeys 里不含 single/fill → 只打印统计行，不做等值 FAIL
  v4: {
    name: 'v4',
    expect: V4_EXPECT,
    expectTotal: V4_TOTAL,
    checkKeys: ['total', 'basic', 'medium', 'hard'],
    composite: { perKp: 10, total: 60 },
  },
  // legacy72：v3 冻结期望表，用来守 byte-identity；综合题期望 0
  legacy72: {
    name: 'legacy72',
    expect: LEGACY72_EXPECT,
    expectTotal: LEGACY72_TOTAL,
    checkKeys: ['total', 'basic', 'medium', 'hard', 'single', 'fill'],
    composite: { perKp: 0, total: 0 },
  },
};
const DEFAULT_PROFILE = 'v4';

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
  const out = { root: path.resolve(__dirname, '..'), check: false, profile: DEFAULT_PROFILE, only: null };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--check') out.check = true;
    else if (a === '--root') {
      if (i + 1 >= argv.length) { console.error('[FAIL] V0 --root 需要一个目录参数'); process.exit(2); }
      out.root = path.resolve(argv[++i]);
    } else if (a === '--profile') {
      if (i + 1 >= argv.length) { console.error('[FAIL] V0 --profile 需要一个取值（' + Object.keys(PROFILES).join(' / ') + '）'); process.exit(2); }
      const v = argv[++i];
      if (!Object.prototype.hasOwnProperty.call(PROFILES, v)) {
        console.error('[FAIL] V0 未知 profile: ' + v + '（可选 ' + Object.keys(PROFILES).join(' / ') + '）');
        process.exit(2);
      }
      out.profile = v;
    } else if (a === '--only') {
      if (i + 1 >= argv.length) { console.error('[FAIL] V0 --only 需要一个知识点 slug（' + QUESTION_FILES.map(kpSlugOf).join(' / ') + '）'); process.exit(2); }
      out.only = argv[++i];
    } else if (a === '--help' || a === '-h') {
      console.log('usage: node tools/build-data.js [--root <dir>] [--check] [--profile ' + Object.keys(PROFILES).join('|') + '] [--only <slug>]');
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

// 记忆化：v4 规模下两两比对是 O(n²)，同一 stem 只算一次 bigram
const bigramCache = new Map();
function bigramCounts(str) {
  const hit = bigramCache.get(str);
  if (hit !== undefined) return hit;
  const chars = Array.from(str);
  const m = new Map();
  if (chars.length === 0) { bigramCache.set(str, m); return m; }
  if (chars.length === 1) { m.set(chars[0], 1); bigramCache.set(str, m); return m; }
  for (let i = 0; i < chars.length - 1; i++) {
    const g = chars[i] + chars[i + 1];
    m.set(g, (m.get(g) || 0) + 1);
  }
  bigramCache.set(str, m);
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
const isComposite = (q) => Array.isArray(q && q.tags) && q.tags.length > 0;

const emptyStat = () => ({ total: 0, basic: 0, medium: 0, hard: 0, single: 0, fill: 0, svg: 0, composite: 0 });

/** 统计给定 entries 的分布；slugs = 需要建桶的知识点列表 */
function statsOf(entries, slugs) {
  const stat = new Map();
  for (const slug of slugs) stat.set(slug, emptyStat());
  const totalStat = emptyStat();
  for (const { q, slug } of entries) {
    const s = stat.get(slug);
    if (!s) continue; // 未知 slug 由调用方另行报错
    s.total++; totalStat.total++;
    if (DIFFICULTIES.includes(q.difficulty)) { s[q.difficulty]++; totalStat[q.difficulty]++; }
    if (TYPES.includes(q.type)) { s[q.type]++; totalStat[q.type]++; }
    if (typeof q.stem === 'string' && SVG_RE.test(q.stem)) { s.svg++; totalStat.svg++; }
    if (isComposite(q)) { s.composite++; totalStat.composite++; }
  }
  return { stat, totalStat };
}

// ---------------------------------------------------------------------------
// 规则实现（full build 与 --only 共用）：V1–V5 + V13
// ---------------------------------------------------------------------------
function checkV1(entries) {
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
  return v1;
}

function checkV2(entries) {
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
  return v2;
}

function checkV3(entries) {
  let v3 = 0;
  for (const { q, file, slug } of entries) {
    if (q.kp !== slug) { fail('V3', String(q.id) + ': kp=' + JSON.stringify(q.kp) + ' 与所在文件 data/' + file + '（slug=' + slug + '）不一致'); v3++; }
  }
  if (!v3) pass('V3', '每题的 kp 都等于所在文件名的 slug');
  return v3;
}

function checkV4(entries) {
  let v4 = 0;
  for (const { q } of entries) {
    if (!DIFFICULTIES.includes(q.difficulty)) { fail('V4', String(q.id) + ': difficulty=' + JSON.stringify(q.difficulty) + ' 不在 {' + DIFFICULTIES.join(',') + '}'); v4++; }
    if (!TYPES.includes(q.type)) { fail('V4', String(q.id) + ': type=' + JSON.stringify(q.type) + ' 不在 {' + TYPES.join(',') + '}'); v4++; }
  }
  if (!v4) pass('V4', 'difficulty / type 枚举全部合法');
  return v4;
}

function checkV5(entries, totalStat) {
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
  return v5;
}

/** V13 tags 合法性（FAIL 级）：存在则必须 数组/1–5 项/非空字符串/合法 slug/不含自身 kp/无重复 */
function checkV13(entries) {
  let v13 = 0;
  for (const { q } of entries) {
    const id = String(q && q.id);
    if (!Object.prototype.hasOwnProperty.call(q, 'tags')) continue; // 省略 = 非综合题，合法，不做任何校验
    const t = q.tags;
    if (!Array.isArray(t)) {
      fail('V13', id + ': tags 必须是数组，实际是 ' + (t === null ? 'null' : typeof t) + ' ' + JSON.stringify(t));
      v13++; continue;
    }
    if (t.length === 0) {
      fail('V13', id + ': tags 为空数组 []（空 tags 视为"伪综合题"：要么省略该字段，要么给出 ' + TAGS_MIN + '–' + TAGS_MAX + ' 个合法 slug）');
      v13++; continue;
    }
    if (t.length < TAGS_MIN || t.length > TAGS_MAX) {
      fail('V13', id + ': tags 长度 ' + t.length + ' 越界（' + TAGS_MIN + '–' + TAGS_MAX + '）');
      v13++;
    }
    const seenT = new Set();
    for (const tag of t) {
      if (typeof tag !== 'string' || tag.trim() === '') {
        fail('V13', id + ': tags 元素必须是非空字符串，实际 ' + JSON.stringify(tag));
        v13++; continue;
      }
      if (!TAGS_ALLOWED.includes(tag)) {
        fail('V13', id + ': tags 含非法 slug ' + JSON.stringify(tag) + '（合法值：' + TAGS_ALLOWED.join(', ') + '）');
        v13++;
      }
      if (tag === q.kp) {
        fail('V13', id + ': tags 不得包含自身 kp ' + JSON.stringify(tag));
        v13++;
      }
      if (seenT.has(tag)) {
        fail('V13', id + ': tags 有重复元素 ' + JSON.stringify(tag));
        v13++;
      }
      seenT.add(tag);
    }
  }
  if (!v13) pass('V13', 'tags 字段（存在时）全部合法：数组 / ' + TAGS_MIN + '–' + TAGS_MAX + ' 项 / 合法 slug / 不含自身 kp / 无重复');
  return v13;
}

// ---------------------------------------------------------------------------
// V15 图泄答案（FAIL 级）：图上 / aria-label 里的数字若等于答案且题干没给 → FAIL
//
// 背景：tester 的 geom-audit 只验几何关系（角度/边长比/相切/共线/布局），不验
//      「图上写的数字是不是答案」。历史上 q-quad-eq-47、q-quad-func-49 都是
//      「把答案直接写在图里」，而且同一个数字有两条泄题通道：
//        ① <text> 节点（看得见的字）
//        ② aria-label（读屏用户能听到的字）
//      所以 V15 两条通道都扫。
//
// 判定（对每道含 <svg> 的题）：
//   F = 图上数字集合（所有 <text> 内容 + aria-label 属性值的数字）
//   S = 题干数字集合（stem 去掉 <svg>…</svg> 之后）
//   E = F \ S            （图上多出来的数字，即"题干没给"的）
//   A = 答案数字集合（single 取 options[answer]，fill 取 answers 全部）
//
//   FAIL（真泄题）——E ∩ A 里的数值以下列的形态出现：
//     (a) 裸标注：某个 <text> 的内容就是这个数值本体（可带单位/角度符号，或 "x=1" 这种 变量=数值），
//         且该数值在 <text> 里出现次数 < V15_REPEAT_TOLERANCE（重复太多次说明是图表枚举数据）；
//     (b) 只在 aria-label 出现（正文一个字都没写，却能被读屏念出答案）；
//     (c) 坐标型答案 (a,b)：图上（text 或 aria）出现同一个坐标对。坐标对按"整对"比对，
//         所以方格纸刻度 0..6 这类单个数字不会误判成答案 (6,4)。
//
//   WARN（不是泄答案，但要人看）——E 里剩下的数字：
//     · 题干未写、图上标注的中间量（例如 q-rotation-16 的 ∠AOB=30°，答案求的是 60°）
//     · 表格/树状图的枚举数据（骰子点数、和/积、概率分支）
//     · 图上用整句写出的数字（不是裸标注）
//     这类**不加白名单绕过**：留 WARN 列出，让 FAIL 只针对"数字等于答案"。
//
// 已知局限（刻意为之，不追求全知）：
//   · 只扫阿拉伯数字，中文数字（"二点五"）与 √2 这类根式里的数值不在覆盖范围；
//   · 题干里若恰好出现过同一个数字（与答案同值），无法与"答案泄露"区分 → 按规矩不报（F⊄S 是前提）；
//   · 答案是表达式时（如 y=−0.25x²+4），系数会被当成"答案数值"：若图上恰好有同值的裸标注会误报。
//     300 题实测 0 误报；将来若出现，优先考虑收紧答案侧分词（只取等号右侧的"主数值"），不要放宽图上侧。
// ---------------------------------------------------------------------------
const V15_FRAC_RE = /\d+\s*\/\s*\d+/g;
const V15_NUM_RE = /[-−–]?\d+(?:\.\d+)?/g;
const V15_UNIT_RE = /(m|cm|km|mm|米|厘米|分米|千米|毫米|°|度|元|个|人|次|分钟|小时|秒|kg|g)$/;
const V15_REPEAT_TOLERANCE = 3; // 同一数值在 <text> 里出现 >= 此值 → 视为图表枚举数据，降 WARN
const V15_COORD_RE = /[（(]\s*([-−–]?\d+(?:\.\d+)?)\s*[,，]\s*([-−–]?\d+(?:\.\d+)?)\s*[)）]/g;

function v15CanonNum(tok) {
  const t = String(tok).replace(/^[−–]/, '-');
  const v = Number(t);
  if (!Number.isFinite(v)) return null;
  return String(v); // 2.50 -> 2.5, -0 -> 0
}
function v15CanonFrac(tok) {
  const m = /^(\d+)\s*\/\s*(\d+)$/.exec(String(tok).trim());
  if (!m) return null;
  return Number(m[1]) + '/' + Number(m[2]); // 保留分数形态：1/3 不等于 1 或 3
}
/** 分词：分数先整体吃掉（否则 1/3 会被拆成 1 和 3，误伤树状图题），再取整数/小数（含负号）。
 *  另外把中文里的"减/负"当负号，"加"当正号——aria-label 里 y=−x²+2x−3 常被念成"负 x 平方加 2x 减 3"，
 *  不归一的话"减 3"会被读成正数 3，与题干里的 −3 对不上，造成误报。 */
function v15Tokenize(text) {
  const out = [];
  const normalized = String(text == null ? '' : text)
    .replace(/负\s*/g, '-')
    .replace(/减\s*/g, '-')
    .replace(/加\s*/g, '+');
  const masked = normalized.replace(V15_FRAC_RE, (f) => {
    out.push({ t: v15CanonFrac(f), kind: 'frac' });
    return ' ';
  });
  for (const m of masked.matchAll(V15_NUM_RE)) out.push({ t: v15CanonNum(m[0]), kind: 'num' });
  return out.filter((k) => k.t !== null);
}
function v15TokenSet(text) {
  const s = new Set();
  for (const k of v15Tokenize(text)) s.add(k.t);
  return s;
}
const v15StripSvg = (stem) => String(stem).replace(/<svg\b[\s\S]*?<\/svg>/gi, ' ');
const v15TextNodes = (stem) => [...String(stem).matchAll(/<text\b[^>]*>([\s\S]*?)<\/text>/gi)].map((m) => m[1].replace(/<[^>]+>/g, ''));
const v15AriaLabels = (stem) => [...String(stem).matchAll(/aria-label\s*=\s*"([^"]*)"/g)].map((m) => m[1]);
function v15CoordinatePairs(text) {
  const out = new Set();
  for (const m of String(text).matchAll(V15_COORD_RE)) {
    const a = v15CanonNum(m[1]); const b = v15CanonNum(m[2]);
    if (a !== null && b !== null) out.add(a + ',' + b);
  }
  return out;
}
/** 答案原文（single → 正确选项文本；fill → 所有可接受答案拼接） */
function v15AnswerText(q) {
  const parts = [];
  if (q.type === 'single' && Array.isArray(q.options) && Number.isInteger(q.answer)) parts.push(String(q.options[q.answer]));
  else if (q.type === 'fill' && Array.isArray(q.answers)) for (const a of q.answers) parts.push(String(a));
  return parts.join(' ').replace(/<[^>]+>/g, '');
}
/** 答案里的坐标对（允许 "C(0, 3)" 这种带点名前缀的形式），返回 "a,b" 或 null */
function v15CoordAnswerOne(text) {
  const s = String(text).replace(/<[^>]+>/g, '').trim();
  const m = /^[A-Za-zα-ωΑ-Ω′₀-₉]?\s*[（(]\s*([-−–]?\d+(?:\.\d+)?)\s*[,，]\s*([-−–]?\d+(?:\.\d+)?)\s*[)）]$/.exec(s);
  if (!m) return null;
  const a = v15CanonNum(m[1]); const b = v15CanonNum(m[2]);
  return a !== null && b !== null ? a + ',' + b : null;
}
/** 某个 <text> 的内容是不是"就是这个数值"的裸标注（2.5 m / 30° / x=1 / 1/3 都算） */
function v15IsBareLabel(content, token) {
  const c = String(content).replace(/\u00a0/g, ' ').replace(/\s+/g, '');
  if (!c) return false;
  const unitless = c.replace(V15_UNIT_RE, '');
  const eq = /^[A-Za-zα-ωΑ-Ω′₀-₉]?=/.exec(unitless);
  const core = eq ? unitless.slice(eq[0].length) : unitless;
  const toks = v15Tokenize(core);
  if (toks.length !== 1 || toks[0].t !== token) return false;
  return toks[0].kind === 'frac' ? /^\d+\/\d+$/.test(core) : /^[-−–]?\d+(\.\d+)?$/.test(core);
}

function checkV15(entries) {
  let v15 = 0;
  let svgCount = 0;
  const warns15 = [];
  for (const { q } of entries) {
    const stem = typeof (q && q.stem) === 'string' ? q.stem : '';
    if (!SVG_RE.test(stem)) continue;
    svgCount++;
    const id = String(q && q.id);
    const texts = v15TextNodes(stem);
    const arias = v15AriaLabels(stem);

    // F：图上数字（两条通道）+ 每个数值的出处与出现次数（只数 <text>）
    const F = new Set();
    const textHits = new Map();
    const srcs = new Map(); // token -> ['text:"…"', 'aria:"…"']
    const note = (t, s) => { if (!srcs.has(t)) srcs.set(t, []); srcs.get(t).push(s); };
    for (const t of texts) for (const k of v15Tokenize(t)) {
      F.add(k.t);
      textHits.set(k.t, (textHits.get(k.t) || 0) + 1);
      note(k.t, 'text:' + JSON.stringify(t));
    }
    for (const a of arias) for (const k of v15Tokenize(a)) { F.add(k.t); note(k.t, 'aria:' + JSON.stringify(a)); }

    const S = v15TokenSet(v15StripSvg(stem));
    const E = [...F].filter((t) => !S.has(t));
    if (!E.length) continue;

    // 答案侧
    const ansPlain = v15AnswerText(q);
    const coordAns = v15CoordAnswerOne(ansPlain);
    const A = v15TokenSet(ansPlain);
    const hit = (t) => (coordAns ? false : A.has(t));
    const ariaHas = (t) => (srcs.get(t) || []).some((s) => s.startsWith('aria:'));

    let qFails = 0;
    if (coordAns) {
      // (c) 坐标型答案：整对比对，避免方格纸刻度 0..6 被误判成答案 (6,4)
      for (const src of [...texts, ...arias]) {
        if (v15CoordinatePairs(src).has(coordAns)) {
          fail('V15', id + ': 图上直接标出了答案坐标 (' + coordAns + ') — ' + JSON.stringify(src));
          qFails++; v15++;
          break;
        }
      }
    } else {
      for (const t of E) {
        if (!hit(t)) continue; // 不是答案数值
        const bare = texts.filter((c) => v15IsBareLabel(c, t));
        const hitsText = textHits.get(t) || 0;
        if (hitsText >= V15_REPEAT_TOLERANCE) continue; // 枚举数据（表格/树状图），下面走 WARN
        if (bare.length) {
          // (a) 裸标注
          fail('V15', id + ': 图上以裸标注写出答案数值 ' + t + '（题干未给）— ' + JSON.stringify(bare));
          qFails++; v15++;
        } else if (hitsText === 0 && ariaHas(t)) {
          // (b) 只有 aria-label 这一条通道
          fail('V15', id + ': aria-label 念出了答案数值 ' + t + '（题干未给，正文未写）— ' + JSON.stringify(arias));
          qFails++; v15++;
        }
      }
    }

    // WARN：图上多出来、但不是（或没被判定为）泄答案的数值 → 逐题一行，避免刷屏。
    // 注意：与答案同值但没 FAIL 的（枚举数据 / 整句说明）也在这里点名，方便人复核。
    if (!qFails) {
      const extra = E.slice();
      if (extra.length) {
        const detail = extra.map((t) => {
          if (!hit(t)) return t;
          const hitsText = textHits.get(t) || 0;
          const why = hitsText >= V15_REPEAT_TOLERANCE
            ? '与答案同值，但图上是图表枚举数据（<text> 里出现 ' + hitsText + ' 处）'
            : '与答案同值，但写在图内整句说明里（不是裸标注，且题干未写）';
          return t + '（' + why + '）';
        }).join('; ');
        warns15.push({ rule: 'V15', detail: id + ': 图上多出题干未给的数值 [' + detail + '] — ' + JSON.stringify(srcs.get(extra[0])) });
      }
    }
  }
  for (const w of warns15) warn(w.rule, w.detail);
  if (!v15) {
    pass('V15', svgCount + ' 道含图题：图上数字（<text> + aria-label）无一等于答案且题干未给（FAIL 0）；'
      + '另有 ' + warns15.length + ' 道题图上标注了题干未写的数值（WARN，多为可推出的中间量/枚举数据）');
  }
  return v15;
}

// ---------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------
function main() {
  const args = parseArgs(process.argv.slice(2));
  const profile = PROFILES[args.profile];

  if (args.only) return runOnly(args, profile);

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

  if (!sourceOk) return finish(args, null, 'build');
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

  // ---------- 分布统计（供 V5 / V6 / V14 共用） ----------
  const expectSlugs = Object.keys(profile.expect);
  const { stat, totalStat } = statsOf(entries, expectSlugs);
  const known = new Set(expectSlugs);
  for (const { slug } of entries) {
    if (!known.has(slug)) { fail('V6', slug + ': 不在 ' + profile.name + ' 期望表中（新增知识点请同步更新 profile 期望表）'); break; }
  }

  // ---------- V1–V5 ----------
  checkV1(entries);
  checkV2(entries);
  checkV3(entries);
  checkV4(entries);
  checkV5(entries, totalStat);

  // ---------- V6 分布 ----------
  let v6 = 0;
  for (const slug of expectSlugs) {
    const exp = profile.expect[slug];
    const s = stat.get(slug) || emptyStat();
    for (const k of profile.checkKeys) {
      if (s[k] !== exp[k]) { fail('V6', slug + '.' + k + '=' + s[k] + '，期望 ' + exp[k] + '（profile ' + profile.name + '）'); v6++; }
    }
    if (typeof exp.svgMin === 'number' && s.svg < exp.svgMin) { fail('V6', slug + '.svg=' + s.svg + '，期望 >= ' + exp.svgMin); v6++; }
  }
  for (const k of profile.checkKeys) {
    if (totalStat[k] !== profile.expectTotal[k]) { fail('V6', 'TOTAL.' + k + '=' + totalStat[k] + '，期望 ' + profile.expectTotal[k] + '（profile ' + profile.name + '）'); v6++; }
  }
  if (typeof profile.expectTotal.svgMin === 'number' && totalStat.svg < profile.expectTotal.svgMin) {
    fail('V6', 'TOTAL.svg=' + totalStat.svg + '，期望 >= ' + profile.expectTotal.svgMin); v6++;
  }
  if (!v6) {
    const parts = profile.checkKeys.map((k) => k + ' ' + totalStat[k]).join(' / ');
    // v4 不校验 single/fill 配比 → 只打印统计行
    pass('V6', '分布逐格匹配（profile ' + profile.name + '）：' + parts + ' / 含 SVG ' + totalStat.svg
      + ' ｜统计（不校验）：single ' + totalStat.single + ' / fill ' + totalStat.fill);
  }

  // ---------- V13 tags ----------
  checkV13(entries);

  // ---------- V14 综合题数量 ----------
  let v14 = 0;
  const comp = profile.composite;
  for (const slug of expectSlugs) {
    const c = (stat.get(slug) || emptyStat()).composite;
    if (c !== comp.perKp) { fail('V14', slug + '.composite=' + c + '，期望 ' + comp.perKp + '（profile ' + profile.name + '）'); v14++; }
  }
  if (totalStat.composite !== comp.total) { fail('V14', 'TOTAL.composite=' + totalStat.composite + '，期望 ' + comp.total + '（profile ' + profile.name + '）'); v14++; }
  if (!v14) pass('V14', '综合题数（tags 非空）逐 kp = ' + comp.perKp + '，全局 = ' + comp.total);

  // ---------- V15 图泄答案（<text> + aria-label 双通道） ----------
  checkV15(entries);

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
  const expectFileSlugs = QUESTION_FILES.map(kpSlugOf);
  if (!Array.isArray(kpsArr)) { fail('V8', 'data/' + KPS_FILE + ' 未导出数组 window.KPS'); v8++; }
  else {
    if (kpsArr.length !== expectFileSlugs.length) { fail('V8', 'KPS 项数=' + kpsArr.length + '，期望 ' + expectFileSlugs.length); v8++; }
    const gotIds = kpsArr.map((k) => k && k.id);
    for (const slug of expectFileSlugs) if (!gotIds.includes(slug)) { fail('V8', 'KPS 缺少知识点 id=' + slug); v8++; }
    for (const id of gotIds) if (!expectFileSlugs.includes(id)) { fail('V8', 'KPS 出现未知知识点 id=' + JSON.stringify(id)); v8++; }
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
  if (!v8) pass('V8', 'KPS 恰好 ' + expectFileSlugs.length + ' 项，id 集合与知识点 slug 完全一致，字段齐全');

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
  for (const slug of expectFileSlugs) {
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
  // 拼装规则（与 v2/v3 完全一致，**冻结**）：块注释 + window.KPS = [\n ... \n]; + 空行 + 题区注释 + window.QUESTIONS = [\n<body>,…\n];
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

  return finish(args, assembled, 'build');
}

// ---------------------------------------------------------------------------
// --only <slug>：单分片自检（并行写题库时用）
// 只校验目标分片的 V1–V5 / V13 / v4 进度 + 去重；其它分片读失败只 WARN；绝不写盘。
// ---------------------------------------------------------------------------
function runOnly(args, profile) {
  const root = args.root;
  const slug = args.only;
  const targetFile = 'q-' + slug + '.js';
  const allSlugs = QUESTION_FILES.map(kpSlugOf);

  if (!QUESTION_FILES.includes(targetFile)) {
    console.error('[FAIL] V0 --only 未知知识点 slug: ' + slug + '（可选 ' + allSlugs.join(' / ') + '）');
    process.exit(2);
  }

  // ---------- 目标分片 ----------
  let targetEntries = [];
  try {
    const src = fs.readFileSync(path.join(root, 'data', targetFile), 'utf8');
    const win = evalFile(src, 'data/' + targetFile);
    const arr = win && win.QUESTIONS;
    if (!Array.isArray(arr)) throw new Error('未导出数组 window.QUESTIONS');
    targetEntries = arr.map((q) => ({ q, file: targetFile, slug }));
    pass('V0', '目标分片 data/' + targetFile + ' 读取并执行成功（' + arr.length + ' 题）');
  } catch (e) {
    fail('V0', '目标分片 data/' + targetFile + ' 无法读取/执行 — ' + (e.code || e.message));
    return finish(args, null, 'only');
  }

  // ---------- 其它分片（并发写盘中，读失败只 WARN 跳过，不许崩） ----------
  const otherEntries = [];
  const skipped = [];
  for (const file of QUESTION_FILES) {
    if (file === targetFile) continue;
    try {
      const src = fs.readFileSync(path.join(root, 'data', file), 'utf8');
      const win = evalFile(src, 'data/' + file);
      const arr = win && win.QUESTIONS;
      if (!Array.isArray(arr)) throw new Error('未导出数组 window.QUESTIONS');
      for (const q of arr) otherEntries.push({ q, file, slug: kpSlugOf(file) });
    } catch (e) {
      skipped.push(file);
      warn('V0', '跳过不可读分片 data/' + file + '（' + (e.code || e.message) + '）—— 去重基线少一份，可能漏检跨分片重复');
    }
  }
  if (!skipped.length) pass('V0', '另外 ' + (QUESTION_FILES.length - 1) + ' 个分片读取成功，作为去重基线（共 ' + otherEntries.length + ' 题）');

  // ---------- 目标分片 V1–V5 ----------
  const { totalStat } = statsOf(targetEntries, [slug]);
  checkV1(targetEntries);
  checkV2(targetEntries);
  checkV3(targetEntries);
  checkV4(targetEntries);
  checkV5(targetEntries, totalStat);

  // ---------- V13 tags ----------
  checkV13(targetEntries);

  // ---------- V15 图泄答案（单分片也查，避免单人写题时漏） ----------
  checkV15(targetEntries);

  // ---------- v4 进度（不达标只 WARN） ----------
  const exp = V4_EXPECT[slug];
  const s = statsOf(targetEntries, [slug]).stat.get(slug) || emptyStat();
  const nums = [
    ['total', s.total, exp.total],
    ['basic', s.basic, exp.basic],
    ['medium', s.medium, exp.medium],
    ['hard', s.hard, exp.hard],
    ['composite', s.composite, V4_PROFILE_COMPOSITE],
    ['svg', s.svg, exp.svgMin],
  ];
  console.log('[PROGRESS] ' + slug + ' ' + nums.map(([k, got, want]) => k + ' ' + got + '/' + want).join(' '));
  for (const [k, got, want] of nums) {
    if (got < want) {
      if (k === 'composite') warn('V14', slug + '.composite=' + got + '/' + want + '（还差 ' + (want - got) + ' 道；--only 进度模式只 WARN）');
      else warn('V6', slug + '.' + k + '=' + got + '/' + want + '（还差 ' + (want - got) + '；--only 进度模式只 WARN）');
    } else if (got > want) {
      if (k === 'composite') warn('V14', slug + '.composite=' + got + '/' + want + ' 已超出 ' + (got - want) + ' 道（--only 进度模式只 WARN）');
      else warn('V6', slug + '.' + k + '=' + got + '/' + want + ' 已超出 ' + (got - want) + '（--only 进度模式只 WARN）');
    }
  }

  // ---------- 去重：目标分片内部 + 目标分片 vs 所有可读题 ----------
  const tn = targetEntries.map(({ q }) => ({ id: String(q.id), n: normStem(q.stem) }));
  const on = otherEntries.map(({ q }) => ({ id: String(q.id), n: normStem(q.stem) }));
  const pairs = [];
  for (let i = 0; i < tn.length; i++) {
    for (let j = i + 1; j < tn.length; j++) {
      const d = dice(tn[i].n, tn[j].n);
      if (d >= DEDUPE_LIST_FLOOR) pairs.push({ d, a: tn[i].id, b: tn[j].id });
    }
  }
  for (let i = 0; i < tn.length; i++) {
    for (let j = 0; j < on.length; j++) {
      const d = dice(tn[i].n, on[j].n);
      if (d >= DEDUPE_LIST_FLOOR) pairs.push({ d, a: tn[i].id, b: on[j].id });
    }
  }
  pairs.sort((x, y) => (y.d - x.d) || (x.a < y.a ? -1 : 1) || (x.b < y.b ? -1 : 1));
  lastPairs = pairs;
  const hardPairs = pairs.filter((p) => p.d >= DEDUPE_HARD);
  let v7 = 0;
  for (const p of hardPairs) { fail('V7', 'd=' + p.d.toFixed(4) + ' ' + p.a + ' ' + p.b + ' >= ' + DEDUPE_HARD + '（疑重复/伪新题）'); v7++; }
  if (!v7) {
    const top = pairs.length ? '；最高 d=' + pairs[0].d.toFixed(4) + '（' + pairs[0].a + ' vs ' + pairs[0].b + '）' : '；无 >= ' + DEDUPE_LIST_FLOOR + ' 的相似对';
    pass('V7', '去重（' + tn.length + ' 新题 × 内部两两 + vs ' + on.length + ' 已有题 = ' + (tn.length * (tn.length - 1) / 2 + tn.length * on.length) + ' 对）：>= ' + DEDUPE_HARD + ' 的对 ' + hardPairs.length + ' 个' + top);
  }
  for (const p of pairs) {
    if (p.d >= DEDUPE_HARD) continue;
    warn('V7', '[0.80,0.95) 相似对 d=' + p.d.toFixed(4) + ' ' + p.a + ' ' + p.b);
  }

  return finish(args, null, 'only');
}

// v4 每 kp 综合题目标（--only 进度用；与 PROFILES.v4.composite.perKp 同源）
const V4_PROFILE_COMPOSITE = PROFILES.v4.composite.perKp;

// ---------------------------------------------------------------------------
// 收尾：写盘 / 报告 / 退出码
// ---------------------------------------------------------------------------
function finish(args, assembled, mode) {
  if (fails.length) {
    console.log('BUILD FAILED (' + fails.length + ' errors)');
    process.exitCode = 1;
    return;
  }
  if (mode === 'only') {
    // --only **绝不写盘**：不写 data.js，也不写 dedupe-report.txt
    console.log('ONLY OK (' + args.only + ' 分片自检通过；未写任何文件)');
    process.exitCode = 0;
    return;
  }
  if (args.check) {
    pass('OUT', '--check 模式：校验通过，未写任何文件（data.js / dedupe-report.txt 均未改动）');
    console.log('BUILD OK');
    process.exitCode = 0;
    return;
  }

  const root = args.root;
  const dataPath = path.join(root, 'data.js');
  fs.writeFileSync(dataPath, assembled, 'utf8');
  const bytes = Buffer.byteLength(assembled, 'utf8');
  pass('OUT', 'data.js 已写入（' + bytes + ' bytes，profile ' + args.profile + '）');

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
