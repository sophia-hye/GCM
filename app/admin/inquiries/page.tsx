import { createClient } from "@/lib/supabase/server";
import { updateInquiryStatus } from "@/app/admin/actions";

export const metadata = { title: "고객 관리 | GCM Admin" };

const statusLabel: Record<string, string> = {
  new: "신규",
  contacted: "연락함",
  closed: "종료",
};

/** 접수 일시를 한국시간(KST)으로 표기 (예: 2026.08.24 14:30) */
function formatKST(iso: string | null): string {
  if (!iso) return "";
  const parts = new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date(iso));
  const p = Object.fromEntries(parts.map((x) => [x.type, x.value]));
  return `${p.year}.${p.month}.${p.day} ${p.hour}:${p.minute}`;
}

export default async function InquiriesPage() {
  const supabase = await createClient();
  const { data: inquiries } = await supabase
    .from("gcm_inquiries")
    .select("id, name, phone, email, message, status, created_at")
    .order("created_at", { ascending: false });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">고객 관리</h1>
        <p className="mt-1 text-sm text-muted">상담 문의를 확인하고 상태를 관리합니다.</p>
      </div>

      {inquiries && inquiries.length > 0 ? (
        <div className="space-y-4">
          {inquiries.map((q) => (
            <div key={q.id} className="rounded-2xl border border-line bg-card p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-semibold">
                    {q.name}
                    <span className="ml-2 text-sm text-muted">{q.phone}</span>
                  </p>
                  {q.email ? (
                    <p className="text-xs text-muted">{q.email}</p>
                  ) : null}
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="rounded-md bg-court/15 px-2 py-1 text-xs text-court-bright">
                    {statusLabel[q.status] ?? q.status}
                  </span>
                  {q.created_at ? (
                    <span className="text-xs tabular-nums text-muted">{formatKST(q.created_at)}</span>
                  ) : null}
                </div>
              </div>

              <p className="mt-3 whitespace-pre-wrap text-sm text-ink/90">{q.message}</p>

              <form action={updateInquiryStatus} className="mt-4 flex items-center gap-2">
                <input type="hidden" name="id" value={q.id} />
                <select
                  name="status"
                  defaultValue={q.status}
                  className="rounded-lg border border-line bg-base px-3 py-2 text-sm outline-none focus:border-court-bright"
                >
                  <option value="new">신규</option>
                  <option value="contacted">연락함</option>
                  <option value="closed">종료</option>
                </select>
                <button
                  type="submit"
                  className="rounded-lg border border-line px-4 py-2 text-sm font-semibold hover:border-court-bright"
                >
                  상태 변경
                </button>
              </form>
            </div>
          ))}
        </div>
      ) : (
        <p className="rounded-2xl border border-line bg-card px-5 py-10 text-center text-sm text-muted">
          접수된 문의가 없습니다.
        </p>
      )}
    </div>
  );
}
