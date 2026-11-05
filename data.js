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

  /* ===== v2 新增：quad-eq 07–12 ===== */
  {
    id: 'q-quad-eq-07',
    kp: 'quad-eq',
    difficulty: 'basic',
    type: 'single',
    stem: '如图，抛物线 y=ax<sup>2</sup>+bx+c（a&gt;0）的顶点为 P(1,2)，图象与 x 轴没有公共点。关于 x 的方程 ax<sup>2</sup>+bx+c=0 的根的情况是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="抛物线开口向上，顶点P坐标为(1,2)，整条图象在x轴上方，与x轴没有公共点"><line x1="46" y1="130" x2="306" y2="130" stroke="currentColor" stroke-width="1.6"/><line x1="306" y1="130" x2="297" y2="126" stroke="currentColor" stroke-width="1.6"/><line x1="306" y1="130" x2="297" y2="134" stroke="currentColor" stroke-width="1.6"/><line x1="140" y1="214" x2="140" y2="22" stroke="currentColor" stroke-width="1.6"/><line x1="140" y1="22" x2="136" y2="31" stroke="currentColor" stroke-width="1.6"/><line x1="140" y1="22" x2="144" y2="31" stroke="currentColor" stroke-width="1.6"/><polyline points="60,23.8 78.5,39.7 96.9,53 115.4,63.7 133.8,71.7 152.3,77 170.8,79.7 189.2,79.7 207.7,77 226.2,71.7 244.6,63.7 263.1,53 281.5,39.7 300,23.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="180" cy="80" r="2.6" fill="currentColor"/><text x="302" y="124" font-size="13" font-family="inherit" fill="currentColor">x</text><text x="150" y="30" font-size="13" font-family="inherit" fill="currentColor">y</text><text x="132" y="146" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">O</text><text x="172" y="96" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">P</text><text x="186" y="97" font-size="11.5" font-family="inherit" fill="currentColor">(1,2)</text></svg></figure>',
    options: ['有两个不相等的实数根', '有两个相等的实数根', '没有实数根', '无法确定'],
    answer: 2,
    explanation: '函数图象与 x 轴公共点的个数 = 对应方程实数根的个数。图象与 x 轴没有公共点，说明方程 ax<sup>2</sup>+bx+c=0 没有实数根，即 Δ&lt;0。代数验证：a&gt;0 时抛物线开口向上，顶点 (1,2) 是最低点，最小值 2&gt;0，整条曲线都在 x 轴上方；由顶点式 y=a(x−1)<sup>2</sup>+2=ax<sup>2</sup>−2ax+(a+2)，Δ=(−2a)<sup>2</sup>−4a(a+2)=−8a&lt;0（a&gt;0），确实无实根。选 C。'
  },
  {
    id: 'q-quad-eq-08',
    kp: 'quad-eq',
    difficulty: 'medium',
    type: 'fill',
    stem: '已知 x<sub>1</sub>、x<sub>2</sub> 是方程 x<sup>2</sup>−4x+1=0 的两个根，则 x<sub>1</sub><sup>2</sup>+x<sub>2</sub><sup>2</sup>=（　）。',
    answers: ['14'],
    explanation: '先确认方程确有两个实根：Δ=(−4)<sup>2</sup>−4×1×1=12&gt;0，可以谈两根。由韦达定理 x<sub>1</sub>+x<sub>2</sub>=−b/a=4，x<sub>1</sub>x<sub>2</sub>=c/a=1。变形 x<sub>1</sub><sup>2</sup>+x<sub>2</sub><sup>2</sup>=(x<sub>1</sub>+x<sub>2</sub>)<sup>2</sup>−2x<sub>1</sub>x<sub>2</sub>=4<sup>2</sup>−2×1=16−2=14。'
  },
  {
    id: 'q-quad-eq-09',
    kp: 'quad-eq',
    difficulty: 'medium',
    type: 'single',
    stem: '如图，用长 20 m 的篱笆一面靠墙（墙足够长）围成矩形菜园 ABCD，其中 AD 边靠墙，AB=x m。若菜园面积为 48 m<sup>2</sup>，则可列出的方程是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="矩形ABCD，AD边贴着墙，AB、BC、CD三边是篱笆，篱笆总长20，矩形面积48，AB记为x"><polygon points="238,64 96,64 96,182 238,182" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="244" y1="44" x2="244" y2="202" stroke="currentColor" stroke-width="1.6"/><line x1="252" y1="44" x2="252" y2="202" stroke="currentColor" stroke-width="1.6"/><path d="M238,78 L224,78 L224,64" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M110,64 L110,78 L96,78" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M110,182 L110,168 L96,168" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M224,182 L224,168 L238,168" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="232" y="56" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A</text><text x="88" y="56" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">B</text><text x="88" y="196" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">C</text><text x="232" y="196" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">D</text><text x="167" y="54" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">x</text><text x="167" y="126" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">面积 48</text><text x="167" y="214" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">篱笆总长 20</text><text x="262" y="126" font-size="13" font-family="inherit" fill="currentColor">墙</text></svg></figure>',
    options: ['x(20−2x)=48', 'x(20−x)=48', '2x(20−2x)=48', 'x(10−x)=48'],
    answer: 0,
    explanation: '篱笆只用三条边：AB、BC、CD，其中 AB=CD=x，所以 BC=20−2x（因长度为正面，需 0&lt;x&lt;10）。面积 =AB·BC=x(20−2x)，由面积 48 得 x(20−2x)=48。整理得 x<sup>2</sup>−10x+24=0，(x−4)(x−6)=0，x=4 或 6，都满足 0&lt;x&lt;10，两个答案都合题意。B 漏掉了一条宽的篱笆，C 多乘了 2，D 是把周长当成 20 的错解。选 A。'
  },
  {
    id: 'q-quad-eq-10',
    kp: 'quad-eq',
    difficulty: 'hard',
    type: 'fill',
    stem: '如图，矩形 ABCD 的周长为 34，面积为 60，则对角线 AC 的长是（　）。<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="矩形ABCD，对角线AC，矩形周长34，面积60，图上不标边长"><polygon points="80,60 250,60 250,170 80,170" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="80" y1="60" x2="250" y2="170" stroke="currentColor" stroke-width="1.6"/><path d="M80,74 L94,74 L94,60" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M236,60 L236,74 L250,74" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M236,170 L236,156 L250,156" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M80,156 L94,156 L94,170" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="72" y="54" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A</text><text x="258" y="54" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="258" y="186" font-size="13" font-family="inherit" fill="currentColor">C</text><text x="72" y="186" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">D</text><text x="182" y="112" font-size="11.5" font-family="inherit" fill="currentColor">AC</text><text x="160" y="200" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">周长 34，面积 60</text></svg></figure>',
    answers: ['13'],
    explanation: '设两边长为 m、n，则 m+n=17（半周长），mn=60（面积）。由韦达定理的逆用：以 m、n 为根的一元二次方程是 t<sup>2</sup>−17t+60=0，(t−5)(t−12)=0，所以两边为 5 和 12。由勾股定理 AC=√(5<sup>2</sup>+12<sup>2</sup>)=√169=13。'
  },
  {
    id: 'q-quad-eq-11',
    kp: 'quad-eq',
    difficulty: 'hard',
    type: 'single',
    stem: '关于 x 的方程 (m−1)x<sup>2</sup>−2x+1=0 有两个实数根（允许两个根相等），则 m 的取值范围是（　）',
    options: ['m≤2', 'm≤2 且 m≠1', 'm&lt;2', 'm&lt;2 且 m≠1'],
    answer: 1,
    explanation: '必须按二次项系数是否为 0 分类。① 若 m−1=0，即 m=1：原方程化为 −2x+1=0，是一次方程，只有一个根 x=1/2，"有两个实数根"不成立，所以 m=1 必须排除。② 若 m−1≠0：方程是一元二次方程，有两个实数根 ⇔ Δ≥0。Δ=(−2)<sup>2</sup>−4(m−1)×1=4−4m+4=8−4m≥0，解得 m≤2，同时要有 m≠1。综上 m≤2 且 m≠1。注意与"方程有实数根"区分：那种情形 m=1 要并入答案（一次方程也有根），本题恰好相反，必须排除。选 B。'
  },
  {
    id: 'q-quad-eq-12',
    kp: 'quad-eq',
    difficulty: 'hard',
    type: 'single',
    stem: '如图，在 Rt△ABC 中，∠B=90°，AB=6 cm，BC=8 cm。点 P 从 A 出发沿 AB 向 B 以 1 cm/s 运动，点 Q 从 B 出发沿 BC 向 C 以 2 cm/s 运动，两点同时出发。设运动时间为 t s，当 △PBQ 的面积为 8 cm<sup>2</sup> 时，t 的值为（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="直角三角形ABC，∠B=90°，AB=6，BC=8，点P在AB上以每秒1单位向B运动，点Q在BC上以每秒2单位向C运动"><polygon points="90,80 90,200 250,200" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M90,186 L104,186 L104,200" fill="none" stroke="currentColor" stroke-width="1.2"/><line x1="90" y1="100" x2="130" y2="200" stroke="currentColor" stroke-width="1.6"/><line x1="76" y1="96" x2="76" y2="116" stroke="currentColor" stroke-width="1.6"/><line x1="76" y1="116" x2="72" y2="108" stroke="currentColor" stroke-width="1.6"/><line x1="76" y1="116" x2="80" y2="108" stroke="currentColor" stroke-width="1.6"/><line x1="146" y1="216" x2="166" y2="216" stroke="currentColor" stroke-width="1.6"/><line x1="166" y1="216" x2="158" y2="212" stroke="currentColor" stroke-width="1.6"/><line x1="166" y1="216" x2="158" y2="220" stroke="currentColor" stroke-width="1.6"/><circle cx="90" cy="100" r="2.6" fill="currentColor"/><circle cx="130" cy="200" r="2.6" fill="currentColor"/><text x="82" y="74" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A</text><text x="82" y="216" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">B</text><text x="258" y="214" font-size="13" font-family="inherit" fill="currentColor">C</text><text x="98" y="94" font-size="13" font-family="inherit" fill="currentColor">P</text><text x="130" y="218" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">Q</text><text x="86" y="156" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">6</text><text x="205" y="217" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">8</text><text x="70" y="112" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">1 单位/秒</text><text x="174" y="234" font-size="11.5" font-family="inherit" fill="currentColor">2 单位/秒</text></svg></figure>',
    options: ['2 s', '4 s', '2 s 或 4 s', '3 s'],
    answer: 2,
    explanation: '运动 t 秒后，BP=6−t，BQ=2t。∠B=90°，所以 S<sub>△PBQ</sub>=½·BP·BQ=½(6−t)(2t)=t(6−t)。由 t(6−t)=8 得 t<sup>2</sup>−6t+8=0，(t−2)(t−4)=0，t=2 或 t=4。必须逐个回代检验是否落在运动区间内：P 在 AB 上要求 0≤t≤6，Q 在 BC 上要求 0≤2t≤8 即 0≤t≤4，两个时刻都在 [0,4] 内，都合题意（t=2 时 BP=4、BQ=4，面积 8；t=4 时 BP=2、BQ=8，面积 8）。选 C。'
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

  /* ===== v2 新增：quad-func 07–12 ===== */
  {
    id: 'q-quad-func-07',
    kp: 'quad-func',
    difficulty: 'basic',
    type: 'single',
    stem: '二次函数 y=ax<sup>2</sup>+bx+c（a≠0）的图象如图，顶点为 P(1,−2)。下列结论正确的是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="开口向上的抛物线，顶点P坐标为(1,−2)，虚线是对称轴x=1，抛物线左半支完整可见"><line x1="46" y1="110" x2="306" y2="110" stroke="currentColor" stroke-width="1.6"/><line x1="306" y1="110" x2="297" y2="106" stroke="currentColor" stroke-width="1.6"/><line x1="306" y1="110" x2="297" y2="114" stroke="currentColor" stroke-width="1.6"/><line x1="140" y1="214" x2="140" y2="26" stroke="currentColor" stroke-width="1.6"/><line x1="140" y1="26" x2="136" y2="35" stroke="currentColor" stroke-width="1.6"/><line x1="140" y1="26" x2="144" y2="35" stroke="currentColor" stroke-width="1.6"/><polyline points="80.5,77.1 95,97.8 109.6,115.1 124.1,128.9 138.7,139.2 153.2,146.1 167.7,149.6 182.3,149.6 196.8,146.1 211.3,139.2 225.9,128.9 240.4,115.1 255,97.8 269.5,77.1" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="175" y1="38" x2="175" y2="172" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><circle cx="175" cy="150" r="2.6" fill="currentColor"/><text x="302" y="104" font-size="13" font-family="inherit" fill="currentColor">x</text><text x="150" y="34" font-size="13" font-family="inherit" fill="currentColor">y</text><text x="132" y="126" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">O</text><text x="183" y="44" font-size="11.5" font-family="inherit" fill="currentColor">x=1</text><text x="168" y="166" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">P</text><text x="186" y="168" font-size="11.5" font-family="inherit" fill="currentColor">(1,−2)</text><text x="278" y="62" font-size="13" font-family="inherit" fill="currentColor">y</text></svg></figure>',
    options: ['当 x&lt;1 时，y 随 x 的增大而增大', '当 x&lt;1 时，y 随 x 的增大而减小', '图象与 x 轴没有公共点', '图象开口向下'],
    answer: 1,
    explanation: '由图象可知抛物线开口向上，对称轴是直线 x=1，顶点 (1,−2) 是最低点。在对称轴左侧（x&lt;1）图象下降，y 随 x 的增大而减小；右侧（x&gt;1）图象上升，y 随 x 的增大而增大，所以 A 错、B 对。顶点纵坐标 −2&lt;0，最小值小于 0，而开口向上时两端无限升高，图象必与 x 轴有两个交点，C 错。开口向上，D 错。选 B。'
  },
  {
    id: 'q-quad-func-08',
    kp: 'quad-func',
    difficulty: 'medium',
    type: 'fill',
    stem: '如图，抛物线 y=ax<sup>2</sup>+bx+c 与 x 轴交于 A(−1,0)、B 两点，对称轴是直线 x=1，与 y 轴交于点 C(0,−3)，则 a=（　）。<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="开口向上的抛物线，与x轴左交点为A(−1,0)，对称轴x=1，与y轴交点为C(0,−3)，右交点B未标坐标"><line x1="46" y1="80" x2="306" y2="80" stroke="currentColor" stroke-width="1.6"/><line x1="306" y1="80" x2="297" y2="76" stroke="currentColor" stroke-width="1.6"/><line x1="306" y1="80" x2="297" y2="84" stroke="currentColor" stroke-width="1.6"/><line x1="130" y1="214" x2="130" y2="22" stroke="currentColor" stroke-width="1.6"/><line x1="130" y1="22" x2="126" y2="31" stroke="currentColor" stroke-width="1.6"/><line x1="130" y1="22" x2="134" y2="31" stroke="currentColor" stroke-width="1.6"/><polyline points="83.5,30 95.3,66.9 107,97.7 118.8,122.3 130.6,140.8 142.3,153.1 154.1,159.2 165.9,159.2 177.7,153.1 189.4,140.8 201.2,122.3 213,97.7 224.7,66.9 236.5,30" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="160" y1="24" x2="160" y2="170" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><circle cx="100" cy="80" r="2.6" fill="currentColor"/><circle cx="130" cy="140" r="2.6" fill="currentColor"/><circle cx="220" cy="80" r="2.6" fill="currentColor"/><text x="302" y="74" font-size="13" font-family="inherit" fill="currentColor">x</text><text x="136" y="30" font-size="13" font-family="inherit" fill="currentColor">y</text><text x="122" y="94" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">O</text><text x="166" y="32" font-size="11.5" font-family="inherit" fill="currentColor">x=1</text><text x="92" y="70" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A</text><text x="96" y="96" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">(−1,0)</text><text x="228" y="72" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="122" y="158" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">C</text><text x="116" y="144" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">(0,−3)</text></svg></figure>',
    answers: ['1'],
    explanation: '由对称性：A、B 关于直线 x=1 对称，A 的横坐标 −1 到对称轴的距离为 2，所以 B 的横坐标为 1+2=3，即 B(3,0)。用交点式设 y=a(x+1)(x−3)，把 C(0,−3) 代入：−3=a×1×(−3)=−3a，得 a=1。检验：y=(x+1)(x−3)=x<sup>2</sup>−2x−3，对称轴 x=−(−2)/2=1 ✓，与 y 轴交于 (0,−3) ✓。'
  },
  {
    id: 'q-quad-func-09',
    kp: 'quad-func',
    difficulty: 'medium',
    type: 'single',
    stem: '如图，把抛物线 y=2x<sup>2</sup> 平移得到抛物线 y=2(x+3)<sup>2</sup>−1，则平移方式是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="同一坐标系内两条抛物线：虚线为y=2x²，顶点A(0,0)；实线为平移后的抛物线，顶点A′(−3,−1)"><line x1="20" y1="120" x2="306" y2="120" stroke="currentColor" stroke-width="1.6"/><line x1="306" y1="120" x2="297" y2="116" stroke="currentColor" stroke-width="1.6"/><line x1="306" y1="120" x2="297" y2="124" stroke="currentColor" stroke-width="1.6"/><line x1="150" y1="214" x2="150" y2="22" stroke="currentColor" stroke-width="1.6"/><line x1="150" y1="22" x2="146" y2="31" stroke="currentColor" stroke-width="1.6"/><line x1="150" y1="22" x2="154" y2="31" stroke="currentColor" stroke-width="1.6"/><polyline points="90,24 99.2,51.3 108.5,74 117.7,92.2 126.9,105.8 136.2,114.9 145.4,119.4 154.6,119.4 163.8,114.9 173.1,105.8 182.3,92.2 191.5,74 200.8,51.3 210,24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-dasharray="5 4"/><polyline points="24,97.4 30.5,108.7 36.9,117.8 43.4,124.6 49.8,129.3 56.3,131.6 62.8,131.8 69.2,129.7 75.7,125.4 82.2,118.9 88.6,110.2 95.1,99.2 101.5,86 108,70.6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="150" y1="120" x2="62" y2="131" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><line x1="62" y1="131" x2="71" y2="126" stroke="currentColor" stroke-width="1.6"/><line x1="62" y1="131" x2="71" y2="136" stroke="currentColor" stroke-width="1.6"/><circle cx="150" cy="120" r="2.6" fill="currentColor"/><circle cx="60" cy="132" r="2.6" fill="currentColor"/><text x="302" y="114" font-size="13" font-family="inherit" fill="currentColor">x</text><text x="156" y="30" font-size="13" font-family="inherit" fill="currentColor">y</text><text x="140" y="142" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A</text><text x="52" y="150" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A′</text><text x="52" y="166" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">(−3,−1)</text><text x="216" y="44" font-size="11.5" font-family="inherit" fill="currentColor">y=2x²</text><text x="16" y="58" font-size="11.5" font-family="inherit" fill="currentColor">y=2(x+3)²−1</text></svg></figure>',
    options: ['先向左平移 3 个单位，再向下平移 1 个单位', '先向右平移 3 个单位，再向下平移 1 个单位', '先向左平移 3 个单位，再向上平移 1 个单位', '先向右平移 3 个单位，再向上平移 1 个单位'],
    answer: 0,
    explanation: 'y=2x<sup>2</sup> 的顶点是 (0,0)，y=2(x+3)<sup>2</sup>−1 的顶点是 (−3,−1)。顶点从 (0,0) 变到 (−3,−1)：横坐标减少 3（向左 3 个单位），纵坐标减少 1（向下 1 个单位）。按口诀"左加右减、上加下减"：括号内 x+3 对应向左 3 个单位，括号外 −1 对应向下 1 个单位。选 A。'
  },
  {
    id: 'q-quad-func-10',
    kp: 'quad-func',
    difficulty: 'hard',
    type: 'single',
    stem: '如图，抛物线 y=x<sup>2</sup>−4x+3 与直线 y=x−1 交于 A(1,0)、B(4,3) 两点，O 为坐标原点，则 △AOB 的面积是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="坐标系中抛物线y=x²−4x+3与直线y=x−1交于A(1,0)、B(4,3)，连OA、OB围成三角形AOB"><line x1="52" y1="180" x2="306" y2="180" stroke="currentColor" stroke-width="1.6"/><line x1="306" y1="180" x2="297" y2="176" stroke="currentColor" stroke-width="1.6"/><line x1="306" y1="180" x2="297" y2="184" stroke="currentColor" stroke-width="1.6"/><line x1="90" y1="214" x2="90" y2="22" stroke="currentColor" stroke-width="1.6"/><line x1="90" y1="22" x2="86" y2="31" stroke="currentColor" stroke-width="1.6"/><line x1="90" y1="22" x2="94" y2="31" stroke="currentColor" stroke-width="1.6"/><polyline points="82,80.2 96.8,118.9 111.5,150.5 126.3,175 141.1,192.4 155.8,202.7 170.6,206 185.4,202.2 200.2,191.2 214.9,173.2 229.7,148.1 244.5,115.9 259.2,76.6 274,30.2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="90" y1="206" x2="290" y2="76" stroke="currentColor" stroke-width="1.6"/><line x1="90" y1="180" x2="250" y2="102" stroke="currentColor" stroke-width="1.6"/><circle cx="130" cy="180" r="2.6" fill="currentColor"/><circle cx="250" cy="102" r="2.6" fill="currentColor"/><text x="302" y="174" font-size="13" font-family="inherit" fill="currentColor">x</text><text x="80" y="40" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">y</text><text x="82" y="196" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">O</text><text x="132" y="198" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">A</text><text x="250" y="84" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">B</text><text x="100" y="40" font-size="11.5" font-family="inherit" fill="currentColor">y=x²−4x+3</text><text x="206" y="70" font-size="11.5" font-family="inherit" fill="currentColor">y=x−1</text></svg></figure>',
    options: ['3/2', '2', '3', '6'],
    answer: 0,
    explanation: '联立求交点：x<sup>2</sup>−4x+3=x−1 → x<sup>2</sup>−5x+4=0 → (x−1)(x−4)=0 → x=1 或 4，对应 y=0、3，即 A(1,0)、B(4,3)，与图一致。OA 在 x 轴上，|OA|=1；B 到 x 轴的距离 3 就是 △AOB 中 OA 边上的高，所以 S=½×1×3=3/2。也可用坐标公式 S=½|x<sub>A</sub>y<sub>B</sub>−x<sub>B</sub>y<sub>A</sub>|=½|1×3−4×0|=3/2。选 A。'
  },
  {
    id: 'q-quad-func-11',
    kp: 'quad-func',
    difficulty: 'hard',
    type: 'fill',
    stem: '当 0≤x≤2 时，二次函数 y=x<sup>2</sup>−2ax+3 的最小值为 2，则 a=（　）。',
    answers: ['1'],
    explanation: '配方得 y=(x−a)<sup>2</sup>+3−a<sup>2</sup>，对称轴 x=a，开口向上。对称轴与区间 [0,2] 的位置关系不确定，必须分三支讨论。① 当 a&lt;0 时：区间 [0,2] 在对称轴右侧，函数在区间上单调递增，最小值在 x=0 处取得，y(0)=3≠2，此支无解。② 当 0≤a≤2 时：对称轴在区间内，最小值在顶点处取得，3−a<sup>2</sup>=2，a<sup>2</sup>=1，a=±1，其中只有 a=1 落在 [0,2] 内，故 a=1。③ 当 a&gt;2 时：区间在对称轴左侧，函数在区间上单调递减，最小值在 x=2 处取得，y(2)=4−4a+3=7−4a=2，解得 a=5/4，与 a&gt;2 矛盾，此支无解。综上 a=1。'
  },
  {
    id: 'q-quad-func-12',
    kp: 'quad-func',
    difficulty: 'hard',
    type: 'single',
    stem: '如图，抛物线 y=x<sup>2</sup>−2x−3 与 x 轴交于 A(−1,0)、B(3,0)，顶点为 P(1,−4)。若抛物线上存在点 M，使 S<sub>△MAB</sub>=8，则点 M 的纵坐标是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="抛物线y=x²−2x−3与x轴交于A(−1,0)、B(3,0)，顶点P(1,−4)，抛物线上一点M与A、B连成三角形，其面积为8"><line x1="36" y1="140" x2="300" y2="140" stroke="currentColor" stroke-width="1.6"/><line x1="300" y1="140" x2="291" y2="136" stroke="currentColor" stroke-width="1.6"/><line x1="300" y1="140" x2="291" y2="144" stroke="currentColor" stroke-width="1.6"/><line x1="100" y1="214" x2="100" y2="30" stroke="currentColor" stroke-width="1.6"/><line x1="100" y1="30" x2="96" y2="39" stroke="currentColor" stroke-width="1.6"/><line x1="100" y1="30" x2="104" y2="39" stroke="currentColor" stroke-width="1.6"/><polyline points="44,90.3 58,124.9 72,153.7 86,176.7 100,194 114,205.5 128,211.3 142,211.3 156,205.5 170,194 184,176.7 198,153.7 212,124.9 226,90.3" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="65" y1="140" x2="170" y2="194" stroke="currentColor" stroke-width="1.6"/><line x1="205" y1="140" x2="170" y2="194" stroke="currentColor" stroke-width="1.6"/><circle cx="65" cy="140" r="2.6" fill="currentColor"/><circle cx="205" cy="140" r="2.6" fill="currentColor"/><circle cx="135" cy="212" r="2.6" fill="currentColor"/><circle cx="170" cy="194" r="2.6" fill="currentColor"/><line x1="59.2" y1="137.2" x2="64.8" y2="142.8" stroke="currentColor" stroke-width="1.2"/><line x1="71.2" y1="137.2" x2="76.8" y2="142.8" stroke="currentColor" stroke-width="1.2"/><line x1="83.2" y1="137.2" x2="88.8" y2="142.8" stroke="currentColor" stroke-width="1.2"/><line x1="95.2" y1="137.2" x2="100.8" y2="142.8" stroke="currentColor" stroke-width="1.2"/><line x1="107.2" y1="137.2" x2="112.8" y2="142.8" stroke="currentColor" stroke-width="1.2"/><line x1="119.2" y1="137.2" x2="124.8" y2="142.8" stroke="currentColor" stroke-width="1.2"/><line x1="131.2" y1="137.2" x2="136.8" y2="142.8" stroke="currentColor" stroke-width="1.2"/><line x1="143.2" y1="137.2" x2="148.8" y2="142.8" stroke="currentColor" stroke-width="1.2"/><line x1="155.2" y1="137.2" x2="160.8" y2="142.8" stroke="currentColor" stroke-width="1.2"/><line x1="167.2" y1="137.2" x2="172.8" y2="142.8" stroke="currentColor" stroke-width="1.2"/><line x1="179.2" y1="137.2" x2="184.8" y2="142.8" stroke="currentColor" stroke-width="1.2"/><line x1="191.2" y1="137.2" x2="196.8" y2="142.8" stroke="currentColor" stroke-width="1.2"/><line x1="203.2" y1="137.2" x2="208.8" y2="142.8" stroke="currentColor" stroke-width="1.2"/><line x1="77.2" y1="149.2" x2="82.8" y2="154.8" stroke="currentColor" stroke-width="1.2"/><line x1="89.2" y1="149.2" x2="94.8" y2="154.8" stroke="currentColor" stroke-width="1.2"/><line x1="101.2" y1="149.2" x2="106.8" y2="154.8" stroke="currentColor" stroke-width="1.2"/><line x1="113.2" y1="149.2" x2="118.8" y2="154.8" stroke="currentColor" stroke-width="1.2"/><line x1="173.2" y1="149.2" x2="178.8" y2="154.8" stroke="currentColor" stroke-width="1.2"/><line x1="185.2" y1="149.2" x2="190.8" y2="154.8" stroke="currentColor" stroke-width="1.2"/><line x1="197.2" y1="149.2" x2="202.8" y2="154.8" stroke="currentColor" stroke-width="1.2"/><line x1="107.2" y1="161.2" x2="112.8" y2="166.8" stroke="currentColor" stroke-width="1.2"/><line x1="179.2" y1="161.2" x2="184.8" y2="166.8" stroke="currentColor" stroke-width="1.2"/><line x1="125.2" y1="173.2" x2="130.8" y2="178.8" stroke="currentColor" stroke-width="1.2"/><line x1="137.2" y1="173.2" x2="142.8" y2="178.8" stroke="currentColor" stroke-width="1.2"/><line x1="149.2" y1="173.2" x2="154.8" y2="178.8" stroke="currentColor" stroke-width="1.2"/><line x1="161.2" y1="173.2" x2="166.8" y2="178.8" stroke="currentColor" stroke-width="1.2"/><line x1="173.2" y1="173.2" x2="178.8" y2="178.8" stroke="currentColor" stroke-width="1.2"/><line x1="143.2" y1="185.2" x2="148.8" y2="190.8" stroke="currentColor" stroke-width="1.2"/><line x1="155.2" y1="185.2" x2="160.8" y2="190.8" stroke="currentColor" stroke-width="1.2"/><line x1="167.2" y1="185.2" x2="172.8" y2="190.8" stroke="currentColor" stroke-width="1.2"/><text x="298" y="134" font-size="13" font-family="inherit" fill="currentColor">x</text><text x="108" y="38" font-size="13" font-family="inherit" fill="currentColor">y</text><text x="108" y="132" font-size="13" font-family="inherit" fill="currentColor">O</text><text x="56" y="156" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A</text><text x="214" y="156" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="116" y="226" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">P</text><text x="148" y="226" font-size="11.5" font-family="inherit" fill="currentColor">(1,−4)</text><text x="182" y="204" font-size="13" font-family="inherit" fill="currentColor">M</text><text x="147" y="162" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">S=8</text></svg></figure>',
    options: ['−4', '4', '4 或 −4', '2 或 −2'],
    answer: 2,
    explanation: 'AB=3−(−1)=4。设 M 的纵坐标为 y，△MAB 以 AB 为底，高为 |y|（A、B 都在 x 轴上），所以 S=½×4×|y|=2|y|=8，得 |y|=4，即 y=4 或 y=−4。两种情况都要讨论：① y=−4：x<sup>2</sup>−2x−3=−4 → x<sup>2</sup>−2x+1=0 → x=1，M(1,−4) 就是顶点 P，成立；② y=4：x<sup>2</sup>−2x−3=4 → x<sup>2</sup>−2x−7=0，Δ=4+28=32&gt;0，x=1±2√2，抛物线上确实存在这样的点。只写 y=4 或只写 y=−4 都会漏解。选 C。'
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

  /* ===== v2 新增：rotation 07–12 ===== */
  {
    id: 'q-rotation-07',
    kp: 'rotation',
    difficulty: 'basic',
    type: 'single',
    stem: '如图，△ABC 绕点 O 顺时针旋转 70° 得到 △A′B′C′，则下列结论一定成立的是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="三角形ABC绕点O顺时针旋转70°得到三角形A′B′C′，OA、OA′为实线，OB、OB′为虚线，∠AOA′=70°"><polygon points="70,80 70,150 130,150" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M70,136 L84,136 L84,150" fill="none" stroke="currentColor" stroke-width="1.2"/><polygon points="162.1,88.5 96.3,112.4 116.8,168.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="110" y1="150" x2="70" y2="80" stroke="currentColor" stroke-width="1.6"/><line x1="110" y1="150" x2="162.1" y2="88.5" stroke="currentColor" stroke-width="1.6"/><line x1="110" y1="150" x2="70" y2="150" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><line x1="110" y1="150" x2="96.3" y2="112.4" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><path d="M94.1,122.2 A32,32 0 0 1 130.7,125.6" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M126.3,116.8 L130.7,125.6 L121.4,122.9" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="110" cy="150" r="2.6" fill="currentColor"/><circle cx="70" cy="80" r="2.6" fill="currentColor"/><circle cx="70" cy="150" r="2.6" fill="currentColor"/><circle cx="130" cy="150" r="2.6" fill="currentColor"/><circle cx="162.1" cy="88.5" r="2.6" fill="currentColor"/><circle cx="96.3" cy="112.4" r="2.6" fill="currentColor"/><circle cx="116.8" cy="168.8" r="2.6" fill="currentColor"/><text x="100" y="168" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">O</text><text x="62" y="72" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A</text><text x="62" y="164" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">B</text><text x="138" y="164" font-size="13" font-family="inherit" fill="currentColor">C</text><text x="176" y="82" font-size="13" font-family="inherit" fill="currentColor">A′</text><text x="100" y="102" font-size="13" font-family="inherit" fill="currentColor">B′</text><text x="124" y="184" font-size="13" font-family="inherit" fill="currentColor">C′</text></svg></figure>',
    options: ['∠BOB′=40°', 'OA=OA′，且 ∠AOA′=70°', 'OB≠OB′', '∠AOB=70°'],
    answer: 1,
    explanation: '旋转的三条性质：对应点到旋转中心的距离相等（OA=OA′、OB=OB′、OC=OC′）；对应点与旋转中心连线的夹角等于旋转角（∠AOA′=∠BOB′=∠COC′=旋转角 70°）；旋转前后的图形全等。因此 B 一定成立；∠BOB′ 是 70° 而不是 40°，A 错；OB=OB′，C 错；∠AOB 是原图中两条半径的夹角，与旋转角无关，D 错。选 B。'
  },
  {
    id: 'q-rotation-08',
    kp: 'rotation',
    difficulty: 'medium',
    type: 'fill',
    stem: '把 △ABC 绕点 A 顺时针旋转 60° 得到 △AB′C′，若 AB=5，则 BB′=（　）。',
    answers: ['5'],
    explanation: '由旋转性质：AB′=AB=5，∠BAB′ 等于旋转角 60°。在 △ABB′ 中 AB=AB′=5，顶角 60°，等腰三角形有一个 60° 角即为等边三角形（两个底角都是 (180°−60°)/2=60°），所以 BB′=AB=5。'
  },
  {
    id: 'q-rotation-09',
    kp: 'rotation',
    difficulty: 'medium',
    type: 'single',
    stem: '如图，在方格纸（每个小方格边长为 1）中，A(1,1)、B(4,1)、C(1,3)。把 △ABC 绕点 B 顺时针旋转 90° 得到 △A′BC′，则点 C′ 的坐标是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="6×6方格纸，三角形ABC顶点A(1,1)、B(4,1)、C(1,3)，绕点B顺时针旋转90°后得到三角形A′BC′（虚线）"><line x1="50" y1="20" x2="50" y2="200" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.35"/><line x1="50" y1="200" x2="230" y2="200" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.35"/><line x1="80" y1="20" x2="80" y2="200" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.35"/><line x1="50" y1="170" x2="230" y2="170" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.35"/><line x1="110" y1="20" x2="110" y2="200" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.35"/><line x1="50" y1="140" x2="230" y2="140" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.35"/><line x1="140" y1="20" x2="140" y2="200" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.35"/><line x1="50" y1="110" x2="230" y2="110" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.35"/><line x1="170" y1="20" x2="170" y2="200" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.35"/><line x1="50" y1="80" x2="230" y2="80" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.35"/><line x1="200" y1="20" x2="200" y2="200" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.35"/><line x1="50" y1="50" x2="230" y2="50" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.35"/><line x1="230" y1="20" x2="230" y2="200" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.35"/><line x1="50" y1="20" x2="230" y2="20" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.35"/><line x1="40" y1="200" x2="240" y2="200" stroke="currentColor" stroke-width="1.6"/><line x1="240" y1="200" x2="231" y2="196" stroke="currentColor" stroke-width="1.6"/><line x1="240" y1="200" x2="231" y2="204" stroke="currentColor" stroke-width="1.6"/><line x1="50" y1="212" x2="50" y2="14" stroke="currentColor" stroke-width="1.6"/><line x1="50" y1="14" x2="46" y2="23" stroke="currentColor" stroke-width="1.6"/><line x1="50" y1="14" x2="54" y2="23" stroke="currentColor" stroke-width="1.6"/><text x="80" y="214" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1</text><text x="42" y="174" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">1</text><text x="110" y="214" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">2</text><text x="42" y="144" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">2</text><text x="140" y="214" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">3</text><text x="42" y="114" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">3</text><text x="170" y="214" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">4</text><text x="42" y="84" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">4</text><text x="200" y="214" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">5</text><text x="42" y="54" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">5</text><text x="230" y="214" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">6</text><text x="42" y="24" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">6</text><text x="42" y="214" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">0</text><text x="232" y="232" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">x</text><text x="62" y="16" font-size="11.5" font-family="inherit" fill="currentColor">y</text><polygon points="80,170 170,170 80,110" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M94,170 L94,156 L80,156" fill="none" stroke="currentColor" stroke-width="1.2"/><polygon points="170,80 170,170 230,80" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-dasharray="5 4"/><path d="M170,94 L184,94 L184,80" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="80" cy="170" r="2.6" fill="currentColor"/><circle cx="170" cy="170" r="2.6" fill="currentColor"/><circle cx="80" cy="110" r="2.6" fill="currentColor"/><circle cx="170" cy="80" r="2.6" fill="currentColor"/><circle cx="230" cy="80" r="2.6" fill="currentColor"/><text x="70" y="182" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A</text><text x="185" y="189" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">B</text><text x="70" y="132" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">C</text><text x="155" y="69" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">A′</text><text x="238" y="74" font-size="13" font-family="inherit" fill="currentColor">C′</text></svg></figure>',
    options: ['(6,4)', '(4,6)', '(2,6)', '(6,2)'],
    answer: 0,
    explanation: '旋转中心不是原点，不能套 (x,y)→(−y,x)。用向量算：BC=(1−4, 3−1)=(−3,2)。绕 B 顺时针旋转 90° 时向量规律是 (u,v)→(v,−u)，所以 (−3,2)→(2,3)。于是 C′=B+(2,3)=(4+2,1+3)=(6,4)。同理 BA=(−3,0)→(0,3)，A′=(4,4)，与图中虚线一致。选 A。'
  },
  {
    id: 'q-rotation-10',
    kp: 'rotation',
    difficulty: 'hard',
    type: 'single',
    stem: '如图，P 是正方形 ABCD 内一点，且 PA=1，PB=2，PC=3，则 ∠APB 的度数是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="正方形ABCD，内部一点P，PA=1，PB=2，PC=3，P与A、B、C分别相连"><polygon points="80,200 240,200 240,40 80,40" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M94,200 L94,186 L80,186" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M226,200 L226,186 L240,186" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M226,40 L226,54 L240,54" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M94,40 L94,54 L80,54" fill="none" stroke="currentColor" stroke-width="1.2"/><line x1="129" y1="171" x2="80" y2="200" stroke="currentColor" stroke-width="1.6"/><line x1="129" y1="171" x2="240" y2="200" stroke="currentColor" stroke-width="1.6"/><line x1="129" y1="171" x2="240" y2="40" stroke="currentColor" stroke-width="1.6"/><circle cx="80" cy="200" r="2.6" fill="currentColor"/><circle cx="240" cy="200" r="2.6" fill="currentColor"/><circle cx="240" cy="40" r="2.6" fill="currentColor"/><circle cx="80" cy="40" r="2.6" fill="currentColor"/><circle cx="129" cy="171" r="2.6" fill="currentColor"/><text x="72" y="216" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A</text><text x="248" y="216" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="248" y="34" font-size="13" font-family="inherit" fill="currentColor">C</text><text x="72" y="34" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">D</text><text x="118" y="162" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">P</text><text x="98" y="174" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1</text><text x="182" y="170" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">2</text><text x="176" y="100" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">3</text></svg></figure>',
    options: ['120°', '135°', '150°', '105°'],
    answer: 1,
    explanation: '需要自己构造旋转：把 △ABP 绕点 B 顺时针旋转 90° 得到 △CBP′（正方形中 BA 旋转 90° 恰好与 BC 重合）。于是 BP′=BP=2，CP′=AP=1，∠PBP′=90°，△PBP′ 是等腰直角三角形，PP′=√(2<sup>2</sup>+2<sup>2</sup>)=2√2，∠BP′P=45°。在 △PCP′ 中，CP′=1，PP′=2√2，PC=3，而 1<sup>2</sup>+(2√2)<sup>2</sup>=1+8=9=3<sup>2</sup>，由勾股定理的逆定理得 ∠CP′P=90°。旋转不改变角的大小，所以 ∠APB=∠CP′B=∠CP′P+∠PP′B=90°+45°=135°。选 B。'
  },
  {
    id: 'q-rotation-11',
    kp: 'rotation',
    difficulty: 'hard',
    type: 'fill',
    stem: '如图，在 Rt△ABC 中，∠C=90°，AC=3，BC=4。把 △ABC 绕点 C 旋转 90° 得到 △A′B′C，其中 A′ 落在 BC 的反向延长线上，则 A′B=（　）。<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="直角三角形ABC，∠C=90°，AC=3，BC=4，绕点C旋转90°得到三角形A′B′C（虚线），A′落在BC的反向延长线上，连A′B"><polygon points="150,170 150,80 270,170" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M150,156 L164,156 L164,170" fill="none" stroke="currentColor" stroke-width="1.2"/><polygon points="60,170 150,50 150,170" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-dasharray="5 4"/><path d="M136,170 L136,156 L150,156" fill="none" stroke="currentColor" stroke-width="1.2"/><line x1="60" y1="170" x2="270" y2="170" stroke="currentColor" stroke-width="1.6"/><circle cx="150" cy="170" r="2.6" fill="currentColor"/><circle cx="150" cy="80" r="2.6" fill="currentColor"/><circle cx="270" cy="170" r="2.6" fill="currentColor"/><circle cx="60" cy="170" r="2.6" fill="currentColor"/><circle cx="150" cy="50" r="2.6" fill="currentColor"/><text x="142" y="188" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">C</text><text x="160" y="76" font-size="13" font-family="inherit" fill="currentColor">A</text><text x="278" y="176" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="52" y="188" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A′</text><text x="158" y="44" font-size="13" font-family="inherit" fill="currentColor">B′</text><text x="138" y="128" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">3</text><text x="212" y="190" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">4</text><text x="190" y="158" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">A′B</text></svg></figure>',
    answers: ['7'],
    explanation: '由旋转性质 CA′=CA=3，CB′=CB=4，∠ACA′=90°。因为 ∠ACB=90°，即 AC⊥BC；又 ∠ACA′=90°，即 CA′⊥CA，所以 CA′∥BC。再结合"A′ 落在 BC 的反向延长线上"，可知 CA′ 与 CB 在同一条直线上，且 A′ 与 B 分居 C 的两侧，于是 A′、C、B 三点共线、C 在线段 A′B 上，A′B=A′C+CB=3+4=7。也可建系验证：以 C 为原点、CB 为 x 轴正方向，则 A(0,3)、B(4,0)，旋转后 A′(−3,0)，A′B=|4−(−3)|=7。'
  },
  {
    id: 'q-rotation-12',
    kp: 'rotation',
    difficulty: 'hard',
    type: 'single',
    stem: '如图，在 △ABC 中，D 是 BC 的中点，AD 是中线，延长 AD 到 E 使 DE=AD，连接 BE。若 AB=8，AC=6，则中线 AD 的取值范围是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="三角形ABC中D为BC中点，AD为中线，延长AD到E使DE=AD，连接BE，AB=8，AC=6"><polygon points="154,20 60,120 180,120" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="154" y1="20" x2="120" y2="120" stroke="currentColor" stroke-width="1.6"/><line x1="120" y1="120" x2="86" y2="220" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><line x1="86" y1="220" x2="60" y2="120" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><line x1="90" y1="114" x2="90" y2="126" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="114" x2="150" y2="126" stroke="currentColor" stroke-width="1.2"/><circle cx="154" cy="20" r="2.6" fill="currentColor"/><circle cx="60" cy="120" r="2.6" fill="currentColor"/><circle cx="180" cy="120" r="2.6" fill="currentColor"/><circle cx="120" cy="120" r="2.6" fill="currentColor"/><circle cx="86" cy="220" r="2.6" fill="currentColor"/><text x="164" y="16" font-size="13" font-family="inherit" fill="currentColor">A</text><text x="52" y="128" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">B</text><text x="188" y="128" font-size="13" font-family="inherit" fill="currentColor">C</text><text x="110" y="136" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">D</text><text x="78" y="234" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">E</text><text x="92" y="62" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">8</text><text x="178" y="68" font-size="11.5" font-family="inherit" fill="currentColor">6</text></svg></figure>',
    options: ['1&lt;AD&lt;7', '2&lt;AD&lt;14', '1≤AD≤7', '0&lt;AD&lt;7'],
    answer: 0,
    explanation: '把 △ADC 绕点 D 旋转 180°（中心对称）得到 △EDB：DA=DE（已知），DC=DB（D 是中点），∠ADC=∠EDB（对顶角），由 SAS 得 △ADC≌△EDB，所以 BE=AC=6。在 △ABE 中，AB=8，BE=6，AE=AD+DE=2AD，由三角形三边关系 |8−6|&lt;AE&lt;8+6，即 2&lt;2AD&lt;14，得 1&lt;AD&lt;7。两端不能取等号：若 AD=1 或 7，则 A、B、E 三点共线，不能构成三角形。选 A。'
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

  /* ===== v2 新增：circle 07–12 ===== */
  {
    id: 'q-circle-07',
    kp: 'circle',
    difficulty: 'basic',
    type: 'single',
    stem: '如图，AB 是 ⊙O 的直径，点 C 在 ⊙O 上，∠BAC=35°，则 ∠ABC=（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="圆O中AB为直径，点C在圆周上，连AC、BC，∠BAC=35°"><circle cx="160" cy="130" r="85" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="75" y1="130" x2="245" y2="130" stroke="currentColor" stroke-width="1.6"/><line x1="75" y1="130" x2="189.1" y2="50.1" stroke="currentColor" stroke-width="1.6"/><line x1="189.1" y1="50.1" x2="245" y2="130" stroke="currentColor" stroke-width="1.6"/><path d="M109,130 A34,34 0 0 0 102.8,110.4" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="160" cy="130" r="2.6" fill="currentColor"/><circle cx="75" cy="130" r="2.6" fill="currentColor"/><circle cx="245" cy="130" r="2.6" fill="currentColor"/><circle cx="189.1" cy="50.1" r="2.6" fill="currentColor"/><text x="67" y="146" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A</text><text x="253" y="136" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="200" y="40" font-size="13" font-family="inherit" fill="currentColor">C</text><text x="166" y="148" font-size="13" font-family="inherit" fill="currentColor">O</text><text x="116" y="118" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">35°</text></svg></figure>',
    options: ['55°', '45°', '35°', '65°'],
    answer: 0,
    explanation: 'AB 是直径，直径所对的圆周角是直角，所以 ∠ACB=90°。在 △ABC 中，∠ABC=180°−∠ACB−∠BAC=180°−90°−35°=55°。选 A。'
  },
  {
    id: 'q-circle-08',
    kp: 'circle',
    difficulty: 'medium',
    type: 'fill',
    stem: '⊙O 内切于 △ABC，与 AB、BC、CA 分别相切于点 F、D、E。若 AB=9，BC=14，CA=13，则 AF=（　）。',
    answers: ['4'],
    explanation: '由切线长定理：从圆外一点引出的两条切线长相等，所以 AF=AE，BF=BD，CD=CE。设 AF=AE=x，BF=BD=y，CD=CE=z，则 x+y=AB=9，y+z=BC=14，x+z=CA=13。三式相加得 2(x+y+z)=36，即 x+y+z=18，于是 x=18−(y+z)=18−14=4，AF=4。检验：x=4、y=5、z=9，三边 9、14、13 与题设一致。'
  },
  {
    id: 'q-circle-09',
    kp: 'circle',
    difficulty: 'medium',
    type: 'single',
    stem: '如图，某圆弧形拱桥的跨度 AB=8 m，拱高 CD=2 m，其中 C 是弧的中点、D 是 AB 的中点且 CD⊥AB，则这段圆弧所在圆的半径是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="圆弧形拱桥：跨度AB=8，拱高CD=2，C为弧顶，D为AB上垂足，O为圆心在AB下方"><path d="M80,90 A100,100 0 0 1 240,90" fill="none" stroke="currentColor" stroke-width="1.2"/><line x1="80" y1="90" x2="240" y2="90" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="150" x2="160" y2="50" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="150" x2="80" y2="90" stroke="currentColor" stroke-width="1.6"/><path d="M146,90 L146,76 L160,76" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="80" cy="90" r="2.6" fill="currentColor"/><circle cx="240" cy="90" r="2.6" fill="currentColor"/><circle cx="160" cy="50" r="2.6" fill="currentColor"/><circle cx="160" cy="90" r="2.6" fill="currentColor"/><circle cx="160" cy="150" r="2.6" fill="currentColor"/><text x="72" y="104" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A</text><text x="248" y="104" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="160" y="40" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">C</text><text x="172" y="82" font-size="13" font-family="inherit" fill="currentColor">D</text><text x="168" y="164" font-size="13" font-family="inherit" fill="currentColor">O</text><text x="200" y="104" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">AB=8</text><text x="176" y="68" font-size="11.5" font-family="inherit" fill="currentColor">CD=2</text></svg></figure>',
    options: ['4 m', '5 m', '6 m', '7.5 m'],
    answer: 1,
    explanation: '设半径为 r，圆心为 O。由垂径定理的图形可知 O 在 CD 的延长线上（AB 下方），OD=r−CD=r−2，AD=AB/2=4，OA=r。在 Rt△OAD 中由勾股定理：r<sup>2</sup>=(r−2)<sup>2</sup>+4<sup>2</sup>，展开得 r<sup>2</sup>=r<sup>2</sup>−4r+4+16，4r=20，r=5。检验：r=5 时 OD=3，OA=√(3<sup>2</sup>+4<sup>2</sup>)=5 ✓。选 B。'
  },
  {
    id: 'q-circle-10',
    kp: 'circle',
    difficulty: 'hard',
    type: 'single',
    stem: '如图，AB 是 ⊙O 的直径，延长 AB 到点 D，过 ⊙O 上的点 C 作切线 CD，若 ∠D=40°，则 ∠BAC=（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="圆O中AB为直径，AB的延长线上有点D，CD切圆O于点C，OC为半径，∠D=40°"><circle cx="130" cy="120" r="70" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="60" y1="120" x2="238.9" y2="120" stroke="currentColor" stroke-width="1.6"/><line x1="130" y1="120" x2="175" y2="66.4" stroke="currentColor" stroke-width="1.6"/><line x1="175" y1="66.4" x2="238.9" y2="120" stroke="currentColor" stroke-width="1.6"/><path d="M166,77.1 L176.7,86.1 L185.7,75.4" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M213,120 A26,26 0 0 0 219.1,103.3" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="130" cy="120" r="2.6" fill="currentColor"/><circle cx="60" cy="120" r="2.6" fill="currentColor"/><circle cx="200" cy="120" r="2.6" fill="currentColor"/><circle cx="175" cy="66.4" r="2.6" fill="currentColor"/><circle cx="238.9" cy="120" r="2.6" fill="currentColor"/><text x="52" y="134" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A</text><text x="204" y="142" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">B</text><text x="186" y="58" font-size="13" font-family="inherit" fill="currentColor">C</text><text x="247" y="134" font-size="13" font-family="inherit" fill="currentColor">D</text><text x="136" y="136" font-size="13" font-family="inherit" fill="currentColor">O</text><text x="210" y="114" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">40°</text></svg></figure>',
    options: ['20°', '25°', '30°', '50°'],
    answer: 1,
    explanation: '连接 OC。切线垂直于过切点的半径，所以 ∠OCD=90°。在 Rt△OCD 中，∠COD=180°−90°−40°=50°。因为 OA=OC（同圆半径），△OAC 是等腰三角形，∠OCA=∠OAC；又 B 在射线 OD 上，∠COD=∠BOC=50° 是 △AOC 在顶点 O 处的外角，故 ∠BAC=∠OAC=½×50°=25°。也可用圆周角定理：∠BOC=50° 是弧 BC 所对的圆心角，∠BAC 是同弧所对的圆周角，等于它的一半，即 25°。选 B。'
  },
  {
    id: 'q-circle-11',
    kp: 'circle',
    difficulty: 'hard',
    type: 'fill',
    stem: '如图，AB 是 ⊙O 的直径，弦 CD⊥AB 于点 E。若 CD=8，AE=2，则 ⊙O 的半径是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="圆O中AB为直径，弦CD⊥AB于E，CD=8，AE=2"><circle cx="170" cy="120" r="100" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="70" y1="120" x2="270" y2="120" stroke="currentColor" stroke-width="1.6"/><line x1="110" y1="40" x2="110" y2="200" stroke="currentColor" stroke-width="1.6"/><path d="M96,120 L96,106 L110,106" fill="none" stroke="currentColor" stroke-width="1.2"/><line x1="104" y1="80" x2="116" y2="80" stroke="currentColor" stroke-width="1.2"/><line x1="104" y1="160" x2="116" y2="160" stroke="currentColor" stroke-width="1.2"/><circle cx="170" cy="120" r="2.6" fill="currentColor"/><circle cx="70" cy="120" r="2.6" fill="currentColor"/><circle cx="270" cy="120" r="2.6" fill="currentColor"/><circle cx="110" cy="40" r="2.6" fill="currentColor"/><circle cx="110" cy="200" r="2.6" fill="currentColor"/><circle cx="110" cy="120" r="2.6" fill="currentColor"/><text x="62" y="134" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A</text><text x="278" y="126" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="102" y="34" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">C</text><text x="102" y="216" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">D</text><text x="102" y="152" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">E</text><text x="176" y="136" font-size="13" font-family="inherit" fill="currentColor">O</text><text x="90" y="136" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">AE=2</text><text x="120" y="50" font-size="11.5" font-family="inherit" fill="currentColor">CD=8</text></svg></figure>',
    answers: ['5'],
    explanation: '直径垂直于弦时必平分弦（垂径定理），所以 CE=ED=CD/2=4。设半径为 r，则 OA=OC=r，OE=OA−AE=r−2。在 Rt△OCE 中由勾股定理：r<sup>2</sup>=(r−2)<sup>2</sup>+4<sup>2</sup>，解得 4r=20，r=5。另一种算法：由相交弦定理 AE·EB=CE·ED，即 2·EB=4×4，得 EB=8，直径 AB=AE+EB=10，半径 5。两种方法互相印证。'
  },
  {
    id: 'q-circle-12',
    kp: 'circle',
    difficulty: 'hard',
    type: 'single',
    stem: '如图，Rt△ABC 中 ∠C=90°，AC=6，BC=8，△ABC 的内切圆 ⊙O 与三条边都相切。则图中阴影部分（三角形内部、圆外部）的面积是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="直角三角形ABC，∠C=90°，AC=6，BC=8，其内切圆⊙O与三边相切，三角形内除圆以外的部分画斜线阴影"><polygon points="90,70 250,190 90,190" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="130" cy="150" r="40" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M90,176 L104,176 L104,190" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="130" cy="150" r="2.6" fill="currentColor"/><circle cx="90" cy="150" r="2.6" fill="currentColor"/><circle cx="130" cy="190" r="2.6" fill="currentColor"/><circle cx="154" cy="118" r="2.6" fill="currentColor"/><line x1="83.2" y1="65.2" x2="88.8" y2="70.8" stroke="currentColor" stroke-width="1.2"/><line x1="95.2" y1="65.2" x2="100.8" y2="70.8" stroke="currentColor" stroke-width="1.2"/><line x1="89.2" y1="77.2" x2="94.8" y2="82.8" stroke="currentColor" stroke-width="1.2"/><line x1="101.2" y1="77.2" x2="106.8" y2="82.8" stroke="currentColor" stroke-width="1.2"/><line x1="83.2" y1="89.2" x2="88.8" y2="94.8" stroke="currentColor" stroke-width="1.2"/><line x1="95.2" y1="89.2" x2="100.8" y2="94.8" stroke="currentColor" stroke-width="1.2"/><line x1="107.2" y1="89.2" x2="112.8" y2="94.8" stroke="currentColor" stroke-width="1.2"/><line x1="119.2" y1="89.2" x2="124.8" y2="94.8" stroke="currentColor" stroke-width="1.2"/><line x1="89.2" y1="101.2" x2="94.8" y2="106.8" stroke="currentColor" stroke-width="1.2"/><line x1="101.2" y1="101.2" x2="106.8" y2="106.8" stroke="currentColor" stroke-width="1.2"/><line x1="83.2" y1="113.2" x2="88.8" y2="118.8" stroke="currentColor" stroke-width="1.2"/><line x1="173.2" y1="125.2" x2="178.8" y2="130.8" stroke="currentColor" stroke-width="1.2"/><line x1="179.2" y1="137.2" x2="184.8" y2="142.8" stroke="currentColor" stroke-width="1.2"/><line x1="191.2" y1="137.2" x2="196.8" y2="142.8" stroke="currentColor" stroke-width="1.2"/><line x1="185.2" y1="149.2" x2="190.8" y2="154.8" stroke="currentColor" stroke-width="1.2"/><line x1="197.2" y1="149.2" x2="202.8" y2="154.8" stroke="currentColor" stroke-width="1.2"/><line x1="179.2" y1="161.2" x2="184.8" y2="166.8" stroke="currentColor" stroke-width="1.2"/><line x1="191.2" y1="161.2" x2="196.8" y2="166.8" stroke="currentColor" stroke-width="1.2"/><line x1="203.2" y1="161.2" x2="208.8" y2="166.8" stroke="currentColor" stroke-width="1.2"/><line x1="215.2" y1="161.2" x2="220.8" y2="166.8" stroke="currentColor" stroke-width="1.2"/><line x1="173.2" y1="173.2" x2="178.8" y2="178.8" stroke="currentColor" stroke-width="1.2"/><line x1="185.2" y1="173.2" x2="190.8" y2="178.8" stroke="currentColor" stroke-width="1.2"/><line x1="197.2" y1="173.2" x2="202.8" y2="178.8" stroke="currentColor" stroke-width="1.2"/><line x1="209.2" y1="173.2" x2="214.8" y2="178.8" stroke="currentColor" stroke-width="1.2"/><line x1="221.2" y1="173.2" x2="226.8" y2="178.8" stroke="currentColor" stroke-width="1.2"/><line x1="233.2" y1="173.2" x2="238.8" y2="178.8" stroke="currentColor" stroke-width="1.2"/><line x1="83.2" y1="185.2" x2="88.8" y2="190.8" stroke="currentColor" stroke-width="1.2"/><line x1="95.2" y1="185.2" x2="100.8" y2="190.8" stroke="currentColor" stroke-width="1.2"/><line x1="167.2" y1="185.2" x2="172.8" y2="190.8" stroke="currentColor" stroke-width="1.2"/><line x1="179.2" y1="185.2" x2="184.8" y2="190.8" stroke="currentColor" stroke-width="1.2"/><line x1="191.2" y1="185.2" x2="196.8" y2="190.8" stroke="currentColor" stroke-width="1.2"/><line x1="203.2" y1="185.2" x2="208.8" y2="190.8" stroke="currentColor" stroke-width="1.2"/><line x1="215.2" y1="185.2" x2="220.8" y2="190.8" stroke="currentColor" stroke-width="1.2"/><line x1="227.2" y1="185.2" x2="232.8" y2="190.8" stroke="currentColor" stroke-width="1.2"/><line x1="239.2" y1="185.2" x2="244.8" y2="190.8" stroke="currentColor" stroke-width="1.2"/><line x1="251.2" y1="185.2" x2="256.8" y2="190.8" stroke="currentColor" stroke-width="1.2"/><text x="82" y="62" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A</text><text x="258" y="196" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="82" y="206" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">C</text><text x="138" y="156" font-size="13" font-family="inherit" fill="currentColor">O</text><text x="78" y="132" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">6</text><text x="170" y="206" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">8</text><text x="196" y="62" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">阴影</text></svg></figure>',
    options: ['24−4π', '24−2π', '24−8π', '24−π'],
    answer: 0,
    explanation: '由勾股定理 AB=√(6<sup>2</sup>+8<sup>2</sup>)=10。直角三角形内切圆半径 r=(a+b−c)/2=(6+8−10)/2=2。（也可由面积法：S=½×6×8=24=½×周长×r=½×24×r，得 r=2。）S<sub>△ABC</sub>=½×6×8=24，内切圆面积=πr<sup>2</sup>=4π，所以阴影面积=24−4π。选 A。'
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

  /* ===== v2 新增：similarity 07–12 ===== */
  {
    id: 'q-similarity-07',
    kp: 'similarity',
    difficulty: 'basic',
    type: 'single',
    stem: '如图，在 △ABC 和 △DEF 中，∠A=∠D（图中标 ①），∠B=∠E（图中标 ②），则判定这两个三角形相似的依据是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="左右两个三角形ABC与DEF，A、D处等角标①，B、E处等角标②"><polygon points="45,55 135,55 90,140" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><polygon points="190,70 266,70 228,143" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M67,55 A22,22 0 0 1 55.3,74.4" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M208,70 A18,18 0 0 1 198.3,86" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M113,55 A22,22 0 0 0 124.7,74.4" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M248,70 A18,18 0 0 0 257.7,86" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="45" cy="55" r="2.6" fill="currentColor"/><circle cx="135" cy="55" r="2.6" fill="currentColor"/><circle cx="90" cy="140" r="2.6" fill="currentColor"/><circle cx="190" cy="70" r="2.6" fill="currentColor"/><circle cx="266" cy="70" r="2.6" fill="currentColor"/><circle cx="228" cy="143" r="2.6" fill="currentColor"/><text x="34" y="50" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A</text><text x="146" y="50" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="90" y="158" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">C</text><text x="180" y="66" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">D</text><text x="276" y="66" font-size="13" font-family="inherit" fill="currentColor">E</text><text x="228" y="160" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">F</text><text x="62" y="72" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">①</text><text x="112" y="72" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">②</text><text x="214" y="90" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">①</text><text x="242" y="90" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">②</text></svg></figure>',
    options: ['两角分别相等的两个三角形相似（AA）', '两边成比例且夹角相等的两个三角形相似（SAS）', '三边成比例的两个三角形相似（SSS）', '无法判定相似'],
    answer: 0,
    explanation: '已知两组角分别相等，由三角形内角和定理，第三组角也必然相等，符合"两角分别相等的两个三角形相似"（AA 判定）。题目没有给出任何边长的数据，用不上 SAS 和 SSS；而两组角相等已经足够判定相似，不是"无法判定"。选 A。'
  },
  {
    id: 'q-similarity-08',
    kp: 'similarity',
    difficulty: 'medium',
    type: 'fill',
    stem: '如图，AB∥CD，AC 与 BD 相交于点 O。若 OA=2，OC=3，AB=4，则 CD=（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="AB与CD平行，AC与BD相交于点O，OA=2，OC=3，AB=4"><line x1="129.1" y1="83.2" x2="206.3" y2="175.2" stroke="currentColor" stroke-width="1.6"/><line x1="224.9" y1="89" x2="62.6" y2="166.5" stroke="currentColor" stroke-width="1.6"/><line x1="129.1" y1="83.2" x2="224.9" y2="89" stroke="currentColor" stroke-width="1.6"/><line x1="62.6" y1="166.5" x2="206.3" y2="175.2" stroke="currentColor" stroke-width="1.6"/><path d="M169.8,90.7 L177,86.1 L170.4,80.7" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M178.7,91.2 L186,86.6 L179.3,81.2" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M141.7,166.3 L134.4,170.8 L141.1,176.3" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M132.7,165.7 L125.5,170.3 L132.1,175.7" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="160" cy="120" r="2.6" fill="currentColor"/><circle cx="129.1" cy="83.2" r="2.6" fill="currentColor"/><circle cx="224.9" cy="89" r="2.6" fill="currentColor"/><circle cx="206.3" cy="175.2" r="2.6" fill="currentColor"/><circle cx="62.6" cy="166.5" r="2.6" fill="currentColor"/><text x="120" y="78" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A</text><text x="236" y="82" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="214" y="186" font-size="13" font-family="inherit" fill="currentColor">C</text><text x="54" y="180" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">D</text><text x="163" y="104" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">O</text><text x="128" y="100" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">OA=2</text><text x="196" y="156" font-size="11.5" font-family="inherit" fill="currentColor">OC=3</text><text x="177" y="74" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">AB=4</text></svg></figure>',
    answers: ['6'],
    explanation: '因为 AB∥CD，内错角相等：∠A=∠C，∠B=∠D，所以 △AOB∽△COD（AA）。相似比 = OA:OC = 2:3，对应边 AB:CD = 2:3，即 4:CD=2:3，得 CD=4×3/2=6。注意 X 字型的对应关系是 OA↔OC、OB↔OD、AB↔CD，不要把 AB 与 OD 配对。'
  },
  {
    id: 'q-similarity-09',
    kp: 'similarity',
    difficulty: 'medium',
    type: 'single',
    stem: '△ABC 与 △A′B′C′ 关于原点 O 位似，位似比为 2，点 A 的坐标为 (1,2)，且 A 的对应点 A′ 在第一象限，则 A′ 的坐标是（　）',
    options: ['(2,4)', '(−2,−4)', '(1/2,1)', '(4,2)'],
    answer: 0,
    explanation: '以原点为位似中心的位似变换把 (x,y) 变为 (kx,ky)，其中 |k| 是位似比，k=±2。位似比为 2 且 A′ 在第一象限（与 A 同侧），取 k=2，A′=(2×1,2×2)=(2,4)。若取 k=−2 得到 (−2,−4)，在第三象限，不合题意；(1/2,1) 是位似比为 1/2 的结果；(4,2) 把横纵坐标写反了，位似不改变坐标的对应顺序。选 A。'
  },
  {
    id: 'q-similarity-10',
    kp: 'similarity',
    difficulty: 'hard',
    type: 'single',
    stem: '如图，Rt△ABC 中 ∠ACB=90°，CD⊥AB 于 D，AD=2，DB=8，则 CD=（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="直角三角形ABC，∠ACB=90°，CD⊥AB于D，AD=2，DB=8"><polygon points="60,170 210,170 90,110" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="90" y1="110" x2="90" y2="170" stroke="currentColor" stroke-width="1.6"/><path d="M83.7,122.5 L96.3,128.8 L102.5,116.3" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M90,156 L76,156 L76,170" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="60" cy="170" r="2.6" fill="currentColor"/><circle cx="210" cy="170" r="2.6" fill="currentColor"/><circle cx="90" cy="110" r="2.6" fill="currentColor"/><circle cx="90" cy="170" r="2.6" fill="currentColor"/><text x="52" y="182" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A</text><text x="218" y="182" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="90" y="96" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">C</text><text x="82" y="186" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">D</text><text x="70" y="160" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">2</text><text x="150" y="160" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">8</text></svg></figure>',
    options: ['4', '5', '16', '2√2'],
    answer: 0,
    explanation: '∵ ∠ACB=90°，CD⊥AB，∴ ∠ACD=90°−∠BCD=∠B（同角的余角相等），∠ADC=∠CDB=90°，∴ △ACD∽△CBD（AA）。对应边成比例：CD/BD=AD/CD，即 CD<sup>2</sup>=AD·DB=2×8=16，CD=4（线段长度取正值）。检验：AB=10，AC=√(AD·AB)=√20=2√5，BC=√(BD·AB)=√80=4√5，而 (2√5)<sup>2</sup>+(4√5)<sup>2</sup>=20+80=100=10<sup>2</sup> ✓。选 A。'
  },
  {
    id: 'q-similarity-11',
    kp: 'similarity',
    difficulty: 'hard',
    type: 'fill',
    stem: '如图，在平行四边形 ABCD 中，E 是 BC 的中点，AE 与对角线 BD 交于点 F。若 S<sub>△BEF</sub>=2，则平行四边形 ABCD 的面积是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="平行四边形ABCD中，E为BC中点，对角线BD与AE交于点F，三角形BEF画斜线阴影且面积为2"><polygon points="70,60 230,60 190,170 30,170" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="230" y1="60" x2="30" y2="170" stroke="currentColor" stroke-width="1.6"/><line x1="70" y1="60" x2="210" y2="115" stroke="currentColor" stroke-width="1.6"/><line x1="215.5" y1="65.5" x2="220.5" y2="70.5" stroke="currentColor" stroke-width="1.2"/><line x1="225.5" y1="65.5" x2="230.5" y2="70.5" stroke="currentColor" stroke-width="1.2"/><line x1="191.5" y1="75.5" x2="196.5" y2="80.5" stroke="currentColor" stroke-width="1.2"/><line x1="201.5" y1="75.5" x2="206.5" y2="80.5" stroke="currentColor" stroke-width="1.2"/><line x1="211.5" y1="75.5" x2="216.5" y2="80.5" stroke="currentColor" stroke-width="1.2"/><line x1="221.5" y1="75.5" x2="226.5" y2="80.5" stroke="currentColor" stroke-width="1.2"/><line x1="161.5" y1="95.5" x2="166.5" y2="100.5" stroke="currentColor" stroke-width="1.2"/><line x1="171.5" y1="95.5" x2="176.5" y2="100.5" stroke="currentColor" stroke-width="1.2"/><line x1="185.5" y1="105.5" x2="190.5" y2="110.5" stroke="currentColor" stroke-width="1.2"/><line x1="195.5" y1="105.5" x2="200.5" y2="110.5" stroke="currentColor" stroke-width="1.2"/><line x1="205.5" y1="105.5" x2="210.5" y2="110.5" stroke="currentColor" stroke-width="1.2"/><line x1="216" y1="92" x2="224" y2="82" stroke="currentColor" stroke-width="1.2"/><line x1="196" y1="148" x2="204" y2="138" stroke="currentColor" stroke-width="1.2"/><circle cx="70" cy="60" r="2.6" fill="currentColor"/><circle cx="230" cy="60" r="2.6" fill="currentColor"/><circle cx="190" cy="170" r="2.6" fill="currentColor"/><circle cx="30" cy="170" r="2.6" fill="currentColor"/><circle cx="210" cy="115" r="2.6" fill="currentColor"/><circle cx="163.3" cy="96.7" r="2.6" fill="currentColor"/><text x="62" y="52" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A</text><text x="238" y="52" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="190" y="186" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">C</text><text x="22" y="184" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">D</text><text x="220" y="110" font-size="13" font-family="inherit" fill="currentColor">E</text><text x="152" y="84" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">F</text><text x="201" y="92" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">S=2</text></svg></figure>',
    answers: ['24'],
    explanation: '① 由 BE∥AD 得 △BEF∽△DAF（AA），相似比 BE:AD=1:2（E 是中点，BE=½BC=½AD），所以 BF:FD=1:2、EF:FA=1:2，面积比 1:4，S<sub>△DAF</sub>=4×2=8。② △ABF 与 △BEF 分别以 AF、EF 为底，A、E、F 共线且共用顶点 B 到这条直线的高，所以 S<sub>△ABF</sub>:S<sub>△BEF</sub>=AF:EF=2:1，S<sub>△ABF</sub>=4。③ S<sub>△ABD</sub>=S<sub>△ABF</sub>+S<sub>△DAF</sub>=4+8=12，而对角线 BD 把平行四边形分成两个全等三角形，所以 S<sub>▱ABCD</sub>=2×12=24。'
  },
  {
    id: 'q-similarity-12',
    kp: 'similarity',
    difficulty: 'hard',
    type: 'single',
    stem: '如图，△ABC 中 BC=8，高 AD=6，矩形 EFGH 内接于 △ABC：E、H 分别在 AB、AC 上，F、G 在 BC 上。设矩形的高 EF=h，则矩形面积的最大值是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="三角形ABC中BC=8，高AD=6，矩形EFGH内接于三角形，E、H分别在AB、AC上，F、G在BC上"><polygon points="140,60 60,180 220,180" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="140" y1="60" x2="140" y2="180" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><polygon points="100,120 100,180 180,180 180,120" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M100,166 L114,166 L114,180" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M180,166 L166,166 L166,180" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="140" cy="60" r="2.6" fill="currentColor"/><circle cx="60" cy="180" r="2.6" fill="currentColor"/><circle cx="220" cy="180" r="2.6" fill="currentColor"/><circle cx="140" cy="180" r="2.6" fill="currentColor"/><circle cx="100" cy="120" r="2.6" fill="currentColor"/><circle cx="100" cy="180" r="2.6" fill="currentColor"/><circle cx="180" cy="180" r="2.6" fill="currentColor"/><circle cx="180" cy="120" r="2.6" fill="currentColor"/><text x="140" y="50" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">A</text><text x="52" y="192" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">B</text><text x="228" y="192" font-size="13" font-family="inherit" fill="currentColor">C</text><text x="132" y="196" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">D</text><text x="92" y="112" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">E</text><text x="94" y="196" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">F</text><text x="188" y="196" font-size="13" font-family="inherit" fill="currentColor">G</text><text x="188" y="112" font-size="13" font-family="inherit" fill="currentColor">H</text><text x="150" y="66" font-size="11.5" font-family="inherit" fill="currentColor">AD=6</text><text x="152" y="214" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">BC=8</text></svg></figure>',
    options: ['12', '24', '16', '9'],
    answer: 0,
    explanation: '因为 EH∥BC，所以 △AEH∽△ABC，对应高的比等于相似比：(6−h)/6=EH/BC。于是 EH=8×(6−h)/6=(4/3)(6−h)。矩形面积 S=EH·h=(4/3)h(6−h)=(4/3)(−h<sup>2</sup>+6h)=(4/3)[−(h−3)<sup>2</sup>+9]。因为 4/3&gt;0，当 h=3（满足 0&lt;h&lt;6）时 S 取最大值 (4/3)×9=12，此时 EH=4。选 A。'
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
  },
  /* ===== v2 新增：probability 07–12 ===== */
  {
    id: 'q-probability-07',
    kp: 'probability',
    difficulty: 'basic',
    type: 'single',
    stem: '如图，转盘被均分成 8 个全等的扇形，其中 3 个扇形画有阴影。任意转动转盘一次，指针落在阴影区域的概率是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="转盘被均分为8个全等扇形并标有数字1至8，其中3个相邻扇形画斜线阴影，指针指向正上方"><circle cx="160" cy="122" r="90" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="122" x2="250" y2="122" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="122" x2="223.6" y2="58.4" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="122" x2="160" y2="32" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="122" x2="96.4" y2="58.4" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="122" x2="70" y2="122" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="122" x2="96.4" y2="185.6" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="122" x2="160" y2="212" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="122" x2="223.6" y2="185.6" stroke="currentColor" stroke-width="1.6"/><line x1="159.5" y1="49.5" x2="164.5" y2="54.5" stroke="currentColor" stroke-width="1.2"/><line x1="192.5" y1="49.5" x2="197.5" y2="54.5" stroke="currentColor" stroke-width="1.2"/><line x1="198.5" y1="60.5" x2="203.5" y2="65.5" stroke="currentColor" stroke-width="1.2"/><line x1="209.5" y1="60.5" x2="214.5" y2="65.5" stroke="currentColor" stroke-width="1.2"/><line x1="159.5" y1="71.5" x2="164.5" y2="76.5" stroke="currentColor" stroke-width="1.2"/><line x1="203.5" y1="71.5" x2="208.5" y2="76.5" stroke="currentColor" stroke-width="1.2"/><line x1="214.5" y1="71.5" x2="219.5" y2="76.5" stroke="currentColor" stroke-width="1.2"/><line x1="165.5" y1="82.5" x2="170.5" y2="87.5" stroke="currentColor" stroke-width="1.2"/><line x1="176.5" y1="82.5" x2="181.5" y2="87.5" stroke="currentColor" stroke-width="1.2"/><line x1="187.5" y1="82.5" x2="192.5" y2="87.5" stroke="currentColor" stroke-width="1.2"/><line x1="198.5" y1="82.5" x2="203.5" y2="87.5" stroke="currentColor" stroke-width="1.2"/><line x1="220.5" y1="82.5" x2="225.5" y2="87.5" stroke="currentColor" stroke-width="1.2"/><line x1="170.5" y1="93.5" x2="175.5" y2="98.5" stroke="currentColor" stroke-width="1.2"/><line x1="181.5" y1="93.5" x2="186.5" y2="98.5" stroke="currentColor" stroke-width="1.2"/><line x1="192.5" y1="93.5" x2="197.5" y2="98.5" stroke="currentColor" stroke-width="1.2"/><line x1="187.5" y1="104.5" x2="192.5" y2="109.5" stroke="currentColor" stroke-width="1.2"/><line x1="198.5" y1="104.5" x2="203.5" y2="109.5" stroke="currentColor" stroke-width="1.2"/><line x1="231.5" y1="104.5" x2="236.5" y2="109.5" stroke="currentColor" stroke-width="1.2"/><line x1="192.5" y1="115.5" x2="197.5" y2="120.5" stroke="currentColor" stroke-width="1.2"/><line x1="203.5" y1="115.5" x2="208.5" y2="120.5" stroke="currentColor" stroke-width="1.2"/><line x1="214.5" y1="115.5" x2="219.5" y2="120.5" stroke="currentColor" stroke-width="1.2"/><line x1="225.5" y1="115.5" x2="230.5" y2="120.5" stroke="currentColor" stroke-width="1.2"/><line x1="187.5" y1="126.5" x2="192.5" y2="131.5" stroke="currentColor" stroke-width="1.2"/><line x1="198.5" y1="126.5" x2="203.5" y2="131.5" stroke="currentColor" stroke-width="1.2"/><line x1="220.5" y1="126.5" x2="225.5" y2="131.5" stroke="currentColor" stroke-width="1.2"/><line x1="231.5" y1="126.5" x2="236.5" y2="131.5" stroke="currentColor" stroke-width="1.2"/><line x1="181.5" y1="137.5" x2="186.5" y2="142.5" stroke="currentColor" stroke-width="1.2"/><line x1="192.5" y1="137.5" x2="197.5" y2="142.5" stroke="currentColor" stroke-width="1.2"/><line x1="187.5" y1="148.5" x2="192.5" y2="153.5" stroke="currentColor" stroke-width="1.2"/><line x1="192.5" y1="159.5" x2="197.5" y2="164.5" stroke="currentColor" stroke-width="1.2"/><line x1="203.5" y1="159.5" x2="208.5" y2="164.5" stroke="currentColor" stroke-width="1.2"/><line x1="209.5" y1="170.5" x2="214.5" y2="175.5" stroke="currentColor" stroke-width="1.2"/><text x="183" y="70.6" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1</text><text x="215.4" y="103" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">2</text><text x="215.4" y="149" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">3</text><text x="183" y="181.4" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">4</text><text x="137" y="181.4" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">5</text><text x="104.6" y="149" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">6</text><text x="104.6" y="103" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">7</text><text x="137" y="70.6" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">8</text><line x1="160" y1="122" x2="160" y2="20" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="20" x2="155" y2="32" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="20" x2="165" y2="32" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="122" x2="148" y2="145" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><circle cx="160" cy="122" r="2.6" fill="currentColor"/><text x="144" y="160" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">O</text><text x="160" y="232" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">8 等分，阴影 3 份</text></svg></figure>',
    options: ['3/8', '1/3', '5/8', '3/5'],
    answer: 0,
    explanation: '8 个扇形全等，指针落在每个扇形上的可能性相同（等可能），阴影占 3 个扇形，所以 P=阴影份数÷总份数=3/8。不要因为"阴影:空白=3:5"就写成 3/5，概率的分母是全部等可能结果的总数 8。选 A。'
  },
  {
    id: 'q-probability-08',
    kp: 'probability',
    difficulty: 'medium',
    type: 'fill',
    stem: '如图是不放回摸球的树状图：袋中有 2 个红球（R<sub>1</sub>、R<sub>2</sub>）和 2 个白球（W<sub>1</sub>、W<sub>2</sub>），从中依次摸出 2 个球（第一次摸出后不放回）。则两次摸出的球颜色相同的概率是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="不放回摸球两次的树状图：第一层4个分支各标1/4，第二层每个节点再分出3个分支，末端共12个结果，第二层每条枝概率均为1/3"><text x="8" y="132" font-size="11.5" font-family="inherit" fill="currentColor">开始</text><text x="8" y="14" font-size="11.5" font-family="inherit" fill="currentColor">第二层每条枝的概率都是 1/3</text><line x1="40" y1="128" x2="92" y2="42" stroke="currentColor" stroke-width="1.6"/><text x="36" y="89" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">1/4</text><text x="96" y="30" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">R₁</text><circle cx="100" cy="42" r="2.6" fill="currentColor"/><line x1="104" y1="42" x2="196" y2="24" stroke="currentColor" stroke-width="1.6"/><text x="202" y="28" font-size="11.5" font-family="inherit" fill="currentColor">R₁R₂</text><line x1="104" y1="42" x2="196" y2="42" stroke="currentColor" stroke-width="1.6"/><text x="202" y="46" font-size="11.5" font-family="inherit" fill="currentColor">R₁W₁</text><line x1="104" y1="42" x2="196" y2="60" stroke="currentColor" stroke-width="1.6"/><text x="202" y="64" font-size="11.5" font-family="inherit" fill="currentColor">R₁W₂</text><line x1="40" y1="128" x2="92" y2="96" stroke="currentColor" stroke-width="1.6"/><text x="36" y="116" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">1/4</text><text x="96" y="84" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">R₂</text><circle cx="100" cy="96" r="2.6" fill="currentColor"/><line x1="104" y1="96" x2="196" y2="78" stroke="currentColor" stroke-width="1.6"/><text x="202" y="82" font-size="11.5" font-family="inherit" fill="currentColor">R₂R₁</text><line x1="104" y1="96" x2="196" y2="96" stroke="currentColor" stroke-width="1.6"/><text x="202" y="100" font-size="11.5" font-family="inherit" fill="currentColor">R₂W₁</text><line x1="104" y1="96" x2="196" y2="114" stroke="currentColor" stroke-width="1.6"/><text x="202" y="118" font-size="11.5" font-family="inherit" fill="currentColor">R₂W₂</text><line x1="40" y1="128" x2="92" y2="150" stroke="currentColor" stroke-width="1.6"/><text x="36" y="143" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">1/4</text><text x="96" y="174" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">W₁</text><circle cx="100" cy="150" r="2.6" fill="currentColor"/><line x1="104" y1="150" x2="196" y2="132" stroke="currentColor" stroke-width="1.6"/><text x="202" y="136" font-size="11.5" font-family="inherit" fill="currentColor">W₁R₁</text><line x1="104" y1="150" x2="196" y2="150" stroke="currentColor" stroke-width="1.6"/><text x="202" y="154" font-size="11.5" font-family="inherit" fill="currentColor">W₁R₂</text><line x1="104" y1="150" x2="196" y2="168" stroke="currentColor" stroke-width="1.6"/><text x="202" y="172" font-size="11.5" font-family="inherit" fill="currentColor">W₁W₂</text><line x1="40" y1="128" x2="92" y2="204" stroke="currentColor" stroke-width="1.6"/><text x="36" y="170" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">1/4</text><text x="96" y="228" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">W₂</text><circle cx="100" cy="204" r="2.6" fill="currentColor"/><line x1="104" y1="204" x2="196" y2="186" stroke="currentColor" stroke-width="1.6"/><text x="202" y="190" font-size="11.5" font-family="inherit" fill="currentColor">W₂R₁</text><line x1="104" y1="204" x2="196" y2="204" stroke="currentColor" stroke-width="1.6"/><text x="202" y="208" font-size="11.5" font-family="inherit" fill="currentColor">W₂R₂</text><line x1="104" y1="204" x2="196" y2="222" stroke="currentColor" stroke-width="1.6"/><text x="202" y="226" font-size="11.5" font-family="inherit" fill="currentColor">W₂W₁</text></svg></figure>',
    answers: ['1/3'],
    explanation: '不放回摸两次，共有 4×3=12 种等可能的有序结果（对应树状图末端 12 个分支）。颜色相同分两类：两次都红——R<sub>1</sub>R<sub>2</sub>、R<sub>2</sub>R<sub>1</sub> 共 2 种；两次都白——W<sub>1</sub>W<sub>2</sub>、W<sub>2</sub>W<sub>1</sub> 共 2 种，合计 4 种。所以 P=4/12=1/3。"同色"要把红红、白白两条分支相加，只数一条会漏解。'
  },
  {
    id: 'q-probability-09',
    kp: 'probability',
    difficulty: 'medium',
    type: 'single',
    stem: '如图，先转动 4 等分转盘（数字 1–4）一次，再掷一枚均匀骰子（点数 1–6）一次，图中用列表法列出了全部 24 种结果。则"两数之和为偶数"的概率是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="列表法表格：表头行为骰子点数1至6，表头列为转盘数字1至4，格内为两数之和，和为偶数的格子打斜线，左上角是一个4等分小转盘"><line x1="34" y1="74" x2="250" y2="74" stroke="currentColor" stroke-width="1.6"/><line x1="34" y1="224" x2="250" y2="224" stroke="currentColor" stroke-width="1.6"/><line x1="34" y1="74" x2="34" y2="224" stroke="currentColor" stroke-width="1.6"/><line x1="250" y1="74" x2="250" y2="224" stroke="currentColor" stroke-width="1.6"/><line x1="34" y1="104" x2="250" y2="104" stroke="currentColor" stroke-width="0.8"/><line x1="34" y1="134" x2="250" y2="134" stroke="currentColor" stroke-width="0.8"/><line x1="34" y1="164" x2="250" y2="164" stroke="currentColor" stroke-width="0.8"/><line x1="34" y1="194" x2="250" y2="194" stroke="currentColor" stroke-width="0.8"/><line x1="70" y1="74" x2="70" y2="224" stroke="currentColor" stroke-width="0.8"/><line x1="106" y1="74" x2="106" y2="224" stroke="currentColor" stroke-width="0.8"/><line x1="142" y1="74" x2="142" y2="224" stroke="currentColor" stroke-width="0.8"/><line x1="178" y1="74" x2="178" y2="224" stroke="currentColor" stroke-width="0.8"/><line x1="214" y1="74" x2="214" y2="224" stroke="currentColor" stroke-width="0.8"/><text x="88" y="93" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1</text><text x="124" y="93" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">2</text><text x="160" y="93" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">3</text><text x="196" y="93" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">4</text><text x="232" y="93" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">5</text><text x="268" y="93" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">6</text><text x="52" y="123" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1</text><text x="88" y="123" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">2</text><line x1="73" y1="130" x2="79" y2="124" stroke="currentColor" stroke-width="1.2"/><line x1="73" y1="119" x2="79" y2="113" stroke="currentColor" stroke-width="1.2"/><text x="124" y="123" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">3</text><text x="160" y="123" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">4</text><line x1="145" y1="130" x2="151" y2="124" stroke="currentColor" stroke-width="1.2"/><line x1="145" y1="119" x2="151" y2="113" stroke="currentColor" stroke-width="1.2"/><text x="196" y="123" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">5</text><text x="232" y="123" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">6</text><line x1="217" y1="130" x2="223" y2="124" stroke="currentColor" stroke-width="1.2"/><line x1="217" y1="119" x2="223" y2="113" stroke="currentColor" stroke-width="1.2"/><text x="268" y="123" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">7</text><text x="52" y="153" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">2</text><text x="88" y="153" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">3</text><text x="124" y="153" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">4</text><line x1="109" y1="160" x2="115" y2="154" stroke="currentColor" stroke-width="1.2"/><line x1="109" y1="149" x2="115" y2="143" stroke="currentColor" stroke-width="1.2"/><text x="160" y="153" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">5</text><text x="196" y="153" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">6</text><line x1="181" y1="160" x2="187" y2="154" stroke="currentColor" stroke-width="1.2"/><line x1="181" y1="149" x2="187" y2="143" stroke="currentColor" stroke-width="1.2"/><text x="232" y="153" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">7</text><text x="268" y="153" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">8</text><line x1="253" y1="160" x2="259" y2="154" stroke="currentColor" stroke-width="1.2"/><line x1="253" y1="149" x2="259" y2="143" stroke="currentColor" stroke-width="1.2"/><text x="52" y="183" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">3</text><text x="88" y="183" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">4</text><line x1="73" y1="190" x2="79" y2="184" stroke="currentColor" stroke-width="1.2"/><line x1="73" y1="179" x2="79" y2="173" stroke="currentColor" stroke-width="1.2"/><text x="124" y="183" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">5</text><text x="160" y="183" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">6</text><line x1="145" y1="190" x2="151" y2="184" stroke="currentColor" stroke-width="1.2"/><line x1="145" y1="179" x2="151" y2="173" stroke="currentColor" stroke-width="1.2"/><text x="196" y="183" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">7</text><text x="232" y="183" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">8</text><line x1="217" y1="190" x2="223" y2="184" stroke="currentColor" stroke-width="1.2"/><line x1="217" y1="179" x2="223" y2="173" stroke="currentColor" stroke-width="1.2"/><text x="268" y="183" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">9</text><text x="52" y="213" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">4</text><text x="88" y="213" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">5</text><text x="124" y="213" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">6</text><line x1="109" y1="220" x2="115" y2="214" stroke="currentColor" stroke-width="1.2"/><line x1="109" y1="209" x2="115" y2="203" stroke="currentColor" stroke-width="1.2"/><text x="160" y="213" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">7</text><text x="196" y="213" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">8</text><line x1="181" y1="220" x2="187" y2="214" stroke="currentColor" stroke-width="1.2"/><line x1="181" y1="209" x2="187" y2="203" stroke="currentColor" stroke-width="1.2"/><text x="232" y="213" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">9</text><text x="268" y="213" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">10</text><line x1="253" y1="220" x2="259" y2="214" stroke="currentColor" stroke-width="1.2"/><line x1="253" y1="209" x2="259" y2="203" stroke="currentColor" stroke-width="1.2"/><circle cx="52" cy="40" r="28" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="52" y1="40" x2="71.8" y2="20.2" stroke="currentColor" stroke-width="1.6"/><line x1="52" y1="40" x2="32.2" y2="20.2" stroke="currentColor" stroke-width="1.6"/><line x1="52" y1="40" x2="32.2" y2="59.8" stroke="currentColor" stroke-width="1.6"/><line x1="52" y1="40" x2="71.8" y2="59.8" stroke="currentColor" stroke-width="1.6"/><text x="71" y="44" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1</text><text x="52" y="25" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">2</text><text x="33" y="44" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">3</text><text x="52" y="63" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">4</text><text x="86" y="34" font-size="11.5" font-family="inherit" fill="currentColor">转盘 1–4</text><text x="180" y="66" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">骰子点数 1–6</text><text x="52" y="93" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">转盘</text></svg></figure>',
    options: ['1/2', '1/3', '11/24', '13/24'],
    answer: 0,
    explanation: '两数之和为偶数 ⇔ 两数同奇或同偶。转盘 1–4 中奇数有 2 个（1、3）、偶数有 2 个（2、4）；骰子 1–6 中奇数有 3 个（1、3、5）、偶数有 3 个（2、4、6）。同奇的组合 2×3=6 种，同偶的组合 2×3=6 种，共 12 种，而样本空间共 4×6=24 种等可能结果，所以 P=12/24=1/2。选 A。'
  },
  {
    id: 'q-probability-10',
    kp: 'probability',
    difficulty: 'hard',
    type: 'single',
    stem: '一个转盘被均分成 8 个扇形，依次标上 1、2、…、8。游戏规则：转动转盘，指针指向奇数则甲得 1 分，指向偶数则乙得 1 分。这个游戏（　）',
    options: ['公平，因为 P(奇数)=P(偶数)=1/2', '不公平，对甲有利', '不公平，对乙有利', '无法判断是否公平'],
    answer: 0,
    explanation: '1–8 中奇数有 1、3、5、7 共 4 个，偶数有 2、4、6、8 共 4 个，8 个扇形全等，指针落在每个扇形上等可能，所以 P(奇数)=4/8=1/2，P(偶数)=4/8=1/2。两人每次得分的概率相等，大量重复游戏时平均得分相同，游戏公平。判断公平性必须分别算出双方获胜概率再比较，不能只看"奇数偶数各占一半"这一句直觉。选 A。'
  },
  {
    id: 'q-probability-11',
    kp: 'probability',
    difficulty: 'hard',
    type: 'fill',
    stem: '三封不同的信随机放入三个写有不同地址的信封中，每个信封放一封信。则三封信全部放对的概率是（　）',
    answers: ['1/6'],
    explanation: '按顺序依次放：第一封有 3 种放法，第二封只剩 2 个信封，第三封只剩 1 个，共有 3×2×1=6 种等可能的放法（三封信的全排列）。全部放对只有 1 种，所以 P=1/6。注意这不是三步独立试验（每封信只能用一次），样本空间是排列数 6 而不是 3<sup>3</sup>=27。'
  },
  {
    id: 'q-probability-12',
    kp: 'probability',
    difficulty: 'hard',
    type: 'single',
    stem: '如图，正方形 ABCD 的边长为 2，它的内切圆为 ⊙O。向正方形内随机投一点，则该点落在阴影区域（圆内）的概率是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="正方形ABCD边长2，内含它的内切圆，圆心O，圆内画斜线阴影"><polygon points="80,180 240,180 240,20 80,20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="160" cy="100" r="80" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M94,180 L94,166 L80,166" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M226,180 L226,166 L240,166" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M226,20 L226,34 L240,34" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M94,20 L94,34 L80,34" fill="none" stroke="currentColor" stroke-width="1.2"/><line x1="161.2" y1="29.2" x2="166.8" y2="34.8" stroke="currentColor" stroke-width="1.2"/><line x1="131.2" y1="41.2" x2="136.8" y2="46.8" stroke="currentColor" stroke-width="1.2"/><line x1="143.2" y1="41.2" x2="148.8" y2="46.8" stroke="currentColor" stroke-width="1.2"/><line x1="155.2" y1="41.2" x2="160.8" y2="46.8" stroke="currentColor" stroke-width="1.2"/><line x1="167.2" y1="41.2" x2="172.8" y2="46.8" stroke="currentColor" stroke-width="1.2"/><line x1="179.2" y1="41.2" x2="184.8" y2="46.8" stroke="currentColor" stroke-width="1.2"/><line x1="191.2" y1="41.2" x2="196.8" y2="46.8" stroke="currentColor" stroke-width="1.2"/><line x1="113.2" y1="53.2" x2="118.8" y2="58.8" stroke="currentColor" stroke-width="1.2"/><line x1="125.2" y1="53.2" x2="130.8" y2="58.8" stroke="currentColor" stroke-width="1.2"/><line x1="137.2" y1="53.2" x2="142.8" y2="58.8" stroke="currentColor" stroke-width="1.2"/><line x1="149.2" y1="53.2" x2="154.8" y2="58.8" stroke="currentColor" stroke-width="1.2"/><line x1="185.2" y1="53.2" x2="190.8" y2="58.8" stroke="currentColor" stroke-width="1.2"/><line x1="197.2" y1="53.2" x2="202.8" y2="58.8" stroke="currentColor" stroke-width="1.2"/><line x1="209.2" y1="53.2" x2="214.8" y2="58.8" stroke="currentColor" stroke-width="1.2"/><line x1="107.2" y1="65.2" x2="112.8" y2="70.8" stroke="currentColor" stroke-width="1.2"/><line x1="119.2" y1="65.2" x2="124.8" y2="70.8" stroke="currentColor" stroke-width="1.2"/><line x1="131.2" y1="65.2" x2="136.8" y2="70.8" stroke="currentColor" stroke-width="1.2"/><line x1="143.2" y1="65.2" x2="148.8" y2="70.8" stroke="currentColor" stroke-width="1.2"/><line x1="191.2" y1="65.2" x2="196.8" y2="70.8" stroke="currentColor" stroke-width="1.2"/><line x1="203.2" y1="65.2" x2="208.8" y2="70.8" stroke="currentColor" stroke-width="1.2"/><line x1="215.2" y1="65.2" x2="220.8" y2="70.8" stroke="currentColor" stroke-width="1.2"/><line x1="101.2" y1="77.2" x2="106.8" y2="82.8" stroke="currentColor" stroke-width="1.2"/><line x1="113.2" y1="77.2" x2="118.8" y2="82.8" stroke="currentColor" stroke-width="1.2"/><line x1="125.2" y1="77.2" x2="130.8" y2="82.8" stroke="currentColor" stroke-width="1.2"/><line x1="137.2" y1="77.2" x2="142.8" y2="82.8" stroke="currentColor" stroke-width="1.2"/><line x1="149.2" y1="77.2" x2="154.8" y2="82.8" stroke="currentColor" stroke-width="1.2"/><line x1="161.2" y1="77.2" x2="166.8" y2="82.8" stroke="currentColor" stroke-width="1.2"/><line x1="173.2" y1="77.2" x2="178.8" y2="82.8" stroke="currentColor" stroke-width="1.2"/><line x1="185.2" y1="77.2" x2="190.8" y2="82.8" stroke="currentColor" stroke-width="1.2"/><line x1="197.2" y1="77.2" x2="202.8" y2="82.8" stroke="currentColor" stroke-width="1.2"/><line x1="209.2" y1="77.2" x2="214.8" y2="82.8" stroke="currentColor" stroke-width="1.2"/><line x1="221.2" y1="77.2" x2="226.8" y2="82.8" stroke="currentColor" stroke-width="1.2"/><line x1="95.2" y1="89.2" x2="100.8" y2="94.8" stroke="currentColor" stroke-width="1.2"/><line x1="107.2" y1="89.2" x2="112.8" y2="94.8" stroke="currentColor" stroke-width="1.2"/><line x1="119.2" y1="89.2" x2="124.8" y2="94.8" stroke="currentColor" stroke-width="1.2"/><line x1="131.2" y1="89.2" x2="136.8" y2="94.8" stroke="currentColor" stroke-width="1.2"/><line x1="143.2" y1="89.2" x2="148.8" y2="94.8" stroke="currentColor" stroke-width="1.2"/><line x1="155.2" y1="89.2" x2="160.8" y2="94.8" stroke="currentColor" stroke-width="1.2"/><line x1="167.2" y1="89.2" x2="172.8" y2="94.8" stroke="currentColor" stroke-width="1.2"/><line x1="179.2" y1="89.2" x2="184.8" y2="94.8" stroke="currentColor" stroke-width="1.2"/><line x1="191.2" y1="89.2" x2="196.8" y2="94.8" stroke="currentColor" stroke-width="1.2"/><line x1="203.2" y1="89.2" x2="208.8" y2="94.8" stroke="currentColor" stroke-width="1.2"/><line x1="215.2" y1="89.2" x2="220.8" y2="94.8" stroke="currentColor" stroke-width="1.2"/><line x1="89.2" y1="101.2" x2="94.8" y2="106.8" stroke="currentColor" stroke-width="1.2"/><line x1="101.2" y1="101.2" x2="106.8" y2="106.8" stroke="currentColor" stroke-width="1.2"/><line x1="113.2" y1="101.2" x2="118.8" y2="106.8" stroke="currentColor" stroke-width="1.2"/><line x1="125.2" y1="101.2" x2="130.8" y2="106.8" stroke="currentColor" stroke-width="1.2"/><line x1="137.2" y1="101.2" x2="142.8" y2="106.8" stroke="currentColor" stroke-width="1.2"/><line x1="149.2" y1="101.2" x2="154.8" y2="106.8" stroke="currentColor" stroke-width="1.2"/><line x1="161.2" y1="101.2" x2="166.8" y2="106.8" stroke="currentColor" stroke-width="1.2"/><line x1="173.2" y1="101.2" x2="178.8" y2="106.8" stroke="currentColor" stroke-width="1.2"/><line x1="185.2" y1="101.2" x2="190.8" y2="106.8" stroke="currentColor" stroke-width="1.2"/><line x1="197.2" y1="101.2" x2="202.8" y2="106.8" stroke="currentColor" stroke-width="1.2"/><line x1="209.2" y1="101.2" x2="214.8" y2="106.8" stroke="currentColor" stroke-width="1.2"/><line x1="221.2" y1="101.2" x2="226.8" y2="106.8" stroke="currentColor" stroke-width="1.2"/><line x1="95.2" y1="113.2" x2="100.8" y2="118.8" stroke="currentColor" stroke-width="1.2"/><line x1="107.2" y1="113.2" x2="112.8" y2="118.8" stroke="currentColor" stroke-width="1.2"/><line x1="119.2" y1="113.2" x2="124.8" y2="118.8" stroke="currentColor" stroke-width="1.2"/><line x1="131.2" y1="113.2" x2="136.8" y2="118.8" stroke="currentColor" stroke-width="1.2"/><line x1="143.2" y1="113.2" x2="148.8" y2="118.8" stroke="currentColor" stroke-width="1.2"/><line x1="155.2" y1="113.2" x2="160.8" y2="118.8" stroke="currentColor" stroke-width="1.2"/><line x1="167.2" y1="113.2" x2="172.8" y2="118.8" stroke="currentColor" stroke-width="1.2"/><line x1="179.2" y1="113.2" x2="184.8" y2="118.8" stroke="currentColor" stroke-width="1.2"/><line x1="191.2" y1="113.2" x2="196.8" y2="118.8" stroke="currentColor" stroke-width="1.2"/><line x1="203.2" y1="113.2" x2="208.8" y2="118.8" stroke="currentColor" stroke-width="1.2"/><line x1="215.2" y1="113.2" x2="220.8" y2="118.8" stroke="currentColor" stroke-width="1.2"/><line x1="101.2" y1="125.2" x2="106.8" y2="130.8" stroke="currentColor" stroke-width="1.2"/><line x1="113.2" y1="125.2" x2="118.8" y2="130.8" stroke="currentColor" stroke-width="1.2"/><line x1="125.2" y1="125.2" x2="130.8" y2="130.8" stroke="currentColor" stroke-width="1.2"/><line x1="137.2" y1="125.2" x2="142.8" y2="130.8" stroke="currentColor" stroke-width="1.2"/><line x1="149.2" y1="125.2" x2="154.8" y2="130.8" stroke="currentColor" stroke-width="1.2"/><line x1="161.2" y1="125.2" x2="166.8" y2="130.8" stroke="currentColor" stroke-width="1.2"/><line x1="173.2" y1="125.2" x2="178.8" y2="130.8" stroke="currentColor" stroke-width="1.2"/><line x1="185.2" y1="125.2" x2="190.8" y2="130.8" stroke="currentColor" stroke-width="1.2"/><line x1="197.2" y1="125.2" x2="202.8" y2="130.8" stroke="currentColor" stroke-width="1.2"/><line x1="209.2" y1="125.2" x2="214.8" y2="130.8" stroke="currentColor" stroke-width="1.2"/><line x1="107.2" y1="137.2" x2="112.8" y2="142.8" stroke="currentColor" stroke-width="1.2"/><line x1="119.2" y1="137.2" x2="124.8" y2="142.8" stroke="currentColor" stroke-width="1.2"/><line x1="131.2" y1="137.2" x2="136.8" y2="142.8" stroke="currentColor" stroke-width="1.2"/><line x1="143.2" y1="137.2" x2="148.8" y2="142.8" stroke="currentColor" stroke-width="1.2"/><line x1="155.2" y1="137.2" x2="160.8" y2="142.8" stroke="currentColor" stroke-width="1.2"/><line x1="167.2" y1="137.2" x2="172.8" y2="142.8" stroke="currentColor" stroke-width="1.2"/><line x1="179.2" y1="137.2" x2="184.8" y2="142.8" stroke="currentColor" stroke-width="1.2"/><line x1="191.2" y1="137.2" x2="196.8" y2="142.8" stroke="currentColor" stroke-width="1.2"/><line x1="203.2" y1="137.2" x2="208.8" y2="142.8" stroke="currentColor" stroke-width="1.2"/><circle cx="160" cy="100" r="2.6" fill="currentColor"/><circle cx="160" cy="180" r="2.6" fill="currentColor"/><circle cx="160" cy="20" r="2.6" fill="currentColor"/><circle cx="80" cy="100" r="2.6" fill="currentColor"/><circle cx="240" cy="100" r="2.6" fill="currentColor"/><text x="72" y="194" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A</text><text x="248" y="194" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="248" y="14" font-size="13" font-family="inherit" fill="currentColor">C</text><text x="72" y="14" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">D</text><text x="168" y="70" font-size="13" font-family="inherit" fill="currentColor">O</text><text x="160" y="198" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">2</text><text x="160" y="168" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">阴影内投点</text></svg></figure>',
    options: ['π/4', 'π/2', 'π/8', '1/2'],
    answer: 0,
    explanation: '这是几何概型，概率等于面积的比。正方形边长 2，面积 4；内切圆半径 r=边长/2=1，面积 π×1<sup>2</sup>=π。投放点在正方形内均匀分布，所以 P=圆面积÷正方形面积=π/4。选 A。'
  },
];