import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export const metadata = { title: "관리자 콘솔 | GCM" };

export default async function AdminHome() {
  const supabase = await createClient();

  const [{ count: memberCount }, { count: inquiryCount }, { count: newInquiryCount }] =
    await Promise.all([
      supabase
        .from("gcm_profiles")
        .select("id", { count: "exact", head: true })
        .neq("role", "admin"),
      supabase.from("gcm_inquiries").select("id", { count: "exact", head: true }),
      supabase
        .from("gcm_inquiries")
        .select("id", { count: "exact", head: true })
        .eq("status", "new"),
    ]);

  const cards = [
    { label: "전체 회원", value: memberCount ?? 0, href: "/admin/members" },
    { label: "전체 문의", value: inquiryCount ?? 0, href: "/admin/inquiries" },
    { label: "신규 문의", value: newInquiryCount ?? 0, href: "/admin/inquiries" },
  ];

  return (
    <div>
      <h1 className="font-display text-2xl font-bold">관리자 콘솔</h1>
      <p className="mt-1 text-sm text-muted">회원 등록과 고객 문의를 관리합니다.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="rounded-2xl border border-line bg-card p-6 transition-colors hover:border-court-bright"
          >
            <p className="text-xs text-muted">{card.label}</p>
            <p className="mt-2 font-display text-3xl font-extrabold text-lime">
              {card.value}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/admin/members"
          className="rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-[#08111f]"
        >
          회원 등록하기
        </Link>
        <Link
          href="/admin/inquiries"
          className="rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink hover:border-court-bright"
        >
          문의 확인하기
        </Link>
      </div>
    </div>
  );
}
