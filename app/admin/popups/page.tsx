import { createClient } from "@/lib/supabase/server";
import { PopupsAdminForm } from "@/app/admin/popups/PopupsAdminForm";
import { togglePopup, deletePopup } from "@/app/admin/popups/actions";

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
              <div key={p.id} className="overflow-hidden rounded-2xl border border-line bg-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image_url}
                  alt="팝업 이미지"
                  className="aspect-[4/5] w-full bg-base object-contain"
                />
                <div className="space-y-3 p-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`rounded-md px-2 py-1 text-xs font-semibold ${
                        p.active ? "bg-lime/15 text-lime" : "bg-muted/15 text-muted"
                      }`}
                    >
                      {p.active ? "노출 중" : "숨김"}
                    </span>
                    {p.link_url ? (
                      <a
                        href={p.link_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="max-w-[55%] truncate text-xs text-court-bright hover:underline"
                      >
                        {p.link_url}
                      </a>
                    ) : (
                      <span className="text-xs text-muted">링크 없음</span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <form action={togglePopup}>
                      <input type="hidden" name="id" value={p.id} />
                      <input type="hidden" name="active" value={p.active ? "false" : "true"} />
                      <button
                        type="submit"
                        className="rounded-lg border border-line px-3 py-1.5 text-xs font-semibold hover:border-court-bright"
                      >
                        {p.active ? "숨기기" : "노출하기"}
                      </button>
                    </form>
                    <form action={deletePopup}>
                      <input type="hidden" name="id" value={p.id} />
                      <button
                        type="submit"
                        className="rounded-lg border border-danger/40 px-3 py-1.5 text-xs font-semibold text-danger hover:bg-danger/10"
                      >
                        삭제
                      </button>
                    </form>
                  </div>
                </div>
              </div>
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
