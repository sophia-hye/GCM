import Link from "next/link";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { LogoutButton } from "@/components/auth/LogoutButton";
import { Container } from "@/components/ui";

const baseMenu = [
  { label: "대시보드", href: "/dashboard" },
  { label: "발달/진로 단계", href: "/dashboard/progress" },
  { label: "일정/예약", href: "/dashboard/schedule" },
  { label: "멘탈 체크인", href: "/dashboard/checkin" },
  { label: "경기 분석", href: "/dashboard/analysis" },
  { label: "내 전략 보고서", href: "/dashboard/strategy" },
];

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  if (!isSupabaseConfigured()) {
    return (
      <main className="flex min-h-screen items-center justify-center px-5">
        <div className="max-w-md rounded-2xl border border-line bg-card p-8 text-center">
          <h1 className="font-display text-xl font-bold">백엔드 설정 필요</h1>
          <p className="mt-3 text-sm text-muted">
            회원 대시보드는 Supabase 연동 후 사용할 수 있습니다. <code>.env.local</code>에
            자격증명을 입력해 주세요.
          </p>
          <Link href="/" className="mt-6 inline-block text-sm font-semibold text-lime">
            홈으로 돌아가기
          </Link>
        </div>
      </main>
    );
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("gcm_profiles")
    .select("name, role")
    .eq("id", user.id)
    .maybeSingle();

  const roleLabel: Record<string, string> = {
    student: "선수",
    parent: "학부모",
    admin: "관리자",
  };

  const menu =
    profile?.role === "admin"
      ? [...baseMenu, { label: "관리자 콘솔", href: "/admin" }]
      : baseMenu;

  return (
    <div className="min-h-screen">
      <header className="border-b border-line bg-base/80 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <Link href="/dashboard" className="font-display text-xl font-extrabold">
            GCM<span className="text-lime">.</span>
            <span className="ml-2 align-middle text-xs font-medium text-muted">마이페이지</span>
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-muted">
              {profile?.name || user.email}
              {profile?.role ? (
                <span className="ml-2 rounded-md bg-court/15 px-2 py-0.5 text-xs text-court-bright">
                  {roleLabel[profile.role] ?? profile.role}
                </span>
              ) : null}
            </span>
            <Link href="/" className="text-muted hover:text-ink">
              사이트로 돌아가기
            </Link>
            <LogoutButton className="text-muted hover:text-ink">로그아웃</LogoutButton>
          </div>
        </Container>
      </header>

      <Container className="grid gap-8 py-10 lg:grid-cols-[200px_1fr]">
        <aside>
          <nav className="flex flex-col gap-1">
            {menu.map((m) => (
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
