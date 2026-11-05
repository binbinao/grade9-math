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
  }
]);
