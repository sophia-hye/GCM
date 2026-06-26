import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { ProgressForm } from "@/components/admin/ProgressForm";

export const metadata = { title: "회원 상세 | GCM Admin" };

const roleLabel: Record<string, string> = { student: "선수", parent: "학부모" };
const moodEmoji: Record<number, string> = { 1: "😣", 2: "😕", 3: "😐", 4: "🙂", 5: "😄" };

export default async function MemberDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: member } = await supabase
    .from("gcm_profiles")
    .select("id, name, phone, role")
    .eq("id", id)
    .maybeSingle();

  if (!member) notFound();

  const [{ data: progress }, { data: checkins }] = await Promise.all([
    supabase
      .from("gcm_progress")
      .select("stage, track, current_utr, target_utr, note")
      .eq("user_id", id)
      .maybeSingle(),
    supabase
      .from("gcm_checkins")
      .select("id, mood_score, note, created_at")
      .eq("user_id", id)
      .order("created_at", { ascending: false })
      .limit(10),
  ]);

  return (
    <div className="space-y-8">
      <div>
        <Link href="/admin/members" className="text-sm text-muted hover:text-ink">
          ← 회원 목록
        </Link>
        <h1 className="mt-2 font-display text-2xl font-bold">
          {member.name || "이름 미상"}
          <span className="ml-2 text-sm font-normal text-court-bright">
            {roleLabel[member.role] ?? member.role}
          </span>
        </h1>
        <p className="mt-1 text-sm text-muted">{member.phone}</p>
      </div>

      <ProgressForm userId={member.id} initial={progress ?? {}} />

      <div className="space-y-3">
        <h2 className="font-display text-lg font-bold">멘탈 체크인 기록</h2>
        {checkins && checkins.length > 0 ? (
          checkins.map((c) => (
            <div
              key={c.id}
              className="flex items-start gap-4 rounded-xl border border-line bg-card px-5 py-4"
            >
              <span className="text-2xl">{moodEmoji[c.mood_score] ?? "•"}</span>
              <div>
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
            체크인 기록이 없습니다.
          </p>
        )}
      </div>
    </div>
  );
}
