"use client";

import { useActionState } from "react";
import { scholarshipForm } from "@/lib/forms";
import { submitApplication, type ApplicationState } from "@/app/actions/application";
import { FormField } from "@/components/ui/FormField";

const action = submitApplication.bind(null, "scholarship");

export function ScholarshipForm() {
  const [state, formAction, pending] = useActionState<ApplicationState, FormData>(
    action,
    {},
  );

  if (state.ok) {
    return (
      <div className="rounded-2xl border border-lime/40 bg-lime/5 p-10 text-center">
        <p className="font-display text-2xl font-bold text-lime">신청이 접수되었습니다</p>
        <p className="mt-2 text-sm text-muted">
          검토 후 24시간 내에 연락드리겠습니다. 감사합니다.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-8 rounded-2xl border border-line bg-card p-7">
      <div>
        <h2 className="font-display text-xl font-bold">Scholarship Application</h2>
        <p className="mt-1 text-xs text-danger">* 필수 항목</p>
      </div>

      {scholarshipForm.map((section) => (
        <fieldset key={section.title}>
          <legend className="font-display text-sm font-bold uppercase tracking-widest text-court-bright">
            {section.title}
          </legend>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {section.fields.map((f) => (
              <FormField key={f.name} field={f} />
            ))}
          </div>
        </fieldset>
      ))}

      <label className="flex items-start gap-2 text-sm text-muted">
        <input type="checkbox" name="agree" required className="mt-1" />
        <span>
          개인정보 수집·이용에 동의합니다. (자세한 내용은 개인정보 처리방침 참고)
        </span>
      </label>

      {state.error ? (
        <p className="rounded-lg border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger">
          {state.error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center rounded-full bg-lime px-8 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {pending ? "제출 중..." : "장학 신청서 제출"}
      </button>
    </form>
  );
}
