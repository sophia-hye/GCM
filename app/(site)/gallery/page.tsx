import { pageMetadata } from "@/lib/page-metadata";
import { PageJsonLd } from "@/components/PageJsonLd";
import { Gallery, type GalleryPost } from "@/components/sections/Gallery";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { getLocale } from "@/lib/i18n";

export async function generateMetadata(): Promise<import("next").Metadata> {
  const ko = (await getLocale()) === "ko";
  return pageMetadata({
    title: ko ? "갤러리 | GCM 테니스 아카데미" : "Gallery | GCM Tennis Academy",
    description: ko
      ? "GCM 테니스 아카데미의 훈련·대회·캠프 현장 갤러리."
      : "Gallery of GCM Tennis Academy training, tournaments and camps.",
    path: "/gallery",
  });
}

export default async function GalleryPage() {
  const locale = await getLocale();
  let posts: GalleryPost[] = [];

  if (isSupabaseConfigured()) {
    const supabase = await createClient();
    const { data } = await supabase
      .from("gcm_gallery")
      .select("id, title, body, images, created_at")
      .eq("published", true)
      .order("created_at", { ascending: false });
    posts = (data ?? []) as GalleryPost[];
  }

  return (
    <div className="pt-16">
      <PageJsonLd name="갤러리" path="/gallery" />
      <Gallery posts={posts} locale={locale} />
    </div>
  );
}
