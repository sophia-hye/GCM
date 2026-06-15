import { Programs } from "@/components/sections/Programs";
import { Curriculum } from "@/components/sections/Curriculum";
import { SkillCoaching } from "@/components/sections/SkillCoaching";
import { UTRRoadmap } from "@/components/sections/UTRRoadmap";
import { TotalCare } from "@/components/sections/TotalCare";
import { SafetyNet } from "@/components/sections/SafetyNet";

export const metadata = { title: "Programs | GCM Tennis Academy" };

export default function ProgramsPage() {
  return (
    <div className="pt-16">
      <Programs />
      <Curriculum />
      <SkillCoaching />
      <UTRRoadmap />
      <TotalCare />
      <SafetyNet />
    </div>
  );
}
