import Link from "next/link";
import type { ConsultingExtra } from "@/lib/consulting-content";
import { Container } from "@/components/ui";
import { Icon } from "@/components/sections/consulting/Icon";

/** 다크 섹션 — "대학 4년은 비용이 아닌 '투자'입니다" + 1:1 상담 연결 카드 */
export function ConsultingInvestment({
  data,
}: {
  data: ConsultingExtra["investment"];
}) {
  const b = data.booking;

  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <Container className="text-center">
        <div className="flex justify-center text-court-bright">
          <Icon name="trending" className="h-9 w-9" />
        </div>
        <h2 className="mx-auto mt-6 max-w-3xl font-display text-2xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          {data.title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70">
          {data.sub}
        </p>

        <div className="mx-auto mt-12 max-w-lg rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h3 className="text-lg font-bold text-white">{b.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/60">{b.sub}</p>
          <Link
            href="#consultation"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-court px-7 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-court-deep"
          >
            {b.cta}
          </Link>
        </div>
      </Container>
    </section>
  );
}
