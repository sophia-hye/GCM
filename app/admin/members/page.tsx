import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { isAdminConfigured } from "@/lib/supabase/env";
import { MemberForm } from "@/components/admin/MemberForm";
import { setMemberApproved } from "@/app/admin/actions";

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

      <div className="overflow-x-auto rounded-2xl border border-line">
        <table className="w-full min-w-[760px] border-collapse text-sm">
          <thead>
            <tr className="bg-card/60 text-left text-xs uppercase tracking-wide text-muted">
              <th className="px-4 py-3 font-semibold">이름</th>
              <th className="px-4 py-3 font-semibold">전화번호</th>
              <th className="px-4 py-3 font-semibold">유형</th>
              <th className="px-4 py-3 font-semibold">로그인</th>
              <th className="px-4 py-3 font-semibold">승인</th>
              <th className="px-4 py-3 font-semibold">가입일</th>
            </tr>
          </thead>
          <tbody>
            {members && members.length > 0 ? (
              members.map((m) => (
                <tr key={m.id} className="border-t border-line transition-colors hover:bg-base">
                  <td className="px-4 py-3">
                    <Link
                      href={`/admin/members/${m.id}`}
                      className="font-semibold text-ink hover:text-court-bright"
                    >
                      {m.name || "-"}
                    </Link>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-muted">{m.phone || "-"}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-court-bright">
                    {roleLabel[m.role] ?? m.role}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-muted">{methodById[m.id] ?? "-"}</td>
                  <td className="whitespace-nowrap px-4 py-3">
                    <form action={setMemberApproved} className="flex items-center gap-2">
                      <input type="hidden" name="id" value={m.id} />
                      <input type="hidden" name="approved" value={m.approved ? "false" : "true"} />
                      <span className={m.approved ? "text-lime" : "text-muted"}>
                        {m.approved ? "승인됨" : "미승인"}
                      </span>
                      <button
                        type="submit"
                        className={`rounded-md border px-2 py-1 text-xs font-semibold transition-colors ${
                          m.approved
                            ? "border-line text-muted hover:border-danger hover:text-danger"
                            : "border-court text-court-bright hover:bg-court hover:text-white"
                        }`}
                      >
                        {m.approved ? "해제" : "승인"}
                      </button>
                    </form>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-muted">
                    {m.created_at ? fmtDate(m.created_at) : "-"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="border-t border-line px-4 py-8 text-center text-muted">
                  아직 가입한 회원이 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
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
