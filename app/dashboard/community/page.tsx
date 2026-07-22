import { createClient } from "@/lib/supabase/server";
import { MatchAnalysisForm } from "@/components/dashboard/MatchAnalysisForm";

export const metadata = { title: "커뮤니티 | GCM 아카데미" };

export default async function DashboardCommunityPage() {
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

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-bold">커뮤니티</h1>
        <p className="mt-1 text-sm text-muted">
          GCM 선수들의 기록과 소통 공간입니다.
        </p>
      </div>

      {/* 매치 피드백 창 — 선수는 후기 작성만, 확인은 코치님만 */}
      <section className="rounded-2xl border border-line bg-card/40">
        <header className="border-b border-line px-5 py-4 sm:px-6">
          <h2 className="font-display text-lg font-bold">매치 피드백</h2>
          <p className="mt-0.5 text-sm text-muted">
            시합 후 스스로 돌아본 후기를 작성해 주세요. 제출한 후기는 코치님만 확인합니다.
          </p>
        </header>

        <div className="p-5 sm:p-6">
          {canWrite ? (
            <MatchAnalysisForm />
          ) : (
            <div className="rounded-2xl border border-court/30 bg-court/5 p-6 text-sm">
              <p className="font-semibold text-court-bright">작성 권한이 없습니다</p>
              <p className="mt-1 text-muted">
                매치 후기는 승인된 GCM 팀 선수만 작성할 수 있습니다. 팀 소속·승인 여부는 코치에게 문의해 주세요.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
