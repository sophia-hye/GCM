import type { ConsultingExtra } from "@/lib/consulting-content";
import { Section } from "@/components/ui";
import { Icon, type IconKey } from "@/components/sections/consulting/Icon";

/** "선수 그 이상의 삶, 스무 살 이후를 묻다" — 철학 카드 */
export function ConsultingPhilosophy({
  data,
}: {
  data: ConsultingExtra["philosophy"];
}) {
  return (
    <Section id="consulting-philosophy" tone="muted">
      <div className="mx-auto max-w-3xl rounded-3xl border border-line bg-base/60 p-8 sm:p-12">
        <div className="flex justify-center text-court-bright">
          <Icon name="heart" className="h-8 w-8" />
        </div>
        <h2 className="mt-5 text-center font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
          {data.title}
        </h2>

        <div className="mt-8 space-y-5">
          {data.paragraphs.map((p, i) => (
            <p
              key={i}
              className={`leading-relaxed ${i === 0 ? "font-semibold text-ink" : "text-muted"}`}
            >
              {p}
            </p>
          ))}
        </div>

        <div className="mt-8 space-y-4 rounded-2xl border-l-4 border-court bg-card/40 p-6">
          {data.points.map((pt) => (
            <div key={pt.title} className="flex gap-3">
              <span className="mt-0.5 shrink-0 text-court-bright">
                <Icon name={pt.icon as IconKey} className="h-5 w-5" />
              </span>
              <p className="text-sm leading-relaxed text-ink">
                <span className="font-bold">{pt.title}:</span> {pt.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
