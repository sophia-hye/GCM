import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { saveCoachFeedback } from "@/app/admin/actions";

export const metadata = { title: "매치 셀프 피드백 | GCM Admin" };

const PAGE_SIZE = 20;

type Row = {
  id: string;
  match_date: string;
  opponent: string | null;
  better_than_last: string | null;
  improved_than_last: string | null;
  worse_than_last: string | null;
  needed: string | null;
  needed_practice: string | null;
  coach_feedback: string | null;
  profiles: { name: string | null } | null;
};

const FIELDS: { key: keyof Row; label: string }[] = [
  { key: "better_than_last", label: "잘됐던 부분" },
  { key: "improved_than_last", label: "좋아진 부분" },
  { key: "worse_than_last", label: "안됐던 부분" },
  { key: "needed", label: "필요한 부분" },
  { key: "needed_practice", label: "필요한 연습" },
];

export default async function AdminAnalysesPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; member?: string; page?: string }>;
}) {
  const sp = await searchParams;
  const status = sp.status === "pending" || sp.status === "done" ? sp.status : "";
  const member = sp.member || "";
  const page = Math.max(1, Number(sp.page) || 1);
  const from = (page - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  const supabase = await createClient();

  // 선수 드롭다운
  const { data: members } = await supabase
    .from("gcm_profiles")
    .select("id, name")
    .neq("role", "admin")
    .order("name");

  let query = supabase
    .from("gcm_match_analyses")
    .select("*, profiles:gcm_profiles(name)", { count: "exact" });
  if (status === "pending") query = query.is("coach_feedback", null);
  else if (status === "done") query = query.not("coach_feedback", "is", null);
  if (member) query = query.eq("user_id", member);
  query = query.order("match_date", { ascending: false }).range(from, to);

  const { data, count } = await query;
  const rows = (data ?? []) as unknown as Row[];
  const total = count ?? 0;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  const qs = (p: number) => {
    const u = new URLSearchParams();
    if (status) u.set("status", status);
    if (member) u.set("member", member);
    if (p > 1) u.set("page", String(p));
    const s = u.toString();
    return s ? `/admin/analyses?${s}` : "/admin/analyses";
  };

  const FIELD = "rounded-lg border border-line bg-base px-3 py-2 text-sm outline-none focus:border-court-bright";

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">매치 셀프 피드백</h1>
        <p className="mt-1 text-sm text-muted">선수가 제출한 매치 셀프 피드백을 확인하고 코치 피드백을 남깁니다.</p>
      </div>

      {/* 필터 */}
      <form method="get" className="flex flex-wrap items-end gap-2">
        <label className="flex flex-col gap-1 text-xs text-muted">
          상태
          <select name="status" defaultValue={status} className={FIELD}>
            <option value="">전체</option>
            <option value="pending">미답변</option>
            <option value="done">답변완료</option>
          </select>
        </label>
        <label className="flex flex-col gap-1 text-xs text-muted">
          선수
          <select name="member" defaultValue={member} className={FIELD}>
            <option value="">전체 선수</option>
            {(members ?? []).map((m) => (
              <option key={m.id} value={m.id}>
                {m.name || "(무명)"}
              </option>
            ))}
          </select>
        </label>
        <button type="submit" className="rounded-lg border border-line px-4 py-2 text-sm font-semibold hover:border-court-bright">
          적용
        </button>
        {(status || member) ? (
          <Link href="/admin/analyses" className="px-2 py-2 text-sm text-muted hover:text-ink">
            초기화
          </Link>
        ) : null}
        <span className="ml-auto self-center text-xs text-muted">총 {total}건</span>
      </form>

      {rows.length > 0 ? (
        <div className="space-y-4">
          {rows.map((r) => (
            <div key={r.id} className="rounded-2xl border border-line bg-card p-5">
              <div className="flex items-center justify-between gap-2">
                <p className="font-semibold">
                  {r.profiles?.name ?? "-"}
                  <span className="ml-2 text-sm text-muted">
                    {r.match_date}
                    {r.opponent ? ` · ${r.opponent}` : ""}
                  </span>
                </p>
                <span
                  className={`shrink-0 rounded-md px-2 py-1 text-xs ${
                    r.coach_feedback ? "bg-lime/15 text-lime" : "bg-court/15 text-court-bright"
                  }`}
                >
                  {r.coach_feedback ? "답변완료" : "미답변"}
                </span>
              </div>

              <dl className="mt-3 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
                {FIELDS.map((f) =>
                  r[f.key] ? (
                    <div key={f.key}>
                      <dt className="text-xs font-semibold text-court-bright">{f.label}</dt>
                      <dd className="whitespace-pre-line text-ink/90">{r[f.key] as string}</dd>
                    </div>
                  ) : null,
                )}
              </dl>

              <form action={saveCoachFeedback} className="mt-4 border-t border-line pt-4">
                <input type="hidden" name="id" value={r.id} />
                <label className="text-xs font-semibold text-court-bright">코치 피드백</label>
                <textarea
                  name="coach_feedback"
                  rows={2}
                  defaultValue={r.coach_feedback ?? ""}
                  placeholder="선수에게 전달할 피드백을 입력하세요"
                  className="mt-1 w-full rounded-lg border border-line bg-base px-3 py-2 text-sm outline-none focus:border-court-bright"
                />
                <button
                  type="submit"
                  className="mt-2 rounded-lg border border-line px-4 py-2 text-sm font-semibold hover:border-court-bright"
                >
                  피드백 저장
                </button>
              </form>
            </div>
          ))}
        </div>
      ) : (
        <p className="rounded-2xl border border-line bg-card px-5 py-10 text-center text-sm text-muted">
          조건에 맞는 매치 셀프 피드백이 없습니다.
        </p>
      )}

      {/* 페이지네이션 */}
      {totalPages > 1 ? (
        <div className="flex items-center justify-center gap-2 text-sm">
          {page > 1 ? (
            <Link href={qs(page - 1)} className="rounded-lg border border-line px-3 py-1 hover:border-court-bright">
              ← 이전
            </Link>
          ) : (
            <span className="rounded-lg border border-line/50 px-3 py-1 text-muted/50">← 이전</span>
          )}
          <span className="px-2 text-muted">
            {page} / {totalPages}
          </span>
          {page < totalPages ? (
            <Link href={qs(page + 1)} className="rounded-lg border border-line px-3 py-1 hover:border-court-bright">
              다음 →
            </Link>
          ) : (
            <span className="rounded-lg border border-line/50 px-3 py-1 text-muted/50">다음 →</span>
          )}
        </div>
      ) : null}
    </div>
  );
}
