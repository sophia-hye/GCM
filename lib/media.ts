/** URL 확장자로 동영상 여부 판별 */
export function isVideoUrl(url: string | null | undefined): boolean {
  if (!url) return false;
  return /\.(mp4|webm|mov|m4v|ogg)(\?|#|$)/i.test(url);
}

/** URL 확장자로 SVG 여부 판별 (애니메이션 SVG는 object 로 렌더해야 재생됨) */
export function isSvgUrl(url: string | null | undefined): boolean {
  if (!url) return false;
  return /\.svg(\?|#|$)/i.test(url);
}
