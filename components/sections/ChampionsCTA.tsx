import { Container } from "@/components/ui";

/**
 * 홈 최하단 클로징 배너.
 * 히어로 슬로건의 'Champion' 서체(font-accent 세리프 이탤릭)를 그대로 사용한 브랜드 선언.
 */
export function ChampionsCTA() {
  return (
    <section className="relative overflow-hidden bg-court-gradient">
      <Container className="py-20 text-center sm:py-28">
        <p className="mx-auto max-w-4xl font-accent text-[1.9rem] font-semibold italic leading-[1.25] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] sm:text-4xl lg:text-[3.25rem] lg:leading-[1.15]">
          Building World-Class Champions:
          <span className="mt-3 block text-2xl text-white/90 sm:text-3xl lg:text-[2.5rem]">
            Elite Athletes, Outstanding Minds, Global Leaders of Tomorrow.
          </span>
        </p>
      </Container>
    </section>
  );
}
