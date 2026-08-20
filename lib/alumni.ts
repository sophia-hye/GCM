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
  | { type: "heading"; text: string }
  | { type: "signature"; text: string };

export type AlumniArticle = {
  title: string;
  source: string;
  url: string;
  image: string;
};

export type Alumni = {
  slug: string;
  name: string;
  /** 영문/로마자 이름 (구조화 데이터 alternateName) */
  nameEn?: string;
  /** 재학/소속 대학 (구조화 데이터 alumniOf) */
  university?: string;
  /** 카드/헤더의 한 줄 소속 (예: 스탠포드 대학교 · NCAA D1 주장) */
  role: string;
  /** 해시태그 (# 없이 저장) */
  hashtags: string[];
  /** 카드에 노출할 2~3줄 요약 */
  summary: string;
  /** 카드 대표 이미지 */
  mainImage: string;
  /** 인스타그램형 그리드용 사진들 */
  gallery: string[];
  /** 관련 기사 (새 창으로 열림) */
  articles: AlumniArticle[];
  /** 상세 편지 본문 블록 */
  body: AlumniBlock[];
};

export const ALUMNI: Alumni[] = [
  {
    slug: "myung-se-in",
    name: "명세인",
    nameEn: "Myung Se-in",
    university: "Stanford University",
    role: "스탠포드 대학교 사회학과 · 여자 테니스 대표팀(NCAA D1) 주장",
    hashtags: ["스탠포드"],
    summary:
      "스탠포드 대학교 사회학과 재학 중이자 여자 테니스 대표팀(NCAA Division I) 주장. 100% 장학생으로 학업(GPA 4.0)과 NCAA 정상급 선수 생활을 병행하며, 국제 스포츠 무대를 이끌 'Global Sports Leader'의 꿈을 향해 나아가고 있습니다.",
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
        source: "네이버 스포츠",
        url: "https://naver.me/FDGXbfxh",
        image: "/alumni/myung-se-in/articles/1.jpg",
      },
      {
        title: "오산GS 명세인, 이덕희배 국제주니어테니스 여자 단식 우승",
        source: "중부일보",
        url: "https://naver.me/GKIYLbtG",
        image: "/alumni/myung-se-in/2.jpeg",
      },
      {
        title: "\"한국 테니스의 밀알이 되겠다\" SS스포츠진흥협회 x KATA, 첫 교류전 성료",
        source: "네이버 스포츠",
        url: "https://naver.me/5CCmSCjw",
        image: "/alumni/myung-se-in/articles/3.jpg",
      },
      {
        title: "(주)지엔비에스엔지니어링, 주니어 선수 명세인 후원",
        source: "테니스피플",
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
  },
];
