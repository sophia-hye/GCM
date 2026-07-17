import { AuthShell } from "@/components/auth/AuthShell";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";

export const metadata = { title: "비밀번호 찾기 | GCM 아카데미" };

export default function ForgotPasswordPage() {
  return (
    <AuthShell
      title="비밀번호 찾기"
      subtitle="가입한 이메일로 재설정 링크를 보내드립니다."
      footer="문의: tennis.gcm@gmail.com"
      backgroundImage="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    >
      <ForgotPasswordForm />
    </AuthShell>
  );
}
