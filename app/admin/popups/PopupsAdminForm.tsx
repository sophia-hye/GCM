"use client";

import { useActionState, useRef, useEffect } from "react";
import { createPopup } from "@/app/admin/popups/actions";
import type { AdminState } from "@/app/admin/actions";

export function PopupsAdminForm({ disabled }: { disabled?: boolean }) {
  const [state, action, pending] = useActionState<AdminState, FormData>(createPopup, {});
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.ok) formRef.current?.reset();
  }, [state.ok]);

  const fieldClass =
    "w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none placeholder:text-muted/60 focus:border-court-bright";

  if (disabled) {
    return (
      <div className="rounded-2xl border border-line bg-card p-6 text-sm text-muted">
        팝업은 최대 3개까지 등록할 수 있습니다. 새로 추가하려면 아래 목록에서 기존 팝업을 삭제해 주세요.
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      action={action}
      className="space-y-4 rounded-2xl border border-line bg-card p-6"
    >
      <h2 className="font-display text-lg font-bold">새 팝업 추가</h2>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">팝업 이미지</label>
        <input
          type="file"
          name="image"
          accept="image/*"
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

      {state.error ? (
        <p className="rounded-lg border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger">
          {state.error}
        </p>
      ) : null}
      {state.ok ? (
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
