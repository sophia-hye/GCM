"use client";

import { useActionState, useEffect, useRef } from "react";
import { createMember, type AdminState } from "@/app/admin/actions";
import { PhoneInput } from "@/components/ui/PhoneInput";

const FIELD_CLASS =
  "rounded-lg border border-line bg-base px-3 py-2.5 text-sm outline-none focus:border-court-bright";

export function MemberForm() {
  const [state, action, pending] = useActionState<AdminState, FormData>(
    createMember,
    {},
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.ok) formRef.current?.reset();
  }, [state.ok]);

  return (
    <form
      ref={formRef}
      action={action}
      className="rounded-2xl border border-line bg-card p-6"
    >
      <h2 className="font-display text-lg font-bold">회원 등록</h2>
      <p className="mt-1 text-xs text-muted">
        등록하면 회원은 이름+전화번호로 로그인할 수 있습니다(초기 비밀번호=전화번호).
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <input
          name="name"
          required
          placeholder="이름"
          className="rounded-lg border border-line bg-base px-3 py-2.5 text-sm outline-none focus:border-court-bright"
        />
        <PhoneInput placeholder="전화번호 (010-0000-0000)" className={FIELD_CLASS} />
        <select
          name="role"
          defaultValue="student"
          className="rounded-lg border border-line bg-base px-3 py-2.5 text-sm outline-none focus:border-court-bright"
        >
          <option value="student">선수(학생)</option>
          <option value="parent">학부모</option>
        </select>
        <button
          type="submit"
          disabled={pending}
          className="rounded-lg bg-lime px-5 py-2.5 text-sm font-semibold text-[#08111f] disabled:opacity-60"
        >
          {pending ? "등록 중..." : "회원 등록"}
        </button>
      </div>

      {state.error ? (
        <p className="mt-3 rounded-lg border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger">
          {state.error}
        </p>
      ) : null}
      {state.ok ? (
        <p className="mt-3 rounded-lg border border-lime/40 bg-lime/5 px-3 py-2 text-sm text-lime">
          회원이 등록되었습니다.
        </p>
      ) : null}
    </form>
  );
}
