export type PlayerTrack = "professional" | "college";

export type Player = {
  id: string;
  slug: string;
  name: string;
  grad_year: string | null;
  utr: string | null;
  track: PlayerTrack | null;
  result: string | null;
  video_url: string | null;
  image: string | null;
  bio: string | null;
  // 선수 프로필 정보
  birthday: string | null; // 생년월일 (예: 2013.03.16)
  birthplace: string | null; // 출생지
  nationality: string | null; // 국적
  plays: string | null; // 주 손 (오른손/왼손)
  backhand: string | null; // 백핸드 (양손/한손)
  joined_date: string | null; // GCM 합류일
  coach_note: string | null; // 코치's 노트
  sort_order: number;
  published: boolean;
};

export const TRACK_LABEL: Record<PlayerTrack, { ko: string; en: string }> = {
  professional: { ko: "프로", en: "Pro" },
  college: { ko: "대학", en: "College" },
};

/** 이름에서 slug 후보 생성(한글은 랜덤 접미사로 유일성 확보) */
export function slugifyPlayer(name: string, rand: string): string {
  const base = name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\s-]/g, "")
    .replace(/\s+/g, "-");
  const ascii = base.replace(/[^a-z0-9-]/g, "");
  return `${ascii || "player"}-${rand.slice(0, 6)}`;
}
