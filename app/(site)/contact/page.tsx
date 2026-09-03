import { pageMetadata } from "@/lib/page-metadata";
import { getLocale } from "@/lib/i18n";
import { PageJsonLd } from "@/components/PageJsonLd";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { Faq } from "@/components/sections/Faq";

export async function generateMetadata(): Promise<import("next").Metadata> {
  const ko = (await getLocale()) === "ko";
  return pageMetadata({
    title: ko ? "문의 · 상담 | GCM 테니스 아카데미" : "Contact · Consultation | GCM Tennis Academy",
    description: ko
      ? "GCM 테니스 아카데미 상담·문의. 선수 진로 상담과 프로그램 안내를 도와드립니다."
      : "GCM Tennis Academy consultations and inquiries. We help with athlete career consultations and program guidance.",
    path: "/contact",
  });
}

export default function ContactPage() {
  return (
    <div className="pt-16">
      <PageJsonLd name="문의·상담" path="/contact" />
      <ContactInfo />
      <Faq />
    </div>
  );
}
