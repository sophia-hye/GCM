// 회원가입 시 "GCM을 알게 된 경로"(유입 경로) 선택지.
// 저장은 gcm_profiles.source 컬럼에 value(한글)로 들어가고, "그 외"는 설명과 합쳐 "그 외: {설명}" 로 저장한다.

export const REFERRAL_OTHER = "그 외";

export type ReferralOption = { value: string; ko: string; en: string };

export const REFERRAL_OPTIONS: ReferralOption[] = [
  { value: "오성국 코치 유튜브", ko: "오성국 코치님 유튜브", en: "Coach Seong-gook Oh's YouTube" },
  { value: "GCM 공식 인스타그램", ko: "GCM 코치진 / 공식 인스타그램", en: "GCM coaches / official Instagram" },
  { value: "COV", ko: "COV", en: "COV" },
  { value: REFERRAL_OTHER, ko: "그 외 (직접 입력)", en: "Other (please specify)" },
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
