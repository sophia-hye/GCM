"use client";

import { useActionState } from "react";
import { saveContentField } from "@/app/admin/content/actions";
import type { AdminState } from "@/app/admin/actions";
import type { CmsField } from "@/lib/cms";

type FieldMeta = Pick<CmsField, "key" | "label" | "multiline" | "paragraphs" | "list">;

function LocaleInput({
  field,
  locale,
  localeLabel,
  value,
  overridden,
}: {
  field: FieldMeta;
  locale: "ko" | "en";
  localeLabel: string;
  value: string;
  overridden: boolean;
}) {
  const [state, action, pending] = useActionState<AdminState, FormData>(saveContentField, {});
  const inputClass =
    "w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-court-bright";
  const rows = field.paragraphs ? 8 : field.list ? 5 : 3;

  return (
    <form action={action}>
      <div className="mb-1 flex items-center gap-2">
        <span className="rounded-md border border-line px-1.5 py-0.5 text-[11px] font-bold text-muted">
          {localeLabel}
        </span>
        {overridden ? (
          <span className="rounded-md bg-lime/15 px-2 py-0.5 text-[11px] font-semibold text-lime">수정됨</span>
        ) : (
          <span className="rounded-md bg-muted/15 px-2 py-0.5 text-[11px] text-muted">기본값</span>
        )}
      </div>
      <input type="hidden" name="key" value={field.key} />
      <input type="hidden" name="locale" value={locale} />
      {field.multiline ? (
        <textarea name="value" defaultValue={value} rows={rows} className={inputClass} />
      ) : (
        <input name="value" defaultValue={value} className={inputClass} />
      )}
      <div className="mt-2 flex items-center gap-3">
        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-court px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-court-deep disabled:opacity-60"
        >
          {pending ? "저장 중..." : "저장"}
        </button>
        <span className="text-[11px] text-muted">비우고 저장 → 기본값 복원</span>
        {state.ok ? <span className="text-xs font-semibold text-lime">저장됨 ✓</span> : null}
        {state.error ? <span className="text-xs font-semibold text-danger">{state.error}</span> : null}
      </div>
    </form>
  );
}

export function ContentFieldForm({
  field,
  koValue,
  enValue,
  koOverridden,
  enOverridden,
}: {
  field: FieldMeta;
  koValue: string;
  enValue: string;
  koOverridden: boolean;
  enOverridden: boolean;
}) {
  return (
    <div className="rounded-2xl border border-line bg-card p-5">
      <div className="mb-3 flex items-center gap-2">
        <label className="text-sm font-semibold text-ink">{field.label}</label>
      </div>

      {field.paragraphs ? (
        <p className="-mt-1 mb-3 text-[11px] text-muted">문단은 사이에 <b>빈 줄</b>을 넣어 구분합니다.</p>
      ) : field.list ? (
        <p className="-mt-1 mb-3 text-[11px] text-muted">항목은 <b>한 줄에 하나씩</b> 입력합니다.</p>
      ) : null}

      <div className="grid gap-4 lg:grid-cols-2">
        <LocaleInput field={field} locale="ko" localeLabel="한국어" value={koValue} overridden={koOverridden} />
        <LocaleInput field={field} locale="en" localeLabel="English" value={enValue} overridden={enOverridden} />
      </div>
    </div>
  );
}
