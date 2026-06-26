import { founding } from "@/lib/site-data";
import { Section, SectionHeading } from "@/components/ui";

export function AboutStory() {
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
