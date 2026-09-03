import { site } from "@/lib/site-data";
import { Container } from "@/components/ui";
import { getLocale } from "@/lib/i18n";

export async function Footer() {
  const en = (await getLocale()) === "en";
  const L = {
    blurb: en
      ? "High-performance tennis academy. Elite development integrating technique, physical and mental."
      : "고성능 테니스 아카데미. 기술 · 피지컬 · 멘탈을 통합한 엘리트 육성.",
    rep: en ? "Executive Director, Seong-gook Oh." : `대표 ${site.rep}.`,
    est: `Since ${site.foundedDate}`,
    consult: en ? "Book consulting / inquiry" : "상담 예약 / 문의",
    kakao: en ? "KakaoTalk @지씨엠" : "카카오톡 채널 @지씨엠",
    terms: en ? "Terms" : "이용약관",
    privacy: en ? "Privacy Policy" : "개인정보 처리방침",
    rights: en
      ? `© ${site.foundedYear}–${new Date().getFullYear()} GCM Academy. All rights reserved.`
      : `© ${site.foundedYear}–${new Date().getFullYear()} GCM 아카데미. All rights reserved.`,
  };

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
              {L.blurb}
              <br />
              {L.rep}
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-court">
              {L.est}
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-muted">
            <p className="font-semibold text-ink">Contact</p>
            <a href={`mailto:${site.email}`} className="hover:text-court-bright">
              {site.email}
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-court-bright"
            >
              Instagram @gcm_tennis
            </a>
            <a
              href="https://www.instagram.com/gcm.kids/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-court-bright"
            >
              Instagram @gcm.kids
            </a>
            <a
              href="https://www.instagram.com/gcm_amateur_tennis/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-court-bright"
            >
              Instagram @gcm_amateur_tennis
            </a>
            {site.kakao ? (
              <a
                href={site.kakao}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-court-bright"
              >
                {L.kakao}
              </a>
            ) : null}
            <a
              href="/consulting"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-court-bright"
            >
              {L.consult}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{L.rights}</p>
          <div className="flex gap-4">
            <a href="/terms" target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              {L.terms}
            </a>
            <a href="/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              {L.privacy}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
