import { pageMetadata } from "@/lib/page-metadata";
import { Section, SectionHeading } from "@/components/ui";
import { getLocale } from "@/lib/i18n";

export const metadata = pageMetadata({
  title: "Alumni Network | GCM 테니스 아카데미",
  description: "GCM을 거쳐 간 졸업생들이 이어가는 네트워크 — 멘토링, 커리어 연계, 글로벌 네트워킹. 곧 만나보실 수 있습니다.",
  path: "/alumni",
});

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
        <div className="flex flex-col items-start gap-4">
          <SectionHeading
            eyebrow="Who we are"
            title="Alumni Network"
            lead={
              ko
                ? "GCM을 거쳐 간 졸업생들이 이어가는 네트워크. 코트 위의 인연이 평생의 자산이 됩니다."
                : "A network carried on by GCM alumni — connections on court that become lifelong assets."
            }
            wideLead
          />
          <span className="inline-block rounded-full border border-line px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted">
            Coming Soon
          </span>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PREVIEW.map((item) => {
            const t = ko ? item.ko : item.en;
            return (
              <div key={t.title} className="rounded-2xl border border-line bg-card/40 p-6">
                <h3 className="break-keep font-display text-lg font-bold">{t.title}</h3>
                <p className="mt-2 break-keep text-sm leading-relaxed text-muted">{t.desc}</p>
              </div>
            );
          })}
        </div>

        <p className="mt-12 break-keep text-sm text-muted">
          {ko
            ? "졸업생 네트워크는 현재 준비 중입니다. 곧 더 풍성한 소식으로 찾아뵙겠습니다."
            : "The Alumni Network is being prepared. We'll be back soon with more."}
        </p>
      </Section>
    </div>
  );
}
