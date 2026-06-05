import { whyNow } from "@/lib/site-data";
import { Section, SectionHeading } from "@/components/ui";

export function WhyNow() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="Reality Check"
        title={whyNow.title}
        lead={whyNow.lead}
      />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {whyNow.points.map((point, i) => (
          <div
            key={point.title}
            className="rounded-2xl border border-line bg-card p-7"
          >
            <span className="font-display text-sm font-bold text-court-bright">
              0{i + 1}
            </span>
            <h3 className="mt-3 text-lg font-bold">{point.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {point.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
