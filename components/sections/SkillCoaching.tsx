import { skills } from "@/lib/site-data";
import { Section, SectionHeading } from "@/components/ui";

export function SkillCoaching() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Technical Coaching"
        title="기술 코칭 프로그램"
        lead="포핸드 · 백핸드 · 발리 · 서브. 요일별로 집중하는 체계적 주간 스케줄."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <div key={skill.name} className="rounded-2xl border border-line bg-card p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">{skill.name}</h3>
              <span className="rounded-md bg-court/15 px-2 py-1 font-display text-xs font-bold text-court-bright">
                {skill.day}
              </span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {skill.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
