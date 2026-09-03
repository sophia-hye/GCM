/** 후기(gcm_voices) 공통 타입과 영문 로컬라이즈 헬퍼 */

export type VoiceLocalizable = {
  title: string | null;
  body: string;
  author_name: string;
  // 영문(EN) 필드 — 없으면 한글로 폴백
  title_en?: string | null;
  body_en?: string | null;
  author_name_en?: string | null;
};

/** 영문 로케일이면 *_en 값(없으면 한글)으로 치환 */
export function localizeVoice<T extends VoiceLocalizable>(v: T, ko: boolean): T {
  if (ko) return v;
  return {
    ...v,
    title: v.title_en ?? v.title,
    body: v.body_en || v.body,
    author_name: v.author_name_en || v.author_name,
  };
}
