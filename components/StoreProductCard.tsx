import Image from "next/image";
import Link from "next/link";
import { CourtLines } from "@/components/ui";
import { formatPrice } from "@/lib/programs";
import type { StoreProduct } from "@/lib/store-products";

export function StoreProductCard({ product, ko = true }: { product: StoreProduct; ko?: boolean }) {
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
          {formatPrice(product.price, ko)}
        </p>
      </div>
    </Link>
  );
}
