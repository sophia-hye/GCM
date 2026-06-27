import { Section, SectionHeading } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { getDict } from "@/lib/site-content";

export async function AboutStory() {
  const { founding } = getDict(await getLocale());
  return (
    <Section id="about">
      <SectionHeading eyebrow="About" title={founding.title} lead={founding.lead} />
      <div className="mt-12 max-w-2xl space-y-5">
        {founding.paragraphs.map((p) => (
          <p key={p} className="text-base leading-relaxed text-muted">
            {p}
          </p>
        ))}
      </div>
    </Section>
  );
}
