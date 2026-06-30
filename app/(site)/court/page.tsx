import { redirect } from "next/navigation";
import { Section, SectionHeading } from "@/components/ui";
import { createClient } from "@/lib/supabase/server";
import { CourtBooking } from "@/components/payments/CourtBooking";

export const metadata = { title: "동호인 코트 예약 | GCM Tennis Academy" };

export default async function CourtPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login?next=/court");

  return (
    <div className="pt-16">
      <Section>
        <SectionHeading
          eyebrow="Club Court"
          title="동호인 코트 예약"
          lead="원하는 날짜·시간을 선택하고 이용료를 결제하면 예약이 접수됩니다."
        />
        <div className="mt-10 max-w-xl">
          <CourtBooking />
        </div>
      </Section>
    </div>
  );
}
