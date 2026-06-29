import { Section, SectionHeading } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { getDict } from "@/lib/site-content";

export async function ConsultingIntro() {
  const { consulting } = getDict(await getLocale());
  return (
    <Section id="consulting" lines>
      <SectionHeading eyebrow="Consulting" title={consulting.title} lead={consulting.lead} />
      <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-3">
        {consulting.services.map((s, i) => (
          <div key={s.title} className="border-t border-line pt-6">
            <span className="font-display text-sm font-semibold tabular-nums text-muted">
              0{i + 1}
            </span>
            <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
