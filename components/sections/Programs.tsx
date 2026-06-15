import { programs, programsLead } from "@/lib/site-data";
import { Section, SectionHeading, Button } from "@/components/ui";

export function Programs() {
  return (
    <Section id="programs" className="bg-card/30">
      <SectionHeading
        eyebrow="Programmes"
        title="누구를 위한 프로그램인가"
        lead={programsLead}
      />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {programs.map((p) => (
          <div
            key={p.key}
            className="flex flex-col rounded-2xl border border-line bg-card p-7 transition-colors hover:border-court-bright"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-display text-sm font-bold text-court-bright">
                {p.no}
              </span>
              <span className="h-1 w-10 rounded-full bg-court-gradient" />
            </div>

            <h3 className="mt-5 font-display text-2xl font-extrabold">{p.key}</h3>
            <p className="mt-1 text-sm font-semibold text-lime">{p.target}</p>
            <p className="mt-2 inline-block rounded-md bg-court/15 px-2 py-1 text-xs text-court-bright">
              {p.duration}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{p.desc}</p>

            <ul className="mt-5 space-y-2 text-sm text-ink/90">
              {p.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="text-lime">·</span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-7 pt-2">
              <Button href="/consultation" variant="outline" className="w-full px-5 py-2.5">
                상담 신청 →
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
