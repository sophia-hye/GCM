import Image from "next/image";
import { Section, Button, Badge } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { ALUMNI } from "@/lib/alumni";

/** 장학 페이지: 스탠포드 100% 장학생 명세인 선수의 성장 이야기 CTA (대표원장 인사말 스타일) */
export async function ScholarshipAlumniCTA() {
  const a = ALUMNI[0];
  if (!a) return null;
  const ko = (await getLocale()) === "ko";

  return (
    <Section tone="muted" className="pt-0">
      <div className="grid items-center gap-8 md:grid-cols-[300px_1fr] md:gap-12">
        <div className="mx-auto w-full max-w-[280px] md:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-court-deep">
            <Image
              src={a.mainImage}
              alt={ko ? a.name : a.nameEn ?? a.name}
              fill
              sizes="(max-width: 768px) 280px, 300px"
              className="object-cover object-top"
            />
          </div>
        </div>

        <div>
          <Badge>GCM Alumni Story</Badge>
          <h2 className="mt-4 break-keep font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {ko
              ? "스탠포드 100% 장학생, 명세인"
              : "Stanford Full-Ride Scholar, Myung Se-in"}
          </h2>
          <p className="mt-4 break-keep text-base leading-relaxed text-ink/85">
            {ko
              ? "경제적·환경적 장벽 없이 오직 스포츠와 학업에만 집중할 수 있도록 — GCM 장학이 만든 변화의 시작입니다. 스탠포드 대학교 D1 테니스팀 주장으로 성장한 명세인 선수의 이야기가, 지금 도전을 준비하는 여러분의 길잡이가 되어줄 것입니다."
              : "Free of financial and environmental barriers, able to focus purely on sport and study — this is the change a GCM scholarship began. The story of Myung Se-in, who grew into captain of Stanford's D1 tennis team, will guide those preparing to take on the challenge today."}
          </p>
          <Button href="/alumni" variant="court" className="mt-6">
            {ko ? "명세인 선수의 성장 이야기 살펴보기" : "Read Myung Se-in's Story"}
          </Button>
        </div>
      </div>
    </Section>
  );
}
