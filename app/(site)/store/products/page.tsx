import { pageMetadata } from "@/lib/page-metadata";
import { Section, SectionHeading } from "@/components/ui";
import { ComingSoon } from "@/components/sections/ComingSoon";
import { StoreProductCard } from "@/components/StoreProductCard";
import { createClient } from "@/lib/supabase/server";
import { getLocale } from "@/lib/i18n";
import { pick } from "@/lib/i18n-pick";
import type { StoreProduct } from "@/lib/store-products";

export async function generateMetadata(): Promise<import("next").Metadata> {
  const locale = await getLocale();
  return pageMetadata({
    title: pick(locale, {
      ko: "GCM's Products | GCM 테니스 아카데미",
      en: "GCM's Products | GCM Tennis Academy",
      zh: "GCM's Products | GCM Tennis Academy",
      ja: "GCM's Products | GCM Tennis Academy",
      it: "GCM's Products | GCM Tennis Academy",
      fr: "GCM's Products | GCM Tennis Academy",
      es: "GCM's Products | GCM Tennis Academy",
    }),
    description: pick(locale, {
      ko: "GCM이 제안하는 상품. 원하는 상품을 확인하고 문의·구매하세요.",
      en: "Products offered by GCM. Browse what you want and inquire or purchase.",
      zh: "GCM 推荐的商品。浏览心仪商品并咨询或购买。",
      ja: "GCMが提案する商品。気になる商品を確認し、お問い合わせ・ご購入ください。",
      it: "Prodotti offerti da GCM. Sfoglia ciò che desideri e richiedi informazioni o acquista.",
      fr: "Produits proposés par GCM. Parcourez ce qui vous intéresse et renseignez-vous ou achetez.",
      es: "Productos ofrecidos por GCM. Explora lo que quieras y consulta o compra.",
    }),
    path: "/store/products",
  });
}

export default async function StoreProductsPage() {
  const locale = await getLocale();
  const ko = locale === "ko";

  const supabase = await createClient();
  const { data } = await supabase
    .from("gcm_products")
    .select("id, slug, title, summary, description, price, duration, image, sort_order, published, i18n")
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
          desc={pick(locale, {
            ko: "상품을 준비하고 있습니다. 곧 만나보실 수 있습니다.",
            en: "We're preparing our products. See you soon.",
            zh: "我们正在筹备商品，敬请期待。",
            ja: "商品を準備中です。まもなくお届けします。",
            it: "Stiamo preparando i nostri prodotti. A presto.",
            fr: "Nous préparons nos produits. À bientôt.",
            es: "Estamos preparando nuestros productos. Hasta pronto.",
          })}
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
          lead={pick(locale, {
            ko: '네트(Net)를 활용해 Kids부터 시니어까지 모두 함께하는 힐링 복합 커뮤니티. GCM 전용 코트 밖에서도 다양한 방법으로 테니스를 즐기는 GCM Social "NET" Working!',
            en: 'A healing community around the net — for everyone from kids to seniors. Enjoy tennis in many ways beyond the GCM court. GCM Social "NET" Working!',
            zh: '以网（Net）为纽带、从儿童到长者共同参与的疗愈型综合社区。在 GCM 专属球场之外，也能以多种方式享受网球的 GCM Social "NET" Working！',
            ja: 'ネット（Net）を活かし、キッズからシニアまでみんなで楽しむ癒やしの複合コミュニティ。GCM専用コートの外でもさまざまな方法でテニスを楽しむ GCM Social "NET" Working！',
            it: 'Una community del benessere attorno alla rete — per tutti, dai bambini ai senior. Goditi il tennis in tanti modi anche fuori dal campo GCM. GCM Social "NET" Working!',
            fr: 'Une communauté bien-être autour du filet — pour tous, des enfants aux seniors. Profitez du tennis de multiples façons, même en dehors du court GCM. GCM Social "NET" Working!',
            es: 'Una comunidad de bienestar en torno a la red — para todos, desde niños hasta seniors. Disfruta del tenis de muchas maneras más allá de la cancha de GCM. GCM Social "NET" Working!',
          })}
          wideLead
        />
        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <StoreProductCard key={p.id} product={p} locale={locale} />
          ))}
        </div>
      </Section>
    </div>
  );
}
