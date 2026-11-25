import { pageMetadata } from "@/lib/page-metadata";
import { PageJsonLd } from "@/components/PageJsonLd";
import { WinterCamp } from "@/components/sections/WinterCamp";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";

export async function generateMetadata(): Promise<import("next").Metadata> {
  const locale = await getLocale();
  return pageMetadata({
    title: pick(locale, {
      ko: "2026–2027 동계 전지훈련 (GCM Winter Camp) | GCM 테니스 아카데미",
      en: "2026–2027 Winter Training Camp | GCM Tennis Academy",
    }),
    description: pick(locale, {
      ko: "경남 의령에서 진행되는 GCM 2026–2027 동계 전지훈련. 온화한 기후·실내 코트·초고밀도 맞춤 훈련과 전담 스포츠 약사 초청 건강·영양 과학수업까지. 소수 정예, 외부 주니어 선수 한정 모집.",
      en: "GCM's 2026–2027 Winter Training Camp in Uiryeong, Korea. Mild climate, indoor courts, ultra-dense tailored training and a health & nutrition science class with the team sports pharmacist. Small group; limited places for outside juniors.",
    }),
    path: "/elite-program/winter-camp",
  });
}

export default async function WinterCampPage() {
  const locale = await getLocale();
  return (
    <div className="pt-16">
      <PageJsonLd
        name={pick(locale, {
          ko: "2026–2027 GCM 동계 전지훈련",
          en: "2026–2027 GCM Winter Training Camp",
        })}
        path="/elite-program/winter-camp"
      />
      <WinterCamp />
    </div>
  );
}
