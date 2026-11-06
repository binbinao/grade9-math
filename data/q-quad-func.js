/* =============================================================
 * data/q-quad-func.js — 二次函数（quad-func）题库分片，共 50 题
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
  }
]);
