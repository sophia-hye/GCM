import { Programs } from "@/components/sections/Programs";
import { Curriculum } from "@/components/sections/Curriculum";
import { TotalCare } from "@/components/sections/TotalCare";
import { SafetyNet } from "@/components/sections/SafetyNet";

export const metadata = { title: "Training | GCM Tennis Academy" };

export default function TrainingPage() {
  return (
    <div className="pt-16">
      <Programs />
      <Curriculum />
      <TotalCare />
      <SafetyNet />
    </div>
  );
}
