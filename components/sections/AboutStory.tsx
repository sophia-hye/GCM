import { Section, SectionHeading } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { getDict } from "@/lib/site-content";
import { getContentMap, cmsText, cmsParas } from "@/lib/cms";

export async function AboutStory() {
  const locale = await getLocale();
  const ko = locale === "ko";
  const { founding } = getDict(locale);
  const map = await getContentMap();
  const paragraphs = cmsParas(map, "founding.paragraphs", founding.paragraphs, ko);
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title={cmsText(map, "founding.title", founding.title, ko)}
        lead={cmsText(map, "founding.lead", founding.lead, ko)}
      />
      <div className="mt-12 max-w-2xl space-y-5">
        {paragraphs.map((p) => (
          <p key={p} className="whitespace-pre-line text-base leading-relaxed text-muted">
            {p}
          </p>
        ))}
      </div>
    </Section>
  );
}
