"use client";

import Link from "next/link";
import { useActionState } from "react";
import { requestPasswordReset, type PasswordResetState } from "@/app/auth/actions";
import { AuthField, AuthSubmit } from "@/components/auth/AuthShell";
import { useLocale } from "@/components/i18n/LocaleProvider";

export function ForgotPasswordForm() {
  const ko = useLocale() === "ko";
  const [state, action, pending] = useActionState<PasswordResetState, FormData>(
    requestPasswordReset,
    {},
  );

  if (state.ok) {
    return (
      <div>
        <p className="rounded-lg border border-court/40 bg-court/10 px-4 py-3 text-sm leading-relaxed text-court-bright">
          {ko
            ? "입력하신 이메일로 비밀번호 재설정 링크를 보냈습니다. 메일함(스팸함 포함)을 확인해 주세요."
            : "We've sent a password reset link to your email. Please check your inbox (including spam)."}
        </p>
        <p className="mt-6 text-center text-sm text-muted">
          <Link href="/login" className="font-semibold text-court hover:underline">
            {ko ? "로그인으로 돌아가기" : "Back to log in"}
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div>
      <form action={action} className="space-y-4">
        <AuthField label={ko ? "이메일" : "Email"} name="email" type="email" placeholder="example@email.com" />
        <ErrorMessage message={state.error} />
        <AuthSubmit pending={pending}>{ko ? "재설정 링크 받기" : "Send reset link"}</AuthSubmit>
      </form>
      <p className="mt-6 text-center text-sm text-muted">
        <Link href="/login" className="font-semibold text-court hover:underline">
          {ko ? "로그인으로 돌아가기" : "Back to log in"}
        </Link>
      </p>
    </div>
  );
}

function ErrorMessage({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="rounded-lg border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger">
      {message}
    </p>
  );
}
