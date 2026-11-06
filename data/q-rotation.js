/* =============================================================
 * data/q-rotation.js — 图形的旋转（rotation）题库分片，共 12 题
 * 仅开发期文件：由 tools/build-data.js 合并进部署产物 data.js
 * marker 之前的本段注释不参与构建，数组元素文本必须逐字节原样保留
 * 加题后请执行：node tools/build-data.js
 * ============================================================= */

window.QUESTIONS = (window.QUESTIONS || []).concat([
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
  }
]);
