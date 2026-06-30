import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { ProgressForm } from "@/components/admin/ProgressForm";
import { setMemberApproved } from "@/app/admin/actions";

export const metadata = { title: "회원 상세 | GCM Admin" };

const roleLabel: Record<string, string> = { student: "선수", parent: "학부모", amateur: "아마추어" };
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
    .select("id, name, phone, role, approved, gender, birth_date")
    .eq("id", id)
    .maybeSingle();

  if (!member) notFound();

  const genderLabel = member.gender === "male" ? "남" : member.gender === "female" ? "여" : "-";

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
        <p className="mt-1 text-sm text-muted">
          {member.phone || "전화 미입력"} · 성별 {genderLabel} · 생년월일 {member.birth_date || "-"}
        </p>
      </div>

      {/* 선수 승인: 승인된 회원만 매치 셀프 피드백 작성 가능 */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-card p-5">
        <div>
          <p className="font-semibold">
            매치 셀프 피드백 권한{" "}
            <span
              className={`ml-1 rounded-md px-2 py-0.5 text-xs ${
                member.approved ? "bg-lime/15 text-lime" : "bg-court/15 text-court-bright"
              }`}
            >
              {member.approved ? "승인됨" : "미승인"}
            </span>
          </p>
          <p className="mt-1 text-sm text-muted">
            승인하면 이 선수가 로그인 후 매치 셀프 피드백을 작성할 수 있습니다.
          </p>
        </div>
        <form action={setMemberApproved}>
          <input type="hidden" name="id" value={member.id} />
          <input type="hidden" name="approved" value={member.approved ? "false" : "true"} />
          <button
            type="submit"
            className={`rounded-full px-5 py-2.5 text-sm font-semibold text-white ${
              member.approved ? "bg-muted hover:brightness-110" : "bg-court hover:bg-court-deep"
            }`}
          >
            {member.approved ? "승인 해제" : "선수 승인"}
          </button>
        </form>
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
