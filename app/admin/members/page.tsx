import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { MemberForm } from "@/components/admin/MemberForm";

export const metadata = { title: "회원 관리 | GCM Admin" };

const roleLabel: Record<string, string> = { student: "선수", parent: "학부모" };

export default async function MembersPage() {
  const supabase = await createClient();
  const { data: members } = await supabase
    .from("profiles")
    .select("id, name, phone, role, created_at")
    .neq("role", "admin")
    .order("created_at", { ascending: false });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-bold">회원 관리</h1>
        <p className="mt-1 text-sm text-muted">선수/학부모 계정을 등록하고 관리합니다.</p>
      </div>

      <MemberForm />

      <div className="overflow-hidden rounded-2xl border border-line">
        <div className="grid grid-cols-3 bg-card/60 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted">
          <span>이름</span>
          <span>전화번호</span>
          <span>유형</span>
        </div>
        {members && members.length > 0 ? (
          members.map((m) => (
            <Link
              key={m.id}
              href={`/admin/members/${m.id}`}
              className="grid grid-cols-3 border-t border-line px-5 py-4 text-sm transition-colors hover:bg-base"
            >
              <span className="font-semibold">{m.name || "-"}</span>
              <span className="text-muted">{m.phone || "-"}</span>
              <span className="text-court-bright">{roleLabel[m.role] ?? m.role}</span>
            </Link>
          ))
        ) : (
          <p className="border-t border-line px-5 py-8 text-center text-sm text-muted">
            등록된 회원이 없습니다.
          </p>
        )}
      </div>
    </div>
  );
}
