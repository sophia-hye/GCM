import { ComingSoon } from "@/components/sections/ComingSoon";

export const metadata = { title: "Seoulite Net'work | GCM 테니스 아카데미" };

export default function SeoulitePage() {
  return (
    <div className="pt-16">
      <ComingSoon
        eyebrow="Social Events"
        title="Seoulite Net'work"
        desc="매달 한남동에서 열리는 GCM 정기 모임. 모임 후기를 곧 이곳에서 만나보실 수 있습니다."
      />
    </div>
  );
}
