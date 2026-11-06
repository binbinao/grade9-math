/* =============================================================
 * data/q-probability.js — 概率初步（probability）题库分片，共 12 题
 * 仅开发期文件：由 tools/build-data.js 合并进部署产物 data.js
 * marker 之前的本段注释不参与构建，数组元素文本必须逐字节原样保留
 * 加题后请执行：node tools/build-data.js
 * ============================================================= */

window.QUESTIONS = (window.QUESTIONS || []).concat([
  /* ===== probability 概率初步 ===== */
  {
    id: 'q-probability-01',
    kp: 'probability',
    difficulty: 'basic',
    type: 'single',
    stem: '掷一枚质地均匀的骰子一次，朝上的点数是 3 的倍数的概率是（　）',
    options: ['1/6', '1/3', '1/2', '2/3'],
    answer: 1,
    explanation: '所有等可能结果共 6 种（1 到 6）。3 的倍数有 3 和 6，共 2 种，所以 P=2/6=1/3。'
  },
  {
    id: 'q-probability-02',
    kp: 'probability',
    difficulty: 'basic',
    type: 'fill',
    stem: '掷一枚质地均匀的骰子一次，朝上的点数是偶数的概率是（　）。（填分数或小数均可）',
    answers: ['1/2', '0.5'],
    explanation: '偶数点有 2、4、6 共 3 种，所有等可能结果共 6 种，所以 P=3/6=1/2=0.5。'
  },
  {
    id: 'q-probability-03',
    kp: 'probability',
    difficulty: 'medium',
    type: 'fill',
    stem: '袋中有 2 个红球和 1 个白球，除颜色外完全相同。不放回地依次摸出 2 个球，则两次都摸到红球的概率是（　）。',
    answers: ['1/3'],
    explanation: '分步计算：第一次摸到红球的概率是 2/3；因为不放回，袋里只剩 2 个球、其中红球 1 个，第二次摸到红球的概率是 1/2。由乘法公式 P=2/3×1/2=1/3。枚举验证：两红球记为 R<sub>1</sub>、R<sub>2</sub>，白球 W，有序结果共 6 种（R<sub>1</sub>R<sub>2</sub>、R<sub>2</sub>R<sub>1</sub>、R<sub>1</sub>W、WR<sub>1</sub>、R<sub>2</sub>W、WR<sub>2</sub>），其中两次都红的有 2 种，2/6=1/3。'
  },
  {
    id: 'q-probability-04',
    kp: 'probability',
    difficulty: 'medium',
    type: 'single',
    stem: '同时掷两枚质地均匀的骰子，朝上的点数之和为 7 的概率是（　）',
    options: ['1/6', '1/9', '1/12', '7/36'],
    answer: 0,
    explanation: '两枚骰子的结果要按有序对计数，共 6×6=36 种等可能结果。和为 7 的有 (1,6)、(2,5)、(3,4)、(4,3)、(5,2)、(6,1) 共 6 种（注意 1+6 与 6+1 是两种不同结果，不能只数 3 种），所以 P=6/36=1/6。'
  },
  {
    id: 'q-probability-05',
    kp: 'probability',
    difficulty: 'hard',
    type: 'fill',
    stem: '从 1、2、3、4 这四个数字中任取两个不同的数字组成两位数（每个数字只能使用一次），所得两位数是偶数的概率是（　）。（填分数或小数均可）',
    answers: ['1/2', '0.5'],
    explanation: '先构造等可能样本空间：十位有 4 种取法，个位再从剩下 3 个数字中取，共 4×3=12 种等可能结果（12、13、14、21、23、24、31、32、34、41、42、43）。两位数为偶数 ⇔ 个位是偶数（2 或 4）：个位取 2 时十位可取 1、3、4，得 12、32、42 共 3 种；个位取 4 时十位可取 1、2、3，得 14、24、34 共 3 种。合计 6 种，所以 P=6/12=1/2。'
  },
  {
    id: 'q-probability-06',
    kp: 'probability',
    difficulty: 'hard',
    type: 'single',
    stem: '连续抛掷一枚质地均匀的硬币 3 次，恰好出现 2 次正面的概率是（　）',
    options: ['1/8', '3/8', '1/2', '5/8'],
    answer: 1,
    explanation: '三次抛掷共 2<sup>3</sup>=8 种等可能结果（正正正、正正反、正反正、正反反、反正正、反正反、反反正、反反反）。恰好 2 次正面的有「正正反」「正反正」「反正正」共 3 种，所以 P=3/8。'
  },
  /* ===== v2 新增：probability 07–12 ===== */
  {
    id: 'q-probability-07',
    kp: 'probability',
    difficulty: 'basic',
    type: 'single',
    stem: '如图，转盘被均分成 8 个全等的扇形，其中 3 个扇形画有阴影。任意转动转盘一次，指针落在阴影区域的概率是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="转盘被均分为8个全等扇形并标有数字1至8，其中3个相邻扇形画斜线阴影，指针指向正上方"><circle cx="160" cy="122" r="90" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="122" x2="250" y2="122" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="122" x2="223.6" y2="58.4" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="122" x2="160" y2="32" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="122" x2="96.4" y2="58.4" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="122" x2="70" y2="122" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="122" x2="96.4" y2="185.6" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="122" x2="160" y2="212" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="122" x2="223.6" y2="185.6" stroke="currentColor" stroke-width="1.6"/><line x1="159.5" y1="49.5" x2="164.5" y2="54.5" stroke="currentColor" stroke-width="1.2"/><line x1="192.5" y1="49.5" x2="197.5" y2="54.5" stroke="currentColor" stroke-width="1.2"/><line x1="198.5" y1="60.5" x2="203.5" y2="65.5" stroke="currentColor" stroke-width="1.2"/><line x1="209.5" y1="60.5" x2="214.5" y2="65.5" stroke="currentColor" stroke-width="1.2"/><line x1="159.5" y1="71.5" x2="164.5" y2="76.5" stroke="currentColor" stroke-width="1.2"/><line x1="203.5" y1="71.5" x2="208.5" y2="76.5" stroke="currentColor" stroke-width="1.2"/><line x1="214.5" y1="71.5" x2="219.5" y2="76.5" stroke="currentColor" stroke-width="1.2"/><line x1="165.5" y1="82.5" x2="170.5" y2="87.5" stroke="currentColor" stroke-width="1.2"/><line x1="176.5" y1="82.5" x2="181.5" y2="87.5" stroke="currentColor" stroke-width="1.2"/><line x1="187.5" y1="82.5" x2="192.5" y2="87.5" stroke="currentColor" stroke-width="1.2"/><line x1="198.5" y1="82.5" x2="203.5" y2="87.5" stroke="currentColor" stroke-width="1.2"/><line x1="220.5" y1="82.5" x2="225.5" y2="87.5" stroke="currentColor" stroke-width="1.2"/><line x1="170.5" y1="93.5" x2="175.5" y2="98.5" stroke="currentColor" stroke-width="1.2"/><line x1="181.5" y1="93.5" x2="186.5" y2="98.5" stroke="currentColor" stroke-width="1.2"/><line x1="192.5" y1="93.5" x2="197.5" y2="98.5" stroke="currentColor" stroke-width="1.2"/><line x1="187.5" y1="104.5" x2="192.5" y2="109.5" stroke="currentColor" stroke-width="1.2"/><line x1="198.5" y1="104.5" x2="203.5" y2="109.5" stroke="currentColor" stroke-width="1.2"/><line x1="231.5" y1="104.5" x2="236.5" y2="109.5" stroke="currentColor" stroke-width="1.2"/><line x1="192.5" y1="115.5" x2="197.5" y2="120.5" stroke="currentColor" stroke-width="1.2"/><line x1="203.5" y1="115.5" x2="208.5" y2="120.5" stroke="currentColor" stroke-width="1.2"/><line x1="214.5" y1="115.5" x2="219.5" y2="120.5" stroke="currentColor" stroke-width="1.2"/><line x1="225.5" y1="115.5" x2="230.5" y2="120.5" stroke="currentColor" stroke-width="1.2"/><line x1="187.5" y1="126.5" x2="192.5" y2="131.5" stroke="currentColor" stroke-width="1.2"/><line x1="198.5" y1="126.5" x2="203.5" y2="131.5" stroke="currentColor" stroke-width="1.2"/><line x1="220.5" y1="126.5" x2="225.5" y2="131.5" stroke="currentColor" stroke-width="1.2"/><line x1="231.5" y1="126.5" x2="236.5" y2="131.5" stroke="currentColor" stroke-width="1.2"/><line x1="181.5" y1="137.5" x2="186.5" y2="142.5" stroke="currentColor" stroke-width="1.2"/><line x1="192.5" y1="137.5" x2="197.5" y2="142.5" stroke="currentColor" stroke-width="1.2"/><line x1="187.5" y1="148.5" x2="192.5" y2="153.5" stroke="currentColor" stroke-width="1.2"/><line x1="192.5" y1="148.5" x2="197.5" y2="153.5" stroke="currentColor" stroke-width="1.2"/><line x1="203.5" y1="159.5" x2="208.5" y2="164.5" stroke="currentColor" stroke-width="1.2"/><line x1="209.5" y1="170.5" x2="214.5" y2="175.5" stroke="currentColor" stroke-width="1.2"/><text x="183" y="70.6" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1</text><text x="215.4" y="103" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">2</text><text x="215.4" y="149" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">3</text><text x="183" y="181.4" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">4</text><text x="137" y="181.4" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">5</text><text x="104.6" y="149" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">6</text><text x="104.6" y="103" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">7</text><text x="137" y="70.6" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">8</text><line x1="160" y1="122" x2="160" y2="20" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="20" x2="155" y2="32" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="20" x2="165" y2="32" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="122" x2="148" y2="145" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><circle cx="160" cy="122" r="2.6" fill="currentColor"/><text x="144" y="160" font-size="13" font-family="inherit" fill="currentColor" text-anchor="middle">O</text><text x="160" y="232" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">8 等分，阴影 3 份</text></svg></figure>',
    options: ['3/8', '1/3', '5/8', '3/5'],
    answer: 0,
    explanation: '8 个扇形全等，指针落在每个扇形上的可能性相同（等可能），阴影占 3 个扇形，所以 P=阴影份数÷总份数=3/8。不要因为"阴影:空白=3:5"就写成 3/5，概率的分母是全部等可能结果的总数 8。选 A。'
  },
  {
    id: 'q-probability-08',
    kp: 'probability',
    difficulty: 'medium',
    type: 'fill',
    stem: '如图是不放回摸球的树状图：袋中有 2 个红球（R<sub>1</sub>、R<sub>2</sub>）和 2 个白球（W<sub>1</sub>、W<sub>2</sub>），从中依次摸出 2 个球（第一次摸出后不放回）。则两次摸出的球颜色相同的概率是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="不放回摸球两次的树状图：第一层4个分支各标1/4，第二层每个节点再分出3个分支，末端共12个结果，第二层每条枝概率均为1/3"><text x="8" y="132" font-size="11.5" font-family="inherit" fill="currentColor">开始</text><text x="8" y="14" font-size="11.5" font-family="inherit" fill="currentColor">第二层每条枝的概率都是 1/3</text><line x1="40" y1="128" x2="92" y2="42" stroke="currentColor" stroke-width="1.6"/><text x="36" y="89" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">1/4</text><text x="96" y="30" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">R₁</text><circle cx="100" cy="42" r="2.6" fill="currentColor"/><line x1="104" y1="42" x2="196" y2="24" stroke="currentColor" stroke-width="1.6"/><text x="202" y="28" font-size="11.5" font-family="inherit" fill="currentColor">R₁R₂</text><line x1="104" y1="42" x2="196" y2="42" stroke="currentColor" stroke-width="1.6"/><text x="202" y="46" font-size="11.5" font-family="inherit" fill="currentColor">R₁W₁</text><line x1="104" y1="42" x2="196" y2="60" stroke="currentColor" stroke-width="1.6"/><text x="202" y="64" font-size="11.5" font-family="inherit" fill="currentColor">R₁W₂</text><line x1="40" y1="128" x2="92" y2="96" stroke="currentColor" stroke-width="1.6"/><text x="36" y="116" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">1/4</text><text x="96" y="84" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">R₂</text><circle cx="100" cy="96" r="2.6" fill="currentColor"/><line x1="104" y1="96" x2="196" y2="78" stroke="currentColor" stroke-width="1.6"/><text x="202" y="82" font-size="11.5" font-family="inherit" fill="currentColor">R₂R₁</text><line x1="104" y1="96" x2="196" y2="96" stroke="currentColor" stroke-width="1.6"/><text x="202" y="100" font-size="11.5" font-family="inherit" fill="currentColor">R₂W₁</text><line x1="104" y1="96" x2="196" y2="114" stroke="currentColor" stroke-width="1.6"/><text x="202" y="118" font-size="11.5" font-family="inherit" fill="currentColor">R₂W₂</text><line x1="40" y1="128" x2="92" y2="150" stroke="currentColor" stroke-width="1.6"/><text x="36" y="143" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">1/4</text><text x="96" y="174" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">W₁</text><circle cx="100" cy="150" r="2.6" fill="currentColor"/><line x1="104" y1="150" x2="196" y2="132" stroke="currentColor" stroke-width="1.6"/><text x="202" y="136" font-size="11.5" font-family="inherit" fill="currentColor">W₁R₁</text><line x1="104" y1="150" x2="196" y2="150" stroke="currentColor" stroke-width="1.6"/><text x="202" y="154" font-size="11.5" font-family="inherit" fill="currentColor">W₁R₂</text><line x1="104" y1="150" x2="196" y2="168" stroke="currentColor" stroke-width="1.6"/><text x="202" y="172" font-size="11.5" font-family="inherit" fill="currentColor">W₁W₂</text><line x1="40" y1="128" x2="92" y2="204" stroke="currentColor" stroke-width="1.6"/><text x="36" y="170" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">1/4</text><text x="96" y="228" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">W₂</text><circle cx="100" cy="204" r="2.6" fill="currentColor"/><line x1="104" y1="204" x2="196" y2="186" stroke="currentColor" stroke-width="1.6"/><text x="202" y="190" font-size="11.5" font-family="inherit" fill="currentColor">W₂R₁</text><line x1="104" y1="204" x2="196" y2="204" stroke="currentColor" stroke-width="1.6"/><text x="202" y="208" font-size="11.5" font-family="inherit" fill="currentColor">W₂R₂</text><line x1="104" y1="204" x2="196" y2="222" stroke="currentColor" stroke-width="1.6"/><text x="202" y="226" font-size="11.5" font-family="inherit" fill="currentColor">W₂W₁</text></svg></figure>',
    answers: ['1/3'],
    explanation: '不放回摸两次，共有 4×3=12 种等可能的有序结果（对应树状图末端 12 个分支）。颜色相同分两类：两次都红——R<sub>1</sub>R<sub>2</sub>、R<sub>2</sub>R<sub>1</sub> 共 2 种；两次都白——W<sub>1</sub>W<sub>2</sub>、W<sub>2</sub>W<sub>1</sub> 共 2 种，合计 4 种。所以 P=4/12=1/3。"同色"要把红红、白白两条分支相加，只数一条会漏解。'
  },
  {
    id: 'q-probability-09',
    kp: 'probability',
    difficulty: 'medium',
    type: 'single',
    stem: '如图，先转动 4 等分转盘（数字 1–4）一次，再掷一枚均匀骰子（点数 1–6）一次，图中用列表法列出了全部 24 种结果。则"两数之和为偶数"的概率是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="列表法表格：表头行为骰子点数1至6，表头列为转盘数字1至4，格内为两数之和，和为偶数的格子打斜线，左上角是一个4等分小转盘"><line x1="34" y1="74" x2="250" y2="74" stroke="currentColor" stroke-width="1.6"/><line x1="34" y1="224" x2="250" y2="224" stroke="currentColor" stroke-width="1.6"/><line x1="34" y1="74" x2="34" y2="224" stroke="currentColor" stroke-width="1.6"/><line x1="250" y1="74" x2="250" y2="224" stroke="currentColor" stroke-width="1.6"/><line x1="34" y1="104" x2="250" y2="104" stroke="currentColor" stroke-width="0.8"/><line x1="34" y1="134" x2="250" y2="134" stroke="currentColor" stroke-width="0.8"/><line x1="34" y1="164" x2="250" y2="164" stroke="currentColor" stroke-width="0.8"/><line x1="34" y1="194" x2="250" y2="194" stroke="currentColor" stroke-width="0.8"/><line x1="70" y1="74" x2="70" y2="224" stroke="currentColor" stroke-width="0.8"/><line x1="106" y1="74" x2="106" y2="224" stroke="currentColor" stroke-width="0.8"/><line x1="142" y1="74" x2="142" y2="224" stroke="currentColor" stroke-width="0.8"/><line x1="178" y1="74" x2="178" y2="224" stroke="currentColor" stroke-width="0.8"/><line x1="214" y1="74" x2="214" y2="224" stroke="currentColor" stroke-width="0.8"/><text x="88" y="93" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1</text><text x="124" y="93" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">2</text><text x="160" y="93" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">3</text><text x="196" y="93" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">4</text><text x="232" y="93" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">5</text><text x="268" y="93" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">6</text><text x="52" y="123" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1</text><text x="88" y="123" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">2</text><line x1="73" y1="130" x2="79" y2="124" stroke="currentColor" stroke-width="1.2"/><line x1="73" y1="119" x2="79" y2="113" stroke="currentColor" stroke-width="1.2"/><text x="124" y="123" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">3</text><text x="160" y="123" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">4</text><line x1="145" y1="130" x2="151" y2="124" stroke="currentColor" stroke-width="1.2"/><line x1="145" y1="119" x2="151" y2="113" stroke="currentColor" stroke-width="1.2"/><text x="196" y="123" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">5</text><text x="232" y="123" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">6</text><line x1="217" y1="130" x2="223" y2="124" stroke="currentColor" stroke-width="1.2"/><line x1="217" y1="119" x2="223" y2="113" stroke="currentColor" stroke-width="1.2"/><text x="268" y="123" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">7</text><text x="52" y="153" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">2</text><text x="88" y="153" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">3</text><text x="124" y="153" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">4</text><line x1="109" y1="160" x2="115" y2="154" stroke="currentColor" stroke-width="1.2"/><line x1="109" y1="149" x2="115" y2="143" stroke="currentColor" stroke-width="1.2"/><text x="160" y="153" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">5</text><text x="196" y="153" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">6</text><line x1="181" y1="160" x2="187" y2="154" stroke="currentColor" stroke-width="1.2"/><line x1="181" y1="149" x2="187" y2="143" stroke="currentColor" stroke-width="1.2"/><text x="232" y="153" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">7</text><text x="268" y="153" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">8</text><line x1="253" y1="160" x2="259" y2="154" stroke="currentColor" stroke-width="1.2"/><line x1="253" y1="149" x2="259" y2="143" stroke="currentColor" stroke-width="1.2"/><text x="52" y="183" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">3</text><text x="88" y="183" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">4</text><line x1="73" y1="190" x2="79" y2="184" stroke="currentColor" stroke-width="1.2"/><line x1="73" y1="179" x2="79" y2="173" stroke="currentColor" stroke-width="1.2"/><text x="124" y="183" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">5</text><text x="160" y="183" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">6</text><line x1="145" y1="190" x2="151" y2="184" stroke="currentColor" stroke-width="1.2"/><line x1="145" y1="179" x2="151" y2="173" stroke="currentColor" stroke-width="1.2"/><text x="196" y="183" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">7</text><text x="232" y="183" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">8</text><line x1="217" y1="190" x2="223" y2="184" stroke="currentColor" stroke-width="1.2"/><line x1="217" y1="179" x2="223" y2="173" stroke="currentColor" stroke-width="1.2"/><text x="268" y="183" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">9</text><text x="52" y="213" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">4</text><text x="88" y="213" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">5</text><text x="124" y="213" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">6</text><line x1="109" y1="220" x2="115" y2="214" stroke="currentColor" stroke-width="1.2"/><line x1="109" y1="209" x2="115" y2="203" stroke="currentColor" stroke-width="1.2"/><text x="160" y="213" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">7</text><text x="196" y="213" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">8</text><line x1="181" y1="220" x2="187" y2="214" stroke="currentColor" stroke-width="1.2"/><line x1="181" y1="209" x2="187" y2="203" stroke="currentColor" stroke-width="1.2"/><text x="232" y="213" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">9</text><text x="268" y="213" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">10</text><line x1="253" y1="220" x2="259" y2="214" stroke="currentColor" stroke-width="1.2"/><line x1="253" y1="209" x2="259" y2="203" stroke="currentColor" stroke-width="1.2"/><circle cx="52" cy="40" r="28" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="52" y1="40" x2="71.8" y2="20.2" stroke="currentColor" stroke-width="1.6"/><line x1="52" y1="40" x2="32.2" y2="20.2" stroke="currentColor" stroke-width="1.6"/><line x1="52" y1="40" x2="32.2" y2="59.8" stroke="currentColor" stroke-width="1.6"/><line x1="52" y1="40" x2="71.8" y2="59.8" stroke="currentColor" stroke-width="1.6"/><text x="71" y="44" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1</text><text x="52" y="25" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">2</text><text x="33" y="44" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">3</text><text x="52" y="63" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">4</text><text x="86" y="34" font-size="11.5" font-family="inherit" fill="currentColor">转盘 1–4</text><text x="180" y="66" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">骰子点数 1–6</text><text x="52" y="93" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">转盘</text></svg></figure>',
    options: ['1/2', '1/3', '11/24', '13/24'],
    answer: 0,
    explanation: '两数之和为偶数 ⇔ 两数同奇或同偶。转盘 1–4 中奇数有 2 个（1、3）、偶数有 2 个（2、4）；骰子 1–6 中奇数有 3 个（1、3、5）、偶数有 3 个（2、4、6）。同奇的组合 2×3=6 种，同偶的组合 2×3=6 种，共 12 种，而样本空间共 4×6=24 种等可能结果，所以 P=12/24=1/2。选 A。'
  },
  {
    id: 'q-probability-10',
    kp: 'probability',
    difficulty: 'hard',
    type: 'single',
    stem: '一个转盘被均分成 8 个扇形，依次标上 1、2、…、8。游戏规则：转动转盘，指针指向奇数则甲得 1 分，指向偶数则乙得 1 分。这个游戏（　）',
    options: ['公平，因为 P(奇数)=P(偶数)=1/2', '不公平，对甲有利', '不公平，对乙有利', '无法判断是否公平'],
    answer: 0,
    explanation: '1–8 中奇数有 1、3、5、7 共 4 个，偶数有 2、4、6、8 共 4 个，8 个扇形全等，指针落在每个扇形上等可能，所以 P(奇数)=4/8=1/2，P(偶数)=4/8=1/2。两人每次得分的概率相等，大量重复游戏时平均得分相同，游戏公平。判断公平性必须分别算出双方获胜概率再比较，不能只看"奇数偶数各占一半"这一句直觉。选 A。'
  },
  {
    id: 'q-probability-11',
    kp: 'probability',
    difficulty: 'hard',
    type: 'fill',
    stem: '三封不同的信随机放入三个写有不同地址的信封中，每个信封放一封信。则三封信全部放对的概率是（　）',
    answers: ['1/6'],
    explanation: '按顺序依次放：第一封有 3 种放法，第二封只剩 2 个信封，第三封只剩 1 个，共有 3×2×1=6 种等可能的放法（三封信的全排列）。全部放对只有 1 种，所以 P=1/6。注意这不是三步独立试验（每封信只能用一次），样本空间是排列数 6 而不是 3<sup>3</sup>=27。'
  },
  {
    id: 'q-probability-12',
    kp: 'probability',
    difficulty: 'hard',
    type: 'single',
    stem: '如图，正方形 ABCD 的边长为 2，它的内切圆为 ⊙O。向正方形内随机投一点，则该点落在阴影区域（圆内）的概率是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="正方形ABCD边长2，内含它的内切圆，圆心O，圆内画斜线阴影"><polygon points="80,180 240,180 240,20 80,20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="160" cy="100" r="80" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M94,180 L94,166 L80,166" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M226,180 L226,166 L240,166" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M226,20 L226,34 L240,34" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M94,20 L94,34 L80,34" fill="none" stroke="currentColor" stroke-width="1.2"/><line x1="161.2" y1="29.2" x2="166.8" y2="34.8" stroke="currentColor" stroke-width="1.2"/><line x1="131.2" y1="41.2" x2="136.8" y2="46.8" stroke="currentColor" stroke-width="1.2"/><line x1="143.2" y1="41.2" x2="148.8" y2="46.8" stroke="currentColor" stroke-width="1.2"/><line x1="155.2" y1="41.2" x2="160.8" y2="46.8" stroke="currentColor" stroke-width="1.2"/><line x1="167.2" y1="41.2" x2="172.8" y2="46.8" stroke="currentColor" stroke-width="1.2"/><line x1="179.2" y1="41.2" x2="184.8" y2="46.8" stroke="currentColor" stroke-width="1.2"/><line x1="191.2" y1="41.2" x2="196.8" y2="46.8" stroke="currentColor" stroke-width="1.2"/><line x1="113.2" y1="53.2" x2="118.8" y2="58.8" stroke="currentColor" stroke-width="1.2"/><line x1="125.2" y1="53.2" x2="130.8" y2="58.8" stroke="currentColor" stroke-width="1.2"/><line x1="137.2" y1="53.2" x2="142.8" y2="58.8" stroke="currentColor" stroke-width="1.2"/><line x1="149.2" y1="53.2" x2="154.8" y2="58.8" stroke="currentColor" stroke-width="1.2"/><line x1="185.2" y1="53.2" x2="190.8" y2="58.8" stroke="currentColor" stroke-width="1.2"/><line x1="197.2" y1="53.2" x2="202.8" y2="58.8" stroke="currentColor" stroke-width="1.2"/><line x1="209.2" y1="53.2" x2="214.8" y2="58.8" stroke="currentColor" stroke-width="1.2"/><line x1="107.2" y1="65.2" x2="112.8" y2="70.8" stroke="currentColor" stroke-width="1.2"/><line x1="119.2" y1="65.2" x2="124.8" y2="70.8" stroke="currentColor" stroke-width="1.2"/><line x1="131.2" y1="65.2" x2="136.8" y2="70.8" stroke="currentColor" stroke-width="1.2"/><line x1="143.2" y1="65.2" x2="148.8" y2="70.8" stroke="currentColor" stroke-width="1.2"/><line x1="191.2" y1="65.2" x2="196.8" y2="70.8" stroke="currentColor" stroke-width="1.2"/><line x1="203.2" y1="65.2" x2="208.8" y2="70.8" stroke="currentColor" stroke-width="1.2"/><line x1="215.2" y1="65.2" x2="220.8" y2="70.8" stroke="currentColor" stroke-width="1.2"/><line x1="101.2" y1="77.2" x2="106.8" y2="82.8" stroke="currentColor" stroke-width="1.2"/><line x1="113.2" y1="77.2" x2="118.8" y2="82.8" stroke="currentColor" stroke-width="1.2"/><line x1="125.2" y1="77.2" x2="130.8" y2="82.8" stroke="currentColor" stroke-width="1.2"/><line x1="137.2" y1="77.2" x2="142.8" y2="82.8" stroke="currentColor" stroke-width="1.2"/><line x1="149.2" y1="77.2" x2="154.8" y2="82.8" stroke="currentColor" stroke-width="1.2"/><line x1="161.2" y1="77.2" x2="166.8" y2="82.8" stroke="currentColor" stroke-width="1.2"/><line x1="173.2" y1="77.2" x2="178.8" y2="82.8" stroke="currentColor" stroke-width="1.2"/><line x1="185.2" y1="77.2" x2="190.8" y2="82.8" stroke="currentColor" stroke-width="1.2"/><line x1="197.2" y1="77.2" x2="202.8" y2="82.8" stroke="currentColor" stroke-width="1.2"/><line x1="209.2" y1="77.2" x2="214.8" y2="82.8" stroke="currentColor" stroke-width="1.2"/><line x1="221.2" y1="77.2" x2="226.8" y2="82.8" stroke="currentColor" stroke-width="1.2"/><line x1="95.2" y1="89.2" x2="100.8" y2="94.8" stroke="currentColor" stroke-width="1.2"/><line x1="107.2" y1="89.2" x2="112.8" y2="94.8" stroke="currentColor" stroke-width="1.2"/><line x1="119.2" y1="89.2" x2="124.8" y2="94.8" stroke="currentColor" stroke-width="1.2"/><line x1="131.2" y1="89.2" x2="136.8" y2="94.8" stroke="currentColor" stroke-width="1.2"/><line x1="143.2" y1="89.2" x2="148.8" y2="94.8" stroke="currentColor" stroke-width="1.2"/><line x1="155.2" y1="89.2" x2="160.8" y2="94.8" stroke="currentColor" stroke-width="1.2"/><line x1="167.2" y1="89.2" x2="172.8" y2="94.8" stroke="currentColor" stroke-width="1.2"/><line x1="179.2" y1="89.2" x2="184.8" y2="94.8" stroke="currentColor" stroke-width="1.2"/><line x1="191.2" y1="89.2" x2="196.8" y2="94.8" stroke="currentColor" stroke-width="1.2"/><line x1="203.2" y1="89.2" x2="208.8" y2="94.8" stroke="currentColor" stroke-width="1.2"/><line x1="215.2" y1="89.2" x2="220.8" y2="94.8" stroke="currentColor" stroke-width="1.2"/><line x1="89.2" y1="101.2" x2="94.8" y2="106.8" stroke="currentColor" stroke-width="1.2"/><line x1="101.2" y1="101.2" x2="106.8" y2="106.8" stroke="currentColor" stroke-width="1.2"/><line x1="113.2" y1="101.2" x2="118.8" y2="106.8" stroke="currentColor" stroke-width="1.2"/><line x1="125.2" y1="101.2" x2="130.8" y2="106.8" stroke="currentColor" stroke-width="1.2"/><line x1="137.2" y1="101.2" x2="142.8" y2="106.8" stroke="currentColor" stroke-width="1.2"/><line x1="149.2" y1="101.2" x2="154.8" y2="106.8" stroke="currentColor" stroke-width="1.2"/><line x1="161.2" y1="101.2" x2="166.8" y2="106.8" stroke="currentColor" stroke-width="1.2"/><line x1="173.2" y1="101.2" x2="178.8" y2="106.8" stroke="currentColor" stroke-width="1.2"/><line x1="185.2" y1="101.2" x2="190.8" y2="106.8" stroke="currentColor" stroke-width="1.2"/><line x1="197.2" y1="101.2" x2="202.8" y2="106.8" stroke="currentColor" stroke-width="1.2"/><line x1="209.2" y1="101.2" x2="214.8" y2="106.8" stroke="currentColor" stroke-width="1.2"/><line x1="221.2" y1="101.2" x2="226.8" y2="106.8" stroke="currentColor" stroke-width="1.2"/><line x1="95.2" y1="113.2" x2="100.8" y2="118.8" stroke="currentColor" stroke-width="1.2"/><line x1="107.2" y1="113.2" x2="112.8" y2="118.8" stroke="currentColor" stroke-width="1.2"/><line x1="119.2" y1="113.2" x2="124.8" y2="118.8" stroke="currentColor" stroke-width="1.2"/><line x1="131.2" y1="113.2" x2="136.8" y2="118.8" stroke="currentColor" stroke-width="1.2"/><line x1="143.2" y1="113.2" x2="148.8" y2="118.8" stroke="currentColor" stroke-width="1.2"/><line x1="155.2" y1="113.2" x2="160.8" y2="118.8" stroke="currentColor" stroke-width="1.2"/><line x1="167.2" y1="113.2" x2="172.8" y2="118.8" stroke="currentColor" stroke-width="1.2"/><line x1="179.2" y1="113.2" x2="184.8" y2="118.8" stroke="currentColor" stroke-width="1.2"/><line x1="191.2" y1="113.2" x2="196.8" y2="118.8" stroke="currentColor" stroke-width="1.2"/><line x1="203.2" y1="113.2" x2="208.8" y2="118.8" stroke="currentColor" stroke-width="1.2"/><line x1="215.2" y1="113.2" x2="220.8" y2="118.8" stroke="currentColor" stroke-width="1.2"/><line x1="101.2" y1="125.2" x2="106.8" y2="130.8" stroke="currentColor" stroke-width="1.2"/><line x1="113.2" y1="125.2" x2="118.8" y2="130.8" stroke="currentColor" stroke-width="1.2"/><line x1="125.2" y1="125.2" x2="130.8" y2="130.8" stroke="currentColor" stroke-width="1.2"/><line x1="137.2" y1="125.2" x2="142.8" y2="130.8" stroke="currentColor" stroke-width="1.2"/><line x1="149.2" y1="125.2" x2="154.8" y2="130.8" stroke="currentColor" stroke-width="1.2"/><line x1="161.2" y1="125.2" x2="166.8" y2="130.8" stroke="currentColor" stroke-width="1.2"/><line x1="173.2" y1="125.2" x2="178.8" y2="130.8" stroke="currentColor" stroke-width="1.2"/><line x1="185.2" y1="125.2" x2="190.8" y2="130.8" stroke="currentColor" stroke-width="1.2"/><line x1="197.2" y1="125.2" x2="202.8" y2="130.8" stroke="currentColor" stroke-width="1.2"/><line x1="209.2" y1="125.2" x2="214.8" y2="130.8" stroke="currentColor" stroke-width="1.2"/><line x1="107.2" y1="137.2" x2="112.8" y2="142.8" stroke="currentColor" stroke-width="1.2"/><line x1="119.2" y1="137.2" x2="124.8" y2="142.8" stroke="currentColor" stroke-width="1.2"/><line x1="131.2" y1="137.2" x2="136.8" y2="142.8" stroke="currentColor" stroke-width="1.2"/><line x1="143.2" y1="137.2" x2="148.8" y2="142.8" stroke="currentColor" stroke-width="1.2"/><line x1="155.2" y1="137.2" x2="160.8" y2="142.8" stroke="currentColor" stroke-width="1.2"/><line x1="167.2" y1="137.2" x2="172.8" y2="142.8" stroke="currentColor" stroke-width="1.2"/><line x1="179.2" y1="137.2" x2="184.8" y2="142.8" stroke="currentColor" stroke-width="1.2"/><line x1="191.2" y1="137.2" x2="196.8" y2="142.8" stroke="currentColor" stroke-width="1.2"/><line x1="203.2" y1="137.2" x2="208.8" y2="142.8" stroke="currentColor" stroke-width="1.2"/><circle cx="160" cy="100" r="2.6" fill="currentColor"/><circle cx="160" cy="180" r="2.6" fill="currentColor"/><circle cx="160" cy="20" r="2.6" fill="currentColor"/><circle cx="80" cy="100" r="2.6" fill="currentColor"/><circle cx="240" cy="100" r="2.6" fill="currentColor"/><text x="72" y="194" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">A</text><text x="248" y="194" font-size="13" font-family="inherit" fill="currentColor">B</text><text x="248" y="14" font-size="13" font-family="inherit" fill="currentColor">C</text><text x="72" y="14" font-size="13" font-family="inherit" fill="currentColor" text-anchor="end">D</text><text x="168" y="70" font-size="13" font-family="inherit" fill="currentColor">O</text><text x="160" y="198" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">2</text><text x="160" y="168" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">阴影内投点</text></svg></figure>',
    options: ['π/4', 'π/2', 'π/8', '1/2'],
    answer: 0,
    explanation: '这是几何概型，概率等于面积的比。正方形边长 2，面积 4；内切圆半径 r=边长/2=1，面积 π×1<sup>2</sup>=π。投放点在正方形内均匀分布，所以 P=圆面积÷正方形面积=π/4。选 A。'
  },
  {
    id: 'q-probability-13',
    kp: 'probability',
    difficulty: 'basic',
    type: 'single',
    stem: '下列事件中，属于必然事件的是（　）',
    options: ['掷一枚质地均匀的骰子，朝上的点数是 7', '袋中只装有 5 个红球，从中任意摸出一个球，摸到红球', '掷一枚质地均匀的硬币，正面朝上', '明天太阳从西边升起'],
    answer: 1,
    explanation: '在一定条件下必然发生的事件叫必然事件，必然不发生的事件叫不可能事件，可能发生也可能不发生的事件叫随机事件。逐项判断：A 中骰子的点数只能是 1 到 6，出现 7 不可能发生，是不可能事件；B 中袋里全是红球，任意摸一个一定是红球，必然发生，是必然事件；C 中硬币可能正面也可能反面，是随机事件；D 中太阳不会从西边升起，是不可能事件。故选 B。'
  },
  {
    id: 'q-probability-14',
    kp: 'probability',
    difficulty: 'basic',
    type: 'single',
    stem: '一个均匀的正方体骰子，六个面上分别刻有 1、2、3、4、5、6 个圆点。任意抛掷一次，向上一面的点数比 4 大的概率是（　）',
    options: ['1/3', '1/2', '2/3', '1/6'],
    answer: 0,
    explanation: '骰子均匀，6 个面中每一个面朝上的机会相等，所以所有等可能结果共 n=6 种。点数比 4 大的只有 5 和 6，满足条件的结果 m=2 种。由等可能概型公式 P=m/n=2/6=1/3。故选 A。'
  },
  {
    id: 'q-probability-15',
    kp: 'probability',
    difficulty: 'basic',
    type: 'fill',
    stem: '不透明袋中装有 10 张大小相同的卡片，分别标有数字 1、2、…、10。从中随机抽出 1 张，抽到的卡片上的数字是 3 的倍数的概率是（　）。（填分数或小数均可）',
    answers: ['3/10', '0.3'],
    explanation: '10 张卡片大小相同，任抽 1 张时每张被抽到的机会相等，所有等可能结果 n=10 种。1 到 10 中 3 的倍数是 3、6、9，满足条件的结果 m=3 种，所以 P=m/n=3/10=0.3。注意 0 不在 1 到 10 之中，不要把 0 算进去。'
  },
  {
    id: 'q-probability-16',
    kp: 'probability',
    difficulty: 'basic',
    type: 'single',
    stem: '一个不透明的袋子中装有 3 个红球和 2 个白球，它们除颜色外完全相同。从袋中随机摸出 1 个球，摸到白球的概率是（　）',
    options: ['2/5', '3/5', '1/2', '2/3'],
    answer: 0,
    explanation: '袋中 3+2=5 个球除颜色外完全相同，每个球被摸到的机会相等，所有等可能结果 n=5 种。白球有 2 个，满足条件的结果 m=2 种，所以 P(白)=m/n=2/5。分母是球的总数 5，不是红球数 3。故选 A。'
  },
  {
    id: 'q-probability-17',
    kp: 'probability',
    difficulty: 'basic',
    type: 'fill',
    stem: '如图，一个转盘被平均分成 12 个全等的扇形，其中 3 个相邻的扇形涂成阴影（中奖区）。任意转动转盘一次，指针落在阴影区的概率是（　）。（填分数或小数均可）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="转盘被平均分成12个全等扇形，顺时针标有1至12，其中相邻的3个扇形(共90度)涂斜线成为阴影中奖区"><circle cx="160" cy="124" r="88" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,124 L160,36 A88,88 0 0,1 204,47.79 Z" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M160,124 L204,47.79 A88,88 0 0,1 236.21,80 Z" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M160,124 L236.21,80 A88,88 0 0,1 248,124 Z" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M160,124 L248,124 A88,88 0 0,1 236.21,168 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,124 L236.21,168 A88,88 0 0,1 204,200.21 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,124 L204,200.21 A88,88 0 0,1 160,212 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,124 L160,212 A88,88 0 0,1 116,200.21 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,124 L116,200.21 A88,88 0 0,1 83.79,168 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,124 L83.79,168 A88,88 0 0,1 72,124 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,124 L72,124 A88,88 0 0,1 83.79,80 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,124 L83.79,80 A88,88 0 0,1 116,47.79 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,124 L116,47.79 A88,88 0 0,1 160,36 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="176.4" y="66.8" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">1</text><text x="204.8" y="83.2" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">2</text><text x="221.2" y="111.6" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">3</text><text x="221.2" y="144.4" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">4</text><text x="204.8" y="172.8" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">5</text><text x="176.4" y="189.2" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">6</text><text x="143.6" y="189.2" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">7</text><text x="115.2" y="172.8" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">8</text><text x="98.8" y="144.4" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">9</text><text x="98.8" y="111.6" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">10</text><text x="115.2" y="83.2" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">11</text><text x="143.6" y="66.8" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">12</text><circle cx="160" cy="124" r="2.4" fill="currentColor"/></svg></figure>',
    answers: ['1/4', '0.25'],
    explanation: '12 个扇形全等，指针停在每个扇形上的机会相等，所有等可能结果 n=12 种。阴影区占 3 个扇形，这 3 个扇形的圆心角共 3×30°=90°，满足条件的结果 m=3 种；用面积比算也一样：90°÷360°=1/4。所以 P=m/n=3/12=1/4=0.25。'
  },
  {
    id: 'q-probability-18',
    kp: 'probability',
    difficulty: 'basic',
    type: 'single',
    stem: '做"抛图钉"的重复试验，共抛掷 1000 次，其中钉尖朝上 620 次。由此估计抛一次图钉时钉尖朝上的概率约为（　）',
    options: ['0.38', '0.5', '0.62', '0.62 次'],
    answer: 2,
    explanation: '当试验次数很大时，事件发生的频率会稳定在某个常数附近，可用这个常数估计概率。本题 n=1000 次试验，钉尖朝上的次数 m=620，频率 = m/n = 620/1000 = 0.62，所以估计钉尖朝上的概率约为 0.62。D 项把概率与次数混淆了，概率是不带单位的数。故选 C。'
  },
  {
    id: 'q-probability-19',
    kp: 'probability',
    difficulty: 'basic',
    type: 'fill',
    stem: '有 20 张卡片，分别标有 1、2、3、…、20，从中随机抽取 1 张，抽到的数字是质数的概率是（　）。（填分数或小数均可）',
    answers: ['2/5', '0.4'],
    explanation: '20 张卡片被抽到的机会相等，所有等可能结果 n=20 种。1 到 20 中的质数是 2、3、5、7、11、13、17、19，满足条件的结果 m=8 种（1 既不是质数也不是合数，不能计入）。所以 P=m/n=8/20=2/5=0.4。'
  },
  {
    id: 'q-probability-20',
    kp: 'probability',
    difficulty: 'basic',
    type: 'fill',
    stem: '如图，一个长方形被平均分成 6 列、4 行共 24 个大小相同的小正方形，其中有 9 个小正方形涂成阴影。向这个长方形内随机投一点（点落在长方形内每一处的机会相等），则该点落在阴影部分的概率是（　）。（填分数或小数均可）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="长方形被平均分成6列4行共24个相同小正方形，其中9个小正方形涂斜线为阴影"><polygon points="40,44 280,44 280,204 40,204" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="80" y1="44" x2="80" y2="204" stroke="currentColor" stroke-width="0.8"/><line x1="120" y1="44" x2="120" y2="204" stroke="currentColor" stroke-width="0.8"/><line x1="160" y1="44" x2="160" y2="204" stroke="currentColor" stroke-width="0.8"/><line x1="200" y1="44" x2="200" y2="204" stroke="currentColor" stroke-width="0.8"/><line x1="240" y1="44" x2="240" y2="204" stroke="currentColor" stroke-width="0.8"/><line x1="40" y1="84" x2="280" y2="84" stroke="currentColor" stroke-width="0.8"/><line x1="40" y1="124" x2="280" y2="124" stroke="currentColor" stroke-width="0.8"/><line x1="40" y1="164" x2="280" y2="164" stroke="currentColor" stroke-width="0.8"/><polygon points="40,44 80,44 80,84 40,84" fill="none" stroke="currentColor" stroke-width="1"/><line x1="49.6" y1="70.4" x2="53.6" y2="81.6" stroke="currentColor" stroke-width="0.9"/><line x1="60.8" y1="70.4" x2="64.8" y2="81.6" stroke="currentColor" stroke-width="0.9"/><line x1="72" y1="70.4" x2="76" y2="81.6" stroke="currentColor" stroke-width="0.9"/><polygon points="80,44 120,44 120,84 80,84" fill="none" stroke="currentColor" stroke-width="1"/><line x1="89.6" y1="70.4" x2="93.6" y2="81.6" stroke="currentColor" stroke-width="0.9"/><line x1="100.8" y1="70.4" x2="104.8" y2="81.6" stroke="currentColor" stroke-width="0.9"/><line x1="112" y1="70.4" x2="116" y2="81.6" stroke="currentColor" stroke-width="0.9"/><polygon points="120,44 160,44 160,84 120,84" fill="none" stroke="currentColor" stroke-width="1"/><line x1="129.6" y1="70.4" x2="133.6" y2="81.6" stroke="currentColor" stroke-width="0.9"/><line x1="140.8" y1="70.4" x2="144.8" y2="81.6" stroke="currentColor" stroke-width="0.9"/><line x1="152" y1="70.4" x2="156" y2="81.6" stroke="currentColor" stroke-width="0.9"/><polygon points="160,84 200,84 200,124 160,124" fill="none" stroke="currentColor" stroke-width="1"/><line x1="169.6" y1="110.4" x2="173.6" y2="121.6" stroke="currentColor" stroke-width="0.9"/><line x1="180.8" y1="110.4" x2="184.8" y2="121.6" stroke="currentColor" stroke-width="0.9"/><line x1="192" y1="110.4" x2="196" y2="121.6" stroke="currentColor" stroke-width="0.9"/><polygon points="200,84 240,84 240,124 200,124" fill="none" stroke="currentColor" stroke-width="1"/><line x1="209.6" y1="110.4" x2="213.6" y2="121.6" stroke="currentColor" stroke-width="0.9"/><line x1="220.8" y1="110.4" x2="224.8" y2="121.6" stroke="currentColor" stroke-width="0.9"/><line x1="232" y1="110.4" x2="236" y2="121.6" stroke="currentColor" stroke-width="0.9"/><polygon points="80,124 120,124 120,164 80,164" fill="none" stroke="currentColor" stroke-width="1"/><line x1="89.6" y1="150.4" x2="93.6" y2="161.6" stroke="currentColor" stroke-width="0.9"/><line x1="100.8" y1="150.4" x2="104.8" y2="161.6" stroke="currentColor" stroke-width="0.9"/><line x1="112" y1="150.4" x2="116" y2="161.6" stroke="currentColor" stroke-width="0.9"/><polygon points="240,124 280,124 280,164 240,164" fill="none" stroke="currentColor" stroke-width="1"/><line x1="249.6" y1="150.4" x2="253.6" y2="161.6" stroke="currentColor" stroke-width="0.9"/><line x1="260.8" y1="150.4" x2="264.8" y2="161.6" stroke="currentColor" stroke-width="0.9"/><line x1="272" y1="150.4" x2="276" y2="161.6" stroke="currentColor" stroke-width="0.9"/><polygon points="120,164 160,164 160,204 120,204" fill="none" stroke="currentColor" stroke-width="1"/><line x1="129.6" y1="190.4" x2="133.6" y2="201.6" stroke="currentColor" stroke-width="0.9"/><line x1="140.8" y1="190.4" x2="144.8" y2="201.6" stroke="currentColor" stroke-width="0.9"/><line x1="152" y1="190.4" x2="156" y2="201.6" stroke="currentColor" stroke-width="0.9"/><polygon points="160,164 200,164 200,204 160,204" fill="none" stroke="currentColor" stroke-width="1"/><line x1="169.6" y1="190.4" x2="173.6" y2="201.6" stroke="currentColor" stroke-width="0.9"/><line x1="180.8" y1="190.4" x2="184.8" y2="201.6" stroke="currentColor" stroke-width="0.9"/><line x1="192" y1="190.4" x2="196" y2="201.6" stroke="currentColor" stroke-width="0.9"/></svg></figure>',
    answers: ['3/8', '0.375'],
    explanation: '这是几何概型，概率等于面积之比。24 个小正方形大小相同，可把总面积看成 n=24 个等面积的单位格；阴影部分由 m=9 个单位格拼成，所以 P = 阴影面积÷总面积 = 9/24 = 3/8 = 0.375。也可以数格子理解：阴影 9 格、空白 15 格，概率是 9/(9+15)=3/8，而不是 9/15=3/5。'
  },
  {
    id: 'q-probability-21',
    kp: 'probability',
    difficulty: 'basic',
    type: 'single',
    stem: '8 名同学依次抽签，签筒中有 8 张大小相同的签，其中 3 张写着"中奖"、5 张写着"谢谢参与"。小明第一个抽，他抽到"中奖"签的概率是（　）',
    options: ['3/8', '1/3', '5/8', '3/5'],
    answer: 0,
    explanation: '8 张签大小相同，任意抽 1 张时每张被抽到的机会相等，所有等可能结果 n=8 种；"中奖"签有 3 张，满足条件的结果 m=3 种，所以 P=m/n=3/8。3:5 是中奖签与不中奖签的数量之比，不是概率，概率的分母必须是全部签数 8。故选 A。'
  },
  {
    id: 'q-probability-22',
    kp: 'probability',
    difficulty: 'medium',
    type: 'fill',
    stem: '把一枚质地均匀的骰子先后抛掷两次，两次朝上的点数相加，则点数之和等于 8 的概率是（　）',
    answers: ['5/36'],
    explanation: '两次抛掷要按有序数对计数：第一次 6 种、第二次 6 种，所有等可能结果 n=6×6=36 种。和为 8 的有序数对是 (2,6)、(3,5)、(4,4)、(5,3)、(6,2)，满足条件的结果 m=5 种（(2,6) 与 (6,2) 是两种不同结果，而 (4,4) 只算一种）。所以 P=m/n=5/36。'
  },
  {
    id: 'q-probability-23',
    kp: 'probability',
    difficulty: 'medium',
    type: 'fill',
    stem: '一个袋中装有 3 个红球和 2 个白球，除颜色外完全相同。从中不放回地依次摸出 2 个球（第一次摸出的球不再放回袋中），则两次都摸到红球的概率是（　）',
    answers: ['3/10', '0.3'],
    explanation: '本题是"不放回"摸球，第二次摸时袋中球数已经减少。按有序结果计数：第一次从 5 个球中摸 1 个有 5 种，第二次从剩下的 4 个球中摸 1 个有 4 种，所有等可能结果 n=5×4=20 种。两次都红：第一次从 3 个红球中摸（3 种），第二次从剩下的 2 个红球中摸（2 种），满足条件的结果 m=3×2=6 种，所以 P=m/n=6/20=3/10=0.3。分步相乘也一致：3/5×2/4=3/10。'
  },
  {
    id: 'q-probability-24',
    kp: 'probability',
    difficulty: 'medium',
    type: 'single',
    stem: '袋中装有 2 个红球和 1 个白球，除颜色外完全相同。每次摸出 1 个球，记下颜色后放回袋中摇匀，再摸下一次。连续摸两次，则两次都摸到红球的概率是（　）',
    options: ['1/3', '4/9', '2/3', '1/9'],
    answer: 1,
    explanation: '题目明确"记下颜色后放回"，属于有放回摸球，两次摸球互不影响。每次摸到红球的概率都是 2/3，所有等可能结果 n=3×3=9 种（每次袋中都是 3 个球），两次都红的结果 m=2×2=4 种，所以 P=4/9。若误按不放回计算会得到 2/3×1/2=1/3（A 项），这是本题的易错点。故选 B。'
  },
  {
    id: 'q-probability-25',
    kp: 'probability',
    difficulty: 'medium',
    type: 'fill',
    stem: '如图，先转动一个被平均分成 4 个扇形的转盘（分别标有 1、2、3、4）一次，再掷一枚质地均匀的骰子一次，表中列出了两数相乘的全部结果。则两数之积为奇数的概率是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="列表法表格：列标题为骰子点数1至6，行标题为转盘数字1至4，格内为两数之积，积为奇数的格子涂斜线"><text x="160" y="24" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">转盘×骰子：格内为两数之积</text><polygon points="48,56 264,56 264,200 48,200" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="84" y1="56" x2="84" y2="200" stroke="currentColor" stroke-width="0.8"/><line x1="120" y1="56" x2="120" y2="200" stroke="currentColor" stroke-width="0.8"/><line x1="156" y1="56" x2="156" y2="200" stroke="currentColor" stroke-width="0.8"/><line x1="192" y1="56" x2="192" y2="200" stroke="currentColor" stroke-width="0.8"/><line x1="228" y1="56" x2="228" y2="200" stroke="currentColor" stroke-width="0.8"/><line x1="48" y1="92" x2="264" y2="92" stroke="currentColor" stroke-width="0.8"/><line x1="48" y1="128" x2="264" y2="128" stroke="currentColor" stroke-width="0.8"/><line x1="48" y1="164" x2="264" y2="164" stroke="currentColor" stroke-width="0.8"/><polygon points="48,56 84,56 84,92 48,92" fill="none" stroke="currentColor" stroke-width="1"/><line x1="56.64" y1="79.76" x2="60.24" y2="89.84" stroke="currentColor" stroke-width="0.9"/><line x1="66.72" y1="79.76" x2="70.32" y2="89.84" stroke="currentColor" stroke-width="0.9"/><line x1="76.8" y1="79.76" x2="80.4" y2="89.84" stroke="currentColor" stroke-width="0.9"/><polygon points="120,56 156,56 156,92 120,92" fill="none" stroke="currentColor" stroke-width="1"/><line x1="128.64" y1="79.76" x2="132.24" y2="89.84" stroke="currentColor" stroke-width="0.9"/><line x1="138.72" y1="79.76" x2="142.32" y2="89.84" stroke="currentColor" stroke-width="0.9"/><line x1="148.8" y1="79.76" x2="152.4" y2="89.84" stroke="currentColor" stroke-width="0.9"/><polygon points="192,56 228,56 228,92 192,92" fill="none" stroke="currentColor" stroke-width="1"/><line x1="200.64" y1="79.76" x2="204.24" y2="89.84" stroke="currentColor" stroke-width="0.9"/><line x1="210.72" y1="79.76" x2="214.32" y2="89.84" stroke="currentColor" stroke-width="0.9"/><line x1="220.8" y1="79.76" x2="224.4" y2="89.84" stroke="currentColor" stroke-width="0.9"/><polygon points="48,128 84,128 84,164 48,164" fill="none" stroke="currentColor" stroke-width="1"/><line x1="56.64" y1="151.76" x2="60.24" y2="161.84" stroke="currentColor" stroke-width="0.9"/><line x1="66.72" y1="151.76" x2="70.32" y2="161.84" stroke="currentColor" stroke-width="0.9"/><line x1="76.8" y1="151.76" x2="80.4" y2="161.84" stroke="currentColor" stroke-width="0.9"/><polygon points="120,128 156,128 156,164 120,164" fill="none" stroke="currentColor" stroke-width="1"/><line x1="128.64" y1="151.76" x2="132.24" y2="161.84" stroke="currentColor" stroke-width="0.9"/><line x1="138.72" y1="151.76" x2="142.32" y2="161.84" stroke="currentColor" stroke-width="0.9"/><line x1="148.8" y1="151.76" x2="152.4" y2="161.84" stroke="currentColor" stroke-width="0.9"/><polygon points="192,128 228,128 228,164 192,164" fill="none" stroke="currentColor" stroke-width="1"/><line x1="200.64" y1="151.76" x2="204.24" y2="161.84" stroke="currentColor" stroke-width="0.9"/><line x1="210.72" y1="151.76" x2="214.32" y2="161.84" stroke="currentColor" stroke-width="0.9"/><line x1="220.8" y1="151.76" x2="224.4" y2="161.84" stroke="currentColor" stroke-width="0.9"/><text x="66" y="72.96" font-size="11.5" font-family="inherit" fill="currentColor">1</text><text x="102" y="72.96" font-size="11.5" font-family="inherit" fill="currentColor">2</text><text x="138" y="72.96" font-size="11.5" font-family="inherit" fill="currentColor">3</text><text x="174" y="72.96" font-size="11.5" font-family="inherit" fill="currentColor">4</text><text x="210" y="72.96" font-size="11.5" font-family="inherit" fill="currentColor">5</text><text x="246" y="72.96" font-size="11.5" font-family="inherit" fill="currentColor">6</text><text x="66" y="108.96" font-size="11.5" font-family="inherit" fill="currentColor">2</text><text x="102" y="108.96" font-size="11.5" font-family="inherit" fill="currentColor">4</text><text x="138" y="108.96" font-size="11.5" font-family="inherit" fill="currentColor">6</text><text x="174" y="108.96" font-size="11.5" font-family="inherit" fill="currentColor">8</text><text x="210" y="108.96" font-size="11.5" font-family="inherit" fill="currentColor">10</text><text x="246" y="108.96" font-size="11.5" font-family="inherit" fill="currentColor">12</text><text x="66" y="144.96" font-size="11.5" font-family="inherit" fill="currentColor">3</text><text x="102" y="144.96" font-size="11.5" font-family="inherit" fill="currentColor">6</text><text x="138" y="144.96" font-size="11.5" font-family="inherit" fill="currentColor">9</text><text x="174" y="144.96" font-size="11.5" font-family="inherit" fill="currentColor">12</text><text x="210" y="144.96" font-size="11.5" font-family="inherit" fill="currentColor">15</text><text x="246" y="144.96" font-size="11.5" font-family="inherit" fill="currentColor">18</text><text x="66" y="180.96" font-size="11.5" font-family="inherit" fill="currentColor">4</text><text x="102" y="180.96" font-size="11.5" font-family="inherit" fill="currentColor">8</text><text x="138" y="180.96" font-size="11.5" font-family="inherit" fill="currentColor">12</text><text x="174" y="180.96" font-size="11.5" font-family="inherit" fill="currentColor">16</text><text x="210" y="180.96" font-size="11.5" font-family="inherit" fill="currentColor">20</text><text x="246" y="180.96" font-size="11.5" font-family="inherit" fill="currentColor">24</text><text x="66" y="48" font-size="11.5" font-family="inherit" fill="currentColor">1</text><text x="102" y="48" font-size="11.5" font-family="inherit" fill="currentColor">2</text><text x="138" y="48" font-size="11.5" font-family="inherit" fill="currentColor">3</text><text x="174" y="48" font-size="11.5" font-family="inherit" fill="currentColor">4</text><text x="210" y="48" font-size="11.5" font-family="inherit" fill="currentColor">5</text><text x="246" y="48" font-size="11.5" font-family="inherit" fill="currentColor">6</text><text x="40" y="78" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">1</text><text x="40" y="114" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">2</text><text x="40" y="150" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">3</text><text x="40" y="186" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">4</text></svg></figure>',
    answers: ['1/4', '0.25'],
    explanation: '转盘的 4 种结果与骰子的 6 种结果相互独立，所有等可能结果 n=4×6=24 种（即表中的 24 个格子）。积为奇数 ⇔ 两数都是奇数：转盘上的奇数有 1、3 共 2 个，骰子上的奇数有 1、3、5 共 3 个，满足条件的结果 m=2×3=6 种。所以 P=m/n=6/24=1/4=0.25。'
  },
  {
    id: 'q-probability-26',
    kp: 'probability',
    difficulty: 'medium',
    type: 'single',
    stem: '一个转盘被平均分成 3 个全等的扇形，分别标有 1、2、3。任意转动转盘两次（每次指针停在每个扇形上的机会相等），则两次指针所指数字相同的概率是（　）',
    options: ['1/9', '1/3', '2/3', '1/2'],
    answer: 1,
    explanation: '两次转动相互独立，按有序数对计数：所有等可能结果 n=3×3=9 种（11、12、13、21、22、23、31、32、33）。两次数字相同的有 11、22、33 三种，满足条件的结果 m=3 种，所以 P=m/n=3/9=1/3。注意"相同"不指定是哪个数字，三种情况都要算上。故选 B。'
  },
  {
    id: 'q-probability-27',
    kp: 'probability',
    difficulty: 'medium',
    type: 'single',
    stem: '有 4 张卡片，分别标有 1、2、3、4。随机抽出一张记下数字后放回，再抽出一张，表中列出了两次数字之和的全部结果。则两次数字之和为 6 的概率是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="列表法表格：行与列分别为第一次、第二次抽到的卡片数字1至4，格内为两次数字之和，和为6的格子涂斜线"><text x="160" y="30" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">第二次抽到的数字 1–4</text><polygon points="70,60 230,60 230,220 70,220" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="110" y1="60" x2="110" y2="220" stroke="currentColor" stroke-width="0.8"/><line x1="150" y1="60" x2="150" y2="220" stroke="currentColor" stroke-width="0.8"/><line x1="190" y1="60" x2="190" y2="220" stroke="currentColor" stroke-width="0.8"/><line x1="70" y1="100" x2="230" y2="100" stroke="currentColor" stroke-width="0.8"/><line x1="70" y1="140" x2="230" y2="140" stroke="currentColor" stroke-width="0.8"/><line x1="70" y1="180" x2="230" y2="180" stroke="currentColor" stroke-width="0.8"/><polygon points="190,100 230,100 230,140 190,140" fill="none" stroke="currentColor" stroke-width="1"/><line x1="199.6" y1="126.4" x2="203.6" y2="137.6" stroke="currentColor" stroke-width="0.9"/><line x1="210.8" y1="126.4" x2="214.8" y2="137.6" stroke="currentColor" stroke-width="0.9"/><line x1="222" y1="126.4" x2="226" y2="137.6" stroke="currentColor" stroke-width="0.9"/><polygon points="150,140 190,140 190,180 150,180" fill="none" stroke="currentColor" stroke-width="1"/><line x1="159.6" y1="166.4" x2="163.6" y2="177.6" stroke="currentColor" stroke-width="0.9"/><line x1="170.8" y1="166.4" x2="174.8" y2="177.6" stroke="currentColor" stroke-width="0.9"/><line x1="182" y1="166.4" x2="186" y2="177.6" stroke="currentColor" stroke-width="0.9"/><polygon points="110,180 150,180 150,220 110,220" fill="none" stroke="currentColor" stroke-width="1"/><line x1="119.6" y1="206.4" x2="123.6" y2="217.6" stroke="currentColor" stroke-width="0.9"/><line x1="130.8" y1="206.4" x2="134.8" y2="217.6" stroke="currentColor" stroke-width="0.9"/><line x1="142" y1="206.4" x2="146" y2="217.6" stroke="currentColor" stroke-width="0.9"/><text x="90" y="78.4" font-size="11.5" font-family="inherit" fill="currentColor">2</text><text x="130" y="78.4" font-size="11.5" font-family="inherit" fill="currentColor">3</text><text x="170" y="78.4" font-size="11.5" font-family="inherit" fill="currentColor">4</text><text x="210" y="78.4" font-size="11.5" font-family="inherit" fill="currentColor">5</text><text x="90" y="118.4" font-size="11.5" font-family="inherit" fill="currentColor">3</text><text x="130" y="118.4" font-size="11.5" font-family="inherit" fill="currentColor">4</text><text x="170" y="118.4" font-size="11.5" font-family="inherit" fill="currentColor">5</text><text x="210" y="118.4" font-size="11.5" font-family="inherit" fill="currentColor">6</text><text x="90" y="158.4" font-size="11.5" font-family="inherit" fill="currentColor">4</text><text x="130" y="158.4" font-size="11.5" font-family="inherit" fill="currentColor">5</text><text x="170" y="158.4" font-size="11.5" font-family="inherit" fill="currentColor">6</text><text x="210" y="158.4" font-size="11.5" font-family="inherit" fill="currentColor">7</text><text x="90" y="198.4" font-size="11.5" font-family="inherit" fill="currentColor">5</text><text x="130" y="198.4" font-size="11.5" font-family="inherit" fill="currentColor">6</text><text x="170" y="198.4" font-size="11.5" font-family="inherit" fill="currentColor">7</text><text x="210" y="198.4" font-size="11.5" font-family="inherit" fill="currentColor">8</text><text x="90" y="52" font-size="11.5" font-family="inherit" fill="currentColor">1</text><text x="130" y="52" font-size="11.5" font-family="inherit" fill="currentColor">2</text><text x="170" y="52" font-size="11.5" font-family="inherit" fill="currentColor">3</text><text x="210" y="52" font-size="11.5" font-family="inherit" fill="currentColor">4</text><text x="62" y="84" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">1</text><text x="62" y="124" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">2</text><text x="62" y="164" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">3</text><text x="62" y="204" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">4</text></svg></figure>',
    options: ['3/16', '1/4', '1/8', '3/8'],
    answer: 0,
    explanation: '有放回抽取，两次抽取互不影响，所有等可能结果 n=4×4=16 种（表中 16 个格子）。和为 6 的有序数对只有 (2,4)、(3,3)、(4,2)，满足条件的结果 m=3 种，所以 P=m/n=3/16。若按不放回理解，样本空间会变成 4×3=12 种，且 (3,3) 不可能出现，与题意不符。故选 A。'
  },
  {
    id: 'q-probability-28',
    kp: 'probability',
    difficulty: 'medium',
    type: 'single',
    stem: '某工厂质检部门从一批产品中随机抽取 500 件进行检验，发现其中有 15 件不合格。据此估计这批产品的不合格率约为（　）',
    options: ['0.3%', '3%', '5%', '1.5%'],
    answer: 1,
    explanation: '用频率估计概率：抽取的 n=500 件产品中不合格的有 m=15 件，不合格的频率 = m/n = 15/500 = 0.03，即 3%。当抽取的件数足够多时，可以用频率估计整批产品的不合格率，故约为 3%。故选 B。'
  },
  {
    id: 'q-probability-29',
    kp: 'probability',
    difficulty: 'medium',
    type: 'single',
    stem: '某种彩票的中奖概率为 1/1000，下列说法正确的是（　）',
    options: ['买 1000 张这种彩票一定中奖', '买 1000 张这种彩票一定不中奖', '买 1 张中奖的可能性很小，但买 1000 张也不保证一定中奖', '买 1000 张后中奖的概率就变成 1'],
    answer: 2,
    explanation: '概率 1/1000 表示大量重复购买时中奖的频率会稳定在 1/1000 附近，它描述的是"可能性的大小"，不是"一定发生"或"一定不发生"。每张彩票是否中奖都是随机事件，各张之间相互独立，所以买 1000 张可能一张都不中，也可能中 1 张甚至更多；A、B、D 都把概率误解成了必然结果。故选 C。'
  },
  {
    id: 'q-probability-30',
    kp: 'probability',
    difficulty: 'medium',
    type: 'single',
    stem: '甲、乙两人用转盘做游戏：把一个转盘平均分成 4 个全等的扇形，依次标上 1、2、3、4。规则是：指针停在标有 1 或 2 的扇形上甲赢一局，停在标有 3 或 4 的扇形上乙赢一局。这个游戏对甲、乙两人（　）',
    options: ['公平，因为两人每局获胜的概率都是 1/2', '不公平，对甲有利', '不公平，对乙有利', '无法判断是否公平'],
    answer: 0,
    explanation: '转盘被平均分成 4 个全等扇形，每个扇形的圆心角都是 360°÷4=90°，指针停在每个扇形上的机会相等，所有等可能结果 n=4 种。甲获胜对应 1、2 两个扇形，占据的圆心角共 2×90°=180°，P(甲)=2/4=180°/360°=1/2；乙对应 3、4，P(乙)=1/2。两人每局获胜的概率相等，大量重复游戏时平均得分相同，所以游戏公平。判断公平性的依据是分别算出双方获胜概率再比较，而不是凭感觉。故选 A。',
    tags: ['circle']
  },
  {
    id: 'q-probability-31',
    kp: 'probability',
    difficulty: 'medium',
    type: 'single',
    stem: '有 5 张卡片，分别标有 1、2、3、4、5，从中不放回地随机抽出 2 张（一次抽出两张，不分先后）。则两张卡片上的数字之积为偶数的概率是（　）',
    options: ['7/10', '3/10', '2/5', '3/5'],
    answer: 0,
    explanation: '一次抽出两张、不分先后，样本空间是 5 张中任取 2 张的组合，所有等可能结果 n=10 种：{1,2}、{1,3}、{1,4}、{1,5}、{2,3}、{2,4}、{2,5}、{3,4}、{3,5}、{4,5}。积为奇数 ⇔ 两张都是奇数，只能从 1、3、5 中取两张，共 3 种；所以积为偶数的有 m=10−3=7 种（至少含一张偶数 2 或 4）。P=m/n=7/10=0.7。故选 A。'
  },
  {
    id: 'q-probability-32',
    kp: 'probability',
    difficulty: 'medium',
    type: 'single',
    stem: '袋中装有 1 个红球和 1 个白球，除颜色外完全相同。每次摸出 1 个球记下颜色后放回，再摸下一次。如图用树状图列出了连续摸两次的全部结果，则两次摸到颜色相同的球的概率是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="有放回摸球两次的树状图：开始分出红、白两支各占二分之一，每支下再分两支各占二分之一，末端4条路径概率乘积均为四分之一"><text x="10" y="124" font-size="11.5" font-family="inherit" fill="currentColor">开始</text><circle cx="28" cy="120" r="2.6" fill="currentColor"/><line x1="28" y1="120" x2="110" y2="70" stroke="currentColor" stroke-width="1.6"/><text x="52.01" y="98.82" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1/2</text><circle cx="110" cy="70" r="2.6" fill="currentColor"/><text x="110" y="88" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">红</text><line x1="28" y1="120" x2="110" y2="170" stroke="currentColor" stroke-width="1.6"/><text x="61.39" y="133.82" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1/2</text><circle cx="110" cy="170" r="2.6" fill="currentColor"/><text x="110" y="188" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">白</text><line x1="110" y1="70" x2="200" y2="36" stroke="currentColor" stroke-width="1.6"/><text x="138.32" y="53.68" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1/2</text><circle cx="200" cy="36" r="2.6" fill="currentColor"/><text x="208" y="40" font-size="11.5" font-family="inherit" fill="currentColor">红红 1/4</text><line x1="110" y1="70" x2="200" y2="104" stroke="currentColor" stroke-width="1.6"/><text x="144.68" y="77.48" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1/2</text><circle cx="200" cy="104" r="2.6" fill="currentColor"/><text x="208" y="108" font-size="11.5" font-family="inherit" fill="currentColor">红白 1/4</text><line x1="110" y1="170" x2="200" y2="136" stroke="currentColor" stroke-width="1.6"/><text x="138.32" y="153.68" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1/2</text><circle cx="200" cy="136" r="2.6" fill="currentColor"/><text x="208" y="140" font-size="11.5" font-family="inherit" fill="currentColor">白红 1/4</text><line x1="110" y1="170" x2="200" y2="204" stroke="currentColor" stroke-width="1.6"/><text x="144.68" y="177.48" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1/2</text><circle cx="200" cy="204" r="2.6" fill="currentColor"/><text x="208" y="208" font-size="11.5" font-family="inherit" fill="currentColor">白白 1/4</text></svg></figure>',
    options: ['1/2', '1/4', '1/3', '3/4'],
    answer: 0,
    explanation: '有放回摸球，两次互不影响。树状图第一层 2 个分支各占 1/2，每个第一层分支下再分 2 个分支也各占 1/2，所以每条路径的概率都是 1/2×1/2=1/4，末端共 n=4 个等可能结果（红红、红白、白红、白白）。颜色相同的是"红红"和"白白"两条路径，m=2，所以 P=2×1/4=2/4=1/2。故选 A。'
  },
  {
    id: 'q-probability-33',
    kp: 'probability',
    difficulty: 'medium',
    type: 'fill',
    stem: '将一枚质地均匀的硬币连续抛掷三次，则三次中至少出现一次正面朝上的概率是（　）',
    answers: ['7/8', '0.875'],
    explanation: '每次抛掷有正、反 2 种等可能结果，三次共 n=2³=8 种等可能结果（正正正、正正反、正反正、正反反、反正正、反正反、反反正、反反反）。"至少一次正面"的对立事件是"三次都是反面"，只有 1 种，所以满足条件的结果 m=8−1=7 种，P=m/n=7/8=0.875。用对立事件计算比逐个列举更快。'
  },
  {
    id: 'q-probability-34',
    kp: 'probability',
    difficulty: 'medium',
    type: 'fill',
    stem: '如图，一个转盘被平均分成 6 个全等的扇形，依次标有 1、2、3、4、5、6。任意转动转盘一次，指针所指扇形上的数字是质数的概率是（　）。（填分数或小数均可）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="转盘被平均分成6个全等扇形，顺时针依次标有数字1、2、3、4、5、6"><circle cx="160" cy="124" r="88" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,124 L160,36 A88,88 0 0,1 236.21,80 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,124 L236.21,80 A88,88 0 0,1 236.21,168 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,124 L236.21,168 A88,88 0 0,1 160,212 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,124 L160,212 A88,88 0 0,1 83.79,168 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,124 L83.79,168 A88,88 0 0,1 83.79,80 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,124 L83.79,80 A88,88 0 0,1 160,36 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="191.68" y="73.13" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">1</text><text x="223.36" y="128" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">2</text><text x="191.68" y="182.87" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">3</text><text x="128.32" y="182.87" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">4</text><text x="96.64" y="128" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">5</text><text x="128.32" y="73.13" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">6</text><circle cx="160" cy="124" r="2.4" fill="currentColor"/></svg></figure>',
    answers: ['1/2', '0.5'],
    explanation: '6 个扇形全等，每个扇形的圆心角为 360°÷6=60°，指针停在每个扇形上的机会相等，所有等可能结果 n=6 种。1 到 6 中的质数是 2、3、5，满足条件的结果 m=3 种（1 不是质数，4 和 6 是合数）。所以 P=m/n=3/6=1/2=0.5。'
  },
  {
    id: 'q-probability-35',
    kp: 'probability',
    difficulty: 'medium',
    type: 'single',
    stem: '袋中装有 4 个红球、3 个白球和 2 个黄球，它们除颜色外形状大小完全一样。闭上眼睛从中任意取出一个球，取出的球是红色或白色的概率是（　）',
    options: ['7/9', '4/9', '1/3', '2/9'],
    answer: 0,
    explanation: '袋中共有 4+3+2=9 个球，每个球被取到的机会相等，所有等可能结果 n=9 种。红色或白色的球共 4+3=7 个，满足条件的结果 m=7 种，所以 P=m/n=7/9。也可以先算取到黄球的概率 2/9，再用 1−2/9=7/9。故选 A。'
  },
  {
    id: 'q-probability-36',
    kp: 'probability',
    difficulty: 'hard',
    type: 'fill',
    stem: '袋中装有 2 个红球（记为 R<sub>1</sub>、R<sub>2</sub>）和 1 个白球 W，除颜色外完全相同。甲、乙两人依次从中摸出 1 个球，甲摸出的球不放回，再由乙摸。如图用树状图列出了全部结果，则乙摸到红球的概率是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="不放回摸球两次的树状图：第一层分出R₁、R₂、W三支各占三分之一，每支下再从剩余两个球分两支各占二分之一，末端6条路径概率乘积均为六分之一"><text x="10" y="125" font-size="11.5" font-family="inherit" fill="currentColor">开始</text><circle cx="26" cy="121" r="2.6" fill="currentColor"/><line x1="26" y1="121" x2="100" y2="45" stroke="currentColor" stroke-width="1.6"/><text x="43.23" y="94.4" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1/3</text><circle cx="100" cy="45" r="2.6" fill="currentColor"/><text x="100" y="63" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">R₁</text><line x1="26" y1="121" x2="100" y2="121" stroke="currentColor" stroke-width="1.6"/><text x="49.68" y="116" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1/3</text><circle cx="100" cy="121" r="2.6" fill="currentColor"/><text x="100" y="139" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">R₂</text><line x1="26" y1="121" x2="100" y2="197" stroke="currentColor" stroke-width="1.6"/><text x="56.13" y="143.04" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1/3</text><circle cx="100" cy="197" r="2.6" fill="currentColor"/><text x="100" y="215" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">W</text><line x1="100" y1="45" x2="190" y2="26" stroke="currentColor" stroke-width="1.6"/><text x="143.04" y="30.2" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1/2</text><circle cx="190" cy="26" r="2.6" fill="currentColor"/><text x="198" y="30" font-size="11.5" font-family="inherit" fill="currentColor">R₁R₂ 1/6</text><line x1="100" y1="45" x2="190" y2="64" stroke="currentColor" stroke-width="1.6"/><text x="146.96" y="49.2" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1/2</text><circle cx="190" cy="64" r="2.6" fill="currentColor"/><text x="198" y="68" font-size="11.5" font-family="inherit" fill="currentColor">R₁W 1/6</text><line x1="100" y1="121" x2="190" y2="102" stroke="currentColor" stroke-width="1.6"/><text x="143.04" y="106.2" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1/2</text><circle cx="190" cy="102" r="2.6" fill="currentColor"/><text x="198" y="106" font-size="11.5" font-family="inherit" fill="currentColor">R₂R₁ 1/6</text><line x1="100" y1="121" x2="190" y2="140" stroke="currentColor" stroke-width="1.6"/><text x="146.96" y="125.2" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1/2</text><circle cx="190" cy="140" r="2.6" fill="currentColor"/><text x="198" y="144" font-size="11.5" font-family="inherit" fill="currentColor">R₂W 1/6</text><line x1="100" y1="197" x2="190" y2="178" stroke="currentColor" stroke-width="1.6"/><text x="143.04" y="182.2" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1/2</text><circle cx="190" cy="178" r="2.6" fill="currentColor"/><text x="198" y="182" font-size="11.5" font-family="inherit" fill="currentColor">WR₁ 1/6</text><line x1="100" y1="197" x2="190" y2="216" stroke="currentColor" stroke-width="1.6"/><text x="146.96" y="201.2" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1/2</text><circle cx="190" cy="216" r="2.6" fill="currentColor"/><text x="198" y="220" font-size="11.5" font-family="inherit" fill="currentColor">WR₂ 1/6</text></svg></figure>',
    answers: ['2/3'],
    explanation: '甲、乙依次不放回摸球，按树状图计数：第一层 3 个分支（R₁、R₂、W）各占 1/3，每个分支下再从剩下的 2 个球中分 2 个分支，第二层每条枝都是 1/2，所以每条路径的概率为 1/3×1/2=1/6，末端共 n=6 条等可能路径。乙摸到红球要分两类：甲摸到红球（R₁、R₂ 两个分支），每个分支下剩 1 红 1 白，各有 1 条路径使乙摸红，共 2 条；甲摸到白球 W（1 个分支），该分支下剩 2 个红球，2 条路径乙都摸红，共 2 条。合计 m=2+2=4 条路径，所以 P=m/n=4/6=2/3。分步相乘相加也一致：2/3×1/2+1/3×1=1/3+1/3=2/3。'
  },
  {
    id: 'q-probability-37',
    kp: 'probability',
    difficulty: 'hard',
    type: 'fill',
    stem: '如图，一个转盘被分成三个扇形，其中红色扇形、黄色扇形、蓝色扇形的圆心角分别为 90°、120°、150°。任意转动转盘一次，指针停在哪个扇形内的机会与该扇形的面积（即圆心角）成正比。连续转动转盘两次，则两次指针都停在红色扇形内的概率是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="转盘被分成三个扇形，红色扇形圆心角90度、黄色扇形120度、蓝色扇形150度，红色扇形涂斜线"><circle cx="160" cy="124" r="88" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,124 L160,36 A88,88 0 0,1 248,124 Z" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M160,124 L248,124 A88,88 0 0,1 116,200.21 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,124 L116,200.21 A88,88 0 0,1 160,36 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="198.58" y="89.42" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">红</text><text x="187.28" y="175.25" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">黄</text><text x="107.3" y="113.88" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">蓝</text><circle cx="160" cy="124" r="2.4" fill="currentColor"/></svg></figure>',
    answers: ['1/16', '0.0625'],
    explanation: '同圆中扇形的面积与圆心角成正比，所以指针停在各扇形内的概率等于该扇形圆心角与 360° 的比：红色 P=90°/360°=1/4，黄色 P=120°/360°=1/3，蓝色 P=150°/360°=5/12（三者圆心角 90°+120°+150°=360° 说明分区完整，概率 1/4+1/3+5/12=1）。两次转动相互独立，把 12 份圆心角各 30° 看成 12 个等可能扇区，红色占 3 份，所有等可能结果 n=12×12=144 种，两次都落在红色 m=3×3=9 种，P=9/144=1/16=0.0625，与 1/4×1/4=1/16 一致。',
    tags: ['circle']
  },
  {
    id: 'q-probability-38',
    kp: 'probability',
    difficulty: 'hard',
    type: 'fill',
    stem: '如图，一个圆形飞镖靶被分成三个同心圆区域：最内圆的半径（即红心）为 1，中间圆的半径为 2，最外圆的半径为 3（单位相同）。向靶面随机投掷一枚飞镖，飞镖落在靶面内每一处的机会相等，则飞镖落在中间圆环（到靶心距离大于 1 且不超过 2 的区域）内的概率是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="圆形飞镖靶：三个同心圆半径分别为1、2、3，最内圆为红心，半径1到2之间为中间圆环，半径2到3之间为外环"><circle cx="160" cy="112" r="32" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="160" cy="112" r="64" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="160" cy="112" r="96" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="160" y="100" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">r=1</text><text x="160" y="66" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">r=2</text><text x="160" y="34" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">r=3</text><circle cx="160" cy="112" r="2.4" fill="currentColor"/></svg></figure>',
    answers: ['1/3'],
    explanation: '这是几何概型，概率等于面积之比。靶面总面积 = π×3²=9π；中间圆环的面积 = 半径为 2 的圆面积 − 半径为 1 的圆面积 = π×2²−π×1²=4π−π=3π。所以 P = 3π÷9π = 1/3（也可写成 (2²−1²)/3²=3/9=1/3）。注意红心、中间环、外环三块面积之比为 1:3:5，中间环占 3/9=1/3。',
    tags: ['circle']
  },
  {
    id: 'q-probability-39',
    kp: 'probability',
    difficulty: 'hard',
    type: 'fill',
    stem: '如图，正方形 ABCD 的边长为 6，E、F 分别是边 AB、AD 的中点。向正方形 ABCD 内随机投一点（点落在正方形内每一处的机会相等），则该点落在 △AEF 内的概率是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="正方形ABCD边长为6，E是AB的中点，F是AD的中点，三角形AEF涂斜线"><polygon points="80,40 240,40 240,200 80,200" fill="none" stroke="currentColor" stroke-width="1.6"/><polygon points="80,40 160,40 80,120" fill="none" stroke="currentColor" stroke-width="1"/><line x1="92" y1="52" x2="106" y2="66" stroke="currentColor" stroke-width="0.9"/><line x1="104" y1="48" x2="118" y2="62" stroke="currentColor" stroke-width="0.9"/><line x1="96" y1="68" x2="110" y2="82" stroke="currentColor" stroke-width="0.9"/><text x="72" y="34" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="end">A</text><text x="248" y="34" font-size="12.5" font-family="inherit" fill="currentColor">B</text><text x="248" y="216" font-size="12.5" font-family="inherit" fill="currentColor">C</text><text x="72" y="216" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="end">D</text><text x="160" y="30" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">E</text><text x="72" y="124" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="end">F</text><text x="160" y="194" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">正方形边长 6，E、F 为中点</text></svg></figure>',
    answers: ['1/8', '0.125'],
    explanation: '几何概型，概率等于面积之比。正方形面积 = 6×6=36；△AEF 中 AE=3、AF=3 且 ∠A=90°，面积 = ½×3×3=4.5，所以 P = 4.5÷36 = 1/8 = 0.125。用相似也能算：E、F 是中点，AE/AB = AF/AD = 1/2，加上 ∠A 公共，所以 △AEF ∽ △ABD，相似比为 1/2，面积比为 (1/2)²=1/4；而 △ABD 的面积是正方形的一半即 18，故 △AEF 的面积 = 18×1/4 = 4.5，概率 4.5/36=1/8，两种算法一致。',
    tags: ['similarity']
  },
  {
    id: 'q-probability-40',
    kp: 'probability',
    difficulty: 'hard',
    type: 'fill',
    stem: '先后抛掷一枚质地均匀的骰子两次，第一次朝上的点数记为 p，第二次朝上的点数记为 q。则关于 x 的一元二次方程 x<sup>2</sup>+px+q=0 有实数根的概率是（　）',
    answers: ['19/36'],
    explanation: '两次抛掷按有序数对 (p,q) 计数，所有等可能结果 n=6×6=36 种。一元二次方程 x²+px+q=0 有实数根 ⇔ 判别式 Δ=p²−4q ≥ 0，即 q ≤ p²/4。逐个 p 统计满足条件的 q 的个数：p=1 时 q ≤ 0.25，没有；p=2 时 q ≤ 1，只有 q=1；p=3 时 q ≤ 2.25，q=1、2 共 2 个；p=4 时 q ≤ 4，q=1、2、3、4 共 4 个；p=5 时 q ≤ 6.25，q=1 到 6 全部满足，共 6 个；p=6 时 q ≤ 9，q=1 到 6 全部满足，共 6 个。合计满足条件的结果 m=0+1+2+4+6+6=19 种，所以 P=m/n=19/36。',
    tags: ['quad-eq']
  },
  {
    id: 'q-probability-41',
    kp: 'probability',
    difficulty: 'hard',
    type: 'single',
    stem: '连续抛掷一枚质地均匀的骰子两次，第一次朝上的点数为 m，第二次朝上的点数为 n。则关于 x 的一元二次方程 x<sup>2</sup>−mx+n=0 有两个相等的实数根的概率是（　）',
    options: ['1/36', '1/18', '1/12', '1/6'],
    answer: 1,
    explanation: '所有等可能结果共 36 种（有序数对 (m,n)）。方程有两个相等的实数根 ⇔ 判别式 Δ=m²−4n=0，即 n=m²/4：m=2 时 n=1；m=4 时 n=4；m=6 时 n=9 超出骰子的点数范围，m 为奇数时 m²/4 不是整数。所以满足条件的只有 (m,n)=(2,1) 和 (4,4) 两组，共 2 种结果（这里的结果数不再用字母 m 表示，以免与方程系数 m 混淆）。所以 P=2/36=1/18。故选 B。',
    tags: ['quad-eq']
  },
  {
    id: 'q-probability-42',
    kp: 'probability',
    difficulty: 'hard',
    type: 'fill',
    stem: '如图，在平面直角坐标系中，在横坐标为 −2、−1、0、1、2 且纵坐标为 0、1、2、3、4 的 25 个格点（图中每个小圆点）中随机选取一个点，每个格点被选到的机会相等。抛物线 y=−x<sup>2</sup>+4 经过其中若干个格点，则选到的点位于该抛物线下方（含在抛物线上）的概率是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="平面直角坐标系中横坐标负2到2、纵坐标0到4的25个格点，以及开口向下、顶点为(0,4)、经过点(负2,0)和(2,0)的抛物线y等于负x平方加4"><line x1="46" y1="216" x2="300" y2="216" stroke="currentColor" stroke-width="1.6"/><line x1="170" y1="222" x2="170" y2="44" stroke="currentColor" stroke-width="1.6"/><line x1="300" y1="216" x2="292" y2="212" stroke="currentColor" stroke-width="1.2"/><line x1="300" y1="216" x2="292" y2="220" stroke="currentColor" stroke-width="1.2"/><line x1="170" y1="44" x2="166" y2="52" stroke="currentColor" stroke-width="1.2"/><line x1="170" y1="44" x2="174" y2="52" stroke="currentColor" stroke-width="1.2"/><circle cx="70" cy="216" r="2" fill="currentColor"/><circle cx="70" cy="180" r="2" fill="currentColor"/><circle cx="70" cy="144" r="2" fill="currentColor"/><circle cx="70" cy="108" r="2" fill="currentColor"/><circle cx="70" cy="72" r="2" fill="currentColor"/><circle cx="120" cy="216" r="2" fill="currentColor"/><circle cx="120" cy="180" r="2" fill="currentColor"/><circle cx="120" cy="144" r="2" fill="currentColor"/><circle cx="120" cy="108" r="2" fill="currentColor"/><circle cx="120" cy="72" r="2" fill="currentColor"/><circle cx="170" cy="216" r="2" fill="currentColor"/><circle cx="170" cy="180" r="2" fill="currentColor"/><circle cx="170" cy="144" r="2" fill="currentColor"/><circle cx="170" cy="108" r="2" fill="currentColor"/><circle cx="170" cy="72" r="2" fill="currentColor"/><circle cx="220" cy="216" r="2" fill="currentColor"/><circle cx="220" cy="180" r="2" fill="currentColor"/><circle cx="220" cy="144" r="2" fill="currentColor"/><circle cx="220" cy="108" r="2" fill="currentColor"/><circle cx="220" cy="72" r="2" fill="currentColor"/><circle cx="270" cy="216" r="2" fill="currentColor"/><circle cx="270" cy="180" r="2" fill="currentColor"/><circle cx="270" cy="144" r="2" fill="currentColor"/><circle cx="270" cy="108" r="2" fill="currentColor"/><circle cx="270" cy="72" r="2" fill="currentColor"/><path d="M70,216 L95,153 L120,108 L145,81 L170,72 L195,81 L220,108 L245,153 L270,216" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="70" y="228" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">-2</text><text x="120" y="228" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">-1</text><text x="220" y="228" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">1</text><text x="270" y="228" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">2</text><text x="162" y="184" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">1</text><text x="162" y="148" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">2</text><text x="162" y="112" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">3</text><text x="162" y="76" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">4</text><text x="163" y="227" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="end">O</text><text x="302" y="208" font-size="12.5" font-family="inherit" fill="currentColor">x</text><text x="176" y="42" font-size="12.5" font-family="inherit" fill="currentColor">y</text><text x="230" y="60" font-size="11.5" font-family="inherit" fill="currentColor">y=−x²+4</text></svg></figure>',
    answers: ['3/5', '0.6'],
    explanation: '格点共 5×5=25 个，即 n=25。抛物线 y=−x²+4 与 x 轴交点的横坐标由 −x²+4=0 解得 x=±2（用解一元二次方程求出），与 y 轴交于 (0,4)，顶点也是 (0,4)。逐列统计满足 y ≤ −x²+4 的格点：x=0 时 −x²+4=4，纵坐标 0、1、2、3、4 全在下方，共 5 个；x=±1 时 −x²+4=3，纵坐标 0、1、2、3 满足，各 4 个，两列共 8 个；x=±2 时 −x²+4=0，只有纵坐标 0 满足，各 1 个，两列共 2 个。合计满足条件的格点 m=5+8+2=15 个，所以 P=m/n=15/25=3/5=0.6。',
    tags: ['quad-func', 'quad-eq']
  },
  {
    id: 'q-probability-43',
    kp: 'probability',
    difficulty: 'hard',
    type: 'fill',
    stem: '如图，一个圆盘被平均分成 12 个全等的扇形，沿顺时针方向依次标上 1、2、…、12，指针固定在圆盘正上方，初始时正对写着 1 的扇形。每次操作把圆盘绕圆心顺时针旋转 30° 的整数倍，旋转的份数 k（k=0、1、2、…、11）是等可能的。旋转后指针所指扇形内的数字是 3 的倍数的概率是（　）<br><figure class="qfig"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="圆盘被平均分成12个全等扇形顺时针标有1至12，圆盘正上方有固定指针，初始正对写着1的扇形，另有一条顺时针旋转的提示弧"><circle cx="160" cy="128" r="88" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,128 L137.22,43 A88,88 0 0,1 182.78,43 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,128 L182.78,43 A88,88 0 0,1 222.23,65.77 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,128 L222.23,65.77 A88,88 0 0,1 245,105.22 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,128 L245,105.22 A88,88 0 0,1 245,150.78 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,128 L245,150.78 A88,88 0 0,1 222.23,190.23 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,128 L222.23,190.23 A88,88 0 0,1 182.78,213 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,128 L182.78,213 A88,88 0 0,1 137.22,213 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,128 L137.22,213 A88,88 0 0,1 97.77,190.23 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,128 L97.77,190.23 A88,88 0 0,1 75,150.78 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,128 L75,150.78 A88,88 0 0,1 75,105.22 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,128 L75,105.22 A88,88 0 0,1 97.77,65.77 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160,128 L97.77,65.77 A88,88 0 0,1 137.22,43 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="160" y="68.64" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">1</text><text x="191.68" y="77.13" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">2</text><text x="214.87" y="100.32" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">3</text><text x="223.36" y="132" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">4</text><text x="214.87" y="163.68" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">5</text><text x="191.68" y="186.87" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">6</text><text x="160" y="195.36" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">7</text><text x="128.32" y="186.87" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">8</text><text x="105.13" y="163.68" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">9</text><text x="96.64" y="132" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">10</text><text x="105.13" y="100.32" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">11</text><text x="128.32" y="77.13" font-size="12.5" font-family="inherit" fill="currentColor" text-anchor="middle">12</text><circle cx="160" cy="128" r="2.4" fill="currentColor"/><line x1="160" y1="14" x2="160" y2="34" stroke="currentColor" stroke-width="1.8"/><line x1="153" y1="26" x2="160" y2="36" stroke="currentColor" stroke-width="1.8"/><line x1="167" y1="26" x2="160" y2="36" stroke="currentColor" stroke-width="1.8"/><path d="M208.83,36.17 A104,104 0 0,1 253.47,82.41" fill="none" stroke="currentColor" stroke-width="1.4"/><line x1="253.47" y1="82.41" x2="244.47" y2="79.41" stroke="currentColor" stroke-width="1.4"/><line x1="253.47" y1="82.41" x2="250.47" y2="72.41" stroke="currentColor" stroke-width="1.4"/><text x="256" y="24" font-size="11.5" font-family="inherit" fill="currentColor" text-anchor="middle">顺时针每次转 30°</text></svg></figure>',
    answers: ['1/3'],
    explanation: '圆盘 12 等分，每份圆心角 30°，顺时针旋转 30°×k（k=0、1、…、11）共有 12 种等可能的旋转状态。旋转是圆盘绕圆心的对称变换，不改变各扇形的大小，旋转 k 份相当于把指针所指的扇形顺时针"移动"k 个位置，12 种旋转状态与 12 个扇形一一对应，所以指针最终落在每个扇形上的机会相等，所有等可能结果 n=12 种。1 到 12 中 3 的倍数是 3、6、9、12，满足条件的结果 m=4 种，所以 P=m/n=4/12=1/3。',
    tags: ['rotation']
  },
  {
    id: 'q-probability-44',
    kp: 'probability',
    difficulty: 'hard',
    type: 'fill',
    stem: '三角形 ABC 的三条中位线把它分成 4 个全等的小三角形（中间一个是三条中位线围成的三角形）。向 △ABC 内随机投一点（点落在三角形内每一处的机会相等），则该点落在中间那个小三角形内的概率是（　）',
    answers: ['1/4', '0.25'],
    explanation: '三条中位线两两平行于三边，由中位线定理可知中间小三角形的三条边分别等于原三角形三条边的一半，因此中间小三角形与原三角形相似，相似比为 1/2，面积比为 (1/2)²=1/4。三个角落的小三角形同理也与原三角形相似（相似比均为 1/2），面积同样为原三角形的 1/4，所以 4 个小三角形面积相等，可看成 n=4 份等面积区域，满足条件的 m=1 份，故概率 = 1/4 = 0.25。',
    tags: ['similarity']
  },
  {
    id: 'q-probability-45',
    kp: 'probability',
    difficulty: 'hard',
    type: 'single',
    stem: '甲、乙两人做游戏：同时抛掷两枚质地均匀的骰子，若两枚骰子朝上的点数相同则甲得 1 分，若点数不同则乙得 1 分。这个游戏（　）',
    options: ['公平，因为两人获胜的概率都是 1/2', '不公平，对甲有利', '不公平，对乙有利', '无法判断是否公平'],
    answer: 2,
    explanation: '两枚骰子按有序数对计数，所有等可能结果 n=6×6=36 种。点数相同的只有 (1,1)、(2,2)、…、(6,6) 共 m=6 种，P(甲)=6/36=1/6；点数不同的有 36−6=30 种，P(乙)=30/36=5/6。乙获胜的概率大得多，游戏对乙有利、不公平。不能因为"相同/不同只有两类"就认为各占 1/2，必须数清每类包含多少个等可能结果。故选 C。'
  },
  {
    id: 'q-probability-46',
    kp: 'probability',
    difficulty: 'hard',
    type: 'single',
    stem: '签筒中有 5 张大小相同的签，其中 2 张写"有奖"、3 张空白。甲先抽 1 张且不放回，乙再从剩下的 4 张中抽 1 张。则乙抽到"有奖"签的概率是（　）',
    options: ['2/5', '1/2', '3/10', '1/4'],
    answer: 0,
    explanation: '不放回抽签要按"甲抽到什么"分类讨论。甲抽到"有奖"的概率 2/5，此时剩下 4 张中还有 1 张有奖，乙抽到的概率 1/4，贡献 2/5×1/4=1/10；甲抽到空白的概率 3/5，此时剩下 4 张中有 2 张有奖，乙抽到的概率 2/4=1/2，贡献 3/5×1/2=3/10。两者相加 P(乙中奖)=1/10+3/10=4/10=2/5，与甲先抽时的中奖概率相同，说明先后抽签机会均等。直接数有序结果也一致：全部结果 n=5×4=20 种（先甲后乙、不放回），乙抽到有奖的结果 m=2×4=8 种，P=8/20=2/5。故选 A。'
  },
  {
    id: 'q-probability-47',
    kp: 'probability',
    difficulty: 'hard',
    type: 'fill',
    stem: '一个不透明的袋中装有 12 个红球和若干个白球，它们除颜色外完全相同。每次从袋中随机摸出 1 个球，记下颜色后放回摇匀，重复大量试验后发现摸到红球的频率稳定在 0.3 附近。则袋中白球的个数约为（　）',
    answers: ['28'],
    explanation: '设白球有 x 个，则袋中共有 (12+x) 个球。大量重复试验中摸到红球的频率稳定在 0.3 附近，可用它估计概率，于是 12/(12+x)=0.3。解这个方程：12=0.3(12+x)，即 12=3.6+0.3x，0.3x=8.4，x=28。所以白球约为 28 个（检验：总球数 40，12/40=0.3，符合）。'
  },
  {
    id: 'q-probability-48',
    kp: 'probability',
    difficulty: 'hard',
    type: 'single',
    stem: '袋中装有 3 个红球和 2 个白球，除颜色外完全相同。每次摸出 1 个球，记下颜色后放回摇匀。连续摸 3 次，则恰好有 2 次摸到红球的概率是（　）',
    options: ['54/125', '36/125', '27/125', '18/125'],
    answer: 0,
    explanation: '有放回摸球，每次摸到红球的概率都是 3/5、摸到白球的概率都是 2/5，各次相互独立。3 次中"哪两次是红球"有 3 种位置：红红白、红白红、白红红，每种位置的概率都是 (3/5)²×(2/5)=9/25×2/5=18/125。按每次 5 个球有序计数，所有等可能结果 n=5³=125 种，满足条件的结果 m=3×18=54 种，所以 P=m/n=54/125=0.432。故选 A。'
  },
  {
    id: 'q-probability-49',
    kp: 'probability',
    difficulty: 'hard',
    type: 'fill',
    stem: '在平面直角坐标系中，从横坐标为 −1、0、1、2 且纵坐标为 0、1、2、3 的 16 个格点中随机选取一个点，每个格点被选到的机会相等。抛物线 y=x<sup>2</sup>+1 开口向上，则选到的点位于该抛物线上方或抛物线上（即纵坐标不小于 x<sup>2</sup>+1）的概率是（　）',
    answers: ['7/16', '0.4375'],
    explanation: '格点共 4×4=16 个，即 n=16。把横坐标代入抛物线解析式 y=x²+1，得到该列格点纵坐标的下限：x=−1 时 y≥2；x=0 时 y≥1；x=1 时 y≥2；x=2 时 y≥5。逐列数满足 y ≥ x²+1 的格点：x=−1，纵坐标 2、3 共 2 个；x=0，纵坐标 1、2、3 共 3 个；x=1，纵坐标 2、3 共 2 个；x=2 需要 y≥5，而给出的纵坐标最大只有 3，共 0 个。合计满足条件的格点 m=2+3+2+0=7 个，所以 P=m/n=7/16=0.4375。',
    tags: ['quad-func']
  },
  {
    id: 'q-probability-50',
    kp: 'probability',
    difficulty: 'hard',
    type: 'single',
    stem: '一批产品共 10 件，其中有 2 件次品。质检员从中不放回地随机抽出 2 件检验（一次抽出 2 件，不分先后），则抽到的 2 件中至少有 1 件次品的概率是（　）',
    options: ['17/45', '1/5', '2/9', '1/3'],
    answer: 0,
    explanation: '一次抽出 2 件、不分先后，所有等可能结果是从 10 件中任取 2 件的组合数 n=C(10,2)=45 种。用对立事件更快：2 件都不是次品，即从 8 件正品中取 2 件，有 C(8,2)=28 种，所以"至少有 1 件次品"的结果 m=45−28=17 种，P=17/45。分类相加也一致：恰有 1 件次品 2×8=16 种，2 件都是次品 1 种，16+1=17 ✓。故选 A。'
  }
]);
