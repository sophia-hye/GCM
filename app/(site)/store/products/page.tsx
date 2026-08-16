import { ComingSoon } from "@/components/sections/ComingSoon";

export const metadata = { title: "GCM's Products | GCM 테니스 아카데미" };

export default function StoreProductsPage() {
  return (
    <div className="pt-16">
      <ComingSoon
        eyebrow="Store"
        title="GCM's Products"
        desc="GCM 공식 상품을 준비하고 있습니다. 곧 만나보실 수 있습니다."
      />
    </div>
  );
}
