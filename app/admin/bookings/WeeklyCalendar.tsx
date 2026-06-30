import Link from "next/link";
import { COACHES, COACH_COLOR, UNASSIGNED_COLOR, coachColor } from "./coaches";

type CalBooking = {
  id: string;
  type: string;
  status: string;
  scheduled_at: string | null;
  name: string | null;
  coach: string | null;
};

const TYPE_LABEL: Record<string, string> = {
  consulting: "상담",
  lesson: "레슨",
  tournament: "대회",
  showcase: "쇼케이스",
};
const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];
const START_HOUR = 9;
const END_HOUR = 21; // 21:00 행까지 표시
const DAY_MS = 86400000;

/** UTC ISO → KST 벽시계 Date(=UTC 필드가 KST 시각) */
function kst(iso: string | number | Date) {
  return new Date(new Date(iso).getTime() + 9 * 3600 * 1000);
}
function ymd(utcMs: number) {
  const d = new Date(utcMs);
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}-${String(d.getUTCDate()).padStart(2, "0")}`;
}

export function WeeklyCalendar({
  bookings,
  week,
}: {
  bookings: CalBooking[];
  week?: string;
}) {
  // 기준일 → 그 주 일요일 00:00 (KST 벽시계를 UTC 필드로 표현)
  let baseUtc: number;
  if (week && /^\d{4}-\d{2}-\d{2}$/.test(week)) {
    const [y, m, d] = week.split("-").map(Number);
    baseUtc = Date.UTC(y, m - 1, d);
  } else {
    const n = kst(Date.now());
    baseUtc = Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate());
  }
  const dow = new Date(baseUtc).getUTCDay();
  const weekStart = baseUtc - dow * DAY_MS;
  const todayUtc = (() => {
    const n = kst(Date.now());
    return Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate());
  })();

  // [dayIndex][hour] => bookings
  const grid = new Map<string, CalBooking[]>();
  let outside = 0;
  for (const b of bookings) {
    if (!b.scheduled_at) continue;
    const k = kst(b.scheduled_at);
    const dayUtc = Date.UTC(k.getUTCFullYear(), k.getUTCMonth(), k.getUTCDate());
    const di = Math.round((dayUtc - weekStart) / DAY_MS);
    if (di < 0 || di > 6) continue;
    let hour = k.getUTCHours();
    if (hour < START_HOUR || hour > END_HOUR) {
      outside++;
      hour = hour < START_HOUR ? START_HOUR : END_HOUR;
    }
    const key = `${di}-${hour}`;
    const arr = grid.get(key) ?? [];
    arr.push(b);
    grid.set(key, arr);
  }

  const hours = Array.from({ length: END_HOUR - START_HOUR + 1 }, (_, i) => START_HOUR + i);
  const prevWeek = ymd(weekStart - 7 * DAY_MS);
  const nextWeek = ymd(weekStart + 7 * DAY_MS);
  const rangeLabel = `${ymd(weekStart).slice(5)} ~ ${ymd(weekStart + 6 * DAY_MS).slice(5)}`;

  return (
    <div className="rounded-2xl border border-line bg-card p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-lg font-bold">주간 일정 · {rangeLabel}</h2>
        <div className="flex items-center gap-2 text-sm">
          <Link href={`/admin/bookings?week=${prevWeek}`} className="rounded-lg border border-line px-3 py-1 hover:border-court-bright">← 이전주</Link>
          <Link href="/admin/bookings" className="rounded-lg border border-line px-3 py-1 hover:border-court-bright">이번주</Link>
          <Link href={`/admin/bookings?week=${nextWeek}`} className="rounded-lg border border-line px-3 py-1 hover:border-court-bright">다음주 →</Link>
        </div>
      </div>

      {/* 코치 범례 */}
      <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted">
        {COACHES.map((c) => (
          <span key={c} className="inline-flex items-center gap-1">
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: COACH_COLOR[c] }} />
            {c}
          </span>
        ))}
        <span className="inline-flex items-center gap-1">
          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: UNASSIGNED_COLOR }} />
          미지정
        </span>
      </div>

      <div className="mt-4 overflow-x-auto">
        <div className="min-w-[680px]">
          {/* 헤더: 요일 */}
          <div className="grid grid-cols-[48px_repeat(7,1fr)] border-b border-line">
            <div />
            {WEEKDAYS.map((w, i) => {
              const dayUtc = weekStart + i * DAY_MS;
              const isToday = dayUtc === todayUtc;
              return (
                <div key={w} className="px-1 py-2 text-center text-xs">
                  <span className={i === 0 ? "text-danger" : i === 6 ? "text-court-bright" : "text-muted"}>{w}</span>
                  <div className={`text-sm ${isToday ? "font-bold text-court" : "text-ink"}`}>
                    {new Date(dayUtc).getUTCDate()}
                  </div>
                </div>
              );
            })}
          </div>

          {/* 시간 행 */}
          {hours.map((h) => (
            <div key={h} className="grid grid-cols-[48px_repeat(7,1fr)] border-b border-line/60">
              <div className="py-2 pr-1 text-right text-[11px] text-muted">{String(h).padStart(2, "0")}:00</div>
              {WEEKDAYS.map((_, di) => {
                const items = grid.get(`${di}-${h}`) ?? [];
                return (
                  <div key={di} className="min-h-[44px] border-l border-line/60 p-1">
                    {items.map((b) => {
                      const k = kst(b.scheduled_at!);
                      const cancelled = b.status === "cancelled";
                      return (
                        <div
                          key={b.id}
                          className={`mb-1 truncate rounded px-1.5 py-0.5 text-[11px] font-medium text-white ${cancelled ? "line-through opacity-50" : ""}`}
                          style={{ backgroundColor: coachColor(b.coach) }}
                          title={`${String(k.getUTCHours()).padStart(2, "0")}:${String(k.getUTCMinutes()).padStart(2, "0")} ${b.name ?? "-"} · ${TYPE_LABEL[b.type] ?? b.type} · ${b.coach ?? "미지정"} · ${b.status}`}
                        >
                          {String(k.getUTCMinutes()).padStart(2, "0") === "00"
                            ? `${String(k.getUTCHours()).padStart(2, "0")}시`
                            : `${String(k.getUTCHours()).padStart(2, "0")}:${String(k.getUTCMinutes()).padStart(2, "0")}`}{" "}
                          {b.name ?? "-"}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {outside > 0 ? (
        <p className="mt-2 text-[11px] text-muted">* 표시 범위(09–21시) 밖 예약 {outside}건은 경계 행에 표시됨</p>
      ) : null}
    </div>
  );
}
