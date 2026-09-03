import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/AuthShell";
import { LoginForm } from "@/components/auth/LoginForm";
import { getLocale } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const ko = (await getLocale()) === "ko";
  return { title: ko ? "로그인 | GCM 아카데미" : "Log in | GCM Academy" };
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; dup?: string; reset?: string }>;
}) {
  const { next, dup, reset } = await searchParams;
  const ko = (await getLocale()) === "ko";
  return (
    <AuthShell
      title={ko ? "로그인" : "Log in"}
      subtitle={ko ? "이메일과 비밀번호로 GCM 대시보드에 접속합니다." : "Access the GCM dashboard with your email and password."}
      footer={ko ? "문의: tennis.gcm@gmail.com" : "Contact: tennis.gcm@gmail.com"}
      backgroundImage="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    >
      {dup ? (
        <p className="mb-5 rounded-lg border border-court/40 bg-court/10 px-4 py-3 text-sm text-court-bright">
          {ko
            ? "이미 가입된 전화번호입니다. 처음 가입하신 방법(이메일 · 카카오 · 네이버)으로 로그인해 주세요."
            : "This phone number is already registered. Please log in using the method you originally signed up with (email, Kakao, or Naver)."}
        </p>
      ) : null}
      {reset ? (
        <p className="mb-5 rounded-lg border border-court/40 bg-court/10 px-4 py-3 text-sm text-court-bright">
          {ko
            ? "비밀번호가 변경되었습니다. 새 비밀번호로 로그인해 주세요."
            : "Your password has been changed. Please log in with your new password."}
        </p>
      ) : null}
      <LoginForm next={next} />
    </AuthShell>
  );
}
