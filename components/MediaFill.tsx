import Image from "next/image";
import { isVideoUrl } from "@/lib/media";

/**
 * 부모(relative) 를 꽉 채우는 미디어. 동영상이면 <video>(자동재생·음소거·반복),
 * 이미지면 next/image <Image fill> 로 렌더한다.
 */
export function MediaFill({
  src,
  alt,
  sizes,
  priority = false,
  className = "object-cover",
}: {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  if (isVideoUrl(src)) {
    return (
      <video
        src={src}
        className={`absolute inset-0 h-full w-full ${className}`}
        autoPlay
        muted
        loop
        playsInline
      />
    );
  }
  return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={className} />;
}
