import { Gallery, type GalleryPost } from "@/components/sections/Gallery";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { getLocale } from "@/lib/i18n";

export const metadata = { title: "Gallery | GCM Tennis Academy" };

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
      <Gallery posts={posts} locale={locale} />
    </div>
  );
}
