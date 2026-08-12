import { getLocale } from "@/lib/i18n";
import { getConsultingExtra } from "@/lib/consulting-content";
import { getContentMap, cmsText, cmsParas } from "@/lib/cms";
import { ConsultingHero } from "@/components/sections/consulting/ConsultingHero";
import { ConsultingPhilosophy } from "@/components/sections/consulting/ConsultingPhilosophy";
import { ConsultingInvestment } from "@/components/sections/consulting/ConsultingInvestment";
import { ConsultingRoleModels } from "@/components/sections/consulting/ConsultingRoleModels";
import { ConsultingRoadmap } from "@/components/sections/consulting/ConsultingRoadmap";
import { ConsultingAllCare } from "@/components/sections/consulting/ConsultingAllCare";
import { ConsultingFaq } from "@/components/sections/consulting/ConsultingFaq";

/**
 * Consulting 페이지 확장 섹션 묶음.
 * locale을 한 번만 읽고 각 순수 섹션 컴포넌트에 슬라이스를 전달한다.
 */
export async function ConsultingExtras() {
  const locale = await getLocale();
  const ko = locale === "ko";
  const extra = getConsultingExtra(locale);
  const map = await getContentMap();

  const hero = {
    ...extra.hero,
    title: cmsText(map, "cx.hero.title", extra.hero.title, ko),
    sub: cmsText(map, "cx.hero.sub", extra.hero.sub, ko),
  };
  const philosophy = {
    ...extra.philosophy,
    title: cmsText(map, "cx.philosophy.title", extra.philosophy.title, ko),
    paragraphs: cmsParas(map, "cx.philosophy.paragraphs", extra.philosophy.paragraphs, ko),
  };
  const investment = {
    ...extra.investment,
    title: cmsText(map, "cx.investment.title", extra.investment.title, ko),
    sub: cmsText(map, "cx.investment.sub", extra.investment.sub, ko),
  };
  const roleModels = {
    ...extra.roleModels,
    title: cmsText(map, "cx.roleModels.title", extra.roleModels.title, ko),
    lead: cmsText(map, "cx.roleModels.lead", extra.roleModels.lead, ko),
  };

  return (
    <>
      <ConsultingHero data={hero} />
      <ConsultingPhilosophy data={philosophy} />
      <ConsultingInvestment data={investment} />
      <ConsultingRoleModels data={roleModels} />
      <ConsultingRoadmap data={extra.roadmap} />
      <ConsultingAllCare data={extra.allCare} />
      <ConsultingFaq data={extra.faq} />
    </>
  );
}
