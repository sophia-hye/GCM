import { Section, SectionHeading, Container, Button } from "@/components/ui";
import { Reveal } from "@/components/ui/Reveal";
import { getLocale } from "@/lib/i18n";
import { pick, type I18nText } from "@/lib/i18n-pick";

const APPLY_URL = "https://forms.gle/p5kDNcKpsh4j7nV8A";

type Bi = I18nText;
type Cat = { title: Bi; items: Bi[] };
type Diff = { no: string; title: Bi; body: Bi };

const INTRO: Bi[] = [
  {
    ko: "개인의 단편적인 경험에만 의존하여 전수하지 않습니다. GCM 코치진은 지금도 전국체전에 출전하는 현직 선수이자, 전 세계 엘리트·프로 대회를 직접 체험하고 분석·연구하는 것이 일상인 진짜 테니스 전문가입니다. 현장에서 실시간으로 다듬어진 최신 트렌드 분석을 바탕으로 세련된 기술을 몸에 흡수시켜 드립니다.",
    en: "We don't teach from fragmented personal experience. GCM's coaches are active players who still compete at the national championships, and true specialists who experience, analyze and research elite and pro tournaments around the world every day. Based on the latest trends refined in real time on the ground, we help you absorb refined technique into your body.",
    zh: "我们不以零散的个人经验来传授。GCM 的教练团队，是至今仍征战全国体育大会的现役选手，也是日常亲身体验、分析与研究全球精英及职业赛事的真正网球专家。我们以现场实时打磨的最新趋势分析为基础，帮助您将精炼的技术真正吸收进身体。",
    ja: "個人の断片的な経験だけに頼って教えることはしません。GCM のコーチ陣は、今も全国体育大会に出場する現役選手であり、世界のエリート・プロ大会を自ら体験し、分析・研究することが日常の本物のテニス専門家です。現場でリアルタイムに磨かれた最新トレンド分析をもとに、洗練された技術を体に染み込ませます。",
    it: "Non insegniamo partendo da esperienze personali frammentarie. I coach di GCM sono giocatori in attività che competono ancora ai campionati nazionali e veri specialisti che ogni giorno vivono, analizzano e studiano i tornei élite e pro di tutto il mondo. Sulla base delle tendenze più recenti affinate sul campo in tempo reale, ti aiutiamo ad assorbire nel corpo una tecnica raffinata.",
    fr: "Nous n'enseignons pas à partir d'expériences personnelles fragmentaires. Les coachs de GCM sont des joueurs en activité qui disputent encore les championnats nationaux et de véritables spécialistes qui, au quotidien, vivent, analysent et étudient les tournois élite et pro du monde entier. À partir des dernières tendances affinées en temps réel sur le terrain, nous vous aidons à assimiler une technique raffinée dans votre corps.",
    es: "No enseñamos a partir de experiencias personales fragmentarias. Los entrenadores de GCM son jugadores en activo que aún compiten en los campeonatos nacionales y verdaderos especialistas que cada día viven, analizan e investigan los torneos de élite y profesionales de todo el mundo. Sobre la base de las últimas tendencias afinadas en tiempo real en la pista, te ayudamos a asimilar en el cuerpo una técnica refinada.",
  },
  {
    ko: "단순 레슨만으로는 잡히지 않던 폼과 습관의 고민을 “기술 - 습관 - 체득”으로 이어지는 25년 연구 체계와 피지컬 밸런스 메커니즘으로 명확하게 해결해 드립니다.",
    en: "The worries about form and habits that simple lessons never fixed — we resolve them clearly through a 25-year research system that connects “technique → habit → mastery,” together with a physical-balance mechanism.",
    zh: "那些单靠普通课程始终纠正不了的动作与习惯困扰，我们以串联『技术—习惯—体得』的 25 年研究体系与身体平衡机制，为您清晰地解决。",
    ja: "単なるレッスンでは直らなかったフォームや習慣の悩みを、「技術—習慣—体得」へとつながる25年の研究体系とフィジカルバランス・メカニズムで、明確に解決します。",
    it: "I problemi di forma e di abitudini che le semplici lezioni non hanno mai risolto, li risolviamo in modo chiaro grazie a un sistema di ricerca lungo 25 anni che collega «tecnica → abitudine → padronanza», insieme a un meccanismo di equilibrio fisico.",
    fr: "Les soucis de posture et d'habitudes que de simples cours n'ont jamais corrigés, nous les résolvons clairement grâce à un système de recherche de 25 ans reliant « technique → habitude → maîtrise », associé à un mécanisme d'équilibre physique.",
    es: "Los problemas de técnica y de hábitos que las clases normales nunca corrigieron los resolvemos con claridad mediante un sistema de investigación de 25 años que enlaza «técnica → hábito → dominio», junto con un mecanismo de equilibrio físico.",
  },
];

const INTRO_QUOTE: Bi = {
  ko: "프로 데뷔를 준비하는 엘리트 선수의 열정만큼이나, 테니스에 진심인 성인 아마추어분들이 겪는 답답함과 고충을 누구보다 깊이 헤아리기에 GCM이 진심을 다해 함께합니다.",
  en: "Just as we understand the passion of an elite player preparing for a pro debut, we understand — more deeply than anyone — the frustrations of adult amateurs who are serious about tennis. That's why GCM is wholeheartedly with you.",
  zh: "正如我们理解准备职业出道的精英选手的热情，我们也比任何人都更深刻地体会到，真心热爱网球的成人业余爱好者所经历的苦闷与困扰。正因如此，GCM 全心全意与您同行。",
  ja: "プロデビューを目指すエリート選手の情熱と同じように、テニスに本気の成人アマチュアの方々が抱える もどかしさや苦労を、誰よりも深く汲み取っているからこそ、GCM は心を尽くして共に歩みます。",
  it: "Così come comprendiamo la passione di un atleta d'élite che prepara il debutto da pro, comprendiamo — più di chiunque altro — le frustrazioni degli amatori adulti che fanno sul serio con il tennis. Per questo GCM è al tuo fianco con tutto il cuore.",
  fr: "Tout comme nous comprenons la passion d'un joueur d'élite préparant ses débuts pro, nous comprenons — mieux que quiconque — les frustrations des amateurs adultes qui prennent le tennis au sérieux. C'est pourquoi GCM vous accompagne de tout cœur.",
  es: "Igual que entendemos la pasión de un jugador de élite que prepara su debut profesional, entendemos —más que nadie— las frustraciones de los aficionados adultos que se toman en serio el tenis. Por eso GCM te acompaña de todo corazón.",
};

const INTRO_CLOSE: Bi = {
  ko: "누구나 현재 실력에서 확실한 성장을 완성하도록 설계된 GCM만의 3시간 전술 트레이닝 — 그 독보적인 훈련의 깊이를 직접 체험해 보세요.",
  en: "GCM's own 3-hour tactical training, designed so anyone can achieve clear growth from their current level — come experience the depth of this one-of-a-kind training yourself.",
  zh: "GCM 独有的 3 小时战术训练，让每个人都能从现有水平实现确实的提升——亲身体验这份独一无二的训练深度吧。",
  ja: "誰もが今の実力から確かな成長を遂げられるよう設計された、GCM ならではの3時間の戦術トレーニング——その唯一無二の訓練の深さを、ぜひ体感してください。",
  it: "L'esclusivo allenamento tattico di 3 ore di GCM, pensato perché chiunque ottenga una crescita concreta dal proprio livello attuale: vieni a vivere di persona la profondità di questo allenamento unico.",
  fr: "L'entraînement tactique exclusif de 3 heures de GCM, conçu pour que chacun progresse concrètement à partir de son niveau actuel : venez vivre par vous-même la profondeur de cet entraînement unique.",
  es: "El exclusivo entrenamiento táctico de 3 horas de GCM, diseñado para que cualquiera logre un crecimiento claro desde su nivel actual: ven a vivir en persona la profundidad de este entrenamiento único.",
};

const CURRICULUM: Cat[] = [
  {
    title: { ko: "스트록", en: "Stroke", zh: "击球", ja: "ストローク", it: "Colpi di fondo", fr: "Coups de fond", es: "Golpes de fondo" },
    items: [
      { ko: "코어 중심축을 세운 안정적 타법", en: "Stable strokes built on a solid core axis", zh: "以核心中轴为基础的稳定击球", ja: "コアの軸を立てた安定した打法", it: "Colpi stabili costruiti su un solido asse del core", fr: "Des frappes stables bâties sur un axe central solide", es: "Golpes estables sobre un eje central sólido" },
      { ko: "볼 깊이·구질별(플랫·탑스핀·앵글·로브) 대처", en: "Handling by depth and spin (flat, topspin, angle, lob)", zh: "按球的深度与球性（平击·上旋·角度·高吊）应对", ja: "ボールの深さ・球質別（フラット・トップスピン・アングル・ロブ）の対応", it: "Gestione per profondità e spin (piatto, topspin, angolo, pallonetto)", fr: "Gestion selon la profondeur et l'effet (à plat, lift, angle, lob)", es: "Respuesta según profundidad y efecto (plano, liftado, ángulo, globo)" },
      { ko: "찬스볼 공략과 수비 상황 전환", en: "Attacking chance balls and turning defense into offense", zh: "进攻机会球与由守转攻", ja: "チャンスボールの攻略と守備から攻撃への切り替え", it: "Attaccare le palle facili e trasformare la difesa in attacco", fr: "Attaquer les balles faciles et passer de la défense à l'attaque", es: "Atacar las bolas fáciles y pasar de la defensa al ataque" },
      { ko: "순간적인 코스 선택 판단", en: "Split-second shot-selection judgment", zh: "瞬间的落点选择判断", ja: "瞬間的なコース選択の判断", it: "Scelta del colpo in una frazione di secondo", fr: "Choix de la trajectoire en une fraction de seconde", es: "Decisión de la dirección en una fracción de segundo" },
    ],
  },
  {
    title: { ko: "네트 플레이", en: "Net Play", zh: "网前", ja: "ネットプレー", it: "Gioco a rete", fr: "Jeu au filet", es: "Juego en la red" },
    items: [
      { ko: "발리 기본 자세와 위치별(앞·뒤) 발리", en: "Volley fundamentals and positional (front/back) volleys", zh: "截击基本姿势与不同站位（前·后）截击", ja: "ボレーの基本姿勢と位置別（前・後ろ）のボレー", it: "Fondamentali della volée e volée per posizione (avanti/dietro)", fr: "Fondamentaux de la volée et volées selon la position (avant/arrière)", es: "Fundamentos de la volea y voleas según la posición (adelante/atrás)" },
      { ko: "포칭(Poaching)과 전진·점프 스매시", en: "Poaching, forward and jump smashes", zh: "拦网（Poaching）与前冲·跳杀", ja: "ポーチと前進・ジャンプスマッシュ", it: "Poaching e smash in avanzamento e in salto", fr: "Poaching et smashs en avançant et en saut", es: "Poaching y remates de avance y de salto" },
      { ko: "짧은 앵글 발리·드롭샷 감각", en: "Short-angle volleys and drop-shot touch", zh: "短角度截击与放小球的手感", ja: "ショートアングルボレー・ドロップショットの感覚", it: "Volée ad angolo stretto e tocco di drop shot", fr: "Volées courtes croisées et toucher d'amortie", es: "Voleas de ángulo corto y toque de dejada" },
      { ko: "고강도 발리 서키트", en: "High-intensity volley circuits", zh: "高强度截击循环训练", ja: "高強度ボレーサーキット", it: "Circuiti di volée ad alta intensità", fr: "Circuits de volée à haute intensité", es: "Circuitos de volea de alta intensidad" },
    ],
  },
  {
    title: { ko: "복식 전술", en: "Doubles Tactics", zh: "双打战术", ja: "ダブルス戦術", it: "Tattica del doppio", fr: "Tactique en double", es: "Táctica de dobles" },
    items: [
      { ko: "복식 포지션과 찬스볼 공략·넷 대시", en: "Doubles positioning, chance-ball attacks, net dashes", zh: "双打站位、机会球进攻与上网", ja: "ダブルスのポジションとチャンスボール攻略・ネットダッシュ", it: "Posizionamento in doppio, attacco sulle palle facili, discese a rete", fr: "Placement en double, attaque des balles faciles, montées au filet", es: "Posicionamiento en dobles, ataque de bolas fáciles y subidas a la red" },
      { ko: "3구 이내 포칭 연계, 전위 압박", en: "Poaching combos within 3 shots, net pressure", zh: "三拍以内的拦网配合与前场压迫", ja: "3球以内のポーチ連携、前衛のプレッシャー", it: "Combinazioni di poaching entro 3 colpi, pressione a rete", fr: "Combinaisons de poaching en 3 frappes, pression au filet", es: "Combinaciones de poaching en 3 golpes y presión en la red" },
      { ko: "로브·드롭으로 플레이 전환", en: "Switching play with lobs and drops", zh: "用高吊与放小球转换节奏", ja: "ロブ・ドロップでプレーを切り替え", it: "Cambiare gioco con pallonetti e drop", fr: "Changer le jeu avec lobs et amorties", es: "Cambiar el juego con globos y dejadas" },
      { ko: "약속된 패턴 플레이 완성", en: "Completing set-play patterns", zh: "完成约定好的套路配合", ja: "決められたパターンプレーの完成", it: "Completare schemi di gioco prestabiliti", fr: "Finaliser des schémas de jeu convenus", es: "Completar jugadas de patrón acordadas" },
    ],
  },
  {
    title: { ko: "서브 & 리턴", en: "Serve & Return", zh: "发球与接发", ja: "サーブ & リターン", it: "Servizio e risposta", fr: "Service et retour", es: "Saque y resto" },
    items: [
      { ko: "플랫·슬라이스·스핀 서브 메커니즘", en: "Flat, slice and spin serve mechanics", zh: "平击·切削·上旋发球的技术机制", ja: "フラット・スライス・スピンサーブのメカニズム", it: "Meccanica del servizio piatto, slice e in spin", fr: "Mécanique du service à plat, slicé et lifté", es: "Mecánica del saque plano, cortado y liftado" },
      { ko: "서브 서키트, 서브→첫 발리 연계", en: "Serve circuits and serve-to-first-volley links", zh: "发球循环训练、发球衔接第一拍截击", ja: "サーブサーキット、サーブ→ファーストボレーの連携", it: "Circuiti di servizio e collegamento servizio-prima volée", fr: "Circuits de service et enchaînement service-première volée", es: "Circuitos de saque y enlace saque-primera volea" },
      { ko: "압박·긴장 상황 대비 서브", en: "Serving under pressure and tension", zh: "应对压力与紧张情境的发球", ja: "プレッシャー・緊張場面に備えるサーブ", it: "Servire sotto pressione e tensione", fr: "Servir sous pression et tension", es: "Sacar bajo presión y tensión" },
      { ko: "실전 리턴 대응", en: "Match-ready return responses", zh: "实战接发球应对", ja: "実戦のリターン対応", it: "Risposte al servizio pronte per la partita", fr: "Retours prêts pour le match", es: "Restos listos para la competición" },
    ],
  },
  {
    title: { ko: "피지컬 베이스", en: "Physical Base", zh: "体能基础", ja: "フィジカルベース", it: "Base fisica", fr: "Base physique", es: "Base física" },
    items: [
      { ko: "코어 안정성과 상·하체 분리 회전", en: "Core stability and separated upper/lower rotation", zh: "核心稳定性与上下半身分离旋转", ja: "コアの安定性と上半身・下半身の分離回旋", it: "Stabilità del core e rotazione separata di busto e gambe", fr: "Stabilité du tronc et rotation dissociée haut/bas du corps", es: "Estabilidad del core y rotación separada de tren superior e inferior" },
      { ko: "순발력·방향 전환·감속 버팀", en: "Quickness, change of direction, deceleration", zh: "爆发力·变向·减速支撑", ja: "瞬発力・方向転換・減速の踏ん張り", it: "Rapidità, cambio di direzione, decelerazione", fr: "Vivacité, changement de direction, décélération", es: "Rapidez, cambio de dirección y desaceleración" },
      { ko: "부상 방지를 위한 신체 밸런스", en: "Body balance to prevent injury", zh: "预防受伤的身体平衡", ja: "ケガ防止のための身体バランス", it: "Equilibrio corporeo per prevenire gli infortuni", fr: "Équilibre corporel pour prévenir les blessures", es: "Equilibrio corporal para prevenir lesiones" },
    ],
  },
];

const DIFFERENTIATORS: Diff[] = [
  {
    no: "01",
    title: { ko: "최소 3시간, 체득형 훈련", en: "At least 3 hours — training that sticks", zh: "至少 3 小时的体得型训练", ja: "最低3時間、体得型トレーニング", it: "Almeno 3 ore — un allenamento che resta", fr: "Au moins 3 heures — un entraînement qui reste", es: "Al menos 3 horas: un entrenamiento que se queda" },
    body: {
      ko: "20~30분 레슨으로는 전술이 내 것이 되지 않습니다. 이론 → 반복 숙달 → 실전 적용까지 하루 3시간, 머리와 몸에 완전히 체득합니다.",
      en: "A 20–30 minute lesson won't make tactics your own. From theory to repetition to live application — three hours a day, fully absorbed into mind and body.",
      zh: "20~30 分钟的课程无法让战术真正成为你的。从理论 → 反复熟练 → 实战应用，每天 3 小时，彻底内化到头脑与身体。",
      ja: "20〜30分のレッスンでは戦術は自分のものになりません。理論 → 反復習熟 → 実戦適用まで1日3時間、頭と体に完全に体得します。",
      it: "Una lezione di 20–30 minuti non rende tua la tattica. Dalla teoria alla ripetizione all'applicazione in partita: tre ore al giorno, assimilate pienamente in mente e corpo.",
      fr: "Un cours de 20 à 30 minutes ne rend pas la tactique vôtre. De la théorie à la répétition puis à l'application en match : trois heures par jour, pleinement assimilées par l'esprit et le corps.",
      es: "Una clase de 20–30 minutos no hace tuya la táctica. De la teoría a la repetición y a la aplicación en partido: tres horas al día, plenamente asimiladas en mente y cuerpo.",
    },
  },
  {
    no: "02",
    title: { ko: "One Team, 함께하는 훈련", en: "One Team — training together", zh: "One Team，共同训练", ja: "One Team、共に取り組むトレーニング", it: "One Team — allenarsi insieme", fr: "One Team — s'entraîner ensemble", es: "One Team: entrenar juntos" },
    body: {
      ko: "개인 레슨이 아닌 팀 단위 훈련. 파트너의 실수에도 서로 응원하는 화이팅 속에서 'GCM 팀'의 자부심과 소속감을 나눕니다.",
      en: "Team-based training, not solo lessons. In an encouraging atmosphere — even through a partner's mistakes — you share the pride and belonging of 'Team GCM'.",
      zh: "并非个人课程，而是以团队为单位的训练。即使搭档失误也彼此加油鼓劲，在这样的氛围中共享『GCM 团队』的自豪感与归属感。",
      ja: "個人レッスンではなく、チーム単位のトレーニング。パートナーのミスにも互いに声をかけ合う雰囲気の中で、『GCM チーム』の誇りと所属感を分かち合います。",
      it: "Allenamento di squadra, non lezioni individuali. In un clima di incoraggiamento — anche di fronte agli errori del partner — si condividono l'orgoglio e il senso di appartenenza al «Team GCM».",
      fr: "Un entraînement en équipe, pas des cours individuels. Dans une ambiance d'encouragement — même face aux erreurs du partenaire — vous partagez la fierté et l'appartenance à la « Team GCM ».",
      es: "Entrenamiento en equipo, no clases individuales. En un ambiente de ánimo —incluso ante los errores del compañero— se comparte el orgullo y la pertenencia al «Equipo GCM».",
    },
  },
  {
    no: "03",
    title: { ko: "평일까지 이어지는 밀착 피드백", en: "Close feedback that continues on weekdays", zh: "延续到平日的贴身反馈", ja: "平日まで続く密着フィードバック", it: "Feedback ravvicinato che continua nei giorni feriali", fr: "Un suivi rapproché qui se poursuit en semaine", es: "Seguimiento cercano que continúa entre semana" },
    body: {
      ko: "평일 플레이 고민을 훈련에 반영하고, 카카오톡 채널·1:1 전술 코칭·개인별 과제로 성장 효과를 극대화합니다.",
      en: "We fold your weekday play into training, maximizing growth with a KakaoTalk channel, 1:1 tactical coaching, and personalized homework.",
      zh: "将平日打球的困惑反映到训练中，并通过 KakaoTalk 频道、1:1 战术指导与个性化作业，将成长效果最大化。",
      ja: "平日のプレーの悩みをトレーニングに反映し、カカオトークチャンネル・1:1 戦術コーチング・個人別課題で成長効果を最大化します。",
      it: "Portiamo nel training il tuo gioco infrasettimanale, massimizzando la crescita con un canale KakaoTalk, coaching tattico 1:1 e compiti personalizzati.",
      fr: "Nous intégrons votre jeu de la semaine à l'entraînement, maximisant la progression grâce à un canal KakaoTalk, un coaching tactique en 1:1 et des devoirs personnalisés.",
      es: "Integramos tu juego entre semana en el entrenamiento, maximizando el progreso con un canal de KakaoTalk, coaching táctico 1:1 y tareas personalizadas.",
    },
  },
  {
    no: "04",
    title: { ko: "엘리트 선수 교류전 & 정기 이벤트", en: "Elite exhibition matches & regular events", zh: "精英选手交流赛与定期活动", ja: "エリート選手との交流戦 & 定期イベント", it: "Match di esibizione con atleti d'élite ed eventi periodici", fr: "Matchs d'exhibition avec des joueurs d'élite et événements réguliers", es: "Partidos de exhibición con jugadores de élite y eventos periódicos" },
    body: {
      ko: "현직 엘리트 선수들과 한 코트에서 호흡하고, 분기별 교류전으로 훈련한 전술을 실전에서 검증합니다.",
      en: "Share a court with active elite players, and test your trained tactics in quarterly exhibition matches.",
      zh: "与现役精英选手同场竞技，并通过每季度的交流赛，在实战中检验所训练的战术。",
      ja: "現役エリート選手と同じコートで汗を流し、四半期ごとの交流戦で訓練した戦術を実戦で検証します。",
      it: "Condividi il campo con atleti d'élite in attività e metti alla prova la tattica allenata nei match di esibizione trimestrali.",
      fr: "Partagez le court avec des joueurs d'élite en activité et testez la tactique travaillée lors de matchs d'exhibition trimestriels.",
      es: "Comparte la pista con jugadores de élite en activo y pon a prueba la táctica entrenada en partidos de exhibición trimestrales.",
    },
  },
  {
    no: "05",
    title: { ko: "진심인 크루들과의 교류", en: "Connecting with crews who are all-in", zh: "与真心投入的伙伴交流", ja: "本気のクルーとの交流", it: "Legami con compagni che ci mettono tutto", fr: "Des liens avec des partenaires pleinement investis", es: "Conexión con un grupo entregado de verdad" },
    body: {
      ko: "매 기수 테니스에 진심인 멋진 크루들과 만나, 라이프스타일 전반에 긍정적이고 건강한 에너지를 나눕니다.",
      en: "Each season you meet great crews who are serious about tennis, sharing positive, healthy energy across your whole lifestyle.",
      zh: "每一期都能遇见对网球真心投入的出色伙伴，将积极而健康的能量贯穿于整个生活方式。",
      ja: "期ごとにテニスに本気の素敵なクルーと出会い、ライフスタイル全般にポジティブで健やかなエネルギーを分かち合います。",
      it: "A ogni stagione incontri compagni fantastici che fanno sul serio con il tennis, condividendo un'energia positiva e sana in tutto il tuo stile di vita.",
      fr: "À chaque session, vous rencontrez de super partenaires sérieux au tennis et partagez une énergie positive et saine dans tout votre mode de vie.",
      es: "En cada edición conoces a un grupo estupendo que se toma en serio el tenis, compartiendo una energía positiva y saludable en todo tu estilo de vida.",
    },
  },
];

const TARGET: Bi[] = [
  {
    ko: "단순한 원포인트 레슨에 한계를 느끼고, 3시간 밀착 훈련으로 확실한 기량 향상을 원하시는 분",
    en: "Those who feel limited by one-point lessons and want clear improvement through 3-hour intensive training",
    zh: "对单点式课程感到局限，希望通过 3 小时贴身训练实现确实提升的人",
    ja: "単発のワンポイントレッスンに限界を感じ、3時間の密着トレーニングで確かな技量向上を望む方",
    it: "Chi sente i limiti delle lezioni mordi-e-fuggi e vuole migliorare davvero con 3 ore di allenamento intensivo",
    fr: "Ceux qui ressentent les limites des cours ponctuels et veulent progresser vraiment grâce à 3 heures d'entraînement intensif",
    es: "Quienes sienten las limitaciones de las clases de un solo punto y quieren mejorar de verdad con 3 horas de entrenamiento intensivo",
  },
  {
    ko: "파트너와 함께 화이팅하며 GCM 소속감을 가지고 열정적으로 훈련에 임하실 분",
    en: "Those who'll train passionately with partners, with a sense of belonging to GCM",
    zh: "愿意与搭档互相鼓劲、怀着对 GCM 的归属感、满怀热情投入训练的人",
    ja: "パートナーと声をかけ合い、GCM への所属感を持って情熱的にトレーニングに取り組む方",
    it: "Chi si allena con passione insieme ai compagni, con un senso di appartenenza a GCM",
    fr: "Ceux qui s'entraîneront avec passion aux côtés de partenaires, avec un sentiment d'appartenance à GCM",
    es: "Quienes entrenarán con pasión junto a sus compañeros, con sentido de pertenencia a GCM",
  },
  {
    ko: "매주 부여되는 과제와 피드백을 착실히 이행할 뚜렷한 각오와 열정을 가지신 분",
    en: "Those with the resolve and passion to follow through on weekly homework and feedback",
    zh: "具备坚定决心与热情，能踏实完成每周布置的作业与反馈的人",
    ja: "毎週与えられる課題とフィードバックを着実にこなす、明確な覚悟と情熱を持つ方",
    it: "Chi ha la determinazione e la passione per portare a termine compiti e feedback settimanali",
    fr: "Ceux qui ont la détermination et la passion de mener à bien devoirs et retours hebdomadaires",
    es: "Quienes tienen la determinación y la pasión para cumplir con las tareas y los comentarios semanales",
  },
];

const UI = {
  advancedLabel: { ko: "기본기가 있는 분을 위한 심화 트랙", en: "An advanced track for those with the basics", zh: "面向有基础者的进阶课程", ja: "基礎がある方のための上級トラック", it: "Un percorso avanzato per chi ha già le basi", fr: "Un parcours avancé pour ceux qui ont déjà les bases", es: "Un itinerario avanzado para quienes ya tienen la base" },
  title: { ko: "레슨이 아니라, 압도적인 훈련", en: "Not a lesson — intensive training", zh: "不是课程，而是压倒性的训练", ja: "レッスンではなく、圧倒的なトレーニング", it: "Non una lezione, ma un allenamento travolgente", fr: "Pas un cours, mais un entraînement intensif", es: "No una clase, sino un entrenamiento abrumador" },
  lead: { ko: "테니스를 잘하기 위해 꼭 알아야 할 상식과 코칭의 관점이 다릅니다.", en: "A different standard of know-how and coaching for getting genuinely better at tennis.", zh: "想真正打好网球所必备的常识与教学视角，与众不同。", ja: "テニスが本当に上達するために欠かせない知識とコーチングの視点が違います。", it: "Un livello diverso di competenze e di coaching per migliorare davvero nel tennis.", fr: "Un autre niveau de savoir-faire et de coaching pour vraiment progresser au tennis.", es: "Un nivel distinto de conocimientos y de coaching para mejorar de verdad en el tenis." },
  curTitle: { ko: "무엇을 훈련하나요", en: "What you train", zh: "我们训练什么", ja: "何を訓練するのか", it: "Cosa si allena", fr: "Ce que vous entraînez", es: "Qué entrenas" },
  curLead: { ko: "합류하는 주차와 상관없이, 순환형 시스템으로 매 세션 새로운 실전 테마를 완성합니다. 피지컬과 전술을 유기적으로 결합해 '기술 → 습관 → 체득'으로 이어집니다.", en: "Whatever week you join, a cyclical system lets you complete a fresh live theme every session — physical and tactical work combined into 'technique → habit → mastery'.", zh: "无论从第几周加入，循环式系统都让你在每节课完成全新的实战主题。将体能与战术有机结合，串联『技术 → 习惯 → 体得』。", ja: "参加する週に関係なく、循環型システムで毎回のセッションに新しい実戦テーマを完成させます。フィジカルと戦術を有機的に結びつけ、『技術 → 習慣 → 体得』へとつなげます。", it: "In qualunque settimana ti unisci, un sistema ciclico ti fa completare un nuovo tema di gioco a ogni sessione, combinando fisico e tattica in 'tecnica → abitudine → padronanza'.", fr: "Quelle que soit la semaine où vous rejoignez, un système cyclique vous fait compléter un nouveau thème de jeu à chaque séance, combinant physique et tactique en 'technique → habitude → maîtrise'.", es: "Te unas la semana que te unas, un sistema cíclico te hace completar un nuevo tema de juego en cada sesión, combinando físico y táctica en 'técnica → hábito → dominio'." },
  diffTitle: { ko: "전술반만의 5가지 차별점", en: "Five things only GCM 전술반 offers", zh: "战术班独有的 5 大优势", ja: "戦術クラスならではの5つの違い", it: "5 punti di forza esclusivi della classe tattica", fr: "5 atouts exclusifs de la classe tactique", es: "5 ventajas exclusivas de la clase táctica" },
  recommendedFor: { ko: "이런 분께 권합니다", en: "Recommended for", zh: "推荐给这样的您", ja: "こんな方におすすめ", it: "Consigliato a chi", fr: "Recommandé pour", es: "Recomendado para" },
  applyTitle: { ko: "GCM 전술반 신청", en: "Apply to GCM 전술반", zh: "GCM 战术班报名", ja: "GCM 戦術クラス申し込み", it: "Iscriviti alla classe tattica GCM", fr: "Inscription à la classe tactique GCM", es: "Inscríbete en la clase táctica GCM" },
  applyDesc: { ko: "기존 수강생 재등록 TO가 우선 반영되어 조기 마감될 수 있습니다. 지금 바로 그 깊이를 경험해 보세요.", en: "Returning members' spots are filled first, so openings may close early. Experience the depth for yourself now.", zh: "现有学员的续报名额优先，可能提前满员。现在就亲身体验这份深度吧。", ja: "既存受講生の再登録枠が優先されるため、早期に締め切る場合があります。今すぐその深さを体感してください。", it: "I posti per i rinnovi degli iscritti attuali hanno la priorità, quindi le iscrizioni potrebbero chiudersi presto. Vivi ora questa profondità in prima persona.", fr: "Les places de réinscription des membres actuels sont prioritaires ; les inscriptions peuvent donc fermer tôt. Vivez cette profondeur dès maintenant.", es: "Las plazas de reinscripción de los alumnos actuales tienen prioridad, por lo que la inscripción puede cerrarse pronto. Vive ahora esta profundidad en persona." },
  applyBtn: { ko: "전술반 신청하기", en: "Apply now", zh: "报名战术班", ja: "戦術クラスに申し込む", it: "Iscriviti ora", fr: "S'inscrire", es: "Inscribirse" },
  coachesBtn: { ko: "코치진 보기", en: "Meet the coaches", zh: "查看教练团队", ja: "コーチ陣を見る", it: "Scopri gli allenatori", fr: "Voir les entraîneurs", es: "Ver entrenadores" },
} satisfies Record<string, Bi>;

export async function TacticalTraining() {
  const locale = await getLocale();
  const t = (b: Bi) => pick(locale, b);

  return (
    <>
      {/* 인트로 — GCM 전술반 */}
      <Section tone="muted">
        <span className="mb-5 inline-block rounded-full border border-court/30 bg-court/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-court-bright">
          {t(UI.advancedLabel)}
        </span>
        <SectionHeading eyebrow="GCM 전술반" title={t(UI.title)} lead={t(UI.lead)} wideLead />
        <div className="mt-10 max-w-3xl space-y-5">
          {INTRO.map((p, i) => (
            <p key={i} className="break-keep text-base leading-loose text-ink/85">
              {t(p)}
            </p>
          ))}
          <blockquote className="border-l-4 border-court pl-5 font-display text-lg font-semibold leading-relaxed text-ink">
            {t(INTRO_QUOTE)}
          </blockquote>
          <p className="break-keep text-base font-semibold leading-loose text-ink">
            {t(INTRO_CLOSE)}
          </p>
        </div>
      </Section>

      {/* 커리큘럼 — 주차 구분 없이 카테고리별 */}
      <Section>
        <SectionHeading eyebrow="Curriculum" title={t(UI.curTitle)} lead={t(UI.curLead)} wideLead />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CURRICULUM.map((c, i) => (
            <Reveal
              key={i}
              delay={i * 80}
              className="rounded-2xl border border-line bg-card/40 p-6"
            >
              <h3 className="font-display text-lg font-bold text-court-bright">{t(c.title)}</h3>
              <ul className="mt-4 space-y-2.5">
                {c.items.map((it, j) => (
                  <li key={j} className="flex gap-2 break-keep text-sm leading-relaxed text-ink/85">
                    <span className="mt-0.5 shrink-0 text-court">·</span>
                    <span>{t(it)}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 5가지 독보적 차별점 */}
      <Section tone="muted">
        <SectionHeading eyebrow="Why GCM 전술반" title={t(UI.diffTitle)} />
        <div className="mt-12 space-y-8">
          {DIFFERENTIATORS.map((d, i) => (
            <Reveal key={d.no} delay={i * 60} className="border-t border-line pt-6">
              <div className="grid gap-4 md:grid-cols-[1fr_2fr]">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-sm font-semibold tabular-nums text-muted">
                    {d.no}
                  </span>
                  <h3 className="break-keep font-display text-xl font-bold">{t(d.title)}</h3>
                </div>
                <p className="break-keep text-sm leading-relaxed text-muted">{t(d.body)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 권장 대상 + 신청 CTA */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold">{t(UI.recommendedFor)}</h2>
            <ul className="mt-6 space-y-4">
              {TARGET.map((it, i) => (
                <li key={i} className="flex gap-3 break-keep text-base leading-relaxed text-ink/90">
                  <span className="mt-1 shrink-0 font-semibold text-court">✓</span>
                  <span>{t(it)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-court/30 bg-court/5 p-8 text-center">
            <h3 className="break-keep font-display text-xl font-bold text-court-bright">
              {t(UI.applyTitle)}
            </h3>
            <p className="mt-3 break-keep text-sm leading-relaxed text-muted">{t(UI.applyDesc)}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-court px-6 py-3 text-sm font-semibold tracking-wide text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-court-deep"
              >
                {t(UI.applyBtn)}
              </a>
              <Button href="/coaches" variant="outline">
                {t(UI.coachesBtn)}
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
