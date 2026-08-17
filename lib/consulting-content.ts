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

export function getConsultingExtra(locale: Locale): ConsultingExtra {
  return locale === "en" ? en : ko;
}
