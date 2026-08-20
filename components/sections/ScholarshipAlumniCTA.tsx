import Image from "next/image";
import { Section, Button, Badge } from "@/components/ui";
import { ALUMNI } from "@/lib/alumni";

/** 장학 페이지: 스탠포드 100% 장학생 명세인 선수의 성장 이야기 CTA (대표원장 인사말 스타일) */
export function ScholarshipAlumniCTA() {
  const a = ALUMNI[0];
  if (!a) return null;

  return (
    <Section tone="muted" className="pt-0">
      <div className="grid items-center gap-8 md:grid-cols-[300px_1fr] md:gap-12">
        <div className="mx-auto w-full max-w-[280px] md:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-court-deep">
            <Image
              src={a.mainImage}
              alt={a.name}
              fill
              sizes="(max-width: 768px) 280px, 300px"
              className="object-cover object-top"
            />
          </div>
        </div>

        <div>
          <Badge>GCM Alumni Story</Badge>
          <h2 className="mt-4 break-keep font-display text-3xl font-bold tracking-tight sm:text-4xl">
            스탠포드 100% 장학생, 명세인
          </h2>
          <p className="mt-4 break-keep text-base leading-relaxed text-ink/85">
            경제적·환경적 장벽 없이 오직 스포츠와 학업에만 집중할 수 있도록 — GCM 장학이 만든 변화의
            시작입니다. 스탠포드 대학교 D1 테니스팀 주장으로 성장한 명세인 선수의 이야기가, 지금
            도전을 준비하는 여러분의 길잡이가 되어줄 것입니다.
          </p>
          <Button href="/alumni" variant="court" className="mt-6">
            명세인 선수의 성장 이야기 살펴보기
          </Button>
        </div>
      </div>
    </Section>
  );
}
