import { Section, SectionHeading } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { getDict, getUI } from "@/lib/site-content";

export async function Scholarship() {
  const locale = await getLocale();
  const { scholarship } = getDict(locale);
  const ui = getUI(locale);
  const applyLabel = locale === "en" ? "Required for application" : "신청 시 준비 항목";

  return (
    <Section id="scholarship" lines>
      <SectionHeading
        eyebrow="Apply for Scholarship"
        title={scholarship.title}
        lead={scholarship.lead}
      />

      <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-3">
        {scholarship.points.map((p, i) => (
          <div key={p.title} className="border-t border-line pt-6">
            <span className="font-display text-sm font-semibold tabular-nums text-muted">
              0{i + 1}
            </span>
            <h3 className="mt-3 text-lg font-bold">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 border-t border-line pt-6">
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-court">
          {applyLabel}
        </h3>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {scholarship.apply.map((item) => (
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
