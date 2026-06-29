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
  "Across borders — from Italy, the world's No.1 tennis nation, to the USA and Shanghai — three tracks tailored to each athlete's stage and goals. We start from where you are now.";

const enPrograms = [
  {
    no: "01",
    key: "KIDS",
    target: "Starting Tennis · U6–U10",
    duration: "Foundation · Character stage",
    desc: "The first step with a racket, where children begin joyfully with cooperation, leadership, character and teamwork at the core.",
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
    desc: "From fundamentals to international competition, we design a long-term roadmap to becoming an elite player.",
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
    desc: "We provide high-intensity performance management for tour competition and pro-team entry.",
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
      body: "From the kids stage, we provide mental care centered on character and teamwork so athletes grow with responsibility, grit, resilience and emotional control.",
    },
    {
      en: "Goal & Training",
      title: "Goal Setting & Training",
      body: "We prepare athletes for the next step through high-level training, discipline and clear goal-setting.",
    },
    {
      en: "Achievements",
      title: "Achievements",
      body: "We prove growth through process-driven consistency and continuous performance reviews.",
    },
    {
      en: "Athletes",
      title: "Athlete-Centered",
      body: "We balance individual growth with academics and design a long-term pathway for each athlete.",
    },
  ],
};

const enTeamLead =
  "An integrated performance team linking technique, mental and admissions.\nMultiple experts take responsibility for one athlete together.";

const enTeam = [
  {
    name: "Oh Seong-gook",
    role: "Founder · Director",
    bio: "Oversees elite tennis development and the design of individual growth roadmaps.",
    image: "/coaches/ohseonggook/IMG_2963.JPG",
    achievements: [
      "Current) GCM Academy Founder & Director",
      "Former) Junior national team coach",
      "Coached 3 top-20 junior players",
      "GPTCA Level B.",
      "ATP singles career-high around 600",
      "2012 India ITF Futures — Doubles 3rd",
      "2013 Egypt ITF Futures — Doubles 3rd",
      "2013 Egypt ITF Futures — Doubles Champion",
      "2014 Gimcheon ITF Futures — Doubles Runner-up",
      "2014 Chuncheon Open — Mixed Doubles 3rd",
      "2015 KTA President's Cup — Mixed Doubles Champion",
      "2015 Anseong ITF Futures — Doubles 3rd",
      "2015 Corporate Tennis Masters — Doubles Runner-up",
      "2017 Gimcheon ITF Futures — Doubles 3rd",
      "2017 Anseong ITF Futures — Singles 3rd",
      "2017 Yeongwol Open — Singles Runner-up",
      "2017 India ITF Futures — Singles 3rd",
      "2017 Corporate Tennis Masters — Doubles Runner-up",
      "2018 Gimcheon ITF Futures — Singles Champion",
      "2018 Anseong ITF Futures — Singles 3rd",
      "2019 Daegu ITF Futures — Singles 3rd",
      "2019 Corporate League R1 — Team Runner-up",
      "2019 Corporate League R2 — Team Champion",
      "2019 Chuncheon Open — Doubles 3rd",
      "2024 Corporate League — Team 3rd",
      "2024 Corporate League — Doubles Champion",
      "97th National Sports Festival — Silver",
      "100th National Sports Festival — Silver",
      "105th National Sports Festival — Bronze",
    ],
  },
  {
    name: "Yoon Jae-won",
    role: "Head Coach · Technique · Physical",
    bio: "Head coach overseeing technical development, match operations, daily training and match coaching.",
    image: "",
    achievements: [
      "Former Goyang City Hall tennis player",
      "Former Armed Forces Athletic Corps tennis player",
      "Former Dangjin City Hall tennis player",
      "Graduated as national junior No.2 singles / No.1 doubles",
      "2003-2006 National Youth Sports Festival — 4 consecutive titles",
      "2004 Kyobo Life Singles & Team No.1 — MVP Award",
      "2004 Nike World Junior national selection — No.1",
      "2004 Nike World Junior Championships — Singles 2nd (France)",
      "2005 Korea-China-Japan Championships — National team",
      "2006 U14 World Junior team event — National team",
      "2008 Korea-China-Japan Championships — National team",
      "2012 Hong Kong ITF Men's Futures — Doubles 3rd",
      "2012 Shenyang (China) ITF Men's Futures — Doubles 3rd",
      "2014 Gimcheon ITF Men's Futures — Doubles 2nd",
      "2015 Egypt ITF Men's Futures — Doubles Champion",
    ],
  },
  {
    name: "Kim Ju-bin",
    role: "Coach · Technique · Mental",
    bio: "Responsible for overall tennis development, correcting competition anxiety and designing routines during match training.",
    image: "",
    achievements: [
      "Seongnam City Hall corporate team player",
      "Former J-One Tennis Academy coach",
      "2013 42nd National Youth Sports Festival — Silver",
      "2018 Yanggu ITF Junior — Doubles Semifinalist",
      "2019 Nepal ITF Junior — Singles Semifinalist",
      "2020 Korea Tennis League (Corporate) — Team 3rd",
    ],
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
  { name: "Academic", body: "We support academic management for admissions, English communication, admission timelines and essay writing." },
  { name: "Global Manner", body: "We build pro etiquette and media interview skills for the international stage, nurturing global manners." },
  { name: "Operations", body: "We coordinate tournament travel and stays, and manage performance data in one place." },
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
  quote: "The pro path or the college path — we're always by the athlete's side.",
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
    { title: "Admissions Consulting", body: "We support everything from UTR/results diagnosis to target college/team selection, highlight videos and coach contact." },
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

const enDirectorMessage = {
  eyebrow: "Director's Message",
  title: "A Message from the Director",
  image: "/coaches/ohseonggook/IMG_4332.JPG",
  signature: "Oh Seong-gook, Founder & Director, GCM Academy",
  before: [
    "Hello. I am Oh Seong-gook, Founder and Director of GCM Academy. To every parent and athlete who has found their way to us, thank you from the bottom of my heart.",
    "Years ago, my own parents believed in their child's limitless potential and made the bold decision to give me a chance on the larger stage of international professional tennis. Stepping outside the conventional mold, they chose an environment of 'the academy' and 'international competition' — even leaving middle school behind — so that I could focus entirely on improving my tennis and growing as a whole person. It is because of their deep love and courage, devoting everything to their child's future, that I can stand here today as an educator.",
    "That is why I understand, more deeply than anyone, the earnest hearts of parents who want to open a wider world and safer opportunities for their children — and even the anxiety that sometimes hides behind that wish.",
    "Tennis is more than a sport; it is a great education that becomes the strongest nourishment for life. Within a community of athletes with clear goals, children learn exceptional endurance beyond their limits, fighting spirit, a steady professional mindset and mental management that stays calm in victory or defeat, and the self-discipline and good attitude to govern themselves. The honest sweat shed on court becomes the foundation of a whole-person education that builds character.",
    "Tennis is also the largest and most dignified arena for 'building a global network' that works anywhere in the world. Though we may first pick up the racket with different goals and expectations, here we all become one — because a single racket lets us share deep bonds and joy across generations and borders.",
    "Within GCM Academy, active professional players and GCM club members cheer and encourage one another through exchange matches. In this beautiful companionship, children learn the firm value of belonging, embody altruism and positive influence toward others, and naturally grow into leaders with dignified 'global manners.' Beyond a youth specialty, they gain a lifelong companion sport that enriches life all the way into their senior years.",
  ],
  quote:
    "Because a child's future is never decided by a single possibility or a single result, we make sure that learning never becomes pressure or stress.",
  after: [
    "Many parents, driven by a vague anxiety about the future, end up pushing their children — and distance grows in the family relationships that should be most precious.",
    "GCM Academy wants to lift that heavy anxiety off the shoulders of both parents and children. The strategy for admissions and the hard worries and coaching about the future — we, the educators and specialists, will carry them for you. At home, please give only warm love and unconditional support. Helping a child feel that love fully and, in turn, stand on court with self-driven responsibility to repay it — that is the true education we pursue.",
    "To this end, the educators who work with GCM are top veterans who served for decades as admissions officers in North America. We carefully combine not only tennis coaching but whole-person mentoring. Whether a child walks the path of a professional to the end, or keeps tennis as a precious asset and chooses a new direction, that is all good. In every moment, we will present the best alternatives and roadmaps so children never lose their ease and peace of mind.",
    "At any crossroads — an unexpected injury or a sudden change of direction — our trusted partner 'equre (equre.us),' a specialized U.S. mentoring and admissions institution, stands with us. We have carefully prepared Plans A through B, C, D, and E so students can safely enter prestigious North American universities on scholarship. Whatever path they take, we will be the firm support that keeps them from giving up on their dreams.",
    "For athletes with professional potential, we open the path to compete on the international stage — with matching training, mentoring, tour schedule management, and even tour-cost scholarship support — doing our utmost so they can grow into players competing on the ATP and WTA tours.",
    "So that a parent's devotion to their child may bear the finest fruit, we will walk alongside you with a parent's heart and an educator's sense of mission. On the safe, wide roadmap GCM Academy offers, the chance for our children to stand proudly on the world stage is now open through GCM's global network linking Korea, Italy and Shanghai.",
    "Let family love one another as family, and let the future be prepared calmly with experts. As your most trustworthy education partner, we will always be by your side. Thank you.",
  ],
};

const enSiteGuideLead =
  "Explore GCM's coaching, programs, admissions and global career journey at a glance — matched to each athlete's stage of growth.";

const enSiteGuide = [
  {
    no: "01",
    label: "About",
    href: "/about",
    title: "About GCM",
    desc: "Our founding story and philosophy — an integrated performance model where many experts take responsibility for one athlete.",
    items: ["Founding background · vision", "Integrated performance model", "What we believe"],
  },
  {
    no: "02",
    label: "Coaches",
    href: "/coaches",
    title: "Meet the Coaches",
    desc: "Founder Oh Seong-gook and the head & mental coaching staff — their careers and coaching philosophy.",
    items: ["Founder · Director Oh Seong-gook", "Head Coach · technique/physical", "Coach · technique/mental"],
  },
  {
    no: "03",
    label: "Players",
    href: "/players",
    title: "Our Players",
    desc: "Stories of GCM athletes who grow with us from before they turn pro. (Coming soon)",
    items: ["Player stories", "Growth records", "Coming soon"],
  },
  {
    no: "04",
    label: "Gallery",
    href: "/gallery",
    title: "Gallery",
    desc: "Training and tournament moments in photos — the academy's living scenes.",
    items: ["Training sessions", "Tournaments · events", "Academy news"],
  },
  {
    no: "05",
    label: "Training",
    href: "/training",
    title: "Training System",
    desc: "On a cross-border network spanning Italy, the USA and Shanghai — a 6-step system integrating technique, physical and mental.",
    items: ["6-step development system", "Total Care System", "Pro · college dual pathway"],
  },
  {
    no: "06",
    label: "Kids & Amateur",
    href: "/recreational",
    title: "Kids & Amateur Club",
    desc: "Enjoy and learn even off the competitive team — kids and adult hobby classes.",
    items: ["Kids class (ages 5–13)", "Adult amateur class", "Fundamentals · tactics · games"],
  },
  {
    no: "07",
    label: "Consulting",
    href: "/consulting",
    title: "Career & Admissions Consulting",
    desc: "Data-driven career design and admissions consulting — drawing the athlete's next step together.",
    items: ["UTR · results diagnosis", "Pro / college roadmap", "Mental · language care"],
  },
  {
    no: "08",
    label: "Scholarship",
    href: "/scholarship",
    title: "Scholarship",
    desc: "Limited full and partial scholarships each year — selecting athletes with attitude and grit.",
    items: ["Eligibility · criteria", "Post-selection growth care", "How to apply"],
  },
];

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
  siteGuide: enSiteGuide,
  siteGuideLead: enSiteGuideLead,
  directorMessage: enDirectorMessage,
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
  siteGuide: ko.siteGuide,
  siteGuideLead: ko.siteGuideLead,
  directorMessage: ko.directorMessage,
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
    playersLead: "프로가 된 후가 아니라, 되기 전부터 선수의 브랜드를 함께 만듭니다.",
    playersComing: "배출·소속 선수 정보를 준비 중입니다. 곧 공개될 예정입니다.",
    testimonialsTitle: "선수와 학부모의 이야기",
    testimonialsComing: "선수와 학부모의 이야기를 준비하고 있습니다. 동의 확인 후 순차적으로 공개될 예정입니다.",
    teamTitle: "코치진 소개",
    coachBio: "약력 보기 →",
    curriculumTitle: "발달 커리큘럼 · 6단계 시스템",
    curriculumLead: "진단에서 다음 단계 진입까지, 선수의 성장을 6단계로 설계하고 순환시킵니다.",
    totalCareTitle: "테니스 그 이상의 관리",
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
    siteGuideTitle: "사이트 둘러보기",
    aboutIntroEyebrow: "About GCM",
    learnMore: "자세히 보기",
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
    totalCareTitle: "Beyond Tennis",
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
    siteGuideTitle: "Explore the Site",
    aboutIntroEyebrow: "About GCM",
    learnMore: "Learn more",
  },
} as const;

export function getUI(locale: Locale) {
  return locale === "en" ? UI.en : UI.ko;
}
