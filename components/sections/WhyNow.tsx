import { Section, SectionHeading } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { getDict } from "@/lib/site-content";

export async function WhyNow() {
  const { whoWeAre } = getDict(await getLocale());
  return (
    <Section id="values" tone="muted">
      <SectionHeading eyebrow="Who we are" title={whoWeAre.title} lead={whoWeAre.lead} />
      <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {whoWeAre.pillars.map((p, i) => (
          <div key={p.en} className="border-t border-line pt-6">
            <span className="font-display text-sm font-semibold tabular-nums text-muted">
              0{i + 1}
            </span>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-court">
              {p.en}
            </p>
            <h3 className="mt-2 text-lg font-bold">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
