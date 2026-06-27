"use client";

import { useActionState } from "react";
import {
  submitAdultApplication,
  type AdultApplyState,
} from "@/app/actions/adultApplication";

const FIELD =
  "w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none placeholder:text-muted/60 focus:border-court-bright";

const LESSON_TIMES = ["토요일 12–15시", "토요일 15–18시", "토요일 18–21시"];

const EXPERIENCE = [
  "6개월 미만",
  "6개월 ~ 1년",
  "1년 ~ 3년",
  "3년 ~ 5년",
  "5년 ~ 10년",
  "10년 이상",
];

const ACHIEVEMENTS = [
  "없음",
  "지역 대회 / 테니스 타운 - 본선",
  "지역 대회 / 테니스 타운 - 입상",
  "전국 신인부, 브론즈 (남성) / 전국 개나리부 (여성) - 본선",
  "전국 신인부, 브론즈 (남성) / 전국 개나리부 (여성) - 입상",
  "전국 신인부, 브론즈 (남성) / 전국 개나리부 (여성) - 우승",
  "전국 오픈부 (남성) / 전국 국화부 (여성) - 본선",
  "전국 오픈부 (남성) / 전국 국화부 (여성) - 입상",
  "전국 오픈부 (남성) / 전국 국화부 (여성) - 우승",
];

const VIDEO_CONSENT_TEXT = `본 아카데미에서는 트레이닝 과정의 기록 및 홍보 자료 제작을 위하여 수업 중 사진 및 영상 촬영이 진행될 수 있습니다.
촬영은 주로 코치 및 프로그램 진행 모습을 중심으로 이루어지며, 이 과정에서 참가자의 신체 일부 또는 운동 장면이 부수적으로 포함될 수 있습니다.
다만, 특정 참가자를 대상으로 한 근접 촬영 또는 집중 촬영이 필요한 경우에는 반드시 사전에 별도의 동의를 구한 후 촬영을 진행합니다.
촬영된 자료는 아카데미 홍보 및 마케팅(홈페이지, SNS, 온·오프라인 광고, 유료 광고 집행, 인쇄물 등)에 활용될 수 있습니다.
참가자는 본 신청서를 통해 위 내용을 충분히 안내받고 이에 동의합니다.
촬영을 원하지 않는 경우 사전 요청을 통해 촬영 대상에서 제외될 수 있습니다.`;

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
        <select name="experience" required defaultValue="" className={FIELD}>
          <option value="" disabled>
            선택
          </option>
          {EXPERIENCE.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
      </Field>

      <Field label="대회 최고 성적" required>
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

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">
          트레이닝 중 촬영(코치 중심 촬영, 참가자는 일부 장면에 포함될 수 있음) 및 홍보 활용에
          동의합니다.<span className="ml-0.5 text-danger">*</span>
        </label>
        <p className="mb-3 whitespace-pre-line rounded-lg border border-line bg-base/50 p-3 text-xs leading-relaxed text-muted">
          {VIDEO_CONSENT_TEXT}
        </p>
        <div className="flex gap-5 text-sm text-ink">
          {["동의합니다", "동의하지 않습니다"].map((v) => (
            <label key={v} className="flex items-center gap-2">
              <input type="radio" name="videoConsent" value={v} required /> {v}
            </label>
          ))}
        </div>
      </div>

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
