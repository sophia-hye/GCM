import { Section, SectionHeading } from "@/components/ui";
import { CoachCard } from "@/components/CoachCard";
import { getLocale } from "@/lib/i18n";
import { getDict, getUI } from "@/lib/site-content";
import { getContentMap, cmsText } from "@/lib/cms";

export async function Team() {
  const locale = await getLocale();
  const ko = locale === "ko";
  const { team, teamLead } = getDict(locale);
  const ui = getUI(locale);
  const map = await getContentMap();

  const members = team.map((member, i) => ({
    ...member,
    name: cmsText(map, `coach.${i}.name`, member.name, ko),
    role: cmsText(map, `coach.${i}.role`, member.role, ko),
    bio: cmsText(map, `coach.${i}.bio`, member.bio, ko),
  }));

  return (
    <Section id="team">
      <SectionHeading
        eyebrow="Team"
        title={ui.teamTitle}
        lead={cmsText(map, "section.teamLead", teamLead, ko)}
      />

      <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((member, i) => (
          <CoachCard key={i} member={member} bioLabel={ui.coachBio} />
        ))}
      </div>
    </Section>
  );
}
