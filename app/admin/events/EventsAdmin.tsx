"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import {
  createEventUploadUrl,
  saveEvent,
  updateEvent,
  setEventPublished,
  removeEvent,
  moveEvent,
} from "@/app/admin/events/actions";
import { formatEventDate, type SeouliteEvent } from "@/lib/events";

const MAX_BYTES = 10 * 1024 * 1024; // 10MB per file
const fieldClass =
  "w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none placeholder:text-muted/60 focus:border-court-bright";

/** 여러 파일을 서명 URL로 업로드하고 경로 배열을 반환 */
async function uploadImages(files: File[]): Promise<string[]> {
  const supabase = createClient();
  const paths: string[] = [];
  for (const file of files) {
    if (!file.type.startsWith("image/")) throw new Error("이미지 파일만 업로드할 수 있습니다.");
    if (file.size > MAX_BYTES) throw new Error("사진은 각 10MB 이하만 올릴 수 있습니다.");
    const urlRes = await createEventUploadUrl(file.name);
    if (!urlRes.ok) throw new Error(urlRes.error);
    const { error } = await supabase.storage
      .from("gallery")
      .uploadToSignedUrl(urlRes.path, urlRes.token, file, { contentType: file.type });
    if (error) throw new Error(`업로드 실패: ${error.message}`);
    paths.push(urlRes.path);
  }
  return paths;
}

type FormValues = {
  title: string;
  location: string;
  event_date: string;
  body: string;
  published: boolean;
};

function EventForm({
  initial,
  requireImage,
  submitLabel,
  onSubmit,
  onCancel,
}: {
  initial?: Partial<SeouliteEvent>;
  requireImage: boolean;
  submitLabel: string;
  onSubmit: (values: FormValues, imagePaths?: string[]) => Promise<{ error?: string; ok?: boolean }>;
  onCancel?: () => void;
}) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const files = fd.getAll("images").filter((f): f is File => f instanceof File && f.size > 0);
    const values: FormValues = {
      title: String(fd.get("title") ?? ""),
      location: String(fd.get("location") ?? ""),
      event_date: String(fd.get("event_date") ?? ""),
      body: String(fd.get("body") ?? ""),
      published: fd.get("published") === "on",
    };
    if (requireImage && files.length === 0) {
      setError("사진을 1장 이상 선택해 주세요.");
      return;
    }

    setPending(true);
    try {
      let imagePaths: string[] | undefined;
      if (files.length > 0) imagePaths = await uploadImages(files);
      const res = await onSubmit(values, imagePaths);
      if (res.error) {
        setError(res.error);
        return;
      }
      formRef.current?.reset();
      onCancel?.();
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "오류가 발생했습니다.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">제목 *</label>
        <input name="title" required defaultValue={initial?.title ?? ""} placeholder="예: 8월 한남동 정기 모임" className={fieldClass} />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-muted">장소 (선택)</label>
          <input name="location" defaultValue={initial?.location ?? ""} placeholder="예: 한남동" className={fieldClass} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-muted">모임 날짜 (선택)</label>
          <input name="event_date" type="date" defaultValue={initial?.event_date ?? ""} className={fieldClass} />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">후기 본문 (선택)</label>
        <textarea name="body" rows={4} defaultValue={initial?.body ?? ""} placeholder="모임 후기 (줄바꿈 가능)" className={fieldClass} />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">
          사진 {requireImage ? "* (첫 사진이 피드 썸네일)" : "(다시 선택 시 기존 사진 전체 교체)"}
        </label>
        <input
          type="file"
          name="images"
          accept="image/*"
          multiple
          className="block w-full text-sm text-muted file:mr-3 file:rounded-full file:border-0 file:bg-court file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-court-deep"
        />
      </div>
      <label className="flex items-center gap-2 text-sm text-muted">
        <input type="checkbox" name="published" defaultChecked={initial?.published ?? false} className="h-4 w-4" />
        공개 (체크 시 Seoulite 페이지에 노출)
      </label>

      {error ? (
        <p className="rounded-lg border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger">{error}</p>
      ) : null}

      <div className="flex gap-2">
        <button type="submit" disabled={pending} className="rounded-full bg-lime px-6 py-2.5 text-sm font-semibold text-white transition hover:brightness-105 disabled:opacity-60">
          {pending ? "업로드 중..." : submitLabel}
        </button>
        {onCancel ? (
          <button type="button" onClick={onCancel} className="rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-muted hover:text-ink">
            취소
          </button>
        ) : null}
      </div>
    </form>
  );
}

function EventRow({ event, index, total }: { event: SeouliteEvent; index: number; total: number }) {
  const router = useRouter();
  const [editing, setEditing] = useState(false);
  const [busy, setBusy] = useState(false);

  const run = async (fn: () => Promise<{ error?: string }>) => {
    setBusy(true);
    const res = await fn();
    setBusy(false);
    if (res?.error) alert(res.error);
    else router.refresh();
  };

  return (
    <li className="rounded-2xl border border-line bg-card p-4">
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-court-deep">
          {event.images[0] ? (
            <Image src={event.images[0]} alt={event.title} fill sizes="64px" className="object-cover" />
          ) : null}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold">
            {event.title}
            {!event.published ? (
              <span className="ml-2 rounded-md bg-card px-2 py-0.5 text-xs text-muted">비공개</span>
            ) : null}
          </p>
          <p className="truncate text-xs text-muted">
            {[formatEventDate(event.event_date), event.location, `사진 ${event.images.length}장`]
              .filter(Boolean)
              .join(" · ")}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <button onClick={() => run(() => moveEvent(event.id, "up"))} disabled={busy || index === 0} className="rounded-lg border border-line px-2 py-1 text-xs disabled:opacity-40 hover:border-court-bright" aria-label="위로">↑</button>
          <button onClick={() => run(() => moveEvent(event.id, "down"))} disabled={busy || index === total - 1} className="rounded-lg border border-line px-2 py-1 text-xs disabled:opacity-40 hover:border-court-bright" aria-label="아래로">↓</button>
          <button onClick={() => run(() => setEventPublished(event.id, !event.published))} disabled={busy} className="rounded-lg border border-line px-3 py-1 text-xs font-semibold hover:border-court-bright">
            {event.published ? "비공개로" : "공개로"}
          </button>
          <button onClick={() => setEditing((v) => !v)} className="rounded-lg border border-line px-3 py-1 text-xs font-semibold hover:border-court-bright">
            {editing ? "닫기" : "수정"}
          </button>
          <button onClick={() => { if (confirm("이 모임 후기를 삭제할까요?")) run(() => removeEvent(event.id)); }} disabled={busy} className="rounded-lg border border-danger/40 px-3 py-1 text-xs text-danger hover:bg-danger/10">삭제</button>
        </div>
      </div>

      {editing ? (
        <div className="mt-4 border-t border-line pt-4">
          <EventForm
            initial={event}
            requireImage={false}
            submitLabel="저장"
            onCancel={() => setEditing(false)}
            onSubmit={(values, imagePaths) => updateEvent(event.id, { ...values, imagePaths })}
          />
        </div>
      ) : null}
    </li>
  );
}

export function EventsAdmin({ rows }: { rows: SeouliteEvent[] }) {
  const [adding, setAdding] = useState(false);

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-line bg-card p-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg font-bold">새 모임 후기</h2>
          {!adding ? (
            <button onClick={() => setAdding(true)} className="rounded-full bg-lime px-5 py-2 text-sm font-semibold text-white hover:brightness-105">
              + 후기 추가
            </button>
          ) : null}
        </div>
        {adding ? (
          <div className="mt-5">
            <EventForm
              requireImage
              submitLabel="후기 등록"
              onCancel={() => setAdding(false)}
              onSubmit={(values, imagePaths) => saveEvent({ ...values, imagePaths })}
            />
          </div>
        ) : null}
      </div>

      <div>
        <h2 className="font-display text-lg font-bold">등록된 후기 ({rows.length})</h2>
        {rows.length === 0 ? (
          <p className="mt-3 text-sm text-muted">아직 등록된 후기가 없습니다.</p>
        ) : (
          <ul className="mt-4 space-y-3">
            {rows.map((ev, i) => (
              <EventRow key={ev.id} event={ev} index={i} total={rows.length} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
