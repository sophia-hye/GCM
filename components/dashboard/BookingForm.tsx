"use client";

import { useActionState, useEffect, useRef } from "react";
import { createBooking, type BookingState } from "@/app/dashboard/actions";

export function BookingForm() {
  const [state, action, pending] = useActionState<BookingState, FormData>(
    createBooking,
    {},
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.ok) formRef.current?.reset();
  }, [state.ok]);

  return (
    <form ref={formRef} action={action} className="rounded-2xl border border-line bg-card p-6">
      <h2 className="font-display text-lg font-bold">예약 요청</h2>
      <p className="mt-1 text-xs text-muted">상담·레슨·대회 동행·쇼케이스를 요청하세요.</p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <select
          name="type"
          defaultValue="consulting"
          className="rounded-lg border border-line bg-base px-3 py-2.5 text-sm outline-none focus:border-court-bright"
        >
          <option value="consulting">진로 상담</option>
          <option value="lesson">레슨</option>
          <option value="tournament">대회 동행</option>
          <option value="showcase">쇼케이스</option>
        </select>
        <input
          type="datetime-local"
          name="scheduled_at"
          className="rounded-lg border border-line bg-base px-3 py-2.5 text-sm text-ink outline-none focus:border-court-bright"
        />
        <input
          name="memo"
          placeholder="요청 메모 (선택)"
          className="rounded-lg border border-line bg-base px-3 py-2.5 text-sm outline-none focus:border-court-bright sm:col-span-2"
        />
        <button
          type="submit"
          disabled={pending}
          className="rounded-lg bg-lime px-5 py-2.5 text-sm font-semibold text-[#08111f] disabled:opacity-60 sm:col-span-2"
        >
          {pending ? "요청 중..." : "예약 요청"}
        </button>
      </div>

      {state.error ? (
        <p className="mt-3 rounded-lg border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger">
          {state.error}
        </p>
      ) : null}
      {state.ok ? (
        <p className="mt-3 rounded-lg border border-lime/40 bg-lime/5 px-3 py-2 text-sm text-lime">
          예약 요청이 접수되었습니다.
        </p>
      ) : null}
    </form>
  );
}
