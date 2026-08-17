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
    return [
      // 후기 게시판: /voices → /testimonial 로 영구 이동
      { source: "/voices", destination: "/testimonial", permanent: true },
      { source: "/voices/:path*", destination: "/testimonial/:path*", permanent: true },
      // 축제: 과거 Seoulite / 한남 GCM Festival URL → GCM Festival at Hannam 로 영구 이동
      { source: "/events/seoulite", destination: "/events/gcm-festival-at-hannam", permanent: true },
      { source: "/events/seoulite/:slug", destination: "/events/gcm-festival-at-hannam/:slug", permanent: true },
      { source: "/events/hannam-festival", destination: "/events/gcm-festival-at-hannam", permanent: true },
      {
        source: "/events/hannam-festival/:slug",
        destination: "/events/gcm-festival-at-hannam/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
