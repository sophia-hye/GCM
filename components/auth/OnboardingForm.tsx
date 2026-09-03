"use client";

import { useActionState } from "react";
import { completeOnboarding, type AuthState } from "@/app/auth/actions";
import { AuthSubmit } from "@/components/auth/AuthShell";
import { PhoneInput } from "@/components/ui/PhoneInput";
import { useLocale } from "@/components/i18n/LocaleProvider";

export function OnboardingForm() {
  const ko = useLocale() === "ko";
  const [state, action, pending] = useActionState<AuthState, FormData>(
    completeOnboarding,
    {},
  );

  return (
    <form action={action} className="space-y-4">
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">{ko ? "구분" : "Role"}</label>
        <select
          name="role"
          defaultValue="student"
          className="w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-court-bright"
        >
          <option value="student">{ko ? "선수 본인" : "Player"}</option>
          <option value="amateur">{ko ? "아마추어 선수" : "Amateur player"}</option>
          <option value="parent">{ko ? "학부모" : "Parent"}</option>
          <option value="coach">{ko ? "코치" : "Coach"}</option>
          <option value="others">{ko ? "기타 (Others)" : "Others"}</option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">{ko ? "전화번호" : "Phone"}</label>
        <PhoneInput />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">{ko ? "성별" : "Gender"}</label>
        <select
          name="gender"
          defaultValue=""
          className="w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-court-bright"
        >
          <option value="" disabled>
            {ko ? "선택해 주세요" : "Please select"}
          </option>
          <option value="male">{ko ? "남" : "Male"}</option>
          <option value="female">{ko ? "여" : "Female"}</option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">{ko ? "생년월일" : "Date of Birth"}</label>
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

      <AuthSubmit pending={pending}>{ko ? "시작하기" : "Get started"}</AuthSubmit>
    </form>
  );
}
