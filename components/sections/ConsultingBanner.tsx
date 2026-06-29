import Image from "next/image";
import { existsSync } from "fs";
import { join } from "path";
import { Container } from "@/components/ui";

const BANNER_PATH = "/img/gcm-consulting.png";

/**
 * Consulting 페이지 상단 배너.
 * public/img/gcm-consulting.png 파일이 존재할 때만 렌더링한다.
 * (파일이 없으면 아무것도 표시하지 않아 깨진 이미지가 노출되지 않음)
 */
export function ConsultingBanner() {
  const exists = existsSync(join(process.cwd(), "public", "img", "gcm-consulting.png"));
  if (!exists) return null;

  return (
    <section className="pt-8 sm:pt-12">
      <Container>
        <Image
          src={BANNER_PATH}
          alt="GCM — Global Champions Makers"
          width={1536}
          height={1024}
          priority
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="h-auto w-full rounded-2xl border border-line"
        />
      </Container>
    </section>
  );
}
