# 九年级数学学习工作台 — v3 题库架构

站点是纯静态单页（双击 `index.html` 即可用），**运行时只加载 3 个文件**：

```
index.html  →  styles.css  +  data.js  +  app.js
```

但题库的数据源在 v3 里**不再是单文件**：编辑时按知识点分成 7 个分片，部署前用
`tools/build-data.js` 合并、校验、去重，产出唯一的 `data.js`。

本文档说明这套架构怎么用、加题怎么加、校验规则是什么。

---

## 1. 目录结构

```
01-refactor/
├── index.html              部署文件 ①（冻结，勿改）
├── styles.css              部署文件 ②（冻结，勿改）
├── app.js                  部署文件 ③（冻结，勿改）
├── data.js                 部署文件 ④ ← 构建产物，不要手改！
├── data/                   【开发期】题库源分片，不参与运行时
│   ├── kps.js              6 个知识点的讲解（window.KPS）
│   ├── q-quad-eq.js        一元二次方程 12 题
│   ├── q-quad-func.js      二次函数 12 题
│   ├── q-rotation.js       图形的旋转 12 题
│   ├── q-circle.js         圆 12 题
│   ├── q-similarity.js     相似 12 题
│   └── q-probability.js    概率初步 12 题
└── tools/                  【开发期】构建与校验，不参与运行时
    ├── build-data.js       唯一的构建入口（零依赖）
    ├── dedupe-report.txt   构建产物：相似题清单
    └── _migrate-split-once.js  一次性迁移脚本（已冻结，正常不要跑）
```

> **关键边界**：`data/` 与 `tools/` **不参与运行时**。`index.html` 只 `<script src="data.js">`，
> 没有任何 `fetch` / ES module / 网络请求。所以部署时只需要上传 4 个文件：
> `index.html`、`styles.css`、`app.js`、`data.js`。

---

## 2. 架构：开发多文件 → 构建合并 → 部署 4 文件

```
data/kps.js ────┐
data/q-quad-eq.js ──┤
data/q-quad-func.js ┤   node tools/build-data.js    ┌──────────────┐
data/q-rotation.js ─┤  ───────────────────────────► │  data.js     │ ──► 上传 4 个文件
data/q-circle.js ───┤   合并 + 校验 V0..V11 + 去重   │ (138522 B)   │
data/q-similarity.js┤                              └──────────────┘
data/q-probability.js┘                                 + tools/dedupe-report.txt
```

构建是**纯文本拼接**：分片里的题目原文会被逐字节搬运到 `data.js`，不重新序列化、不重排版。
因此"分片内容不变 ⇒ 产物字节不变"，`data.js` 的 sha256 可以当作回归指纹。

当前基线（必须保持不变，除非你有意改题）：

```
data.js  sha256 = b35d424aca3ed8dc7b0e434dd013f6d62062a0ca7f059ad5c117d81a25a6b88f
         大小   = 138,522 bytes / 859 行 / 72 题 + 6 个知识点讲解
```

---

## 3. 日常操作

### 3.1 构建（改完题库必做）

```bash
node tools/build-data.js
# stdout 每行: [PASS|WARN|FAIL] <rule-id> <detail>
# 末行:       BUILD OK   或   BUILD FAILED (n errors)
echo $?         # 0 = 通过（WARN 不影响）; 1 = 有 FAIL，此时 data.js 不会被写入
```

带自定义站点根（比如在临时目录里演练，不动真目录）：

```bash
node tools/build-data.js --root /path/to/copy-of-site
```

### 3.2 只校验、不写文件（CI 友好）

```bash
node tools/build-data.js --check
```

`--check` 语义与正式构建完全相同（同样的 PASS/WARN/FAIL、同样的退出码），
但**不写任何文件**：不写 `data.js`，也不写 `tools/dedupe-report.txt`。
适合放在 PR 检查里，避免构建产物被改动。

### 3.3 加一道题

1. 打开对应知识点的分片，例如 `data/q-circle.js`。
2. 在数组末尾加一个对象（**前一个对象补上逗号，新对象结尾不要留逗号**）：

   ```js
     },                          ← 原来的最后一项，补逗号
     {
       id: 'q-circle-13',        ← id 必须匹配 /^q-[a-z0-9-]+-\d{2}$/ 且全局唯一
       kp: 'circle',             ← 必须等于文件名里的 kp slug（这里是 circle）
       difficulty: 'medium',     ← basic | medium | hard
       type: 'single',           ← single（选择题）| fill（填空题）
       stem: '题干……',
       options: ['A', 'B', 'C', 'D'],   ← single 才有，>= 2 项
       answer: 2,                       ← single 才有，整数且 0 <= answer < options.length
       explanation: '解析……'
     }                            ← 最后一项结尾不要逗号！
   ]);
   ```

   fill 题把 `options` + `answer` 换成 `answers: ['答案1', '答案2']`（>= 1 项）。
   两个字段 `answer` / `answers` **不能同时出现**。

3. 构建：`node tools/build-data.js`
4. 看输出有没有 FAIL。**V6 分布校验会失败**——因为每题数被硬编码了，
   加题后必须同步改 `tools/build-data.js` 里的 `EXPECT` / `EXPECT_TOTAL`（见 3.5）。
5. 部署 4 个文件：`index.html`、`styles.css`、`app.js`、`data.js`。

### 3.4 改题 / 改讲解

直接改 `data/q-<kp>.js` 或 `data/kps.js` 里的对应文字，然后 `node tools/build-data.js`。
不要改 `data.js`（它会被构建覆盖）。

### 3.5 新增一个知识点（7 步）

1. **建分片文件** `data/q-<slug>.js`，结构照抄任意现有分片：
   ```js
   /* 文件头注释（随便写，build 会丢弃） */

   window.QUESTIONS = (window.QUESTIONS || []).concat([
     /* ===== <slug> <中文名> ===== */
     {
       id: 'q-<slug>-01',
       kp: '<slug>',
       /* ... */
     }
   ]);
   ```
   - `slug` 只能用小写字母/数字/连字符（会参与 id 正则校验）。
   - 文件里**恰好一处** `window.QUESTIONS = (window.QUESTIONS || []).concat([`，
     并且文件以 `]);` 结束。
   - 数组元素区**不要以逗号结尾**（逗号由 build 统一添加，尾逗号会插入数组空位）。

2. **加进硬编码读取顺序**：`tools/build-data.js` 里的 `QUESTION_FILES` 数组加一行。
   ⚠️ 顺序就是 `data.js` 里的题目顺序，**不要改成 readdir**——否则顺序会随文件系统变化，
   `data.js` 的字节指纹就没了。（build 只用 readdir 做一次"有没有漏登记"的 WARN 检查，
   见 V12——忘了登记会有 `[WARN] V12` 提示，否则整个文件被静默忽略。）

3. **加 V6 期望表**：`tools/build-data.js` 里的 `EXPECT` 加一条
   `'<slug>': { total: N, basic: a, medium: b, hard: c, single: d, fill: e, svgMin: f }`，
   并同步更新 `EXPECT_TOTAL`。

4. **加讲解**：`data/kps.js` 的数组里加一项
   `{ id: '<slug>', name, subtitle, concepts: [...], formulas: [...], pitfalls: [...] }`，
   三项数组都非空。V8 会校验 `KPS` 的 id 集合 == 分片 slug 集合，缺一不可、多一不行。

5. 构建：`node tools/build-data.js`，全部 PASS 再继续。

6. 前端不用改（`app.js` 按 `KPS` 动态渲染 tab）。但如有新的图形/公式需求，
   注意"纯文本 + `<sup>/<sub>`，不引入数学渲染库"这条硬约束。

7. 部署 4 个文件。

---

## 4. 分片文件格式契约（build 靠这个切片）

`build-data.js` 不解析 7 个文件里的每道题——它是**文本切片**：从 marker 开始，
到 closer 之前，这段原文直接搬进 `data.js`。所以：

| 文件 | marker（必须恰好出现一次） | closer |
|---|---|---|
| `data/kps.js` | `window.KPS = [` | `];` |
| `data/q-<kp>.js` | `window.QUESTIONS = (window.QUESTIONS || []).concat([` | `]);` |

- marker **之前**的内容（文件头注释）全部丢弃 → 文件头写什么都可以。
- marker 之后、closer 之前的文本 = 数组元素区，**必须逐字节保留**。
- 元素之间的逗号由 build 统一添加，所以元素区**不能以逗号结尾**。

---

## 5. 校验规则

任一 `[FAIL]` → 构建中止，**不写** `data.js`，`exit 1`。
`[WARN]` 只提示，`exit 0`。

| ID | 级别 | 规则 |
|---|---|---|
| **V0** | FAIL | 7 个源文件都能读、能执行、marker/closer 结构正确、元素区不以逗号结尾 |
| **V1** | FAIL | 必填字段：`id`/`kp`/`difficulty`/`type`/`explanation` 为非空字符串；`stem` 为非空字符串且**剥掉 HTML 标签后仍非空** |
| **V2** | FAIL | `id` 匹配 `^q-[a-z0-9-]+-\d{2}$` 且**全局唯一** |
| **V3** | FAIL | 每题的 `kp` 必须等于它所在文件的 slug（`q-circle.js` → `circle`） |
| **V4** | FAIL | `difficulty ∈ {basic, medium, hard}`；`type ∈ {single, fill}` |
| **V5** | FAIL | `single`：`options` 是 ≥2 项非空字符串数组，`answer` 是整数且 `0 ≤ answer < options.length`；`fill`：`answers` 是 ≥1 项非空字符串数组；`answer` 与 `answers` 不得同时出现 |
| **V6** | FAIL | 分布逐格核对（见下表）。新增知识点必须在 `EXPECT` 里登记，否则报 FAIL |
| **V7** | FAIL/WARN | 去重：相似度 `d ≥ 0.95` → FAIL；`0.80 ≤ d < 0.95` → WARN（只列清单） |
| **V8** | FAIL | `KPS` 恰好 6 项、id 集合与知识点 slug 集合完全一致；每项 `id/name/subtitle` 非空字符串，`concepts/formulas/pitfalls` 非空数组 |
| **V9** | WARN | 出现白名单外的字段 → 提示 `id` + 字段名（不阻断，因为 `app.js` 会忽略未知字段） |
| **V10** | WARN | 同一知识点内序号 `01..N` 无空洞、无重复 |
| **V11** | FAIL | 把拼装出的 `data.js` 真执行一遍，`window.KPS` / `window.QUESTIONS` 必须与分片聚合结果 `JSON.stringify` 后完全相等（防止拼接把结构拼坏） |
| **V12** | WARN | `data/` 下存在没登记进 `QUESTION_FILES` 的 `q-*.js` → 提示（否则整个文件会被静默忽略） |

### V6 期望分布（每题 12 题：basic 3 / medium 4 / hard 5）

| kp | 合计 | basic | medium | hard | single | fill | 含 SVG（≥） |
|---|---|---|---|---|---|---|---|
| quad-eq | 12 | 3 | 4 | 5 | 7 | 5 | 4 |
| quad-func | 12 | 3 | 4 | 5 | 7 | 5 | 5 |
| rotation | 12 | 3 | 4 | 5 | 6 | 6 | 5 |
| circle | 12 | 3 | 4 | 5 | 6 | 6 | 5 |
| similarity | 12 | 3 | 4 | 5 | 6 | 6 | 5 |
| probability | 12 | 3 | 4 | 5 | 7 | 5 | 4 |
| **合计** | **72** | **18** | **24** | **30** | **39** | **33** | **28** |

> "含 SVG" 的判定：题干里出现 `<svg`。图形是**内联在 `stem` 里的**
> `<figure class="qfig"><svg …></svg></figure>`，没有独立的 svg/figure 顶层字段。

---

## 6. 去重算法与阈值

### 归一化 `norm(stem)`

按顺序做 5 步：

1. 删除整段图形：`/<figure[\s\S]*?<\/figure>/g` → `''`
2. 删除 HTML 标签：`/<[^>]+>/g` → `''`
3. `\u00a0`（不换行空格）→ 半角空格
4. **数字归一**：`/\d+/g` → `'#'`
5. 删掉这些字符：`，。、；：？！“”‘’（）【】` + 所有空白 + `,.;:?!()[]"'` + 反引号
   + `~…—+-/=<>×÷±√²³`

第 4 步是关键：它保证"**只换数字、不换结构**的伪新题"会被归一成同一个串。

### 相似度：字符 bigram 多重集 Dice

```
d = 2 * Σ min(countA[g], countB[g]) / (|A| + |B|)
```

- bigram = 相邻两个字符（按 Unicode 字符切，不是按字节）；多重集计数。
- 长度为 1 的串，它的 bigram 记为该字符本身；空串 → `d = 0`。

### 阈值：为什么是 0.95 / 0.80

| 区间 | 处置 |
|---|---|
| `d ≥ 0.95` | **FAIL**（exit 1）——几乎/完全相同，一定是复制粘贴或"换数字"的伪新题 |
| `0.80 ≤ d < 0.95` | **WARN**（exit 0）——列进 `tools/dedupe-report.txt`，人工复核 |
| `d < 0.80` | 静默 |

标定依据（对现网 72 题实测）：

- 全库两两比对，**最高相似对只有 `d = 0.8657`**（`q-similarity-02` vs `q-similarity-04`），
  第二高 `d = 0.8627`（`q-quad-eq-04` vs `q-quad-eq-08`）。
- `d ≥ 0.95` 的对数为 **0** → 阈值不会误伤任何真实题目。
- 而"把数字全换掉"的伪新题归一后完全相同，`d = 1.0` → 一定被拦。

所以 0.95 是"零误报"的硬闸门，0.80 是"提醒人看一眼"的软线。
如果将来真加了结构相近的题（例如同模板不同设问），WARN 清单会提示你，
那时候再决定是改题还是调阈值——不要为了让构建过而随手把 0.95 调高。

### `tools/dedupe-report.txt` 格式

每次正式构建都会重写（`--check` 不写）。每行一对，按 `d` 降序，`d` 保留 3 位小数：

```
d=0.866  q-similarity-02  q-similarity-04
d=0.863  q-quad-eq-04  q-quad-eq-08
```

当前只有这 2 对（都落在 WARN 区）。若某次构建没有任何 `≥ 0.80` 的对，
该文件是**空文件**（0 字节），不写表头，方便脚本逐行解析。

---

## 7. 字节级约束（重要）

`data.js` 必须与 v2 的产物**逐字节相同**（sha256 `b35d424a…`）。
这条约束是"72 题零改动"的证明，也让本次上线不需要更换任何线上文件。

为此 `tools/build-data.js` 里有两块**冻结常量**，改一个字符就破坏字节一致性：

```js
const DEPLOY_HEADER   = [ ... ].join('\n') + '\n\n';   // data.js 的文件头块注释
const DEPLOY_Q_COMMENT = [ ... ].join('\n') + '\n';    // window.QUESTIONS 前的块注释
```

以及三条格式约定：

- `data.js` 行尾是 `\n`（LF），**文件末尾没有换行**，最后一字节是 `];` 的 `;`。
- 每道题的对象在原文里以 `},` 结尾（**含最后一个**）——这是 v2 的写法，保留。
- 不要往产物里写时间戳、路径、版本号、题目计数等任何易变内容。

> 已知的有意保留项：`data.js` 里 `window.QUESTIONS` 上方的注释写着
> "36 道题：6 知识点 × (basic 2 / medium 2 / hard 2)"，这是 v2 扩容前的历史文案，
> 实际是 72 题。为了字节一致性**故意保留原样**，不要在本次重构里"顺手修正"。

### 校验字节指纹

```bash
shasum -a 256 data.js
# 期望 b35d424aca3ed8dc7b0e434dd013f6d62062a0ca7f059ad5c117d81a25a6b88f
```

---

## 8. `tools/_migrate-split-once.js` 是什么

v2→v3 的**一次性**迁移脚本：从 v2 的 `data.js` 按文本切片，机械地生成 7 个分片。
它自带"回拼后必须与 v2 逐字节相同"的自检，跑完即冻结。

**正常情况下不要运行它**——它会用 v2 原文覆盖 `data/` 下的分片，
把你后来的修订冲掉。它留在仓库里只是作为"分片确实来自 v2 原文"的审计证据，
不参与构建。
