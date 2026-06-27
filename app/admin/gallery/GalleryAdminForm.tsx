"use client";

import { useActionState, useRef } from "react";
import { createGalleryPost, type AdminState } from "@/app/admin/actions";

export function GalleryAdminForm() {
  const [state, action, pending] = useActionState<AdminState, FormData>(
    createGalleryPost,
    {},
  );
  const formRef = useRef<HTMLFormElement>(null);

  // 성공 시 폼 초기화
  if (state.ok && formRef.current) {
    formRef.current.reset();
  }

  const fieldClass =
    "w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none placeholder:text-muted/60 focus:border-court-bright";

  return (
    <form
      ref={formRef}
      action={action}
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
        disabled={pending}
        className="inline-flex items-center justify-center rounded-full bg-lime px-6 py-2.5 text-sm font-semibold text-white transition hover:brightness-105 disabled:opacity-60"
      >
        {pending ? "업로드 중..." : "갤러리에 등록"}
      </button>
    </form>
  );
}
