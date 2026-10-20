import { pageMetadata } from "@/lib/page-metadata";
import { PageJsonLd } from "@/components/PageJsonLd";
import { Gallery, type GalleryPost } from "@/components/sections/Gallery";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";

export async function generateMetadata(): Promise<import("next").Metadata> {
  const locale = await getLocale();
  return pageMetadata({
    title: pick(locale, {
      ko: "갤러리 | GCM 테니스 아카데미",
      en: "Gallery | GCM Tennis Academy",
      zh: "画廊 | GCM Tennis Academy",
      ja: "ギャラリー | GCM Tennis Academy",
      it: "Galleria | GCM Tennis Academy",
      fr: "Galerie | GCM Tennis Academy",
      es: "Galería | GCM Tennis Academy",
    }),
    description: pick(locale, {
      ko: "GCM 테니스 아카데미의 훈련·대회·캠프 현장 갤러리.",
      en: "Gallery of GCM Tennis Academy training, tournaments and camps.",
      zh: "GCM Tennis Academy 的训练、赛事与训练营现场画廊。",
      ja: "GCM Tennis Academyのトレーニング・大会・キャンプ現場のギャラリー。",
      it: "Galleria degli allenamenti, dei tornei e dei camp di GCM Tennis Academy.",
      fr: "Galerie des entraînements, tournois et camps de GCM Tennis Academy.",
      es: "Galería de los entrenamientos, torneos y campamentos de GCM Tennis Academy.",
    }),
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
      <PageJsonLd
        name={pick(locale, {
          ko: "갤러리",
          en: "Gallery",
          zh: "画廊",
          ja: "ギャラリー",
          it: "Galleria",
          fr: "Galerie",
          es: "Galería",
        })}
        path="/gallery"
      />
      <Gallery posts={posts} locale={locale} />
    </div>
  );
}
