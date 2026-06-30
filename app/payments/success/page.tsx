import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { isAdminConfigured } from "@/lib/supabase/env";
import { confirmTossPayment } from "@/lib/payments/toss";

export const metadata = { title: "결제 완료 | GCM" };

type SP = { paymentKey?: string; orderId?: string; amount?: string };

/** 토스 successUrl 콜백 — 서버에서 금액 대조 후 승인 처리 */
export default async function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: Promise<SP>;
}) {
  const { paymentKey, orderId, amount } = await searchParams;

  const fail = (msg: string) => (
    <Shell ok={false} title="결제 확인 실패" message={msg} />
  );

  if (!paymentKey || !orderId || !amount) return fail("결제 정보가 올바르지 않습니다.");

  // 주문 조회 (RLS 우회 위해 admin 클라이언트, 없으면 일반 클라이언트)
  const db = isAdminConfigured() ? createAdminClient() : await createClient();
  const { data: order } = await db
    .from("gcm_payments")
    .select("id, amount, status, kind")
    .eq("order_id", orderId)
    .maybeSingle();

  if (!order) return fail("주문을 찾을 수 없습니다.");
  if (order.status === "paid") return <Shell ok title="이미 결제 완료된 주문입니다." />;

  // 금액 위변조 검증
  if (Number(amount) !== order.amount) {
    await db.from("gcm_payments").update({ status: "failed" }).eq("order_id", orderId);
    return fail("결제 금액이 일치하지 않습니다.");
  }

  const result = await confirmTossPayment({
    paymentKey,
    orderId,
    amount: Number(amount),
  });

  if (!result.ok) {
    await db.from("gcm_payments").update({ status: "failed" }).eq("order_id", orderId);
    return fail(result.message);
  }

  await db
    .from("gcm_payments")
    .update({
      status: "paid",
      payment_key: paymentKey,
      method: result.method,
      paid_at: result.approvedAt ?? new Date().toISOString(),
    })
    .eq("order_id", orderId);

  return <Shell ok title="결제가 완료되었습니다" message="확인 후 담당자가 연락드리겠습니다. 감사합니다." />;
}

function Shell({ ok, title, message }: { ok: boolean; title: string; message?: string }) {
  return (
    <main className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 text-center">
      <div
        className={`rounded-2xl border p-10 ${
          ok ? "border-lime/40 bg-lime/5" : "border-danger/40 bg-danger/10"
        }`}
      >
        <p className={`font-display text-2xl font-bold ${ok ? "text-lime" : "text-danger"}`}>
          {title}
        </p>
        {message ? <p className="mt-3 text-sm text-muted">{message}</p> : null}
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-court px-6 py-3 text-sm font-semibold text-white"
        >
          홈으로
        </Link>
      </div>
    </main>
  );
}
