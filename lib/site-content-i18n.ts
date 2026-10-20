/**
 * 추가 언어 번역 (zh/ja/it/fr/es) — 홈/공용 백본 섹션.
 * 영어(en)를 기준으로 번역하며, 브랜드 표시어(영문 헤드라인·라벨 등)는 영어를 유지한다.
 * site-content.ts 에서 enDict 에 스프레드하여 localeDicts 로 등록한다.
 * 번역이 없는 섹션은 영어로 폴백된다.
 */
import type { Locale } from "@/lib/i18n-pick";

type UiStrings = {
  programsTitle: string;
  playersTitle: string;
  playersLead: string;
  playersComing: string;
  testimonialsTitle: string;
  testimonialsComing: string;
  teamTitle: string;
  coachBio: string;
  curriculumTitle: string;
  curriculumLead: string;
  totalCareTitle: string;
  totalCareLead: string;
  safetyTitle: string;
  safetyTitleAccent: string;
  safetyLead: string;
  pathwayLabel: string;
  recreationalTitle: string;
  contactTitle: string;
  contactLead: string;
  galleryTitle: string;
  galleryLead: string;
  galleryComing: string;
  ctaConsult: string;
  ctaPrograms: string;
  classApply: string;
  consultApply: string;
  siteGuideTitle: string;
  aboutIntroEyebrow: string;
  learnMore: string;
};

type Sections = {
  ui: UiStrings;
  heroSubs: [string, string, string];
  statsLabels: [string, string, string];
  whoWeAre: {
    title: string;
    lead: string;
    pillars: [string, string, string, string];
    pillarBodies: [string, string, string, string];
    story: [string, string, string, string, string];
  };
  programsLead: string;
  programs: Array<{ target: string; duration: string; desc: string; points: string[] }>;
  faqSub: string;
  recreational: {
    lead: string;
    classes: Array<{ title: string; age: string; desc: string; points: string[] }>;
  };
  siteGuideLead: string;
  siteGuide: Array<{ title: string; desc: string; items: string[] }>;
};

const zh: Sections = {
  ui: {
    programsTitle: "我们的课程面向谁",
    playersTitle: "GCM 选手",
    playersLead: "我们不是在成为职业选手之后，而是在此之前就共同打造选手品牌。",
    playersComing: "选手信息正在准备中，即将公开。",
    testimonialsTitle: "选手与家长的故事",
    testimonialsComing: "选手与家长的故事正在准备中，将在获得同意后依次公开。",
    teamTitle: "认识教练团队",
    coachBio: "查看简介 →",
    curriculumTitle: "成长课程 · 六阶段体系",
    curriculumLead: "从诊断到迈入下一阶段，我们以六个阶段设计并循环推进选手的成长。",
    totalCareTitle: "超越网球的管理",
    totalCareLead: "从技术到心理、学业、国际礼仪与运营——我们管理选手的一切。",
    safetyTitle: "两条道路",
    safetyTitleAccent: "职业 OR 大学",
    safetyLead: "以扎实的训练为起点，我们引导选手走向职业与大学两条道路。",
    pathwayLabel: "选手成长路径 · 五步流程",
    recreationalTitle: "少儿与业余俱乐部",
    contactTitle: "联系我们",
    contactLead: "有疑问吗？请以您方便的方式与我们联系。",
    galleryTitle: "相册",
    galleryLead: "通过照片感受 GCM 的训练与现场。",
    galleryComing: "相册照片正在准备中，即将公开。",
    ctaConsult: "选手生涯咨询",
    ctaPrograms: "查看课程",
    classApply: "报名课程",
    consultApply: "申请咨询",
    siteGuideTitle: "浏览网站",
    aboutIntroEyebrow: "About GCM",
    learnMore: "了解更多",
  },
  heroSubs: [
    "我们培养立足世界舞台的冠军——技术、体能、心理融为一体。",
    "天赋只是起点。冠军靠每天的训练铸就。",
    "每一步，GCM 都与你同行。",
  ],
  statsLabels: ["场地类型", "每周训练", "职业路径（职业·大学）"],
  whoWeAre: {
    title: "GCM 是怎样的地方",
    lead: "由创始人吴成国与教练团队带领的高水平网球学院。融合技术、体能与心理的系统化训练，成就选手的长期成长。",
    pillars: ["心理素质", "目标设定与训练", "成就", "以选手为中心"],
    pillarBodies: [
      "从少儿阶段起，我们以品格与团队合作为中心提供心理关怀，让选手在责任感、斗志、韧性与情绪管理中成长。",
      "通过高水平训练、纪律与明确的目标设定，为选手迈向下一阶段做好准备。",
      "以过程为导向的坚持与持续的成绩回顾，证明成长。",
      "在个人成长与学业之间取得平衡，为每位选手设计长期的成长路径。",
    ],
    story: [
      "GCM 的创立，是为了成为一所对选手的成长与生涯负责到底的学院。",
      "优秀的选手并非偶然造就。即使有天赋，没有成长路径也会停滞。GCM 诊断选手当前所处的位置，将训练、比赛、心理routine与生涯规划连为一体。我们将选手视为迈向下一阶段的成长过程，而非短期成绩。",
      "精英网球之路不能仅凭天赋走完。它需要系统化的训练、以数据为基础的生涯设计，以及在动摇时稳住你的心理关怀。",
      "GCM（Global Champions Makers）是一种由多位专家共同为一名选手负责的综合表现模式，设计从青少年到职业与大学的道路。",
      "我们不把结果交给运气。我们相信，系统化的过程创造结果。",
    ],
  },
  programsLead:
    "跨越国界——从世界第一网球强国意大利，到美国与上海——为每位选手的阶段与目标量身打造的三条路径。我们从你的当下出发。",
  programs: [
    {
      target: "网球起步 · U6–U10",
      duration: "基础 · 品格培养阶段",
      desc: "第一次握起球拍的阶段，以协作、领导力、品格与团队合作为核心，在快乐中开始。",
      points: ["以协作·团队合作为中心的小组训练", "领导力·品格教育", "基本功·适应球场"],
    },
    {
      target: "青少年精英 · U10–U18",
      duration: "长期发展路径",
      desc: "从基本功到国际赛事，设计成为精英选手的长期成长路线图。",
      points: ["U10–12：基本功·运动能力·协调性", "U14：竞技训练习惯·技术精修", "U18：国内外升学或职业准备"],
    },
    {
      target: "职业志向 · 巡回赛",
      duration: "每周 / 每月 / 整个赛季",
      desc: "为巡回赛与实业团入团提供高强度的表现管理。",
      points: ["基于战术模式的训练·比赛情景", "巡回赛日程·赛事随行管理", "实业团签约咨询"],
    },
  ],
  faqSub: "技术·体能·心理融为一体。GCM 与你一同迈出下一步。",
  recreational: {
    lead: "无需身在选手队。我们开设少儿与成人兴趣班，边享受边学习。",
    classes: [
      {
        title: "少儿班",
        age: "5–13 岁",
        desc: "像游戏一样学习的第一次网球——在快乐中掌握运动能力、球场适应与基本功。",
        points: ["按年龄的小组指导", "基本功·步法·协调性", "以趣味为中心的激励"],
      },
      {
        title: "成人业余班",
        age: "成人初级–中级",
        desc: "从兴趣开始、认真享受的网球——从基本功到战术与比赛运营。",
        points: ["基本功班·战术班", "击球·截击·发球", "战术·比赛运营", "同好比赛·礼仪"],
      },
    ],
  },
  siteGuideLead: "按选手的成长阶段，一目了然地了解 GCM 的教练、课程、升学与全球生涯之旅。",
  siteGuide: [
    { title: "GCM 简介", desc: "我们的创立故事与理念——由多位专家共同为一名选手负责的综合表现模式。", items: ["创立背景·愿景", "综合表现模式", "我们的信念"] },
    { title: "院长致辞", desc: "创始人兼院长吴成国分享 GCM 的理念与对家长的承诺。", items: ["院长致辞", "教育理念·愿景", "致家长的话"] },
    { title: "认识教练团队", desc: "创始人吴成国与主教练、心理教练团队——他们的履历与执教理念。", items: ["创始人·院长 吴成国", "主教练·技术/体能", "教练·技术/心理"] },
    { title: "GCM 选手", desc: "GCM 选手在成为职业之前便与我们共同成长的故事。（即将公开）", items: ["选手故事", "成长记录", "即将公开"] },
    { title: "相册", desc: "以照片呈现训练与赛事的瞬间——学院的鲜活现场。", items: ["训练现场", "赛事·活动", "学院动态"] },
    { title: "训练体系", desc: "在横跨意大利、美国与上海的网络之上——融合技术、体能与心理的六阶段体系。", items: ["六阶段发展体系", "Total Care 体系", "职业·大学双轨路径"] },
    { title: "少儿与业余俱乐部", desc: "即使不在选手队，也能边享受边学习——少儿与成人兴趣班。", items: ["少儿班（5–13 岁）", "成人业余班", "基本功·战术·比赛"] },
    { title: "生涯与升学咨询", desc: "以数据驱动的生涯设计与升学咨询——共同描绘选手的下一步。", items: ["UTR·成绩诊断", "职业/大学路线图", "心理·语言关怀"] },
    { title: "奖学金", desc: "每年限量的全额与部分奖学金——选拔具备态度与斗志的选手。", items: ["对象·标准", "入选后成长管理", "申请方法"] },
  ],
};

const ja: Sections = {
  ui: {
    programsTitle: "プログラムは誰のためのものか",
    playersTitle: "GCM の選手たち",
    playersLead: "プロになってからではなく、なる前から選手のブランドを共に育てます。",
    playersComing: "選手情報を準備中です。まもなく公開予定です。",
    testimonialsTitle: "選手と保護者の声",
    testimonialsComing: "選手と保護者の声を準備中です。同意確認のうえ順次公開いたします。",
    teamTitle: "コーチ陣の紹介",
    coachBio: "経歴を見る →",
    curriculumTitle: "育成カリキュラム · 6ステップ・システム",
    curriculumLead: "診断から次の段階への到達まで、選手の成長を6つのステップで設計し循環させます。",
    totalCareTitle: "テニスを超えたケア",
    totalCareLead: "技術からメンタル、学業、グローバルマナー、運営まで——選手のすべてをケアします。",
    safetyTitle: "二つの道",
    safetyTitleAccent: "プロ OR 大学",
    safetyLead: "確かなトレーニングを起点に、プロと大学の二つの道へ選手を導きます。",
    pathwayLabel: "Player Pathway · 5ステップ・プロセス",
    recreationalTitle: "キッズ & アマチュア クラブ",
    contactTitle: "お問い合わせ",
    contactLead: "ご質問がありますか？ご都合のよい方法でご連絡ください。",
    galleryTitle: "ギャラリー",
    galleryLead: "GCM のトレーニングと現場を写真でご覧ください。",
    galleryComing: "ギャラリー写真を準備中です。まもなく公開予定です。",
    ctaConsult: "選手キャリア相談",
    ctaPrograms: "プログラムを見る",
    classApply: "クラスに申し込む",
    consultApply: "相談を申し込む",
    siteGuideTitle: "サイトを見る",
    aboutIntroEyebrow: "About GCM",
    learnMore: "詳しく見る",
  },
  heroSubs: [
    "世界の舞台に立つチャンピオンを育てます——技術・フィジカル・メンタルを一つに。",
    "才能は始まりにすぎません。チャンピオンは日々のトレーニングで創られます。",
    "一歩ごとに、GCM が共にあります。",
  ],
  statsLabels: ["コート・サーフェス", "週間トレーニング", "キャリア（プロ・大学）"],
  whoWeAre: {
    title: "GCM とはどんな場所か",
    lead: "創設者オ・ソングクとコーチ陣が率いるハイパフォーマンス・テニスアカデミー。技術・フィジカル・メンタルを統合した体系的トレーニングで、選手の長期的な成長を築きます。",
    pillars: ["メンタリティ", "目標設定とトレーニング", "成果", "選手中心"],
    pillarBodies: [
      "キッズの段階から、人間性とチームワークを中心としたメンタルケアを行い、責任感・闘志・回復力・感情のコントロールを備えた選手へと育てます。",
      "ハイレベルなトレーニング、規律、明確な目標設定で、次の段階への準備を整えます。",
      "プロセス重視の継続と継続的な成果レビューで、成長を証明します。",
      "個人の成長と学業のバランスをとり、選手一人ひとりに長期的な成長の道筋を設計します。",
    ],
    story: [
      "GCM は、選手の成長とキャリアを最後まで責任をもって支えるアカデミーを目指して始まりました。",
      "良い選手は偶然には生まれません。才能ある選手も成長の道筋がなければ停滞します。GCM は選手の現在地を診断し、トレーニング・試合・メンタルルーティン・キャリア設計を一つにつなげます。私たちは選手を、短期的な結果ではなく、次の段階へと成長していく過程としてとらえます。",
      "エリートテニスの道は才能だけでは完成しません。体系的なトレーニング、データに基づくキャリア設計、そして揺らいだときに支えるメンタルケアが必要です。",
      "GCM（Global Champions Makers）は、複数の専門家が一人の選手を共に担う統合パフォーマンスモデルで、ジュニアからプロ・大学進学までの道を設計します。",
      "私たちは結果を運に委ねません。体系的なプロセスが結果を生むと信じています。",
    ],
  },
  programsLead:
    "国境を越えて——世界第1位のテニス大国イタリアをはじめ、アメリカ、上海まで——選手の段階と目標に合わせた三つのトラック。あなたの「今」から始めます。",
  programs: [
    {
      target: "テニス開始 · U6–U10",
      duration: "基礎 · 人間性育成の段階",
      desc: "初めてラケットを握る段階。協調性・リーダーシップ・人間性・チームワークを中心に、楽しさとともに始めます。",
      points: ["協調性・チームワーク中心のグループ練習", "リーダーシップ・人間性教育", "基礎・コート適応"],
    },
    {
      target: "ジュニアエリート · U10–U18",
      duration: "長期育成パス",
      desc: "基礎から国際大会まで、エリート選手への長期的な成長ロードマップを設計します。",
      points: ["U10–12：基礎・運動能力・協応性", "U14：競技的な練習習慣・技術の精錬", "U18：国内外の進学またはプロ準備"],
    },
    {
      target: "プロ志望 · ツアー",
      duration: "週間 / 月間 / フルシーズン",
      desc: "ツアー大会と実業団入りに向けた高強度のパフォーマンス・マネジメントを提供します。",
      points: ["パターンに基づく練習・試合シナリオ", "ツアー日程・大会帯同の管理", "実業団契約コンサルティング"],
    },
  ],
  faqSub: "技術・フィジカル・メンタルを一つに。GCM があなたの次の一歩に寄り添います。",
  recreational: {
    lead: "選手コースでなくても大丈夫。楽しみながら学ぶキッズ・大人の趣味クラスを運営しています。",
    classes: [
      {
        title: "キッズクラス",
        age: "5〜13歳",
        desc: "遊ぶように学ぶ初めてのテニス——運動能力、コート適応、基礎を楽しく。",
        points: ["年齢別の少人数指導", "基礎・フットワーク・協応性", "楽しさ中心のモチベーション"],
      },
      {
        title: "大人アマチュアクラス",
        age: "大人 初級〜中級",
        desc: "趣味で始めてしっかり楽しむテニス——基礎から戦術・試合運営まで。",
        points: ["基礎クラス・戦術クラス", "ストローク・ボレー・サーブ", "戦術・試合運営", "同好試合・マナー"],
      },
    ],
  },
  siteGuideLead: "選手の成長段階に合わせて、GCM のコーチング、プログラム、進学、グローバルキャリアの歩みを一目で。",
  siteGuide: [
    { title: "GCM について", desc: "設立の経緯と哲学——複数の専門家が一人の選手を担う統合パフォーマンスモデル。", items: ["設立背景・ビジョン", "統合パフォーマンスモデル", "私たちが信じること"] },
    { title: "代表院長あいさつ", desc: "創設者兼代表院長オ・ソングクが GCM の哲学と保護者への約束を語ります。", items: ["代表院長あいさつ", "教育哲学・ビジョン", "保護者の皆さまへ"] },
    { title: "コーチ陣の紹介", desc: "創設者オ・ソングクとヘッド・メンタルコーチ陣——その経歴と指導哲学。", items: ["創設者・院長 オ・ソングク", "ヘッドコーチ・技術/フィジカル", "コーチ・技術/メンタル"] },
    { title: "GCM の選手たち", desc: "プロになる前から共に成長する GCM 選手たちの物語。（近日公開）", items: ["選手ストーリー", "成長記録", "近日公開"] },
    { title: "ギャラリー", desc: "トレーニングと大会の瞬間を写真で——アカデミーの生きた現場。", items: ["トレーニング現場", "大会・イベント", "アカデミーの最新情報"] },
    { title: "トレーニング・システム", desc: "イタリア・アメリカ・上海にまたがるネットワークの上で——技術・フィジカル・メンタルを統合した6ステップ・システム。", items: ["6ステップ育成システム", "Total Care システム", "プロ・大学のデュアルパス"] },
    { title: "キッズ & アマチュア クラブ", desc: "選手コースでなくても楽しみながら学べる——キッズと大人の趣味クラス。", items: ["キッズクラス（5〜13歳）", "大人アマチュアクラス", "基礎・戦術・試合"] },
    { title: "キャリア・進学コンサルティング", desc: "データに基づくキャリア設計と進学コンサルティング——選手の次の一歩を共に描きます。", items: ["UTR・成績診断", "プロ/大学ロードマップ", "メンタル・語学ケア"] },
    { title: "奨学金", desc: "毎年、人数限定の全額・一部奨学金——態度と闘志を備えた選手を選抜します。", items: ["対象・基準", "選抜後の成長管理", "申請方法"] },
  ],
};

const it: Sections = {
  ui: {
    programsTitle: "A chi si rivolgono i nostri programmi",
    playersTitle: "Atleti GCM",
    playersLead: "Costruiamo il marchio dell'atleta insieme, non dopo il passaggio al professionismo, ma prima.",
    playersComing: "Le informazioni sugli atleti sono in preparazione e saranno pubblicate presto.",
    testimonialsTitle: "Le storie di atleti e genitori",
    testimonialsComing: "Le storie di atleti e genitori sono in preparazione e verranno pubblicate in ordine dopo il consenso.",
    teamTitle: "I nostri allenatori",
    coachBio: "Vedi biografia →",
    curriculumTitle: "Percorso di sviluppo · Sistema in 6 fasi",
    curriculumLead: "Dalla valutazione al passo successivo, progettiamo e facciamo evolvere la crescita dell'atleta in sei fasi.",
    totalCareTitle: "Oltre il tennis",
    totalCareLead: "Dalla tecnica alla mente, dagli studi alle buone maniere internazionali e all'organizzazione — ci occupiamo di tutto per l'atleta.",
    safetyTitle: "Due strade",
    safetyTitleAccent: "Pro O Università",
    safetyLead: "Da una solida base di allenamento, guidiamo gli atleti lungo due strade: professionismo e università.",
    pathwayLabel: "Percorso dell'atleta · Processo in 5 fasi",
    recreationalTitle: "Club Bambini e Amatori",
    contactTitle: "Contattaci",
    contactLead: "Hai una domanda? Scrivici nel modo che preferisci.",
    galleryTitle: "Galleria",
    galleryLead: "Scopri in foto gli allenamenti e i momenti in campo di GCM.",
    galleryComing: "Le foto della galleria sono in preparazione e saranno pubblicate presto.",
    ctaConsult: "Consulenza di carriera",
    ctaPrograms: "Vedi i programmi",
    classApply: "Iscriviti al corso",
    consultApply: "Richiedi consulenza",
    siteGuideTitle: "Esplora il sito",
    aboutIntroEyebrow: "About GCM",
    learnMore: "Scopri di più",
  },
  heroSubs: [
    "Formiamo campioni per il palcoscenico mondiale — tecnica, fisico e mente come una cosa sola.",
    "Il talento è solo l'inizio. I campioni si costruiscono con l'allenamento quotidiano.",
    "A ogni passo, GCM è con te.",
  ],
  statsLabels: ["Superficie del campo", "Allenamenti settimanali", "Percorsi (Pro · Università)"],
  whoWeAre: {
    title: "Chi è GCM",
    lead: "Un'accademia di tennis ad alte prestazioni guidata dal fondatore Oh Seong-gook e dallo staff tecnico. Un allenamento strutturato che integra tecnica, fisico e mente costruisce la crescita a lungo termine dell'atleta.",
    pillars: ["Mentalità", "Obiettivi e allenamento", "Risultati", "Centrato sull'atleta"],
    pillarBodies: [
      "Fin dalla fase dei più piccoli offriamo una cura mentale incentrata sul carattere e sul lavoro di squadra, perché gli atleti crescano con responsabilità, grinta, resilienza e controllo emotivo.",
      "Prepariamo gli atleti al passo successivo con allenamento di alto livello, disciplina e obiettivi chiari.",
      "Dimostriamo la crescita con una costanza orientata al processo e revisioni continue dei risultati.",
      "Bilanciamo la crescita individuale con gli studi e progettiamo un percorso a lungo termine per ogni atleta.",
    ],
    story: [
      "GCM è nata per essere un'accademia che si assume fino in fondo la responsabilità della crescita e della carriera dell'atleta.",
      "I buoni giocatori non nascono per caso. Anche i talenti si bloccano senza un percorso di crescita. GCM valuta il punto in cui si trova oggi l'atleta e unisce allenamento, gare, routine mentali e pianificazione della carriera in un unico percorso. Vediamo gli atleti come un processo di crescita verso il livello successivo, non come risultati di breve termine.",
      "La strada del tennis d'élite non si completa solo con il talento. Richiede allenamento sistematico, una pianificazione della carriera basata sui dati e una cura mentale che ti sostiene quando vacilli.",
      "GCM (Global Champions Makers) è un modello di performance integrato in cui più esperti si fanno carico di un singolo atleta, progettando il percorso dal settore giovanile al professionismo e all'università.",
      "Non lasciamo i risultati al caso. Crediamo che sia un processo strutturato a creare i risultati.",
    ],
  },
  programsLead:
    "Oltre i confini — dall'Italia, prima nazione al mondo del tennis, agli USA e a Shanghai — tre percorsi su misura per la fase e gli obiettivi di ogni atleta. Partiamo da dove sei ora.",
  programs: [
    {
      target: "Inizio del tennis · U6–U10",
      duration: "Fase di base e di carattere",
      desc: "Il primo passo con la racchetta: si comincia con gioia, con cooperazione, leadership, carattere e spirito di squadra al centro.",
      points: ["Allenamento di gruppo incentrato su cooperazione e squadra", "Educazione a leadership e carattere", "Fondamentali · adattamento al campo"],
    },
    {
      target: "Giovani d'élite · U10–U18",
      duration: "Percorso di sviluppo a lungo termine",
      desc: "Dai fondamentali alle competizioni internazionali, progettiamo una roadmap a lungo termine verso l'atleta d'élite.",
      points: ["U10–12: fondamentali · atletismo · coordinazione", "U14: abitudini di allenamento competitivo · perfezionamento tecnico", "U18: preparazione all'università (in patria/estero) o al professionismo"],
    },
    {
      target: "Aspiranti pro · Tour",
      duration: "Settimanale / Mensile / Stagione intera",
      desc: "Offriamo una gestione della performance ad alta intensità per il circuito e per l'ingresso nelle squadre aziendali.",
      points: ["Allenamento su schemi · scenari di gara", "Gestione del calendario tour · accompagnamento ai tornei", "Consulenza sui contratti con le squadre aziendali"],
    },
  ],
  faqSub: "Tecnica · fisico · mente come una cosa sola. GCM cammina con te verso il prossimo passo.",
  recreational: {
    lead: "Non devi far parte della squadra agonistica. Organizziamo corsi amatoriali per bambini e adulti, per divertirsi e imparare.",
    classes: [
      {
        title: "Corso Bambini",
        age: "5–13 anni",
        desc: "Il primo tennis imparato come un gioco — atletismo, adattamento al campo e fondamentali, con gioia.",
        points: ["Coaching in piccoli gruppi per età", "Fondamentali · footwork · coordinazione", "Motivazione incentrata sul divertimento"],
      },
      {
        title: "Corso Amatori Adulti",
        age: "Adulti principianti–intermedi",
        desc: "Un tennis che nasce come hobby e si gode davvero — dai fondamentali alla tattica e al gioco.",
        points: ["Corsi di fondamentali · tattica", "Dritto · volée · servizio", "Tattica · gestione del gioco", "Partite tra appassionati · etichetta"],
      },
    ],
  },
  siteGuideLead: "Esplora a colpo d'occhio il coaching, i programmi, le ammissioni e il percorso di carriera globale di GCM — in base alla fase di crescita di ogni atleta.",
  siteGuide: [
    { title: "Chi è GCM", desc: "La nostra storia e filosofia — un modello di performance integrato in cui più esperti si fanno carico di un atleta.", items: ["Origini · visione", "Modello di performance integrato", "Ciò in cui crediamo"] },
    { title: "Messaggio del Direttore", desc: "Il fondatore e direttore Oh Seong-gook condivide la filosofia di GCM e la sua promessa ai genitori.", items: ["Messaggio del direttore", "Filosofia educativa · visione", "Una parola ai genitori"] },
    { title: "I nostri allenatori", desc: "Il fondatore Oh Seong-gook e lo staff tecnico e mentale — carriere e filosofia di coaching.", items: ["Fondatore · Direttore Oh Seong-gook", "Head Coach · tecnica/fisico", "Coach · tecnica/mente"] },
    { title: "Atleti GCM", desc: "Le storie degli atleti GCM che crescono con noi già prima di passare professionisti. (In arrivo)", items: ["Storie degli atleti", "Percorsi di crescita", "In arrivo"] },
    { title: "Galleria", desc: "Allenamenti e momenti di gara in foto — le scene vive dell'accademia.", items: ["Sessioni di allenamento", "Tornei · eventi", "Novità dall'accademia"] },
    { title: "Sistema di allenamento", desc: "Su una rete che attraversa Italia, USA e Shanghai — un sistema in 6 fasi che integra tecnica, fisico e mente.", items: ["Sistema di sviluppo in 6 fasi", "Sistema Total Care", "Doppio percorso pro · università"] },
    { title: "Club Bambini e Amatori", desc: "Divertirsi e imparare anche fuori dalla squadra agonistica — corsi per bambini e adulti.", items: ["Corso bambini (5–13 anni)", "Corso amatori adulti", "Fondamentali · tattica · partite"] },
    { title: "Consulenza carriera e ammissioni", desc: "Progettazione della carriera basata sui dati e consulenza per le ammissioni — disegniamo insieme il prossimo passo.", items: ["UTR · analisi dei risultati", "Roadmap pro / università", "Cura mentale · linguistica"] },
    { title: "Borse di studio", desc: "Ogni anno un numero limitato di borse totali e parziali — selezioniamo atleti con attitudine e grinta.", items: ["Requisiti · criteri", "Cura della crescita dopo la selezione", "Come candidarsi"] },
  ],
};

const fr: Sections = {
  ui: {
    programsTitle: "À qui s'adressent nos programmes",
    playersTitle: "Les joueurs GCM",
    playersLead: "Nous construisons l'image du joueur ensemble, non pas après le passage professionnel, mais avant.",
    playersComing: "Les informations sur les joueurs sont en préparation et seront publiées prochainement.",
    testimonialsTitle: "Les témoignages des joueurs et des parents",
    testimonialsComing: "Les témoignages des joueurs et des parents sont en préparation et seront publiés progressivement après consentement.",
    teamTitle: "Nos entraîneurs",
    coachBio: "Voir la biographie →",
    curriculumTitle: "Parcours de développement · Système en 6 étapes",
    curriculumLead: "De l'évaluation au passage à l'étape suivante, nous concevons et faisons évoluer la progression du joueur en six étapes.",
    totalCareTitle: "Au-delà du tennis",
    totalCareLead: "De la technique au mental, aux études, aux bonnes manières internationales et à l'organisation — nous prenons soin de tout pour le joueur.",
    safetyTitle: "Deux voies",
    safetyTitleAccent: "Pro OU Université",
    safetyLead: "À partir d'une base d'entraînement solide, nous guidons les joueurs sur deux voies : le professionnalisme et l'université.",
    pathwayLabel: "Parcours du joueur · Processus en 5 étapes",
    recreationalTitle: "Club Enfants & Amateurs",
    contactTitle: "Nous contacter",
    contactLead: "Une question ? Contactez-nous de la manière qui vous convient le mieux.",
    galleryTitle: "Galerie",
    galleryLead: "Découvrez en images les entraînements et les moments sur le court de GCM.",
    galleryComing: "Les photos de la galerie sont en préparation et seront publiées prochainement.",
    ctaConsult: "Conseil en carrière",
    ctaPrograms: "Voir les programmes",
    classApply: "S'inscrire au cours",
    consultApply: "Demander un conseil",
    siteGuideTitle: "Explorer le site",
    aboutIntroEyebrow: "About GCM",
    learnMore: "En savoir plus",
  },
  heroSubs: [
    "Nous formons des champions pour la scène mondiale — technique, physique et mental ne faisant qu'un.",
    "Le talent n'est qu'un début. Les champions se forgent par l'entraînement quotidien.",
    "À chaque étape, GCM est à vos côtés.",
  ],
  statsLabels: ["Surface du court", "Entraînements hebdomadaires", "Voies de carrière (Pro · Université)"],
  whoWeAre: {
    title: "Qui est GCM",
    lead: "Une académie de tennis de haut niveau dirigée par le fondateur Oh Seong-gook et le staff technique. Un entraînement structuré intégrant technique, physique et mental bâtit la progression à long terme du joueur.",
    pillars: ["Mentalité", "Objectifs et entraînement", "Résultats", "Centré sur le joueur"],
    pillarBodies: [
      "Dès le plus jeune âge, nous offrons un accompagnement mental centré sur le caractère et l'esprit d'équipe, pour que les joueurs grandissent avec responsabilité, combativité, résilience et maîtrise émotionnelle.",
      "Nous préparons les joueurs à l'étape suivante par un entraînement de haut niveau, de la discipline et des objectifs clairs.",
      "Nous prouvons la progression par une constance axée sur le processus et des bilans de performance continus.",
      "Nous équilibrons progression individuelle et études, et concevons un parcours à long terme pour chaque joueur.",
    ],
    story: [
      "GCM est née pour être une académie qui assume jusqu'au bout la progression et la carrière du joueur.",
      "Les bons joueurs ne naissent pas par hasard. Même les talents stagnent sans parcours de progression. GCM évalue la position actuelle du joueur et relie en un seul ensemble l'entraînement, la compétition, les routines mentales et la planification de carrière. Nous voyons les joueurs comme un processus de progression vers le niveau supérieur, et non comme des résultats à court terme.",
      "La voie du tennis d'élite ne se parcourt pas par le seul talent. Elle exige un entraînement systématique, une planification de carrière fondée sur les données et un accompagnement mental qui vous soutient dans les moments de doute.",
      "GCM (Global Champions Makers) est un modèle de performance intégré où plusieurs experts prennent en charge un seul joueur, concevant le parcours du niveau junior jusqu'au professionnalisme et à l'université.",
      "Nous ne laissons pas les résultats au hasard. Nous croyons qu'un processus structuré crée les résultats.",
    ],
  },
  programsLead:
    "Au-delà des frontières — de l'Italie, première nation mondiale du tennis, aux États-Unis et à Shanghai — trois parcours adaptés à l'étape et aux objectifs de chaque joueur. Nous partons d'où vous êtes aujourd'hui.",
  programs: [
    {
      target: "Débuts au tennis · U6–U10",
      duration: "Phase des fondations et du caractère",
      desc: "Le premier pas avec la raquette : on commence avec joie, autour de la coopération, du leadership, du caractère et de l'esprit d'équipe.",
      points: ["Entraînement en groupe axé sur la coopération et l'équipe", "Éducation au leadership et au caractère", "Fondamentaux · adaptation au court"],
    },
    {
      target: "Jeunes élites · U10–U18",
      duration: "Parcours de développement à long terme",
      desc: "Des fondamentaux aux compétitions internationales, nous concevons une feuille de route à long terme vers le joueur d'élite.",
      points: ["U10–12 : fondamentaux · aptitudes athlétiques · coordination", "U14 : habitudes d'entraînement compétitif · perfectionnement technique", "U18 : préparation aux études (en France/à l'étranger) ou au professionnalisme"],
    },
    {
      target: "Aspirants pros · Circuit",
      duration: "Hebdomadaire / Mensuel / Saison complète",
      desc: "Nous proposons une gestion de la performance de haute intensité pour le circuit et l'intégration en équipe d'entreprise.",
      points: ["Entraînement par schémas · scénarios de match", "Gestion du calendrier du circuit · accompagnement en tournoi", "Conseil sur les contrats d'équipe"],
    },
  ],
  faqSub: "Technique · physique · mental ne faisant qu'un. GCM avance avec vous vers la prochaine étape.",
  recreational: {
    lead: "Pas besoin d'être dans l'équipe de compétition. Nous proposons des cours loisir pour enfants et adultes, pour se faire plaisir et apprendre.",
    classes: [
      {
        title: "Cours Enfants",
        age: "5–13 ans",
        desc: "Le premier tennis appris comme un jeu — aptitudes athlétiques, adaptation au court et fondamentaux, avec plaisir.",
        points: ["Encadrement en petits groupes par âge", "Fondamentaux · jeu de jambes · coordination", "Motivation centrée sur le plaisir"],
      },
      {
        title: "Cours Amateurs Adultes",
        age: "Adultes débutants–intermédiaires",
        desc: "Un tennis qui commence comme un loisir et se savoure vraiment — des fondamentaux à la tactique et au jeu.",
        points: ["Cours de fondamentaux · tactique", "Coup droit · volée · service", "Tactique · gestion du jeu", "Matchs entre passionnés · étiquette"],
      },
    ],
  },
  siteGuideLead: "Découvrez d'un coup d'œil le coaching, les programmes, les admissions et le parcours de carrière mondial de GCM — selon l'étape de progression de chaque joueur.",
  siteGuide: [
    { title: "À propos de GCM", desc: "Notre histoire et notre philosophie — un modèle de performance intégré où plusieurs experts prennent en charge un joueur.", items: ["Origines · vision", "Modèle de performance intégré", "Ce en quoi nous croyons"] },
    { title: "Message du Directeur", desc: "Le fondateur et directeur Oh Seong-gook partage la philosophie de GCM et sa promesse aux parents.", items: ["Message du directeur", "Philosophie éducative · vision", "Un mot aux parents"] },
    { title: "Nos entraîneurs", desc: "Le fondateur Oh Seong-gook et le staff technique et mental — leurs parcours et leur philosophie.", items: ["Fondateur · Directeur Oh Seong-gook", "Head Coach · technique/physique", "Coach · technique/mental"] },
    { title: "Les joueurs GCM", desc: "Les histoires des joueurs GCM qui grandissent avec nous avant même de passer pros. (Bientôt)", items: ["Histoires des joueurs", "Suivis de progression", "Bientôt disponible"] },
    { title: "Galerie", desc: "Entraînements et moments de tournoi en images — les scènes vivantes de l'académie.", items: ["Séances d'entraînement", "Tournois · événements", "Actualités de l'académie"] },
    { title: "Système d'entraînement", desc: "Sur un réseau reliant l'Italie, les États-Unis et Shanghai — un système en 6 étapes intégrant technique, physique et mental.", items: ["Système de développement en 6 étapes", "Système Total Care", "Double voie pro · université"] },
    { title: "Club Enfants & Amateurs", desc: "Se faire plaisir et apprendre même hors de l'équipe de compétition — cours enfants et adultes.", items: ["Cours enfants (5–13 ans)", "Cours amateurs adultes", "Fondamentaux · tactique · matchs"] },
    { title: "Conseil carrière et admissions", desc: "Conception de carrière fondée sur les données et conseil en admissions — nous dessinons ensemble la prochaine étape.", items: ["UTR · diagnostic des résultats", "Feuille de route pro / université", "Accompagnement mental · linguistique"] },
    { title: "Bourses", desc: "Chaque année, un nombre limité de bourses complètes et partielles — nous sélectionnons des joueurs avec attitude et combativité.", items: ["Admissibilité · critères", "Suivi de progression après sélection", "Comment postuler"] },
  ],
};

const es: Sections = {
  ui: {
    programsTitle: "A quién se dirigen nuestros programas",
    playersTitle: "Jugadores GCM",
    playersLead: "Construimos la marca del jugador juntos, no después de hacerse profesional, sino antes.",
    playersComing: "La información de los jugadores está en preparación y se publicará pronto.",
    testimonialsTitle: "Historias de jugadores y familias",
    testimonialsComing: "Las historias de jugadores y familias están en preparación y se publicarán de forma progresiva tras el consentimiento.",
    teamTitle: "Nuestros entrenadores",
    coachBio: "Ver biografía →",
    curriculumTitle: "Itinerario de desarrollo · Sistema de 6 fases",
    curriculumLead: "De la evaluación al siguiente nivel, diseñamos y hacemos evolucionar el crecimiento del jugador en seis fases.",
    totalCareTitle: "Más allá del tenis",
    totalCareLead: "De la técnica a lo mental, los estudios, los buenos modales internacionales y la organización: cuidamos de todo para el jugador.",
    safetyTitle: "Dos caminos",
    safetyTitleAccent: "Pro O Universidad",
    safetyLead: "Desde una base de entrenamiento sólida, guiamos a los jugadores por dos caminos: el profesionalismo y la universidad.",
    pathwayLabel: "Itinerario del jugador · Proceso de 5 pasos",
    recreationalTitle: "Club Infantil y Amateur",
    contactTitle: "Contáctanos",
    contactLead: "¿Tienes alguna pregunta? Escríbenos del modo que te resulte más cómodo.",
    galleryTitle: "Galería",
    galleryLead: "Descubre en fotos los entrenamientos y los momentos en pista de GCM.",
    galleryComing: "Las fotos de la galería están en preparación y se publicarán pronto.",
    ctaConsult: "Asesoría de carrera",
    ctaPrograms: "Ver programas",
    classApply: "Inscribirse en la clase",
    consultApply: "Solicitar asesoría",
    siteGuideTitle: "Explorar el sitio",
    aboutIntroEyebrow: "About GCM",
    learnMore: "Saber más",
  },
  heroSubs: [
    "Formamos campeones para el escenario mundial: técnica, físico y mente como uno solo.",
    "El talento es solo el comienzo. Los campeones se forjan con el entrenamiento diario.",
    "En cada paso, GCM está contigo.",
  ],
  statsLabels: ["Superficie de la pista", "Entrenamiento semanal", "Itinerarios (Pro · Universidad)"],
  whoWeAre: {
    title: "Quién es GCM",
    lead: "Una academia de tenis de alto rendimiento dirigida por el fundador Oh Seong-gook y el cuerpo técnico. Un entrenamiento estructurado que integra técnica, físico y mente construye el crecimiento a largo plazo del jugador.",
    pillars: ["Mentalidad", "Objetivos y entrenamiento", "Logros", "Centrado en el jugador"],
    pillarBodies: [
      "Desde la etapa infantil ofrecemos un cuidado mental centrado en el carácter y el trabajo en equipo, para que los jugadores crezcan con responsabilidad, garra, resiliencia y control emocional.",
      "Preparamos a los jugadores para el siguiente paso con entrenamiento de alto nivel, disciplina y objetivos claros.",
      "Demostramos el crecimiento con una constancia orientada al proceso y revisiones continuas del rendimiento.",
      "Equilibramos el crecimiento individual con los estudios y diseñamos un itinerario a largo plazo para cada jugador.",
    ],
    story: [
      "GCM nació para ser una academia que asume hasta el final la responsabilidad del crecimiento y la carrera del jugador.",
      "Los buenos jugadores no surgen por casualidad. Incluso el talento se estanca sin un itinerario de crecimiento. GCM evalúa dónde está hoy el jugador y une en un solo conjunto el entrenamiento, la competición, las rutinas mentales y la planificación de la carrera. Vemos a los jugadores como un proceso de crecimiento hacia el siguiente nivel, no como resultados a corto plazo.",
      "El camino del tenis de élite no se recorre solo con talento. Requiere entrenamiento sistemático, una planificación de carrera basada en datos y un cuidado mental que te sostiene cuando flaqueas.",
      "GCM (Global Champions Makers) es un modelo de rendimiento integrado en el que varios expertos se hacen cargo de un solo jugador, diseñando el camino desde el nivel júnior hasta el profesionalismo y la universidad.",
      "No dejamos los resultados al azar. Creemos que es un proceso estructurado el que crea los resultados.",
    ],
  },
  programsLead:
    "Más allá de las fronteras —de Italia, la nación número uno del tenis, a EE. UU. y Shanghái— tres itinerarios a medida de la etapa y los objetivos de cada jugador. Empezamos desde donde estás ahora.",
  programs: [
    {
      target: "Inicio en el tenis · U6–U10",
      duration: "Etapa de base y de carácter",
      desc: "El primer paso con la raqueta: se empieza con alegría, con la cooperación, el liderazgo, el carácter y el trabajo en equipo en el centro.",
      points: ["Entrenamiento en grupo centrado en cooperación y equipo", "Educación en liderazgo y carácter", "Fundamentos · adaptación a la pista"],
    },
    {
      target: "Jóvenes de élite · U10–U18",
      duration: "Itinerario de desarrollo a largo plazo",
      desc: "De los fundamentos a la competición internacional, diseñamos una hoja de ruta a largo plazo hacia el jugador de élite.",
      points: ["U10–12: fundamentos · aptitud física · coordinación", "U14: hábitos de entrenamiento competitivo · perfeccionamiento técnico", "U18: preparación para la universidad (nacional/extranjera) o el profesionalismo"],
    },
    {
      target: "Aspirantes a pro · Circuito",
      duration: "Semanal / Mensual / Temporada completa",
      desc: "Ofrecemos una gestión del rendimiento de alta intensidad para el circuito y el ingreso en equipos de empresa.",
      points: ["Entrenamiento por patrones · escenarios de partido", "Gestión del calendario del circuito · acompañamiento en torneos", "Asesoría de contratos con equipos"],
    },
  ],
  faqSub: "Técnica · físico · mente como uno solo. GCM camina contigo hacia el siguiente paso.",
  recreational: {
    lead: "No hace falta estar en el equipo de competición. Ofrecemos clases de ocio para niños y adultos, para disfrutar y aprender.",
    classes: [
      {
        title: "Clase Infantil",
        age: "5–13 años",
        desc: "El primer tenis aprendido como un juego: aptitud física, adaptación a la pista y fundamentos, con alegría.",
        points: ["Clases en grupos reducidos por edad", "Fundamentos · juego de pies · coordinación", "Motivación centrada en la diversión"],
      },
      {
        title: "Clase Amateur Adultos",
        age: "Adultos principiante–intermedio",
        desc: "Un tenis que empieza como afición y se disfruta de verdad: de los fundamentos a la táctica y el juego.",
        points: ["Clases de fundamentos · táctica", "Golpe de fondo · volea · saque", "Táctica · gestión del partido", "Partidos entre aficionados · etiqueta"],
      },
    ],
  },
  siteGuideLead: "Descubre de un vistazo el coaching, los programas, las admisiones y el recorrido de carrera global de GCM, según la etapa de crecimiento de cada jugador.",
  siteGuide: [
    { title: "Sobre GCM", desc: "Nuestra historia y filosofía: un modelo de rendimiento integrado en el que varios expertos se hacen cargo de un jugador.", items: ["Orígenes · visión", "Modelo de rendimiento integrado", "Lo que creemos"] },
    { title: "Mensaje del Director", desc: "El fundador y director Oh Seong-gook comparte la filosofía de GCM y su promesa a las familias.", items: ["Mensaje del director", "Filosofía educativa · visión", "Unas palabras a las familias"] },
    { title: "Nuestros entrenadores", desc: "El fundador Oh Seong-gook y el cuerpo técnico y mental: sus trayectorias y su filosofía.", items: ["Fundador · Director Oh Seong-gook", "Head Coach · técnica/físico", "Entrenador · técnica/mental"] },
    { title: "Jugadores GCM", desc: "Las historias de los jugadores GCM que crecen con nosotros incluso antes de hacerse profesionales. (Próximamente)", items: ["Historias de jugadores", "Registros de crecimiento", "Próximamente"] },
    { title: "Galería", desc: "Entrenamientos y momentos de torneo en fotos: las escenas vivas de la academia.", items: ["Sesiones de entrenamiento", "Torneos · eventos", "Novedades de la academia"] },
    { title: "Sistema de entrenamiento", desc: "Sobre una red que abarca Italia, EE. UU. y Shanghái: un sistema de 6 fases que integra técnica, físico y mente.", items: ["Sistema de desarrollo en 6 fases", "Sistema Total Care", "Doble itinerario pro · universidad"] },
    { title: "Club Infantil y Amateur", desc: "Disfrutar y aprender incluso fuera del equipo de competición: clases infantiles y de adultos.", items: ["Clase infantil (5–13 años)", "Clase amateur adultos", "Fundamentos · táctica · partidos"] },
    { title: "Asesoría de carrera y admisiones", desc: "Diseño de carrera basado en datos y asesoría de admisiones: dibujamos juntos el siguiente paso.", items: ["UTR · diagnóstico de resultados", "Hoja de ruta pro / universidad", "Cuidado mental · lingüístico"] },
    { title: "Becas", desc: "Cada año, un número limitado de becas totales y parciales: seleccionamos jugadores con actitud y garra.", items: ["Elegibilidad · criterios", "Cuidado del crecimiento tras la selección", "Cómo solicitar"] },
  ],
};

const bySection: Partial<Record<Locale, Sections>> = { zh, ja, it, fr, es };

export const uiByLocale: Partial<Record<Locale, UiStrings>> = Object.fromEntries(
  (Object.keys(bySection) as Locale[]).map((l) => [l, bySection[l]!.ui]),
);

/**
 * enDict 에 스프레드할 섹션 오버라이드를 생성한다.
 * en 소스(배열/객체)를 받아 브랜드 표시어는 유지하고 번역 필드만 덮어쓴다.
 */
export function buildDictSections(en: {
  heroSlides: Array<{ eyebrow: string; headline: string; accent: string; sub: string }>;
  stats: Array<{ value: string; label: string; suffix: string }>;
  whoWeAre: { title: string; lead: string; pillars: Array<{ en: string; title: string; body: string }>; story: string[] };
  programs: Array<{ no: string; key: string; target: string; duration: string; desc: string; points: string[] }>;
  faqContact: { title: string; sub: string };
  recreational: { lead: string; classes: Array<{ key: string; title: string; age: string; desc: string; points: string[] }> };
  siteGuide: Array<{ no: string; label: string; href: string; title: string; desc: string; items: string[] }>;
}) {
  const out: Partial<Record<Locale, Record<string, unknown>>> = {};
  for (const l of Object.keys(bySection) as Locale[]) {
    const s = bySection[l]!;
    out[l] = {
      heroSlides: en.heroSlides.map((h, i) => ({ ...h, sub: s.heroSubs[i] ?? h.sub })),
      stats: en.stats.map((st, i) => ({ ...st, label: s.statsLabels[i] ?? st.label })),
      whoWeAre: {
        title: s.whoWeAre.title,
        lead: s.whoWeAre.lead,
        pillars: en.whoWeAre.pillars.map((p, i) => ({
          en: p.en,
          title: s.whoWeAre.pillars[i] ?? p.title,
          body: s.whoWeAre.pillarBodies[i] ?? p.body,
        })),
        story: s.whoWeAre.story,
      },
      programsLead: s.programsLead,
      programs: en.programs.map((p, i) => ({
        ...p,
        target: s.programs[i]?.target ?? p.target,
        duration: s.programs[i]?.duration ?? p.duration,
        desc: s.programs[i]?.desc ?? p.desc,
        points: s.programs[i]?.points ?? p.points,
      })),
      faqContact: { title: en.faqContact.title, sub: s.faqSub },
      recreational: {
        lead: s.recreational.lead,
        classes: en.recreational.classes.map((c, i) => ({
          key: c.key,
          title: s.recreational.classes[i]?.title ?? c.title,
          age: s.recreational.classes[i]?.age ?? c.age,
          desc: s.recreational.classes[i]?.desc ?? c.desc,
          points: s.recreational.classes[i]?.points ?? c.points,
        })),
      },
      siteGuideLead: s.siteGuideLead,
      siteGuide: en.siteGuide.map((g, i) => ({
        ...g,
        title: s.siteGuide[i]?.title ?? g.title,
        desc: s.siteGuide[i]?.desc ?? g.desc,
        items: s.siteGuide[i]?.items ?? g.items,
      })),
    };
  }
  return out;
}
