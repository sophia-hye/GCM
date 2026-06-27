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
};

/** 국적 · 거주 국가 선택지 */
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

export type FormSection = {
  title: string;
  fields: FormFieldDef[];
};

/** 장학 신청 폼 (Colle Degli Dei 기준, EU/Non-EU Status 제외) */
export const scholarshipForm: FormSection[] = [
  {
    title: "개인 정보",
    fields: [
      { name: "firstName", label: "이름 (First Name)", type: "text", required: true },
      { name: "lastName", label: "성 (Last Name)", type: "text", required: true },
      { name: "email", label: "이메일", type: "email", required: true },
      { name: "phone", label: "전화 / WhatsApp", type: "tel", required: true },
      { name: "dob", label: "생년월일", type: "date", required: true },
      {
        name: "gender",
        label: "성별",
        type: "select",
        options: ["남성", "여성"],
        required: true,
      },
      { name: "nationality", label: "국적", type: "select", options: COUNTRIES, required: true },
      {
        name: "residence",
        label: "거주 국가",
        type: "select",
        options: COUNTRIES,
        required: true,
      },
    ],
  },
  {
    title: "장학 · 테니스 프로필",
    fields: [
      {
        name: "scholarship",
        label: "신청 장학 유형",
        type: "select",
        options: ["전액 장학", "부분 장학", "둘 다 가능"],
        required: true,
      },
      {
        name: "hand",
        label: "주 사용 손",
        type: "select",
        options: ["오른손", "왼손"],
        required: true,
      },
      {
        name: "backhand",
        label: "백핸드 타입",
        type: "select",
        options: ["원핸드", "투핸드"],
        required: true,
      },
    ],
  },
  {
    title: "신체 정보",
    fields: [
      { name: "height", label: "키 (cm)", type: "number", required: true, min: 100, max: 250 },
      { name: "weight", label: "체중 (kg)", type: "number", required: true, min: 20, max: 200 },
    ],
  },
  {
    title: "랭킹 · 성과",
    fields: [
      { name: "ranking", label: "현재 ITF / ATP / WTA 랭킹", type: "text", required: true },
      { name: "nationalRanking", label: "국내 랭킹", type: "text", required: true },
      { name: "bestResults", label: "최근 주요 성과", type: "text", required: true, full: true },
      {
        name: "schedule",
        label: "현재 대회 일정 / 경기 캘린더",
        type: "text",
        required: true,
        full: true,
      },
    ],
  },
  {
    title: "목표 · 동기",
    fields: [
      { name: "strengths", label: "선수로서 주요 강점", type: "textarea", required: true, full: true },
      { name: "improve", label: "개선하고 싶은 부분", type: "textarea", required: true, full: true },
      { name: "goals", label: "단기 · 중기 목표", type: "textarea", required: true, full: true },
      { name: "why", label: "장학 신청 이유", type: "textarea", required: true, full: true },
    ],
  },
  {
    title: "기타",
    fields: [
      {
        name: "links",
        label: "참고 링크 (영상 등, 선택)",
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
    fields: [
      {
        name: "interested",
        label: "관심 프로그램",
        type: "select",
        options: ["주니어 (Junior)", "프로 (Pro)", "성인 (Adult)", "아직 모르겠어요"],
        required: true,
      },
      { name: "firstName", label: "이름 (First Name)", type: "text", required: true },
      { name: "lastName", label: "성 (Last Name)", type: "text", required: true },
      { name: "email", label: "이메일", type: "email", required: true },
      { name: "phone", label: "전화번호", type: "tel", required: true },
      {
        name: "submitter",
        label: "신청자",
        type: "select",
        options: ["선수 본인", "학부모", "기타"],
        required: true,
      },
      { name: "postalCode", label: "우편번호", type: "text", required: true },
      {
        name: "country",
        label: "국가",
        type: "select",
        options: ["대한민국", "기타"],
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
