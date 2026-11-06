/* =============================================================
 * app.js — 九年级数学学习工作台 · 应用逻辑与视图（零依赖）
 * 依赖：data.js（window.KPS / window.QUESTIONS）先加载
 * 硬约束：无 ES module、无 fetch、无网络请求；双击 index.html 即可用
 * 逻辑层（存储 / 归一化 / 判分 / 错题本 / 统计）通过 window.MathWorkbench
 * 暴露，便于 node 侧真跑自测（见 selftest.js / SELFTEST.md）
 * ============================================================= */
(function (G) {
  'use strict';

  /* ---------------- 常量 ---------------- */

  var KEYS = {
    errors: 'g9math.errors.v1',
    sessions: 'g9math.sessions.v1',
    settings: 'g9math.settings.v1'
  };
  var MAX_SESSIONS = 200;
  /* 每知识点题数 / 题库总题数：按 data.js 实际内容动态取（v4 起每 kp 50 题、共 300 题），
   * 硬编码兜底值（50 / 300）仅在 data.js 未加载的极端情形生效 */
  var KP_TOTAL = (function () {
    var qs = (G.QUESTIONS || []), c = {}, m = 0;
    for (var i = 0; i < qs.length; i++) c[qs[i].kp] = (c[qs[i].kp] || 0) + 1;
    for (var k in c) if (Object.prototype.hasOwnProperty.call(c, k) && c[k] > m) m = c[k];
    return m || 50;
  })();
  var Q_TOTAL = (G.QUESTIONS || []).length || 300;
  /* 题量档位：按实际题库动态生成 —— 去重、升序、只保留 <= KP_TOTAL 的档位。
   * KP_TOTAL >= 50 → [3,6,12,25,50]；KP_TOTAL == 12（旧题库）→ [3,6,12]（行为与改造前一致）。
   * 设置校验与档位 chip 渲染共用这一份计算结果，避免出现第二份硬编码列表。 */
  var COUNT_TIERS = (function () {
    var raw = [3, 6, 12, 25, KP_TOTAL], out = [];
    raw.sort(function (a, b) { return a - b; });
    for (var i = 0; i < raw.length; i++) {
      var n = raw[i];
      if (!(n > 0) || n > KP_TOTAL) continue;
      if (out.indexOf(n) < 0) out.push(n);
    }
    return out;
  })();
  function isCountTier(n) {
    return typeof n === 'number' && COUNT_TIERS.indexOf(n) >= 0;
  }
  var DIFF_LABEL = { basic: '基础', medium: '提高', hard: '挑战' };
  var DIFF_ORDER = ['basic', 'medium', 'hard'];

  /* ---------------- 存储层（localStorage 不可用时降级） ---------------- */

  function ls() {
    try {
      if (typeof localStorage !== 'undefined' && localStorage) return localStorage;
    } catch (e) { /* 隐私模式下访问可能抛错 */ }
    return null;
  }

  var storageAvailable = (function () {
    var s = ls();
    if (!s) return false;
    try {
      var probe = '__g9math_probe__';
      s.setItem(probe, '1');
      s.removeItem(probe);
      return true;
    } catch (e) { return false; }
  })();

  function readJSON(key, fallback) {
    var s = ls();
    if (!s) return fallback;
    try {
      var raw = s.getItem(key);
      if (raw === null || raw === undefined || raw === '') return fallback;
      var v = JSON.parse(raw);
      return (v === null || v === undefined) ? fallback : v;
    } catch (e) {
      return fallback; // 解析失败视为空数据，不阻断渲染
    }
  }

  function writeJSON(key, value) {
    var s = ls();
    if (!s) return false;
    try {
      s.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) { return false; }
  }

  function getErrorRecords() {
    var v = readJSON(KEYS.errors, null);
    if (!v || typeof v !== 'object' || !v.records || typeof v.records !== 'object') {
      return {};
    }
    return v.records;
  }

  function saveErrorRecords(records) {
    return writeJSON(KEYS.errors, { version: 1, records: records });
  }

  function getSessions() {
    var v = readJSON(KEYS.sessions, null);
    if (!v || typeof v !== 'object' || !Array.isArray(v.records)) return [];
    return v.records;
  }

  function appendSession(rec) {
    var arr = getSessions();
    arr.push(rec);
    if (arr.length > MAX_SESSIONS) arr = arr.slice(arr.length - MAX_SESSIONS);
    writeJSON(KEYS.sessions, { version: 1, records: arr });
    return rec;
  }

  function getSettings() {
    var v = readJSON(KEYS.settings, null);
    var base = { version: 1, lastKp: 'quad-eq', lastDifficulty: 'all', lastCount: 6 };
    if (!v || typeof v !== 'object') return base;
    var kpOk = false;
    var qs = (G.QUESTIONS || []);
    for (var i = 0; i < qs.length; i++) if (qs[i].kp === v.lastKp) { kpOk = true; break; }
    var dOk = ['all', 'basic', 'medium', 'hard'].indexOf(v.lastDifficulty) >= 0;
    var cOk = isCountTier(v.lastCount);
    return {
      version: 1,
      lastKp: kpOk ? v.lastKp : base.lastKp,
      lastDifficulty: dOk ? v.lastDifficulty : base.lastDifficulty,
      lastCount: cOk ? v.lastCount : base.lastCount
    };
  }

  function saveSettings(patch) {
    var cur = getSettings();
    var next = {
      version: 1,
      lastKp: patch.lastKp !== undefined ? patch.lastKp : cur.lastKp,
      lastDifficulty: patch.lastDifficulty !== undefined ? patch.lastDifficulty : cur.lastDifficulty,
      lastCount: patch.lastCount !== undefined ? patch.lastCount : cur.lastCount
    };
    writeJSON(KEYS.settings, next);
    return next;
  }

  /* ---------------- 题库索引 ---------------- */

  function allQuestions() { return G.QUESTIONS || []; }
  function allKps() { return G.KPS || []; }

  function questionMap() {
    var m = {};
    var qs = allQuestions();
    for (var i = 0; i < qs.length; i++) m[qs[i].id] = qs[i];
    return m;
  }

  function kpName(id) {
    var kps = allKps();
    for (var i = 0; i < kps.length; i++) if (kps[i].id === id) return kps[i].name;
    return id;
  }

  /* ---------------- 归一化与判分（PRD §5.2 / §5.3） ---------------- */

  // 返回归一化字符串；输入为空（trim 后）返回 ''
  function normFill(raw) {
    var s = String(raw === null || raw === undefined ? '' : raw);
    if (s.trim() === '') return '';
    var out = '';
    for (var i = 0; i < s.length; i++) {
      var c = s.charCodeAt(i);
      if (c >= 0xFF01 && c <= 0xFF5E) out += String.fromCharCode(c - 0xFEE0); // 全角→半角
      else if (c === 0x3000) out += ' ';                                      // 全角空格
      else out += s.charAt(i);
    }
    out = out.replace(/[\s\u00A0]+/g, '');                                    // 删除所有空白
    out = out
      .replace(/，/g, ',')
      .replace(/；/g, ';')
      .replace(/：/g, ':')
      .replace(/。/g, '.')
      .replace(/（/g, '(')
      .replace(/）/g, ')')
      .replace(/[\uFF0D\u2014\u2212]/g, '-');                                 // － — − → -
    out = out.replace(/[.;]+$/, '');                                          // 删除结尾的 . 和 ;
    return out.toLowerCase();
  }

  var NUM_RE = /^[+-]?(?:\d+(?:\.\d+)?|\.\d+)$/;

  function reduce(n, d) {
    if (d < 0) { d = -d; n = -n; }
    var a = Math.abs(n), b = d;
    while (b) { var t = a % b; a = b; b = t; }
    var g = a || 1;
    return { n: n / g, d: d / g };
  }

  function parseDecimal(str) {
    if (!NUM_RE.test(str)) return null;
    var sign = 1;
    if (str.charAt(0) === '+') str = str.slice(1);
    else if (str.charAt(0) === '-') { sign = -1; str = str.slice(1); }
    if (str === '') return null;
    var parts = str.split('.');
    var ip = parts[0] === '' ? '0' : parts[0];
    var fp = parts.length > 1 ? parts[1] : '';
    if (!/^\d+$/.test(ip)) return null;
    if (fp !== '' && !/^\d+$/.test(fp)) return null;
    var denom = Math.pow(10, fp.length);
    var numer = parseInt(ip + fp, 10);
    if (!isFinite(numer) || !isFinite(denom)) return null;
    return reduce(sign * numer, denom);
  }

  // 归一化字符串 → 有理数 {n, d}；不可解析返回 null（π/√/字母/单位 → null）
  function parseRational(s) {
    if (typeof s !== 'string' || s === '') return null;
    var t = s, percent = false;
    if (t.charAt(t.length - 1) === '%') { percent = true; t = t.slice(0, -1); }
    var fr;
    var slash = t.split('/');
    if (slash.length === 1) {
      fr = parseDecimal(t);
      if (!fr) return null;
    } else if (slash.length === 2) {
      if (!/^[+-]?\d+$/.test(slash[0]) || !/^[+-]?\d+$/.test(slash[1])) return null;
      var a = parseInt(slash[0], 10), b = parseInt(slash[1], 10);
      if (b === 0) return null;
      fr = reduce(a, b);
    } else {
      return null;
    }
    if (percent) fr = reduce(fr.n, fr.d * 100);
    return fr;
  }

  // 判分：返回 { skipped, correct, normalized }
  function judge(q, raw) {
    if (!q) return { skipped: true, correct: false, normalized: '' };
    if (q.type === 'single') {
      var filled = !(raw === null || raw === undefined || String(raw) === '');
      if (!filled) return { skipped: true, correct: false, normalized: '' };
      return {
        skipped: false,
        correct: String(raw) === String(q.answer),
        normalized: String(raw)
      };
    }
    var norm = normFill(raw);
    if (norm === '') return { skipped: true, correct: false, normalized: '' };
    var i, ans = q.answers || [];
    for (i = 0; i < ans.length; i++) {
      if (norm === normFill(ans[i])) return { skipped: false, correct: true, normalized: norm };
    }
    var u = parseRational(norm);
    if (u) {
      for (i = 0; i < ans.length; i++) {
        var v = parseRational(normFill(ans[i]));
        if (v && u.n * v.d === v.n * u.d) return { skipped: false, correct: true, normalized: norm };
      }
    }
    return { skipped: false, correct: false, normalized: norm };
  }

  // 正确答案的可读文本（解析 / 结果页展示用）
  function answerText(q) {
    if (!q) return '—';
    if (q.type === 'single') {
      var idx = Number(q.answer);
      if (!(idx >= 0 && idx <= 3) || !q.options || q.options[idx] === undefined) return '—';
      return 'ABCD'.charAt(idx) + '. ' + String(q.options[idx]);
    }
    return (q.answers || []).join(' 或 ');
  }

  /* ---------------- 错题本写入规则（PRD §5.4） ---------------- */

  function recordAttempt(q, rawInput, result, now) {
    var records = getErrorRecords();
    var rec = records[q.id];
    var t = typeof now === 'number' ? now : Date.now();

    if (result.correct) {
      if (!rec) return null;                       // 答对且不在错题本 → 什么都不做
      if (!rec.mastered) {
        rec.mastered = true;                       // 答对且未攻克 → 标记已攻克（不删除）
        rec.masteredAt = t;
      }
      rec.lastRightAt = t;
      records[q.id] = rec;
      saveErrorRecords(records);
      return rec;
    }

    if (result.skipped) return rec || null;        // 空作答：不写错题本

    if (!rec) {
      rec = {
        qid: q.id,
        kp: q.kp,
        firstWrongAt: t,
        lastWrongAt: t,
        wrongCount: 1,
        lastInput: String(rawInput === undefined || rawInput === null ? '' : rawInput),
        mastered: false,
        masteredAt: null,
        lastRightAt: null
      };
    } else {
      rec.lastWrongAt = t;
      rec.wrongCount = (rec.wrongCount || 0) + 1;
      rec.lastInput = String(rawInput === undefined || rawInput === null ? '' : rawInput);
      if (rec.mastered) { rec.mastered = false; rec.masteredAt = null; }
    }
    records[q.id] = rec;
    saveErrorRecords(records);
    return rec;
  }

  function removeError(qid) {
    var records = getErrorRecords();
    if (!records[qid]) return false;
    delete records[qid];
    saveErrorRecords(records);
    return true;
  }

  function restoreError(rec) {
    if (!rec || !rec.qid) return false;
    var records = getErrorRecords();
    records[rec.qid] = rec;
    saveErrorRecords(records);
    return true;
  }

  function clearErrors() {
    saveErrorRecords({});
  }

  function clearAllData() {
    var s = ls();
    if (s) {
      try {
        s.removeItem(KEYS.errors);
        s.removeItem(KEYS.sessions);
        s.removeItem(KEYS.settings);
      } catch (e) { /* ignore */ }
    }
  }

  /* ---------------- 统计聚合（PRD §4.6 / §6.4） ---------------- */

  function kpList() { return allKps().map(function (k) { return k.id; }); }

  function computeKpAggregate(kpId, opts) {
    var sessions = (opts && opts.sessions) || getSessions();
    var records = (opts && opts.errors) || getErrorRecords();
    var qmap = questionMap();

    var totalAttempts = 0, correctAttempts = 0, lastPracticedAt = null;
    var doneSet = {};
    for (var i = 0; i < sessions.length; i++) {
      var s = sessions[i];
      var ids = s.questionIds || [];
      var touched = false;
      for (var j = 0; j < ids.length; j++) {
        var qid = ids[j];
        var q = qmap[qid];
        if (!q) continue;                          // 题库中已不存在的 id → 跳过
        if (q.kp !== kpId) continue;
        touched = true;
        totalAttempts += 1;
        if (s.correct && s.correct[qid] === true) correctAttempts += 1;
        doneSet[qid] = true;
      }
      if (touched && typeof s.finishedAt === 'number') {
        if (lastPracticedAt === null || s.finishedAt > lastPracticedAt) lastPracticedAt = s.finishedAt;
      }
    }

    var distinctDone = Object.keys(doneSet).length;
    var coverage = Math.min(distinctDone / KP_TOTAL, 1);

    var errorOpen = 0, errorTotal = 0;
    for (var key in records) {
      if (!Object.prototype.hasOwnProperty.call(records, key)) continue;
      var r = records[key];
      if (!r || r.kp !== kpId) continue;
      errorTotal += 1;
      if (r.mastered !== true) errorOpen += 1;
    }

    var accuracy = totalAttempts === 0 ? null : correctAttempts / totalAttempts;
    var mastery = 0;
    if (totalAttempts > 0) {
      var errorRate = Math.min(errorOpen / KP_TOTAL, 1);
      mastery = 0.5 * (accuracy || 0) + 0.4 * coverage + 0.1 * (1 - errorRate);
      if (mastery < 0) mastery = 0;
      if (mastery > 1) mastery = 1;
    }

    return {
      kp: kpId,
      totalAttempts: totalAttempts,
      correctAttempts: correctAttempts,
      accuracy: accuracy,
      distinctDone: distinctDone,
      coverage: coverage,
      errorOpen: errorOpen,
      errorTotal: errorTotal,
      lastPracticedAt: lastPracticedAt,
      mastery: mastery
    };
  }

  function computeAggregateAll() {
    var sessions = getSessions();
    var records = getErrorRecords();
    var kps = kpList();
    var rows = kps.map(function (id) {
      return computeKpAggregate(id, { sessions: sessions, errors: records });
    });
    var totalAttempts = 0, correctAttempts = 0, distinct = {}, errorOpen = 0, errorTotal = 0;
    rows.forEach(function (r) {
      totalAttempts += r.totalAttempts;
      correctAttempts += r.correctAttempts;
      errorOpen += r.errorOpen;
      errorTotal += r.errorTotal;
    });
    var qmap = questionMap();
    for (var i = 0; i < sessions.length; i++) {
      var ids = sessions[i].questionIds || [];
      for (var j = 0; j < ids.length; j++) {
        if (qmap[ids[j]]) distinct[ids[j]] = true;
      }
    }
    var distinctAll = Object.keys(distinct).length;
    var masterySum = rows.reduce(function (a, r) { return a + r.mastery; }, 0);

    return {
      kp: '__all',
      totalAttempts: totalAttempts,
      correctAttempts: correctAttempts,
      accuracy: totalAttempts === 0 ? null : correctAttempts / totalAttempts,
      distinctDone: distinctAll,
      coverage: Math.min(distinctAll / Q_TOTAL, 1),
      errorOpen: errorOpen,
      errorTotal: errorTotal,
      lastPracticedAt: null,
      mastery: rows.length ? masterySum / rows.length : 0,   // 6 个 kp 掌握度的算术平均
      rows: rows
    };
  }

  function masteryLevel(m) {
    if (m < 0.6) return '薄弱';
    if (m < 0.85) return '一般';
    return '熟练';
  }

  /* ---------------- 抽题（PRD §3.2 P1/P2） ---------------- */

  function pickQuestions(kpId, difficulty, count, rnd) {
    var qs = allQuestions().filter(function (q) {
      if (q.kp !== kpId) return false;
      if (difficulty && difficulty !== 'all' && q.difficulty !== difficulty) return false;
      return true;
    });
    var pool = qs.slice();
    var rand = typeof rnd === 'function' ? rnd : Math.random;
    for (var i = pool.length - 1; i > 0; i--) {           // Fisher–Yates
      var k = Math.floor(rand() * (i + 1));
      var tmp = pool[i]; pool[i] = pool[k]; pool[k] = tmp;
    }
    var n = Math.max(1, Math.min(Number(count) || pool.length, pool.length));
    return { ids: pool.slice(0, n).map(function (q) { return q.id; }), poolSize: pool.length, wanted: Number(count) || 0 };
  }

  /* ---------------- 一次练习（内存态，刷新即丢弃，PRD §6.1） ---------------- */

  var run = null;

  function newSessionId(now) {
    var t = typeof now === 'number' ? now : Date.now();
    var rnd = Math.floor(Math.random() * 10000);
    var pad = '0000' + rnd;
    return 's-' + t + '-' + pad.slice(-4);
  }

  function startRun(qids, meta) {
    if (!qids || !qids.length) return null;
    var t = (meta && typeof meta.startedAt === 'number') ? meta.startedAt : Date.now();
    run = {
      qids: qids.slice(),
      i: 0,
      answers: {},
      verdict: {},
      startedAt: t,
      kp: meta && meta.kp ? meta.kp : null,
      difficulty: meta && meta.difficulty ? meta.difficulty : null,
      source: (meta && meta.source) || 'config',
      wantCount: (meta && typeof meta.count === 'number') ? meta.count : null
    };
    return run;
  }

  function getRun() { return run; }
  function dropRun() { run = null; }

  function runIndex() { return run ? run.i : 0; }
  function runCurrent() { return run ? run.qids[run.i] : null; }
  function isLocked(qid) { return !!(run && Object.prototype.hasOwnProperty.call(run.verdict, qid)); }

  // 在卷内提交一题；返回判分结果或 {error:'EMPTY_SINGLE'} 等
  function submitInRun(qid, rawInput, now) {
    if (!run) return { error: 'NO_RUN' };
    if (isLocked(qid)) return { error: 'LOCKED' };
    var q = questionMap()[qid];
    if (!q) return { error: 'NO_QUESTION' };
    if (q.type === 'single' && (rawInput === null || rawInput === undefined || String(rawInput) === '')) {
      return { error: 'EMPTY_SINGLE' };            // 未选择不允许提交，不产生作答记录
    }
    var result = judge(q, rawInput);
    var t = typeof now === 'number' ? now : Date.now();
    if (!result.skipped) run.answers[qid] = String(rawInput);
    run.verdict[qid] = result;
    recordAttempt(q, rawInput, result, t);
    return result;
  }

  function buildSessionRecord(finishedAt) {
    if (!run) return null;
    var finished = typeof finishedAt === 'number' ? finishedAt : Date.now();
    var correct = {}, answers = {}, score = 0;
    for (var i = 0; i < run.qids.length; i++) {
      var qid = run.qids[i];
      var v = run.verdict[qid];
      var ok = !!(v && v.correct === true);
      correct[qid] = ok;
      if (ok) score += 1;
      if (Object.prototype.hasOwnProperty.call(run.answers, qid)) answers[qid] = run.answers[qid];
    }
    var duration = finished - run.startedAt;
    if (duration < 0) duration = 0;
    return {
      id: newSessionId(finished),
      startedAt: run.startedAt,
      finishedAt: finished,
      durationMs: duration,
      kp: run.kp,
      difficulty: run.difficulty === 'all' ? null : (run.difficulty || null),
      questionIds: run.qids.slice(),
      answers: answers,
      correct: correct,
      score: score,
      total: run.qids.length
    };
  }

  function finishRun(finishedAt) {
    if (!run) return null;
    var rec = buildSessionRecord(finishedAt);
    appendSession(rec);
    if (run.source === 'config') {                 // 只记住「配置页发起的练习」这套配置
      var cur = getSettings();
      var want = (run.wantCount === 3 || run.wantCount === 6) ? run.wantCount : cur.lastCount;
      saveSettings({
        lastKp: run.kp || cur.lastKp,
        lastDifficulty: run.difficulty || 'all',
        lastCount: want
      });
    }
    run = null;
    return rec;
  }

  function getSessionById(id) {
    var arr = getSessions();
    for (var i = 0; i < arr.length; i++) if (arr[i].id === id) return arr[i];
    return null;
  }

  /* =============================================================
   * 以下是视图层（只在浏览器环境运行）
   * ============================================================= */

  var state = {
    cfg: null,             // 练习配置（内存）
    errFilter: { status: 'all', kp: 'all' },
    undo: null,            // { rec, timer, rowEl }
    toastTimer: null
  };

  function esc(s) {
    return String(s === null || s === undefined ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function pct(x) {
    if (x === null || x === undefined || isNaN(x)) return '—';
    return Math.round(x * 100) + '%';
  }

  function fmtDuration(ms) {
    var s = Math.max(0, Math.round(ms / 1000));
    var m = Math.floor(s / 60);
    var r = s % 60;
    if (m === 0) return r + ' 秒';
    return m + ' 分 ' + (r < 10 ? '0' + r : r) + ' 秒';
  }

  function fmtTime(ts) {
    if (!ts) return '—';
    var d = new Date(ts);
    var p2 = function (n) { return n < 10 ? '0' + n : '' + n; };
    return (d.getMonth() + 1) + '-' + p2(d.getDate()) + ' ' + p2(d.getHours()) + ':' + p2(d.getMinutes());
  }

  function $(id) { return document.getElementById(id); }

  /* ---------------- 路由 ---------------- */

  function parseHash() {
    var h = String(location.hash || '').replace(/^#/, '');
    if (h === '' || h === '/') return { name: 'kp', params: [] };
    var parts = h.split('/').filter(function (p) { return p !== ''; });
    if (!parts.length) return { name: 'kp', params: [] };
    if (parts[0] === 'kp') return { name: parts[1] ? 'kpDetail' : 'kp', params: parts.slice(1) };
    if (parts[0] === 'practice') {
      if (!parts[1]) return { name: 'practice', params: [] };
      if (parts[1] === 'run') return { name: 'run', params: [] };
      if (parts[1] === 'result') return { name: 'result', params: parts.slice(2) };
    }
    if (parts[0] === 'errors') return { name: 'errors', params: [] };
    if (parts[0] === 'stats') return { name: 'stats', params: [] };
    return { name: 'kp', params: [] };
  }

  function navigate(hash) {
    if (location.hash === hash) render();
    else location.hash = hash;
  }

  var TITLES = {
    kp: '知识点',
    kpDetail: '知识点讲解',
    practice: '练习',
    run: '答题',
    result: '练习结果',
    errors: '错题本',
    stats: '统计'
  };

  function render() {
    var route = parseHash();
    var view = $('view');
    if (!view) return;

    if (route.name === 'run' && !getRun()) {      // 中途刷新 → 回落到配置页
      location.hash = '#/practice';
      return;
    }
    if (route.name === 'result') {
      var sess = getSessionById(route.params[0]);
      if (!sess) {
        location.hash = '#/practice';
        return;
      }
    }

    var title = TITLES[route.name] || '知识点';
    if (route.name === 'kpDetail') title = kpName(route.params[0]);

    var html = '';
    if (route.name === 'kp') html = viewKpList();
    else if (route.name === 'kpDetail') html = viewKpDetail(route.params[0]);
    else if (route.name === 'practice') html = viewPracticeConfig();
    else if (route.name === 'run') html = viewRun();
    else if (route.name === 'result') html = viewResult(route.params[0]);
    else if (route.name === 'errors') html = viewErrors();
    else if (route.name === 'stats') html = viewStats();

    view.innerHTML = html;
    $('topTitle').textContent = title;
    var back = $('backBtn');
    var isSub = (route.name === 'kpDetail' || route.name === 'run' || route.name === 'result');
    back.hidden = !isSub;
    back.setAttribute('aria-label', '返回');

    var activeTab = route.name === 'kp' || route.name === 'kpDetail' ? 'kp'
      : (route.name === 'practice' || route.name === 'run' || route.name === 'result') ? 'practice'
        : route.name;
    var tabs = document.querySelectorAll('.tab');
    for (var i = 0; i < tabs.length; i++) {
      var t = tabs[i];
      if (t.getAttribute('data-tab') === activeTab) t.classList.add('active');
      else t.classList.remove('active');
    }
    window.scrollTo(0, 0);
    afterRender(route);
  }

  /* ---------------- V1 知识点列表 ---------------- */

  function masteryBar(m) {
    var w = Math.round(Math.max(0, Math.min(1, m)) * 100);
    return '<div class="bar"><span style="width:' + w + '%"></span></div>';
  }

  function viewKpList() {
    var kps = allKps();
    var html = '<p class="lead">6 个知识点：先看讲解（要点 / 公式 / 易错点），再按难度分层练习。</p>';
    html += '<div class="cards">';
    for (var i = 0; i < kps.length; i++) {
      var k = kps[i];
      var agg = computeKpAggregate(k.id);
      var status = agg.totalAttempts === 0 ? '未开始' : masteryLevel(agg.mastery);
      html += '<button class="card kp-card" data-act="kp-open" data-id="' + k.id + '">'
        + '<div class="card-top"><span class="card-name">' + esc(k.name) + '</span>'
        + '<span class="pill">' + esc(status) + '</span></div>'
        + '<div class="card-sub">' + esc(k.subtitle) + '</div>'
        + '<div class="card-meta"><span>已做 ' + agg.distinctDone + '/' + KP_TOTAL + '</span>'
        + '<span>掌握度 ' + pct(agg.mastery) + '</span></div>'
        + masteryBar(agg.mastery)
        + '</button>';
    }
    html += '</div>';
    if (!storageAvailable) {
      html += '<p class="warn">当前浏览器无法使用本地存储（隐私模式？），本次成绩不会被保存。</p>';
    }
    return html;
  }

  /* ---------------- V1a 知识点讲解详情 ---------------- */

  function viewKpDetail(kpId) {
    var kps = allKps(), kp = null;
    for (var i = 0; i < kps.length; i++) if (kps[i].id === kpId) kp = kps[i];
    if (!kp) return '<p class="empty">没有找到该知识点。</p>';
    var agg = computeKpAggregate(kp.id);
    var html = '<section class="sec">'
      + '<h2>' + esc(kp.name) + '</h2>'
      + '<p class="card-sub">' + esc(kp.subtitle) + ' · 掌握度 ' + pct(agg.mastery) + '（' + (agg.totalAttempts ? masteryLevel(agg.mastery) : '未开始') + '）</p>'
      + '</section>';
    html += '<section class="sec"><h3>概念要点</h3><ol class="list">';
    kp.concepts.forEach(function (c) { html += '<li>' + c + '</li>'; });
    html += '</ol></section>';
    html += '<section class="sec"><h3>核心公式</h3><ul class="list formula">';
    kp.formulas.forEach(function (c) { html += '<li>' + c + '</li>'; });
    html += '</ul></section>';
    html += '<section class="sec"><h3>易错点</h3><ol class="list pitfall">';
    kp.pitfalls.forEach(function (c) { html += '<li>' + c + '</li>'; });
    html += '</ol></section>';
    html += '<div class="actions"><button class="btn primary" data-act="kp-practice" data-id="' + kp.id + '">开始练习（' + esc(kp.name) + '）</button></div>';
    return html;
  }

  /* ---------------- V2 练习配置 ---------------- */

  function getCfg() {
    if (!state.cfg) {
      var s = getSettings();
      state.cfg = { kp: s.lastKp, difficulty: s.lastDifficulty, count: s.lastCount };
    }
    return state.cfg;
  }

  function viewPracticeConfig() {
    var cfg = getCfg();
    var kps = allKps();
    var pool = allQuestions().filter(function (q) {
      if (q.kp !== cfg.kp) return false;
      if (cfg.difficulty !== 'all' && q.difficulty !== cfg.difficulty) return false;
      return true;
    }).length;
    var actual = Math.min(cfg.count, pool);

    var html = '<section class="sec"><h2>选择练习内容</h2></section>';

    html += '<section class="sec"><h3>1. 知识点</h3><div class="chips" data-group="kp">';
    kps.forEach(function (k) {
      var on = k.id === cfg.kp ? ' on' : '';
      html += '<button class="chip' + on + '" data-act="cfg-kp" data-id="' + k.id + '">' + esc(k.name) + '</button>';
    });
    html += '</div></section>';

    html += '<section class="sec"><h3>2. 难度</h3><div class="chips" data-group="difficulty">';
    [['all', '全部'], ['basic', '基础'], ['medium', '提高'], ['hard', '挑战']].forEach(function (d) {
      var on = d[0] === cfg.difficulty ? ' on' : '';
      html += '<button class="chip' + on + '" data-act="cfg-difficulty" data-id="' + d[0] + '">' + d[1] + '</button>';
    });
    html += '</div></section>';

    html += '<section class="sec"><h3>3. 题量</h3><div class="chips" data-group="count">';
    COUNT_TIERS.forEach(function (n) {
      var label = (n === KP_TOTAL) ? (n + ' 题（全部）') : (n + ' 题');
      var on = String(n) === String(cfg.count) ? ' on' : '';
      var disabled = pool === 0 ? ' disabled' : '';
      html += '<button class="chip' + on + '"' + disabled + ' data-act="cfg-count" data-id="' + n + '">' + label + '</button>';
    });
    html += '</div></section>';

    html += '<p class="hint">当前筛选下可抽题：<b>' + pool + '</b> 题'
      + (pool > 0 && actual < cfg.count ? '（不足 ' + cfg.count + ' 题，将按实际 ' + actual + ' 题出卷）' : '')
      + '</p>';

    html += '<div class="actions"><button class="btn primary big" data-act="start"'
      + (pool === 0 ? ' disabled' : '') + '>开始练习</button></div>';

    html += '<p class="foot-note">题量档位 ' + COUNT_TIERS.join(' / ') + '（单知识点题库共 ' + KP_TOTAL + ' 题，按实际题库动态生成）；跨知识点混合练习为 P1 暂不提供。</p>';
    return html;
  }

  /* ---------------- V2a 答题 ---------------- */

  function viewRun() {
    var r = getRun();
    if (!r) return '<p class="empty">练习已结束。</p>';
    var qid = r.qids[r.i];
    var q = questionMap()[qid];
    if (!q) return '<p class="empty">题目不存在。</p>';
    var v = r.verdict[qid];
    var locked = !!v;

    var html = '<div class="progress-line"><span>第 ' + (r.i + 1) + ' / ' + r.qids.length + ' 题</span>'
      + '<span class="pill">' + esc(kpName(q.kp)) + ' · ' + esc(DIFF_LABEL[q.difficulty] || q.difficulty) + '</span></div>';

    html += '<section class="sec question"><div class="stem">' + q.stem + '</div>';

    if (q.type === 'single') {
      html += '<div class="options">';
      var chosen = Object.prototype.hasOwnProperty.call(r.answers, qid) ? String(r.answers[qid]) : null;
      for (var i = 0; i < q.options.length; i++) {
        var cls = 'opt';
        if (locked) {
          cls += ' locked';
          if (i === Number(q.answer)) cls += ' right';
          else if (chosen !== null && String(i) === chosen) cls += ' wrong';
        } else if (chosen !== null && String(i) === chosen) {
          cls += ' sel';
        }
        html += '<button class="' + cls + '"' + (locked ? ' disabled' : '') + ' data-act="opt" data-i="' + i + '">'
          + '<span class="letter">' + 'ABCD'.charAt(i) + '</span><span class="opt-text">' + String(q.options[i]) + '</span></button>';
      }
      html += '</div>';
    } else {
      var val = Object.prototype.hasOwnProperty.call(r.answers, qid) ? String(r.answers[qid]) : '';
      html += '<div class="fill-row"><input id="fillInput" class="fill-input" type="text" inputmode="text" autocomplete="off"'
        + ' placeholder="填写答案" value="' + esc(val) + '"' + (locked ? ' disabled' : '') + '>'
        + '<span class="unit-hint">可填分数（如 1/2）或小数（如 0.5）</span></div>';
    }

    if (!locked) {
    html += '<div class="actions"><button class="btn primary" data-act="submit" data-qid="' + qid + '">提交本题</button></div>';
    html += '<p class="hint" id="runHint"></p>';
    } else {
    var mine = '';
    if (!v.skipped) {
      // single 的选项文案来自 data.js（可信 HTML，含 sup/sub），直接渲染；fill 是用户输入，必须转义
      mine = q.type === 'single'
        ? ('ABCD'.charAt(Number(r.answers[qid])) + '. ' + String(q.options[Number(r.answers[qid])] || ''))
        : esc(String(r.answers[qid]));
    }
    html += '<div class="feedback ' + (v.correct ? 'ok' : 'ng') + '">'
      + '<div class="fb-title">' + (v.correct ? '✅ 答对' : (v.skipped ? '⚪ 未作答，按答错计' : '❌ 答错')) + '</div>'
      + '<div class="fb-correct">正确答案：' + answerText(q) + '</div>'
      + (v.skipped ? '' : '<div class="fb-mine">你的答案：' + mine + '</div>')
      + '<div class="fb-exp"><b>解析：</b>' + q.explanation + '</div>'
      + '</div>';
    }

    html += '</section>';

    var last = (r.i === r.qids.length - 1);
    html += '<div class="run-nav">'
      + '<button class="btn" data-act="prev"' + (r.i === 0 ? ' disabled' : '') + '>上一题</button>'
      + (last ? '<button class="btn primary" data-act="finish">交卷</button>'
        : '<button class="btn primary" data-act="next">下一题</button>')
      + '</div>';
    return html;
  }

  /* ---------------- V2b 结果 ---------------- */

  function viewResult(sid) {
    var s = getSessionById(sid);
    if (!s) return '<p class="empty">没有找到这次练习记录。</p>';
    var qmap = questionMap();
    var acc = s.total ? s.score / s.total : 0;
    var html = '<section class="sec result-head">'
      + '<div class="big-score">' + s.score + ' / ' + s.total + '</div>'
      + '<div class="result-meta">正确率 ' + pct(acc) + ' · 用时 ' + fmtDuration(s.durationMs)
      + ' · ' + (s.kp ? esc(kpName(s.kp)) : '混合') + ' · ' + (s.difficulty ? esc(DIFF_LABEL[s.difficulty]) : '全部难度') + '</div>'
      + '</section>';

    html += '<section class="sec"><h3>逐题一览</h3><ul class="result-list">';
    s.questionIds.forEach(function (qid, idx) {
      var q = qmap[qid];
      var ok = s.correct[qid] === true;
      html += '<li class="result-item ' + (ok ? 'ok' : 'ng') + '">'
        + '<div class="ri-top"><span class="ri-idx">' + (idx + 1) + '.</span>'
        + '<span class="ri-tag">' + (ok ? '✅ 对' : '❌ 错') + '</span>'
        + '<span class="ri-kp">' + esc(q ? kpName(q.kp) : qid) + '</span></div>'
        + '<div class="ri-stem">' + (q ? q.stem : '（题目已不存在）') + '</div>';
      if (!ok && q) {
        html += '<div class="ri-ans">正确答案：' + answerText(q) + '</div>';
      }
      html += '</li>';
    });
    html += '</ul></section>';

    html += '<div class="actions">'
      + '<button class="btn primary" data-act="again">再练一组</button>'
      + '<button class="btn" data-act="go-errors">查看错题本</button>'
      + '</div>';
    return html;
  }

  /* ---------------- V3 错题本 ---------------- */

  function errorRows() {
    var records = getErrorRecords();
    var qmap = questionMap();
    var rows = [];
    for (var key in records) {
      if (!Object.prototype.hasOwnProperty.call(records, key)) continue;
      var r = records[key];
      if (!r) continue;
      var q = qmap[r.qid];
      rows.push({ rec: r, q: q || null });
    }
    return rows;
  }

  function viewErrors() {
    var f = state.errFilter;
    var rows = errorRows();
    var unmastered = rows.filter(function (r) { return r.rec.mastered !== true; }).length;

    var html = '<section class="sec"><h2>错题本</h2>'
      + '<p class="hint">共 ' + rows.length + ' 条错题记录，其中未攻克 ' + unmastered + ' 条。答对后自动标记「已攻克」并保留痕迹。</p>'
      + '</section>';

    if (state.undo && state.undo.rec) {
      html += '<div class="undo-bar"><span>已移除 1 条错题（' + esc(state.undo.rec.qid) + '）</span>'
        + '<button class="btn small" data-act="undo">撤销移除</button></div>';
    }

    // 筛选
    html += '<div class="filter-bar">';
    html += '<div class="chips">';
    [['all', '全部'], ['open', '未攻克'], ['mastered', '已攻克']].forEach(function (x) {
      html += '<button class="chip' + (f.status === x[0] ? ' on' : '') + '" data-act="flt-status" data-id="' + x[0] + '">' + x[1] + '</button>';
    });
    html += '</div><div class="chips">';
    html += '<button class="chip' + (f.kp === 'all' ? ' on' : '') + '" data-act="flt-kp" data-id="all">全部知识点</button>';
    allKps().forEach(function (k) {
      html += '<button class="chip' + (f.kp === k.id ? ' on' : '') + '" data-act="flt-kp" data-id="' + k.id + '">' + esc(k.name) + '</button>';
    });
    html += '</div></div>';

    var filtered = rows.filter(function (r) {
      if (f.status === 'open' && r.rec.mastered === true) return false;
      if (f.status === 'mastered' && r.rec.mastered !== true) return false;
      if (f.kp !== 'all' && r.rec.kp !== f.kp) return false;
      return true;
    });

    if (!filtered.length) {
      html += '<p class="empty">'
        + (rows.length ? '当前筛选条件下没有错题。' : '还没有错题记录。去练习几组，做错的题会自动收集到这里。')
        + '</p><div class="actions"><button class="btn primary" data-act="go-practice">去做练习</button></div>';
      if (rows.length) {
        html += '<div class="actions"><button class="btn danger" data-act="clear-errors">清空错题本</button></div>';
      }
      return html;
    }

    // 按知识点分组
    var groups = {};
    filtered.forEach(function (r) {
      var kp = r.rec.kp;
      if (!groups[kp]) groups[kp] = [];
      groups[kp].push(r);
    });
    var order = allKps().map(function (k) { return k.id; }).filter(function (id) { return groups[id]; });

    order.forEach(function (kpid) {
      var list = groups[kpid].slice().sort(function (a, b) { return (b.rec.lastWrongAt || 0) - (a.rec.lastWrongAt || 0); });
      var openInGroup = list.filter(function (r) { return r.rec.mastered !== true; }).length;
      html += '<section class="sec err-group">'
        + '<div class="group-head"><h3>' + esc(kpName(kpid)) + ' <span class="pill">' + list.length + ' 条</span>'
        + (openInGroup ? '<span class="pill warn-pill">未攻克 ' + openInGroup + '</span>' : '') + '</h3>'
        + '<button class="btn small" data-act="redo-group" data-id="' + kpid + '">重做全部</button></div>';

      list.forEach(function (r) {
        var q = r.q;
        var mastered = r.rec.mastered === true;
        html += '<article class="err-item' + (mastered ? ' mastered' : '') + '" data-qid="' + esc(r.rec.qid) + '">'
          + '<div class="err-top">'
          + (mastered ? '<span class="badge ok">已攻克</span>' : '<span class="badge ng">未攻克</span>')
          + '<span class="err-count">错 ' + (r.rec.wrongCount || 0) + ' 次</span>'
          + '<span class="err-time">' + fmtTime(r.rec.lastWrongAt) + '</span>'
          + '</div>'
          + '<div class="err-stem">' + (q ? q.stem : '（题目已不存在：' + esc(r.rec.qid) + '）') + '</div>'
          + '<details class="err-detail"><summary>查看我的答案与解析</summary>'
          + '<div class="err-ans"><b>我的上次答案：</b>' + (r.rec.lastInput === '' ? '（空）' : esc(r.rec.lastInput)) + '</div>'
          + (q ? '<div class="err-ans"><b>正确答案：</b>' + answerText(q) + '</div>'
            + '<div class="err-exp"><b>解析：</b>' + q.explanation + '</div>' : '')
          + '</details>'
          + '<div class="err-actions">'
          + '<button class="btn small primary" data-act="redo-one" data-id="' + esc(r.rec.qid) + '">重做</button>'
          + '<button class="btn small ghost" data-act="remove" data-id="' + esc(r.rec.qid) + '">移除</button>'
          + '</div>'
          + '</article>';
      });
      html += '</section>';
    });

    html += '<div class="actions"><button class="btn danger" data-act="clear-errors">清空错题本</button></div>';
    html += '<p class="foot-note">移除单条错题不弹确认（3 秒内可撤销）；清空需二次确认。</p>';
    return html;
  }

  /* ---------------- V4 统计 ---------------- */

  function viewStats() {
    var all = computeAggregateAll();
    var html = '<section class="sec"><h2>学习统计</h2>'
      + '<p class="hint">累计口径（全历史），刷新页面不清空。</p></section>';

    html += '<section class="sec overview">'
      + '<div class="metric"><div class="m-val">' + (all.totalAttempts ? pct(all.mastery) : '—') + '</div><div class="m-lab">总掌握度</div>'
      + '<div class="m-sub">' + (all.totalAttempts ? masteryLevel(all.mastery) : '未开始') + '</div></div>'
      + '<div class="metric"><div class="m-val">' + pct(all.accuracy) + '</div><div class="m-lab">正确率</div>'
      + '<div class="m-sub">' + all.correctAttempts + ' / ' + all.totalAttempts + '</div></div>'
      + '<div class="metric"><div class="m-val">' + all.totalAttempts + '</div><div class="m-lab">做题量（次）</div>'
      + '<div class="m-sub">题库覆盖 ' + all.distinctDone + '/' + Q_TOTAL + '</div></div>'
      + '</section>';

    html += '<section class="sec"><h3>分知识点</h3><div class="stats-table">';
    html += '<div class="st-row st-head"><span>知识点</span><span>掌握度</span><span>做题量</span><span>正确数</span><span>正确率</span></div>';
    all.rows.forEach(function (r) {
      html += '<div class="st-row">'
        + '<span class="st-kp">' + esc(kpName(r.kp)) + '</span>'
        + '<span><b>' + pct(r.mastery) + '</b>' + masteryBar(r.mastery) + '</span>'
        + '<span>' + r.totalAttempts + '</span>'
        + '<span>' + r.correctAttempts + '</span>'
        + '<span>' + pct(r.accuracy) + '</span>'
        + '</div>';
    });
    html += '</div></section>';

    html += '<section class="sec"><h3>口径说明</h3><ul class="list small-list">'
      + '<li>掌握度（每知识点）= 0.5×正确率 + 0.4×覆盖度（已做不同题数/' + KP_TOTAL + '）+ 0.1×(1−未攻克错题数/' + KP_TOTAL + '，封顶 1)；该知识点从未作答时记 0。</li>'
      + '<li>总掌握度 = 6 个知识点掌握度的算术平均（未开始的知识点按 0 计入分母）。</li>'
      + '<li>正确率 = 累计答对次数 / 累计作答次数（空作答也计入分母）。</li>'
      + '<li>做题量 = 累计作答次数；副指标「题库覆盖」= 已做过的不同题目数 / ' + Q_TOTAL + '。</li>'
      + '<li>错题被移除或清空后，未攻克数下降，掌握度会上升——这是有意设计（错题处理掉即视为减负）。</li>'
      + '</ul></section>';

    html += '<div class="actions"><button class="btn danger" data-act="clear-all">清空全部学习数据</button></div>';
    html += '<p class="foot-note">掌握度 = 累计正确率 50% + 题目覆盖度 40% + 未攻克错题 10%</p>';
    return html;
  }

  /* ---------------- 交互 ---------------- */

  function toast(msg) {
    var el = $('toast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('show');
    if (state.toastTimer) clearTimeout(state.toastTimer);
    state.toastTimer = setTimeout(function () { el.classList.remove('show'); }, 2400);
  }

  function confirmDialog(msg, onOk) {
    var modal = $('modal');
    if (!modal) { if (window.confirm(msg)) onOk(); return; }
    modal.innerHTML = '<div class="modal-box"><p>' + esc(msg) + '</p>'
      + '<div class="modal-actions"><button class="btn" data-act="modal-cancel">取消</button>'
      + '<button class="btn danger" data-act="modal-ok">确认</button></div></div>';
    modal.classList.add('show');
    var ok = modal.querySelector('[data-act="modal-ok"]');
    var cancel = modal.querySelector('[data-act="modal-cancel"]');
    var close = function () {
      modal.classList.remove('show');
      modal.innerHTML = '';
    };
    ok.addEventListener('click', function () { close(); onOk(); });
    cancel.addEventListener('click', close);
  }

  function startPracticeFromConfig() {
    var cfg = getCfg();
    var picked = pickQuestions(cfg.kp, cfg.difficulty, cfg.count);
    if (!picked.ids.length) { toast('当前筛选下没有题目'); return; }
    saveSettings({ lastKp: cfg.kp, lastDifficulty: cfg.difficulty, lastCount: cfg.count });
    startRun(picked.ids, {
      kp: cfg.kp,
      difficulty: cfg.difficulty === 'all' ? 'all' : cfg.difficulty,
      source: 'config',
      count: cfg.count
    });
    if (picked.ids.length < cfg.count) toast('题目不足 ' + cfg.count + ' 题，本次按 ' + picked.ids.length + ' 题出卷');
    navigate('#/practice/run');
  }

  function startRunWithIds(ids, meta) {
    if (!ids.length) { toast('没有可重做的题目'); return; }
    startRun(ids, meta);
    navigate('#/practice/run');
  }

  function afterRender(route) {
    if (route.name === 'run') {
      var input = $('fillInput');
      if (input && !input.disabled) {
        setTimeout(function () { try { input.focus(); } catch (e) { } }, 30);
        input.addEventListener('keydown', function (ev) {
          if (ev.key === 'Enter') {
            ev.preventDefault();
            var qid = runCurrent();
            if (qid) doSubmit(qid);
          }
        });
      }
    }
  }

  function doSubmit(qid) {
    var q = questionMap()[qid];
    if (!q) return;
    var raw;
    if (q.type === 'single') {
      if (!Object.prototype.hasOwnProperty.call(getRun().answers, qid)) {
        toast('请先选择一项');
        var hintEl = $('runHint');
        if (hintEl) hintEl.textContent = '请先选择一项再提交。';
        return;
      }
      raw = getRun().answers[qid];
    } else {
      var input = $('fillInput');
      raw = input ? input.value : '';
    }
    var res = submitInRun(qid, raw);
    if (res && res.error === 'EMPTY_SINGLE') { toast('请先选择一项'); return; }
    render();
  }

  function onClick(ev) {
    var target = ev.target;
    while (target && target !== document.body && !(target.getAttribute && target.getAttribute('data-act'))) {
      target = target.parentNode;
    }
    if (!target || target === document.body || !target.getAttribute) return;
    var act = target.getAttribute('data-act');
    if (!act) return;
    var id = target.getAttribute('data-id');
    var cfg = getCfg();

    switch (act) {
      case 'kp-open':
        navigate('#/kp/' + id);
        break;
      case 'kp-practice':
        cfg.kp = id;
        state.cfg = cfg;
        navigate('#/practice');
        break;
      case 'cfg-kp':
        cfg.kp = id;
        render();
        break;
      case 'cfg-difficulty':
        cfg.difficulty = id;
        render();
        break;
      case 'cfg-count':
        cfg.count = Number(id);
        render();
        break;
      case 'start':
        startPracticeFromConfig();
        break;
      case 'opt': {
        var r = getRun();
        if (!r) return;
        var qid0 = runCurrent();
        if (isLocked(qid0)) return;
        r.answers[qid0] = String(target.getAttribute('data-i'));
        render();
        break;
      }
      case 'submit':
        doSubmit(target.getAttribute('data-qid'));
        break;
      case 'prev':
        if (getRun() && getRun().i > 0) { getRun().i -= 1; render(); }
        break;
      case 'next':
        if (getRun() && getRun().i < getRun().qids.length - 1) { getRun().i += 1; render(); }
        break;
      case 'finish': {
        var rec = finishRun();
        state.cfg = null;
        if (rec) navigate('#/practice/result/' + rec.id);
        else navigate('#/practice');
        break;
      }
      case 'again': {
        var s = getSessionById((parseHash().params || [])[0]);
        if (s) {
          startRunWithIds(s.questionIds.slice(), {
            kp: s.kp,
            difficulty: s.difficulty || 'all',
            source: 'again'
          });
        }
        break;
      }
      case 'go-errors':
        navigate('#/errors');
        break;
      case 'go-practice':
        navigate('#/practice');
        break;
      case 'flt-status':
        state.errFilter.status = id;
        render();
        break;
      case 'flt-kp':
        state.errFilter.kp = id;
        render();
        break;
      case 'redo-one':
        startRunWithIds([id], { kp: (questionMap()[id] || {}).kp, difficulty: 'all', source: 'errors' });
        break;
      case 'redo-group': {
        var rows = errorRows().filter(function (r) { return r.rec.kp === id; });
        rows.sort(function (a, b) { return (a.rec.lastWrongAt || 0) - (b.rec.lastWrongAt || 0); });
        startRunWithIds(rows.map(function (r) { return r.rec.qid; }), { kp: id, difficulty: 'all', source: 'errors' });
        break;
      }
      case 'remove': {
        var records = getErrorRecords();
        var rec = records[id];
        if (!rec) break;
        if (state.undo && state.undo.timer) clearTimeout(state.undo.timer);
        state.undo = { rec: rec, timer: null };
        removeError(id);
        render();
        toast('已移除该错题，3 秒内可撤销');
        state.undo.timer = setTimeout(function () { state.undo = null; }, 3000);
        break;
      }
      case 'undo':
        if (state.undo && state.undo.rec) {
          if (state.undo.timer) clearTimeout(state.undo.timer);
          restoreError(state.undo.rec);
          state.undo = null;
          render();
          toast('已撤销移除');
        }
        break;
      case 'clear-errors':
        confirmDialog('确定清空错题本吗？已攻克的记录也会一起删除，不可恢复。', function () {
          clearErrors();
          state.undo = null;
          render();
          toast('错题本已清空');
        });
        break;
      case 'clear-all':
        confirmDialog('确定清空全部学习数据吗？错题本、练习记录、练习配置都会被删除。', function () {
          clearAllData();
          state.undo = null;
          state.cfg = null;
          state.errFilter = { status: 'all', kp: 'all' };
          render();
          toast('全部学习数据已清空');
        });
        break;
      case 'modal-cancel':
      case 'modal-ok':
        break; // 由 confirmDialog 内部监听处理
    }
  }

  function boot() {
    if (!G.QUESTIONS || !G.QUESTIONS.length) {
      if ($('view')) {
        $('view').innerHTML = '<p class="empty">题库加载失败：请确认 data.js 与 index.html 在同一目录且通过 &lt;script src="data.js"&gt; 引入。</p>';
      }
      return;
    }
    getCfg();
    document.addEventListener('click', onClick);

    var back = $('backBtn');
    if (back) back.addEventListener('click', function () {
      var route = parseHash();
      if (route.name === 'kpDetail') navigate('#/kp');
      else if (route.name === 'run') {
        if (window.confirm('退出本次练习？未交卷的作答不会保存。')) { dropRun(); navigate('#/practice'); }
      } else if (route.name === 'result') navigate('#/practice');
      else navigate('#/kp');
    });

    window.addEventListener('hashchange', render);
    render();
    // 首次渲染后若题库校验失败，可在控制台提示
    if (!storageAvailable && window.console) {
      console.warn('[g9math] localStorage 不可用，本次成绩不会被保存。');
    }
  }

  /* ---------------- 导出（浏览器全局 + node 测试） ---------------- */

  var API = {
    KEYS: KEYS,
    KP_TOTAL: KP_TOTAL,
    Q_TOTAL: Q_TOTAL,
    COUNT_TIERS: COUNT_TIERS,
    DIFF_LABEL: DIFF_LABEL,
    normFill: normFill,
    parseRational: parseRational,
    judge: judge,
    answerText: answerText,
    getErrorRecords: getErrorRecords,
    saveErrorRecords: saveErrorRecords,
    recordAttempt: recordAttempt,
    removeError: removeError,
    restoreError: restoreError,
    clearErrors: clearErrors,
    clearAllData: clearAllData,
    getSessions: getSessions,
    appendSession: appendSession,
    getSettings: getSettings,
    saveSettings: saveSettings,
    computeKpAggregate: computeKpAggregate,
    computeAggregateAll: computeAggregateAll,
    masteryLevel: masteryLevel,
    pickQuestions: pickQuestions,
    startRun: startRun,
    getRun: getRun,
    dropRun: dropRun,
    submitInRun: submitInRun,
    buildSessionRecord: buildSessionRecord,
    finishRun: finishRun,
    getSessionById: getSessionById,
    questionMap: questionMap,
    storageAvailable: function () { return storageAvailable; }
  };

  G.MathWorkbench = API;
  if (typeof module !== 'undefined' && module.exports) module.exports = API;

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
    else boot();
  }

})(typeof window !== 'undefined' ? window : globalThis);
