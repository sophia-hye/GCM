import { site, instagramAccounts } from "@/lib/site-data";
import { Container } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";

export async function Footer() {
  const locale = await getLocale();
  const year = new Date().getFullYear();
  const L = {
    blurb: pick(locale, {
      ko: "고성능 테니스 아카데미. 기술 · 피지컬 · 멘탈을 통합한 엘리트 육성.",
      en: "High-performance tennis academy. Elite development integrating technique, physical and mental.",
      zh: "高水平网球学院。融合技术、体能与心理的精英培养。",
      ja: "ハイパフォーマンス・テニスアカデミー。技術・フィジカル・メンタルを統合したエリート育成。",
      it: "Accademia di tennis ad alte prestazioni. Sviluppo d'élite che integra tecnica, fisico e mente.",
      fr: "Académie de tennis de haut niveau. Formation d'élite intégrant technique, physique et mental.",
      es: "Academia de tenis de alto rendimiento. Formación de élite que integra técnica, físico y mente.",
    }),
    rep: pick(locale, {
      ko: `대표 ${site.rep}.`,
      en: "Executive Director, Seong-gook Oh.",
      zh: "代表院长 吴成国.",
      ja: "代表院長 オ・ソングク.",
      it: "Direttore, Oh Seong-gook.",
      fr: "Directeur, Oh Seong-gook.",
      es: "Director, Oh Seong-gook.",
    }),
    est: `Since ${site.foundedDate}`,
    consult: pick(locale, {
      ko: "상담 예약 / 문의",
      en: "Book consulting / inquiry",
      zh: "预约咨询 / 垂询",
      ja: "相談予約 / お問い合わせ",
      it: "Prenota una consulenza / richiesta",
      fr: "Réserver un conseil / contact",
      es: "Reservar asesoría / consulta",
    }),
    kakao: pick(locale, {
      ko: "카카오톡 채널 @지씨엠",
      en: "KakaoTalk @지씨엠",
      zh: "KakaoTalk 频道 @지씨엠",
      ja: "カカオトーク @지씨엠",
      it: "KakaoTalk @지씨엠",
      fr: "KakaoTalk @지씨엠",
      es: "KakaoTalk @지씨엠",
    }),
    terms: pick(locale, {
      ko: "이용약관",
      en: "Terms",
      zh: "使用条款",
      ja: "利用規約",
      it: "Termini",
      fr: "Conditions",
      es: "Términos",
    }),
    privacy: pick(locale, {
      ko: "개인정보 처리방침",
      en: "Privacy Policy",
      zh: "隐私政策",
      ja: "プライバシーポリシー",
      it: "Informativa sulla privacy",
      fr: "Politique de confidentialité",
      es: "Política de privacidad",
    }),
    rights: pick(locale, {
      ko: `© ${site.foundedYear}–${year} GCM 아카데미. All rights reserved.`,
      en: `© ${site.foundedYear}–${year} GCM Academy. All rights reserved.`,
      zh: `© ${site.foundedYear}–${year} GCM 学院. 版权所有.`,
      ja: `© ${site.foundedYear}–${year} GCM アカデミー. All rights reserved.`,
      it: `© ${site.foundedYear}–${year} GCM Academy. Tutti i diritti riservati.`,
      fr: `© ${site.foundedYear}–${year} GCM Academy. Tous droits réservés.`,
      es: `© ${site.foundedYear}–${year} GCM Academy. Todos los derechos reservados.`,
    }),
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
            {instagramAccounts.map((ig) => (
              <a
                key={ig.handle}
                href={ig.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-court-bright"
              >
                Instagram @{ig.handle}
                <span className="text-muted/70"> ({locale === "ko" ? ig.note.ko : ig.note.en})</span>
              </a>
            ))}
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
