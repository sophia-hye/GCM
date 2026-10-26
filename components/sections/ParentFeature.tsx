import { Section, Button } from "@/components/ui";
import { Reveal } from "@/components/ui/Reveal";
import { getLocale } from "@/lib/i18n";
import { pick, type I18nText } from "@/lib/i18n-pick";
import { PARENT_FEATURE as F } from "@/lib/parent-feature";

export async function ParentFeature() {
  const locale = await getLocale();
  const t = (b: I18nText) => pick(locale, b);

  return (
    <Section tone="muted">
      <Reveal className="mx-auto max-w-3xl">
        <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-court-bright">
          {pick(locale, {
            ko: "학부모 대표 후기",
            en: "Featured Parent Review",
            zh: "学生家长代表后记",
            ja: "保護者の代表レビュー",
            it: "Testimonianza di un genitore",
            fr: "Témoignage d'un parent",
            es: "Reseña destacada de una familia",
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
                  <span aria-hidden>{s.icon}</span>
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

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/testimonial" variant="court">
            {pick(locale, {
              ko: "더 많은 후기 보러가기",
              en: "See more reviews",
              zh: "查看更多后记",
              ja: "もっとレビューを見る",
              it: "Vedi altre testimonianze",
              fr: "Voir plus de témoignages",
              es: "Ver más reseñas",
            })}
          </Button>
          <Button href="/coaches" variant="outline">
            {pick(locale, {
              ko: "코치진 보러가기",
              en: "Meet the coaches",
              zh: "认识教练团队",
              ja: "コーチ陣を見る",
              it: "Scopri gli allenatori",
              fr: "Voir les entraîneurs",
              es: "Ver a los entrenadores",
            })}
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
