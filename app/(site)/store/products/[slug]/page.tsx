import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/page-metadata";
import { Container } from "@/components/ui";
import { PurchaseButton } from "@/components/PurchaseButton";
import { createClient } from "@/lib/supabase/server";
import { getLocale } from "@/lib/i18n";
import { formatPrice } from "@/lib/programs";
import type { StoreProduct } from "@/lib/store-products";

async function getProduct(slug: string): Promise<StoreProduct | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("gcm_products")
    .select("id, slug, title, summary, description, price, duration, image, sort_order, published")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();
  return (data as StoreProduct) ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return { title: "GCM's Products | GCM 테니스 아카데미" };
  return pageMetadata({
    title: `${product.title} | GCM's Products`,
    description: product.summary || "GCM 상품 상세 안내.",
    path: `/store/products/${product.slug}`,
  });
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();

  const locale = await getLocale();
  const ko = locale === "ko";

  return (
    <div className="pt-16">
      <Container className="py-16 sm:py-24">
        <Link href="/store/products" className="text-sm font-semibold text-muted hover:text-court">
          ← {ko ? "상품 목록" : "All products"}
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-line bg-court-deep">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            ) : null}
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-court">
              GCM&apos;s Products
            </p>
            <h1 className="mt-3 break-keep font-display text-3xl font-black leading-[1.15] sm:text-4xl">
              {product.title}
            </h1>
            {product.duration ? (
              <p className="mt-3 inline-block rounded-full border border-line px-3 py-1 text-sm text-muted">
                {product.duration}
              </p>
            ) : null}
            {product.summary ? (
              <p className="mt-5 break-keep text-lg leading-relaxed text-ink/85">{product.summary}</p>
            ) : null}

            <p className="mt-6 font-display text-2xl font-black text-court-bright">
              {formatPrice(product.price, ko)}
            </p>

            <div className="mt-6">
              <PurchaseButton programId={product.id} price={product.price} ko={ko} />
            </div>
          </div>
        </div>

        {product.description ? (
          <div className="mt-16 max-w-3xl border-t border-line pt-10">
            <h2 className="font-display text-xl font-bold">{ko ? "상품 안내" : "Product details"}</h2>
            <p className="mt-4 whitespace-pre-line break-keep leading-relaxed text-ink/85">
              {product.description}
            </p>
          </div>
        ) : null}
      </Container>
    </div>
  );
}
