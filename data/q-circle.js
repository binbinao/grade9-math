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
  }
]);
