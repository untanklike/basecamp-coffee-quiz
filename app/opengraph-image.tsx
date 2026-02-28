import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
          backgroundColor: "#fdf6ee",
          padding: "80px",
        }}
      >
        {/* Card */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            border: "2px solid #f3e4cc",
            borderRadius: "24px",
            padding: "60px 80px",
            width: "100%",
            maxWidth: "960px",
          }}
        >
          <div style={{ fontSize: "80px", marginBottom: "24px" }}>☕</div>
          <div
            style={{
              fontSize: "56px",
              fontWeight: "700",
              color: "#1c1917",
              textAlign: "center",
              lineHeight: 1.2,
              marginBottom: "20px",
            }}
          >
            What&apos;s Your Coffee Personality?
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#78716c",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            5 questions. Your perfect cup awaits.
          </div>
          <div
            style={{
              backgroundColor: "#b45309",
              color: "white",
              fontSize: "24px",
              fontWeight: "600",
              padding: "16px 40px",
              borderRadius: "12px",
            }}
          >
            Take the quiz →
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: "32px",
            fontSize: "22px",
            color: "#a8a29e",
          }}
        >
          Basecamp Coffee · Pacific Northwest
        </div>
      </div>
    ),
    { ...size }
  );
}
