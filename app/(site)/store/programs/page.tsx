import type { Metadata } from "next";
import { pageMetadata } from "@/lib/page-metadata";
import { Section, SectionHeading, Button } from "@/components/ui";
import { ComingSoon } from "@/components/sections/ComingSoon";
import { ProgramCard } from "@/components/ProgramCard";
import { createClient } from "@/lib/supabase/server";
import { getLocale } from "@/lib/i18n";
import type { Program } from "@/lib/programs";

const PARTNERSHIP = [
  {
    label: "글로벌 협약 기관 단기 프로그램",
    labelEn: "Short-Term Programs at Partner Institutions",
    body: "세계 각국의 파트너십 기관을 통해 회원별 목적(스포츠, 학술, 리더십 등)에 맞춘 맞춤형 단기 과정 연계",
    bodyEn: "Customized short-term courses tailored to each member's goals (sports, academics, leadership, etc.) through partner institutions around the world.",
  },
  {
    label: "대학 진학 및 입학 전형 자문",
    labelEn: "University Admissions Advising",
    body: "해외 명문대 및 글로벌 대학 진학 시 유리한 전공 분야 탐색, 특별 입학 전형 정보 및 장학금 기회 안내",
    bodyEn: "Guidance on advantageous fields of study for admission to prestigious universities abroad, along with special admission pathways and scholarship opportunities.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const ko = (await getLocale()) === "ko";
  return pageMetadata({
    title: ko ? "Education Program | GCM 테니스 아카데미" : "Education Program | GCM Tennis Academy",
    description: ko
      ? "GCM이 설계한 교육 프로그램. 목적과 수준에 맞춘 커리큘럼을 확인하고 신청하세요."
      : "GCM education programs designed for your goals and level. Explore the curriculum and apply.",
    path: "/store/programs",
  });
}

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
        <p className="mt-6 max-w-3xl break-keep text-base leading-relaxed text-ink/80">
          {ko
            ? "한국에서 성장하며 글로벌 역량을 다지고자 하는 회원들이 현지화된 몰입형 경험을 통해 비판적 사고, 글로벌 소통 능력, 그리고 넓은 시야를 갖춘 인재로 거듭날 수 있도록 설계된 GCM의 대표 프로그램들을 안내해 드립니다."
            : "For members who want to grow in Korea while building global competencies, GCM introduces its flagship programs, designed to help them become individuals with critical thinking, global communication skills, and a broad perspective through localized, immersive experiences."}
        </p>

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <ProgramCard key={p.id} program={p} ko={ko} />
          ))}
        </div>

        {/* 협약 교육기관 파트너십 & 상담 안내 */}
        <div className="mt-16 grid gap-6 border-t border-line pt-12 lg:grid-cols-2">
          <div className="rounded-2xl border border-line bg-card/40 p-6 sm:p-8">
            <h3 className="break-keep font-display text-lg font-bold">
              {ko
                ? "🎓 전 세계 협약 교육기관 연계 & 진학 파트너십"
                : "🎓 Global Partner Institution Network & Admissions Partnerships"}
            </h3>
            <p className="mt-3 break-keep text-sm leading-relaxed text-muted">
              {ko
                ? "GCM은 단순히 단기 프로그램에 머무르지 않고, GCM 선수 또는 회원 자녀들의 진로 방향에 맞춰 글로벌 교육 기회를 지속적으로 확장합니다."
                : "GCM goes beyond short-term programs, continuously expanding global education opportunities aligned with the career paths of GCM players and members' children."}
            </p>
            <ul className="mt-4 space-y-3">
              {PARTNERSHIP.map((p) => (
                <li key={p.label} className="flex gap-2 break-keep text-sm leading-relaxed text-ink/85">
                  <span className="mt-0.5 shrink-0 font-semibold text-court">·</span>
                  <span>
                    <b className="font-semibold text-ink">{ko ? p.label : p.labelEn}</b>:{" "}
                    {ko ? p.body : p.bodyEn}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col rounded-2xl border border-court/30 bg-court/5 p-6 sm:p-8">
            <h3 className="break-keep font-display text-lg font-bold text-court-bright">
              {ko ? "💡 상담 및 문의 안내" : "💡 Consultation & Inquiries"}
            </h3>
            <p className="mt-3 break-keep text-sm leading-relaxed text-muted">
              {ko
                ? "개인별 목표와 현재 준비 상황에 적합한 교육 과정을 찾으실 수 있도록 맞춤형 1:1 상담을 지원합니다. 추가적인 상담이나 프로그램 세부 조건이 궁금하시면 언제든 문의해 주세요."
                : "We offer personalized one-on-one consultations to help you find the education program that fits your individual goals and current level of preparation. If you have any further questions about consultations or program details, please feel free to reach out anytime."}
            </p>
            <div className="mt-6">
              <Button href="/consulting" variant="court">
                {ko ? "상담하기" : "Request consultation"}
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
