export type Bi = {
  ko: string;
  en: string;
  zh?: string;
  ja?: string;
  it?: string;
  fr?: string;
  es?: string;
};

export type EduCoach = {
  no: string;
  title: Bi;
  desc: Bi;
  points: Bi[];
};

/** 교육 코치진 — "3 Coaches for 1 Student" 코칭 시스템(학업관리·생활관리·커리어) */
export const educationCoaches: EduCoach[] = [
  {
    no: "01",
    title: {
      ko: "학업관리코치",
      en: "Academic Coach",
      zh: "学业管理教练",
      ja: "学業管理コーチ",
      it: "Coach accademico",
      fr: "Coach académique",
      es: "Entrenador académico",
    },
    desc: {
      ko: "학생이 스스로 배우고 성과를 만들어낼 수 있는 자율적 학습 역량을 기르는 과정입니다.",
      en: "Builds the self-directed learning capacity for students to study and achieve on their own.",
      zh: "培养学生自主学习的能力，使其能够独立学习并取得成绩。",
      ja: "学生が自ら学び成果を上げられる、自律的な学習力を育てるプロセスです。",
      it: "Sviluppa la capacità di apprendimento autonomo che permette agli studenti di studiare e raggiungere risultati da soli.",
      fr: "Développe la capacité d'apprentissage autonome permettant aux élèves d'étudier et de réussir par eux-mêmes.",
      es: "Desarrolla la capacidad de aprendizaje autónomo para que los estudiantes estudien y logren resultados por sí mismos.",
    },
    points: [
      {
        ko: "시간 관리·목표 설정·학습 계획 수립, 시험 대비 및 문제 해결 전략 코칭",
        en: "Time management, goal setting, study planning, exam prep and problem-solving strategy",
        zh: "时间管理、目标设定、学习规划、考试准备及解题策略辅导",
        ja: "時間管理・目標設定・学習計画、試験対策と問題解決戦略のコーチング",
        it: "Gestione del tempo, definizione degli obiettivi, pianificazione dello studio, preparazione agli esami e strategie di problem solving",
        fr: "Gestion du temps, définition des objectifs, planification des études, préparation aux examens et stratégies de résolution de problèmes",
        es: "Gestión del tiempo, definición de objetivos, planificación del estudio, preparación de exámenes y estrategias de resolución de problemas",
      },
      {
        ko: "과목별 튜터링 및 학업 성취도 점검",
        en: "Subject-by-subject tutoring and academic progress checks",
        zh: "分科目辅导及学业成绩跟踪",
        ja: "科目別チュータリングと学業到達度のチェック",
        it: "Tutoraggio per singola materia e verifica dei progressi accademici",
        fr: "Tutorat par matière et suivi des progrès scolaires",
        es: "Tutoría por asignatura y seguimiento del progreso académico",
      },
      {
        ko: "대학 영어 역량 강화: 강의 이해를 위한 리딩 전략, 에세이·리서치 페이퍼 작성, 강의 노트 필기법, 토론 참여법 등 실전 영어 스킬",
        en: "College English: reading strategy, essay/research writing, note-taking and discussion skills",
        zh: "大学英语能力提升：阅读策略、论文及研究报告写作、课堂笔记、课堂讨论等实战英语技能",
        ja: "大学英語力の強化：リーディング戦略、エッセイ・リサーチペーパー作成、ノートの取り方、ディスカッション参加などの実践的英語スキル",
        it: "Inglese universitario: strategie di lettura, stesura di saggi e research paper, presa di appunti e abilità di discussione",
        fr: "Anglais universitaire : stratégies de lecture, rédaction d'essais et de travaux de recherche, prise de notes et participation aux discussions",
        es: "Inglés universitario: estrategias de lectura, redacción de ensayos y trabajos de investigación, toma de apuntes y habilidades de discusión",
      },
      {
        ko: "대학 학점 선수강 전 과정 지원: 미국 대학 수업 시스템 이해, 실라버스 분석, 교수와의 전문적 커뮤니케이션, 학점 관리 전략, Academic Integrity 지도",
        en: "US college credit prep: class system, syllabus analysis, professor communication, GPA strategy, Academic Integrity",
        zh: "大学学分先修全程支持：了解美国大学课程体系、课程大纲分析、与教授的专业沟通、GPA 管理策略、Academic Integrity 指导",
        ja: "大学単位の先行履修を全面サポート：米国大学の授業システムの理解、シラバス分析、教授との専門的コミュニケーション、GPA管理戦略、Academic Integrityの指導",
        it: "Preparazione ai crediti universitari USA: sistema dei corsi, analisi del syllabus, comunicazione con i professori, strategia GPA, Academic Integrity",
        fr: "Préparation aux crédits universitaires américains : système de cours, analyse du syllabus, communication avec les professeurs, stratégie de GPA, Academic Integrity",
        es: "Preparación de créditos universitarios en EE. UU.: sistema de clases, análisis del syllabus, comunicación con los profesores, estrategia de GPA, Academic Integrity",
      },
      {
        ko: "예술계열 전공 포트폴리오 준비 지원: 전공별 구성 방향, 작품 선택 및 스토리텔링, 대학·전공 요구사항에 맞춘 포트폴리오 전략",
        en: "Arts-major portfolio prep: structure, work selection, storytelling and program-specific strategy",
        zh: "艺术类专业作品集准备支持：各专业的构成方向、作品选择与故事叙述、契合大学及专业要求的作品集策略",
        ja: "芸術系専攻のポートフォリオ準備サポート：専攻別の構成方針、作品選択とストーリーテリング、大学・専攻の要件に合わせたポートフォリオ戦略",
        it: "Preparazione del portfolio per corsi artistici: struttura, selezione dei lavori, storytelling e strategia specifica per programma",
        fr: "Préparation du portfolio pour les filières artistiques : structure, sélection des œuvres, storytelling et stratégie adaptée au programme",
        es: "Preparación del portafolio para carreras artísticas: estructura, selección de obras, storytelling y estrategia específica para cada programa",
      },
    ],
  },
  {
    no: "02",
    title: {
      ko: "생활관리코치",
      en: "Life Coach",
      zh: "生活管理教练",
      ja: "生活管理コーチ",
      it: "Life coach",
      fr: "Coach de vie",
      es: "Entrenador de vida",
    },
    desc: {
      ko: "글로벌 생활 적응과 전인적 성장을 위한 자기관리·리더십·독립성을 기르는 과정입니다.",
      en: "Develops self-management, leadership and independence for adapting to global life and whole-person growth.",
      zh: "培养自我管理、领导力与独立性，帮助学生适应全球化生活并实现全人成长。",
      ja: "グローバルな生活への適応と全人的成長のため、自己管理・リーダーシップ・自立心を育てるプロセスです。",
      it: "Sviluppa autogestione, leadership e indipendenza per adattarsi alla vita globale e favorire la crescita della persona nel suo insieme.",
      fr: "Développe l'autogestion, le leadership et l'autonomie pour s'adapter à la vie internationale et favoriser l'épanouissement global.",
      es: "Desarrolla la autogestión, el liderazgo y la independencia para adaptarse a la vida global y lograr un crecimiento integral.",
    },
    points: [
      {
        ko: "생활 적응 코칭: 교통, 은행, 통신, 예절, 의사소통",
        en: "Daily-life adaptation: transit, banking, telecom, etiquette, communication",
        zh: "生活适应辅导：交通、银行、通信、礼仪、沟通",
        ja: "生活適応コーチング：交通、銀行、通信、マナー、コミュニケーション",
        it: "Adattamento alla vita quotidiana: trasporti, banca, telecomunicazioni, galateo, comunicazione",
        fr: "Adaptation à la vie quotidienne : transports, banque, télécommunications, savoir-vivre, communication",
        es: "Adaptación a la vida diaria: transporte, banca, telecomunicaciones, etiqueta, comunicación",
      },
      {
        ko: "정서·스트레스 관리, 감정조절 훈련",
        en: "Emotional and stress management, self-regulation",
        zh: "情绪与压力管理、情绪调节训练",
        ja: "情緒・ストレス管理、感情コントロールのトレーニング",
        it: "Gestione delle emozioni e dello stress, autoregolazione",
        fr: "Gestion des émotions et du stress, autorégulation",
        es: "Gestión emocional y del estrés, autorregulación",
      },
      {
        ko: "자기주도적 생활 습관 형성 (시간표 관리, 건강 관리)",
        en: "Self-directed routines (scheduling, health)",
        zh: "养成自主生活习惯（时间安排、健康管理）",
        ja: "自己主導的な生活習慣づくり（スケジュール管理、健康管理）",
        it: "Routine autogestite (pianificazione, salute)",
        fr: "Routines autonomes (organisation du temps, santé)",
        es: "Rutinas autogestionadas (organización del tiempo, salud)",
      },
      {
        ko: "문화 적응 및 글로벌 매너 교육",
        en: "Cultural adaptation and global manners",
        zh: "文化适应及全球礼仪教育",
        ja: "文化適応とグローバルマナーの教育",
        it: "Adattamento culturale ed educazione alle buone maniere globali",
        fr: "Adaptation culturelle et apprentissage des bonnes manières internationales",
        es: "Adaptación cultural y educación en buenos modales globales",
      },
      {
        ko: "리더십·책임감·협업 능력 개발",
        en: "Leadership, responsibility and collaboration",
        zh: "领导力、责任感与协作能力培养",
        ja: "リーダーシップ・責任感・協働力の育成",
        it: "Sviluppo di leadership, responsabilità e collaborazione",
        fr: "Développement du leadership, du sens des responsabilités et de la collaboration",
        es: "Desarrollo del liderazgo, la responsabilidad y la colaboración",
      },
      {
        ko: "학교 및 지역사회 활동 참여 (봉사·프로젝트)",
        en: "School and community engagement (service, projects)",
        zh: "参与学校及社区活动（志愿服务、项目）",
        ja: "学校および地域社会の活動への参加（ボランティア・プロジェクト）",
        it: "Partecipazione alla scuola e alla comunità (volontariato, progetti)",
        fr: "Engagement scolaire et communautaire (bénévolat, projets)",
        es: "Participación escolar y comunitaria (voluntariado, proyectos)",
      },
      {
        ko: "Character Development 인턴십과 연계",
        en: "Linked with Character Development internships",
        zh: "与 Character Development 实习相衔接",
        ja: "Character Developmentのインターンシップと連携",
        it: "In collegamento con i tirocini Character Development",
        fr: "En lien avec les stages Character Development",
        es: "Vinculado con las prácticas de Character Development",
      },
    ],
  },
  {
    no: "03",
    title: {
      ko: "커리어코치",
      en: "Career Coach",
      zh: "职业规划教练",
      ja: "キャリアコーチ",
      it: "Career coach",
      fr: "Coach de carrière",
      es: "Entrenador de carrera",
    },
    desc: {
      ko: "학생의 강점과 관심을 기반으로 전공 선택·진로 탐색·경력 설계를 돕는 과정입니다.",
      en: "Helps choose a major, explore paths and design a career from each student's strengths and interests.",
      zh: "基于学生的优势与兴趣，帮助其选择专业、探索方向并规划职业生涯。",
      ja: "学生の強みと関心をもとに、専攻選択・進路探索・キャリア設計を支援するプロセスです。",
      it: "Aiuta a scegliere il corso di studi, esplorare i percorsi e progettare una carriera a partire dai punti di forza e dagli interessi di ogni studente.",
      fr: "Aide à choisir une spécialité, à explorer les parcours et à concevoir une carrière à partir des atouts et des centres d'intérêt de chaque élève.",
      es: "Ayuda a elegir una especialidad, explorar trayectorias y diseñar una carrera a partir de las fortalezas e intereses de cada estudiante.",
    },
    points: [
      {
        ko: "전공/성향 진단 및 강점 분석",
        en: "Major/aptitude assessment and strengths analysis",
        zh: "专业/性向测评及优势分析",
        ja: "専攻・適性診断と強みの分析",
        it: "Valutazione del corso di studi/attitudini e analisi dei punti di forza",
        fr: "Évaluation de la spécialité/des aptitudes et analyse des points forts",
        es: "Evaluación de especialidad/aptitudes y análisis de fortalezas",
      },
      {
        ko: "진로 로드맵 설계 (4-year / transfer / career pathway)",
        en: "Career roadmap (4-year / transfer / career pathway)",
        zh: "职业路线图设计（4-year / transfer / career pathway）",
        ja: "キャリアロードマップの設計（4-year / transfer / career pathway）",
        it: "Roadmap di carriera (4-year / transfer / career pathway)",
        fr: "Feuille de route de carrière (4-year / transfer / career pathway)",
        es: "Hoja de ruta profesional (4-year / transfer / career pathway)",
      },
      {
        ko: "전문가 멘토 네트워킹 (의사, 변호사, 엔지니어, 작가 등)",
        en: "Expert mentor networking (doctors, lawyers, engineers, writers, etc.)",
        zh: "专家导师人脉对接（医生、律师、工程师、作家等）",
        ja: "専門家メンターとのネットワーキング（医師、弁護士、エンジニア、作家など）",
        it: "Networking con mentori esperti (medici, avvocati, ingegneri, scrittori, ecc.)",
        fr: "Mise en relation avec des mentors experts (médecins, avocats, ingénieurs, écrivains, etc.)",
        es: "Networking con mentores expertos (médicos, abogados, ingenieros, escritores, etc.)",
      },
      {
        ko: "실전 대비: 이력서, 인터뷰, 포트폴리오 코칭",
        en: "Practical prep: résumé, interview and portfolio coaching",
        zh: "实战准备：简历、面试、作品集辅导",
        ja: "実践対策：履歴書、面接、ポートフォリオのコーチング",
        it: "Preparazione pratica: coaching su CV, colloqui e portfolio",
        fr: "Préparation pratique : coaching sur le CV, les entretiens et le portfolio",
        es: "Preparación práctica: coaching de currículum, entrevistas y portafolio",
      },
      {
        ko: "인턴십 매칭",
        en: "Internship matching",
        zh: "实习匹配",
        ja: "インターンシップのマッチング",
        it: "Abbinamento di tirocini",
        fr: "Mise en relation pour les stages",
        es: "Emparejamiento de prácticas",
      },
    ],
  },
];
