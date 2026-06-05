import { createClient } from "@/lib/supabase/server";

export const metadata = { title: "대시보드 | GCM 아카데미" };

const stageLabel: Record<string, string> = {
  foundation: "FOUNDATION",
  development: "DEVELOPMENT",
  junior_elite: "JUNIOR ELITE",
  professional: "PROFESSIONAL",
};
const moodEmoji: Record<number, string> = { 1: "😣", 2: "😕", 3: "😐", 4: "🙂", 5: "😄" };

export default async function DashboardHome() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const [{ data: profile }, { data: progress }, { data: lastCheckin }, { data: nextBooking }] =
    await Promise.all([
      supabase.from("profiles").select("name").eq("id", user!.id).maybeSingle(),
      supabase
        .from("progress")
        .select("stage, current_utr, target_utr")
        .eq("user_id", user!.id)
        .maybeSingle(),
      supabase
        .from("checkins")
        .select("mood_score, created_at")
        .eq("user_id", user!.id)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle(),
      supabase
        .from("bookings")
        .select("type, scheduled_at, status")
        .eq("user_id", user!.id)
        .in("status", ["requested", "confirmed"])
        .order("scheduled_at", { ascending: true })
        .limit(1)
        .maybeSingle(),
    ]);

  const typeLabel: Record<string, string> = {
    consulting: "진로 상담",
    lesson: "레슨",
    tournament: "대회 동행",
    showcase: "쇼케이스",
  };

  const cards = [
    {
      title: "발달 단계",
      value: stageLabel[progress?.stage ?? "foundation"] ?? "FOUNDATION",
      note: progress ? "진행 중" : "상담 후 설정",
    },
    {
      title: "현재 / 목표 UTR",
      value: `${progress?.current_utr ?? "-"} / ${progress?.target_utr ?? "-"}`,
      note: "성장 로드맵",
    },
    {
      title: "다음 일정",
      value: nextBooking ? (typeLabel[nextBooking.type] ?? nextBooking.type) : "없음",
      note: nextBooking?.scheduled_at
        ? new Date(nextBooking.scheduled_at).toLocaleDateString("ko-KR")
        : "예약 메뉴에서 신청",
    },
    {
      title: "최근 멘탈 체크인",
      value: lastCheckin ? (moodEmoji[lastCheckin.mood_score] ?? "-") : "미기록",
      note: lastCheckin?.created_at
        ? new Date(lastCheckin.created_at).toLocaleDateString("ko-KR")
        : "체크인 메뉴에서 기록",
    },
  ];

  return (
    <div>
      <h1 className="font-display text-2xl font-bold">
        안녕하세요, {profile?.name || "선수"}님
      </h1>
      <p className="mt-1 text-sm text-muted">
        오늘도 글로벌 무대를 향한 한 걸음. 현재 현황을 확인하세요.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div key={card.title} className="rounded-2xl border border-line bg-card p-5">
            <p className="text-xs text-muted">{card.title}</p>
            <p className="mt-2 font-display text-xl font-extrabold text-ink">{card.value}</p>
            <p className="mt-1 text-xs text-court-bright">{card.note}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-line bg-card/40 p-6">
        <h2 className="font-display text-lg font-bold">한 팀, 하나의 목표</h2>
        <p className="mt-2 text-sm text-muted">
          GCM과 COV가 함께 선수의 글로벌 전략을 설계하고 멘탈까지 관리합니다. 발달 단계와
          예약, 멘탈 체크인을 꾸준히 기록해 주세요.
        </p>
      </div>
    </div>
  );
}
