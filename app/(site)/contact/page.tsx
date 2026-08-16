import { pageMetadata } from "@/lib/page-metadata";
import { PageJsonLd } from "@/components/PageJsonLd";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { Faq } from "@/components/sections/Faq";

export const metadata = pageMetadata({ title: "문의 · 상담 | GCM 테니스 아카데미", description: "GCM 테니스 아카데미 상담·문의. 선수 진로 상담과 프로그램 안내를 도와드립니다.", path: "/contact" });

export default function ContactPage() {
  return (
    <div className="pt-16">
      <PageJsonLd name="문의·상담" path="/contact" />
      <ContactInfo />
      <Faq />
    </div>
  );
}
