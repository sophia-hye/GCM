import Link from "next/link";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { Container } from "@/components/ui";

const baseMenu = [
  { label: "대시보드", href: "/dashboard" },
  { label: "매치피드백", href: "/match-feedback" },
  { label: "발달/진로 단계", href: "/dashboard/progress" },
  { label: "일정/예약", href: "/dashboard/schedule" },
  { label: "멘탈 체크인", href: "/dashboard/checkin" },
  { label: "내 전략 보고서", href: "/dashboard/strategy" },
];

const roleLabel: Record<string, string> = {
  student: "선수",
  parent: "학부모",
  amateur: "아마추어",
  coach: "코치",
  others: "기타",
  admin: "관리자",
};

/**
 * My Page(회원 대시보드) — 사이트 탭 중 하나.
 * 상단 사이트 navbar는 (site) 레이아웃이 제공하고, 여기서는 좌측 사이드바만 담당한다.
 */
export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  if (!isSupabaseConfigured()) {
    return (
      <div className="pt-16">
        <Container className="py-16 text-center">
          <div className="mx-auto max-w-md rounded-2xl border border-line bg-card p-8">
            <h1 className="font-display text-xl font-bold">백엔드 설정 필요</h1>
            <p className="mt-3 text-sm text-muted">
              회원 대시보드는 Supabase 연동 후 사용할 수 있습니다.
            </p>
          </div>
        </Container>
      </div>
    );
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login?next=/dashboard");

  const { data: profile } = await supabase
    .from("gcm_profiles")
    .select("name, role, is_admin")
    .eq("id", user.id)
    .maybeSingle();

  // 관리자에겐 선수용 서브메뉴(사이드바)가 불필요하다 → 인사말+카드만 전체폭으로.
  // 대신 관리자 콘솔로 바로 갈 수 있는 버튼을 상단에 노출한다.
  if (profile?.is_admin) {
    return (
      <div className="pt-16">
        <Container className="py-10">
          <div className="mb-6 flex justify-end">
            <Link
              href="/admin"
              className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-[#08111f] transition hover:brightness-110"
            >
              관리자 콘솔로 이동
              <span aria-hidden>→</span>
            </Link>
          </div>
          {children}
        </Container>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <Container className="grid gap-8 py-10 lg:grid-cols-[200px_1fr]">
        <aside>
          <div className="mb-4 px-3">
            <p className="text-sm font-semibold text-ink">{profile?.name || user.email}</p>
            {profile?.role ? (
              <span className="mt-1 inline-block rounded-md bg-court/15 px-2 py-0.5 text-xs text-court-bright">
                {roleLabel[profile.role] ?? profile.role}
              </span>
            ) : null}
          </div>
          <nav className="flex flex-col gap-1">
            {baseMenu.map((m) => (
              <Link
                key={m.href}
                href={m.href}
                className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-card hover:text-ink"
              >
                {m.label}
              </Link>
            ))}
          </nav>
        </aside>
        <div>{children}</div>
      </Container>
    </div>
  );
}
