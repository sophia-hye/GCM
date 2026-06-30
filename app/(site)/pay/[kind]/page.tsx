import { redirect } from "next/navigation";
import { Section, SectionHeading } from "@/components/ui";
import { createClient } from "@/lib/supabase/server";
import { PAYMENT_CONFIG, isPaymentKind } from "@/lib/payments/config";
import { TossCheckout } from "@/components/payments/TossCheckout";

export const metadata = { title: "결제 | GCM" };

export default async function PayPage({
  params,
}: {
  params: Promise<{ kind: string }>;
}) {
  const { kind } = await params;
  if (!isPaymentKind(kind)) redirect("/");
  // 코트는 시간대별 금액이라 전용 예약 페이지에서 처리
  if (kind === "court") redirect("/court");

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect(`/login?next=/pay/${kind}`);

  const cfg = PAYMENT_CONFIG[kind];

  return (
    <div className="pt-16">
      <Section>
        <SectionHeading
          eyebrow="Payment"
          title={cfg.label}
          lead={`결제 금액 ${(cfg.amount ?? 0).toLocaleString("ko-KR")}원`}
        />
        <div className="mt-10 max-w-xl">
          <TossCheckout kind={kind} />
        </div>
      </Section>
    </div>
  );
}
