import { pageMetadata } from "@/lib/page-metadata";
import { Section, SectionHeading } from "@/components/ui";
import { ComingSoon } from "@/components/sections/ComingSoon";
import { StoreProductCard } from "@/components/StoreProductCard";
import { createClient } from "@/lib/supabase/server";
import { getLocale } from "@/lib/i18n";
import type { StoreProduct } from "@/lib/store-products";

export const metadata = pageMetadata({
  title: "GCM's Products | GCM 테니스 아카데미",
  description: "GCM이 제안하는 상품. 원하는 상품을 확인하고 문의·구매하세요.",
  path: "/store/products",
});

export default async function StoreProductsPage() {
  const locale = await getLocale();
  const ko = locale === "ko";

  const supabase = await createClient();
  const { data } = await supabase
    .from("gcm_products")
    .select("id, slug, title, summary, description, price, duration, image, sort_order, published")
    .eq("published", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  const products = (data ?? []) as StoreProduct[];

  if (products.length === 0) {
    return (
      <div className="pt-16">
        <ComingSoon
          eyebrow="Store"
          title="GCM's Products"
          desc={
            ko
              ? "상품을 준비하고 있습니다. 곧 만나보실 수 있습니다."
              : "We're preparing our products. See you soon."
          }
        />
      </div>
    );
  }

  return (
    <div className="pt-16">
      <Section>
        <SectionHeading
          eyebrow="Store"
          title="GCM's Products"
          lead={
            ko
              ? '네트(Net)를 활용해 Kids부터 시니어까지 모두 함께하는 힐링 복합 커뮤니티. GCM 전용 코트 밖에서도 다양한 방법으로 테니스를 즐기는 GCM Social "NET" Working!'
              : 'A healing community around the net — for everyone from kids to seniors. Enjoy tennis in many ways beyond the GCM court. GCM Social "NET" Working!'
          }
          wideLead
        />
        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <StoreProductCard key={p.id} product={p} ko={ko} />
          ))}
        </div>
      </Section>
    </div>
  );
}
