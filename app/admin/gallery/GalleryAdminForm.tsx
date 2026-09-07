"use client";

import { useActionState, useRef, useState } from "react";
import { createGalleryPost, type AdminState } from "@/app/admin/actions";
import { compressImage } from "@/lib/compress-image";

export function GalleryAdminForm() {
  const [state, action, pending] = useActionState<AdminState, FormData>(
    createGalleryPost,
    {},
  );
  const formRef = useRef<HTMLFormElement>(null);
  const [compressing, setCompressing] = useState(false);

  // 성공 시 폼 초기화
  if (state.ok && formRef.current) {
    formRef.current.reset();
  }

  // 업로드 전에 이미지를 리사이즈+WebP 재압축해 4MB 서버액션 제한과 용량 문제를 함께 해결
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem("images") as HTMLInputElement | null;
    const files = input?.files ? Array.from(input.files) : [];

    const fd = new FormData(form);
    if (files.length > 0) {
      setCompressing(true);
      try {
        fd.delete("images");
        for (const f of files) {
          const c = await compressImage(f);
          fd.append("images", c, c.name);
        }
      } finally {
        setCompressing(false);
      }
    }
    action(fd);
  }

  const busy = pending || compressing;

  const fieldClass =
    "w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none placeholder:text-muted/60 focus:border-court-bright";

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-line bg-card p-6"
    >
      <h2 className="font-display text-lg font-bold">새 갤러리 글</h2>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">제목</label>
        <input name="title" required placeholder="예: 2026 여름 캠프" className={fieldClass} />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">내용 (선택)</label>
        <textarea name="body" rows={3} placeholder="간단한 설명" className={fieldClass} />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">
          이미지 (여러 장 선택 가능)
        </label>
        <input
          type="file"
          name="images"
          accept="image/*"
          multiple
          required
          className="block w-full text-sm text-muted file:mr-3 file:rounded-full file:border-0 file:bg-court file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-court-deep"
        />
      </div>

      {state.error ? (
        <p className="rounded-lg border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger">
          {state.error}
        </p>
      ) : null}
      {state.ok ? (
        <p className="rounded-lg border border-lime/40 bg-lime/10 px-3 py-2 text-sm text-lime">
          갤러리에 등록되었습니다.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={busy}
        className="inline-flex items-center justify-center rounded-full bg-lime px-6 py-2.5 text-sm font-semibold text-white transition hover:brightness-105 disabled:opacity-60"
      >
        {compressing ? "이미지 최적화 중..." : pending ? "업로드 중..." : "갤러리에 등록"}
      </button>
    </form>
  );
}
