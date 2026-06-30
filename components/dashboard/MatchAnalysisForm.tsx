"use client";

import { useActionState, useRef, useEffect } from "react";
import { submitMatchAnalysis, type AnalysisState } from "@/app/actions/analysis";

const FIELD =
  "w-full rounded-lg border border-line bg-base px-3 py-2 text-sm outline-none focus:border-court-bright";

const PROMPTS: { name: string; label: string; placeholder: string }[] = [
  { name: "better_than_last", label: "전 시합보다 잘됐던 부분", placeholder: "예) 첫 서브 성공률, 침착함…" },
  { name: "improved_than_last", label: "전 시합보다 좋아진 부분", placeholder: "예) 백핸드 안정감, 풋워크…" },
  { name: "worse_than_last", label: "전 시합보다 안됐던 부분", placeholder: "예) 리턴 범실, 체력 저하…" },
  { name: "needed", label: "필요한 부분", placeholder: "지금 가장 보완이 필요한 점" },
  { name: "needed_practice", label: "필요한 연습", placeholder: "안됐던/필요한 부분에 맞는 연습 계획" },
];

export function MatchAnalysisForm() {
  const [state, formAction, pending] = useActionState<AnalysisState, FormData>(
    submitMatchAnalysis,
    {},
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.ok) formRef.current?.reset();
  }, [state.ok]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="space-y-5 rounded-2xl border border-line bg-card p-6"
    >
      <h2 className="font-display text-lg font-bold">경기 자기분석 작성</h2>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm text-muted">
          경기 날짜 *
          <input type="date" name="match_date" required className={FIELD} />
        </label>
        <label className="flex flex-col gap-1 text-sm text-muted">
          상대 / 대회 (선택)
          <input type="text" name="opponent" placeholder="예) ○○오픈 16강 / 김○○" className={FIELD} />
        </label>
      </div>

      {PROMPTS.map((p) => (
        <label key={p.name} className="flex flex-col gap-1 text-sm text-muted">
          {p.label}
          <textarea name={p.name} rows={2} placeholder={p.placeholder} className={FIELD} />
        </label>
      ))}

      {state.error ? (
        <p className="rounded-lg border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger">
          {state.error}
        </p>
      ) : null}
      {state.ok ? (
        <p className="rounded-lg border border-lime/40 bg-lime/10 px-3 py-2 text-sm text-lime">
          제출되었습니다. 코치가 확인 후 피드백을 드립니다.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center rounded-full bg-court px-7 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {pending ? "제출 중..." : "분석 제출"}
      </button>
    </form>
  );
}
