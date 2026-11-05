/* =============================================================
 * data/q-circle.js — 圆（circle）题库分片，共 12 题
 * 仅开发期文件：由 tools/build-data.js 合并进部署产物 data.js
 * marker 之前的本段注释不参与构建，数组元素文本必须逐字节原样保留
 * 加题后请执行：node tools/build-data.js
 * ============================================================= */

window.QUESTIONS = (window.QUESTIONS || []).concat([
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
  }
]);
