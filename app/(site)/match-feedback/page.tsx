import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { Container } from "@/components/ui";
import { MatchAnalysisForm, type FeedbackCategory } from "@/components/dashboard/MatchAnalysisForm";

export const metadata = { title: "매치피드백 | GCM 테니스 아카데미" };

type Analysis = {
  id: string;
  category: string;
  match_date: string;
  opponent: string | null;
  final_result: string | null;
  better_than_last: string | null;
  improved_than_last: string | null;
  worse_than_last: string | null;
  needed: string | null;
  needed_practice: string | null;
  coach_feedback: string | null;
};

const FIELDS: { key: keyof Analysis; label: string }[] = [
  { key: "better_than_last", label: "잘 됐던 부분" },
  { key: "improved_than_last", label: "좋아진 부분" },
  { key: "worse_than_last", label: "안 됐던 부분" },
  { key: "needed", label: "필요한 부분" },
  { key: "needed_practice", label: "필요한 부분과 안 됐던 부분에 따른 필요한 연습" },
];

const TABS: { key: FeedbackCategory; label: string }[] = [
  { key: "tournament", label: "🏆 토너먼트" },
  { key: "training", label: "🎾 정규 훈련" },
];

export default async function MatchFeedbackPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const category: FeedbackCategory = type === "training" ? "training" : "tournament";
  const contextLabel = category === "tournament" ? "대회" : "훈련 내용/주제";
  const typeLabel = category === "tournament" ? "토너먼트" : "정규 훈련";

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login?next=/match-feedback");

  const { data: profile } = await supabase
    .from("gcm_profiles")
    .select("approved, role")
    .eq("id", user.id)
    .maybeSingle();
  const canWrite = Boolean(profile?.approved || profile?.role === "admin");

  // 항상 '본인 기록만' 보여준다(관리자는 RLS상 전체 조회 가능하므로 명시적으로 본인 필터).
  const { data } = await supabase
    .from("gcm_match_analyses")
    .select("*")
    .eq("user_id", user.id)
    .eq("category", category)
    .order("match_date", { ascending: false });
  const analyses = (data ?? []) as Analysis[];

  return (
    <div className="pt-16">
      <Container className="py-12">
        <div className="mx-auto max-w-3xl space-y-8">
          <div>
            <h1 className="font-display text-3xl font-bold">매치피드백</h1>
            <p className="mt-1 text-sm text-muted">
              시합·훈련 후 스스로 돌아본 내용을 기록하면 코치가 확인하고 피드백을 드립니다.
            </p>
          </div>

          {/* 유형 탭 */}
          <div className="flex gap-1 border-b border-line">
            {TABS.map((t) => {
              const active = t.key === category;
              return (
                <Link
                  key={t.key}
                  href={`/match-feedback?type=${t.key}`}
                  className={`-mb-px rounded-t-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                    active ? "border-b-2 border-court text-court" : "text-muted hover:text-ink"
                  }`}
                >
                  {t.label}
                </Link>
              );
            })}
          </div>

          {canWrite ? (
            <MatchAnalysisForm category={category} />
          ) : (
            <div className="rounded-2xl border border-court/30 bg-court/5 p-6 text-sm">
              <p className="font-semibold text-court-bright">작성 권한이 없습니다</p>
              <p className="mt-1 text-muted">
                매치피드백은 승인된 GCM 팀 선수만 작성할 수 있습니다. 팀 소속·승인 여부는 코치에게 문의해 주세요.
              </p>
            </div>
          )}

          <div className="space-y-4">
            <h2 className="font-display text-lg font-bold">내 {typeLabel} 기록</h2>
            {analyses.length > 0 ? (
              analyses.map((a) => (
                <div key={a.id} className="rounded-2xl border border-line bg-card/40 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-semibold">
                      {a.match_date}
                      {a.opponent ? (
                        <span className="ml-2 text-sm text-muted">
                          {contextLabel} · {a.opponent}
                        </span>
                      ) : null}
                    </p>
                    {a.final_result ? (
                      <span className="rounded-md bg-lime/15 px-2 py-1 text-xs font-semibold text-lime">
                        최종성적 · {a.final_result}
                      </span>
                    ) : null}
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
                아직 작성한 {typeLabel} 기록이 없습니다.
              </p>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
