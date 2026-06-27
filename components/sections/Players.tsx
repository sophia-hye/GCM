import { Section, SectionHeading } from "@/components/ui";

export function Players() {
  return (
    <Section id="players">
      <SectionHeading
        eyebrow="Our Players"
        title="배출 · 소속 선수"
        lead="프로가 된 후가 아니라, 되기 전부터 브랜드를 함께 만듭니다."
      />
      <div className="mt-12 rounded-2xl border border-dashed border-line p-10 text-center">
        <p className="text-sm text-muted">
          배출·소속 선수 정보를 준비 중입니다. 곧 공개될 예정입니다.
        </p>
      </div>
    </Section>
  );
}
