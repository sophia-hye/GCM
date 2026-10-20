import Image from "next/image";
import { Section, Button, Badge } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";
import { ALUMNI } from "@/lib/alumni";

/** 장학 페이지: 스탠포드 100% 장학생 명세인 선수의 성장 이야기 CTA (대표원장 인사말 스타일) */
export async function ScholarshipAlumniCTA() {
  const a = ALUMNI[0];
  if (!a) return null;
  const locale = await getLocale();
  const ko = locale === "ko";

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
            {pick(locale, {
              ko: "스탠포드 100% 장학생, 명세인",
              en: "Stanford Full-Ride Scholar, Myung Se-in",
              zh: "斯坦福全额奖学金获得者 Myung Se-in",
              ja: "スタンフォード全額奨学生 Myung Se-in",
              it: "Borsista a copertura totale a Stanford, Myung Se-in",
              fr: "Boursière à 100 % de Stanford, Myung Se-in",
              es: "Becaria con beca completa de Stanford, Myung Se-in",
            })}
          </h2>
          <p className="mt-4 break-keep text-base leading-relaxed text-ink/85">
            {pick(locale, {
              ko: "경제적·환경적 장벽 없이 오직 스포츠와 학업에만 집중할 수 있도록 — GCM 장학이 만든 변화의 시작입니다. 스탠포드 대학교 D1 테니스팀 주장으로 성장한 명세인 선수의 이야기가, 지금 도전을 준비하는 여러분의 길잡이가 되어줄 것입니다.",
              en: "Free of financial and environmental barriers, able to focus purely on sport and study — this is the change a GCM scholarship began. The story of Myung Se-in, who grew into captain of Stanford's D1 tennis team, will guide those preparing to take on the challenge today.",
              zh: "没有经济与环境的障碍，能够纯粹专注于运动与学业 — 这正是GCM奖学金所开启的改变。成长为斯坦福大学D1网球队队长的Myung Se-in的故事，将成为正在准备迎接挑战的你的指路明灯。",
              ja: "経済的・環境的な壁に縛られず、ただスポーツと学業だけに集中できる — それがGCM奨学金が生んだ変化の始まりです。スタンフォード大学D1テニスチームの主将へと成長したMyung Se-in選手の物語が、今まさに挑戦を準備するあなたの道しるべとなるでしょう。",
              it: "Liberi da barriere economiche e ambientali, capaci di concentrarsi unicamente sullo sport e sullo studio: è questo il cambiamento avviato da una borsa di studio GCM. La storia di Myung Se-in, diventata capitana della squadra di tennis D1 di Stanford, guiderà chi oggi si prepara ad affrontare la sfida.",
              fr: "Libérés des barrières financières et environnementales, capables de se consacrer uniquement au sport et aux études — voilà le changement qu'a amorcé une bourse GCM. L'histoire de Myung Se-in, devenue capitaine de l'équipe de tennis D1 de Stanford, guidera celles et ceux qui se préparent aujourd'hui à relever le défi.",
              es: "Libres de barreras económicas y ambientales, capaces de concentrarse únicamente en el deporte y el estudio: ese es el cambio que inició una beca GCM. La historia de Myung Se-in, que llegó a ser capitana del equipo de tenis D1 de Stanford, guiará a quienes hoy se preparan para afrontar el reto.",
            })}
          </p>
          <Button href="/alumni" variant="court" className="mt-6">
            {pick(locale, {
              ko: "명세인 선수의 성장 이야기 살펴보기",
              en: "Read Myung Se-in's Story",
              zh: "了解Myung Se-in选手的成长故事",
              ja: "Myung Se-in選手の成長ストーリーを見る",
              it: "Scopri la storia di Myung Se-in",
              fr: "Découvrir l'histoire de Myung Se-in",
              es: "Descubre la historia de Myung Se-in",
            })}
          </Button>
        </div>
      </div>
    </Section>
  );
}
