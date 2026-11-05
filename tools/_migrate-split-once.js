#!/usr/bin/env node
/**
 * tools/_migrate-split-once.js — 一次性迁移脚本（审计证据，**不参与 build**）
 *
 * 作用：把 v2 的单文件题库 data.js 机械切片成 v3 的按知识点多文件：
 *   data/kps.js
 *   data/q-quad-eq.js / q-quad-func.js / q-rotation.js
 *   data/q-circle.js  / q-similarity.js / q-probability.js
 *
 * 原理：**纯文本切片**，不重新序列化、不重排、不格式化任何题目内容。
 *      每个分片里保存的是 v2 原文里对应数组元素的原始字节区间。
 *      脚本末尾会做一次"重新拼装 == v2 原文"的逐字节自检，失败则 exit 1 且不落盘。
 *
 * 用法：
 *   node tools/_migrate-split-once.js                       # 默认读 ../02-app/data.js（见 DEFAULT_V2）
 *   node tools/_migrate-split-once.js --v2 <path/to/data.js>
 *   node tools/_migrate-split-once.js --dry-run             # 只打印计划，不写文件
 *
 * 只需要跑一次。迁移完成后本文件即冻结留存，防止有人"再跑一次把手工修订覆盖掉"。
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const DEFAULT_V2 = '/Users/jiduobin/.hermes/deliverables/grade9-math-workbench-v2/02-app/data.js';
const ROOT = path.resolve(__dirname, '..');

// ---------------------------------------------------------------------------
// 参数
// ---------------------------------------------------------------------------
function parseArgs(argv) {
  const out = { v2: DEFAULT_V2, dryRun: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--v2') out.v2 = path.resolve(argv[++i]);
    else if (a === '--dry-run') out.dryRun = true;
    else if (a === '--help' || a === '-h') { console.log('usage: node tools/_migrate-split-once.js [--v2 <file>] [--dry-run]'); process.exit(0); }
    else { console.error('unknown arg: ' + a); process.exit(2); }
  }
  return out;
}

// ---------------------------------------------------------------------------
// 花括号 / 字符串 / 注释 感知的顶层对象扫描器
// 返回 [{start, end}] —— 每个元素是顶层 `{ ... }` 的 [起, 止) 字符区间
// ---------------------------------------------------------------------------
function scanTopLevelObjects(src) {
  const objs = [];
  let depth = 0;
  let start = -1;
  let i = 0;
  const n = src.length;
  while (i < n) {
    const c = src[i];
    if (c === '/' && src[i + 1] === '*') { const j = src.indexOf('*/', i + 2); i = j < 0 ? n : j + 2; continue; }
    if (c === '/' && src[i + 1] === '/') { const j = src.indexOf('\n', i); i = j < 0 ? n : j + 1; continue; }
    if (c === "'" || c === '"' || c === '`') {
      const q = c;
      i++;
      while (i < n) {
        if (src[i] === '\\') { i += 2; continue; }
        if (src[i] === q) { i++; break; }
        i++;
      }
      continue;
    }
    if (c === '{') { if (depth === 0) start = i; depth++; }
    else if (c === '}') { depth--; if (depth === 0) objs.push({ start, end: i + 1 }); if (depth < 0) throw new Error('unbalanced } at ' + i); }
    i++;
  }
  if (depth !== 0) throw new Error('unbalanced braces, depth=' + depth);
  return objs;
}

// ---------------------------------------------------------------------------
// 切片：从 v2 原文里拿到 KPS 元素区 + 每题元素区 + 两条静态块注释
// ---------------------------------------------------------------------------
const KPS_MARKER = 'window.KPS = [';
const Q_MARKER = 'window.QUESTIONS = ';

function sliceSource(text) {
  const aKps = text.indexOf(KPS_MARKER);
  const aQ = text.indexOf(Q_MARKER);
  if (aKps < 0 || aQ < 0 || aQ < aKps) throw new Error('markers not found / out of order');
  if (text.indexOf(KPS_MARKER, aKps + 1) >= 0) throw new Error('KPS marker appears twice');
  if (text.indexOf(Q_MARKER, aQ + 1) >= 0) throw new Error('QUESTIONS marker appears twice');

  const header = text.slice(0, aKps);                     // `/* ===...*/\n\n`
  const kpsRegion = text.slice(aKps + KPS_MARKER.length, aQ);  // `\n ELEMS \n];\n\n<q comment>\n`
  const kpsClose = kpsRegion.lastIndexOf('];');
  if (kpsClose < 0) throw new Error('KPS closer not found');
  const kpsInner = kpsRegion.slice(0, kpsClose);
  const middle = kpsRegion.slice(kpsClose + 2);            // `\n\n<q comment>\n`
  const qComment = middle.replace(/^\n+/, '');            // `<q comment>\n`
  const qRaw = text.slice(aQ + Q_MARKER.length);          // `[\n ... ,\n];`

  if (!qRaw.startsWith('[\n')) throw new Error('QUESTIONS array must start with "[\\n"');
  if (!qRaw.endsWith('];')) throw new Error('QUESTIONS array must end with "];"');
  const qInner = qRaw.slice(1, qRaw.length - 2);          // `\n ... ,\n`
  if (!qInner.startsWith('\n')) throw new Error('qInner must start with newline');
  if (!qInner.endsWith('\n')) throw new Error('qInner must end with newline');

  // KPS 元素区：`\n  {..},\n  {..}\n` -> `  {..},\n  {..}`
  const kpsObjs = scanTopLevelObjects(kpsInner);
  const kpsBody = kpsInner.slice(1, kpsInner.length - 1);
  if (!kpsBody.startsWith('  {') || !kpsBody.endsWith('}')) throw new Error('unexpected KPS body shape');

  const qObjs = scanTopLevelObjects(qInner);
  if (!qObjs.length) throw new Error('no question objects found');

  // 分隔片：元素之间只允许 `,` + 空白 + 可选一段注释
  const gaps = [];
  for (let i = 0; i < qObjs.length - 1; i++) {
    const g = qInner.slice(qObjs[i].end, qObjs[i + 1].start);
    if (!/^,\s*(\/\*[\s\S]*?\*\/\s*)?$/.test(g)) throw new Error('unexpected gap between objects: ' + JSON.stringify(g));
    gaps.push(g);
  }
  const head = qInner.slice(0, qObjs[0].start); // `\n  /* ===== ... ===== */\n  `
  const tail = qInner.slice(qObjs[qObjs.length - 1].end); // `,\n`
  if (!/^\n\s*(\/\*[\s\S]*?\*\/\s*)?$/.test(head)) throw new Error('unexpected head: ' + JSON.stringify(head));
  if (!/^,\n$/.test(tail)) throw new Error('unexpected tail: ' + JSON.stringify(tail));

  return { header, middle, qComment, kpsBody, kpsObjs, qObjs, qInner, head, gaps };
}

// ---------------------------------------------------------------------------
// 分组：按元素自身的 kp 字段分组，并校验同 kp 元素连续、顺序正确
// ---------------------------------------------------------------------------
function groupByKp(ctx, qInner, qObjs) {
  const kpOrder = ctx.window.KPS.map((k) => k.id);
  const groups = new Map();
  kpOrder.forEach((id) => groups.set(id, []));
  const seq = []; // 按出现顺序记录 kp，用于连续性校验
  for (const o of qObjs) {
    const txt = qInner.slice(o.start, o.end);
    const m = /\n\s*kp:\s*'([^']+)',/.exec(txt);
    if (!m) throw new Error('object without kp field: ' + txt.slice(0, 60));
    const kp = m[1];
    if (!groups.has(kp)) throw new Error('unknown kp: ' + kp);
    groups.get(kp).push(o);
    if (!seq.length || seq[seq.length - 1] !== kp) seq.push(kp);
  }
  // 每个 kp 必须严格只出现一段
  if (new Set(seq).size !== seq.length) throw new Error('kp blocks are not contiguous: ' + seq.join(','));
  if (seq.length !== kpOrder.length) throw new Error('expected ' + kpOrder.length + ' kp blocks, got ' + seq.length);
  seq.forEach((kp, i) => { if (kp !== kpOrder[i]) throw new Error('kp block order mismatch at ' + i + ': ' + kp + ' != ' + kpOrder[i]); });
  return { kpOrder, groups };
}

// ---------------------------------------------------------------------------
// 为每个 kp 计算「分片正文」：从前置段注释的行首，到该 kp 最后一个元素的 `}`
// ---------------------------------------------------------------------------
function buildBlocks(qInner, qObjs, kpOrder, groups) {
  const blocks = new Map();
  let prevEnd = 1; // qInner 第 0 个字符是 '\n'，正文从 1 开始
  for (const kp of kpOrder) {
    const objs = groups.get(kp);
    if (!objs.length) throw new Error('empty kp group: ' + kp);
    // 该组第一个元素所在的 kp 段必须紧跟在上一个 kp 之后（连续性已由 seq 保证）
    const gapStart = prevEnd;
    const gap = qInner.slice(gapStart, objs[0].start);
    let start;
    const cIdx = gap.lastIndexOf('/*');
    if (cIdx >= 0) {
      const abs = gapStart + cIdx;
      start = qInner.lastIndexOf('\n', abs) + 1; // 注释所在行的行首（含缩进）
    } else {
      start = objs[0].start;
    }
    const end = objs[objs.length - 1].end;
    blocks.set(kp, qInner.slice(start, end));
    prevEnd = end;
  }
  return blocks;
}

// ---------------------------------------------------------------------------
// 文件头注释（不进产物，纯人读）
// ---------------------------------------------------------------------------
function headerFor(kpName, kpSlug, count) {
  return [
    '/* =============================================================',
    ' * data/q-' + kpSlug + '.js — ' + kpName + '（' + kpSlug + '）题库分片，共 ' + count + ' 题',
    ' * 仅开发期文件：由 tools/build-data.js 合并进部署产物 data.js',
    ' * marker 之前的本段注释不参与构建，数组元素文本必须逐字节原样保留',
    ' * 加题后请执行：node tools/build-data.js',
    ' * ============================================================= */',
  ].join('\n');
}

const KPS_HEADER = [
  '/* =============================================================',
  ' * data/kps.js — 6 个知识点的讲解数据（KPS）',
  ' * 仅开发期文件：由 tools/build-data.js 合并进部署产物 data.js',
  ' * marker 之前的本段注释不参与构建，数组元素文本必须逐字节原样保留',
  ' * 加题/改讲解后请执行：node tools/build-data.js',
  ' * ============================================================= */',
].join('\n');

const Q_MARKER_LINE = 'window.QUESTIONS = (window.QUESTIONS || []).concat([';

// ---------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------
function main() {
  const args = parseArgs(process.argv.slice(2));
  const text = fs.readFileSync(args.v2, 'utf8');
  console.log('source: ' + args.v2 + '  (' + Buffer.byteLength(text, 'utf8') + ' bytes, ' + text.length + ' chars)');

  const ctx = { window: {} };
  vm.runInNewContext(text, ctx);
  const KPS = ctx.window.KPS;
  const QS = ctx.window.QUESTIONS;
  console.log('evaluated: ' + KPS.length + ' kps, ' + QS.length + ' questions');

  const s = sliceSource(text);
  const { kpOrder, groups } = groupByKp(ctx, s.qInner, s.qObjs);
  const blocks = buildBlocks(s.qInner, s.qObjs, kpOrder, groups);

  // ---- 逐字节回拼自检 ----
  const reassembled =
    s.header +
    KPS_MARKER + '\n' + s.kpsBody + '\n];' +
    s.middle +
    Q_MARKER + '[\n' +
    kpOrder.map((kp) => blocks.get(kp) + ',').join('\n') +
    '\n];';
  if (reassembled !== text) {
    let i = 0;
    while (i < reassembled.length && i < text.length && reassembled[i] === text[i]) i++;
    console.error('FATAL: reassembly mismatch at char ' + i);
    console.error('  expected: ' + JSON.stringify(text.slice(Math.max(0, i - 40), i + 40)));
    console.error('  actual  : ' + JSON.stringify(reassembled.slice(Math.max(0, i - 40), i + 40)));
    process.exit(1);
  }
  console.log('self-check: reassembled text is byte-identical to source ✓');

  // ---- 生成待写文件 ----
  const out = [];
  out.push({
    file: path.join('data', 'kps.js'),
    body: KPS_HEADER + '\n\n' + KPS_MARKER + '\n' + s.kpsBody + '\n];\n',
    desc: 'kps.js (' + KPS.length + ' kps, ' + Buffer.byteLength(s.kpsBody, 'utf8') + ' bytes body)',
  });
  for (const kp of kpOrder) {
    const kpName = KPS.find((k) => k.id === kp).name;
    const body = blocks.get(kp);
    out.push({
      file: path.join('data', 'q-' + kp + '.js'),
      body: headerFor(kpName, kp, groups.get(kp).length) + '\n\n' + Q_MARKER_LINE + '\n' + body + '\n]);\n',
      desc: 'q-' + kp + '.js (' + groups.get(kp).length + ' questions, ' + Buffer.byteLength(body, 'utf8') + ' bytes body)',
    });
  }

  for (const o of out) {
    const abs = path.join(ROOT, o.file);
    console.log((args.dryRun ? '[dry-run] ' : 'write    ') + o.file + ' — ' + o.desc);
    if (!args.dryRun) {
      fs.mkdirSync(path.dirname(abs), { recursive: true });
      fs.writeFileSync(abs, o.body, 'utf8');
    }
  }

  // ---- 落盘后复验：把写出的分片按 build 的规则拼回去，必须等于 v2 ----
  if (!args.dryRun) {
    const readBack = (rel) => fs.readFileSync(path.join(ROOT, rel), 'utf8');
    const extract = (src, marker, closer) => {
      const i = src.indexOf(marker);
      if (i < 0) throw new Error('marker missing in ' + marker);
      let b = src.slice(i + marker.length);
      if (b.startsWith('\n')) b = b.slice(1);
      b = b.replace(/\s+$/, '');
      if (!b.endsWith(closer)) throw new Error('closer missing');
      b = b.slice(0, b.length - closer.length);
      if (b.endsWith('\n')) b = b.slice(0, -1);
      return b;
    };
    const kpsBody2 = extract(readBack('data/kps.js'), KPS_MARKER, '];');
    const qBlocks = kpOrder.map((kp) => extract(readBack(path.join('data', 'q-' + kp + '.js')), Q_MARKER_LINE, ']);'));
    const rebuilt = s.header + KPS_MARKER + '\n' + kpsBody2 + '\n];' + s.middle + Q_MARKER + '[\n' +
      qBlocks.map((b) => b + ',').join('\n') + '\n];';
    if (rebuilt !== text) { console.error('FATAL: read-back reassembly mismatch'); process.exit(1); }
    console.log('read-back check: files on disk reassemble to source byte-identically ✓');
  }

  console.log('done.');
}

main();
