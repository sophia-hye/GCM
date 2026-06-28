import { AuthShell } from "@/components/auth/AuthShell";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata = { title: "로그인 | GCM 아카데미" };

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const { next } = await searchParams;
  return (
    <AuthShell
      title="로그인"
      subtitle="이메일과 비밀번호로 GCM 대시보드에 접속합니다."
      footer="문의: contact@gcm-academy.kr"
      backgroundImage="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    >
      <LoginForm next={next} />
    </AuthShell>
  );
}
