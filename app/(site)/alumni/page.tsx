import { pageMetadata } from "@/lib/page-metadata";
import { Section, SectionHeading } from "@/components/ui";
import { AlumniStory } from "@/components/alumni/AlumniStory";
import { ALUMNI } from "@/lib/alumni";

export const metadata = pageMetadata({
  title: "Alumni | GCM 테니스 아카데미",
  description:
    "GCM을 거쳐 세계 무대로 나아간 졸업생 이야기. 스탠포드 대학교 D1 테니스팀 주장 명세인 등 GCM Alumni의 성장 스토리를 소개합니다.",
  path: "/alumni",
});

export default function AlumniPage() {
  return (
    <div className="pt-16">
      <Section>
        <SectionHeading
          eyebrow="GCM Alumni"
          title="졸업생 이야기"
          lead="GCM을 거쳐 세계 무대로 나아간 졸업생의 여정. 코트 위의 인연이 평생의 자산이 됩니다."
          wideLead
        />

        <div className="mt-14 space-y-24">
          {ALUMNI.map((alumni) => (
            <AlumniStory key={alumni.slug} alumni={alumni} />
          ))}
        </div>
      </Section>
    </div>
  );
}
