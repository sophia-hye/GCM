import * as ko from "@/lib/site-data";
import type { Locale } from "@/lib/i18n";

/**
 * 이중언어 콘텐츠 사전.
 * ko: 기존 site-data 값 재사용. en: 영어 번역.
 * 컴포넌트는 getDict(locale) 로 받아 사용한다.
 */

const enHeroSlides = [
  {
    eyebrow: "GLOBAL CHAMPIONS MAKERS",
    headline: "WE MAKE GLOBAL",
    accent: "Champions",
    sub: "We build champions for the world stage — technique, physical, mental as one.",
  },
  {
    eyebrow: "TECHNIQUE · PHYSICAL · MENTAL",
    headline: "CHAMPIONS ARE",
    accent: "Made Here",
    sub: "Talent is only the start. Champions are made through daily training.",
  },
  {
    eyebrow: "JUNIOR · PRO · ADULT",
    headline: "YOUR GAME, OUR",
    accent: "Mission",
    sub: "Every step of the way, GCM is with you.",
  },
];

const enStats = [
  { value: "CLAY", label: "Court Surface", suffix: "" },
  { value: "6", label: "Weekly Training", suffix: "d" },
  { value: "2", label: "Career Tracks (Pro · College)", suffix: "" },
];

const enProgramsLead =
  "Three tracks tailored to each athlete's stage and goals. We start from where you are now.";

const enPrograms = [
  {
    no: "01",
    key: "KIDS",
    target: "Starting Tennis · U6–U10",
    duration: "Foundation · Character stage",
    desc: "The first step with a racket — cooperation, leadership, character and teamwork at the core.",
    points: [
      "Cooperation · teamwork group training",
      "Leadership · character education",
      "Fundamentals · court adaptation",
    ],
  },
  {
    no: "02",
    key: "JUNIOR",
    target: "Junior Elite · U10–U18",
    duration: "Long-term development path",
    desc: "From fundamentals to international competition — a long-term roadmap to becoming an elite player.",
    points: [
      "U10–12: fundamentals · athleticism · coordination",
      "U14: competitive training habits · technical refinement",
      "U18: domestic/overseas college or pro preparation",
    ],
  },
  {
    no: "03",
    key: "PRO",
    target: "Pro Aspirants · Tour",
    duration: "Weekly / Monthly / Full season",
    desc: "High-intensity performance management for tour competition and pro-team entry.",
    points: [
      "Pattern-based training · match scenarios · KPI feedback",
      "Tour schedule · tournament travel management",
      "Pro-team contract consulting",
    ],
  },
];

const enFounding = {
  title: "Why GCM Was Founded",
  lead: "GCM was founded to be an academy that takes responsibility for an athlete's growth and career to the very end.",
  paragraphs: [
    "Good players are not made by chance. Even talented players stall without a growth path. GCM diagnoses where an athlete stands today and connects training, competition, mental routines and career planning into one. We see athletes as a process of moving to the next level, not as short-term results.",
    "The path of elite tennis is not completed by talent alone. It requires systematic training, data-based career design, and mental care that holds you steady when you waver.",
    "GCM (Global Champions Makers) is an integrated performance model where multiple experts take responsibility for one athlete, designing the path from junior to pro and college.",
    "We don't leave results to chance. We believe a structured process creates results.",
  ],
};

const enWhoWeAre = {
  title: "Who GCM Is",
  lead: "A high-performance tennis academy led by founder Oh Seong-gook and the coaching staff. Structured training that integrates technique, physical and mental builds an athlete's long-term growth.",
  pillars: [
    {
      en: "Mentality",
      title: "Mentality",
      body: "Players with responsibility · grit · passion · resilience · emotional control. Mental care centered on character and teamwork begins from the kids stage.",
    },
    {
      en: "Goal & Training",
      title: "Goal Setting & Training",
      body: "High-level training · discipline · clear goal-setting to prepare for the next step.",
    },
    { en: "Achievements", title: "Achievements", body: "Process-driven · consistent · proven through performance reviews." },
    { en: "Athletes", title: "Athlete-Centered", body: "Individual growth · academic balance · long-term pathway." },
  ],
};

const enTeamLead =
  "An integrated performance team linking technique, mental and admissions. Multiple experts take responsibility for one athlete together.";

const enTeam = [
  {
    name: "Oh Seong-gook",
    role: "Founder · Director",
    bio: "Oversees elite tennis development and the design of individual growth roadmaps.",
    image: "/coaches/ohseonggook/IMG_2963.JPG",
    achievements: [
      "Current) GCM Academy Founder & Director",
      "GPTCA Level B.",
      "ATP singles career-high around 600",
      "Coached 3 top-20 junior players",
      "2013 Egypt ITF Futures — Champion",
      "2014 Gimcheon ITF Futures — Runner-up",
      "2016 97th National Sports Festival — Silver",
      "2017 Yeongwol Open — Runner-up",
      "2018 Gimcheon ITF Futures — Champion",
      "2019 100th National Sports Festival — Silver",
      "2024 103rd National Sports Festival — Bronze",
      "2024 Korea Tennis League (Corporate) — Doubles Champion",
    ],
  },
  {
    name: "Yoon Jae-won",
    role: "Head Coach · Technique · Physical",
    bio: "Head coach leading technical development and overall match operations, managing daily training and match coaching.",
    image: "",
    achievements: [] as string[],
  },
  {
    name: "Kim Ju-bin",
    role: "Coach · Technique · Mental",
    bio: "Responsible for overall tennis development, correcting competition anxiety and designing routines during match training.",
    image: "",
    achievements: [] as string[],
  },
];

const enDevelopmentSteps = [
  { n: "01", en: "Assessment", ko: "Diagnose current position" },
  { n: "02", en: "Training Design", ko: "Technique · physical · mental plan" },
  { n: "03", en: "Match Application", ko: "Apply match scenarios" },
  { n: "04", en: "Performance Review", ko: "Data · video feedback" },
  { n: "05", en: "Pathway Planning", ko: "Pro / college / pro-team direction" },
  { n: "06", en: "Next Level", ko: "Enter the next stage" },
];

const enTotalCare = [
  { name: "Academic", body: "Academic management for admissions, English communication, admission timelines and essay support." },
  { name: "Global Manner", body: "Pro etiquette for the international stage, media interview training, global manners." },
  { name: "Operations", body: "Tournament travel and stay scheduling, integrated performance-data management." },
];

const enTracks = {
  source: { title: "Elite Training", note: "Technique · physical · mental integrated" },
  a: {
    title: "Track A. Pro Tennis Player",
    badge: "Primary Goal",
    body: "Through domestic/overseas tournaments and tour experience, leading to a pro debut or pro-team entry.",
  },
  b: {
    title: "Track B. College Tennis Player",
    badge: "Pathway",
    body: "Competing on a college team while balancing study and sport — continuing both admission and an athletic career.",
  },
  quote: "Pro or college, we walk the athlete's path to the very end.",
};

const enProcessSteps = [
  { n: "01", title: "Assessment", body: "Diagnose current position via UTR/ITF records and skill evaluation" },
  { n: "02", title: "Targeting", body: "Select and contact target tournaments, colleges and teams" },
  { n: "03", title: "Preparation", body: "Focused technical, physical and mental preparation" },
  { n: "04", title: "Compete", body: "Tournament entry, match management and tactical support" },
  { n: "05", title: "Next Level", body: "Roadmap for the next stage — pro transition, college admission, etc." },
];

const enScholarship = {
  title: "Apply for Full · Partial Scholarship",
  lead: "We offer a limited number of scholarship spots each year. We select athletes with attitude, competitiveness and character.",
  points: [
    { title: "Eligibility", body: "Junior athletes aiming for ATP · WTA." },
    { title: "Selection Criteria", body: "Comprehensive review of attitude · competitiveness · ITF/national ranking · recent results · coachability." },
    { title: "Post-Selection Process", body: "We manage development stage · national ranking · ITF junior ranking · pro ranking as the athlete grows." },
  ],
  apply: [
    "Basic info (name · contact · birth year · nationality)",
    "Tennis profile (ITF ranking · national ranking · recent results)",
    "Physical info (height · weight · dominant hand · backhand type)",
    "Goals (strengths · areas to improve · short/mid-term goals)",
  ],
};

const enConsulting = {
  title: "GCM Consulting",
  lead: "Data-based career design and admissions consulting. We map out the athlete's next step together.",
  services: [
    { title: "Admissions Consulting", body: "UTR/results diagnosis, target college/team selection, highlight videos and coach contact." },
    { title: "Career Design", body: "Comparing pro and college tracks to design a long-term roadmap suited to the athlete." },
    { title: "Mental · Language Care", body: "Match mental management plus language and academic preparation for admissions." },
  ],
};

const enRecreational = {
  lead: "You don't have to be on the competitive team. We run kids and adult hobby classes to enjoy and learn.",
  classes: [
    {
      key: "KIDS",
      title: "Kids Class",
      age: "Ages 5–13",
      desc: "First tennis learned like play — athleticism, court adaptation and fundamentals, joyfully.",
      points: ["Small group coaching by age", "Fundamentals · footwork · coordination", "Fun-centered motivation"],
    },
    {
      key: "ADULT",
      title: "Adult Amateur Class",
      age: "Adult beginner–intermediate",
      desc: "Tennis that starts as a hobby and is enjoyed properly — from basics to tactics and game play.",
      points: ["Fundamentals · tactics classes", "Stroke · volley · serve", "Tactics · game play", "Club games · etiquette"],
    },
  ],
};

const enFaqContact = {
  title: "ARE YOU READY TO GO PRO & GROW?",
  sub: "Technique · physical · mental as one. GCM walks your next step with you.",
};

const enSite = {
  ...ko.site,
  tagline: "High-Performance Tennis Academy",
  address: "Dongtan, Hwaseong, Gyeonggi",
  hours: "Weekdays 09:00–19:00 · Weekends 09:00–17:00",
};

const enDict = {
  site: enSite,
  nav: ko.nav,
  heroSlides: enHeroSlides,
  stats: enStats,
  programsLead: enProgramsLead,
  programs: enPrograms,
  founding: enFounding,
  whoWeAre: enWhoWeAre,
  teamLead: enTeamLead,
  team: enTeam,
  developmentSteps: enDevelopmentSteps,
  totalCare: enTotalCare,
  tracks: enTracks,
  processSteps: enProcessSteps,
  scholarship: enScholarship,
  consulting: enConsulting,
  recreational: enRecreational,
  faqContact: enFaqContact,
};

const koDict = {
  site: ko.site,
  nav: ko.nav,
  heroSlides: ko.heroSlides,
  stats: ko.stats,
  programsLead: ko.programsLead,
  programs: ko.programs,
  founding: ko.founding,
  whoWeAre: ko.whoWeAre,
  teamLead: ko.teamLead,
  team: ko.team,
  developmentSteps: ko.developmentSteps,
  totalCare: ko.totalCare,
  tracks: ko.tracks,
  processSteps: ko.processSteps,
  scholarship: ko.scholarship,
  consulting: ko.consulting,
  recreational: ko.recreational,
  faqContact: ko.faqContact,
};

export type Dict = typeof enDict;

export function getDict(locale: Locale): Dict {
  return locale === "en" ? enDict : (koDict as unknown as Dict);
}

/** 컴포넌트 하드코딩 UI 문자열 (섹션 제목 등) */
export const UI = {
  ko: {
    programsTitle: "누구를 위한 프로그램인가",
    playersTitle: "배출 · 소속 선수",
    playersLead: "프로가 된 후가 아니라, 되기 전부터 브랜드를 함께 만듭니다.",
    playersComing: "배출·소속 선수 정보를 준비 중입니다. 곧 공개될 예정입니다.",
    testimonialsTitle: "선수와 학부모의 이야기",
    testimonialsComing: "선수와 학부모의 이야기를 준비하고 있습니다. 동의 확인 후 순차적으로 공개될 예정입니다.",
    teamTitle: "코치진 소개",
    coachBio: "약력 보기 →",
    curriculumTitle: "발달 커리큘럼 · 6단계 시스템",
    curriculumLead: "진단에서 다음 단계 진입까지, 선수의 성장을 6단계로 설계하고 순환시킵니다.",
    totalCareTitle: "Total Care System: 테니스 그 이상의 관리",
    totalCareLead: "기술부터 멘탈, 학업, 글로벌 매너, 운영까지 — 선수의 모든 것을 관리합니다.",
    safetyTitle: "두 갈래의 길",
    safetyTitleAccent: "프로 OR 대학",
    safetyLead: "탄탄한 트레이닝을 기점으로, 프로와 대학 두 갈래의 길로 선수를 이끕니다.",
    pathwayLabel: "Player Pathway · 5단계 프로세스",
    recreationalTitle: "키즈 & 아마추어 클럽",
    contactTitle: "문의하기",
    contactLead: "궁금한 점이 있으신가요? 편하신 방법으로 연락 주세요.",
    galleryTitle: "갤러리",
    galleryLead: "GCM의 트레이닝과 현장을 사진으로 만나보세요.",
    galleryComing: "갤러리 사진을 준비 중입니다. 곧 공개될 예정입니다.",
    ctaConsult: "선수 진로 상담",
    ctaPrograms: "프로그램 보기",
    classApply: "수업 신청",
    consultApply: "상담 신청",
  },
  en: {
    programsTitle: "Who Our Programs Are For",
    playersTitle: "Our Players",
    playersLead: "We build the brand together not after turning pro, but before.",
    playersComing: "Player information is being prepared and will be released soon.",
    testimonialsTitle: "Voices of Athletes & Parents",
    testimonialsComing: "Stories from athletes and parents are being prepared and will be published in order after consent.",
    teamTitle: "Meet the Coaches",
    coachBio: "View bio →",
    curriculumTitle: "Development Curriculum · 6-Step System",
    curriculumLead: "From assessment to the next level, we design and cycle an athlete's growth in six steps.",
    totalCareTitle: "Total Care System: Beyond Tennis",
    totalCareLead: "From technique to mental, academics, global manners and operations — we manage everything for the athlete.",
    safetyTitle: "Two Paths",
    safetyTitleAccent: "Pro OR College",
    safetyLead: "From a solid training base, we lead athletes down two paths: pro and college.",
    pathwayLabel: "Player Pathway · 5-Step Process",
    recreationalTitle: "Kids & Amateur Club",
    contactTitle: "Contact Us",
    contactLead: "Have a question? Reach out in whatever way is easiest for you.",
    galleryTitle: "Gallery",
    galleryLead: "See GCM's training and on-court moments in photos.",
    galleryComing: "Gallery photos are being prepared and will be released soon.",
    ctaConsult: "Player Career Consulting",
    ctaPrograms: "View Programs",
    classApply: "Apply for Class",
    consultApply: "Request Consulting",
  },
} as const;

export function getUI(locale: Locale) {
  return locale === "en" ? UI.en : UI.ko;
}
