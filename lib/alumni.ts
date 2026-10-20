/**
 * Alumni(졸업생) 정적 데이터.
 * 상세 페이지(/alumni/[slug])에서 편지 본문 + 인스타그램형 사진 그리드로 렌더링한다.
 */

import { toLocale, type Locale } from "@/lib/i18n-pick";

export type AlumniBlock =
  | { type: "p"; text: string }
  | { type: "quote"; text: string }
  /** 감사/헌사 등 본문 중간에서 부각시키는 강조 콜아웃 */
  | { type: "highlight"; text: string }
  /** 박스 없이 볼드체 문장으로만 강조 */
  | { type: "bold"; text: string }
  /** 불릿 리스트 (경력·성적 등) */
  | { type: "list"; items: string[] }
  /** 코치진 한마디 — players의 Coach's Note 박스와 동일 스타일 */
  | { type: "coachnote"; text: string }
  | { type: "heading"; text: string }
  | { type: "signature"; text: string };

export type AlumniArticle = {
  title: string;
  titleEn: string;
  /** zh/ja/it/fr/es 번역 (없으면 en→ko 폴백) */
  titleI18n?: Partial<Record<Locale, string>>;
  source: string;
  sourceEn: string;
  /** zh/ja/it/fr/es 번역 (없으면 en→ko 폴백) */
  sourceI18n?: Partial<Record<Locale, string>>;
  url: string;
  image: string;
};

export type Alumni = {
  slug: string;
  name: string;
  /** 영문/로마자 이름 (구조화 데이터 alternateName) */
  nameEn?: string;
  /** zh/ja/it/fr/es 이름 (보통 로마자 그대로 — 없으면 en→ko 폴백) */
  nameI18n?: Partial<Record<Locale, string>>;
  /** 생년월일 (히어로에 작게 표시) */
  birth?: string;
  /** 재학/소속 대학 (구조화 데이터 alumniOf) */
  university?: string;
  /** 카드/헤더의 한 줄 소속 (예: 스탠포드 대학교 · NCAA D1 주장) */
  role: string;
  roleEn: string;
  /** zh/ja/it/fr/es 번역 (없으면 en→ko 폴백) */
  roleI18n?: Partial<Record<Locale, string>>;
  /** 해시태그 (# 없이 저장) */
  hashtags: string[];
  hashtagsEn: string[];
  /** zh/ja/it/fr/es 번역 (없으면 en→ko 폴백) */
  hashtagsI18n?: Partial<Record<Locale, string[]>>;
  /** 카드에 노출할 2~3줄 요약 */
  summary: string;
  summaryEn: string;
  /** zh/ja/it/fr/es 번역 (없으면 en→ko 폴백) */
  summaryI18n?: Partial<Record<Locale, string>>;
  /** 카드 대표 이미지 */
  mainImage: string;
  /** 인스타그램형 그리드용 사진들 */
  gallery: string[];
  /** 관련 기사 (새 창으로 열림) */
  articles: AlumniArticle[];
  /** 상세 편지 본문 블록 */
  body: AlumniBlock[];
  bodyEn: AlumniBlock[];
  /** zh/ja/it/fr/es 번역 (없으면 en→ko 폴백) */
  bodyI18n?: Partial<Record<Locale, AlumniBlock[]>>;
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

/**
 * 로케일에 맞춰 Alumni 필드를 선택해 평탄화.
 * - boolean: true→ko, false→en (하위호환)
 * - Locale: 해당 언어 → en → ko 순으로 폴백
 */
export function localizeAlumni(a: Alumni, loc: boolean | Locale): LocalizedAlumni {
  const locale = toLocale(loc);

  const pickText = (
    i18n: Partial<Record<Locale, string>> | undefined,
    en: string | undefined,
    ko: string,
  ): string => {
    if (locale === "ko") return ko;
    const v = locale === "en" ? undefined : i18n?.[locale];
    return v ?? en ?? ko;
  };

  const pickArr = <T>(
    i18n: Partial<Record<Locale, T>> | undefined,
    en: T,
    ko: T,
  ): T => {
    if (locale === "ko") return ko;
    const v = locale === "en" ? undefined : i18n?.[locale];
    return v ?? en ?? ko;
  };

  return {
    slug: a.slug,
    name: pickText(a.nameI18n, a.nameEn, a.name),
    birth: a.birth,
    role: pickText(a.roleI18n, a.roleEn, a.role),
    hashtags: pickArr(a.hashtagsI18n, a.hashtagsEn, a.hashtags),
    summary: pickText(a.summaryI18n, a.summaryEn, a.summary),
    mainImage: a.mainImage,
    gallery: a.gallery,
    university: a.university,
    articles: a.articles.map((ar) => ({
      title: pickText(ar.titleI18n, ar.titleEn, ar.title),
      source: pickText(ar.sourceI18n, ar.sourceEn, ar.source),
      url: ar.url,
      image: ar.image,
    })),
    body: pickArr(a.bodyI18n, a.bodyEn, a.body),
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
    roleI18n: {
      zh: "Stanford University 社会学 · 女子网球代表队（NCAA D1）队长",
      ja: "Stanford University 社会学部 · 女子テニス代表チーム（NCAA D1）主将",
      it: "Stanford University, Sociologia · Capitano, tennis femminile (NCAA D1)",
      fr: "Stanford University, Sociologie · Capitaine, tennis féminin (NCAA D1)",
      es: "Stanford University, Sociología · Capitana, tenis femenino (NCAA D1)",
    },
    hashtags: ["스탠포드"],
    hashtagsEn: ["Stanford"],
    summary:
      "스탠포드 대학교 사회학과 재학 중이자 여자 테니스 대표팀(NCAA Division I) 주장. 100% 장학생으로 학업(GPA 4.0)과 NCAA 정상급 선수 생활을 병행하며, 국제 스포츠 무대를 이끌 'Global Sports Leader'의 꿈을 향해 나아가고 있습니다.",
    summaryEn:
      "A Sociology student at Stanford University and captain of the women's tennis team (NCAA Division I). A full-ride scholar balancing academics (GPA 4.0) with top-level NCAA tennis, chasing a dream to become a 'Global Sports Leader' on the world stage.",
    summaryI18n: {
      zh: "Stanford University 社会学专业在读，女子网球代表队（NCAA Division I）队长。她以全额奖学金兼顾学业（GPA 4.0）与顶尖水平的 NCAA 网球，追逐在世界舞台上成为 'Global Sports Leader' 的梦想。",
      ja: "Stanford University 社会学部に在籍し、女子テニス代表チーム（NCAA Division I）の主将を務める選手。全額奨学金を得て学業（GPA 4.0）とトップレベルの NCAA テニスを両立させ、世界の舞台で「Global Sports Leader」になる夢を追い続けています。",
      it: "Studentessa di Sociologia alla Stanford University e capitano della squadra di tennis femminile (NCAA Division I). Con una borsa di studio totale, concilia lo studio (GPA 4.0) con il tennis NCAA ai massimi livelli, inseguendo il sogno di diventare una 'Global Sports Leader' sulla scena mondiale.",
      fr: "Étudiante en sociologie à la Stanford University et capitaine de l'équipe féminine de tennis (NCAA Division I). Boursière à temps plein, elle concilie les études (GPA 4.0) et le tennis NCAA au plus haut niveau, poursuivant le rêve de devenir une « Global Sports Leader » sur la scène mondiale.",
      es: "Estudiante de Sociología en la Stanford University y capitana del equipo de tenis femenino (NCAA Division I). Becada al cien por cien, compagina los estudios (GPA 4.0) con el tenis NCAA del más alto nivel, persiguiendo el sueño de convertirse en una 'Global Sports Leader' en el escenario mundial.",
    },
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
        titleI18n: {
          zh: "'Be Stanford Cardinals!' 首位考入 Stanford 的韩国网球选手 Myung Se-in",
          ja: "'Be Stanford Cardinals!' 韓国テニス選手として初めて Stanford に進学した Myung Se-in",
          it: "'Be Stanford Cardinals!' Myung Se-in, prima tennista coreana ad entrare a Stanford",
          fr: "'Be Stanford Cardinals!' Myung Se-in, première joueuse de tennis coréenne à intégrer Stanford",
          es: "'Be Stanford Cardinals!' Myung Se-in, primera jugadora de tenis coreana en entrar en Stanford",
        },
        source: "네이버 스포츠",
        sourceEn: "Naver Sports",
        url: "https://naver.me/FDGXbfxh",
        image: "/alumni/myung-se-in/articles/1.jpg",
      },
      {
        title: "오산GS 명세인, 이덕희배 국제주니어테니스 여자 단식 우승",
        titleEn: "Osan GS's Myung Se-in wins the Lee Duck-hee Cup junior girls' singles title",
        titleI18n: {
          zh: "Osan GS 的 Myung Se-in 夺得 Lee Duck-hee Cup 国际青少年网球女子单打冠军",
          ja: "Osan GS の Myung Se-in、Lee Duck-hee Cup 国際ジュニアテニス女子シングルスで優勝",
          it: "Myung Se-in dell'Osan GS vince il titolo di singolare femminile junior alla Lee Duck-hee Cup",
          fr: "Myung Se-in (Osan GS) remporte le titre en simple filles juniors de la Lee Duck-hee Cup",
          es: "Myung Se-in, del Osan GS, gana el título individual femenino junior de la Lee Duck-hee Cup",
        },
        source: "중부일보",
        sourceEn: "Joongboo Ilbo",
        url: "https://naver.me/GKIYLbtG",
        image: "/alumni/myung-se-in/2.jpeg",
      },
      {
        title: "\"한국 테니스의 밀알이 되겠다\" SS스포츠진흥협회 x KATA, 첫 교류전 성료",
        titleEn: "'To be a seed for Korean tennis' — SS Sports Assoc. x KATA hold their first exchange match",
        titleI18n: {
          zh: "'愿成为韩国网球的种子'——SS Sports Assoc. x KATA 首场交流赛圆满落幕",
          ja: "「韓国テニスの礎となりたい」SS Sports Assoc. × KATA、初の交流戦を盛況のうちに終える",
          it: "'Essere un seme per il tennis coreano' — SS Sports Assoc. e KATA disputano il loro primo incontro di scambio",
          fr: "« Être une graine pour le tennis coréen » — SS Sports Assoc. et KATA disputent leur premier match d'échange",
          es: "'Ser una semilla para el tenis coreano' — SS Sports Assoc. y KATA celebran su primer encuentro de intercambio",
        },
        source: "네이버 스포츠",
        sourceEn: "Naver Sports",
        url: "https://naver.me/5CCmSCjw",
        image: "/alumni/myung-se-in/articles/3.jpg",
      },
      {
        title: "(주)지엔비에스엔지니어링, 주니어 선수 명세인 후원",
        titleEn: "GNBS Engineering sponsors junior player Myung Se-in",
        titleI18n: {
          zh: "GNBS Engineering 赞助青少年选手 Myung Se-in",
          ja: "GNBS Engineering、ジュニア選手 Myung Se-in をスポンサー支援",
          it: "GNBS Engineering sponsorizza la giovane atleta Myung Se-in",
          fr: "GNBS Engineering sponsorise la jeune joueuse Myung Se-in",
          es: "GNBS Engineering patrocina a la jugadora junior Myung Se-in",
        },
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
    bodyI18n: {
      zh: [
        {
          type: "p",
          text: "GCM Academy 的学弟学妹和家长们，大家好！我是 GCM Alumni Myung Se-in，现就读于 Stanford University 社会学专业，并担任 Stanford 女子网球代表队（NCAA Division I）的队长。",
        },
        {
          type: "p",
          text: "作为 Stanford 的全额奖学金学生，我兼顾学业（GPA 4.0）与 NCAA 最高水平的网球，追逐着有朝一日成为引领国际体育组织（IOC、WTA）与全球体育舞台的领袖的梦想。",
        },
        {
          type: "bold",
          text: "为我能走到今天的一切，我想向为我打开人生最关键之门的 SS Sports Promotion Foundation 会长 Park Sang-soon，以及 GCM Academy 的代表 Oh Seong-gook，致以最深切的感谢。",
        },
        {
          type: "quote",
          text: "正是 SS Sports Promotion Foundation 会长 Park Sang-soon 坚定不移的支持——让我摆脱经济与环境的壁垒，只专注于运动与学业——才成就了今天 Stanford 的 Myung Se-in。",
        },
        {
          type: "highlight",
          text: "Oh Seong-gook 教练，始终为我注入勇于挑战的信心，让我得以进入 Stanford 并赢得全额奖学金。",
        },
        {
          type: "p",
          text: "当我第一次踏上赴美留学之路、立志挑战 Stanford 时，我也曾怀着'我真的能做到吗'的不安与茫然。但 GCM Academy 的 Oh Seong-gook 教练百分之百相信我的潜力，自始至终为我注入勇气与挑战的决心。",
        },
        {
          type: "p",
          text: "他不仅传授网球技术，直到此刻仍持续为我提供强有力的心理管理与咨询，让我能在美国大学体育体系中顽强地生存下来。",
        },
        {
          type: "highlight",
          text: "正是因为 Oh Seong-gook 教练坚定不移的信任，我才拥有了'完全的自信'，并成长为球队的领袖。",
        },
        { type: "heading", text: "🎾 致 GCM 的学弟学妹" },
        {
          type: "quote",
          text: "即使此刻你觉得自己还不够好，勤奋与心态也会为你开辟出路。",
        },
        {
          type: "p",
          text: "此刻正在 GCM 刻苦训练的各位学弟学妹——有时你会因眼前的经济条件、自身的天赋或环境似乎不足，而怀疑自己。",
        },
        {
          type: "p",
          text: "但请记住：在运动与人生中，最强大的武器是'持续的勤奋'与'端正的心态'。",
        },
        {
          type: "p",
          text: "只要你全然信任 GCM Academy 系统化的训练体系与 Oh Seong-gook 教练发自真心的心理关怀，每天全力以赴，必将迎来超乎你想象的巨大成果。",
        },
        {
          type: "p",
          text: "我也会在美国本地更加全力以赴——连接韩国与美国，并进一步作为 'Global Sports Leader' 改变韩国网球乃至全球体育产业的格局——努力成为你们出色的榜样和可靠的学姐。我衷心为每一位追逐梦想的 GCM 学弟学妹加油！",
        },
        { type: "signature", text: "Stanford University D1 网球队队长，Myung Se-in 敬上" },
      ],
      ja: [
        {
          type: "p",
          text: "GCM Academy の後輩のみなさん、保護者のみなさん、こんにちは！Stanford University 社会学部に在籍し、Stanford 女子テニス代表チーム（NCAA Division I）の主将を務めている GCM Alumni の Myung Se-in です。",
        },
        {
          type: "p",
          text: "Stanford の全額奨学金学生として、私は学業（GPA 4.0）と NCAA 最高レベルのテニスを両立させ、いつか国際スポーツ機構（IOC、WTA）やグローバルなスポーツの舞台を導くリーダーになるという夢を追い続けています。",
        },
        {
          type: "bold",
          text: "今の私があるのは、私の人生で最も決定的な扉を開いてくださった SS Sports Promotion Foundation の Park Sang-soon 会長と、GCM Academy の Oh Seong-gook 代表のおかげです。心より深く感謝申し上げます。",
        },
        {
          type: "quote",
          text: "経済的・環境的な壁に縛られることなく、ただスポーツと学業だけに集中できるよう力強く支えてくださった SS Sports Promotion Foundation の Park Sang-soon 会長の支援があったからこそ、今の Stanford の Myung Se-in が存在できるのです。",
        },
        {
          type: "highlight",
          text: "Stanford への進学と全額奨学金、そして挑戦する勇気を、いつも自信で満たしてくださった Oh Seong-gook コーチ。",
        },
        {
          type: "p",
          text: "初めてアメリカ留学の道に進み、Stanford に挑もうとしたとき、私もまた「本当に自分にできるのだろうか」という不安と漠然とした思いを抱えていました。けれど GCM Academy の Oh Seong-gook コーチは私の可能性を100%信じてくださり、最後まで勇気と挑戦する心を吹き込んでくださいました。",
        },
        {
          type: "p",
          text: "単にテニスの技術指導にとどまらず、アメリカの大学スポーツシステムの中で激しく生き抜くために必要な強力なメンタルマネジメントとコンサルティングを、今この瞬間まで続けてくださっています。",
        },
        {
          type: "highlight",
          text: "Oh Seong-gook コーチの揺るぎない信頼のおかげで、私は「完全な自信」を手に入れ、チームのリーダーへと成長することができました。",
        },
        { type: "heading", text: "🎾 GCM の後輩たちへ" },
        {
          type: "quote",
          text: "今は自分が足りないと感じても、誠実さとメンタルが道を切り拓きます。",
        },
        {
          type: "p",
          text: "今 GCM で一生懸命練習している後輩のみなさん——時には目の前の経済的な状況や自分の才能、あるいは環境が足りないように思えて、自分を疑うこともあるでしょう。",
        },
        {
          type: "p",
          text: "しかし覚えておいてください。スポーツと人生で最も強力な武器は「たゆまぬ誠実さ」と「正しいメンタル」です。",
        },
        {
          type: "p",
          text: "GCM Academy の体系的なトレーニングシステムと Oh Seong-gook コーチの心のこもったメンタルケアを全面的に信じ、一日一日を全力で歩んでいけば、想像を超える大きな結果が必ず訪れます。",
        },
        {
          type: "p",
          text: "私もアメリカの現地で、韓国とアメリカをつなぎ、さらには「Global Sports Leader」として韓国テニスと世界のスポーツ産業の流れを変える存在として、みなさんの素晴らしいロールモデルであり頼れる先輩になれるよう、より一層全力を尽くします。夢に向かって挑戦するすべての GCM の後輩を心から応援しています！",
        },
        { type: "signature", text: "Stanford University D1 テニスチーム主将、Myung Se-in より" },
      ],
      it: [
        {
          type: "p",
          text: "Un saluto ai giovani e ai genitori della GCM Academy! Sono Myung Se-in, una GCM Alumni che studia Sociologia alla Stanford University e ricopre il ruolo di capitano della squadra di tennis femminile di Stanford (NCAA Division I).",
        },
        {
          type: "p",
          text: "Come studentessa con borsa di studio totale a Stanford, concilio lo studio (GPA 4.0) con il tennis ai massimi livelli NCAA, inseguendo il sogno di diventare un giorno una leader capace di guidare gli organismi sportivi internazionali (IOC, WTA) e la scena sportiva mondiale.",
        },
        {
          type: "bold",
          text: "Per tutto ciò che mi ha portato fin qui, desidero esprimere la mia più profonda gratitudine al Presidente Park Sang-soon della SS Sports Promotion Foundation e al Direttore Oh Seong-gook della GCM Academy, che hanno aperto le porte più decisive della mia vita.",
        },
        {
          type: "quote",
          text: "È stato il sostegno incrollabile del Presidente Park Sang-soon della SS Sports Promotion Foundation — che mi ha permesso di concentrarmi unicamente sullo sport e sullo studio, libera da barriere economiche e ambientali — a rendere possibile la Myung Se-in di Stanford di oggi.",
        },
        {
          type: "highlight",
          text: "Il Coach Oh Seong-gook, che mi ha sempre riempita della fiducia necessaria per arrivare a Stanford, ottenere una borsa di studio totale e osare provarci.",
        },
        {
          type: "p",
          text: "Quando mi sono avventurata per la prima volta a studiare negli Stati Uniti puntando a Stanford, anch'io ho provato l'ansia e l'incertezza del 'ce la farò davvero?'. Ma il Coach Oh Seong-gook della GCM Academy ha creduto al 100% nel mio potenziale e mi ha infuso coraggio e audacia fino alla fine.",
        },
        {
          type: "p",
          text: "Oltre a insegnarmi la tecnica del tennis, continua — ancora oggi — a fornirmi la potente gestione mentale e la consulenza di cui ho bisogno per sopravvivere con tenacia all'interno del sistema sportivo universitario statunitense.",
        },
        {
          type: "highlight",
          text: "Grazie alla fiducia incrollabile del Coach Oh Seong-gook, ho acquisito una 'piena fiducia in me stessa' e sono cresciuta fino a diventare una leader della mia squadra.",
        },
        { type: "heading", text: "🎾 Ai giovani della GCM" },
        {
          type: "quote",
          text: "Anche quando senti di non essere all'altezza in questo momento, la costanza e la mentalità aprono la strada.",
        },
        {
          type: "p",
          text: "A tutti voi che vi allenate duramente alla GCM in questo momento: ci saranno momenti in cui dubiterete di voi stessi, quando le vostre finanze, il vostro talento o le vostre circostanze sembreranno insufficienti.",
        },
        {
          type: "p",
          text: "Ma ricordate: le armi più potenti nello sport e nella vita sono 'la costanza duratura' e 'la giusta mentalità'.",
        },
        {
          type: "p",
          text: "Se vi affidate pienamente al sistema di allenamento strutturato della GCM Academy e alla sincera cura mentale del Coach Oh Seong-gook, dando il massimo ogni giorno, arriveranno sicuramente risultati al di là di ogni vostra immaginazione.",
        },
        {
          type: "p",
          text: "Anch'io darò il massimo qui negli Stati Uniti — facendo da ponte tra Corea e America e, andando oltre, trasformando il tennis coreano e l'industria sportiva mondiale come 'Global Sports Leader' — per poter essere un ottimo modello di riferimento e una senior affidabile per voi. Faccio il tifo con tutto il cuore per ogni giovane della GCM che insegue i propri sogni!",
        },
        { type: "signature", text: "Da Myung Se-in, Capitano della squadra di tennis D1 della Stanford University" },
      ],
      fr: [
        {
          type: "p",
          text: "Bonjour aux juniors et aux parents de la GCM Academy ! Je suis Myung Se-in, une GCM Alumni étudiant la sociologie à la Stanford University et capitaine de l'équipe féminine de tennis de Stanford (NCAA Division I).",
        },
        {
          type: "p",
          text: "En tant qu'étudiante boursière à temps plein à Stanford, je concilie les études (GPA 4.0) et le tennis au plus haut niveau NCAA, poursuivant le rêve de devenir un jour une dirigeante qui guide les instances sportives internationales (IOC, WTA) et la scène sportive mondiale.",
        },
        {
          type: "bold",
          text: "Pour tout ce qui m'a menée jusqu'ici, je tiens à exprimer ma plus profonde gratitude au Président Park Sang-soon de la SS Sports Promotion Foundation et au Directeur Oh Seong-gook de la GCM Academy, qui ont ouvert les portes les plus décisives de ma vie.",
        },
        {
          type: "quote",
          text: "C'est le soutien indéfectible du Président Park Sang-soon de la SS Sports Promotion Foundation — qui m'a permis de me consacrer uniquement au sport et aux études, sans barrières financières ni environnementales — qui a rendu possible la Myung Se-in de Stanford d'aujourd'hui.",
        },
        {
          type: "highlight",
          text: "Le Coach Oh Seong-gook, qui m'a toujours insufflé la confiance nécessaire pour atteindre Stanford, décrocher une bourse complète et oser me lancer.",
        },
        {
          type: "p",
          text: "Lorsque je me suis lancée pour la première fois dans des études aux États-Unis en visant Stanford, j'ai moi aussi ressenti l'angoisse et l'incertitude du « vais-je vraiment y arriver ? ». Mais le Coach Oh Seong-gook de la GCM Academy a cru à 100 % en mon potentiel et m'a insufflé courage et audace jusqu'au bout.",
        },
        {
          type: "p",
          text: "Au-delà de l'enseignement de la technique du tennis, il continue — aujourd'hui encore — à m'apporter la puissante gestion mentale et le conseil dont j'ai besoin pour survivre farouchement au sein du système sportif universitaire américain.",
        },
        {
          type: "highlight",
          text: "Grâce à la confiance inébranlable du Coach Oh Seong-gook, j'ai acquis une « confiance totale » et je suis devenue une leader de mon équipe.",
        },
        { type: "heading", text: "🎾 Aux juniors de la GCM" },
        {
          type: "quote",
          text: "Même lorsque tu as l'impression de ne pas être à la hauteur aujourd'hui, l'assiduité et l'état d'esprit tracent le chemin.",
        },
        {
          type: "p",
          text: "À vous tous qui vous entraînez dur à la GCM en ce moment : il y aura des moments où vous douterez de vous, où vos moyens financiers, votre talent ou vos circonstances sembleront insuffisants.",
        },
        {
          type: "p",
          text: "Mais souvenez-vous : les armes les plus puissantes dans le sport et dans la vie sont « l'assiduité constante » et « le bon état d'esprit ».",
        },
        {
          type: "p",
          text: "Si vous faites pleinement confiance au système d'entraînement structuré de la GCM Academy et à l'accompagnement mental sincère du Coach Oh Seong-gook, et que vous donnez le meilleur de vous-même chaque jour, des résultats dépassant tout ce que vous imaginez viendront à coup sûr.",
        },
        {
          type: "p",
          text: "Moi aussi, je donnerai le meilleur de moi-même ici aux États-Unis — en faisant le lien entre la Corée et l'Amérique et, plus loin encore, en transformant le tennis coréen et l'industrie mondiale du sport en tant que « Global Sports Leader » — afin d'être pour vous un excellent modèle et une aînée sur qui compter. J'encourage de tout cœur chaque junior de la GCM qui poursuit ses rêves !",
        },
        { type: "signature", text: "De Myung Se-in, Capitaine de l'équipe de tennis D1 de la Stanford University" },
      ],
      es: [
        {
          type: "p",
          text: "¡Hola a los juniors y a los padres de la GCM Academy! Soy Myung Se-in, una GCM Alumni que estudia Sociología en la Stanford University y ejerce de capitana del equipo de tenis femenino de Stanford (NCAA Division I).",
        },
        {
          type: "p",
          text: "Como estudiante con beca completa en Stanford, compagino los estudios (GPA 4.0) con el tenis del máximo nivel NCAA, persiguiendo el sueño de convertirme algún día en una líder que guíe a los organismos deportivos internacionales (IOC, WTA) y el escenario deportivo mundial.",
        },
        {
          type: "bold",
          text: "Por todo lo que me ha traído hasta aquí, quiero expresar mi más profunda gratitud al Presidente Park Sang-soon de la SS Sports Promotion Foundation y al Director Oh Seong-gook de la GCM Academy, que abrieron las puertas más decisivas de mi vida.",
        },
        {
          type: "quote",
          text: "Fue el apoyo inquebrantable del Presidente Park Sang-soon de la SS Sports Promotion Foundation —que me permitió concentrarme únicamente en el deporte y los estudios, sin barreras económicas ni ambientales— lo que hizo posible a la Myung Se-in de Stanford de hoy.",
        },
        {
          type: "highlight",
          text: "El Coach Oh Seong-gook, que siempre me llenó de la confianza necesaria para llegar a Stanford, conseguir una beca completa y atreverme a intentarlo.",
        },
        {
          type: "p",
          text: "Cuando emprendí por primera vez mis estudios en Estados Unidos con la mira puesta en Stanford, yo también sentí la ansiedad y la incertidumbre del '¿de verdad podré lograrlo?'. Pero el Coach Oh Seong-gook de la GCM Academy creyó al cien por cien en mi potencial y me infundió valor y audacia hasta el final.",
        },
        {
          type: "p",
          text: "Más allá de enseñarme la técnica del tenis, sigue brindándome —aún hoy— la poderosa gestión mental y el asesoramiento que necesito para sobrevivir con fiereza dentro del sistema deportivo universitario estadounidense.",
        },
        {
          type: "highlight",
          text: "Gracias a la confianza inquebrantable del Coach Oh Seong-gook, adquirí una 'confianza plena' y me convertí en una líder de mi equipo.",
        },
        { type: "heading", text: "🎾 A los juniors de la GCM" },
        {
          type: "quote",
          text: "Incluso cuando ahora mismo sientas que te quedas corto, la constancia y la mentalidad abren el camino.",
        },
        {
          type: "p",
          text: "A todos vosotros que ahora mismo entrenáis con esfuerzo en la GCM: habrá momentos en que dudéis de vosotros mismos, cuando vuestros recursos económicos, vuestro talento o vuestras circunstancias parezcan insuficientes.",
        },
        {
          type: "p",
          text: "Pero recordad: las armas más poderosas en el deporte y en la vida son 'la constancia sostenida' y 'la mentalidad correcta'.",
        },
        {
          type: "p",
          text: "Si confiáis plenamente en el sistema de entrenamiento estructurado de la GCM Academy y en el sincero cuidado mental del Coach Oh Seong-gook, y dais lo mejor de vosotros cada día, llegarán sin duda resultados que superan todo lo que podáis imaginar.",
        },
        {
          type: "p",
          text: "Yo también daré lo mejor de mí aquí en Estados Unidos —tendiendo puentes entre Corea y América y, yendo más allá, transformando el tenis coreano y la industria deportiva mundial como 'Global Sports Leader'— para poder ser un gran modelo a seguir y una sénior en quien confiar para vosotros. ¡Animo de todo corazón a cada junior de la GCM que persigue sus sueños!",
        },
        { type: "signature", text: "De Myung Se-in, Capitana del equipo de tenis D1 de la Stanford University" },
      ],
    },
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
    roleI18n: {
      zh: "Dunamis 创始人 / Fliv 创始人 / 前 U of Chicago（经济学·数学），大学联赛网球选手",
      ja: "Dunamis 代表 / Fliv 代表 / 元 U of Chicago（経済学・数学）、大学リーグテニス出身",
      it: "Fondatore di Dunamis / Fondatore di Fliv / Ex U of Chicago (Economia · Matematica), tennis di college-league",
      fr: "Fondateur de Dunamis / Fondateur de Fliv / Ancien de U of Chicago (économie · mathématiques), tennis de ligue universitaire",
      es: "Fundador de Dunamis / Fundador de Fliv / Exalumno de U of Chicago (Economía · Matemáticas), tenis de liga universitaria",
    },
    hashtags: ["시카고대", "ITF주니어", "창업가"],
    hashtagsEn: ["UChicago", "ITFJunior", "Founder"],
    hashtagsI18n: {
      zh: ["UChicago", "ITFJunior", "创始人"],
      ja: ["UChicago", "ITFJunior", "創業家"],
      it: ["UChicago", "ITFJunior", "Fondatore"],
      fr: ["UChicago", "ITFJunior", "Fondateur"],
      es: ["UChicago", "ITFJunior", "Fundador"],
    },
    summary:
      "테니스 유학으로 세계 최상위 명문 시카고대(U of Chicago)에 진학해 경제학·수학을 전공하고 테니스 대학리그에서 활약한 김주안. 지금은 테니스로 배운 멘탈리티로 (주)두나미스·플리브를 이끄는 창업가입니다.",
    summaryEn:
      "Kim Ju-an studied economics and mathematics at the University of Chicago — one of the world's most elite universities — while competing in college-league tennis. Today he leads Dunamis and Fliv as a founder, driven by the mentality tennis taught him.",
    summaryI18n: {
      zh: "Kim Ju-an 在世界顶尖名校之一的 University of Chicago 攻读经济学与数学，同时征战大学联赛网球。如今，他凭借网球所教给他的心态，作为创始人领导着 Dunamis 与 Fliv。",
      ja: "Kim Ju-an は世界屈指の名門 University of Chicago で経済学と数学を専攻しながら、大学リーグのテニスで活躍しました。今は、テニスが教えてくれたメンタリティを原動力に、創業者として Dunamis と Fliv を率いています。",
      it: "Kim Ju-an ha studiato economia e matematica alla University of Chicago — una delle università più prestigiose al mondo — gareggiando al contempo nel tennis di college-league. Oggi guida Dunamis e Fliv come fondatore, spinto dalla mentalità che il tennis gli ha insegnato.",
      fr: "Kim Ju-an a étudié l'économie et les mathématiques à la University of Chicago — l'une des universités les plus prestigieuses au monde — tout en jouant au tennis en ligue universitaire. Aujourd'hui, il dirige Dunamis et Fliv en tant que fondateur, porté par la mentalité que le tennis lui a enseignée.",
      es: "Kim Ju-an estudió economía y matemáticas en la University of Chicago —una de las universidades más prestigiosas del mundo— mientras competía en tenis de liga universitaria. Hoy dirige Dunamis y Fliv como fundador, impulsado por la mentalidad que el tenis le enseñó.",
    },
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
      {
        type: "p",
        text: "미국 현지에서 경험한 선진 환경과 뛰어난 글로벌 동료들과의 교류는 더 큰 세상에 대한 견문과 통찰을 넓히는 결정적 계기가 되었습니다. 시카고에서 학업과 대학리그 활동을 밀도 있게 이어오다 2026년 하반기 한국으로 귀국하였으며, 비영리 후원 법인 (주)두나미스의 확장과 신규 브랜드 <플리브> 운영을 위해 결단을 내리고 본격적인 사업가의 길을 선택했습니다.",
      },
      {
        type: "p",
        text: "특히 사회적 선한 영향력과 이타심을 바탕으로 세워진 (주)두나미스를 통해, 한국을 넘어 전 세계로 가치를 전하는 소명 중심의 기업가로 성장하고 있습니다. 현재는 사업을 연쇄적으로 성장시키는 동시에 GCM 주니어 후배들의 '인생 멘토'로서 코트 밖 원하는 어떤 진로로도 성공할 수 있다는 입체적인 롤모델을 제시하고 있습니다. 테니스로 시작해 세계 무대를 경험하고 글로벌 사업가로 스펙트럼을 넓힌 그의 여정은, 테니스 유학을 고민하는 주니어 선수들과 학부모님들에게 최고의 성공 모델이 되어줍니다.",
      },
      {
        type: "quote",
        text: "GCM은 포핸드, 백핸드가 아닌 '인생이라는 게임에서 승리하는 법'과 '선한 영향력'을 배우게 합니다.",
      },
      {
        type: "p",
        text: "GCM이 제공하는 코칭은 단순히 공을 치는 기술에 머무르지 않습니다. 김주안 선수가 사업가로 도약하며 느낀 것처럼, GCM에서 배운 집중력, 몰입, 감정 및 불안 조절, 그리고 꺾이지 않는 끈기는 단순한 테니스용 기술이 아닌 인생 전체를 끌고 나가는 '승리자의 멘탈'이었습니다.",
      },
      {
        type: "p",
        text: "무엇보다 GCM 코치진으로부터 체득한 선한 영향력과 이타심의 가치는 김주안 선수가 끊임없이 새로운 목표에 도전하고 사회에 기여하는 동기부여의 원동력이 되었습니다. 테니스를 인생의 나침반이자 정체성을 찾아가는 도구로 삼아 명문대 진학, 가치 중심의 창업, 그리고 후배 멘토링으로 이어지는 김주안 선수의 성공 사례에는, 선수의 삶 전체를 함께 고민하고 지속적으로 지지해 온 GCM의 독보적인 멘토링 시스템이 존재했습니다.",
      },
      { type: "heading", text: "🎾 GCM 후배들에게" },
      {
        type: "quote",
        text: "GCM에서 배운 멘탈리티와 선한 영향력은 테니스를 넘어 인생이라는 더 큰 기회에 도전하게 만드는 가장 강력한 힘입니다. 코트 위에서 키운 집념으로 세계에 그리고 사회에 영향력을 끼치는 기업으로 성장시켜, GCM 후배들에게도 삶의 가치를 만드는 선배의 길을 열어두겠습니다.",
      },
      {
        type: "coachnote",
        text: "김주안 선수는 테니스라는 스포츠가 한 사람의 인생에 얼마나 위대한 멘탈적 자산과 이타적 가치를 남겨주는지 증명해 준 자랑스러운 결실입니다. 코트 위에서 배운 몰입과 멘탈리티로 시카고대 진학을 넘어, 사회에 선한 영향력을 펼치는 사업가로 성장해 나가는 김주안 선수의 모습은 GCM이 지향하는 교육의 정점입니다.\n\n한국을 넘어 전 세계로 선한 가치를 전파하는 기업으로 도약하길 진심으로 기대하고 응원합니다. GCM은 선수의 길을 걸어가든, 김주안 선수처럼 테니스를 활용한 발판을 통해 세상을 바꾸는 사업가가 되든, GCM 아이들의 삶 전체와 꿈을 끝까지 전폭적으로 지지하고 함께할 것입니다.",
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
      {
        type: "p",
        text: "The advanced environment he experienced in the U.S. and his exchanges with outstanding global peers became a decisive turning point in broadening his perspective and insight into a larger world. After intensively continuing his studies and college-league play in Chicago, he returned to Korea in the second half of 2026 and, resolving to expand the non-profit foundation Dunamis and launch the new brand Fliv, chose the path of a full-fledged entrepreneur.",
      },
      {
        type: "p",
        text: "In particular, through Dunamis — founded on positive social impact and altruism — he is growing into a calling-driven entrepreneur who delivers value beyond Korea to the wider world. He now scales ventures one after another while also serving as a 'life mentor' to GCM's junior players, presenting a multidimensional role model who shows that one can succeed in any path off the court. His journey — starting with tennis, experiencing the world stage, and broadening his spectrum into a global entrepreneur — becomes the finest model of success for junior players and parents considering studying abroad through tennis.",
      },
      {
        type: "quote",
        text: "At GCM you learn not the forehand or backhand, but 'how to win at the game of life' and 'positive impact'.",
      },
      {
        type: "p",
        text: "The coaching GCM provides goes far beyond the technique of hitting a ball. As Kim Ju-an felt while leaping into entrepreneurship, the focus, immersion, control of emotion and anxiety, and unbreakable persistence he learned at GCM were not mere tennis skills, but a 'winner's mentality' that carries an entire life forward.",
      },
      {
        type: "p",
        text: "Above all, the values of positive impact and altruism he absorbed from GCM's coaches became the driving force that motivates him to keep challenging new goals and contributing to society. Behind Kim Ju-an's success — using tennis as a compass and a tool to find his identity, leading to elite-university admission, values-driven entrepreneurship, and mentoring juniors — stood GCM's unrivaled mentoring system, which has thought through and continuously supported the whole of a player's life.",
      },
      { type: "heading", text: "🎾 To GCM's Juniors" },
      {
        type: "quote",
        text: "The mentality and positive impact I learned at GCM are the most powerful force that drives me to take on the bigger opportunity of life, beyond tennis. With the tenacity built on the court, I will grow a company that makes an impact on the world and on society, and open for my GCM juniors, too, a senior's path of creating value in life.",
      },
      {
        type: "coachnote",
        text: "Kim Ju-an is a proud fruit who proved just how great a mental asset and altruistic value the sport of tennis can leave in a person's life. With the immersion and mentality he learned on the court, going beyond admission to the University of Chicago to grow into an entrepreneur who spreads positive impact on society — this is the very pinnacle of the education GCM aspires to.\n\nWe sincerely hope for and cheer on his leap into a company that spreads good values beyond Korea to the whole world. Whether a child walks the path of a player, or — like Kim Ju-an — becomes an entrepreneur who changes the world using tennis as a stepping stone, GCM will wholeheartedly support and stand with the entire lives and dreams of its children to the very end.",
      },
    ],
    bodyI18n: {
      zh: [
        {
          type: "quote",
          text: "通过网球留学，进入全球前 0.1% 的名校——如今凭借网球所教给他的心态，成为引领创新的创始人。",
        },
        { type: "heading", text: "主要经历与成绩" },
        {
          type: "list",
          items: [
            "全球前 0.1%——在 University of Chicago（美国综合大学 TOP 10，常春藤最顶尖层级）攻读经济学与数学，并担任大学联赛网球选手",
            "前 2022 IBK Industrial Bank Grand Slam 育成队选手",
            "国际网球联合会（ITF）青少年赛——主要成绩：\n哥伦比亚波哥大（J200）双打冠军 / 卡利（J100）双打亚军",
            "关岛德德多（J60）单打冠军 / 马来西亚芙蓉（J60）单打冠军",
            "南非波切夫斯特鲁姆（J100）双打亚军 / 吉尔吉斯斯坦乔尔蓬阿塔（J4）双打冠军等多项",
          ],
        },
        {
          type: "p",
          text: "Kim Ju-an 代表大韩民国征战全球 ITF 赛场，将一切倾注于网球。对他而言，'网球留学'不只是升学途径或运动研修，更是亲身体验更广阔世界、不断成长的最佳契机。他以网球为媒介活跃于美国大学联赛舞台，同时考入世界顶尖名校之一的 University of Chicago，主修经济学与数学，在运动与学业两方面都证明了最高水平的实力。",
        },
        {
          type: "p",
          text: "他在美国亲历的先进环境，以及与杰出的全球伙伴的交流，成为拓宽他对更大世界的见闻与洞察的决定性契机。他在芝加哥密集地延续学业与大学联赛活动，于 2026 年下半年回到韩国，并为扩展非营利后援法人 Dunamis、运营新品牌 Fliv 下定决心，正式选择了创业者之路。",
        },
        {
          type: "p",
          text: "尤其是通过以社会正向影响力与利他精神为根基创立的 Dunamis，他正成长为一位以使命为中心、将价值传递到韩国之外、乃至全世界的企业家。如今他一方面接连推动事业成长，一方面作为 GCM 青少年学弟的'人生导师'，立体地展现出'无论在球场之外选择哪条路都能成功'的榜样。他从网球起步、亲历世界舞台、再将自身领域拓展为全球企业家的旅程，为正在考虑以网球留学的青少年选手与家长们，树立了最佳的成功典范。",
        },
        {
          type: "quote",
          text: "在 GCM，你学到的不是正手或反手，而是'如何在人生这场比赛中取胜'与'善的影响力'。",
        },
        {
          type: "p",
          text: "GCM 所提供的指导，远不止于击球的技术。正如 Kim Ju-an 在跃身创业时所体会到的，他在 GCM 学到的专注、投入、情绪与不安的调控，以及不屈的坚韧，并非单纯的网球技术，而是能够推动整个人生前行的'胜者的心态'。",
        },
        {
          type: "p",
          text: "最重要的是，他从 GCM 教练们身上汲取的善的影响力与利他精神的价值观，成为激励他不断挑战新目标、回馈社会的原动力。Kim Ju-an 以网球为人生的指南针、为寻找自我身份的工具，进而考入名校、以价值为中心创业、并指导学弟学妹——在他这份成功的背后，正是 GCM 那套独一无二、为选手整个人生共同思考并持续支持的指导体系。",
        },
        { type: "heading", text: "🎾 致 GCM 的学弟学妹" },
        {
          type: "quote",
          text: "我在 GCM 学到的心态与善的影响力，是驱使我超越网球、去迎接人生这更大机遇的最强大力量。我要以在球场上磨练出的执着，打造一家对世界、对社会产生影响力的企业，也为 GCM 的学弟学妹们开辟一条创造人生价值的学长之路。",
        },
        {
          type: "coachnote",
          text: "Kim Ju-an 是一份令人自豪的果实，他证明了网球这项运动能为一个人的人生留下何等宝贵的心理资产与利他价值。他以在球场上学到的投入与心态，超越考入 University of Chicago，成长为一位向社会传播善的影响力的企业家——这正是 GCM 所追求教育的巅峰。\n\n我们衷心期待并为他加油，愿他跃升为一家将美好价值传递到韩国之外、乃至全世界的企业。无论孩子走选手之路，还是像 Kim Ju-an 一样以网球为跳板成为改变世界的企业家，GCM 都将全力支持并陪伴孩子们的整个人生与梦想，直到最后。",
        },
      ],
      ja: [
        {
          type: "quote",
          text: "テニス留学を通じて世界トップ 0.1% の名門大学へ——今はテニスが教えてくれたメンタリティで革新を牽引する創業者。",
        },
        { type: "heading", text: "主な経歴と成績" },
        {
          type: "list",
          items: [
            "世界トップ 0.1%——University of Chicago（米国総合大学 TOP 10、アイビーリーグ最上位ティア）で経済学・数学を専攻し、大学リーグのテニス選手として活躍",
            "2022 IBK Industrial Bank Grand Slam 育成チーム選手出身",
            "国際テニス連盟（ITF）ジュニア——主な成績：\nコロンビア・ボゴタ（J200）ダブルス優勝 / カリ（J100）ダブルス準優勝",
            "グアム・デデド（J60）シングルス優勝 / マレーシア・セレンバン（J60）シングルス優勝",
            "南アフリカ・ポチェフストルーム（J100）ダブルス準優勝 / キルギス・チョルポンアタ（J4）ダブルス優勝ほか多数",
          ],
        },
        {
          type: "p",
          text: "大韓民国を代表して世界の ITF 舞台を駆け巡り、テニスにすべてを注いだ Kim Ju-an 選手。彼にとって「テニス留学」は単なる進学の手段やスポーツ研修ではなく、より広い世界を自ら体験し成長する最高の機会でした。テニスを通じて米国の大学リーグの舞台で活躍すると同時に、世界屈指の名門 University of Chicago に進学して経済学と数学を専攻し、スポーツと学業の両面で最高レベルの能力を証明しました。",
        },
        {
          type: "p",
          text: "米国の現地で経験した先進的な環境と、優れたグローバルな仲間たちとの交流は、より大きな世界への見聞と洞察を広げる決定的なきっかけとなりました。シカゴで学業と大学リーグの活動を密度濃く続けたのち、2026年後半に韓国へ帰国し、非営利の後援法人 Dunamis の拡大と新ブランド Fliv の運営のために決断を下し、本格的な事業家の道を選びました。",
        },
        {
          type: "p",
          text: "特に、社会的な善い影響力と利他心を土台に設立された Dunamis を通じて、彼は韓国を越えて世界へ価値を届ける、使命中心の起業家へと成長しています。今は事業を次々と成長させながら、同時に GCM のジュニア後輩たちの「人生のメンター」として、コートの外でどのような進路でも成功できるという立体的なロールモデルを示しています。テニスから始まり、世界の舞台を経験し、グローバルな起業家へとスペクトラムを広げた彼の歩みは、テニス留学を考えるジュニア選手や保護者にとって最高の成功モデルとなります。",
        },
        {
          type: "quote",
          text: "GCM で学ぶのはフォアハンドやバックハンドではなく、「人生というゲームで勝つ方法」と「善い影響力」です。",
        },
        {
          type: "p",
          text: "GCM が提供するコーチングは、単にボールを打つ技術にとどまりません。Kim Ju-an 選手が起業へ踏み出す中で感じたように、GCM で学んだ集中力、没入、感情と不安のコントロール、そして折れない粘り強さは、単なるテニスの技術ではなく、人生全体を前へ進める「勝者のメンタル」でした。",
        },
        {
          type: "p",
          text: "何よりも、GCM のコーチ陣から体得した善い影響力と利他心の価値観は、彼が絶えず新しい目標に挑戦し、社会に貢献しようとする動機づけの原動力となりました。テニスを人生の羅針盤とし、アイデンティティを見つける道具として、名門大学への進学、価値中心の起業、そして後輩のメンタリングへとつながる Kim Ju-an 選手の成功の裏には、選手の人生全体を共に考え、継続的に支えてきた GCM の比類なきメンタリングシステムが存在していました。",
        },
        { type: "heading", text: "🎾 GCM の後輩たちへ" },
        {
          type: "quote",
          text: "私が GCM で学んだメンタリティと善い影響力は、テニスを越えて人生というより大きな機会に挑ませてくれる最も強力な力です。コートの上で培った執念で、世界に、そして社会に影響を与える企業へと成長させ、GCM の後輩たちにも、人生の価値を生み出す先輩の道を開いておきたいと思います。",
        },
        {
          type: "coachnote",
          text: "Kim Ju-an 選手は、テニスというスポーツが一人の人生にどれほど偉大なメンタル的資産と利他的価値を残してくれるのかを証明してくれた、誇らしい結実です。コートの上で学んだ没入とメンタリティで、University of Chicago への進学を越えて、社会に善い影響力を広げる事業家へと成長していく Kim Ju-an 選手の姿は、GCM が目指す教育の頂点です。\n\n韓国を越えて世界へ善い価値を広める企業へと飛躍することを、心から期待し応援しています。選手の道を歩むにせよ、Kim Ju-an 選手のようにテニスを足がかりに世界を変える事業家になるにせよ、GCM は GCM の子どもたちの人生全体と夢を、最後まで全面的に支え、共に歩んでいきます。",
        },
      ],
      it: [
        {
          type: "quote",
          text: "Attraverso lo studio all'estero grazie al tennis, fino a un'università nello 0,1% più alto al mondo — ora un fondatore che guida l'innovazione con la mentalità che il tennis gli ha insegnato.",
        },
        { type: "heading", text: "Carriera e risultati" },
        {
          type: "list",
          items: [
            "Top 0,1% al mondo — economia e matematica alla University of Chicago (università statunitense nella TOP 10, élite di livello Ivy) e giocatore di tennis di college-league",
            "Ex giocatore della squadra di sviluppo 2022 IBK Industrial Bank Grand Slam",
            "ITF (International Tennis Federation) Junior — risultati principali:\nBogotá, Colombia (J200) campione di doppio / Cali (J100) finalista di doppio",
            "Dededo, Guam (J60) campione di singolare / Seremban, Malesia (J60) campione di singolare",
            "Potchefstroom, Sudafrica (J100) finalista di doppio / Cholpon-Ata, Kirghizistan (J4) campione di doppio, e altri",
          ],
        },
        {
          type: "p",
          text: "Rappresentando la Corea nel circuito ITF in tutto il mondo, Kim Ju-an ha dato tutto per il tennis. Per lui, studiare all'estero attraverso il tennis non è stato solo una via d'accesso all'università o un programma sportivo, ma la più grande opportunità di sperimentare un mondo più ampio e crescere. Gareggiando sul palcoscenico del college-league statunitense grazie al tennis, è entrato anche alla University of Chicago — una delle istituzioni più prestigiose al mondo — laureandosi in economia e matematica, dimostrando capacità ai massimi livelli sia nello sport sia negli studi.",
        },
        {
          type: "p",
          text: "L'ambiente avanzato che ha vissuto negli Stati Uniti e gli scambi con eccellenti coetanei di tutto il mondo sono diventati una svolta decisiva nell'ampliare la sua prospettiva e la sua comprensione di un mondo più grande. Dopo aver proseguito intensamente gli studi e il gioco nel college-league a Chicago, è tornato in Corea nella seconda metà del 2026 e, decidendo di espandere la fondazione non profit Dunamis e di lanciare il nuovo marchio Fliv, ha scelto la strada dell'imprenditore a tutti gli effetti.",
        },
        {
          type: "p",
          text: "In particolare, attraverso Dunamis — fondata su un impatto sociale positivo e sull'altruismo — sta diventando un imprenditore guidato da una vocazione, capace di portare valore oltre la Corea, al mondo intero. Oggi fa crescere un'impresa dopo l'altra, svolgendo al contempo il ruolo di 'mentore di vita' per i giovani giocatori della GCM, offrendo un modello di riferimento a più dimensioni che dimostra come si possa avere successo in qualsiasi percorso fuori dal campo. Il suo viaggio — iniziato con il tennis, passando per il palcoscenico mondiale fino ad ampliare il proprio spettro diventando un imprenditore globale — diventa il miglior modello di successo per i giovani giocatori e i genitori che valutano di studiare all'estero attraverso il tennis.",
        },
        {
          type: "quote",
          text: "Alla GCM non impari il dritto o il rovescio, ma 'come vincere nella partita della vita' e 'l'impatto positivo'.",
        },
        {
          type: "p",
          text: "L'insegnamento che la GCM offre va ben oltre la tecnica di colpire una palla. Come Kim Ju-an ha avvertito mentre si lanciava nell'imprenditoria, la concentrazione, l'immersione, il controllo delle emozioni e dell'ansia e la tenacia indistruttibile apprese alla GCM non erano semplici abilità tennistiche, ma una 'mentalità da vincente' che porta avanti un'intera vita.",
        },
        {
          type: "p",
          text: "Soprattutto, i valori dell'impatto positivo e dell'altruismo che ha assorbito dagli allenatori della GCM sono diventati la forza trainante che lo spinge a continuare a sfidare nuovi obiettivi e a contribuire alla società. Dietro il successo di Kim Ju-an — che ha usato il tennis come bussola e strumento per trovare la propria identità, giungendo all'ammissione in un'università d'élite, a un'imprenditoria guidata dai valori e al mentoring dei più giovani — c'era l'impareggiabile sistema di mentoring della GCM, che ha riflettuto a fondo sull'intera vita di un atleta e l'ha sostenuta con continuità.",
        },
        { type: "heading", text: "🎾 Ai giovani della GCM" },
        {
          type: "quote",
          text: "La mentalità e l'impatto positivo che ho appreso alla GCM sono la forza più potente che mi spinge ad affrontare la più grande opportunità della vita, oltre il tennis. Con la tenacia costruita in campo, farò crescere un'azienda che abbia un impatto sul mondo e sulla società, e aprirò anche per i giovani della GCM la strada di un senior che crea valore nella vita.",
        },
        {
          type: "coachnote",
          text: "Kim Ju-an è un frutto di cui andare fieri, che ha dimostrato quanto grande patrimonio mentale e valore altruistico lo sport del tennis possa lasciare nella vita di una persona. Con l'immersione e la mentalità apprese in campo, andando oltre l'ammissione alla University of Chicago per diventare un imprenditore che diffonde un impatto positivo nella società: questo è il vero apice dell'educazione a cui la GCM aspira.\n\nCi auguriamo sinceramente e sosteniamo il suo salto verso un'azienda che diffonda buoni valori oltre la Corea, nel mondo intero. Che un ragazzo scelga la strada del giocatore o — come Kim Ju-an — diventi un imprenditore che cambia il mondo usando il tennis come trampolino, la GCM sosterrà con tutto il cuore e accompagnerà fino in fondo l'intera vita e i sogni dei suoi ragazzi.",
        },
      ],
      fr: [
        {
          type: "quote",
          text: "Grâce à des études à l'étranger par le tennis, jusqu'à une université du top 0,1 % mondial — aujourd'hui un fondateur qui porte l'innovation avec la mentalité que le tennis lui a enseignée.",
        },
        { type: "heading", text: "Parcours et palmarès" },
        {
          type: "list",
          items: [
            "Top 0,1 % mondial — économie et mathématiques à la University of Chicago (université américaine du TOP 10, élite de niveau Ivy) et joueur de tennis de ligue universitaire",
            "Ancien joueur de l'équipe de développement 2022 IBK Industrial Bank Grand Slam",
            "ITF (International Tennis Federation) Junior — principaux résultats :\nBogotá, Colombie (J200) vainqueur en double / Cali (J100) finaliste en double",
            "Dededo, Guam (J60) vainqueur en simple / Seremban, Malaisie (J60) vainqueur en simple",
            "Potchefstroom, Afrique du Sud (J100) finaliste en double / Cholpon-Ata, Kirghizistan (J4) vainqueur en double, et bien d'autres",
          ],
        },
        {
          type: "p",
          text: "Représentant la Corée sur le circuit ITF à travers le monde, Kim Ju-an a tout donné pour le tennis. Pour lui, étudier à l'étranger grâce au tennis n'était pas un simple moyen d'admission ou un programme sportif, mais la plus belle occasion de découvrir un monde plus vaste et de grandir. Jouant sur la scène de la ligue universitaire américaine grâce au tennis, il a également intégré la University of Chicago — l'une des institutions les plus prestigieuses au monde — en se spécialisant en économie et en mathématiques, prouvant un niveau d'excellence tant dans le sport que dans les études.",
        },
        {
          type: "p",
          text: "L'environnement avancé qu'il a connu aux États-Unis et ses échanges avec des pairs internationaux d'exception sont devenus un tournant décisif pour élargir sa vision et sa compréhension d'un monde plus vaste. Après avoir poursuivi intensément ses études et ses matchs de ligue universitaire à Chicago, il est rentré en Corée au second semestre 2026 et, décidé à développer la fondation à but non lucratif Dunamis et à lancer la nouvelle marque Fliv, il a choisi la voie de l'entrepreneur à part entière.",
        },
        {
          type: "p",
          text: "En particulier, à travers Dunamis — fondée sur un impact social positif et l'altruisme — il devient un entrepreneur guidé par une vocation, qui porte de la valeur au-delà de la Corée, vers le monde entier. Il développe aujourd'hui une entreprise après l'autre tout en servant de « mentor de vie » aux jeunes joueurs de la GCM, offrant un modèle à multiples facettes qui montre que l'on peut réussir dans n'importe quelle voie en dehors du court. Son parcours — commencé par le tennis, passé par la scène mondiale, puis élargi jusqu'à devenir un entrepreneur global — devient le meilleur modèle de réussite pour les jeunes joueurs et les parents qui envisagent des études à l'étranger par le tennis.",
        },
        {
          type: "quote",
          text: "À la GCM, on n'apprend pas le coup droit ou le revers, mais « comment gagner la partie de la vie » et « l'impact positif ».",
        },
        {
          type: "p",
          text: "Le coaching proposé par la GCM va bien au-delà de la technique pour frapper une balle. Comme Kim Ju-an l'a ressenti en se lançant dans l'entrepreneuriat, la concentration, l'immersion, la maîtrise des émotions et de l'angoisse, ainsi que la persévérance inébranlable qu'il a apprises à la GCM n'étaient pas de simples compétences de tennis, mais un « état d'esprit de gagnant » qui fait avancer toute une vie.",
        },
        {
          type: "p",
          text: "Surtout, les valeurs d'impact positif et d'altruisme qu'il a absorbées auprès des entraîneurs de la GCM sont devenues le moteur qui le pousse à continuer de relever de nouveaux défis et à contribuer à la société. Derrière la réussite de Kim Ju-an — qui a utilisé le tennis comme boussole et comme outil pour trouver son identité, menant à l'admission dans une université d'élite, à un entrepreneuriat guidé par les valeurs et au mentorat des juniors — se tenait le système de mentorat sans égal de la GCM, qui a réfléchi à l'ensemble de la vie d'un joueur et l'a soutenue sans relâche.",
        },
        { type: "heading", text: "🎾 Aux juniors de la GCM" },
        {
          type: "quote",
          text: "La mentalité et l'impact positif que j'ai appris à la GCM sont la force la plus puissante qui me pousse à saisir la plus grande opportunité de la vie, au-delà du tennis. Avec la ténacité forgée sur le court, je ferai grandir une entreprise qui a un impact sur le monde et sur la société, et j'ouvrirai aussi, pour les juniors de la GCM, la voie d'un aîné qui crée de la valeur dans la vie.",
        },
        {
          type: "coachnote",
          text: "Kim Ju-an est un fruit dont nous sommes fiers, qui a prouvé à quel point le tennis peut laisser un grand capital mental et une valeur altruiste dans la vie d'une personne. Avec l'immersion et la mentalité apprises sur le court, allant au-delà de son admission à la University of Chicago pour devenir un entrepreneur qui diffuse un impact positif dans la société — c'est le sommet même de l'éducation à laquelle aspire la GCM.\n\nNous espérons sincèrement et encourageons son envol vers une entreprise qui diffuse de bonnes valeurs au-delà de la Corée, dans le monde entier. Qu'un enfant emprunte la voie du joueur ou — comme Kim Ju-an — devienne un entrepreneur qui change le monde en faisant du tennis un tremplin, la GCM soutiendra de tout cœur et accompagnera jusqu'au bout la vie entière et les rêves de ses enfants.",
        },
      ],
      es: [
        {
          type: "quote",
          text: "A través de estudiar en el extranjero gracias al tenis, hasta una universidad del 0,1 % más selecto del mundo: ahora un fundador que impulsa la innovación con la mentalidad que el tenis le enseñó.",
        },
        { type: "heading", text: "Trayectoria y logros" },
        {
          type: "list",
          items: [
            "Top 0,1 % mundial — economía y matemáticas en la University of Chicago (universidad estadounidense del TOP 10, élite de nivel Ivy) y jugador de tenis de liga universitaria",
            "Exjugador del equipo de desarrollo 2022 IBK Industrial Bank Grand Slam",
            "ITF (International Tennis Federation) Junior — principales resultados:\nBogotá, Colombia (J200) campeón de dobles / Cali (J100) finalista de dobles",
            "Dededo, Guam (J60) campeón individual / Seremban, Malasia (J60) campeón individual",
            "Potchefstroom, Sudáfrica (J100) finalista de dobles / Cholpon-Ata, Kirguistán (J4) campeón de dobles, y más",
          ],
        },
        {
          type: "p",
          text: "Representando a Corea en el circuito ITF por todo el mundo, Kim Ju-an lo dio todo por el tenis. Para él, estudiar en el extranjero a través del tenis no fue un simple camino de admisión o un programa deportivo, sino la mejor oportunidad de experimentar un mundo más amplio y crecer. Compitiendo en el escenario de la liga universitaria estadounidense gracias al tenis, también entró en la University of Chicago —una de las instituciones más prestigiosas del mundo— especializándose en economía y matemáticas, y demostrando un nivel de excelencia tanto en el deporte como en los estudios.",
        },
        {
          type: "p",
          text: "El entorno avanzado que vivió en Estados Unidos y sus intercambios con destacados compañeros de todo el mundo se convirtieron en un punto de inflexión decisivo para ampliar su perspectiva y su comprensión de un mundo más amplio. Tras continuar intensamente sus estudios y su juego en la liga universitaria en Chicago, regresó a Corea en la segunda mitad de 2026 y, decidido a expandir la fundación sin ánimo de lucro Dunamis y a lanzar la nueva marca Fliv, eligió el camino del emprendedor de pleno derecho.",
        },
        {
          type: "p",
          text: "En particular, a través de Dunamis —fundada sobre el impacto social positivo y el altruismo— se está convirtiendo en un emprendedor movido por una vocación, que lleva valor más allá de Corea, al mundo entero. Hoy hace crecer un proyecto tras otro, al tiempo que ejerce de 'mentor de vida' para los jóvenes jugadores de la GCM, presentando un modelo a seguir poliédrico que demuestra que se puede triunfar en cualquier camino fuera de la pista. Su trayectoria —que comenzó con el tenis, pasó por el escenario mundial y amplió su espectro hasta convertirse en un emprendedor global— se convierte en el mejor modelo de éxito para los jóvenes jugadores y los padres que se plantean estudiar en el extranjero a través del tenis.",
        },
        {
          type: "quote",
          text: "En la GCM no aprendes el derecha o el revés, sino 'cómo ganar en el partido de la vida' y 'el impacto positivo'.",
        },
        {
          type: "p",
          text: "La enseñanza que ofrece la GCM va mucho más allá de la técnica de golpear una pelota. Como sintió Kim Ju-an al lanzarse al emprendimiento, la concentración, la inmersión, el control de las emociones y la ansiedad, y la perseverancia inquebrantable que aprendió en la GCM no eran meras destrezas de tenis, sino una 'mentalidad ganadora' que impulsa toda una vida.",
        },
        {
          type: "p",
          text: "Sobre todo, los valores de impacto positivo y altruismo que absorbió de los entrenadores de la GCM se convirtieron en la fuerza motriz que lo impulsa a seguir afrontando nuevas metas y a contribuir a la sociedad. Detrás del éxito de Kim Ju-an —que usó el tenis como brújula y como herramienta para encontrar su identidad, lo que lo llevó a la admisión en una universidad de élite, a un emprendimiento guiado por los valores y a la mentoría de los más jóvenes— estaba el inigualable sistema de mentoría de la GCM, que ha reflexionado sobre la vida entera de un jugador y la ha apoyado de forma continua.",
        },
        { type: "heading", text: "🎾 A los juniors de la GCM" },
        {
          type: "quote",
          text: "La mentalidad y el impacto positivo que aprendí en la GCM son la fuerza más poderosa que me impulsa a afrontar la mayor oportunidad de la vida, más allá del tenis. Con la tenacidad forjada en la pista, haré crecer una empresa que tenga un impacto en el mundo y en la sociedad, y abriré también para los juniors de la GCM el camino de un sénior que crea valor en la vida.",
        },
        {
          type: "coachnote",
          text: "Kim Ju-an es un fruto del que sentirse orgulloso, que demostró cuán grande es el capital mental y el valor altruista que el deporte del tenis puede dejar en la vida de una persona. Con la inmersión y la mentalidad que aprendió en la pista, yendo más allá de su admisión en la University of Chicago para convertirse en un emprendedor que difunde un impacto positivo en la sociedad: esta es la cúspide misma de la educación a la que aspira la GCM.\n\nEsperamos sinceramente y animamos su salto hacia una empresa que difunda buenos valores más allá de Corea, al mundo entero. Ya sea que un niño siga el camino de jugador o —como Kim Ju-an— se convierta en un emprendedor que cambia el mundo usando el tenis como trampolín, la GCM apoyará de todo corazón y acompañará hasta el final la vida entera y los sueños de sus niños.",
        },
      ],
    },
  },
];
