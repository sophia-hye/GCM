import { createClient } from "@/lib/supabase/server";
import { PopupsAdminForm } from "@/app/admin/popups/PopupsAdminForm";
import { PopupCard } from "@/app/admin/popups/PopupCard";

export const metadata = { title: "팝업 관리 | GCM Admin" };

type Popup = {
  id: string;
  image_url: string;
  link_url: string | null;
  active: boolean;
  created_at: string;
};

export default async function AdminPopupsPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("gcm_popups")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });
  const popups = (data ?? []) as Popup[];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">팝업 관리</h1>
        <p className="mt-1 text-sm text-muted">
          홈 접속 시 뜨는 팝업을 최대 3개까지 관리합니다. 이미지를 올리면 즉시 노출됩니다(활성 상태).
        </p>
      </div>

      <PopupsAdminForm disabled={popups.length >= 3} />

      <div className="space-y-4">
        <h2 className="font-display text-lg font-bold">등록된 팝업 ({popups.length}/3)</h2>
        {popups.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {popups.map((p) => (
              <PopupCard key={p.id} popup={p} />
            ))}
          </div>
        ) : (
          <p className="rounded-2xl border border-line bg-card px-5 py-10 text-center text-sm text-muted">
            등록된 팝업이 없습니다. 위에서 이미지를 올려 팝업을 추가하세요.
          </p>
        )}
      </div>
    </div>
  );
}
