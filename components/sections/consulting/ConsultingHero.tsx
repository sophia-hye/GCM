import type { ConsultingExtra } from "@/lib/consulting-content";
import { Container } from "@/components/ui";

/** 다크 인트로 히어로 — "잘 설계해야 성장합니다" */
export function ConsultingHero({ data }: { data: ConsultingExtra["hero"] }) {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <Container className="text-center">
        <p className="font-display text-xs font-bold uppercase tracking-[0.35em] text-court-bright">
          {data.eyebrow}
        </p>
        <h2 className="mx-auto mt-6 max-w-4xl whitespace-pre-line font-display text-3xl font-extrabold leading-[1.2] tracking-tight sm:text-5xl">
          {data.title}
        </h2>
        <p className="mx-auto mt-8 max-w-2xl whitespace-pre-line text-base leading-relaxed text-white/70 sm:text-lg">
          {data.sub}
        </p>
      </Container>
    </section>
  );
}
