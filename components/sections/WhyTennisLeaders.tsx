import Link from "next/link";
import { Section, SectionHeading, Container } from "@/components/ui";
import { Reveal } from "@/components/ui/Reveal";
import { getLocale } from "@/lib/i18n";

type Bi = { ko: string; en: string };

const LEADER_REASONS: { n: string; title: Bi; lead: Bi; points: { k: Bi; v: Bi }[] }[] = [
  {
    n: "01",
    title: { ko: "비즈니스 미학과 닮은 '심리적 제스처'", en: "A 'Psychological Gesture' Mirroring Business" },
    lead: {
      ko: "상대와의 육체적 충돌 없이, 오직 정교한 전략과 자신과의 싸움으로 승부하는 '신사적인 고독의 스포츠'.",
      en: "A 'gentleman's sport of solitude' decided by refined strategy and the battle with oneself — never physical collision.",
    },
    points: [
      {
        k: { ko: "완벽한 자기통제", en: "Total self-control" },
        v: {
          ko: "코트 위에 서는 순간 조력자는 없습니다. 매 순간의 판단과 실책은 온전히 자신의 책임 — 의사결정의 무게를 견뎌야 하는 CEO와 리더의 고독한 상황과 완벽하게 맞닿아 있습니다.",
          en: "The moment you step on court, there is no helper. Every judgment and error is entirely your own — perfectly mirroring the solitude of a CEO who must bear the weight of decisions.",
        },
      },
      {
        k: { ko: "리스크 관리와 전략적 사고", en: "Risk management & strategic thinking" },
        v: {
          ko: "단순히 공을 세게 치는 것이 아니라 상대의 약점을 읽고 코스를 설계하며 템포를 조절합니다. 비즈니스의 전략적 의사결정 방식과 동일합니다.",
          en: "It isn't about hitting hard — you read the opponent's weakness, design the court and control the tempo. It is the same as strategic decision-making in business.",
        },
      },
    ],
  },
  {
    n: "02",
    title: { ko: "강력하고 세련된 '네트워킹 파워'", en: "Powerful, Refined 'Networking Power'" },
    lead: {
      ko: "골프가 4~5시간과 거대한 비용을 요구한다면, 테니스는 짧고 강렬하게 서로의 인품을 확인하는 최고의 비즈니스 라운지입니다.",
      en: "Where golf demands 4–5 hours and huge cost, tennis is the finest business lounge to gauge each other's character — short and intense.",
    },
    points: [
      {
        k: { ko: "인품과 매너의 시험대", en: "A test of character and manners" },
        v: {
          ko: "위기 상황에서의 태도, 멘탈 관리, 상대에 대한 배려가 고스란히 드러납니다. 1~2시간의 경기만으로 최상의 비즈니스 파트너인지 파악할 수 있습니다.",
          en: "Attitude under pressure, mental control and consideration for the opponent are laid bare. A single 1–2 hour match reveals whether someone is a top business partner.",
        },
      },
      {
        k: { ko: "밀도 높은 교류", en: "High-density exchange" },
        v: {
          ko: "프라이빗한 클럽 문화 속에서 상류층 간의 자연스러운 유대감과 자발적 커뮤니티가 형성됩니다.",
          en: "Within a private club culture, natural bonds and self-driven communities form among the upper tier.",
        },
      },
    ],
  },
  {
    n: "03",
    title: { ko: "직관적인 '성취감과 리프레시'", en: "Immediate 'Achievement and Refresh'" },
    lead: {
      ko: "뇌를 극도로 많이 쓰는 리더들에게 테니스는 '동적인 명상(Dynamic Meditation)' 역할을 합니다.",
      en: "For leaders who use their minds intensely, tennis acts as 'dynamic meditation'.",
    },
    points: [
      {
        k: { ko: "100% 몰입 상태(Flow)", en: "100% flow" },
        v: {
          ko: "100km/h가 넘게 날아오는 공에 집중하는 동안 업무의 스트레스와 잡념이 완전히 차단됩니다.",
          en: "While focusing on a ball flying over 100 km/h, work stress and stray thoughts are completely shut out.",
        },
      },
      {
        k: { ko: "즉각적인 피드백", en: "Instant feedback" },
        v: {
          ko: "내가 넣은 회전, 스트로크의 궤적에 따라 즉각적인 결과가 나타나 바쁜 일상 속에서 확실한 성취감과 도파민을 공급받습니다.",
          en: "Your spin and stroke path produce an instant result, delivering clear achievement and dopamine amid a busy life.",
        },
      },
    ],
  },
  {
    n: "04",
    title: { ko: "늙지 않는 '올드머니(Old Money) 라이프스타일'", en: "The Timeless 'Old Money' Lifestyle" },
    lead: {
      ko: "영미권 귀족 문화에서 출발해 특유의 우아하고 클래식한 미학을 유지합니다.",
      en: "Born from Anglo-American aristocratic culture, it keeps its own elegant, classic aesthetic.",
    },
    points: [
      {
        k: { ko: "시대를 초월한 패션과 스타일", en: "Timeless fashion and style" },
        v: {
          ko: "세련된 테니스 룩, 윔블던의 올 화이트 드레스 코드 등 테니스의 비주얼은 그 자체로 '잘 가꿔진 삶'을 상징합니다.",
          en: "Refined tennis looks and Wimbledon's all-white dress code — tennis's visual language itself symbolizes 'a well-tended life'.",
        },
      },
      {
        k: { ko: "평생 스포츠(Lifetime Sport)", en: "A lifetime sport" },
        v: {
          ko: "부상 위험이 적절히 통제되며, 80세가 넘어서도 기량을 유지하며 즐길 수 있는 몇 안 되는 품격 있는 스포츠입니다.",
          en: "With injury risk well controlled, it is one of the few dignified sports you can keep enjoying past the age of 80.",
        },
      },
    ],
  },
];

const LIFE_CHANGES: { n: string; title: Bi; points: Bi[] }[] = [
  {
    n: "①",
    title: { ko: "가장 스타일리시하게 가꿔지는 '외모와 핏'", en: "Your Most Stylish 'Look and Fit'" },
    points: [
      {
        ko: "전신 고강도 칼로리 소모: 1시간에 약 600~800kcal를 태우는 인터벌 운동. 공을 쫓다 보면 자연스럽게 체지방이 연소됩니다.",
        en: "Full-body, high-intensity burn: an interval workout of ~600–800 kcal per hour. Chasing the ball burns body fat naturally.",
      },
      {
        ko: "코어와 하체의 단단함: 잔발 플레이와 회전 동작으로 잔근육 중심의 매끄럽고 탄탄한 보디라인이 완성됩니다.",
        en: "Firm core and legs: quick footwork and rotation build a smooth, toned body line driven by fine muscle.",
      },
      {
        ko: "입는 즐거움(Tennis Look): 클래식하고 감각적인 테니스웨어가 운동하는 나에 대한 만족감을 극대화합니다.",
        en: "The joy of dressing (tennis look): classic, tasteful tennis wear maximizes satisfaction with the active you.",
      },
    ],
  },
  {
    n: "②",
    title: { ko: "뇌를 비워주는 '최상의 도파민 & 스트레스 해소'", en: "Top-Tier Dopamine & Stress Relief" },
    points: [
      {
        ko: "잡념의 완벽한 차단: 날아오는 공에 온전히 집중하며 일상의 번뇌와 업무 스트레스를 순간적으로 잊게 됩니다(동적 명상).",
        en: "Complete block of distraction: fully focused on the incoming ball, daily worries and work stress vanish in an instant (dynamic meditation).",
      },
      {
        ko: "손끝에 전달되는 타구감: 스위트 스폿에 공이 깨끗하게 맞을 때의 쾌감과 소리가 하루의 피로를 날려버립니다.",
        en: "The feel through your fingertips: the thrill and sound of a clean sweet-spot hit blow away the day's fatigue.",
      },
    ],
  },
  {
    n: "③",
    title: { ko: "삶의 격을 높여주는 '건강한 교류'", en: "Healthy Connections That Elevate Life" },
    points: [
      {
        ko: "술자리 대신 코트에서의 만남: 동호회·클럽·소모임 문화가 잘 발달해 건강한 에너지와 취향을 공유하는 사람들과 교류합니다.",
        en: "Meeting on court instead of over drinks: a rich club and community culture connects you with people who share healthy energy and taste.",
      },
      {
        ko: "매너가 만들어내는 매력: 상대를 배려하고 정중히 인사하는 테니스 문화가 나를 훨씬 고급스럽고 매력적으로 보이게 합니다.",
        en: "Charm made by manners: tennis's culture of consideration and courteous greetings makes you look far more refined and attractive.",
      },
    ],
  },
  {
    n: "④",
    title: { ko: "나이를 뛰어넘는 '평생의 무기'", en: "A 'Lifelong Weapon' Beyond Age" },
    points: [
      {
        ko: "라이프타임 스포츠: 20대부터 60~70대까지 부상 없이 오래 즐길 수 있어, 지금 배워두면 평생의 자산이 됩니다.",
        en: "A lifetime sport: enjoyable injury-free from your 20s into your 60s–70s, so learning now becomes a lifelong asset.",
      },
      {
        ko: "건강 효과: 테니스를 즐기는 사람은 평균 수명이 약 9.7년 길다는 연구가 있을 만큼 전신·심뇌혈관 건강에 뛰어납니다.",
        en: "Health impact: research shows tennis players live about 9.7 years longer on average — outstanding for whole-body and cardiovascular health.",
      },
    ],
  },
];

export async function WhyTennisLeaders() {
  const ko = (await getLocale()) === "ko";
  const t = (b: Bi) => (ko ? b.ko : b.en);

  return (
    <>
      {/* 히어로 — The Court of Leaders */}
      <section className="bg-court-gradient">
        <Container className="py-20 text-center sm:py-28">
          <Reveal>
            <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-white/80">
              Why Tennis
            </p>
            <h1 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-black leading-[1.15] text-white sm:text-5xl">
              The Court of <span className="text-[#d4ff3d]">Leaders</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl break-keep text-base leading-relaxed text-white/85 sm:text-lg">
              {ko
                ? "성공한 CEO, 비즈니스 리더, 글로벌 명사들이 왜 테니스에 매료되는가. 테니스는 단순한 스포츠가 아니라, 리더들의 라이프스타일이자 정신적 훈련장입니다."
                : "Why successful CEOs, business leaders and global figures are drawn to tennis. Tennis is not merely a sport — it is the lifestyle and mental training ground of leaders."}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 리더들이 테니스에 열광하는 이유 */}
      <Section>
        <SectionHeading
          eyebrow="For Leaders"
          title={ko ? "리더들이 테니스에 열광하는 이유" : "Why leaders are captivated by tennis"}
          lead={
            ko
              ? "자기통제, 네트워킹, 몰입, 그리고 품격 — 테니스가 성공한 이들의 언어인 이유."
              : "Self-control, networking, flow and grace — why tennis is the language of the successful."
          }
          wideLead
        />
        <div className="mt-14 space-y-10">
          {LEADER_REASONS.map((r) => (
            <Reveal key={r.n} className="border-t border-line pt-6">
              <div className="grid gap-6 md:grid-cols-[1fr_1.4fr]">
                <div>
                  <span className="font-display text-sm font-semibold tabular-nums text-muted">
                    {r.n}
                  </span>
                  <h3 className="mt-2 break-keep font-display text-2xl font-bold">{t(r.title)}</h3>
                  <p className="mt-3 break-keep text-sm leading-relaxed text-muted">{t(r.lead)}</p>
                </div>
                <div className="space-y-4">
                  {r.points.map((p) => (
                    <div key={p.k.en} className="border-l-2 border-court pl-4">
                      <p className="font-semibold text-ink">{t(p.k)}</p>
                      <p className="mt-1 break-keep text-sm leading-relaxed text-ink/80">{t(p.v)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 브랜드 카피 — The Court of Leaders */}
      <section className="bg-court-gradient">
        <Container className="py-20 sm:py-28">
          <Reveal className="mx-auto max-w-2xl text-center text-white">
            <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-white/70">
              The Court of Leaders
            </p>
            <p className="mt-6 break-keep font-display text-xl font-bold leading-relaxed sm:text-2xl">
              {ko ? "왜 세상의 리더들은 코트 위로 모이는가?" : "Why do the world's leaders gather on the court?"}
            </p>
            <p className="mt-5 break-keep leading-relaxed text-white/85">
              {ko
                ? "승리의 기쁨보다 중요한 것은, 매 순간 나 자신을 통제하고 제어하는 정교한 감각입니다. 고독한 결정의 순간을 버텨내는 CEO의 결단력, 상대의 템포를 읽고 판을 지배하는 전략가들의 직관. 테니스는 스포츠를 넘어, 성공한 이들이 자신을 다듬는 미학적인 훈련장입니다. 클래식한 품격과 끊임없는 도전이 공존하는 곳."
                : "More important than the joy of winning is the refined sense of controlling and mastering yourself in every moment. The resolve of a CEO enduring lonely decisions; the intuition of strategists who read the tempo and command the game. Beyond a sport, tennis is the aesthetic training ground where the successful refine themselves — where classic grace and relentless challenge coexist."}
            </p>
            <p className="mt-6 break-keep font-display text-lg font-bold text-[#d4ff3d]">
              {ko ? "이제 당신의 게임을 시작할 차례입니다." : "Now it's your turn to start the game."}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 일반 입문자 — 내 삶이 리셋된다 */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Your New Lifestyle"
          title={ko ? "내 삶이 리셋된다" : "Your life gets a reset"}
          lead={
            ko
              ? "테니스가 가져오는 4가지 일상적 변화 — 외모, 멘탈, 인적 네트워크, 그리고 평생의 무기."
              : "Four everyday changes tennis brings — your look, your mind, your network and a lifelong weapon."
          }
          wideLead
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {LIFE_CHANGES.map((c, i) => (
            <Reveal key={c.n} delay={i * 60} className="rounded-2xl border border-line bg-base/40 p-6">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-2xl font-black text-court-bright">{c.n}</span>
                <h3 className="break-keep font-display text-lg font-bold">{t(c.title)}</h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {c.points.map((p) => (
                  <li key={p.en} className="flex gap-2 break-keep text-sm leading-relaxed text-ink/85">
                    <span className="mt-0.5 shrink-0 font-semibold text-court">·</span>
                    <span>{t(p)}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 동기부여 CTA — 강조(빨강 배경 · 흰 글씨 · 라임 버튼) */}
      <Section tone="court">
        <Reveal className="mx-auto max-w-2xl text-center text-white">
          <h2 className="break-keep font-display text-3xl font-black leading-snug sm:text-4xl">
            {ko ? (
              <>
                단 한 번의 스트로크가
                <br />
                당신의 일상을 바꿉니다
              </>
            ) : (
              <>
                A single stroke
                <br />
                can change your everyday
              </>
            )}
          </h2>
          <p className="mx-auto mt-5 max-w-xl break-keep text-sm leading-relaxed text-white/85 sm:text-base">
            {ko
              ? "라켓을 쥐고 코트 위에 서는 순간, 당신을 짓누르던 모든 잡념은 사라지고 오직 날아오는 공과 나 자신에게만 몰입하게 됩니다. 더 탄탄해지는 몸, 압도적인 해소감, 건강한 라이프스타일을 공유하는 새로운 사람들. 테니스는 더 매력적이고 에너제틱한 ‘나의 새로운 라이프스타일’을 만드는 과정입니다."
              : "The moment you grip the racket and step on court, every weight on your mind lifts and you focus only on the ball and yourself. A firmer body, an overwhelming release, new people who share a healthy lifestyle. Tennis is the process of building a more attractive, more energetic 'new lifestyle of yours'."}
          </p>
          <div className="mt-9 flex justify-center">
            <Link
              href="/apply/adult"
              className="inline-flex items-center gap-2 rounded-full bg-[#d4ff3d] px-9 py-4 font-display text-base font-black text-black shadow-lg transition hover:brightness-105 hover:-translate-y-0.5"
            >
              {ko ? "첫 레슨 체험 신청하기" : "Book your first trial lesson"}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
