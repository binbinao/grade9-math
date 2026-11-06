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

  /* ===== v4 新增：quad-eq 13–50（38 题，basic9 / medium14 / hard15，综合 10，含图 12） ===== */
  {
    id: 'q-quad-eq-13',
    kp: 'quad-eq',
    difficulty: 'basic',
    type: 'single',
    stem: '用直接开平方法解方程 (x−3)<sup>2</sup>=16，它的解是（　）',
    options: ['x<sub>1</sub>=7，x<sub>2</sub>=−1', 'x<sub>1</sub>=7，x<sub>2</sub>=1', 'x<sub>1</sub>=−7，x<sub>2</sub>=1', 'x<sub>1</sub>=19，x<sub>2</sub>=−13'],
    answer: 0,
    explanation: '把 (x−3) 看成一个整体直接开平方：x−3=4 或 x−3=−4。当 x−3=4 时 x=7；当 x−3=−4 时 x=−1。验算：x=7 时 (7−3)<sup>2</sup>=4<sup>2</sup>=16；x=−1 时 (−1−3)<sup>2</sup>=(−4)<sup>2</sup>=16，两根都成立。选 A。'
  },
  {
    id: 'q-quad-eq-14',
    kp: 'quad-eq',
    difficulty: 'basic',
    type: 'fill',
    stem: '方程 x<sup>2</sup>=7x 的两个根中，较小的那个根是（　）。',
    answers: ['0'],
    explanation: '先移项，把方程化成一元二次方程的一般形式：x<sup>2</sup>−7x=0。提公因式得 x(x−7)=0，所以 x=0 或 x−7=0，即 x<sub>1</sub>=0，x<sub>2</sub>=7。注意不能在两边同时除以 x，那样会丢掉 x=0 这个根（x 可能等于 0，除数不能为 0）。两个根中较小的是 0。'
  },
  {
    id: 'q-quad-eq-15',
    kp: 'quad-eq',
    difficulty: 'basic',
    type: 'single',
    stem: '用配方法解方程 x<sup>2</sup>−4x−1=0，配方后得到的方程是（　）',
    options: ['(x−2)<sup>2</sup>=5', '(x−2)<sup>2</sup>=3', '(x+2)<sup>2</sup>=5', '(x−4)<sup>2</sup>=17'],
    answer: 0,
    explanation: '移项得 x<sup>2</sup>−4x=1。一次项系数是 −4，它的一半是 −2，平方得 4，两边同时加 4：x<sup>2</sup>−4x+4=1+4，左边恰为 (x−2)<sup>2</sup>，所以 (x−2)<sup>2</sup>=5。还原检查：把 (x−2)<sup>2</sup>=5 展开得 x<sup>2</sup>−4x+4=5，即 x<sup>2</sup>−4x−1=0，与原方程一致。选 A。'
  },
  {
    id: 'q-quad-eq-16',
    kp: 'quad-eq',
    difficulty: 'basic',
    type: 'fill',
    stem: '方程 2x<sup>2</sup>−3x−2=0 的正根是（　）。',
    answers: ['2'],
    explanation: 'a=2，b=−3，c=−2。Δ=b<sup>2</sup>−4ac=(−3)<sup>2</sup>−4×2×(−2)=9+16=25&gt;0，所以方程有两个不相等实根：x=[−(−3)±√25]/(2×2)=(3±5)/4，得 x<sub>1</sub>=8/4=2，x<sub>2</sub>=−2/4=−1/2。其中正根是 2。验算：2×2<sup>2</sup>−3×2−2=8−6−2=0。'
  },
  {
    id: 'q-quad-eq-17',
    kp: 'quad-eq',
    difficulty: 'basic',
    type: 'single',
    stem: '方程 2x<sup>2</sup>−7x+3=0 的解是（　）',
    options: ['x<sub>1</sub>=1/2，x<sub>2</sub>=3', 'x<sub>1</sub>=−1/2，x<sub>2</sub>=3', 'x<sub>1</sub>=1/2，x<sub>2</sub>=−3', 'x<sub>1</sub>=2，x<sub>2</sub>=3/2'],
    answer: 0,
    explanation: '用十字相乘法分解 2x<sup>2</sup>−7x+3：把 2x<sup>2</sup> 拆成 2x 与 x，把 3 拆成 (−1) 与 (−3)，交叉相乘 2x×(−3)+x×(−1)=−6x−x=−7x，正好等于一次项，所以 2x<sup>2</sup>−7x+3=(2x−1)(x−3)=0。由 2x−1=0 得 x=1/2，由 x−3=0 得 x=3。验算：x=1/2 时 2×(1/4)−7×(1/2)+3=0.5−3.5+3=0；x=3 时 18−21+3=0。选 A。'
  },
  {
    id: 'q-quad-eq-18',
    kp: 'quad-eq',
    difficulty: 'basic',
    type: 'fill',
    stem: '如图，数轴上点 A、B 所表示的数恰好是方程 x<sup>2</sup>−2x−3=0 的两个根，则线段 AB 的长是（　）。<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="数轴上标出方程的两个根：点 A 表示 -1，点 B 表示 3，O 为原点"><line x1="40" y1="140" x2="300" y2="140" stroke="currentColor" stroke-width="1.6"/><line x1="300" y1="140" x2="291" y2="136" stroke="currentColor" stroke-width="1.6"/><line x1="300" y1="140" x2="291" y2="144" stroke="currentColor" stroke-width="1.6"/><line x1="70" y1="135" x2="70" y2="145" stroke="currentColor" stroke-width="1.2"/><line x1="120" y1="135" x2="120" y2="145" stroke="currentColor" stroke-width="1.2"/><line x1="170" y1="135" x2="170" y2="145" stroke="currentColor" stroke-width="1.2"/><line x1="220" y1="135" x2="220" y2="145" stroke="currentColor" stroke-width="1.2"/><line x1="270" y1="135" x2="270" y2="145" stroke="currentColor" stroke-width="1.2"/><text x="70" y="160" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">-1</text><text x="120" y="160" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">0</text><text x="170" y="160" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1</text><text x="220" y="160" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">2</text><text x="270" y="160" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">3</text><circle cx="70" cy="140" r="2.8" fill="currentColor"/><circle cx="270" cy="140" r="2.8" fill="currentColor"/><text x="70" y="128" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">A</text><text x="270" y="128" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">B</text><text x="86" y="184" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">根 x₁</text><text x="254" y="184" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">根 x₂</text></svg></figure>',
    answers: ['4'],
    explanation: '先把方程解出来：x<sup>2</sup>−2x−3=(x−3)(x+1)=0，所以 x<sub>1</sub>=3，x<sub>2</sub>=−1。即点 A 表示 −1，点 B 表示 3。数轴上两点间的距离等于右边点的坐标减去左边点的坐标：AB=3−(−1)=4。'
  },
  {
    id: 'q-quad-eq-19',
    kp: 'quad-eq',
    difficulty: 'basic',
    type: 'single',
    stem: '一元二次方程 x<sup>2</sup>−3x+5=0 的根的情况是（　）',
    options: ['有两个不相等的实数根', '有两个相等的实数根', '没有实数根', '只有一个实数根'],
    answer: 2,
    explanation: '用判别式判断：a=1，b=−3，c=5，Δ=b<sup>2</sup>−4ac=(−3)<sup>2</sup>−4×1×5=9−20=−11。因为 Δ=−11&lt;0，所以方程没有实数根。也可以配方核对：x<sup>2</sup>−3x+5=(x−1.5)<sup>2</sup>+5−2.25=(x−1.5)<sup>2</sup>+2.75，而 (x−1.5)<sup>2</sup>≥0，左边最小为 2.75&gt;0，不可能等于 0，确实无实根。选 C。'
  },
  {
    id: 'q-quad-eq-20',
    kp: 'quad-eq',
    difficulty: 'basic',
    type: 'single',
    stem: '如图，抛物线 y=x<sup>2</sup>−2x−3 与 x 轴交于点 A、B，则关于 x 的方程 x<sup>2</sup>−2x−3=0 的解是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="抛物线 y 等于 x 平方减 2x 减 3 的图象，与 x 轴交于点 A 和点 B"><line x1="50" y1="110" x2="300" y2="110" stroke="currentColor" stroke-width="1.6"/><line x1="300" y1="110" x2="291" y2="106" stroke="currentColor" stroke-width="1.6"/><line x1="300" y1="110" x2="291" y2="114" stroke="currentColor" stroke-width="1.6"/><line x1="150" y1="225" x2="150" y2="40" stroke="currentColor" stroke-width="1.6"/><line x1="150" y1="40" x2="146" y2="49" stroke="currentColor" stroke-width="1.6"/><line x1="150" y1="40" x2="154" y2="49" stroke="currentColor" stroke-width="1.6"/><polyline points="90,65 100,88.75 110,110 120,128.75 130,145 140,158.75 150,170 160,178.75 170,185 180,188.75 190,190 200,188.75 210,185 220,178.75 230,170 240,158.75 250,145 260,128.75 270,110 280,88.75 290,65" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="110" cy="110" r="2.8" fill="currentColor"/><circle cx="270" cy="110" r="2.8" fill="currentColor"/><circle cx="190" cy="190" r="2.8" fill="currentColor"/><text x="306" y="104" font-size="13" font-family="inherit" fill="currentColor">x</text><text x="160" y="48" font-size="13" font-family="inherit" fill="currentColor">y</text><text x="142" y="128" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">O</text><text x="110" y="100" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">A</text><text x="270" y="100" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">B</text><text x="202" y="206" font-size="11.5" font-family="inherit" fill="currentColor">y=x²-2x-3</text></svg></figure>',
    options: ['x<sub>1</sub>=−1，x<sub>2</sub>=3', 'x<sub>1</sub>=1，x<sub>2</sub>=−3', 'x<sub>1</sub>=1，x<sub>2</sub>=3', 'x<sub>1</sub>=−1，x<sub>2</sub>=−3'],
    answer: 0,
    explanation: '二次函数与一元二次方程的关系：抛物线 y=ax<sup>2</sup>+bx+c 与 x 轴交点的横坐标，就是方程 ax<sup>2</sup>+bx+c=0 的根。图中 A、B 的横坐标分别为 −1 和 3，所以方程的解是 x<sub>1</sub>=−1，x<sub>2</sub>=3。代数验证：x=−1 时 1+2−3=0；x=3 时 9−6−3=0，都成立。选 A。',
    tags: ['quad-func']
  },
  {
    id: 'q-quad-eq-21',
    kp: 'quad-eq',
    difficulty: 'basic',
    type: 'fill',
    stem: '某商品原价 100 元，连续两次降价，每次降价的百分率相同，两次降价后的售价为 81 元，则每次降价的百分率是（　）。',
    answers: ['0.1', '1/10', '10%'],
    explanation: '设每次降价的百分率为 x。第一次降价后价格为 100(1−x)，第二次降价后为 100(1−x)<sup>2</sup>，由题意 100(1−x)<sup>2</sup>=81，即 (1−x)<sup>2</sup>=0.81。开平方得 1−x=0.9 或 1−x=−0.9，所以 x=0.1 或 x=1.9。降价率必须小于 1（否则价格变成负数或 0），故 x=1.9 不合题意，舍去。所以每次降价 10%（即 0.1）。'
  },
  {
    id: 'q-quad-eq-22',
    kp: 'quad-eq',
    difficulty: 'medium',
    type: 'single',
    stem: '若关于 x 的一元二次方程 x<sup>2</sup>+kx+4=0 有两个相等的实数根，则 k 的值是（　）',
    options: ['k=4', 'k=−4', 'k=±4', 'k=±2'],
    answer: 2,
    explanation: '两个相等的实数根 ⇔ Δ=0。这里 a=1，b=k，c=4，Δ=k<sup>2</sup>−4×1×4=k<sup>2</sup>−16=0，解得 k=4 或 k=−4，即 k=±4。验证：k=4 时 x<sup>2</sup>+4x+4=(x+2)<sup>2</sup>=0，根为 x<sub>1</sub>=x<sub>2</sub>=−2；k=−4 时 x<sup>2</sup>−4x+4=(x−2)<sup>2</sup>=0，根为 x<sub>1</sub>=x<sub>2</sub>=2，都符合。注意不要漏掉负值。选 C。'
  },
  {
    id: 'q-quad-eq-23',
    kp: 'quad-eq',
    difficulty: 'medium',
    type: 'fill',
    stem: '已知 x<sub>1</sub>、x<sub>2</sub> 是方程 x<sup>2</sup>−3x−1=0 的两个根，则 |x<sub>1</sub>−x<sub>2</sub>| 等于（　）。',
    answers: ['√13'],
    explanation: '先确认确有两根：Δ=(−3)<sup>2</sup>−4×1×(−1)=9+4=13&gt;0。由韦达定理 x<sub>1</sub>+x<sub>2</sub>=3，x<sub>1</sub>x<sub>2</sub>=−1。先求平方：(x<sub>1</sub>−x<sub>2</sub>)<sup>2</sup>=(x<sub>1</sub>+x<sub>2</sub>)<sup>2</sup>−4x<sub>1</sub>x<sub>2</sub>=3<sup>2</sup>−4×(−1)=9+4=13，所以 |x<sub>1</sub>−x<sub>2</sub>|=√13。'
  },
  {
    id: 'q-quad-eq-24',
    kp: 'quad-eq',
    difficulty: 'medium',
    type: 'single',
    stem: '以 2+√3 与 2−√3 为两根的一元二次方程是（　）',
    options: ['x<sup>2</sup>−4x+1=0', 'x<sup>2</sup>+4x+1=0', 'x<sup>2</sup>−4x−1=0', 'x<sup>2</sup>−2x+3=0'],
    answer: 0,
    explanation: '用韦达定理的逆用：若两根为 x<sub>1</sub>、x<sub>2</sub>，则 x<sup>2</sup>−(x<sub>1</sub>+x<sub>2</sub>)x+x<sub>1</sub>x<sub>2</sub>=0。两根之和 (2+√3)+(2−√3)=4；两根之积 (2+√3)(2−√3)=2<sup>2</sup>−(√3)<sup>2</sup>=4−3=1。所以方程是 x<sup>2</sup>−4x+1=0。回头用求根公式检验：Δ=16−4=12，x=(4±√12)/2=2±√3，与题目给的两根一致。选 A。'
  },
  {
    id: 'q-quad-eq-25',
    kp: 'quad-eq',
    difficulty: 'medium',
    type: 'fill',
    stem: '如图，一块长 10 m、宽 8 m 的矩形花圃，四周修一条宽度处处相等的 x m 的小路，使含小路在内的总面积为 168 m<sup>2</sup>，则小路宽 x =（　）。<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="矩形花圃四周修一条等宽小路：里面的花圃长 10 米、宽 8 米，外面含路的大矩形总面积 168 平方米"><rect x="60" y="34" width="196" height="168" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="88" y="62" width="140" height="112" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="158" y="118" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">花圃 10 m x 8 m</text><text x="158" y="56" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">路宽处处都是 x</text><text x="158" y="232" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">含路总面积 168 m²</text></svg></figure>',
    answers: ['2'],
    explanation: '加上小路后，大矩形的长变成 (10+2x) m、宽变成 (8+2x) m（左右各加宽 x，上下也各加宽 x）。由总面积得 (10+2x)(8+2x)=168，展开得 80+36x+4x<sup>2</sup>=168，整理成一般形式 4x<sup>2</sup>+36x−88=0，两边除以 4 得 x<sup>2</sup>+9x−22=0。因式分解 (x+11)(x−2)=0，得 x=2 或 x=−11。路宽必须为正数，舍去 −11，故 x=2。验算：(10+4)(8+4)=14×12=168，与总面积相符。'
  },
  {
    id: 'q-quad-eq-26',
    kp: 'quad-eq',
    difficulty: 'medium',
    type: 'single',
    stem: '已知关于 x 的方程 (m−2)x<sup>2</sup>−4x+1=0 有实数根，则 m 能取到的最大整数值是（　）',
    options: ['6', '5', '4', '2'],
    answer: 0,
    explanation: '二次项系数含参数，必须分类讨论。① 当 m−2=0，即 m=2 时，方程化为 −4x+1=0，是一次方程，有实数根 x=1/4，符合条件；② 当 m−2≠0 时是一元二次方程，有实数根 ⇔ Δ≥0，Δ=(−4)<sup>2</sup>−4(m−2)×1=16−4m+8=24−4m≥0，解得 m≤6。合并两种情况（m=2 已包含在 m≤6 中），得 m≤6。所以 m 能取到的最大整数是 6（此时 Δ=0，根为 x=1/2 的重根）。选 A。'
  },
  {
    id: 'q-quad-eq-27',
    kp: 'quad-eq',
    difficulty: 'medium',
    type: 'fill',
    stem: '某商品每件进价 40 元，定价 60 元时每天可卖出 100 件。售价每上涨 1 元，日销量就减少 5 件。若某天的利润为 1500 元，则当天的售价比定价上涨了（　）元。',
    answers: ['10'],
    explanation: '设售价比定价上涨 t 元（t≥0）。此时每件利润为 (60+t)−40=20+t 元，日销量为 100−5t 件，日利润为 (20+t)(100−5t)=2000−100t+100t−5t<sup>2</sup>=2000−5t<sup>2</sup>。由 2000−5t<sup>2</sup>=1500 得 5t<sup>2</sup>=500，t<sup>2</sup>=100，t=10 或 t=−10。因为涨价不能为负，舍去 t=−10，得 t=10。验算：售价 70 元，每件利润 30 元，日销量 50 件，利润 30×50=1500 元。'
  },
  {
    id: 'q-quad-eq-28',
    kp: 'quad-eq',
    difficulty: 'medium',
    type: 'fill',
    stem: '如图，一幅画长 24 cm、宽 18 cm，在它四周镶一条等宽的边框，使边框的面积为 288 cm<sup>2</sup>，则边框的宽是（　）cm。<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="一幅画长 24 厘米、宽 18 厘米，四周镶上等宽边框后，整幅含框长方形比画本身大出一圈"><rect x="70" y="48" width="180" height="144" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="88" y="66" width="144" height="108" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="160" y="125" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">画 24 cm x 18 cm</text><text x="160" y="70" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">边框宽 x</text><text x="160" y="218" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">边框面积 288 cm²</text></svg></figure>',
    answers: ['3'],
    explanation: '设边框宽为 x cm，则含框大矩形的长为 (24+2x) cm、宽为 (18+2x) cm。边框面积 = 大矩形面积 − 画的面积，即 (24+2x)(18+2x)−24×18=288。展开：432+84x+4x<sup>2</sup>−432=288，即 4x<sup>2</sup>+84x−288=0，两边除以 4 得 x<sup>2</sup>+21x−72=0，因式分解 (x+24)(x−3)=0，得 x=3 或 x=−24。宽度为正，舍去 −24，所以边框宽 3 cm。验算：30×24−24×18=720−432=288。'
  },
  {
    id: 'q-quad-eq-29',
    kp: 'quad-eq',
    difficulty: 'medium',
    type: 'fill',
    stem: '两个连续正整数的积是 156，其中较小的数是（　）。',
    answers: ['12'],
    explanation: '设较小的正整数为 n，则较大的为 n+1，由题意 n(n+1)=156，整理得 n<sup>2</sup>+n−156=0。Δ=1<sup>2</sup>−4×1×(−156)=1+624=625=25<sup>2</sup>，n=(−1±25)/2，得 n=12 或 n=−13。因为 n 是正整数，舍去 −13，所以较小的数是 12。验算：12×13=156。'
  },
  {
    id: 'q-quad-eq-30',
    kp: 'quad-eq',
    difficulty: 'medium',
    type: 'fill',
    stem: '如图，把一块长 20 cm、宽 15 cm 的矩形铁皮的四个角各剪去一个边长为 x cm 的正方形，再把四边折起做成一个无盖盒子。若盒底的面积为 176 cm<sup>2</sup>，则 x =（　）。<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="矩形铁皮长 20 厘米、宽 15 厘米，四个角各剪去一个边长 x 的小正方形，虚线是折痕"><rect x="70" y="52" width="180" height="135" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="88" y1="52" x2="88" y2="187" stroke="currentColor" stroke-width="1.2" stroke-dasharray="6 4"/><line x1="232" y1="52" x2="232" y2="187" stroke="currentColor" stroke-width="1.2" stroke-dasharray="6 4"/><line x1="70" y1="70" x2="250" y2="70" stroke="currentColor" stroke-width="1.2" stroke-dasharray="6 4"/><line x1="70" y1="169" x2="250" y2="169" stroke="currentColor" stroke-width="1.2" stroke-dasharray="6 4"/><text x="160" y="38" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">20 cm</text><text x="62" y="119.5" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">15 cm</text><text x="160" y="217" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">四角各剪去边长 x 的正方形</text></svg></figure>',
    answers: ['2'],
    explanation: '四个角各剪去边长为 x 的正方形后，盒底的长为 (20−2x) cm、宽为 (15−2x) cm。由底面积得 (20−2x)(15−2x)=176，展开得 300−70x+4x<sup>2</sup>=176，整理得 2x<sup>2</sup>−35x+62=0。Δ=(−35)<sup>2</sup>−4×2×62=1225−496=729=27<sup>2</sup>，x=(35±27)/4，得 x=15.5 或 x=2。因为盒底两边都要为正，需 15−2x&gt;0，即 x&lt;7.5，所以 x=15.5 不合题意，舍去，得 x=2。验算：(20−4)(15−4)=16×11=176。'
  },
  {
    id: 'q-quad-eq-31',
    kp: 'quad-eq',
    difficulty: 'medium',
    type: 'single',
    stem: '已知 x<sub>1</sub>、x<sub>2</sub> 是方程 x<sup>2</sup>−2x+k=0 的两个实数根，且 x<sub>1</sub><sup>2</sup>+x<sub>2</sub><sup>2</sup>=10，则 k 的值是（　）',
    options: ['−3', '3', '1', '−1'],
    answer: 0,
    explanation: '由韦达定理 x<sub>1</sub>+x<sub>2</sub>=2，x<sub>1</sub>x<sub>2</sub>=k。变形 x<sub>1</sub><sup>2</sup>+x<sub>2</sub><sup>2</sup>=(x<sub>1</sub>+x<sub>2</sub>)<sup>2</sup>−2x<sub>1</sub>x<sub>2</sub>=4−2k。由 4−2k=10 得 −2k=6，k=−3。检验判别式：Δ=4−4×1×(−3)=16&gt;0，方程确有两个实根（事实上根为 −1 与 3），符合"有两个实数根"的前提。选 A。'
  },
  {
    id: 'q-quad-eq-32',
    kp: 'quad-eq',
    difficulty: 'medium',
    type: 'fill',
    stem: '一块长 30 m、宽 20 m 的矩形地块，内部修一条竖直的和一条水平的等宽小路（宽度都是 x m），其余部分种草坪。若草坪的面积为 504 m<sup>2</sup>，则 x =（　）。',
    answers: ['2'],
    explanation: '用平移法：把被小路分开的几块草坪分别向左、向上平移拼在一起，恰好拼成一个长 (30−x) m、宽 (20−x) m 的矩形（两条路各占去 x 的宽度）。由草坪面积得 (30−x)(20−x)=504，展开得 600−50x+x<sup>2</sup>=504，整理得 x<sup>2</sup>−50x+96=0，因式分解 (x−2)(x−48)=0，得 x=2 或 x=48。路宽必须小于宽 20 m，舍去 48，所以 x=2。验算：28×18=504，草坪面积相符。'
  },
  {
    id: 'q-quad-eq-33',
    kp: 'quad-eq',
    difficulty: 'medium',
    type: 'fill',
    stem: '如图，在△ABC 中，点 D、E 分别在边 AB、AC 上，DE 与 BC 平行。若△ADE 的面积是四边形 DBCE 面积的三分之一，AD=3，则 DB 的长是（　）。<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="三角形 ABC 中，点 D 在边 AB 上、点 E 在边 AC 上，DE 与 BC 平行，把三角形分成上下两部分"><polygon points="140,50 70,200 230,200" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="105" y1="125" x2="185" y2="125" stroke="currentColor" stroke-width="1.4"/><circle cx="105" cy="125" r="2.6" fill="currentColor"/><circle cx="185" cy="125" r="2.6" fill="currentColor"/><text x="140" y="40" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">A</text><text x="60" y="218" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">B</text><text x="240" y="218" font-size="13" font-family="inherit" fill="currentColor">C</text><text x="95" y="129" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">D</text><text x="195" y="129" font-size="13" font-family="inherit" fill="currentColor">E</text><text x="175" y="96" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">DE 与 BC 平行</text><text x="150" y="225" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">AD=3，上下两部分面积比 1:3</text></svg></figure>',
    answers: ['3'],
    explanation: '由 DE∥BC 得 ∠ADE=∠ABC，∠AED=∠ACB，所以 △ADE∽△ABC（两组角对应相等）。相似三角形的面积比等于相似比的平方。设 S<sub>△ADE</sub>=S，则 S<sub>四边形DBCE</sub>=3S，于是 S<sub>△ABC</sub>=S+3S=4S，面积比为 S:4S=1:4，所以相似比 AD:AB=√(1/4)=1:2，即 AB=2AD=2×3=6。于是 DB=AB−AD=6−3=3。验算：AD=3、DB=3 时 D 是 AB 中点，DE 是中位线，△ADE 的面积确实是 △ABC 的四分之一，四边形部分占四分之三，两者之比 1:3，与题设一致。',
    tags: ['similarity']
  },
  {
    id: 'q-quad-eq-34',
    kp: 'quad-eq',
    difficulty: 'medium',
    type: 'fill',
    stem: '某公司 2023 年的利润为 200 万元，2025 年的利润为 288 万元。若这两年的年平均增长率相同，则年平均增长率是（　）。',
    answers: ['0.2', '1/5', '20%'],
    explanation: '设年平均增长率为 x。2023 年为 200 万元，经过 2024、2025 两次增长（共两年），2025 年为 200(1+x)<sup>2</sup> 万元，由题意 200(1+x)<sup>2</sup>=288，即 (1+x)<sup>2</sup>=1.44。开平方得 1+x=1.2 或 1+x=−1.2。增长率一般要求为正，由 1+x=1.2 得 x=0.2；另一解 x=−2.2 表示每年下降 220%，不合题意，舍去。所以年平均增长率为 20%（即 0.2）。验算：200×1.2×1.2=288。'
  },
  {
    id: 'q-quad-eq-35',
    kp: 'quad-eq',
    difficulty: 'medium',
    type: 'fill',
    stem: '如图，矩形 ABCD 内接于⊙O，矩形的周长为 28，面积为 48，则⊙O 的半径是（　）。<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="矩形 ABCD 内接于圆 O，矩形周长 28、面积 48，圆心为 O"><circle cx="160" cy="120" r="90" fill="none" stroke="currentColor" stroke-width="1.6"/><polygon points="106,48 214,48 214,192 106,192" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="160" cy="120" r="2.8" fill="currentColor"/><text x="160" y="22" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">矩形周长 28，面积 48</text><text x="172" y="126" font-size="13" font-family="inherit" fill="currentColor">O</text><text x="160" y="232" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">圆 O 的半径为 r</text></svg></figure>',
    answers: ['5'],
    explanation: '设矩形相邻两边长为 m、n，则 m+n=14（半周长），mn=48（面积）。由韦达定理的逆用，m、n 是方程 t<sup>2</sup>−14t+48=0 的两根，因式分解 (t−6)(t−8)=0，得两边为 6 和 8。再用圆的知识：矩形的四个顶点都在圆上，且 ∠ABC=90°，而 90° 的圆周角所对的弦是直径，所以矩形的对角线 AC 就是⊙O 的直径。由勾股定理 AC=√(6<sup>2</sup>+8<sup>2</sup>)=√100=10，故半径 r=AC/2=5。',
    tags: ['circle']
  },
  {
    id: 'q-quad-eq-36',
    kp: 'quad-eq',
    difficulty: 'hard',
    type: 'single',
    stem: '若关于 x 的方程 kx<sup>2</sup>−2x+1=0 有两个不相等的实数根，则 k 的取值范围是（　）',
    options: ['k&lt;1', 'k&lt;1 且 k≠0', 'k≤1 且 k≠0', 'k&gt;1'],
    answer: 1,
    explanation: '本题的陷阱在二次项系数可能为 0，必须分类讨论。① 当 k=0 时，方程化为 −2x+1=0，是一次方程，只有唯一根 x=1/2，不满足"有两个不相等的实数根"，故 k=0 必须排除；② 当 k≠0 时，方程是一元二次方程，有两个不相等实根 ⇔ Δ&gt;0，Δ=(−2)<sup>2</sup>−4k×1=4−4k&gt;0，解得 k&lt;1。两种情况合起来，k 的取值范围是 k&lt;1 且 k≠0（注意是 Δ&gt;0，所以不含 k=1 这个端点）。选 B。'
  },
  {
    id: 'q-quad-eq-37',
    kp: 'quad-eq',
    difficulty: 'hard',
    type: 'fill',
    stem: '设 a、b 为一元二次方程 x<sup>2</sup>−5x+3=0 的两根，求代数式 a<sup>2</sup>b+ab<sup>2</sup> 的值（　）。',
    answers: ['15'],
    explanation: '先确认有两根：Δ=(−5)<sup>2</sup>−4×1×3=25−12=13&gt;0。由韦达定理 a+b=5，ab=3。把代数式提公因式：a<sup>2</sup>b+ab<sup>2</sup>=ab(a+b)=3×5=15。'
  },
  {
    id: 'q-quad-eq-38',
    kp: 'quad-eq',
    difficulty: 'hard',
    type: 'single',
    stem: '已知方程 x<sup>2</sup>−4x+k=0 的两个根之差为 2，则 k 的值是（　）',
    options: ['3', '4', '5', '1'],
    answer: 0,
    explanation: '设两根为 x<sub>1</sub>、x<sub>2</sub>，由韦达定理 x<sub>1</sub>+x<sub>2</sub>=4，x<sub>1</sub>x<sub>2</sub>=k。两根之差的平方 (x<sub>1</sub>−x<sub>2</sub>)<sup>2</sup>=(x<sub>1</sub>+x<sub>2</sub>)<sup>2</sup>−4x<sub>1</sub>x<sub>2</sub>=16−4k。由 |x<sub>1</sub>−x<sub>2</sub>|=2 得 16−4k=4，解得 k=3。检验：k=3 时方程为 x<sup>2</sup>−4x+3=0，Δ=16−12=4&gt;0，两根为 1 与 3，差为 2，符合题意。选 A。'
  },
  {
    id: 'q-quad-eq-39',
    kp: 'quad-eq',
    difficulty: 'hard',
    type: 'fill',
    stem: '已知二次函数 y=x<sup>2</sup>−2x+m 的图象与 x 轴交于 A、B 两点，且线段 AB 的长为 4，则 m 的值是（　）。',
    answers: ['-3', '−3'],
    explanation: '图象与 x 轴交点的横坐标就是方程 x<sup>2</sup>−2x+m=0 的两根 x<sub>1</sub>、x<sub>2</sub>，所以 AB=|x<sub>1</sub>−x<sub>2</sub>|。由韦达定理 x<sub>1</sub>+x<sub>2</sub>=2，x<sub>1</sub>x<sub>2</sub>=m，(x<sub>1</sub>−x<sub>2</sub>)<sup>2</sup>=4−4m，故 AB=√(4−4m)。由 √(4−4m)=4 得 4−4m=16，m=−3。检验：y=x<sup>2</sup>−2x−3=(x−3)(x+1)，与 x 轴交于 (−1,0)、(3,0)，AB=4，符合题意。',
    tags: ['quad-func']
  },
  {
    id: 'q-quad-eq-40',
    kp: 'quad-eq',
    difficulty: 'hard',
    type: 'single',
    stem: '如图，在矩形 ABCD 中，AB=4，BC=10，点 E 在边 BC 上，且 ∠AED=90°，则 BE 的长是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="矩形 ABCD 中 AB 长 4，BC 长 10，点 E 在边 BC 上且角 AED 等于 90 度"><polygon points="80,90 80,146 220,146 220,90" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="80" y1="90" x2="108" y2="146" stroke="currentColor" stroke-width="1.4"/><line x1="108" y1="146" x2="220" y2="90" stroke="currentColor" stroke-width="1.4"/><circle cx="108" cy="146" r="2.6" fill="currentColor"/><path d="M103.08,136.17 L112.92,131.25 L117.83,141.08" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="72" y="84" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A</text><text x="72" y="162" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">B</text><text x="228" y="162" font-size="13" font-family="inherit" fill="currentColor">C</text><text x="228" y="84" font-size="13" font-family="inherit" fill="currentColor">D</text><text x="108" y="166" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">E</text><text x="72" y="122" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">4</text><text x="150" y="186" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">BC=10</text></svg></figure>',
    options: ['2', '8', '2 或 8', '4'],
    answer: 2,
    explanation: '用相似三角形。因为 ∠B=∠C=90°，在 Rt△ABE 中 ∠BAE+∠AEB=90°；又 ∠AEB+∠CED=180°−∠AED=180°−90°=90°，所以 ∠BAE=∠CED（同角的余角相等），于是 △ABE∽△ECD（两角对应相等）。由相似比得 AB/EC=BE/CD，设 BE=x，则 EC=10−x，代入 4/(10−x)=x/4，交叉相乘得 x(10−x)=16，即 x<sup>2</sup>−10x+16=0。因式分解 (x−2)(x−8)=0，得 x=2 或 x=8。两个值都满足 0&lt;x&lt;10（点 E 在线段 BC 内部），都合题意，所以 BE=2 或 BE=8。选 C。',
    tags: ['similarity']
  },
  {
    id: 'q-quad-eq-41',
    kp: 'quad-eq',
    difficulty: 'hard',
    type: 'single',
    stem: '如图，在平面直角坐标系中，点 P(m, 2)（m&gt;0）绕原点 O 按逆时针方向旋转 90° 得到点 Q。若线段 PQ 的长为 4，则 m 的值是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="平面直角坐标系中，点 P 在第一象限，OP 逆时针旋转 90 度后得到点 Q，线段 PQ 的长为 4"><line x1="60" y1="150" x2="300" y2="150" stroke="currentColor" stroke-width="1.6"/><line x1="300" y1="150" x2="291" y2="146" stroke="currentColor" stroke-width="1.6"/><line x1="300" y1="150" x2="291" y2="154" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="225" x2="160" y2="40" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="40" x2="156" y2="49" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="40" x2="164" y2="49" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="150" x2="220" y2="90" stroke="currentColor" stroke-width="1.4"/><line x1="160" y1="150" x2="100" y2="90" stroke="currentColor" stroke-width="1.4"/><line x1="220" y1="90" x2="100" y2="90" stroke="currentColor" stroke-width="1.4"/><path d="M170.73,144.64 L176.09,155.36 L165.36,160.73" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="220" cy="90" r="2.6" fill="currentColor"/><circle cx="100" cy="90" r="2.6" fill="currentColor"/><circle cx="160" cy="150" r="2.6" fill="currentColor"/><text x="228" y="82" font-size="13" font-family="inherit" fill="currentColor">P</text><text x="92" y="82" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">Q</text><text x="152" y="168" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">O</text><text x="306" y="144" font-size="13" font-family="inherit" fill="currentColor">x</text><text x="170" y="48" font-size="13" font-family="inherit" fill="currentColor">y</text><text x="160" y="76" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">PQ=4</text></svg></figure>',
    options: ['2', '4', '√2', '2√2'],
    answer: 0,
    explanation: '用旋转的性质：旋转前后对应点到旋转中心的距离相等，即 OQ=OP=√(m<sup>2</sup>+2<sup>2</sup>)=√(m<sup>2</sup>+4)，且 ∠POQ=90°。所以 △POQ 是等腰直角三角形，由勾股定理 PQ<sup>2</sup>=OP<sup>2</sup>+OQ<sup>2</sup>=2(m<sup>2</sup>+4)。由 PQ=4 得 2(m<sup>2</sup>+4)=16，m<sup>2</sup>+4=8，m<sup>2</sup>=4，m=2 或 m=−2。因为 m&gt;0，所以 m=2。用坐标再验证一次：点 (x,y) 绕原点逆时针旋转 90° 后为 (−y,x)，所以 P(2,2) 的对应点 Q(−2,2)，PQ=|2−(−2)|=4，与题设一致。选 A。',
    tags: ['rotation']
  },
  {
    id: 'q-quad-eq-42',
    kp: 'quad-eq',
    difficulty: 'hard',
    type: 'fill',
    stem: '从 −2、−1、0、1、2、3 这六个数中随机抽取一个数作为 k，则使关于 x 的方程 x<sup>2</sup>−2x+k=0 有两个不相等的实数根的概率是（　）。',
    answers: ['1/2', '0.5'],
    explanation: '方程有两个不相等的实数根 ⇔ Δ&gt;0，Δ=(−2)<sup>2</sup>−4×1×k=4−4k&gt;0，解得 k&lt;1。在 −2、−1、0、1、2、3 这六个数中，满足 k&lt;1 的是 −2、−1、0，共 3 个（k=0 时 Δ=4&gt;0，确有两个不等实根；k=1 时 Δ=0 只有两个相等实根，不满足）。六个数的抽取是等可能的，所以概率 P=3/6=1/2=0.5。',
    tags: ['probability']
  },
  {
    id: 'q-quad-eq-43',
    kp: 'quad-eq',
    difficulty: 'hard',
    type: 'fill',
    stem: '如图，一块长 32 m、宽 20 m 的矩形耕地，要修两条纵向和一条横向的小路（路宽都是 x m，纵向与横向的小路互相垂直），把耕地分成六块面积相等的试验田。若试验田的总面积为 570 m<sup>2</sup>，则 x =（　）。<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="矩形耕地长 32 米、宽 20 米，修两条纵向和一条横向的小路，路宽都是 x，试验田总面积 570 平方米"><rect x="64" y="60" width="192" height="120" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="100" y="60" width="6" height="120" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="180" y="60" width="6" height="120" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="64" y="120" width="192" height="6" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="160" y="46" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">32 m</text><text x="58" y="94" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">20 m</text><text x="160" y="206" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">两条纵向、一条横向，路宽都是 x</text></svg></figure>',
    answers: ['1'],
    explanation: '用平移法：把六块试验田分别平移拼接，可以拼成一个长 (32−2x) m、宽 (20−x) m 的矩形（两条纵向小路各占去 x 的宽度，一条横向小路占去 x 的宽度）。由试验田总面积得 (32−2x)(20−x)=570，展开得 640−72x+2x<sup>2</sup>=570，整理得 2x<sup>2</sup>−72x+70=0，两边除以 2 得 x<sup>2</sup>−36x+35=0，因式分解 (x−1)(x−35)=0，得 x=1 或 x=35。路宽必须小于宽 20 m，舍去 35，所以 x=1。验算：(32−2)(20−1)=30×19=570。'
  },
  {
    id: 'q-quad-eq-44',
    kp: 'quad-eq',
    difficulty: 'hard',
    type: 'single',
    stem: '已知 α、β 是方程 x<sup>2</sup>+3x−1=0 的两个根，则以 1/α、1/β 为两根的一元二次方程是（　）',
    options: ['x<sup>2</sup>−3x−1=0', 'x<sup>2</sup>+3x−1=0', 'x<sup>2</sup>−3x+1=0', 'x<sup>2</sup>+3x+1=0'],
    answer: 0,
    explanation: '由韦达定理 α+β=−3，αβ=−1。因为 αβ=−1≠0，所以 α、β 都不为 0，1/α、1/β 有意义。两根之和：1/α+1/β=(α+β)/(αβ)=(−3)/(−1)=3；两根之积：1/α·1/β=1/(αβ)=1/(−1)=−1。由韦达定理的逆用，所求方程为 x<sup>2</sup>−3x+(−1)=0，即 x<sup>2</sup>−3x−1=0。选 A。'
  },
  {
    id: 'q-quad-eq-45',
    kp: 'quad-eq',
    difficulty: 'hard',
    type: 'fill',
    stem: '如图，抛物线 y=−x<sup>2</sup>+2x+3 与 x 轴交于点 A、B，顶点为 P，则 △PAB 的面积是（　）。<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="抛物线 y 等于负 x 平方加 2x 加 3 的图象，与 x 轴交于 A(-1,0)、B(3,0)，顶点为 P(1,4)"><line x1="60" y1="170" x2="300" y2="170" stroke="currentColor" stroke-width="1.6"/><line x1="300" y1="170" x2="291" y2="166" stroke="currentColor" stroke-width="1.6"/><line x1="300" y1="170" x2="291" y2="174" stroke="currentColor" stroke-width="1.6"/><line x1="150" y1="225" x2="150" y2="45" stroke="currentColor" stroke-width="1.6"/><line x1="150" y1="45" x2="146" y2="54" stroke="currentColor" stroke-width="1.6"/><line x1="150" y1="45" x2="154" y2="54" stroke="currentColor" stroke-width="1.6"/><polyline points="94,225.2 101,205.2 108,186.8 115,170 122,154.8 129,141.2 136,129.2 143,118.8 150,110 157,102.8 164,97.2 171,93.2 178,90.8 185,90 192,90.8 199,93.2 206,97.2 213,102.8 220,110 227,118.8 234,129.2 241,141.2 248,154.8 255,170 262,186.8 269,205.2 276,225.2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="115" cy="170" r="2.8" fill="currentColor"/><circle cx="255" cy="170" r="2.8" fill="currentColor"/><circle cx="185" cy="90" r="2.8" fill="currentColor"/><text x="115" y="190" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">A</text><text x="255" y="190" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">B</text><text x="195" y="82" font-size="13" font-family="inherit" fill="currentColor">P</text><text x="142" y="188" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">O</text><text x="306" y="164" font-size="13" font-family="inherit" fill="currentColor">x</text><text x="160" y="53" font-size="13" font-family="inherit" fill="currentColor">y</text></svg></figure>',
    answers: ['8'],
    explanation: '先求交点：令 −x<sup>2</sup>+2x+3=0，两边乘 −1 得 x<sup>2</sup>−2x−3=0，因式分解 (x−3)(x+1)=0，得 x=−1 与 x=3，所以 AB=3−(−1)=4。再求顶点（这是二次函数的最值问题）：配方 y=−(x<sup>2</sup>−2x)+3=−[(x−1)<sup>2</sup>−1]+3=−(x−1)<sup>2</sup>+4，所以 P(1,4)，点 P 到 x 轴的距离就是 4。△PAB 以 AB 为底，高为 4，面积 S=½×4×4=8。',
    tags: ['quad-func']
  },
  {
    id: 'q-quad-eq-46',
    kp: 'quad-eq',
    difficulty: 'hard',
    type: 'fill',
    stem: '用总长 26 m 的篱笆一面靠墙围成一个矩形菜园（墙长 12 m），设垂直于墙的边长为 x m。若菜园的面积为 84 m<sup>2</sup>，则 x =（　）。',
    answers: ['7'],
    explanation: '篱笆只围三面：两条垂直于墙的边各长 x，平行于墙的那条边长为 26−2x。由面积得 x(26−2x)=84，展开得 26x−2x<sup>2</sup>=84，整理得 2x<sup>2</sup>−26x+84=0，两边除以 2 得 x<sup>2</sup>−13x+42=0，因式分解 (x−6)(x−7)=0，得 x=6 或 x=7。再用墙长检验：平行于墙的那条边长 26−2x 不能超过墙长 12，x=6 时 26−12=14&gt;12，不合；x=7 时 26−14=12≤12，符合。所以 x=7，此时菜园为 7×12，面积 84，篱笆用量 7+12+7=26，全部吻合。'
  },
  {
    id: 'q-quad-eq-47',
    kp: 'quad-eq',
    difficulty: 'hard',
    type: 'fill',
    stem: '如图，AB 是⊙O 的直径，点 C 在⊙O 上，⊙O 的半径为 5，AC 比 BC 短 2，则 AC 的长是（　）。<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="圆 O 的直径 AB，点 C 在圆上，连接 AC、BC"><circle cx="160" cy="120" r="75" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="85" y1="120" x2="235" y2="120" stroke="currentColor" stroke-width="1.6"/><line x1="139" y1="48" x2="85" y2="120" stroke="currentColor" stroke-width="1.4"/><line x1="139" y1="48" x2="235" y2="120" stroke="currentColor" stroke-width="1.4"/><circle cx="85" cy="120" r="2.6" fill="currentColor"/><circle cx="235" cy="120" r="2.6" fill="currentColor"/><circle cx="139" cy="48" r="2.6" fill="currentColor"/><circle cx="160" cy="120" r="2.6" fill="currentColor"/><text x="79" y="136" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A</text><text x="241" y="136" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="139" y="36" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">C</text><text x="154" y="138" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">O</text></svg></figure>',
    answers: ['6'],
    explanation: '直径 AB=2×5=10。用圆的性质：直径所对的圆周角是直角，所以 ∠ACB=90°，△ABC 是直角三角形。设 AC=x，则 BC=x+2，由勾股定理 AC<sup>2</sup>+BC<sup>2</sup>=AB<sup>2</sup>，即 x<sup>2</sup>+(x+2)<sup>2</sup>=10<sup>2</sup>，展开得 2x<sup>2</sup>+4x+4=100，整理得 x<sup>2</sup>+2x−48=0，因式分解 (x+8)(x−6)=0，得 x=6 或 x=−8。线段长必须为正，舍去 −8，所以 AC=6（此时 BC=8，6<sup>2</sup>+8<sup>2</sup>=100=10<sup>2</sup>，验证成立）。',
    tags: ['circle']
  },
  {
    id: 'q-quad-eq-48',
    kp: 'quad-eq',
    difficulty: 'hard',
    type: 'fill',
    stem: '从 −2、−1、0、1、2 这五个数中随机抽取两个不同的数，先抽到的作为 m，后抽到的作为 n，则使关于 x 的方程 x<sup>2</sup>+mx+n=0 有两个相等的实数根的概率是（　）。',
    answers: ['1/10', '0.1'],
    explanation: '先数总结果：从 5 个数中先后抽两个不同的数，第一个有 5 种取法，第二个有 4 种，共 5×4=20 个等可能结果。方程有两个相等的实数根 ⇔ Δ=m<sup>2</sup>−4n=0，即 n=m<sup>2</sup>/4。逐个检验：n 必须使 m<sup>2</sup>/4 落在 {−2,−1,0,1,2} 中，故 n≥0，n 只能取 0、1、2。n=0 时 m<sup>2</sup>=0，m=0，与 n 相同，不满足"两个不同的数"，排除；n=1 时 m<sup>2</sup>=4，m=2 或 m=−2，得到 (m,n)=(2,1) 与 (−2,1) 两个结果；n=2 时 m<sup>2</sup>=8，没有整数解。所以符合条件的结果只有 2 个，概率 P=2/20=1/10=0.1。',
    tags: ['probability']
  },
  {
    id: 'q-quad-eq-49',
    kp: 'quad-eq',
    difficulty: 'hard',
    type: 'single',
    stem: '若方程 x<sup>2</sup>+2x+k=0 的一个根是另一个根的 3 倍，则 k 的值是（　）',
    options: ['3/4', '−3/4', '3', '1/4'],
    answer: 0,
    explanation: '设两个根为 r 与 3r。由韦达定理两根之和 r+3r=−2，得 4r=−2，r=−1/2，于是两根为 −1/2 与 −3/2。再由两根之积 r·3r=3r<sup>2</sup>=k，得 k=3×(−1/2)<sup>2</sup>=3×1/4=3/4。检验：k=3/4 时方程为 4x<sup>2</sup>+8x+3=0，即 (2x+1)(2x+3)=0，两根为 −1/2 与 −3/2，后者恰为前者的 3 倍，符合题意。选 A。'
  },
  {
    id: 'q-quad-eq-50',
    kp: 'quad-eq',
    difficulty: 'hard',
    type: 'fill',
    stem: '已知 x 满足 x<sup>2</sup>−5x+1=0，则 x<sup>2</sup>+1/x<sup>2</sup> 的值是（　）。',
    answers: ['23'],
    explanation: '先说明 x≠0：若 x=0，代入左边得 0−0+1=1≠0，所以 x 不为 0，可以除以 x。把 x<sup>2</sup>−5x+1=0 两边同时除以 x，得 x−5+1/x=0，即 x+1/x=5。把 x+1/x=5 两边平方：x<sup>2</sup>+2+1/x<sup>2</sup>=25，所以 x<sup>2</sup>+1/x<sup>2</sup>=25−2=23。数值核对：方程根为 (5±√21)/2，取 x=(5+√21)/2≈4.7913，x<sup>2</sup>≈22.956，1/x<sup>2</sup>≈0.0435，和为 23.00，验证成立。'
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
    stem: '二次函数 y=ax<sup>2</sup>+bx+c（a≠0）的图象如图，顶点为 P(1,−2)。下列结论正确的是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="开口向上的抛物线，顶点P坐标为(1,−2)，虚线是对称轴x=1，抛物线左半支完整可见"><line x1="46" y1="110" x2="306" y2="110" stroke="currentColor" stroke-width="1.6"/><line x1="306" y1="110" x2="297" y2="106" stroke="currentColor" stroke-width="1.6"/><line x1="306" y1="110" x2="297" y2="114" stroke="currentColor" stroke-width="1.6"/><line x1="140" y1="214" x2="140" y2="26" stroke="currentColor" stroke-width="1.6"/><line x1="140" y1="26" x2="136" y2="35" stroke="currentColor" stroke-width="1.6"/><line x1="140" y1="26" x2="144" y2="35" stroke="currentColor" stroke-width="1.6"/><polyline points="80.5,77.1 95,97.8 109.6,115.1 124.1,128.9 138.7,139.2 153.2,146.1 167.7,149.6 182.3,149.6 196.8,146.1 211.3,139.2 225.9,128.9 240.4,115.1 255,97.8 269.5,77.1" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="175" y1="38" x2="175" y2="172" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><circle cx="175" cy="150" r="2.6" fill="currentColor"/><text x="302" y="104" font-size="13" font-family="inherit" fill="currentColor">x</text><text x="150" y="34" font-size="13" font-family="inherit" fill="currentColor">y</text><text x="132" y="126" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">O</text><text x="183" y="44" font-size="11.5" font-family="inherit" fill="currentColor">x=1</text><text x="168" y="166" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">P</text><text x="186" y="168" font-size="11.5" font-family="inherit" fill="currentColor">(1,−2)</text></svg></figure>',
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
    stem: '如图，抛物线 y=x<sup>2</sup>−2x−3 与 x 轴交于 A(−1,0)、B(3,0)，顶点为 P(1,−4)。若抛物线上存在点 M，使 S<sub>△MAB</sub>=8，则点 M 的纵坐标是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="抛物线y=x²−2x−3与x轴交于A(−1,0)、B(3,0)，顶点P(1,−4)，抛物线上一点M与A、B连成三角形，其面积为8"><line x1="36" y1="140" x2="300" y2="140" stroke="currentColor" stroke-width="1.6"/><line x1="300" y1="140" x2="291" y2="136" stroke="currentColor" stroke-width="1.6"/><line x1="300" y1="140" x2="291" y2="144" stroke="currentColor" stroke-width="1.6"/><line x1="100" y1="214" x2="100" y2="30" stroke="currentColor" stroke-width="1.6"/><line x1="100" y1="30" x2="96" y2="39" stroke="currentColor" stroke-width="1.6"/><line x1="100" y1="30" x2="104" y2="39" stroke="currentColor" stroke-width="1.6"/><polyline points="44,90.3 58,124.9 72,153.7 86,176.7 100,194 114,205.5 128,211.3 142,211.3 156,205.5 170,194 184,176.7 198,153.7 212,124.9 226,90.3 234,68 240,50" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="65" y1="140" x2="234" y2="68" stroke="currentColor" stroke-width="1.6"/><line x1="205" y1="140" x2="234" y2="68" stroke="currentColor" stroke-width="1.6"/><circle cx="65" cy="140" r="2.6" fill="currentColor"/><circle cx="205" cy="140" r="2.6" fill="currentColor"/><circle cx="135" cy="212" r="2.6" fill="currentColor"/><circle cx="234" cy="68" r="2.6" fill="currentColor"/><line x1="210.0" y1="82.0" x2="215.6" y2="87.6" stroke="currentColor" stroke-width="1.2"/><line x1="190.0" y1="92.0" x2="195.6" y2="97.6" stroke="currentColor" stroke-width="1.2"/><line x1="200.0" y1="92.0" x2="205.6" y2="97.6" stroke="currentColor" stroke-width="1.2"/><line x1="210.0" y1="92.0" x2="215.6" y2="97.6" stroke="currentColor" stroke-width="1.2"/><line x1="160.0" y1="102.0" x2="165.6" y2="107.6" stroke="currentColor" stroke-width="1.2"/><line x1="170.0" y1="102.0" x2="175.6" y2="107.6" stroke="currentColor" stroke-width="1.2"/><line x1="180.0" y1="102.0" x2="185.6" y2="107.6" stroke="currentColor" stroke-width="1.2"/><line x1="190.0" y1="102.0" x2="195.6" y2="107.6" stroke="currentColor" stroke-width="1.2"/><line x1="200.0" y1="102.0" x2="205.6" y2="107.6" stroke="currentColor" stroke-width="1.2"/><line x1="210.0" y1="102.0" x2="215.6" y2="107.6" stroke="currentColor" stroke-width="1.2"/><line x1="140.0" y1="112.0" x2="145.6" y2="117.6" stroke="currentColor" stroke-width="1.2"/><line x1="150.0" y1="112.0" x2="155.6" y2="117.6" stroke="currentColor" stroke-width="1.2"/><line x1="160.0" y1="112.0" x2="165.6" y2="117.6" stroke="currentColor" stroke-width="1.2"/><line x1="170.0" y1="112.0" x2="175.6" y2="117.6" stroke="currentColor" stroke-width="1.2"/><line x1="180.0" y1="112.0" x2="185.6" y2="117.6" stroke="currentColor" stroke-width="1.2"/><line x1="190.0" y1="112.0" x2="195.6" y2="117.6" stroke="currentColor" stroke-width="1.2"/><line x1="200.0" y1="112.0" x2="205.6" y2="117.6" stroke="currentColor" stroke-width="1.2"/><line x1="120.0" y1="122.0" x2="125.6" y2="127.6" stroke="currentColor" stroke-width="1.2"/><line x1="130.0" y1="122.0" x2="135.6" y2="127.6" stroke="currentColor" stroke-width="1.2"/><line x1="140.0" y1="122.0" x2="145.6" y2="127.6" stroke="currentColor" stroke-width="1.2"/><line x1="150.0" y1="122.0" x2="155.6" y2="127.6" stroke="currentColor" stroke-width="1.2"/><line x1="160.0" y1="122.0" x2="165.6" y2="127.6" stroke="currentColor" stroke-width="1.2"/><line x1="170.0" y1="122.0" x2="175.6" y2="127.6" stroke="currentColor" stroke-width="1.2"/><line x1="180.0" y1="122.0" x2="185.6" y2="127.6" stroke="currentColor" stroke-width="1.2"/><line x1="190.0" y1="122.0" x2="195.6" y2="127.6" stroke="currentColor" stroke-width="1.2"/><line x1="200.0" y1="122.0" x2="205.6" y2="127.6" stroke="currentColor" stroke-width="1.2"/><line x1="90.0" y1="132.0" x2="95.6" y2="137.6" stroke="currentColor" stroke-width="1.2"/><line x1="100.0" y1="132.0" x2="105.6" y2="137.6" stroke="currentColor" stroke-width="1.2"/><line x1="110.0" y1="132.0" x2="115.6" y2="137.6" stroke="currentColor" stroke-width="1.2"/><line x1="120.0" y1="132.0" x2="125.6" y2="137.6" stroke="currentColor" stroke-width="1.2"/><line x1="130.0" y1="132.0" x2="135.6" y2="137.6" stroke="currentColor" stroke-width="1.2"/><line x1="140.0" y1="132.0" x2="145.6" y2="137.6" stroke="currentColor" stroke-width="1.2"/><line x1="150.0" y1="132.0" x2="155.6" y2="137.6" stroke="currentColor" stroke-width="1.2"/><line x1="160.0" y1="132.0" x2="165.6" y2="137.6" stroke="currentColor" stroke-width="1.2"/><line x1="170.0" y1="132.0" x2="175.6" y2="137.6" stroke="currentColor" stroke-width="1.2"/><line x1="180.0" y1="132.0" x2="185.6" y2="137.6" stroke="currentColor" stroke-width="1.2"/><line x1="190.0" y1="132.0" x2="195.6" y2="137.6" stroke="currentColor" stroke-width="1.2"/><text x="298" y="134" font-size="13" font-family="inherit" fill="currentColor">x</text><text x="108" y="38" font-size="13" font-family="inherit" fill="currentColor">y</text><text x="108" y="132" font-size="13" font-family="inherit" fill="currentColor">O</text><text x="56" y="156" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A</text><text x="214" y="156" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="116" y="226" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">P</text><text x="148" y="226" font-size="11.5" font-family="inherit" fill="currentColor">(1,−4)</text><text x="242" y="84" font-size="13" font-family="inherit" fill="currentColor">M</text><text x="150" y="124" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">S=8</text></svg></figure>',
    options: ['−4', '4', '4 或 −4', '2 或 −2'],
    answer: 2,
    explanation: 'AB=3−(−1)=4。设 M 的纵坐标为 y，△MAB 以 AB 为底，高为 |y|（A、B 都在 x 轴上），所以 S=½×4×|y|=2|y|=8，得 |y|=4，即 y=4 或 y=−4。两种情况都要讨论：① y=−4：x<sup>2</sup>−2x−3=−4 → x<sup>2</sup>−2x+1=0 → x=1，M(1,−4) 就是顶点 P，成立；② y=4：x<sup>2</sup>−2x−3=4 → x<sup>2</sup>−2x−7=0，Δ=4+28=32&gt;0，x=1±2√2，抛物线上确实存在这样的点。只写 y=4 或只写 y=−4 都会漏解。选 C。'
  },
  {
    id: 'q-quad-func-13',
    kp: 'quad-func',
    difficulty: 'basic',
    type: 'single',
    stem: '二次函数 y=−2(x+3)<sup>2</sup>+1 的图象的顶点坐标是（　）',
    options: ['(3, 1)', '(−3, 1)', '(−3, −1)', '(3, −1)'],
    answer: 1,
    explanation: '顶点式 y=a(x−h)<sup>2</sup>+k 的顶点为 (h, k)。本题 a=−2、h=−3、k=1，故顶点为 (−3, 1)。验证：展开得 y=−2x<sup>2</sup>−12x−17，对称轴 x=−b/(2a)=−(−12)/(2×(−2))=−3 ✓，y(−3)=−2×0+1=1 ✓。选 B。'
  },
  {
    id: 'q-quad-func-14',
    kp: 'quad-func',
    difficulty: 'basic',
    type: 'fill',
    stem: '二次函数 y=x<sup>2</sup>−4x+7 的最小值是（　）。',
    answers: ['3'],
    explanation: '配方：y=x<sup>2</sup>−4x+7=(x−2)<sup>2</sup>+3。因为 a=1&gt;0，开口向上，顶点 (2, 3) 是最低点，所以最小值是 3。验证：y(2)=4−8+7=3 ✓。'
  },
  {
    id: 'q-quad-func-15',
    kp: 'quad-func',
    difficulty: 'basic',
    type: 'single',
    stem: '如图，二次函数 y=−x<sup>2</sup>+2x+3 的图象与 x 轴交于 A(−1, 0)、B(3, 0) 两点，顶点为 P。当 x 取何值时，这个函数取得最大值（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="坐标系中的抛物线y=−x²+2x+3，与x轴交于A(−1,0)、B(3,0)，顶点为P"><line x1="71.1" y1="160.4" x2="306" y2="160.4" stroke="currentColor" stroke-width="1.6"/><line x1="306" y1="160.4" x2="297" y2="156.4" stroke="currentColor" stroke-width="1.6"/><line x1="306" y1="160.4" x2="297" y2="164.4" stroke="currentColor" stroke-width="1.6"/><line x1="134.7" y1="214" x2="134.7" y2="14" stroke="currentColor" stroke-width="1.6"/><line x1="134.7" y1="14" x2="130.7" y2="23" stroke="currentColor" stroke-width="1.6"/><line x1="134.7" y1="14" x2="138.7" y2="23" stroke="currentColor" stroke-width="1.6"/><text x="308" y="152.4" font-size="13" font-family="inherit" fill="currentColor">x</text><text x="141.7" y="22" font-size="13" font-family="inherit" fill="currentColor">y</text><circle cx="134.7" cy="160.4" r="1.6" fill="currentColor"/><polyline points="96.9,217.2 98.9,207.5 100.8,198.1 102.8,189.0 104.8,180.2 106.7,171.7 108.7,163.6 110.7,155.7 112.6,148.2 114.6,140.9 116.6,134.0 118.6,127.4 120.5,121.0 122.5,115.0 124.5,109.3 126.4,103.9 128.4,98.9 130.4,94.1 132.3,89.6 134.3,85.4 136.3,81.6 138.2,78.0 140.2,74.8 142.2,71.9 144.1,69.3 146.1,67.0 148.1,64.9 150.1,63.3 152.0,61.9 154.0,60.8 156.0,60.0 157.9,59.6 159.9,59.4 161.9,59.6 163.8,60.0 165.8,60.8 167.8,61.9 169.7,63.3 171.7,64.9 173.7,67.0 175.6,69.3 177.6,71.9 179.6,74.8 181.6,78.0 183.5,81.6 185.5,85.4 187.5,89.6 189.4,94.1 191.4,98.9 193.4,103.9 195.3,109.3 197.3,115.0 199.3,121.0 201.2,127.4 203.2,134.0 205.2,140.9 207.1,148.2 209.1,155.7 211.1,163.6 213.1,171.7 215.0,180.2 217.0,189.0 219.0,198.1 220.9,207.5 222.9,217.2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="109.5" cy="160.4" r="2.6" fill="currentColor"/><circle cx="210.5" cy="160.4" r="2.6" fill="currentColor"/><circle cx="160" cy="59.4" r="2.6" fill="currentColor"/><text x="105.5" y="151.4" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">A</text><text x="214.5" y="151.4" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">B</text><text x="160" y="50.4" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">P</text><text x="124.7" y="174.4" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">O</text><text x="40" y="40" font-size="11.5" font-family="inherit" fill="currentColor">y=−x²+2x+3</text></svg></figure>',
    options: ['x=1', 'x=−1', 'x=3', 'x=2'],
    answer: 0,
    explanation: '对称轴 x=−b/(2a)=−2/(2×(−1))=1，因为 a=−1&lt;0，开口向下，最大值在顶点处取得，即 x=1 时 y 最大。验证：y=−x<sup>2</sup>+2x+3=−(x−1)<sup>2</sup>+4，顶点 (1, 4)，最大值 4；而 x=−1、x=3 处 y=0，x=2 处 y=3，都小于 4。选 A。'
  },
  {
    id: 'q-quad-func-16',
    kp: 'quad-func',
    difficulty: 'basic',
    type: 'fill',
    stem: '把抛物线 y=−x<sup>2</sup> 先向左平移 1 个单位长度，再向下平移 2 个单位长度，所得抛物线的顶点坐标是（　）。',
    answers: ['(-1,-2)', '-1,-2'],
    explanation: 'y=−x<sup>2</sup> 的顶点是 (0, 0)。平移不改变形状与开口，顶点随之移动：向左 1 个单位，横坐标 0−1=−1；向下 2 个单位，纵坐标 0−2=−2。所以新顶点为 (−1, −2)。验证：平移后解析式为 y=−(x+1)<sup>2</sup>−2（左加右减、上加下减），顶点正好是 (−1, −2) ✓。'
  },
  {
    id: 'q-quad-func-17',
    kp: 'quad-func',
    difficulty: 'basic',
    type: 'single',
    stem: '如图，抛物线 y=x<sup>2</sup>+bx+c 与 x 轴交于 A(−2, 0)、B(4, 0) 两点，则它的对称轴是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="抛物线y=x²+bx+c与x轴交于A(−2,0)、B(4,0)，虚线为它的对称轴，顶点在对称轴上"><line x1="96" y1="60" x2="306" y2="60" stroke="currentColor" stroke-width="1.6"/><line x1="306" y1="60" x2="297" y2="56" stroke="currentColor" stroke-width="1.6"/><line x1="306" y1="60" x2="297" y2="64" stroke="currentColor" stroke-width="1.6"/><line x1="145" y1="214" x2="145" y2="14" stroke="currentColor" stroke-width="1.6"/><line x1="145" y1="14" x2="141" y2="23" stroke="currentColor" stroke-width="1.6"/><line x1="145" y1="14" x2="149" y2="23" stroke="currentColor" stroke-width="1.6"/><text x="308" y="52" font-size="13" font-family="inherit" fill="currentColor">x</text><text x="152" y="22" font-size="13" font-family="inherit" fill="currentColor">y</text><circle cx="145" cy="60" r="1.6" fill="currentColor"/><polyline points="110.5,31.6 112,41.4 113.5,50.9 115,60 116.5,68.8 118,77.4 119.5,85.6 121,93.6 122.5,101.2 124,108.6 125.5,115.6 127,122.4 128.5,128.8 130,135 131.5,140.9 133,146.4 134.5,151.6 136,156.6 137.5,161.2 139,165.6 140.5,169.6 142,173.4 143.5,176.9 145,180 146.5,182.9 148,185.4 149.5,187.6 151,189.6 152.5,191.3 154,192.6 155.5,193.7 157,194.4 158.5,194.9 160,195 161.5,194.9 163,194.4 164.5,193.7 166,192.6 167.5,191.3 169,189.6 170.5,187.6 172,185.4 173.5,182.9 175,180 176.5,176.9 178,173.4 179.5,169.7 181,165.6 182.5,161.3 184,156.6 185.5,151.7 187,146.4 188.5,140.9 190,135 191.5,128.9 193,122.4 194.5,115.7 196,108.6 197.5,101.3 199,93.6 200.5,85.7 202,77.4 203.5,68.9 205,60 206.5,50.9 208,41.4 209.5,31.7" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="160" y1="204" x2="160" y2="39" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><circle cx="115" cy="60" r="2.6" fill="currentColor"/><circle cx="205" cy="60" r="2.6" fill="currentColor"/><circle cx="160" cy="195" r="2.6" fill="currentColor"/><text x="111" y="51" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">A</text><text x="209" y="51" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">B</text><text x="166" y="203" font-size="11.5" font-family="inherit" fill="currentColor">顶点</text><text x="135" y="74" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">O</text><text x="196" y="34" font-size="11.5" font-family="inherit" fill="currentColor">对称轴</text></svg></figure>',
    options: ['直线 x=1', '直线 x=2', '直线 x=−1', 'y 轴'],
    answer: 0,
    explanation: 'A、B 是抛物线与 x 轴的两个交点，它们关于对称轴对称，所以对称轴是线段 AB 的垂直平分线：x=(−2+4)/2=1，即直线 x=1。也可求解析式验证：y=(x+2)(x−4)=x<sup>2</sup>−2x−8，对称轴 x=−b/(2a)=2/2=1 ✓。选 A。'
  },
  {
    id: 'q-quad-func-18',
    kp: 'quad-func',
    difficulty: 'basic',
    type: 'fill',
    stem: '若二次函数 y=(x−2)<sup>2</sup>+k 的图象经过原点 (0, 0)，则 k=（　）。',
    answers: ['-4'],
    explanation: '把 (0, 0) 代入得 0=(0−2)<sup>2</sup>+k=4+k，所以 k=−4。检验：y=(x−2)<sup>2</sup>−4=x<sup>2</sup>−4x，x=0 时 y=0 ✓，且与 x 轴另一交点为 (4, 0)。'
  },
  {
    id: 'q-quad-func-19',
    kp: 'quad-func',
    difficulty: 'basic',
    type: 'single',
    stem: '二次函数 y=x<sup>2</sup>+4x+5 的图象与 x 轴的公共点个数是（　）',
    options: ['2 个', '1 个', '0 个', '无法确定'],
    answer: 2,
    explanation: '公共点个数由方程 x<sup>2</sup>+4x+5=0 的实数根个数决定。Δ=b<sup>2</sup>−4ac=4<sup>2</sup>−4×1×5=16−20=−4&lt;0，方程没有实数根，所以图象与 x 轴没有公共点。验证：y=(x+2)<sup>2</sup>+1≥1&gt;0，图象全部在 x 轴上方 ✓。选 C。'
  },
  {
    id: 'q-quad-func-20',
    kp: 'quad-func',
    difficulty: 'basic',
    type: 'fill',
    stem: '抛物线 y=x<sup>2</sup>−6x+5 与 y 轴的交点坐标是（　）。',
    answers: ['(0,5)', '0,5'],
    explanation: '与 y 轴的交点满足 x=0，代入得 y=0−0+5=5，所以交点为 (0, 5)。（顺带：令 y=0 得 x<sup>2</sup>−6x+5=(x−1)(x−5)=0，与 x 轴交于 (1, 0)、(5, 0)。）'
  },
  {
    id: 'q-quad-func-21',
    kp: 'quad-func',
    difficulty: 'basic',
    type: 'single',
    stem: '如图，抛物线 y=2x<sup>2</sup> 与直线 y=2 交于 A、B 两点，则线段 AB 的长是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="坐标系中抛物线y=2x²与水平直线y=2交于A(−1,2)、B(1,2)两点"><line x1="70.6" y1="174.9" x2="306" y2="174.9" stroke="currentColor" stroke-width="1.6"/><line x1="306" y1="174.9" x2="297" y2="170.9" stroke="currentColor" stroke-width="1.6"/><line x1="306" y1="174.9" x2="297" y2="178.9" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="214" x2="160" y2="14" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="14" x2="156" y2="23" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="14" x2="164" y2="23" stroke="currentColor" stroke-width="1.6"/><text x="308" y="166.9" font-size="13" font-family="inherit" fill="currentColor">x</text><text x="167" y="22" font-size="13" font-family="inherit" fill="currentColor">y</text><circle cx="160" cy="174.9" r="1.6" fill="currentColor"/><polyline points="101.7,26.2 103.4,34.8 105.1,43.2 106.9,51.3 108.6,59.1 110.3,66.7 112,74.1 113.7,81.1 115.4,87.9 117.1,94.5 118.9,100.8 120.6,106.8 122.3,112.6 124,118.2 125.7,123.4 127.4,128.4 129.1,133.2 130.9,137.7 132.6,141.9 134.3,145.9 136,149.7 137.7,153.1 139.4,156.3 141.1,159.3 142.9,162 144.6,164.4 146.3,166.6 148,168.6 149.7,170.2 151.4,171.6 153.1,172.8 154.9,173.7 156.6,174.3 158.3,174.7 160,174.9 161.7,174.7 163.4,174.3 165.1,173.7 166.9,172.8 168.6,171.6 170.3,170.2 172,168.6 173.7,166.6 175.4,164.4 177.1,162 178.9,159.3 180.6,156.3 182.3,153.1 184,149.7 185.7,145.9 187.4,141.9 189.1,137.7 190.9,133.2 192.6,128.4 194.3,123.4 196,118.2 197.7,112.6 199.4,106.8 201.1,100.8 202.9,94.5 204.6,87.9 206.3,81.1 208,74.1 209.7,66.7 211.4,59.1 213.1,51.3 214.9,43.2 216.6,34.8 218.3,26.2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="75.4" y1="83.4" x2="244.6" y2="83.4" stroke="currentColor" stroke-width="1.6"/><circle cx="114.3" cy="83.4" r="2.6" fill="currentColor"/><circle cx="205.7" cy="83.4" r="2.6" fill="currentColor"/><text x="112.3" y="74.4" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">A</text><text x="207.7" y="74.4" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">B</text><text x="150" y="188.9" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">O</text><text x="34" y="60" font-size="11.5" font-family="inherit" fill="currentColor">y=2</text><text x="200" y="210" font-size="11.5" font-family="inherit" fill="currentColor">y=2x²</text></svg></figure>',
    options: ['2', '1', '4', '2√2'],
    answer: 0,
    explanation: '令 2x<sup>2</sup>=2，得 x<sup>2</sup>=1，x=±1，所以 A(−1, 2)、B(1, 2)。两点纵坐标相同，AB 是水平线段，其长 = 1−(−1) = 2。验证：把 x=±1 代回 y=2x<sup>2</sup> 都得到 y=2，与直线 y=2 一致 ✓。选 A。'
  },
  {
    id: 'q-quad-func-22',
    kp: 'quad-func',
    difficulty: 'medium',
    type: 'single',
    stem: '将抛物线 y=x<sup>2</sup>−2x−3 向右平移 2 个单位长度，再向上平移 1 个单位长度，所得抛物线的解析式是（　）',
    options: ['y=x<sup>2</sup>−6x+6', 'y=x<sup>2</sup>−6x+8', 'y=x<sup>2</sup>−2x−1', 'y=x<sup>2</sup>−6x+4'],
    answer: 0,
    explanation: '先配方：y=x<sup>2</sup>−2x−3=(x−1)<sup>2</sup>−4，顶点 (1, −4)。向右 2 个单位、向上 1 个单位后顶点变为 (3, −3)，开口与 a 不变，故新解析式为 y=(x−3)<sup>2</sup>−3=x<sup>2</sup>−6x+9−3=x<sup>2</sup>−6x+6。也可用“左加右减、上加下减”：y=(x−2)<sup>2</sup>−2(x−2)−3+1=x<sup>2</sup>−6x+6 ✓。选 A。'
  },
  {
    id: 'q-quad-func-23',
    kp: 'quad-func',
    difficulty: 'medium',
    type: 'fill',
    stem: '抛物线 y=2x<sup>2</sup>−8x+5 的顶点坐标是（　）。',
    answers: ['(2,-3)', '2,-3'],
    explanation: '配方：y=2(x<sup>2</sup>−4x)+5=2(x−2)<sup>2</sup>−8+5=2(x−2)<sup>2</sup>−3，所以顶点为 (2, −3)。验证：对称轴 x=−b/(2a)=8/4=2，y(2)=2×4−16+5=−3 ✓。'
  },
  {
    id: 'q-quad-func-24',
    kp: 'quad-func',
    difficulty: 'medium',
    type: 'single',
    stem: '如图，抛物线 y=−x<sup>2</sup>+2x+3 与直线 y=x+1 交于 A、B 两点（点 A 在点 B 的左侧），则点 B 的坐标是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="坐标系中抛物线y=−x²+2x+3与直线y=x+1交于A、B两点，点A在点B的左侧"><line x1="67.5" y1="158.1" x2="306" y2="158.1" stroke="currentColor" stroke-width="1.6"/><line x1="306" y1="158.1" x2="297" y2="154.1" stroke="currentColor" stroke-width="1.6"/><line x1="306" y1="158.1" x2="297" y2="162.1" stroke="currentColor" stroke-width="1.6"/><line x1="144.8" y1="214" x2="144.8" y2="14" stroke="currentColor" stroke-width="1.6"/><line x1="144.8" y1="14" x2="140.8" y2="23" stroke="currentColor" stroke-width="1.6"/><line x1="144.8" y1="14" x2="148.8" y2="23" stroke="currentColor" stroke-width="1.6"/><text x="308" y="150.1" font-size="13" font-family="inherit" fill="currentColor">x</text><text x="151.8" y="22" font-size="13" font-family="inherit" fill="currentColor">y</text><circle cx="144.8" cy="158.1" r="1.6" fill="currentColor"/><polyline points="102.1,211.7 104.1,202.1 106.2,192.8 108.2,183.7 110.2,174.9 112.3,166.4 114.3,158.1 116.3,150.1 118.3,142.4 120.4,134.9 122.4,127.8 124.4,120.8 126.5,114.2 128.5,107.8 130.5,101.7 132.6,95.9 134.6,90.4 136.6,85.1 138.7,80.1 140.7,75.3 142.7,70.9 144.8,66.7 146.8,62.7 148.8,59.1 150.9,55.7 152.9,52.6 154.9,49.7 157,47.2 159,44.9 161,42.8 163,41.1 165.1,39.6 167.1,38.4 169.1,37.4 171.2,36.7 173.2,36.3 175.2,36.2 177.3,36.3 179.3,36.7 181.3,37.4 183.4,38.4 185.4,39.6 187.4,41.1 189.5,42.8 191.5,44.9 193.5,47.2 195.6,49.7 197.6,52.6 199.6,55.7 201.7,59.1 203.7,62.7 205.7,66.7 207.7,70.9 209.8,75.3 211.8,80.1 213.8,85.1 215.9,90.4 217.9,95.9 219.9,101.7 222,107.8 224,114.2 226,120.8 228.1,127.8 230.1,134.9 232.1,142.4 234.2,150.1 236.2,158.1" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="80.8" y1="191.6" x2="242.3" y2="30.1" stroke="currentColor" stroke-width="1.6"/><circle cx="114.3" cy="158.1" r="2.6" fill="currentColor"/><circle cx="205.7" cy="66.7" r="2.6" fill="currentColor"/><text x="110.3" y="149.1" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">A</text><text x="217.7" y="70.7" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="134.8" y="172.1" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">O</text><text x="34" y="46" font-size="11.5" font-family="inherit" fill="currentColor">y=x+1</text><text x="214" y="196" font-size="11.5" font-family="inherit" fill="currentColor">y=−x²+2x+3</text></svg></figure>',
    options: ['(2, 3)', '(−1, 0)', '(3, 2)', '(2, −3)'],
    answer: 0,
    explanation: '联立：−x<sup>2</sup>+2x+3=x+1 → x<sup>2</sup>−x−2=0 → (x−2)(x+1)=0 → x=2 或 x=−1。x=2 时 y=3；x=−1 时 y=0。因 A 在左，A(−1, 0)、B(2, 3)。代回抛物线检验：−(2)<sup>2</sup>+2×2+3=3 ✓；−(−1)<sup>2</sup>+2×(−1)+3=0 ✓。选 A。'
  },
  {
    id: 'q-quad-func-25',
    kp: 'quad-func',
    difficulty: 'medium',
    type: 'fill',
    stem: '已知抛物线 y=x<sup>2</sup>+bx+c 经过点 (1, 0) 和 (3, 0)，则 b+c 的值是（　）。',
    answers: ['-1'],
    explanation: '因为 (1, 0)、(3, 0) 是与 x 轴的交点，可用交点式：y=(x−1)(x−3)=x<sup>2</sup>−4x+3，所以 b=−4、c=3，b+c=−1。也可直接代入列方程组：1+b+c=0 与 9+3b+c=0，相减得 8+2b=0 → b=−4，再得 c=3 ✓。'
  },
  {
    id: 'q-quad-func-26',
    kp: 'quad-func',
    difficulty: 'medium',
    type: 'single',
    stem: '小明投掷实心球（把球看成点），球的运行路线是抛物线 y=−0.1x<sup>2</sup>+0.8x+2（单位：m），则实心球在运行过程中达到的最大高度是（　）',
    options: ['3.6 m', '2 m', '4 m', '5.2 m'],
    answer: 0,
    explanation: '配方：y=−0.1(x<sup>2</sup>−8x)+2=−0.1(x−4)<sup>2</sup>+1.6+2=−0.1(x−4)<sup>2</sup>+3.6。因为 a=−0.1&lt;0，开口向下，最大值在顶点处取得，为 3.6。验证：x=4 时 y=−0.1×16+0.8×4+2=−1.6+3.2+2=3.6 ✓。选 A。'
  },
  {
    id: 'q-quad-func-27',
    kp: 'quad-func',
    difficulty: 'medium',
    type: 'single',
    stem: '若二次函数 y=x<sup>2</sup>−2x+m 的图象与 x 轴有两个不同的公共点，则 m 的取值范围是（　）',
    options: ['m&lt;1', 'm&gt;1', 'm≤1', 'm&lt;−1'],
    answer: 0,
    explanation: '有两个不同公共点 ⇔ 方程 x<sup>2</sup>−2x+m=0 有两个不相等的实数根 ⇔ Δ&gt;0。Δ=(−2)<sup>2</sup>−4×1×m=4−4m&gt;0，解得 m&lt;1。验证：取 m=0 得 y=x<sup>2</sup>−2x=x(x−2)，与 x 轴交于 (0, 0)、(2, 0) 两点 ✓；取 m=1 得 y=(x−1)<sup>2</sup>，只有一个公共点，不合题意。选 A。'
  },
  {
    id: 'q-quad-func-28',
    kp: 'quad-func',
    difficulty: 'medium',
    type: 'fill',
    stem: '对于二次函数 y=−2x<sup>2</sup>+4x+1，当 x=（　）时，y 取得最大值。',
    answers: ['1'],
    explanation: '对称轴 x=−b/(2a)=−4/(2×(−2))=1，因为 a=−2&lt;0，开口向下，最大值在顶点处取得，故 x=1。验证：y=−2(x−1)<sup>2</sup>+3，顶点 (1, 3)，最大值 3 ✓。'
  },
  {
    id: 'q-quad-func-29',
    kp: 'quad-func',
    difficulty: 'medium',
    type: 'single',
    stem: '如图，某拱桥的拱形可看成抛物线。桥拱跨度 AB=8 m，拱顶 C 到桥面 AB 的距离为 4 m。以 AB 所在直线为 x 轴、AB 的中点为原点建立平面直角坐标系，则这条抛物线的解析式是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="拱桥示意图：抛物线形拱，跨度AB=8 m，拱顶C距桥面4 m，A(−4,0)、B(4,0)、C(0,4)"><line x1="26" y1="168.4" x2="306" y2="168.4" stroke="currentColor" stroke-width="1.6"/><line x1="306" y1="168.4" x2="297" y2="164.4" stroke="currentColor" stroke-width="1.6"/><line x1="306" y1="168.4" x2="297" y2="172.4" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="197.8" x2="160" y2="14" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="14" x2="156" y2="23" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="14" x2="164" y2="23" stroke="currentColor" stroke-width="1.6"/><text x="308" y="160.4" font-size="13" font-family="inherit" fill="currentColor">x</text><text x="167" y="22" font-size="13" font-family="inherit" fill="currentColor">y</text><circle cx="160" cy="168.4" r="1.6" fill="currentColor"/><polyline points="55.4,168.4 58.3,162.7 61.2,157.1 64.1,151.7 67,146.4 69.9,141.3 72.8,136.4 75.7,131.7 78.6,127.1 81.5,122.6 84.4,118.3 87.4,114.2 90.3,110.3 93.2,106.5 96.1,102.8 99,99.4 101.9,96.1 104.8,92.9 107.7,89.9 110.6,87.1 113.5,84.4 116.4,81.9 119.3,79.6 122.2,77.4 125.1,75.4 128,73.5 130.9,71.8 133.8,70.3 136.8,68.9 139.7,67.7 142.6,66.7 145.5,65.8 148.4,65.1 151.3,64.5 154.2,64.1 157.1,63.8 160,63.8 162.9,63.8 165.8,64.1 168.7,64.5 171.6,65.1 174.5,65.8 177.4,66.7 180.3,67.7 183.2,68.9 186.2,70.3 189.1,71.8 192,73.5 194.9,75.4 197.8,77.4 200.7,79.6 203.6,81.9 206.5,84.4 209.4,87.1 212.3,89.9 215.2,92.9 218.1,96.1 221,99.4 223.9,102.8 226.8,106.5 229.7,110.3 232.6,114.2 235.6,118.3 238.5,122.6 241.4,127.1 244.3,131.7 247.2,136.4 250.1,141.3 253,146.4 255.9,151.7 258.8,157.1 261.7,162.7 264.6,168.4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="55.4" cy="168.4" r="2.6" fill="currentColor"/><circle cx="264.6" cy="168.4" r="2.6" fill="currentColor"/><circle cx="160" cy="63.8" r="2.6" fill="currentColor"/><text x="51.4" y="159.4" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">A</text><text x="268.6" y="159.4" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">B</text><text x="160" y="54.8" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">C</text><text x="160" y="200" font-size="12" font-family="inherit" fill="currentColor" text-anchor="middle">8 m</text><text x="268" y="108" font-size="12" font-family="inherit" fill="currentColor">4 m</text><text x="150" y="182.4" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">O</text></svg></figure>',
    options: ['y=−0.25x<sup>2</sup>+4', 'y=−0.5x<sup>2</sup>+4', 'y=0.25x<sup>2</sup>+4', 'y=−0.25x<sup>2</sup>−4'],
    answer: 0,
    explanation: '由坐标系：A(−4, 0)、B(4, 0)、C(0, 4) 是顶点。设 y=a(x−0)<sup>2</sup>+4=ax<sup>2</sup>+4，把 B(4, 0) 代入：0=16a+4 → a=−1/4=−0.25。故 y=−0.25x<sup>2</sup>+4。验证：x=0 时 y=4（拱顶高 4 m ✓），x=±4 时 y=0（跨度 8 m ✓），a&lt;0 开口向下 ✓。选 A。'
  },
  {
    id: 'q-quad-func-30',
    kp: 'quad-func',
    difficulty: 'medium',
    type: 'fill',
    stem: '抛物线 y=x<sup>2</sup>+2x−8 与 x 轴两个交点之间的距离是（　）。',
    answers: ['6'],
    explanation: '令 y=0：x<sup>2</sup>+2x−8=(x+4)(x−2)=0，得 x=−4 或 x=2，交点 (−4, 0)、(2, 0)，距离 = 2−(−4)=6。验证：|x<sub>1</sub>−x<sub>2</sub>|=√Δ/|a|=√(4+32)=√36=6 ✓。'
  },
  {
    id: 'q-quad-func-31',
    kp: 'quad-func',
    difficulty: 'medium',
    type: 'single',
    stem: '如图，抛物线 L：y=x<sup>2</sup> 的顶点为原点 O，抛物线 L′ 的顶点为 P(2, 0) 且经过点 Q(0, 4)，则 L′ 的解析式是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="同一坐标系中抛物线L：y=x²（顶点为原点O）与抛物线L′（顶点P(2,0)，经过Q(0,4)）"><line x1="66" y1="183.5" x2="306" y2="183.5" stroke="currentColor" stroke-width="1.6"/><line x1="306" y1="183.5" x2="297" y2="179.5" stroke="currentColor" stroke-width="1.6"/><line x1="306" y1="183.5" x2="297" y2="187.5" stroke="currentColor" stroke-width="1.6"/><line x1="129" y1="214" x2="129" y2="14" stroke="currentColor" stroke-width="1.6"/><line x1="129" y1="14" x2="125" y2="23" stroke="currentColor" stroke-width="1.6"/><line x1="129" y1="14" x2="133" y2="23" stroke="currentColor" stroke-width="1.6"/><text x="308" y="175.5" font-size="13" font-family="inherit" fill="currentColor">x</text><text x="136" y="22" font-size="13" font-family="inherit" fill="currentColor">y</text><circle cx="129" cy="183.5" r="1.6" fill="currentColor"/><polyline points="64,40.5 65.9,48.6 67.7,56.4 69.6,64 71.4,71.3 73.3,78.4 75.1,85.3 77,92 78.8,98.4 80.7,104.5 82.5,110.5 84.4,116.2 86.3,121.7 88.1,126.9 90,132 91.8,136.7 93.7,141.3 95.5,145.6 97.4,149.7 99.2,153.5 101.1,157.2 102.9,160.5 104.8,163.7 106.7,166.6 108.5,169.3 110.4,171.8 112.2,174 114.1,176 115.9,177.7 117.8,179.3 119.6,180.5 121.5,181.6 123.3,182.4 125.2,183 127,183.4 128.9,183.5 130.8,183.4 132.6,183.1 134.5,182.5 136.3,181.7 138.2,180.6 140,179.4 141.9,177.9 143.7,176.1 145.6,174.2 147.4,172 149.3,169.5 151.2,166.9 153,164 154.9,160.8 156.7,157.5 158.6,153.9 160.4,150 162.3,146 164.1,141.7 166,137.1 167.8,132.4 169.7,127.4 171.6,122.2 173.4,116.7 175.3,111 177.1,105.1 179,98.9 180.8,92.5 182.7,85.9 184.5,79 186.4,72 188.2,64.6 190.1,57.1 192,49.3 193.8,41.3 195.7,33 197.5,24.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><polyline points="119.5,24.5 121.4,33.2 123.3,41.6 125.2,49.8 127.1,57.8 129,65.5 130.9,72.9 132.8,80.1 134.7,87.1 136.6,93.8 138.5,100.3 140.4,106.5 142.3,112.5 144.2,118.3 146.1,123.8 148,129.1 149.9,134.1 151.8,138.9 153.6,143.4 155.5,147.7 157.4,151.8 159.3,155.6 161.2,159.1 163.1,162.5 165,165.5 166.9,168.4 168.8,171 170.7,173.3 172.6,175.4 174.5,177.3 176.4,178.9 178.3,180.3 180.2,181.4 182.1,182.3 184,182.9 185.9,183.3 187.8,183.5 189.7,183.4 191.6,183.1 193.5,182.5 195.3,181.7 197.2,180.7 199.1,179.4 201,177.8 202.9,176 204.8,174 206.7,171.7 208.6,169.2 210.5,166.4 212.4,163.4 214.3,160.2 216.2,156.7 218.1,153 220,149 221.9,144.8 223.8,140.3 225.7,135.6 227.6,130.7 229.5,125.5 231.4,120 233.3,114.4 235.2,108.4 237,102.3 238.9,95.9 240.8,89.2 242.7,82.3 244.6,75.2 246.5,67.8 248.4,60.2 250.3,52.3 252.2,44.2 254.1,35.8 256,27.2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="129" cy="183.5" r="2.6" fill="currentColor"/><circle cx="188.1" cy="183.5" r="2.6" fill="currentColor"/><circle cx="129" cy="65.4" r="2.6" fill="currentColor"/><text x="120" y="198.5" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">O</text><text x="190.1" y="198.5" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">P</text><text x="121" y="69.4" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">Q</text><text x="36" y="216" font-size="11.5" font-family="inherit" fill="currentColor">L：y=x²</text><text x="208" y="216" font-size="11.5" font-family="inherit" fill="currentColor">L′</text></svg></figure>',
    options: ['y=(x−2)<sup>2</sup>', 'y=(x+2)<sup>2</sup>', 'y=(x−2)<sup>2</sup>+2', 'y=(x−2)<sup>2</sup>−4'],
    answer: 0,
    explanation: 'L′ 的顶点为 (2, 0)，设 y=a(x−2)<sup>2</sup>。把 Q(0, 4) 代入：4=a(0−2)<sup>2</sup>=4a → a=1。所以 L′：y=(x−2)<sup>2</sup>。验证：x=0 时 y=4 ✓（过 Q），顶点 x=2 处 y=0 ✓，开口向上 ✓；它正是把 y=x<sup>2</sup> 向右平移 2 个单位得到的。选 A。'
  },
  {
    id: 'q-quad-func-32',
    kp: 'quad-func',
    difficulty: 'medium',
    type: 'fill',
    stem: '已知二次函数 y=x<sup>2</sup>−2mx+3 的图象的对称轴是直线 x=−1，则 m=（　）。',
    answers: ['-1'],
    explanation: '对称轴 x=−b/(2a)=−(−2m)/(2×1)=m，由题意 m=−1。检验：y=x<sup>2</sup>+2x+3=(x+1)<sup>2</sup>+2，对称轴 x=−1 ✓。'
  },
  {
    id: 'q-quad-func-33',
    kp: 'quad-func',
    difficulty: 'medium',
    type: 'fill',
    stem: '已知抛物线 y=−x<sup>2</sup>+bx+c 的顶点为 P(2, 3)，则 b+c 的值是（　）。',
    answers: ['3'],
    explanation: '顶点横坐标满足 −b/(2×(−1))=2，即 b/2=2，得 b=4。再把 P(2, 3) 代入：3=−4+4×2+c=−4+8+c=4+c，得 c=−1。所以 b+c=4+(−1)=3。检验：y=−x<sup>2</sup>+4x−1=−(x−2)<sup>2</sup>+3，顶点 (2, 3) ✓。'
  },
  {
    id: 'q-quad-func-34',
    kp: 'quad-func',
    difficulty: 'medium',
    type: 'single',
    stem: '某商店销售一种商品，每件进价 40 元，当售价为 60 元时，每月可售出 200 件。市场调查表明：售价每上涨 1 元，每月销售量就减少 5 件。设售价上涨 x 元（0≤x≤40），每月利润为 W 元，则 W 的最大值是（　）',
    options: ['4500 元', '4000 元', '5000 元', '4200 元'],
    answer: 0,
    explanation: '每件利润 = (60+x)−40 = 20+x（元），月销售量 = 200−5x（件），所以 W=(20+x)(200−5x)=4000−100x+200x−5x<sup>2</sup>=−5x<sup>2</sup>+100x+4000。对称轴 x=−100/(2×(−5))=10，a=−5&lt;0 开口向下，故 x=10 时 W 最大：W=−5×100+1000+4000=4500（元）。验证：x=10 时每件利润 30 元、销量 150 件，30×150=4500 ✓。选 A。'
  },
  {
    id: 'q-quad-func-35',
    kp: 'quad-func',
    difficulty: 'medium',
    type: 'fill',
    stem: '如图，用长 24 m 的篱笆靠墙围成一个矩形花园（墙足够长，篱笆只围与墙垂直的两边和一条与墙平行的边）。设与墙垂直的一边长为 x m，矩形花园的面积为 S m<sup>2</sup>，则 S 的最大值是（　）m<sup>2</sup><br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="围栏示意图：墙在上方，篱笆围住垂直于墙的两边（各长 x）和一条与墙平行的边（长 24−2x），篱笆总长 24"><line x1="40" y1="50" x2="280" y2="50" stroke="currentColor" stroke-width="1.6"/><line x1="44" y1="43" x2="52" y2="50" stroke="currentColor" stroke-width="1.6"/><line x1="64" y1="43" x2="72" y2="50" stroke="currentColor" stroke-width="1.6"/><line x1="84" y1="43" x2="92" y2="50" stroke="currentColor" stroke-width="1.6"/><line x1="104" y1="43" x2="112" y2="50" stroke="currentColor" stroke-width="1.6"/><line x1="124" y1="43" x2="132" y2="50" stroke="currentColor" stroke-width="1.6"/><line x1="144" y1="43" x2="152" y2="50" stroke="currentColor" stroke-width="1.6"/><line x1="164" y1="43" x2="172" y2="50" stroke="currentColor" stroke-width="1.6"/><line x1="184" y1="43" x2="192" y2="50" stroke="currentColor" stroke-width="1.6"/><line x1="204" y1="43" x2="212" y2="50" stroke="currentColor" stroke-width="1.6"/><line x1="224" y1="43" x2="232" y2="50" stroke="currentColor" stroke-width="1.6"/><line x1="244" y1="43" x2="252" y2="50" stroke="currentColor" stroke-width="1.6"/><line x1="264" y1="43" x2="272" y2="50" stroke="currentColor" stroke-width="1.6"/><text x="150" y="36" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">墙</text><line x1="88" y1="50" x2="88" y2="122" stroke="currentColor" stroke-width="1.6"/><line x1="88" y1="122" x2="232" y2="122" stroke="currentColor" stroke-width="1.6"/><line x1="232" y1="50" x2="232" y2="122" stroke="currentColor" stroke-width="1.6"/><text x="98" y="90" font-size="13" font-family="inherit" fill="currentColor">x</text><text x="222" y="90" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">x</text><text x="160" y="140" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">24−2x</text><line x1="88" y1="114" x2="96" y2="114" stroke="currentColor" stroke-width="1.6"/><line x1="96" y1="114" x2="96" y2="122" stroke="currentColor" stroke-width="1.6"/></svg></figure>',
    answers: ['72'],
    explanation: '与墙平行的一边长为 24−2x（m），所以 S=x(24−2x)=−2x<sup>2</sup>+24x（0&lt;x&lt;12）。配方：S=−2(x−6)<sup>2</sup>+72，a=−2&lt;0，故 x=6 时 S 最大为 72。验证：x=6 时平行边 24−12=12（m），面积 6×12=72（m<sup>2</sup>）✓，且篱笆总长 2×6+12=24 ✓。'
  },
  {
    id: 'q-quad-func-36',
    kp: 'quad-func',
    difficulty: 'hard',
    type: 'single',
    stem: '如图，抛物线 y=x<sup>2</sup>−2x−3 与直线 y=2x−3 相交于点 A 和点 B，点 C 为该抛物线的顶点，则 △ABC 的面积是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="坐标系中抛物线y=x²−2x−3与直线y=2x−3交于A(0,−3)、B(4,5)，抛物线顶点C(1,−4)，连成三角形ABC"><line x1="96.2" y1="134.2" x2="306" y2="134.2" stroke="currentColor" stroke-width="1.6"/><line x1="306" y1="134.2" x2="297" y2="130.2" stroke="currentColor" stroke-width="1.6"/><line x1="306" y1="134.2" x2="297" y2="138.2" stroke="currentColor" stroke-width="1.6"/><line x1="140.4" y1="214" x2="140.4" y2="14" stroke="currentColor" stroke-width="1.6"/><line x1="140.4" y1="14" x2="136.4" y2="23" stroke="currentColor" stroke-width="1.6"/><line x1="140.4" y1="14" x2="144.4" y2="23" stroke="currentColor" stroke-width="1.6"/><text x="308" y="126.2" font-size="13" font-family="inherit" fill="currentColor">x</text><text x="147.4" y="22" font-size="13" font-family="inherit" fill="currentColor">y</text><circle cx="140.4" cy="134.2" r="1.6" fill="currentColor"/><polyline points="105.8,50.6 107.3,59.2 108.7,67.6 110.2,75.7 111.7,83.6 113.2,91.2 114.7,98.6 116.1,105.8 117.6,112.6 119.1,119.3 120.6,125.7 122.1,131.8 123.6,137.7 125,143.4 126.5,148.8 128,154 129.5,158.9 131,163.5 132.4,168 133.9,172.1 135.4,176.1 136.9,179.7 138.4,183.2 139.9,186.4 141.3,189.3 142.8,192 144.3,194.4 145.8,196.6 147.3,198.6 148.7,200.3 150.2,201.7 151.7,202.9 153.2,203.9 154.7,204.6 156.1,205.1 157.6,205.3 159.1,205.3 160.6,205 162.1,204.5 163.6,203.7 165,202.7 166.5,201.5 168,200 169.5,198.2 171,196.2 172.4,194 173.9,191.5 175.4,188.7 176.9,185.7 178.4,182.5 179.9,179 181.3,175.3 182.8,171.3 184.3,167.1 185.8,162.6 187.3,157.9 188.7,152.9 190.2,147.7 191.7,142.3 193.2,136.6 194.7,130.6 196.1,124.4 197.6,118 199.1,111.3 200.6,104.4 202.1,97.2 203.6,89.7 205,82.1 206.5,74.1 208,66 209.5,57.5 211,48.9 212.4,40" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="129.8" y1="208.9" x2="218.7" y2="31.1" stroke="currentColor" stroke-width="1.6"/><circle cx="140.4" cy="187.6" r="2.6" fill="currentColor"/><circle cx="211.6" cy="45.3" r="2.6" fill="currentColor"/><circle cx="158.2" cy="205.3" r="2.6" fill="currentColor"/><text x="131.4" y="193.6" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A</text><text x="215.6" y="37.3" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">B</text><text x="164.2" y="219.3" font-size="13" font-family="inherit" fill="currentColor">C</text><text x="130.4" y="148.2" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">O</text><text x="34" y="36" font-size="11.5" font-family="inherit" fill="currentColor">y=2x−3</text><text x="176" y="224" font-size="11.5" font-family="inherit" fill="currentColor">y=x²−2x−3</text></svg></figure>',
    options: ['6', '12', '3', '4'],
    answer: 0,
    explanation: '联立：x<sup>2</sup>−2x−3=2x−3 → x<sup>2</sup>−4x=0 → x(x−4)=0 → x=0 或 4。x=0 时 y=−3；x=4 时 y=5，故 A(0, −3)、B(4, 5)。配方得 y=(x−1)<sup>2</sup>−4，顶点 C(1, −4)。用坐标面积公式：S=½|x<sub>A</sub>(y<sub>B</sub>−y<sub>C</sub>)+x<sub>B</sub>(y<sub>C</sub>−y<sub>A</sub>)+x<sub>C</sub>(y<sub>A</sub>−y<sub>B</sub>)|=½|0×(5+4)+4×(−4+3)+1×(−3−5)|=½|0−4−8|=6。验证另法：过 A、C 的直线斜率 (−4+3)/(1−0)=−1，直线 AC：y=−x−3，B 到它的距离 =(4+5+3)/√2=12/√2=6√2，AC=√2，S=½×√2×6√2=6 ✓。选 A。'
  },
  {
    id: 'q-quad-func-37',
    kp: 'quad-func',
    difficulty: 'hard',
    type: 'fill',
    stem: '当 −1≤x≤2 时，二次函数 y=x<sup>2</sup>−2ax+1 的最小值为 −3，则 a 的所有可能取值之和是（　）。',
    answers: ['-0.5', '-1/2'],
    explanation: '配方得 y=(x−a)<sup>2</sup>+1−a<sup>2</sup>，对称轴 x=a，开口向上，必须按对称轴与区间 [−1, 2] 的位置分三支讨论。①a&lt;−1：区间在对称轴右侧，y 在 [−1, 2] 上递增，最小值 y(−1)=2+2a=−3，得 a=−2.5，满足 a&lt;−1 ✓。②−1≤a≤2：最小值在顶点取得，1−a<sup>2</sup>=−3 → a<sup>2</sup>=4 → a=±2，只有 a=2 落在区间内 ✓。③a&gt;2：区间在对称轴左侧，y 在 [−1, 2] 上递减，最小值 y(2)=5−4a=−3 → a=2，与 a&gt;2 矛盾，无解。故 a=−2.5 或 a=2，两者之和 −2.5+2=−0.5。'
  },
  {
    id: 'q-quad-func-38',
    kp: 'quad-func',
    difficulty: 'hard',
    type: 'single',
    stem: '已知二次函数 y=x<sup>2</sup>−(m+1)x+m 的图象与 x 轴交于 A(x<sub>1</sub>, 0)、B(x<sub>2</sub>, 0) 两点，且 x<sub>1</sub><sup>2</sup>+x<sub>2</sub><sup>2</sup>=5，则 m 的值是（　）',
    options: ['2', '−2', '2 或 −2', '1'],
    answer: 2,
    explanation: '由根与系数的关系（韦达定理）：x<sub>1</sub>+x<sub>2</sub>=m+1，x<sub>1</sub>x<sub>2</sub>=m。于是 x<sub>1</sub><sup>2</sup>+x<sub>2</sub><sup>2</sup>=(x<sub>1</sub>+x<sub>2</sub>)<sup>2</sup>−2x<sub>1</sub>x<sub>2</sub>=(m+1)<sup>2</sup>−2m=m<sup>2</sup>+1=5，得 m<sup>2</sup>=4，m=±2。必须再检验“两个不同交点”：Δ=(m+1)<sup>2</sup>−4m=(m−1)<sup>2</sup>&gt;0，m=2 与 m=−2 都满足（m≠1）。m=2 时 y=x<sup>2</sup>−3x+2，交点横坐标 1、2，1+4=5 ✓；m=−2 时 y=x<sup>2</sup>+x−2，交点横坐标 1、−2，1+4=5 ✓。两值都成立，故选 C。',
    tags: ['quad-eq']
  },
  {
    id: 'q-quad-func-39',
    kp: 'quad-func',
    difficulty: 'hard',
    type: 'fill',
    stem: '将抛物线 y=x<sup>2</sup>+2x−3 的图象绕原点旋转 180°，所得图象的顶点坐标是（　）。',
    answers: ['(1,4)', '1,4'],
    explanation: '先把原抛物线配方：y=(x+1)<sup>2</sup>−4，顶点为 (−1, −4)。绕原点旋转 180° 即中心对称变换，点 (x, y) 变为 (−x, −y)，所以顶点变为 (1, 4)。同法可求新解析式：由 −y=((−x)+1)<sup>2</sup>−4 得 y=−(x−1)<sup>2</sup>+4，其顶点正是 (1, 4) ✓（开口由向上变为向下，与原图象关于原点对称）。',
    tags: ['rotation']
  },
  {
    id: 'q-quad-func-40',
    kp: 'quad-func',
    difficulty: 'hard',
    type: 'fill',
    stem: '已知抛物线 y=x<sup>2</sup>+bx+c 与 x 轴交于 A(−1, 0)、B(3, 0) 两点，与 y 轴交于点 C。点 D 在 y 轴的正半轴上，且 △AOD ∽ △COB（点 A、O、D 分别对应点 C、O、B），则点 D 的坐标是（　）。',
    answers: ['(0,1)', '0,1'],
    explanation: '先求 C：由交点式 y=(x+1)(x−3)=x<sup>2</sup>−2x−3，令 x=0 得 C(0, −3)，故 OC=3，又 OA=1、OB=3。由 △AOD ∽ △COB 得对应边成比例：AO/CO=OD/OB，即 1/3=OD/3，解得 OD=1。点 D 在 y 轴正半轴上，所以 D(0, 1)。验证相似比：AD=√(1<sup>2</sup>+1<sup>2</sup>)=√2，CB=√(3<sup>2</sup>+3<sup>2</sup>)=3√2，AO/CO=OD/OB=AD/CB=1/3 ✓。',
    tags: ['similarity']
  },
  {
    id: 'q-quad-func-41',
    kp: 'quad-func',
    difficulty: 'hard',
    type: 'single',
    stem: '已知抛物线 y=x<sup>2</sup>−4x+3 与 x 轴交于 A(1, 0)、B(3, 0) 两点，与 y 轴交于点 C(0, 3)。点 P 是抛物线对称轴上一点，若以 P、A、B 为顶点的三角形与 △COB 相似，则点 P 的坐标是（　）',
    options: ['(2, 1) 或 (2, −1)', '(2, 1)', '(2, −1)', '(2, 4) 或 (2, −4)'],
    answer: 0,
    explanation: '对称轴 x=−b/(2a)=4/2=2，设 P(2, m)。△COB 中 C(0, 3)、O(0, 0)、B(3, 0)，∠COB=90° 且 OC=OB=3，是等腰直角三角形。△PAB 中 PA=PB=√(1+m<sup>2</sup>)，AB=2，是等腰三角形；要与等腰直角三角形相似，它必须是直角等腰三角形，直角只能在顶点 P：PA⊥PB ⇔ (1−2)(3−2)+(−m)(−m)=0 ⇔ −1+m<sup>2</sup>=0，得 m=±1。此时 PA=PB=√2，AB=2，PA<sup>2</sup>+PB<sup>2</sup>=4=AB<sup>2</sup> ✓，两三角形相似（相似比 √2:3）。故 P(2, 1) 或 P(2, −1)，两种情况都不能漏。选 A。',
    tags: ['similarity']
  },
  {
    id: 'q-quad-func-42',
    kp: 'quad-func',
    difficulty: 'hard',
    type: 'single',
    stem: '如图，抛物线 y=x<sup>2</sup>−4x+3 的顶点为 P，以 P 为圆心、2 为半径作圆，该圆与 x 轴交于 A、B 两点，则线段 AB 的长是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="抛物线y=x²−4x+3的顶点P(2,−1)为圆心、半径2的圆，与x轴交于A、B两点"><line x1="71.2" y1="83.3" x2="306" y2="83.3" stroke="currentColor" stroke-width="1.6"/><line x1="306" y1="83.3" x2="297" y2="79.3" stroke="currentColor" stroke-width="1.6"/><line x1="306" y1="83.3" x2="297" y2="87.3" stroke="currentColor" stroke-width="1.6"/><line x1="90.2" y1="214" x2="90.2" y2="14" stroke="currentColor" stroke-width="1.6"/><line x1="90.2" y1="14" x2="86.2" y2="23" stroke="currentColor" stroke-width="1.6"/><line x1="90.2" y1="14" x2="94.2" y2="23" stroke="currentColor" stroke-width="1.6"/><text x="308" y="75.3" font-size="13" font-family="inherit" fill="currentColor">x</text><text x="97.2" y="22" font-size="13" font-family="inherit" fill="currentColor">y</text><circle cx="90.2" cy="83.3" r="1.6" fill="currentColor"/><polyline points="104.4,29.7 106.2,35.3 108,40.7 109.8,46 111.6,51 113.4,55.9 115.2,60.6 116.9,65.2 118.7,69.5 120.5,73.6 122.3,77.6 124.1,81.4 125.9,85 127.7,88.4 129.5,91.6 131.3,94.7 133.1,97.5 134.9,100.2 136.7,102.7 138.5,105 140.3,107.1 142.1,109 143.9,110.8 145.6,112.4 147.4,113.7 149.2,114.9 151,115.9 152.8,116.8 154.6,117.4 156.4,117.9 158.2,118.2 160,118.3 161.8,118.2 163.6,117.9 165.4,117.4 167.2,116.8 169,115.9 170.8,114.9 172.6,113.7 174.4,112.4 176.1,110.8 177.9,109 179.7,107.1 181.5,105 183.3,102.7 185.1,100.2 186.9,97.5 188.7,94.7 190.5,91.6 192.3,88.4 194.1,85 195.9,81.4 197.7,77.6 199.5,73.6 201.3,69.5 203.1,65.2 204.8,60.6 206.6,55.9 208.4,51 210.2,46 212,40.7 213.8,35.3 215.6,29.7" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="160" cy="118.3" r="69.8" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="160" cy="118.3" r="2.6" fill="currentColor"/><circle cx="99.5" cy="83.3" r="2.6" fill="currentColor"/><circle cx="220.5" cy="83.3" r="2.6" fill="currentColor"/><text x="160" y="134.3" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">P</text><text x="95.5" y="74.3" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">A</text><text x="224.5" y="74.3" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">B</text><text x="81.2" y="98.3" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">O</text><text x="240" y="40" font-size="11.5" font-family="inherit" fill="currentColor">y=x²−4x+3</text></svg></figure>',
    options: ['2√3', '3', '2', '4'],
    answer: 0,
    explanation: '配方得 y=(x−2)<sup>2</sup>−1，顶点 P(2, −1)。圆的方程为 (x−2)<sup>2</sup>+(y+1)<sup>2</sup>=4。与 x 轴（y=0）相交时代入：(x−2)<sup>2</sup>+1=4，(x−2)<sup>2</sup>=3，x=2±√3，所以 A(2−√3, 0)、B(2+√3, 0)，AB=2√3。用圆的垂径定理验证：圆心到 x 轴的距离为 |−1|=1，半径 2，弦长 =2√(2<sup>2</sup>−1<sup>2</sup>)=2√3 ✓。选 A。',
    tags: ['circle']
  },
  {
    id: 'q-quad-func-43',
    kp: 'quad-func',
    difficulty: 'hard',
    type: 'single',
    stem: '如图，抛物线 y=−x<sup>2</sup>+2x+3 与 x 轴交于 A(−1, 0)、B(3, 0) 两点，与 y 轴交于点 C，顶点为 D。以 BD 为直径作圆，则该圆一定经过点（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="抛物线y=−x²+2x+3与x轴交于A(−1,0)、B(3,0)，与y轴交于C，顶点为D，以BD为直径作圆"><line x1="89.4" y1="155.1" x2="306" y2="155.1" stroke="currentColor" stroke-width="1.6"/><line x1="306" y1="155.1" x2="297" y2="151.1" stroke="currentColor" stroke-width="1.6"/><line x1="306" y1="155.1" x2="297" y2="159.1" stroke="currentColor" stroke-width="1.6"/><line x1="124.9" y1="214" x2="124.9" y2="14" stroke="currentColor" stroke-width="1.6"/><line x1="124.9" y1="14" x2="120.9" y2="23" stroke="currentColor" stroke-width="1.6"/><line x1="124.9" y1="14" x2="128.9" y2="23" stroke="currentColor" stroke-width="1.6"/><text x="308" y="147.1" font-size="13" font-family="inherit" fill="currentColor">x</text><text x="131.9" y="22" font-size="13" font-family="inherit" fill="currentColor">y</text><circle cx="124.9" cy="155.1" r="1.6" fill="currentColor"/><polyline points="98,169.7 99.3,163.8 100.7,158 102.1,152.4 103.5,147 104.9,141.7 106.3,136.6 107.7,131.7 109.1,126.9 110.5,122.3 111.9,117.9 113.3,113.7 114.7,109.6 116.1,105.6 117.5,101.9 118.9,98.3 120.3,94.9 121.7,91.6 123.1,88.5 124.5,85.6 125.9,82.8 127.3,80.3 128.7,77.8 130.1,75.6 131.5,73.5 132.9,71.6 134.3,69.8 135.7,68.2 137.1,66.8 138.5,65.6 139.9,64.5 141.3,63.6 142.7,62.8 144.1,62.2 145.5,61.8 146.9,61.5 148.3,61.5 149.7,61.5 151.1,61.8 152.5,62.2 153.9,62.8 155.3,63.6 156.7,64.5 158.1,65.6 159.5,66.8 160.9,68.2 162.3,69.8 163.7,71.6 165.1,73.5 166.5,75.6 167.9,77.8 169.3,80.3 170.7,82.8 172.1,85.6 173.5,88.5 174.9,91.6 176.3,94.9 177.7,98.3 179.1,101.9 180.5,105.6 181.9,109.6 183.3,113.7 184.7,117.9 186,122.3 187.4,126.9 188.8,131.7 190.2,136.6 191.6,141.7 193,147 194.4,152.4 195.8,158 197.2,163.8 198.6,169.7" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="148.3" y1="61.5" x2="195.1" y2="155.1" stroke="currentColor" stroke-width="1.6"/><circle cx="171.7" cy="108.3" r="52.4" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="101.5" cy="155.1" r="2.6" fill="currentColor"/><circle cx="195.1" cy="155.1" r="2.6" fill="currentColor"/><circle cx="124.9" cy="84.9" r="2.6" fill="currentColor"/><circle cx="148.3" cy="61.5" r="2.6" fill="currentColor"/><text x="97.5" y="146.1" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">A</text><text x="200.1" y="169.1" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">B</text><text x="116.9" y="88.9" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">C</text><text x="142.3" y="53.5" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">D</text><text x="115.9" y="170.1" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">O</text></svg></figure>',
    options: ['C(0, 3)', 'A(−1, 0)', 'O(0, 0)', 'M(0, 4)'],
    answer: 0,
    explanation: '配方得 y=−(x−1)<sup>2</sup>+4，顶点 D(1, 4)，又 C(0, 3)。以 BD 为直径的圆上一点 P 满足 ∠BPD=90°（直径所对的圆周角是直角）。检验 C：向量 CB=(3−0, 0−3)=(3, −3)，CD=(1−0, 4−3)=(1, 1)，数量积 3×1+(−3)×1=0，故 ∠BCD=90°，C 在圆上 ✓。再验证其余点：圆心为 BD 中点 (2, 2)，半径 ½|BD|=½√(2<sup>2</sup>+4<sup>2</sup>)=√5；O 到圆心距离 √8≠√5，A 到圆心 √13≠√5，M(0, 4) 到圆心 √8≠√5，都不在圆上。选 A。',
    tags: ['circle']
  },
  {
    id: 'q-quad-func-44',
    kp: 'quad-func',
    difficulty: 'hard',
    type: 'single',
    stem: '从 −2、−1、1、2 这四个数中随机抽取两个不同的数，分别作为二次函数 y=ax<sup>2</sup>+bx 中 a、b 的值（先抽到的作为 a），则该抛物线的顶点在 y 轴左侧的概率是（　）',
    options: ['1/3', '1/6', '1/2', '1/4'],
    answer: 0,
    explanation: '先抽 a、再抽 b，共有 4×3=12 种等可能结果（a 一定不为 0，都是抛物线）。顶点横坐标 x=−b/(2a)，要在 y 轴左侧需 −b/(2a)&lt;0，即 b/a&gt;0，也就是 a、b 同号：同为正有 (1,2)、(2,1) 2 种，同为负有 (−2,−1)、(−1,−2) 2 种，共 4 种。所以概率 P=4/12=1/3。验证：a=1,b=2 时顶点 x=−1&lt;0 ✓；a=1,b=−2 时 x=1&gt;0 ✗。选 A。',
    tags: ['probability']
  },
  {
    id: 'q-quad-func-45',
    kp: 'quad-func',
    difficulty: 'hard',
    type: 'fill',
    stem: '在二次函数 y=x<sup>2</sup>−2x+m 中，m 从 0、1、2、3 这四个数中随机取一个，则该函数的图象与 x 轴有两个不同公共点的概率是（　）。',
    answers: ['1/4', '0.25'],
    explanation: '与 x 轴有两个不同公共点 ⇔ Δ=(−2)<sup>2</sup>−4×1×m=4−4m&gt;0 ⇔ m&lt;1。在 0、1、2、3 中只有 m=0 满足，共 4 种等可能取值，故概率 P=1/4=0.25。验证：m=0 时 y=x<sup>2</sup>−2x=x(x−2)，交点 (0, 0)、(2, 0) 两个 ✓；m=1 时 y=(x−1)<sup>2</sup> 只有一个公共点 ✗。',
    tags: ['probability']
  },
  {
    id: 'q-quad-func-46',
    kp: 'quad-func',
    difficulty: 'hard',
    type: 'fill',
    stem: '已知二次函数 y=x<sup>2</sup>+mx+n 的图象与 x 轴交于 A、B 两点，若 m=−2 且 AB=4，则 n=（　）。',
    answers: ['-3'],
    explanation: 'AB=|x<sub>1</sub>−x<sub>2</sub>|=√Δ/|a|=√(m<sup>2</sup>−4n)=√(4−4n)=4，两边平方得 4−4n=16，−4n=12，n=−3。验证：y=x<sup>2</sup>−2x−3=(x−3)(x+1)，交点 (3, 0)、(−1, 0)，AB=4 ✓。',
    tags: ['quad-eq']
  },
  {
    id: 'q-quad-func-47',
    kp: 'quad-func',
    difficulty: 'hard',
    type: 'single',
    stem: '将抛物线 y=x<sup>2</sup>−4x+3 的图象绕它的顶点旋转 180°，所得图象的解析式是（　）',
    options: ['y=−(x−2)<sup>2</sup>−1', 'y=−(x+2)<sup>2</sup>−1', 'y=−(x−2)<sup>2</sup>+1', 'y=(x−2)<sup>2</sup>+1'],
    answer: 0,
    explanation: '配方：y=(x−2)<sup>2</sup>−1，顶点 V(2, −1)。绕顶点旋转 180° 时，顶点不动，开口方向由向上变为向下，形状不变（|a| 不变、a 变号），所以新解析式为 y=−(x−2)<sup>2</sup>−1。用坐标验证：中心对称把 (x, y) 变为 (4−x, −2−y)，代入原式得 −2−y=((4−x)−2)<sup>2</sup>−1=(2−x)<sup>2</sup>−1，即 y=−(x−2)<sup>2</sup>−1 ✓。选 A。',
    tags: ['rotation']
  },
  {
    id: 'q-quad-func-48',
    kp: 'quad-func',
    difficulty: 'hard',
    type: 'single',
    stem: '抛物线 y=−x<sup>2</sup>+2x+3 的顶点为 P(1, 4)。将该抛物线沿 y 轴向下平移 m 个单位长度后，所得抛物线与 x 轴只有一个公共点，则 m=（　）',
    options: ['4', '2', '3', '5'],
    answer: 0,
    explanation: '配方得 y=−(x−1)<sup>2</sup>+4，顶点 (1, 4)。向下平移 m 个单位后解析式为 y=−(x−1)<sup>2</sup>+4−m，顶点变为 (1, 4−m)。抛物线与 x 轴只有一个公共点 ⇔ Δ=0 ⇔ 顶点在 x 轴上 ⇔ 4−m=0，所以 m=4（此时 y=−(x−1)<sup>2</sup>，与 x 轴相切于 (1, 0)）。验证：平移后 y=−x<sup>2</sup>+2x+3−m，Δ=2<sup>2</sup>−4×(−1)×(3−m)=4+12−4m=16−4m=0，同样得 m=4 ✓。选 A。'
  },
  {
    id: 'q-quad-func-49',
    kp: 'quad-func',
    difficulty: 'hard',
    type: 'single',
    stem: '如图，某隧道横截面是抛物线形，路面宽 AB=8 m，最高点 C 距路面 4 m。一辆宽 4 m 的货车在隧道正中间通过，且车顶与隧道顶部之间的空隙不少于 0.5 m，则这辆货车的限高是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="隧道横截面为抛物线形，路面AB=8 m，最高点C距路面4 m，中间有一辆宽4 m的货车"><line x1="26" y1="168.4" x2="306" y2="168.4" stroke="currentColor" stroke-width="1.6"/><line x1="306" y1="168.4" x2="297" y2="164.4" stroke="currentColor" stroke-width="1.6"/><line x1="306" y1="168.4" x2="297" y2="172.4" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="197.8" x2="160" y2="14" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="14" x2="156" y2="23" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="14" x2="164" y2="23" stroke="currentColor" stroke-width="1.6"/><text x="308" y="160.4" font-size="13" font-family="inherit" fill="currentColor">x</text><text x="167" y="22" font-size="13" font-family="inherit" fill="currentColor">y</text><circle cx="160" cy="168.4" r="1.6" fill="currentColor"/><polyline points="55.4,168.4 58.3,162.7 61.2,157.1 64.1,151.7 67,146.4 69.9,141.3 72.8,136.4 75.7,131.7 78.6,127.1 81.5,122.6 84.4,118.3 87.4,114.2 90.3,110.3 93.2,106.5 96.1,102.8 99,99.4 101.9,96.1 104.8,92.9 107.7,89.9 110.6,87.1 113.5,84.4 116.4,81.9 119.3,79.6 122.2,77.4 125.1,75.4 128,73.5 130.9,71.8 133.8,70.3 136.8,68.9 139.7,67.7 142.6,66.7 145.5,65.8 148.4,65.1 151.3,64.5 154.2,64.1 157.1,63.8 160,63.8 162.9,63.8 165.8,64.1 168.7,64.5 171.6,65.1 174.5,65.8 177.4,66.7 180.3,67.7 183.2,68.9 186.2,70.3 189.1,71.8 192,73.5 194.9,75.4 197.8,77.4 200.7,79.6 203.6,81.9 206.5,84.4 209.4,87.1 212.3,89.9 215.2,92.9 218.1,96.1 221,99.4 223.9,102.8 226.8,106.5 229.7,110.3 232.6,114.2 235.6,118.3 238.5,122.6 241.4,127.1 244.3,131.7 247.2,136.4 250.1,141.3 253,146.4 255.9,151.7 258.8,157.1 261.7,162.7 264.6,168.4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="107.7" y1="168.4" x2="212.3" y2="168.4" stroke="currentColor" stroke-width="1.6"/><line x1="212.3" y1="168.4" x2="212.3" y2="103" stroke="currentColor" stroke-width="1.6"/><line x1="212.3" y1="103" x2="107.7" y2="103" stroke="currentColor" stroke-width="1.6"/><line x1="107.7" y1="103" x2="107.7" y2="168.4" stroke="currentColor" stroke-width="1.6"/><circle cx="55.4" cy="168.4" r="2.6" fill="currentColor"/><circle cx="264.6" cy="168.4" r="2.6" fill="currentColor"/><circle cx="160" cy="63.8" r="2.6" fill="currentColor"/><text x="51.4" y="159.4" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">A</text><text x="268.6" y="159.4" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">B</text><text x="160" y="54.8" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">C</text><text x="92" y="128" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">4 m</text><text x="160" y="202" font-size="12" font-family="inherit" fill="currentColor" text-anchor="middle">8 m</text><text x="166" y="184.4" font-size="13" font-family="inherit" fill="currentColor">O</text></svg></figure>',
    options: ['2.5 m', '3 m', '2 m', '3.5 m'],
    answer: 0,
    explanation: '以 AB 所在直线为 x 轴、AB 中点为原点建立坐标系，则 A(−4, 0)、B(4, 0)、C(0, 4)。设 y=ax<sup>2</sup>+4，代入 B(4, 0) 得 0=16a+4，a=−1/4，即 y=−0.25x<sup>2</sup>+4。货车宽 4 m 且居中，车顶两角在 x=±2 处，该处隧道高 y=−0.25×4+4=3（m）。要留出不少于 0.5 m 的空隙，限高 ≤3−0.5=2.5（m）。选 A。'
  },
  {
    id: 'q-quad-func-50',
    kp: 'quad-func',
    difficulty: 'hard',
    type: 'fill',
    stem: '已知抛物线 y=x<sup>2</sup>−(2k+1)x+k<sup>2</sup> 的顶点在 x 轴上，则 k=（　）。',
    answers: ['-1/4', '-0.25'],
    explanation: '顶点在 x 轴上 ⇔ 抛物线与 x 轴只有一个公共点 ⇔ Δ=0。Δ=(2k+1)<sup>2</sup>−4k<sup>2</sup>=4k<sup>2</sup>+4k+1−4k<sup>2</sup>=4k+1=0，得 k=−1/4=−0.25。验证：k=−1/4 时 y=x<sup>2</sup>−(1/2)x+1/16=(x−1/4)<sup>2</sup>，顶点 (1/4, 0) 恰在 x 轴上 ✓。'
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
  {
    id: 'q-rotation-13',
    kp: 'rotation',
    difficulty: 'basic',
    type: 'single',
    stem: '下列图形中，既是中心对称图形又是轴对称图形的是（　）',
    options: ['等边三角形', '平行四边形', '正方形', '正五边形'],
    answer: 2,
    explanation: '中心对称图形要求绕对称中心旋转 180° 后与自身重合；轴对称图形要求沿某条直线折叠后两部分重合。等边三角形有 3 条对称轴，但 360°÷3=120°，180 不是 120 的整数倍，绕中心旋转 180° 不能与自身重合，所以只是轴对称图形；平行四边形绕对角线交点旋转 180° 能与自身重合，但没有对称轴，只是中心对称图形；正方形有 4 条对称轴，绕中心旋转 90°（当然也旋转 180°）就与自身重合，两种都是；正五边形有 5 条对称轴，360°÷5=72°，180 不是 72° 的整数倍，不是中心对称图形。选 C。'
  },
  {
    id: 'q-rotation-14',
    kp: 'rotation',
    difficulty: 'basic',
    type: 'fill',
    stem: '一枚棋子停在平面直角坐标系的点 A(−3, 4) 处。让棋子绕原点 O 顺时针转动 90° 到达点 A′，则 A′ 的坐标是（　）。（写成 (x, y) 的形式）',
    answers: ['(4,3)', '4,3'],
    explanation: '绕原点顺时针旋转 90° 的坐标规律是 (x, y)→(y, −x)。把 x=−3、y=4 代入得 A′(4, −(−3))=(4, 3)。复验两条旋转性质：① |OA|=√((−3)<sup>2</sup>+4<sup>2</sup>)=5，|OA′|=√(4<sup>2</sup>+3<sup>2</sup>)=5，对应点到旋转中心等距；② OA·OA′=(−3)×4+4×3=0，两条半径垂直，夹角 90°；且 A 在第二象限、A′ 在第一象限，由第二象限转到第一象限是顺时针，方向也正确。'
  },
  {
    id: 'q-rotation-15',
    kp: 'rotation',
    difficulty: 'basic',
    type: 'fill',
    stem: '若点 A′ 与点 A(5, −2) 关于坐标原点对称，则点 A′ 的坐标是（　）。（写成 (x, y) 的形式）',
    answers: ['(-5,2)', '-5,2'],
    explanation: '关于原点中心对称就是绕原点旋转 180°，坐标规律 (x, y)→(−x, −y)，所以 A(5, −2)→A′(−5, 2)。复验：若 A、A′ 关于 O 对称，则 O 是线段 AA′ 的中点，(5+(−5))/2=0、(−2+2)/2=0 成立；且 OA=√(25+4)=√29=OA′，A、O、A′ 三点共线，符合中心对称的定义。'
  },
  {
    id: 'q-rotation-16',
    kp: 'rotation',
    difficulty: 'basic',
    type: 'fill',
    stem: '如图，正十二边形 ABCDEFGHIJKL 绕它的中心 O 旋转，图中 ∠AOB 是相邻两个顶点与中心连线的夹角。若旋转后顶点 A 恰好落在顶点 C 的位置，则最小的旋转角是（　）度。<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="正十二边形绕中心O，半径OA与OB，∠AOB=30°"><polygon points="160,25 112.5,37.7 77.7,72.5 65,120 77.7,167.5 112.5,202.3 160,215 207.5,202.3 242.3,167.5 255,120 242.3,72.5 207.5,37.7" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="160" y1="120" x2="160" y2="25" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="120" x2="112.5" y2="37.7" stroke="currentColor" stroke-width="1.6"/><circle cx="160" cy="120" r="2.6" fill="currentColor"/><circle cx="160" cy="25" r="2.6" fill="currentColor"/><circle cx="112.5" cy="37.7" r="2.6" fill="currentColor"/><path d="M160,80.1 A39.9,39.9 0 0 0 140.1,85.4" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="144" y="60.3" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">30°</text><text x="160" y="16" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">A</text><text x="107.5" y="32.7" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">B</text><text x="153" y="136" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">O</text></svg></figure>',
    answers: ['60'],
    explanation: '正 n 边形的中心角是 360°/n。图中 ∠AOB=360°÷12=30° 是相邻两个顶点与中心连线的夹角，也是它最小的旋转角。顶点 A 与顶点 C 之间隔着两个中心角（A→B、B→C），所以把 A 转到 C 的最小旋转角 =2×30°=60°。换个算法验证：把 12 个顶点按位置编号 0～11，A 在第 0 位、C 在第 2 位，转 30° 时每个顶点移到相邻位置，要移 2 个位置就得转 2×30°=60°（小于 60° 的只有 30°，那会把 A 转到 B 的位置）。'
  },
  {
    id: 'q-rotation-17',
    kp: 'rotation',
    difficulty: 'basic',
    type: 'fill',
    stem: '如图，钟表的分针 OA 从指向刻度 12 的位置转到指向刻度 4 的位置，分针旋转的角度是（　）度。<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="钟表盘，圆心O，分针由刻度12顺时针转到刻度4（虚线），弧线标出分针转过的角，未标注度数"><circle cx="160" cy="120" r="90" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="36.3" x2="160" y2="30" stroke="currentColor" stroke-width="1.2"/><line x1="201.9" y1="47.5" x2="205" y2="42.1" stroke="currentColor" stroke-width="1.2"/><line x1="232.5" y1="78.2" x2="237.9" y2="75" stroke="currentColor" stroke-width="1.2"/><line x1="243.7" y1="120" x2="250" y2="120" stroke="currentColor" stroke-width="1.2"/><line x1="232.5" y1="161.8" x2="237.9" y2="165" stroke="currentColor" stroke-width="1.2"/><line x1="201.9" y1="192.5" x2="205" y2="197.9" stroke="currentColor" stroke-width="1.2"/><line x1="160" y1="203.7" x2="160" y2="210" stroke="currentColor" stroke-width="1.2"/><line x1="118.2" y1="192.5" x2="115" y2="197.9" stroke="currentColor" stroke-width="1.2"/><line x1="87.5" y1="161.8" x2="82.1" y2="165" stroke="currentColor" stroke-width="1.2"/><line x1="76.3" y1="120" x2="70" y2="120" stroke="currentColor" stroke-width="1.2"/><line x1="87.5" y1="78.1" x2="82.1" y2="75" stroke="currentColor" stroke-width="1.2"/><line x1="118.1" y1="47.5" x2="115" y2="42.1" stroke="currentColor" stroke-width="1.2"/><line x1="160" y1="120" x2="160" y2="50.1" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="120" x2="220.5" y2="154.9" stroke="currentColor" stroke-width="1.6" stroke-dasharray="5 4"/><circle cx="160" cy="120" r="2.6" fill="currentColor"/><circle cx="160" cy="50.1" r="2.6" fill="currentColor"/><circle cx="220.5" cy="154.9" r="2.6" fill="currentColor"/><text x="152" y="136" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">O</text><text x="172" y="42.1" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">A</text><text x="234.5" y="162.9" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">B</text><text x="160" y="18" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">12</text><text x="257" y="124" font-size="11.5" font-family="inherit" fill="currentColor">3</text><text x="63" y="124" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">9</text><text x="160" y="230" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">6</text></svg></figure>',
    answers: ['120'],
    explanation: '钟面被 12 个刻度均分，相邻两刻度之间是 360°÷12=30°。分针从 12 转到 4，走过 4 个刻度，旋转角 =4×30°=120°（顺时针方向）。也可以按分针每分钟转 360°÷60=6° 来算：12 到 4 是 20 分钟，20×6°=120°，两种算法结果一致。'
  },
  {
    id: 'q-rotation-18',
    kp: 'rotation',
    difficulty: 'basic',
    type: 'single',
    stem: '如图，△ABC 绕点 A 逆时针旋转 50° 得到 △AB′C′，若 ∠BAC=30°，则 ∠B′AC 的度数是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="三角形ABC绕点A逆时针旋转50°得三角形AB′C′，∠BAC=30°，∠BAB′=50°"><polygon points="70,190 202,190 160.1,138" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><polygon points="70,190 154.8,88.9 88.1,87.6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-dasharray="5 4"/><circle cx="70" cy="190" r="2.6" fill="currentColor"/><circle cx="202" cy="190" r="2.6" fill="currentColor"/><circle cx="160.1" cy="138" r="2.6" fill="currentColor"/><circle cx="154.8" cy="88.9" r="2.6" fill="currentColor"/><circle cx="88.1" cy="87.6" r="2.6" fill="currentColor"/><path d="M118,190 A48,48 0 0 0 100.9,153.2" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="150.5" y="152.5" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">50°</text><path d="M138.8,190 A68.8,68.8 0 0 0 129.6,155.6" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="153.1" y="167.7" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">30°</text><text x="62" y="202" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A</text><text x="209" y="196" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="167.1" y="140" font-size="13" font-family="inherit" fill="currentColor">C</text><text x="161.8" y="86.9" font-size="13" font-family="inherit" fill="currentColor">B′</text><text x="81.1" y="87.6" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">C′</text></svg></figure>',
    options: ['20°', '30°', '50°', '80°'],
    answer: 0,
    explanation: '旋转角是对应点与旋转中心连线的夹角，所以 ∠BAB′=50°。因为 ∠BAC=30°<50°，射线 AC 落在 ∠BAB′ 的内部，于是 ∠B′AC=∠BAB′−∠BAC=50°−30°=20°。注意不要把它当成 50°+30°=80°：AC′ 才是 AC 旋转后的位置，∠CAC′ 也等于旋转角 50°。选 A。'
  },
  {
    id: 'q-rotation-19',
    kp: 'rotation',
    difficulty: 'basic',
    type: 'fill',
    stem: '已知点 A(a, 3) 绕原点 O 旋转 180° 后得到点 B(−5, b)，则 a+b 的值是（　）。',
    answers: ['2'],
    explanation: '绕原点旋转 180° 的坐标规律是 (x, y)→(−x, −y)，所以 A(a, 3) 的对应点是 (−a, −3)。与 B(−5, b) 逐项对照：−a=−5 得 a=5；b=−3。于是 a+b=5+(−3)=2。复验：A(5, 3) 与 B(−5, −3) 关于原点对称，中点 ((5−5)/2, (3−3)/2)=(0, 0) 正是原点，|OA|=|OB|=√34。'
  },
  {
    id: 'q-rotation-20',
    kp: 'rotation',
    difficulty: 'basic',
    type: 'single',
    stem: '如图，风车的四片叶片绕中心 O 均匀分布，相邻两片叶片的夹角都是 90°。若叶片 OA 旋转到叶片 OC 的位置（A、O、C 三点共线），则旋转角是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="风车四片叶片绕中心O均匀分布（相邻叶片夹角90°），叶片OA转到OC（A、O、C共线），弧线标出旋转角，未标注度数"><polygon points="160,120 242,98 182,38" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><polygon points="160,120 138,38 78,98" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><polygon points="160,120 78,142 138,202" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><polygon points="160,120 182,202 242,142" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="160" y1="120" x2="242" y2="98" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><line x1="160" y1="120" x2="78" y2="142" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><circle cx="160" cy="120" r="2.6" fill="currentColor"/><text x="250" y="96" font-size="13" font-family="inherit" fill="currentColor">A</text><text x="70" y="144" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">C</text><text x="152" y="137" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">O</text></svg></figure>',
    options: ['90°', '180°', '270°', '360°'],
    answer: 1,
    explanation: '四片叶片把圆周 4 等分，相邻叶片夹角 360°÷4=90°。A 与 C 相差两片叶片的位置，即 2×90°=180°，所以叶片 OA 转到 OC 的旋转角是 180°（这时 A、O、C 三点共线，也说明它是中心对称）。选 B。'
  },
  {
    id: 'q-rotation-21',
    kp: 'rotation',
    difficulty: 'basic',
    type: 'fill',
    stem: '把点 B(−2, 5) 绕原点 O 沿逆时针方向转 270°，所得点 B′ 的坐标是（　）。（写成 (x, y) 的形式）',
    answers: ['(5,2)', '5,2'],
    explanation: '逆时针旋转 270° 与顺时针旋转 90° 是同一个变换（270°=360°−90°），用规律 (x, y)→(y, −x)：把 x=−2、y=5 代入得 B′(5, −(−2))=(5, 2)。复验：|OB|=√(4+25)=√29=|OB′|；OB·OB′=(−2)×5+5×2=0，两半径垂直，夹角 90°，正合「逆时针 270°（= 顺时针 90°）」；B 在第二象限、B′ 在第一象限，方向一致。'
  },
  {
    id: 'q-rotation-22',
    kp: 'rotation',
    difficulty: 'medium',
    type: 'fill',
    stem: '以点 M(−1, 2) 为旋转中心，把点 P(2, 1) 顺时针旋转 90°，点 P 的对应点 P′ 的坐标是（　）。提示：先求向量 MP，再按 (u, v)→(v, −u) 处理。（写成 (x, y) 的形式）',
    answers: ['(-2,-1)', '-2,-1'],
    explanation: '旋转中心不是原点，不能直接套原点公式，要先平移到以 M 为起点的向量。MP=(2−(−1), 1−2)=(3, −1)；绕中心顺时针旋转 90° 时向量规律是 (u, v)→(v, −u)，故 (3, −1)→(−1, −3)；再平移回去 P′=M+(−1, −3)=(−1−1, 2−3)=(−2, −1)。复验：|MP|=√(9+1)=√10=|MP′|，到旋转中心等距；MP·MP′=3×(−1)+(−1)×(−3)=0，夹角 90°；MP 方向约 −18°、MP′ 方向约 −108°，减小 90°，是顺时针。'
  },
  {
    id: 'q-rotation-23',
    kp: 'rotation',
    difficulty: 'medium',
    type: 'fill',
    stem: '△ABC 绕点 A 逆时针旋转 90° 后得到 △AB′C′，其中 AB=4，则点 B 与点 B′ 之间的距离是（　）。（结果可用根式）',
    answers: ['4√2', '√32'],
    explanation: '由旋转性质，对应点到旋转中心的距离相等，所以 AB′=AB=4；对应点与旋转中心连线的夹角等于旋转角，所以 ∠BAB′=90°。于是 △ABB′ 是等腰直角三角形，斜边 BB′=√(4<sup>2</sup>+4<sup>2</sup>)=√32=4√2。另一条思路：BB′ 是等腰直角三角形的斜边，等于直角边的 √2 倍，即 4√2。'
  },
  {
    id: 'q-rotation-24',
    kp: 'rotation',
    difficulty: 'medium',
    type: 'single',
    stem: '如图，在平面直角坐标系中，△ABC 的顶点为 A(1, 1)、B(4, 1)、C(1, 3)。把 △ABC 绕原点 O 顺时针旋转 90° 得到 △A′B′C′，则点 C′ 的坐标是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="平面直角坐标系，三角形ABC（A(1,1)、B(4,1)、C(1,3)）绕原点顺时针旋转90°得三角形A′B′C′（虚线），旋转角90°"><line x1="54" y1="206" x2="54" y2="14" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="78" y1="206" x2="78" y2="14" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="102" y1="206" x2="102" y2="14" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="126" y1="206" x2="126" y2="14" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="150" y1="206" x2="150" y2="14" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="174" y1="206" x2="174" y2="14" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="198" y1="206" x2="198" y2="14" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="222" y1="206" x2="222" y2="14" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="246" y1="206" x2="246" y2="14" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="54" y1="206" x2="246" y2="206" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="54" y1="182" x2="246" y2="182" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="54" y1="158" x2="246" y2="158" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="54" y1="134" x2="246" y2="134" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="54" y1="110" x2="246" y2="110" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="54" y1="86" x2="246" y2="86" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="54" y1="62" x2="246" y2="62" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="54" y1="38" x2="246" y2="38" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="54" y1="14" x2="246" y2="14" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="54" y1="110" x2="246" y2="110" stroke="currentColor" stroke-width="1.6"/><line x1="150" y1="206" x2="150" y2="14" stroke="currentColor" stroke-width="1.6"/><line x1="246" y1="110" x2="237" y2="114.5" stroke="currentColor" stroke-width="1.6"/><line x1="246" y1="110" x2="237" y2="105.5" stroke="currentColor" stroke-width="1.6"/><line x1="150" y1="14" x2="154.5" y2="23" stroke="currentColor" stroke-width="1.6"/><line x1="150" y1="14" x2="145.5" y2="23" stroke="currentColor" stroke-width="1.6"/><polygon points="174,86 246,86 174,38" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><polygon points="174,134 174,206 222,134" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-dasharray="5 4"/><circle cx="174" cy="86" r="2.6" fill="currentColor"/><circle cx="246" cy="86" r="2.6" fill="currentColor"/><circle cx="174" cy="38" r="2.6" fill="currentColor"/><circle cx="174" cy="134" r="2.6" fill="currentColor"/><circle cx="174" cy="206" r="2.6" fill="currentColor"/><circle cx="222" cy="134" r="2.6" fill="currentColor"/><circle cx="150" cy="110" r="2.6" fill="currentColor"/><path d="M156.1,91.8 A19.2,19.2 0 0 1 168.2,116.1" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="179.2" y="95.4" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">90°</text><text x="143" y="125" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">O</text><text x="166" y="82" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A</text><text x="253" y="92" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="166" y="34" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">C</text><text x="182" y="142" font-size="13" font-family="inherit" fill="currentColor">A′</text><text x="182" y="214" font-size="13" font-family="inherit" fill="currentColor">B′</text><text x="230" y="130" font-size="13" font-family="inherit" fill="currentColor">C′</text></svg></figure>',
    options: ['(3, −1)', '(−3, 1)', '(1, −3)', '(−1, 3)'],
    answer: 0,
    explanation: '旋转中心是原点，直接用坐标规律。顺时针旋转 90°：(x, y)→(y, −x)，故 C(1, 3)→C′(3, −1)。复验：|OC|=√(1+9)=√10=|OC′|；OC·OC′=1×3+3×(−1)=0，两半径垂直；C 在第一象限、C′ 在第四象限，由第一象限转到第四象限是顺时针，方向正确。若误用逆时针公式 (x, y)→(−y, x) 会得到 (−3, 1)，那是 B 选项，属于方向判断错误。选 A。'
  },
  {
    id: 'q-rotation-25',
    kp: 'rotation',
    difficulty: 'medium',
    type: 'fill',
    stem: '△ABC 绕某点旋转后得到 △A′B′C′（A→A′、B→B′、C→C′），若 ∠A=48°，∠B=65°，则 ∠C′ 的度数是（　）。',
    answers: ['67'],
    explanation: '旋转前后的图形全等，对应角相等，所以 ∠A′=∠A=48°、∠B′=∠B=65°。在 △A′B′C′ 中由三角形内角和定理：∠C′=180°−48°−65°=67°。也可以先在原三角形中求 ∠C=67°，再由旋转保角得 ∠C′=∠C=67°，两条路结果一致。'
  },
  {
    id: 'q-rotation-26',
    kp: 'rotation',
    difficulty: 'medium',
    type: 'fill',
    stem: '若点 A(2, 1) 与点 B(a, b) 关于原点 O 对称，且 a、b 是关于 x 的一元二次方程 x<sup>2</sup>+px+q=0 的两个根，则 p+q 的值是（　）。',
    answers: ['5'],
    explanation: '第一步用旋转（中心对称）求出 a、b：关于原点对称的坐标规律是 (x, y)→(−x, −y)，所以 B(−2, −1)，即 a=−2、b=−1。第二步用一元二次方程的根与系数的关系（韦达定理）：对 x<sup>2</sup>+px+q=0（二次项系数为 1），两根之和 x<sub>1</sub>+x<sub>2</sub>=−p，两根之积 x<sub>1</sub>x<sub>2</sub>=q。于是 −p=(−2)+(−1)=−3 得 p=3；q=(−2)×(−1)=2。所以 p+q=3+2=5。复验：方程 x<sup>2</sup>+3x+2=0 分解为 (x+1)(x+2)=0，两根恰为 −1、−2，正是 a、b。',
    tags: ['quad-eq']
  },
  {
    id: 'q-rotation-27',
    kp: 'rotation',
    difficulty: 'medium',
    type: 'fill',
    stem: '在平面直角坐标系中，点 A(1, 2) 与点 A′ 关于点 M(3, 1) 中心对称，则点 A′ 的坐标是（　）。（写成 (x, y) 的形式）',
    answers: ['(5,0)', '5,0'],
    explanation: '关于点 M 中心对称就是绕 M 旋转 180°，M 是线段 AA′ 的中点。设 A′(x, y)，则 (1+x)/2=3、(2+y)/2=1，解得 x=5、y=0，即 A′(5, 0)。复验：AM=√((1−3)<sup>2</sup>+(2−1)<sup>2</sup>)=√5，MA′=√((5−3)<sup>2</sup>+(0−1)<sup>2</sup>)=√5，到中心等距；A、M、A′ 两两连线的斜率都是 −1/2，三点共线，符合中心对称。'
  },
  {
    id: 'q-rotation-28',
    kp: 'rotation',
    difficulty: 'medium',
    type: 'fill',
    stem: '一个转盘被均匀分成 6 个扇形，其中 2 个扇形涂色。指针从某一位置出发，绕中心随机旋转 60° 的整数倍后停止，6 个扇形被指到的机会相同，则指针停在涂色扇形上的概率是（　）。',
    answers: ['1/3', '2/6'],
    explanation: '指针每次旋转 60° 的整数倍，圆周被 6 等分，所以共有 6 种等可能的停留结果，属于等可能事件。涂色扇形有 2 个，由等可能事件的概率公式 P(A)=m/n 得 P=2/6=1/3。这里的关键是「旋转 60° 的整数倍」保证 6 种结果两两互斥且机会均等（结果不等可能就不能直接套 m/n）。',
    tags: ['probability']
  },
  {
    id: 'q-rotation-29',
    kp: 'rotation',
    difficulty: 'medium',
    type: 'single',
    stem: '下列图形中，绕它的中心旋转 60° 后能与自身重合的是（　）',
    options: ['正方形', '正三角形', '正五边形', '正六边形'],
    answer: 3,
    explanation: '正 n 边形绕中心旋转 360°/n 的整数倍都能与自身重合。正方形 360°÷4=90°，正三角形 360°÷3=120°，正五边形 360°÷5=72°，正六边形 360°÷6=60°。只有正六边形的最小旋转角是 60°。选 D。'
  },
  {
    id: 'q-rotation-30',
    kp: 'rotation',
    difficulty: 'medium',
    type: 'fill',
    stem: '如图，△ABC 的顶点为 A(1, 0)、B(3, 0)、C(1, 2)。先把 △ABC 绕原点 O 旋转 180° 得到 △A′B′C′，再以原点 O 为位似中心、相似比为 2 作位似变换（对应点与 O 同侧）得到 △A″B″C″，则点 C″ 的坐标是（　）。（写成 (x, y) 的形式）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="平面直角坐标系，三角形ABC（A(1,0)、B(3,0)、C(1,2)）绕原点旋转180°得三角形A′B′C′（虚线），旋转角180°"><line x1="36" y1="178.4" x2="36" y2="21.6" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="64" y1="178.4" x2="64" y2="21.6" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="92" y1="178.4" x2="92" y2="21.6" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="120" y1="178.4" x2="120" y2="21.6" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="148" y1="178.4" x2="148" y2="21.6" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="176" y1="178.4" x2="176" y2="21.6" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="204" y1="178.4" x2="204" y2="21.6" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="16.4" y1="156" x2="223.6" y2="156" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="16.4" y1="128" x2="223.6" y2="128" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="16.4" y1="100" x2="223.6" y2="100" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="16.4" y1="72" x2="223.6" y2="72" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="16.4" y1="44" x2="223.6" y2="44" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="16.4" y1="100" x2="223.6" y2="100" stroke="currentColor" stroke-width="1.6"/><line x1="120" y1="178.4" x2="120" y2="21.6" stroke="currentColor" stroke-width="1.6"/><line x1="223.6" y1="100" x2="214.6" y2="104.5" stroke="currentColor" stroke-width="1.6"/><line x1="223.6" y1="100" x2="214.6" y2="95.5" stroke="currentColor" stroke-width="1.6"/><line x1="120" y1="21.6" x2="124.5" y2="30.6" stroke="currentColor" stroke-width="1.6"/><line x1="120" y1="21.6" x2="115.5" y2="30.6" stroke="currentColor" stroke-width="1.6"/><polygon points="148,100 204,100 148,44" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><polygon points="92,100 36,100 92,156" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-dasharray="5 4"/><circle cx="148" cy="100" r="2.6" fill="currentColor"/><circle cx="204" cy="100" r="2.6" fill="currentColor"/><circle cx="148" cy="44" r="2.6" fill="currentColor"/><circle cx="92" cy="100" r="2.6" fill="currentColor"/><circle cx="36" cy="100" r="2.6" fill="currentColor"/><circle cx="92" cy="156" r="2.6" fill="currentColor"/><circle cx="120" cy="100" r="2.6" fill="currentColor"/><path d="M143.8,100 A23.8,23.8 0 1 1 96.2,100" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="120" y="139.3" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">180°</text><text x="112" y="94" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">O</text><text x="154" y="92" font-size="13" font-family="inherit" fill="currentColor">A</text><text x="211" y="96" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="155" y="40" font-size="13" font-family="inherit" fill="currentColor">C</text><text x="85" y="96" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A′</text><text x="29" y="96" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">B′</text><text x="85" y="168" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">C′</text></svg></figure>',
    answers: ['(-2,-4)', '-2,-4'],
    explanation: '第一步，绕原点旋转 180°，用规律 (x, y)→(−x, −y)，C(1, 2)→C′(−1, −2)。第二步，以原点为位似中心、相似比 k=2 且对应点与 O 同侧，位似的坐标规律是 (x, y)→(kx, ky)，故 C′(−1, −2)→C″(−2, −4)。复验：位似比 k=2 意味着 OC″=2·OC′，|OC′|=√(1+4)=√5，|OC″|=√(4+16)=2√5，成立；且 C′、C″ 都在过 O 的同一条射线上，符合位似的定义。',
    tags: ['similarity']
  },
  {
    id: 'q-rotation-31',
    kp: 'rotation',
    difficulty: 'medium',
    type: 'fill',
    stem: '把 △ABC 绕点 A 旋转 70° 得到 △AB′C′，若 AB=AB′，则 ∠AB′B 的度数是（　）。',
    answers: ['55'],
    explanation: '由旋转性质，AB′=AB，∠BAB′ 等于旋转角 70°。于是 △ABB′ 是等腰三角形（AB=AB′），两个底角相等：∠AB′B=∠ABB′=(180°−70°)÷2=55°。注意顶点是 A，70° 是顶角，底角要用 (180°−顶角)÷2，不能直接把 70° 除以 2。'
  },
  {
    id: 'q-rotation-32',
    kp: 'rotation',
    difficulty: 'medium',
    type: 'single',
    stem: '把 △ABC 旋转得到 △DEF（A→D、B→E、C→F），分别作线段 AD、BE、CF 的垂直平分线，则这三条直线的交点一定是（　）',
    options: ['旋转中心', '△ABC 的重心', '△ABC 的外心', '△ABC 内部的任意一点'],
    answer: 0,
    explanation: '旋转性质：对应点到旋转中心的距离相等，如 OA=OD，所以旋转中心 O 在线段 AD 的垂直平分线上；同理 O 也在 BE、CF 的垂直平分线上。三条垂直平分线因此交于旋转中心，这也是「已知旋转前后的图形、找旋转中心」的标准作图法：连对应点、作垂直平分线、取交点。重心是三条中线的交点，外心是三边垂直平分线的交点，都与对应点连线无关。选 A。'
  },
  {
    id: 'q-rotation-33',
    kp: 'rotation',
    difficulty: 'medium',
    type: 'single',
    stem: '在 Rt△ABC 中，∠ACB=90°，∠A=30°，把 △ABC 绕点 C 顺时针旋转得到 △A′B′C。若点 A′ 落在边 AB 上，则旋转角的度数是（　）',
    options: ['30°', '60°', '90°', '120°'],
    answer: 3,
    explanation: '旋转后 CA′=CA，所以 △CAA′ 是等腰三角形，两个底角相等。A′ 在 AB 上，故 ∠CAA′=∠CAB=30°，于是 ∠CA′A=30°，顶角 ∠ACA′=180°−30°−30°=120°。旋转角就是对应点与旋转中心连线的夹角 ∠ACA′=120°。选 D。'
  },
  {
    id: 'q-rotation-34',
    kp: 'rotation',
    difficulty: 'medium',
    type: 'fill',
    stem: '点 A(3, −1) 绕点 P(1, 1) 旋转 180° 后落在 A′ 处，则 A′ 的坐标是（　）。（写成 (x, y) 的形式）',
    answers: ['(-1,3)', '-1,3'],
    explanation: '绕点 P 旋转 180° 就是关于点 P 中心对称，P 是线段 AA′ 的中点。设 A′(x, y)，则 (3+x)/2=1、(−1+y)/2=1，解得 x=−1、y=3，即 A′(−1, 3)。复验：PA=√((3−1)<sup>2</sup>+(−1−1)<sup>2</sup>)=√8，PA′=√((−1−1)<sup>2</sup>+(3−1)<sup>2</sup>)=√8，等距；A、P、A′ 斜率都是 (1−(−1))/(1−3)=−1 与 (3−1)/(−1−1)=−1，三点共线。'
  },
  {
    id: 'q-rotation-35',
    kp: 'rotation',
    difficulty: 'medium',
    type: 'fill',
    stem: '⊙O 的半径为 3，直线 l 与 ⊙O 相切于点 A。把直线 l 绕点 A 旋转 60° 得到直线 l′，则圆心 O 到直线 l′ 的距离是（　）。',
    answers: ['1.5', '3/2'],
    explanation: '由切线的性质，切线垂直于过切点的半径，所以 OA⊥l，圆心 O 到 l 的距离就是 OA=3。把 l 绕点 A 旋转 60°（A 始终在 l′ 上，OA 不动），l′ 与 OA 的夹角由 90° 变成 90°−60°=30°。在由 O、A 和 O 到 l′ 的垂足构成的直角三角形中，OA 是斜边，所求距离 =OA·sin30°=3×1/2=1.5。建系复验：取 O(0,0)、A(3,0)，则 l 为 x=3；把方向向量 (0,1) 旋转 60° 得 (−√3/2, 1/2)，l′ 的单位法向量取 (1/2, √3/2)，O 到 l′ 的距离 =|(0−3)×(1/2)|=1.5。',
    tags: ['circle']
  },
  {
    id: 'q-rotation-36',
    kp: 'rotation',
    difficulty: 'hard',
    type: 'fill',
    stem: '点 A(3, 1) 绕点 M(1, −2) 逆时针旋转 90° 后与点 A′ 重合，则 A′ 的坐标是（　）。（写成 (x, y) 的形式）',
    answers: ['(-2,0)', '-2,0'],
    explanation: '先化成以 M 为起点的向量：MA=(3−1, 1−(−2))=(2, 3)。绕中心逆时针旋转 90° 的向量规律是 (u, v)→(−v, u)，故 (2, 3)→(−3, 2)。再平移回去 A′=M+(−3, 2)=(1−3, −2+2)=(−2, 0)。复验：|MA|=√(4+9)=√13=|MA′|；MA·MA′=2×(−3)+3×2=0，两向量垂直；MA 方向约 56°、MA′ 方向约 146°，增大 90°，是逆时针。'
  },
  {
    id: 'q-rotation-37',
    kp: 'rotation',
    difficulty: 'hard',
    type: 'single',
    stem: '点 C(4, −1) 绕原点 O 顺时针旋转 270° 后得到的点是（　）',
    options: ['(1, 4)', '(−1, −4)', '(−4, 1)', '(4, 1)'],
    answer: 0,
    explanation: '顺时针旋转 270° 等价于逆时针旋转 90°（270°+90°=360°），所以用逆时针 90° 的规律 (x, y)→(−y, x)：C(4, −1)→(1, 4)。复验：|OC|=√(16+1)=√17=|OC′|；OC·OC′=4×1+(−1)×4=0，两半径垂直，夹角 90°；OC 方向约 −14°、OC′ 方向约 76°，增大 90°（逆时针 90°），正合「顺时针 270°」。若误用顺时针 90° 的公式 (x, y)→(y, −x) 会得到 (−1, −4)，那是 B 选项，属于把 270° 当成 90° 的典型错误。选 A。'
  },
  {
    id: 'q-rotation-38',
    kp: 'rotation',
    difficulty: 'hard',
    type: 'fill',
    stem: '把抛物线 y=2x<sup>2</sup>−4x+1 的图象绕原点 O 旋转 180°，所得图象的顶点坐标是（　）。（写成 (x, y) 的形式）',
    answers: ['(-1,1)', '-1,1'],
    explanation: '先用二次函数的顶点公式求原顶点：对称轴 x=−b/(2a)=−(−4)/(2×2)=1，代入得 y=2×1<sup>2</sup>−4×1+1=−1，顶点为 (1, −1)。绕原点旋转 180° 时图上每一点 (x, y) 都变成 (−x, −y)，顶点也随之变成 (−1, 1)，开口由向上变为向下。用解析式复验：把 x→−x、y→−y 代入 2x<sup>2</sup>−4x+1，得 −y=2x<sup>2</sup>+4x+1，即 y=−2x<sup>2</sup>−4x−1；其对称轴 x=−(−4)/(2×(−2))=−1，把 x=−1 代入得 y=−2+4−1=1，顶点仍是 (−1, 1)。',
    tags: ['quad-func']
  },
  {
    id: 'q-rotation-39',
    kp: 'rotation',
    difficulty: 'hard',
    type: 'single',
    stem: '把抛物线 y=x<sup>2</sup>−2x+3 的图象绕原点 O 旋转 180°，所得图象对应的函数解析式是（　）',
    options: ['y=−x<sup>2</sup>−2x−3', 'y=−x<sup>2</sup>+2x−3', 'y=x<sup>2</sup>+2x+3', 'y=−x<sup>2</sup>−2x+3'],
    answer: 0,
    explanation: '绕原点旋转 180° 把图象上的点 (x, y) 送到 (−x, −y)，所以新图象满足：把原式中的 x 换成 −x、y 换成 −y 后仍然成立。由 y=x<sup>2</sup>−2x+3 得 −y=(−x)<sup>2</sup>−2(−x)+3=x<sup>2</sup>+2x+3，两边乘 −1 得 y=−x<sup>2</sup>−2x−3。归纳规律：一般式 y=ax<sup>2</sup>+bx+c 绕原点旋转 180° 后变成 y=−ax<sup>2</sup>+bx−c；本题 a=1、b=−2、c=3，得 y=−x<sup>2</sup>+(−2)x−3=−x<sup>2</sup>−2x−3。用顶点复验：原抛物线对称轴 x=1、顶点 (1, 2)，旋转 180° 后顶点应为 (−1, −2)；而 y=−x<sup>2</sup>−2x−3 的对称轴 x=−1、顶点 (−1, −2)，完全吻合。选 A。',
    tags: ['quad-func']
  },
  {
    id: 'q-rotation-40',
    kp: 'rotation',
    difficulty: 'hard',
    type: 'fill',
    stem: '如图，△A′B′C′ 是 △ABC 绕某一点旋转 90° 得到的，则旋转中心的坐标是（　）。（写成 (x, y) 的形式）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="平面直角坐标系，三角形A′B′C′是三角形ABC绕某点逆时针旋转90°得到的，AA′、BB′为虚线，旋转角90°"><line x1="40" y1="144" x2="40" y2="12" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="70" y1="144" x2="70" y2="12" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="100" y1="144" x2="100" y2="12" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="130" y1="144" x2="130" y2="12" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="160" y1="144" x2="160" y2="12" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="190" y1="144" x2="190" y2="12" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="220" y1="144" x2="220" y2="12" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="22" y1="120" x2="238" y2="120" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="22" y1="90" x2="238" y2="90" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="22" y1="60" x2="238" y2="60" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="22" y1="30" x2="238" y2="30" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/><line x1="22" y1="150" x2="238" y2="150" stroke="currentColor" stroke-width="1.6"/><line x1="100" y1="144" x2="100" y2="12" stroke="currentColor" stroke-width="1.6"/><line x1="238" y1="150" x2="229" y2="154.5" stroke="currentColor" stroke-width="1.6"/><line x1="238" y1="150" x2="229" y2="145.5" stroke="currentColor" stroke-width="1.6"/><line x1="100" y1="12" x2="104.5" y2="21" stroke="currentColor" stroke-width="1.6"/><line x1="100" y1="12" x2="95.5" y2="21" stroke="currentColor" stroke-width="1.6"/><polygon points="190,120 220,60 190,30" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><polygon points="130,60 70,30 40,60" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-dasharray="5 4"/><line x1="190" y1="120" x2="130" y2="60" stroke="currentColor" stroke-width="1.0" stroke-dasharray="5 4"/><line x1="220" y1="60" x2="70" y2="30" stroke="currentColor" stroke-width="1.0" stroke-dasharray="5 4"/><circle cx="190" cy="120" r="2.6" fill="currentColor"/><circle cx="220" cy="60" r="2.6" fill="currentColor"/><circle cx="190" cy="30" r="2.6" fill="currentColor"/><circle cx="130" cy="60" r="2.6" fill="currentColor"/><circle cx="70" cy="30" r="2.6" fill="currentColor"/><circle cx="40" cy="60" r="2.6" fill="currentColor"/><circle cx="100" cy="150" r="2.6" fill="currentColor"/><path d="M154,120 A24,24 0 0 0 130,96" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="157.2" y="92.8" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">90°</text><text x="94" y="164" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">O</text><text x="197" y="128" font-size="13" font-family="inherit" fill="currentColor">A</text><text x="227" y="64" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="197" y="28" font-size="13" font-family="inherit" fill="currentColor">C</text><text x="123" y="62" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A′</text><text x="63" y="28" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">B′</text><text x="33" y="62" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">C′</text></svg></figure>',
    answers: ['(1,1)', '1,1'],
    explanation: '旋转中心到每一对对应点的距离相等，所以它在线段 AA′ 的垂直平分线上，也在 BB′ 的垂直平分线上，两线交点即为旋转中心。A(3, 1)、A′(1, 3)：中点 (2, 2)，AA′ 的斜率 (3−1)/(1−3)=−1，故垂直平分线斜率为 1，方程 y=x；B(4, 3)、B′(−1, 4)：中点 (1.5, 3.5)，BB′ 的斜率 (4−3)/(−1−4)=−1/5，故垂直平分线斜率为 5，方程 y−3.5=5(x−1.5)，即 y=5x−4。联立 y=x 与 y=5x−4：x=5x−4 得 x=1、y=1，所以旋转中心是 (1, 1)。复验：P(1,1) 到 A(3,1) 的距离为 2，到 A′(1,3) 的距离也是 2；PA 方向 (2,0)、PA′ 方向 (0,2)，夹角 90°，与题设旋转角一致。'
  },
  {
    id: 'q-rotation-41',
    kp: 'rotation',
    difficulty: 'hard',
    type: 'fill',
    stem: '如图，⊙O 的半径为 3，PA 切 ⊙O 于点 P，PA=4。把 PA 绕点 P 逆时针旋转 90° 得到 PA′，则线段 OA′ 的长是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="圆O半径为3，PA切圆O于点P，PA=4，把PA绕点P逆时针旋转90°得PA′，A、O、P三点共线，旋转角90°"><circle cx="120" cy="140" r="84" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="120" y1="140" x2="204" y2="140" stroke="currentColor" stroke-width="1.6"/><line x1="204" y1="140" x2="204" y2="28" stroke="currentColor" stroke-width="1.6"/><line x1="204" y1="140" x2="92" y2="140" stroke="currentColor" stroke-width="1.6" stroke-dasharray="5 4"/><circle cx="120" cy="140" r="2.6" fill="currentColor"/><circle cx="204" cy="140" r="2.6" fill="currentColor"/><circle cx="204" cy="28" r="2.6" fill="currentColor"/><circle cx="92" cy="140" r="2.6" fill="currentColor"/><path d="M204,116.2 A23.8,23.8 0 0 0 180.2,140" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="178.8" y="114.8" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">90°</text><text x="112" y="156" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">O</text><text x="210" y="156" font-size="13" font-family="inherit" fill="currentColor">P</text><text x="211" y="30" font-size="13" font-family="inherit" fill="currentColor">A</text><text x="85" y="156" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A′</text><text x="162" y="133" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">3</text><text x="210" y="88" font-size="11.5" font-family="inherit" fill="currentColor">4</text></svg></figure>',
    answers: ['1'],
    explanation: '由切线的性质，切线垂直于过切点的半径，所以 ∠OPA=90°，即 PA⊥OP。把 PA 绕点 P 逆时针旋转 90° 后 PA′⊥PA，而 OP 也垂直于 PA，故 PA′ 与 OP 在同一条直线上，即 A′、O、P 三点共线。由旋转 PA′=PA=4，PO=3，图中 A′ 落在 O 的另一侧，所以 OA′=PA′−PO=4−3=1。建系复验：O(0,0)、P(3,0)，则 A(3,4)；把向量 PA=(0,4) 逆时针旋转 90° 得 (−4,0)，A′=P+(−4,0)=(−1,0)，故 OA′=1。',
    tags: ['circle']
  },
  {
    id: 'q-rotation-42',
    kp: 'rotation',
    difficulty: 'hard',
    type: 'fill',
    stem: '先把 △ABC 绕原点 O 转 180°，再把所得的图形以 O 为位似中心缩小为原来的 1/2（对应点与 O 同侧），得到 △A″B″C″。若 △ABC 的面积为 12，求 △A″B″C″ 的面积（　）。',
    answers: ['3'],
    explanation: '第一步绕原点旋转 180° 是全等变换，形状大小都不变，所以 △A′B′C′ 与 △ABC 全等，面积仍为 12。第二步是以 O 为位似中心的位似变换，相似比 k=1/2，位似图形必相似，而相似三角形的面积比等于相似比的平方：S″/S′=k<sup>2</sup>=(1/2)<sup>2</sup>=1/4，所以 S″=12×1/4=3。注意常见错误是直接用相似比乘面积（12×1/2=6），面积要用相似比的平方。',
    tags: ['similarity']
  },
  {
    id: 'q-rotation-43',
    kp: 'rotation',
    difficulty: 'hard',
    type: 'fill',
    stem: '如图，⊙O 的半径为 5，弦 AB=8。把弦 AB 绕圆心 O 旋转 90° 得到弦 A′B′，两弦所在直线交于点 P，则 OP 的长是（　）。（结果可用根式）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="圆O半径5，弦AB长8，把弦AB绕圆心旋转90°得弦A′B′，两弦所在直线交于点P，旋转角90°"><circle cx="160" cy="120" r="80" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="224" y1="72" x2="96" y2="72" stroke="currentColor" stroke-width="1.6"/><line x1="112" y1="56" x2="112" y2="184" stroke="currentColor" stroke-width="1.6" stroke-dasharray="5 4"/><circle cx="160" cy="120" r="2.6" fill="currentColor"/><circle cx="224" cy="72" r="2.6" fill="currentColor"/><circle cx="96" cy="72" r="2.6" fill="currentColor"/><circle cx="112" cy="56" r="2.6" fill="currentColor"/><circle cx="112" cy="184" r="2.6" fill="currentColor"/><circle cx="112" cy="72" r="2.2" fill="currentColor"/><path d="M215,78.7 A68.8,68.8 0 0 0 118.7,65" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="175.1" y="14.4" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">90°</text><text x="152" y="135" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">O</text><text x="231" y="76" font-size="13" font-family="inherit" fill="currentColor">A</text><text x="89" y="76" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">B</text><text x="119" y="54" font-size="13" font-family="inherit" fill="currentColor">A′</text><text x="105" y="182" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">B′</text><text x="119" y="70" font-size="13" font-family="inherit" fill="currentColor">P</text></svg></figure>',
    answers: ['3√2', '√18'],
    explanation: '由垂径定理搭建的勾股关系：半径 r=5、半弦 8÷2=4，得圆心 O 到弦 AB 的距离 √(5<sup>2</sup>−4<sup>2</sup>)=3。旋转是保距变换，弦 A′B′ 与 AB 等长、到圆心的距离也相等，都是 3；又旋转角是 90°，两条弦所在直线互相垂直。设 O 到两直线的垂足分别为 E、F，则四边形 OEPF 中 ∠OEP=∠OFP=∠EPF=90°，是矩形，而 OE=OF=3，故为正方形，OP 就是它的对角线，OP=√(3<sup>2</sup>+3<sup>2</sup>)=3√2（即 √18）。建系复验：O(0,0)，弦 AB 取 y=3，旋转 90° 后弦 A′B′ 取 x=−3，交点 P(−3,3)，OP=√(9+9)=3√2。',
    tags: ['circle']
  },
  {
    id: 'q-rotation-44',
    kp: 'rotation',
    difficulty: 'hard',
    type: 'fill',
    stem: '某转盘 8 等分（圆心角都是 45°），其中 3 份涂色。指针自某刻度起，绕中心随机转过 45° 的 1 至 8 倍，八种倍数机会相同，停下时指针落在涂色区域内的可能性有多大（　）。',
    answers: ['3/8', '0.375'],
    explanation: '指针旋转 45° 的整数倍（1 倍到 8 倍）共有 8 种等可能结果，恰好一一对应转盘的 8 个扇形，所以这是等可能事件。涂色扇形有 3 个，由 P(A)=m/n 得 P=3/8=0.375。关键在「旋转 45° 的整数倍」：45°×8=360° 回到原位置，8 种结果互不重复且机会均等；结果个数与扇形个数相等，不能用别的数作分母。',
    tags: ['probability']
  },
  {
    id: 'q-rotation-45',
    kp: 'rotation',
    difficulty: 'hard',
    type: 'single',
    stem: '下列关于图形变换的说法中，正确的是（　）',
    options: ['把一个图形绕某一点转动一个角度，这种变换叫旋转', '把一张纸片折叠使两部分重合，这种变换属于旋转', '旋转会改变图形的形状，但不改变大小', '旋转后的图形与原图形不一定全等'],
    answer: 0,
    explanation: '旋转是把一个图形绕某一点按某个方向转动一个角度的变换，由旋转中心、旋转方向、旋转角三要素确定，A 正确。折叠是轴对称（翻折）变换，折痕是对称轴，不是绕某点转动，B 错。旋转是保形变换：对应线段相等、对应角相等，形状和大小都不变，旋转前后的图形一定全等，所以 C、D 都错。选 A。'
  },
  {
    id: 'q-rotation-46',
    kp: 'rotation',
    difficulty: 'hard',
    type: 'fill',
    stem: '如图，等腰三角形 ABC 中 AB=AC，顶角 ∠BAC=40°。将它绕顶点 A 逆时针转到 △AB′C′ 的位置（旋转角 80°），连 BB′，那么 ∠BB′C=（　）。<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="三角形ABC中AB=AC、∠BAC=40°，绕点A逆时针旋转80°得三角形AB′C′（虚线），连BB′，旋转角80°"><polygon points="150,210 250,210 226.6,145.7" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><polygon points="150,210 167.4,111.5 100,123.4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-dasharray="5 4"/><line x1="250" y1="210" x2="167.4" y2="111.5" stroke="currentColor" stroke-width="1.2"/><circle cx="150" cy="210" r="2.6" fill="currentColor"/><circle cx="250" cy="210" r="2.6" fill="currentColor"/><circle cx="226.6" cy="145.7" r="2.6" fill="currentColor"/><circle cx="167.4" cy="111.5" r="2.6" fill="currentColor"/><circle cx="100" cy="123.4" r="2.6" fill="currentColor"/><path d="M182,210 A32,32 0 0 0 155.6,178.5" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="199" y="168.9" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">80°</text><text x="142" y="218" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A</text><text x="257" y="218" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="233.6" y="149.7" font-size="13" font-family="inherit" fill="currentColor">C</text><text x="175.4" y="109.5" font-size="13" font-family="inherit" fill="currentColor">B′</text><text x="92" y="123.4" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">C′</text></svg></figure>',
    answers: ['20'],
    explanation: '由旋转 AB′=AB=AC，∠BAB′=80°。在等腰 △ABB′ 中，∠AB′B=(180°−80°)÷2=50°。又 ∠B′AC=∠BAB′−∠BAC=80°−40°=40°，而 AB′=AB=AC，所以 △AB′C 是等腰三角形，∠AB′C=(180°−40°)÷2=70°。射线 B′B 落在 ∠AB′C 的内部，故 ∠BB′C=∠AB′C−∠AB′B=70°−50°=20°。建系复验：A(0,0)、B(1,0)、C(cos40°, sin40°)，B′=rot(B,80°)，算得 ∠BB′C=20°。'
  },
  {
    id: 'q-rotation-47',
    kp: 'rotation',
    difficulty: 'hard',
    type: 'fill',
    stem: '钟表在 8:30 时，时针与分针所夹的锐角是（　）度。',
    answers: ['75'],
    explanation: '分针每分钟转 360°÷60=6°，30 分钟转 30×6°=180°，8:30 时指向 6。时针每分钟转 360°÷(12×60)=0.5°，8:00 时指向 8（即 8×30°=240° 处），30 分钟又转 30×0.5°=15°，所以 8:30 时在 240°+15°=255° 处。两针夹角 =|255°−180°|=75°，小于 180°，即为所求锐角（若是 285° 则取 360°−285°=75°，结果相同）。'
  },
  {
    id: 'q-rotation-48',
    kp: 'rotation',
    difficulty: 'hard',
    type: 'fill',
    stem: '如图，等边三角形 ABC 内有一点 P，且 PA、PB、PC 的长依次为 3、4、5，则 ∠APB 的度数是多少（　）。<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="等边三角形ABC内一点P，PA=3、PB=4、PC=5，把点P绕点A逆时针旋转60°得P′，连AP′、CP′、PP′（虚线），旋转角60°"><polygon points="45,218 248,218 146.5,42.2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="131" y1="191.4" x2="45" y2="218" stroke="currentColor" stroke-width="1.6"/><line x1="131" y1="191.4" x2="248" y2="218" stroke="currentColor" stroke-width="1.6"/><line x1="131" y1="191.4" x2="146.5" y2="42.2" stroke="currentColor" stroke-width="1.6"/><line x1="45" y1="218" x2="65" y2="130.2" stroke="currentColor" stroke-width="1.0" stroke-dasharray="5 4"/><line x1="146.5" y1="42.2" x2="65" y2="130.2" stroke="currentColor" stroke-width="1.0" stroke-dasharray="5 4"/><line x1="131" y1="191.4" x2="65" y2="130.2" stroke="currentColor" stroke-width="1.0" stroke-dasharray="5 4"/><circle cx="45" cy="218" r="2.6" fill="currentColor"/><circle cx="248" cy="218" r="2.6" fill="currentColor"/><circle cx="146.5" cy="42.2" r="2.6" fill="currentColor"/><circle cx="131" cy="191.4" r="2.6" fill="currentColor"/><circle cx="65" cy="130.2" r="2.6" fill="currentColor"/><path d="M79.4,207.4 A36,36 0 0 0 53,182.9" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="86.6" y="173.1" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">60°</text><text x="38" y="228" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A</text><text x="255" y="228" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="146.5" y="34.2" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">C</text><text x="123" y="199.4" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">P</text><text x="72" y="130.2" font-size="13" font-family="inherit" fill="currentColor">P′</text><text x="82" y="206.7" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">3</text><text x="189.5" y="220.7" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">4</text><text x="144.7" y="114.8" font-size="11.5" font-family="inherit" fill="currentColor">5</text></svg></figure>',
    answers: ['150'],
    explanation: '构造旋转：把 △ABP 绕点 A 逆时针旋转 60° 得到 △ACP′（等边三角形中 AB 旋转 60° 恰好与 AC 重合）。于是 AP′=AP=3，CP′=BP=4，∠PAP′=60°，所以 △APP′ 是等边三角形，PP′=3 且 ∠AP′P=60°。在 △PCP′ 中，PC=5、CP′=4、PP′=3，而 3<sup>2</sup>+4<sup>2</sup>=9+16=25=5<sup>2</sup>，由勾股定理的逆定理得 ∠CP′P=90°。旋转不改变角的大小，故 ∠APB=∠AP′C=∠AP′P+∠CP′P=60°+90°=150°。'
  },
  {
    id: 'q-rotation-49',
    kp: 'rotation',
    difficulty: 'hard',
    type: 'single',
    stem: '在平面直角坐标系中，把点 A(−1, 3) 绕点 M(2, 1) 按顺时针方向旋转 90°，点 A 的像是（　）',
    options: ['(4, 4)', '(0, −2)', '(3, 1)', '(−3, −1)'],
    answer: 0,
    explanation: '先化成以 M 为起点的向量：MA=(−1−2, 3−1)=(−3, 2)。绕中心顺时针旋转 90° 的向量规律是 (u, v)→(v, −u)，故 (−3, 2)→(2, 3)。再平移回去 A′=M+(2, 3)=(2+2, 1+3)=(4, 4)。复验：|MA|=√(9+4)=√13=|MA′|；MA·MA′=(−3)×2+2×3=0，两向量垂直；MA 方向约 146°、MA′ 方向约 56°，减小 90°，是顺时针。干扰项 (0, −2) 是把方向做成逆时针的结果，选 A。'
  },
  {
    id: 'q-rotation-50',
    kp: 'rotation',
    difficulty: 'hard',
    type: 'single',
    stem: '在 △ABC 中，∠ACB=90°，AC=6，BC=8。把 △ABC 绕点 C 顺时针旋转 90° 得到 △A′B′C，则点 A 与点 B′ 之间的距离是（　）',
    options: ['2', '4', '6', '10'],
    answer: 0,
    explanation: '建系：取 C(0,0)，CB 方向为 y 轴正方向，则 A(6, 0)、B(0, 8)。绕 C 顺时针旋转 90° 的坐标规律是 (x, y)→(y, −x)：A(6, 0)→A′(0, −6)，B(0, 8)→B′(8, 0)。所以 A(6, 0) 与 B′(8, 0) 都在 x 轴上，AB′=8−6=2。也可以用旋转性质直接算：CB′=CB=8 且 ∠BCB′=90°，即 CB′⊥CB；而 CA⊥CB，故 CA 与 CB′ 在同一条直线上且同向，所以 AB′=CB′−CA=8−6=2。选 A。'
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
  /* ===== v4 新增：circle 13–21（basic 9 题） ===== */
  {
    id: 'q-circle-13',
    kp: 'circle',
    difficulty: 'basic',
    type: 'fill',
    stem: '⊙O 的半径是 4，则 ⊙O 的周长是（　）（结果保留 π）。',
    answers: ['8π'],
    explanation: '圆的周长 C=2πr=2π×4=8π。注意两处易错：一是把半径当直径直接用 4π；二是与面积 πr<sup>2</sup>=16π 混淆。'
  },
  {
    id: 'q-circle-14',
    kp: 'circle',
    difficulty: 'basic',
    type: 'single',
    stem: '已知 ⊙O 的半径是 5，点 P 到圆心 O 的距离 OP=3，则点 P 与 ⊙O 的位置关系是（　）',
    options: ['点 P 在 ⊙O 上', '点 P 在 ⊙O 内', '点 P 在 ⊙O 外', '无法确定'],
    answer: 1,
    explanation: '点与圆的位置关系由 d=OP 与半径 r 的大小决定：d<r 时点在圆内，d=r 时点在圆上，d>r 时点在圆外。这里 d=3<r=5，所以点 P 在 ⊙O 内。选 B。'
  },
  {
    id: 'q-circle-15',
    kp: 'circle',
    difficulty: 'basic',
    type: 'single',
    stem: '四边形 ABCD 内接于 ⊙O，若 ∠A=70°，则 ∠C 的度数是（　）',
    options: ['70°', '140°', '110°', '20°'],
    answer: 2,
    explanation: '圆内接四边形的对角互补，即 ∠A+∠C=180°，所以 ∠C=180°−70°=110°。选 C。易错：误按平行四边形对角相等答 70°。'
  },
  {
    id: 'q-circle-16',
    kp: 'circle',
    difficulty: 'basic',
    type: 'fill',
    stem: '钟表的时针长 6 cm，时针从 12 点整走到 2 点整，时针针尖走过的弧长是（　）cm（结果保留 π）。',
    answers: ['2π'],
    explanation: '时针 2 小时转过 2×30°=60°。把针尖轨迹看作半径 6 的圆弧，由弧长公式 l=nπr/180=60×π×6/180=2π（cm）。也可理解为 60° 占整圆的 1/6，整圆周长为 2π×6=12π，其 1/6 即 2π。'
  },
  {
    id: 'q-circle-17',
    kp: 'circle',
    difficulty: 'basic',
    type: 'single',
    stem: 'PA 切 ⊙O 于点 A，若 ∠APO=25°，则 ∠AOP 的度数是（　）',
    options: ['65°', '25°', '75°', '115°'],
    answer: 0,
    explanation: '切线的性质：切线垂直于过切点的半径，故 OA⊥PA，∠OAP=90°。在 Rt△OAP 中，∠AOP=180°−90°−25°=65°。选 A。'
  },
  {
    id: 'q-circle-18',
    kp: 'circle',
    difficulty: 'basic',
    type: 'single',
    stem: '一个正六边形的边长是 6，则它的外接圆半径是（　）',
    options: ['3', '6√3', '3√3', '6'],
    answer: 3,
    explanation: '正六边形的中心角为 60°，中心与相邻两顶点构成的三角形是等边三角形，因此正六边形的外接圆半径等于它的边长，即 6。选 D。（若问边心距，则为 6×√3/2=3√3，注意区分。）'
  },
  {
    id: 'q-circle-19',
    kp: 'circle',
    difficulty: 'basic',
    type: 'fill',
    stem: '直角三角形的斜边长是 10，则这个直角三角形的外接圆半径是（　）。',
    answers: ['5'],
    explanation: '直径所对的圆周角是直角，反过来，直角三角形的外心就是斜边的中点，斜边即外接圆的直径，所以外接圆半径 R=斜边÷2=10÷2=5。'
  },
  {
    id: 'q-circle-20',
    kp: 'circle',
    difficulty: 'basic',
    type: 'fill',
    stem: '如图，AB 是 ⊙O 的弦，OD⊥AB 于点 D，OD=6，AB=16，则 ⊙O 的半径 OA 的长是（　）。<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="圆O中AB为弦，OD垂直于AB于D，OD=6，AB=16"><circle cx="160" cy="120" r="80" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="96" y1="72" x2="224" y2="72" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="120" x2="96" y2="72" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="120" x2="224" y2="72" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="120" x2="160" y2="72" stroke="currentColor" stroke-width="1.6"/><path d="M148,72 L148,84 L160,84" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="160" cy="120" r="2.6" fill="currentColor"/><circle cx="96" cy="72" r="2.6" fill="currentColor"/><circle cx="224" cy="72" r="2.6" fill="currentColor"/><circle cx="160" cy="72" r="2.6" fill="currentColor"/><text x="86" y="66" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A</text><text x="232" y="66" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="168" y="138" font-size="13" font-family="inherit" fill="currentColor">O</text><text x="168" y="62" font-size="13" font-family="inherit" fill="currentColor">D</text><text x="150" y="100" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">OD=6</text><text x="160" y="44" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">AB=16</text></svg></figure>',
    answers: ['10'],
    explanation: '由垂径定理，OD⊥AB 时 D 是 AB 的中点，故 AD=½AB=8。在 Rt△OAD 中由勾股定理：OA<sup>2</sup>=OD<sup>2</sup>+AD<sup>2</sup>=6<sup>2</sup>+8<sup>2</sup>=36+64=100，所以 OA=10。'
  },
  {
    id: 'q-circle-21',
    kp: 'circle',
    difficulty: 'basic',
    type: 'fill',
    stem: '在 ⊙O 中，弦 AB 与弦 CD 满足 弧AB=弧CD，若 AB=7，则 CD=（　）。',
    answers: ['7'],
    explanation: '在同圆中，相等的弧所对的弦相等（弧、弦、圆心角三者一一对应，即等弧对等弦），所以 CD=AB=7。'
  },
  /* ===== v4 新增：circle 22–35（medium 14 题） ===== */
  {
    id: 'q-circle-22',
    kp: 'circle',
    difficulty: 'medium',
    type: 'single',
    stem: '如图，⊙O 中 ∠AOB=100°，点 C 在劣弧 AB 上，则 ∠ACB 的度数是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="圆O中圆心角∠AOB=100°，点C在劣弧AB上，连AC、BC"><circle cx="160" cy="125" r="80" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="90.7" y1="85" x2="211.4" y2="63.7" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="125" x2="90.7" y2="85" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="125" x2="211.4" y2="63.7" stroke="currentColor" stroke-width="1.6"/><line x1="146.1" y1="46.2" x2="90.7" y2="85" stroke="currentColor" stroke-width="1.6"/><line x1="146.1" y1="46.2" x2="211.4" y2="63.7" stroke="currentColor" stroke-width="1.6"/><circle cx="160" cy="125" r="2.6" fill="currentColor"/><circle cx="90.7" cy="85" r="2.6" fill="currentColor"/><circle cx="211.4" cy="63.7" r="2.6" fill="currentColor"/><circle cx="146.1" cy="46.2" r="2.6" fill="currentColor"/><text x="80.7" y="93" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A</text><text x="219.4" y="69.7" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="146.1" y="64.2" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">C</text><text x="170" y="117" font-size="13" font-family="inherit" fill="currentColor">O</text><text x="154.8" y="99.5" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">100°</text></svg></figure>',
    options: ['50°', '130°', '100°', '80°'],
    answer: 1,
    explanation: '∠AOB=100° 是劣弧 AB 所对的圆心角。点 C 在劣弧 AB 上时，∠ACB 所对的是优弧 AB，优弧的圆心角为 360°−100°=260°，所以 ∠ACB=½×260°=130°。也可用圆内接四边形对角互补快速得到 180°−50°=130°。选 B。'
  },
  {
    id: 'q-circle-23',
    kp: 'circle',
    difficulty: 'medium',
    type: 'fill',
    stem: '如图，⊙O 的半径是 13，弦 AB=24，C 是弧 AB 的中点，则弓形的高（点 C 到弦 AB 的距离）是（　）。<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="圆O半径13，弦AB=24，C为弧AB中点，D为AB与OC交点"><circle cx="160" cy="130" r="78" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="88" y1="100" x2="232" y2="100" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="130" x2="160" y2="52" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="130" x2="88" y2="100" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="130" x2="232" y2="100" stroke="currentColor" stroke-width="1.6"/><path d="M148,100 L148,112 L160,112" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="160" cy="130" r="2.6" fill="currentColor"/><circle cx="88" cy="100" r="2.6" fill="currentColor"/><circle cx="232" cy="100" r="2.6" fill="currentColor"/><circle cx="160" cy="52" r="2.6" fill="currentColor"/><circle cx="160" cy="100" r="2.6" fill="currentColor"/><text x="78" y="94" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A</text><text x="240" y="94" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="160" y="42" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">C</text><text x="168" y="92" font-size="13" font-family="inherit" fill="currentColor">D</text><text x="168" y="148" font-size="13" font-family="inherit" fill="currentColor">O</text></svg></figure>',
    answers: ['8'],
    explanation: '连接 OC 交 AB 于点 D。由垂径定理，C 是弧 AB 的中点时 OC⊥AB 且 D 是 AB 中点，AD=½×24=12。在 Rt△OAD 中 OD=√(13<sup>2</sup>−12<sup>2</sup>)=√(169−144)=√25=5。弓形高 CD=OC−OD=13−5=8。'
  },
  {
    id: 'q-circle-24',
    kp: 'circle',
    difficulty: 'medium',
    type: 'single',
    stem: 'PA、PB 分别切 ⊙O 于点 A、B，若 ∠APB=60°，PA=4，则弦 AB 的长是（　）',
    options: ['4', '4√3', '2√3', '8'],
    answer: 0,
    explanation: '由切线长定理 PA=PB=4，△PAB 是等腰三角形；又顶角 ∠APB=60°，所以 △PAB 是等边三角形，AB=PA=4。也可算 AB=2×PA×sin30°=2×4×½=4。选 A。'
  },
  {
    id: 'q-circle-25',
    kp: 'circle',
    difficulty: 'medium',
    type: 'fill',
    stem: '如图，△ABC 的三边 AB=13，BC=12，CA=5，⊙O 是它的内切圆，则 ⊙O 的半径是（　）。<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="直角三角形ABC中角C=90°，AC=5，BC=12，AB=13，内切圆O与三边相切"><polygon points="60,130 228,200 60,200" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="88" cy="172" r="28" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M60,188 L72,188 L72,200" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="88" cy="172" r="2.6" fill="currentColor"/><circle cx="60" cy="130" r="2.6" fill="currentColor"/><circle cx="228" cy="200" r="2.6" fill="currentColor"/><circle cx="60" cy="200" r="2.6" fill="currentColor"/><circle cx="98.8" cy="146.2" r="2.6" fill="currentColor"/><text x="50" y="126" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A</text><text x="236" y="210" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="50" y="212" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">C</text><text x="96" y="192" font-size="13" font-family="inherit" fill="currentColor">O</text><text x="46" y="165" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">5</text><text x="144" y="218" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">12</text><text x="156" y="152" font-size="11.5" font-family="inherit" fill="currentColor">13</text></svg></figure>',
    answers: ['2'],
    explanation: '先由 5<sup>2</sup>+12<sup>2</sup>=25+144=169=13<sup>2</sup> 判定 ∠C=90°（BC=12、CA=5 是两条直角边）。面积 S=½×12×5=30，周长=13+12+5=30，半周长 p=15。由 S=p·r 得内切圆半径 r=S/p=30/15=2。'
  },
  {
    id: 'q-circle-26',
    kp: 'circle',
    difficulty: 'medium',
    type: 'single',
    stem: '已知 ⊙O 的半径是 5，圆心 O 到直线 l 的距离是 6，则直线 l 与 ⊙O 的位置关系是（　）',
    options: ['相切', '相交', '相离', '无法确定'],
    answer: 2,
    explanation: '直线与圆的位置关系由圆心到直线的距离 d 与半径 r 比较决定：d<r 相交（两个公共点），d=r 相切（一个公共点），d>r 相离（没有公共点）。这里 d=6>r=5，所以相离。选 C。'
  },
  {
    id: 'q-circle-27',
    kp: 'circle',
    difficulty: 'medium',
    type: 'fill',
    stem: '一个圆锥的底面半径是 3，母线长是 5，则这个圆锥的侧面积是（　）（结果保留 π）。',
    answers: ['15π'],
    explanation: '圆锥侧面展开图是扇形：扇形半径等于母线 l=5，扇形弧长等于底面周长 2πr=6π。侧面积 S=½×弧长×母线=½×6π×5=15π，与公式 S=πrl=π×3×5=15π 一致。'
  },
  {
    id: 'q-circle-28',
    kp: 'circle',
    difficulty: 'medium',
    type: 'single',
    stem: '如图，PA 切 ⊙O 于点 A，OP=10，⊙O 的半径是 6，则 PA 的长是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="PA切圆O于点A，OP=10，圆O半径6，OA为半径，PA为切线"><circle cx="110" cy="130" r="72" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="110" y1="130" x2="176.2" y2="101.7" stroke="currentColor" stroke-width="1.6"/><line x1="176.2" y1="101.7" x2="213.9" y2="190" stroke="currentColor" stroke-width="1.6"/><path d="M165.2,106.4 L169.9,117.5 L180.9,112.8" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="110" cy="130" r="2.6" fill="currentColor"/><circle cx="176.2" cy="101.7" r="2.6" fill="currentColor"/><circle cx="213.9" cy="190" r="2.6" fill="currentColor"/><text x="166.2" y="97.7" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A</text><text x="221.9" y="198" font-size="13" font-family="inherit" fill="currentColor">P</text><text x="118" y="148" font-size="13" font-family="inherit" fill="currentColor">O</text></svg></figure>',
    options: ['6', '4', '√136', '8'],
    answer: 3,
    explanation: '切线的性质给出 OA⊥PA，所以 △OAP 是直角三角形，OP 是斜边。由勾股定理 PA<sup>2</sup>=OP<sup>2</sup>−OA<sup>2</sup>=10<sup>2</sup>−6<sup>2</sup>=100−36=64，故 PA=8。选 D。'
  },
  {
    id: 'q-circle-29',
    kp: 'circle',
    difficulty: 'medium',
    type: 'fill',
    stem: '一块扇形铁皮的圆心角是 120°，半径是 3 分米，则它的面积是（　）平方分米（结果保留 π）。',
    answers: ['3π'],
    explanation: '扇形面积公式 S=nπr<sup>2</sup>/360=120×π×9/360=3π。也可看作整圆面积 9π 的 120/360=1/3，即 3π。'
  },
  {
    id: 'q-circle-30',
    kp: 'circle',
    difficulty: 'medium',
    type: 'single',
    stem: '如图，四边形 ABCD 内接于 ⊙O，延长 BC 到点 E，若 ∠DCE=70°，则 ∠A 的度数是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="四边形ABCD内接于圆O，延长BC到E，∠DCE=70°"><circle cx="160" cy="120" r="80" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="87.5" y1="153.8" x2="160" y2="40" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="40" x2="235.2" y2="92.6" stroke="currentColor" stroke-width="1.6"/><line x1="235.2" y1="92.6" x2="211.4" y2="181.3" stroke="currentColor" stroke-width="1.6"/><line x1="211.4" y1="181.3" x2="87.5" y2="153.8" stroke="currentColor" stroke-width="1.6"/><line x1="235.2" y1="92.6" x2="269.6" y2="116.7" stroke="currentColor" stroke-width="1.2"/><circle cx="87.5" cy="153.8" r="2.6" fill="currentColor"/><circle cx="160" cy="40" r="2.6" fill="currentColor"/><circle cx="235.2" cy="92.6" r="2.6" fill="currentColor"/><circle cx="211.4" cy="181.3" r="2.6" fill="currentColor"/><circle cx="269.6" cy="116.7" r="2.6" fill="currentColor"/><text x="77.5" y="149.8" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A</text><text x="168" y="34" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="243.2" y="88.6" font-size="13" font-family="inherit" fill="currentColor">C</text><text x="211.4" y="199.3" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">D</text><text x="277.6" y="122.7" font-size="13" font-family="inherit" fill="currentColor">E</text><text x="249.6" y="136.1" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">70°</text></svg></figure>',
    options: ['110°', '70°', '140°', '35°'],
    answer: 1,
    explanation: '圆内接四边形对角互补：∠A+∠BCD=180°。而 ∠DCE 与 ∠BCD 是邻补角，∠BCD=180°−70°=110°，所以 ∠A=180°−110°=70°。这个结论通常表述为：圆内接四边形的一个外角等于它的内对角。选 B。'
  },
  {
    id: 'q-circle-31',
    kp: 'circle',
    difficulty: 'medium',
    type: 'single',
    stem: '⊙O 的半径是 10，AB、CD 是 ⊙O 的两条平行弦，AB=16，CD=12，则 AB 与 CD 之间的距离是（　）',
    options: ['2 或 14', '2', '14', '10'],
    answer: 0,
    explanation: '圆心到 AB 的距离 d<sub>1</sub>=√(10<sup>2</sup>−8<sup>2</sup>)=√36=6；圆心到 CD 的距离 d<sub>2</sub>=√(10<sup>2</sup>−6<sup>2</sup>)=√64=8。两弦可能在圆心同侧，距离为 8−6=2；也可能在圆心异侧，距离为 8+6=14。题目没有说明位置，两种情况都要考虑。选 A。'
  },
  {
    id: 'q-circle-32',
    kp: 'circle',
    difficulty: 'medium',
    type: 'single',
    stem: '一个圆形转盘被两条半径分成三个扇形区域，三个扇形圆心角的比是 1:2:3。指针随机停在某一位置，则指针落在最大扇形区域的概率是（　）',
    options: ['1/3', '1/6', '1/2', '2/3'],
    answer: 2,
    explanation: '三个扇形圆心角之和是 360°，按 1:2:3 分配得 60°、120°、180°，最大扇形的圆心角是 180°。用概率初步中的几何概型：指针落在某区域的概率等于该区域面积占转盘总面积的比例，而同一圆内扇形面积之比等于圆心角之比，所以 P=180/360=½。选 C。',
    tags: ['probability']
  },
  {
    id: 'q-circle-33',
    kp: 'circle',
    difficulty: 'medium',
    type: 'fill',
    stem: '一个扇形的弧长是 4π，圆心角是 120°，则这个扇形的半径是（　）。',
    answers: ['6'],
    explanation: '由弧长公式 l=nπr/180 得 4π=120×π×r/180=2πr/3。两边同除以 π 得 4=2r/3，所以 r=6。'
  },
  {
    id: 'q-circle-34',
    kp: 'circle',
    difficulty: 'medium',
    type: 'single',
    stem: '如图，正六边形 ABCDEF 内接于 ⊙O，若 ⊙O 的半径是 4，则这个正六边形的边心距是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="正六边形ABCDEF内接于圆O，圆O半径4"><circle cx="160" cy="120" r="88" fill="none" stroke="currentColor" stroke-width="1.6"/><polygon points="248,120 204,196.2 116,196.2 72,120 116,43.8 204,43.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="160" y1="120" x2="248" y2="120" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="120" x2="226" y2="158.1" stroke="currentColor" stroke-width="1.2"/><path d="M232,147.7 L221.6,141.7 L215.6,152.1" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="160" cy="120" r="2.6" fill="currentColor"/><circle cx="248" cy="120" r="2.6" fill="currentColor"/><circle cx="204" cy="196.2" r="2.6" fill="currentColor"/><circle cx="116" cy="196.2" r="2.6" fill="currentColor"/><circle cx="72" cy="120" r="2.6" fill="currentColor"/><circle cx="116" cy="43.8" r="2.6" fill="currentColor"/><circle cx="204" cy="43.8" r="2.6" fill="currentColor"/><text x="258" y="126" font-size="13" font-family="inherit" fill="currentColor">A</text><text x="214" y="204.2" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="106" y="204.2" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">C</text><text x="62" y="126" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">D</text><text x="106" y="39.8" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">E</text><text x="214" y="39.8" font-size="13" font-family="inherit" fill="currentColor">F</text><text x="168" y="138" font-size="13" font-family="inherit" fill="currentColor">O</text></svg></figure>',
    options: ['2', '4√3', '2√2', '2√3'],
    answer: 3,
    explanation: '正六边形的中心角为 360°÷6=60°，△OAB 中 OA=OB=4 且顶角 60°，是等边三角形，边长 AB=4。边心距是中心 O 到边 AB 的垂线段，即等边三角形的高：h=4×sin60°=4×√3/2=2√3。选 D。'
  },
  {
    id: 'q-circle-35',
    kp: 'circle',
    difficulty: 'medium',
    type: 'fill',
    stem: '⊙O 的半径是 4，∠AOB=90°，则劣弧 AB 与弦 AB 所围成的弓形面积是（　）（结果保留 π）。',
    answers: ['4π-8'],
    explanation: '扇形 OAB 的面积=90/360×π×4<sup>2</sup>=¼×16π=4π；△AOB 是两条直角边都等于半径 4 的等腰直角三角形，面积=½×4×4=8。弓形面积=扇形面积−三角形面积=4π−8。'
  },
  /* ===== v4 新增：circle 36–50（hard 15 题） ===== */
  {
    id: 'q-circle-36',
    kp: 'circle',
    difficulty: 'hard',
    type: 'single',
    stem: '如图，PA、PB 分别切 ⊙O 于点 A、B，点 C 在优弧 AB 上，若 ∠P=70°，则 ∠ACB 的度数是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="PA、PB分别切圆O于A、B，点C在优弧AB上，∠P=70°"><circle cx="160" cy="105" r="60" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="209.6" x2="209.2" y2="139.4" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="209.6" x2="110.8" y2="139.4" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="105" x2="209.2" y2="139.4" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="105" x2="110.8" y2="139.4" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="45" x2="209.2" y2="139.4" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="45" x2="110.8" y2="139.4" stroke="currentColor" stroke-width="1.6"/><path d="M199.3,132.5 L192.4,142.4 L202.3,149.2" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M120.7,132.5 L127.6,142.4 L117.7,149.2" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="160" cy="105" r="2.6" fill="currentColor"/><circle cx="209.2" cy="139.4" r="2.6" fill="currentColor"/><circle cx="110.8" cy="139.4" r="2.6" fill="currentColor"/><circle cx="160" cy="45" r="2.6" fill="currentColor"/><circle cx="160" cy="209.6" r="2.6" fill="currentColor"/><text x="219.2" y="135.4" font-size="13" font-family="inherit" fill="currentColor">A</text><text x="100.8" y="135.4" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">B</text><text x="160" y="33" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">C</text><text x="168" y="121" font-size="13" font-family="inherit" fill="currentColor">O</text><text x="160" y="225.6" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">P</text><text x="160" y="193.6" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">70°</text></svg></figure>',
    options: ['110°', '55°', '125°', '35°'],
    answer: 1,
    explanation: '连接 OA、OB。由切线性质 OA⊥PA、OB⊥PB，四边形 OAPB 的内角和为 360°，所以 ∠AOB=360°−90°−90°−70°=110°。点 C 在优弧 AB 上，∠ACB 所对的是劣弧 AB（圆心角 110°），故 ∠ACB=½×110°=55°。选 B。易错：把 110°（圆心角）当答案，或误按劣弧上的点算成 180°−55°=125°。'
  },
  {
    id: 'q-circle-37',
    kp: 'circle',
    difficulty: 'hard',
    type: 'fill',
    stem: '如图，⊙O 中两条弦相交于点 P。其中一条弦被 P 分成 2 和 6 两段，另一条弦的全长是 7，则这条弦被 P 分成的两段中较短的一段长是（　）。<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="圆O的两条弦AB、CD相交于圆内一点P，两弦互相分割"><circle cx="160" cy="120" r="80" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="228.5" y1="161.3" x2="158.5" y2="200" stroke="currentColor" stroke-width="1.6"/><line x1="237.2" y1="140.8" x2="191.3" y2="193.6" stroke="currentColor" stroke-width="1.6"/><circle cx="228.5" cy="161.3" r="2.6" fill="currentColor"/><circle cx="158.5" cy="200" r="2.6" fill="currentColor"/><circle cx="237.2" cy="140.8" r="2.6" fill="currentColor"/><circle cx="191.3" cy="193.6" r="2.6" fill="currentColor"/><circle cx="211" cy="171" r="2.6" fill="currentColor"/><text x="236.5" y="169.3" font-size="13" font-family="inherit" fill="currentColor">A</text><text x="148.5" y="214" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">B</text><text x="245.2" y="134.8" font-size="13" font-family="inherit" fill="currentColor">C</text><text x="185.3" y="207.6" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">D</text><text x="217" y="187" font-size="13" font-family="inherit" fill="currentColor">P</text></svg></figure>',
    answers: ['3'],
    explanation: '连接两条弦的端点。由同弧所对的圆周角相等，可证两个三角形相似（相似三角形的判定 AA），于是对应边成比例，得到相交弦定理：一条弦被 P 分成的两段之积等于另一条弦两段之积，即 PC·PD=2×6=12。设这条弦被分成的两段为 x 和 7−x，则 x(7−x)=12，整理得 x<sup>2</sup>−7x+12=0（一元二次方程），解得 x=3 或 x=4。两段为 3 和 4，较短的一段是 3。',
    tags: ['similarity', 'quad-eq']
  },
  {
    id: 'q-circle-38',
    kp: 'circle',
    difficulty: 'hard',
    type: 'single',
    stem: '如图，PA 切 ⊙O 于点 A，割线 PBC 交 ⊙O 于点 B、C，若 PA=6，PB=4，则 PC 的长是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="PA切圆O于点A，割线PBC交圆O于B、C，PA=6，PB=4"><circle cx="140" cy="120" r="70" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="226.6" y1="151.5" x2="205.5" y2="95.4" stroke="currentColor" stroke-width="1.6"/><line x1="226.6" y1="151.5" x2="145.2" y2="189.8" stroke="currentColor" stroke-width="1.6"/><path d="M194.3,99.6 L198.5,110.8 L209.7,106.6" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="140" cy="120" r="2.6" fill="currentColor"/><circle cx="205.5" cy="95.4" r="2.6" fill="currentColor"/><circle cx="190.4" cy="168.5" r="2.6" fill="currentColor"/><circle cx="145.2" cy="189.8" r="2.6" fill="currentColor"/><circle cx="226.6" cy="151.5" r="2.6" fill="currentColor"/><text x="213.5" y="89.4" font-size="13" font-family="inherit" fill="currentColor">A</text><text x="198.4" y="164.5" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="137.2" y="203.8" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">C</text><text x="234.6" y="157.5" font-size="13" font-family="inherit" fill="currentColor">P</text><text x="132" y="136" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">O</text></svg></figure>',
    options: ['9', '8', '12', '10'],
    answer: 0,
    explanation: '连接 AB、AC。由弦切角定理，切线 PA 与弦 AB 的夹角 ∠PAB 等于它所夹弧 AB 所对的圆周角 ∠C；又 ∠P 是公共角，所以 △PAB∽△PCA（相似三角形），得 PA/PC=PB/PA，即 PA<sup>2</sup>=PB·PC（切割线定理）。代入 36=4·PC，得 PC=9。选 A。',
    tags: ['similarity']
  },
  {
    id: 'q-circle-39',
    kp: 'circle',
    difficulty: 'hard',
    type: 'single',
    stem: '如图，扇形 AOB 的半径是 6，∠AOB=90°，则图中阴影部分（扇形内、△AOB 外）的面积是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="扇形AOB半径6，∠AOB=90°，阴影为弧AB与弦AB之间的部分"><path d="M198,190 A108,108 0 0 0 90,82 L198,190 Z" fill="currentColor" fill-opacity="0.18"/><path d="M198,190 A108,108 0 0 0 90,82" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="90" y1="190" x2="198" y2="190" stroke="currentColor" stroke-width="1.6"/><line x1="90" y1="190" x2="90" y2="82" stroke="currentColor" stroke-width="1.6"/><path d="M102,190 L102,178 L90,178" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="90" cy="190" r="2.6" fill="currentColor"/><circle cx="198" cy="190" r="2.6" fill="currentColor"/><circle cx="90" cy="82" r="2.6" fill="currentColor"/><text x="206" y="200" font-size="13" font-family="inherit" fill="currentColor">A</text><text x="90" y="72" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">B</text><text x="78" y="204" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">O</text><text x="146" y="204" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">6</text><text x="120" y="176" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">90°</text></svg></figure>',
    options: ['9π−36', '18π−18', '9π−18', '9π/2−18'],
    answer: 2,
    explanation: '扇形面积=90/360×π×6<sup>2</sup>=¼×36π=9π。△AOB 的两条直角边都是半径 6，面积=½×6×6=18。阴影=扇形−三角形=9π−18。选 C。'
  },
  {
    id: 'q-circle-40',
    kp: 'circle',
    difficulty: 'hard',
    type: 'fill',
    stem: 'CD 是 ⊙O 的直径，⊙O 的半径是 5，弦 AB⊥CD 于点 P，若 PA·PB=9，则 OP=（　）。',
    answers: ['4'],
    explanation: '由相交弦定理 PA·PB=PC·PD（弦 AB 与直径 CD 交于 P；该定理本身由 △PAC∽△PDB 的相似关系推出）。因为 CD 是直径且 P 在 CD 上，CP=5+OP，PD=5−OP，所以 (5+OP)(5−OP)=9，即 25−OP<sup>2</sup>=9，OP<sup>2</sup>=16，OP=4（列一元二次方程求线段长）。验算：由垂径定理 AP=PB=3，Rt△OAP 中 OP=√(5<sup>2</sup>−3<sup>2</sup>)=4，两种方法一致。',
    tags: ['quad-eq', 'similarity']
  },
  {
    id: 'q-circle-41',
    kp: 'circle',
    difficulty: 'hard',
    type: 'single',
    stem: '在平面直角坐标系中，点 A(4,3) 在 ⊙O（圆心为原点 O）上。将线段 OA 绕点 O 按顺时针方向旋转 90° 得到 OA′，则点 A′ 的坐标是（　）',
    options: ['(−3,4)', '(4,−3)', '(−4,3)', '(3,−4)'],
    answer: 3,
    explanation: '绕原点顺时针旋转 90° 的坐标变换是 (x,y)→(y,−x)（旋转是刚体变换，线段长度不变，OA=OA′=5）。代入 A(4,3) 得 A′(3,−4)。验算：OA=(4,3) 与 OA′=(3,−4) 的点积 4×3+3×(−4)=0，两线段互相垂直，且 |OA′|=√(9+16)=5，符合顺时针旋转 90°。选 D。',
    tags: ['rotation']
  },
  {
    id: 'q-circle-42',
    kp: 'circle',
    difficulty: 'hard',
    type: 'single',
    stem: '已知抛物线 y=x<sup>2</sup> 与圆 x<sup>2</sup>+y<sup>2</sup>=2 交于 A、B 两点，则线段 AB 的长是（　）',
    options: ['√2', '2', '4', '2√2'],
    answer: 1,
    explanation: '把 y=x<sup>2</sup> 即 x<sup>2</sup>=y 代入圆的方程，得 y+y<sup>2</sup>=2，即 y<sup>2</sup>+y−2=0（一元二次方程）。因式分解 (y+2)(y−1)=0，得 y=1 或 y=−2；又抛物线 y=x<sup>2</sup>≥0，故舍去 y=−2。y=1 时 x<sup>2</sup>=1，x=±1。利用二次函数图象关于 y 轴对称，两交点为 A(1,1)、B(−1,1)，所以 AB=2。选 B。',
    tags: ['quad-func', 'quad-eq']
  },
  {
    id: 'q-circle-43',
    kp: 'circle',
    difficulty: 'hard',
    type: 'single',
    stem: '在半径为 r 的圆内随机取一点，则该点落在圆的内接正方形内的概率是（　）',
    options: ['2/π', '1/2', 'π/4', '1/π'],
    answer: 0,
    explanation: '圆内接正方形的对角线等于圆的直径 2r，其面积=(2r)<sup>2</sup>/2=2r<sup>2</sup>；圆的面积=πr<sup>2</sup>。用概率初步中的几何概型，所求概率等于面积之比：P=2r<sup>2</sup>/(πr<sup>2</sup>)=2/π。选 A。',
    tags: ['probability']
  },
  {
    id: 'q-circle-44',
    kp: 'circle',
    difficulty: 'hard',
    type: 'fill',
    stem: '在 Rt△ABC 中，∠ACB=90°，直角边 AC、BC 的长是方程 x<sup>2</sup>−7x+12=0 的两个根，点 P 是平面内一个动点，且 ∠APB=90°，则 CP 的最大值是（　）。',
    answers: ['5'],
    explanation: '先用一元二次方程求两条直角边：解 x<sup>2</sup>−7x+12=0，因式分解得 (x−3)(x−4)=0，所以 x=3 或 x=4，即 AC 与 BC 的长分别是 3 和 4。再由勾股定理 AB=√(3<sup>2</sup>+4<sup>2</sup>)=5。∠APB=90° 说明点 P 在以 AB 为直径的圆上（直径所对圆周角为直角），该圆圆心 M 是 AB 的中点、半径 r=AB/2=2.5。又 ∠ACB=90°，说明点 C 也在这个圆上。于是 CP 是这个圆的一条弦，弦长不超过直径，当 CP 经过圆心 M 时取最大值 2r=5。',
    tags: ['quad-eq']
  },
  {
    id: 'q-circle-45',
    kp: 'circle',
    difficulty: 'hard',
    type: 'fill',
    stem: '△ABC 的三边 AB=13，BC=14，CA=15，则它的内切圆半径是（　）。',
    answers: ['4'],
    explanation: '用海伦公式求面积：半周长 p=(13+14+15)/2=21，S=√(21×8×7×6)=√7056=84。又面积与内切圆半径的关系是 S=p·r，所以 r=S/p=84/21=4。'
  },
  {
    id: 'q-circle-46',
    kp: 'circle',
    difficulty: 'hard',
    type: 'single',
    stem: '正三角形 ABC 内接于 ⊙O，若 ⊙O 的半径是 2，则 △ABC 的边长是（　）',
    options: ['3', '√3', '2√3', '4√3'],
    answer: 2,
    explanation: '正三角形的中心角为 360°÷3=120°，即 ∠AOB=120°。作 OM⊥AB 于 M（由垂径定理 M 是 AB 中点），则 ∠AOM=60°，AM=OA·sin60°=2×√3/2=√3，所以 AB=2AM=2√3。选 C。（也可用公式 a=√3R=2√3。）'
  },
  {
    id: 'q-circle-47',
    kp: 'circle',
    difficulty: 'hard',
    type: 'single',
    stem: '一个圆锥的底面半径是 3，母线长是 9，则它的侧面展开图（扇形）的圆心角是（　）',
    options: ['60°', '90°', '150°', '120°'],
    answer: 3,
    explanation: '侧面展开后扇形的半径等于母线 9，扇形的弧长等于底面圆的周长 2π×3=6π。由 l=nπR/180 得 6π=nπ×9/180，即 n=6×180/9=120，所以圆心角是 120°。选 D。'
  },
  {
    id: 'q-circle-48',
    kp: 'circle',
    difficulty: 'hard',
    type: 'fill',
    stem: '在 ⊙O 中，∠AOB=60°，OA=6，则扇形 OAB 的面积比 △OAB 的面积大（　）（结果保留 π 和根号）。',
    answers: ['6π-9√3'],
    explanation: '∠AOB=60° 且 OA=OB，所以 △AOB 是等边三角形，边长 6，面积=(√3/4)×6<sup>2</sup>=9√3。扇形面积=60/360×π×36=6π。所求差值=扇形−三角形=6π−9√3，它正是弦 AB 与劣弧 AB 围成的弓形面积。'
  },
  {
    id: 'q-circle-49',
    kp: 'circle',
    difficulty: 'hard',
    type: 'single',
    stem: '⊙O 的圆心是原点 O，半径是 3，点 A(3,0) 在 ⊙O 上。将 ⊙O 绕点 A 顺时针旋转 90° 得到 ⊙O′，则圆心 O′ 的坐标是（　）',
    options: ['(3,−3)', '(3,3)', '(0,3)', '(6,0)'],
    answer: 1,
    explanation: '旋转是刚体变换，⊙O′ 的半径仍是 3，只需确定圆心的位置。向量 AO=O−A=(−3,0)，绕点 A 顺时针旋转 90° 的变换为 (x,y)→(y,−x)，得 (0,3)，即 AO′=(0,3)，所以 O′=A+AO′=(3,3)。验算：|AO′|=3 与半径相等，且 AO·AO′=(−3)×0+0×3=0，说明旋转角是 90°。选 B。',
    tags: ['rotation']
  },
  {
    id: 'q-circle-50',
    kp: 'circle',
    difficulty: 'hard',
    type: 'single',
    stem: 'AB 是 ⊙O 的直径，点 C 在 ⊙O 上，CD⊥AB 于点 D，若 AD=2，BD=8，则 CD 的长是（　）',
    options: ['4', '5', '2√3', '6'],
    answer: 0,
    explanation: 'AB 是直径，所以 ∠ACB=90°；又 CD⊥AB，故 ∠CDA=∠CDB=90°。于是 ∠A 与 ∠BCD 都是 ∠ACD 的余角，得 ∠A=∠BCD，∠B=∠ACD，所以 △ACD∽△CBD（相似三角形的判定 AA），对应边成比例 CD/AD=BD/CD，即 CD<sup>2</sup>=AD·BD=2×8=16，CD=4。选 A。',
    tags: ['similarity']
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
  {
    id: 'q-similarity-13',
    kp: 'similarity',
    difficulty: 'basic',
    type: 'fill',
    stem: '已知 5x=3y（x、y 均不为 0），则 x/y=（　）。',
    answers: ['3/5'],
    explanation: '由 5x=3y 两边同除以 5y（y≠0），得 x/y=3/5。换个写法就是 x:y=3:5，两者是同一个比例关系。检验：取 x=3、y=5，左边 5×3=15、右边 3×5=15，相等 ✓；此时 x/y=3/5 ✓。常见错误是把 x/y 写成 5/3——那是把等式两边的系数直接对角搬过去了。'
  },
  {
    id: 'q-similarity-14',
    kp: 'similarity',
    difficulty: 'basic',
    type: 'single',
    stem: '点 C 在线段 AB 上，AB=1，AC&gt;BC，且 AC<sup>2</sup>=AB·BC。则 AC:AB=（　）',
    options: ['(√5−1)/2', '(√5+1)/2', '1/2', '2/3'],
    answer: 0,
    explanation: '设 AC=x，则 BC=1−x，由 AC<sup>2</sup>=AB·BC 得 x<sup>2</sup>=1−x，即 x<sup>2</sup>+x−1=0。用求根公式 x=(−1±√5)/2≈(−1±2.236)/2，取正根 x=(√5−1)/2≈0.618。所以 AC:AB=(√5−1)/2:1，这就是黄金比。(√5+1)/2≈1.618 是它的大于 1 的倒数形式，长度比不可能大于 1。选 A。'
  },
  {
    id: 'q-similarity-15',
    kp: 'similarity',
    difficulty: 'basic',
    type: 'fill',
    stem: '如图，点 D、E 分别在 △ABC 的边 AB、AC 上，且 DE∥BC。若 AD=3，DB=2，DE=6，则 BC=（　）<figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="三角形ABC中，D在AB上、E在AC上，DE平行于BC；AD标3，DB标2，DE标6"><polygon points="160.0,26.2 26.0,213.8 294.0,213.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="79.6" y1="138.8" x2="240.4" y2="138.8" stroke="currentColor" stroke-width="1.6"/><circle cx="160.0" cy="26.2" r="2.6" fill="currentColor"/><circle cx="26.0" cy="213.8" r="2.6" fill="currentColor"/><circle cx="294.0" cy="213.8" r="2.6" fill="currentColor"/><circle cx="79.6" cy="138.8" r="2.6" fill="currentColor"/><circle cx="240.4" cy="138.8" r="2.6" fill="currentColor"/><text x="160.0" y="13.2" font-size="13" font-family="inherit" fill="currentColor">A</text><text x="14.4" y="219.7" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="305.6" y="219.7" font-size="13" font-family="inherit" fill="currentColor">C</text><text x="66.7" y="137.6" font-size="13" font-family="inherit" fill="currentColor">D</text><text x="253.3" y="137.6" font-size="13" font-family="inherit" fill="currentColor">E</text><text x="145.2" y="100.6" font-size="13" font-family="inherit" fill="currentColor">3</text><text x="27.4" y="158.1" font-size="13" font-family="inherit" fill="currentColor">2</text><text x="160.0" y="170.0" font-size="13" font-family="inherit" fill="currentColor">6</text></svg></figure>',
    answers: ['10'],
    explanation: '由 DE∥BC 得 △ADE∽△ABC（A 字型：∠ADE=∠B、∠AED=∠C，两角分别相等）。相似比 =AD/AB=3/(3+2)=3/5，于是 DE/BC=3/5，即 6/BC=3/5，交叉相乘 3BC=30，BC=10。换个算法核对：AB=5，BC=DE÷(3/5)=6×5/3=10，一致。注意分母是 AB=AD+DB=5，而不是 DB=2。'
  },
  {
    id: 'q-similarity-16',
    kp: 'similarity',
    difficulty: 'basic',
    type: 'single',
    stem: '两个相似三角形的对应角平分线之比为 2:5，则这两个三角形的周长之比为（　）',
    options: ['2:5', '4:25', '5:2', '2:25'],
    answer: 0,
    explanation: '相似三角形中所有对应线段（对应边、对应高、对应中线、对应角平分线）之比都等于相似比。所以这两个三角形的相似比就是 2:5，而周长比也等于相似比，即 2:5。选 A。4:25 是把「面积比 = 相似比的平方」错用到周长上；5:2 是方向写反；2:25 更无依据。'
  },
  {
    id: 'q-similarity-17',
    kp: 'similarity',
    difficulty: 'basic',
    type: 'fill',
    stem: '三条平行线 l<sub>1</sub>∥l<sub>2</sub>∥l<sub>3</sub> 依次截两条直线，在第一条直线上截得 AB=4、BC=6，在第二条直线上截得 DE=6，则 EF=（　）。',
    answers: ['9'],
    explanation: '平行线分线段成比例定理：三条平行线截两条直线，所得对应线段成比例，即 AB/BC=DE/EF。代入 4/6=6/EF，交叉相乘 4EF=36，EF=9。核对比例：4:6=2:3，6:9=2:3，两组对应线段的比一致 ✓。'
  },
  {
    id: 'q-similarity-18',
    kp: 'similarity',
    difficulty: 'basic',
    type: 'single',
    stem: '若 △ABC 的三边长分别为 3、4、5，△DEF 的三边长分别为 6、8、10，则（　）',
    options: ['△ABC∽△DEF，相似比为 1:2', '△ABC≌△DEF', '两个三角形不相似', '只有一组角相等，无法判断'],
    answer: 0,
    explanation: '把三边按对应顺序作比：3/6=4/8=5/10=1/2，三边对应成比例，满足「三边成比例的两个三角形相似」（SSS），所以 △ABC∽△DEF，相似比 1:2。选 A。边长 3 与 6 并不相等，所以不全等；SSS 已经能判定相似，不存在「无法判断」。'
  },
  {
    id: 'q-similarity-19',
    kp: 'similarity',
    difficulty: 'basic',
    type: 'fill',
    stem: '同一时刻，1.5 m 高的竹竿 EN 的影长 KN 为 2 m；一棵树的影长 RQ 为 12 m，则树高 TQ=（　）m。<figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="同一时刻的平行光线：竹竿EN高1.5、影长KN为2；树的影长RQ为12，光线EK与TR平行"><line x1="57.5" y1="190.9" x2="57.5" y2="167.3" stroke="currentColor" stroke-width="1.6"/><line x1="26.0" y1="190.9" x2="57.5" y2="190.9" stroke="currentColor" stroke-width="1.6"/><line x1="294.0" y1="49.1" x2="294.0" y2="190.9" stroke="currentColor" stroke-width="1.6"/><line x1="104.8" y1="190.9" x2="294.0" y2="190.9" stroke="currentColor" stroke-width="1.6"/><line x1="57.5" y1="167.3" x2="26.0" y2="190.9" stroke="currentColor" stroke-width="1.6"/><line x1="294.0" y1="49.1" x2="104.8" y2="190.9" stroke="currentColor" stroke-width="1.6"/><circle cx="57.5" cy="190.9" r="2.6" fill="currentColor"/><circle cx="57.5" cy="167.3" r="2.6" fill="currentColor"/><circle cx="26.0" cy="190.9" r="2.6" fill="currentColor"/><circle cx="294.0" cy="190.9" r="2.6" fill="currentColor"/><circle cx="294.0" cy="49.1" r="2.6" fill="currentColor"/><circle cx="104.8" cy="190.9" r="2.6" fill="currentColor"/><text x="70.5" y="190.9" font-size="13" font-family="inherit" fill="currentColor">N</text><text x="70.5" y="167.3" font-size="13" font-family="inherit" fill="currentColor">E</text><text x="13.4" y="194.0" font-size="13" font-family="inherit" fill="currentColor">K</text><text x="306.8" y="193.2" font-size="13" font-family="inherit" fill="currentColor">Q</text><text x="304.5" y="41.3" font-size="13" font-family="inherit" fill="currentColor">T</text><text x="94.7" y="199.1" font-size="13" font-family="inherit" fill="currentColor">R</text><text x="88.7" y="172.5" font-size="13" font-family="inherit" fill="currentColor">1.5</text><text x="41.8" y="222.1" font-size="13" font-family="inherit" fill="currentColor">2</text><text x="199.4" y="222.1" font-size="13" font-family="inherit" fill="currentColor">12</text></svg></figure>',
    answers: ['9'],
    explanation: '太阳光是平行光，竹竿和树都竖直立在地面上，所以 △ENK∽△TQR：∠N=∠Q=90°，∠EKN=∠TRQ 是两条平行光线与地面的夹角，两角分别相等（AA）。于是 EN/TQ=KN/RQ，即 1.5/TQ=2/12，交叉相乘 2TQ=18，TQ=9。用比例理解更快：影长变为 12÷2=6 倍，物高也变 6 倍，1.5×6=9 ✓。'
  },
  {
    id: 'q-similarity-20',
    kp: 'similarity',
    difficulty: 'basic',
    type: 'single',
    stem: '以点 P(1,1) 为位似中心、位似比为 2，把点 A(2,3) 位似变换得到点 A′。若 A′ 与 A 在点 P 的同侧，则 A′ 的坐标为（　）',
    options: ['(3,5)', '(4,6)', '(5,3)', '(2,6)'],
    answer: 0,
    explanation: '以 P 为位似中心、位似比 k 的位似变换把 A 变为 A′=P+k·(A−P)，同侧取 k&gt;0。这里 A−P=(2−1,3−1)=(1,2)，A′=(1,1)+2×(1,2)=(1+2,1+4)=(3,5)。选 A。(4,6) 是把坐标直接乘 2（相当于以原点为位似中心）；(5,3) 把横纵坐标写反；(2,6) 只放大了纵坐标。'
  },
  {
    id: 'q-similarity-21',
    kp: 'similarity',
    difficulty: 'basic',
    type: 'fill',
    stem: '一幅地图的比例尺为 1:200000，在地图上量得甲、乙两地相距 3 cm，则两地的实际距离为（　）km。',
    answers: ['6'],
    explanation: '比例尺 1:200000 表示图上 1 cm 代表实际 200000 cm（即 2 km）。图上 3 cm 对应实际 3×200000=600000 cm。换算：600000 cm=6000 m=6 km。也可以用「1 cm 代表 2 km」直接算：3×2=6 km ✓。'
  },
  {
    id: 'q-similarity-22',
    kp: 'similarity',
    difficulty: 'medium',
    type: 'fill',
    stem: '如图，小明在平地上放一面平面镜，他站在镜前 2 m 处，恰好在镜中看到树顶。已知小明眼睛离地面 1.6 m，镜子到树底的水平距离为 10 m，则树高为（　）m。<figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="平面镜置于地面M点，小明眼E高1.6、到镜水平距离2；树顶T到镜水平距离10；光线T-M-E"><line x1="26.0" y1="209.3" x2="26.0" y2="173.6" stroke="currentColor" stroke-width="1.6"/><line x1="26.0" y1="209.3" x2="294.0" y2="209.3" stroke="currentColor" stroke-width="1.6"/><line x1="70.7" y1="209.3" x2="70.7" y2="197.1" stroke="currentColor" stroke-width="1.6"/><line x1="294.0" y1="30.7" x2="294.0" y2="209.3" stroke="currentColor" stroke-width="1.6"/><line x1="26.0" y1="173.6" x2="70.7" y2="209.3" stroke="currentColor" stroke-width="1.6"/><line x1="70.7" y1="209.3" x2="294.0" y2="30.7" stroke="currentColor" stroke-width="1.6"/><circle cx="26.0" cy="209.3" r="2.6" fill="currentColor"/><circle cx="26.0" cy="173.6" r="2.6" fill="currentColor"/><circle cx="70.7" cy="209.3" r="2.6" fill="currentColor"/><circle cx="294.0" cy="209.3" r="2.6" fill="currentColor"/><circle cx="294.0" cy="30.7" r="2.6" fill="currentColor"/><text x="13.8" y="213.8" font-size="13" font-family="inherit" fill="currentColor">P</text><text x="13.0" y="174.4" font-size="13" font-family="inherit" fill="currentColor">E</text><text x="70.7" y="222.3" font-size="13" font-family="inherit" fill="currentColor">M</text><text x="306.5" y="212.9" font-size="13" font-family="inherit" fill="currentColor">Q</text><text x="303.7" y="22.0" font-size="13" font-family="inherit" fill="currentColor">T</text><text x="57.2" y="181.5" font-size="13" font-family="inherit" fill="currentColor">1.6</text><text x="48.3" y="231.4" font-size="13" font-family="inherit" fill="currentColor">2</text><text x="182.3" y="178.1" font-size="13" font-family="inherit" fill="currentColor">10</text></svg></figure>',
    answers: ['8'],
    explanation: '光沿直线传播且反射时入射角等于反射角，因此 ∠EMP=∠TMQ；又人与树都竖直、镜子在地面上，∠EPM=∠TQM=90°，所以 △EPM∽△TQM（AA）。对应边成比例：EP/TQ=PM/MQ，即 1.6/TQ=2/10，交叉相乘 2TQ=16，TQ=8。核对水平距离：PM 是「人到镜」2 m，MQ 是「镜到树」10 m，两者不能相加。'
  },
  {
    id: 'q-similarity-23',
    kp: 'similarity',
    difficulty: 'medium',
    type: 'single',
    stem: '在 △ABC 与 △DEF 中，∠A=∠D=50°，AB=4，AC=6，DE=6，DF=9，则（　）',
    options: ['△ABC∽△DEF，相似比为 2:3（SAS）', '△ABC∽△DEF，相似比为 3:2（SAS）', '两个三角形不一定相似', '只有一组角相等，无法判定'],
    answer: 0,
    explanation: 'AB/DE=4/6=2/3，AC/DF=6/9=2/3，两组对应边成比例；而 ∠A 正好是 AB 与 AC 的夹角，∠D 正好是 DE 与 DF 的夹角，相等的角是两边的夹角，符合「两边成比例且夹角相等」的 SAS 判定，所以 △ABC∽△DEF，相似比 =AB/DE=2/3。选 A。若相等的角不是夹角（例如两边成比例而相等的角是其中一边的对角），就不能用 SAS。'
  },
  {
    id: 'q-similarity-24',
    kp: 'similarity',
    difficulty: 'medium',
    type: 'single',
    stem: '把 △ABC 以坐标原点 O 为位似中心、位似比取 −2 作位似变换，得到 △A′B′C′。已知点 A 的坐标是 (3,−1)，则对应点 A′ 的坐标是（　）',
    options: ['(−6,2)', '(6,−2)', '(−3,1)', '(6,2)'],
    answer: 0,
    explanation: '以原点为位似中心、位似比为 k 的位似变换把 (x,y) 变为 (kx,ky)。这里 k=−2，所以 A′=(−2×3,−2×(−1))=(−6,2)。选 A。负的位似比表示对应点在位似中心的两侧：A(3,−1) 在第四象限，A′(−6,2) 落在第二象限，方向正好相反。(6,−2) 是取 k=2（同侧）的结果，(−3,1) 是 k=−1 的结果。'
  },
  {
    id: 'q-similarity-25',
    kp: 'similarity',
    difficulty: 'medium',
    type: 'fill',
    stem: '直角△ABC 中直角顶点为 C，CD 是斜边 AB 上的高、D 为垂足。若 AD=9，DB=16，则直角边 AC 的长为（　）。',
    answers: ['15'],
    explanation: '由 △ACD∽△ABC（∠A 公共，∠ADC=∠ACB=90°，AA）得 AC/AB=AD/AC，即 AC<sup>2</sup>=AD·AB（射影定理）。AB=AD+DB=9+16=25，所以 AC<sup>2</sup>=9×25=225，AC=15。核对：BC<sup>2</sup>=DB·AB=16×25=400，BC=20，而 15<sup>2</sup>+20<sup>2</sup>=225+400=625=25<sup>2</sup> ✓，正是 15-20-25 的直角三角形。'
  },
  {
    id: 'q-similarity-26',
    kp: 'similarity',
    difficulty: 'medium',
    type: 'fill',
    stem: '两个相似四边形的相似比为 2:3，它们的周长之和为 35，则较小四边形的周长为（　）。',
    answers: ['14'],
    explanation: '相似多边形的周长比等于相似比，所以这两个四边形的周长之比为 2:3。设它们的周长分别为 2k、3k，由 2k+3k=35 得 k=7，较小四边形的周长为 2×7=14（较大的为 21）。核对：14:21=2:3 ✓，且 14+21=35 ✓。'
  },
  {
    id: 'q-similarity-27',
    kp: 'similarity',
    difficulty: 'medium',
    type: 'single',
    stem: '点 C 是线段 AB 的黄金分割点，且 AC&gt;BC。若 AB=4，则 BC=（　）',
    options: ['6−2√5', '2√5−2', '4−2√5', '2√5−4'],
    answer: 0,
    explanation: '黄金分割中较长的一段 AC=(√5−1)/2·AB=(√5−1)/2×4=2√5−2≈2.472，所以 BC=AB−AC=4−(2√5−2)=6−2√5≈1.528。选 A。核对黄金比：BC/AC=1.528/2.472≈0.618，与 (√5−1)/2≈0.618 一致 ✓。注意 2√5−2 是 AC 的值，问的是 BC，别把它当答案。'
  },
  {
    id: 'q-similarity-28',
    kp: 'similarity',
    difficulty: 'medium',
    type: 'single',
    stem: '如图，矩形 ABCD 中 AB=2，AD=√5−1。在 AB 上取点 E 使 BE=AD，以 BE、BC 为边作正方形 EBCF，剩下的矩形 AEFD 与矩形 ABCD 相似。则 AE=（　）<figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="矩形ABCD中AB为长2、AD为宽根号5减1；在AB上取E使BE等于AD，作正方形EBCF，余下矩形AEFD与原矩形相似"><polygon points="26.0,37.2 294.0,37.2 294.0,202.8 26.0,202.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="128.4" y1="37.2" x2="128.4" y2="202.8" stroke="currentColor" stroke-width="1.6"/><circle cx="26.0" cy="37.2" r="2.6" fill="currentColor"/><circle cx="294.0" cy="37.2" r="2.6" fill="currentColor"/><circle cx="294.0" cy="202.8" r="2.6" fill="currentColor"/><circle cx="26.0" cy="202.8" r="2.6" fill="currentColor"/><circle cx="128.4" cy="37.2" r="2.6" fill="currentColor"/><circle cx="128.4" cy="202.8" r="2.6" fill="currentColor"/><text x="15.2" y="29.9" font-size="13" font-family="inherit" fill="currentColor">A</text><text x="305.3" y="30.7" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="305.3" y="209.3" font-size="13" font-family="inherit" fill="currentColor">C</text><text x="15.2" y="210.1" font-size="13" font-family="inherit" fill="currentColor">D</text><text x="125.2" y="24.6" font-size="13" font-family="inherit" fill="currentColor">E</text><text x="125.2" y="215.4" font-size="13" font-family="inherit" fill="currentColor">F</text><text x="160.0" y="68.4" font-size="13" font-family="inherit" fill="currentColor">2</text><text x="57.2" y="120.0" font-size="13" font-family="inherit" fill="currentColor">√5−1</text></svg></figure>',
    options: ['3−√5', '√5−2', '5−2√5', '2√5−3'],
    answer: 0,
    explanation: '矩形 AEFD 的两边是 AE（短）与 AD=√5−1（长），矩形 ABCD 的两边是 AB=2（长）与 BC=√5−1（短）。相似时短边比短边、长边比长边：AE/BC=AD/AB，即 AE/(√5−1)=(√5−1)/2，所以 AE=(√5−1)<sup>2</sup>/2=(6−2√5)/2=3−√5≈0.764。选 A。直接相减核对：AE=AB−BE=2−(√5−1)=3−√5 ✓。此时两个矩形长宽比都是 √5−1:1 的一半形式，比值 (√5−1)/2≈0.618，正是黄金比。'
  },
  {
    id: 'q-similarity-29',
    kp: 'similarity',
    difficulty: 'medium',
    type: 'fill',
    stem: '如图，△ABC 与 △A′B′C′ 关于点 O 位似，点 O 在两个图形的外部。若 OA=2，OA′=5，AB=3，则 A′B′=（　）。<figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="点O为位似中心，三角形ABC与A撇B撇C撇位似；O、A、A撇共线，OA=2，OA撇=5，AB=3"><polygon points="87.6,161.0 138.2,190.2 79.5,115.0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><polygon points="142.5,141.0 268.9,214.0 122.2,26.0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="51.1" y1="174.3" x2="142.5" y2="141.0" stroke="currentColor" stroke-width="1.6"/><line x1="51.1" y1="174.3" x2="268.9" y2="214.0" stroke="currentColor" stroke-width="1.6"/><line x1="51.1" y1="174.3" x2="122.2" y2="26.0" stroke="currentColor" stroke-width="1.6"/><circle cx="51.1" cy="174.3" r="2.6" fill="currentColor"/><circle cx="87.6" cy="161.0" r="2.6" fill="currentColor"/><circle cx="138.2" cy="190.2" r="2.6" fill="currentColor"/><circle cx="79.5" cy="115.0" r="2.6" fill="currentColor"/><circle cx="142.5" cy="141.0" r="2.6" fill="currentColor"/><circle cx="268.9" cy="214.0" r="2.6" fill="currentColor"/><circle cx="122.2" cy="26.0" r="2.6" fill="currentColor"/><text x="38.9" y="178.8" font-size="13" font-family="inherit" fill="currentColor">O</text><text x="75.6" y="156.0" font-size="13" font-family="inherit" fill="currentColor">A</text><text x="141.4" y="202.8" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="68.6" y="107.9" font-size="13" font-family="inherit" fill="currentColor">C</text><text x="142.5" y="154.0" font-size="13" font-family="inherit" fill="currentColor">A′</text><text x="280.7" y="219.6" font-size="13" font-family="inherit" fill="currentColor">B′</text><text x="121.7" y="13.0" font-size="13" font-family="inherit" fill="currentColor">C′</text><text x="69.8" y="200.7" font-size="13" font-family="inherit" fill="currentColor">2</text><text x="111.7" y="119.0" font-size="13" font-family="inherit" fill="currentColor">5</text><text x="111.5" y="210.8" font-size="13" font-family="inherit" fill="currentColor">3</text></svg></figure>',
    answers: ['15/2', '7.5'],
    explanation: '位似图形的对应线段之比等于位似比，而位似比 =OA′/OA=5/2（O、A、A′ 共线且在 O 同侧）。所以 A′B′/AB=5/2，A′B′=3×5/2=15/2=7.5。核对：位似比大于 1，说明 △A′B′C′ 是放大的那个，A′B′=7.5&gt;AB=3 ✓。'
  },
  {
    id: 'q-similarity-30',
    kp: 'similarity',
    difficulty: 'medium',
    type: 'fill',
    stem: '两个相似三角形的对应高之比为 3:4，较小三角形的面积为 27，则较大三角形的面积为（　）。',
    answers: ['48'],
    explanation: '相似三角形对应高的比等于相似比，所以相似比为 3:4，面积比 =(3/4)<sup>2</sup>=9:16。设较小面积为 9k=27，得 k=3，较大面积 =16k=48。核对：27:48=9:16 ✓，其算术平方根比 √(27/48)=3/4 正是高之比 ✓。'
  },
  {
    id: 'q-similarity-31',
    kp: 'similarity',
    difficulty: 'medium',
    type: 'fill',
    stem: '直线 l<sub>1</sub>∥l<sub>2</sub>∥l<sub>3</sub>，两条直线分别与这三条平行线相交：一侧截得 AB=6、BC=9，另一侧截得 DE=8、EF，则 EF=（　）。',
    answers: ['12'],
    explanation: '由平行线分线段成比例得 AB/BC=DE/EF，即 6/9=8/EF，交叉相乘 6EF=72，EF=12。核对比例：AB:BC=2:3，DE:EF=8:12=2:3 ✓。'
  },
  {
    id: 'q-similarity-32',
    kp: 'similarity',
    difficulty: 'medium',
    type: 'fill',
    stem: '把一块三角形铁片按相似比 1:5 缩小后画在图纸上，图纸上这个三角形的面积为 12 cm<sup>2</sup>，则原铁片的面积为（　）cm<sup>2</sup>。',
    answers: ['300'],
    explanation: '相似比（图上:实际）=1:5，面积比 =1<sup>2</sup>:5<sup>2</sup>=1:25。图上面积对应 1 份（12 cm<sup>2</sup>），实际面积对应 25 份，即 12×25=300 cm<sup>2</sup>。注意面积不能也按 1:5 缩放，长度缩小 5 倍时面积缩小 25 倍。'
  },
  {
    id: 'q-similarity-33',
    kp: 'similarity',
    difficulty: 'medium',
    type: 'fill',
    stem: '如图，在梯形 ABCD 中，AD∥BC，对角线 AC、BD 交于点 O。若 AD=3，BC=6，S<sub>△AOD</sub>=4，则 S<sub>△BOC</sub>=（　）<figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="梯形ABCD中AD平行BC，AD=3、BC=6，对角线AC与BD交于点O"><polygon points="115.3,53.0 26.0,187.0 294.0,187.0 249.3,53.0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="115.3" y1="53.0" x2="294.0" y2="187.0" stroke="currentColor" stroke-width="1.6"/><line x1="26.0" y1="187.0" x2="249.3" y2="53.0" stroke="currentColor" stroke-width="1.6"/><circle cx="115.3" cy="53.0" r="2.6" fill="currentColor"/><circle cx="249.3" cy="53.0" r="2.6" fill="currentColor"/><circle cx="26.0" cy="187.0" r="2.6" fill="currentColor"/><circle cx="294.0" cy="187.0" r="2.6" fill="currentColor"/><circle cx="174.9" cy="97.7" r="2.6" fill="currentColor"/><text x="106.6" y="43.4" font-size="13" font-family="inherit" fill="currentColor">A</text><text x="259.4" y="44.8" font-size="13" font-family="inherit" fill="currentColor">D</text><text x="14.3" y="192.7" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="305.2" y="193.6" font-size="13" font-family="inherit" fill="currentColor">C</text><text x="174.9" y="84.7" font-size="13" font-family="inherit" fill="currentColor">O</text><text x="182.3" y="21.8" font-size="13" font-family="inherit" fill="currentColor">3</text><text x="160.0" y="218.2" font-size="13" font-family="inherit" fill="currentColor">6</text></svg></figure>',
    answers: ['16'],
    explanation: '由 AD∥BC 得内错角相等：∠ADO=∠CBO、∠DAO=∠BCO，又 ∠AOD=∠COB（对顶角），所以 △AOD∽△COB，相似比 =AD/BC=3/6=1/2。面积比等于相似比的平方 =1:4，所以 S<sub>△BOC</sub>=4×4=16。注意对应关系是 A↔C、D↔B（上底对下底），不是 A↔B。'
  },
  {
    id: 'q-similarity-34',
    kp: 'similarity',
    difficulty: 'medium',
    type: 'single',
    stem: '下列条件中，<b>不能</b>判定 △ABC∽△DEF 的是（　）',
    options: ['∠A=∠D，∠B=∠E', 'AB/DE=AC/DF，且 ∠A=∠D', 'AB/DE=BC/EF=AC/DF', 'AB/DE=AC/DF，且 ∠B=∠E'],
    answer: 3,
    explanation: 'A 是「两角分别相等」（AA）；B 中 ∠A 是 AB 与 AC 的夹角、∠D 是 DE 与 DF 的夹角，属「两边成比例且夹角相等」（SAS）；C 是三边成比例（SSS）；三者都能判定相似。D 中 AB、AC 的夹角是 ∠A，而 ∠B 是边 AC 的对角，不是这两条边的夹角，属「两边成比例且其中一边的对角相等」，这种条件下三角形形状不能唯一确定，不能判定相似。所以选 D。'
  },
  {
    id: 'q-similarity-35',
    kp: 'similarity',
    difficulty: 'medium',
    type: 'fill',
    stem: '已知 x/2=y/3=z/4（x、y、z 均不为 0），则 (x+y+z)/z=（　）。',
    answers: ['9/4'],
    explanation: '设 x/2=y/3=z/4=k（k≠0），则 x=2k、y=3k、z=4k。所以 (x+y+z)/z=(2k+3k+4k)/(4k)=9k/(4k)=9/4。核对：取 k=1 得 x=2、y=3、z=4，(2+3+4)/4=9/4 ✓。'
  },
  {
    id: 'q-similarity-36',
    kp: 'similarity',
    difficulty: 'hard',
    type: 'single',
    stem: '在 Rt△ABC 中，∠ACB=90°，D 是斜边 AB 上一点且 CD⊥AB。若 AD=3、DB=12，则 △ABC 的面积为（　）<figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="直角三角形ABC中角ACB为直角，CD是斜边AB上的高，D为垂足"><polygon points="26.0,173.6 294.0,173.6 79.6,66.4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="79.6" y1="66.4" x2="79.6" y2="173.6" stroke="currentColor" stroke-width="1.6"/><circle cx="26.0" cy="173.6" r="2.6" fill="currentColor"/><circle cx="79.6" cy="173.6" r="2.6" fill="currentColor"/><circle cx="294.0" cy="173.6" r="2.6" fill="currentColor"/><circle cx="79.6" cy="66.4" r="2.6" fill="currentColor"/><text x="13.5" y="177.2" font-size="13" font-family="inherit" fill="currentColor">A</text><text x="79.6" y="186.6" font-size="13" font-family="inherit" fill="currentColor">D</text><text x="306.8" y="175.6" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="73.8" y="54.8" font-size="13" font-family="inherit" fill="currentColor">C</text><text x="52.8" y="204.8" font-size="13" font-family="inherit" fill="currentColor">3</text><text x="186.8" y="204.8" font-size="13" font-family="inherit" fill="currentColor">12</text><text x="110.8" y="120.0" font-size="13" font-family="inherit" fill="currentColor">6</text></svg></figure>',
    options: ['45', '90', '36', '30'],
    answer: 0,
    explanation: '因为 ∠ACB=90°、CD⊥AB，所以 ∠ACD=90°−∠BCD=∠CBD（同角的余角相等），又 ∠ADC=∠CDB=90°，故 △ACD∽△CBD（AA），对应边成比例 CD/BD=AD/CD，即 CD<sup>2</sup>=AD·DB=3×12=36，CD=6。AB=AD+DB=15，所以 S<sub>△ABC</sub>=½×AB×CD=½×15×6=45。选 A。核对：AC=√(AD·AB)=√45，BC=√(DB·AB)=√180，½×√45×√180=½×√8100=½×90=45 ✓。'
  },
  {
    id: 'q-similarity-37',
    kp: 'similarity',
    difficulty: 'hard',
    type: 'fill',
    stem: '△ABC 与 △A′B′C′ 关于点 O 位似，位似比为 2。若 S<sub>△ABC</sub>=7，则 S<sub>△A′B′C′</sub>=（　）',
    answers: ['28'],
    explanation: '位似图形一定是相似图形，相似比等于位似比的绝对值，即 2。面积比等于相似比的平方 =2<sup>2</sup>=4，所以 S<sub>△A′B′C′</sub>=7×4=28。核对：面积比 28:7=4:1，其算术平方根 2:1 正是相似比 ✓。'
  },
  {
    id: 'q-similarity-38',
    kp: 'similarity',
    difficulty: 'hard',
    type: 'fill',
    stem: '两个相似三角形的面积比为 16:25，它们的周长之差为 9，则较大三角形的周长为（　）。',
    answers: ['45'],
    explanation: '面积比 16:25 ⇒ 相似比 =√(16/25)=4/5 ⇒ 周长比 =4:5。设周长分别为 4k、5k，由 5k−4k=9 得 k=9，较大周长 =5×9=45。核对：较小周长 36，45−36=9 ✓，且 36:45=4:5，平方后 16:25 ✓。'
  },
  {
    id: 'q-similarity-39',
    kp: 'similarity',
    difficulty: 'hard',
    type: 'fill',
    stem: '如图，在 △ABC 中，D、E 分别在边 AB、AC 上，DE∥BC，且 AD:DB=1:2；过 E 作 EF∥AB 交 BC 于 F。若 S<sub>△ADE</sub>=2，则 S<sub>△EFC</sub>=（　）<figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="三角形ABC中D在AB上、E在AC上，DE平行BC；过E作EF平行AB交BC于F"><polygon points="85.6,45.6 26.0,194.4 294.0,194.4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="65.7" y1="95.2" x2="155.0" y2="95.2" stroke="currentColor" stroke-width="1.6"/><line x1="155.0" y1="95.2" x2="115.3" y2="194.4" stroke="currentColor" stroke-width="1.6"/><circle cx="85.6" cy="45.6" r="2.6" fill="currentColor"/><circle cx="65.7" cy="95.2" r="2.6" fill="currentColor"/><circle cx="26.0" cy="194.4" r="2.6" fill="currentColor"/><circle cx="115.3" cy="194.4" r="2.6" fill="currentColor"/><circle cx="294.0" cy="194.4" r="2.6" fill="currentColor"/><circle cx="155.0" cy="95.2" r="2.6" fill="currentColor"/><text x="80.5" y="33.6" font-size="13" font-family="inherit" fill="currentColor">A</text><text x="55.1" y="87.6" font-size="13" font-family="inherit" fill="currentColor">D</text><text x="14.8" y="201.1" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="113.5" y="207.3" font-size="13" font-family="inherit" fill="currentColor">F</text><text x="306.3" y="198.6" font-size="13" font-family="inherit" fill="currentColor">C</text><text x="162.9" y="84.8" font-size="13" font-family="inherit" fill="currentColor">E</text></svg></figure>',
    answers: ['8'],
    explanation: '① 由 DE∥BC 得 △ADE∽△ABC，相似比 =AD/AB=1/(1+2)=1/3，面积比 =1:9，所以 S<sub>△ABC</sub>=2×9=18。② 由 EF∥AB 得 ∠CEF=∠A（同位角），又 ∠C 是公共角，所以 △EFC∽△ABC；其相似比 =EC/AC。因 AE/AC=1/3，故 EC/AC=1−1/3=2/3，面积比 =(2/3)<sup>2</sup>=4/9。所以 S<sub>△EFC</sub>=18×4/9=8。'
  },
  {
    id: 'q-similarity-40',
    kp: 'similarity',
    difficulty: 'hard',
    type: 'single',
    stem: '路灯灯柱高 6 m，身高 1.5 m 的小明站在距灯柱底部 4 m 处，则他的影长为（　）m',
    options: ['4/3', '1', '2', '8/5'],
    answer: 0,
    explanation: '设影长为 x m。人与灯柱都竖直，光线是直线，所以「人头顶—脚底—影尖」构成的小三角形与「灯顶—灯柱底—影尖」构成的大三角形相似，相似比 =1.5/6=1/4。小三角形的水平边是 x，大三角形对应的水平边是 x+4（影子在人身后，影尖到灯柱底的距离为 x+4），故 x/(x+4)=1/4，4x=x+4，3x=4，x=4/3。选 A。核对：x/(x+4)=(4/3)/(16/3)=1/4 ✓。'
  },
  {
    id: 'q-similarity-41',
    kp: 'similarity',
    difficulty: 'hard',
    type: 'single',
    stem: '如图，在 △ABC 中，D、E 分别是边 AB、AC 的中点。随机向 △ABC 内部投一点（该点落在三角形内任何位置的可能性相同），则该点落在 △ADE 内的概率是（　）<figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="三角形ABC中D、E分别是AB、AC的中点，连接DE"><polygon points="133.2,39.6 26.0,200.4 294.0,200.4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="79.6" y1="120.0" x2="213.6" y2="120.0" stroke="currentColor" stroke-width="1.6"/><circle cx="133.2" cy="39.6" r="2.6" fill="currentColor"/><circle cx="26.0" cy="200.4" r="2.6" fill="currentColor"/><circle cx="294.0" cy="200.4" r="2.6" fill="currentColor"/><circle cx="79.6" cy="120.0" r="2.6" fill="currentColor"/><circle cx="213.6" cy="120.0" r="2.6" fill="currentColor"/><text x="131.1" y="26.8" font-size="13" font-family="inherit" fill="currentColor">A</text><text x="14.5" y="206.4" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="305.9" y="205.7" font-size="13" font-family="inherit" fill="currentColor">C</text><text x="66.9" y="117.1" font-size="13" font-family="inherit" fill="currentColor">D</text><text x="226.2" y="116.8" font-size="13" font-family="inherit" fill="currentColor">E</text></svg></figure>',
    options: ['1/4', '1/2', '1/3', '1/9'],
    answer: 0,
    explanation: '由中位线定理 DE∥BC 且 DE=½BC，得 △ADE∽△ABC，相似比 1/2，面积比 =1<sup>2</sup>:2<sup>2</sup>=1:4，即 S<sub>△ADE</sub>=¼S<sub>△ABC</sub>。投点落在某区域内的概率等于该区域面积与总面积之比（几何概型），所以 P=S<sub>△ADE</sub>/S<sub>△ABC</sub>=1/4。选 A。若误以为「三条中位线把三角形分成四个全等小三角形、命中的是其中 3 个」，会错答 3/4——题目问的是 △ADE 这一个。',
    tags: ['probability']
  },
  {
    id: 'q-similarity-42',
    kp: 'similarity',
    difficulty: 'hard',
    type: 'fill',
    stem: '在 Rt△ABC 中，∠ACB=90°，CD 是斜边 AB 上的高。若 AD=x，DB=x+5，CD=6，则 x 的值为（　）。',
    answers: ['4'],
    explanation: '由 ∠ACB=90°、CD⊥AB 得 ∠ACD=∠CBD（同角的余角相等），∠ADC=∠CDB=90°，所以 △ACD∽△CBD，对应边成比例 CD/BD=AD/CD，即 CD<sup>2</sup>=AD·DB。代入得 36=x(x+5)，整理成 x<sup>2</sup>+5x−36=0，因式分解 (x+9)(x−4)=0，解得 x=4 或 x=−9。线段长度必须为正，舍去 −9，所以 x=4。核对：AD=4、DB=9、CD=6，CD<sup>2</sup>=36=4×9 ✓，AB=13，CD=√(4×9)=6 ✓。',
    tags: ['quad-eq']
  },
  {
    id: 'q-similarity-43',
    kp: 'similarity',
    difficulty: 'hard',
    type: 'single',
    stem: '如图，从 ⊙O 外一点 P 引两条割线 PAB 与 PCD，A、C 是离 P 较近的交点。若 PA=3，AB=9，PC=4，则 CD=（　）<figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="圆O外一点P，两条割线PAB、PCD分别交圆于A、B和C、D，PA=3、AB=9、PC=4"><circle cx="135.9" cy="120.0" r="94.0" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="278.1" y1="120.0" x2="78.2" y2="45.8" stroke="currentColor" stroke-width="1.6"/><line x1="278.1" y1="120.0" x2="148.2" y2="213.2" stroke="currentColor" stroke-width="1.6"/><line x1="228.1" y1="101.5" x2="220.3" y2="161.4" stroke="currentColor" stroke-width="1.6"/><line x1="78.2" y1="45.8" x2="148.2" y2="213.2" stroke="currentColor" stroke-width="1.6"/><circle cx="278.1" cy="120.0" r="2.6" fill="currentColor"/><circle cx="228.1" cy="101.5" r="2.6" fill="currentColor"/><circle cx="78.2" cy="45.8" r="2.6" fill="currentColor"/><circle cx="220.3" cy="161.4" r="2.6" fill="currentColor"/><circle cx="148.2" cy="213.2" r="2.6" fill="currentColor"/><text x="291.0" y="118.8" font-size="13" font-family="inherit" fill="currentColor">P</text><text x="238.7" y="93.9" font-size="13" font-family="inherit" fill="currentColor">A</text><text x="67.7" y="38.1" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="229.0" y="171.1" font-size="13" font-family="inherit" fill="currentColor">C</text><text x="142.3" y="224.8" font-size="13" font-family="inherit" fill="currentColor">D</text><text x="263.9" y="81.5" font-size="13" font-family="inherit" fill="currentColor">3</text><text x="142.3" y="102.9" font-size="13" font-family="inherit" fill="currentColor">9</text><text x="267.4" y="166.1" font-size="13" font-family="inherit" fill="currentColor">4</text></svg></figure>',
    options: ['5', '6', '8', '4'],
    answer: 0,
    explanation: '连接 AC、BD。四边形 ABDC 是圆内接四边形，圆内接四边形的外角等于它的内对角，所以 ∠PAC=∠PDB；又 ∠P 是两条割线的公共角，故 △PAC∽△PDB（AA），对应边成比例 PA/PD=PC/PB，交叉相乘即 PA·PB=PC·PD（割线定理）。由 PB=PA+AB=3+9=12 得 3×12=4·PD，PD=9，所以 CD=PD−PC=9−4=5。选 A。核对：PA·PB=36，PC·PD=4×9=36 ✓。',
    tags: ['circle']
  },
  {
    id: 'q-similarity-44',
    kp: 'similarity',
    difficulty: 'hard',
    type: 'fill',
    stem: '如图，从 ⊙O 外一点 P 引切线 PA（A 为切点）和割线 PBC（B、C 在圆上，顺序为 P—B—C）。若 PA=6，PB=4，则 BC=（　）<figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="圆O外一点P，PA为切线、A为切点，割线PBC交圆于B、C，PA=6、PB=4"><circle cx="122.3" cy="120.0" r="94.0" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="291.7" y1="120.0" x2="174.4" y2="41.8" stroke="currentColor" stroke-width="1.6"/><line x1="291.7" y1="120.0" x2="101.1" y2="28.4" stroke="currentColor" stroke-width="1.6"/><line x1="174.4" y1="41.8" x2="207.0" y2="79.3" stroke="currentColor" stroke-width="1.6"/><line x1="174.4" y1="41.8" x2="101.1" y2="28.4" stroke="currentColor" stroke-width="1.6"/><circle cx="291.7" cy="120.0" r="2.6" fill="currentColor"/><circle cx="174.4" cy="41.8" r="2.6" fill="currentColor"/><circle cx="207.0" cy="79.3" r="2.6" fill="currentColor"/><circle cx="101.1" cy="28.4" r="2.6" fill="currentColor"/><text x="303.2" y="126.1" font-size="13" font-family="inherit" fill="currentColor">P</text><text x="179.4" y="29.8" font-size="13" font-family="inherit" fill="currentColor">A</text><text x="202.0" y="91.3" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="89.1" y="23.4" font-size="13" font-family="inherit" fill="currentColor">C</text><text x="250.4" y="54.9" font-size="13" font-family="inherit" fill="currentColor">6</text><text x="235.9" y="127.8" font-size="13" font-family="inherit" fill="currentColor">4</text></svg></figure>',
    answers: ['5'],
    explanation: '弦切角 ∠PAB 等于它所夹的弧 AB 所对的圆周角 ∠PCA（弦切角定理），又 ∠P 是公共角，所以 △PAB∽△PCA（AA），对应边成比例 PA/PC=PB/PA，即 PA<sup>2</sup>=PB·PC（切割线定理）。代入 36=4·PC，得 PC=9，于是 BC=PC−PB=9−4=5。核对：PA<sup>2</sup>=36=4×9=PB·PC ✓。',
    tags: ['circle']
  },
  {
    id: 'q-similarity-45',
    kp: 'similarity',
    difficulty: 'hard',
    type: 'single',
    stem: '在 ⊙O 中，AB 为直径，点 C 在圆上（不与 A、B 重合），CH⊥AB 于 H。若 AH=1，HB=4，则 CH=（　）',
    options: ['2', '3', '2.5', '4'],
    answer: 0,
    explanation: '连接 AC、BC。AB 是直径，所以 ∠ACB=90°（直径所对的圆周角是直角）；由 CH⊥AB 得 ∠AHC=∠CHB=90°，且 ∠ACH=90°−∠HCB=∠CBH（同角的余角相等），故 △ACH∽△CBH（AA），对应边成比例 CH/BH=AH/CH，即 CH<sup>2</sup>=AH·HB=1×4=4，CH=2（长度取正值）。选 A。核对：AB=AH+HB=5，AC<sup>2</sup>=AH·AB=5、BC<sup>2</sup>=HB·AB=20，而 5+20=25=AB<sup>2</sup> ✓。',
    tags: ['circle']
  },
  {
    id: 'q-similarity-46',
    kp: 'similarity',
    difficulty: 'hard',
    type: 'fill',
    stem: '在平面直角坐标系中，O 为原点，抛物线 y=−(1/4)x<sup>2</sup>+(5/4)x+6 与 y 轴交于点 A，与 x 轴正半轴交于点 B。点 P 在 y 轴正半轴上且不与 A 重合。若 △OPB∽△OBA，则 OP=（　）。',
    answers: ['32/3'],
    explanation: '先求抛物线与坐标轴的交点（二次函数的基本功）：令 x=0，得 y=6，所以 A(0,6)，OA=6；令 y=0，解 −(1/4)x<sup>2</sup>+(5/4)x+6=0，两边同乘 −4 得 x<sup>2</sup>−5x−24=0，因式分解 (x−8)(x+3)=0，取 x 轴正半轴上的交点得 x=8，所以 B(8,0)，OB=8。再回到相似：两个三角形的直角都在 O 处（OA、OP 在 y 轴上，OB 在 x 轴上），由 △OPB∽△OBA 的字母顺序得 O↔O、P↔B、B↔A，两条直角边对应成比例，OP/OB=OB/OA，即 OP/8=8/6，OP=64/6=32/3≈10.67。若取 OP=OA=6，则 P 与 A 重合，与题设「P 不与 A 重合」矛盾，舍去。核对：OP/OB=(32/3)/8=4/3，OB/OA=8/6=4/3 ✓，且 OP≈10.67>0 确实落在 y 轴正半轴上、与 A(0,6) 不同 ✓。',
    tags: ['quad-func']
  },
  {
    id: 'q-similarity-47',
    kp: 'similarity',
    difficulty: 'hard',
    type: 'single',
    stem: '将 △ABC 绕顶点 A 按顺时针方向旋转 90° 得到 △AB′C′。若 AB=3，AC=5，则 CC′=（　）',
    options: ['5√2', '3√2', '5', '8'],
    answer: 0,
    explanation: '旋转不改变图形的大小，所以 AC′=AC=5、AB′=AB=3；旋转角 ∠CAC′=90°。于是 △ACC′ 是等腰直角三角形，CC′=√(AC<sup>2</sup>+AC′<sup>2</sup>)=√(25+25)=5√2。选 A。另一条线索可作印证：△ABB′ 也是等腰直角三角形，BB′=3√2；而 △ABB′∽△ACC′（AB/AC=AB′/AC′=3/5，夹角都是 90°），对应边比 3:5，(5√2):(3√2)=5:3，与相似比互为倒数，一致 ✓。',
    tags: ['rotation']
  },
  {
    id: 'q-similarity-48',
    kp: 'similarity',
    difficulty: 'hard',
    type: 'single',
    stem: '把 △ABC 绕点 A 旋转一个角（0°&lt;旋转角&lt;180°）得到 △AB′C′。若 AB=2，AC=3，则 △ABB′ 与 △ACC′ 的周长之比为（　）',
    options: ['2:3', '4:9', '3:2', '1:1'],
    answer: 0,
    explanation: '旋转后 AB′=AB=2、AC′=AC=3，且 ∠BAB′=∠CAC′（都等于旋转角）。于是 AB/AC=AB′/AC′=2/3，且夹角相等，由 SAS 得 △ABB′∽△ACC′，相似比 =AB/AC=2/3。相似三角形的周长比等于相似比，所以周长之比为 2:3。选 A。4:9 是把面积比当成了周长比（面积比才是 4:9）；3:2 方向写反。',
    tags: ['rotation']
  },
  {
    id: 'q-similarity-49',
    kp: 'similarity',
    difficulty: 'hard',
    type: 'fill',
    stem: '一幅矩形图纸的长为 (x+2) cm、宽为 x cm。把它按相似比 1:2 放大得到一张相似矩形图纸，放大后的面积为 96 cm<sup>2</sup>，则 x=（　）。',
    answers: ['4'],
    explanation: '原矩形面积为 x(x+2)。按相似比 1:2 放大，面积放大 2<sup>2</sup>=4 倍，所以 4x(x+2)=96，即 x(x+2)=24，整理成 x<sup>2</sup>+2x−24=0。因式分解 (x+6)(x−4)=0，得 x=4 或 x=−6。宽度必须为正，舍去 −6，所以 x=4。核对：原矩形 6 cm×4 cm，面积 24 cm<sup>2</sup>；放大 2 倍后 12 cm×8 cm，面积 96 cm<sup>2</sup> ✓。',
    tags: ['quad-eq']
  },
  {
    id: 'q-similarity-50',
    kp: 'similarity',
    difficulty: 'hard',
    type: 'fill',
    stem: '在平面直角坐标系中，O 为原点，抛物线 y=−(1/2)x<sup>2</sup>−x+4 与 y 轴交于点 A，与 x 轴正半轴交于点 B。点 C 在 x 轴的正半轴上且不与 B 重合。若 △OAC∽△OBA，则点 C 的横坐标为（　）。',
    answers: ['8'],
    explanation: '先求抛物线与坐标轴的交点（二次函数的基本功）：令 x=0，得 y=4，所以 A(0,4)，OA=4；令 y=0，解 −(1/2)x<sup>2</sup>−x+4=0，两边同乘 −2 得 x<sup>2</sup>+2x−8=0，因式分解 (x+4)(x−2)=0，取 x 轴正半轴上的交点得 x=2，所以 B(2,0)，OB=2。再回到相似：△OAB 的直角在 O 处（OA 在 y 轴上、OB 在 x 轴上），△OAC 的直角也在 O 处，两条直角边为 OA=4 与 OC；由 △OAC∽△OBA 的字母顺序得 O↔O、A↔B、C↔A，于是 OC/OA=OA/OB，即 OC/4=4/2，OC=8，所以 C 的横坐标为 8（C 在 x 轴正半轴）。若取 OC=2，则 C 与 B 重合，与题设矛盾，舍去。核对：OC/OA=8/4=2，OA/OB=4/2=2 ✓，两三角形相似且 △OAC 更大。',
    tags: ['quad-func']
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
    stem: '如图，转盘被均分成 8 个全等的扇形，其中 3 个扇形画有阴影。任意转动转盘一次，指针落在阴影区域的概率是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="转盘被均分为8个全等扇形并标有数字1至8，其中3个相邻扇形画斜线阴影，指针指向正上方"><circle cx="160" cy="122" r="90" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="122" x2="250" y2="122" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="122" x2="223.6" y2="58.4" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="122" x2="160" y2="32" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="122" x2="96.4" y2="58.4" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="122" x2="70" y2="122" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="122" x2="96.4" y2="185.6" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="122" x2="160" y2="212" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="122" x2="223.6" y2="185.6" stroke="currentColor" stroke-width="1.6"/><line x1="159.5" y1="49.5" x2="164.5" y2="54.5" stroke="currentColor" stroke-width="1.2"/><line x1="192.5" y1="49.5" x2="197.5" y2="54.5" stroke="currentColor" stroke-width="1.2"/><line x1="198.5" y1="60.5" x2="203.5" y2="65.5" stroke="currentColor" stroke-width="1.2"/><line x1="209.5" y1="60.5" x2="214.5" y2="65.5" stroke="currentColor" stroke-width="1.2"/><line x1="159.5" y1="71.5" x2="164.5" y2="76.5" stroke="currentColor" stroke-width="1.2"/><line x1="203.5" y1="71.5" x2="208.5" y2="76.5" stroke="currentColor" stroke-width="1.2"/><line x1="214.5" y1="71.5" x2="219.5" y2="76.5" stroke="currentColor" stroke-width="1.2"/><line x1="165.5" y1="82.5" x2="170.5" y2="87.5" stroke="currentColor" stroke-width="1.2"/><line x1="176.5" y1="82.5" x2="181.5" y2="87.5" stroke="currentColor" stroke-width="1.2"/><line x1="187.5" y1="82.5" x2="192.5" y2="87.5" stroke="currentColor" stroke-width="1.2"/><line x1="198.5" y1="82.5" x2="203.5" y2="87.5" stroke="currentColor" stroke-width="1.2"/><line x1="220.5" y1="82.5" x2="225.5" y2="87.5" stroke="currentColor" stroke-width="1.2"/><line x1="170.5" y1="93.5" x2="175.5" y2="98.5" stroke="currentColor" stroke-width="1.2"/><line x1="181.5" y1="93.5" x2="186.5" y2="98.5" stroke="currentColor" stroke-width="1.2"/><line x1="192.5" y1="93.5" x2="197.5" y2="98.5" stroke="currentColor" stroke-width="1.2"/><line x1="187.5" y1="104.5" x2="192.5" y2="109.5" stroke="currentColor" stroke-width="1.2"/><line x1="198.5" y1="104.5" x2="203.5" y2="109.5" stroke="currentColor" stroke-width="1.2"/><line x1="231.5" y1="104.5" x2="236.5" y2="109.5" stroke="currentColor" stroke-width="1.2"/><line x1="192.5" y1="115.5" x2="197.5" y2="120.5" stroke="currentColor" stroke-width="1.2"/><line x1="203.5" y1="115.5" x2="208.5" y2="120.5" stroke="currentColor" stroke-width="1.2"/><line x1="214.5" y1="115.5" x2="219.5" y2="120.5" stroke="currentColor" stroke-width="1.2"/><line x1="225.5" y1="115.5" x2="230.5" y2="120.5" stroke="currentColor" stroke-width="1.2"/><line x1="187.5" y1="126.5" x2="192.5" y2="131.5" stroke="currentColor" stroke-width="1.2"/><line x1="198.5" y1="126.5" x2="203.5" y2="131.5" stroke="currentColor" stroke-width="1.2"/><line x1="220.5" y1="126.5" x2="225.5" y2="131.5" stroke="currentColor" stroke-width="1.2"/><line x1="231.5" y1="126.5" x2="236.5" y2="131.5" stroke="currentColor" stroke-width="1.2"/><line x1="181.5" y1="137.5" x2="186.5" y2="142.5" stroke="currentColor" stroke-width="1.2"/><line x1="192.5" y1="137.5" x2="197.5" y2="142.5" stroke="currentColor" stroke-width="1.2"/><line x1="187.5" y1="148.5" x2="192.5" y2="153.5" stroke="currentColor" stroke-width="1.2"/><line x1="192.5" y1="148.5" x2="197.5" y2="153.5" stroke="currentColor" stroke-width="1.2"/><line x1="203.5" y1="159.5" x2="208.5" y2="164.5" stroke="currentColor" stroke-width="1.2"/><line x1="209.5" y1="170.5" x2="214.5" y2="175.5" stroke="currentColor" stroke-width="1.2"/><text x="183" y="70.6" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1</text><text x="215.4" y="103" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">2</text><text x="215.4" y="149" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">3</text><text x="183" y="181.4" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">4</text><text x="137" y="181.4" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">5</text><text x="104.6" y="149" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">6</text><text x="104.6" y="103" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">7</text><text x="137" y="70.6" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">8</text><line x1="160" y1="122" x2="160" y2="20" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="20" x2="155" y2="32" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="20" x2="165" y2="32" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="122" x2="148" y2="145" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><circle cx="160" cy="122" r="2.6" fill="currentColor"/><text x="144" y="160" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">O</text><text x="160" y="232" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">8 等分，阴影 3 份</text></svg></figure>',
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
  {
    id: 'q-probability-13',
    kp: 'probability',
    difficulty: 'basic',
    type: 'single',
    stem: '下列事件中，属于必然事件的是（　）',
    options: ['掷一枚质地均匀的骰子，朝上的点数是 7', '袋中只装有 5 个红球，从中任意摸出一个球，摸到红球', '掷一枚质地均匀的硬币，正面朝上', '明天太阳从西边升起'],
    answer: 1,
    explanation: '在一定条件下必然发生的事件叫必然事件，必然不发生的事件叫不可能事件，可能发生也可能不发生的事件叫随机事件。逐项判断：A 中骰子的点数只能是 1 到 6，出现 7 不可能发生，是不可能事件；B 中袋里全是红球，任意摸一个一定是红球，必然发生，是必然事件；C 中硬币可能正面也可能反面，是随机事件；D 中太阳不会从西边升起，是不可能事件。故选 B。'
  },
  {
    id: 'q-probability-14',
    kp: 'probability',
    difficulty: 'basic',
    type: 'single',
    stem: '一个均匀的正方体骰子，六个面上分别刻有 1、2、3、4、5、6 个圆点。任意抛掷一次，向上一面的点数比 4 大的概率是（　）',
    options: ['1/3', '1/2', '2/3', '1/6'],
    answer: 0,
    explanation: '骰子均匀，6 个面中每一个面朝上的机会相等，所以所有等可能结果共 n=6 种。点数比 4 大的只有 5 和 6，满足条件的结果 m=2 种。由等可能概型公式 P=m/n=2/6=1/3。故选 A。'
  },
  {
    id: 'q-probability-15',
    kp: 'probability',
    difficulty: 'basic',
    type: 'fill',
    stem: '不透明袋中装有 10 张大小相同的卡片，分别标有数字 1、2、…、10。从中随机抽出 1 张，抽到的卡片上的数字是 3 的倍数的概率是（　）。（填分数或小数均可）',
    answers: ['3/10', '0.3'],
    explanation: '10 张卡片大小相同，任抽 1 张时每张被抽到的机会相等，所有等可能结果 n=10 种。1 到 10 中 3 的倍数是 3、6、9，满足条件的结果 m=3 种，所以 P=m/n=3/10=0.3。注意 0 不在 1 到 10 之中，不要把 0 算进去。'
  },
  {
    id: 'q-probability-16',
    kp: 'probability',
    difficulty: 'basic',
    type: 'single',
    stem: '一个不透明的袋子中装有 3 个红球和 2 个白球，它们除颜色外完全相同。从袋中随机摸出 1 个球，摸到白球的概率是（　）',
    options: ['2/5', '3/5', '1/2', '2/3'],
    answer: 0,
    explanation: '袋中 3+2=5 个球除颜色外完全相同，每个球被摸到的机会相等，所有等可能结果 n=5 种。白球有 2 个，满足条件的结果 m=2 种，所以 P(白)=m/n=2/5。分母是球的总数 5，不是红球数 3。故选 A。'
  },
  {
    id: 'q-probability-17',
    kp: 'probability',
    difficulty: 'basic',
    type: 'fill',
    stem: '如图，一个转盘被平均分成 12 个全等的扇形，其中 3 个相邻的扇形涂成阴影（中奖区）。任意转动转盘一次，指针落在阴影区的概率是（　）。（填分数或小数均可）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="转盘被平均分成12个全等扇形，顺时针标有1至12，其中相邻的3个扇形(共90度)涂斜线成为阴影中奖区"><circle cx="160" cy="124" r="88" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,124 L160,36 A88,88 0 0,1 204,47.79 Z" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M160,124 L204,47.79 A88,88 0 0,1 236.21,80 Z" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M160,124 L236.21,80 A88,88 0 0,1 248,124 Z" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M160,124 L248,124 A88,88 0 0,1 236.21,168 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,124 L236.21,168 A88,88 0 0,1 204,200.21 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,124 L204,200.21 A88,88 0 0,1 160,212 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,124 L160,212 A88,88 0 0,1 116,200.21 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,124 L116,200.21 A88,88 0 0,1 83.79,168 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,124 L83.79,168 A88,88 0 0,1 72,124 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,124 L72,124 A88,88 0 0,1 83.79,80 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,124 L83.79,80 A88,88 0 0,1 116,47.79 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,124 L116,47.79 A88,88 0 0,1 160,36 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="176.4" y="66.8" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">1</text><text x="204.8" y="83.2" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">2</text><text x="221.2" y="111.6" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">3</text><text x="221.2" y="144.4" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">4</text><text x="204.8" y="172.8" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">5</text><text x="176.4" y="189.2" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">6</text><text x="143.6" y="189.2" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">7</text><text x="115.2" y="172.8" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">8</text><text x="98.8" y="144.4" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">9</text><text x="98.8" y="111.6" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">10</text><text x="115.2" y="83.2" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">11</text><text x="143.6" y="66.8" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">12</text><circle cx="160" cy="124" r="2.4" fill="currentColor"/></svg></figure>',
    answers: ['1/4', '0.25'],
    explanation: '12 个扇形全等，指针停在每个扇形上的机会相等，所有等可能结果 n=12 种。阴影区占 3 个扇形，这 3 个扇形的圆心角共 3×30°=90°，满足条件的结果 m=3 种；用面积比算也一样：90°÷360°=1/4。所以 P=m/n=3/12=1/4=0.25。'
  },
  {
    id: 'q-probability-18',
    kp: 'probability',
    difficulty: 'basic',
    type: 'single',
    stem: '做"抛图钉"的重复试验，共抛掷 1000 次，其中钉尖朝上 620 次。由此估计抛一次图钉时钉尖朝上的概率约为（　）',
    options: ['0.38', '0.5', '0.62', '0.62 次'],
    answer: 2,
    explanation: '当试验次数很大时，事件发生的频率会稳定在某个常数附近，可用这个常数估计概率。本题 n=1000 次试验，钉尖朝上的次数 m=620，频率 = m/n = 620/1000 = 0.62，所以估计钉尖朝上的概率约为 0.62。D 项把概率与次数混淆了，概率是不带单位的数。故选 C。'
  },
  {
    id: 'q-probability-19',
    kp: 'probability',
    difficulty: 'basic',
    type: 'fill',
    stem: '有 20 张卡片，分别标有 1、2、3、…、20，从中随机抽取 1 张，抽到的数字是质数的概率是（　）。（填分数或小数均可）',
    answers: ['2/5', '0.4'],
    explanation: '20 张卡片被抽到的机会相等，所有等可能结果 n=20 种。1 到 20 中的质数是 2、3、5、7、11、13、17、19，满足条件的结果 m=8 种（1 既不是质数也不是合数，不能计入）。所以 P=m/n=8/20=2/5=0.4。'
  },
  {
    id: 'q-probability-20',
    kp: 'probability',
    difficulty: 'basic',
    type: 'fill',
    stem: '如图，一个长方形被平均分成 6 列、4 行共 24 个大小相同的小正方形，其中有 9 个小正方形涂成阴影。向这个长方形内随机投一点（点落在长方形内每一处的机会相等），则该点落在阴影部分的概率是（　）。（填分数或小数均可）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="长方形被平均分成6列4行共24个相同小正方形，其中9个小正方形涂斜线为阴影"><polygon points="40,44 280,44 280,204 40,204" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="80" y1="44" x2="80" y2="204" stroke="currentColor" stroke-width="0.8"/><line x1="120" y1="44" x2="120" y2="204" stroke="currentColor" stroke-width="0.8"/><line x1="160" y1="44" x2="160" y2="204" stroke="currentColor" stroke-width="0.8"/><line x1="200" y1="44" x2="200" y2="204" stroke="currentColor" stroke-width="0.8"/><line x1="240" y1="44" x2="240" y2="204" stroke="currentColor" stroke-width="0.8"/><line x1="40" y1="84" x2="280" y2="84" stroke="currentColor" stroke-width="0.8"/><line x1="40" y1="124" x2="280" y2="124" stroke="currentColor" stroke-width="0.8"/><line x1="40" y1="164" x2="280" y2="164" stroke="currentColor" stroke-width="0.8"/><polygon points="40,44 80,44 80,84 40,84" fill="none" stroke="currentColor" stroke-width="1"/><line x1="49.6" y1="70.4" x2="53.6" y2="81.6" stroke="currentColor" stroke-width="0.9"/><line x1="60.8" y1="70.4" x2="64.8" y2="81.6" stroke="currentColor" stroke-width="0.9"/><line x1="72" y1="70.4" x2="76" y2="81.6" stroke="currentColor" stroke-width="0.9"/><polygon points="80,44 120,44 120,84 80,84" fill="none" stroke="currentColor" stroke-width="1"/><line x1="89.6" y1="70.4" x2="93.6" y2="81.6" stroke="currentColor" stroke-width="0.9"/><line x1="100.8" y1="70.4" x2="104.8" y2="81.6" stroke="currentColor" stroke-width="0.9"/><line x1="112" y1="70.4" x2="116" y2="81.6" stroke="currentColor" stroke-width="0.9"/><polygon points="120,44 160,44 160,84 120,84" fill="none" stroke="currentColor" stroke-width="1"/><line x1="129.6" y1="70.4" x2="133.6" y2="81.6" stroke="currentColor" stroke-width="0.9"/><line x1="140.8" y1="70.4" x2="144.8" y2="81.6" stroke="currentColor" stroke-width="0.9"/><line x1="152" y1="70.4" x2="156" y2="81.6" stroke="currentColor" stroke-width="0.9"/><polygon points="160,84 200,84 200,124 160,124" fill="none" stroke="currentColor" stroke-width="1"/><line x1="169.6" y1="110.4" x2="173.6" y2="121.6" stroke="currentColor" stroke-width="0.9"/><line x1="180.8" y1="110.4" x2="184.8" y2="121.6" stroke="currentColor" stroke-width="0.9"/><line x1="192" y1="110.4" x2="196" y2="121.6" stroke="currentColor" stroke-width="0.9"/><polygon points="200,84 240,84 240,124 200,124" fill="none" stroke="currentColor" stroke-width="1"/><line x1="209.6" y1="110.4" x2="213.6" y2="121.6" stroke="currentColor" stroke-width="0.9"/><line x1="220.8" y1="110.4" x2="224.8" y2="121.6" stroke="currentColor" stroke-width="0.9"/><line x1="232" y1="110.4" x2="236" y2="121.6" stroke="currentColor" stroke-width="0.9"/><polygon points="80,124 120,124 120,164 80,164" fill="none" stroke="currentColor" stroke-width="1"/><line x1="89.6" y1="150.4" x2="93.6" y2="161.6" stroke="currentColor" stroke-width="0.9"/><line x1="100.8" y1="150.4" x2="104.8" y2="161.6" stroke="currentColor" stroke-width="0.9"/><line x1="112" y1="150.4" x2="116" y2="161.6" stroke="currentColor" stroke-width="0.9"/><polygon points="240,124 280,124 280,164 240,164" fill="none" stroke="currentColor" stroke-width="1"/><line x1="249.6" y1="150.4" x2="253.6" y2="161.6" stroke="currentColor" stroke-width="0.9"/><line x1="260.8" y1="150.4" x2="264.8" y2="161.6" stroke="currentColor" stroke-width="0.9"/><line x1="272" y1="150.4" x2="276" y2="161.6" stroke="currentColor" stroke-width="0.9"/><polygon points="120,164 160,164 160,204 120,204" fill="none" stroke="currentColor" stroke-width="1"/><line x1="129.6" y1="190.4" x2="133.6" y2="201.6" stroke="currentColor" stroke-width="0.9"/><line x1="140.8" y1="190.4" x2="144.8" y2="201.6" stroke="currentColor" stroke-width="0.9"/><line x1="152" y1="190.4" x2="156" y2="201.6" stroke="currentColor" stroke-width="0.9"/><polygon points="160,164 200,164 200,204 160,204" fill="none" stroke="currentColor" stroke-width="1"/><line x1="169.6" y1="190.4" x2="173.6" y2="201.6" stroke="currentColor" stroke-width="0.9"/><line x1="180.8" y1="190.4" x2="184.8" y2="201.6" stroke="currentColor" stroke-width="0.9"/><line x1="192" y1="190.4" x2="196" y2="201.6" stroke="currentColor" stroke-width="0.9"/></svg></figure>',
    answers: ['3/8', '0.375'],
    explanation: '这是几何概型，概率等于面积之比。24 个小正方形大小相同，可把总面积看成 n=24 个等面积的单位格；阴影部分由 m=9 个单位格拼成，所以 P = 阴影面积÷总面积 = 9/24 = 3/8 = 0.375。也可以数格子理解：阴影 9 格、空白 15 格，概率是 9/(9+15)=3/8，而不是 9/15=3/5。'
  },
  {
    id: 'q-probability-21',
    kp: 'probability',
    difficulty: 'basic',
    type: 'single',
    stem: '8 名同学依次抽签，签筒中有 8 张大小相同的签，其中 3 张写着"中奖"、5 张写着"谢谢参与"。小明第一个抽，他抽到"中奖"签的概率是（　）',
    options: ['3/8', '1/3', '5/8', '3/5'],
    answer: 0,
    explanation: '8 张签大小相同，任意抽 1 张时每张被抽到的机会相等，所有等可能结果 n=8 种；"中奖"签有 3 张，满足条件的结果 m=3 种，所以 P=m/n=3/8。3:5 是中奖签与不中奖签的数量之比，不是概率，概率的分母必须是全部签数 8。故选 A。'
  },
  {
    id: 'q-probability-22',
    kp: 'probability',
    difficulty: 'medium',
    type: 'fill',
    stem: '把一枚质地均匀的骰子先后抛掷两次，两次朝上的点数相加，则点数之和等于 8 的概率是（　）',
    answers: ['5/36'],
    explanation: '两次抛掷要按有序数对计数：第一次 6 种、第二次 6 种，所有等可能结果 n=6×6=36 种。和为 8 的有序数对是 (2,6)、(3,5)、(4,4)、(5,3)、(6,2)，满足条件的结果 m=5 种（(2,6) 与 (6,2) 是两种不同结果，而 (4,4) 只算一种）。所以 P=m/n=5/36。'
  },
  {
    id: 'q-probability-23',
    kp: 'probability',
    difficulty: 'medium',
    type: 'fill',
    stem: '一个袋中装有 3 个红球和 2 个白球，除颜色外完全相同。从中不放回地依次摸出 2 个球（第一次摸出的球不再放回袋中），则两次都摸到红球的概率是（　）',
    answers: ['3/10', '0.3'],
    explanation: '本题是"不放回"摸球，第二次摸时袋中球数已经减少。按有序结果计数：第一次从 5 个球中摸 1 个有 5 种，第二次从剩下的 4 个球中摸 1 个有 4 种，所有等可能结果 n=5×4=20 种。两次都红：第一次从 3 个红球中摸（3 种），第二次从剩下的 2 个红球中摸（2 种），满足条件的结果 m=3×2=6 种，所以 P=m/n=6/20=3/10=0.3。分步相乘也一致：3/5×2/4=3/10。'
  },
  {
    id: 'q-probability-24',
    kp: 'probability',
    difficulty: 'medium',
    type: 'single',
    stem: '袋中装有 2 个红球和 1 个白球，除颜色外完全相同。每次摸出 1 个球，记下颜色后放回袋中摇匀，再摸下一次。连续摸两次，则两次都摸到红球的概率是（　）',
    options: ['1/3', '4/9', '2/3', '1/9'],
    answer: 1,
    explanation: '题目明确"记下颜色后放回"，属于有放回摸球，两次摸球互不影响。每次摸到红球的概率都是 2/3，所有等可能结果 n=3×3=9 种（每次袋中都是 3 个球），两次都红的结果 m=2×2=4 种，所以 P=4/9。若误按不放回计算会得到 2/3×1/2=1/3（A 项），这是本题的易错点。故选 B。'
  },
  {
    id: 'q-probability-25',
    kp: 'probability',
    difficulty: 'medium',
    type: 'fill',
    stem: '如图，先转动一个被平均分成 4 个扇形的转盘（分别标有 1、2、3、4）一次，再掷一枚质地均匀的骰子一次，表中列出了两数相乘的全部结果。则两数之积为奇数的概率是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="列表法表格：列标题为骰子点数1至6，行标题为转盘数字1至4，格内为两数之积，积为奇数的格子涂斜线"><text x="160" y="24" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">转盘×骰子：格内为两数之积</text><polygon points="48,56 264,56 264,200 48,200" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="84" y1="56" x2="84" y2="200" stroke="currentColor" stroke-width="0.8"/><line x1="120" y1="56" x2="120" y2="200" stroke="currentColor" stroke-width="0.8"/><line x1="156" y1="56" x2="156" y2="200" stroke="currentColor" stroke-width="0.8"/><line x1="192" y1="56" x2="192" y2="200" stroke="currentColor" stroke-width="0.8"/><line x1="228" y1="56" x2="228" y2="200" stroke="currentColor" stroke-width="0.8"/><line x1="48" y1="92" x2="264" y2="92" stroke="currentColor" stroke-width="0.8"/><line x1="48" y1="128" x2="264" y2="128" stroke="currentColor" stroke-width="0.8"/><line x1="48" y1="164" x2="264" y2="164" stroke="currentColor" stroke-width="0.8"/><polygon points="48,56 84,56 84,92 48,92" fill="none" stroke="currentColor" stroke-width="1"/><line x1="56.64" y1="79.76" x2="60.24" y2="89.84" stroke="currentColor" stroke-width="0.9"/><line x1="66.72" y1="79.76" x2="70.32" y2="89.84" stroke="currentColor" stroke-width="0.9"/><line x1="76.8" y1="79.76" x2="80.4" y2="89.84" stroke="currentColor" stroke-width="0.9"/><polygon points="120,56 156,56 156,92 120,92" fill="none" stroke="currentColor" stroke-width="1"/><line x1="128.64" y1="79.76" x2="132.24" y2="89.84" stroke="currentColor" stroke-width="0.9"/><line x1="138.72" y1="79.76" x2="142.32" y2="89.84" stroke="currentColor" stroke-width="0.9"/><line x1="148.8" y1="79.76" x2="152.4" y2="89.84" stroke="currentColor" stroke-width="0.9"/><polygon points="192,56 228,56 228,92 192,92" fill="none" stroke="currentColor" stroke-width="1"/><line x1="200.64" y1="79.76" x2="204.24" y2="89.84" stroke="currentColor" stroke-width="0.9"/><line x1="210.72" y1="79.76" x2="214.32" y2="89.84" stroke="currentColor" stroke-width="0.9"/><line x1="220.8" y1="79.76" x2="224.4" y2="89.84" stroke="currentColor" stroke-width="0.9"/><polygon points="48,128 84,128 84,164 48,164" fill="none" stroke="currentColor" stroke-width="1"/><line x1="56.64" y1="151.76" x2="60.24" y2="161.84" stroke="currentColor" stroke-width="0.9"/><line x1="66.72" y1="151.76" x2="70.32" y2="161.84" stroke="currentColor" stroke-width="0.9"/><line x1="76.8" y1="151.76" x2="80.4" y2="161.84" stroke="currentColor" stroke-width="0.9"/><polygon points="120,128 156,128 156,164 120,164" fill="none" stroke="currentColor" stroke-width="1"/><line x1="128.64" y1="151.76" x2="132.24" y2="161.84" stroke="currentColor" stroke-width="0.9"/><line x1="138.72" y1="151.76" x2="142.32" y2="161.84" stroke="currentColor" stroke-width="0.9"/><line x1="148.8" y1="151.76" x2="152.4" y2="161.84" stroke="currentColor" stroke-width="0.9"/><polygon points="192,128 228,128 228,164 192,164" fill="none" stroke="currentColor" stroke-width="1"/><line x1="200.64" y1="151.76" x2="204.24" y2="161.84" stroke="currentColor" stroke-width="0.9"/><line x1="210.72" y1="151.76" x2="214.32" y2="161.84" stroke="currentColor" stroke-width="0.9"/><line x1="220.8" y1="151.76" x2="224.4" y2="161.84" stroke="currentColor" stroke-width="0.9"/><text x="66" y="72.96" font-size="11.5" font-family="inherit" fill="currentColor">1</text><text x="102" y="72.96" font-size="11.5" font-family="inherit" fill="currentColor">2</text><text x="138" y="72.96" font-size="11.5" font-family="inherit" fill="currentColor">3</text><text x="174" y="72.96" font-size="11.5" font-family="inherit" fill="currentColor">4</text><text x="210" y="72.96" font-size="11.5" font-family="inherit" fill="currentColor">5</text><text x="246" y="72.96" font-size="11.5" font-family="inherit" fill="currentColor">6</text><text x="66" y="108.96" font-size="11.5" font-family="inherit" fill="currentColor">2</text><text x="102" y="108.96" font-size="11.5" font-family="inherit" fill="currentColor">4</text><text x="138" y="108.96" font-size="11.5" font-family="inherit" fill="currentColor">6</text><text x="174" y="108.96" font-size="11.5" font-family="inherit" fill="currentColor">8</text><text x="210" y="108.96" font-size="11.5" font-family="inherit" fill="currentColor">10</text><text x="246" y="108.96" font-size="11.5" font-family="inherit" fill="currentColor">12</text><text x="66" y="144.96" font-size="11.5" font-family="inherit" fill="currentColor">3</text><text x="102" y="144.96" font-size="11.5" font-family="inherit" fill="currentColor">6</text><text x="138" y="144.96" font-size="11.5" font-family="inherit" fill="currentColor">9</text><text x="174" y="144.96" font-size="11.5" font-family="inherit" fill="currentColor">12</text><text x="210" y="144.96" font-size="11.5" font-family="inherit" fill="currentColor">15</text><text x="246" y="144.96" font-size="11.5" font-family="inherit" fill="currentColor">18</text><text x="66" y="180.96" font-size="11.5" font-family="inherit" fill="currentColor">4</text><text x="102" y="180.96" font-size="11.5" font-family="inherit" fill="currentColor">8</text><text x="138" y="180.96" font-size="11.5" font-family="inherit" fill="currentColor">12</text><text x="174" y="180.96" font-size="11.5" font-family="inherit" fill="currentColor">16</text><text x="210" y="180.96" font-size="11.5" font-family="inherit" fill="currentColor">20</text><text x="246" y="180.96" font-size="11.5" font-family="inherit" fill="currentColor">24</text><text x="66" y="48" font-size="11.5" font-family="inherit" fill="currentColor">1</text><text x="102" y="48" font-size="11.5" font-family="inherit" fill="currentColor">2</text><text x="138" y="48" font-size="11.5" font-family="inherit" fill="currentColor">3</text><text x="174" y="48" font-size="11.5" font-family="inherit" fill="currentColor">4</text><text x="210" y="48" font-size="11.5" font-family="inherit" fill="currentColor">5</text><text x="246" y="48" font-size="11.5" font-family="inherit" fill="currentColor">6</text><text x="40" y="78" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">1</text><text x="40" y="114" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">2</text><text x="40" y="150" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">3</text><text x="40" y="186" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">4</text></svg></figure>',
    answers: ['1/4', '0.25'],
    explanation: '转盘的 4 种结果与骰子的 6 种结果相互独立，所有等可能结果 n=4×6=24 种（即表中的 24 个格子）。积为奇数 ⇔ 两数都是奇数：转盘上的奇数有 1、3 共 2 个，骰子上的奇数有 1、3、5 共 3 个，满足条件的结果 m=2×3=6 种。所以 P=m/n=6/24=1/4=0.25。'
  },
  {
    id: 'q-probability-26',
    kp: 'probability',
    difficulty: 'medium',
    type: 'single',
    stem: '一个转盘被平均分成 3 个全等的扇形，分别标有 1、2、3。任意转动转盘两次（每次指针停在每个扇形上的机会相等），则两次指针所指数字相同的概率是（　）',
    options: ['1/9', '1/3', '2/3', '1/2'],
    answer: 1,
    explanation: '两次转动相互独立，按有序数对计数：所有等可能结果 n=3×3=9 种（11、12、13、21、22、23、31、32、33）。两次数字相同的有 11、22、33 三种，满足条件的结果 m=3 种，所以 P=m/n=3/9=1/3。注意"相同"不指定是哪个数字，三种情况都要算上。故选 B。'
  },
  {
    id: 'q-probability-27',
    kp: 'probability',
    difficulty: 'medium',
    type: 'single',
    stem: '有 4 张卡片，分别标有 1、2、3、4。随机抽出一张记下数字后放回，再抽出一张，表中列出了两次数字之和的全部结果。则两次数字之和为 6 的概率是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="列表法表格：行与列分别为第一次、第二次抽到的卡片数字1至4，格内为两次数字之和，和为6的格子涂斜线"><text x="160" y="30" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">第二次抽到的数字 1–4</text><polygon points="70,60 230,60 230,220 70,220" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="110" y1="60" x2="110" y2="220" stroke="currentColor" stroke-width="0.8"/><line x1="150" y1="60" x2="150" y2="220" stroke="currentColor" stroke-width="0.8"/><line x1="190" y1="60" x2="190" y2="220" stroke="currentColor" stroke-width="0.8"/><line x1="70" y1="100" x2="230" y2="100" stroke="currentColor" stroke-width="0.8"/><line x1="70" y1="140" x2="230" y2="140" stroke="currentColor" stroke-width="0.8"/><line x1="70" y1="180" x2="230" y2="180" stroke="currentColor" stroke-width="0.8"/><polygon points="190,100 230,100 230,140 190,140" fill="none" stroke="currentColor" stroke-width="1"/><line x1="199.6" y1="126.4" x2="203.6" y2="137.6" stroke="currentColor" stroke-width="0.9"/><line x1="210.8" y1="126.4" x2="214.8" y2="137.6" stroke="currentColor" stroke-width="0.9"/><line x1="222" y1="126.4" x2="226" y2="137.6" stroke="currentColor" stroke-width="0.9"/><polygon points="150,140 190,140 190,180 150,180" fill="none" stroke="currentColor" stroke-width="1"/><line x1="159.6" y1="166.4" x2="163.6" y2="177.6" stroke="currentColor" stroke-width="0.9"/><line x1="170.8" y1="166.4" x2="174.8" y2="177.6" stroke="currentColor" stroke-width="0.9"/><line x1="182" y1="166.4" x2="186" y2="177.6" stroke="currentColor" stroke-width="0.9"/><polygon points="110,180 150,180 150,220 110,220" fill="none" stroke="currentColor" stroke-width="1"/><line x1="119.6" y1="206.4" x2="123.6" y2="217.6" stroke="currentColor" stroke-width="0.9"/><line x1="130.8" y1="206.4" x2="134.8" y2="217.6" stroke="currentColor" stroke-width="0.9"/><line x1="142" y1="206.4" x2="146" y2="217.6" stroke="currentColor" stroke-width="0.9"/><text x="90" y="78.4" font-size="11.5" font-family="inherit" fill="currentColor">2</text><text x="130" y="78.4" font-size="11.5" font-family="inherit" fill="currentColor">3</text><text x="170" y="78.4" font-size="11.5" font-family="inherit" fill="currentColor">4</text><text x="210" y="78.4" font-size="11.5" font-family="inherit" fill="currentColor">5</text><text x="90" y="118.4" font-size="11.5" font-family="inherit" fill="currentColor">3</text><text x="130" y="118.4" font-size="11.5" font-family="inherit" fill="currentColor">4</text><text x="170" y="118.4" font-size="11.5" font-family="inherit" fill="currentColor">5</text><text x="210" y="118.4" font-size="11.5" font-family="inherit" fill="currentColor">6</text><text x="90" y="158.4" font-size="11.5" font-family="inherit" fill="currentColor">4</text><text x="130" y="158.4" font-size="11.5" font-family="inherit" fill="currentColor">5</text><text x="170" y="158.4" font-size="11.5" font-family="inherit" fill="currentColor">6</text><text x="210" y="158.4" font-size="11.5" font-family="inherit" fill="currentColor">7</text><text x="90" y="198.4" font-size="11.5" font-family="inherit" fill="currentColor">5</text><text x="130" y="198.4" font-size="11.5" font-family="inherit" fill="currentColor">6</text><text x="170" y="198.4" font-size="11.5" font-family="inherit" fill="currentColor">7</text><text x="210" y="198.4" font-size="11.5" font-family="inherit" fill="currentColor">8</text><text x="90" y="52" font-size="11.5" font-family="inherit" fill="currentColor">1</text><text x="130" y="52" font-size="11.5" font-family="inherit" fill="currentColor">2</text><text x="170" y="52" font-size="11.5" font-family="inherit" fill="currentColor">3</text><text x="210" y="52" font-size="11.5" font-family="inherit" fill="currentColor">4</text><text x="62" y="84" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">1</text><text x="62" y="124" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">2</text><text x="62" y="164" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">3</text><text x="62" y="204" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">4</text></svg></figure>',
    options: ['3/16', '1/4', '1/8', '3/8'],
    answer: 0,
    explanation: '有放回抽取，两次抽取互不影响，所有等可能结果 n=4×4=16 种（表中 16 个格子）。和为 6 的有序数对只有 (2,4)、(3,3)、(4,2)，满足条件的结果 m=3 种，所以 P=m/n=3/16。若按不放回理解，样本空间会变成 4×3=12 种，且 (3,3) 不可能出现，与题意不符。故选 A。'
  },
  {
    id: 'q-probability-28',
    kp: 'probability',
    difficulty: 'medium',
    type: 'single',
    stem: '某工厂质检部门从一批产品中随机抽取 500 件进行检验，发现其中有 15 件不合格。据此估计这批产品的不合格率约为（　）',
    options: ['0.3%', '3%', '5%', '1.5%'],
    answer: 1,
    explanation: '用频率估计概率：抽取的 n=500 件产品中不合格的有 m=15 件，不合格的频率 = m/n = 15/500 = 0.03，即 3%。当抽取的件数足够多时，可以用频率估计整批产品的不合格率，故约为 3%。故选 B。'
  },
  {
    id: 'q-probability-29',
    kp: 'probability',
    difficulty: 'medium',
    type: 'single',
    stem: '某种彩票的中奖概率为 1/1000，下列说法正确的是（　）',
    options: ['买 1000 张这种彩票一定中奖', '买 1000 张这种彩票一定不中奖', '买 1 张中奖的可能性很小，但买 1000 张也不保证一定中奖', '买 1000 张后中奖的概率就变成 1'],
    answer: 2,
    explanation: '概率 1/1000 表示大量重复购买时中奖的频率会稳定在 1/1000 附近，它描述的是"可能性的大小"，不是"一定发生"或"一定不发生"。每张彩票是否中奖都是随机事件，各张之间相互独立，所以买 1000 张可能一张都不中，也可能中 1 张甚至更多；A、B、D 都把概率误解成了必然结果。故选 C。'
  },
  {
    id: 'q-probability-30',
    kp: 'probability',
    difficulty: 'medium',
    type: 'single',
    stem: '甲、乙两人用转盘做游戏：把一个转盘平均分成 4 个全等的扇形，依次标上 1、2、3、4。规则是：指针停在标有 1 或 2 的扇形上甲赢一局，停在标有 3 或 4 的扇形上乙赢一局。这个游戏对甲、乙两人（　）',
    options: ['公平，因为两人每局获胜的概率都是 1/2', '不公平，对甲有利', '不公平，对乙有利', '无法判断是否公平'],
    answer: 0,
    explanation: '转盘被平均分成 4 个全等扇形，每个扇形的圆心角都是 360°÷4=90°，指针停在每个扇形上的机会相等，所有等可能结果 n=4 种。甲获胜对应 1、2 两个扇形，占据的圆心角共 2×90°=180°，P(甲)=2/4=180°/360°=1/2；乙对应 3、4，P(乙)=1/2。两人每局获胜的概率相等，大量重复游戏时平均得分相同，所以游戏公平。判断公平性的依据是分别算出双方获胜概率再比较，而不是凭感觉。故选 A。',
    tags: ['circle']
  },
  {
    id: 'q-probability-31',
    kp: 'probability',
    difficulty: 'medium',
    type: 'single',
    stem: '有 5 张卡片，分别标有 1、2、3、4、5，从中不放回地随机抽出 2 张（一次抽出两张，不分先后）。则两张卡片上的数字之积为偶数的概率是（　）',
    options: ['7/10', '3/10', '2/5', '3/5'],
    answer: 0,
    explanation: '一次抽出两张、不分先后，样本空间是 5 张中任取 2 张的组合，所有等可能结果 n=10 种：{1,2}、{1,3}、{1,4}、{1,5}、{2,3}、{2,4}、{2,5}、{3,4}、{3,5}、{4,5}。积为奇数 ⇔ 两张都是奇数，只能从 1、3、5 中取两张，共 3 种；所以积为偶数的有 m=10−3=7 种（至少含一张偶数 2 或 4）。P=m/n=7/10=0.7。故选 A。'
  },
  {
    id: 'q-probability-32',
    kp: 'probability',
    difficulty: 'medium',
    type: 'single',
    stem: '袋中装有 1 个红球和 1 个白球，除颜色外完全相同。每次摸出 1 个球记下颜色后放回，再摸下一次。如图用树状图列出了连续摸两次的全部结果，则两次摸到颜色相同的球的概率是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="有放回摸球两次的树状图：开始分出红、白两支各占二分之一，每支下再分两支各占二分之一，末端4条路径概率乘积均为四分之一"><text x="10" y="124" font-size="11.5" font-family="inherit" fill="currentColor">开始</text><circle cx="28" cy="120" r="2.6" fill="currentColor"/><line x1="28" y1="120" x2="110" y2="70" stroke="currentColor" stroke-width="1.6"/><text x="52.01" y="98.82" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1/2</text><circle cx="110" cy="70" r="2.6" fill="currentColor"/><text x="110" y="88" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">红</text><line x1="28" y1="120" x2="110" y2="170" stroke="currentColor" stroke-width="1.6"/><text x="61.39" y="133.82" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1/2</text><circle cx="110" cy="170" r="2.6" fill="currentColor"/><text x="110" y="188" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">白</text><line x1="110" y1="70" x2="200" y2="36" stroke="currentColor" stroke-width="1.6"/><text x="138.32" y="53.68" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1/2</text><circle cx="200" cy="36" r="2.6" fill="currentColor"/><text x="208" y="40" font-size="11.5" font-family="inherit" fill="currentColor">红红 1/4</text><line x1="110" y1="70" x2="200" y2="104" stroke="currentColor" stroke-width="1.6"/><text x="144.68" y="77.48" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1/2</text><circle cx="200" cy="104" r="2.6" fill="currentColor"/><text x="208" y="108" font-size="11.5" font-family="inherit" fill="currentColor">红白 1/4</text><line x1="110" y1="170" x2="200" y2="136" stroke="currentColor" stroke-width="1.6"/><text x="138.32" y="153.68" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1/2</text><circle cx="200" cy="136" r="2.6" fill="currentColor"/><text x="208" y="140" font-size="11.5" font-family="inherit" fill="currentColor">白红 1/4</text><line x1="110" y1="170" x2="200" y2="204" stroke="currentColor" stroke-width="1.6"/><text x="144.68" y="177.48" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1/2</text><circle cx="200" cy="204" r="2.6" fill="currentColor"/><text x="208" y="208" font-size="11.5" font-family="inherit" fill="currentColor">白白 1/4</text></svg></figure>',
    options: ['1/2', '1/4', '1/3', '3/4'],
    answer: 0,
    explanation: '有放回摸球，两次互不影响。树状图第一层 2 个分支各占 1/2，每个第一层分支下再分 2 个分支也各占 1/2，所以每条路径的概率都是 1/2×1/2=1/4，末端共 n=4 个等可能结果（红红、红白、白红、白白）。颜色相同的是"红红"和"白白"两条路径，m=2，所以 P=2×1/4=2/4=1/2。故选 A。'
  },
  {
    id: 'q-probability-33',
    kp: 'probability',
    difficulty: 'medium',
    type: 'fill',
    stem: '将一枚质地均匀的硬币连续抛掷三次，则三次中至少出现一次正面朝上的概率是（　）',
    answers: ['7/8', '0.875'],
    explanation: '每次抛掷有正、反 2 种等可能结果，三次共 n=2³=8 种等可能结果（正正正、正正反、正反正、正反反、反正正、反正反、反反正、反反反）。"至少一次正面"的对立事件是"三次都是反面"，只有 1 种，所以满足条件的结果 m=8−1=7 种，P=m/n=7/8=0.875。用对立事件计算比逐个列举更快。'
  },
  {
    id: 'q-probability-34',
    kp: 'probability',
    difficulty: 'medium',
    type: 'fill',
    stem: '如图，一个转盘被平均分成 6 个全等的扇形，依次标有 1、2、3、4、5、6。任意转动转盘一次，指针所指扇形上的数字是质数的概率是（　）。（填分数或小数均可）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="转盘被平均分成6个全等扇形，顺时针依次标有数字1、2、3、4、5、6"><circle cx="160" cy="124" r="88" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,124 L160,36 A88,88 0 0,1 236.21,80 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,124 L236.21,80 A88,88 0 0,1 236.21,168 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,124 L236.21,168 A88,88 0 0,1 160,212 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,124 L160,212 A88,88 0 0,1 83.79,168 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,124 L83.79,168 A88,88 0 0,1 83.79,80 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,124 L83.79,80 A88,88 0 0,1 160,36 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="191.68" y="73.13" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">1</text><text x="223.36" y="128" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">2</text><text x="191.68" y="182.87" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">3</text><text x="128.32" y="182.87" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">4</text><text x="96.64" y="128" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">5</text><text x="128.32" y="73.13" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">6</text><circle cx="160" cy="124" r="2.4" fill="currentColor"/></svg></figure>',
    answers: ['1/2', '0.5'],
    explanation: '6 个扇形全等，每个扇形的圆心角为 360°÷6=60°，指针停在每个扇形上的机会相等，所有等可能结果 n=6 种。1 到 6 中的质数是 2、3、5，满足条件的结果 m=3 种（1 不是质数，4 和 6 是合数）。所以 P=m/n=3/6=1/2=0.5。'
  },
  {
    id: 'q-probability-35',
    kp: 'probability',
    difficulty: 'medium',
    type: 'single',
    stem: '袋中装有 4 个红球、3 个白球和 2 个黄球，它们除颜色外形状大小完全一样。闭上眼睛从中任意取出一个球，取出的球是红色或白色的概率是（　）',
    options: ['7/9', '4/9', '1/3', '2/9'],
    answer: 0,
    explanation: '袋中共有 4+3+2=9 个球，每个球被取到的机会相等，所有等可能结果 n=9 种。红色或白色的球共 4+3=7 个，满足条件的结果 m=7 种，所以 P=m/n=7/9。也可以先算取到黄球的概率 2/9，再用 1−2/9=7/9。故选 A。'
  },
  {
    id: 'q-probability-36',
    kp: 'probability',
    difficulty: 'hard',
    type: 'fill',
    stem: '袋中装有 2 个红球（记为 R<sub>1</sub>、R<sub>2</sub>）和 1 个白球 W，除颜色外完全相同。甲、乙两人依次从中摸出 1 个球，甲摸出的球不放回，再由乙摸。如图用树状图列出了全部结果，则乙摸到红球的概率是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="不放回摸球两次的树状图：第一层分出R₁、R₂、W三支各占三分之一，每支下再从剩余两个球分两支各占二分之一，末端6条路径概率乘积均为六分之一"><text x="10" y="125" font-size="11.5" font-family="inherit" fill="currentColor">开始</text><circle cx="26" cy="121" r="2.6" fill="currentColor"/><line x1="26" y1="121" x2="100" y2="45" stroke="currentColor" stroke-width="1.6"/><text x="43.23" y="94.4" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1/3</text><circle cx="100" cy="45" r="2.6" fill="currentColor"/><text x="100" y="63" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">R₁</text><line x1="26" y1="121" x2="100" y2="121" stroke="currentColor" stroke-width="1.6"/><text x="49.68" y="116" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1/3</text><circle cx="100" cy="121" r="2.6" fill="currentColor"/><text x="100" y="139" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">R₂</text><line x1="26" y1="121" x2="100" y2="197" stroke="currentColor" stroke-width="1.6"/><text x="56.13" y="143.04" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1/3</text><circle cx="100" cy="197" r="2.6" fill="currentColor"/><text x="100" y="215" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">W</text><line x1="100" y1="45" x2="190" y2="26" stroke="currentColor" stroke-width="1.6"/><text x="143.04" y="30.2" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1/2</text><circle cx="190" cy="26" r="2.6" fill="currentColor"/><text x="198" y="30" font-size="11.5" font-family="inherit" fill="currentColor">R₁R₂ 1/6</text><line x1="100" y1="45" x2="190" y2="64" stroke="currentColor" stroke-width="1.6"/><text x="146.96" y="49.2" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1/2</text><circle cx="190" cy="64" r="2.6" fill="currentColor"/><text x="198" y="68" font-size="11.5" font-family="inherit" fill="currentColor">R₁W 1/6</text><line x1="100" y1="121" x2="190" y2="102" stroke="currentColor" stroke-width="1.6"/><text x="143.04" y="106.2" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1/2</text><circle cx="190" cy="102" r="2.6" fill="currentColor"/><text x="198" y="106" font-size="11.5" font-family="inherit" fill="currentColor">R₂R₁ 1/6</text><line x1="100" y1="121" x2="190" y2="140" stroke="currentColor" stroke-width="1.6"/><text x="146.96" y="125.2" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1/2</text><circle cx="190" cy="140" r="2.6" fill="currentColor"/><text x="198" y="144" font-size="11.5" font-family="inherit" fill="currentColor">R₂W 1/6</text><line x1="100" y1="197" x2="190" y2="178" stroke="currentColor" stroke-width="1.6"/><text x="143.04" y="182.2" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1/2</text><circle cx="190" cy="178" r="2.6" fill="currentColor"/><text x="198" y="182" font-size="11.5" font-family="inherit" fill="currentColor">WR₁ 1/6</text><line x1="100" y1="197" x2="190" y2="216" stroke="currentColor" stroke-width="1.6"/><text x="146.96" y="201.2" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1/2</text><circle cx="190" cy="216" r="2.6" fill="currentColor"/><text x="198" y="220" font-size="11.5" font-family="inherit" fill="currentColor">WR₂ 1/6</text></svg></figure>',
    answers: ['2/3'],
    explanation: '甲、乙依次不放回摸球，按树状图计数：第一层 3 个分支（R₁、R₂、W）各占 1/3，每个分支下再从剩下的 2 个球中分 2 个分支，第二层每条枝都是 1/2，所以每条路径的概率为 1/3×1/2=1/6，末端共 n=6 条等可能路径。乙摸到红球要分两类：甲摸到红球（R₁、R₂ 两个分支），每个分支下剩 1 红 1 白，各有 1 条路径使乙摸红，共 2 条；甲摸到白球 W（1 个分支），该分支下剩 2 个红球，2 条路径乙都摸红，共 2 条。合计 m=2+2=4 条路径，所以 P=m/n=4/6=2/3。分步相乘相加也一致：2/3×1/2+1/3×1=1/3+1/3=2/3。'
  },
  {
    id: 'q-probability-37',
    kp: 'probability',
    difficulty: 'hard',
    type: 'fill',
    stem: '如图，一个转盘被分成三个扇形，其中红色扇形、黄色扇形、蓝色扇形的圆心角分别为 90°、120°、150°。任意转动转盘一次，指针停在哪个扇形内的机会与该扇形的面积（即圆心角）成正比。连续转动转盘两次，则两次指针都停在红色扇形内的概率是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="转盘被分成三个扇形，红色扇形圆心角90度、黄色扇形120度、蓝色扇形150度，红色扇形涂斜线"><circle cx="160" cy="124" r="88" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,124 L160,36 A88,88 0 0,1 248,124 Z" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M160,124 L248,124 A88,88 0 0,1 116,200.21 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,124 L116,200.21 A88,88 0 0,1 160,36 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="198.58" y="89.42" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">红</text><text x="187.28" y="175.25" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">黄</text><text x="107.3" y="113.88" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">蓝</text><circle cx="160" cy="124" r="2.4" fill="currentColor"/></svg></figure>',
    answers: ['1/16', '0.0625'],
    explanation: '同圆中扇形的面积与圆心角成正比，所以指针停在各扇形内的概率等于该扇形圆心角与 360° 的比：红色 P=90°/360°=1/4，黄色 P=120°/360°=1/3，蓝色 P=150°/360°=5/12（三者圆心角 90°+120°+150°=360° 说明分区完整，概率 1/4+1/3+5/12=1）。两次转动相互独立，把 12 份圆心角各 30° 看成 12 个等可能扇区，红色占 3 份，所有等可能结果 n=12×12=144 种，两次都落在红色 m=3×3=9 种，P=9/144=1/16=0.0625，与 1/4×1/4=1/16 一致。',
    tags: ['circle']
  },
  {
    id: 'q-probability-38',
    kp: 'probability',
    difficulty: 'hard',
    type: 'fill',
    stem: '如图，一个圆形飞镖靶被分成三个同心圆区域：最内圆的半径（即红心）为 1，中间圆的半径为 2，最外圆的半径为 3（单位相同）。向靶面随机投掷一枚飞镖，飞镖落在靶面内每一处的机会相等，则飞镖落在中间圆环（到靶心距离大于 1 且不超过 2 的区域）内的概率是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="圆形飞镖靶：三个同心圆半径分别为1、2、3，最内圆为红心，半径1到2之间为中间圆环，半径2到3之间为外环"><circle cx="160" cy="112" r="32" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="160" cy="112" r="64" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="160" cy="112" r="96" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="160" y="100" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">r=1</text><text x="160" y="66" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">r=2</text><text x="160" y="34" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">r=3</text><circle cx="160" cy="112" r="2.4" fill="currentColor"/></svg></figure>',
    answers: ['1/3'],
    explanation: '这是几何概型，概率等于面积之比。靶面总面积 = π×3²=9π；中间圆环的面积 = 半径为 2 的圆面积 − 半径为 1 的圆面积 = π×2²−π×1²=4π−π=3π。所以 P = 3π÷9π = 1/3（也可写成 (2²−1²)/3²=3/9=1/3）。注意红心、中间环、外环三块面积之比为 1:3:5，中间环占 3/9=1/3。',
    tags: ['circle']
  },
  {
    id: 'q-probability-39',
    kp: 'probability',
    difficulty: 'hard',
    type: 'fill',
    stem: '如图，正方形 ABCD 的边长为 6，E、F 分别是边 AB、AD 的中点。向正方形 ABCD 内随机投一点（点落在正方形内每一处的机会相等），则该点落在 △AEF 内的概率是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="正方形ABCD边长为6，E是AB的中点，F是AD的中点，三角形AEF涂斜线"><polygon points="80,40 240,40 240,200 80,200" fill="none" stroke="currentColor" stroke-width="1.6"/><polygon points="80,40 160,40 80,120" fill="none" stroke="currentColor" stroke-width="1"/><line x1="92" y1="52" x2="106" y2="66" stroke="currentColor" stroke-width="0.9"/><line x1="104" y1="48" x2="118" y2="62" stroke="currentColor" stroke-width="0.9"/><line x1="96" y1="68" x2="110" y2="82" stroke="currentColor" stroke-width="0.9"/><text x="72" y="34" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="end">A</text><text x="248" y="34" font-size="12.5" font-family="inherit" fill="currentColor">B</text><text x="248" y="216" font-size="12.5" font-family="inherit" fill="currentColor">C</text><text x="72" y="216" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="end">D</text><text x="160" y="30" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">E</text><text x="72" y="124" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="end">F</text><text x="160" y="194" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">正方形边长 6，E、F 为中点</text></svg></figure>',
    answers: ['1/8', '0.125'],
    explanation: '几何概型，概率等于面积之比。正方形面积 = 6×6=36；△AEF 中 AE=3、AF=3 且 ∠A=90°，面积 = ½×3×3=4.5，所以 P = 4.5÷36 = 1/8 = 0.125。用相似也能算：E、F 是中点，AE/AB = AF/AD = 1/2，加上 ∠A 公共，所以 △AEF ∽ △ABD，相似比为 1/2，面积比为 (1/2)²=1/4；而 △ABD 的面积是正方形的一半即 18，故 △AEF 的面积 = 18×1/4 = 4.5，概率 4.5/36=1/8，两种算法一致。',
    tags: ['similarity']
  },
  {
    id: 'q-probability-40',
    kp: 'probability',
    difficulty: 'hard',
    type: 'fill',
    stem: '先后抛掷一枚质地均匀的骰子两次，第一次朝上的点数记为 p，第二次朝上的点数记为 q。则关于 x 的一元二次方程 x<sup>2</sup>+px+q=0 有实数根的概率是（　）',
    answers: ['19/36'],
    explanation: '两次抛掷按有序数对 (p,q) 计数，所有等可能结果 n=6×6=36 种。一元二次方程 x²+px+q=0 有实数根 ⇔ 判别式 Δ=p²−4q ≥ 0，即 q ≤ p²/4。逐个 p 统计满足条件的 q 的个数：p=1 时 q ≤ 0.25，没有；p=2 时 q ≤ 1，只有 q=1；p=3 时 q ≤ 2.25，q=1、2 共 2 个；p=4 时 q ≤ 4，q=1、2、3、4 共 4 个；p=5 时 q ≤ 6.25，q=1 到 6 全部满足，共 6 个；p=6 时 q ≤ 9，q=1 到 6 全部满足，共 6 个。合计满足条件的结果 m=0+1+2+4+6+6=19 种，所以 P=m/n=19/36。',
    tags: ['quad-eq']
  },
  {
    id: 'q-probability-41',
    kp: 'probability',
    difficulty: 'hard',
    type: 'single',
    stem: '连续抛掷一枚质地均匀的骰子两次，第一次朝上的点数为 m，第二次朝上的点数为 n。则关于 x 的一元二次方程 x<sup>2</sup>−mx+n=0 有两个相等的实数根的概率是（　）',
    options: ['1/36', '1/18', '1/12', '1/6'],
    answer: 1,
    explanation: '所有等可能结果共 36 种（有序数对 (m,n)）。方程有两个相等的实数根 ⇔ 判别式 Δ=m²−4n=0，即 n=m²/4：m=2 时 n=1；m=4 时 n=4；m=6 时 n=9 超出骰子的点数范围，m 为奇数时 m²/4 不是整数。所以满足条件的只有 (m,n)=(2,1) 和 (4,4) 两组，共 2 种结果（这里的结果数不再用字母 m 表示，以免与方程系数 m 混淆）。所以 P=2/36=1/18。故选 B。',
    tags: ['quad-eq']
  },
  {
    id: 'q-probability-42',
    kp: 'probability',
    difficulty: 'hard',
    type: 'fill',
    stem: '如图，在平面直角坐标系中，在横坐标为 −2、−1、0、1、2 且纵坐标为 0、1、2、3、4 的 25 个格点（图中每个小圆点）中随机选取一个点，每个格点被选到的机会相等。抛物线 y=−x<sup>2</sup>+4 经过其中若干个格点，则选到的点位于该抛物线下方（含在抛物线上）的概率是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="平面直角坐标系中横坐标负2到2、纵坐标0到4的25个格点，以及开口向下、顶点为(0,4)、经过点(负2,0)和(2,0)的抛物线y等于负x平方加4"><line x1="46" y1="216" x2="300" y2="216" stroke="currentColor" stroke-width="1.6"/><line x1="170" y1="222" x2="170" y2="44" stroke="currentColor" stroke-width="1.6"/><line x1="300" y1="216" x2="292" y2="212" stroke="currentColor" stroke-width="1.2"/><line x1="300" y1="216" x2="292" y2="220" stroke="currentColor" stroke-width="1.2"/><line x1="170" y1="44" x2="166" y2="52" stroke="currentColor" stroke-width="1.2"/><line x1="170" y1="44" x2="174" y2="52" stroke="currentColor" stroke-width="1.2"/><circle cx="70" cy="216" r="2" fill="currentColor"/><circle cx="70" cy="180" r="2" fill="currentColor"/><circle cx="70" cy="144" r="2" fill="currentColor"/><circle cx="70" cy="108" r="2" fill="currentColor"/><circle cx="70" cy="72" r="2" fill="currentColor"/><circle cx="120" cy="216" r="2" fill="currentColor"/><circle cx="120" cy="180" r="2" fill="currentColor"/><circle cx="120" cy="144" r="2" fill="currentColor"/><circle cx="120" cy="108" r="2" fill="currentColor"/><circle cx="120" cy="72" r="2" fill="currentColor"/><circle cx="170" cy="216" r="2" fill="currentColor"/><circle cx="170" cy="180" r="2" fill="currentColor"/><circle cx="170" cy="144" r="2" fill="currentColor"/><circle cx="170" cy="108" r="2" fill="currentColor"/><circle cx="170" cy="72" r="2" fill="currentColor"/><circle cx="220" cy="216" r="2" fill="currentColor"/><circle cx="220" cy="180" r="2" fill="currentColor"/><circle cx="220" cy="144" r="2" fill="currentColor"/><circle cx="220" cy="108" r="2" fill="currentColor"/><circle cx="220" cy="72" r="2" fill="currentColor"/><circle cx="270" cy="216" r="2" fill="currentColor"/><circle cx="270" cy="180" r="2" fill="currentColor"/><circle cx="270" cy="144" r="2" fill="currentColor"/><circle cx="270" cy="108" r="2" fill="currentColor"/><circle cx="270" cy="72" r="2" fill="currentColor"/><path d="M70,216 L95,153 L120,108 L145,81 L170,72 L195,81 L220,108 L245,153 L270,216" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="70" y="228" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">-2</text><text x="120" y="228" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">-1</text><text x="220" y="228" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1</text><text x="270" y="228" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">2</text><text x="162" y="184" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">1</text><text x="162" y="148" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">2</text><text x="162" y="112" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">3</text><text x="162" y="76" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">4</text><text x="163" y="227" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">O</text><text x="302" y="208" font-size="12.5" font-family="inherit" fill="currentColor">x</text><text x="176" y="42" font-size="12.5" font-family="inherit" fill="currentColor">y</text><text x="230" y="60" font-size="11.5" font-family="inherit" fill="currentColor">y=−x²+4</text></svg></figure>',
    answers: ['3/5', '0.6'],
    explanation: '格点共 5×5=25 个，即 n=25。抛物线 y=−x²+4 与 x 轴交点的横坐标由 −x²+4=0 解得 x=±2（用解一元二次方程求出），与 y 轴交于 (0,4)，顶点也是 (0,4)。逐列统计满足 y ≤ −x²+4 的格点：x=0 时 −x²+4=4，纵坐标 0、1、2、3、4 全在下方，共 5 个；x=±1 时 −x²+4=3，纵坐标 0、1、2、3 满足，各 4 个，两列共 8 个；x=±2 时 −x²+4=0，只有纵坐标 0 满足，各 1 个，两列共 2 个。合计满足条件的格点 m=5+8+2=15 个，所以 P=m/n=15/25=3/5=0.6。',
    tags: ['quad-func', 'quad-eq']
  },
  {
    id: 'q-probability-43',
    kp: 'probability',
    difficulty: 'hard',
    type: 'fill',
    stem: '如图，一个圆盘被平均分成 12 个全等的扇形，沿顺时针方向依次标上 1、2、…、12，指针固定在圆盘正上方，初始时正对写着 1 的扇形。每次操作把圆盘绕圆心顺时针旋转 30° 的整数倍，旋转的份数 k（k=0、1、2、…、11）是等可能的。旋转后指针所指扇形内的数字是 3 的倍数的概率是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="圆盘被平均分成12个全等扇形顺时针标有1至12，圆盘正上方有固定指针，初始正对写着1的扇形，另有一条顺时针旋转的提示弧"><circle cx="160" cy="128" r="88" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,128 L137.22,43 A88,88 0 0,1 182.78,43 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,128 L182.78,43 A88,88 0 0,1 222.23,65.77 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,128 L222.23,65.77 A88,88 0 0,1 245,105.22 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,128 L245,105.22 A88,88 0 0,1 245,150.78 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,128 L245,150.78 A88,88 0 0,1 222.23,190.23 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,128 L222.23,190.23 A88,88 0 0,1 182.78,213 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,128 L182.78,213 A88,88 0 0,1 137.22,213 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,128 L137.22,213 A88,88 0 0,1 97.77,190.23 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,128 L97.77,190.23 A88,88 0 0,1 75,150.78 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,128 L75,150.78 A88,88 0 0,1 75,105.22 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,128 L75,105.22 A88,88 0 0,1 97.77,65.77 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,128 L97.77,65.77 A88,88 0 0,1 137.22,43 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="160" y="68.64" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">1</text><text x="191.68" y="77.13" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">2</text><text x="214.87" y="100.32" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">3</text><text x="223.36" y="132" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">4</text><text x="214.87" y="163.68" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">5</text><text x="191.68" y="186.87" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">6</text><text x="160" y="195.36" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">7</text><text x="128.32" y="186.87" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">8</text><text x="105.13" y="163.68" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">9</text><text x="96.64" y="132" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">10</text><text x="105.13" y="100.32" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">11</text><text x="128.32" y="77.13" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">12</text><circle cx="160" cy="128" r="2.4" fill="currentColor"/><line x1="160" y1="14" x2="160" y2="34" stroke="currentColor" stroke-width="1.8"/><line x1="153" y1="26" x2="160" y2="36" stroke="currentColor" stroke-width="1.8"/><line x1="167" y1="26" x2="160" y2="36" stroke="currentColor" stroke-width="1.8"/><path d="M208.83,36.17 A104,104 0 0,1 253.47,82.41" fill="none" stroke="currentColor" stroke-width="1.4"/><line x1="253.47" y1="82.41" x2="244.47" y2="79.41" stroke="currentColor" stroke-width="1.4"/><line x1="253.47" y1="82.41" x2="250.47" y2="72.41" stroke="currentColor" stroke-width="1.4"/><text x="256" y="24" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">顺时针每次转 30°</text></svg></figure>',
    answers: ['1/3'],
    explanation: '圆盘 12 等分，每份圆心角 30°，顺时针旋转 30°×k（k=0、1、…、11）共有 12 种等可能的旋转状态。旋转是圆盘绕圆心的对称变换，不改变各扇形的大小，旋转 k 份相当于把指针所指的扇形顺时针"移动"k 个位置，12 种旋转状态与 12 个扇形一一对应，所以指针最终落在每个扇形上的机会相等，所有等可能结果 n=12 种。1 到 12 中 3 的倍数是 3、6、9、12，满足条件的结果 m=4 种，所以 P=m/n=4/12=1/3。',
    tags: ['rotation']
  },
  {
    id: 'q-probability-44',
    kp: 'probability',
    difficulty: 'hard',
    type: 'fill',
    stem: '三角形 ABC 的三条中位线把它分成 4 个全等的小三角形（中间一个是三条中位线围成的三角形）。向 △ABC 内随机投一点（点落在三角形内每一处的机会相等），则该点落在中间那个小三角形内的概率是（　）',
    answers: ['1/4', '0.25'],
    explanation: '三条中位线两两平行于三边，由中位线定理可知中间小三角形的三条边分别等于原三角形三条边的一半，因此中间小三角形与原三角形相似，相似比为 1/2，面积比为 (1/2)²=1/4。三个角落的小三角形同理也与原三角形相似（相似比均为 1/2），面积同样为原三角形的 1/4，所以 4 个小三角形面积相等，可看成 n=4 份等面积区域，满足条件的 m=1 份，故概率 = 1/4 = 0.25。',
    tags: ['similarity']
  },
  {
    id: 'q-probability-45',
    kp: 'probability',
    difficulty: 'hard',
    type: 'single',
    stem: '甲、乙两人做游戏：同时抛掷两枚质地均匀的骰子，若两枚骰子朝上的点数相同则甲得 1 分，若点数不同则乙得 1 分。这个游戏（　）',
    options: ['公平，因为两人获胜的概率都是 1/2', '不公平，对甲有利', '不公平，对乙有利', '无法判断是否公平'],
    answer: 2,
    explanation: '两枚骰子按有序数对计数，所有等可能结果 n=6×6=36 种。点数相同的只有 (1,1)、(2,2)、…、(6,6) 共 m=6 种，P(甲)=6/36=1/6；点数不同的有 36−6=30 种，P(乙)=30/36=5/6。乙获胜的概率大得多，游戏对乙有利、不公平。不能因为"相同/不同只有两类"就认为各占 1/2，必须数清每类包含多少个等可能结果。故选 C。'
  },
  {
    id: 'q-probability-46',
    kp: 'probability',
    difficulty: 'hard',
    type: 'single',
    stem: '签筒中有 5 张大小相同的签，其中 2 张写"有奖"、3 张空白。甲先抽 1 张且不放回，乙再从剩下的 4 张中抽 1 张。则乙抽到"有奖"签的概率是（　）',
    options: ['2/5', '1/2', '3/10', '1/4'],
    answer: 0,
    explanation: '不放回抽签要按"甲抽到什么"分类讨论。甲抽到"有奖"的概率 2/5，此时剩下 4 张中还有 1 张有奖，乙抽到的概率 1/4，贡献 2/5×1/4=1/10；甲抽到空白的概率 3/5，此时剩下 4 张中有 2 张有奖，乙抽到的概率 2/4=1/2，贡献 3/5×1/2=3/10。两者相加 P(乙中奖)=1/10+3/10=4/10=2/5，与甲先抽时的中奖概率相同，说明先后抽签机会均等。直接数有序结果也一致：全部结果 n=5×4=20 种（先甲后乙、不放回），乙抽到有奖的结果 m=2×4=8 种，P=8/20=2/5。故选 A。'
  },
  {
    id: 'q-probability-47',
    kp: 'probability',
    difficulty: 'hard',
    type: 'fill',
    stem: '一个不透明的袋中装有 12 个红球和若干个白球，它们除颜色外完全相同。每次从袋中随机摸出 1 个球，记下颜色后放回摇匀，重复大量试验后发现摸到红球的频率稳定在 0.3 附近。则袋中白球的个数约为（　）',
    answers: ['28'],
    explanation: '设白球有 x 个，则袋中共有 (12+x) 个球。大量重复试验中摸到红球的频率稳定在 0.3 附近，可用它估计概率，于是 12/(12+x)=0.3。解这个方程：12=0.3(12+x)，即 12=3.6+0.3x，0.3x=8.4，x=28。所以白球约为 28 个（检验：总球数 40，12/40=0.3，符合）。'
  },
  {
    id: 'q-probability-48',
    kp: 'probability',
    difficulty: 'hard',
    type: 'single',
    stem: '袋中装有 3 个红球和 2 个白球，除颜色外完全相同。每次摸出 1 个球，记下颜色后放回摇匀。连续摸 3 次，则恰好有 2 次摸到红球的概率是（　）',
    options: ['54/125', '36/125', '27/125', '18/125'],
    answer: 0,
    explanation: '有放回摸球，每次摸到红球的概率都是 3/5、摸到白球的概率都是 2/5，各次相互独立。3 次中"哪两次是红球"有 3 种位置：红红白、红白红、白红红，每种位置的概率都是 (3/5)²×(2/5)=9/25×2/5=18/125。按每次 5 个球有序计数，所有等可能结果 n=5³=125 种，满足条件的结果 m=3×18=54 种，所以 P=m/n=54/125=0.432。故选 A。'
  },
  {
    id: 'q-probability-49',
    kp: 'probability',
    difficulty: 'hard',
    type: 'fill',
    stem: '在平面直角坐标系中，从横坐标为 −1、0、1、2 且纵坐标为 0、1、2、3 的 16 个格点中随机选取一个点，每个格点被选到的机会相等。抛物线 y=x<sup>2</sup>+1 开口向上，则选到的点位于该抛物线上方或抛物线上（即纵坐标不小于 x<sup>2</sup>+1）的概率是（　）',
    answers: ['7/16', '0.4375'],
    explanation: '格点共 4×4=16 个，即 n=16。把横坐标代入抛物线解析式 y=x²+1，得到该列格点纵坐标的下限：x=−1 时 y≥2；x=0 时 y≥1；x=1 时 y≥2；x=2 时 y≥5。逐列数满足 y ≥ x²+1 的格点：x=−1，纵坐标 2、3 共 2 个；x=0，纵坐标 1、2、3 共 3 个；x=1，纵坐标 2、3 共 2 个；x=2 需要 y≥5，而给出的纵坐标最大只有 3，共 0 个。合计满足条件的格点 m=2+3+2+0=7 个，所以 P=m/n=7/16=0.4375。',
    tags: ['quad-func']
  },
  {
    id: 'q-probability-50',
    kp: 'probability',
    difficulty: 'hard',
    type: 'single',
    stem: '一批产品共 10 件，其中有 2 件次品。质检员从中不放回地随机抽出 2 件检验（一次抽出 2 件，不分先后），则抽到的 2 件中至少有 1 件次品的概率是（　）',
    options: ['17/45', '1/5', '2/9', '1/3'],
    answer: 0,
    explanation: '一次抽出 2 件、不分先后，所有等可能结果是从 10 件中任取 2 件的组合数 n=C(10,2)=45 种。用对立事件更快：2 件都不是次品，即从 8 件正品中取 2 件，有 C(8,2)=28 种，所以"至少有 1 件次品"的结果 m=45−28=17 种，P=17/45。分类相加也一致：恰有 1 件次品 2×8=16 种，2 件都是次品 1 种，16+1=17 ✓。故选 A。'
  },
];