"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { createCheckin, type CheckinState } from "@/app/dashboard/actions";

const MOODS = [
  { score: 1, emoji: "😣", label: "매우 힘듦" },
  { score: 2, emoji: "😕", label: "지침" },
  { score: 3, emoji: "😐", label: "보통" },
  { score: 4, emoji: "🙂", label: "좋음" },
  { score: 5, emoji: "😄", label: "최상" },
];

export function CheckinForm() {
  const [state, action, pending] = useActionState<CheckinState, FormData>(
    createCheckin,
    {},
  );
  const [mood, setMood] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.ok) {
      formRef.current?.reset();
      setMood(0);
    }
  }, [state.ok]);

  return (
    <form ref={formRef} action={action} className="rounded-2xl border border-line bg-card p-6">
      <h2 className="font-display text-lg font-bold">오늘의 멘탈 체크인</h2>
      <p className="mt-1 text-xs text-muted">오늘 컨디션과 마음 상태를 기록하세요.</p>

      <input type="hidden" name="mood_score" value={mood} />
      <div className="mt-4 flex flex-wrap gap-2">
        {MOODS.map((m) => (
          <button
            key={m.score}
            type="button"
            onClick={() => setMood(m.score)}
            className={`flex flex-col items-center gap-1 rounded-xl border px-4 py-3 transition-colors ${
              mood === m.score
                ? "border-lime bg-lime/10"
                : "border-line hover:border-court-bright"
            }`}
          >
            <span className="text-2xl">{m.emoji}</span>
            <span className="text-xs text-muted">{m.label}</span>
          </button>
        ))}
      </div>

      <textarea
        name="note"
        rows={3}
        placeholder="오늘 훈련/경기/마음에 대한 메모 (선택)"
        className="mt-4 w-full rounded-lg border border-line bg-base px-3 py-2 text-sm outline-none placeholder:text-muted/60 focus:border-court-bright"
      />

      {state.error ? (
        <p className="mt-3 rounded-lg border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger">
          {state.error}
        </p>
      ) : null}
      {state.ok ? (
        <p className="mt-3 rounded-lg border border-lime/40 bg-lime/5 px-3 py-2 text-sm text-lime">
          오늘의 체크인이 기록되었습니다.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending || mood === 0}
        className="mt-4 rounded-full bg-lime px-6 py-2.5 text-sm font-semibold text-[#08111f] disabled:opacity-50"
      >
        {pending ? "기록 중..." : "체크인 기록"}
      </button>
    </form>
  );
}
