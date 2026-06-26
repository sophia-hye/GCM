import { tracks, processSteps } from "@/lib/site-data";
import { Section, SectionHeading } from "@/components/ui";

export function SafetyNet() {
  return (
    <Section id="career">
      <SectionHeading
        eyebrow="Career Pathways"
        title={
          <>
            두 갈래의 길: <span className="text-court">프로 OR 대학</span>
          </>
        }
        lead="탄탄한 트레이닝을 기점으로, 프로와 대학 두 갈래의 길로 선수를 이끕니다."
      />

      <div className="mt-16 grid gap-x-10 gap-y-12 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="border-t border-line pt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-court">Start</p>
          <h3 className="mt-4 text-2xl font-bold">{tracks.source.title}</h3>
          <p className="mt-1 text-sm text-muted">{tracks.source.note}</p>
        </div>

        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {[tracks.a, tracks.b].map((track) => (
            <div key={track.title} className="border-t border-line pt-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                {track.badge}
              </span>
              <h3 className="mt-3 text-lg font-bold">{track.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{track.body}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-16 font-accent text-2xl italic leading-snug text-court sm:text-3xl">
        {tracks.quote.split(", ").map((part, i) => (
          <span key={part} className="block">
            {i === 0 ? `"${part},` : `${part}"`}
          </span>
        ))}
      </p>

      <div className="mt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-court">
          Player Pathway · 6단계 프로세스
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
