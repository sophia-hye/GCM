"use client";

import { useActionState } from "react";
import { completeOnboarding, type AuthState } from "@/app/auth/actions";
import { AuthSubmit } from "@/components/auth/AuthShell";
import { PhoneInput } from "@/components/ui/PhoneInput";

export function OnboardingForm() {
  const [state, action, pending] = useActionState<AuthState, FormData>(
    completeOnboarding,
    {},
  );

  return (
    <form action={action} className="space-y-4">
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">구분</label>
        <select
          name="role"
          defaultValue="student"
          className="w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-court-bright"
        >
          <option value="student">선수 본인</option>
          <option value="amateur">아마추어 선수</option>
          <option value="parent">학부모</option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">전화번호</label>
        <PhoneInput />
      </div>

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

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">생년월일</label>
        <input
          type="date"
          name="birth_date"
          className="w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-court-bright"
        />
      </div>

      {state.error ? (
        <p className="rounded-lg border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger">
          {state.error}
        </p>
      ) : null}

      <AuthSubmit pending={pending}>시작하기</AuthSubmit>
    </form>
  );
}
