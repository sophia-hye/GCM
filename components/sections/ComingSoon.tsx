import Link from "next/link";
import { Container } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";

/** 준비중 안내 페이지 (아직 콘텐츠가 없는 메뉴용) */
export async function ComingSoon({
  eyebrow,
  title,
  desc,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
}) {
  const locale = await getLocale();
  return (
    <Container className="flex min-h-[52vh] flex-col items-center justify-center py-24 text-center">
      {eyebrow ? (
        <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-court-bright">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="mt-4 font-display text-3xl font-bold sm:text-4xl">{title}</h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
        {desc ?? pick(locale, { ko: "준비 중입니다. 곧 찾아뵙겠습니다.", en: "We're getting things ready. See you soon.", zh: "正在准备中，我们很快就会与您见面。", ja: "ただいま準備中です。近日中にお会いしましょう。", it: "Stiamo preparando tutto. A presto!", fr: "Nous préparons tout. À très bientôt !", es: "Estamos preparándolo todo. ¡Hasta pronto!" })}
      </p>
      <span className="mt-6 inline-block rounded-full border border-line px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted">
        Coming Soon
      </span>
      <Link
        href="/"
        className="mt-8 text-sm font-semibold text-court transition-colors hover:text-court-deep"
      >
        {pick(locale, { ko: "홈으로 돌아가기 →", en: "Back to home →", zh: "返回首页 →", ja: "ホームに戻る →", it: "Torna alla home →", fr: "Retour à l'accueil →", es: "Volver al inicio →" })}
      </Link>
    </Container>
  );
}
