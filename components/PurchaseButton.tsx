"use client";

import Link from "next/link";
import { useState } from "react";
import { formatPrice } from "@/lib/programs";

/**
 * 결제(구매) CTA — 온라인 결제(PG) 연동 대비 시임(seam).
 * 현재는 PG 미연동 상태로, 클릭 시 상담 안내를 노출한다.
 * 추후 이 버튼의 onClick 에서 결제 세션 생성(예: Toss Payments) 을 호출하도록 교체하면 된다.
 */
export function PurchaseButton({
  price,
  ko = true,
}: {
  programId: string;
  price: number | null;
  ko?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full rounded-full bg-court px-8 py-4 text-center font-display text-base font-bold text-white transition hover:bg-court-deep sm:w-auto"
      >
        {ko ? `구매하기 · ${formatPrice(price, ko)}` : `Buy · ${formatPrice(price, ko)}`}
      </button>

      {open ? (
        <div className="mt-4 rounded-2xl border border-court/25 bg-court/5 p-5 text-sm leading-relaxed text-ink/85">
          <p className="font-semibold text-court-bright">
            {ko ? "온라인 결제는 준비 중입니다." : "Online payment is coming soon."}
          </p>
          <p className="mt-1.5">
            {ko
              ? "지금은 상담을 통해 등록을 도와드립니다. 아래로 문의해 주세요."
              : "For now we help you enroll via consultation. Please reach out below."}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/consulting"
              className="rounded-full bg-court px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-court-deep"
            >
              {ko ? "상담 신청 →" : "Request consultation →"}
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-line px-6 py-2.5 text-sm font-semibold text-ink transition hover:border-court-bright"
            >
              {ko ? "문의하기" : "Contact"}
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
