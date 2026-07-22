import { redirect } from "next/navigation";

/** 매치피드백은 My Page와 분리된 /match-feedback 로 이동됨 — 기존 링크 호환용 리다이렉트 */
export default async function DashboardAnalysisRedirect({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  redirect(type === "training" ? "/match-feedback?type=training" : "/match-feedback");
}
