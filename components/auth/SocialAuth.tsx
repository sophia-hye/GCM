"use client";

import { createClient } from "@/lib/supabase/client";

export function SocialAuth() {
  const handleKakao = async () => {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: "kakao",
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });
  };

  return (
    <div className="mt-6">
      <div className="relative flex items-center">
        <span className="h-px flex-1 bg-line" />
        <span className="px-3 text-xs text-muted">또는 소셜 계정으로</span>
        <span className="h-px flex-1 bg-line" />
      </div>

      <div className="mt-4 space-y-2">
        <button
          type="button"
          onClick={handleKakao}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#FEE500] px-4 py-2.5 text-sm font-semibold text-[#191600] transition hover:brightness-95"
        >
          카카오로 시작하기
        </button>
        <a
          href="/auth/naver"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#03C75A] px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-95"
        >
          네이버로 시작하기
        </a>
      </div>
    </div>
  );
}
