import { ComingSoon } from "@/components/sections/ComingSoon";

export const metadata = { title: "Education Program | GCM 테니스 아카데미" };

export default function StoreProgramsPage() {
  return (
    <div className="pt-16">
      <ComingSoon
        eyebrow="Store"
        title="Education Program"
        desc="교육 프로그램을 준비하고 있습니다. 곧 신청하실 수 있도록 열어드리겠습니다."
      />
    </div>
  );
}
