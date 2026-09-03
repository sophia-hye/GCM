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
  // 영문(EN) — 없으면 한글로 폴백. optionsEn 은 options 와 같은 순서/길이, 제출값(value)은 한글 유지
  labelEn?: string;
  optionsEn?: readonly string[];
  placeholderEn?: string;
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

export type FormSection = {
  title: string;
  titleEn?: string;
  fields: FormFieldDef[];
};

/** 로케일에 맞는 라벨/섹션 제목 */
export function fieldLabel(f: FormFieldDef, ko: boolean): string {
  return ko ? f.label : f.labelEn ?? f.label;
}
export function sectionTitle(s: FormSection, ko: boolean): string {
  return ko ? s.title : s.titleEn ?? s.title;
}
/** select 옵션을 {value(한글 canonical), label(로케일)} 로 반환 */
export function fieldOptions(f: FormFieldDef, ko: boolean): { value: string; label: string }[] {
  const opts = f.options ?? [];
  return opts.map((value, i) => ({
    value,
    label: ko ? value : f.optionsEn?.[i] ?? value,
  }));
}

/** 장학 신청 폼 (Colle Degli Dei 기준, EU/Non-EU Status 제외) */
export const scholarshipForm: FormSection[] = [
  {
    title: "개인 정보",
    titleEn: "Personal Information",
    fields: [
      { name: "firstName", label: "이름 (First Name)", labelEn: "First Name", type: "text", required: true },
      { name: "lastName", label: "성 (Last Name)", labelEn: "Last Name", type: "text", required: true },
      { name: "email", label: "이메일", labelEn: "Email", type: "email", required: true },
      { name: "phone", label: "전화 / WhatsApp", labelEn: "Phone / WhatsApp", type: "tel", required: true },
      { name: "dob", label: "생년월일", labelEn: "Date of Birth", type: "date", required: true },
      {
        name: "gender",
        label: "성별",
        labelEn: "Gender",
        type: "select",
        options: ["남성", "여성"],
        optionsEn: ["Male", "Female"],
        required: true,
      },
      { name: "nationality", label: "국적", labelEn: "Nationality", type: "select", options: COUNTRIES, optionsEn: COUNTRIES_EN, required: true },
      {
        name: "residence",
        label: "거주 국가",
        labelEn: "Country of Residence",
        type: "select",
        options: COUNTRIES,
        optionsEn: COUNTRIES_EN,
        required: true,
      },
    ],
  },
  {
    title: "장학 · 테니스 프로필",
    titleEn: "Scholarship · Tennis Profile",
    fields: [
      {
        name: "scholarship",
        label: "신청 장학 유형",
        labelEn: "Scholarship Type",
        type: "select",
        options: ["전액 장학", "부분 장학", "둘 다 가능"],
        optionsEn: ["Full scholarship", "Partial scholarship", "Either"],
        required: true,
      },
      {
        name: "hand",
        label: "주 사용 손",
        labelEn: "Dominant Hand",
        type: "select",
        options: ["오른손", "왼손"],
        optionsEn: ["Right-handed", "Left-handed"],
        required: true,
      },
      {
        name: "backhand",
        label: "백핸드 타입",
        labelEn: "Backhand",
        type: "select",
        options: ["원핸드", "투핸드"],
        optionsEn: ["One-handed", "Two-handed"],
        required: true,
      },
    ],
  },
  {
    title: "신체 정보",
    titleEn: "Physical Information",
    fields: [
      { name: "height", label: "키 (cm)", labelEn: "Height (cm)", type: "number", required: true, min: 100, max: 250 },
      { name: "weight", label: "체중 (kg)", labelEn: "Weight (kg)", type: "number", required: true, min: 20, max: 200 },
    ],
  },
  {
    title: "랭킹 · 성과",
    titleEn: "Ranking · Results",
    fields: [
      { name: "ranking", label: "현재 ITF / ATP / WTA 랭킹", labelEn: "Current ITF / ATP / WTA Ranking", type: "text", required: true },
      { name: "nationalRanking", label: "국내 랭킹", labelEn: "National Ranking", type: "text", required: true },
      { name: "bestResults", label: "최근 주요 성과", labelEn: "Recent Key Results", type: "text", required: true, full: true },
      {
        name: "schedule",
        label: "현재 대회 일정 / 경기 캘린더",
        labelEn: "Current Tournament Schedule / Match Calendar",
        type: "text",
        required: true,
        full: true,
      },
    ],
  },
  {
    title: "목표 · 동기",
    titleEn: "Goals · Motivation",
    fields: [
      { name: "strengths", label: "선수로서 주요 강점", labelEn: "Key Strengths as a Player", type: "textarea", required: true, full: true },
      { name: "improve", label: "개선하고 싶은 부분", labelEn: "Areas You Want to Improve", type: "textarea", required: true, full: true },
      { name: "goals", label: "단기 · 중기 목표", labelEn: "Short- & Mid-term Goals", type: "textarea", required: true, full: true },
      { name: "why", label: "장학 신청 이유", labelEn: "Reason for Applying", type: "textarea", required: true, full: true },
    ],
  },
  {
    title: "기타",
    titleEn: "Other",
    fields: [
      {
        name: "links",
        label: "참고 링크 (영상 등, 선택)",
        labelEn: "Reference Links (video, etc. — optional)",
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
    fields: [
      {
        name: "interested",
        label: "관심 프로그램",
        labelEn: "Program of Interest",
        type: "select",
        options: ["주니어 (Junior)", "프로 (Pro)", "성인 (Adult)", "아직 모르겠어요"],
        optionsEn: ["Junior", "Pro", "Adult", "Not sure yet"],
        required: true,
      },
      { name: "firstName", label: "이름 (First Name)", labelEn: "First Name", type: "text", required: true },
      { name: "lastName", label: "성 (Last Name)", labelEn: "Last Name", type: "text", required: true },
      { name: "email", label: "이메일", labelEn: "Email", type: "email", required: true },
      { name: "phone", label: "전화번호", labelEn: "Phone", type: "tel", required: true },
      {
        name: "submitter",
        label: "신청자",
        labelEn: "Submitted by",
        type: "select",
        options: ["선수 본인", "학부모", "기타"],
        optionsEn: ["The player", "Parent", "Other"],
        required: true,
      },
      {
        name: "country",
        label: "국가",
        labelEn: "Country",
        type: "select",
        options: ["대한민국", "기타"],
        optionsEn: ["Korea", "Other"],
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
