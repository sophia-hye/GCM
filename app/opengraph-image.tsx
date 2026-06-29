import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "GCM Tennis Academy — GCM. with egüre";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const toDataUrl = (p: string, mime: string) =>
  `data:${mime};base64,${readFileSync(join(process.cwd(), p)).toString("base64")}`;

/** 굵은 Archivo(900 Black) 로드 — 실패 시 기본 폰트로 폴백 */
async function loadArchivo(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Archivo:wght@900",
    ).then((r) => r.text());
    const url = css.match(/https:\/\/[^)]+\.ttf/)?.[0];
    if (!url) return null;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

/** 링크 공유 썸네일(OG): 홈 로고(GCM. WITH egüre)를 테니스 배경 위에 표시 */
export default async function OpengraphImage() {
  const bg = toDataUrl("public/img/main-clay.png", "image/png");
  const egure = toDataUrl("public/logo/equre_white.png", "image/png");
  const archivo = await loadArchivo();

  const boldFamily = archivo ? "Archivo" : "sans-serif";

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
        <img
          src={bg}
          width={1200}
          height={630}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(28,14,8,0.58)" }} />
        <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "flex-end", lineHeight: 1 }}>
            <span style={{ fontFamily: boldFamily, fontSize: 168, fontWeight: 900, color: "#ffffff", letterSpacing: -4 }}>
              GCM
            </span>
            <span style={{ fontFamily: boldFamily, fontSize: 168, fontWeight: 900, color: "#c2492b" }}>.</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginTop: 30, gap: 26 }}>
            <span style={{ fontFamily: boldFamily, fontSize: 44, fontWeight: 900, letterSpacing: 10, color: "rgba(255,255,255,0.92)" }}>
              WITH
            </span>
            <img src={egure} width={196} height={74} style={{ objectFit: "contain" }} />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: archivo
        ? [{ name: "Archivo", data: archivo, weight: 900 as const, style: "normal" as const }]
        : undefined,
    },
  );
}
