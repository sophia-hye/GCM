"use client";

import { useActionState } from "react";
import { submitVoice, type VoiceState } from "@/app/actions/voices";

const FIELD =
  "w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-court-bright";

export function VoiceForm({ defaultName = "" }: { defaultName?: string }) {
  const [state, action, pending] = useActionState<VoiceState, FormData>(submitVoice, {});

  return (
    <form action={action} className="space-y-4 rounded-2xl border border-line bg-card p-6">
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">구분</label>
        <select name="relation" defaultValue="" className={FIELD}>
          <option value="" disabled>
            선택해 주세요
          </option>
          <option value="player">선수</option>
          <option value="parent">학부모</option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">표시할 이름</label>
        <input
          type="text"
          name="author_name"
          defaultValue={defaultName}
          placeholder="예) 김OO 학부모 / 이OO 선수"
          className={FIELD}
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">제목 (선택)</label>
        <input type="text" name="title" placeholder="한 줄 제목" className={FIELD} />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">이야기 내용</label>
        <textarea name="body" rows={6} placeholder="GCM과 함께한 이야기를 들려주세요." className={FIELD} />
      </div>

      {state.error ? (
        <p className="rounded-lg border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger">
          {state.error}
        </p>
      ) : null}

      <p className="text-xs text-muted">
        작성하신 글은 GCM 관리자 확인·승인 후 게시판에 공개됩니다.
      </p>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center rounded-full bg-court px-7 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {pending ? "제출 중..." : "등록 요청"}
      </button>
    </form>
  );
}
