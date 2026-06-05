import { curriculum } from "@/lib/site-data";
import { Section, SectionHeading } from "@/components/ui";

export function Curriculum() {
  return (
    <Section id="curriculum" className="bg-card/30">
      <SectionHeading
        eyebrow="Development Model"
        title="4단계 발달 커리큘럼"
        lead="기본기부터 프로까지, 단계별로 설계된 엘리트 육성 로드맵."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-4">
        {curriculum.map((stage, i) => (
          <div key={stage.key} className="relative rounded-2xl border border-line bg-card p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-court text-sm font-bold text-ink">
                {i + 1}
              </span>
              {i < curriculum.length - 1 ? (
                <span className="hidden h-px flex-1 bg-gradient-to-r from-court to-transparent md:block" />
              ) : null}
            </div>
            <p className="mt-4 font-display text-sm font-bold uppercase tracking-wide text-court-bright">
              {stage.key}
            </p>
            <p className="text-lg font-bold">{stage.title}</p>
            <ul className="mt-3 space-y-1.5 text-sm text-muted">
              {stage.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="text-lime">·</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
