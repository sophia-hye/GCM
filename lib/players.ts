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
