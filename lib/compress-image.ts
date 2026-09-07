// 브라우저에서 이미지 업로드 전에 리사이즈 + 재압축(WebP)하는 클라이언트 유틸.
// Storage 용량 · 전송 대역폭 · 페이지 로딩 속도를 함께 줄인다.
// - 캔버스 기반이라 별도 의존성 없음
// - 애니메이션 GIF / SVG 는 손상 위험이 있어 원본 그대로 통과
// - EXIF 방향 자동 보정, WebP 미지원 브라우저는 JPEG 폴백
// - 어떤 이유로든 실패하거나 결과가 원본보다 크면 원본을 그대로 반환(안전 폴백)

export type CompressOptions = {
  maxDim?: number; // 가로/세로 중 긴 쪽의 최대 px
  quality?: number; // 0..1
  mimeType?: string; // 출력 MIME
};

const DEFAULTS = {
  maxDim: 1600,
  quality: 0.82,
  mimeType: "image/webp",
} as const;

function shouldSkip(file: File): boolean {
  return (
    !file.type.startsWith("image/") ||
    file.type === "image/gif" ||
    file.type === "image/svg+xml"
  );
}

function renameWithExt(name: string, ext: string): string {
  const base = name.replace(/\.[^./\\]+$/, "");
  return `${base || "image"}.${ext}`;
}

function toBlob(
  canvas: HTMLCanvasElement,
  mimeType: string,
  quality: number,
): Promise<Blob | null> {
  return new Promise((resolve) => canvas.toBlob((b) => resolve(b), mimeType, quality));
}

/** 업로드 직전에 호출: 리사이즈 + WebP 재압축한 새 File 을 반환한다. */
export async function compressImage(
  file: File,
  options: CompressOptions = {},
): Promise<File> {
  if (shouldSkip(file)) return file;
  const { maxDim, quality, mimeType } = { ...DEFAULTS, ...options };

  try {
    const bitmap = await createImageBitmap(file, { imageOrientation: "from-image" });
    const longest = Math.max(bitmap.width, bitmap.height);
    const scale = Math.min(1, maxDim / longest);
    const width = Math.max(1, Math.round(bitmap.width * scale));
    const height = Math.max(1, Math.round(bitmap.height * scale));

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      bitmap.close?.();
      return file;
    }
    ctx.drawImage(bitmap, 0, 0, width, height);
    bitmap.close?.();

    let outType = mimeType;
    let blob = await toBlob(canvas, mimeType, quality);
    // 브라우저가 WebP 인코딩을 지원하지 않으면 image/png 로 대체됨 → JPEG 재시도
    if (!blob || (mimeType === "image/webp" && blob.type !== "image/webp")) {
      outType = "image/jpeg";
      blob = await toBlob(canvas, outType, quality);
    }
    if (!blob) return file;
    if (blob.size >= file.size) return file; // 더 커지면 의미 없음

    const ext = outType === "image/webp" ? "webp" : "jpg";
    return new File([blob], renameWithExt(file.name, ext), {
      type: outType,
      lastModified: Date.now(),
    });
  } catch {
    return file;
  }
}
