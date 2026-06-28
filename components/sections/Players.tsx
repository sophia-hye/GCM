import { Section, SectionHeading } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { getUI } from "@/lib/site-content";

export async function Players() {
  const ui = getUI(await getLocale());
  return (
    <Section id="players">
      <SectionHeading eyebrow="Our Players" title={ui.playersTitle} lead={ui.playersLead} />
      <div className="mt-12 rounded-2xl border border-dashed border-line p-10 text-center">
        <p className="text-sm text-muted">{ui.playersComing}</p>
      </div>
    </Section>
  );
}
