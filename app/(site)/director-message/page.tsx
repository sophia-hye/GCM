import { pageMetadata } from "@/lib/page-metadata";
import { DirectorMessage } from "@/components/sections/DirectorMessage";

export const metadata = pageMetadata({
  title: "대표원장 인사말 | GCM 테니스 아카데미",
  description: "국제무대를 거친 대표 원장 오성국이 전하는 GCM의 교육 철학과 학부모께 드리는 약속.",
  path: "/director-message",
});

export default function DirectorMessagePage() {
  return (
    <div className="pt-16">
      <DirectorMessage />
    </div>
  );
}
