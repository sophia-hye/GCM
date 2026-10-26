import { Section } from "@/components/ui";
import { Reveal } from "@/components/ui/Reveal";
import { AlumniGallery } from "@/components/alumni/AlumniGallery";
import { getLocale } from "@/lib/i18n";
import { pick, type I18nText } from "@/lib/i18n-pick";
import { PARENT_FEATURE as F } from "@/lib/parent-feature";

export async function ParentFeature() {
  const locale = await getLocale();
  const ko = locale === "ko";
  const t = (b: I18nText) => pick(locale, b);
  // 후기 본문 아래에 모아서 보여줄 갤러리 (데이터는 해당 섹션에 들어있다)
  const gallery = F.sections.flatMap((s) => s.gallery ?? []);
  const galleryName = pick(locale, {
    ko: "제주 응원",
    en: "Jeju cheering trip",
    zh: "济州应援",
    ja: "済州応援",
    it: "Trasferta a Jeju",
    fr: "Déplacement à Jeju",
    es: "Viaje a Jeju",
  });

  return (
    <Section tone="muted">
      <Reveal className="mx-auto max-w-3xl">
        <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-court-bright">
          {pick(locale, {
            ko: "GCM 학부모 후기",
            en: "GCM Parent Review",
            zh: "GCM 学生家长后记",
            ja: "GCM 保護者レビュー",
            it: "Recensione di un genitore GCM",
            fr: "Témoignage de parent GCM",
            es: "Reseña de una familia GCM",
          })}
        </p>

        <div className="mt-6 rounded-2xl border border-line bg-card/40 p-6 sm:p-9">
          <h2 className="break-keep font-display text-xl font-bold leading-snug sm:text-2xl">
            {t(F.title)}
          </h2>

          <div className="mt-6 space-y-4">
            {F.intro.map((p, i) => (
              <p key={i} className="break-keep text-[15px] leading-relaxed text-ink/85">
                {t(p)}
              </p>
            ))}
          </div>

          <div className="mt-8 space-y-8">
            {F.sections.map((s, i) => (
              <div key={i}>
                <h3 className="flex gap-2 break-keep font-display text-base font-bold text-ink sm:text-lg">
                  {s.icon ? <span aria-hidden>{s.icon}</span> : null}
                  <span>{t(s.heading)}</span>
                </h3>
                <div className="mt-3 space-y-3">
                  {s.paras.map((p, j) => (
                    <p key={j} className="break-keep text-[15px] leading-relaxed text-ink/80">
                      {t(p)}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <blockquote className="mt-8 break-keep border-l-4 border-court pl-5 font-display text-base font-semibold leading-relaxed text-ink sm:text-lg">
            {t(F.quote)}
          </blockquote>

          <div className="mt-6 space-y-4">
            {F.closing.map((p, i) => (
              <p key={i} className="break-keep text-[15px] leading-relaxed text-ink/85">
                {t(p)}
              </p>
            ))}
          </div>
        </div>

        {gallery.length > 0 ? (
          <div className="mt-8">
            <AlumniGallery images={gallery} name={galleryName} ko={ko} />
          </div>
        ) : null}
      </Reveal>
    </Section>
  );
}
