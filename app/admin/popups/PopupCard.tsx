"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { isVideoUrl, isSvgUrl } from "@/lib/media";
import {
  setPopupActive,
  removePopup,
  updatePopupLink,
  createPopupUploadUrl,
  updatePopupImage,
} from "@/app/admin/popups/actions";

type Popup = { id: string; image_url: string; link_url: string | null; active: boolean };

export function PopupCard({ popup }: { popup: Popup }) {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [editingLink, setEditingLink] = useState(false);
  const [linkValue, setLinkValue] = useState(popup.link_url ?? "");
  const [error, setError] = useState<string | null>(null);

  async function run(fn: () => Promise<{ ok?: boolean; error?: string }>) {
    setBusy(true);
    setError(null);
    try {
      const res = await fn();
      if (res?.error) {
        setError(res.error);
        return false;
      }
      router.refresh();
      return true;
    } catch (e) {
      setError(e instanceof Error ? e.message : "오류가 발생했습니다.");
      return false;
    } finally {
      setBusy(false);
    }
  }

  async function onReplaceImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const isSvg = /\.svg$/i.test(file.name);
    if (!file.type.startsWith("image/") && !file.type.startsWith("video/") && !isSvg) {
      setError("이미지 · 동영상 · SVG 파일만 업로드할 수 있습니다.");
      return;
    }
    if (file.size > 50 * 1024 * 1024) {
      setError("파일은 50MB 이하만 올릴 수 있습니다.");
      return;
    }
    const contentType = file.type || (isSvg ? "image/svg+xml" : "application/octet-stream");
    setBusy(true);
    setError(null);
    try {
      const urlRes = await createPopupUploadUrl(file.name);
      if (!urlRes.ok) {
        setError(urlRes.error);
        return;
      }
      const supabase = createClient();
      const { error: upErr } = await supabase.storage
        .from("gallery")
        .uploadToSignedUrl(urlRes.path, urlRes.token, file, { contentType });
      if (upErr) {
        setError("업로드 실패: " + upErr.message);
        return;
      }
      const res = await updatePopupImage(popup.id, urlRes.path);
      if (res.error) {
        setError(res.error);
        return;
      }
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "이미지 교체 오류.");
    } finally {
      setBusy(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {isVideoUrl(popup.image_url) ? (
        <video src={popup.image_url} className="aspect-[4/5] w-full bg-base object-contain" muted playsInline controls />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={isSvgUrl(popup.image_url) ? `/api/popup-media?u=${encodeURIComponent(popup.image_url)}` : popup.image_url}
          alt="팝업 이미지"
          className="aspect-[4/5] w-full bg-base object-contain"
        />
      )}

      <div className="space-y-3 p-4">
        <span
          className={`inline-block rounded-md px-2 py-1 text-xs font-semibold ${
            popup.active ? "bg-lime/15 text-lime" : "bg-muted/15 text-muted"
          }`}
        >
          {popup.active ? "노출 중" : "숨김"}
        </span>

        {/* 링크 */}
        {editingLink ? (
          <div className="space-y-2">
            <input
              type="url"
              value={linkValue}
              onChange={(e) => setLinkValue(e.target.value)}
              placeholder="https://... (비우면 링크 없음)"
              className="w-full rounded-lg border border-line bg-white px-2 py-1.5 text-xs outline-none focus:border-court-bright"
            />
            <div className="flex gap-2">
              <button
                type="button"
                disabled={busy}
                onClick={async () => {
                  const ok = await run(() => updatePopupLink(popup.id, linkValue));
                  if (ok) setEditingLink(false);
                }}
                className="rounded-lg bg-court px-3 py-1.5 text-xs font-semibold text-white disabled:opacity-60"
              >
                링크 저장
              </button>
              <button
                type="button"
                onClick={() => {
                  setLinkValue(popup.link_url ?? "");
                  setEditingLink(false);
                }}
                className="rounded-lg border border-line px-3 py-1.5 text-xs text-muted"
              >
                취소
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-2">
            {popup.link_url ? (
              <a
                href={popup.link_url}
                target="_blank"
                rel="noopener noreferrer"
                className="max-w-[60%] truncate text-xs text-court-bright hover:underline"
              >
                {popup.link_url}
              </a>
            ) : (
              <span className="text-xs text-muted">링크 없음</span>
            )}
            <button
              type="button"
              onClick={() => setEditingLink(true)}
              className="text-xs font-semibold text-court-bright hover:underline"
            >
              링크 수정
            </button>
          </div>
        )}

        {/* 동작 버튼 */}
        <div className="flex flex-wrap gap-2 border-t border-line pt-3">
          <button
            type="button"
            disabled={busy}
            onClick={() => run(() => setPopupActive(popup.id, !popup.active))}
            className="rounded-lg border border-line px-3 py-1.5 text-xs font-semibold hover:border-court-bright disabled:opacity-60"
          >
            {popup.active ? "숨기기" : "노출하기"}
          </button>

          <button
            type="button"
            disabled={busy}
            onClick={() => fileRef.current?.click()}
            className="rounded-lg border border-line px-3 py-1.5 text-xs font-semibold hover:border-court-bright disabled:opacity-60"
          >
            이미지 교체
          </button>
          <input ref={fileRef} type="file" accept="image/*,video/*,.svg" onChange={onReplaceImage} className="hidden" />

          <button
            type="button"
            disabled={busy}
            onClick={() => {
              if (confirm("이 팝업을 삭제할까요?")) run(() => removePopup(popup.id));
            }}
            className="rounded-lg border border-danger/40 px-3 py-1.5 text-xs font-semibold text-danger hover:bg-danger/10 disabled:opacity-60"
          >
            삭제
          </button>
        </div>

        {busy ? <p className="text-xs text-muted">처리 중...</p> : null}
        {error ? <p className="text-xs font-semibold text-danger">{error}</p> : null}
      </div>
    </div>
  );
}
