/**
 * Alumni(졸업생) 정적 데이터.
 * 상세 페이지(/alumni/[slug])에서 편지 본문 + 인스타그램형 사진 그리드로 렌더링한다.
 */

export type AlumniBlock =
  | { type: "p"; text: string }
  | { type: "quote"; text: string }
  /** 감사/헌사 등 본문 중간에서 부각시키는 강조 콜아웃 */
  | { type: "highlight"; text: string }
  /** 박스 없이 볼드체 문장으로만 강조 */
  | { type: "bold"; text: string }
  /** 불릿 리스트 (경력·성적 등) */
  | { type: "list"; items: string[] }
  | { type: "heading"; text: string }
  | { type: "signature"; text: string };

export type AlumniArticle = {
  title: string;
  titleEn: string;
  source: string;
  sourceEn: string;
  url: string;
  image: string;
};

export type Alumni = {
  slug: string;
  name: string;
  /** 영문/로마자 이름 (구조화 데이터 alternateName) */
  nameEn?: string;
  /** 생년월일 (히어로에 작게 표시) */
  birth?: string;
  /** 재학/소속 대학 (구조화 데이터 alumniOf) */
  university?: string;
  /** 카드/헤더의 한 줄 소속 (예: 스탠포드 대학교 · NCAA D1 주장) */
  role: string;
  roleEn: string;
  /** 해시태그 (# 없이 저장) */
  hashtags: string[];
  hashtagsEn: string[];
  /** 카드에 노출할 2~3줄 요약 */
  summary: string;
  summaryEn: string;
  /** 카드 대표 이미지 */
  mainImage: string;
  /** 인스타그램형 그리드용 사진들 */
  gallery: string[];
  /** 관련 기사 (새 창으로 열림) */
  articles: AlumniArticle[];
  /** 상세 편지 본문 블록 */
  body: AlumniBlock[];
  bodyEn: AlumniBlock[];
};

export type LocalizedAlumni = {
  slug: string;
  name: string;
  birth?: string;
  role: string;
  hashtags: string[];
  summary: string;
  mainImage: string;
  gallery: string[];
  university?: string;
  articles: { title: string; source: string; url: string; image: string }[];
  body: AlumniBlock[];
};

/** 로케일에 맞춰 Alumni 필드를 선택해 평탄화 */
export function localizeAlumni(a: Alumni, ko: boolean): LocalizedAlumni {
  return {
    slug: a.slug,
    name: ko ? a.name : a.nameEn ?? a.name,
    birth: a.birth,
    role: ko ? a.role : a.roleEn,
    hashtags: ko ? a.hashtags : a.hashtagsEn,
    summary: ko ? a.summary : a.summaryEn,
    mainImage: a.mainImage,
    gallery: a.gallery,
    university: a.university,
    articles: a.articles.map((ar) => ({
      title: ko ? ar.title : ar.titleEn,
      source: ko ? ar.source : ar.sourceEn,
      url: ar.url,
      image: ar.image,
    })),
    body: ko ? a.body : a.bodyEn,
  };
}

export const ALUMNI: Alumni[] = [
  {
    slug: "myung-se-in",
    name: "명세인",
    nameEn: "Myung Se-in",
    university: "Stanford University",
    role: "스탠포드 대학교 사회학과 · 여자 테니스 대표팀(NCAA D1) 주장",
    roleEn: "Stanford University, Sociology · Captain, Women's Tennis (NCAA D1)",
    hashtags: ["스탠포드"],
    hashtagsEn: ["Stanford"],
    summary:
      "스탠포드 대학교 사회학과 재학 중이자 여자 테니스 대표팀(NCAA Division I) 주장. 100% 장학생으로 학업(GPA 4.0)과 NCAA 정상급 선수 생활을 병행하며, 국제 스포츠 무대를 이끌 'Global Sports Leader'의 꿈을 향해 나아가고 있습니다.",
    summaryEn:
      "A Sociology student at Stanford University and captain of the women's tennis team (NCAA Division I). A full-ride scholar balancing academics (GPA 4.0) with top-level NCAA tennis, chasing a dream to become a 'Global Sports Leader' on the world stage.",
    mainImage: "/alumni/myung-se-in/main.jpeg",
    gallery: [
      "/alumni/myung-se-in/1.jpeg",
      "/alumni/myung-se-in/2.jpeg",
      "/alumni/myung-se-in/3.jpeg",
      "/alumni/myung-se-in/4.jpeg",
      "/alumni/myung-se-in/5.jpeg",
      "/alumni/myung-se-in/6.jpeg",
    ],
    articles: [
      {
        title: "'Be Stanford Cardinals!' 국내 테니스 선수 최초 스탠포드 진학한, 명세인",
        titleEn: "'Be Stanford Cardinals!' Myung Se-in, first Korean tennis player to enter Stanford",
        source: "네이버 스포츠",
        sourceEn: "Naver Sports",
        url: "https://naver.me/FDGXbfxh",
        image: "/alumni/myung-se-in/articles/1.jpg",
      },
      {
        title: "오산GS 명세인, 이덕희배 국제주니어테니스 여자 단식 우승",
        titleEn: "Osan GS's Myung Se-in wins the Lee Duck-hee Cup junior girls' singles title",
        source: "중부일보",
        sourceEn: "Joongboo Ilbo",
        url: "https://naver.me/GKIYLbtG",
        image: "/alumni/myung-se-in/2.jpeg",
      },
      {
        title: "\"한국 테니스의 밀알이 되겠다\" SS스포츠진흥협회 x KATA, 첫 교류전 성료",
        titleEn: "'To be a seed for Korean tennis' — SS Sports Assoc. x KATA hold their first exchange match",
        source: "네이버 스포츠",
        sourceEn: "Naver Sports",
        url: "https://naver.me/5CCmSCjw",
        image: "/alumni/myung-se-in/articles/3.jpg",
      },
      {
        title: "(주)지엔비에스엔지니어링, 주니어 선수 명세인 후원",
        titleEn: "GNBS Engineering sponsors junior player Myung Se-in",
        source: "테니스피플",
        sourceEn: "Tennis People",
        url: "https://naver.me/Gp0gbsyd",
        image: "/alumni/myung-se-in/articles/4.jpg",
      },
    ],
    body: [
      {
        type: "p",
        text: "안녕하세요, GCM 아카데미 후배들과 학부모님! 스탠포드 대학교(Stanford University) 사회학과 재학 중이자, 스탠포드 여자 테니스 대표팀(NCAA Division I) 주장을 맡고 있는 GCM Alumni 명세인입니다.",
      },
      {
        type: "p",
        text: "현재 저는 미국 스탠포드 대학교에서 100% 장학생으로서 학업(GPA 4.0)과 NCAA 최고 수준의 테니스 선수 생활을 병행하며, 장차 국제 스포츠 기구(IOC, WTA) 및 글로벌 스포츠 무대를 이끌어갈 리더로서의 꿈을 펼쳐나가고 있습니다.",
      },
      {
        type: "bold",
        text: "오늘의 제가 있기까지, 제 삶의 가장 결정적인 문을 열어주신 SS스포츠진흥재단 박상순 회장님과 GCM 아카데미의 오성국 대표님께 깊은 감사의 마음을 전하고 싶습니다.",
      },
      {
        type: "quote",
        text: "경제적·환경적 장벽 없이 오직 스포츠와 학업에만 집중할 수 있도록 든든하게 뒷받침해 주신 SS스포츠진흥재단 박상순 회장님의 지원이 있었기에 지금의 스탠포드 명세인이 존재할 수 있었습니다.",
      },
      {
        type: "highlight",
        text: "스탠포드 입학 & 100% 장학금, 도전할 수 있게 언제나 자신감을 채워주신 오성국 코치님",
      },
      {
        type: "p",
        text: "처음 미국 유학길에 오르고 스탠포드로 도전할 때, 저 역시 '과연 내가 해낼 수 있을까'라는 불안함과 막연함이 있었습니다. 하지만 GCM 아카데미의 오성국 코치님께서는 제 가능성을 100% 믿어주셨고, 끝까지 용기와 도전을 불어넣어 주셨습니다.",
      },
      {
        type: "p",
        text: "단순히 테니스 기술 지도에 그치지 않고, 미국 대학 스포츠 시스템 안에서 치열하게 살아남을 수 있는 강력한 멘탈 관리와 컨설팅을 지금 이 순간까지도 지속해 주고 계십니다.",
      },
      {
        type: "highlight",
        text: "오성국 코치님의 흔들림 없는 믿음 덕분에 저는 '완전한 자신감'을 가지고, 팀의 리더로 성장할 수 있었습니다.",
      },
      { type: "heading", text: "🎾 GCM 후배들에게" },
      {
        type: "quote",
        text: "스스로 당장 부족해 보여도 성실함과 멘탈이 길을 만듭니다",
      },
      {
        type: "p",
        text: "지금 GCM에서 열심히 훈련중인 후배 여러분, 때로는 당장 눈앞의 경제적 여건이나 본인의 재능, 혹은 환경이 부족해 보여 스스로를 의심할 때가 있을 것입니다.",
      },
      {
        type: "p",
        text: "하지만 기억하세요. 스포츠와 인생에서 가장 강력한 무기는 '지속적인 성실함'과 '바른 멘탈'입니다.",
      },
      {
        type: "p",
        text: "GCM 아카데미의 체계적인 훈련 체계와 오성국 코치님의 진심 어린 멘탈 케어를 온전히 믿고 하루하루 최선을 다해 나아간다면, 여러분이 상상하는 것 이상의 엄청난 결과가 반드시 찾아옵니다.",
      },
      {
        type: "p",
        text: "저 역시 한국과 미국을 잇고, 더 나아가 대한민국 테니스 및 세계 스포츠 산업의 판도를 바꾸는 'Global Sports Leader'로서 후배 여러분의 멋진 롤모델이자 든든한 선배가 될 수 있도록 미국 현지에서 더욱 최선을 다하겠습니다. 꿈을 향해 도전하는 모든 GCM 후배들을 진심으로 응원합니다!",
      },
      { type: "signature", text: "스탠포드 대학교 D1 테니스팀 주장, 명세인 올림" },
    ],
    bodyEn: [
      {
        type: "p",
        text: "Hello to GCM Academy's juniors and parents! I'm Myung Se-in, a GCM Alumni majoring in Sociology at Stanford University and serving as captain of Stanford's women's tennis team (NCAA Division I).",
      },
      {
        type: "p",
        text: "As a full-ride scholarship student at Stanford, I balance academics (GPA 4.0) with tennis at the highest NCAA level, pursuing my dream of one day becoming a leader who guides international sports bodies (IOC, WTA) and the global sports stage.",
      },
      {
        type: "bold",
        text: "For everything that has brought me here, I want to express my deepest gratitude to Chairman Park Sang-soon of the SS Sports Promotion Foundation and to Director Oh Seong-gook of GCM Academy, who opened the most decisive doors of my life.",
      },
      {
        type: "quote",
        text: "It was the steadfast support of Chairman Park Sang-soon of the SS Sports Promotion Foundation — letting me focus purely on sport and study, free of financial and environmental barriers — that made today's Stanford Myung Se-in possible.",
      },
      {
        type: "highlight",
        text: "Coach Oh Seong-gook, who always filled me with the confidence to reach Stanford, win a full scholarship, and dare to try.",
      },
      {
        type: "p",
        text: "When I first set out to study in the U.S. and aimed for Stanford, I too felt the anxiety and uncertainty of 'can I really do this?' But Coach Oh Seong-gook of GCM Academy believed in my potential 100% and instilled courage and daring in me right to the end.",
      },
      {
        type: "p",
        text: "Beyond teaching tennis technique, he continues — even now — to provide the powerful mental management and consulting I need to fiercely survive within the U.S. collegiate sports system.",
      },
      {
        type: "highlight",
        text: "Thanks to Coach Oh Seong-gook's unwavering belief, I gained 'complete confidence' and grew into a leader of my team.",
      },
      { type: "heading", text: "🎾 To GCM's Juniors" },
      {
        type: "quote",
        text: "Even when you feel you fall short right now, diligence and mindset carve the path.",
      },
      {
        type: "p",
        text: "To all of you training hard at GCM right now — there will be times you doubt yourself, when your finances, talent or circumstances seem to fall short.",
      },
      {
        type: "p",
        text: "But remember: the most powerful weapons in sport and in life are 'sustained diligence' and 'the right mindset'.",
      },
      {
        type: "p",
        text: "If you fully trust GCM Academy's structured training system and Coach Oh Seong-gook's heartfelt mental care, and give your best each day, results beyond anything you imagine will surely come.",
      },
      {
        type: "p",
        text: "I too will do my utmost here in the U.S. — bridging Korea and America, and going further to reshape Korean tennis and the global sports industry as a 'Global Sports Leader' — so that I can be a great role model and dependable senior for you. I wholeheartedly cheer for every GCM junior chasing their dreams!",
      },
      { type: "signature", text: "From Myung Se-in, Captain, Stanford University D1 Tennis Team" },
    ],
  },
  {
    slug: "kim-juan",
    name: "김주안",
    nameEn: "Kim Ju-an",
    birth: "2006.10.15",
    university: "University of Chicago",
    role: "(주)두나미스 대표 / <플리브> 대표 / 전 U of Chicago 경제학·수학 전공, 테니스 대학리그 출신",
    roleEn:
      "Founder, Dunamis / Founder, Fliv / Former U of Chicago (Economics · Mathematics), college-league tennis",
    hashtags: ["시카고대", "ITF주니어", "창업가"],
    hashtagsEn: ["UChicago", "ITFJunior", "Founder"],
    summary:
      "테니스 유학으로 세계 최상위 명문 시카고대(U of Chicago)에 진학해 경제학·수학을 전공하고 테니스 대학리그에서 활약한 김주안. 지금은 테니스로 배운 멘탈리티로 (주)두나미스·플리브를 이끄는 창업가입니다.",
    summaryEn:
      "Kim Ju-an studied economics and mathematics at the University of Chicago — one of the world's most elite universities — while competing in college-league tennis. Today he leads Dunamis and Fliv as a founder, driven by the mentality tennis taught him.",
    mainImage: "/alumni/kim-juan/main.jpeg",
    gallery: [
      "/alumni/kim-juan/1.jpeg",
      "/alumni/kim-juan/2.jpeg",
      "/alumni/kim-juan/3.jpeg",
      "/alumni/kim-juan/4.jpeg",
      "/alumni/kim-juan/5.jpeg",
    ],
    articles: [],
    body: [
      {
        type: "quote",
        text: "테니스 유학으로 세계 0.1% 명문대에 진학하다— 이제는 테니스로 배운 멘탈리티로 혁신을 이끄는 창업가",
      },
      { type: "heading", text: "주요 경력 및 성적" },
      {
        type: "list",
        items: [
          "전 세계 상위 0.1%— 미국 종합대학 TOP 10 (아이비리그 최상위 티어) 시카고 대학교(U of Chicago) 경제학·수학 전공 및 테니스 대학리그 선수",
          "2022 IBK기업은행 그랜드슬램 육성팀 선수 출신",
          "국제테니스연맹(ITF) 주니어 주요 성적:\n콜롬비아 보고타 (J200) 복식 우승 / 칼리 (J100) 복식 준우승",
          "괌 데데도 (J60) 단식 우승 / 말레이시아 세렘반 (J60) 단식 우승",
          "남아공 포체프스트룸 (J100) 복식 준우승 / 키르기스스탄 촐폰아타 (J4) 복식 우승 외 다수",
        ],
      },
      {
        type: "p",
        text: "대한민국을 대표해 전 세계 ITF 무대를 누비며 테니스에 모든 것을 쏟아부었던 김주안 선수. 그에게 '테니스 유학'은 단순한 입시나 운동 연수가 아닌, 더 넓은 세계를 직접 경험하고 성장하는 최고의 기회가 되었습니다. 테니스를 매개로 미국 대학 리그 무대에서 활약함과 동시에 전 세계 최상위 명문인 시카고 대학교(U of Chicago)에 진학하여 경제학과 수학을 전공, 스포츠와 학업 모두에서 최고 수준의 역량을 증명해 냈습니다.",
      },
    ],
    bodyEn: [
      {
        type: "quote",
        text: "Through studying abroad on tennis, into the world's top 0.1% university — now a founder driving innovation with the mentality tennis taught him.",
      },
      { type: "heading", text: "Career & Achievements" },
      {
        type: "list",
        items: [
          "Top 0.1% worldwide — economics & mathematics at the University of Chicago (a top-10 U.S. university, elite Ivy tier) and a college-league tennis player",
          "Former player on the 2022 IBK Industrial Bank Grand Slam development team",
          "ITF (International Tennis Federation) Junior — key results:\nBogotá, Colombia (J200) doubles champion / Cali (J100) doubles runner-up",
          "Dededo, Guam (J60) singles champion / Seremban, Malaysia (J60) singles champion",
          "Potchefstroom, South Africa (J100) doubles runner-up / Cholpon-Ata, Kyrgyzstan (J4) doubles champion, and more",
        ],
      },
      {
        type: "p",
        text: "Representing Korea across the ITF circuit worldwide, Kim Ju-an poured everything into tennis. For him, studying abroad through tennis was not merely an admissions route or athletic program, but the greatest opportunity to experience a wider world and grow. Competing on the U.S. college-league stage through tennis, he also entered the University of Chicago — one of the world's most elite institutions — majoring in economics and mathematics, proving top-level ability in both sport and academics.",
      },
    ],
  },
];
