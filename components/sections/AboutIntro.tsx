import { Section, SectionHeading, Button } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { getDict, getUI } from "@/lib/site-content";

/** 홈 인트로: 히어로 직후 GCM이 어떤 곳인지 부드럽게 소개 */
export async function AboutIntro() {
  const locale = await getLocale();
  const { founding } = getDict(locale);
  const ui = getUI(locale);

  return (
    <Section id="about-intro" tone="muted">
      <SectionHeading
        eyebrow={ui.aboutIntroEyebrow}
        title={founding.title}
        lead={founding.lead}
      />
      <div className="mt-10 max-w-3xl space-y-5">
        {founding.paragraphs.slice(0, 2).map((p) => (
          <p key={p} className="text-base leading-relaxed text-muted">
            {p}
          </p>
        ))}
      </div>
      <div className="mt-8">
        <Button href="/about" variant="link">
          {ui.learnMore}
        </Button>
      </div>
    </Section>
  );
}
