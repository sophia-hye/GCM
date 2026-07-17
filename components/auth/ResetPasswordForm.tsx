"use client";

import { useActionState } from "react";
import { updatePassword, type AuthState } from "@/app/auth/actions";
import { AuthField, AuthSubmit } from "@/components/auth/AuthShell";

export function ResetPasswordForm() {
  const [state, action, pending] = useActionState<AuthState, FormData>(updatePassword, {});

  return (
    <form action={action} className="space-y-4">
      <AuthField label="새 비밀번호" name="password" type="password" placeholder="6자 이상" />
      <AuthField label="새 비밀번호 확인" name="confirm" type="password" placeholder="다시 입력" />
      <ErrorMessage message={state.error} />
      <AuthSubmit pending={pending}>비밀번호 변경</AuthSubmit>
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
