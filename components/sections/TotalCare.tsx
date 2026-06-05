import { totalCare } from "@/lib/site-data";
import { Section, SectionHeading } from "@/components/ui";

export function TotalCare() {
  return (
    <Section className="bg-card/30">
      <SectionHeading
        eyebrow="Comprehensive Management"
        title="Total Care System: 테니스 그 이상의 관리"
        lead="기술부터 멘탈, 학업, 글로벌 매너, 운영까지 — 선수의 모든 것을 관리합니다."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {totalCare.map((care, i) => (
          <div
            key={care.name}
            className={`rounded-2xl border border-line bg-card p-7 ${
              i === 2 ? "lg:border-lime/40" : ""
            }`}
          >
            <div className="h-1 w-10 rounded-full bg-court-gradient" />
            <h3 className="mt-4 font-display text-xl font-bold">{care.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{care.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
