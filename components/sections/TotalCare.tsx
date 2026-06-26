import { totalCare } from "@/lib/site-data";
import { Section, SectionHeading } from "@/components/ui";

export function TotalCare() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Comprehensive Management"
        title="Total Care System: 테니스 그 이상의 관리"
        lead="기술부터 멘탈, 학업, 글로벌 매너, 운영까지 — 선수의 모든 것을 관리합니다."
      />
      <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {totalCare.map((care, i) => (
          <div key={care.name} className="border-t border-line pt-6">
            <span className="font-display text-sm font-semibold tabular-nums text-muted">
              0{i + 1}
            </span>
            <h3 className="mt-4 font-display text-xl font-bold">{care.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{care.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
