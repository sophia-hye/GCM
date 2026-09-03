import { ComingSoon } from "@/components/sections/ComingSoon";
import { getLocale } from "@/lib/i18n";

export async function generateMetadata(): Promise<import("next").Metadata> {
  const ko = (await getLocale()) === "ko";
  return { title: ko ? "Membership | GCM 테니스 아카데미" : "Membership | GCM Tennis Academy" };
}

export default async function MembershipPage() {
  const ko = (await getLocale()) === "ko";
  return (
    <div className="pt-16">
      <ComingSoon
        eyebrow="Social Events"
        title="Membership"
        desc={
          ko
            ? "GCM 멤버십을 준비하고 있습니다. 곧 안내드리겠습니다."
            : "We're preparing GCM Membership. We'll share more soon."
        }
      />
    </div>
  );
}
