"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

/** 클라이언트에서 세션을 정리하고 /logout 으로 이동(서버 액션 redirect 미전환 이슈 회피) */
export function LogoutButton({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [pending, start] = useTransition();

  const handleLogout = () => {
    start(async () => {
      try {
        const supabase = createClient();
        await supabase.auth.signOut();
      } catch {
        // 무시: 어떤 경우든 로그아웃 페이지로 이동
      }
      router.push("/logout");
      router.refresh();
    });
  };

  return (
    <button type="button" onClick={handleLogout} disabled={pending} className={className}>
      {children}
    </button>
  );
}
