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
  description: string | null; // 선수 소개(상세 페이지 본문). 빈 줄로 문단 구분, "..." 문단은 인용구
  coach_note: string | null; // 코치's 노트
  // 영문(EN) — 없으면 한국어로 폴백
  name_en: string | null;
  bio_en: string | null;
  result_en: string | null;
  description_en: string | null;
  coach_note_en: string | null;
  birthplace_en: string | null;
  sort_order: number;
  published: boolean;
};

// 표준화된 짧은 프로필 값은 매핑으로 번역(선수별 컬럼 불필요)
const PLAYS_EN: Record<string, string> = {
  오른손: "Right-handed",
  왼손: "Left-handed",
  "오른손/왼손": "Right / Left-handed",
};
const BACKHAND_EN: Record<string, string> = {
  양손백핸드: "Two-handed backhand",
  한손백핸드: "One-handed backhand",
  양손: "Two-handed",
  한손: "One-handed",
};
const NATIONALITY_EN: Record<string, string> = {
  대한민국: "Korea",
  한국: "Korea",
  "대한민국 / 미국": "Korea / USA",
};
function mapEn(map: Record<string, string>, v: string | null): string | null {
  if (!v) return v;
  return map[v.trim()] ?? v;
}

/** 로케일에 맞춰 선수 표시 값을 선택(EN이면 *_en 우선, 없으면 한국어 폴백) */
export function localizePlayer(p: Player, ko: boolean): Player {
  if (ko) return p;
  return {
    ...p,
    name: p.name_en || p.name,
    bio: p.bio_en || p.bio,
    result: p.result_en || p.result,
    description: p.description_en || p.description,
    coach_note: p.coach_note_en || p.coach_note,
    birthplace: p.birthplace_en || p.birthplace,
    plays: mapEn(PLAYS_EN, p.plays),
    backhand: mapEn(BACKHAND_EN, p.backhand),
    nationality: mapEn(NATIONALITY_EN, p.nationality),
  };
}

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
