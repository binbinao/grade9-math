/* =============================================================
 * data/q-quad-eq.js — 一元二次方程（quad-eq）题库分片，共 12 题
 * 仅开发期文件：由 tools/build-data.js 合并进部署产物 data.js
 * marker 之前的本段注释不参与构建，数组元素文本必须逐字节原样保留
 * 加题后请执行：node tools/build-data.js
 * ============================================================= */

window.QUESTIONS = (window.QUESTIONS || []).concat([
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
  }
]);
