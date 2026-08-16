"use client";

import { useActionState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createFaq, updateFaq, deleteFaq, moveFaq } from "@/app/admin/actions";
import { FAQ_MAX, type Faq } from "@/lib/faq";
import type { AdminState } from "@/app/admin/actions";

const fieldClass =
  "w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none placeholder:text-muted/60 focus:border-court-bright";

function AddFaqForm({ onDone }: { onDone: () => void }) {
  const [state, action, pending] = useActionState<AdminState, FormData>(createFaq, {});
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.ok) {
      formRef.current?.reset();
      onDone();
    }
  }, [state.ok, onDone]);

  return (
    <form ref={formRef} action={action} className="space-y-3 rounded-2xl border border-line bg-card p-6">
      <h2 className="font-display text-lg font-bold">새 FAQ 추가</h2>
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">질문</label>
        <input name="question" required placeholder="예: 수업은 몇 명 정원인가요?" className={fieldClass} />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">답변</label>
        <textarea name="answer" rows={3} required placeholder="답변을 입력하세요." className={fieldClass} />
      </div>
      {state.error ? (
        <p className="rounded-lg border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger">
          {state.error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center rounded-full bg-lime px-6 py-2.5 text-sm font-semibold text-white transition hover:brightness-105 disabled:opacity-60"
      >
        {pending ? "저장 중..." : "FAQ 추가"}
      </button>
    </form>
  );
}

function FaqRow({
  faq,
  index,
  total,
  onChanged,
}: {
  faq: Faq;
  index: number;
  total: number;
  onChanged: () => void;
}) {
  const [state, action, pending] = useActionState<AdminState, FormData>(updateFaq, {});
  const router = useRouter();

  useEffect(() => {
    if (state.ok) onChanged();
  }, [state.ok, onChanged]);

  const sendVoid = async (fn: (fd: FormData) => Promise<void>, extra: Record<string, string>) => {
    const fd = new FormData();
    fd.set("id", faq.id);
    Object.entries(extra).forEach(([k, v]) => fd.set(k, v));
    await fn(fd);
    router.refresh();
  };

  return (
    <li className="rounded-2xl border border-line bg-card p-5">
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="text-xs font-semibold text-muted">Q{index + 1}</span>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => sendVoid(moveFaq, { dir: "up" })}
            disabled={index === 0}
            className="rounded-lg border border-line px-2 py-1 text-xs disabled:opacity-40 hover:border-court-bright"
            aria-label="위로"
          >
            ↑
          </button>
          <button
            type="button"
            onClick={() => sendVoid(moveFaq, { dir: "down" })}
            disabled={index === total - 1}
            className="rounded-lg border border-line px-2 py-1 text-xs disabled:opacity-40 hover:border-court-bright"
            aria-label="아래로"
          >
            ↓
          </button>
          <button
            type="button"
            onClick={() => {
              if (confirm("이 FAQ를 삭제할까요?")) sendVoid(deleteFaq, {});
            }}
            className="rounded-lg border border-danger/40 px-2 py-1 text-xs text-danger hover:bg-danger/10"
          >
            삭제
          </button>
        </div>
      </div>

      <form action={action} className="space-y-3">
        <input type="hidden" name="id" value={faq.id} />
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-muted">질문</label>
          <input name="question" defaultValue={faq.question} required className={fieldClass} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-muted">답변</label>
          <textarea name="answer" rows={3} defaultValue={faq.answer} required className={fieldClass} />
        </div>
        <div className="flex items-center justify-between gap-3">
          <label className="flex items-center gap-2 text-sm text-muted">
            <input type="checkbox" name="published" defaultChecked={faq.published} className="h-4 w-4" />
            공개
          </label>
          {state.error ? <span className="text-xs text-danger">{state.error}</span> : null}
          <button
            type="submit"
            disabled={pending}
            className="rounded-full border border-court-bright px-5 py-2 text-sm font-semibold text-court-bright transition hover:bg-court hover:text-white disabled:opacity-60"
          >
            {pending ? "저장 중..." : "저장"}
          </button>
        </div>
      </form>
    </li>
  );
}

export function FaqAdmin({ rows }: { rows: Faq[] }) {
  const router = useRouter();
  const refresh = () => router.refresh();

  return (
    <div className="space-y-8">
      {rows.length < FAQ_MAX ? (
        <AddFaqForm onDone={refresh} />
      ) : (
        <p className="rounded-2xl border border-line bg-card px-5 py-4 text-sm text-muted">
          FAQ는 최대 {FAQ_MAX}개까지 등록할 수 있습니다. 새로 추가하려면 기존 항목을 삭제해 주세요.
        </p>
      )}

      <div>
        <h2 className="font-display text-lg font-bold">
          등록된 FAQ ({rows.length}/{FAQ_MAX})
        </h2>
        {rows.length === 0 ? (
          <p className="mt-3 text-sm text-muted">아직 등록된 FAQ가 없습니다.</p>
        ) : (
          <ul className="mt-4 space-y-4">
            {rows.map((faq, i) => (
              <FaqRow key={faq.id} faq={faq} index={i} total={rows.length} onChanged={refresh} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
