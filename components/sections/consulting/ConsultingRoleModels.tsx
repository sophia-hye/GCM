import type { ConsultingExtra } from "@/lib/consulting-content";
import { Section, SectionHeading } from "@/components/ui";

/** "가능성을 현실로 바꾼 롤모델들" — 2x2 그리드 */
export function ConsultingRoleModels({
  data,
}: {
  data: ConsultingExtra["roleModels"];
}) {
  return (
    <Section id="consulting-rolemodels">
      <SectionHeading eyebrow="Role Models" title={data.title} lead={data.lead} center />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {data.items.map((m) => (
          <article
            key={m.name}
            className="flex gap-5 rounded-2xl border border-line bg-card/30 p-6"
          >
            <span
              aria-hidden
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-court/10 font-display text-lg font-bold text-court-bright"
            >
              {m.name
                .split(" ")
                .map((w) => w[0])
                .join("")
                .slice(0, 2)}
            </span>
            <div>
              <h3 className="font-display text-lg font-bold text-ink">{m.name}</h3>
              <p className="mt-0.5 text-sm font-semibold text-court">{m.school}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{m.body}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
