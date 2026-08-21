"use client";

import { useEffect, useState } from "react";
import { isVideoUrl, isSvgUrl } from "@/lib/media";
import { useLocale } from "@/components/i18n/LocaleProvider";

type Popup = { id: string; image_url: string; link_url: string | null };

function PopupMedia({ url, alt }: { url: string; alt: string }) {
  if (isVideoUrl(url)) {
    return (
      <video src={url} className="block w-full rounded-lg" autoPlay muted loop playsInline controls />
    );
  }
  // SVG 는 Supabase 가 강제 다운로드(attachment)로 서빙하므로 동일 출처 프록시로 inline 재서빙
  const src = isSvgUrl(url) ? `/api/popup-media?u=${encodeURIComponent(url)}` : url;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className="block w-full rounded-lg" />;
}

/** 종료 시각(오늘 자정)까지 이 팝업을 숨긴다 */
function hideKey(id: string) {
  return `gcm_popup_hide_${id}`;
}

export function PopupModal({ popups }: { popups: Popup[] }) {
  const ko = useLocale() === "ko";
  const altText = ko ? "공지 팝업" : "Notice popup";
  // 표시할 팝업 id 목록 (마운트 시 '오늘 하루 보지 않기' 처리된 것 제외)
  const [visibleIds, setVisibleIds] = useState<string[]>([]);
  const [hideToday, setHideToday] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const now = Date.now();
    const ids = popups
      .filter((p) => {
        try {
          const until = Number(localStorage.getItem(hideKey(p.id)) || 0);
          return now >= until; // 숨김 기간이 지났으면 표시
        } catch {
          return true;
        }
      })
      .map((p) => p.id);
    setVisibleIds(ids);
  }, [popups]);

  const closeOne = (id: string) => {
    if (hideToday[id]) {
      try {
        const end = new Date();
        end.setHours(23, 59, 59, 999);
        localStorage.setItem(hideKey(id), String(end.getTime()));
      } catch {
        // 무시
      }
    }
    setVisibleIds((prev) => prev.filter((x) => x !== id));
  };

  const visible = popups.filter((p) => visibleIds.includes(p.id));
  if (visible.length === 0) return null;

  return (
    <div
      // 헤더(z-50)보다 낮게 두어 상단 네비/언어 토글이 팝업 위에서도 클릭되도록 한다.
      // (라이트박스 등 진짜 모달은 z-[100]로 별도 최상단 유지)
      className="fixed inset-0 z-40 flex items-start justify-center overflow-y-auto bg-black/60 px-4 pb-10 pt-24"
      role="dialog"
      aria-modal="true"
      onClick={() => setVisibleIds([])}
    >
      {/* 데스크톱: 가로 나란히 / 모바일: 세로로 살짝 겹쳐서 */}
      <div className="flex flex-col items-center gap-0 sm:flex-row sm:flex-wrap sm:items-start sm:justify-center sm:gap-4">
        {visible.map((p, i) => (
          <div
            key={p.id}
            style={{ zIndex: visible.length - i }}
            className="-mt-6 w-[300px] max-w-[calc(100vw-2rem)] shrink-0 overflow-hidden rounded-2xl bg-white shadow-2xl first:mt-0 sm:mt-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-3">
              {p.link_url ? (
                <>
                  <PopupMedia url={p.image_url} alt={altText} />
                  <a
                    href={p.link_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block rounded-lg bg-court px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-court-deep"
                  >
                    {ko ? "바로가기 →" : "Go →"}
                  </a>
                </>
              ) : (
                <PopupMedia url={p.image_url} alt={altText} />
              )}
            </div>
            <div className="flex items-center justify-between border-t border-line px-4 py-2.5">
              <label className="flex cursor-pointer items-center gap-2 text-xs text-muted">
                <input
                  type="checkbox"
                  checked={!!hideToday[p.id]}
                  onChange={(e) => setHideToday((s) => ({ ...s, [p.id]: e.target.checked }))}
                  className="h-4 w-4 accent-court"
                />
                {ko ? "오늘 하루 보지 않기" : "Don't show today"}
              </label>
              <button
                type="button"
                onClick={() => closeOne(p.id)}
                className="rounded-full bg-ink px-4 py-1.5 text-xs font-semibold text-white transition hover:brightness-125"
              >
                {ko ? "닫기" : "Close"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
