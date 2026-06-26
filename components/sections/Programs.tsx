import { programs, programsLead } from "@/lib/site-data";
import { Section, SectionHeading, Button } from "@/components/ui";

export function Programs() {
  return (
    <Section id="programs">
      <SectionHeading
        eyebrow="Programmes"
        title="누구를 위한 프로그램인가"
        lead={programsLead}
      />

      <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-3">
        {programs.map((p) => (
          <div key={p.key} className="flex flex-col border-t border-line pt-8">
            <span className="font-display text-sm font-semibold tabular-nums text-muted">
              {p.no}
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold">{p.key}</h3>
            <p className="mt-1 text-sm font-semibold text-court">{p.target}</p>
            <p className="mt-1 text-xs text-muted">{p.duration}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{p.desc}</p>

            <ul className="mt-5 space-y-2 text-sm text-ink/90">
              {p.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="text-court">·</span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-7">
              <Button href="/consulting" variant="link">
                상담 신청
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
