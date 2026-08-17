import { Section, SectionHeading, Container } from "@/components/ui";
import { Reveal } from "@/components/ui/Reveal";

type Block = { label: string; body: string };
type Chapter = { no: string; eyebrow: string; title: string; lead: string; blocks: Block[]; outro: string };

const CHAPTERS: Chapter[] = [
  {
    no: "01",
    eyebrow: "Visual & Vibe",
    title: "말하지 않아도 드러나는 건강한 자신감.",
    lead: "테니스에는 다른 스포츠와는 조금 다른 미학이 있습니다. 코트 위에서 만들어지는 균형 잡힌 움직임, 자연스럽게 다듬어지는 체형, 그리고 시대를 초월한 클래식한 스타일.",
    blocks: [
      {
        label: "온몸을 사용하는 다이내믹한 움직임",
        body: "끊임없이 움직이고, 멈추고, 방향을 전환하며 공을 따라가는 테니스는 전신을 사용하는 스포츠입니다. 꾸준한 플레이는 보다 탄탄하고 균형 잡힌 몸을 만들어가는 즐거운 루틴이 됩니다.",
      },
      {
        label: "시대를 초월하는 Tennis Style",
        body: "화이트 스커트, 폴로 셔츠, 캡과 라켓. 테니스가 오랫동안 하나의 라이프스타일로 사랑받아 온 이유에는 코트 밖에서도 이어지는 고유한 미학이 있습니다.",
      },
    ],
    outro: "운동을 하는 순간조차, 당신의 라이프스타일이 됩니다.",
  },
  {
    no: "02",
    eyebrow: "Work & Mind",
    title: "코트에서 만든 자신감은 일상에서도 계속됩니다.",
    lead: "테니스는 단순히 머리를 비우는 운동이 아닙니다. 빠르게 판단하고, 과감하게 움직이고, 실수를 털어내고 다시 다음 포인트에 집중하는 경험이 반복될수록 생각과 태도에도 긍정적인 변화가 생깁니다.",
    blocks: [
      {
        label: "몰입이 만드는 선명한 리셋",
        body: "빠르게 다가오는 공에 온전히 집중하는 순간, 업무와 일정으로 복잡했던 생각은 잠시 멈춥니다. 코트에서의 깊은 몰입은 지친 하루에 새로운 에너지를 더하고, 다시 일상으로 돌아갈 여유를 만들어줍니다.",
      },
      {
        label: "작은 성공이 쌓이는 자신감",
        body: "어제는 어려웠던 샷이 오늘은 들어가고, 조금씩 길어지는 랠리와 좋아지는 플레이를 직접 경험합니다. 눈에 보이는 성장은 자연스럽게 성취감이 되고, 코트에서 얻은 자신감은 일상에서도 새로운 도전을 즐기는 태도로 이어집니다.",
      },
      {
        label: "Think Fast. Move Smart.",
        body: "공의 방향을 읽고, 순간적으로 판단하고, 결과에 따라 다음 플레이를 준비합니다. 실수에 오래 머물지 않고 다음 포인트를 준비하는 것. 테니스가 만들어내는 집중력과 빠른 전환의 감각은 코트 밖에서도 더 선명하고 능동적인 하루를 만들어갑니다.",
      },
    ],
    outro: "Better on Court. Better in Life.",
  },
  {
    no: "03",
    eyebrow: "Society & Network",
    title: "좋은 사람들은 좋은 방식으로 연결됩니다.",
    lead: "테니스의 진짜 매력은 게임이 끝난 뒤에도 이어집니다. 나이도, 직업도, 배경도 다른 사람들이 하나의 코트에서 만나 같은 게임을 즐깁니다. 처음에는 랠리로 시작된 관계가 자연스럽게 새로운 커뮤니티로 이어집니다.",
    blocks: [
      {
        label: "Healthy Social Life",
        body: "늦은 술자리 대신 함께 운동하고, 경쟁하고, 웃으며 건강한 에너지를 나눕니다.",
      },
      {
        label: "Respect Across the Net",
        body: "상대를 존중하는 인사, 좋은 플레이에 보내는 박수, 승패를 받아들이는 태도. 테니스는 실력만큼이나 코트 위의 매너를 중요하게 생각하는 스포츠입니다.",
      },
    ],
    outro: "그리고 GCM에서는 그 연결이 코트 밖에서도 계속됩니다.",
  },
];

const CLOSING = [
  "남들과 다른 일상은 거창한 변화에서 시작되지 않습니다.",
  "퇴근 후 코트에 서는 시간. 라켓을 타고 전해지는 선명한 타구감. 한 포인트에 온전히 몰입하는 순간.",
  "복잡했던 하루는 잠시 멈추고 몸과 생각은 다시 가벼워집니다.",
  "꾸준히 다듬어지는 몸, 시간이 지나도 변하지 않는 테니스의 클래식한 스타일, 그리고 코트 위에서 자연스럽게 만나게 되는 좋은 사람들.",
  "테니스는 단순히 하나의 운동을 배우는 것이 아닙니다.",
];

export function AmateurLifestyle() {
  return (
    <>
      {/* 인트로 히어로 */}
      <section className="bg-court-gradient">
        <Container className="py-20 text-center sm:py-28">
          <Reveal>
            <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-[#d4ff3d]">
              The New Standard of Your Life
            </p>
            <h2 className="mx-auto mt-5 max-w-2xl break-keep font-display text-3xl font-black leading-[1.2] text-white sm:text-4xl">
              일상의 기준을 바꾸는
              <br />
              가장 세련된 방법.
            </h2>
            <p className="mx-auto mt-6 max-w-xl break-keep text-base leading-relaxed text-white/85">
              퇴근 후 반복되는 일상에서 벗어나 코트에 서는 순간. 몸은 움직이고, 생각은 가벼워지고, 새로운
              사람들이 연결됩니다. 테니스는 단순한 운동을 넘어 당신의 일상을 더 건강하고 감각적으로 만드는
              라이프스타일입니다.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 3개 챕터 */}
      {CHAPTERS.map((c, ci) => (
        <Section key={c.no} tone={ci % 2 === 1 ? "muted" : "default"}>
          <SectionHeading eyebrow={`${c.no}. ${c.eyebrow}`} title={c.title} lead={c.lead} wideLead />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {c.blocks.map((b, i) => (
              <Reveal
                key={b.label}
                delay={i * 60}
                className={`rounded-2xl border border-line bg-card/40 p-6 ${
                  c.blocks.length === 2 && i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <h3 className="break-keep font-display text-lg font-bold text-court-bright">{b.label}</h3>
                <p className="mt-3 break-keep text-sm leading-relaxed text-ink/85">{b.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 border-l-2 border-court pl-4">
            <p className="break-keep font-display text-lg font-bold text-ink sm:text-xl">{c.outro}</p>
          </Reveal>
        </Section>
      ))}

      {/* 마무리 매니페스토 */}
      <section className="bg-court-gradient">
        <Container className="py-20 text-center sm:py-28">
          <Reveal className="mx-auto max-w-2xl text-white">
            <h2 className="break-keep font-display text-3xl font-black leading-[1.2] sm:text-4xl">
              THE NEW STANDARD
              <br />
              OF YOUR LIFE.
            </h2>
            <div className="mt-8 space-y-4 text-white/85">
              {CLOSING.map((p) => (
                <p key={p} className="break-keep leading-relaxed">
                  {p}
                </p>
              ))}
              <p className="break-keep font-display text-lg font-bold text-[#d4ff3d]">
                더 건강하게 움직이고, 더 깊게 몰입하고, 더 좋은 방식으로 사람들과 연결되는 것.
              </p>
              <p className="break-keep leading-relaxed">당신의 일상에 새로운 기준을 만드는 일입니다.</p>
            </div>
            <p className="mt-10 font-display text-sm font-bold uppercase tracking-[0.2em] text-white">
              Your Game. Your People. Your Standard.
            </p>
            <p className="mt-3 font-display text-2xl font-black text-white">GCM</p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
