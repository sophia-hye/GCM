"use server";

import { randomUUID } from "crypto";
import { createClient } from "@/lib/supabase/server";
import { PAYMENT_CONFIG, resolveAmount, type PaymentKind } from "@/lib/payments/config";

export type CreatePaymentResult =
  | { ok: true; orderId: string; amount: number; orderName: string; customerName: string }
  | { ok: false; error: string };

/**
 * 주문 생성 — 금액은 서버(PAYMENT_CONFIG)가 결정한다.
 * 로그인 필요. gcm_payments(ready) 행을 만들고 결제에 필요한 값만 반환.
 */
export async function createPayment(
  kind: PaymentKind,
  meta: Record<string, unknown> = {},
): Promise<CreatePaymentResult> {
  const cfg = PAYMENT_CONFIG[kind];
  if (!cfg) return { ok: false, error: "알 수 없는 결제 종류입니다." };

  // 금액은 서버가 결정 (court 는 날짜/시간 → 운영시간/주야간 기준)
  const amount = resolveAmount(kind, meta);
  if (!amount) return { ok: false, error: "예약 시간 또는 금액이 올바르지 않습니다." };

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { ok: false, error: "로그인이 필요합니다." };

  const { data: profile } = await supabase
    .from("gcm_profiles")
    .select("name")
    .eq("id", user.id)
    .maybeSingle();
  const customerName = profile?.name || "회원";

  const orderId = `gcm_${kind}_${randomUUID().replace(/-/g, "")}`.slice(0, 64);

  const { error } = await supabase.from("gcm_payments").insert({
    user_id: user.id,
    kind,
    amount,
    order_id: orderId,
    order_name: cfg.orderName,
    status: "ready",
    meta,
  });
  if (error) return { ok: false, error: "주문 생성에 실패했습니다." };

  return { ok: true, orderId, amount, orderName: cfg.orderName, customerName };
}
