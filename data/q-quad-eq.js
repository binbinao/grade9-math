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
  }
]);
