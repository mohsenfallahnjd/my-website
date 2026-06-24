import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#0000ff",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: "#fff",
            fontSize: 14,
            fontWeight: 900,
            letterSpacing: "-1px",
            fontFamily: "sans-serif",
          }}
        >
          MF
        </span>
      </div>
    ),
    { ...size }
  );
}
