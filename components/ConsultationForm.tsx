"use client";

import Link from "next/link";
import { useActionState } from "react";
import { consultationForm } from "@/lib/forms";
import { submitApplication, type ApplicationState } from "@/app/actions/application";
import { FormField } from "@/components/ui/FormField";

const action = submitApplication.bind(null, "consultation");

export function ConsultationForm() {
  const [state, formAction, pending] = useActionState<ApplicationState, FormData>(
    action,
    {},
  );

  if (state.ok) {
    return (
      <div className="rounded-2xl border border-lime/40 bg-lime/5 p-10 text-center">
        <p className="font-display text-2xl font-bold text-lime">상담 신청이 접수되었습니다</p>
        <p className="mt-2 text-sm text-muted">
          전문 어드바이저가 24시간 내에 연락드립니다. 감사합니다.
        </p>
      </div>
    );
  }

  const section = consultationForm[0];

  return (
    <form action={formAction} className="rounded-2xl border border-line bg-card p-7">
      <h2 className="font-display text-sm font-bold uppercase tracking-widest text-court-bright">
        {section.title}
      </h2>
      <p className="mt-1 text-xs text-danger">* 필수 항목</p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {section.fields.map((f) => (
          <FormField key={f.name} field={f} />
        ))}
      </div>

      <p className="mt-6 text-xs leading-relaxed text-muted">
        제출 시 본인은 보호자(법정대리인)로서 본인 및 자녀를 대신하여 GCM에 개인정보 제공 및
        연락(전화·문자·이메일)에 동의하며, 무료 상담을 신청합니다.{" "}
        <Link href="/privacy" className="text-court-bright hover:underline">
          개인정보 처리방침
        </Link>{" "}
        및{" "}
        <Link href="/terms" className="text-court-bright hover:underline">
          이용약관
        </Link>
        에 동의합니다.
      </p>

      {state.error ? (
        <p className="mt-4 rounded-lg border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger">
          {state.error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="mt-6 inline-flex items-center justify-center rounded-full bg-lime px-8 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {pending ? "제출 중..." : "상담 신청"}
      </button>
    </form>
  );
}
