/* =============================================================
 * data/q-similarity.js — 相似（similarity）题库分片，共 12 题
 * 仅开发期文件：由 tools/build-data.js 合并进部署产物 data.js
 * marker 之前的本段注释不参与构建，数组元素文本必须逐字节原样保留
 * 加题后请执行：node tools/build-data.js
 * ============================================================= */

window.QUESTIONS = (window.QUESTIONS || []).concat([
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
  }
]);
