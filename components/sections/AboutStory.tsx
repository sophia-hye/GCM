import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui";
import { getLocale } from "@/lib/i18n";
import { getDict } from "@/lib/site-content";
import { getContentMap, cmsText, cmsParas } from "@/lib/cms";

export async function AboutStory() {
  const locale = await getLocale();
  const ko = locale === "ko";
  const { founding, directorMessage } = getDict(locale);
  const map = await getContentMap();
  const paragraphs = cmsParas(map, "founding.paragraphs", founding.paragraphs, ko);
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title={cmsText(map, "founding.title", founding.title, ko)}
        lead={cmsText(map, "founding.lead", founding.lead, ko)}
      />
      <div className="mt-12 max-w-3xl">
        {directorMessage.image ? (
          <div className="mb-5 w-44 overflow-hidden rounded-2xl border border-line sm:float-left sm:mb-2 sm:mr-7 sm:w-52">
            <Image
              src={directorMessage.image}
              alt={ko ? "오성국 대표 원장" : "Executive Director"}
              width={520}
              height={650}
              className="aspect-[4/5] h-auto w-full object-cover"
            />
          </div>
        ) : null}
        <div className="space-y-5">
          {paragraphs.map((p) => (
            <p key={p} className="whitespace-pre-line text-base leading-relaxed text-muted">
              {p}
            </p>
          ))}
        </div>
        <div className="clear-both" />
      </div>
    </Section>
  );
}
