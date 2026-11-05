/* =============================================================
 * data/q-quad-func.js — 二次函数（quad-func）题库分片，共 12 题
 * 仅开发期文件：由 tools/build-data.js 合并进部署产物 data.js
 * marker 之前的本段注释不参与构建，数组元素文本必须逐字节原样保留
 * 加题后请执行：node tools/build-data.js
 * ============================================================= */

window.QUESTIONS = (window.QUESTIONS || []).concat([
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
  }
]);
