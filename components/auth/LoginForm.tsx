"use client";

import Link from "next/link";
import { useActionState } from "react";
import { signInMember, type AuthState } from "@/app/auth/actions";
import { AuthField, AuthSubmit } from "@/components/auth/AuthShell";

export function LoginForm() {
  const [memberState, memberAction, memberPending] = useActionState<AuthState, FormData>(
    signInMember,
    {},
  );

  return (
    <div>
      <form action={memberAction} className="space-y-4">
        <AuthField label="이메일" name="email" type="email" placeholder="example@email.com" />
        <AuthField label="비밀번호" name="password" type="password" placeholder="••••••••" />
        <ErrorMessage message={memberState.error} />
        <AuthSubmit pending={memberPending}>로그인</AuthSubmit>
      </form>

      <p className="mt-6 text-center text-sm text-muted">
        계정이 없으신가요?{" "}
        <Link href="/signup" className="font-semibold text-court hover:underline">
          회원가입
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
