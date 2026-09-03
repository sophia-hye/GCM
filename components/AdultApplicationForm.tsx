"use client";

import { useActionState, useState } from "react";
import {
  submitAdultApplication,
  type AdultApplyState,
} from "@/app/actions/adultApplication";
import { useLocale } from "@/components/i18n/LocaleProvider";

const FIELD =
  "w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none placeholder:text-muted/60 focus:border-court-bright";

// value 는 한글 canonical(제출·저장용), 표시는 로케일별
const LESSON_TIMES: { value: string; en: string }[] = [
  { value: "토요일 13–16시", en: "Saturday 1–4 PM" },
  { value: "토요일 16–19시", en: "Saturday 4–7 PM" },
];

const EXPERIENCE: { value: string; en: string }[] = [
  { value: "6개월 미만", en: "Less than 6 months" },
  { value: "6개월 ~ 1년", en: "6 months – 1 year" },
  { value: "1년 ~ 3년", en: "1 – 3 years" },
  { value: "3년 ~ 5년", en: "3 – 5 years" },
  { value: "5년 ~ 10년", en: "5 – 10 years" },
  { value: "10년 이상", en: "10+ years" },
];

const ACHIEVEMENTS: { value: string; en: string }[] = [
  { value: "없음", en: "None" },
  { value: "지역 대회 / 테니스 타운 - 본선", en: "Regional / Tennis Town - Main draw" },
  { value: "지역 대회 / 테니스 타운 - 입상", en: "Regional / Tennis Town - Placed" },
  {
    value: "전국 신인부, 브론즈 (남성) / 전국 개나리부 (여성) - 본선",
    en: "National Rookie/Bronze (M) / Gaenari (W) - Main draw",
  },
  {
    value: "전국 신인부, 브론즈 (남성) / 전국 개나리부 (여성) - 입상",
    en: "National Rookie/Bronze (M) / Gaenari (W) - Placed",
  },
  {
    value: "전국 신인부, 브론즈 (남성) / 전국 개나리부 (여성) - 우승",
    en: "National Rookie/Bronze (M) / Gaenari (W) - Champion",
  },
  {
    value: "전국 오픈부 (남성) / 전국 국화부 (여성) - 본선",
    en: "National Open (M) / Gukhwa (W) - Main draw",
  },
  {
    value: "전국 오픈부 (남성) / 전국 국화부 (여성) - 입상",
    en: "National Open (M) / Gukhwa (W) - Placed",
  },
  {
    value: "전국 오픈부 (남성) / 전국 국화부 (여성) - 우승",
    en: "National Open (M) / Gukhwa (W) - Champion",
  },
];

const GENDER: { value: string; en: string }[] = [
  { value: "남성", en: "Male" },
  { value: "여성", en: "Female" },
];

const VIDEO_CONSENT_OPTIONS: { value: string; en: string }[] = [
  { value: "동의합니다", en: "I agree" },
  { value: "동의하지 않습니다", en: "I do not agree" },
];

const VIDEO_CONSENT_TEXT_KO = `본 아카데미에서는 트레이닝 과정의 기록 및 홍보 자료 제작을 위하여 수업 중 사진 및 영상 촬영이 진행될 수 있습니다.
촬영은 주로 코치 및 프로그램 진행 모습을 중심으로 이루어지며, 이 과정에서 참가자의 신체 일부 또는 운동 장면이 부수적으로 포함될 수 있습니다.
다만, 특정 참가자를 대상으로 한 근접 촬영 또는 집중 촬영이 필요한 경우에는 반드시 사전에 별도의 동의를 구한 후 촬영을 진행합니다.
촬영된 자료는 아카데미 홍보 및 마케팅(홈페이지, SNS, 온·오프라인 광고, 유료 광고 집행, 인쇄물 등)에 활용될 수 있습니다.
참가자는 본 신청서를 통해 위 내용을 충분히 안내받고 이에 동의합니다.
촬영을 원하지 않는 경우 사전 요청을 통해 촬영 대상에서 제외될 수 있습니다.`;

const VIDEO_CONSENT_TEXT_EN = `During training, the academy may take photos and videos to document sessions and produce promotional materials.
Filming focuses mainly on coaches and program activities, and a participant's body or movements may be incidentally included.
However, if close-up or focused filming of a specific participant is needed, we will always obtain separate prior consent before filming.
The footage may be used for the academy's promotion and marketing (website, social media, online/offline ads, paid advertising, printed materials, etc.).
By submitting this form, the participant confirms they have been fully informed of the above and consent to it.
If you do not wish to be filmed, you may request in advance to be excluded.`;

export function AdultApplicationForm() {
  const ko = useLocale() === "ko";
  const [state, action, pending] = useActionState<AdultApplyState, FormData>(
    submitAdultApplication,
    {},
  );
  const [agreed, setAgreed] = useState(false);

  if (state.ok) {
    return (
      <div className="rounded-2xl border border-lime/40 bg-lime/5 p-10 text-center">
        <p className="font-display text-2xl font-bold text-lime">
          {ko ? "신청이 접수되었습니다" : "Your application has been received"}
        </p>
        <p className="mt-2 text-sm text-muted">
          {ko ? "확인 후 안내드리겠습니다. 감사합니다." : "We'll review it and get back to you. Thank you."}
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-6 rounded-2xl border border-line bg-card p-7">
      <Field label={ko ? "이름" : "Name"} required>
        <input name="name" required placeholder={ko ? "실명" : "Full name"} className={FIELD} />
      </Field>

      <Field label={ko ? "연락처" : "Phone"} required>
        <input
          name="phone"
          type="tel"
          required
          placeholder="010-0000-0000"
          className={FIELD}
        />
      </Field>

      <Field label={ko ? "성별" : "Gender"} required>
        <div className="flex gap-5 text-sm text-ink">
          {GENDER.map((g) => (
            <label key={g.value} className="flex items-center gap-2">
              <input type="radio" name="gender" value={g.value} required /> {ko ? g.value : g.en}
            </label>
          ))}
        </div>
      </Field>

      <Field label={ko ? "희망 수업 시간 (복수 선택 가능)" : "Preferred class times (multiple allowed)"} required>
        <div className="flex flex-col gap-2 text-sm text-ink">
          {LESSON_TIMES.map((t) => (
            <label key={t.value} className="flex items-center gap-2">
              <input type="checkbox" name="times" value={t.value} /> {ko ? t.value : t.en}
            </label>
          ))}
        </div>
      </Field>

      <Field label={ko ? "현재 소속 클럽 / 협회" : "Current club / association"} required>
        <input
          name="club"
          required
          placeholder={ko ? "없으면 '없음' 입력" : "Enter 'None' if not applicable"}
          className={FIELD}
        />
      </Field>

      <Field label={ko ? "테니스 구력" : "Years playing tennis"} required>
        <select name="experience" required defaultValue="" className={FIELD}>
          <option value="" disabled>
            {ko ? "선택" : "Select"}
          </option>
          {EXPERIENCE.map((e) => (
            <option key={e.value} value={e.value}>
              {ko ? e.value : e.en}
            </option>
          ))}
        </select>
      </Field>

      <Field label={ko ? "대회 최고 성적" : "Best tournament result"} required>
        <select name="achievement" required defaultValue="" className={FIELD}>
          <option value="" disabled>
            {ko ? "선택" : "Select"}
          </option>
          {ACHIEVEMENTS.map((a) => (
            <option key={a.value} value={a.value}>
              {ko ? a.value : a.en}
            </option>
          ))}
        </select>
      </Field>

      <Field label={ko ? "보완하고 싶은 부분" : "What you'd like to improve"} required>
        <textarea
          name="improve"
          rows={3}
          required
          placeholder={ko ? "개선하고 싶은 점을 적어주세요" : "Tell us what you'd like to improve"}
          className={FIELD}
        />
      </Field>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">
          {ko
            ? "트레이닝 중 촬영(코치 중심 촬영, 참가자는 일부 장면에 포함될 수 있음) 및 홍보 활용에 동의합니다."
            : "I consent to filming during training (focused on coaches; participants may appear in some scenes) and its use for promotion."}
          <span className="ml-0.5 text-danger">*</span>
        </label>
        <p className="mb-3 whitespace-pre-line rounded-lg border border-line bg-base/50 p-3 text-xs leading-relaxed text-muted">
          {ko ? VIDEO_CONSENT_TEXT_KO : VIDEO_CONSENT_TEXT_EN}
        </p>
        <div className="flex gap-5 text-sm text-ink">
          {VIDEO_CONSENT_OPTIONS.map((v) => (
            <label key={v.value} className="flex items-center gap-2">
              <input type="radio" name="videoConsent" value={v.value} required /> {ko ? v.value : v.en}
            </label>
          ))}
        </div>
      </div>

      <label className="flex items-start gap-2 text-sm text-muted">
        <input
          type="checkbox"
          name="privacyConsent"
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

      {state.error ? (
        <p className="rounded-lg border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger">
          {state.error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending || !agreed}
        className="inline-flex items-center justify-center rounded-full bg-lime px-8 py-3 text-sm font-semibold text-white transition hover:brightness-105 disabled:opacity-60"
      >
        {pending ? (ko ? "제출 중..." : "Submitting...") : ko ? "신청서 제출" : "Submit Application"}
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
