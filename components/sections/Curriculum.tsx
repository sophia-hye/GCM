import { developmentSteps } from "@/lib/site-data";
import { Section, SectionHeading } from "@/components/ui";

export function Curriculum() {
  return (
    <Section id="curriculum">
      <SectionHeading
        eyebrow="Development System"
        title="발달 커리큘럼 · 6단계 시스템"
        lead="진단에서 다음 단계 진입까지, 선수의 성장을 6단계로 설계하고 순환시킵니다."
      />

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {developmentSteps.map((step, i) => (
          <div
            key={step.n}
            className="relative flex flex-col rounded-2xl border border-line bg-card p-6"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-court/15 font-display text-sm font-bold text-court">
                {step.n}
              </span>
              <span className="font-display text-lg font-bold uppercase tracking-wide text-ink">
                {step.en}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">{step.ko}</p>

            {i < developmentSteps.length - 1 ? (
              <span
                aria-hidden
                className="pointer-events-none absolute -right-3 top-1/2 hidden -translate-y-1/2 text-court/50 lg:block"
              >
                →
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}
