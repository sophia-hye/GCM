import Link from "next/link";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { signOut } from "@/app/auth/actions";
import { Container } from "@/components/ui";

const menu = [
  { label: "콘솔", href: "/admin" },
  { label: "회원 관리", href: "/admin/members" },
  { label: "예약 관리", href: "/admin/bookings" },
  { label: "고객 관리(문의)", href: "/admin/inquiries" },
];

export default async function AdminLayout({
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
            관리자 콘솔은 Supabase 연동 후 사용할 수 있습니다.
          </p>
          <Link href="/" className="mt-6 inline-block text-sm font-semibold text-lime">
            홈으로
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

  if (profile?.role !== "admin") redirect("/dashboard");

  return (
    <div className="min-h-screen">
      <header className="border-b border-line bg-base/80 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <Link href="/admin" className="font-display text-xl font-extrabold">
            GCM<span className="text-lime">.</span>
            <span className="ml-2 align-middle text-xs font-semibold text-court-bright">
              ADMIN
            </span>
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-muted">{profile?.name || user.email}</span>
            <Link href="/dashboard" className="text-muted hover:text-ink">
              회원 화면
            </Link>
            <form action={signOut}>
              <button type="submit" className="text-muted hover:text-ink">
                로그아웃
              </button>
            </form>
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
