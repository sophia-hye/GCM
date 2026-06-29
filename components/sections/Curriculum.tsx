import { Section, SectionHeading } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { getDict, getUI } from "@/lib/site-content";

export async function Curriculum() {
  const locale = await getLocale();
  const { developmentSteps } = getDict(locale);
  const ui = getUI(locale);

  return (
    <Section id="curriculum" tone="muted">
      <SectionHeading
        eyebrow="Development System"
        title={ui.curriculumTitle}
        lead={ui.curriculumLead}
      />

      <div className="mt-16 flex max-w-3xl flex-col gap-3">
        {developmentSteps.map((step, i) => (
          <div key={step.n}>
            <div className="flex items-start gap-4 rounded-2xl border border-line bg-card p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-court/15 font-display text-sm font-bold text-court">
                {step.n}
              </span>
              <div>
                <span className="font-display text-lg font-bold uppercase tracking-wide text-ink">
                  {step.en}
                </span>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.ko}</p>
              </div>
            </div>

            {i < developmentSteps.length - 1 ? (
              <div aria-hidden className="flex justify-center py-1 text-court/50">
                ↓
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}
