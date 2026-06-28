import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import { GalleryAdminForm } from "./GalleryAdminForm";

export const metadata = { title: "갤러리 관리 | GCM" };

type GalleryRow = {
  id: string;
  title: string;
  images: string[];
  created_at: string;
};

export default async function AdminGalleryPage() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("gcm_gallery")
    .select("id, title, images, created_at")
    .order("created_at", { ascending: false });

  const posts = (data ?? []) as GalleryRow[];

  return (
    <div>
      <h1 className="font-display text-2xl font-bold">갤러리 관리</h1>
      <p className="mt-1 text-sm text-muted">
        글과 이미지를 등록하면 공개 갤러리 페이지에 노출됩니다.
      </p>

      <div className="mt-8">
        <GalleryAdminForm />
      </div>

      {error ? (
        <p className="mt-6 rounded-lg border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger">
          갤러리 테이블이 아직 없습니다. supabase/schema.sql의 gcm_gallery 블록을 SQL Editor에서
          실행해 주세요.
        </p>
      ) : (
        <div className="mt-10">
          <h2 className="font-display text-lg font-bold">
            등록된 글 ({posts.length})
          </h2>
          {posts.length === 0 ? (
            <p className="mt-3 text-sm text-muted">아직 등록된 글이 없습니다.</p>
          ) : (
            <ul className="mt-4 space-y-4">
              {posts.map((post) => (
                <li
                  key={post.id}
                  className="flex items-center gap-4 rounded-xl border border-line bg-card p-4"
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-court-deep">
                    {post.images[0] ? (
                      <Image
                        src={post.images[0]}
                        alt={post.title}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    ) : null}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-semibold">{post.title}</p>
                    <p className="text-xs text-muted">
                      이미지 {post.images.length}장 ·{" "}
                      {new Date(post.created_at).toLocaleDateString("ko-KR")}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
