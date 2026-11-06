import { ImageResponse } from "next/og";

export const alt = "Mohsen Fallahnejad — Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: 80,
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          width: 72,
          height: 72,
          background: "#0000ff",
          borderRadius: 12,
          color: "#ffffff",
          fontSize: 32,
          fontWeight: 900,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        MF
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 88, fontWeight: 900, letterSpacing: "-0.03em", color: "#0000ff" }}>
          Mohsen Fallahnejad
        </div>
        <div style={{ marginTop: 12, fontSize: 44, color: "#0f172a" }}>Frontend Developer</div>
        <div style={{ marginTop: 24, fontSize: 30, color: "#475569" }}>
          I build clean, fast web products. React, Next.js, TypeScript.
        </div>
      </div>
      <div style={{ fontSize: 26, color: "#475569" }}>themohsen.me</div>
    </div>,
    { ...size }
  );
}
