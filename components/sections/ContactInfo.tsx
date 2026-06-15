import { site } from "@/lib/site-data";
import { Section, SectionHeading } from "@/components/ui";

export function ContactInfo() {
  const phoneDigits = site.phone.replace(/\D/g, "");

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact Us"
        title="문의하기"
        lead="궁금한 점이 있으신가요? 편하신 방법으로 연락 주세요."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {/* Contact us directly */}
        <div className="rounded-2xl border border-line bg-card p-7">
          <h3 className="font-display text-xl font-bold">Contact us directly</h3>
          <p className="mt-2 text-sm text-muted">전화 또는 이메일로 바로 연락하실 수 있습니다.</p>

          <dl className="mt-6 space-y-4 text-sm">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-court-bright">전화</dt>
              <dd className="mt-1">
                <a href={`tel:${phoneDigits}`} className="text-ink hover:text-court-bright">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-court-bright">이메일</dt>
              <dd className="mt-1">
                <a href={`mailto:${site.email}`} className="text-ink hover:text-court-bright">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-court-bright">위치</dt>
              <dd className="mt-1 text-ink">{site.address}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-court-bright">운영 시간</dt>
              <dd className="mt-1 text-muted">{site.hours}</dd>
            </div>
          </dl>
        </div>

        {/* Chat with us */}
        <div className="flex flex-col rounded-2xl border border-line bg-card p-7">
          <h3 className="font-display text-xl font-bold">Chat with us</h3>
          <p className="mt-2 text-sm text-muted">
            카카오톡으로 실시간 문의하세요. 가장 빠르게 답변드립니다.
          </p>

          <div className="mt-auto pt-8">
            {site.kakao ? (
              <a
                href={site.kakao}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-[#08111f] transition-transform hover:-translate-y-0.5"
              >
                카카오톡으로 문의 →
              </a>
            ) : (
              <span className="inline-flex w-full items-center justify-center rounded-full border border-line px-6 py-3 text-sm font-semibold text-muted">
                카카오톡 채널 준비 중
              </span>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
