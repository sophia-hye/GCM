import { whoWeAre } from "@/lib/site-data";
import { Section, SectionHeading } from "@/components/ui";

export function WhyNow() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="Who we are"
        title={whoWeAre.title}
        lead={whoWeAre.lead}
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {whoWeAre.pillars.map((p) => (
          <div key={p.en} className="rounded-2xl border border-line bg-card p-7">
            <p className="font-display text-sm font-bold uppercase tracking-widest text-court-bright">
              {p.en}
            </p>
            <h3 className="mt-2 text-lg font-bold">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
