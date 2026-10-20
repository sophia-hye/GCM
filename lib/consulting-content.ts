import type { Locale } from "@/lib/i18n";

/**
 * Consulting 페이지 확장 섹션 콘텐츠 (한/영).
 * 참고 디자인(레이아웃)만 차용하고 브랜딩은 GCM으로, 팔레트는 사이트 기본(베이지+코트오렌지)에 맞춤.
 */

export type IconName =
  | "shield"
  | "book"
  | "map"
  | "target"
  | "video"
  | "cap"
  | "globe"
  | "award";

export type ConsultingExtra = {
  hero: { eyebrow: string; title: string; sub: string };
  philosophy: {
    title: string;
    paragraphs: string[];
    points: { icon: IconName; title: string; body: string }[];
  };
  investment: {
    title: string;
    sub: string;
    booking: {
      title: string;
      sub: string;
      cta: string;
    };
  };
  roleModels: {
    title: string;
    lead: string;
    items: { name: string; school: string; body: string; image?: string }[];
  };
  roadmap: {
    title: string;
    lead: string;
    plans: { badge: string; title: string; tags: string; body: string }[];
  };
  allCare: {
    title: string;
    lead: string;
    items: { icon: IconName; title: string; body: string; cta?: string }[];
  };
  faq: {
    title: string;
    lead: string;
    items: {
      q: string;
      a: string;
      table?: { head: string[]; rows: string[][] };
    }[];
  };
};

const ko: ConsultingExtra = {
  hero: {
    eyebrow: "TENNIS ELITE FROM KOREA",
    title: "운동은 잘하는 것만이 아니라,\n잘 설계해야 성장합니다.",
    sub: "자녀의 가능성을 지금의 환경과 한계로 결정하기엔 이릅니다.\n아이의 땀방울이 가장 찬란한 스무 살 이후의 삶이 될 수 있도록,\nGCM이 가장 안전한 성장의 로드맵을 열어드립니다.",
  },
  philosophy: {
    title: "선수 그 이상의 삶, 스무 살 이후를 묻다",
    paragraphs: [
      "어머님, 아버님. 테니스 라켓을 놓게 되는 그 순간을 상상해 보신 적 있으신가요? 엘리트 체육의 길은 늘 크고 작은 불확실성을 동반합니다.",
      "하지만 '운동은 선수만 하는 것'이라는 고정관념에서 벗어나면 완전히 새로운 길이 보입니다. 미국 대학 시스템(NCAA/NJCAA)은 엘리트 스포츠의 불확실성을 최소화하고, 만약의 부상이나 진로 변경 상황에서도 아이가 흘린 땀방울을 가장 강력한 '인생의 스펙'으로 전환해 줍니다.",
    ],
    points: [
      {
        icon: "shield",
        title: "가장 안전한 진로망",
        body: "테니스로 다져진 규율과 책임감은 글로벌 리더십의 핵심 자산이 됩니다.",
      },
      {
        icon: "book",
        title: "무한한 커리어 확장",
        body: "비즈니스, 데이터, 스포츠 매니지먼트 등 자유로운 전공 선택으로 미래를 준비합니다.",
      },
    ],
  },
  investment: {
    title: "대학 4년은 비용이 아닌 '투자'입니다",
    sub: "NCAA/NJCAA를 거친 경험은 국내 실업팀 진출 시 즉시 전력감으로 높은 연봉과 계약금을 기대할 수 있게 하며, 더 넓은 글로벌 비즈니스 무대에서 평생의 자산이 됩니다.",
    booking: {
      title: "1:1 상담 및 가능성 진단 예약",
      sub: "전문 코치와 함께 우리 아이의 숨겨진 무한한 가능성을 진단해 드립니다.",
      cta: "상담 신청하기",
    },
  },
  roleModels: {
    title: "가능성을 현실로 바꾼 롤모델들",
    lead: "NCAA/NJCAA 시스템은 프로 투어부터 비즈니스 리더까지 다양한 가능성을 증명합니다.",
    items: [
      {
        name: "Ben Shelton",
        school: "University of Florida",
        image: "/rolemodels/ben-shelton.png",
        body: "대학 테니스를 거쳐 NCAA 단식 우승 후 프로로 전향해 ATP 투어 톱 랭커까지 성장한 현대 대학 시스템의 가장 대표적인 엘리트 스포츠 성공 사례입니다.",
      },
      {
        name: "Kaes Van't Hof",
        school: "Univ. of Southern California (USC)",
        image: "/rolemodels/kaes-vant-hof.png",
        body: "대학 선수 출신(NCAA 복식 우승)으로 은퇴 후 비즈니스 커리어로 완벽히 전환하여, 현재 미국 대형 에너지 기업의 C레벨 임원으로 활동 중인 글로벌 리더입니다.",
      },
      {
        name: "Janice Tjen",
        school: "Pepperdine University",
        image: "/rolemodels/janice-tjen.png",
        body: "NCAA 여자 복식 준우승 이후 WTA 투어와 US Open 본선 진출, 아시아 선수 성장 사례의 대표 롤모델입니다.",
      },
      {
        name: "CiCi Bellis",
        school: "Indiana University",
        image: "/rolemodels/cici-bellis.png",
        body: "10대 시절 천재 소녀로 불리다 부상으로 은퇴했지만, 학업을 기반으로 헬스케어 벤처캐피탈을 설립하며 '위기를 기회로 바꾼' 탁월한 창업가 사례입니다.",
      },
    ],
  },
  roadmap: {
    title: "아이의 시기에 맞춘 맞춤형 로드맵",
    lead: "시작하는 시기가 다르면 전략도 유연하게 달라져야 합니다.",
    plans: [
      {
        badge: "PLAN A",
        title: "초등학생 로드맵",
        tags: "#장기_브랜딩형 #NCAA_D1_전액장학금_목표",
        body: "국내 훈련과 영어 기초를 탄탄히 다지며, UTR 토너먼트 플래닝을 통해 주니어 랭킹을 체계적으로 끌어올립니다. 가장 이상적인 형태의 최상위권 NCAA D1 전액 장학금 로드맵을 여유 있게 설계합니다.",
      },
      {
        badge: "PLAN B",
        title: "고등학생 로드맵",
        tags: "#실전_압축형 #맞춤형_대학타겟팅",
        body: "단기간 내에 매력적인 하이라이트 영상과 최소한의 내신/어학 점수 확보에 집중합니다. 현재 예산과 실력에 가장 알맞은 대학을 타겟팅하여 즉각적인 리크루팅 컨택을 시작합니다.",
      },
      {
        badge: "PLAN C",
        title: "대학/편입 로드맵",
        tags: "#커리어_점프업 #국내실업팀_연계",
        body: "국내 대학 재학 중이거나 커뮤니티 칼리지를 거쳐 NCAA 상위 리그로 편입하는 전략입니다. 미국 리그 경험 후 국내 실업팀으로 복귀하는 유연한 진로 전환도 지원합니다.",
      },
    ],
  },
  allCare: {
    title: "가장 이상적인 올케어(All-Care) 시스템",
    lead: "결과는 디테일에서 결정됩니다. 프로가 되기 전부터 프로처럼 관리합니다.",
    items: [
      {
        icon: "map",
        title: "실전 중심 코치 네트워크",
        body: "국내 300개가 넘는 테니스 아카데미와 협약되어 있어 아이가 원하는 곳 어디서든 훈련이 가능합니다. (미협약 기관은 별도 심사 연계)",
      },
      {
        icon: "target",
        title: "쇼케이스 & 리크루팅",
        body: "미국 현지 대학 코치들과의 견고한 협업망을 통해 학생의 장점이 돋보이는 맞춤형 쇼케이스 전략을 짜고 선제적으로 오퍼를 확보합니다.",
      },
      {
        icon: "video",
        title: "영상 & 데이터 분석",
        body: "단순한 경기 영상이 아닌, 대학 코치들이 가장 중요하게 보는 기술적 스탯과 UTR 데이터를 기반으로 매력적인 하이라이트 영상을 제작합니다.",
      },
      {
        icon: "cap",
        title: "학사 및 자격 관리",
        body: "복잡한 미국 대학 스포츠 협회(NCAA/NJCAA) 선수 자격 규정을 완벽히 충족하도록 SAT, TOEFL, GPA 등 전 과정을 밀착 관리합니다.",
      },
      {
        icon: "globe",
        title: "선수 퍼스널 브랜딩",
        body: "실력뿐만 아니라 미디어 인터뷰, 글로벌 비즈니스 매너, 평판까지 하나의 '브랜드'로 육성하여 글로벌 인재로 키웁니다.",
      },
      {
        icon: "award",
        title: "NCAA D1 진입 진단",
        body: "현재 프로필과 영상을 보내주시면 전문가가 객관적인 진단을 해드립니다.",
        cta: "진단 신청하기",
      },
    ],
  },
  faq: {
    title: "학부모님의 현실적인 고민에 답합니다",
    lead: "모든 아이의 성향이 다르듯 정해진 하나의 정답은 없습니다. GCM은 투명하고 현실적인 해답을 찾습니다.",
    items: [
      {
        q: "우리 아이 UTR 점수로 어느 대학에 갈 수 있나요?",
        a: "UTR은 기회의 문을 여는 첫 번째 열쇠일 뿐, 절대적인 기준이 아닙니다. 아이의 성향, 선호하는 도시, 훈련 분위기 등에 대한 심층 분석이 선행되어야 합니다. 사소한 결정조차도 선수와 가족 모두가 100% 동의할 때만 다음 절차로 진행하는 것이 저희의 철학입니다.",
        table: {
          head: ["목표 리그", "UTR (남)", "UTR (여)", "매칭 전략"],
          rows: [
            [
              "NCAA D1 (Top Tier)",
              "12.5 이상",
              "10.0 이상",
              "전액 장학금 협상 및 투어 진출이 가능한 최상위 프로그램 타겟팅",
            ],
            [
              "NCAA D1/D2 (Mid Tier)",
              "11.5 - 12.4",
              "8.5 - 9.9",
              "학업과 운동의 밸런스가 뛰어난 주립대 및 명문 사립대 매칭",
            ],
            [
              "NCAA D3/NAIA/NJCAA",
              "10.0 - 11.4",
              "7.0 - 8.4",
              "장학금 확보 및 향후 상위 리그 편입(Transfer)을 위한 전략적 선택",
            ],
          ],
        },
      },
      {
        q: "GPA(내신)가 0.0점이어도 갈 수 있나요?",
        a: "미국은 GPA가 0.0이어도 진학할 수 있는 학교와 리그가 존재합니다. '지금 당장 몇 점이 필요한가'가 아니라, 학생의 현재 상태를 솔직하게 오픈해주시면 그 상황에서 리그를 뛸 수 있는 최적의 우회 전략과 마스터플랜을 찾아 수립해 드립니다.",
      },
      {
        q: "비용과 장학금은 현실적으로 어떻게 되나요?",
        a: "테니스 실력에 따라 최대 100% 장학금 수혜가 가능합니다. 하지만 단순한 장학금 액수보다 중요한 것은 학비, 생활비 등을 모두 포함한 '실질적 지출 예상 금액'입니다. 부모님께서 현실적인 예산을 공유해 주시면, 그 예산에 꼭 맞는 기회를 학교와 확인하여 입시 전략을 도출해 드립니다.",
      },
      {
        q: "영어가 전혀 안 되는데 어떡하나요?",
        a: "걱정하지 않으셔도 됩니다. 아이가 훈련하고 있는 현재 아카데미의 위치와 스케줄을 고려하여, 운동과 병행할 수 있도록 하이브리드(온라인+대면) 방식으로 맞춤형 영어/학업 코칭을 지원합니다.",
      },
      {
        q: "부상 등 최악의 실패 케이스는 어떻게 대처하나요?",
        a: "만약 부상으로 더 이상 테니스를 할 수 없는 상황이 오더라도 길이 끊기는 것은 아닙니다. 고등학교 졸업장만 있다면 취업 유망 전공이나 상위 3% 이내의 학교로 입학할 수 있도록 플랜B를 가동합니다. 졸업장이 없다면, 원하는 방식(온라인/대면)으로 고등학교 학위부터 취득하는 과정을 함께 밟아 나갑니다.",
      },
    ],
  },
};

const en: ConsultingExtra = {
  hero: {
    eyebrow: "TENNIS ELITE FROM KOREA",
    title: "GCM Players isn't only about playing well —\nit's about designing the path to grow.",
    sub: "Don't let your child's potential be defined by today's environment or limits.\nSo that every drop of sweat becomes the most brilliant life beyond age twenty,\nGCM opens the most secure roadmap for growth.",
  },
  philosophy: {
    title: "A Life Beyond the Athlete — What Comes After Twenty",
    paragraphs: [
      "Parents — have you ever imagined the moment your child sets the racket down for good? The elite sports path always carries uncertainty, large and small.",
      "But once you let go of the idea that 'sport is only for athletes,' an entirely new path appears. The U.S. college system (NCAA/NJCAA) minimizes the uncertainty of elite sports and, even in the event of injury or a change of direction, turns your child's sweat into the strongest 'life credential.'",
    ],
    points: [
      {
        icon: "shield",
        title: "The Safest Career Network",
        body: "The discipline and responsibility forged through tennis become core assets of global leadership.",
      },
      {
        icon: "book",
        title: "Limitless Career Expansion",
        body: "Prepare for the future with a free choice of majors — business, data, sports management and more.",
      },
    ],
  },
  investment: {
    title: "Four Years of College Is an 'Investment,' Not a Cost",
    sub: "NCAA/NJCAA experience makes an athlete an immediate asset for domestic pro teams — commanding higher salaries and signing bonuses — and becomes a lifelong advantage on the wider global business stage.",
    booking: {
      title: "Book a 1:1 Consultation & Potential Assessment",
      sub: "Together with a specialist coach, we assess your child's hidden, limitless potential.",
      cta: "Request Consultation",
    },
  },
  roleModels: {
    title: "Role Models Who Turned Possibility into Reality",
    lead: "The NCAA/NJCAA system proves a wide range of possibilities — from the pro tour to business leadership.",
    items: [
      {
        name: "Ben Shelton",
        school: "University of Florida",
        image: "/rolemodels/ben-shelton.png",
        body: "After winning an NCAA singles title through college tennis and turning pro, he grew into a top-ranked ATP tour player — the most representative elite-sports success story of the modern college system.",
      },
      {
        name: "Kaes Van't Hof",
        school: "Univ. of Southern California (USC)",
        image: "/rolemodels/kaes-vant-hof.png",
        body: "A former college player (NCAA doubles champion) who transitioned seamlessly into a business career and now serves as a C-level executive at a major U.S. energy company — a true global leader.",
      },
      {
        name: "Janice Tjen",
        school: "Pepperdine University",
        image: "/rolemodels/janice-tjen.png",
        body: "After an NCAA women's doubles runner-up finish, she reached the WTA Tour and the US Open main draw — a leading role model for the growth of Asian players.",
      },
      {
        name: "CiCi Bellis",
        school: "Indiana University",
        image: "/rolemodels/cici-bellis.png",
        body: "Once hailed as a teenage prodigy before retiring due to injury, she built on her academics to found a healthcare venture-capital firm — an outstanding example of 'turning crisis into opportunity.'",
      },
    ],
  },
  roadmap: {
    title: "A Custom Roadmap for Your Child's Stage",
    lead: "When the starting point differs, the strategy must flex accordingly.",
    plans: [
      {
        badge: "PLAN A",
        title: "Elementary Roadmap",
        tags: "#Long-term_Branding #NCAA_D1_Full-Ride_Goal",
        body: "Build a solid foundation in domestic training and basic English while systematically raising junior rankings through UTR tournament planning. We design the most ideal top-tier NCAA D1 full-scholarship roadmap with plenty of runway.",
      },
      {
        badge: "PLAN B",
        title: "High School Roadmap",
        tags: "#Fast-track #Targeted_College_Matching",
        body: "Focus on producing a compelling highlight reel and securing the minimum GPA/language scores in a short time. We target the colleges that best fit your current budget and level, and begin immediate recruiting contact.",
      },
      {
        badge: "PLAN C",
        title: "College / Transfer Roadmap",
        tags: "#Career_Jump-up #Domestic_Pro-team_Link",
        body: "A strategy for those currently in a Korean university or transferring into a top NCAA league via community college. We also support a flexible transition back to a domestic pro team after U.S. league experience.",
      },
    ],
  },
  allCare: {
    title: "The Ideal All-Care System",
    lead: "Results are decided in the details. We manage athletes like pros — even before they turn pro.",
    items: [
      {
        icon: "map",
        title: "Match-Ready Coach Network",
        body: "Partnered with 300+ tennis academies across Korea, so your child can train wherever they want. (Non-partner facilities are connected via separate review.)",
      },
      {
        icon: "target",
        title: "Showcase & Recruiting",
        body: "Through a solid network with U.S. college coaches, we build a tailored showcase strategy that highlights the student's strengths and proactively secure offers.",
      },
      {
        icon: "video",
        title: "Video & Data Analysis",
        body: "Not just match footage — we produce compelling highlight videos based on the technical stats and UTR data that college coaches value most.",
      },
      {
        icon: "cap",
        title: "Academics & Eligibility",
        body: "We closely manage the entire process — SAT, TOEFL, GPA and more — to fully meet the complex NCAA/NJCAA eligibility rules.",
      },
      {
        icon: "globe",
        title: "Athlete Personal Branding",
        body: "Beyond skill, we cultivate media interviews, global business etiquette and reputation into a single 'brand,' raising a global talent.",
      },
      {
        icon: "award",
        title: "NCAA D1 Entry Assessment",
        body: "Send us your current profile and videos, and a specialist will provide an objective assessment.",
        cta: "Request Assessment",
      },
    ],
  },
  faq: {
    title: "Answering Parents' Real Concerns",
    lead: "Just as every child is different, there is no single fixed answer. GCM finds transparent, realistic solutions.",
    items: [
      {
        q: "Which colleges can my child reach with their UTR?",
        a: "UTR is only the first key that opens the door of opportunity — not an absolute standard. In-depth analysis of the child's disposition, preferred city and training environment must come first. Our philosophy is to proceed only when the athlete and family are 100% aligned, even on small decisions.",
        table: {
          head: ["Target League", "UTR (M)", "UTR (W)", "Matching Strategy"],
          rows: [
            [
              "NCAA D1 (Top Tier)",
              "12.5+",
              "10.0+",
              "Target top programs where full-scholarship negotiation and a tour path are possible",
            ],
            [
              "NCAA D1/D2 (Mid Tier)",
              "11.5 - 12.4",
              "8.5 - 9.9",
              "Match with state universities and elite private schools with strong academic-athletic balance",
            ],
            [
              "NCAA D3/NAIA/NJCAA",
              "10.0 - 11.4",
              "7.0 - 8.4",
              "A strategic choice to secure scholarships and later transfer up to a higher league",
            ],
          ],
        },
      },
      {
        q: "Is it possible even with a 0.0 GPA?",
        a: "In the U.S. there are schools and leagues you can enter even with a 0.0 GPA. The question is not 'how many points do you need right now,' but rather — share the student's current state honestly, and we'll find and build the optimal workaround strategy and master plan to play in a league from that situation.",
      },
      {
        q: "How do costs and scholarships realistically work?",
        a: "Depending on tennis ability, up to a 100% scholarship is possible. But more important than the scholarship figure alone is the 'realistic expected spend' — including tuition, living costs and more. Share your realistic budget, and we'll confirm the opportunities that fit it with the schools and derive an admissions strategy.",
      },
      {
        q: "What if my child can't speak English at all?",
        a: "No need to worry. Considering the location and schedule of the academy where your child currently trains, we provide tailored English/academic coaching in a hybrid (online + in-person) format so it can run alongside training.",
      },
      {
        q: "How do you handle worst-case scenarios like injury?",
        a: "Even if an injury means tennis is no longer possible, the path does not end. With just a high-school diploma, we activate Plan B so the student can enter a promising employable major or a top-3% school. Without a diploma, we walk through the process of earning a high-school degree together, in your preferred format (online/in-person).",
      },
    ],
  },
};

const zh: ConsultingExtra = {
  hero: {
    eyebrow: "TENNIS ELITE FROM KOREA",
    title: "GCM Players 不仅在于打得好——\n更在于设计成长的路径。",
    sub: "不要让孩子的潜力被当下的环境或局限所定义。\n为了让每一滴汗水都化作二十岁之后最璀璨的人生，\nGCM 为您开启最稳妥的成长路线图。",
  },
  philosophy: {
    title: "超越选手的人生——二十岁之后会怎样",
    paragraphs: [
      "各位家长，您是否曾想象过孩子永远放下球拍的那一刻？精英体育之路始终伴随着大大小小的不确定性。",
      "但只要摆脱'运动只属于选手'的固有观念，一条全新的道路便会呈现。美国大学体系（NCAA/NJCAA）将精英体育的不确定性降至最低，即便遭遇伤病或需要转换方向，也能把孩子挥洒的汗水转化为最有力的'人生资历'。",
    ],
    points: [
      {
        icon: "shield",
        title: "最稳妥的职业网络",
        body: "通过网球磨砺出的纪律性与责任感，将成为全球领导力的核心资产。",
      },
      {
        icon: "book",
        title: "无限的职业拓展",
        body: "凭借自由的专业选择——商业、数据、体育管理等——为未来做好准备。",
      },
    ],
  },
  investment: {
    title: "大学四年是'投资'，而非成本",
    sub: "NCAA/NJCAA 的经历能让选手在加入国内职业队时即刻成为主力，获得更高的薪酬与签约金，并在更广阔的全球商业舞台上成为终身的优势。",
    booking: {
      title: "预约 1:1 咨询与潜力诊断",
      sub: "我们将与专业教练一起，诊断您孩子隐藏的无限潜力。",
      cta: "申请咨询",
    },
  },
  roleModels: {
    title: "将可能变为现实的榜样",
    lead: "NCAA/NJCAA 体系印证了从职业巡回赛到商业领袖的多元可能。",
    items: [
      {
        name: "Ben Shelton",
        school: "University of Florida",
        image: "/rolemodels/ben-shelton.png",
        body: "他通过大学网球赢得 NCAA 单打冠军后转为职业选手，成长为 ATP 巡回赛顶尖排名选手——现代大学体系中最具代表性的精英体育成功典范。",
      },
      {
        name: "Kaes Van't Hof",
        school: "Univ. of Southern California (USC)",
        image: "/rolemodels/kaes-vant-hof.png",
        body: "曾是大学选手（NCAA 双打冠军），退役后完美转型投身商界，如今担任美国大型能源企业的 C 级高管——一位真正的全球领袖。",
      },
      {
        name: "Janice Tjen",
        school: "Pepperdine University",
        image: "/rolemodels/janice-tjen.png",
        body: "在获得 NCAA 女子双打亚军后，她晋级 WTA 巡回赛及 US Open 正赛——亚洲选手成长的典范榜样。",
      },
      {
        name: "CiCi Bellis",
        school: "Indiana University",
        image: "/rolemodels/cici-bellis.png",
        body: "少年时期曾被誉为天才少女，后因伤退役，但她凭借学业创立了一家医疗健康风险投资公司——'化危为机'的杰出创业典范。",
      },
    ],
  },
  roadmap: {
    title: "为孩子所处阶段量身定制的路线图",
    lead: "起步时机不同，策略也应随之灵活调整。",
    plans: [
      {
        badge: "PLAN A",
        title: "小学生路线图",
        tags: "#长期品牌塑造 #NCAA_D1_全额奖学金目标",
        body: "在夯实国内训练与英语基础的同时，通过 UTR 赛事规划系统地提升青少年排名。我们从容地设计最理想的顶级 NCAA D1 全额奖学金路线图。",
      },
      {
        badge: "PLAN B",
        title: "高中生路线图",
        tags: "#实战速成 #精准大学匹配",
        body: "在短期内集中打造出色的精彩集锦视频，并确保最低限度的 GPA/语言成绩。我们锁定最契合当前预算与实力的大学，立即展开招募联系。",
      },
      {
        badge: "PLAN C",
        title: "大学/转学路线图",
        tags: "#职业跃升 #国内职业队衔接",
        body: "面向目前就读于韩国大学，或通过社区大学转入 NCAA 高级别联盟的策略。我们同样支持在积累美国联赛经验后，灵活回归国内职业队的转型。",
      },
    ],
  },
  allCare: {
    title: "最理想的全方位关怀（All-Care）体系",
    lead: "结果取决于细节。早在成为职业选手之前，我们就以职业标准管理选手。",
    items: [
      {
        icon: "map",
        title: "以实战为核心的教练网络",
        body: "我们与韩国 300 多家网球学院建立合作，孩子可以在任何心仪的地方训练。（未签约机构将经单独审核后对接。）",
      },
      {
        icon: "target",
        title: "展示会与招募",
        body: "依托与美国本土大学教练的稳固合作网络，我们制定凸显学生优势的定制展示会策略，并抢先锁定录取邀约。",
      },
      {
        icon: "video",
        title: "视频与数据分析",
        body: "不只是简单的比赛录像——我们基于大学教练最看重的技术数据与 UTR 数据，制作极具吸引力的精彩集锦视频。",
      },
      {
        icon: "cap",
        title: "学业与资格管理",
        body: "我们全程贴身管理 SAT、TOEFL、GPA 等各个环节，以完全符合复杂的 NCAA/NJCAA 选手资格规定。",
      },
      {
        icon: "globe",
        title: "选手个人品牌塑造",
        body: "除实力之外，我们还将媒体采访、全球商务礼仪乃至声誉培育为统一的'品牌'，将其培养为全球化人才。",
      },
      {
        icon: "award",
        title: "NCAA D1 入门诊断",
        body: "将您当前的个人资料与视频发送给我们，专家将为您提供客观的诊断。",
        cta: "申请诊断",
      },
    ],
  },
  faq: {
    title: "解答家长最现实的顾虑",
    lead: "正如每个孩子的性格各不相同，并不存在唯一的标准答案。GCM 致力于寻找透明而现实的解决方案。",
    items: [
      {
        q: "凭我孩子的 UTR 分数能进入哪些大学？",
        a: "UTR 只是开启机会之门的第一把钥匙，而非绝对标准。必须首先深入分析孩子的性格、偏好的城市以及训练氛围。即便是细微的决定，也只有在选手与家庭 100% 达成一致时才进入下一步——这正是我们的理念。",
        table: {
          head: ["目标联盟", "UTR（男）", "UTR（女）", "匹配策略"],
          rows: [
            [
              "NCAA D1 (Top Tier)",
              "12.5+",
              "10.0+",
              "锁定可进行全额奖学金谈判并具备巡回赛前景的顶级项目",
            ],
            [
              "NCAA D1/D2 (Mid Tier)",
              "11.5 - 12.4",
              "8.5 - 9.9",
              "匹配学业与运动兼备、平衡出色的州立大学及名门私立大学",
            ],
            [
              "NCAA D3/NAIA/NJCAA",
              "10.0 - 11.4",
              "7.0 - 8.4",
              "为确保奖学金并日后转入更高级别联盟而做出的战略性选择",
            ],
          ],
        },
      },
      {
        q: "即使 GPA（在校成绩）为 0.0 分也能升学吗？",
        a: "在美国，即使 GPA 为 0.0，也存在可以升学的学校与联盟。关键不在于'现在马上需要多少分'，而是——只要您如实告知学生当前的状况，我们便会据此找到并制定能让其参赛的最佳迂回策略与总体规划。",
      },
      {
        q: "费用与奖学金的实际情况如何？",
        a: "根据网球实力，最高可获得 100% 的奖学金。但比单纯的奖学金金额更重要的，是涵盖学费、生活费等在内的'实际预期支出'。只要您告知现实的预算，我们便会与学校确认契合该预算的机会，并据此制定升学策略。",
      },
      {
        q: "孩子完全不会英语怎么办？",
        a: "无需担心。我们会结合孩子当前训练所在学院的位置与日程，以混合（线上+线下）方式提供量身定制的英语/学业辅导，使其能够与训练同步进行。",
      },
      {
        q: "如何应对伤病等最糟糕的失败情形？",
        a: "即便因伤再也无法打网球，道路也不会就此中断。只要拥有高中毕业证，我们便会启动 Plan B，让学生进入就业前景良好的专业或前 3% 的学校。若没有毕业证，我们将以您希望的方式（线上/线下）陪伴学生从取得高中学历开始一步步走下去。",
      },
    ],
  },
};

const ja: ConsultingExtra = {
  hero: {
    eyebrow: "TENNIS ELITE FROM KOREA",
    title: "GCM Players は、ただうまくプレーすることだけではなく——\n成長への道筋を設計することです。",
    sub: "お子さまの可能性を、今の環境や限界で決めてしまうのは早すぎます。\n一滴の汗が二十歳以降の最も輝かしい人生となるように、\nGCM が最も安全な成長のロードマップを切り拓きます。",
  },
  philosophy: {
    title: "選手を超えた人生——二十歳以降を問う",
    paragraphs: [
      "お父さま、お母さま。お子さまがラケットを置くその瞬間を想像されたことはありますか。エリートスポーツの道には、常に大小さまざまな不確実性が伴います。",
      "しかし『スポーツは選手だけのもの』という固定観念から離れれば、まったく新しい道が見えてきます。米国の大学システム（NCAA/NJCAA）はエリートスポーツの不確実性を最小限に抑え、万一のケガや進路変更の場合でも、お子さまが流した汗を最も強力な『人生の実績』へと転換します。",
    ],
    points: [
      {
        icon: "shield",
        title: "最も安全なキャリアネットワーク",
        body: "テニスで培われた規律と責任感は、グローバルなリーダーシップの中核となる資産になります。",
      },
      {
        icon: "book",
        title: "無限のキャリア拡張",
        body: "ビジネス、データ、スポーツマネジメントなど、自由な専攻選択で未来に備えます。",
      },
    ],
  },
  investment: {
    title: "大学の4年間は、コストではなく『投資』です",
    sub: "NCAA/NJCAA を経た経験は、国内のプロチームへの加入時に即戦力として高い年俸や契約金を期待できるものにし、さらに広いグローバルビジネスの舞台で生涯の資産となります。",
    booking: {
      title: "1:1 相談・可能性診断のご予約",
      sub: "専門コーチとともに、お子さまに秘められた無限の可能性を診断いたします。",
      cta: "相談を申し込む",
    },
  },
  roleModels: {
    title: "可能性を現実に変えたロールモデルたち",
    lead: "NCAA/NJCAA システムは、プロツアーからビジネスリーダーまで、多彩な可能性を証明しています。",
    items: [
      {
        name: "Ben Shelton",
        school: "University of Florida",
        image: "/rolemodels/ben-shelton.png",
        body: "大学テニスを経て NCAA シングルスで優勝した後プロへ転向し、ATP ツアーのトップランカーにまで成長した、現代の大学システムを最も象徴するエリートスポーツの成功事例です。",
      },
      {
        name: "Kaes Van't Hof",
        school: "Univ. of Southern California (USC)",
        image: "/rolemodels/kaes-vant-hof.png",
        body: "大学選手出身（NCAA ダブルス優勝）で、引退後はビジネスのキャリアへと見事に転身し、現在は米国の大手エネルギー企業で C レベルの役員を務めるグローバルリーダーです。",
      },
      {
        name: "Janice Tjen",
        school: "Pepperdine University",
        image: "/rolemodels/janice-tjen.png",
        body: "NCAA 女子ダブルス準優勝の後、WTA ツアーと US Open 本戦に進出した、アジア選手の成長を代表するロールモデルです。",
      },
      {
        name: "CiCi Bellis",
        school: "Indiana University",
        image: "/rolemodels/cici-bellis.png",
        body: "10代の頃は天才少女と呼ばれながらケガで引退しましたが、学業を基盤にヘルスケアのベンチャーキャピタルを設立した、『危機を機会に変えた』卓越した起業家の事例です。",
      },
    ],
  },
  roadmap: {
    title: "お子さまの時期に合わせたオーダーメイドのロードマップ",
    lead: "スタートの時期が違えば、戦略も柔軟に変えていく必要があります。",
    plans: [
      {
        badge: "PLAN A",
        title: "小学生ロードマップ",
        tags: "#長期ブランディング型 #NCAA_D1_全額奨学金目標",
        body: "国内トレーニングと英語の基礎をしっかり固めながら、UTR トーナメントプランニングを通じてジュニアランキングを体系的に引き上げます。最も理想的なトップクラスの NCAA D1 全額奨学金ロードマップを、余裕をもって設計します。",
      },
      {
        badge: "PLAN B",
        title: "高校生ロードマップ",
        tags: "#実戦圧縮型 #大学ターゲティング特化",
        body: "短期間で魅力的なハイライト映像と、最低限の GPA・語学スコアの確保に集中します。現在の予算と実力に最も合う大学をターゲットにし、即座にリクルーティングのコンタクトを開始します。",
      },
      {
        badge: "PLAN C",
        title: "大学・編入ロードマップ",
        tags: "#キャリアジャンプアップ #国内プロチーム連携",
        body: "韓国の大学に在学中、またはコミュニティカレッジを経て NCAA 上位リーグへ編入する戦略です。米国リーグでの経験後、国内プロチームへ復帰する柔軟な進路転換も支援します。",
      },
    ],
  },
  allCare: {
    title: "最も理想的なオールケア（All-Care）システム",
    lead: "結果はディテールで決まります。プロになる前から、プロのように管理します。",
    items: [
      {
        icon: "map",
        title: "実戦中心のコーチネットワーク",
        body: "韓国国内の300を超えるテニスアカデミーと提携しており、お子さまが望む場所ならどこでもトレーニングが可能です。（未提携の機関は別途審査のうえ連携します。）",
      },
      {
        icon: "target",
        title: "ショーケース＆リクルーティング",
        body: "米国現地の大学コーチとの強固な協力網を通じて、学生の強みが際立つオーダーメイドのショーケース戦略を立て、先手を打ってオファーを確保します。",
      },
      {
        icon: "video",
        title: "映像＆データ分析",
        body: "単なる試合映像ではなく、大学コーチが最も重視する技術的なスタッツと UTR データに基づいて、魅力的なハイライト映像を制作します。",
      },
      {
        icon: "cap",
        title: "学業・資格管理",
        body: "複雑な NCAA/NJCAA の選手資格規定を完全に満たせるよう、SAT、TOEFL、GPA など全プロセスを密着して管理します。",
      },
      {
        icon: "globe",
        title: "選手パーソナルブランディング",
        body: "実力だけでなく、メディアインタビューやグローバルなビジネスマナー、評判までを一つの『ブランド』として育て、グローバル人材へと育成します。",
      },
      {
        icon: "award",
        title: "NCAA D1 進入診断",
        body: "現在のプロフィールと映像をお送りいただければ、専門家が客観的な診断をいたします。",
        cta: "診断を申し込む",
      },
    ],
  },
  faq: {
    title: "保護者の現実的なお悩みにお答えします",
    lead: "お子さま一人ひとりの個性が違うように、決まった唯一の正解はありません。GCM は透明で現実的な答えを見つけます。",
    items: [
      {
        q: "うちの子の UTR スコアで、どの大学に行けますか？",
        a: "UTR は機会の扉を開く最初の鍵にすぎず、絶対的な基準ではありません。お子さまの性格、好む都市、トレーニングの雰囲気などについての綿密な分析が先行する必要があります。ささいな決定であっても、選手とご家族の全員が100%同意したときにのみ次の手続きへ進むのが、私たちの哲学です。",
        table: {
          head: ["目標リーグ", "UTR（男）", "UTR（女）", "マッチング戦略"],
          rows: [
            [
              "NCAA D1 (Top Tier)",
              "12.5+",
              "10.0+",
              "全額奨学金の交渉とツアー進出が可能な最上位プログラムをターゲティング",
            ],
            [
              "NCAA D1/D2 (Mid Tier)",
              "11.5 - 12.4",
              "8.5 - 9.9",
              "学業と運動のバランスに優れた州立大学・名門私立大学とのマッチング",
            ],
            [
              "NCAA D3/NAIA/NJCAA",
              "10.0 - 11.4",
              "7.0 - 8.4",
              "奨学金の確保と、将来の上位リーグへの編入（Transfer）のための戦略的な選択",
            ],
          ],
        },
      },
      {
        q: "GPA（内申）が 0.0点でも行けますか？",
        a: "米国には GPA が 0.0 でも進学できる学校とリーグが存在します。『今すぐ何点必要か』ではなく、学生の現在の状態を率直にお伝えいただければ、その状況からリーグでプレーできる最適な迂回戦略とマスタープランを見つけて策定いたします。",
      },
      {
        q: "費用と奨学金は、現実的にどうなりますか？",
        a: "テニスの実力に応じて、最大100%の奨学金を受けることが可能です。ただし、単なる奨学金の額よりも重要なのは、学費や生活費などをすべて含めた『実質的な支出見込み額』です。保護者の方が現実的な予算を共有してくだされば、その予算にぴったり合う機会を学校と確認し、入試戦略を導き出します。",
      },
      {
        q: "英語がまったくできないのですが、どうすればよいですか？",
        a: "ご心配はいりません。お子さまが現在トレーニングしているアカデミーの場所とスケジュールを考慮し、運動と並行できるようハイブリッド（オンライン＋対面）方式でオーダーメイドの英語・学業コーチングを支援します。",
      },
      {
        q: "ケガなど、最悪の失敗ケースにはどう対処しますか？",
        a: "万一ケガでテニスを続けられない状況になっても、道が途絶えるわけではありません。高校の卒業証書さえあれば、就職に有望な専攻や上位3%以内の学校へ入学できるようプランBを始動します。卒業証書がない場合は、ご希望の方式（オンライン・対面）で高校の学位を取得する過程から一緒に歩んでいきます。",
      },
    ],
  },
};

const it: ConsultingExtra = {
  hero: {
    eyebrow: "TENNIS ELITE FROM KOREA",
    title: "GCM Players non riguarda solo il giocare bene —\nma il progettare il percorso per crescere.",
    sub: "Non lasciare che il potenziale di tuo figlio sia definito dall'ambiente o dai limiti di oggi.\nAffinché ogni goccia di sudore diventi la vita più brillante oltre i vent'anni,\nGCM apre la roadmap più sicura per la crescita.",
  },
  philosophy: {
    title: "Una vita oltre l'atleta — ciò che viene dopo i vent'anni",
    paragraphs: [
      "Cari genitori, avete mai immaginato il momento in cui vostro figlio poserà la racchetta per sempre? Il percorso dello sport d'élite porta sempre con sé incertezze, grandi e piccole.",
      "Ma una volta abbandonata l'idea che 'lo sport sia solo per gli atleti', si apre un percorso del tutto nuovo. Il sistema universitario statunitense (NCAA/NJCAA) riduce al minimo l'incertezza dello sport d'élite e, anche in caso di infortunio o cambio di direzione, trasforma il sudore di vostro figlio nella più solida 'credenziale di vita'.",
    ],
    points: [
      {
        icon: "shield",
        title: "La rete di carriera più sicura",
        body: "La disciplina e il senso di responsabilità forgiati attraverso il tennis diventano risorse fondamentali della leadership globale.",
      },
      {
        icon: "book",
        title: "Un'espansione di carriera senza limiti",
        body: "Prepara il futuro con la libera scelta del corso di studi: business, dati, sports management e altro ancora.",
      },
    ],
  },
  investment: {
    title: "Quattro anni di università sono un 'investimento', non un costo",
    sub: "L'esperienza NCAA/NJCAA rende l'atleta una risorsa immediatamente spendibile per le squadre professionistiche nazionali — garantendo stipendi e premi alla firma più elevati — e diventa un vantaggio per tutta la vita sul più ampio palcoscenico del business globale.",
    booking: {
      title: "Prenota una consulenza 1:1 e una valutazione del potenziale",
      sub: "Insieme a un coach specializzato, valutiamo il potenziale nascosto e illimitato di vostro figlio.",
      cta: "Richiedi una consulenza",
    },
  },
  roleModels: {
    title: "Modelli di riferimento che hanno trasformato la possibilità in realtà",
    lead: "Il sistema NCAA/NJCAA dimostra un'ampia gamma di possibilità — dal tour professionistico alla leadership aziendale.",
    items: [
      {
        name: "Ben Shelton",
        school: "University of Florida",
        image: "/rolemodels/ben-shelton.png",
        body: "Dopo aver vinto un titolo NCAA in singolare attraverso il tennis universitario ed essere passato professionista, è cresciuto fino a diventare un giocatore ai vertici del tour ATP — la storia di successo nello sport d'élite più rappresentativa del moderno sistema universitario.",
      },
      {
        name: "Kaes Van't Hof",
        school: "Univ. of Southern California (USC)",
        image: "/rolemodels/kaes-vant-hof.png",
        body: "Ex giocatore universitario (campione NCAA in doppio) che è passato senza soluzione di continuità a una carriera nel business e oggi ricopre il ruolo di dirigente C-level in una grande azienda energetica statunitense — un vero leader globale.",
      },
      {
        name: "Janice Tjen",
        school: "Pepperdine University",
        image: "/rolemodels/janice-tjen.png",
        body: "Dopo un secondo posto nel doppio femminile NCAA, ha raggiunto il WTA Tour e il tabellone principale dell'US Open — un modello di riferimento di primo piano per la crescita dei giocatori asiatici.",
      },
      {
        name: "CiCi Bellis",
        school: "Indiana University",
        image: "/rolemodels/cici-bellis.png",
        body: "Un tempo acclamata come prodigio adolescente prima di ritirarsi per infortunio, ha fatto leva sugli studi per fondare una società di venture capital nel settore sanitario — un esempio eccezionale di come 'trasformare la crisi in opportunità'.",
      },
    ],
  },
  roadmap: {
    title: "Una roadmap su misura per la fase di crescita di vostro figlio",
    lead: "Quando il punto di partenza è diverso, anche la strategia deve adattarsi di conseguenza.",
    plans: [
      {
        badge: "PLAN A",
        title: "Roadmap per la scuola primaria",
        tags: "#Branding_a_lungo_termine #Obiettivo_borsa_totale_NCAA_D1",
        body: "Costruiamo basi solide nell'allenamento in patria e nell'inglese di base, aumentando al contempo in modo sistematico il ranking juniores attraverso una pianificazione dei tornei UTR. Progettiamo con ampio margine la roadmap ideale per una borsa di studio totale nella NCAA D1 di alto livello.",
      },
      {
        badge: "PLAN B",
        title: "Roadmap per la scuola superiore",
        tags: "#Percorso_accelerato #Matching_universitario_mirato",
        body: "Ci concentriamo sulla produzione di un highlight reel convincente e sul raggiungimento dei punteggi minimi di GPA e lingua in breve tempo. Individuiamo le università più adatte al budget e al livello attuali e avviamo immediatamente i contatti di recruiting.",
      },
      {
        badge: "PLAN C",
        title: "Roadmap universitaria / di trasferimento",
        tags: "#Salto_di_carriera #Collegamento_con_squadre_pro_nazionali",
        body: "Una strategia per chi frequenta attualmente un'università coreana o si trasferisce in un campionato NCAA di alto livello tramite il community college. Supportiamo anche un ritorno flessibile a una squadra professionistica nazionale dopo l'esperienza nei campionati statunitensi.",
      },
    ],
  },
  allCare: {
    title: "Il sistema All-Care ideale",
    lead: "I risultati si decidono nei dettagli. Gestiamo gli atleti come professionisti — ancor prima che diventino professionisti.",
    items: [
      {
        icon: "map",
        title: "Rete di coach pronta alla competizione",
        body: "In partnership con oltre 300 accademie di tennis in tutta la Corea, così vostro figlio può allenarsi ovunque desideri. (Le strutture non convenzionate vengono collegate tramite una valutazione separata.)",
      },
      {
        icon: "target",
        title: "Showcase e recruiting",
        body: "Attraverso una solida rete di contatti con i coach universitari statunitensi, elaboriamo una strategia di showcase su misura che metta in risalto i punti di forza dello studente e ci assicuriamo in anticipo le offerte.",
      },
      {
        icon: "video",
        title: "Analisi video e dati",
        body: "Non semplici riprese delle partite: produciamo video highlight convincenti basati sulle statistiche tecniche e sui dati UTR che i coach universitari considerano più importanti.",
      },
      {
        icon: "cap",
        title: "Carriera accademica e idoneità",
        body: "Gestiamo da vicino l'intero processo — SAT, TOEFL, GPA e altro — per soddisfare pienamente le complesse regole di idoneità NCAA/NJCAA.",
      },
      {
        icon: "globe",
        title: "Personal branding dell'atleta",
        body: "Oltre all'abilità, coltiviamo interviste con i media, galateo del business globale e reputazione in un unico 'brand', formando un talento di respiro globale.",
      },
      {
        icon: "award",
        title: "Valutazione d'ingresso NCAA D1",
        body: "Inviateci il profilo attuale e i video e uno specialista fornirà una valutazione obiettiva.",
        cta: "Richiedi una valutazione",
      },
    ],
  },
  faq: {
    title: "Rispondiamo alle preoccupazioni concrete dei genitori",
    lead: "Proprio come ogni bambino è diverso, non esiste un'unica risposta prestabilita. GCM trova soluzioni trasparenti e realistiche.",
    items: [
      {
        q: "A quali università può accedere mio figlio con il suo UTR?",
        a: "L'UTR è solo la prima chiave che apre la porta delle opportunità — non un criterio assoluto. Deve venire prima un'analisi approfondita dell'indole del ragazzo, della città preferita e dell'ambiente di allenamento. La nostra filosofia è procedere solo quando l'atleta e la famiglia sono allineati al 100%, anche sulle piccole decisioni.",
        table: {
          head: ["Campionato obiettivo", "UTR (M)", "UTR (F)", "Strategia di matching"],
          rows: [
            [
              "NCAA D1 (Top Tier)",
              "12.5+",
              "10.0+",
              "Puntare ai migliori programmi dove sono possibili la trattativa per una borsa totale e un percorso verso il tour",
            ],
            [
              "NCAA D1/D2 (Mid Tier)",
              "11.5 - 12.4",
              "8.5 - 9.9",
              "Abbinamento con università statali e prestigiose scuole private con un ottimo equilibrio tra studio e sport",
            ],
            [
              "NCAA D3/NAIA/NJCAA",
              "10.0 - 11.4",
              "7.0 - 8.4",
              "Una scelta strategica per assicurarsi borse di studio e in seguito trasferirsi (Transfer) in un campionato di livello superiore",
            ],
          ],
        },
      },
      {
        q: "È possibile anche con un GPA di 0.0?",
        a: "Negli Stati Uniti esistono scuole e campionati in cui si può entrare anche con un GPA di 0.0. La domanda non è 'quanti punti servono proprio ora', ma piuttosto: condividete con sincerità la situazione attuale dello studente e noi troveremo ed elaboreremo la strategia alternativa ottimale e il piano generale per giocare in un campionato partendo da quella situazione.",
      },
      {
        q: "Come funzionano realisticamente i costi e le borse di studio?",
        a: "A seconda dell'abilità tennistica, è possibile ottenere una borsa di studio fino al 100%. Ma più importante della sola cifra della borsa è la 'spesa reale prevista', comprensiva di retta, costi di vita e altro. Condividete il vostro budget realistico e verificheremo con le scuole le opportunità che vi si adattano, ricavandone una strategia di ammissione.",
      },
      {
        q: "E se mio figlio non sa affatto l'inglese?",
        a: "Non c'è bisogno di preoccuparsi. Tenendo conto della sede e degli orari dell'accademia in cui vostro figlio si allena attualmente, offriamo un coaching di inglese e di supporto allo studio su misura in formato ibrido (online + in presenza), così da poter procedere parallelamente all'allenamento.",
      },
      {
        q: "Come gestite gli scenari peggiori, come un infortunio?",
        a: "Anche se un infortunio dovesse rendere impossibile il tennis, il percorso non finisce. Con il solo diploma di scuola superiore, attiviamo il Plan B affinché lo studente possa accedere a un corso di studi con buone prospettive occupazionali o a una scuola tra il 3% migliore. Senza diploma, percorriamo insieme il processo per conseguire il titolo di scuola superiore, nel formato che preferite (online/in presenza).",
      },
    ],
  },
};

const fr: ConsultingExtra = {
  hero: {
    eyebrow: "TENNIS ELITE FROM KOREA",
    title: "GCM Players ne se résume pas à bien jouer —\nil s'agit de concevoir le chemin pour grandir.",
    sub: "Ne laissez pas le potentiel de votre enfant être défini par l'environnement ou les limites d'aujourd'hui.\nAfin que chaque goutte de sueur devienne la vie la plus éclatante au-delà de vingt ans,\nGCM ouvre la feuille de route la plus sûre vers la croissance.",
  },
  philosophy: {
    title: "Une vie au-delà de l'athlète — ce qui vient après vingt ans",
    paragraphs: [
      "Chers parents, avez-vous déjà imaginé le moment où votre enfant posera définitivement sa raquette ? Le parcours du sport d'élite s'accompagne toujours d'incertitudes, grandes et petites.",
      "Mais dès que l'on abandonne l'idée selon laquelle « le sport n'est réservé qu'aux athlètes », un chemin entièrement nouveau apparaît. Le système universitaire américain (NCAA/NJCAA) réduit au minimum l'incertitude du sport d'élite et, même en cas de blessure ou de changement d'orientation, transforme la sueur de votre enfant en la plus solide « référence pour la vie ».",
    ],
    points: [
      {
        icon: "shield",
        title: "Le réseau de carrière le plus sûr",
        body: "La discipline et le sens des responsabilités forgés par le tennis deviennent des atouts essentiels du leadership mondial.",
      },
      {
        icon: "book",
        title: "Une expansion de carrière sans limites",
        body: "Préparez l'avenir grâce au libre choix de la spécialité — business, données, sports management et bien plus encore.",
      },
    ],
  },
  investment: {
    title: "Quatre années d'université sont un « investissement », non un coût",
    sub: "L'expérience NCAA/NJCAA fait de l'athlète un atout immédiatement opérationnel pour les équipes professionnelles nationales — lui permettant d'espérer des salaires et des primes à la signature plus élevés — et devient un avantage pour la vie sur la scène plus large du business mondial.",
    booking: {
      title: "Réservez une consultation individuelle et un diagnostic de potentiel",
      sub: "Avec un coach spécialisé, nous évaluons le potentiel caché et illimité de votre enfant.",
      cta: "Demander une consultation",
    },
  },
  roleModels: {
    title: "Des modèles qui ont transformé la possibilité en réalité",
    lead: "Le système NCAA/NJCAA prouve un large éventail de possibilités — du circuit professionnel au leadership dans le monde des affaires.",
    items: [
      {
        name: "Ben Shelton",
        school: "University of Florida",
        image: "/rolemodels/ben-shelton.png",
        body: "Après avoir remporté un titre NCAA en simple grâce au tennis universitaire et être passé professionnel, il est devenu l'un des meilleurs joueurs du circuit ATP — l'exemple de réussite dans le sport d'élite le plus représentatif du système universitaire moderne.",
      },
      {
        name: "Kaes Van't Hof",
        school: "Univ. of Southern California (USC)",
        image: "/rolemodels/kaes-vant-hof.png",
        body: "Ancien joueur universitaire (champion NCAA en double), il a opéré une transition sans accroc vers une carrière dans les affaires et occupe aujourd'hui un poste de cadre dirigeant (C-level) dans une grande entreprise énergétique américaine — un véritable leader mondial.",
      },
      {
        name: "Janice Tjen",
        school: "Pepperdine University",
        image: "/rolemodels/janice-tjen.png",
        body: "Après une finale en double dames NCAA, elle a atteint le WTA Tour et le tableau principal de l'US Open — un modèle de premier plan pour l'essor des joueurs asiatiques.",
      },
      {
        name: "CiCi Bellis",
        school: "Indiana University",
        image: "/rolemodels/cici-bellis.png",
        body: "Autrefois saluée comme un prodige à l'adolescence avant de prendre sa retraite pour cause de blessure, elle s'est appuyée sur ses études pour fonder une société de capital-risque dans le secteur de la santé — un exemple remarquable de « transformation de la crise en opportunité ».",
      },
    ],
  },
  roadmap: {
    title: "Une feuille de route sur mesure selon l'étape de votre enfant",
    lead: "Lorsque le point de départ diffère, la stratégie doit s'adapter en conséquence.",
    plans: [
      {
        badge: "PLAN A",
        title: "Feuille de route pour l'école primaire",
        tags: "#Branding_à_long_terme #Objectif_bourse_intégrale_NCAA_D1",
        body: "Nous bâtissons des bases solides en entraînement national et en anglais de base, tout en élevant systématiquement le classement junior grâce à une planification des tournois UTR. Nous concevons avec une marge confortable la feuille de route idéale vers une bourse intégrale en NCAA D1 de haut niveau.",
      },
      {
        badge: "PLAN B",
        title: "Feuille de route pour le lycée",
        tags: "#Parcours_accéléré #Ciblage_universitaire_personnalisé",
        body: "Nous nous concentrons sur la production d'une vidéo de temps forts convaincante et sur l'obtention des scores minimaux de GPA et de langue en peu de temps. Nous ciblons les universités les mieux adaptées à votre budget et à votre niveau actuels, et entamons immédiatement les contacts de recrutement.",
      },
      {
        badge: "PLAN C",
        title: "Feuille de route université / transfert",
        tags: "#Accélération_de_carrière #Lien_avec_équipes_pro_nationales",
        body: "Une stratégie pour celles et ceux actuellement inscrits dans une université coréenne ou qui rejoignent un championnat NCAA de haut niveau via un community college. Nous accompagnons également un retour flexible vers une équipe professionnelle nationale après une expérience dans les championnats américains.",
      },
    ],
  },
  allCare: {
    title: "Le système All-Care idéal",
    lead: "Les résultats se jouent dans les détails. Nous encadrons les athlètes comme des professionnels — avant même qu'ils ne le deviennent.",
    items: [
      {
        icon: "map",
        title: "Réseau de coachs prêt pour la compétition",
        body: "En partenariat avec plus de 300 académies de tennis dans toute la Corée, votre enfant peut s'entraîner où il le souhaite. (Les structures non partenaires sont mises en relation après une évaluation distincte.)",
      },
      {
        icon: "target",
        title: "Showcase et recrutement",
        body: "Grâce à un solide réseau avec les coachs universitaires américains, nous élaborons une stratégie de showcase sur mesure qui met en valeur les atouts de l'élève et sécurisons les offres de manière proactive.",
      },
      {
        icon: "video",
        title: "Analyse vidéo et données",
        body: "Pas de simples images de match : nous produisons des vidéos de temps forts convaincantes à partir des statistiques techniques et des données UTR que les coachs universitaires privilégient le plus.",
      },
      {
        icon: "cap",
        title: "Scolarité et éligibilité",
        body: "Nous suivons de près l'ensemble du processus — SAT, TOEFL, GPA et plus encore — afin de satisfaire pleinement aux règles d'éligibilité complexes de la NCAA/NJCAA.",
      },
      {
        icon: "globe",
        title: "Personal branding de l'athlète",
        body: "Au-delà du talent, nous cultivons les interviews médiatiques, les bonnes manières du business mondial et la réputation pour en faire une véritable « marque », formant ainsi un talent de dimension internationale.",
      },
      {
        icon: "award",
        title: "Diagnostic d'entrée en NCAA D1",
        body: "Envoyez-nous votre profil actuel et vos vidéos, et un spécialiste vous fournira un diagnostic objectif.",
        cta: "Demander un diagnostic",
      },
    ],
  },
  faq: {
    title: "Nous répondons aux préoccupations concrètes des parents",
    lead: "Tout comme chaque enfant est différent, il n'existe pas de réponse unique et figée. GCM trouve des solutions transparentes et réalistes.",
    items: [
      {
        q: "Quelles universités mon enfant peut-il atteindre avec son UTR ?",
        a: "L'UTR n'est que la première clé qui ouvre la porte des opportunités — ce n'est pas un critère absolu. Une analyse approfondie du tempérament de l'enfant, de la ville qu'il privilégie et de l'environnement d'entraînement doit venir d'abord. Notre philosophie est de n'avancer que lorsque l'athlète et la famille sont alignés à 100 %, même sur les petites décisions.",
        table: {
          head: ["Championnat visé", "UTR (H)", "UTR (F)", "Stratégie de matching"],
          rows: [
            [
              "NCAA D1 (Top Tier)",
              "12.5+",
              "10.0+",
              "Viser les meilleurs programmes où une négociation de bourse intégrale et un accès au circuit sont possibles",
            ],
            [
              "NCAA D1/D2 (Mid Tier)",
              "11.5 - 12.4",
              "8.5 - 9.9",
              "Mise en relation avec des universités d'État et de prestigieuses écoles privées offrant un excellent équilibre études-sport",
            ],
            [
              "NCAA D3/NAIA/NJCAA",
              "10.0 - 11.4",
              "7.0 - 8.4",
              "Un choix stratégique pour obtenir des bourses et transférer ensuite (Transfer) vers un championnat de niveau supérieur",
            ],
          ],
        },
      },
      {
        q: "Est-ce possible même avec un GPA de 0.0 ?",
        a: "Aux États-Unis, il existe des écoles et des championnats accessibles même avec un GPA de 0.0. La question n'est pas « combien de points vous faut-il tout de suite », mais plutôt : partagez honnêtement la situation actuelle de l'élève, et nous trouverons et bâtirons la stratégie de contournement optimale ainsi que le plan d'ensemble pour jouer dans un championnat à partir de cette situation.",
      },
      {
        q: "Concrètement, comment fonctionnent les coûts et les bourses ?",
        a: "Selon le niveau de tennis, une bourse allant jusqu'à 100 % est possible. Mais plus important que le seul montant de la bourse, il y a la « dépense réelle prévue » — incluant les frais de scolarité, le coût de la vie et davantage. Partagez votre budget réaliste et nous confirmerons auprès des écoles les opportunités qui y correspondent afin d'en dégager une stratégie d'admission.",
      },
      {
        q: "Et si mon enfant ne parle pas du tout anglais ?",
        a: "Pas d'inquiétude. En tenant compte du lieu et de l'emploi du temps de l'académie où votre enfant s'entraîne actuellement, nous proposons un accompagnement d'anglais et de scolarité sur mesure, au format hybride (en ligne + en présentiel), afin qu'il puisse se dérouler en parallèle de l'entraînement.",
      },
      {
        q: "Comment gérez-vous les pires scénarios, comme une blessure ?",
        a: "Même si une blessure rend le tennis impossible, le chemin ne s'arrête pas. Avec le seul diplôme de fin d'études secondaires, nous activons le Plan B pour que l'élève puisse intégrer une filière à bons débouchés ou une école parmi les 3 % les meilleures. Sans diplôme, nous parcourons ensemble le processus d'obtention du diplôme du secondaire, dans le format que vous préférez (en ligne / en présentiel).",
      },
    ],
  },
};

const es: ConsultingExtra = {
  hero: {
    eyebrow: "TENNIS ELITE FROM KOREA",
    title: "GCM Players no se trata solo de jugar bien:\nse trata de diseñar el camino para crecer.",
    sub: "No dejes que el potencial de tu hijo quede definido por el entorno o los límites de hoy.\nPara que cada gota de sudor se convierta en la vida más brillante más allá de los veinte años,\nGCM abre la hoja de ruta más segura hacia el crecimiento.",
  },
  philosophy: {
    title: "Una vida más allá del atleta: lo que viene después de los veinte",
    paragraphs: [
      "Queridos padres: ¿alguna vez han imaginado el momento en que su hijo deje la raqueta para siempre? El camino del deporte de élite siempre conlleva incertidumbres, grandes y pequeñas.",
      "Pero en cuanto se abandona la idea de que «el deporte es solo para atletas», aparece un camino completamente nuevo. El sistema universitario estadounidense (NCAA/NJCAA) reduce al mínimo la incertidumbre del deporte de élite y, incluso en caso de lesión o cambio de rumbo, convierte el sudor de su hijo en la más sólida «credencial de vida».",
    ],
    points: [
      {
        icon: "shield",
        title: "La red de carrera más segura",
        body: "La disciplina y la responsabilidad forjadas a través del tenis se convierten en activos esenciales del liderazgo global.",
      },
      {
        icon: "book",
        title: "Una expansión de carrera sin límites",
        body: "Prepara el futuro con la libre elección de la especialidad: negocios, datos, sports management y mucho más.",
      },
    ],
  },
  investment: {
    title: "Cuatro años de universidad son una «inversión», no un gasto",
    sub: "La experiencia en la NCAA/NJCAA convierte al atleta en un activo inmediato para los equipos profesionales nacionales —con expectativas de salarios y primas de fichaje más altos— y se convierte en una ventaja para toda la vida en el escenario más amplio de los negocios globales.",
    booking: {
      title: "Reserva una asesoría 1:1 y un diagnóstico de potencial",
      sub: "Junto a un entrenador especializado, evaluamos el potencial oculto e ilimitado de su hijo.",
      cta: "Solicitar asesoría",
    },
  },
  roleModels: {
    title: "Modelos a seguir que convirtieron la posibilidad en realidad",
    lead: "El sistema NCAA/NJCAA demuestra un amplio abanico de posibilidades: desde el circuito profesional hasta el liderazgo empresarial.",
    items: [
      {
        name: "Ben Shelton",
        school: "University of Florida",
        image: "/rolemodels/ben-shelton.png",
        body: "Tras ganar un título individual de la NCAA a través del tenis universitario y pasar al profesionalismo, llegó a convertirse en uno de los jugadores mejor clasificados del circuito ATP: el caso de éxito en el deporte de élite más representativo del moderno sistema universitario.",
      },
      {
        name: "Kaes Van't Hof",
        school: "Univ. of Southern California (USC)",
        image: "/rolemodels/kaes-vant-hof.png",
        body: "Exjugador universitario (campeón de dobles de la NCAA) que dio el salto sin fisuras a una carrera en los negocios y hoy se desempeña como directivo de alto nivel (C-level) en una gran empresa energética estadounidense: todo un líder global.",
      },
      {
        name: "Janice Tjen",
        school: "Pepperdine University",
        image: "/rolemodels/janice-tjen.png",
        body: "Tras un subcampeonato en dobles femenino de la NCAA, alcanzó el WTA Tour y el cuadro principal del US Open: un modelo a seguir destacado para el crecimiento de los jugadores asiáticos.",
      },
      {
        name: "CiCi Bellis",
        school: "Indiana University",
        image: "/rolemodels/cici-bellis.png",
        body: "En su día aclamada como una prodigio adolescente antes de retirarse por lesión, se apoyó en sus estudios para fundar una firma de capital de riesgo en el sector sanitario: un ejemplo sobresaliente de cómo «convertir la crisis en oportunidad».",
      },
    ],
  },
  roadmap: {
    title: "Una hoja de ruta a medida para la etapa de su hijo",
    lead: "Cuando el punto de partida es distinto, la estrategia también debe adaptarse con flexibilidad.",
    plans: [
      {
        badge: "PLAN A",
        title: "Hoja de ruta para primaria",
        tags: "#Branding_a_largo_plazo #Objetivo_beca_completa_NCAA_D1",
        body: "Construimos una base sólida en el entrenamiento nacional y en el inglés básico, al tiempo que elevamos de forma sistemática el ranking juvenil mediante una planificación de torneos UTR. Diseñamos con amplio margen la hoja de ruta ideal hacia una beca completa en la NCAA D1 de primer nivel.",
      },
      {
        badge: "PLAN B",
        title: "Hoja de ruta para secundaria",
        tags: "#Vía_rápida #Selección_universitaria_personalizada",
        body: "Nos centramos en producir un vídeo de momentos destacados atractivo y en asegurar las puntuaciones mínimas de GPA e idioma en poco tiempo. Fijamos como objetivo las universidades que mejor se ajustan a su presupuesto y nivel actuales, e iniciamos de inmediato el contacto de reclutamiento.",
      },
      {
        badge: "PLAN C",
        title: "Hoja de ruta universitaria / de transferencia",
        tags: "#Salto_de_carrera #Vínculo_con_equipos_pro_nacionales",
        body: "Una estrategia para quienes cursan actualmente una universidad coreana o se transfieren a una liga NCAA de alto nivel a través de un community college. También apoyamos un regreso flexible a un equipo profesional nacional tras la experiencia en las ligas estadounidenses.",
      },
    ],
  },
  allCare: {
    title: "El sistema All-Care ideal",
    lead: "Los resultados se deciden en los detalles. Gestionamos a los atletas como profesionales, incluso antes de que lleguen a serlo.",
    items: [
      {
        icon: "map",
        title: "Red de entrenadores lista para la competición",
        body: "Contamos con convenios con más de 300 academias de tenis en toda Corea, de modo que su hijo pueda entrenar donde quiera. (Las instalaciones sin convenio se vinculan mediante una evaluación independiente.)",
      },
      {
        icon: "target",
        title: "Showcase y reclutamiento",
        body: "A través de una sólida red de contactos con entrenadores universitarios estadounidenses, diseñamos una estrategia de showcase a medida que resalta las fortalezas del estudiante y aseguramos ofertas de forma anticipada.",
      },
      {
        icon: "video",
        title: "Análisis de vídeo y datos",
        body: "No se trata de simples grabaciones de partidos: producimos vídeos de momentos destacados atractivos a partir de las estadísticas técnicas y los datos UTR que más valoran los entrenadores universitarios.",
      },
      {
        icon: "cap",
        title: "Gestión académica y de elegibilidad",
        body: "Gestionamos de cerca todo el proceso —SAT, TOEFL, GPA y más— para cumplir plenamente las complejas normas de elegibilidad de la NCAA/NJCAA.",
      },
      {
        icon: "globe",
        title: "Personal branding del atleta",
        body: "Más allá de la habilidad, cultivamos las entrevistas con los medios, la etiqueta del business global y la reputación como una única «marca», formando un talento de alcance global.",
      },
      {
        icon: "award",
        title: "Diagnóstico de acceso a la NCAA D1",
        body: "Envíenos su perfil actual y sus vídeos, y un especialista le ofrecerá un diagnóstico objetivo.",
        cta: "Solicitar diagnóstico",
      },
    ],
  },
  faq: {
    title: "Respondemos a las preocupaciones reales de los padres",
    lead: "Al igual que cada niño es diferente, no existe una única respuesta fija. GCM busca soluciones transparentes y realistas.",
    items: [
      {
        q: "¿A qué universidades puede acceder mi hijo con su UTR?",
        a: "El UTR es solo la primera llave que abre la puerta de las oportunidades, no un criterio absoluto. Primero debe realizarse un análisis en profundidad del carácter del niño, la ciudad que prefiere y el ambiente de entrenamiento. Nuestra filosofía es avanzar solo cuando el atleta y la familia están alineados al 100 %, incluso en las pequeñas decisiones.",
        table: {
          head: ["Liga objetivo", "UTR (M)", "UTR (F)", "Estrategia de matching"],
          rows: [
            [
              "NCAA D1 (Top Tier)",
              "12.5+",
              "10.0+",
              "Apuntar a los mejores programas donde son posibles la negociación de una beca completa y una vía hacia el circuito",
            ],
            [
              "NCAA D1/D2 (Mid Tier)",
              "11.5 - 12.4",
              "8.5 - 9.9",
              "Emparejamiento con universidades estatales y prestigiosas escuelas privadas con un excelente equilibrio entre estudios y deporte",
            ],
            [
              "NCAA D3/NAIA/NJCAA",
              "10.0 - 11.4",
              "7.0 - 8.4",
              "Una elección estratégica para asegurar becas y después transferirse (Transfer) a una liga de nivel superior",
            ],
          ],
        },
      },
      {
        q: "¿Es posible incluso con un GPA de 0.0?",
        a: "En Estados Unidos existen escuelas y ligas a las que se puede acceder incluso con un GPA de 0.0. La cuestión no es «cuántos puntos se necesitan ahora mismo», sino que, si comparte con sinceridad la situación actual del estudiante, encontraremos y elaboraremos la estrategia alternativa óptima y el plan maestro para poder competir en una liga a partir de esa situación.",
      },
      {
        q: "¿Cómo funcionan de forma realista los costes y las becas?",
        a: "Según el nivel de tenis, es posible obtener una beca de hasta el 100 %. Pero más importante que la mera cifra de la beca es el «gasto real previsto», que incluye matrícula, costes de vida y más. Comparta su presupuesto realista y confirmaremos con las escuelas las oportunidades que se ajusten a él para derivar una estrategia de admisión.",
      },
      {
        q: "¿Qué pasa si mi hijo no habla nada de inglés?",
        a: "No hay de qué preocuparse. Teniendo en cuenta la ubicación y el horario de la academia donde su hijo entrena actualmente, ofrecemos un coaching de inglés y apoyo académico a medida en formato híbrido (en línea + presencial), de modo que pueda compaginarse con el entrenamiento.",
      },
      {
        q: "¿Cómo afrontan los peores escenarios, como una lesión?",
        a: "Aunque una lesión impida seguir jugando al tenis, el camino no termina. Con solo el diploma de secundaria, activamos el Plan B para que el estudiante pueda acceder a una carrera con buenas salidas laborales o a una escuela entre el 3 % mejor. Sin diploma, recorremos juntos el proceso de obtener el título de secundaria, en el formato que prefiera (en línea/presencial).",
      },
    ],
  },
};

export function getConsultingExtra(locale: Locale): ConsultingExtra {
  const byLocale: Partial<Record<Locale, ConsultingExtra>> = { en, zh, ja, it, fr, es };
  return locale === "ko" ? ko : (byLocale[locale] ?? en);
}
