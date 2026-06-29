import { HeroSection } from "@/components/sections/HeroSection";
import { StatBar } from "@/components/sections/StatBar";
import { AboutIntro } from "@/components/sections/AboutIntro";
import { SiteGuide } from "@/components/sections/SiteGuide";
import { Programs } from "@/components/sections/Programs";
import { Players } from "@/components/sections/Players";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatBar />
      <AboutIntro />
      <SiteGuide />
      <Programs />
      <Players />
      <Testimonials />
      <CTABanner />
    </>
  );
}
