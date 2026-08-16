import { pageMetadata } from "@/lib/page-metadata";
import { ComingSoon } from "@/components/sections/ComingSoon";

export const metadata = pageMetadata({
  title: "Why Tennis | GCM 테니스 아카데미",
  description: "GCM이 전하는 '왜 테니스인가'. 곧 만나보실 수 있습니다.",
  path: "/why-tennis",
});

export default function WhyTennisPage() {
  return (
    <div className="pt-16">
      <ComingSoon
        eyebrow="Why GCM"
        title="Why Tennis"
        desc="곧 새로운 내용으로 찾아뵙겠습니다."
      />
    </div>
  );
}
