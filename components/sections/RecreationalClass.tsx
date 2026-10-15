import Image from "next/image";
import { Section, SectionHeading, Button } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { getDict, getUI } from "@/lib/site-content";

const CLASS_IMAGES: Record<string, string> = {
  KIDS: "/img/kids-class.png",
  ADULT: "/img/adult-class.png",
};

/** 단일 취미 클래스(키즈/성인) 상세 — /kids, /amateurs 페이지용
 *  photos 를 넘기면 단일 이미지 대신 실제 사진 갤러리(그리드)로 표시한다. */
export async function RecreationalClass({
  classKey,
  eyebrow,
  photos,
}: {
  classKey: "KIDS" | "ADULT";
  eyebrow: string;
  photos?: string[];
}) {
  const locale = await getLocale();
  const { recreational } = getDict(locale);
  const ui = getUI(locale);
  const c = recreational.classes.find((x) => x.key === classKey);
  if (!c) return null;

  const classInfo = (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-court">{c.key}</span>
        {c.age ? <span className="text-sm text-muted">{c.age}</span> : null}
      </div>
      <ul className="mt-6 space-y-3 text-base text-ink/90">
        {c.points.map((p) => (
          <li key={p} className="flex gap-2.5">
            <span className="text-court">·</span>
            {p}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button href={classKey === "ADULT" ? "/apply/adult" : "/contact"} variant="court">
          {ui.classApply}
        </Button>
      </div>
    </div>
  );

  return (
    <Section tone="muted">
      <SectionHeading eyebrow={eyebrow} title={c.title} lead={c.desc} />

      {photos && photos.length > 0 ? (
        <>
          <div className="mt-10 max-w-3xl">{classInfo}</div>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
            {photos.map((src) => (
              <div
                key={src}
                className="relative aspect-[3/4] overflow-hidden rounded-xl border border-line bg-court-deep"
              >
                <Image
                  src={src}
                  alt={c.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover object-top"
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
          {CLASS_IMAGES[classKey] ? (
            <Image
              src={CLASS_IMAGES[classKey]}
              alt={c.title}
              width={1536}
              height={1024}
              className="aspect-[3/2] w-full rounded-2xl border border-line object-cover"
            />
          ) : null}
          {classInfo}
        </div>
      )}
    </Section>
  );
}
