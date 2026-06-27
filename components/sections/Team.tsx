import { team, teamLead, teamProcess } from "@/lib/site-data";
import { Section, SectionHeading } from "@/components/ui";
import { CoachCard } from "@/components/CoachCard";

export function Team() {
  return (
    <Section id="team">
      <SectionHeading eyebrow="Team" title="코치진 소개" lead={teamLead} />

      <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member) => (
          <CoachCard key={member.name} member={member} />
        ))}
      </div>

      {/* 선수 개발 프로세스 */}
      <div className="mt-20 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {teamProcess.map((p, i) => (
          <div key={p.step} className="border-t border-line pt-6">
            <span className="font-display text-sm font-semibold tabular-nums text-muted">
              0{i + 1}
            </span>
            <p className="mt-3 font-display text-base font-bold uppercase tracking-wide text-court">
              {p.step}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
