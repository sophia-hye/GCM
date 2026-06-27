"use client";

import Link from "next/link";
import { useActionState } from "react";
import { signUpMember, type AuthState } from "@/app/auth/actions";
import { AuthField, AuthSubmit } from "@/components/auth/AuthShell";
import { PhoneInput } from "@/components/ui/PhoneInput";

function PhoneField() {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-muted">전화번호</label>
      <PhoneInput />
    </div>
  );
}

export function SignupForm() {
  const [memberState, memberAction, memberPending] = useActionState<AuthState, FormData>(
    signUpMember,
    {},
  );

  return (
    <div>
      <form action={memberAction} className="space-y-4">
        <AuthField label="이름" name="name" placeholder="실명을 입력하세요" />
        <PhoneField />
        <AuthField
          label="이메일"
          name="email"
          type="email"
          placeholder="example@email.com"
        />
        <AuthField
          label="비밀번호"
          name="password"
          type="password"
          placeholder="6자 이상"
        />
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-muted">구분</label>
          <select
            name="role"
            className="w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-court-bright"
          >
            <option value="student">선수 본인</option>
            <option value="parent">학부모</option>
          </select>
        </div>
        <ErrorMessage message={memberState.error} />
        <AuthSubmit pending={memberPending}>회원가입</AuthSubmit>
        <p className="text-center text-xs text-muted">
          로그인은 이메일과 비밀번호로 진행됩니다.
        </p>
      </form>

      <p className="mt-6 text-center text-sm text-muted">
        이미 계정이 있으신가요?{" "}
        <Link href="/login" className="font-semibold text-court hover:underline">
          로그인
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
