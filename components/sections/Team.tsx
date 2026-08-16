import { Section, SectionHeading } from "@/components/ui";
import { CoachCard } from "@/components/CoachCard";
import { getLocale } from "@/lib/i18n";
import { getDict, getUI } from "@/lib/site-content";
import { getContentMap, cmsText } from "@/lib/cms";
import { educationCoaches } from "@/lib/education-coaches";

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

  return (
    <Section id="team">
      <SectionHeading
        eyebrow="Team"
        title={ui.teamTitle}
        lead={cmsText(map, "section.teamLead", teamLead, ko)}
      />

      <div className="mt-16 space-y-16">
        {/* 테니스 코치진 */}
        <div>
          <div className="border-t border-line pt-5">
            <h3 className="font-display text-xl font-bold text-court-bright">
              {ko ? "테니스 코치진" : "Tennis Coaches"}
            </h3>
            <p className="mt-1.5 text-sm text-muted">
              {ko
                ? "기술 · 피지컬 · 멘탈을 함께 지도하는 테니스 전문 코치진."
                : "Tennis specialists who guide technique, physical and mental together."}
            </p>
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {tennis.map((member) => (
              <CoachCard key={member.idx} member={member} bioLabel={ui.coachBio} />
            ))}
          </div>
        </div>

        {/* 교육 코치진 — 3 Coaches for 1 Student */}
        <div>
          <div className="border-t border-line pt-5">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display text-xl font-bold text-court-bright">
                {ko ? "교육 코치진" : "Education Coaches"}
              </h3>
              <span className="font-display text-sm font-semibold text-muted">
                3 Coaches for 1 Student
              </span>
            </div>
            <p className="mt-1.5 text-sm text-muted">
              {ko
                ? "한 학생당 3인의 전담 코치가 학업 · 생활 · 진로를 통합적으로 책임집니다."
                : "Three dedicated coaches per student, together responsible for academics, life and career."}
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {educationCoaches.map((c) => (
              <div key={c.no} className="rounded-2xl border border-line bg-card/40 p-6">
                <span className="font-display text-sm font-semibold tabular-nums text-muted">
                  {c.no}
                </span>
                <h4 className="mt-2 break-keep font-display text-xl font-bold">
                  {ko ? c.title.ko : c.title.en}
                </h4>
                <p className="mt-2 break-keep text-sm leading-relaxed text-muted">
                  {ko ? c.desc.ko : c.desc.en}
                </p>
                <ul className="mt-4 space-y-2.5 border-t border-line pt-4">
                  {c.points.map((p, i) => (
                    <li key={i} className="flex gap-2 break-keep text-sm leading-relaxed text-ink/85">
                      <span className="mt-0.5 shrink-0 font-semibold text-court">+</span>
                      <span>{ko ? p.ko : p.en}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
