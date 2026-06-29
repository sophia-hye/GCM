/**
 * GCM 아카데미 사이트 콘텐츠 데이터
 * GCM Tennis Academy — 고성능 테니스 트레이닝 중심 콘텐츠
 * 실데이터(선수/수치)는 추후 확보 시 교체.
 */

export const site = {
  name: "GCM",
  fullName: "GCM Tennis Academy",
  tagline: "고성능 테니스 아카데미",
  rep: "오성국",
  email: "tennis.gcm@gmail.com",
  phone: "010-0000-0000",
  address: "경기 화성시 동탄",
  hours: "평일 09:00–19:00 · 주말 09:00–17:00",
  kakao: "", // 카카오톡 채널 채팅 URL (예: http://pf.kakao.com/_xxxx/chat) — 추후 입력
  instagram: "https://www.instagram.com/gcm_tennis/",
  foundedYear: "2023",
  foundedDate: "2023.01.02",
} as const;

export const nav = [
  { label: "About", href: "/about" },
  { label: "Coaches", href: "/coaches" },
  { label: "Players", href: "/players" },
  { label: "Gallery", href: "/gallery" },
  { label: "Training", href: "/training" },
  { label: "Kids & Amateur", href: "/recreational" },
  { label: "Consulting", href: "/consulting" },
  { label: "Scholarship", href: "/scholarship" },
] as const;

// 홈에서 각 메뉴(탭)에 어떤 내용이 있는지 미리 보여주는 안내 카드
export const siteGuideLead =
  "선수의 성장 단계에 맞춰 GCM의 코칭, 프로그램, 진학, 글로벌 커리어 여정을 한눈에 확인하세요.";

export const siteGuide = [
  {
    no: "01",
    label: "About",
    href: "/about",
    title: "GCM 소개",
    desc: "설립 배경과 철학, 한 선수를 여러 전문가가 함께 책임지는 통합 퍼포먼스 모델.",
    items: ["설립 배경 · 비전", "통합 퍼포먼스 모델", "우리가 믿는 것"],
  },
  {
    no: "02",
    label: "Coaches",
    href: "/coaches",
    title: "코치진 소개",
    desc: "대표 오성국과 헤드 · 멘탈 코치진의 약력과 지도 철학.",
    items: ["대표 · 원장 오성국", "헤드 코치 · 기술/피지컬", "코치 · 기술/멘탈"],
  },
  {
    no: "03",
    label: "Players",
    href: "/players",
    title: "배출 · 소속 선수",
    desc: "프로가 되기 전부터 함께 성장하는 GCM 선수들의 이야기. (준비 중)",
    items: ["선수 스토리", "성장 기록", "곧 공개 예정"],
  },
  {
    no: "04",
    label: "Gallery",
    href: "/gallery",
    title: "갤러리",
    desc: "트레이닝과 대회 현장을 사진으로. 아카데미의 생생한 순간들.",
    items: ["훈련 현장", "대회 · 이벤트", "아카데미 소식"],
  },
  {
    no: "05",
    label: "Training",
    href: "/training",
    title: "트레이닝 시스템",
    desc: "이탈리아 · 미국 · 상하이 등 국경을 넘는 네트워크 위에서, 기술 · 피지컬 · 멘탈을 통합한 6단계 발달 시스템.",
    items: ["6단계 발달 시스템", "Total Care System", "프로 · 대학 두 갈래 진로"],
  },
  {
    no: "06",
    label: "Kids & Amateur",
    href: "/recreational",
    title: "키즈 · 아마추어 클럽",
    desc: "선수반이 아니어도 즐기며 배우는 키즈 · 성인 취미 클래스.",
    items: ["키즈 클래스 (5–13세)", "성인 아마추어 클래스", "기본기 · 전술 · 게임"],
  },
  {
    no: "07",
    label: "Consulting",
    href: "/consulting",
    title: "진로 · 진학 컨설팅",
    desc: "데이터 기반 진로 설계와 진학 컨설팅. 선수의 다음 단계를 함께 그립니다.",
    items: ["UTR · 실적 진단", "프로 / 대학 로드맵", "멘탈 · 어학 케어"],
  },
  {
    no: "08",
    label: "Scholarship",
    href: "/scholarship",
    title: "장학 제도",
    desc: "매년 제한된 인원의 전액 · 부분 장학. 태도와 투지를 갖춘 선수를 선발합니다.",
    items: ["선발 대상 · 기준", "선발 후 성장 관리", "신청 방법"],
  },
] as const;

export const founding = {
  title: "GCM 설립 배경",
  lead: "선수의 성장과 진로를 끝까지 책임지는 아카데미를 만들기 위해 GCM은 시작됐습니다.",
  paragraphs: [
    "좋은 선수는 우연히 만들어지지 않습니다. 재능 있는 선수도 성장 경로가 없으면 정체됩니다.\nGCM은 선수의 현재 위치를 진단하고, 목표에 맞는 훈련과 대회, 멘탈 루틴, 진로 계획을 하나로 연결합니다.\n우리는 선수를 단기 성과가 아니라 다음 단계로 이동시키는 과정으로 봅니다.",
    "엘리트 테니스의 길은 재능만으로 완성되지 않습니다.\n체계적인 훈련, 데이터에 근거한 진로 설계, 그리고 흔들릴 때 잡아주는 멘탈 케어가 함께해야 합니다.",
    "GCM(Global Champions Makers)은 한 선수를 여러 전문가가 함께 책임지는 통합 퍼포먼스 모델로, 주니어부터 프로·대학 진학까지 이어지는 길을 설계합니다.",
    "우리는 결과를 운에 맡기지 않습니다.\n구조화된 과정이 결과를 만든다고 믿습니다.",
  ],
};

export const directorMessage = {
  eyebrow: "Director's Message",
  title: "대표 원장 인사말",
  image: "/coaches/ohseonggook/IMG_4332.JPG",
  signature: "GCM 아카데미 대표 원장 오성국 올림",
  before: [
    "안녕하세요. GCM 아카데미 대표 원장 오성국입니다. 저희 GCM 아카데미를 찾아주신 학부모님과 선수 여러분께 마음 깊이 감사드립니다.",
    "과거 저희 부모님께서는 자녀의 무한한 가능성을 믿고, 국제 프로무대라는 더 큰 무대에서 활약할 수 있도록 과감한 결단을 내려주셨습니다. 정형화된 틀을 벗어나 오직 테니스 실력 향상과 전인적 성장에 온전히 집중할 수 있게 중학교 시절 학교를 그만두고 ‘아카데미’ 그리고 ‘국제대회 출전’이라는 환경을 선택해 주신 것입니다. 자녀의 미래를 위해 모든 것을 헌신하셨던 부모님의 그 깊은 사랑과 용기가 있었기에, 지금의 제가 이 자리에 교육자로서 설 수 있었습니다.",
    "그렇기에 저는 자녀에게 더 넓은 세상, 더 안전한 기회를 열어주고 싶어 하시는 학부모님들의 그 간절한 마음과 때로는 그 뒤에 숨은 불안감까지도 누구보다 깊이 이해하고 공감합니다.",
    "테니스는 단순한 스포츠를 넘어, 인생을 살아가는 데 가장 강력한 자양분이 되어주는 위대한 교육입니다. 목표가 뚜렷한 선수 공동체 안에서 아이들은 한계를 뛰어넘는 특별한 지구력, 투지, 승패 앞에서도 흔들리지 않는 단단한 프로의식과 멘탈 관리, 그리고 스스로를 다스리는 절제력과 좋은 태도를 배웁니다. 코트 위에서 흘린 정직한 땀방울은 아이들의 내면을 바르게 세우는 전인격적 교육의 밑거름이 됩니다.",
    "또한, 테니스는 전 세계 어디서나 통하는 가장 거대하고 품격 있는 ‘글로벌 인맥 형성의 장’입니다. 처음에는 각기 다른 목표와 기대를 가지고 라켓을 잡았을지라도, 이곳에서는 모두가 하나가 됩니다. 라켓 하나만으로 세대와 국경을 초월해 깊은 유대감과 기쁨을 나눌 수 있기 때문입니다.",
    "우리 GCM 아카데미 안에서는 현역 프로 선수들과 GCM 동호인 분들이 교류전을 통해 서로를 뜨겁게 격려하고 응원합니다. 이 아름다운 동행 속에서 아이들은 소속감이라는 끈끈한 가치를 배우고, 타인을 배려하는 이타심과 선한 영향력을 체득하며 자연스럽게 품격 있는 ‘글로벌 매너’를 갖춘 리더로 성장합니다. 나아가 청소년기의 특기를 넘어, 노년의 시니어 시기까지 삶을 풍요롭게 채워줄 평생의 반려 스포츠를 얻게 되는 것입니다.",
  ],
  quote:
    "하나의 가능성, 하나의 결과만으로 아이의 미래가 결정되는 것이 아니기에, 배움이 아이들에게 압박이나 스트레스가 되지 않도록 조율합니다.",
  after: [
    "많은 부모님께서 진로에 대한 불분명한 불안감 때문에 아이를 다그치게 되고, 그로 인해 가장 소중해야 할 가족 관계에 거리가 생기곤 합니다.",
    "저희 GCM 아카데미는 그 무거운 불안감을 부모님과 아이의 어깨에서 내려놓고자 합니다. 입시에 대한 전략, 미래에 대한 고된 고민과 코칭은 저희 교육자들과 전문가들이 대신 짊어지겠습니다. 부모님께서는 가정에서 오직 따뜻한 사랑과 무조건적인 응원만을 보내주십시오. 아이가 부모님의 사랑을 온전히 느끼며, 오히려 그 사랑에 보답하고자 하는 마음으로 스스로 책임감을 갖고 코트 위에 설 수 있도록 돕는 것, 그것이 저희가 지향하는 진정한 교육입니다.",
    "이를 위해 GCM과 함께하는 교육자분들은 북미권에서 수십 년간 입학사정관으로 활약하신 최고의 베테랑들입니다. 저희는 아이들의 테니스 코칭뿐만 아니라 전인격적인 멘토링을 면밀히 병행합니다. 아이가 끝까지 프로 선수의 길을 걷든, 혹은 테니스를 값진 자산으로 남겨두고 새로운 진로를 선택하게 되어도 좋습니다. 그 어떤 순간에도 아이들이 여유와 편안함을 잃지 않도록 최선의 대안과 로드맵을 제시할 것입니다.",
    "예상치 못한 부상이나 갑자기 진로를 전환하는 그 어떤 선택의 기로에서도, 저희의 든든한 파트너이자 미국 전문 멘토링 및 입시 전문 교육기관인 ‘이큐어(equre.us)’가 함께합니다. 장학금을 받고 북미 명문대로 안전하게 진학할 수 있도록 Plan A부터 B, C, D, E까지 다양한 경우의 수를 세심하게 준비해 두었습니다. 아이들이 어떤 길을 걷더라도 주저앉지 않고 꿈을 펼칠 수 있도록, 견고한 지지대가 되어줄 것입니다.",
    "또한 프로로서 가능성이 있는 선수들은 국제무대에서 활약할 수 있는 길을 열어주고, 거기에 맞는 훈련·멘토링·투어 스케줄 관리는 물론 투어비 장학 지원 제도까지 갖추어 ATP·WTA에서 활약하는 선수로 성장할 수 있도록 최선을 다하겠습니다.",
    "자녀를 향한 학부모님의 헌신이 최고의 결실로 이어질 수 있도록, 부모의 마음과 교육자의 사명감으로 함께하겠습니다. GCM 아카데미가 제안하는 안전하고 넓은 로드맵 위에서, 우리 아이들이 전 세계를 무대로 당당히 활약할 기회는 이제 GCM 한국, 이탈리아, 상해 등 글로벌 네트워크를 통해 세계로 활짝 열려 있습니다.",
    "가족은 가족답게 서로 사랑하고, 미래는 전문가와 함께 편안하게 준비해 나가십시오. 가장 신뢰할 수 있는 교육 파트너로서 늘 곁에서 든든하게 동행하겠습니다. 감사합니다.",
  ],
};

export const recreational = {
  lead: "선수반이 아니어도 괜찮습니다. 즐기며 배우는 키즈·성인 취미 클래스를 운영합니다.",
  classes: [
    {
      key: "KIDS",
      title: "키즈 클래스",
      age: "5–13세",
      desc: "놀이처럼 배우는 첫 테니스. 운동 능력과 코트 적응, 기본기를 즐겁게.",
      points: ["연령별 소그룹 지도", "기본기 · 풋워크 · 협응력", "재미 중심 동기 부여"],
    },
    {
      key: "ADULT",
      title: "성인 아마추어 클래스",
      age: "성인 입문~중급",
      desc: "취미로 시작해 제대로 즐기는 테니스. 입문부터 전술·게임 운영까지.",
      points: ["기본기반 · 전술반 클래스", "스트로크 · 발리 · 서브", "전술 · 게임 운영", "동호인 게임 · 매너"],
    },
  ],
};

export const consulting = {
  title: "GCM Consulting",
  lead: "데이터 기반 진로 설계와 진학 컨설팅. 선수의 다음 단계를 함께 그립니다.",
  services: [
    { title: "진학 컨설팅", body: "UTR/실적 진단, 타깃 대학·팀 선정, 하이라이트 영상과 코치 컨택까지." },
    { title: "진로 설계", body: "프로 트랙과 대학 트랙을 비교해 선수에게 맞는 장기 로드맵을 설계합니다." },
    { title: "멘탈 · 어학 케어", body: "경기 멘탈 관리와 진학에 필요한 어학·학업 준비를 함께 지원합니다." },
  ],
};

export const teamLead =
  "기술 · 멘탈 · 진학을 하나로 잇는 통합 퍼포먼스 팀. 한 명의 선수를 여러 전문가가 함께 책임집니다.";

export const team = [
  {
    name: "오성국",
    role: "대표 · 원장",
    bio: "엘리트 테니스 육성과 선수별 성장 로드맵 설계를 총괄합니다.",
    image: "/coaches/ohseonggook/IMG_2963.JPG",
    achievements: [
      "現 GCM 아카데미 대표 원장",
      "前 주니어 국가대표 코치",
      "Top 20위 주니어 선수 3명 지도",
      "GPTCA Level B.",
      "ATP 단식 최고랭킹 600위대",
      "2012 인도 국제 퓨처스 복식 3위",
      "2013 이집트 국제 퓨처스 복식 3위",
      "2013 이집트 국제 퓨처스 복식 우승",
      "2014 김천 국제 퓨처스 복식 준우승",
      "2014 춘천오픈 혼합복식 3위",
      "2015 실업연맹회장기 혼합복식 우승",
      "2015 안성 국제 퓨처스 복식 3위",
      "2015 실업테니스마스터즈 복식 준우승",
      "2017 김천 국제 퓨처스 복식 3위",
      "2017 안성 국제 퓨처스 단식 3위",
      "2017 영월오픈 단식 준우승",
      "2017 인도 국제 퓨처스 단식 3위",
      "2017 실업테니스마스터즈 복식 준우승",
      "2018 김천 국제 퓨처스 단식 우승",
      "2018 안성 국제 퓨처스 단식 3위",
      "2019 대구 국제 퓨처스 단식 3위",
      "2019 실업연맹 1차 단체 준우승",
      "2019 실업연맹 2차 단체 우승",
      "2019 춘천오픈 복식 3위",
      "2024 실업연맹 단체 3위",
      "2024 실업연맹 복식 우승",
      "제97회 전국체육대회 은메달",
      "제100회 전국체육대회 은메달",
      "제105회 전국체육대회 동메달",
    ],
  },
  {
    name: "윤재원",
    role: "헤드 코치 · 기술 · 피지컬",
    bio: "기술 발달과 경기 운영 전반을 이끄는 헤드 코치. 일일 트레이닝과 매치 코칭을 총괄합니다.",
    image: "",
    achievements: [
      "前 고양시청 테니스 선수",
      "前 국군체육부대 테니스 선수",
      "前 당진시청 테니스 선수",
      "국내 주니어 랭킹 단식 2위 · 복식 1위 졸업",
      "2003-2006 소년체육대회 4연패",
      "2004 교보생명 단식 · 단체 1위 최우수선수상",
      "2004 나이키 세계주니어 대표선발 1위",
      "2004 나이키 세계주니어 대표선수대회 단식 2위 (프랑스)",
      "2005 한 · 중 · 일 선수권대회 국가대표",
      "2006 14세 월드주니어 국가대항전 국가대표",
      "2008 한 · 중 · 일 선수권대회 국가대표",
      "2012 홍콩 국제남자 퓨처스 복식 3위",
      "2012 중국 선양 국제남자 퓨처스 복식 3위",
      "2014 김천 국제남자 퓨처스 복식 2위",
      "2015 이집트 국제남자 퓨처스 복식 우승",
    ],
  },
  {
    name: "김주빈",
    role: "코치 · 기술 · 멘탈",
    bio: "테니스의 전반적 발달과 경기 훈련 시 불안심리 교정 및 루틴 설계를 담당합니다.",
    image: "",
    achievements: [
      "성남시청 실업팀 선수",
      "前 제이원 테니스 아카데미 코치",
      "2013 제42회 소년체전 은메달",
      "2018 양구 ITF 주니어 복식 4강",
      "2019 네팔 ITF 주니어 단식 4강",
      "2020 실업연맹 단체전 3위",
    ],
  },
] as const;

export const teamProcess = [
  { step: "Train", body: "스트로크 발전 · 게임 정체성 · 장기 성장 설계" },
  { step: "Prepare", body: "멘탈 루틴 · 훈련량에 맞춘 경기 준비" },
  { step: "Compete", body: "매치 플랜 · 전술 지원 · 압박 관리" },
  { step: "Recover", body: "피지컬 · 회복 프로토콜 · 영양" },
] as const;

export const scholarship = {
  title: "전액 · 부분 장학 신청",
  lead: "매년 제한된 인원의 장학 자리를 운영합니다. 태도 · 투지 · 인성을 갖춘 선수를 선발합니다.",
  points: [
    {
      title: "대상",
      body: "ATP · WTA를 목표로 하는 주니어 선수.",
    },
    {
      title: "선발 기준",
      body: "태도 · 경기력 · ITF/국내 랭킹 · 최근 경기 결과 · 코칭 수용성을 종합 평가.",
    },
    {
      title: "선발 후 과정",
      body: "발달 단계 · 국내 랭킹 · ITF 주니어 랭킹 · 프로 랭킹을 관리하며 성장합니다.",
    },
  ],
  apply: [
    "기본 정보 (이름 · 연락처 · 생년 · 국적)",
    "테니스 프로필 (ITF 랭킹 · 국내 랭킹 · 최근 성적 결과)",
    "신체 정보 (키 · 체중 · 주손 · 백핸드 타입)",
    "목표 (강점 · 보완점 · 단기/중기 목표)",
  ],
} as const;

export const programsLead =
  "전세계 테니스 1위 국가인 이탈리아를 비롯해 미국, 상하이 등 국경을 넘어, 선수의 단계와 목표에 맞춘 세 갈래의 트랙. 당신의 지금에서 시작합니다.";

export const programs = [
  {
    no: "01",
    key: "KIDS",
    target: "테니스 시작 단계 · U6–U10",
    duration: "기초 · 인성 발달 단계",
    desc: "처음 라켓을 잡는 단계. 협동력과 리더십, 인성과 팀워크를 중심으로 즐거움과 재미를 느낄 수 있게 시작합니다.",
    points: [
      "협동력 · 팀워크 중심 그룹 훈련",
      "리더십 · 인성 교육",
      "기본기 · 코트 적응",
    ],
  },
  {
    no: "02",
    key: "JUNIOR",
    target: "주니어 엘리트 · U10–U18",
    duration: "장기 발전 경로",
    desc: "기본기부터 국제 대회까지, 엘리트 선수로 가는 장기 성장 로드맵.",
    points: [
      "U10–12: 기본기 · 운동 능력 · 협응력 훈련",
      "U14: 트레이닝 경쟁 습관 · 기술 정제",
      "U18: 국내외 진학 또는 프로 준비",
    ],
  },
  {
    no: "03",
    key: "PRO",
    target: "프로 지망 · 투어",
    duration: "주간 / 월간 / 풀 시즌",
    desc: "투어 무대와 실업팀 입단을 위한 고강도 퍼포먼스 매니지먼트.",
    points: [
      "패턴 기반 훈련 · 매치 시나리오",
      "투어 스케줄 · 대회 동행 관리",
      "실업팀 계약 컨설팅",
    ],
  },
] as const;

export const heroSlides = [
  {
    eyebrow: "GLOBAL CHAMPIONS MAKERS",
    headline: "WE MAKE GLOBAL",
    accent: "Champions",
    sub: "세계 무대에 설 챔피언을 만듭니다. 기술 · 피지컬 · 멘탈을 하나로.",
  },
  {
    eyebrow: "TECHNIQUE · PHYSICAL · MENTAL",
    headline: "CHAMPIONS ARE",
    accent: "Made Here",
    sub: "재능은 시작일 뿐. 챔피언은 매일의 훈련으로 완성됩니다.",
  },
  {
    eyebrow: "JUNIOR · PRO · ADULT",
    headline: "YOUR GAME, OUR",
    accent: "Mission",
    sub: "당신의 한 걸음마다, GCM이 함께합니다.",
  },
] as const;

export const stats = [
  { value: "CLAY", label: "Court Surface", suffix: "" },
  { value: "6", label: "주간 트레이닝", suffix: "일" },
  { value: "2", label: "진로 트랙 (프로·대학)", suffix: "" },
];

export const whoWeAre = {
  title: "GCM은 어떤 곳인가",
  lead: "대표 오성국과 코치진들이 이끄는 고성능 테니스 아카데미. 기술 · 피지컬 · 멘탈을 통합한 구조화된 훈련으로 선수의 장기 성장을 만듭니다.",
  pillars: [
    {
      en: "Mentality",
      title: "멘탈리티",
      body: "책임감 · 투지 · 열정 · 회복력 · 감정조절을 갖춘 선수로. 키즈 단계부터 인성과 팀워크 중심의 멘탈 케어를 시작합니다.",
    },
    {
      en: "Goal & Training",
      title: "목표설정 및 훈련",
      body: "고수준 훈련 · 규율 · 명확한 목표 설정으로 다음 단계를 준비합니다.",
    },
    { en: "Achievements", title: "성취", body: "과정 중심 · 지속성 · 성과 검토로 증명." },
    { en: "Athletes", title: "선수 중심", body: "개인 발전 · 학업 균형 · 장기 경로." },
  ],
};

export const utrRoadmap = {
  title: "UTR 로드맵과 성장 목표",
  milestones: [
    { stage: "현재 (Current)", utr: "10.5", note: "출발점 진단" },
    { stage: "대학 무대 목표 (Year 2)", utr: "11.5~12.0", note: "대학 경쟁권", highlight: true },
    { stage: "프로/실업 목표 (Year 4)", utr: "13.0+", note: "프로/실업 안정권" },
  ],
  checkpoints: [
    { title: "피지컬 & 멘탈", body: "상위 선수와의 체격차 극복 특화 웨이트, 압박 상황 멘탈 루틴" },
    { title: "기술 & 전술", body: "스트로크 정밀도와 게임 정체성, 매치 시나리오 기반 전술 발전" },
    { title: "데이터 & 영상 포트폴리오", body: "매치 하이라이트 영상 분기별 업데이트, 성과 데이터 추적" },
  ],
  curve: [
    { x: "현재", y: 10.5 },
    { x: "기초", y: 11.0 },
    { x: "발전", y: 11.3 },
    { x: "대학", y: 11.8 },
    { x: "리그", y: 12.4 },
    { x: "프로", y: 13.2 },
  ],
};

/** 발달 커리큘럼 6단계 시스템 (Assessment → Next Level) */
export const developmentSteps = [
  { n: "01", en: "Assessment", ko: "현재 위치 진단" },
  { n: "02", en: "Training Design", ko: "기술 · 피지컬 · 멘탈 계획" },
  { n: "03", en: "Match Application", ko: "경기 시나리오 적용" },
  { n: "04", en: "Performance Review", ko: "데이터 · 영상 피드백" },
  { n: "05", en: "Pathway Planning", ko: "프로 / 대학 / 실업팀 방향 설정" },
  { n: "06", en: "Next Level", ko: "다음 단계 진입" },
] as const;

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
  { name: "Academic", body: "진학에 필요한 학업 관리와 영어 커뮤니케이션, 진학 타임라인 및 에세이 지원." },
  { name: "Global Manner", body: "국제 무대 소통을 위한 프로 에티켓, 미디어 인터뷰 훈련, 글로벌 매너." },
  { name: "Operations", body: "토너먼트 원정 및 체류 일정 조율, 퍼포먼스 데이터 통합 관리." },
];

export const tracks = {
  source: { title: "엘리트 트레이닝", note: "기술 · 피지컬 · 멘탈 통합" },
  a: {
    title: "Track A. 프로 테니스 선수",
    badge: "Primary Goal",
    body: "국내외 대회·투어 무대 경험을 통해 프로 데뷔 또는 실업팀 입단으로 연결합니다.",
  },
  b: {
    title: "Track B. 대학 테니스 선수",
    badge: "Pathway",
    body: "학업과 운동을 병행하며 대학 팀에서 경쟁 — 진학과 선수 생활을 함께 이어갑니다.",
  },
  quote: "프로든 대학이든, 선수의 길을 끝까지 함께합니다.",
};

export const processSteps = [
  { n: "01", title: "Assessment", body: "UTR/ITF 기록·기량 평가로 현재 위치 진단" },
  { n: "02", title: "Targeting", body: "목표 대회·대학·팀 선정과 컨택" },
  { n: "03", title: "Preparation", body: "기술·체력·멘탈 집중 준비" },
  { n: "04", title: "Compete", body: "대회 출전·매치 운영·전술 지원" },
  { n: "05", title: "Next Level", body: "프로 전향·대학 진학 등 다음 단계 로드맵" },
];

export const players = [
  { name: "윤하건", track: "professional", grad: "2026", utr: "13.2", result: "프로 투어 데뷔" },
  { name: "Player A", track: "college", grad: "2027", utr: "12.1", result: "대학 진학" },
  { name: "Player B", track: "college", grad: "2027", utr: "11.8", result: "대학 진학 준비" },
  { name: "Player C", track: "professional", grad: "2028", utr: "11.5", result: "실업팀 트라이아웃" },
];

/** 선수 스토리 — 프로 및 국내외 대학 소속 선수의 사진과 경력 (사진은 추후 교체) */
export const playerStories = [
  {
    name: "윤하건",
    affiliation: "프로 투어",
    career: "ATP 투어 데뷔 · GCM 장기 육성 1기",
    image: "",
  },
  {
    name: "Player A",
    affiliation: "국내 대학",
    career: "대학 테니스부 진학 · 전국 대회 입상",
    image: "",
  },
  {
    name: "Player B",
    affiliation: "해외 대학",
    career: "미국 NCAA 디비전 진학 준비",
    image: "",
  },
] as const;

export const partners = ["ATP", "WTA", "ITF", "UTR", "Babolat", "Wilson"];

export const schedule = [
  { date: "2026.07", title: "여름 엘리트 캠프", place: "동탄 코트", target: "주니어 / 엘리트" },
  { date: "2026.08", title: "UTR 쇼케이스", place: "서울", target: "주니어 / 대학 지망" },
  { date: "2026.09", title: "국제 토너먼트 동행", place: "해외", target: "프로 트랙" },
];

/** 선수·학부모 후기 — 동의 확인 후 콘텐츠 업로드 예정 (현재 영역만 유지) */
export const testimonials: { quote: string; author: string }[] = [];

export const faqContact = {
  title: "ARE YOU READY TO GO PRO & GROW?",
  sub: "기술 · 피지컬 · 멘탈을 하나로. GCM이 당신의 다음 단계를 함께합니다.",
};
