import { createClient } from "@/lib/supabase/server";
import { setVoiceStatus } from "@/app/admin/actions";

export const metadata = { title: "이야기 게시판 | GCM Admin" };

type Row = {
  id: string;
  relation: string;
  author_name: string;
  title: string | null;
  body: string;
  status: string;
  created_at: string;
  profiles: { name: string | null } | null;
};

const relationLabel: Record<string, string> = { player: "선수", parent: "학부모" };
const statusLabel: Record<string, string> = { pending: "대기", published: "공개", rejected: "반려" };
const statusChip: Record<string, string> = {
  pending: "bg-court/15 text-court-bright",
  published: "bg-lime/15 text-lime",
  rejected: "bg-card text-muted",
};

export default async function AdminVoicesPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("gcm_voices")
    .select("*, profiles:gcm_profiles(name)")
    .order("created_at", { ascending: false });
  const rows = (data ?? []) as unknown as Row[];

  const StatusButton = ({ id, to, label }: { id: string; to: string; label: string }) => (
    <form action={setVoiceStatus}>
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="status" value={to} />
      <button
        type="submit"
        className="rounded-lg border border-line px-3 py-1.5 text-xs font-semibold hover:border-court-bright"
      >
        {label}
      </button>
    </form>
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">이야기 게시판</h1>
        <p className="mt-1 text-sm text-muted">회원이 남긴 이야기를 검토하고 공개/반려합니다.</p>
      </div>

      {rows.length > 0 ? (
        <div className="space-y-4">
          {rows.map((r) => (
            <div key={r.id} className="rounded-2xl border border-line bg-card p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-semibold">
                  {r.title || "(제목 없음)"}
                  <span className="ml-2 text-sm text-muted">
                    {relationLabel[r.relation] ?? r.relation} · {r.author_name}
                    {r.profiles?.name ? ` (${r.profiles.name})` : ""}
                  </span>
                </p>
                <span className={`shrink-0 rounded-md px-2 py-1 text-xs ${statusChip[r.status] ?? ""}`}>
                  {statusLabel[r.status] ?? r.status}
                </span>
              </div>

              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-ink/90">{r.body}</p>

              <div className="mt-4 flex flex-wrap gap-2 border-t border-line pt-4">
                {r.status !== "published" ? <StatusButton id={r.id} to="published" label="공개 승인" /> : null}
                {r.status !== "rejected" ? <StatusButton id={r.id} to="rejected" label="반려" /> : null}
                {r.status !== "pending" ? <StatusButton id={r.id} to="pending" label="대기로" /> : null}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="rounded-2xl border border-line bg-card px-5 py-10 text-center text-sm text-muted">
          등록된 이야기가 없습니다.
        </p>
      )}
    </div>
  );
}
