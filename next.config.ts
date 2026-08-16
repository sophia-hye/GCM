import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  experimental: {
    // 이미지 업로드(팝업·갤러리)는 Server Action 으로 전송된다. 기본 1MB 제한을 상향.
    // (Vercel 서버리스 함수 본문 한도 ~4.5MB 이내로 설정)
    serverActions: {
      bodySizeLimit: "4mb",
    },
  },
  async redirects() {
    // 기존 Seoulite Net'work URL → 한남 GCM Festival 로 영구 이동
    return [
      { source: "/events/seoulite", destination: "/events/hannam-festival", permanent: true },
      {
        source: "/events/seoulite/:slug",
        destination: "/events/hannam-festival/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
