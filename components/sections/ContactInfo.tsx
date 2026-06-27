import { Section, SectionHeading } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { getDict, getUI } from "@/lib/site-content";

export async function ContactInfo() {
  const locale = await getLocale();
  const { site } = getDict(locale);
  const ui = getUI(locale);
  const en = locale === "en";
  const phoneDigits = site.phone.replace(/\D/g, "");

  const L = {
    direct: en ? "Contact us directly" : "Contact us directly",
    directDesc: en
      ? "You can reach us directly by phone or email."
      : "전화 또는 이메일로 바로 연락하실 수 있습니다.",
    phone: en ? "Phone" : "전화",
    email: en ? "Email" : "이메일",
    location: en ? "Location" : "위치",
    hours: en ? "Hours" : "운영 시간",
    chat: "Chat with us",
    chatDesc: en
      ? "Reach us in real time via KakaoTalk for the fastest reply."
      : "카카오톡으로 실시간 문의하세요. 가장 빠르게 답변드립니다.",
    kakaoCta: en ? "Chat on KakaoTalk →" : "카카오톡으로 문의 →",
    kakaoSoon: en ? "KakaoTalk channel coming soon" : "카카오톡 채널 준비 중",
  };

  return (
    <Section id="contact">
      <SectionHeading eyebrow="Contact Us" title={ui.contactTitle} lead={ui.contactLead} />

      <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2">
        <div className="border-t border-line pt-6">
          <h3 className="font-display text-xl font-bold">{L.direct}</h3>
          <p className="mt-2 text-sm text-muted">{L.directDesc}</p>

          <dl className="mt-6 space-y-4 text-sm">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-court">{L.phone}</dt>
              <dd className="mt-1">
                <a href={`tel:${phoneDigits}`} className="text-ink hover:text-court">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-court">{L.email}</dt>
              <dd className="mt-1">
                <a href={`mailto:${site.email}`} className="text-ink hover:text-court">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-court">{L.location}</dt>
              <dd className="mt-1 text-ink">{site.address}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-court">{L.hours}</dt>
              <dd className="mt-1 text-muted">{site.hours}</dd>
            </div>
          </dl>
        </div>

        <div className="border-t border-line pt-6">
          <h3 className="font-display text-xl font-bold">{L.chat}</h3>
          <p className="mt-2 text-sm text-muted">{L.chatDesc}</p>

          <div className="mt-8">
            {site.kakao ? (
              <a
                href={site.kakao}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-court hover:text-court-deep"
              >
                {L.kakaoCta}
              </a>
            ) : (
              <span className="text-sm font-semibold text-muted">{L.kakaoSoon}</span>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
