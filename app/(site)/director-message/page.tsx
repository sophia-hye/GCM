import type { Metadata } from "next";
import { pageMetadata } from "@/lib/page-metadata";
import { DirectorMessage } from "@/components/sections/DirectorMessage";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return pageMetadata({
    title: pick(locale, {
      ko: "대표원장 인사말 | GCM 테니스 아카데미",
      en: "Director's Message | GCM Tennis Academy",
      zh: "总院长致辞 | GCM Tennis Academy",
      ja: "代表院長あいさつ | GCM Tennis Academy",
      it: "Messaggio del direttore | GCM Tennis Academy",
      fr: "Message du directeur | GCM Tennis Academy",
      es: "Mensaje del director | GCM Tennis Academy",
    }),
    description: pick(locale, {
      ko: "국제무대를 거친 대표 원장 오성국이 전하는 GCM의 교육 철학과 학부모께 드리는 약속.",
      en: "GCM's education philosophy and a promise to parents, from Executive Director Seong-gook Oh, who competed on the international stage.",
      zh: "曾征战国际赛场的总院长 Seong-gook Oh，分享 GCM 的教育理念以及对家长的承诺。",
      ja: "国際舞台を経験した代表院長 Seong-gook Oh が伝える、GCMの教育理念と保護者へのお約束。",
      it: "La filosofia educativa di GCM e una promessa ai genitori, dal direttore esecutivo Seong-gook Oh, che ha gareggiato sulla scena internazionale.",
      fr: "La philosophie éducative de GCM et une promesse aux parents, par le directeur exécutif Seong-gook Oh, qui a évolué sur la scène internationale.",
      es: "La filosofía educativa de GCM y una promesa a los padres, del director ejecutivo Seong-gook Oh, que compitió en el escenario internacional.",
    }),
    path: "/director-message",
  });
}

export default function DirectorMessagePage() {
  return (
    <div className="pt-16">
      <DirectorMessage />
    </div>
  );
}
