import { Section, SectionHeading } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";
import { getDict, getUI } from "@/lib/site-content";

export async function ContactInfo() {
  const locale = await getLocale();
  const { site } = getDict(locale);
  const ui = getUI(locale);
  const phoneDigits = site.phone.replace(/\D/g, "");

  const L = {
    direct: "Contact us directly",
    directDesc: pick(locale, {
      ko: "전화 또는 이메일로 바로 연락하실 수 있습니다.",
      en: "You can reach us directly by phone or email.",
      zh: "您可以通过电话或电子邮件直接与我们联系。",
      ja: "お電話またはメールで直接ご連絡いただけます。",
      it: "Puoi contattarci direttamente per telefono o email.",
      fr: "Vous pouvez nous joindre directement par téléphone ou e-mail.",
      es: "Puedes contactarnos directamente por teléfono o correo electrónico.",
    }),
    phone: pick(locale, { ko: "전화", en: "Phone", zh: "电话", ja: "電話", it: "Telefono", fr: "Téléphone", es: "Teléfono" }),
    email: pick(locale, { ko: "이메일", en: "Email", zh: "电子邮件", ja: "メール", it: "Email", fr: "E-mail", es: "Correo electrónico" }),
    location: pick(locale, { ko: "위치", en: "Location", zh: "位置", ja: "所在地", it: "Sede", fr: "Lieu", es: "Ubicación" }),
    hours: pick(locale, { ko: "운영 시간", en: "Hours", zh: "营业时间", ja: "営業時間", it: "Orari", fr: "Horaires", es: "Horario" }),
    chat: "Chat with us",
    chatDesc: pick(locale, {
      ko: "카카오톡으로 실시간 문의하세요. 가장 빠르게 답변드립니다.",
      en: "Reach us in real time via KakaoTalk for the fastest reply.",
      zh: "通过 KakaoTalk 实时咨询，我们会最快为您答复。",
      ja: "カカオトークでリアルタイムにお問い合わせください。最も早くお返事します。",
      it: "Contattaci in tempo reale su KakaoTalk per la risposta più rapida.",
      fr: "Contactez-nous en temps réel via KakaoTalk pour une réponse rapide.",
      es: "Contáctanos en tiempo real por KakaoTalk para la respuesta más rápida.",
    }),
    kakaoCta: pick(locale, {
      ko: "카카오톡으로 문의 →",
      en: "Chat on KakaoTalk →",
      zh: "通过 KakaoTalk 咨询 →",
      ja: "カカオトークで問い合わせ →",
      it: "Scrivici su KakaoTalk →",
      fr: "Discuter sur KakaoTalk →",
      es: "Chatear por KakaoTalk →",
    }),
    kakaoSoon: pick(locale, {
      ko: "카카오톡 채널 준비 중",
      en: "KakaoTalk channel coming soon",
      zh: "KakaoTalk 频道即将开通",
      ja: "カカオトークチャンネル準備中",
      it: "Canale KakaoTalk in arrivo",
      fr: "Canal KakaoTalk bientôt disponible",
      es: "Canal de KakaoTalk próximamente",
    }),
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
