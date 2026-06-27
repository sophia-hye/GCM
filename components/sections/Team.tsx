import { team, teamLead } from "@/lib/site-data";
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
    </Section>
  );
}
