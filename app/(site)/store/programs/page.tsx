import { pageMetadata } from "@/lib/page-metadata";
import { Section, SectionHeading } from "@/components/ui";
import { ComingSoon } from "@/components/sections/ComingSoon";
import { ProgramCard } from "@/components/ProgramCard";
import { createClient } from "@/lib/supabase/server";
import { getLocale } from "@/lib/i18n";
import type { Program } from "@/lib/programs";

export const metadata = pageMetadata({
  title: "Education Program | GCM 테니스 아카데미",
  description: "GCM이 설계한 교육 프로그램. 목적과 수준에 맞춘 커리큘럼을 확인하고 신청하세요.",
  path: "/store/programs",
});

export default async function StoreProgramsPage() {
  const locale = await getLocale();
  const ko = locale === "ko";

  const supabase = await createClient();
  const { data } = await supabase
    .from("gcm_programs")
    .select("*")
    .eq("published", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  const programs = (data ?? []) as Program[];

  if (programs.length === 0) {
    return (
      <div className="pt-16">
        <ComingSoon
          eyebrow="Store"
          title="Education Program"
          desc="교육 프로그램을 준비하고 있습니다. 곧 신청하실 수 있도록 열어드리겠습니다."
        />
      </div>
    );
  }

  return (
    <div className="pt-16">
      <Section>
        <SectionHeading
          eyebrow="Store"
          title="Education Program"
          lead={ko ? "목적과 수준에 맞춘 GCM의 교육 프로그램." : "GCM education programs tailored to your goals and level."}
          wideLead
        />
        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <ProgramCard key={p.id} program={p} ko={ko} />
          ))}
        </div>
      </Section>
    </div>
  );
}
