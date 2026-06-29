import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "GCM Tennis Academy — GCM. with egüre";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** 링크 공유 썸네일(OG): 홈 로고(GCM. WITH egüre)를 테니스 배경 위에 표시 */
export default function OpengraphImage() {
  const toDataUrl = (p: string, mime: string) =>
    `data:${mime};base64,${readFileSync(join(process.cwd(), p)).toString("base64")}`;

  const bg = toDataUrl("public/img/main-clay.png", "image/png");
  const egure = toDataUrl("public/logo/equre_white.png", "image/png");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#9c3a20",
          fontFamily: "sans-serif",
        }}
      >
        {/* 테니스 배경 */}
        <img
          src={bg}
          width={1200}
          height={630}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        {/* 가독성 + 잘림 완화용 어두운 오버레이 */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(28,14,8,0.58)",
          }}
        />
        {/* 로고 (홈과 동일: GCM. / WITH egüre) */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "flex-end", lineHeight: 1 }}>
            <span style={{ fontSize: 168, fontWeight: 800, color: "#ffffff", letterSpacing: -4 }}>
              GCM
            </span>
            <span style={{ fontSize: 168, fontWeight: 800, color: "#c2492b" }}>.</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginTop: 30, gap: 26 }}>
            <span
              style={{
                fontSize: 40,
                fontWeight: 700,
                letterSpacing: 10,
                color: "rgba(255,255,255,0.85)",
              }}
            >
              WITH
            </span>
            <img src={egure} width={196} height={74} style={{ objectFit: "contain" }} />
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
