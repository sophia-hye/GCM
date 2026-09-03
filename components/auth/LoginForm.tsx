"use client";

import Link from "next/link";
import { useActionState } from "react";
import { signInMember, type AuthState } from "@/app/auth/actions";
import { AuthField, AuthSubmit } from "@/components/auth/AuthShell";
import { SocialAuth } from "@/components/auth/SocialAuth";
import { useLocale } from "@/components/i18n/LocaleProvider";

export function LoginForm({ next }: { next?: string }) {
  const ko = useLocale() === "ko";
  const [memberState, memberAction, memberPending] = useActionState<AuthState, FormData>(
    signInMember,
    {},
  );

  return (
    <div>
      <form action={memberAction} className="space-y-4">
        {next ? <input type="hidden" name="next" value={next} /> : null}
        <AuthField label={ko ? "이메일" : "Email"} name="email" type="email" placeholder="example@email.com" />
        <AuthField label={ko ? "비밀번호" : "Password"} name="password" type="password" placeholder="••••••••" />
        <div className="text-right">
          <Link
            href="/forgot-password"
            className="text-xs text-muted transition-colors hover:text-court hover:underline"
          >
            {ko ? "비밀번호를 잊으셨나요?" : "Forgot your password?"}
          </Link>
        </div>
        <ErrorMessage message={memberState.error} />
        <AuthSubmit pending={memberPending}>{ko ? "로그인" : "Log in"}</AuthSubmit>
      </form>

      <SocialAuth />

      <p className="mt-6 text-center text-sm text-muted">
        {ko ? "계정이 없으신가요? " : "Don't have an account? "}
        <Link href="/signup" className="font-semibold text-court hover:underline">
          {ko ? "회원가입" : "Sign up"}
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
