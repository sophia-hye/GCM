import { pageMetadata } from "@/lib/page-metadata";
import { Section, SectionHeading } from "@/components/ui";
import { AlumniStory } from "@/components/alumni/AlumniStory";
import { ALUMNI } from "@/lib/alumni";
import { getLocale } from "@/lib/i18n";

export async function generateMetadata(): Promise<import("next").Metadata> {
  const ko = (await getLocale()) === "ko";
  return pageMetadata({
    title: ko ? "Alumni | GCM 테니스 아카데미" : "Alumni | GCM Tennis Academy",
    description: ko
      ? "GCM을 거쳐 세계 무대로 나아간 졸업생 이야기. 스탠포드 대학교 D1 테니스팀 주장 명세인 등 GCM Alumni의 성장 스토리를 소개합니다."
      : "Stories of alumni who went on to the world stage after GCM, including Myung Se-in, captain of Stanford's D1 tennis team.",
    path: "/alumni",
  });
}

const PREVIEW = [
  {
    ko: { title: "졸업생 스토리", desc: "GCM을 거쳐 프로 · 대학 · 다양한 커리어로 나아간 졸업생들의 여정을 소개합니다." },
    en: { title: "Alumni Stories", desc: "Journeys of alumni who went on to pro, college and diverse careers after GCM." },
  },
  {
    ko: { title: "선후배 멘토링", desc: "재학생과 졸업생을 잇는 1:1 멘토링으로 진로와 경험을 나눕니다." },
    en: { title: "Mentorship", desc: "One-on-one mentoring that connects current students with alumni." },
  },
  {
    ko: { title: "네트워킹 이벤트", desc: "정기 모임과 글로벌 네트워크로 평생 이어지는 인연을 만듭니다." },
    en: { title: "Networking", desc: "Regular gatherings and a global network for lifelong connections." },
  },
  {
    ko: { title: "커리어 연계", desc: "진로 · 인턴십 · 전문가 네트워크로 다음 단계를 함께 설계합니다." },
    en: { title: "Career Links", desc: "Careers, internships and expert networks to design the next step together." },
  },
];

export default async function AlumniPage() {
  const ko = (await getLocale()) === "ko";

  return (
    <div className="pt-16">
      <Section>
        <SectionHeading
          eyebrow="GCM Alumni"
          title={ko ? "졸업생 이야기" : "Alumni Stories"}
          lead={
            ko
              ? "GCM을 거쳐 세계 무대로 나아간 졸업생의 여정. 코트 위의 인연이 평생의 자산이 됩니다."
              : "The journeys of alumni who went from GCM to the world stage. Connections on court become lifelong assets."
          }
          wideLead
        />

        <div className="mt-14 space-y-24">
          {ALUMNI.map((alumni) => (
            <AlumniStory key={alumni.slug} alumni={alumni} ko={ko} />
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="What we offer"
          title={ko ? "졸업생 네트워크가 잇는 것" : "What the network connects"}
          lead={
            ko
              ? "재학생과 졸업생을 잇는 멘토링부터 글로벌 커리어 네트워크까지, GCM의 인연은 코트 밖에서도 이어집니다."
              : "From mentoring to a global career network, GCM connections continue beyond the court."
          }
          wideLead
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PREVIEW.map((item) => {
            const t = ko ? item.ko : item.en;
            return (
              <div key={t.title} className="rounded-2xl border border-line bg-base/50 p-6">
                <h3 className="break-keep font-display text-lg font-bold">{t.title}</h3>
                <p className="mt-2 break-keep text-sm leading-relaxed text-muted">{t.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
