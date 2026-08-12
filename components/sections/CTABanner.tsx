import { Section, Button } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { getDict, getUI } from "@/lib/site-content";
import { getContentMap, cmsText } from "@/lib/cms";

export async function CTABanner() {
  const locale = await getLocale();
  const ko = locale === "ko";
  const { faqContact } = getDict(locale);
  const ui = getUI(locale);
  const map = await getContentMap();

  return (
    <Section tone="muted">
      <div className="border-t border-line pt-16 text-center sm:pt-20">
        <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
          {cmsText(map, "section.ctaTitle", faqContact.title, ko)}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
          {cmsText(map, "section.ctaSub", faqContact.sub, ko)}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <Button href="/consulting" variant="court">
            {ui.ctaConsult}
          </Button>
          <Button href="/training" variant="link">
            {ui.ctaPrograms}
          </Button>
        </div>
      </div>
    </Section>
  );
}
