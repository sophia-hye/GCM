import Link from "next/link";

type CalBooking = {
  id: string;
  type: string;
  status: string;
  scheduled_at: string | null;
  name: string | null;
};

const TYPE_LABEL: Record<string, string> = {
  consulting: "상담",
  lesson: "레슨",
  tournament: "대회",
  showcase: "쇼케이스",
};

const STATUS_CHIP: Record<string, string> = {
  requested: "bg-court/15 text-court-bright",
  confirmed: "bg-court text-white",
  done: "border border-line bg-card text-muted",
  cancelled: "bg-card text-muted line-through",
};

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];

/** UTC ISO → KST 날짜/시각 파츠 */
function kstParts(iso: string) {
  const d = new Date(new Date(iso).getTime() + 9 * 3600 * 1000);
  return {
    y: d.getUTCFullYear(),
    m: d.getUTCMonth(),
    day: d.getUTCDate(),
    hh: String(d.getUTCHours()).padStart(2, "0"),
    mm: String(d.getUTCMinutes()).padStart(2, "0"),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function BookingsCalendar({
  bookings,
  month,
}: {
  bookings: CalBooking[];
  month?: string;
}) {
  // 기준 연/월 (KST). month = "YYYY-MM"
  const nowKst = new Date(Date.now() + 9 * 3600 * 1000);
  let year = nowKst.getUTCFullYear();
  let mIdx = nowKst.getUTCMonth();
  if (month && /^\d{4}-\d{2}$/.test(month)) {
    const [y, m] = month.split("-").map(Number);
    year = y;
    mIdx = m - 1;
  }

  const firstWeekday = new Date(Date.UTC(year, mIdx, 1)).getUTCDay();
  const daysInMonth = new Date(Date.UTC(year, mIdx + 1, 0)).getUTCDate();

  // 날짜별 예약 그룹 (이번 달 + 시간 있는 것)
  const byDay = new Map<number, CalBooking[]>();
  for (const b of bookings) {
    if (!b.scheduled_at) continue;
    const p = kstParts(b.scheduled_at);
    if (p.y === year && p.m === mIdx) {
      const arr = byDay.get(p.day) ?? [];
      arr.push(b);
      byDay.set(p.day, arr);
    }
  }
  for (const arr of byDay.values()) {
    arr.sort((a, b) => (a.scheduled_at! < b.scheduled_at! ? -1 : 1));
  }

  // 셀 배열 (앞쪽 빈칸 + 1..말일)
  const cells: (number | null)[] = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  const prev = mIdx === 0 ? `${year - 1}-12` : `${year}-${pad(mIdx)}`;
  const next = mIdx === 11 ? `${year + 1}-01` : `${year}-${pad(mIdx + 2)}`;
  const todayKey =
    nowKst.getUTCFullYear() === year && nowKst.getUTCMonth() === mIdx
      ? nowKst.getUTCDate()
      : -1;

  return (
    <div className="rounded-2xl border border-line bg-card p-5">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg font-bold">
          {year}년 {mIdx + 1}월
        </h2>
        <div className="flex items-center gap-2 text-sm">
          <Link
            href={`/admin/bookings?month=${prev}`}
            className="rounded-lg border border-line px-3 py-1 hover:border-court-bright"
          >
            ← 이전
          </Link>
          <Link
            href="/admin/bookings"
            className="rounded-lg border border-line px-3 py-1 hover:border-court-bright"
          >
            오늘
          </Link>
          <Link
            href={`/admin/bookings?month=${next}`}
            className="rounded-lg border border-line px-3 py-1 hover:border-court-bright"
          >
            다음 →
          </Link>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-7 gap-px overflow-hidden rounded-lg border border-line bg-line text-center">
        {WEEKDAYS.map((w, i) => (
          <div
            key={w}
            className={`bg-base py-2 text-xs font-semibold ${
              i === 0 ? "text-danger" : i === 6 ? "text-court-bright" : "text-muted"
            }`}
          >
            {w}
          </div>
        ))}

        {cells.map((d, i) => {
          const items = d ? byDay.get(d) ?? [] : [];
          const isToday = d === todayKey;
          return (
            <div
              key={i}
              className={`min-h-[96px] bg-base p-1.5 text-left align-top ${
                d ? "" : "opacity-40"
              }`}
            >
              {d ? (
                <>
                  <span
                    className={`inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-xs ${
                      isToday ? "bg-court font-bold text-white" : "text-muted"
                    }`}
                  >
                    {d}
                  </span>
                  <div className="mt-1 space-y-1">
                    {items.map((b) => {
                      const p = kstParts(b.scheduled_at!);
                      return (
                        <div
                          key={b.id}
                          className={`truncate rounded px-1.5 py-0.5 text-[11px] leading-tight ${
                            STATUS_CHIP[b.status] ?? "bg-card text-muted"
                          }`}
                          title={`${p.hh}:${p.mm} ${b.name ?? ""} · ${TYPE_LABEL[b.type] ?? b.type}`}
                        >
                          {p.hh}:{p.mm} {b.name ?? "-"}
                        </div>
                      );
                    })}
                  </div>
                </>
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="mt-3 flex flex-wrap gap-3 text-[11px] text-muted">
        <span className="inline-flex items-center gap-1">
          <span className="h-2.5 w-2.5 rounded-full bg-court/30" /> 요청됨
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="h-2.5 w-2.5 rounded-full bg-court" /> 확정
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="h-2.5 w-2.5 rounded-full border border-line bg-card" /> 완료
        </span>
        <span>· 취소는 취소선 표시</span>
      </div>
    </div>
  );
}
