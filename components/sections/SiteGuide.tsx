import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui";
import { Reveal } from "@/components/ui/Reveal";
import { getLocale } from "@/lib/i18n";
import { getDict, getUI } from "@/lib/site-content";
import { getContentMap, cmsText, cmsParas, cmsList } from "@/lib/cms";

/** 홈 둘러보기: 각 메뉴(탭)에 어떤 내용이 있는지 카드로 미리 안내 */
export async function SiteGuide() {
  const locale = await getLocale();
  const ko = locale === "ko";
  const { siteGuide, siteGuideLead, directorMessage: d } = getDict(locale);
  const ui = getUI(locale);
  const map = await getContentMap();
  const dEyebrow = cmsText(map, "director.eyebrow", d.eyebrow, ko);
  const dTitle = cmsText(map, "director.title", d.title, ko);
  const dHomeSummary = cmsParas(map, "director.homeSummary", d.homeSummary, ko);
  const dQuote = cmsText(map, "director.quote", d.quote, ko);

  return (
    <Section id="explore" reveal={false}>
      <Reveal>
        <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-court-bright">
          Explore GCM
        </p>

        {/* GCM 약어를 먼저, 크고 강하게 각인 */}
        <p className="mt-5 font-display text-4xl font-black leading-none tracking-tight sm:text-6xl lg:text-7xl">
          <span className="text-court">G</span>lobal{" "}
          <span className="text-court">C</span>hampions{" "}
          <span className="text-court">M</span>akers
        </p>

        {/* 보조 헤딩 */}
        <h2 className="mt-5 font-display text-2xl font-bold leading-snug text-ink/75 sm:text-3xl">
          Your Path to{" "}
          <span className="font-accent font-semibold italic text-ink">Global Championship</span>{" "}
          Starts Here
        </h2>

        <p className="mt-5 text-lg leading-relaxed text-muted">
          {cmsText(map, "section.siteGuideLead", siteGuideLead, ko)}
        </p>
      </Reveal>

      {/* 대표 원장 인사말 — 요약 전문을 카드 안에 노출 */}
      <Reveal delay={80}>
        <div className="mt-10 rounded-2xl border border-line bg-card/30 p-6 sm:p-8 lg:p-10">
          <p className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-court-bright">
            {dEyebrow}
          </p>
          <h3 className="mt-2 font-display text-2xl font-bold leading-snug sm:text-3xl">
            {dTitle}
          </h3>

          <div className="mt-6 grid items-start gap-8 sm:grid-cols-[200px_1fr] sm:gap-10">
            <div className="mx-auto w-full max-w-[200px] overflow-hidden rounded-2xl border border-line sm:mx-0">
              <Image
                src={d.image}
                alt={dTitle}
                width={520}
                height={650}
                className="aspect-[4/5] h-auto w-full object-cover"
              />
            </div>

            <div className="max-w-2xl">
              <div className="space-y-4 text-base leading-relaxed text-ink/85">
                {dHomeSummary.map((para, i) => (
                  <p key={i} className="whitespace-pre-line">
                    {para}
                  </p>
                ))}
              </div>
              <blockquote className="mt-6 border-l-2 border-court pl-5 font-display text-base font-semibold leading-relaxed text-ink">
                {dQuote}
              </blockquote>
              <div className="mt-7">
                <Link
                  href="/about#director-message"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-court"
                >
                  {ui.learnMore}
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 홈 소개 영상 — 대표원장 인사말 카드 바로 아래. 용량이 크므로 preload=metadata 로
          방문 시 자동 다운로드하지 않고, 재생 시에만 로드한다. */}
      <Reveal delay={60}>
        <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-black">
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            src="/video/Home.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="auto"
            className="h-auto w-full"
          />
        </div>
      </Reveal>

      {/* Match Feedback 강조 — 시합/훈련 후 기록 유도 */}
      <Reveal delay={40}>
        <Link
          href="/match-feedback"
          className="group mt-8 flex flex-col items-start gap-4 rounded-2xl border border-court/30 bg-court/5 p-6 transition-colors hover:border-court hover:bg-court/10 sm:flex-row sm:items-center sm:justify-between sm:p-7"
        >
          <div>
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-court-bright">
              Match Feedback
            </p>
            <h3 className="mt-1.5 font-display text-xl font-bold sm:text-2xl">
              {ko
                ? "시합·훈련 후, 나의 매치 피드백을 남겨보세요"
                : "After a match or training, leave your match feedback"}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">
              {ko
                ? "경기와 훈련을 스스로 돌아본 기록을 남기면, 코치가 확인하고 피드백을 드립니다."
                : "Leave a record reflecting on your matches and training, and your coach will review it and give you feedback."}
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-court px-5 py-2.5 text-sm font-semibold text-white transition group-hover:brightness-110">
            {ko ? "매치 피드백 작성" : "Write Match Feedback"}
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </span>
        </Link>
      </Reveal>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {siteGuide.map((g, i) => (
          <Reveal key={g.href} delay={i * 80} className="h-full">
            <Link
              href={g.href}
              className="group flex h-full flex-col rounded-2xl border border-line bg-card/30 p-7 transition-colors hover:border-court hover:bg-card/70"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-semibold tabular-nums text-muted">
                  {g.no}
                </span>
                <span className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-court-bright">
                  {g.label}
                </span>
              </div>

              <h3 className="mt-4 font-display text-xl font-bold">
                {cmsText(map, `guide.${g.label}.title`, g.title, ko)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {cmsText(map, `guide.${g.label}.desc`, g.desc, ko)}
              </p>

              <ul className="mt-4 space-y-1.5 text-sm text-ink/90">
                {cmsList(map, `guide.${g.label}.items`, g.items, ko).map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="text-court">·</span>
                    {it}
                  </li>
                ))}
              </ul>

              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors group-hover:text-court">
                {ui.learnMore}
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
