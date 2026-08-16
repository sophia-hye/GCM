"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import {
  createPlayerUploadUrl,
  savePlayer,
  updatePlayer,
  setPlayerPublished,
  removePlayer,
  movePlayer,
} from "@/app/admin/players/actions";
import { TRACK_LABEL, type Player } from "@/lib/players";

const MAX_BYTES = 10 * 1024 * 1024; // 10MB
const fieldClass =
  "w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none placeholder:text-muted/60 focus:border-court-bright";

/** 파일을 서명 URL로 업로드하고 저장된 경로를 반환 */
async function uploadPhoto(file: File): Promise<string> {
  if (!file.type.startsWith("image/")) throw new Error("이미지 파일만 업로드할 수 있습니다.");
  if (file.size > MAX_BYTES) throw new Error("사진은 10MB 이하만 올릴 수 있습니다.");
  const urlRes = await createPlayerUploadUrl(file.name);
  if (!urlRes.ok) throw new Error(urlRes.error);
  const supabase = createClient();
  const { error } = await supabase.storage
    .from("gallery")
    .uploadToSignedUrl(urlRes.path, urlRes.token, file, { contentType: file.type });
  if (error) throw new Error(`업로드 실패: ${error.message}`);
  return urlRes.path;
}

type FormValues = {
  name: string;
  track: string;
  grad_year: string;
  utr: string;
  result: string;
  bio: string;
  video_url: string;
  published: boolean;
};

function PlayerForm({
  initial,
  requireImage,
  submitLabel,
  onSubmit,
  onCancel,
}: {
  initial?: Partial<Player>;
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
      name: String(fd.get("name") ?? ""),
      track: String(fd.get("track") ?? ""),
      grad_year: String(fd.get("grad_year") ?? ""),
      utr: String(fd.get("utr") ?? ""),
      result: String(fd.get("result") ?? ""),
      bio: String(fd.get("bio") ?? ""),
      video_url: String(fd.get("video_url") ?? ""),
      published: fd.get("published") === "on",
    };
    const hasFile = file instanceof File && file.size > 0;
    if (requireImage && !hasFile) {
      setError("선수 사진을 선택해 주세요.");
      return;
    }

    setPending(true);
    try {
      let imagePath: string | undefined;
      if (hasFile) imagePath = await uploadPhoto(file as File);
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
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-muted">이름 *</label>
          <input name="name" required defaultValue={initial?.name ?? ""} className={fieldClass} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-muted">트랙</label>
          <select name="track" defaultValue={initial?.track ?? ""} className={fieldClass}>
            <option value="">선택 안 함</option>
            <option value="professional">프로</option>
            <option value="college">대학</option>
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-muted">졸업연도</label>
          <input name="grad_year" defaultValue={initial?.grad_year ?? ""} placeholder="예: 2026" className={fieldClass} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-muted">UTR</label>
          <input name="utr" defaultValue={initial?.utr ?? ""} placeholder="예: 13.2" className={fieldClass} />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">성과 (한 줄)</label>
        <input name="result" defaultValue={initial?.result ?? ""} placeholder="예: 프로 투어 데뷔" className={fieldClass} />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">소개 (선택)</label>
        <textarea name="bio" rows={2} defaultValue={initial?.bio ?? ""} className={fieldClass} />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">하이라이트 영상 URL (선택)</label>
        <input name="video_url" type="url" defaultValue={initial?.video_url ?? ""} placeholder="https://youtu.be/..." className={fieldClass} />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">
          선수 사진 {requireImage ? "*" : "(교체 시에만 선택)"}
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
        공개 (체크 시 /players 페이지에 노출)
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
          <button
            type="button"
            onClick={onCancel}
            className="rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-muted hover:text-ink"
          >
            취소
          </button>
        ) : null}
      </div>
    </form>
  );
}

function PlayerRow({ player, index, total }: { player: Player; index: number; total: number }) {
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
          {player.image ? (
            <Image src={player.image} alt={player.name} fill sizes="64px" className="object-cover object-top" />
          ) : null}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold">
            {player.name}
            {player.track ? (
              <span className="ml-2 rounded-md bg-court/15 px-2 py-0.5 text-xs text-court-bright">
                {TRACK_LABEL[player.track].ko}
              </span>
            ) : null}
            {!player.published ? (
              <span className="ml-2 rounded-md bg-card px-2 py-0.5 text-xs text-muted">비공개</span>
            ) : null}
          </p>
          <p className="truncate text-xs text-muted">
            {[player.grad_year && `${player.grad_year} 졸업`, player.utr && `UTR ${player.utr}`, player.result]
              .filter(Boolean)
              .join(" · ")}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <button onClick={() => run(() => movePlayer(player.id, "up"))} disabled={busy || index === 0} className="rounded-lg border border-line px-2 py-1 text-xs disabled:opacity-40 hover:border-court-bright" aria-label="위로">↑</button>
          <button onClick={() => run(() => movePlayer(player.id, "down"))} disabled={busy || index === total - 1} className="rounded-lg border border-line px-2 py-1 text-xs disabled:opacity-40 hover:border-court-bright" aria-label="아래로">↓</button>
          <button onClick={() => run(() => setPlayerPublished(player.id, !player.published))} disabled={busy} className="rounded-lg border border-line px-3 py-1 text-xs font-semibold hover:border-court-bright">
            {player.published ? "비공개로" : "공개로"}
          </button>
          <button onClick={() => setEditing((v) => !v)} className="rounded-lg border border-line px-3 py-1 text-xs font-semibold hover:border-court-bright">
            {editing ? "닫기" : "수정"}
          </button>
          <button onClick={() => { if (confirm("이 선수를 삭제할까요?")) run(() => removePlayer(player.id)); }} disabled={busy} className="rounded-lg border border-danger/40 px-3 py-1 text-xs text-danger hover:bg-danger/10">삭제</button>
        </div>
      </div>

      {editing ? (
        <div className="mt-4 border-t border-line pt-4">
          <PlayerForm
            initial={player}
            requireImage={false}
            submitLabel="저장"
            onCancel={() => setEditing(false)}
            onSubmit={(values, imagePath) => updatePlayer(player.id, { ...values, imagePath })}
          />
        </div>
      ) : null}
    </li>
  );
}

export function PlayersAdmin({ rows }: { rows: Player[] }) {
  const [adding, setAdding] = useState(false);
  const router = useRouter();

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-line bg-card p-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg font-bold">새 선수 등록</h2>
          {!adding ? (
            <button onClick={() => setAdding(true)} className="rounded-full bg-lime px-5 py-2 text-sm font-semibold text-white hover:brightness-105">
              + 선수 추가
            </button>
          ) : null}
        </div>
        {adding ? (
          <div className="mt-5">
            <PlayerForm
              requireImage
              submitLabel="선수 등록"
              onCancel={() => setAdding(false)}
              onSubmit={(values, imagePath) => savePlayer({ ...values, imagePath })}
            />
          </div>
        ) : null}
      </div>

      <div>
        <h2 className="font-display text-lg font-bold">등록된 선수 ({rows.length})</h2>
        {rows.length === 0 ? (
          <p className="mt-3 text-sm text-muted">아직 등록된 선수가 없습니다.</p>
        ) : (
          <ul className="mt-4 space-y-3">
            {rows.map((p, i) => (
              <PlayerRow key={p.id} player={p} index={i} total={rows.length} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
