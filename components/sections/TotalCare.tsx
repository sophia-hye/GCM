import { Section, SectionHeading } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { getDict, getUI } from "@/lib/site-content";

export async function TotalCare() {
  const locale = await getLocale();
  const { totalCare } = getDict(locale);
  const ui = getUI(locale);

  return (
    <Section lines>
      <SectionHeading
        eyebrow="Comprehensive Management"
        title={ui.totalCareTitle}
        lead={ui.totalCareLead}
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
