import { redirect } from "next/navigation";

/** 매치 피드백은 커뮤니티로 이동됨 — 기존 링크 호환용 리다이렉트 */
export default function DashboardAnalysisPage() {
  redirect("/dashboard/community");
}
