import type { ConsultingExtra } from "@/lib/consulting-content";
import { Section, SectionHeading } from "@/components/ui";

/** "아이의 시기에 맞춘 맞춤형 로드맵" — Plan A/B/C 카드 */
export function ConsultingRoadmap({
  data,
}: {
  data: ConsultingExtra["roadmap"];
}) {
  return (
    <Section id="consulting-roadmap" tone="muted">
      <SectionHeading eyebrow="Roadmap" title={data.title} lead={data.lead} center nowrap />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {data.plans.map((p) => (
          <article
            key={p.badge}
            className="flex flex-col rounded-2xl border border-line bg-base/70 p-7"
          >
            <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-court-bright">
              {p.badge}
            </span>
            <h3 className="mt-3 font-display text-xl font-extrabold text-ink">
              {p.title}
            </h3>
            <p className="mt-2 text-xs font-semibold text-court">{p.tags}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{p.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
