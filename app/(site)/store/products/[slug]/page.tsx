import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/page-metadata";
import { Container } from "@/components/ui";
import { PurchaseButton } from "@/components/PurchaseButton";
import { createClient } from "@/lib/supabase/server";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";
import { formatPrice } from "@/lib/programs";
import { localizeProduct, type StoreProduct } from "@/lib/store-products";

async function getProduct(slug: string): Promise<StoreProduct | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("gcm_products")
    .select("id, slug, title, summary, description, price, duration, image, sort_order, published, i18n")
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
  const locale = await getLocale();
  const raw0 = await getProduct(slug);
  if (!raw0)
    return {
      title: pick(locale, {
        ko: "GCM's Products | GCM 테니스 아카데미",
        en: "GCM's Products | GCM Tennis Academy",
        zh: "GCM's Products | GCM Tennis Academy",
        ja: "GCM's Products | GCM Tennis Academy",
        it: "GCM's Products | GCM Tennis Academy",
        fr: "GCM's Products | GCM Tennis Academy",
        es: "GCM's Products | GCM Tennis Academy",
      }),
    };
  const product = localizeProduct(raw0, locale);
  return pageMetadata({
    title: `${product.title} | GCM's Products`,
    description:
      product.summary ||
      pick(locale, {
        ko: "GCM 상품 상세 안내.",
        en: "GCM product details.",
        zh: "GCM 商品详情介绍。",
        ja: "GCM商品の詳細案内。",
        it: "Dettagli del prodotto GCM.",
        fr: "Détails du produit GCM.",
        es: "Detalles del producto GCM.",
      }),
    path: `/store/products/${product.slug}`,
  });
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const raw = await getProduct(slug);
  if (!raw) notFound();

  const locale = await getLocale();
  const product = localizeProduct(raw, locale);

  return (
    <div className="pt-16">
      <Container className="py-16 sm:py-24">
        <Link href="/store/products" className="text-sm font-semibold text-muted hover:text-court">
          ←{" "}
          {pick(locale, {
            ko: "상품 목록",
            en: "All products",
            zh: "商品列表",
            ja: "商品一覧",
            it: "Tutti i prodotti",
            fr: "Tous les produits",
            es: "Todos los productos",
          })}
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
              {formatPrice(product.price, locale)}
            </p>

            <div className="mt-6">
              <PurchaseButton programId={product.id} price={product.price} />
            </div>
          </div>
        </div>

        {product.description ? (
          <div className="mt-16 max-w-3xl border-t border-line pt-10">
            <h2 className="font-display text-xl font-bold">
              {pick(locale, {
                ko: "상품 안내",
                en: "Product details",
                zh: "商品说明",
                ja: "商品案内",
                it: "Dettagli del prodotto",
                fr: "Détails du produit",
                es: "Detalles del producto",
              })}
            </h2>
            <p className="mt-4 whitespace-pre-line break-keep leading-relaxed text-ink/85">
              {product.description}
            </p>
          </div>
        ) : null}
      </Container>
    </div>
  );
}
