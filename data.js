/* =============================================================
 * data.js — 九年级数学学习工作台 · 题库与知识点讲解（只读数据）
 * 暴露全局：window.KPS / window.QUESTIONS
 * 硬约束：普通 <script src> 引入，禁用 ES module / fetch / 网络请求
 * 公式一律纯文本 + <sup>/<sub>，不引入任何数学渲染库
 * ============================================================= */

window.KPS = [
  {
    id: 'quad-eq',
    name: '一元二次方程',
    subtitle: '解法四种 + 判别式 + 韦达定理',
    concepts: [
      '只含一个未知数、未知数最高次数为 2 的整式方程叫一元二次方程，一般形式 ax<sup>2</sup>+bx+c=0，其中 a≠0。',
      '四种解法：直接开平方法、配方法、公式法、因式分解法；能因式分解优先因式分解。',
      '根的判别式决定实数根个数：两个不等实根、两个相等实根、没有实数根。',
      '根与系数的关系（韦达定理）在不求解的情况下求两根之和、两根之积。',
      '实际问题建模后解出的根必须回到情境中检验取舍（长度、人数、增长率等）。'
    ],
    formulas: [
      '一般形式：ax<sup>2</sup>+bx+c=0（a≠0）',
      '求根公式：x=(−b±√(b<sup>2</sup>−4ac))/(2a)',
      '判别式：Δ=b<sup>2</sup>−4ac；Δ&gt;0 两个不等实根，Δ=0 两个相等实根，Δ&lt;0 无实根',
      '韦达定理：x<sub>1</sub>+x<sub>2</sub>=−b/a，x<sub>1</sub>x<sub>2</sub>=c/a',
      '配方法：x<sup>2</sup>+px+q=0 可化为 (x+p/2)<sup>2</sup>=(p/2)<sup>2</sup>−q'
    ],
    pitfalls: [
      '忽略 a≠0 的前提：含参方程要先讨论二次项系数是否为 0，否则会把一次方程当二次方程解。',
      '等式两边同除含未知数的因式导致丢根，例如 x<sup>2</sup>=3x 两边除以 x，丢掉 x=0。',
      '应用题求出两个根后不按实际意义取舍（出现负长度、非整数人数等仍照抄）。'
    ]
  },
  {
    id: 'quad-func',
    name: '二次函数',
    subtitle: '图象、对称轴、顶点与最值',
    concepts: [
      '形如 y=ax<sup>2</sup>+bx+c（a≠0）的函数是二次函数，图象是抛物线。',
      '开口方向由 a 的符号决定（a&gt;0 向上、a&lt;0 向下），|a| 越大开口越窄。',
      '对称轴是过顶点的竖直直线，顶点是抛物线的最高点或最低点。',
      '三种表达式：一般式、顶点式 y=a(x−h)<sup>2</sup>+k、交点式 y=a(x−x<sub>1</sub>)(x−x<sub>2</sub>)。',
      '图象平移遵循「左加右减（左右平移只改 x）、上加下减（整体加减常数）」。'
    ],
    formulas: [
      '一般式：y=ax<sup>2</sup>+bx+c（a≠0）',
      '对称轴：x=−b/(2a)',
      '顶点坐标：(−b/(2a), (4ac−b<sup>2</sup>)/(4a))',
      '顶点式：y=a(x−h)<sup>2</sup>+k，顶点 (h, k)',
      '交点式：y=a(x−x<sub>1</sub>)(x−x<sub>2</sub>)，x<sub>1</sub>、x<sub>2</sub> 是与 x 轴交点的横坐标'
    ],
    pitfalls: [
      '对称轴符号写错：应为 x=−b/(2a)，不是 b/(2a) 或 −b/(2a) 的反号。',
      '平移方向搞反，或左右平移时把常数加在括号外（左右平移必须改 x：y=a(x−h)<sup>2</sup>）。',
      '求最值时忽略自变量取值范围：当顶点横坐标不在给定区间内，最值在区间端点取得。'
    ]
  },
  {
    id: 'rotation',
    name: '图形的旋转',
    subtitle: '旋转三要素与中心对称',
    concepts: [
      '旋转由三要素确定：旋转中心、旋转方向（顺/逆时针）、旋转角。',
      '旋转的性质：对应点到旋转中心的距离相等；对应点与旋转中心连线的夹角等于旋转角；旋转前后的图形全等。',
      '旋转作图三步：连（中心与关键点）、转（按方向角作射线）、截（取等长得对应点）。',
      '中心对称是旋转 180° 的特例；把图形绕某点旋转 180° 后能与自身重合的图形叫中心对称图形。'
    ],
    formulas: [
      '旋转角相等：∠AOA′ 等于旋转角，且 OA=OA′（O 为旋转中心）',
      '绕原点逆时针旋转 90°：(x, y) → (−y, x)',
      '绕原点旋转 180°：(x, y) → (−x, −y)',
      '中心对称：A 与 A′ 关于 O 对称 ⟺ O 是 AA′ 的中点，即 OA=OA′ 且 A、O、A′ 三点共线'
    ],
    pitfalls: [
      '旋转中心或旋转方向判断错（顺、逆时针混淆，导致坐标符号全反）。',
      '把旋转角当成「原图形与新图形的某两条边的夹角」，实际应为对应点与旋转中心连线的夹角。',
      '坐标系中旋转 90° 的坐标符号写错，或把「绕原点」的规律套到「绕非原点」的旋转上。'
    ]
  },
  {
    id: 'circle',
    name: '圆',
    subtitle: '垂径、圆周角、切线与弧长',
    concepts: [
      '同圆或等圆的半径相等；不在同一直线上的三点确定一个圆。',
      '垂径定理：垂直于弦的直径平分这条弦，并且平分弦所对的两条弧。',
      '圆周角定理：同弧所对的圆周角等于它所对圆心角的一半；半圆（直径）所对的圆周角是 90°。',
      '切线的判定与性质：经过半径外端且垂直于这条半径的直线是切线；切线垂直于过切点的半径。',
      '切线长定理：从圆外一点引圆的两条切线，切线长相等，且这一点与圆心的连线平分两切线的夹角。'
    ],
    formulas: [
      '圆周长/面积：C=2πr，S=πr<sup>2</sup>',
      '弧长：l=nπr/180（n 为圆心角度数）',
      '扇形面积：S=nπr<sup>2</sup>/360=(1/2)lr',
      '垂径定理勾股关系：r<sup>2</sup>=d<sup>2</sup>+(a/2)<sup>2</sup>（d 为弦心距，a 为弦长，r 为半径）',
      '圆锥侧面积：S<sub>侧</sub>=πrl（l 为母线长）'
    ],
    pitfalls: [
      '圆周角定理用错：必须「同弧所对」，且圆心角与圆周角对应同一段弧；一条弦所对的圆周角有两种（优弧、劣弧），可能互补。',
      '垂径定理计算时把「半弦长」和「弦心距」的位置搞混，或忘记用「半径、弦心距、半弦」构成的直角三角形。',
      '证切线时两条路径选错：已知「有公共点」用「连半径、证垂直」；未知是否有公共点用「作垂直、证半径等于 r」。'
    ]
  },
  {
    id: 'similarity',
    name: '相似',
    subtitle: '判定、性质与位似',
    concepts: [
      '相似三角形判定：两角对应相等（AA）、两边对应成比例且夹角相等（SAS）、三边对应成比例（SSS）。',
      '相似三角形性质：对应边成比例、对应角相等；周长比等于相似比，面积比等于相似比的平方。',
      '平行于三角形一边的直线与其他两边（或延长线）相交，截得的三角形与原三角形相似（「A 字型」「X 字型」基本图形）。',
      '位似图形是特殊的相似：对应点连线交于一点（位似中心），对应边互相平行（或共线）。',
      '相似是测高、测距、影长、镜面反射等实际问题的通用工具。'
    ],
    formulas: [
      '相似比：k=a/a′；周长比 =k；面积比 =k<sup>2</sup>',
      '平行线分线段成比例：若 DE∥BC，则 AD/DB=AE/EC',
      '以原点为位似中心、位似比为 k 的位似变换：(x, y) → (kx, ky)',
      '黄金比：(√5−1)/2≈0.618'
    ],
    pitfalls: [
      '列比例式时对应关系错位（没有按对应顶点的顺序写，导致比例式本身不成立）。',
      '面积比直接用相似比（应为相似比的平方）。',
      '题目只写「相似」而未指明对应关系时不做分类讨论，漏掉另一种对应方式下的解。'
    ]
  },
  {
    id: 'probability',
    name: '概率初步',
    subtitle: '等可能事件与树状图',
    concepts: [
      '事件分三类：必然事件（一定发生）、不可能事件（一定不发生）、随机事件（可能发生也可能不发生）。',
      '等可能情形下，事件 A 的概率 P(A) = A 包含的结果数 ÷ 所有等可能结果总数。',
      '求概率两步走：先确定一次试验所有等可能结果（避免重复与遗漏），再数出符合条件的结果数。',
      '两步及以上试验用列表法或树状图列举，必须分清「放回」与「不放回」。',
      '大量重复试验中，事件发生的频率会稳定在它的概率附近，可用频率估计概率。'
    ],
    formulas: [
      '等可能事件：P(A)=m/n（m 为 A 包含的结果数，n 为所有等可能结果总数）',
      '取值范围：0≤P(A)≤1；P(必然事件)=1，P(不可能事件)=0',
      '对立事件：P(A)=1−P(非A)',
      '两步试验结果总数：n=n<sub>1</sub>×n<sub>2</sub>（第一步 n<sub>1</sub> 种、第二步 n<sub>2</sub> 种）'
    ],
    pitfalls: [
      '混淆「放回」与「不放回」，导致第二步的分母写错（放回仍是原来个数，不放回要减 1）。',
      '结果不等可能就直接套 P(A)=m/n（例如两个球大小不同、骰子不均匀）。',
      '树状图漏分支或把「先 A 后 B」与「先 B 后 A」当成同一种结果重复计数。'
    ]
  }
];

/* -------------------------------------------------------------
 * 36 道题：6 知识点 × (basic 2 / medium 2 / hard 2)
 * 每道题的答案均在 QUESTION_CHECK.md 中给出独立复算过程
 * ----------------------------------------------------------- */
window.QUESTIONS = [
  /* ===== quad-eq 一元二次方程 ===== */
  {
    id: 'q-quad-eq-01',
    kp: 'quad-eq',
    difficulty: 'basic',
    type: 'single',
    stem: '一元二次方程 x<sup>2</sup>−5x+6=0 的解是（　）',
    options: ['x<sub>1</sub>=2，x<sub>2</sub>=3', 'x<sub>1</sub>=−2，x<sub>2</sub>=−3', 'x<sub>1</sub>=1，x<sub>2</sub>=6', 'x<sub>1</sub>=−1，x<sub>2</sub>=−6'],
    answer: 0,
    explanation: '左边因式分解：x<sup>2</sup>−5x+6=(x−2)(x−3)，令 (x−2)(x−3)=0，得 x<sub>1</sub>=2，x<sub>2</sub>=3。'
  },
  {
    id: 'q-quad-eq-02',
    kp: 'quad-eq',
    difficulty: 'basic',
    type: 'fill',
    stem: '方程 x<sup>2</sup>−2x−3=0 的两个根中，较大的根是（　）。',
    answers: ['3'],
    explanation: '因式分解 x<sup>2</sup>−2x−3=(x−3)(x+1)，得 x<sub>1</sub>=3，x<sub>2</sub>=−1。验算：3<sup>2</sup>−2×3−3=9−6−3=0，(−1)<sup>2</sup>−2×(−1)−3=1+2−3=0，两根都正确；其中较大的根是 3。'
  },
  {
    id: 'q-quad-eq-03',
    kp: 'quad-eq',
    difficulty: 'medium',
    type: 'fill',
    stem: '若关于 x 的方程 x<sup>2</sup>−2x+m=0 有两个相等的实数根，则 m=（　）。',
    answers: ['1'],
    explanation: 'Δ=b<sup>2</sup>−4ac=(−2)<sup>2</sup>−4×1×m=4−4m。两个相等的实数根 ⇔ Δ=0，即 4−4m=0，解得 m=1。检验：m=1 时原方程为 x<sup>2</sup>−2x+1=(x−1)<sup>2</sup>=0，根为 x<sub>1</sub>=x<sub>2</sub>=1，确实两个相等实根。'
  },
  {
    id: 'q-quad-eq-04',
    kp: 'quad-eq',
    difficulty: 'medium',
    type: 'fill',
    stem: '已知 x<sub>1</sub>、x<sub>2</sub> 是方程 2x<sup>2</sup>−6x+3=0 的两个根，则 1/x<sub>1</sub>+1/x<sub>2</sub>=（　）。',
    answers: ['2'],
    explanation: '由韦达定理：x<sub>1</sub>+x<sub>2</sub>=−b/a=−(−6)/2=3，x<sub>1</sub>x<sub>2</sub>=c/a=3/2。通分得 1/x<sub>1</sub>+1/x<sub>2</sub>=(x<sub>1</sub>+x<sub>2</sub>)/(x<sub>1</sub>x<sub>2</sub>)=3÷(3/2)=3×(2/3)=2。'
  },
  {
    id: 'q-quad-eq-05',
    kp: 'quad-eq',
    difficulty: 'hard',
    type: 'single',
    stem: '若关于 x 的方程 ax<sup>2</sup>+2x+1=0 有实数根，则 a 的取值范围是（　）',
    options: ['a≤1', 'a≤1 且 a≠0', 'a<1', 'a<1 且 a≠0'],
    answer: 0,
    explanation: '必须分类讨论。① 当 a=0 时，方程化为 2x+1=0，是一次方程，有实数根 x=−1/2，符合条件；② 当 a≠0 时是二次方程，Δ=2<sup>2</sup>−4·a·1=4−4a≥0，解得 a≤1。合并两种情况：a=0 已被 a≤1 包含，所以 a 的取值范围是 a≤1（不能把 a=0 排除掉，这是本题的易错点）。'
  },
  {
    id: 'q-quad-eq-06',
    kp: 'quad-eq',
    difficulty: 'hard',
    type: 'single',
    stem: '若一元二次方程 x<sup>2</sup>−2x+m=0 的两个实数根异号，则 m 的取值范围是（　）',
    options: ['m>0', 'm<0', 'm<1', '0<m<1'],
    answer: 1,
    explanation: '两根异号 ⇔ 两根之积小于 0。由韦达定理 x<sub>1</sub>x<sub>2</sub>=c/a=m/1=m，所以需要 m<0。检验：m<0 时 Δ=(−2)<sup>2</sup>−4×1×m=4−4m&gt;4&gt;0，方程确有两个不等实根；例如 m=−3 时 x<sup>2</sup>−2x−3=0 的根是 3 与 −1，符号相反，符合题意。'
  },

  /* ===== quad-func 二次函数 ===== */
  {
    id: 'q-quad-func-01',
    kp: 'quad-func',
    difficulty: 'basic',
    type: 'single',
    stem: '抛物线 y=−3(x−2)<sup>2</sup>+5 的顶点坐标是（　）',
    options: ['(−2, 5)', '(2, −5)', '(2, 5)', '(5, 2)'],
    answer: 2,
    explanation: '顶点式 y=a(x−h)<sup>2</sup>+k 的顶点是 (h, k)。本题 a=−3、h=2、k=5，所以顶点为 (2, 5)。验证：展开得 y=−3x<sup>2</sup>+12x−7，对称轴 x=−b/(2a)=−12/(2×(−3))=2，顶点纵坐标 y(2)=−3×4+12×2−7=−12+24−7=5，一致。'
  },
  {
    id: 'q-quad-func-02',
    kp: 'quad-func',
    difficulty: 'basic',
    type: 'fill',
    stem: '抛物线 y=x<sup>2</sup>−4x+3 的对称轴是直线 x=（　）。',
    answers: ['2'],
    explanation: '对称轴公式 x=−b/(2a)。这里 a=1、b=−4，所以 x=−(−4)/(2×1)=4/2=2。'
  },
  {
    id: 'q-quad-func-03',
    kp: 'quad-func',
    difficulty: 'medium',
    type: 'single',
    stem: '抛物线 y=x<sup>2</sup>−2x−3 与 x 轴交点的坐标是（　）',
    options: ['(1, 0)，(−3, 0)', '(3, 0)，(−1, 0)', '(−3, 0)，(−1, 0)', '(3, 0)，(1, 0)'],
    answer: 1,
    explanation: '令 y=0：x<sup>2</sup>−2x−3=(x−3)(x+1)=0，得 x=3 或 x=−1，所以交点为 (3, 0) 与 (−1, 0)。代回检验：3<sup>2</sup>−2×3−3=9−6−3=0，(−1)<sup>2</sup>−2×(−1)−3=1+2−3=0，均成立。'
  },
  {
    id: 'q-quad-func-04',
    kp: 'quad-func',
    difficulty: 'medium',
    type: 'fill',
    stem: '已知抛物线 y=x<sup>2</sup>+bx+c 的顶点是 (1, −4)，则 b+c=（　）。',
    answers: ['-5'],
    explanation: '由顶点横坐标：−b/(2×1)=1，得 b=−2。再把顶点 (1, −4) 代入解析式：1<sup>2</sup>+(−2)×1+c=−4，即 1−2+c=−4，得 c=−3。所以 b+c=−2+(−3)=−5。检验：y=x<sup>2</sup>−2x−3=(x−1)<sup>2</sup>−4，顶点确为 (1, −4)。'
  },
  {
    id: 'q-quad-func-05',
    kp: 'quad-func',
    difficulty: 'hard',
    type: 'single',
    stem: '当 −1≤x≤3 时，二次函数 y=x<sup>2</sup>−2x+3 的最大值与最小值之和是（　）',
    options: ['6', '8', '4', '9'],
    answer: 1,
    explanation: '配方：y=x<sup>2</sup>−2x+3=(x−1)<sup>2</sup>+2，开口向上，对称轴 x=1 落在区间 [−1, 3] 内，所以最小值在顶点取得：y(1)=2。最大值要比较两端点：x=−1 时 y=1+2+3=6；x=3 时 y=9−6+3=6。两端点值相等，最大值为 6。最大值与最小值之和 = 6+2 = 8。'
  },
  {
    id: 'q-quad-func-06',
    kp: 'quad-func',
    difficulty: 'hard',
    type: 'fill',
    stem: '若二次函数 y=2x<sup>2</sup>−4x+m 的图象与 x 轴只有一个公共点，则 m=（　）。',
    answers: ['2'],
    explanation: '图象与 x 轴只有一个公共点 ⇔ 方程 2x<sup>2</sup>−4x+m=0 有两个相等的实数根 ⇔ Δ=0。Δ=(−4)<sup>2</sup>−4×2×m=16−8m=0，解得 m=2。检验：m=2 时 y=2x<sup>2</sup>−4x+2=2(x−1)<sup>2</sup>，顶点 (1, 0) 恰在 x 轴上，只有一个公共点，成立。'
  },

  /* ===== rotation 图形的旋转 ===== */
  {
    id: 'q-rotation-01',
    kp: 'rotation',
    difficulty: 'basic',
    type: 'single',
    stem: '确定一个旋转需要三个要素，它们是（　）',
    options: ['旋转中心、旋转角、图形的大小变化', '旋转方向、旋转角、对应点的个数', '旋转中心、旋转方向、旋转角', '旋转中心、对称轴、旋转角'],
    answer: 2,
    explanation: '旋转由旋转中心（绕哪一点转）、旋转方向（顺时针或逆时针）、旋转角（转多少度）唯一确定。旋转前后的图形全等，大小不变，所以「图形的大小变化」不是要素；「对应点的个数」与旋转无关；「对称轴」是轴对称的概念。'
  },
  {
    id: 'q-rotation-02',
    kp: 'rotation',
    difficulty: 'basic',
    type: 'single',
    stem: '点 P(3, −1) 绕原点 O 旋转 180° 后得到的点 P′ 的坐标是（　）',
    options: ['(3, 1)', '(−3, 1)', '(−3, −1)', '(1, −3)'],
    answer: 1,
    explanation: '绕原点旋转 180° 的坐标规律是 (x, y)→(−x, −y)，把 (3, −1) 代入得 P′(−3, 1)。也可理解为 P 与 P′ 关于原点中心对称，即原点 O 是线段 PP′ 的中点：(3+(−3))/2=0，(−1+1)/2=0，验证成立。'
  },
  {
    id: 'q-rotation-03',
    kp: 'rotation',
    difficulty: 'medium',
    type: 'fill',
    stem: '点 A(−2, 5) 绕原点 O 逆时针旋转 90° 后得到点 A′，则 A′ 的坐标是（　）。（写成 (x, y) 的形式）',
    answers: ['(-5,-2)'],
    explanation: '绕原点逆时针旋转 90° 的坐标规律是 (x, y)→(−y, x)。把 x=−2、y=5 代入：−y=−5，x=−2，所以 A′(−5, −2)。验证：|OA|=√((−2)<sup>2</sup>+5<sup>2</sup>)=√29，|OA′|=√((−5)<sup>2</sup>+(−2)<sup>2</sup>)=√29，长度相等；OA 的斜率为 5/(−2)=−2.5，OA′ 的斜率为 (−2)/(−5)=0.4，乘积 −1，两条半径互相垂直，符合旋转 90°。'
  },
  {
    id: 'q-rotation-04',
    kp: 'rotation',
    difficulty: 'medium',
    type: 'fill',
    stem: '点 A(2, −3) 关于点 M(1, 1) 中心对称的点 A′ 的坐标是（　）。（写成 (x, y) 的形式）',
    answers: ['(0,5)'],
    explanation: '中心对称就是旋转 180°，等价于 M 是线段 AA′ 的中点。设 A′(x, y)，则 (2+x)/2=1、( −3+y)/2=1，解得 x=0、y=5，所以 A′(0, 5)。验证：AM=√((2−1)<sup>2</sup>+(−3−1)<sup>2</sup>)=√17，MA′=√((0−1)<sup>2</sup>+(5−1)<sup>2</sup>)=√17，长度相等；AM 斜率=(1−(−3))/(1−2)=−4，MA′ 斜率=(5−1)/(0−1)=−4，斜率相同故三点共线，符合中心对称。'
  },
  {
    id: 'q-rotation-05',
    kp: 'rotation',
    difficulty: 'hard',
    type: 'fill',
    stem: '把点 A(1, 2) 绕原点 O 旋转 90°（未说明方向）得到点 B，则线段 AB 的长的平方 AB<sup>2</sup>=（　）。',
    answers: ['10'],
    explanation: '方向未定，必须分类讨论。① 逆时针 90°：(x, y)→(−y, x)，B(−2, 1)，AB<sup>2</sup>=(1−(−2))<sup>2</sup>+(2−1)<sup>2</sup>=9+1=10；② 顺时针 90°：(x, y)→(y, −x)，B(2, −1)，AB<sup>2</sup>=(1−2)<sup>2</sup>+(2−(−1))<sup>2</sup>=1+9=10。两种情形结果相同。也可用旋转性质直接算：∠AOB=90°，OA=OB=√(1<sup>2</sup>+2<sup>2</sup>)=√5，由勾股定理 AB<sup>2</sup>=OA<sup>2</sup>+OB<sup>2</sup>=5+5=10，与旋转方向无关。'
  },
  {
    id: 'q-rotation-06',
    kp: 'rotation',
    difficulty: 'hard',
    type: 'fill',
    stem: '把点 A(3, 1) 绕原点 O 逆时针旋转 90° 得到点 A′，则点 A′ 关于 x 轴对称的点的坐标是（　）。（写成 (x, y) 的形式）',
    answers: ['(-1,-3)'],
    explanation: '第一步，逆时针旋转 90°：(x, y)→(−y, x)，故 A(3, 1)→A′(−1, 3)。第二步，关于 x 轴对称：(x, y)→(x, −y)，故 (−1, 3)→(−1, −3)。验证：所求点与 A′ 横坐标相同、纵坐标互为相反数，确实关于 x 轴对称。'
  },

  /* ===== circle 圆 ===== */
  {
    id: 'q-circle-01',
    kp: 'circle',
    difficulty: 'basic',
    type: 'single',
    stem: '点 C 在 ⊙O 的优弧 AB 上，若圆心角 ∠AOB=80°，则圆周角 ∠ACB 的度数是（　）',
    options: ['80°', '160°', '40°', '140°'],
    answer: 2,
    explanation: '圆周角定理：同弧（这里是劣弧 AB）所对的圆周角等于它所对圆心角的一半。C 在优弧上，∠ACB 与 ∠AOB 对的是同一段劣弧 AB，所以 ∠ACB=½×80°=40°。注意：若 C 在劣弧 AB 上，∠ACB 会是 180°−40°=140°，这就是本题易错的地方，故必须看清 C 在优弧还是劣弧。'
  },
  {
    id: 'q-circle-02',
    kp: 'circle',
    difficulty: 'basic',
    type: 'fill',
    stem: '⊙O 的半径为 5，圆心 O 到弦 AB 的距离（弦心距）为 3，则弦 AB 的长是（　）。',
    answers: ['8'],
    explanation: '由垂径定理，半径、弦心距、半弦构成直角三角形：r<sup>2</sup>=d<sup>2</sup>+(a/2)<sup>2</sup>。代入 5<sup>2</sup>=3<sup>2</sup>+(a/2)<sup>2</sup>，得 (a/2)<sup>2</sup>=25−9=16，a/2=4，所以弦 AB=2×4=8。'
  },
  {
    id: 'q-circle-03',
    kp: 'circle',
    difficulty: 'medium',
    type: 'fill',
    stem: '⊙O 的半径为 13，弦 AB=24，则圆心 O 到弦 AB 的距离是（　）。',
    answers: ['5'],
    explanation: '先求半弦长：AB/2=12。由垂径定理的勾股关系 r<sup>2</sup>=d<sup>2</sup>+(a/2)<sup>2</sup>，得 d=√(13<sup>2</sup>−12<sup>2</sup>)=√(169−144)=√25=5。'
  },
  {
    id: 'q-circle-04',
    kp: 'circle',
    difficulty: 'medium',
    type: 'fill',
    stem: '一个扇形的半径是 4，弧长是 6，则这个扇形的面积是（　）。',
    answers: ['12'],
    explanation: '用扇形面积公式 S=½lr：S=½×6×4=12。也可用 S=nπr<sup>2</sup>/360 验证：由 l=nπr/180 得 nπ/180=l/r=6/4=1.5，于是 S=(nπ/180)×r<sup>2</sup>/2=1.5×16/2=12，两法一致。'
  },
  {
    id: 'q-circle-05',
    kp: 'circle',
    difficulty: 'hard',
    type: 'single',
    stem: '⊙O 的半径为 5，弦 AB=6，点 C 在优弧 AB 上，则 cos∠ACB 的值是（　）',
    options: ['3/5', '4/5', '5/4', '3/4'],
    answer: 1,
    explanation: '作 OD⊥AB 于 D。由垂径定理 AD=½AB=3，在 Rt△OAD 中 OD=√(OA<sup>2</sup>−AD<sup>2</sup>)=√(5<sup>2</sup>−3<sup>2</sup>)=√16=4。∠AOD 的邻边是 OD=4、对边是 AD=3、斜边 OA=5，故 cos∠AOD=OD/OA=4/5。又 ∠AOB=2∠AOD，C 在优弧上时由圆周角定理 ∠ACB=½∠AOB=∠AOD，所以 cos∠ACB=cos∠AOD=4/5。'
  },
  {
    id: 'q-circle-06',
    kp: 'circle',
    difficulty: 'hard',
    type: 'fill',
    stem: 'PA、PB 分别切 ⊙O 于 A、B 两点，∠APB=90°，PA=3，则 ⊙O 的半径是（　）。',
    answers: ['3'],
    explanation: '连接 OA，由切线的性质得 OA⊥PA，即 △OAP 是直角三角形。由切线长定理 PA=PB，且 PO 平分 ∠APB，所以 ∠APO=½×90°=45°。在 Rt△OAP 中 tan∠APO=OA/PA，即 OA=PA×tan45°=3×1=3，所以半径 r=3。（也可由 △OAP 中 ∠AOP=45° 知它是等腰直角三角形，OA=PA=3。）'
  },

  /* ===== similarity 相似 ===== */
  {
    id: 'q-similarity-01',
    kp: 'similarity',
    difficulty: 'basic',
    type: 'single',
    stem: '两个相似三角形的相似比是 2:3，则它们的面积比是（　）',
    options: ['2:3', '4:9', '8:27', '16:81'],
    answer: 1,
    explanation: '相似三角形的面积比等于相似比的平方：(2/3)<sup>2</sup>=4/9，即 4:9。若误答 2:3 就是直接把相似比当面积比，这是最常见的错误。'
  },
  {
    id: 'q-similarity-02',
    kp: 'similarity',
    difficulty: 'basic',
    type: 'fill',
    stem: '两个相似三角形的相似比是 3:5，较小三角形的周长是 12，则较大三角形的周长是（　）。',
    answers: ['20'],
    explanation: '相似三角形的周长比等于相似比：P<sub>小</sub>/P<sub>大</sub>=3/5。代入 P<sub>小</sub>=12：12/P<sub>大</sub>=3/5，交叉相乘得 3P<sub>大</sub>=60，所以 P<sub>大</sub>=20。'
  },
  {
    id: 'q-similarity-03',
    kp: 'similarity',
    difficulty: 'medium',
    type: 'fill',
    stem: '在 △ABC 中，点 D 在边 AB 上，点 E 在边 AC 上，且 DE∥BC。若 AD=2，DB=3，AE=4，则 EC=（　）。',
    answers: ['6'],
    explanation: '由 DE∥BC 截得 △ADE∽△ABC（A 字型）。平行线分线段成比例：AD/DB=AE/EC，即 2/3=4/EC，交叉相乘 2×EC=12，得 EC=6。用另一条路验证：AD/AB=AE/AC，即 2/5=4/AC，得 AC=10，于是 EC=AC−AE=10−4=6，两法一致。'
  },
  {
    id: 'q-similarity-04',
    kp: 'similarity',
    difficulty: 'medium',
    type: 'fill',
    stem: '两个相似三角形的面积比是 9:16，若较小三角形的周长是 18，则较大三角形的周长是（　）。',
    answers: ['24'],
    explanation: '面积比等于相似比的平方，所以相似比=√(9/16)=3/4。周长比等于相似比：18/P<sub>大</sub>=3/4，得 3P<sub>大</sub>=72，P<sub>大</sub>=24。检验：周长比 18:24=3:4，其平方 9:16 正是题给面积比。'
  },
  {
    id: 'q-similarity-05',
    kp: 'similarity',
    difficulty: 'hard',
    type: 'fill',
    stem: '在 △ABC 中，AB=6，AC=4，点 D 在边 AB 上且 AD=2，点 E 在边 AC 上。若 △ADE 与 △ABC 相似，则 AE 的长是（　）。（只需填一个符合条件的值）',
    answers: ['4/3', '3'],
    explanation: '题目只说「相似」而未指明对应顶点，必须分类讨论。① AD 与 AB 是对应边：AD/AB=AE/AC，即 2/6=AE/4，得 AE=8/6=4/3；② AD 与 AC 是对应边：AD/AC=AE/AB，即 2/4=AE/6，得 AE=12/4=3。两个值都满足 E 在边 AC 上（4/3&lt;4、3&lt;4），所以 AE=4/3 或 AE=3，填其中一个即可。'
  },
  {
    id: 'q-similarity-06',
    kp: 'similarity',
    difficulty: 'hard',
    type: 'single',
    stem: '在 △ABC 中，点 D 在边 AB 上，点 E 在边 AC 上，DE∥BC，且 AD:DB=1:2，则 △ADE 的面积与四边形 DBCE 的面积之比是（　）',
    options: ['1:2', '1:3', '1:8', '1:9'],
    answer: 2,
    explanation: '由 DE∥BC 得 △ADE∽△ABC。相似比 =AD/AB。因为 AD:DB=1:2，设 AD=1 份、DB=2 份，则 AB=3 份，相似比=1/3。面积比 =相似比的平方 =1:9，即 S<sub>△ADE</sub>:S<sub>△ABC</sub>=1:9。四边形 DBCE 的面积 =S<sub>△ABC</sub>−S<sub>△ADE</sub>=9−1=8 份，所以 S<sub>△ADE</sub>:S<sub>四边形DBCE</sub>=1:8。误选 1:9 是漏掉了「四边形」那一块。'
  },

  /* ===== probability 概率初步 ===== */
  {
    id: 'q-probability-01',
    kp: 'probability',
    difficulty: 'basic',
    type: 'single',
    stem: '掷一枚质地均匀的骰子一次，朝上的点数是 3 的倍数的概率是（　）',
    options: ['1/6', '1/3', '1/2', '2/3'],
    answer: 1,
    explanation: '所有等可能结果共 6 种（1 到 6）。3 的倍数有 3 和 6，共 2 种，所以 P=2/6=1/3。'
  },
  {
    id: 'q-probability-02',
    kp: 'probability',
    difficulty: 'basic',
    type: 'fill',
    stem: '掷一枚质地均匀的骰子一次，朝上的点数是偶数的概率是（　）。（填分数或小数均可）',
    answers: ['1/2', '0.5'],
    explanation: '偶数点有 2、4、6 共 3 种，所有等可能结果共 6 种，所以 P=3/6=1/2=0.5。'
  },
  {
    id: 'q-probability-03',
    kp: 'probability',
    difficulty: 'medium',
    type: 'fill',
    stem: '袋中有 2 个红球和 1 个白球，除颜色外完全相同。不放回地依次摸出 2 个球，则两次都摸到红球的概率是（　）。',
    answers: ['1/3'],
    explanation: '分步计算：第一次摸到红球的概率是 2/3；因为不放回，袋里只剩 2 个球、其中红球 1 个，第二次摸到红球的概率是 1/2。由乘法公式 P=2/3×1/2=1/3。枚举验证：两红球记为 R<sub>1</sub>、R<sub>2</sub>，白球 W，有序结果共 6 种（R<sub>1</sub>R<sub>2</sub>、R<sub>2</sub>R<sub>1</sub>、R<sub>1</sub>W、WR<sub>1</sub>、R<sub>2</sub>W、WR<sub>2</sub>），其中两次都红的有 2 种，2/6=1/3。'
  },
  {
    id: 'q-probability-04',
    kp: 'probability',
    difficulty: 'medium',
    type: 'single',
    stem: '同时掷两枚质地均匀的骰子，朝上的点数之和为 7 的概率是（　）',
    options: ['1/6', '1/9', '1/12', '7/36'],
    answer: 0,
    explanation: '两枚骰子的结果要按有序对计数，共 6×6=36 种等可能结果。和为 7 的有 (1,6)、(2,5)、(3,4)、(4,3)、(5,2)、(6,1) 共 6 种（注意 1+6 与 6+1 是两种不同结果，不能只数 3 种），所以 P=6/36=1/6。'
  },
  {
    id: 'q-probability-05',
    kp: 'probability',
    difficulty: 'hard',
    type: 'fill',
    stem: '从 1、2、3、4 这四个数字中任取两个不同的数字组成两位数（每个数字只能使用一次），所得两位数是偶数的概率是（　）。（填分数或小数均可）',
    answers: ['1/2', '0.5'],
    explanation: '先构造等可能样本空间：十位有 4 种取法，个位再从剩下 3 个数字中取，共 4×3=12 种等可能结果（12、13、14、21、23、24、31、32、34、41、42、43）。两位数为偶数 ⇔ 个位是偶数（2 或 4）：个位取 2 时十位可取 1、3、4，得 12、32、42 共 3 种；个位取 4 时十位可取 1、2、3，得 14、24、34 共 3 种。合计 6 种，所以 P=6/12=1/2。'
  },
  {
    id: 'q-probability-06',
    kp: 'probability',
    difficulty: 'hard',
    type: 'single',
    stem: '连续抛掷一枚质地均匀的硬币 3 次，恰好出现 2 次正面的概率是（　）',
    options: ['1/8', '3/8', '1/2', '5/8'],
    answer: 1,
    explanation: '三次抛掷共 2<sup>3</sup>=8 种等可能结果（正正正、正正反、正反正、正反反、反正正、反正反、反反正、反反反）。恰好 2 次正面的有「正正反」「正反正」「反正正」共 3 种，所以 P=3/8。'
  }
];
