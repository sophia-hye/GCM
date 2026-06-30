import Link from "next/link";

export const metadata = { title: "결제 실패 | GCM" };

export default async function PaymentFailPage({
  searchParams,
}: {
  searchParams: Promise<{ code?: string; message?: string }>;
}) {
  const { message } = await searchParams;
  return (
    <main className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 text-center">
      <div className="rounded-2xl border border-danger/40 bg-danger/10 p-10">
        <p className="font-display text-2xl font-bold text-danger">결제가 취소되었습니다</p>
        <p className="mt-3 text-sm text-muted">
          {message || "결제가 완료되지 않았습니다. 다시 시도해 주세요."}
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-court px-6 py-3 text-sm font-semibold text-white"
        >
          홈으로
        </Link>
      </div>
    </main>
  );
}
