import { getLocale } from "@/lib/i18n";
import { getConsultingExtra } from "@/lib/consulting-content";
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
  const extra = getConsultingExtra(await getLocale());
  return (
    <>
      <ConsultingHero data={extra.hero} />
      <ConsultingPhilosophy data={extra.philosophy} />
      <ConsultingInvestment data={extra.investment} />
      <ConsultingRoleModels data={extra.roleModels} />
      <ConsultingRoadmap data={extra.roadmap} />
      <ConsultingAllCare data={extra.allCare} />
      <ConsultingFaq data={extra.faq} />
    </>
  );
}
