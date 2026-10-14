"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { signUpMember, type AuthState } from "@/app/auth/actions";
import { AuthField, AuthSubmit } from "@/components/auth/AuthShell";
import { PhoneInput } from "@/components/ui/PhoneInput";
import { SocialAuth } from "@/components/auth/SocialAuth";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { REFERRAL_OPTIONS, REFERRAL_OTHER } from "@/lib/referral";

const selectClass =
  "w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-court-bright";

function PhoneField({ ko }: { ko: boolean }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-muted">
        {ko ? "전화번호" : "Phone"}
      </label>
      <PhoneInput />
    </div>
  );
}

export function SignupForm() {
  const ko = useLocale() === "ko";
  const [referral, setReferral] = useState("");
  const [memberState, memberAction, memberPending] = useActionState<AuthState, FormData>(
    signUpMember,
    {},
  );

  return (
    <div>
      <form action={memberAction} className="space-y-4">
        <AuthField label={ko ? "이름" : "Name"} name="name" placeholder={ko ? "실명을 입력하세요" : "Enter your full name"} />
        <PhoneField ko={ko} />
        <AuthField
          label={ko ? "이메일" : "Email"}
          name="email"
          type="email"
          placeholder="example@email.com"
        />
        <AuthField
          label={ko ? "비밀번호" : "Password"}
          name="password"
          type="password"
          placeholder={ko ? "6자 이상" : "At least 6 characters"}
        />
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-muted">{ko ? "성별" : "Gender"}</label>
          <select
            name="gender"
            required
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
        <AuthField label={ko ? "생년월일" : "Date of Birth"} name="birth_date" type="date" />
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-muted">{ko ? "구분" : "Role"}</label>
          <select
            name="role"
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
          <label className="mb-1.5 block text-xs font-semibold text-muted">
            {ko ? "GCM을 알게 된 경로" : "How did you hear about GCM?"}
            <span className="text-danger"> *</span>
          </label>
          <select
            name="referral"
            required
            value={referral}
            onChange={(e) => setReferral(e.target.value)}
            className={selectClass}
          >
            <option value="" disabled>
              {ko ? "선택해 주세요" : "Please select"}
            </option>
            {REFERRAL_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {ko ? o.ko : o.en}
              </option>
            ))}
          </select>
          {referral === REFERRAL_OTHER ? (
            <input
              name="referral_other"
              required
              placeholder={ko ? "어떻게 알게 되셨는지 적어주세요" : "Please tell us how"}
              className={`mt-2 ${selectClass} placeholder:text-muted/60`}
            />
          ) : null}
        </div>
        <ErrorMessage message={memberState.error} />
        <AuthSubmit pending={memberPending}>{ko ? "회원가입" : "Sign up"}</AuthSubmit>
        <p className="text-center text-xs text-muted">
          {ko ? "로그인은 이메일과 비밀번호로 진행됩니다." : "Log in with your email and password."}
        </p>
      </form>

      <SocialAuth />

      <p className="mt-6 text-center text-sm text-muted">
        {ko ? "이미 계정이 있으신가요? " : "Already have an account? "}
        <Link href="/login" className="font-semibold text-court hover:underline">
          {ko ? "로그인" : "Log in"}
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
