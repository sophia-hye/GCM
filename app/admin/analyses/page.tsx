import { createClient } from "@/lib/supabase/server";
import { saveCoachFeedback } from "@/app/admin/actions";

export const metadata = { title: "매치 셀프 피드백 | GCM Admin" };

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

export default async function AdminAnalysesPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("gcm_match_analyses")
    .select("*, profiles:gcm_profiles(name)")
    .order("match_date", { ascending: false });
  const rows = (data ?? []) as unknown as Row[];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">매치 셀프 피드백</h1>
        <p className="mt-1 text-sm text-muted">선수가 제출한 매치 셀프 피드백을 확인하고 코치 피드백을 남깁니다.</p>
      </div>

      {rows.length > 0 ? (
        <div className="space-y-4">
          {rows.map((r) => (
            <div key={r.id} className="rounded-2xl border border-line bg-card p-5">
              <p className="font-semibold">
                {r.profiles?.name ?? "-"}
                <span className="ml-2 text-sm text-muted">
                  {r.match_date}
                  {r.opponent ? ` · ${r.opponent}` : ""}
                </span>
              </p>

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
          제출된 경기 분석이 없습니다.
        </p>
      )}
    </div>
  );
}
