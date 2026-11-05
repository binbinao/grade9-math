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
  }
]);
