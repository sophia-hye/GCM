import { Section, SectionHeading, Button } from "@/components/ui";
import { site } from "@/lib/site-data";
import { getLocale } from "@/lib/i18n";
import { pick, type I18nText } from "@/lib/i18n-pick";

export async function WinterCampDetails() {
  const locale = await getLocale();
  const t = (b: I18nText) => pick(locale, b);

  const schedule: { label: I18nText; value: I18nText }[] = [
    {
      label: { ko: "1차 훈련", en: "Session 1" },
      value: { ko: "2026년 11월 30일 ~ 12월 24일", en: "30 Nov – 24 Dec 2026" },
    },
    {
      label: { ko: "2차 훈련", en: "Session 2" },
      value: { ko: "2027년 1월 4일 ~ 1월 29일", en: "4 Jan – 29 Jan 2027" },
    },
  ];

  const fees: { plan: I18nText; price: I18nText }[] = [
    {
      plan: { ko: "1차 훈련만 참가", en: "Session 1 only" },
      price: { ko: "150만 원", en: "KRW 1,500,000" },
    },
    {
      plan: { ko: "2차 훈련만 참가", en: "Session 2 only" },
      price: { ko: "180만 원", en: "KRW 1,800,000" },
    },
    {
      plan: { ko: "1·2차 전체 참가", en: "Both sessions" },
      price: { ko: "300만 원", en: "KRW 3,000,000" },
    },
  ];

  return (
    <>
      {/* INTRO */}
      <Section compact tone="muted">
        <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-court-bright">
          Members Only
        </span>
        <h1 className="mt-4 break-keep font-display text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl">
          {t({
            ko: "2026–2027 의령 동계 집중훈련 안내",
            en: "2026–2027 Uiryeong Winter Intensive Training",
          })}
        </h1>
        <p className="mt-5 max-w-2xl break-keep text-[15px] leading-relaxed text-ink/85 sm:text-[16px]">
          {t({
            ko: "선수들의 체력 향상과 경기력 발전을 위한 GCM 동계 집중훈련 일정을 안내드립니다.",
            en: "Here is the schedule for GCM's winter intensive training, designed to build players' fitness and match performance.",
          })}
        </p>
      </Section>

      {/* DETAILS */}
      <Section compact>
        <div className="grid gap-6 lg:grid-cols-2">
          {/* 훈련 일정 */}
          <div className="rounded-2xl border border-line bg-card/30 p-7">
            <h2 className="font-display text-lg font-bold text-ink">
              {t({ ko: "훈련 일정", en: "Schedule" })}
            </h2>
            <dl className="mt-5 space-y-4">
              {schedule.map((s, i) => (
                <div key={i} className="border-t border-line pt-4 first:border-t-0 first:pt-0">
                  <dt className="font-display text-sm font-bold text-court-bright">{t(s.label)}</dt>
                  <dd className="mt-1 break-keep text-[15px] leading-relaxed text-ink/90">
                    {t(s.value)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* 훈련 장소 */}
          <div className="rounded-2xl border border-line bg-card/30 p-7">
            <h2 className="font-display text-lg font-bold text-ink">
              {t({ ko: "훈련 장소", en: "Location" })}
            </h2>
            <p className="mt-5 break-keep font-display text-2xl font-bold text-ink">
              {t({ ko: "경남 의령", en: "Uiryeong, Gyeongnam" })}
            </p>
            <p className="mt-3 break-keep text-[15px] leading-relaxed text-muted">
              {t({
                ko: "전용 훈련 코트 및 실내 코트가 완비된 남부 내륙의 온화한 훈련지입니다.",
                en: "A mild inland base in southern Korea with dedicated outdoor and indoor courts.",
              })}
            </p>
          </div>
        </div>

        {/* 참가 비용 */}
        <div className="mt-6 rounded-2xl border border-line bg-card/30 p-7">
          <h2 className="font-display text-lg font-bold text-ink">
            {t({ ko: "참가 비용", en: "Fees" })}
          </h2>
          <div className="mt-5 overflow-hidden rounded-xl border border-line">
            <dl className="divide-y divide-line">
              {fees.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-4 bg-base px-5 py-4"
                >
                  <dt className="break-keep text-[15px] text-ink/90">{t(f.plan)}</dt>
                  <dd className="shrink-0 font-display text-lg font-bold text-court">
                    {t(f.price)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-4 break-keep text-sm text-muted">
            {t({
              ko: "※ 모든 참가 비용은 숙식비 별도입니다.",
              en: "※ All fees exclude room and board.",
            })}
          </p>
        </div>

        <p className="mt-10 max-w-3xl break-keep text-[15px] leading-relaxed text-ink/85 sm:text-[16px]">
          {t({
            ko: "이번 동계훈련은 체계적인 테니스 훈련과 전문적인 피지컬 트레이닝을 통해 선수들이 한 단계 더 성장할 수 있도록 준비했습니다.",
            en: "This winter program combines structured tennis training with professional physical conditioning so players can take the next step in their development.",
          })}
        </p>
      </Section>

      {/* CTA — KakaoTalk consultation */}
      <Section compact tone="court">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="break-keep font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
            {t({
              ko: "참가 상담이 필요하신가요?",
              en: "Want to talk about joining?",
            })}
          </h2>
          <p className="mt-4 break-keep leading-relaxed text-white/80">
            {t({
              ko: "일정·비용·등록 절차 등 궁금한 점은 카카오톡 채널로 편하게 문의해 주세요.",
              en: "For the schedule, fees, or registration, reach out any time on our KakaoTalk channel.",
            })}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={site.kakao}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-lime px-6 py-3 text-sm font-semibold tracking-wide text-white transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-105"
            >
              {t({ ko: "카카오톡으로 상담하기", en: "Consult on KakaoTalk" })}
            </a>
            <Button href="/elite-program/winter-training" variant="outline-light">
              {t({ ko: "트레이닝 소개로 돌아가기", en: "Back to training overview" })}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
