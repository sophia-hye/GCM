import { createClient } from "@/lib/supabase/server";
import { updateBookingStatus } from "@/app/admin/actions";

export const metadata = { title: "예약 관리 | GCM Admin" };

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

type BookingRow = {
  id: string;
  type: string;
  scheduled_at: string | null;
  status: string;
  memo: string | null;
  profiles: { name: string | null; phone: string | null } | null;
};

export default async function AdminBookingsPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("gcm_bookings")
    .select("id, type, scheduled_at, status, memo, gcm_profiles(name, phone)")
    .order("created_at", { ascending: false });

  const bookings = (data ?? []) as unknown as BookingRow[];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">예약 관리</h1>
        <p className="mt-1 text-sm text-muted">회원 예약 요청을 확인하고 상태를 변경합니다.</p>
      </div>

      {bookings.length > 0 ? (
        <div className="space-y-4">
          {bookings.map((b) => (
            <div key={b.id} className="rounded-2xl border border-line bg-card p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-semibold">
                    {typeLabel[b.type] ?? b.type}
                    <span className="ml-2 text-sm text-muted">
                      {b.profiles?.name ?? "-"} · {b.profiles?.phone ?? "-"}
                    </span>
                  </p>
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

              <form action={updateBookingStatus} className="mt-4 flex items-center gap-2">
                <input type="hidden" name="id" value={b.id} />
                <select
                  name="status"
                  defaultValue={b.status}
                  className="rounded-lg border border-line bg-base px-3 py-2 text-sm outline-none focus:border-court-bright"
                >
                  <option value="requested">요청됨</option>
                  <option value="confirmed">확정</option>
                  <option value="done">완료</option>
                  <option value="cancelled">취소</option>
                </select>
                <button
                  type="submit"
                  className="rounded-lg border border-line px-4 py-2 text-sm font-semibold hover:border-court-bright"
                >
                  변경
                </button>
              </form>
            </div>
          ))}
        </div>
      ) : (
        <p className="rounded-2xl border border-line bg-card px-5 py-10 text-center text-sm text-muted">
          예약 요청이 없습니다.
        </p>
      )}
    </div>
  );
}
