import { Section, SectionHeading, Button, Container } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { pick, type I18nText } from "@/lib/i18n-pick";

const CTA_HREF = "/elite-program/winter-camp/details";

function ctaLabel(): I18nText {
  return {
    ko: "동계 캠프 참가 안내 보기",
    en: "View camp details & apply",
  };
}

export async function WinterCamp() {
  const locale = await getLocale();
  const t = (b: I18nText) => pick(locale, b);

  const envCards: { title: I18nText; body: I18nText }[] = [
    {
      title: {
        ko: "동계 부상 방지 및 최상의 기후 조건",
        en: "Injury-safe winter training in a mild climate",
      },
      body: {
        ko: "겨울철에도 온화한 남부 내륙(경남 의령)의 기후 속에서 근육 위축과 한파로 인한 부상 위험을 최소화하고, 시즌 중과 다름없는 최상의 컨디션으로 실전 감각을 끌어올립니다. 호주오픈과 같은 7겹으로 쌓은 하드코트로 선수들의 관절 부담을 최소화해 부상 방지에 도움이 됩니다.",
        en: "In the mild inland climate of Uiryeong (Gyeongnam), players avoid the muscle stiffness and cold-weather injuries of winter and keep an in-season edge. An Australian Open-style 7-layer hard court cushions the joints and helps prevent injury.",
      },
    },
    {
      title: {
        ko: "기상 변수 제로(Zero), 실내 테니스 코트 완비",
        en: "Zero weather risk — full indoor courts",
      },
      body: {
        ko: "눈, 비, 강풍 등 예기치 못한 기상 악화에도 훈련 흐름이 끊기지 않도록 실내 코트 인프라가 완비되어 있어 계획된 모든 훈련 프로그램을 100% 소화합니다.",
        en: "Snow, rain or strong wind never breaks the rhythm: a full indoor-court setup means 100% of the planned program is completed, whatever the weather.",
      },
    },
    {
      title: {
        ko: "코트 자율 활용을 통한 초고밀도 맞춤 훈련",
        en: "Open-court access for ultra-dense, tailored training",
      },
      body: {
        ko: "코트 사용의 제약 없이 충분히 확보된 훈련 환경 속에서 개인별 약점 메카닉 교정, 실전 매치 패턴 훈련, 야간 집중 피지컬 트레이닝까지 빈틈없이 진행됩니다.",
        en: "With no limits on court time, each player works through weak-point mechanics, real match-pattern drills and focused evening physical training without a gap.",
      },
    },
  ];

  const credentials: I18nText[] = [
    { ko: "한양대학교 약학대학 졸업", en: "Hanyang University, College of Pharmacy" },
    {
      ko: "현) 서울 강서구 365열린약국(공공심야약국) 대표 약사",
      en: "Head pharmacist, 365 Open Pharmacy (public late-night pharmacy), Gangseo-gu, Seoul",
    },
    {
      ko: "소아청소년과·내과 임상 및 성장기 유소년 의약품·영양 상담 전문",
      en: "Specialist in pediatric & internal-medicine care and youth medication/nutrition counseling",
    },
    {
      ko: "스포츠약학, 운동선수 영양 설계, 보충제 안전성 및 도핑 예방 연구",
      en: "Research in sports pharmacy, athlete nutrition design, supplement safety and anti-doping",
    },
  ];

  const step1Curriculum: I18nText[] = [
    {
      ko: "우리 몸을 움직이는 5대 영양소의 역할과 재미있는 소화·흡수 과정",
      en: "The five macro/micronutrients and a fun look at digestion and absorption",
    },
    {
      ko: "테니스 선수에게 식단이 중요한 이유와 경기력·회복력의 비밀",
      en: "Why diet matters for a tennis player — the secret to performance and recovery",
    },
    {
      ko: "내 몸을 지키기 위해 줄이거나 주의해야 하는 음식 구별법",
      en: "How to spot foods to cut back on or watch out for",
    },
    {
      ko: "코트 위 최상의 컨디션을 위한 수분 보충 및 전해질 활용법",
      en: "Hydration and electrolytes for peak condition on court",
    },
  ];

  const scheduleRows: { label: I18nText; value: I18nText }[] = [
    {
      label: { ko: "훈련 장소", en: "Location" },
      value: {
        ko: "경상남도 의령군 (전용 훈련 코트 및 실내 코트 완비)",
        en: "Uiryeong-gun, Gyeongnam (dedicated training courts and indoor courts)",
      },
    },
    {
      label: { ko: "1차 훈련 기간", en: "Session 1 dates" },
      value: {
        ko: "2026년 11월 30일(월) ~ 12월 24일(목) (※ 2차 캠프 일정 별도 문의)",
        en: "Mon 30 Nov – Thu 24 Dec 2026 (Session 2 dates on request)",
      },
    },
    {
      label: { ko: "모집 대상", en: "Who can join" },
      value: {
        ko: "GCM 소속 엘리트 선수 및 동계 집중 훈련 참가를 희망하는 국내·외 주니어 선수 (소수 정예 인원 제한)",
        en: "GCM elite players and domestic/international junior players seeking intensive winter training (strictly limited places)",
      },
    },
    {
      label: { ko: "주요 프로그램", en: "Core program" },
      value: {
        ko: "오전·오후 온코트 메카닉 & 전술 훈련 / 야간 피지컬 트레이닝 / 전담 약사 초청 건강·영양 과학수업",
        en: "AM/PM on-court mechanics & tactics / evening physical training / health & nutrition science class with the team pharmacist",
      },
    },
  ];

  return (
    <>
      {/* SECTION 1 — HERO */}
      <Section
        compact
        tone="court"
        bgImage="/img/winter-camp-hero.webp"
        bgImageAlt={pick(locale, {
          ko: "겨울 새벽의 GCM 동계 전지훈련 코트",
          en: "GCM winter training court at a crisp winter dawn",
        })}
      >
        <div className="max-w-4xl">
          <SectionHeading
            onCourt
            eyebrow="2026–2027 GCM Winter Intensive Camp"
            title={pick(locale, {
              ko: "2026 겨울의 선택이 2027년 봄의 결과를 결정합니다",
              en: "The choice you make this winter decides your results next spring",
            })}
            lead={pick(locale, {
              ko: "단순한 체력 소모가 아닌, 코어 메카닉의 정교화와 실전 전술의 완성. 오직 소속 선수의 성장에만 몰입하던 GCM의 프라이빗 동계 훈련이, 해외 내한 문의를 비롯한 전 세계 주니어 선수들의 요청에 힘입어 제한된 인원의 외부 선수들에게도 특별한 기회로 열렸습니다.",
              en: "Not just burning energy, but refining core mechanics and completing real match tactics. GCM's private winter training — once reserved for our own players — now opens a limited number of places to outside juniors, driven by requests from players around the world.",
            })}
          />
          <p className="mt-6 font-display text-lg font-bold text-white sm:text-xl">
            {t({ ko: "GCM 2026–2027 동계 전지훈련", en: "GCM 2026–2027 Winter Training Camp" })}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href={CTA_HREF} variant="lime">
              {t(ctaLabel())}
            </Button>
            <Button href="/elite-program" variant="outline-light">
              {t({ ko: "엘리트 프로그램 보기", en: "See the Elite Program" })}
            </Button>
          </div>
        </div>
      </Section>

      {/* SECTION 2 — EXCLUSIVE OPPORTUNITY */}
      <Section compact tone="muted">
        <SectionHeading
          eyebrow="Exclusive Opportunity"
          title={t({
            ko: "소수 정예의 원칙 위에 열린 단 한 번의 기회",
            en: "A rare opening, built on a small-group principle",
          })}
        />
        <div className="mt-8 max-w-3xl space-y-5 text-[15px] leading-relaxed text-ink/85 sm:text-[16px]">
          <p className="break-keep">
            {t({
              ko: "GCM 테니스 아카데미는 본래 소속 엘리트 선수 한 명, 한 명의 잠재력을 극대화하는 밀도 높은 집중 훈련을 핵심 원칙으로 운영됩니다.",
              en: "GCM Tennis Academy is built on one core principle: dense, focused training that maximizes the potential of each of our elite players, one by one.",
            })}
          </p>
          <p className="break-keep">
            {t({
              ko: "매년 겨울, 한국으로의 훈련 내한을 희망하는 해외 유망주들과 국내 엘리트 선수들의 지속적인 문의가 이어짐에 따라, 올해 2026–2027 동계 시즌에는 GCM의 훈련 시스템을 경험하고 한 단계 도약하고자 하는 외부 선수들에게도 한정된 TO로 소중한 기회가 열렸습니다.",
              en: "Each winter we receive steady requests from overseas prospects hoping to train in Korea and from domestic elite players. For the 2026–2027 winter season we are opening a limited number of places to outside players who want to experience the GCM system and take the next step.",
            })}
          </p>
          <p className="break-keep">
            {t({
              ko: "상업적인 대규모 캠프가 아닌, GCM 코칭스태프의 시선이 코트 위 모든 선수에게 온전히 닿을 수 있는 환경을 유지합니다. 본 아카데미의 기준과 훈련 밀도를 함께할 준비가 된 선수라면, 이번 동계 캠프가 테니스 인생의 결정적인 터닝포인트가 될 것입니다.",
              en: "This is not a large commercial camp: we keep an environment where the GCM coaching staff can give full attention to every player on court. For a player ready to meet our standards and training intensity, this winter camp can be a decisive turning point.",
            })}
          </p>
        </div>
      </Section>

      {/* SECTION 3 — TRAINING ENVIRONMENT */}
      <Section compact>
        <SectionHeading
          eyebrow="Training Environment"
          title={t({
            ko: "온화한 기후와 압도적인 코트 점유율, 최적의 훈련지 '경남 의령'",
            en: "A mild climate and unmatched court access — the ideal base, Uiryeong",
          })}
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {envCards.map((c, i) => (
            <article
              key={i}
              className="flex flex-col rounded-2xl border border-line bg-card/30 p-7"
            >
              <span className="font-display text-sm font-bold tabular-nums text-court-bright">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 break-keep font-display text-lg font-bold leading-snug text-ink">
                {t(c.title)}
              </h3>
              <p className="mt-3 break-keep text-[15px] leading-relaxed text-muted">
                {t(c.body)}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* SECTION 4 — MEDICAL & NUTRITION CARE (highlight) */}
      <Section compact tone="muted" id="care">
        <SectionHeading
          eyebrow="Special Medical & Nutrition Care"
          title={t({
            ko: "'학교 밖 즐거운 과학수업' — 나를 소중히 하는 건강·영양 관리 비법",
            en: "A fun science class outside school — health & nutrition that teaches kids to care for their bodies",
          })}
          lead={t({
            ko: "GCM은 눈앞의 단기 성적만을 위해 선수를 소모시키지 않습니다. 성장기 유소년 선수가 부상 없이 롱런하려면, 스스로 내 몸을 아끼는 마음과 '무엇을, 왜, 어떻게 먹어야 하는지'에 대한 올바른 기준이 필수적입니다.",
            en: "GCM never burns players out for short-term results. For a growing junior to last without injury, they need to value their own body and understand what, why and how to eat.",
          })}
        />

        <p className="mt-6 max-w-3xl break-keep text-[15px] leading-relaxed text-ink/85">
          {t({
            ko: "이번 동계 전지훈련에서는 평소 GCM 선수들을 전담해 주시는 스포츠 약사님을 초청하여, 유소년 선수들의 눈높이에 맞춘 '학교 밖 즐거운 과학수업' 형태의 건강·영양 관리 비법 교육과 학부모님을 위한 맞춤형 영양 솔루션을 진행합니다.",
            en: "For this winter camp we invite the sports pharmacist who looks after GCM's players to run a kid-friendly 'fun science class' on health and nutrition, plus a tailored nutrition solution for parents.",
          })}
        </p>

        {/* Speaker profile */}
        <div className="mt-10 rounded-3xl border border-line bg-base p-7 sm:p-9">
          <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-court-bright">
            {t({ ko: "초청 연사", en: "Guest Speaker" })}
          </span>
          <h3 className="mt-3 break-keep font-display text-xl font-bold text-ink sm:text-2xl">
            {t({
              ko: "박보근 약사 | GCM 선수 전담 스포츠 약학 자문",
              en: "Pharmacist Park Bo-geun | GCM team sports-pharmacy advisor",
            })}
          </h3>
          <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {credentials.map((c, i) => (
              <li key={i} className="flex gap-2 break-keep text-sm leading-relaxed text-ink/85">
                <span className="mt-0.5 shrink-0 font-semibold text-court">+</span>
                <span>{t(c)}</span>
              </li>
            ))}
          </ul>
          <blockquote className="mt-6 break-keep border-l-2 border-court/40 pl-4 text-[15px] italic leading-relaxed text-muted">
            {t({
              ko: "“어린 선수들에게 정해진 답을 강요하기보다, 스스로 자신의 몸을 이해하고 올바른 선택을 할 수 있는 평생의 기준을 선물하고 싶습니다.”",
              en: "“Rather than forcing fixed answers on young players, I want to give them a lifelong standard — the ability to understand their own body and make the right choices.”",
            })}
          </blockquote>
        </div>

        {/* 2-step program timeline */}
        <h3 className="mt-14 font-display text-lg font-bold text-ink">
          {t({ ko: "2단계 커리큘럼 구성", en: "A 2-step program" })}
        </h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* STEP 1 */}
          <div className="rounded-2xl border border-line bg-base p-7">
            <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-court-bright">
              Step 1
            </span>
            <h4 className="mt-2 break-keep font-display text-lg font-bold text-ink">
              {t({
                ko: "동계 전지훈련 현지 특강 — 학교 밖 즐거운 과학수업",
                en: "On-site class during the camp — a fun science class outside school",
              })}
            </h4>
            <p className="mt-1 text-sm text-muted">
              {t({ ko: "선수 대상 · 1월 7일 예정", en: "For players · planned for Jan 7" })}
            </p>
            <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
              {step1Curriculum.map((c, i) => (
                <li key={i} className="flex gap-2 break-keep text-sm leading-relaxed text-ink/85">
                  <span className="mt-0.5 shrink-0 text-court">·</span>
                  <span>{t(c)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-xl bg-court/[0.06] p-4">
              <span className="font-display text-[11px] font-bold uppercase tracking-[0.16em] text-court-bright">
                {t({ ko: "실전 연계 미션", en: "Applied mission" })}
              </span>
              <p className="mt-1.5 break-keep text-sm leading-relaxed text-ink/85">
                {t({
                  ko: "1개월 식단 셀프 트래킹 — 특강 이후 약 한 달간 선수들이 직접 자신의 식단을 기록하며 배운 내용을 일상에 적용해 보는 자기주도 훈련을 진행합니다.",
                  en: "One month of self-tracked meals — for about a month after the class, players log their own diet and apply what they learned, a self-directed habit.",
                })}
              </p>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="rounded-2xl border border-line bg-base p-7">
            <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-court-bright">
              Step 2
            </span>
            <h4 className="mt-2 break-keep font-display text-lg font-bold text-ink">
              {t({
                ko: "센터 복귀 후 심화 피드백 & 학부모 특강",
                en: "In-depth feedback & parent class after returning to the center",
              })}
            </h4>
            <p className="mt-1 text-sm text-muted">
              {t({ ko: "선수 · 학부모 합동", en: "Players & parents together" })}
            </p>
            <ul className="mt-5 space-y-3 border-t border-line pt-5">
              <li className="flex gap-2 break-keep text-sm leading-relaxed text-ink/85">
                <span className="mt-0.5 shrink-0 text-court">·</span>
                <span>
                  {t({
                    ko: "전지훈련 종료 및 GCM 센터 복귀 후, 선수들이 한 달간 기록한 실제 식단 데이터를 전담 약사님이 사전 정밀 검토합니다.",
                    en: "After the camp ends and players return to the GCM center, the team pharmacist reviews each player's month of real meal data in detail.",
                  })}
                </span>
              </li>
              <li className="flex gap-2 break-keep text-sm leading-relaxed text-ink/85">
                <span className="mt-0.5 shrink-0 text-court">·</span>
                <span>
                  {t({
                    ko: "검토 데이터를 바탕으로 학부모와 선수가 함께 참여하는 맞춤형 실전 식단 가이드 및 영양 개선 특강을 진행하여, 가정에서도 지속 가능한 엘리트 선수 케어가 이어지도록 돕습니다.",
                    en: "Based on that review, a tailored diet guide and nutrition class with parents and players keeps sustainable elite-level care going at home.",
                  })}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* SECTION 5 — SCHEDULE & APPLY */}
      <Section compact id="apply">
        <SectionHeading
          eyebrow="Schedule & Apply"
          title={t({ ko: "훈련 일정 및 지원 안내", en: "Schedule & how to apply" })}
        />

        <div className="mt-10 overflow-hidden rounded-2xl border border-line">
          <dl className="divide-y divide-line">
            {scheduleRows.map((r, i) => (
              <div key={i} className="grid grid-cols-1 gap-1 p-5 sm:grid-cols-[minmax(0,10rem)_1fr] sm:gap-6 sm:p-6">
                <dt className="font-display text-sm font-bold text-court-bright">{t(r.label)}</dt>
                <dd className="break-keep text-[15px] leading-relaxed text-ink/90">{t(r.value)}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-10 max-w-3xl space-y-4 text-[15px] leading-relaxed text-ink/85">
          <h3 className="font-display text-lg font-bold text-ink">
            {t({ ko: "신청 및 상담 절차", en: "How to apply" })}
          </h3>
          <p className="break-keep">
            {t({
              ko: "GCM의 동계 전지훈련은 선수의 현재 기량과 훈련 목적을 면밀히 확인한 뒤 합류를 결정합니다. 참가를 희망하시는 선수 및 학부모님께서는 아래 상담 채널로 문의해 주시면, 개별 상담 후 세부 일정 및 등록 절차를 안내해 드립니다.",
              en: "Admission follows a careful review of each player's current level and training goals. Players and parents who wish to join can reach us through the consultation channel below; after a one-on-one consultation we share the detailed schedule and registration steps.",
            })}
          </p>
          <p className="break-keep text-sm text-muted">
            {t({
              ko: "※ 소수 정예 훈련 밀도 유지를 위해 정원 충원 시 외부 참가자 모집은 조기 마감될 수 있습니다.",
              en: "※ To keep training density high, outside places may close early once the limited quota is filled.",
            })}
          </p>
        </div>

        <div className="mt-9">
          <Button href={CTA_HREF} variant="court">
            {t(ctaLabel())}
          </Button>
        </div>
      </Section>

      {/* BOTTOM CTA */}
      <Section
        compact
        tone="court"
        bgImage="/img/winter-camp-cta.webp"
        bgImageAlt={pick(locale, {
          ko: "야간 조명 아래의 프리미엄 테니스 코트",
          en: "Premium tennis court under night floodlights",
        })}
      >
        <Container className="!px-0">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-white/70">
              2026–2027 Winter Intensive Camp
            </p>
            <h2 className="mt-4 break-keep font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              {t({
                ko: "이번 겨울, 결정적인 터닝포인트를 준비하세요",
                en: "Make this winter your decisive turning point",
              })}
            </h2>
            <p className="mt-4 break-keep leading-relaxed text-white/80">
              {t({
                ko: "소수 정예로 운영되어 조기 마감될 수 있습니다. 참가를 고려 중이시라면 먼저 상담을 신청해 주세요.",
                en: "Places are limited and may close early. If you're considering it, start with a consultation.",
              })}
            </p>
            <div className="mt-8 flex justify-center">
              <Button href={CTA_HREF} variant="lime">
                {t(ctaLabel())}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
