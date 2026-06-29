import { ImageResponse } from "next/og";

export const alt = "GCM Tennis Academy — with egüre";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** 링크 공유 시 보이는 썸네일(OG 이미지): GCM. with egüre 브랜드 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #9c3a20 0%, #c2492b 55%, #d4663f 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end", lineHeight: 1 }}>
          <span style={{ fontSize: 200, fontWeight: 800, color: "#ffffff", letterSpacing: -6 }}>
            GCM
          </span>
          <span style={{ fontSize: 200, fontWeight: 800, color: "#eae5d8" }}>.</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 46,
            fontWeight: 700,
            letterSpacing: 12,
            color: "rgba(255,255,255,0.88)",
          }}
        >
          WITH EGÜRE
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 30,
            fontSize: 30,
            color: "rgba(255,255,255,0.72)",
          }}
        >
          High-Performance Tennis Academy
        </div>
      </div>
    ),
    { ...size },
  );
}
