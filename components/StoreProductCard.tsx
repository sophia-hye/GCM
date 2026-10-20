import Image from "next/image";
import Link from "next/link";
import { CourtLines } from "@/components/ui";
import { formatPrice } from "@/lib/programs";
import { localizeProduct, type StoreProduct } from "@/lib/store-products";
import type { Locale } from "@/lib/i18n-pick";

export function StoreProductCard({ product: raw, locale }: { product: StoreProduct; locale: Locale }) {
  const product = localizeProduct(raw, locale);
  return (
    <Link href={`/store/products/${product.slug}`} className="group block">
      <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-court-deep">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <CourtLines className="absolute inset-0 h-full w-full text-white/15" />
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold group-hover:text-court">{product.title}</h3>
        {product.summary ? (
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">{product.summary}</p>
        ) : null}
        <p className="mt-3 font-display text-base font-bold text-court-bright">
          {formatPrice(product.price, locale)}
        </p>
      </div>
    </Link>
  );
}
