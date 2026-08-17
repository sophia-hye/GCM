// 브라우저 전용: 아이폰 HEIC 사진은 크롬/윈도우/안드로이드에서 표시되지 않으므로
// 업로드 전에 JPEG 로 변환한다. HEIC 가 아니면 원본 파일을 그대로 돌려준다.

function isHeic(file: File): boolean {
  const type = file.type.toLowerCase();
  if (type === "image/heic" || type === "image/heif") return true;
  // 일부 브라우저는 HEIC 의 MIME 타입을 비워서 넘기므로 확장자로도 판별
  return /\.(heic|heif)$/i.test(file.name);
}

export async function convertHeicIfNeeded(file: File): Promise<File> {
  if (!isHeic(file)) return file;

  // heic2any 는 브라우저에서만 동작하므로 동적 import
  const heic2any = (await import("heic2any")).default;
  const converted = await heic2any({ blob: file, toType: "image/jpeg", quality: 0.82 });
  const blob = Array.isArray(converted) ? converted[0] : converted;
  const name = file.name.replace(/\.(heic|heif)$/i, ".jpg");
  return new File([blob], name, { type: "image/jpeg" });
}
