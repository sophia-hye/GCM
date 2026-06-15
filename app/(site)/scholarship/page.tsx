import { Scholarship } from "@/components/sections/Scholarship";
import { ScholarshipForm } from "@/components/ScholarshipForm";
import { Section } from "@/components/ui";

export const metadata = { title: "Apply for Scholarship | GCM Tennis Academy" };

export default function ScholarshipPage() {
  return (
    <div className="pt-16">
      <Scholarship />
      <Section className="pt-0">
        <ScholarshipForm />
      </Section>
    </div>
  );
}
