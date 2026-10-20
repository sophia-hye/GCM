import Image from "next/image";
import { Section, Container } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { getDict, getUI } from "@/lib/site-content";
import { getContentMap, cmsText, cmsList } from "@/lib/cms";

export async function Scholarship() {
  const locale = await getLocale();
  const ko = locale === "ko";
  const { scholarship } = getDict(locale);
  const ui = getUI(locale);
  const map = await getContentMap();
  const applyLabel = locale === "en" ? "Required for application" : "신청 시 준비 항목";
  const heroEyebrow = "Apply for Scholarship";
  const heroTitle = cmsText(map, "section.scholarshipTitle", scholarship.title, locale);
  const heroLead = cmsText(map, "section.scholarshipLead", scholarship.lead, locale);
  const heroAlt = ko ? "GCM 선수단" : "GCM team";

  return (
    <>
      {/* 히어로 — GCM 선수단 사진 */}
      <section id="scholarship" className="relative isolate overflow-hidden">
        {/* 모바일: 사진을 원본 비율 그대로 전체 노출(잘림 없음) + 아래 텍스트 밴드 */}
        <div className="sm:hidden">
          <Image
            src="/img/scholarship-team.jpg"
            alt={heroAlt}
            width={2000}
            height={1126}
            priority
            sizes="100vw"
            className="w-full"
          />
          <div className="bg-ink px-5 py-10">
            <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-court-bright">
              {heroEyebrow}
            </p>
            <h2 className="mt-3 break-keep font-display text-3xl font-black leading-[1.12] text-white">
              {heroTitle}
            </h2>
            <p className="mt-4 break-keep text-base leading-relaxed text-white/85">
              {heroLead}
            </p>
          </div>
        </div>

        {/* 데스크탑: 풀블리드 커버 히어로 (하단 그라데이션 + 텍스트 오버레이) */}
        <div className="relative hidden min-h-[66vh] sm:block">
          <Image
            src="/img/scholarship-team.jpg"
            alt={heroAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* 하단으로 갈수록 진해지는 그라데이션 — 상단 사진은 선명, 하단 텍스트는 가독성 확보 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
          <Container className="relative flex min-h-[66vh] flex-col justify-end py-16 sm:py-20">
            <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-white [text-shadow:0_1px_3px_rgb(0_0_0/0.7),0_4px_20px_rgb(0_0_0/0.8)]">
              {heroEyebrow}
            </p>
            <h2 className="mt-4 max-w-3xl break-keep font-display text-3xl font-black leading-[1.12] text-white [text-shadow:0_2px_4px_rgb(0_0_0/0.75),0_6px_28px_rgb(0_0_0/0.85)] sm:text-5xl">
              {heroTitle}
            </h2>
            <p className="mt-5 max-w-2xl break-keep text-base leading-relaxed text-white [text-shadow:0_1px_3px_rgb(0_0_0/0.8),0_3px_16px_rgb(0_0_0/0.9)] sm:text-lg">
              {heroLead}
            </p>
          </Container>
        </div>
      </section>

      <Section>
      <div className="grid gap-x-10 gap-y-12 md:grid-cols-3">
        {scholarship.points.map((p, i) => (
          <div key={i} className="border-t border-line pt-6">
            <span className="font-display text-sm font-semibold tabular-nums text-muted">
              0{i + 1}
            </span>
            <h3 className="mt-3 text-lg font-bold">
              {cmsText(map, `scholarship.point.${i}.title`, p.title, locale)}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {cmsText(map, `scholarship.point.${i}.body`, p.body, locale)}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 border-t border-line pt-6">
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-court">
          {applyLabel}
        </h3>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {cmsList(map, "scholarship.apply", scholarship.apply, locale).map((item) => (
            <li key={item} className="flex gap-2 text-sm text-ink/90">
              <span className="text-court">·</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      </Section>
    </>
  );
}
