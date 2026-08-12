import { Section, SectionHeading } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { getDict, getUI } from "@/lib/site-content";
import { getContentMap, cmsText, cmsList } from "@/lib/cms";

export async function Scholarship() {
  const locale = await getLocale();
  const ko = locale === "ko";
  const { scholarship } = getDict(locale);
  const ui = getUI(locale);
  const map = await getContentMap();
  const applyLabel = locale === "en" ? "Required for application" : "신청 시 준비 항목";

  return (
    <Section id="scholarship">
      <SectionHeading
        eyebrow="Apply for Scholarship"
        title={cmsText(map, "section.scholarshipTitle", scholarship.title, ko)}
        lead={cmsText(map, "section.scholarshipLead", scholarship.lead, ko)}
      />

      <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-3">
        {scholarship.points.map((p, i) => (
          <div key={i} className="border-t border-line pt-6">
            <span className="font-display text-sm font-semibold tabular-nums text-muted">
              0{i + 1}
            </span>
            <h3 className="mt-3 text-lg font-bold">
              {cmsText(map, `scholarship.point.${i}.title`, p.title, ko)}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {cmsText(map, `scholarship.point.${i}.body`, p.body, ko)}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 border-t border-line pt-6">
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-court">
          {applyLabel}
        </h3>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {cmsList(map, "scholarship.apply", scholarship.apply, ko).map((item) => (
            <li key={item} className="flex gap-2 text-sm text-ink/90">
              <span className="text-court">·</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
