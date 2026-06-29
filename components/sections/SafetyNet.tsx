import { Section, SectionHeading } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { getDict, getUI } from "@/lib/site-content";

export async function SafetyNet() {
  const locale = await getLocale();
  const { tracks, processSteps } = getDict(locale);
  const ui = getUI(locale);

  // "프로 OR 대학" → 프로/대학만 포인트 컬러, OR은 기본(블랙)
  const [accBefore, accAfter] = ui.safetyTitleAccent.split(" OR ");

  return (
    <Section id="career" tone="muted">
      <SectionHeading
        eyebrow="Career Pathways"
        title={
          <>
            {ui.safetyTitle}:{" "}
            {accAfter !== undefined ? (
              <>
                <span className="text-court">{accBefore}</span> OR{" "}
                <span className="text-court">{accAfter}</span>
              </>
            ) : (
              <span className="text-court">{ui.safetyTitleAccent}</span>
            )}
          </>
        }
        lead={ui.safetyLead}
      />

      <div className="mt-16 grid gap-x-10 gap-y-12 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="border-t border-line pt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-court">Start</p>
          <h3 className="mt-4 text-2xl font-bold">{tracks.source.title}</h3>
          <p className="mt-1 text-sm text-muted">{tracks.source.note}</p>
        </div>

        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {[tracks.a, tracks.b].map((track) => (
            <div key={track.title} className="rounded-2xl border border-line bg-card p-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-court-bright">
                {track.badge}
              </span>
              <h3 className="mt-3 text-lg font-bold text-ink">{track.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/85">{track.body}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-16 font-accent text-2xl italic leading-snug text-court sm:text-3xl">
        {tracks.quote}
      </p>

      <div className="mt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-court">
          {ui.pathwayLabel}
        </p>
        <div className="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <div key={step.n} className="border-t border-line pt-5">
              <span className="font-display text-sm font-semibold tabular-nums text-muted">
                {step.n}
              </span>
              <h4 className="mt-2 text-base font-bold">{step.title}</h4>
              <p className="mt-1 text-sm text-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
