import type { ConsultingExtra } from "@/lib/consulting-content";
import { Container } from "@/components/ui";
import { Icon } from "@/components/sections/consulting/Icon";

/** 다크 섹션 — "대학 4년은 비용이 아닌 '투자'입니다" + 1:1 상담 예약 카드 */
export function ConsultingInvestment({
  data,
}: {
  data: ConsultingExtra["investment"];
}) {
  const b = data.booking;
  const rows: { label: string; value: string; href?: string }[] = [
    { label: b.deadlineLabel, value: b.deadline },
    { label: b.phoneLabel, value: b.phone, href: `tel:${b.phone.replace(/[^0-9+]/g, "")}` },
    { label: b.emailLabel, value: b.email, href: `mailto:${b.email}` },
  ];

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

        <div className="mx-auto mt-12 max-w-lg rounded-3xl border border-white/10 bg-white/5 p-8 text-left backdrop-blur">
          <h3 className="text-center text-lg font-bold text-white">{b.title}</h3>
          <p className="mt-3 text-center text-sm leading-relaxed text-white/60">
            {b.sub}
          </p>
          <dl className="mt-6 space-y-3">
            {rows.map((r) => (
              <div
                key={r.label}
                className="flex items-center justify-between gap-4 border-t border-white/10 pt-3"
              >
                <dt className="text-sm font-bold text-court-bright">{r.label}</dt>
                <dd className="text-sm text-white/90">
                  {r.href ? (
                    <a href={r.href} className="hover:text-white hover:underline">
                      {r.value}
                    </a>
                  ) : (
                    r.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
