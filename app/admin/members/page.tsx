import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { isAdminConfigured } from "@/lib/supabase/env";
import { MemberForm } from "@/components/admin/MemberForm";

export const metadata = { title: "회원 관리 | GCM Admin" };

const roleLabel: Record<string, string> = { student: "선수", parent: "학부모", amateur: "아마추어" };

type AuthUserLite = {
  id: string;
  app_metadata?: { provider?: string };
  user_metadata?: { provider?: string };
};

/** 가입 경로 정확 판별: 네이버는 user_metadata, 그 외는 app_metadata 기준 */
function loginMethod(u: AuthUserLite): string {
  if (u.user_metadata?.provider === "naver") return "네이버";
  const p = u.app_metadata?.provider;
  if (p === "kakao") return "카카오";
  if (p === "google") return "구글";
  return "이메일";
}

export default async function MembersPage() {
  const supabase = await createClient();
  const { data: members } = await supabase
    .from("gcm_profiles")
    .select("id, name, phone, role, approved, created_at")
    .neq("role", "admin")
    .order("created_at", { ascending: false });

  // 로그인 수단 매핑 (service_role)
  const methodById: Record<string, string> = {};
  if (isAdminConfigured()) {
    const { data } = await createAdminClient().auth.admin.listUsers({ perPage: 1000 });
    for (const u of data?.users ?? []) {
      methodById[u.id] = loginMethod(u as AuthUserLite);
    }
  }

  const count = members?.length ?? 0;
  const fmtDate = (iso: string) =>
    new Date(iso).toLocaleDateString("ko-KR", { timeZone: "Asia/Seoul" });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">회원 관리</h1>
        <p className="mt-1 text-sm text-muted">
          회원가입한 회원 목록입니다. 이름을 누르면 상세·승인 관리로 이동합니다. (총 {count}명)
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-line">
        <div className="grid grid-cols-6 bg-card/60 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted">
          <span>이름</span>
          <span>전화번호</span>
          <span>유형</span>
          <span>로그인</span>
          <span>승인</span>
          <span>가입일</span>
        </div>
        {members && members.length > 0 ? (
          members.map((m) => (
            <Link
              key={m.id}
              href={`/admin/members/${m.id}`}
              className="grid grid-cols-6 border-t border-line px-5 py-4 text-sm transition-colors hover:bg-base"
            >
              <span className="font-semibold">{m.name || "-"}</span>
              <span className="text-muted">{m.phone || "-"}</span>
              <span className="text-court-bright">{roleLabel[m.role] ?? m.role}</span>
              <span className="text-muted">{methodById[m.id] ?? "-"}</span>
              <span className={m.approved ? "text-lime" : "text-muted"}>
                {m.approved ? "승인됨" : "미승인"}
              </span>
              <span className="text-muted">{m.created_at ? fmtDate(m.created_at) : "-"}</span>
            </Link>
          ))
        ) : (
          <p className="border-t border-line px-5 py-8 text-center text-sm text-muted">
            아직 가입한 회원이 없습니다.
          </p>
        )}
      </div>

      {/* 수기 등록(오프라인 회원 등)은 보조 기능으로 접어둠 */}
      <details className="rounded-2xl border border-line bg-card/40 p-4">
        <summary className="cursor-pointer text-sm font-semibold text-muted">
          + 회원 직접 등록 (오프라인·수기 등록)
        </summary>
        <div className="mt-4">
          <MemberForm />
        </div>
      </details>
    </div>
  );
}
