"use client";

import { useEffect, useState } from "react";
import { isVideoUrl, isSvgUrl } from "@/lib/media";

type Popup = { id: string; image_url: string; link_url: string | null };

function PopupMedia({ url }: { url: string }) {
  if (isVideoUrl(url)) {
    return (
      <video src={url} className="block w-full rounded-lg" autoPlay muted loop playsInline controls />
    );
  }
  if (isSvgUrl(url)) {
    // 애니메이션 SVG 는 object 로 렌더해야 재생된다.
    return (
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
        <object data={url} type="image/svg+xml" aria-label="공지 팝업" className="absolute inset-0 h-full w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={url} alt="공지 팝업" className="h-full w-full object-contain" />
        </object>
      </div>
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={url} alt="공지 팝업" className="block w-full rounded-lg" />;
}

/** 종료 시각(오늘 자정)까지 이 팝업을 숨긴다 */
function hideKey(id: string) {
  return `gcm_popup_hide_${id}`;
}

export function PopupModal({ popups }: { popups: Popup[] }) {
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
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/60 p-4 py-10"
      role="dialog"
      aria-modal="true"
      onClick={() => setVisibleIds([])}
    >
      {/* 팝업을 각각 별도 카드로 표시 */}
      <div className="flex flex-wrap items-start justify-center gap-4">
        {visible.map((p) => (
          <div
            key={p.id}
            className="w-full max-w-xs overflow-hidden rounded-2xl bg-white shadow-2xl sm:max-w-[300px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-3">
              {p.link_url ? (
                <>
                  <PopupMedia url={p.image_url} />
                  <a
                    href={p.link_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block rounded-lg bg-court px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-court-deep"
                  >
                    바로가기 →
                  </a>
                </>
              ) : (
                <PopupMedia url={p.image_url} />
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
                오늘 하루 보지 않기
              </label>
              <button
                type="button"
                onClick={() => closeOne(p.id)}
                className="rounded-full bg-ink px-4 py-1.5 text-xs font-semibold text-white transition hover:brightness-125"
              >
                닫기
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
