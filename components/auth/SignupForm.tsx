"use client";

import Link from "next/link";
import { useActionState } from "react";
import { signUpMember, type AuthState } from "@/app/auth/actions";
import { AuthField, AuthSubmit } from "@/components/auth/AuthShell";
import { PhoneInput } from "@/components/ui/PhoneInput";
import { SocialAuth } from "@/components/auth/SocialAuth";

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
          <label className="mb-1.5 block text-xs font-semibold text-muted">성별</label>
          <select
            name="gender"
            defaultValue=""
            className="w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-court-bright"
          >
            <option value="" disabled>
              선택해 주세요
            </option>
            <option value="male">남</option>
            <option value="female">여</option>
          </select>
        </div>
        <AuthField label="생년월일" name="birth_date" type="date" />
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-muted">구분</label>
          <select
            name="role"
            className="w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-court-bright"
          >
            <option value="student">선수 본인</option>
            <option value="amateur">아마추어 선수</option>
            <option value="parent">학부모</option>
          </select>
        </div>
        <ThirdPartyConsent />
        <ErrorMessage message={memberState.error} />
        <AuthSubmit pending={memberPending}>회원가입</AuthSubmit>
        <p className="text-center text-xs text-muted">
          로그인은 이메일과 비밀번호로 진행됩니다.
        </p>
      </form>

      <SocialAuth />

      <p className="mt-6 text-center text-sm text-muted">
        이미 계정이 있으신가요?{" "}
        <Link href="/login" className="font-semibold text-court hover:underline">
          로그인
        </Link>
      </p>
    </div>
  );
}

function ThirdPartyConsent() {
  return (
    <label className="flex items-start gap-2 rounded-lg border border-line bg-white px-3 py-2.5 text-xs leading-relaxed text-ink">
      <input
        type="checkbox"
        name="consent_third_party"
        value="on"
        className="mt-0.5 h-4 w-4 shrink-0 accent-court-bright"
      />
      <span>
        <span className="font-semibold text-danger">[필수]</span> 개인정보 제3자 제공 동의 — 회원님의
        개인정보(이름, 이메일, 전화번호, 성별, 생년월일)를 Qure에 제공하여 Qure 서비스에서 저장·이용하는
        것에 동의합니다.{" "}
        <Link
          href="/privacy"
          target="_blank"
          className="font-semibold text-court underline hover:text-court-bright"
        >
          자세히 보기
        </Link>
      </span>
    </label>
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
