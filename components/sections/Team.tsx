import { Section, SectionHeading } from "@/components/ui";
import { CoachCard } from "@/components/CoachCard";
import { getLocale } from "@/lib/i18n";
import { getDict, getUI } from "@/lib/site-content";

export async function Team() {
  const locale = await getLocale();
  const { team, teamLead } = getDict(locale);
  const ui = getUI(locale);

  return (
    <Section id="team">
      <SectionHeading eyebrow="Team" title={ui.teamTitle} lead={teamLead} />

      <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member) => (
          <CoachCard key={member.name} member={member} bioLabel={ui.coachBio} />
        ))}
      </div>
    </Section>
  );
}
