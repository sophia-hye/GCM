import { Section, SectionHeading, Button } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { getDict, getUI } from "@/lib/site-content";

export async function Recreational() {
  const locale = await getLocale();
  const { recreational } = getDict(locale);
  const ui = getUI(locale);

  return (
    <Section id="recreational">
      <SectionHeading
        eyebrow="Kids & Amateur Club"
        title={ui.recreationalTitle}
        lead={recreational.lead}
      />
      <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2">
        {recreational.classes.map((c) => (
          <div key={c.key} className="border-t border-line pt-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-court">
              {c.key}
            </span>
            <div className="mt-3 flex items-baseline justify-between gap-3">
              <h3 className="font-display text-2xl font-bold">{c.title}</h3>
              <span className="text-sm text-muted">{c.age}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{c.desc}</p>
            <ul className="mt-5 space-y-2 text-sm text-ink/90">
              {c.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="text-court">·</span>
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <Button href={c.key === "ADULT" ? "/apply/adult" : "/contact"} variant="link">
                {ui.classApply}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
