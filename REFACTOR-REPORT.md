# REFACTOR-REPORT — v3-T1：data.js 多文件拆分 + build 工具 + 逐字节等价

**结论：完成。`data.js` 与 v2 基线逐字节相同（sha256 `b35d424a…`），4 个部署文件全部命中基线 sha256。**

- 工作目录：`/Users/jiduobin/.hermes/deliverables/grade9-math-workbench-v3/01-refactor`
- v2 只读基线：`/Users/jiduobin/.hermes/deliverables/grade9-math-workbench-v2/02-app`（**未做任何修改**，复验 hash 仍为 `b35d424a…`）
- 未向 `../02-test` 写入任何内容（目录仍为空）
- 未跑浏览器视觉检查（按任务边界，留给 tester）

---

## 1. 交付物

### 部署文件（4 个，全部与基线 sha256 相等）

| 文件 | sha256 | 与基线 |
|---|---|---|
| `index.html` | `cdb95cbc80ed7c0d1768c035419a1e0fb77bbd08aa9a73221063f4e6d48303ff` | ✅ 相等（`cp -p` 原样拷贝） |
| `styles.css` | `5b46a0e1775680672f77aad42e7fdba38dc2fd8190de3af9f23b10047d3fd42e` | ✅ 相等（`cp -p`） |
| `app.js` | `9ab4cca1458598c5d4da16d8ecd7f1d3b962a639aa4e219830d7d4891c69ed85` | ✅ 相等（`cp -p`） |
| `data.js` | `b35d424aca3ed8dc7b0e434dd013f6d62062a0ca7f059ad5c117d81a25a6b88f` | ✅ **相等（构建产物，逐字节）** |

`data.js`：138,522 bytes / 859 行 / 72 题 + 6 个知识点讲解。

### 开发期文件

| 文件 | 行 | 字节 | sha256 |
|---|---|---|---|
| `data/kps.js` | 149 | 9,347 | `a4e9fd97611df1f6f963c7a869c38110f26a7fc7fe1d5f35f50b4e922299a2e7` |
| `data/q-quad-eq.js` | 127 | 15,156 | `ca8d0a359e80dd67cb878ffc11138303bed61c35a172368aa0f298ef40493db9` |
| `data/q-quad-func.js` | 127 | 21,744 | `3cd84912795262722f14a5e8cd59c9e28555913b39482d9bdb2d24a2ffc9be87` |
| `data/q-rotation.js` | 126 | 21,890 | `2ed0e86dbbce79714c7e71c5b89d5fffeb7415b02056767dc0cb1442ffe3cbee` |
| `data/q-circle.js` | 126 | 18,634 | `3c05c3c3c0974d7959ab0862a317096ca3c0f484e2da9fa6eff67b7569a1657a` |
| `data/q-similarity.js` | 126 | 18,810 | `aaf252c429b0dc20a6fdb9ce2ca84e907283100a42854be7fc7f8d48ac192926` |
| `data/q-probability.js` | 126 | 35,586 | `dd587312cfd4070c81126729a1abdbe0eabd6d91d2c050906b3418997ff5c2ab` |
| `tools/build-data.js` | 547 | 25,532 | `a12caab9e5fbaaa9743a70d54d89d90888bee7227fc47b4d4bca606c0f0e10a1` |
| `tools/_migrate-split-once.js` | 231 | 13,594 | `2f9b97f7aa2ed9ecb6888d44e424e445d7521cdfcc60d1cf9cc152f830570dd9` |
| `tools/dedupe-report.txt` | 2 | 78 | —（每次构建重写，不固定） |

`data/*.js` 合计 907 行 / 141,167 B（含各文件头注释与 marker）。

---

## 2. 自证（任务书第 5 节，逐条实测）

### ① `data.js` sha256 == 基线

```
$ node tools/build-data.js && shasum -a 256 data.js
b35d424aca3ed8dc7b0e434dd013f6d62062a0ca7f059ad5c117d81a25a6b88f  data.js
```

### ② 四个部署文件全部命中基线

```
cdb95cbc80ed7c0d1768c035419a1e0fb77bbd08aa9a73221063f4e6d48303ff  index.html
5b46a0e1775680672f77aad42e7fdba38dc2fd8190de3af9f23b10047d3fd42e  styles.css
9ab4cca1458598c5d4da16d8ecd7f1d3b962a639aa4e219830d7d4891c69ed85  app.js
b35d424aca3ed8dc7b0e434dd013f6d62062a0ca7f059ad5c117d81a25a6b88f  data.js
```

### ③ 幂等：连跑两次 build

```
run0 = b35d424a…6b88f
run1 = b35d424a…6b88f
run2 = b35d424a…6b88f
IDEMPOTENT OK
```

### ④ `--check` 不写盘

```
$ rm -f data.js tools/dedupe-report.txt
$ ls data.js             → No such file or directory
$ node tools/build-data.js --check ; echo $?
… [PASS] OUT --check 模式：校验通过，未写任何文件
BUILD OK
0
$ ls data.js             → 仍然 No such file or directory   ← 没有偷偷生成
$ ls tools/dedupe-report.txt → 仍然 No such file or directory
$ node tools/build-data.js                      ← 正式构建
rebuilt sha: b35d424a…6b88f                    ← 恢复且 hash 相同
```

### ⑤ 拆分不是空壳

```
$ wc -l data/*.js
     149 data/kps.js
     126 data/q-circle.js
     126 data/q-probability.js
     127 data/q-quad-eq.js
     127 data/q-quad-func.js
     126 data/q-rotation.js
     126 data/q-similarity.js
     907 total
```

逐文件题数（用 `vm` 真执行每个文件统计）：

```
data/kps.js            6 kps
data/q-quad-eq.js     12 questions
data/q-quad-func.js   12 questions
data/q-rotation.js    12 questions
data/q-circle.js      12 questions
data/q-similarity.js  12 questions
data/q-probability.js 12 questions
TOTAL questions: 72
```

### ⑥ 逐题核对：v2 vs v3 结构化 deep-equal

```
OK   window.KPS (JSON)        (json len 3863 vs 3863)
OK   window.QUESTIONS (JSON)  (json len 117324 vs 117324)
KPS count: 6 / 6
Q count:   72 / 72
per-element diffs: 0
raw bytes equal: true (138522 vs 138522)
PARITY OK
```

`JSON.stringify` 后 deep-equal、逐元素 0 差异、原始字节也相等——三者互为印证。

---

## 3. 负向测试（坏数据必须被拦住）

全部在一次性 fixture 副本上做（`--root` 指向副本），**从未改真实 `data/`**。每例都确认了"FAIL 时 data.js 未被写入"。

| # | 注入的坏数据 | 期望 | 实测 |
|---|---|---|---|
| 0 | 干净 fixture（`--root` 指向副本） | 全 PASS、产物同 sha | ✅ 14 PASS / 0 FAIL / `BUILD OK` / `data.js` sha = `b35d424a…` |
| 1 | 两道题 id 相同（`q-circle-02` → `q-circle-01`） | V2 FAIL, exit 1 | ✅ `[FAIL] V2 q-circle-01: id 重复`，data.js 未写 |
| 2 | `q-rotation.js` 里某题 `kp` 改成 `circle` | V3 FAIL | ✅ `[FAIL] V3 q-rotation-01: kp="circle" 与 slug=rotation 不一致` |
| 3 | 复制 `q-probability-01`，**只把数字全 +7** 当"新题" | V7 d=1.0000 FAIL | ✅ `[FAIL] V7 d=1.0000 q-probability-01 q-probability-13 >= 0.95`（伪新题被当场拦下） |
| 4 | single 的 `answer: 99`（越界） | V5 FAIL | ✅ `[FAIL] V5 q-quad-func-01: answer=99 越界（options.length=4）` |
| 5 | 删掉 `q-similarity.js` 的 marker | V0 FAIL | ✅ `[FAIL] V0 … 找不到 marker` |
| 6 | 删掉 `q-quad-eq-12` 整题（分布漂移） | V6 FAIL | ✅ 8 条 V6 FAIL（`quad-eq.total=11`、`TOTAL.total=71` 等） |
| 6b | 数组元素区留尾逗号 | V0 FAIL（提示清晰） | ✅ `[FAIL] V0 … 数组元素区不能以逗号结尾（逗号由 build 统一添加；否则会插入数组空位 (hole)）` |
| 7 | 给题加白名单外字段 `svg:` | V9 只 WARN、exit 0 | ✅ `[WARN] V9 q-rotation-01: 未知字段 "svg"` + `BUILD OK` + data.js 正常写出 |
| 8 | 删掉 `data/q-circle.js` 整个文件 | V0 FAIL | ✅ `[FAIL] V0 读取失败 data/q-circle.js — ENOENT` |
| 9 | 多一个没登记的 `data/q-orphan.js` | V12 WARN、仍 OK | ✅ `[WARN] V12 data/q-orphan.js 存在但不在 QUESTION_FILES 里` + `BUILD OK` + 产物仍 72 题 |

**额外端到端验证（把 README 的加题流程真跑了一遍）**：
按 README 3.3 给 `q-circle.js` 追加 `q-circle-13`（single/medium）——

- 忘了改 `EXPECT` → 6 条 V6 FAIL（`circle.total=13 期望 12` 等），**不写 data.js**；
- 同步改好 `EXPECT` / `EXPECT_TOTAL` 后 → `BUILD OK`，产物 138,899 B / 73 题，V10 序号连续性 PASS。
  说明"加题必须同步期望表"这条硬约束是可执行、可自查的。

---

## 4. 实现要点

### 4.1 拆分怎么做（不手抄）

`tools/_migrate-split-once.js` 是**一次性**机械切片脚本，从 v2 `data.js` 直接切字节区间：

1. 定位 `window.KPS = [` 与 `window.QUESTIONS = `；
2. 用**花括号/字符串/注释感知的扫描器**找出 72 个顶层对象字面量的 `[start, end)` 区间
   （不是正则，避免题干里 `}` 或 `'` 导致错切）；
3. 从每个对象文本里读 `kp:` 字段分组，并校验"同 kp 的对象在原文里连续、顺序与 KPS 一致"；
4. 每个 kp 分片的正文 = 从它前面那段 `/* ===== <kp> ===== */` 段注释的**行首**，
   到该 kp 最后一个对象的 `}` —— 中间的一切（含 `/* ===== v2 新增 … ===== */`）逐字节原样带上；
5. 脚本内置**回拼自检**：把切出来的分片按 build 规则拼回去，必须与 v2 原文 `===`。
   第一次跑就在这里抓到了我自己的一个 bug（KPS 区丢了头尾换行），修正后才允许落盘；
6. 落盘后**再读回来**重新拼装比对一次，确认磁盘上的文件也一致。

所以"72 题零改动"不是我手打的，是字节切片 + 双向自检得到的。

### 4.2 产物拼装规则（为什么能 byte-identical）

```
<DEPLOY_HEADER>                                  ← 冻结常量（6 行块注释 + 空行）
window.KPS = [\n
  <kpsBody>                                       ← kps.js 的元素区原文
\n];
\n\n
<DEPLOY_Q_COMMENT>                                ← 冻结常量（4 行块注释）
window.QUESTIONS = [\n
  <block1>,\n<block2>,\n…\n<block6>,              ← 6 个分片的元素区原文 + 统一逗号
\n];
```

- 元素之间的逗号由 build 统一添加，因此分片元素区**不能以逗号结尾**（有 V0 明确拦截）。
- 文件末尾是 `];` 且**没有尾随换行** —— 与 v2 一致。
- 产物里不含时间戳/路径/版本号，构建是纯函数的。
- `DEPLOY_HEADER` / `DEPLOY_Q_COMMENT` 两块注释字面量是**从 v2 字节里生成后注入**的
  （避免手抄 61 个 `=` / `-` 时打错），生成后即冻结。

### 4.3 去重口径

严格照任务书实现：`norm` 五步（删 figure → 删标签 → `\u00a0`→空格 → `\d+`→`#` → 删标点空白运算符），
字符 bigram 多重集 Dice，`≥0.95` FAIL、`[0.80, 0.95)` WARN。

实测与任务书给的标定值完全吻合：

| 指标 | 任务书 | 实测 |
|---|---|---|
| 最高相似对 | 0.8657（`q-similarity-02` vs `q-similarity-04`） | ✅ 0.8657 同一对 |
| `≥0.95` 的对数 | 0 | ✅ 0 |
| `≥0.80` 的对数 | 未给 | **2**（0.8657 与 0.8627，都与 `q-quad-eq-04/08`） |

`tools/dedupe-report.txt`（按 d 降序）：

```
d=0.866  q-similarity-02  q-similarity-04
d=0.863  q-quad-eq-04  q-quad-eq-08
```

---

## 5. 偏差与说明（请 orchestrator 过目）

1. **规则编号扩展到 V0 / V11 / V12**（任务书列的是 V1–V10）。都是加法，不改变原有语义：
   - **V0**：源文件可读 / marker 结构 / 元素区尾逗号 —— 把"解析失败"和"内容违规"分开报，报错更清楚；
   - **V11**：把拼好的产物**真执行一遍**，与分片聚合结果 `JSON.stringify` 比对 ——
     这是"拼装没把结构拼坏"的兜底（正是它抓出了 fixture 里 `,,` 造成的数组空位）；
   - **V12**：`data/` 下有 `q-*.js` 没登记进 `QUESTION_FILES` → WARN。
     因为读取顺序是硬编码的，漏登记会导致**整个文件被静默忽略**，这是这套架构最容易踩的坑。
     只读目录做诊断，不改变构建确定性。
2. **`data.js` 里保留了一条过期文案**：`window.QUESTIONS` 上方注释写着
   "36 道题：6 知识点 × (basic 2 / medium 2 / hard 2)"，实际是 72 题（v2 扩容前的历史文案）。
   为了字节一致性**故意原样保留**，没有"顺手修正"。README 已注明。如果后续要改，必须同步改
   `tools/build-data.js` 的 `DEPLOY_Q_COMMENT` 常量，并且会改变 `data.js` 的 sha256。
3. **"含 SVG" 判定**用题干里出现 `<svg`。6 个 kp 分别是 4/5/5/5/5/4，合计 28，与任务书表格逐格一致。
4. `--check` 严格"不写文件"：连 `tools/dedupe-report.txt` 也不写（任务书原文是"只校验、**不写文件**"）。
   所以想在 CI 里拿到相似题清单，需要跑一次正式构建。

---

## 6. 复现命令

```bash
cd /Users/jiduobin/.hermes/deliverables/grade9-math-workbench-v3/01-refactor

node tools/build-data.js                      # 构建（写 data.js + tools/dedupe-report.txt）
node tools/build-data.js --check              # 只校验、不写盘
shasum -a 256 index.html styles.css app.js data.js
node tools/build-data.js --root /tmp/somewhere  # 指向副本演练，不碰真实目录
```

---

## 7. 给 tester 的验收建议

1. `shasum -a 256 data.js` == `b35d424a…`（4 个文件最好一起核）。
2. `node tools/build-data.js --check` → `BUILD OK`、exit 0、且 `data.js` 完全没被动过
   （可先记 mtime / sha，跑完再比）。
3. 用 `--root <你的 fixture>` 跑构建：产物 sha 应与真实目录一致（证明不依赖路径）。
4. 独立复算去重：按 README 第 6 节的 `norm` 五步 + bigram Dice 自己实现一遍，
   应当得到最高 0.8657、`≥0.95` 零对。
5. 独立复算分布：72 / 18 / 24 / 30 / 39 / 33 / 含 SVG 28，每 kp 12 题。
6. 浏览器端到端（这块我没做，按边界留给 tester）：双击 `index.html`，确认 6 个知识点 tab、
   72 题、SVG 图形题渲染正常、答题判分正常。
