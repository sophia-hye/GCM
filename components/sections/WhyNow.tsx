import { Section, SectionHeading } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { getDict } from "@/lib/site-content";
import { getContentMap, cmsText, cmsParas } from "@/lib/cms";

export async function WhyNow() {
  const locale = await getLocale();
  const ko = locale === "ko";
  const { whoWeAre } = getDict(locale);
  const map = await getContentMap();
  const story = cmsParas(map, "whoWeAre.story", whoWeAre.story ?? [], ko);
  return (
    <Section id="values" tone="muted">
      <SectionHeading
        eyebrow="Who we are"
        title={cmsText(map, "whoWeAre.title", whoWeAre.title, ko)}
        lead={cmsText(map, "whoWeAre.lead", whoWeAre.lead, ko)}
      />
      <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {whoWeAre.pillars.map((p, i) => (
          <div key={p.en} className="border-t border-line pt-6">
            <span className="font-display text-sm font-semibold tabular-nums text-muted">
              0{i + 1}
            </span>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-court">
              {p.en}
            </p>
            <h3 className="mt-2 text-lg font-bold">
              {cmsText(map, `whoWeAre.pillar.${i}.title`, p.title, ko)}
            </h3>
            <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted">
              {cmsText(map, `whoWeAre.pillar.${i}.body`, p.body, ko)}
            </p>
          </div>
        ))}
      </div>
      {story.length ? (
        <div className="mt-16 max-w-2xl space-y-5 border-t border-line pt-10">
          {story.map((p) => (
            <p key={p} className="whitespace-pre-line text-base leading-relaxed text-muted">
              {p}
            </p>
          ))}
        </div>
      ) : null}
    </Section>
  );
}
