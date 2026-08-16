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
    idx: i,
    name: cmsText(map, `coach.${i}.name`, member.name, ko),
    role: cmsText(map, `coach.${i}.role`, member.role, ko),
    bio: cmsText(map, `coach.${i}.bio`, member.bio, ko),
  }));

  const tennis = members.filter((m) => (m as { dept?: string }).dept !== "education");
  const education = members.filter((m) => (m as { dept?: string }).dept === "education");

  const groups = [
    {
      key: "tennis",
      title: ko ? "테니스 코치진" : "Tennis Coaches",
      desc: ko
        ? "기술 · 피지컬 · 멘탈을 함께 지도하는 테니스 전문 코치진."
        : "Tennis specialists who guide technique, physical and mental together.",
      list: tennis,
    },
    {
      key: "education",
      title: ko ? "교육 코치진" : "Education Coaches",
      desc: ko
        ? "진학 · 진로 · 글로벌 매너를 책임지는 교육 전문 멘토진."
        : "Education mentors responsible for admissions, career and global manners.",
      list: education,
    },
  ];

  return (
    <Section id="team">
      <SectionHeading
        eyebrow="Team"
        title={ui.teamTitle}
        lead={cmsText(map, "section.teamLead", teamLead, ko)}
      />

      <div className="mt-16 space-y-16">
        {groups.map((g) => (
          <div key={g.key}>
            <div className="border-t border-line pt-5">
              <h3 className="font-display text-xl font-bold text-court-bright">{g.title}</h3>
              <p className="mt-1.5 text-sm text-muted">{g.desc}</p>
            </div>

            {g.list.length > 0 ? (
              <div className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                {g.list.map((member) => (
                  <CoachCard key={member.idx} member={member} bioLabel={ui.coachBio} />
                ))}
              </div>
            ) : (
              <p className="mt-6 rounded-2xl border border-dashed border-line px-5 py-8 text-center text-sm text-muted">
                {ko ? "곧 소개될 예정입니다." : "Coming soon."}
              </p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
