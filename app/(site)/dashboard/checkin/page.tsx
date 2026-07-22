import { createClient } from "@/lib/supabase/server";
import { CheckinForm } from "@/components/dashboard/CheckinForm";

export const metadata = { title: "멘탈 체크인 | GCM" };

const moodEmoji: Record<number, string> = {
  1: "😣",
  2: "😕",
  3: "😐",
  4: "🙂",
  5: "😄",
};

export default async function CheckinPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: checkins } = await supabase
    .from("gcm_checkins")
    .select("id, mood_score, note, created_at")
    .eq("user_id", user!.id)
    .order("created_at", { ascending: false })
    .limit(14);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-bold">멘탈 케어 체크인</h1>
        <p className="mt-1 text-sm text-muted">
          성적표 너머의 멘탈까지. 꾸준한 기록이 회복과 성장의 출발점입니다.
        </p>
      </div>

      <CheckinForm />

      <div className="space-y-3">
        <h2 className="font-display text-lg font-bold">최근 기록</h2>
        {checkins && checkins.length > 0 ? (
          checkins.map((c) => (
            <div
              key={c.id}
              className="flex items-start gap-4 rounded-xl border border-line bg-card px-5 py-4"
            >
              <span className="text-2xl">{moodEmoji[c.mood_score] ?? "•"}</span>
              <div className="flex-1">
                <p className="text-xs text-muted">
                  {new Date(c.created_at).toLocaleString("ko-KR")}
                </p>
                {c.note ? (
                  <p className="mt-1 whitespace-pre-wrap text-sm text-ink/90">{c.note}</p>
                ) : null}
              </div>
            </div>
          ))
        ) : (
          <p className="rounded-xl border border-line bg-card px-5 py-8 text-center text-sm text-muted">
            아직 체크인 기록이 없습니다.
          </p>
        )}
      </div>
    </div>
  );
}
