import { pick, type I18nText, type Locale } from "@/lib/i18n-pick";

export type FieldType =
  | "text"
  | "email"
  | "tel"
  | "number"
  | "date"
  | "select"
  | "textarea";

export type FormFieldDef = {
  name: string;
  label: string;
  type: FieldType;
  options?: readonly string[];
  required?: boolean;
  full?: boolean; // 한 줄 전체 너비
  placeholder?: string;
  min?: number;
  max?: number;
  // 다국어(ko=label 기준) — 없으면 영어(en)→한글(label) 순으로 폴백.
  // options* 는 options 와 같은 순서/길이, 제출값(value)은 한글 유지
  labelEn?: string;
  labelZh?: string;
  labelJa?: string;
  labelIt?: string;
  labelFr?: string;
  labelEs?: string;
  optionsEn?: readonly string[];
  optionsZh?: readonly string[];
  optionsJa?: readonly string[];
  optionsIt?: readonly string[];
  optionsFr?: readonly string[];
  optionsEs?: readonly string[];
  placeholderEn?: string;
  placeholderZh?: string;
  placeholderJa?: string;
  placeholderIt?: string;
  placeholderFr?: string;
  placeholderEs?: string;
};

/** 국적 · 거주 국가 선택지 (value 는 한글 유지, 표시는 로케일별) */
export const COUNTRIES = [
  "대한민국",
  "미국",
  "일본",
  "중국",
  "영국",
  "프랑스",
  "스페인",
  "독일",
  "이탈리아",
  "호주",
  "캐나다",
  "기타",
] as const;

export const COUNTRIES_EN = [
  "Korea",
  "USA",
  "Japan",
  "China",
  "UK",
  "France",
  "Spain",
  "Germany",
  "Italy",
  "Australia",
  "Canada",
  "Other",
] as const;

export const COUNTRIES_ZH = [
  "韩国",
  "美国",
  "日本",
  "中国",
  "英国",
  "法国",
  "西班牙",
  "德国",
  "意大利",
  "澳大利亚",
  "加拿大",
  "其他",
] as const;

export const COUNTRIES_JA = [
  "韓国",
  "アメリカ",
  "日本",
  "中国",
  "イギリス",
  "フランス",
  "スペイン",
  "ドイツ",
  "イタリア",
  "オーストラリア",
  "カナダ",
  "その他",
] as const;

export const COUNTRIES_IT = [
  "Corea",
  "USA",
  "Giappone",
  "Cina",
  "Regno Unito",
  "Francia",
  "Spagna",
  "Germania",
  "Italia",
  "Australia",
  "Canada",
  "Altro",
] as const;

export const COUNTRIES_FR = [
  "Corée",
  "États-Unis",
  "Japon",
  "Chine",
  "Royaume-Uni",
  "France",
  "Espagne",
  "Allemagne",
  "Italie",
  "Australie",
  "Canada",
  "Autre",
] as const;

export const COUNTRIES_ES = [
  "Corea",
  "EE. UU.",
  "Japón",
  "China",
  "Reino Unido",
  "Francia",
  "España",
  "Alemania",
  "Italia",
  "Australia",
  "Canadá",
  "Otro",
] as const;

export type FormSection = {
  title: string;
  titleEn?: string;
  titleZh?: string;
  titleJa?: string;
  titleIt?: string;
  titleFr?: string;
  titleEs?: string;
  fields: FormFieldDef[];
};

/**
 * 헬퍼 인자 하위호환:
 * - boolean: true → ko, false → en (기존 서버/컴포넌트 호출 유지)
 * - Locale: 해당 언어 (없으면 en → ko 폴백)
 */
type LocaleArg = boolean | Locale;

function toLocale(arg: LocaleArg): Locale {
  if (typeof arg === "boolean") return arg ? "ko" : "en";
  return arg;
}

/** 로케일에 맞는 필드 라벨 (ko=label 기준) */
export function fieldLabel(f: FormFieldDef, arg: LocaleArg): string {
  const text: I18nText = {
    ko: f.label,
    en: f.labelEn ?? f.label,
    zh: f.labelZh,
    ja: f.labelJa,
    it: f.labelIt,
    fr: f.labelFr,
    es: f.labelEs,
  };
  return pick(toLocale(arg), text);
}

/** 로케일에 맞는 섹션 제목 (ko=title 기준) */
export function sectionTitle(s: FormSection, arg: LocaleArg): string {
  const text: I18nText = {
    ko: s.title,
    en: s.titleEn ?? s.title,
    zh: s.titleZh,
    ja: s.titleJa,
    it: s.titleIt,
    fr: s.titleFr,
    es: s.titleEs,
  };
  return pick(toLocale(arg), text);
}

/** 로케일에 맞는 placeholder — 정의가 없으면 undefined */
export function fieldPlaceholder(f: FormFieldDef, arg: LocaleArg): string | undefined {
  if (
    !f.placeholder &&
    !f.placeholderEn &&
    !f.placeholderZh &&
    !f.placeholderJa &&
    !f.placeholderIt &&
    !f.placeholderFr &&
    !f.placeholderEs
  ) {
    return undefined;
  }
  const text: I18nText = {
    ko: f.placeholder ?? "",
    en: f.placeholderEn ?? f.placeholder ?? "",
    zh: f.placeholderZh,
    ja: f.placeholderJa,
    it: f.placeholderIt,
    fr: f.placeholderFr,
    es: f.placeholderEs,
  };
  return pick(toLocale(arg), text) || undefined;
}

/** select 옵션을 {value(한글 canonical), label(로케일)} 로 반환 */
export function fieldOptions(f: FormFieldDef, arg: LocaleArg): { value: string; label: string }[] {
  const locale = toLocale(arg);
  const opts = f.options ?? [];
  return opts.map((value, i) => {
    const text: I18nText = {
      ko: value,
      en: f.optionsEn?.[i] ?? value,
      zh: f.optionsZh?.[i],
      ja: f.optionsJa?.[i],
      it: f.optionsIt?.[i],
      fr: f.optionsFr?.[i],
      es: f.optionsEs?.[i],
    };
    return { value, label: pick(locale, text) };
  });
}

/** 장학 신청 폼 (Colle Degli Dei 기준, EU/Non-EU Status 제외) */
export const scholarshipForm: FormSection[] = [
  {
    title: "개인 정보",
    titleEn: "Personal Information",
    titleZh: "个人信息",
    titleJa: "個人情報",
    titleIt: "Informazioni personali",
    titleFr: "Informations personnelles",
    titleEs: "Información personal",
    fields: [
      {
        name: "firstName",
        label: "이름 (First Name)",
        labelEn: "First Name",
        labelZh: "名字",
        labelJa: "名",
        labelIt: "Nome",
        labelFr: "Prénom",
        labelEs: "Nombre",
        type: "text",
        required: true,
      },
      {
        name: "lastName",
        label: "성 (Last Name)",
        labelEn: "Last Name",
        labelZh: "姓",
        labelJa: "姓",
        labelIt: "Cognome",
        labelFr: "Nom de famille",
        labelEs: "Apellido",
        type: "text",
        required: true,
      },
      {
        name: "email",
        label: "이메일",
        labelEn: "Email",
        labelZh: "电子邮件",
        labelJa: "メール",
        labelIt: "Email",
        labelFr: "E-mail",
        labelEs: "Correo electrónico",
        type: "email",
        required: true,
      },
      {
        name: "phone",
        label: "전화 / WhatsApp",
        labelEn: "Phone / WhatsApp",
        labelZh: "电话 / WhatsApp",
        labelJa: "電話 / WhatsApp",
        labelIt: "Telefono / WhatsApp",
        labelFr: "Téléphone / WhatsApp",
        labelEs: "Teléfono / WhatsApp",
        type: "tel",
        required: true,
      },
      {
        name: "dob",
        label: "생년월일",
        labelEn: "Date of Birth",
        labelZh: "出生日期",
        labelJa: "生年月日",
        labelIt: "Data di nascita",
        labelFr: "Date de naissance",
        labelEs: "Fecha de nacimiento",
        type: "date",
        required: true,
      },
      {
        name: "gender",
        label: "성별",
        labelEn: "Gender",
        labelZh: "性别",
        labelJa: "性別",
        labelIt: "Sesso",
        labelFr: "Sexe",
        labelEs: "Sexo",
        type: "select",
        options: ["남성", "여성"],
        optionsEn: ["Male", "Female"],
        optionsZh: ["男", "女"],
        optionsJa: ["男性", "女性"],
        optionsIt: ["Uomo", "Donna"],
        optionsFr: ["Homme", "Femme"],
        optionsEs: ["Hombre", "Mujer"],
        required: true,
      },
      {
        name: "nationality",
        label: "국적",
        labelEn: "Nationality",
        labelZh: "国籍",
        labelJa: "国籍",
        labelIt: "Nazionalità",
        labelFr: "Nationalité",
        labelEs: "Nacionalidad",
        type: "select",
        options: COUNTRIES,
        optionsEn: COUNTRIES_EN,
        optionsZh: COUNTRIES_ZH,
        optionsJa: COUNTRIES_JA,
        optionsIt: COUNTRIES_IT,
        optionsFr: COUNTRIES_FR,
        optionsEs: COUNTRIES_ES,
        required: true,
      },
      {
        name: "residence",
        label: "거주 국가",
        labelEn: "Country of Residence",
        labelZh: "居住国家",
        labelJa: "居住国",
        labelIt: "Paese di residenza",
        labelFr: "Pays de résidence",
        labelEs: "País de residencia",
        type: "select",
        options: COUNTRIES,
        optionsEn: COUNTRIES_EN,
        optionsZh: COUNTRIES_ZH,
        optionsJa: COUNTRIES_JA,
        optionsIt: COUNTRIES_IT,
        optionsFr: COUNTRIES_FR,
        optionsEs: COUNTRIES_ES,
        required: true,
      },
    ],
  },
  {
    title: "장학 · 테니스 프로필",
    titleEn: "Scholarship · Tennis Profile",
    titleZh: "奖学金 · 网球档案",
    titleJa: "奨学金・テニスプロフィール",
    titleIt: "Borsa di studio · Profilo tennistico",
    titleFr: "Bourse · Profil tennis",
    titleEs: "Beca · Perfil de tenis",
    fields: [
      {
        name: "scholarship",
        label: "신청 장학 유형",
        labelEn: "Scholarship Type",
        labelZh: "申请奖学金类型",
        labelJa: "申請する奨学金の種類",
        labelIt: "Tipo di borsa di studio",
        labelFr: "Type de bourse",
        labelEs: "Tipo de beca",
        type: "select",
        options: ["전액 장학", "부분 장학", "둘 다 가능"],
        optionsEn: ["Full scholarship", "Partial scholarship", "Either"],
        optionsZh: ["全额奖学金", "部分奖学金", "均可"],
        optionsJa: ["全額奨学金", "一部奨学金", "どちらでも可"],
        optionsIt: ["Borsa di studio completa", "Borsa di studio parziale", "Entrambe"],
        optionsFr: ["Bourse complète", "Bourse partielle", "Les deux"],
        optionsEs: ["Beca completa", "Beca parcial", "Cualquiera"],
        required: true,
      },
      {
        name: "hand",
        label: "주 사용 손",
        labelEn: "Dominant Hand",
        labelZh: "惯用手",
        labelJa: "利き手",
        labelIt: "Mano dominante",
        labelFr: "Main dominante",
        labelEs: "Mano dominante",
        type: "select",
        options: ["오른손", "왼손"],
        optionsEn: ["Right-handed", "Left-handed"],
        optionsZh: ["右手", "左手"],
        optionsJa: ["右利き", "左利き"],
        optionsIt: ["Destro", "Mancino"],
        optionsFr: ["Droitier", "Gaucher"],
        optionsEs: ["Diestro", "Zurdo"],
        required: true,
      },
      {
        name: "backhand",
        label: "백핸드 타입",
        labelEn: "Backhand",
        labelZh: "反手类型",
        labelJa: "バックハンド",
        labelIt: "Rovescio",
        labelFr: "Revers",
        labelEs: "Revés",
        type: "select",
        options: ["원핸드", "투핸드"],
        optionsEn: ["One-handed", "Two-handed"],
        optionsZh: ["单手", "双手"],
        optionsJa: ["片手", "両手"],
        optionsIt: ["A una mano", "A due mani"],
        optionsFr: ["À une main", "À deux mains"],
        optionsEs: ["A una mano", "A dos manos"],
        required: true,
      },
    ],
  },
  {
    title: "신체 정보",
    titleEn: "Physical Information",
    titleZh: "身体信息",
    titleJa: "身体情報",
    titleIt: "Informazioni fisiche",
    titleFr: "Informations physiques",
    titleEs: "Información física",
    fields: [
      {
        name: "height",
        label: "키 (cm)",
        labelEn: "Height (cm)",
        labelZh: "身高 (cm)",
        labelJa: "身長 (cm)",
        labelIt: "Altezza (cm)",
        labelFr: "Taille (cm)",
        labelEs: "Estatura (cm)",
        type: "number",
        required: true,
        min: 100,
        max: 250,
      },
      {
        name: "weight",
        label: "체중 (kg)",
        labelEn: "Weight (kg)",
        labelZh: "体重 (kg)",
        labelJa: "体重 (kg)",
        labelIt: "Peso (kg)",
        labelFr: "Poids (kg)",
        labelEs: "Peso (kg)",
        type: "number",
        required: true,
        min: 20,
        max: 200,
      },
    ],
  },
  {
    title: "랭킹 · 성과",
    titleEn: "Ranking · Results",
    titleZh: "排名 · 成绩",
    titleJa: "ランキング・成績",
    titleIt: "Classifica · Risultati",
    titleFr: "Classement · Résultats",
    titleEs: "Clasificación · Resultados",
    fields: [
      {
        name: "ranking",
        label: "현재 ITF / ATP / WTA 랭킹",
        labelEn: "Current ITF / ATP / WTA Ranking",
        labelZh: "当前 ITF / ATP / WTA 排名",
        labelJa: "現在の ITF / ATP / WTA ランキング",
        labelIt: "Classifica ITF / ATP / WTA attuale",
        labelFr: "Classement ITF / ATP / WTA actuel",
        labelEs: "Clasificación ITF / ATP / WTA actual",
        type: "text",
        required: true,
      },
      {
        name: "nationalRanking",
        label: "국내 랭킹",
        labelEn: "National Ranking",
        labelZh: "国内排名",
        labelJa: "国内ランキング",
        labelIt: "Classifica nazionale",
        labelFr: "Classement national",
        labelEs: "Clasificación nacional",
        type: "text",
        required: true,
      },
      {
        name: "bestResults",
        label: "최근 주요 성과",
        labelEn: "Recent Key Results",
        labelZh: "近期主要成绩",
        labelJa: "最近の主な成績",
        labelIt: "Risultati principali recenti",
        labelFr: "Principaux résultats récents",
        labelEs: "Principales resultados recientes",
        type: "text",
        required: true,
        full: true,
      },
      {
        name: "schedule",
        label: "현재 대회 일정 / 경기 캘린더",
        labelEn: "Current Tournament Schedule / Match Calendar",
        labelZh: "当前比赛日程 / 赛程表",
        labelJa: "現在の大会日程 / 試合カレンダー",
        labelIt: "Calendario tornei / partite attuale",
        labelFr: "Calendrier actuel des tournois / matchs",
        labelEs: "Calendario actual de torneos / partidos",
        type: "text",
        required: true,
        full: true,
      },
    ],
  },
  {
    title: "목표 · 동기",
    titleEn: "Goals · Motivation",
    titleZh: "目标 · 动机",
    titleJa: "目標・動機",
    titleIt: "Obiettivi · Motivazione",
    titleFr: "Objectifs · Motivation",
    titleEs: "Objetivos · Motivación",
    fields: [
      {
        name: "strengths",
        label: "선수로서 주요 강점",
        labelEn: "Key Strengths as a Player",
        labelZh: "作为球员的主要优势",
        labelJa: "選手としての主な強み",
        labelIt: "Punti di forza principali come giocatore",
        labelFr: "Principaux atouts en tant que joueur",
        labelEs: "Principales fortalezas como jugador",
        type: "textarea",
        required: true,
        full: true,
      },
      {
        name: "improve",
        label: "개선하고 싶은 부분",
        labelEn: "Areas You Want to Improve",
        labelZh: "希望改进的方面",
        labelJa: "改善したい点",
        labelIt: "Aree che vuoi migliorare",
        labelFr: "Points que vous souhaitez améliorer",
        labelEs: "Aspectos que quieres mejorar",
        type: "textarea",
        required: true,
        full: true,
      },
      {
        name: "goals",
        label: "단기 · 중기 목표",
        labelEn: "Short- & Mid-term Goals",
        labelZh: "短期 · 中期目标",
        labelJa: "短期・中期目標",
        labelIt: "Obiettivi a breve e medio termine",
        labelFr: "Objectifs à court et moyen terme",
        labelEs: "Objetivos a corto y medio plazo",
        type: "textarea",
        required: true,
        full: true,
      },
      {
        name: "why",
        label: "장학 신청 이유",
        labelEn: "Reason for Applying",
        labelZh: "申请奖学金的原因",
        labelJa: "奨学金に応募する理由",
        labelIt: "Motivo della candidatura",
        labelFr: "Raison de la candidature",
        labelEs: "Motivo de la solicitud",
        type: "textarea",
        required: true,
        full: true,
      },
    ],
  },
  {
    title: "기타",
    titleEn: "Other",
    titleZh: "其他",
    titleJa: "その他",
    titleIt: "Altro",
    titleFr: "Autre",
    titleEs: "Otro",
    fields: [
      {
        name: "links",
        label: "참고 링크 (영상 등, 선택)",
        labelEn: "Reference Links (video, etc. — optional)",
        labelZh: "参考链接（视频等，选填）",
        labelJa: "参考リンク（動画など・任意）",
        labelIt: "Link di riferimento (video, ecc. — facoltativo)",
        labelFr: "Liens de référence (vidéo, etc. — facultatif)",
        labelEs: "Enlaces de referencia (vídeo, etc. — opcional)",
        type: "text",
        required: false,
        full: true,
      },
    ],
  },
];

/** 상담 신청 폼 (IMG Academy Request consultation 기준) */
export const consultationForm: FormSection[] = [
  {
    title: "Athlete Profile",
    titleEn: "Athlete Profile",
    titleZh: "运动员档案",
    titleJa: "アスリートプロフィール",
    titleIt: "Profilo dell'atleta",
    titleFr: "Profil de l'athlète",
    titleEs: "Perfil del atleta",
    fields: [
      {
        name: "interested",
        label: "관심 프로그램",
        labelEn: "Program of Interest",
        labelZh: "感兴趣的项目",
        labelJa: "興味のあるプログラム",
        labelIt: "Programma di interesse",
        labelFr: "Programme qui vous intéresse",
        labelEs: "Programa de interés",
        type: "select",
        options: ["주니어 (Junior)", "프로 (Pro)", "성인 (Adult)", "아직 모르겠어요"],
        optionsEn: ["Junior", "Pro", "Adult", "Not sure yet"],
        optionsZh: ["青少年", "职业", "成人", "还不确定"],
        optionsJa: ["ジュニア", "プロ", "成人", "まだ決めていない"],
        optionsIt: ["Junior", "Pro", "Adulti", "Non ancora sicuro"],
        optionsFr: ["Junior", "Pro", "Adulte", "Pas encore sûr"],
        optionsEs: ["Junior", "Pro", "Adulto", "Aún no lo sé"],
        required: true,
      },
      {
        name: "firstName",
        label: "이름 (First Name)",
        labelEn: "First Name",
        labelZh: "名字",
        labelJa: "名",
        labelIt: "Nome",
        labelFr: "Prénom",
        labelEs: "Nombre",
        type: "text",
        required: true,
      },
      {
        name: "lastName",
        label: "성 (Last Name)",
        labelEn: "Last Name",
        labelZh: "姓",
        labelJa: "姓",
        labelIt: "Cognome",
        labelFr: "Nom de famille",
        labelEs: "Apellido",
        type: "text",
        required: true,
      },
      {
        name: "email",
        label: "이메일",
        labelEn: "Email",
        labelZh: "电子邮件",
        labelJa: "メール",
        labelIt: "Email",
        labelFr: "E-mail",
        labelEs: "Correo electrónico",
        type: "email",
        required: true,
      },
      {
        name: "phone",
        label: "전화번호",
        labelEn: "Phone",
        labelZh: "电话号码",
        labelJa: "電話番号",
        labelIt: "Telefono",
        labelFr: "Téléphone",
        labelEs: "Teléfono",
        type: "tel",
        required: true,
      },
      {
        name: "submitter",
        label: "신청자",
        labelEn: "Submitted by",
        labelZh: "申请人",
        labelJa: "申請者",
        labelIt: "Inviato da",
        labelFr: "Soumis par",
        labelEs: "Enviado por",
        type: "select",
        options: ["선수 본인", "학부모", "기타"],
        optionsEn: ["The player", "Parent", "Other"],
        optionsZh: ["选手本人", "家长", "其他"],
        optionsJa: ["選手本人", "保護者", "その他"],
        optionsIt: ["L'atleta", "Genitore", "Altro"],
        optionsFr: ["Le joueur", "Parent", "Autre"],
        optionsEs: ["El jugador", "Padre o madre", "Otro"],
        required: true,
      },
      {
        name: "country",
        label: "국가",
        labelEn: "Country",
        labelZh: "国家",
        labelJa: "国",
        labelIt: "Paese",
        labelFr: "Pays",
        labelEs: "País",
        type: "select",
        options: ["대한민국", "기타"],
        optionsEn: ["Korea", "Other"],
        optionsZh: ["韩国", "其他"],
        optionsJa: ["韓国", "その他"],
        optionsIt: ["Corea", "Altro"],
        optionsFr: ["Corée", "Autre"],
        optionsEs: ["Corea", "Otro"],
        required: true,
      },
    ],
  },
];

/** 모든 섹션을 평탄화한 필드 맵 (저장 시 라벨 변환용) */
export function fieldLabelMap(sections: FormSection[]): Record<string, string> {
  const map: Record<string, string> = {};
  for (const s of sections) for (const f of s.fields) map[f.name] = f.label;
  return map;
}
