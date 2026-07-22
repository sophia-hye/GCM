import Link from "next/link";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { Container } from "@/components/ui";

const baseMenu = [
  { label: "대시보드", href: "/dashboard" },
  { label: "발달/진로 단계", href: "/dashboard/progress" },
  { label: "일정/예약", href: "/dashboard/schedule" },
  { label: "멘탈 체크인", href: "/dashboard/checkin" },
  { label: "내 전략 보고서", href: "/dashboard/strategy" },
];

const roleLabel: Record<string, string> = {
  student: "선수",
  parent: "학부모",
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
    .select("name, role")
    .eq("id", user.id)
    .maybeSingle();

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
