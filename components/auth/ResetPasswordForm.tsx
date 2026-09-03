"use client";

import { useActionState } from "react";
import { updatePassword, type AuthState } from "@/app/auth/actions";
import { AuthField, AuthSubmit } from "@/components/auth/AuthShell";
import { useLocale } from "@/components/i18n/LocaleProvider";

export function ResetPasswordForm() {
  const ko = useLocale() === "ko";
  const [state, action, pending] = useActionState<AuthState, FormData>(updatePassword, {});

  return (
    <form action={action} className="space-y-4">
      <AuthField label={ko ? "새 비밀번호" : "New password"} name="password" type="password" placeholder={ko ? "6자 이상" : "At least 6 characters"} />
      <AuthField label={ko ? "새 비밀번호 확인" : "Confirm new password"} name="confirm" type="password" placeholder={ko ? "다시 입력" : "Re-enter password"} />
      <ErrorMessage message={state.error} />
      <AuthSubmit pending={pending}>{ko ? "비밀번호 변경" : "Change password"}</AuthSubmit>
    </form>
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
