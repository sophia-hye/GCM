/**
 * GCM 아카데미 사이트 콘텐츠 데이터
 * 출처: eqüre 피치덱 + 동탄 PDF + COV ELITE 전략 보고서 + summit-23 벤치마크
 * 실데이터(선수/수치)는 추후 확보 시 교체.
 */

export const site = {
  name: "GCM",
  fullName: "GCM 아카데미",
  tagline: "미국 대학 테니스 진학 & 프리미엄 매니지먼트",
  rep: "오성국",
  partner: "COV Spotainment",
  email: "contact@gcm-academy.kr",
  instagram: "https://instagram.com/covspo",
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Premium", href: "#premium" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Career", href: "#career" },
  { label: "Players", href: "#players" },
  { label: "Schedule", href: "#schedule" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroSlides = [
  {
    eyebrow: "NCAA D1 · PROFESSIONAL · SPORTS INDUSTRY",
    headline: "YOUR PATH TO\nCOLLEGE TENNIS\nIN THE USA",
    sub: "데이터로 설계하고 멘탈로 지켜내는, 미국 대학 테니스의 완벽한 길.",
  },
  {
    eyebrow: "COV ELITE · PREMIUM MANAGEMENT",
    headline: "ONE TEAM\nFOR YOUR\nGLOBAL LEAP",
    sub: "GCM과 COV가 한 팀으로, 선수별 글로벌 전략을 설계합니다.",
  },
  {
    eyebrow: "DATA-DRIVEN ROADMAP",
    headline: "FROM UTR\nTO THE\nWORLD STAGE",
    sub: "UTR 로드맵과 ROI 전략으로, 비용이 아닌 투자를 증명합니다.",
  },
] as const;

export const stats = [
  { value: "+1.5", label: "평균 UTR 상승", suffix: "" },
  { value: "12", label: "제휴/진학 대학", suffix: "+" },
  { value: "180", label: "일의 기적(초기 성과)", suffix: "일" },
  { value: "2", label: "진로 트랙 안전망", suffix: "Track" },
];

export const whyNow = {
  title: "왜 지금 미국인가",
  lead: "국내 한 길만으로는 부족합니다. 전략적 경로 전환이 기대가치를 바꿉니다.",
  points: [
    {
      title: "국내 환경의 제약",
      body: "한정된 출전 기회와 좁은 진로 선택지. 한 번의 부진이 곧 진로 단절로 이어지는 구조.",
    },
    {
      title: "전략적 경로 전환",
      body: "미국 대학(NCAA)은 학업과 운동을 병행하며 글로벌 경력을 쌓는 검증된 경로입니다.",
    },
    {
      title: "압도적 기대 가치",
      body: "장학금, 학위, 글로벌 네트워크, 그리고 프로/산업 양면의 미래를 동시에 확보합니다.",
    },
  ],
};

export const utrRoadmap = {
  title: "UTR 로드맵과 성장 목표",
  milestones: [
    { stage: "현재 (Current)", utr: "10.5", note: "출발점 진단" },
    { stage: "D1 편입 목표 (Year 2)", utr: "11.5~12.0", note: "Division 1 편입권", highlight: true },
    { stage: "프로/실업 목표 (Year 4)", utr: "13.0+", note: "프로/실업 안정권" },
  ],
  checkpoints: [
    { title: "피지컬 & 멘탈", body: "미국 선수와의 체격차 극복 특화 웨이트, 압박 상황 멘탈 루틴" },
    { title: "학업 & 어학 (D1 필수)", body: "NCAA Clearinghouse 통과 학점 유지(GPA 2.5+), 팀 소통 영어" },
    { title: "데이터 & 영상 포트폴리오", body: "매치업 하이라이트 영상 분기별 업데이트, D1 코치진 지속 컨택" },
  ],
  curve: [
    { x: "현재", y: 10.5 },
    { x: "CC 입학", y: 11.0 },
    { x: "CC 적응", y: 11.3 },
    { x: "D1 편입", y: 11.8 },
    { x: "D1 리그", y: 12.4 },
    { x: "졸업/프로", y: 13.2 },
  ],
};

export const roiRows = [
  { utr: "12.5 ~ 13.2", position: "실업팀 즉시 전력감", salary: "5,000만 원", signing: "3,000만 원" },
  { utr: "13.5 ~ 14.2", position: "팀 내 핵심 에이스", salary: "6,000~8,000만 원", signing: "6,000만 원" },
  { utr: "14.5 +", position: "국가대표급 선수", salary: "1억 원 이상", signing: "1억 원 이상", highlight: true },
];

export const curriculum = [
  { key: "FOUNDATION", title: "기본기", points: ["테니스 기본기", "풋워크", "체력훈련"] },
  { key: "DEVELOPMENT", title: "발전", points: ["게임 적응 능력", "스텝 능력 향상", "다양한 게임 경험"] },
  { key: "JUNIOR ELITE", title: "실전", points: ["국내/국제 대회 출전", "실전 경험", "문제점 보완"] },
  { key: "PROFESSIONAL", title: "프로", points: ["투어 스케줄 관리", "대회 동행(옵션)", "대회 후 보완"] },
];

export const skills = [
  { name: "포핸드", day: "MON", items: ["Basic", "Point", "문제점 인지 & 보완", "Focus"] },
  { name: "백핸드", day: "WED", items: ["Basic", "Point", "문제점 인지 & 보완", "Focus"] },
  { name: "발리", day: "SAT", items: ["Basic", "Point", "다양한 공 대처", "포징 연습"] },
  { name: "서브", day: "SUN", items: ["Basic", "Point", "문제점 인지 & 보완", "몸의 밸런스"] },
];

export const totalCare = [
  { name: "Technical", body: "오성국 코치진의 엘리트 집중 코칭, 비디오 분석, 피지컬 트레이닝 및 체계적 리커버리." },
  { name: "Academic", body: "미국 대학 필수 학점 관리, 영어 커뮤니케이션 밀착 지도, D1 편입 타임라인 및 에세이 지원." },
  { name: "Mental", body: "퍼포먼스 향상 스포츠 심리 상담, 경기 중 압박 극복 루틴 구축, 멘탈 회복 트레이닝." },
  { name: "Global Manner", body: "국제 무대 소통을 위한 프로 에티켓, 영어 미디어 인터뷰 실전 훈련, 글로벌 리더십 배양." },
  { name: "Operations", body: "토너먼트 원정 및 체류 일정 조율, 퍼포먼스 데이터 통합 대시보드 운영." },
];

export const tracks = {
  source: { title: "미국 대학 진학", note: "NCAA D1 / 전액 장학금" },
  a: {
    title: "Track A. 프로 테니스 선수",
    badge: "Primary Goal",
    body: "대학 리그 제패 후 글로벌 투어 데뷔 또는 국내 최고 대우 실업팀 입단. 안정적이고 높은 수익 창출 보장.",
  },
  b: {
    title: "Track B. 스포츠 산업 리더",
    badge: "Safety Net",
    body: "부상·진로 변경 시 전공 전환 & 인턴십(장학 유지)으로 Sports Mgmt & Ent. 커리어로 연결.",
  },
  quote: "어느 길을 가더라도 최정상을 보장합니다.",
};

export const processSteps = [
  { n: "01", title: "Assessment", body: "UTR/ITF 기록·학업 평가로 현재 위치 진단" },
  { n: "02", title: "Application", body: "타깃 대학 선정, NCAA 등록, 하이라이트 영상 제작" },
  { n: "03", title: "Scholarship", body: "코치 컨택, 오퍼·장학금 조건 협상" },
  { n: "04", title: "Visa & Enroll", body: "학생비자(F-1) 및 입학 수속" },
  { n: "05", title: "Monitoring", body: "학업·경기 성적 및 적응 모니터링" },
  { n: "06", title: "Future Planning", body: "프로 전향/대학원/취업 등 졸업 후 로드맵" },
];

export const players = [
  { name: "윤하건", track: "professional", grad: "2026", utr: "13.2", result: "프로 투어 데뷔" },
  { name: "Player A", track: "college", grad: "2027", utr: "12.1", result: "NCAA D1 진학" },
  { name: "Player B", track: "college", grad: "2027", utr: "11.8", result: "D1 편입 준비" },
  { name: "Player C", track: "professional", grad: "2028", utr: "11.5", result: "실업팀 트라이아웃" },
];

export const partners = [
  "NCAA",
  "ITF",
  "UTR",
  "Babolat",
  "Wilson",
  "COV Spotainment",
];

export const schedule = [
  { date: "2026.07", title: "여름 엘리트 캠프", place: "동탄 코트", target: "주니어 / 엘리트" },
  { date: "2026.08", title: "UTR 쇼케이스", place: "서울", target: "D1 지망생" },
  { date: "2026.09", title: "해외 토너먼트 동행", place: "USA", target: "프로 트랙" },
];

export const testimonials = [
  {
    quote: "성적표 너머의 멘탈까지 관리해주는 곳은 처음이었습니다. 아이가 다시 코트를 즐깁니다.",
    author: "학부모 K",
  },
  {
    quote: "UTR 로드맵 덕분에 막연했던 미국 진학이 구체적인 목표가 됐어요.",
    author: "선수 J",
  },
  {
    quote: "프로와 산업, 두 갈래의 미래를 함께 준비한다는 점이 가장 든든합니다.",
    author: "학부모 L",
  },
];

export const faqContact = {
  title: "ARE YOU READY TO GO PRO & GROW?",
  sub: "GCM과 COV가 한 팀으로, 180일의 기적을 증명합니다.",
};
