import { pageMetadata } from "@/lib/page-metadata";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";
import { PageJsonLd } from "@/components/PageJsonLd";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { Faq } from "@/components/sections/Faq";

export async function generateMetadata(): Promise<import("next").Metadata> {
  const locale = await getLocale();
  return pageMetadata({
    title: pick(locale, {
      ko: "문의 · 상담 | GCM 테니스 아카데미",
      en: "Contact · Consultation | GCM Tennis Academy",
      zh: "咨询 · 联系 | GCM Tennis Academy",
      ja: "お問い合わせ・相談 | GCM Tennis Academy",
      it: "Contatti · Consulenza | GCM Tennis Academy",
      fr: "Contact · Consultation | GCM Tennis Academy",
      es: "Contacto · Consulta | GCM Tennis Academy",
    }),
    description: pick(locale, {
      ko: "GCM 테니스 아카데미 상담·문의. 선수 진로 상담과 프로그램 안내를 도와드립니다.",
      en: "GCM Tennis Academy consultations and inquiries. We help with athlete career consultations and program guidance.",
      zh: "GCM Tennis Academy 咨询与联系。我们提供选手生涯咨询与课程指导。",
      ja: "GCM Tennis Academyの相談・お問い合わせ。選手の進路相談とプログラム案内をサポートします。",
      it: "Consulenze e richieste di GCM Tennis Academy. Ti aiutiamo con la consulenza sulla carriera degli atleti e con le informazioni sui programmi.",
      fr: "Consultations et demandes de GCM Tennis Academy. Nous vous accompagnons dans l'orientation de carrière des joueurs et la présentation des programmes.",
      es: "Consultas y contacto de GCM Tennis Academy. Te ayudamos con la orientación profesional de los jugadores y la información de los programas.",
    }),
    path: "/contact",
  });
}

export default async function ContactPage() {
  const locale = await getLocale();
  return (
    <div className="pt-16">
      <PageJsonLd
        name={pick(locale, {
          ko: "문의·상담",
          en: "Contact · Consultation",
          zh: "咨询 · 联系",
          ja: "お問い合わせ・相談",
          it: "Contatti · Consulenza",
          fr: "Contact · Consultation",
          es: "Contacto · Consulta",
        })}
        path="/contact"
      />
      <ContactInfo />
      <Faq />
    </div>
  );
}
