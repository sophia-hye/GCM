import { curriculum } from "@/lib/site-data";
import { Section, SectionHeading } from "@/components/ui";

export function Curriculum() {
  return (
    <Section id="curriculum">
      <SectionHeading
        eyebrow="Development Model"
        title="4단계 발달 커리큘럼"
        lead="기본기부터 프로까지, 단계별로 설계된 엘리트 육성 로드맵."
      />
      <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-4">
        {curriculum.map((stage, i) => (
          <div key={stage.key} className="border-t border-line pt-6">
            <span className="font-display text-sm font-semibold tabular-nums text-muted">
              0{i + 1}
            </span>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-court">
              {stage.key}
            </p>
            <p className="mt-1 text-lg font-bold">{stage.title}</p>
            <ul className="mt-3 space-y-1.5 text-sm text-muted">
              {stage.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="text-court">·</span>
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
