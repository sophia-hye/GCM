import { HeroSection } from "@/components/sections/HeroSection";
import { SiteGuide } from "@/components/sections/SiteGuide";
import { Programs } from "@/components/sections/Programs";
import { Players } from "@/components/sections/Players";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";
import { ChampionsCTA } from "@/components/sections/ChampionsCTA";
import { PopupModal } from "@/components/PopupModal";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";

async function getActivePopups() {
  if (!isSupabaseConfigured()) return [];
  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from("gcm_popups")
      .select("id, image_url, link_url")
      .eq("active", true)
      .order("sort_order", { ascending: true });
    return data ?? [];
  } catch {
    return [];
  }
}

export default async function Home() {
  const popups = await getActivePopups();
  return (
    <>
      <HeroSection />
      <SiteGuide />
      <Programs />
      <Players />
      <Testimonials />
      <CTABanner />
      <ChampionsCTA />
      {popups.length > 0 ? <PopupModal popups={popups} /> : null}
    </>
  );
}
