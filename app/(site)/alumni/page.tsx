import { pageMetadata } from "@/lib/page-metadata";
import { ComingSoon } from "@/components/sections/ComingSoon";

export const metadata = pageMetadata({
  title: "Alumni Network | GCM 테니스 아카데미",
  description: "GCM을 거쳐 간 졸업생들이 이어가는 네트워크. 곧 만나보실 수 있습니다.",
  path: "/alumni",
});

export default function AlumniPage() {
  return (
    <div className="pt-16">
      <ComingSoon
        eyebrow="Who we are"
        title="Alumni Network"
        desc="GCM 졸업생들이 이어가는 네트워크를 준비하고 있습니다. 곧 공개될 예정입니다."
      />
    </div>
  );
}
