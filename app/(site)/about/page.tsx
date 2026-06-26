import { AboutStory } from "@/components/sections/AboutStory";
import { WhyNow } from "@/components/sections/WhyNow";

export const metadata = { title: "About | GCM Tennis Academy" };

export default function AboutPage() {
  return (
    <div className="pt-16">
      <AboutStory />
      <WhyNow />
    </div>
  );
}
