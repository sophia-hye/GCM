"use client";

import { useActionState } from "react";
import {
  submitAdultApplication,
  type AdultApplyState,
} from "@/app/actions/adultApplication";

const FIELD =
  "w-full rounded-lg border border-line bg-card px-3 py-2.5 text-sm text-ink outline-none placeholder:text-muted/60 focus:border-court-bright";

const LESSON_TIMES = ["토요일 12–15시", "토요일 15–18시", "토요일 18–21시"];

const ACHIEVEMENTS = [
  "없음",
  "시·군 예선",
  "시·군 입상",
  "전국 신인부 / 동메달부",
  "전국 오픈부",
];

export function AdultApplicationForm() {
  const [state, action, pending] = useActionState<AdultApplyState, FormData>(
    submitAdultApplication,
    {},
  );

  if (state.ok) {
    return (
      <div className="rounded-2xl border border-lime/40 bg-lime/5 p-10 text-center">
        <p className="font-display text-2xl font-bold text-lime">신청이 접수되었습니다</p>
        <p className="mt-2 text-sm text-muted">
          확인 후 안내드리겠습니다. 감사합니다.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-6 rounded-2xl border border-line bg-card p-7">
      <Field label="이름" required>
        <input name="name" required placeholder="실명" className={FIELD} />
      </Field>

      <Field label="연락처" required>
        <input
          name="phone"
          type="tel"
          required
          placeholder="010-0000-0000"
          className={FIELD}
        />
      </Field>

      <Field label="성별" required>
        <div className="flex gap-5 text-sm text-ink">
          {["남성", "여성"].map((g) => (
            <label key={g} className="flex items-center gap-2">
              <input type="radio" name="gender" value={g} required /> {g}
            </label>
          ))}
        </div>
      </Field>

      <Field label="희망 수업 시간 (복수 선택 가능)" required>
        <div className="flex flex-col gap-2 text-sm text-ink">
          {LESSON_TIMES.map((t) => (
            <label key={t} className="flex items-center gap-2">
              <input type="checkbox" name="times" value={t} /> {t}
            </label>
          ))}
        </div>
      </Field>

      <Field label="현재 소속 클럽 / 협회" required>
        <input
          name="club"
          required
          placeholder="없으면 '없음' 입력"
          className={FIELD}
        />
      </Field>

      <Field label="테니스 구력" required>
        <input
          name="experience"
          required
          placeholder="예: 2년 / 2024년 시작"
          className={FIELD}
        />
      </Field>

      <Field label="최고 대회 성적" required>
        <select name="achievement" required defaultValue="" className={FIELD}>
          <option value="" disabled>
            선택
          </option>
          {ACHIEVEMENTS.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </Field>

      <Field label="보완하고 싶은 부분" required>
        <textarea
          name="improve"
          rows={3}
          required
          placeholder="개선하고 싶은 점을 적어주세요"
          className={FIELD}
        />
      </Field>

      <Field label="영상 촬영 · 홍보 활용 동의" required>
        <div className="flex gap-5 text-sm text-ink">
          {["동의", "비동의"].map((v) => (
            <label key={v} className="flex items-center gap-2">
              <input type="radio" name="videoConsent" value={v} required /> {v}
            </label>
          ))}
        </div>
      </Field>

      <label className="flex items-start gap-2 text-sm text-muted">
        <input type="checkbox" name="privacyConsent" required className="mt-1" />
        <span>개인정보 수집·이용에 동의합니다. (자세한 내용은 개인정보 처리방침 참고)</span>
      </label>

      {state.error ? (
        <p className="rounded-lg border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger">
          {state.error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center rounded-full bg-lime px-8 py-3 text-sm font-semibold text-white transition hover:brightness-105 disabled:opacity-60"
      >
        {pending ? "제출 중..." : "신청서 제출"}
      </button>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-muted">
        {label}
        {required ? <span className="ml-0.5 text-danger">*</span> : null}
      </label>
      {children}
    </div>
  );
}
