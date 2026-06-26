"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { signUpAdmin, signUpMember, type AuthState } from "@/app/auth/actions";
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

export function SignupForm() {
  const [tab, setTab] = useState<Tab>("member");
  const [memberState, memberAction, memberPending] = useActionState<AuthState, FormData>(
    signUpMember,
    {},
  );
  const [adminState, adminAction, adminPending] = useActionState<AuthState, FormData>(
    signUpAdmin,
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
          <AuthField label="이름" name="name" placeholder="실명을 입력하세요" />
          <PhoneField />
          <AuthField
            label="이메일"
            name="email"
            type="email"
            placeholder="example@email.com"
          />
          <AuthField
            label="비밀번호"
            name="password"
            type="password"
            placeholder="6자 이상"
          />
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-muted">구분</label>
            <select
              name="role"
              className="w-full rounded-lg border border-line bg-card px-3 py-2.5 text-sm text-ink outline-none focus:border-court-bright"
            >
              <option value="student">선수 본인</option>
              <option value="parent">학부모</option>
            </select>
          </div>
          <ErrorMessage message={memberState.error} />
          <AuthSubmit pending={memberPending}>회원가입</AuthSubmit>
          <p className="text-center text-xs text-muted">
            로그인은 이메일과 비밀번호로 진행됩니다.
          </p>
        </form>
      ) : (
        <form action={adminAction} className="space-y-4">
          <AuthField label="이름" name="name" placeholder="관리자 이름" />
          <PhoneField />
          <AuthField
            label="이메일"
            name="email"
            type="email"
            placeholder="example@email.com"
          />
          <AuthField
            label="비밀번호"
            name="password"
            type="password"
            placeholder="8자 이상"
          />
          <AuthField
            label="관리자 키"
            name="admin_key"
            type="password"
            placeholder="발급받은 관리자 키"
          />
          <ErrorMessage message={adminState.error} />
          <AuthSubmit pending={adminPending}>관리자 가입</AuthSubmit>
          <p className="text-center text-xs text-muted">
            관리자 키를 알고 있는 경우에만 가입할 수 있습니다.
          </p>
        </form>
      )}

      <p className="mt-6 text-center text-sm text-muted">
        이미 계정이 있으신가요?{" "}
        <Link href="/login" className="font-semibold text-court hover:underline">
          로그인
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
