export type SeouliteEvent = {
  id: string;
  slug: string;
  title: string;
  location: string | null;
  event_date: string | null; // 'YYYY-MM-DD'
  body: string | null;
  images: string[];
  sort_order: number;
  published: boolean;
};

/** 'YYYY-MM-DD' → 'YYYY.MM.DD' (파싱 없이 문자열 처리) */
export function formatEventDate(date: string | null): string {
  if (!date) return "";
  const [y, m, d] = date.split("-");
  if (!y || !m || !d) return date;
  return `${y}.${m}.${d}`;
}

/** 제목에서 slug 후보 생성(한글은 랜덤 접미사로 유일성 확보) */
export function slugifyEvent(title: string, rand: string): string {
  const base = title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\s-]/g, "")
    .replace(/\s+/g, "-");
  const ascii = base.replace(/[^a-z0-9-]/g, "");
  return `${ascii || "event"}-${rand.slice(0, 6)}`;
}
