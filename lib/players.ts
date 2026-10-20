import { pick, toLocale, type Locale, type I18nText, type I18nMap } from "@/lib/i18n-pick";

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
  i18n?: I18nMap;
  sort_order: number;
  published: boolean;
};

// 표준화된 짧은 프로필 값은 매핑으로 번역(선수별 컬럼 불필요)
const PLAYS: Record<string, I18nText> = {
  오른손: { ko: "오른손", en: "Right-handed", zh: "右手", ja: "右利き", it: "Destro", fr: "Droitier", es: "Diestro" },
  왼손: { ko: "왼손", en: "Left-handed", zh: "左手", ja: "左利き", it: "Mancino", fr: "Gaucher", es: "Zurdo" },
  "오른손/왼손": { ko: "오른손/왼손", en: "Right / Left-handed", zh: "右手/左手", ja: "右利き/左利き", it: "Destro / Mancino", fr: "Droitier / Gaucher", es: "Diestro / Zurdo" },
};
const BACKHAND: Record<string, I18nText> = {
  양손백핸드: { ko: "양손백핸드", en: "Two-handed backhand", zh: "双手反拍", ja: "両手バックハンド", it: "Rovescio a due mani", fr: "Revers à deux mains", es: "Revés a dos manos" },
  한손백핸드: { ko: "한손백핸드", en: "One-handed backhand", zh: "单手反拍", ja: "片手バックハンド", it: "Rovescio a una mano", fr: "Revers à une main", es: "Revés a una mano" },
  양손: { ko: "양손", en: "Two-handed", zh: "双手", ja: "両手", it: "A due mani", fr: "À deux mains", es: "A dos manos" },
  한손: { ko: "한손", en: "One-handed", zh: "单手", ja: "片手", it: "A una mano", fr: "À une main", es: "A una mano" },
};
const NATIONALITY: Record<string, I18nText> = {
  대한민국: { ko: "대한민국", en: "Korea", zh: "韩国", ja: "韓国", it: "Corea", fr: "Corée", es: "Corea" },
  한국: { ko: "한국", en: "Korea", zh: "韩国", ja: "韓国", it: "Corea", fr: "Corée", es: "Corea" },
  "대한민국 / 미국": { ko: "대한민국 / 미국", en: "Korea / USA", zh: "韩国 / 美国", ja: "韓国 / アメリカ", it: "Corea / USA", fr: "Corée / États-Unis", es: "Corea / EE. UU." },
};
function mapShort(map: Record<string, I18nText>, v: string | null, locale: Locale): string | null {
  if (!v) return v;
  const m = map[v.trim()];
  return m ? pick(locale, m) : v;
}

/** 로케일에 맞춰 선수 표시 값을 선택. ko→원본, 그 외→i18n[locale] → *_en → 한국어 폴백. */
export function localizePlayer(p: Player, loc: boolean | Locale): Player {
  const locale = toLocale(loc);
  if (locale === "ko") return p;
  const tr = p.i18n?.[locale];
  const f = (field: string, en: string | null): string | null =>
    (tr?.[field] ?? null) || en || ((p as unknown as Record<string, string | null>)[field] ?? null);
  return {
    ...p,
    name: f("name", p.name_en) || p.name,
    bio: f("bio", p.bio_en),
    result: f("result", p.result_en),
    description: f("description", p.description_en),
    coach_note: f("coach_note", p.coach_note_en),
    birthplace: f("birthplace", p.birthplace_en),
    plays: mapShort(PLAYS, p.plays, locale),
    backhand: mapShort(BACKHAND, p.backhand, locale),
    nationality: mapShort(NATIONALITY, p.nationality, locale),
  };
}

export const TRACK_LABEL: Record<PlayerTrack, I18nText> = {
  professional: { ko: "프로", en: "Pro", zh: "职业", ja: "プロ", it: "Pro", fr: "Pro", es: "Pro" },
  college: { ko: "대학", en: "College", zh: "大学", ja: "大学", it: "Università", fr: "Université", es: "Universidad" },
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
