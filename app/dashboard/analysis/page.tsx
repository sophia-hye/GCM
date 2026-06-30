import { createClient } from "@/lib/supabase/server";
import { MatchAnalysisForm } from "@/components/dashboard/MatchAnalysisForm";

export const metadata = { title: "매치 셀프 피드백 | GCM" };

type Analysis = {
  id: string;
  match_date: string;
  opponent: string | null;
  better_than_last: string | null;
  improved_than_last: string | null;
  worse_than_last: string | null;
  needed: string | null;
  needed_practice: string | null;
  coach_feedback: string | null;
};

const FIELDS: { key: keyof Analysis; label: string }[] = [
  { key: "better_than_last", label: "전 시합보다 잘됐던 부분" },
  { key: "improved_than_last", label: "전 시합보다 좋아진 부분" },
  { key: "worse_than_last", label: "전 시합보다 안됐던 부분" },
  { key: "needed", label: "필요한 부분" },
  { key: "needed_practice", label: "필요한 연습" },
];

export default async function DashboardAnalysisPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: profile } = await supabase
    .from("gcm_profiles")
    .select("approved, role")
    .eq("id", user?.id ?? "")
    .maybeSingle();
  const canWrite = Boolean(profile?.approved || profile?.role === "admin");

  const { data } = await supabase
    .from("gcm_match_analyses")
    .select("*")
    .order("match_date", { ascending: false });
  const analyses = (data ?? []) as Analysis[];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-bold">매치 셀프 피드백</h1>
        <p className="mt-1 text-sm text-muted">
          경기 후 스스로 돌아본 내용을 기록하면 코치가 확인하고 피드백을 드립니다.
        </p>
      </div>

      {canWrite ? (
        <MatchAnalysisForm />
      ) : (
        <div className="rounded-2xl border border-court/30 bg-court/5 p-6 text-sm">
          <p className="font-semibold text-court-bright">승인 대기 중</p>
          <p className="mt-1 text-muted">
            매치 셀프 피드백은 GCM 팀 선수로 승인된 회원만 작성할 수 있습니다. 코치 승인 후 이용해 주세요.
          </p>
        </div>
      )}

      <div className="space-y-4">
        <h2 className="font-display text-lg font-bold">내 셀프 피드백 기록</h2>
        {analyses.length > 0 ? (
          analyses.map((a) => (
            <div key={a.id} className="rounded-2xl border border-line bg-card/40 p-5">
              <div className="flex items-center justify-between">
                <p className="font-semibold">
                  {a.match_date}
                  {a.opponent ? <span className="ml-2 text-sm text-muted">{a.opponent}</span> : null}
                </p>
              </div>
              <dl className="mt-3 space-y-2 text-sm">
                {FIELDS.map((f) =>
                  a[f.key] ? (
                    <div key={f.key}>
                      <dt className="text-xs font-semibold text-court-bright">{f.label}</dt>
                      <dd className="whitespace-pre-line text-ink/90">{a[f.key]}</dd>
                    </div>
                  ) : null,
                )}
              </dl>
              {a.coach_feedback ? (
                <div className="mt-4 rounded-lg border border-court/30 bg-court/5 p-3">
                  <p className="text-xs font-semibold text-court-bright">코치 피드백</p>
                  <p className="mt-1 whitespace-pre-line text-sm text-ink/90">{a.coach_feedback}</p>
                </div>
              ) : (
                <p className="mt-3 text-xs text-muted">코치 피드백 대기 중</p>
              )}
            </div>
          ))
        ) : (
          <p className="rounded-2xl border border-line bg-card/40 px-5 py-8 text-center text-sm text-muted">
            아직 작성한 분석이 없습니다.
          </p>
        )}
      </div>
    </div>
  );
}
