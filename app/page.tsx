import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatBar } from "@/components/sections/StatBar";
import { WhyNow } from "@/components/sections/WhyNow";
import { UTRRoadmap } from "@/components/sections/UTRRoadmap";
import { ROISection } from "@/components/sections/ROISection";
import { Curriculum } from "@/components/sections/Curriculum";
import { SkillCoaching } from "@/components/sections/SkillCoaching";
import { TotalCare } from "@/components/sections/TotalCare";
import { SafetyNet } from "@/components/sections/SafetyNet";
import { Players } from "@/components/sections/Players";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { ScheduleSection } from "@/components/sections/ScheduleSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StatBar />
        <WhyNow />
        <UTRRoadmap />
        <ROISection />
        <Curriculum />
        <SkillCoaching />
        <TotalCare />
        <SafetyNet />
        <Players />
        <LogoMarquee />
        <ScheduleSection />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
