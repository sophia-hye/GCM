// 회원가입 시 "GCM을 알게 된 경로"(유입 경로) 선택지.
// 저장은 gcm_profiles.source 컬럼에 value(한글)로 들어가고, "그 외"는 설명과 합쳐 "그 외: {설명}" 로 저장한다.

import type { I18nText } from "@/lib/i18n-pick";

export const REFERRAL_OTHER = "그 외";

// value(한글)는 저장값으로 고정, 표시 텍스트만 로케일별(ko=필수 아님, en 필수).
export type ReferralOption = { value: string } & I18nText;

export const REFERRAL_OPTIONS: ReferralOption[] = [
  {
    value: "오성국 코치 유튜브",
    ko: "오성국 코치님 유튜브",
    en: "Coach Seong-gook Oh's YouTube",
    zh: "吴成国教练的 YouTube",
    ja: "オ・ソングク コーチの YouTube",
    it: "YouTube del coach Seong-gook Oh",
    fr: "YouTube du coach Seong-gook Oh",
    es: "YouTube del entrenador Seong-gook Oh",
  },
  {
    value: "GCM 공식 인스타그램",
    ko: "GCM 코치진 / 공식 인스타그램",
    en: "GCM coaches / official Instagram",
    zh: "GCM 教练团队 / 官方 Instagram",
    ja: "GCM コーチ陣 / 公式 Instagram",
    it: "Coach GCM / Instagram ufficiale",
    fr: "Coachs GCM / Instagram officiel",
    es: "Entrenadores de GCM / Instagram oficial",
  },
  { value: "COV", ko: "COV", en: "COV", zh: "COV", ja: "COV", it: "COV", fr: "COV", es: "COV" },
  {
    value: REFERRAL_OTHER,
    ko: "그 외 (직접 입력)",
    en: "Other (please specify)",
    zh: "其他（请说明）",
    ja: "その他（ご記入ください）",
    it: "Altro (specifica)",
    fr: "Autre (préciser)",
    es: "Otro (especificar)",
  },
];

/** 폼에서 받은 선택값 + 그 외 설명을 source 저장값으로 합친다. 유효하지 않으면 null. */
export function buildReferralSource(selected: string, other: string): string | null {
  const sel = selected.trim();
  if (!sel) return null;
  const valid = REFERRAL_OPTIONS.some((o) => o.value === sel);
  if (!valid) return null;
  if (sel === REFERRAL_OTHER) {
    const o = other.trim();
    if (!o) return null;
    return `그 외: ${o}`;
  }
  return sel;
}
