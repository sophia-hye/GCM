import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export const metadata = { title: "대시보드 | GCM 아카데미" };

export default async function DashboardHome() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profile } = await supabase
    .from("gcm_profiles")
    .select("name")
    .eq("id", user!.id)
    .maybeSingle();

  // 마이페이지는 선수(회원) 화면 — 항상 매치피드백 '작성하기'를 노출한다.
  // 코치용 매치피드백 관리는 관리자 콘솔(/admin/analyses)에서만 제공한다.
  const cards = [
    {
      title: "토너먼트 피드백",
      desc: "대회 경기를 스스로 돌아보고 기록합니다. 코치 피드백도 여기서 확인하세요.",
      href: "/match-feedback?type=tournament",
      cta: "작성하기",
    },
    {
      title: "정규 훈련 피드백",
      desc: "정규 훈련 내용을 돌아보고 기록합니다. 코치 피드백도 여기서 확인하세요.",
      href: "/match-feedback?type=training",
      cta: "작성하기",
    },
  ];

  return (
    <div>
      <h1 className="font-display text-2xl font-bold">
        안녕하세요, {profile?.name || "선수"}님
      </h1>
      <p className="mt-1 text-sm text-muted">
        오늘도 글로벌 무대를 향한 한 걸음. 경기와 훈련을 스스로 돌아보며 성장을 기록하세요.
      </p>

      <section className="mt-8">
        <h2 className="font-display text-lg font-bold">매치피드백</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group flex flex-col rounded-2xl border border-line bg-card p-6 transition-colors hover:border-court-bright"
            >
              <h3 className="font-display text-lg font-bold group-hover:text-court">{card.title}</h3>
              <p className="mt-2 break-keep text-sm leading-relaxed text-muted">{card.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-court">
                {card.cta}
                <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
