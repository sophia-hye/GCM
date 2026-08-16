import Link from "next/link";
import { Container } from "@/components/ui";

/** 준비중 안내 페이지 (아직 콘텐츠가 없는 메뉴용) */
export function ComingSoon({
  eyebrow,
  title,
  desc,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
}) {
  return (
    <Container className="flex min-h-[52vh] flex-col items-center justify-center py-24 text-center">
      {eyebrow ? (
        <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-court-bright">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="mt-4 font-display text-3xl font-bold sm:text-4xl">{title}</h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
        {desc ?? "준비 중입니다. 곧 찾아뵙겠습니다."}
      </p>
      <span className="mt-6 inline-block rounded-full border border-line px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted">
        Coming Soon
      </span>
      <Link
        href="/"
        className="mt-8 text-sm font-semibold text-court transition-colors hover:text-court-deep"
      >
        홈으로 돌아가기 →
      </Link>
    </Container>
  );
}
