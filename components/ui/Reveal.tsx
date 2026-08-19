import type { ReactNode } from "react";

/**
 * 스크롤 진입 시 부드럽게 페이드업으로 등장.
 *
 * 순수 CSS 애니메이션(.reveal, globals.css)만 사용한다 — JS(IntersectionObserver)에
 * 의존하지 않으므로, 하이드레이션 실패·청크 로드 실패·모바일 IO 미발화 등 어떤 상황에서도
 * 콘텐츠가 opacity:0 로 영구히 숨겨지지 않는다. (모션 비선호 시 globals.css 에서 즉시 표시)
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`reveal ${className}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
