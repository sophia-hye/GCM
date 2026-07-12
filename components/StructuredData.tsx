import { SITE_URL } from "@/lib/site-url";
import { site } from "@/lib/site-data";

/**
 * 검색엔진 리치 결과용 구조화 데이터(JSON-LD).
 * 테니스 아카데미(교육 + 스포츠 시설)로 조직 정보를 명시한다.
 * 주소(site.address)는 아직 확정 전이라 스키마에서 제외한다.
 */
export function StructuredData() {
  const telephone = `+82-${site.phone.replace(/^0/, "")}`;
  const foundingDate = site.foundedDate.replace(/\./g, "-");

  const data = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "SportsActivityLocation"],
    name: "GCM 테니스 아카데미",
    alternateName: ["GCM Tennis Academy", "GCM Academy", "지씨엠 테니스 아카데미"],
    url: SITE_URL,
    logo: `${SITE_URL}/icon.png`,
    image: `${SITE_URL}/icon.png`,
    description:
      "오성국 대표(前 주니어 국가대표 코치)가 이끄는 엘리트 테니스 아카데미. 기술·피지컬·멘탈을 통합한 구조화 훈련과 UTR 성장 로드맵, ATP·WTA 프로 진출 및 미국 대학(NCAA) 진학·장학 컨설팅을 함께합니다.",
    email: site.email,
    telephone,
    foundingDate,
    sport: "Tennis",
    knowsLanguage: ["ko", "en"],
    areaServed: "KR",
    founder: {
      "@type": "Person",
      name: "오성국",
      alternateName: "Oh Seong-gook",
      jobTitle: "Executive Director",
    },
    sameAs: [site.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
