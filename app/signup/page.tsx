import { AuthShell } from "@/components/auth/AuthShell";
import { SignupForm } from "@/components/auth/SignupForm";

export const metadata = { title: "회원가입 | GCM 아카데미" };

export default function SignupPage() {
  return (
    <AuthShell
      title="회원가입"
      subtitle="GCM 아카데미 회원으로 등록하세요."
      footer="문의: contact@gcm-academy.kr"
      backgroundImage="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    >
      <SignupForm />
    </AuthShell>
  );
}
