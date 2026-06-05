import { AuthShell } from "@/components/auth/AuthShell";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata = { title: "로그인 | GCM 아카데미" };

export default function LoginPage() {
  return (
    <AuthShell
      title="로그인"
      subtitle="이름과 전화번호로 GCM 대시보드에 접속합니다."
      footer="문의: contact@gcm-academy.kr"
    >
      <LoginForm />
    </AuthShell>
  );
}
