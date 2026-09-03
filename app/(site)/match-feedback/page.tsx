import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { getLocale } from "@/lib/i18n";
import { Container, Button } from "@/components/ui";
import { MatchAnalysisForm, type FeedbackCategory } from "@/components/dashboard/MatchAnalysisForm";

export async function generateMetadata(): Promise<import("next").Metadata> {
  const ko = (await getLocale()) === "ko";
  return { title: ko ? "매치피드백 | GCM 테니스 아카데미" : "Match Feedback | GCM Tennis Academy" };
}

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

function getFields(ko: boolean): { key: keyof Analysis; label: string }[] {
  return [
    { key: "better_than_last", label: ko ? "잘 됐던 부분" : "What went well" },
    { key: "improved_than_last", label: ko ? "좋아진 부분" : "What improved" },
    { key: "worse_than_last", label: ko ? "안 됐던 부분" : "What didn't work" },
    { key: "needed", label: ko ? "필요한 부분" : "What was needed" },
    {
      key: "needed_practice",
      label: ko
        ? "필요한 부분과 안 됐던 부분에 따른 필요한 연습"
        : "Practice needed based on gaps and weak points",
    },
  ];
}

function getTabs(ko: boolean): { key: FeedbackCategory; label: string }[] {
  return [
    { key: "tournament", label: ko ? "🏆 토너먼트" : "🏆 Tournament" },
    { key: "training", label: ko ? "🎾 정규 훈련" : "🎾 Regular training" },
  ];
}

export default async function MatchFeedbackPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const ko = (await getLocale()) === "ko";
  const FIELDS = getFields(ko);
  const TABS = getTabs(ko);
  const category: FeedbackCategory = type === "training" ? "training" : "tournament";
  const contextLabel =
    category === "tournament" ? (ko ? "대회" : "Tournament") : ko ? "훈련 내용/주제" : "Training focus/topic";
  const typeLabel =
    category === "tournament" ? (ko ? "토너먼트" : "Tournament") : ko ? "정규 훈련" : "Regular training";

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 비로그인: 리다이렉트 대신 미리보기 + 로그인 CTA 를 보여준다.
  if (!user) {
    const sample: Analysis = {
      id: "sample",
      category,
      match_date: "2026.03.15",
      opponent:
        category === "tournament"
          ? ko
            ? "OO배 주니어 16강"
            : "OO Cup Junior, Round of 16"
          : ko
            ? "서브 & 발리 집중 훈련"
            : "Serve & volley focus session",
      final_result: category === "tournament" ? (ko ? "8강 진출" : "Reached quarterfinals") : null,
      better_than_last: ko
        ? "첫 서브 성공률이 높아 초반부터 리드를 잡았습니다."
        : "A high first-serve percentage let me take the lead early.",
      improved_than_last: ko
        ? "백핸드 크로스 안정감이 지난번보다 좋아졌습니다."
        : "My backhand crosscourt was steadier than last time.",
      worse_than_last: ko
        ? "듀스 접전에서 집중력이 흔들렸습니다."
        : "My focus wavered in the tight deuce games.",
      needed: ko
        ? "접전 상황에서의 멘탈 루틴이 필요합니다."
        : "I need a mental routine for close situations.",
      needed_practice: ko
        ? "타이브레이크 시뮬레이션, 압박 상황 서브 연습."
        : "Tiebreak simulations and serving under pressure.",
      coach_feedback: ko
        ? "리드 관리가 좋아졌어요. 접전에서 루틴을 지키는 연습을 이어갑시다."
        : "Your lead management has improved. Let's keep practicing sticking to your routine in tight matches.",
    };

    return (
      <div className="pt-16">
        <Container className="py-12">
          <div className="mx-auto max-w-3xl space-y-8">
            <div>
              <h1 className="font-display text-3xl font-bold">{ko ? "매치피드백" : "Match Feedback"}</h1>
              <p className="mt-1 text-sm text-muted">
                {ko
                  ? "시합·훈련 후 스스로 돌아본 내용을 기록하면 코치가 확인하고 피드백을 드립니다."
                  : "Record your own reflections after a match or session, and your coach will review them and give feedback."}
              </p>
            </div>

            {/* 로그인 CTA */}
            <div className="rounded-2xl border border-court/30 bg-court/5 p-6 text-center">
              <p className="font-semibold text-court-bright">
                {ko ? "로그인이 필요한 메뉴입니다" : "This menu requires login"}
              </p>
              <p className="mt-1.5 break-keep text-sm leading-relaxed text-muted">
                {ko
                  ? "로그인하면 내 시합·훈련 기록을 작성하고 코치의 피드백을 받아볼 수 있습니다."
                  : "Log in to write your own match and training records and receive feedback from your coach."}
                <br className="hidden sm:block" />
                {ko ? "아래는 실제 화면 미리보기입니다." : "Below is a preview of the actual screen."}
              </p>
              <div className="mt-5">
                <Button href="/login?next=/match-feedback" variant="court">
                  {ko ? "로그인하기" : "Log in"}
                </Button>
              </div>
            </div>

            {/* 미리보기 (예시) */}
            <div className="space-y-4">
              <h2 className="font-display text-lg font-bold">
                {ko ? "미리보기" : "Preview"}{" "}
                <span className="text-xs font-normal text-muted">
                  {ko ? "— 예시 화면" : "— Sample screen"}
                </span>
              </h2>
              <div className="pointer-events-none select-none rounded-2xl border border-line bg-card/40 p-5 opacity-90">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-semibold">
                    {sample.match_date}
                    {sample.opponent ? (
                      <span className="ml-2 text-sm text-muted">
                        {contextLabel} · {sample.opponent}
                      </span>
                    ) : null}
                  </p>
                  {sample.final_result ? (
                    <span className="rounded-md bg-lime/15 px-2 py-1 text-xs font-semibold text-lime">
                      {ko ? "최종성적" : "Final result"} · {sample.final_result}
                    </span>
                  ) : null}
                </div>
                <dl className="mt-3 space-y-2 text-sm">
                  {FIELDS.map((f) =>
                    sample[f.key] ? (
                      <div key={f.key}>
                        <dt className="text-xs font-semibold text-court-bright">{f.label}</dt>
                        <dd className="whitespace-pre-line text-ink/90">{sample[f.key]}</dd>
                      </div>
                    ) : null,
                  )}
                </dl>
                <div className="mt-4 rounded-lg border border-court/30 bg-court/5 p-3">
                  <p className="text-xs font-semibold text-court-bright">{ko ? "코치 피드백" : "Coach feedback"}</p>
                  <p className="mt-1 whitespace-pre-line text-sm text-ink/90">{sample.coach_feedback}</p>
                </div>
              </div>
              <p className="text-center text-xs text-muted">
                {ko
                  ? "실제 기록과 코치 피드백은 로그인 후 확인할 수 있습니다."
                  : "You can view your actual records and coach feedback after logging in."}
              </p>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  const { data: profile } = await supabase
    .from("gcm_profiles")
    .select("approved, is_admin")
    .eq("id", user.id)
    .maybeSingle();
  const canWrite = Boolean(profile?.approved || profile?.is_admin);

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
            <h1 className="font-display text-3xl font-bold">{ko ? "매치피드백" : "Match Feedback"}</h1>
            <p className="mt-1 text-sm text-muted">
              {ko
                ? "시합·훈련 후 스스로 돌아본 내용을 기록하면 코치가 확인하고 피드백을 드립니다."
                : "Record your own reflections after a match or session, and your coach will review them and give feedback."}
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
              <p className="font-semibold text-court-bright">
                {ko ? "작성 권한이 없습니다" : "You don't have write access"}
              </p>
              <p className="mt-1 text-muted">
                {ko
                  ? "매치피드백은 승인된 GCM 팀 선수만 작성할 수 있습니다. 팀 소속·승인 여부는 코치에게 문의해 주세요."
                  : "Only approved GCM team players can write match feedback. Please ask your coach about team membership and approval."}
              </p>
            </div>
          )}

          <div className="space-y-4">
            <h2 className="font-display text-lg font-bold">
              {ko ? `내 ${typeLabel} 기록` : `My ${typeLabel} records`}
            </h2>
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
                        {ko ? "최종성적" : "Final result"} · {a.final_result}
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
                      <p className="text-xs font-semibold text-court-bright">
                        {ko ? "코치 피드백" : "Coach feedback"}
                      </p>
                      <p className="mt-1 whitespace-pre-line text-sm text-ink/90">{a.coach_feedback}</p>
                    </div>
                  ) : (
                    <p className="mt-3 text-xs text-muted">
                      {ko ? "코치 피드백 대기 중" : "Awaiting coach feedback"}
                    </p>
                  )}
                </div>
              ))
            ) : (
              <p className="rounded-2xl border border-line bg-card/40 px-5 py-8 text-center text-sm text-muted">
                {ko
                  ? `아직 작성한 ${typeLabel} 기록이 없습니다.`
                  : `You haven't written any ${typeLabel} records yet.`}
              </p>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
