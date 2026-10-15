import Image from "next/image";
import { Section, SectionHeading, Button } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { getDict, getUI } from "@/lib/site-content";

const CLASS_IMAGES: Record<string, string> = {
  KIDS: "/img/kids-class.png",
  ADULT: "/img/adult-class.png",
};

/** 단일 취미 클래스(키즈/성인) 상세 — /kids, /amateurs 페이지용 */
export async function RecreationalClass({
  classKey,
  eyebrow,
}: {
  classKey: "KIDS" | "ADULT";
  eyebrow: string;
}) {
  const locale = await getLocale();
  const { recreational } = getDict(locale);
  const ui = getUI(locale);
  const c = recreational.classes.find((x) => x.key === classKey);
  if (!c) return null;

  return (
    <Section tone="muted">
      <SectionHeading eyebrow={eyebrow} title={c.title} lead={c.desc} />
      <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
        {CLASS_IMAGES[classKey] ? (
          <Image
            src={CLASS_IMAGES[classKey]}
            alt={c.title}
            width={1536}
            height={1024}
            className="aspect-[3/2] w-full rounded-2xl border border-line object-cover"
          />
        ) : null}
        <div>
          <div className="flex items-baseline justify-between gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-court">
              {c.key}
            </span>
            {c.age ? <span className="text-sm text-muted">{c.age}</span> : null}
          </div>
          <ul className="mt-6 space-y-3 text-base text-ink/90">
            {c.points.map((p) => (
              <li key={p} className="flex gap-2.5">
                <span className="text-court">·</span>
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href={classKey === "ADULT" ? "/apply/adult" : "/contact"} variant="court">
              {ui.classApply}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
