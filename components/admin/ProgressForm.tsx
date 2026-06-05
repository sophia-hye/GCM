"use client";

import { useActionState } from "react";
import { upsertProgress, type AdminState } from "@/app/admin/actions";

type Initial = {
  stage?: string;
  track?: string;
  current_utr?: string | null;
  target_utr?: string | null;
  note?: string | null;
};

const FIELD =
  "w-full rounded-lg border border-line bg-base px-3 py-2.5 text-sm outline-none focus:border-court-bright";

export function ProgressForm({
  userId,
  initial,
}: {
  userId: string;
  initial: Initial;
}) {
  const [state, action, pending] = useActionState<AdminState, FormData>(
    upsertProgress,
    {},
  );

  return (
    <form action={action} className="rounded-2xl border border-line bg-card p-6">
      <h2 className="font-display text-lg font-bold">발달/진로 단계 설정</h2>
      <input type="hidden" name="user_id" value={userId} />

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <label className="text-sm">
          <span className="mb-1.5 block text-xs font-semibold text-muted">발달 단계</span>
          <select name="stage" defaultValue={initial.stage ?? "foundation"} className={FIELD}>
            <option value="foundation">FOUNDATION (기본기)</option>
            <option value="development">DEVELOPMENT (발전)</option>
            <option value="junior_elite">JUNIOR ELITE (실전)</option>
            <option value="professional">PROFESSIONAL (프로)</option>
          </select>
        </label>

        <label className="text-sm">
          <span className="mb-1.5 block text-xs font-semibold text-muted">진로 트랙</span>
          <select name="track" defaultValue={initial.track ?? "undecided"} className={FIELD}>
            <option value="undecided">미정</option>
            <option value="professional">프로 트랙</option>
            <option value="college">대학 트랙</option>
          </select>
        </label>

        <label className="text-sm">
          <span className="mb-1.5 block text-xs font-semibold text-muted">현재 UTR</span>
          <input name="current_utr" defaultValue={initial.current_utr ?? ""} placeholder="예: 10.5" className={FIELD} />
        </label>

        <label className="text-sm">
          <span className="mb-1.5 block text-xs font-semibold text-muted">목표 UTR</span>
          <input name="target_utr" defaultValue={initial.target_utr ?? ""} placeholder="예: 13.0+" className={FIELD} />
        </label>
      </div>

      <label className="mt-3 block text-sm">
        <span className="mb-1.5 block text-xs font-semibold text-muted">코치 메모</span>
        <textarea name="note" rows={3} defaultValue={initial.note ?? ""} className={FIELD} />
      </label>

      {state.error ? (
        <p className="mt-3 rounded-lg border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger">
          {state.error}
        </p>
      ) : null}
      {state.ok ? (
        <p className="mt-3 rounded-lg border border-lime/40 bg-lime/5 px-3 py-2 text-sm text-lime">
          저장되었습니다.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="mt-4 rounded-full bg-lime px-6 py-2.5 text-sm font-semibold text-[#08111f] disabled:opacity-60"
      >
        {pending ? "저장 중..." : "저장"}
      </button>
    </form>
  );
}
