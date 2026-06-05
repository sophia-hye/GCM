import { tracks, processSteps } from "@/lib/site-data";
import { Section, SectionHeading, Badge } from "@/components/ui";

export function SafetyNet() {
  return (
    <Section id="career">
      <SectionHeading
        eyebrow="Safety Net"
        title={
          <>
            무너지지 않는 미래: <span className="text-court-gradient">선수 OR 산업 리더</span>
          </>
        }
        lead="미국 대학 진학을 기점으로, 어떤 변수에도 최정상으로 향하는 두 갈래의 길."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="flex flex-col justify-center rounded-2xl border border-line bg-court-deep/40 p-7">
          <p className="font-display text-xs font-bold uppercase tracking-widest text-court-bright">
            Start
          </p>
          <h3 className="mt-2 text-2xl font-bold">{tracks.source.title}</h3>
          <p className="mt-1 text-sm text-muted">{tracks.source.note}</p>
        </div>

        <div className="space-y-4">
          {[tracks.a, tracks.b].map((track) => (
            <div
              key={track.title}
              className="rounded-2xl border border-line bg-card p-7"
            >
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-bold">{track.title}</h3>
                <Badge>{track.badge}</Badge>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{track.body}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-6 rounded-xl border border-lime/30 bg-lime/5 px-6 py-4 text-center font-display text-lg font-bold text-lime">
        &quot;{tracks.quote}&quot;
      </p>

      {/* College 트랙 6단계 프로세스 */}
      <div className="mt-16">
        <p className="font-display text-sm font-bold uppercase tracking-widest text-court-bright">
          College Recruitment · 6단계 프로세스
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <div key={step.n} className="rounded-xl border border-line bg-card p-5">
              <span className="font-display text-2xl font-extrabold text-court/60">
                {step.n}
              </span>
              <h4 className="mt-1 text-base font-bold">{step.title}</h4>
              <p className="mt-1 text-sm text-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
