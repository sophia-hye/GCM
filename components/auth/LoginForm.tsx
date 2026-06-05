"use client";

import { useActionState, useState } from "react";
import { signInAdmin, signInMember, type AuthState } from "@/app/auth/actions";
import { AuthField, AuthSubmit } from "@/components/auth/AuthShell";
import { PhoneInput } from "@/components/ui/PhoneInput";

function PhoneField() {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-muted">전화번호</label>
      <PhoneInput />
    </div>
  );
}

type Tab = "member" | "admin";

export function LoginForm() {
  const [tab, setTab] = useState<Tab>("member");
  const [memberState, memberAction, memberPending] = useActionState<AuthState, FormData>(
    signInMember,
    {},
  );
  const [adminState, adminAction, adminPending] = useActionState<AuthState, FormData>(
    signInAdmin,
    {},
  );

  return (
    <div>
      <div className="mb-6 grid grid-cols-2 gap-1 rounded-full border border-line bg-card p-1">
        <TabButton active={tab === "member"} onClick={() => setTab("member")}>
          회원
        </TabButton>
        <TabButton active={tab === "admin"} onClick={() => setTab("admin")}>
          관리자
        </TabButton>
      </div>

      {tab === "member" ? (
        <form action={memberAction} className="space-y-4">
          <AuthField label="이름" name="name" placeholder="등록된 이름" />
          <PhoneField />
          <ErrorMessage message={memberState.error} />
          <AuthSubmit pending={memberPending}>로그인</AuthSubmit>
          <p className="text-center text-xs text-muted">
            계정은 아카데미에서 등록해 드립니다. 미등록 시 상담 문의를 이용해 주세요.
          </p>
        </form>
      ) : (
        <form action={adminAction} className="space-y-4">
          <AuthField label="이름" name="name" placeholder="관리자 이름" />
          <PhoneField />
          <AuthField label="비밀번호" name="password" type="password" placeholder="••••••••" />
          <ErrorMessage message={adminState.error} />
          <AuthSubmit pending={adminPending}>관리자 로그인</AuthSubmit>
        </form>
      )}
    </div>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full py-2 text-sm font-semibold transition-colors ${
        active ? "bg-court text-ink" : "text-muted hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}

function ErrorMessage({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="rounded-lg border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger">
      {message}
    </p>
  );
}
