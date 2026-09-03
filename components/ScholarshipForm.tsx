"use client";

import { useActionState, useRef, useState } from "react";
import { scholarshipForm, sectionTitle } from "@/lib/forms";
import { submitApplication, type ApplicationState } from "@/app/actions/application";
import { FormField } from "@/components/ui/FormField";
import { useLocale } from "@/components/i18n/LocaleProvider";

const action = submitApplication.bind(null, "scholarship");

export function ScholarshipForm() {
  const ko = useLocale() === "ko";
  const [state, formAction, pending] = useActionState<ApplicationState, FormData>(
    action,
    {},
  );

  // 모든 필수 항목 + 동의 체크가 충족돼야 버튼 활성화
  const formRef = useRef<HTMLFormElement>(null);
  const [valid, setValid] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const refreshValidity = () => setValid(!!formRef.current?.checkValidity());

  if (state.ok) {
    return (
      <div className="rounded-2xl border border-lime/40 bg-lime/5 p-10 text-center">
        <p className="font-display text-2xl font-bold text-lime">
          {ko ? "신청이 접수되었습니다" : "Your application has been received"}
        </p>
        <p className="mt-2 text-sm text-muted">
          {ko
            ? "검토 후 24시간 내에 연락드리겠습니다. 감사합니다."
            : "We will review it and contact you within 24 hours. Thank you."}
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      onInput={refreshValidity}
      onChange={refreshValidity}
      className="space-y-8 rounded-2xl border border-line bg-card p-7"
    >
      <div>
        <h2 className="font-display text-xl font-bold">Scholarship Application</h2>
        <p className="mt-1 text-xs text-danger">{ko ? "* 필수 항목" : "* Required"}</p>
      </div>

      {scholarshipForm.map((section) => (
        <fieldset key={section.title}>
          <legend className="font-display text-sm font-bold uppercase tracking-widest text-court-bright">
            {sectionTitle(section, ko)}
          </legend>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {section.fields.map((f) => (
              <FormField key={f.name} field={f} ko={ko} />
            ))}
          </div>
        </fieldset>
      ))}

      <div>
        <label className="flex items-start gap-2 text-sm text-muted">
          <input
            type="checkbox"
            name="agree"
            required
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1"
          />
          <span>
            {ko
              ? "개인정보 수집·이용에 동의합니다. (자세한 내용은 개인정보 처리방침 참고)"
              : "I consent to the collection and use of my personal information. (See the Privacy Policy for details.)"}
          </span>
        </label>
        {!agreed ? (
          <p className="mt-2 text-xs font-semibold text-danger">
            {ko
              ? "개인정보 수집·이용에 동의해야 신청할 수 있습니다."
              : "You must consent to the collection and use of personal information to apply."}
          </p>
        ) : null}
      </div>

      {state.error ? (
        <p className="rounded-lg border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger">
          {state.error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending || !valid || !agreed}
        className="inline-flex items-center justify-center rounded-full bg-lime px-8 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending
          ? ko
            ? "제출 중..."
            : "Submitting..."
          : ko
            ? "장학 신청서 제출"
            : "Submit Scholarship Application"}
      </button>
    </form>
  );
}
