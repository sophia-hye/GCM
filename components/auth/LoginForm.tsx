"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { signInAdmin, signInMember, type AuthState } from "@/app/auth/actions";
import { AuthField, AuthSubmit } from "@/components/auth/AuthShell";

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
          <AuthField label="이메일" name="email" type="email" placeholder="example@email.com" />
          <AuthField label="비밀번호" name="password" type="password" placeholder="••••••••" />
          <ErrorMessage message={memberState.error} />
          <AuthSubmit pending={memberPending}>로그인</AuthSubmit>
        </form>
      ) : (
        <form action={adminAction} className="space-y-4">
          <AuthField label="이메일" name="email" type="email" placeholder="example@email.com" />
          <AuthField label="비밀번호" name="password" type="password" placeholder="••••••••" />
          <ErrorMessage message={adminState.error} />
          <AuthSubmit pending={adminPending}>관리자 로그인</AuthSubmit>
        </form>
      )}

      <p className="mt-6 text-center text-sm text-muted">
        계정이 없으신가요?{" "}
        <Link href="/signup" className="font-semibold text-court hover:underline">
          회원가입
        </Link>
      </p>
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
        active ? "bg-court text-white" : "text-muted hover:text-ink"
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
