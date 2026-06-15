import Link from "next/link";
import { site } from "@/lib/site-data";
import { Container } from "@/components/ui";

export function Footer() {
  return (
    <footer className="border-t border-line bg-base py-14">
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div>
            <p className="font-display text-2xl font-extrabold">
              {site.name}
              <span className="text-lime">.</span>
            </p>
            <p className="mt-3 max-w-sm text-sm text-muted">
              고성능 테니스 아카데미. 기술 · 피지컬 · 멘탈을 통합한 엘리트 육성.
              <br />
              대표 {site.rep}.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-muted">
            <p className="font-semibold text-ink">Contact</p>
            <a href={`mailto:${site.email}`} className="hover:text-court-bright">
              {site.email}
            </a>
            <Link href={site.instagram} className="hover:text-court-bright">
              Instagram @gcm_tennis
            </Link>
            <Link href="/consultation" className="hover:text-court-bright">
              상담 예약 / 문의
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} GCM 아카데미. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-ink">
              이용약관
            </Link>
            <Link href="/privacy" className="hover:text-ink">
              개인정보 처리방침
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
