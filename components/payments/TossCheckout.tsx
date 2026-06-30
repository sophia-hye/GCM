"use client";

import { useEffect, useRef, useState } from "react";
import { loadTossPayments, ANONYMOUS } from "@tosspayments/tosspayments-sdk";
import { TOSS_CLIENT_KEY, type PaymentKind } from "@/lib/payments/config";
import { createPayment } from "@/app/actions/payments";

type Widgets = Awaited<ReturnType<Awaited<ReturnType<typeof loadTossPayments>>["widgets"]>>;

export function TossCheckout({
  kind,
  meta = {},
}: {
  kind: PaymentKind;
  meta?: Record<string, unknown>;
}) {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [paying, setPaying] = useState(false);
  const order = useRef<{ orderId: string; orderName: string; customerName: string } | null>(null);
  const widgetsRef = useRef<Widgets | null>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    (async () => {
      const created = await createPayment(kind, meta);
      if (!created.ok) {
        setError(created.error);
        return;
      }
      order.current = {
        orderId: created.orderId,
        orderName: created.orderName,
        customerName: created.customerName,
      };

      const toss = await loadTossPayments(TOSS_CLIENT_KEY);
      const widgets = toss.widgets({ customerKey: ANONYMOUS });
      widgetsRef.current = widgets;
      await widgets.setAmount({ currency: "KRW", value: created.amount });
      await Promise.all([
        widgets.renderPaymentMethods({ selector: "#toss-payment-methods", variantKey: "DEFAULT" }),
        widgets.renderAgreement({ selector: "#toss-agreement", variantKey: "AGREEMENT" }),
      ]);
      setReady(true);
    })().catch(() => setError("결제 위젯을 불러오지 못했습니다."));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePay = async () => {
    if (!widgetsRef.current || !order.current) return;
    setPaying(true);
    try {
      await widgetsRef.current.requestPayment({
        orderId: order.current.orderId,
        orderName: order.current.orderName,
        customerName: order.current.customerName,
        successUrl: `${window.location.origin}/payments/success`,
        failUrl: `${window.location.origin}/payments/fail`,
      });
    } catch {
      setPaying(false);
    }
  };

  if (error) {
    return (
      <div className="rounded-2xl border border-danger/40 bg-danger/10 p-6 text-sm text-danger">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div id="toss-payment-methods" />
      <div id="toss-agreement" />
      <button
        type="button"
        onClick={handlePay}
        disabled={!ready || paying}
        className="inline-flex w-full items-center justify-center rounded-full bg-lime px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {paying ? "결제 진행 중..." : ready ? "결제하기" : "결제 수단 불러오는 중..."}
      </button>
    </div>
  );
}
