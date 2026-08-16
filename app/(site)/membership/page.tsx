import { ComingSoon } from "@/components/sections/ComingSoon";

export const metadata = { title: "Membership | GCM 테니스 아카데미" };

export default function MembershipPage() {
  return (
    <div className="pt-16">
      <ComingSoon
        eyebrow="Social Events"
        title="Membership"
        desc="GCM 멤버십을 준비하고 있습니다. 곧 안내드리겠습니다."
      />
    </div>
  );
}
