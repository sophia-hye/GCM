"use client";

import { useMemo, useState } from "react";
import { slotsForCourtDate, courtPriceForTime, isNight, COURT_PRICE } from "@/lib/payments/config";
import { TossCheckout } from "@/components/payments/TossCheckout";

const FIELD =
  "rounded-lg border border-line bg-base px-3 py-2 text-sm outline-none focus:border-court-bright";

function todayKst(): string {
  return new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 10);
}

export function CourtBooking() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const slots = useMemo(() => slotsForCourtDate(date), [date]);
  const price = time ? courtPriceForTime(time) : null;
  const canProceed = Boolean(date && time);

  if (confirmed && date && time) {
    return (
      <div className="space-y-5">
        <div className="rounded-2xl border border-line bg-card p-5 text-sm">
          <p className="font-semibold">예약 정보</p>
          <p className="mt-1 text-muted">
            {date} · {time}~ · {isNight(time) ? "야간" : "주간"} ·{" "}
            {courtPriceForTime(time).toLocaleString("ko-KR")}원
          </p>
          <button
            type="button"
            onClick={() => setConfirmed(false)}
            className="mt-3 text-xs text-court-bright hover:underline"
          >
            시간 다시 선택
          </button>
        </div>
        <TossCheckout kind="court" meta={{ date, time }} />
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm text-muted">
          날짜
          <input
            type="date"
            min={todayKst()}
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              setTime("");
            }}
            className={FIELD}
          />
        </label>
        <label className="flex flex-col gap-1 text-sm text-muted">
          시간 (1시간)
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            disabled={!date}
            className={FIELD}
          >
            <option value="">{date ? "시간 선택" : "날짜 먼저 선택"}</option>
            {slots.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="text-xs text-muted">
        운영 시간: 평일 09:00–19:00 · 주말 09:00–17:00 · 주간 {COURT_PRICE.day.toLocaleString("ko-KR")}원
        / 야간({COURT_PRICE.nightStartHour}시 이후) {COURT_PRICE.night.toLocaleString("ko-KR")}원
      </p>

      <div className="flex items-center justify-between rounded-2xl border border-line bg-card px-5 py-4">
        <span className="text-sm text-muted">
          이용료 {time ? (isNight(time) ? "(야간)" : "(주간)") : ""}
        </span>
        <span className="font-display text-lg font-bold">
          {price !== null ? `${price.toLocaleString("ko-KR")}원` : "시간 선택 시 표시"}
        </span>
      </div>

      <button
        type="button"
        disabled={!canProceed}
        onClick={() => setConfirmed(true)}
        className="inline-flex w-full items-center justify-center rounded-full bg-court px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        결제 진행
      </button>
    </div>
  );
}
