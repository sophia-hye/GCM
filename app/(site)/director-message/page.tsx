import type { Metadata } from "next";
import { pageMetadata } from "@/lib/page-metadata";
import { DirectorMessage } from "@/components/sections/DirectorMessage";
import { getLocale } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const ko = (await getLocale()) === "ko";
  return pageMetadata({
    title: ko ? "대표원장 인사말 | GCM 테니스 아카데미" : "Director's Message | GCM Tennis Academy",
    description: ko
      ? "국제무대를 거친 대표 원장 오성국이 전하는 GCM의 교육 철학과 학부모께 드리는 약속."
      : "GCM's education philosophy and a promise to parents, from Executive Director Seong-gook Oh, who competed on the international stage.",
    path: "/director-message",
  });
}

export default function DirectorMessagePage() {
  return (
    <div className="pt-16">
      <DirectorMessage />
    </div>
  );
}
