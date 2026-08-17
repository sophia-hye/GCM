"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { createPopupUploadUrl, savePopup } from "@/app/admin/popups/actions";

const MAX_BYTES = 50 * 1024 * 1024; // 50MB (동영상 대비)

export function PopupsAdminForm({ disabled }: { disabled?: boolean }) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState(false);

  const fieldClass =
    "w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none placeholder:text-muted/60 focus:border-court-bright";

  if (disabled) {
    return (
      <div className="rounded-2xl border border-line bg-card p-6 text-sm text-muted">
        팝업은 최대 3개까지 등록할 수 있습니다. 새로 추가하려면 아래 목록에서 기존 팝업을 삭제해 주세요.
      </div>
    );
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setOk(false);

    const fd = new FormData(e.currentTarget);
    const file = fd.get("image");
    const linkUrl = String(fd.get("link_url") ?? "");

    if (!(file instanceof File) || file.size === 0) {
      setError("이미지를 선택해 주세요.");
      return;
    }
    if (!file.type.startsWith("image/") && !file.type.startsWith("video/")) {
      setError("이미지 또는 동영상 파일만 업로드할 수 있습니다.");
      return;
    }
    if (file.size > MAX_BYTES) {
      setError("파일은 50MB 이하만 올릴 수 있습니다. 압축 후 다시 시도해 주세요.");
      return;
    }

    setPending(true);
    try {
      // 1) 서버에서 서명 업로드 URL 발급
      const urlRes = await createPopupUploadUrl(file.name);
      if (!urlRes.ok) {
        setError(urlRes.error);
        return;
      }
      // 2) 브라우저 → Supabase 스토리지로 직접 업로드 (Vercel 우회)
      const supabase = createClient();
      const { error: upErr } = await supabase.storage
        .from("gallery")
        .uploadToSignedUrl(urlRes.path, urlRes.token, file, { contentType: file.type });
      if (upErr) {
        setError(`업로드 실패: ${upErr.message}`);
        return;
      }
      // 3) 서버에 레코드 저장
      const saveRes = await savePopup(urlRes.path, linkUrl);
      if (saveRes.error) {
        setError(saveRes.error);
        return;
      }
      setOk(true);
      formRef.current?.reset();
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "업로드 중 오류가 발생했습니다.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="space-y-4 rounded-2xl border border-line bg-card p-6"
    >
      <h2 className="font-display text-lg font-bold">새 팝업 추가</h2>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">
          팝업 이미지 또는 동영상 (최대 50MB)
        </label>
        <input
          type="file"
          name="image"
          accept="image/*,video/*"
          required
          className="block w-full text-sm text-muted file:mr-3 file:rounded-full file:border-0 file:bg-court file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-court-deep"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">
          클릭 시 이동 링크 (선택)
        </label>
        <input
          name="link_url"
          type="url"
          placeholder="https://... (비워두면 이미지만 표시)"
          className={fieldClass}
        />
      </div>

      {error ? (
        <p className="rounded-lg border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger">
          {error}
        </p>
      ) : null}
      {ok ? (
        <p className="rounded-lg border border-lime/40 bg-lime/10 px-3 py-2 text-sm text-lime">
          팝업이 등록되었습니다.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-lime px-6 py-2.5 text-sm font-semibold text-[#08111f] transition hover:brightness-110 disabled:opacity-60"
      >
        {pending ? "업로드 중..." : "팝업 등록"}
      </button>
    </form>
  );
}
