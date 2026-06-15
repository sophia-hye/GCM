import { team, teamLead, teamProcess } from "@/lib/site-data";
import { Section, SectionHeading } from "@/components/ui";
import { CoachCard } from "@/components/CoachCard";

export function Team() {
  return (
    <Section id="team">
      <SectionHeading eyebrow="Team" title="코치진 소개" lead={teamLead} />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member) => (
          <CoachCard key={member.name} member={member} />
        ))}
      </div>

      {/* 선수 개발 프로세스 */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {teamProcess.map((p, i) => (
          <div key={p.step} className="rounded-2xl border border-line bg-card/40 p-6">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-court text-xs font-bold text-ink">
                {i + 1}
              </span>
              <span className="font-display text-base font-bold uppercase tracking-wide">
                {p.step}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
