"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import {
  createProgramUploadUrl,
  saveProgram,
  updateProgram,
  setProgramPublished,
  removeProgram,
  moveProgram,
} from "@/app/admin/programs/actions";
import { formatPrice, type Program } from "@/lib/programs";

const MAX_BYTES = 10 * 1024 * 1024; // 10MB
const fieldClass =
  "w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none placeholder:text-muted/60 focus:border-court-bright";

async function uploadImage(file: File): Promise<string> {
  if (!file.type.startsWith("image/")) throw new Error("이미지 파일만 업로드할 수 있습니다.");
  if (file.size > MAX_BYTES) throw new Error("이미지는 10MB 이하만 올릴 수 있습니다.");
  const urlRes = await createProgramUploadUrl(file.name);
  if (!urlRes.ok) throw new Error(urlRes.error);
  const supabase = createClient();
  const { error } = await supabase.storage
    .from("gallery")
    .uploadToSignedUrl(urlRes.path, urlRes.token, file, { contentType: file.type });
  if (error) throw new Error(`업로드 실패: ${error.message}`);
  return urlRes.path;
}

type FormValues = {
  title: string;
  summary: string;
  description: string;
  price: string;
  duration: string;
  published: boolean;
};

function ProgramForm({
  initial,
  requireImage,
  submitLabel,
  onSubmit,
  onCancel,
}: {
  initial?: Partial<Program>;
  requireImage: boolean;
  submitLabel: string;
  onSubmit: (values: FormValues, imagePath?: string) => Promise<{ error?: string; ok?: boolean }>;
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
    const file = fd.get("image");
    const values: FormValues = {
      title: String(fd.get("title") ?? ""),
      summary: String(fd.get("summary") ?? ""),
      description: String(fd.get("description") ?? ""),
      price: String(fd.get("price") ?? ""),
      duration: String(fd.get("duration") ?? ""),
      published: fd.get("published") === "on",
    };
    const hasFile = file instanceof File && file.size > 0;
    if (requireImage && !hasFile) {
      setError("대표 이미지를 선택해 주세요.");
      return;
    }

    setPending(true);
    try {
      let imagePath: string | undefined;
      if (hasFile) imagePath = await uploadImage(file as File);
      const res = await onSubmit(values, imagePath);
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
        <label className="mb-1.5 block text-xs font-semibold text-muted">프로그램 제목 *</label>
        <input name="title" required defaultValue={initial?.title ?? ""} className={fieldClass} />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-muted">가격 (원) — 비우면 '가격 문의'</label>
          <input name="price" defaultValue={initial?.price != null ? String(initial.price) : ""} inputMode="numeric" placeholder="예: 1200000" className={fieldClass} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-muted">기간/구성 (선택)</label>
          <input name="duration" defaultValue={initial?.duration ?? ""} placeholder="예: 8주 과정" className={fieldClass} />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">한 줄 요약 (카드용)</label>
        <input name="summary" defaultValue={initial?.summary ?? ""} placeholder="카드에 표시될 짧은 설명" className={fieldClass} />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">상세 설명</label>
        <textarea name="description" rows={5} defaultValue={initial?.description ?? ""} placeholder="상세 페이지 본문 (줄바꿈 가능)" className={fieldClass} />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">
          대표 이미지 {requireImage ? "*" : "(교체 시에만 선택)"}
        </label>
        <input
          type="file"
          name="image"
          accept="image/*"
          className="block w-full text-sm text-muted file:mr-3 file:rounded-full file:border-0 file:bg-court file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-court-deep"
        />
      </div>
      <label className="flex items-center gap-2 text-sm text-muted">
        <input type="checkbox" name="published" defaultChecked={initial?.published ?? false} className="h-4 w-4" />
        공개 (체크 시 Store 페이지에 노출)
      </label>

      {error ? (
        <p className="rounded-lg border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger">{error}</p>
      ) : null}

      <div className="flex gap-2">
        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-lime px-6 py-2.5 text-sm font-semibold text-white transition hover:brightness-105 disabled:opacity-60"
        >
          {pending ? "저장 중..." : submitLabel}
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

function ProgramRow({ program, index, total }: { program: Program; index: number; total: number }) {
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
          {program.image ? (
            <Image src={program.image} alt={program.title} fill sizes="64px" className="object-cover" />
          ) : null}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold">
            {program.title}
            {!program.published ? (
              <span className="ml-2 rounded-md bg-card px-2 py-0.5 text-xs text-muted">비공개</span>
            ) : null}
          </p>
          <p className="truncate text-xs text-muted">
            {[formatPrice(program.price), program.duration].filter(Boolean).join(" · ")}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <button onClick={() => run(() => moveProgram(program.id, "up"))} disabled={busy || index === 0} className="rounded-lg border border-line px-2 py-1 text-xs disabled:opacity-40 hover:border-court-bright" aria-label="위로">↑</button>
          <button onClick={() => run(() => moveProgram(program.id, "down"))} disabled={busy || index === total - 1} className="rounded-lg border border-line px-2 py-1 text-xs disabled:opacity-40 hover:border-court-bright" aria-label="아래로">↓</button>
          <button onClick={() => run(() => setProgramPublished(program.id, !program.published))} disabled={busy} className="rounded-lg border border-line px-3 py-1 text-xs font-semibold hover:border-court-bright">
            {program.published ? "비공개로" : "공개로"}
          </button>
          <button onClick={() => setEditing((v) => !v)} className="rounded-lg border border-line px-3 py-1 text-xs font-semibold hover:border-court-bright">
            {editing ? "닫기" : "수정"}
          </button>
          <button onClick={() => { if (confirm("이 프로그램을 삭제할까요?")) run(() => removeProgram(program.id)); }} disabled={busy} className="rounded-lg border border-danger/40 px-3 py-1 text-xs text-danger hover:bg-danger/10">삭제</button>
        </div>
      </div>

      {editing ? (
        <div className="mt-4 border-t border-line pt-4">
          <ProgramForm
            initial={program}
            requireImage={false}
            submitLabel="저장"
            onCancel={() => setEditing(false)}
            onSubmit={(values, imagePath) => updateProgram(program.id, { ...values, imagePath })}
          />
        </div>
      ) : null}
    </li>
  );
}

export function ProgramsAdmin({ rows }: { rows: Program[] }) {
  const [adding, setAdding] = useState(false);

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-line bg-card p-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg font-bold">새 프로그램 등록</h2>
          {!adding ? (
            <button onClick={() => setAdding(true)} className="rounded-full bg-lime px-5 py-2 text-sm font-semibold text-white hover:brightness-105">
              + 프로그램 추가
            </button>
          ) : null}
        </div>
        {adding ? (
          <div className="mt-5">
            <ProgramForm
              requireImage
              submitLabel="프로그램 등록"
              onCancel={() => setAdding(false)}
              onSubmit={(values, imagePath) => saveProgram({ ...values, imagePath })}
            />
          </div>
        ) : null}
      </div>

      <div>
        <h2 className="font-display text-lg font-bold">등록된 프로그램 ({rows.length})</h2>
        {rows.length === 0 ? (
          <p className="mt-3 text-sm text-muted">아직 등록된 프로그램이 없습니다.</p>
        ) : (
          <ul className="mt-4 space-y-3">
            {rows.map((p, i) => (
              <ProgramRow key={p.id} program={p} index={i} total={rows.length} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
