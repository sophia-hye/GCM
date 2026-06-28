import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { Section, SectionHeading } from "@/components/ui";
import { AdultApplicationForm } from "@/components/AdultApplicationForm";

export const metadata = { title: "성인 아마추어 클래스 신청 | GCM" };

export default async function AdultApplyPage() {
  // 로그인 게이트: 비로그인 시 로그인 페이지로(로그인 후 이 폼으로 복귀)
  if (!isSupabaseConfigured()) {
    redirect("/login?next=/apply/adult");
  }
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect("/login?next=/apply/adult");
  }

  return (
    <div className="pt-16">
      <Section>
        <SectionHeading
          eyebrow="Adult Amateur Class"
          title="성인 아마추어 클래스 신청"
          lead="용인 전술 트레이닝 프로그램(2026 4기) 신청서입니다. 항목을 입력해 주세요."
        />
        <div className="mt-10 max-w-2xl">
          <AdultApplicationForm />
        </div>
      </Section>
    </div>
  );
}
