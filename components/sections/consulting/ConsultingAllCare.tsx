import Link from "next/link";
import type { ConsultingExtra } from "@/lib/consulting-content";
import { Section, SectionHeading } from "@/components/ui";
import { Icon } from "@/components/sections/consulting/Icon";

/** "가장 이상적인 올케어(All-Care) 시스템" — 6개 기능 그리드 (마지막 카드 강조) */
export function ConsultingAllCare({
  data,
}: {
  data: ConsultingExtra["allCare"];
}) {
  return (
    <Section id="consulting-allcare">
      <SectionHeading eyebrow="All-Care" title={data.title} lead={data.lead} center nowrap />

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.items.map((item) => {
          const highlight = Boolean(item.cta);
          return (
            <article
              key={item.title}
              className={`flex flex-col rounded-2xl border p-7 ${
                highlight
                  ? "border-transparent bg-ink text-white"
                  : "border-line bg-card/30"
              }`}
            >
              <span
                className={highlight ? "text-court-bright" : "text-court"}
              >
                <Icon name={item.icon} className="h-7 w-7" />
              </span>
              <h3
                className={`mt-4 font-display text-lg font-bold ${
                  highlight ? "text-white" : "text-ink"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  highlight ? "text-white/70" : "text-muted"
                }`}
              >
                {item.body}
              </p>
              {item.cta ? (
                <Link
                  href="#consultation"
                  className="mt-5 inline-flex w-fit items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
                >
                  {item.cta}
                </Link>
              ) : null}
            </article>
          );
        })}
      </div>
    </Section>
  );
}
