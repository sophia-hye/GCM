import { createClient } from "@/lib/supabase/server";
import { BookingForm } from "@/components/dashboard/BookingForm";

export const metadata = { title: "일정/예약 | GCM" };

const typeLabel: Record<string, string> = {
  consulting: "진로 상담",
  lesson: "레슨",
  tournament: "대회 동행",
  showcase: "쇼케이스",
};
const statusLabel: Record<string, string> = {
  requested: "요청됨",
  confirmed: "확정",
  done: "완료",
  cancelled: "취소",
};

export default async function SchedulePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: bookings } = await supabase
    .from("gcm_bookings")
    .select("id, type, scheduled_at, status, memo, created_at")
    .eq("user_id", user!.id)
    .order("created_at", { ascending: false });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-bold">일정/예약</h1>
        <p className="mt-1 text-sm text-muted">예약을 요청하고 진행 상태를 확인하세요.</p>
      </div>

      <BookingForm />

      <div className="space-y-3">
        <h2 className="font-display text-lg font-bold">내 예약</h2>
        {bookings && bookings.length > 0 ? (
          bookings.map((b) => (
            <div
              key={b.id}
              className="flex items-center justify-between rounded-xl border border-line bg-card px-5 py-4"
            >
              <div>
                <p className="font-semibold">{typeLabel[b.type] ?? b.type}</p>
                <p className="text-xs text-muted">
                  {b.scheduled_at
                    ? new Date(b.scheduled_at).toLocaleString("ko-KR")
                    : "일정 미정"}
                  {b.memo ? ` · ${b.memo}` : ""}
                </p>
              </div>
              <span className="rounded-md bg-court/15 px-2 py-1 text-xs text-court-bright">
                {statusLabel[b.status] ?? b.status}
              </span>
            </div>
          ))
        ) : (
          <p className="rounded-xl border border-line bg-card px-5 py-8 text-center text-sm text-muted">
            아직 예약이 없습니다.
          </p>
        )}
      </div>
    </div>
  );
}
