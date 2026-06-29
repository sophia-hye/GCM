import { AboutStory } from "@/components/sections/AboutStory";
import { DirectorMessage } from "@/components/sections/DirectorMessage";
import { WhyNow } from "@/components/sections/WhyNow";

export const metadata = { title: "About | GCM Tennis Academy" };

export default function AboutPage() {
  return (
    <div className="pt-16">
      <AboutStory />
      <DirectorMessage />
      <WhyNow />
    </div>
  );
}
