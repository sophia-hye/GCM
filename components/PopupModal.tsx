"use client";

import { useEffect, useState } from "react";

type Popup = { id: string; image_url: string; link_url: string | null };

const HIDE_KEY = "gcm_popups_hide_until";

export function PopupModal({ popups }: { popups: Popup[] }) {
  const [open, setOpen] = useState(false);
  const [dontShowToday, setDontShowToday] = useState(false);

  useEffect(() => {
    if (popups.length === 0) return;
    try {
      const until = Number(localStorage.getItem(HIDE_KEY) || 0);
      if (Date.now() < until) return;
    } catch {
      // localStorage 불가 환경이면 그냥 표시
    }
    setOpen(true);
  }, [popups.length]);

  if (!open || popups.length === 0) return null;

  const close = () => {
    if (dontShowToday) {
      try {
        const end = new Date();
        end.setHours(23, 59, 59, 999);
        localStorage.setItem(HIDE_KEY, String(end.getTime()));
      } catch {
        // 무시
      }
    }
    setOpen(false);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      onClick={close}
    >
      <div
        className="max-h-[88vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-3 p-3">
          {popups.map((p) =>
            p.link_url ? (
              <a key={p.id} href={p.link_url} target="_blank" rel="noopener noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image_url} alt="공지 팝업" className="w-full rounded-lg" />
              </a>
            ) : (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img key={p.id} src={p.image_url} alt="공지 팝업" className="w-full rounded-lg" />
            ),
          )}
        </div>

        <div className="flex items-center justify-between border-t border-line px-4 py-3">
          <label className="flex cursor-pointer items-center gap-2 text-sm text-muted">
            <input
              type="checkbox"
              checked={dontShowToday}
              onChange={(e) => setDontShowToday(e.target.checked)}
              className="h-4 w-4 accent-court"
            />
            오늘 하루 보지 않기
          </label>
          <button
            type="button"
            onClick={close}
            className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-white transition hover:brightness-125"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
