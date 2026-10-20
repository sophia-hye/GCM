/**
 * 추가 언어 번역 2 (zh/ja/it/fr/es) — About/코치/트레이닝/장학/컨설팅 사전 섹션.
 * 영어(en)를 기준으로 번역한다. 고유명사(대회명 등)·영문 라벨은 유지한다.
 * 코치 약력(achievements)은 대회명 고유명사가 대부분이라 영어를 유지하고,
 * 소개(bio)와 직책(role)만 번역한다.
 */
import type { Locale } from "@/lib/i18n-pick";

type CoreSections = {
  founding: { title: string; lead: string; paragraphs: string[] };
  teamLead: string;
  developmentDesc: string[]; // 6개 단계 설명(en 제목은 유지)
  totalCareBodies: string[]; // 3개 본문(name 라벨 유지)
  tracks: {
    sourceTitle: string;
    sourceNote: string;
    aTitle: string;
    aBadge: string;
    aBody: string;
    bTitle: string;
    bBadge: string;
    bBody: string;
    quote: string;
  };
  processSteps: Array<{ title: string; body: string }>;
  scholarship: {
    title: string;
    lead: string;
    points: Array<{ title: string; body: string }>;
    apply: string[];
  };
  consulting: {
    title: string;
    lead: string;
    services: Array<{ title: string; body: string }>;
  };
  roles: [string, string, string]; // 대표/원장/헤드코치 직책
  bios: [string, string, string]; // 각 코치 소개
};

const zh: CoreSections = {
  founding: {
    title: "GCM 为何创立",
    lead: "GCM 的创立，是为了成为一所对选手的成长与生涯负责到底的学院。",
    paragraphs: [
      "优秀的选手并非偶然造就。即使有天赋，没有成长路径也会停滞。GCM 诊断选手当前所处的位置，将训练、比赛、心理调节与生涯规划连为一体。我们将选手视为迈向下一阶段的成长过程，而非短期成绩。",
      "精英网球之路不能仅凭天赋走完。它需要系统化的训练、以数据为基础的生涯设计，以及在动摇时稳住你的心理关怀。",
      "GCM（Global Champions Makers）是一种由多位专家共同为一名选手负责的综合表现模式，设计从青少年到职业与大学的道路。",
      "我们不把结果交给运气。我们相信，系统化的过程创造结果。",
    ],
  },
  teamLead: "将技术、心理与升学连为一体的综合表现团队。\n由多位专家共同为一名选手负责。",
  developmentDesc: [
    "诊断当前位置",
    "技术·体能·心理计划",
    "应用比赛情景",
    "数据·影像反馈",
    "职业/大学/实业团方向",
    "进入下一阶段",
  ],
  totalCareBodies: [
    "我们为升学提供学业管理、英语沟通、升学时间线与文书写作支持。",
    "为国际舞台培养职业礼仪与媒体采访能力，塑造全球礼仪。",
    "统筹赛事行程与住宿，并集中管理表现数据。",
  ],
  tracks: {
    sourceTitle: "精英训练",
    sourceNote: "技术·体能·心理一体化",
    aTitle: "路径 A. 职业网球选手",
    aBadge: "首要目标",
    aBody: "通过国内外赛事与巡回赛经验，衔接职业出道或加入实业团。",
    bTitle: "路径 B. 大学网球选手",
    bBadge: "升学路径",
    bBody: "在兼顾学业与运动的同时，于大学队继续选手生涯，升学与竞技并行。",
    quote: "无论职业之路还是大学之路——我们始终在选手身旁。",
  },
  processSteps: [
    { title: "评估", body: "通过 UTR/ITF 记录与技术评估诊断当前位置" },
    { title: "锁定目标", body: "选定并联系目标赛事、大学与球队" },
    { title: "准备", body: "针对技术、体能与心理的集中准备" },
    { title: "参赛", body: "赛事出战、比赛运营与战术支持" },
    { title: "迈向下一阶段", body: "下一阶段的路线图——职业转型、大学升学等" },
  ],
  scholarship: {
    title: "全额·部分奖学金申请",
    lead: "这是为真正的成长而特别设立的限量奖学金机会。为了让具备良好品格、炽热斗志与端正态度的选手得以成长，GCM 今天也在等待你的挑战。这并非某个特别之人的故事——只要有『我也能做到』的勇气与朝向目标的炽热之心，就能开始。追随斯坦福奖学金获得者的脚步，去挑战新的可能与梦想吧！",
    points: [
      { title: "对象", body: "面向以 ATP·WTA 为目标的青少年选手。" },
      { title: "选拔标准", body: "综合评估态度、竞技能力、ITF/国内排名、近期成绩与对指导的接受度。" },
      { title: "入选后过程", body: "伴随成长，管理发展阶段·国内排名·ITF 青少年排名·职业排名。" },
    ],
    apply: [
      "基本信息（姓名·联系方式·出生年份·国籍）",
      "网球资料（ITF 排名·国内排名·近期成绩）",
      "身体信息（身高·体重·惯用手·反手类型）",
      "目标（强项·待补强之处·短期/中期目标）",
    ],
  },
  consulting: {
    title: "GCM 咨询",
    lead: "以数据为基础的生涯设计与升学咨询。我们共同描绘选手的下一步。",
    services: [
      { title: "升学咨询", body: "从 UTR/成绩诊断到目标大学/球队选定、集锦影像与教练联系，全程提供支持。" },
      { title: "生涯设计", body: "对比职业与大学两条路径，为选手设计合适的长期路线图。" },
      { title: "心理·语言关怀", body: "比赛心理管理，以及升学所需的语言与学业准备。" },
    ],
  },
  roles: ["代表", "院长", "主教练"],
  bios: [
    "统筹精英网球培养与各选手成长路线图的设计。",
    "统筹技术发展与比赛运营、日常训练与比赛指导。",
    "负责网球的整体发展，以及比赛训练时的不安心理矫正与日常训练设计。",
  ],
};

const ja: CoreSections = {
  founding: {
    title: "GCM を設立した理由",
    lead: "GCM は、選手の成長とキャリアを最後まで責任をもって支えるアカデミーを目指して始まりました。",
    paragraphs: [
      "良い選手は偶然には生まれません。才能ある選手も成長の道筋がなければ停滞します。GCM は選手の現在地を診断し、トレーニング・試合・メンタルルーティン・キャリア設計を一つにつなげます。私たちは選手を、短期的な結果ではなく、次の段階へと成長していく過程としてとらえます。",
      "エリートテニスの道は才能だけでは完成しません。体系的なトレーニング、データに基づくキャリア設計、そして揺らいだときに支えるメンタルケアが必要です。",
      "GCM（Global Champions Makers）は、複数の専門家が一人の選手を共に担う統合パフォーマンスモデルで、ジュニアからプロ・大学進学までの道を設計します。",
      "私たちは結果を運に委ねません。体系的なプロセスが結果を生むと信じています。",
    ],
  },
  teamLead: "技術・メンタル・進学を一つにつなぐ統合パフォーマンスチーム。\n複数の専門家が一人の選手を共に担います。",
  developmentDesc: [
    "現在地の診断",
    "技術・フィジカル・メンタル計画",
    "試合シナリオの適用",
    "データ・映像フィードバック",
    "プロ/大学/実業団の方向性",
    "次の段階へ進む",
  ],
  totalCareBodies: [
    "進学に必要な学業管理、英語コミュニケーション、進学スケジュール、エッセイ作成を支援します。",
    "国際舞台に向けたプロのエチケットとメディアインタビューの技術を養い、グローバルマナーを育てます。",
    "大会の遠征と滞在を調整し、パフォーマンスデータを一元管理します。",
  ],
  tracks: {
    sourceTitle: "エリートトレーニング",
    sourceNote: "技術・フィジカル・メンタルの統合",
    aTitle: "トラック A. プロテニス選手",
    aBadge: "主要目標",
    aBody: "国内外の大会やツアー経験を通じて、プロデビューや実業団入りへとつなげます。",
    bTitle: "トラック B. 大学テニス選手",
    bBadge: "進学パス",
    bBody: "学業とスポーツを両立しながら大学チームで選手生活を続け、進学と競技の両方をつないでいきます。",
    quote: "プロの道も大学の道も——私たちは常に選手のそばにいます。",
  },
  processSteps: [
    { title: "アセスメント", body: "UTR/ITF の記録と技量評価で現在地を診断" },
    { title: "ターゲティング", body: "目標の大会・大学・チームを選定し接触" },
    { title: "準備", body: "技術・フィジカル・メンタルの集中的な準備" },
    { title: "出場", body: "大会出場・試合運営・戦術サポート" },
    { title: "次の段階へ", body: "次の段階へのロードマップ——プロ転向、大学進学など" },
  ],
  scholarship: {
    title: "全額・一部奨学金のお申し込み",
    lead: "真の成長のために特別に設けた、人数限定の奨学機会です。良い人間性、燃えるような闘志、正しい態度を備えた選手が成長できるよう、GCM は今日も皆さんの挑戦を待っています。これは特別な誰かの物語ではありません。「私にもできる」という勇気と、目標に向かう熱い心があれば始められます。スタンフォード奨学生に続いて、新たな可能性と夢に挑戦してみてください。",
    points: [
      { title: "対象", body: "ATP・WTA を目指すジュニア選手を対象とします。" },
      { title: "選考基準", body: "態度・競技力・ITF/国内ランキング・近年の成績・コーチングの受容性を総合的に評価します。" },
      { title: "選考後のプロセス", body: "成長に合わせて、発達段階・国内ランキング・ITF ジュニアランキング・プロランキングを管理します。" },
    ],
    apply: [
      "基本情報（氏名・連絡先・生年・国籍）",
      "テニスプロフィール（ITF ランキング・国内ランキング・近年の成績）",
      "身体情報（身長・体重・利き手・バックハンドのタイプ）",
      "目標（強み・補強点・短期/中期目標）",
    ],
  },
  consulting: {
    title: "GCM コンサルティング",
    lead: "データに基づくキャリア設計と進学コンサルティング。選手の次の一歩を共に描きます。",
    services: [
      { title: "進学コンサルティング", body: "UTR/成績診断から、目標大学・チームの選定、ハイライト映像、コーチへのコンタクトまで支援します。" },
      { title: "キャリア設計", body: "プロと大学のトラックを比較し、選手に合った長期ロードマップを設計します。" },
      { title: "メンタル・語学ケア", body: "試合のメンタル管理に加え、進学に必要な語学・学業の準備を支援します。" },
    ],
  },
  roles: ["代表", "院長", "ヘッドコーチ"],
  bios: [
    "エリートテニスの育成と、選手ごとの成長ロードマップの設計を統括します。",
    "技術の発展と試合運営、日々のトレーニングとマッチコーチング全般を統括します。",
    "テニスの全般的な発達と、試合トレーニング時の不安心理の矯正・ルーティン設計を担当します。",
  ],
};

const it: CoreSections = {
  founding: {
    title: "Perché è nata GCM",
    lead: "GCM è nata per essere un'accademia che si assume fino in fondo la responsabilità della crescita e della carriera dell'atleta.",
    paragraphs: [
      "I buoni giocatori non nascono per caso. Anche i talenti si bloccano senza un percorso di crescita. GCM valuta il punto in cui si trova oggi l'atleta e unisce allenamento, gare, routine mentali e pianificazione della carriera in un unico percorso. Vediamo gli atleti come un processo di crescita verso il livello successivo, non come risultati di breve termine.",
      "La strada del tennis d'élite non si completa solo con il talento. Richiede allenamento sistematico, una pianificazione della carriera basata sui dati e una cura mentale che ti sostiene quando vacilli.",
      "GCM (Global Champions Makers) è un modello di performance integrato in cui più esperti si fanno carico di un singolo atleta, progettando il percorso dal settore giovanile al professionismo e all'università.",
      "Non lasciamo i risultati al caso. Crediamo che sia un processo strutturato a creare i risultati.",
    ],
  },
  teamLead: "Un team di performance integrato che unisce tecnica, mente e ammissioni.\nPiù esperti si fanno carico insieme di un singolo atleta.",
  developmentDesc: [
    "Diagnosi della posizione attuale",
    "Piano tecnico · fisico · mentale",
    "Applicazione degli scenari di gara",
    "Feedback su dati · video",
    "Direzione pro / università / squadra aziendale",
    "Ingresso nella fase successiva",
  ],
  totalCareBodies: [
    "Supportiamo la gestione accademica per le ammissioni, la comunicazione in inglese, le tempistiche di ammissione e la stesura dei saggi.",
    "Sviluppiamo l'etichetta professionale e le capacità nelle interviste per il palcoscenico internazionale, coltivando le buone maniere globali.",
    "Coordiniamo trasferte e soggiorni ai tornei e gestiamo i dati di performance in un unico luogo.",
  ],
  tracks: {
    sourceTitle: "Allenamento d'élite",
    sourceNote: "Tecnica · fisico · mente integrati",
    aTitle: "Percorso A. Tennista professionista",
    aBadge: "Obiettivo primario",
    aBody: "Attraverso tornei nazionali/internazionali ed esperienza nel circuito, verso il debutto da pro o l'ingresso in una squadra aziendale.",
    bTitle: "Percorso B. Tennista universitario",
    bBadge: "Percorso alternativo",
    bBody: "Competere in una squadra universitaria conciliando studio e sport, portando avanti insieme ammissione e carriera agonistica.",
    quote: "La via del professionismo o quella dell'università: siamo sempre al fianco dell'atleta.",
  },
  processSteps: [
    { title: "Valutazione", body: "Diagnosi della posizione attuale tramite record UTR/ITF e valutazione tecnica" },
    { title: "Definizione obiettivi", body: "Selezione e contatto di tornei, università e squadre obiettivo" },
    { title: "Preparazione", body: "Preparazione mirata tecnica, fisica e mentale" },
    { title: "Competizione", body: "Partecipazione ai tornei, gestione delle partite e supporto tattico" },
    { title: "Fase successiva", body: "Roadmap per la fase successiva: passaggio al professionismo, ammissione all'università, ecc." },
  ],
  scholarship: {
    title: "Richiesta borsa di studio totale · parziale",
    lead: "Un'opportunità di borsa di studio speciale e limitata, creata per una crescita autentica. Perché possano crescere atleti con buon carattere, grinta ardente e il giusto atteggiamento, GCM attende anche oggi la tua sfida. Non è la storia di qualcuno di speciale: può iniziare con il coraggio di dire «posso farcela anch'io» e un cuore rivolto al proprio obiettivo. Segui le orme del nostro borsista di Stanford e lanciati verso nuove possibilità e nuovi sogni!",
    points: [
      { title: "Requisiti", body: "Rivolto a giovani atleti che puntano all'ATP · WTA." },
      { title: "Criteri di selezione", body: "Valutiamo in modo complessivo atteggiamento, competitività, ranking ITF/nazionale, risultati recenti e disponibilità al coaching." },
      { title: "Dopo la selezione", body: "Gestiamo fase di sviluppo · ranking nazionale · ranking ITF junior · ranking pro man mano che l'atleta cresce." },
    ],
    apply: [
      "Dati di base (nome · contatto · anno di nascita · nazionalità)",
      "Profilo tennistico (ranking ITF · ranking nazionale · risultati recenti)",
      "Dati fisici (altezza · peso · mano dominante · tipo di rovescio)",
      "Obiettivi (punti di forza · aree da migliorare · obiettivi a breve/medio termine)",
    ],
  },
  consulting: {
    title: "GCM Consulting",
    lead: "Progettazione della carriera basata sui dati e consulenza per le ammissioni. Disegniamo insieme il prossimo passo dell'atleta.",
    services: [
      { title: "Consulenza ammissioni", body: "Supportiamo tutto, dalla diagnosi UTR/risultati alla selezione di università/squadra, ai video highlight e al contatto con i coach." },
      { title: "Progettazione della carriera", body: "Confrontiamo i percorsi pro e universitario per disegnare una roadmap a lungo termine adatta all'atleta." },
      { title: "Cura mentale · linguistica", body: "Gestione mentale in gara, oltre alla preparazione linguistica e accademica per le ammissioni." },
    ],
  },
  roles: ["Direttore", "Direttore dell'Accademia", "Head Coach"],
  bios: [
    "Supervisiona lo sviluppo del tennis d'élite e la progettazione delle roadmap di crescita individuali.",
    "Supervisiona lo sviluppo tecnico e la gestione delle partite, l'allenamento quotidiano e il coaching in gara.",
    "Responsabile dello sviluppo tennistico complessivo, della correzione dell'ansia da competizione e della progettazione delle routine durante l'allenamento alle partite.",
  ],
};

const fr: CoreSections = {
  founding: {
    title: "Pourquoi GCM a été fondée",
    lead: "GCM est née pour être une académie qui assume jusqu'au bout la progression et la carrière du joueur.",
    paragraphs: [
      "Les bons joueurs ne naissent pas par hasard. Même les talents stagnent sans parcours de progression. GCM évalue la position actuelle du joueur et relie en un seul ensemble l'entraînement, la compétition, les routines mentales et la planification de carrière. Nous voyons les joueurs comme un processus de progression vers le niveau supérieur, et non comme des résultats à court terme.",
      "La voie du tennis d'élite ne se parcourt pas par le seul talent. Elle exige un entraînement systématique, une planification de carrière fondée sur les données et un accompagnement mental qui vous soutient dans les moments de doute.",
      "GCM (Global Champions Makers) est un modèle de performance intégré où plusieurs experts prennent en charge un seul joueur, concevant le parcours du niveau junior jusqu'au professionnalisme et à l'université.",
      "Nous ne laissons pas les résultats au hasard. Nous croyons qu'un processus structuré crée les résultats.",
    ],
  },
  teamLead: "Une équipe de performance intégrée reliant technique, mental et admissions.\nPlusieurs experts prennent ensemble en charge un seul joueur.",
  developmentDesc: [
    "Diagnostic de la position actuelle",
    "Plan technique · physique · mental",
    "Application des scénarios de match",
    "Retour sur données · vidéo",
    "Orientation pro / université / équipe d'entreprise",
    "Entrée dans l'étape suivante",
  ],
  totalCareBodies: [
    "Nous accompagnons la gestion scolaire pour les admissions, la communication en anglais, le calendrier d'admission et la rédaction des essais.",
    "Nous développons l'étiquette professionnelle et les compétences en interview média pour la scène internationale, en cultivant les bonnes manières mondiales.",
    "Nous coordonnons les déplacements et séjours de tournoi et gérons les données de performance en un seul endroit.",
  ],
  tracks: {
    sourceTitle: "Entraînement d'élite",
    sourceNote: "Technique · physique · mental intégrés",
    aTitle: "Voie A. Joueur de tennis professionnel",
    aBadge: "Objectif principal",
    aBody: "À travers les tournois nationaux/internationaux et l'expérience du circuit, vers des débuts professionnels ou l'intégration d'une équipe d'entreprise.",
    bTitle: "Voie B. Joueur de tennis universitaire",
    bBadge: "Parcours alternatif",
    bBody: "Évoluer dans une équipe universitaire en conciliant études et sport, en menant de front admission et carrière sportive.",
    quote: "La voie professionnelle ou universitaire — nous sommes toujours aux côtés du joueur.",
  },
  processSteps: [
    { title: "Évaluation", body: "Diagnostic de la position actuelle via les records UTR/ITF et l'évaluation technique" },
    { title: "Ciblage", body: "Sélection et prise de contact des tournois, universités et équipes visés" },
    { title: "Préparation", body: "Préparation ciblée technique, physique et mentale" },
    { title: "Compétition", body: "Participation aux tournois, gestion des matchs et soutien tactique" },
    { title: "Étape suivante", body: "Feuille de route pour l'étape suivante — passage pro, admission à l'université, etc." },
  ],
  scholarship: {
    title: "Demande de bourse complète · partielle",
    lead: "Une occasion de bourse spéciale et limitée, créée pour une croissance authentique. Afin que des joueurs au bon caractère, à la combativité ardente et à la juste attitude puissent s'épanouir, GCM attend aujourd'hui encore votre défi. Ce n'est pas l'histoire de quelqu'un d'exceptionnel : elle peut commencer avec le courage de dire « moi aussi, je peux » et un cœur tourné vers son objectif. Marchez dans les pas de notre boursier de Stanford et lancez-vous vers de nouvelles possibilités et de nouveaux rêves !",
    points: [
      { title: "Admissibilité", body: "Destinée aux jeunes joueurs visant l'ATP · WTA." },
      { title: "Critères de sélection", body: "Nous évaluons globalement l'attitude, la compétitivité, le classement ITF/national, les résultats récents et la réceptivité au coaching." },
      { title: "Après la sélection", body: "Nous gérons l'étape de développement · le classement national · le classement ITF junior · le classement pro à mesure que le joueur progresse." },
    ],
    apply: [
      "Informations de base (nom · contact · année de naissance · nationalité)",
      "Profil tennistique (classement ITF · classement national · résultats récents)",
      "Informations physiques (taille · poids · main dominante · type de revers)",
      "Objectifs (points forts · axes d'amélioration · objectifs court/moyen terme)",
    ],
  },
  consulting: {
    title: "GCM Consulting",
    lead: "Conception de carrière fondée sur les données et conseil en admissions. Nous dessinons ensemble la prochaine étape du joueur.",
    services: [
      { title: "Conseil en admissions", body: "Nous accompagnons tout, du diagnostic UTR/résultats à la sélection de l'université/équipe, aux vidéos de temps forts et à la prise de contact avec les coachs." },
      { title: "Conception de carrière", body: "Nous comparons les voies pro et universitaire pour concevoir une feuille de route à long terme adaptée au joueur." },
      { title: "Accompagnement mental · linguistique", body: "Gestion mentale en match, ainsi que préparation linguistique et scolaire pour les admissions." },
    ],
  },
  roles: ["Directeur", "Directeur de l'Académie", "Entraîneur principal"],
  bios: [
    "Supervise le développement du tennis d'élite et la conception des feuilles de route de progression individuelles.",
    "Supervise le développement technique et la gestion des matchs, l'entraînement quotidien et le coaching en match.",
    "Responsable du développement global au tennis, de la correction de l'anxiété de compétition et de la conception des routines lors de l'entraînement aux matchs.",
  ],
};

const es: CoreSections = {
  founding: {
    title: "Por qué nació GCM",
    lead: "GCM nació para ser una academia que asume hasta el final la responsabilidad del crecimiento y la carrera del jugador.",
    paragraphs: [
      "Los buenos jugadores no surgen por casualidad. Incluso el talento se estanca sin un itinerario de crecimiento. GCM evalúa dónde está hoy el jugador y une en un solo conjunto el entrenamiento, la competición, las rutinas mentales y la planificación de la carrera. Vemos a los jugadores como un proceso de crecimiento hacia el siguiente nivel, no como resultados a corto plazo.",
      "El camino del tenis de élite no se recorre solo con talento. Requiere entrenamiento sistemático, una planificación de carrera basada en datos y un cuidado mental que te sostiene cuando flaqueas.",
      "GCM (Global Champions Makers) es un modelo de rendimiento integrado en el que varios expertos se hacen cargo de un solo jugador, diseñando el camino desde el nivel júnior hasta el profesionalismo y la universidad.",
      "No dejamos los resultados al azar. Creemos que es un proceso estructurado el que crea los resultados.",
    ],
  },
  teamLead: "Un equipo de rendimiento integrado que une técnica, mente y admisiones.\nVarios expertos se hacen cargo juntos de un solo jugador.",
  developmentDesc: [
    "Diagnóstico de la posición actual",
    "Plan técnico · físico · mental",
    "Aplicación de escenarios de partido",
    "Retroalimentación con datos · vídeo",
    "Dirección pro / universidad / equipo de empresa",
    "Entrada en la siguiente fase",
  ],
  totalCareBodies: [
    "Apoyamos la gestión académica para las admisiones, la comunicación en inglés, los plazos de admisión y la redacción de ensayos.",
    "Desarrollamos la etiqueta profesional y las habilidades para entrevistas con medios de cara al escenario internacional, cultivando los buenos modales globales.",
    "Coordinamos los desplazamientos y estancias en torneos y gestionamos los datos de rendimiento en un solo lugar.",
  ],
  tracks: {
    sourceTitle: "Entrenamiento de élite",
    sourceNote: "Técnica · físico · mente integrados",
    aTitle: "Itinerario A. Tenista profesional",
    aBadge: "Objetivo principal",
    aBody: "A través de torneos nacionales/internacionales y la experiencia del circuito, hacia el debut profesional o el ingreso en un equipo de empresa.",
    bTitle: "Itinerario B. Tenista universitario",
    bBadge: "Vía alternativa",
    bBody: "Competir en un equipo universitario conciliando estudio y deporte, llevando a la vez la admisión y la carrera deportiva.",
    quote: "La vía profesional o la universitaria: siempre estamos al lado del jugador.",
  },
  processSteps: [
    { title: "Evaluación", body: "Diagnóstico de la posición actual mediante registros UTR/ITF y evaluación técnica" },
    { title: "Definición de objetivos", body: "Selección y contacto de torneos, universidades y equipos objetivo" },
    { title: "Preparación", body: "Preparación específica técnica, física y mental" },
    { title: "Competición", body: "Participación en torneos, gestión de partidos y apoyo táctico" },
    { title: "Siguiente nivel", body: "Hoja de ruta para la siguiente fase: transición al profesionalismo, admisión universitaria, etc." },
  ],
  scholarship: {
    title: "Solicitud de beca total · parcial",
    lead: "Una oportunidad de beca especial y limitada, creada para un crecimiento auténtico. Para que puedan crecer jugadores con buen carácter, garra ardiente y la actitud correcta, GCM espera hoy también tu desafío. No es la historia de alguien especial: puede empezar con la valentía de decir «yo también puedo» y un corazón puesto en su objetivo. Sigue los pasos de nuestro becado de Stanford y lánzate hacia nuevas posibilidades y sueños.",
    points: [
      { title: "Elegibilidad", body: "Dirigida a jugadores júnior que aspiran a la ATP · WTA." },
      { title: "Criterios de selección", body: "Evaluamos de forma integral la actitud, la competitividad, el ranking ITF/nacional, los resultados recientes y la receptividad al coaching." },
      { title: "Tras la selección", body: "Gestionamos la fase de desarrollo · el ranking nacional · el ranking ITF júnior · el ranking pro a medida que el jugador crece." },
    ],
    apply: [
      "Información básica (nombre · contacto · año de nacimiento · nacionalidad)",
      "Perfil tenístico (ranking ITF · ranking nacional · resultados recientes)",
      "Información física (estatura · peso · mano dominante · tipo de revés)",
      "Objetivos (fortalezas · aspectos a mejorar · objetivos a corto/medio plazo)",
    ],
  },
  consulting: {
    title: "GCM Consulting",
    lead: "Diseño de carrera basado en datos y asesoría de admisiones. Dibujamos juntos el siguiente paso del jugador.",
    services: [
      { title: "Asesoría de admisiones", body: "Apoyamos todo, desde el diagnóstico UTR/resultados hasta la selección de universidad/equipo, los vídeos de momentos destacados y el contacto con los entrenadores." },
      { title: "Diseño de carrera", body: "Comparamos las vías pro y universitaria para diseñar una hoja de ruta a largo plazo adecuada al jugador." },
      { title: "Cuidado mental · lingüístico", body: "Gestión mental en el partido, además de la preparación lingüística y académica para las admisiones." },
    ],
  },
  roles: ["Director", "Director de la Academia", "Entrenador principal"],
  bios: [
    "Supervisa el desarrollo del tenis de élite y el diseño de las hojas de ruta de crecimiento individuales.",
    "Supervisa el desarrollo técnico y la gestión de partidos, el entrenamiento diario y el coaching en partido.",
    "Responsable del desarrollo general en el tenis, de la corrección de la ansiedad de competición y del diseño de rutinas durante el entrenamiento de partidos.",
  ],
};

const byLocale: Partial<Record<Locale, CoreSections>> = { zh, ja, it, fr, es };

/** enDict 의 About/코치/트레이닝/장학/컨설팅 섹션을 번역으로 덮어쓴다. */
export function buildCoreSections(en: {
  founding: { title: string; lead: string; paragraphs: string[] };
  developmentSteps: Array<{ n: string; en: string; ko: string }>;
  totalCare: Array<{ name: string; body: string }>;
  tracks: { source: { title: string; note: string }; a: { title: string; badge: string; body: string }; b: { title: string; badge: string; body: string }; quote: string };
  processSteps: Array<{ n: string; title: string; body: string }>;
  scholarship: { title: string; lead: string; points: Array<{ title: string; body: string }>; apply: string[] };
  consulting: { title: string; lead: string; services: Array<{ title: string; body: string }> };
  team: Array<{ name: string; role: string; dept: string; bio: string; image: string; achievements: string[] }>;
}) {
  const out: Partial<Record<Locale, Record<string, unknown>>> = {};
  for (const l of Object.keys(byLocale) as Locale[]) {
    const s = byLocale[l]!;
    out[l] = {
      founding: s.founding,
      teamLead: s.teamLead,
      developmentSteps: en.developmentSteps.map((d, i) => ({ ...d, ko: s.developmentDesc[i] ?? d.ko })),
      totalCare: en.totalCare.map((t, i) => ({ ...t, body: s.totalCareBodies[i] ?? t.body })),
      tracks: {
        source: { title: s.tracks.sourceTitle, note: s.tracks.sourceNote },
        a: { title: s.tracks.aTitle, badge: s.tracks.aBadge, body: s.tracks.aBody },
        b: { title: s.tracks.bTitle, badge: s.tracks.bBadge, body: s.tracks.bBody },
        quote: s.tracks.quote,
      },
      processSteps: en.processSteps.map((p, i) => ({ ...p, title: s.processSteps[i]?.title ?? p.title, body: s.processSteps[i]?.body ?? p.body })),
      scholarship: {
        title: s.scholarship.title,
        lead: s.scholarship.lead,
        points: en.scholarship.points.map((p, i) => ({ title: s.scholarship.points[i]?.title ?? p.title, body: s.scholarship.points[i]?.body ?? p.body })),
        apply: s.scholarship.apply,
      },
      consulting: {
        title: s.consulting.title,
        lead: s.consulting.lead,
        services: en.consulting.services.map((sv, i) => ({ title: s.consulting.services[i]?.title ?? sv.title, body: s.consulting.services[i]?.body ?? sv.body })),
      },
      team: en.team.map((member, i) => ({
        ...member,
        role: s.roles[i] ?? member.role,
        bio: s.bios[i] ?? member.bio,
      })),
    };
  }
  return out;
}
