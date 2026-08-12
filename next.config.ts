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
};

export default nextConfig;
