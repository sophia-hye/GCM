import { AuthShell } from "@/components/auth/AuthShell";
import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm";

export const metadata = { title: "비밀번호 재설정 | GCM 아카데미" };

export default function ResetPasswordPage() {
  return (
    <AuthShell
      title="비밀번호 재설정"
      subtitle="새 비밀번호를 설정해 주세요."
      footer="문의: tennis.gcm@gmail.com"
      backgroundImage="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    >
      <ResetPasswordForm />
    </AuthShell>
  );
}
