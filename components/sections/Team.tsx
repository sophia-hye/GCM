import { Section, SectionHeading } from "@/components/ui";
import { CoachCard } from "@/components/CoachCard";
import { getLocale } from "@/lib/i18n";
import { getDict, getUI } from "@/lib/site-content";
import { getContentMap, cmsText, cmsList } from "@/lib/cms";
import { educationCoaches } from "@/lib/education-coaches";
import { pick } from "@/lib/i18n-pick";

export async function Team() {
  const locale = await getLocale();
  const { team, teamLead } = getDict(locale);
  const ui = getUI(locale);
  const map = await getContentMap();

  const members = team.map((member, i) => ({
    ...member,
    idx: i,
    name: cmsText(map, `coach.${i}.name`, member.name, locale),
    role: cmsText(map, `coach.${i}.role`, member.role, locale),
    bio: cmsText(map, `coach.${i}.bio`, member.bio, locale),
  }));

  const tennis = members.filter((m) => (m as { dept?: string }).dept !== "education");

  return (
    <Section id="team">
      <SectionHeading
        eyebrow="Team"
        title={ui.teamTitle}
        lead={cmsText(map, "section.teamLead", teamLead, locale)}
      />

      <div className="mt-16 space-y-16">
        {/* 테니스 코치진 */}
        <div>
          <div className="border-t border-line pt-5">
            <h3 className="font-display text-xl font-bold text-court-bright">
              {pick(locale, { ko: "테니스 코치진", en: "Tennis Coaches", zh: "网球教练团队", ja: "テニスコーチ陣", it: "Staff tecnico tennis", fr: "Entraîneurs de tennis", es: "Entrenadores de tenis" })}
            </h3>
            <p className="mt-1.5 text-sm text-muted">
              {pick(locale, {
                ko: "기술 · 피지컬 · 멘탈을 함께 지도하는 테니스 전문 코치진.",
                en: "Tennis specialists who guide technique, physical and mental together.",
                zh: "同时指导技术、体能与心理的网球专业教练团队。",
                ja: "技術・フィジカル・メンタルを共に指導するテニス専門のコーチ陣。",
                it: "Specialisti del tennis che guidano insieme tecnica, fisico e mente.",
                fr: "Des spécialistes du tennis qui encadrent ensemble la technique, le physique et le mental.",
                es: "Especialistas en tenis que guían juntos la técnica, el físico y la mente.",
              })}
            </p>
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {tennis.map((member) => (
              <CoachCard
                key={member.idx}
                member={member}
                bioLabel={ui.coachBio}
                bioCloseLabel={ui.coachBioClose}
              />
            ))}
          </div>
        </div>

        {/* 교육 코치진 — 3 Coaches for 1 Student */}
        <div>
          <div className="border-t border-line pt-5">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display text-xl font-bold text-court-bright">
                {pick(locale, { ko: "교육 코치진", en: "Education Coaches", zh: "教育教练团队", ja: "教育コーチ陣", it: "Staff educativo", fr: "Coachs éducatifs", es: "Entrenadores educativos" })}
              </h3>
              <span className="font-display text-sm font-semibold text-muted">
                3 Coaches for 1 Student
              </span>
            </div>
            <p className="mt-1.5 text-sm text-muted">
              {pick(locale, {
                ko: "한 학생당 3인의 전담 코치가 학업 · 생활 · 진로를 통합적으로 책임집니다.",
                en: "Three dedicated coaches per student, together responsible for academics, life and career.",
                zh: "每位学生配备 3 名专属教练，统筹负责学业、生活与升学规划。",
                ja: "生徒一人につき3人の専任コーチが、学業・生活・進路を統合的に担います。",
                it: "Tre coach dedicati per ogni studente, responsabili insieme di studio, vita e carriera.",
                fr: "Trois coachs dédiés par élève, responsables ensemble des études, de la vie et de la carrière.",
                es: "Tres entrenadores dedicados por estudiante, responsables juntos de los estudios, la vida y la carrera.",
              })}
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {educationCoaches.map((c, ci) => {
              const fbPoints = c.points.map((p) => pick(locale, p));
              return (
                <div key={c.no} className="rounded-2xl border border-line bg-card/40 p-6">
                  <span className="font-display text-sm font-semibold tabular-nums text-muted">
                    {c.no}
                  </span>
                  <h4 className="mt-2 break-keep font-display text-xl font-bold">
                    {cmsText(map, `eduCoach.${ci}.title`, pick(locale, c.title), locale)}
                  </h4>
                  <p className="mt-2 break-keep text-sm leading-relaxed text-muted">
                    {cmsText(map, `eduCoach.${ci}.desc`, pick(locale, c.desc), locale)}
                  </p>
                  <ul className="mt-4 space-y-2.5 border-t border-line pt-4">
                    {cmsList(map, `eduCoach.${ci}.points`, fbPoints, locale).map((p, i) => (
                      <li key={i} className="flex gap-2 break-keep text-sm leading-relaxed text-ink/85">
                        <span className="mt-0.5 shrink-0 font-semibold text-court">+</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
