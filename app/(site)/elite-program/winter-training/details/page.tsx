import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { WinterCampDetails } from "@/components/sections/WinterCampDetails";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";

const NEXT = "/elite-program/winter-training/details";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick(locale, {
      ko: "2026–2027 의령 동계 집중훈련 안내 | GCM 테니스 아카데미",
      en: "2026–2027 Uiryeong Winter Intensive Training | GCM Tennis Academy",
    }),
    // 로그인 전용 안내 페이지 — 검색 색인 제외
    robots: { index: false, follow: false },
  };
}

export default async function WinterCampDetailsPage() {
  if (!isSupabaseConfigured()) {
    redirect(`/login?next=${encodeURIComponent(NEXT)}`);
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect(`/login?next=${encodeURIComponent(NEXT)}`);
  }

  return (
    <div className="pt-16">
      <WinterCampDetails />
    </div>
  );
}
