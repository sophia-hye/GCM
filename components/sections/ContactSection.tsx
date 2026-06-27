"use client";

import { useActionState } from "react";
import { faqContact, site } from "@/lib/site-data";
import { Section, CourtLines } from "@/components/ui";
import { PhoneInput } from "@/components/ui/PhoneInput";
import { submitInquiry, type InquiryState } from "@/app/actions/inquiry";

const CONTACT_FIELD_CLASS =
  "w-full rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink outline-none placeholder:text-muted/60 focus:border-court-bright";

export function ContactSection() {
  const [state, action, pending] = useActionState<InquiryState, FormData>(
    submitInquiry,
    {},
  );

  return (
    <Section id="consultation">
      <div className="relative overflow-hidden rounded-3xl border border-line bg-court-gradient p-8 sm:p-12">
        <CourtLines className="pointer-events-none absolute -right-10 top-0 h-full w-1/2 text-white/10" />
        <div className="absolute inset-0 bg-base/30" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="flex flex-col justify-center">
            <h2 className="font-display text-3xl font-black leading-tight sm:text-4xl">
              {faqContact.title}
            </h2>
            <p className="mt-4 max-w-md text-ink/85">{faqContact.sub}</p>
            <div className="mt-6 flex flex-col gap-1 text-sm text-ink/80">
              <span>
                대표 {site.rep} · 고성능 테니스 아카데미
              </span>
              <a href={`mailto:${site.email}`} className="font-semibold text-lime">
                {site.email}
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-base/60 p-6 backdrop-blur">
            {state.ok ? (
              <div className="flex h-full min-h-56 flex-col items-center justify-center text-center">
                <p className="font-display text-2xl font-bold text-lime">접수되었습니다</p>
                <p className="mt-2 text-sm text-muted">
                  빠른 시일 내에 연락드리겠습니다. 감사합니다.
                </p>
              </div>
            ) : (
              <form action={action} className="space-y-4">
                <Field label="이름" name="name" placeholder="선수/학부모 성함" />
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-muted">연락처</label>
                  <PhoneInput className={CONTACT_FIELD_CLASS} />
                </div>
                <Field label="이메일" name="email" type="email" placeholder="you@example.com" required={false} />
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-muted">
                    상담 내용
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    required
                    placeholder="현재 UTR, 목표, 궁금한 점을 적어주세요."
                    className="w-full rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink outline-none placeholder:text-muted/60 focus:border-court-bright"
                  />
                </div>

                {state.error ? (
                  <p className="rounded-lg border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger">
                    {state.error}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={pending}
                  className="inline-flex w-full items-center justify-center rounded-full bg-lime px-6 py-3 text-sm font-semibold tracking-wide text-white transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-105 disabled:opacity-60"
                >
                  {pending ? "전송 중..." : "무료 진로 상담 신청"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-muted">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink outline-none placeholder:text-muted/60 focus:border-court-bright"
      />
    </div>
  );
}
