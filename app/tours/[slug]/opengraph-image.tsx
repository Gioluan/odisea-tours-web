import { ImageResponse } from "next/og";
import { TOURS, tourBySlug } from "@/content/tours";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Odisea Tours — Tour Experience";

export async function generateStaticParams() {
  return TOURS.map((t) => ({ slug: t.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = tourBySlug(slug);
  if (!tour) {
    return new ImageResponse(<div>Not found</div>, size);
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: "#11110f",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          fontFamily: "serif",
          position: "relative",
          overflow: "hidden",
          color: "#f4efe4",
        }}
      >
        {/* Top editorial bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "16px",
            letterSpacing: "5px",
            textTransform: "uppercase",
            color: "rgba(244,239,228,0.55)",
            fontFamily: "sans-serif",
            fontWeight: 600,
          }}
        >
          <div style={{ display: "flex" }}>Odisea Tours · Spain</div>
          <div style={{ display: "flex" }}>Chapter {tour.chapter}</div>
        </div>

        {/* Title block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "26px",
            maxWidth: "1040px",
          }}
        >
          <div
            style={{
              fontSize: "92px",
              fontWeight: 800,
              lineHeight: 0.92,
              letterSpacing: "-3px",
              color: "#f4efe4",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <span>{tour.title}</span>
            {tour.italicTitle && (
              <span
                style={{
                  fontStyle: "italic",
                  color: "#b08a3e",
                  marginLeft: "20px",
                }}
              >
                {tour.italicTitle}
              </span>
            )}
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "rgba(244,239,228,0.78)",
              maxWidth: "920px",
              lineHeight: 1.3,
              display: "flex",
            }}
          >
            {tour.tagline}
          </div>
        </div>

        {/* Bottom editorial bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(244,239,228,0.25)",
            paddingTop: "22px",
            fontSize: "15px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "rgba(244,239,228,0.6)",
            fontFamily: "sans-serif",
            fontWeight: 600,
            gap: "20px",
          }}
        >
          <div style={{ display: "flex" }}>odisea-tours.com</div>
          <div style={{ display: "flex", gap: "26px" }}>
            <span>{tour.duration}</span>
            <span>{tour.groupSize}</span>
          </div>
        </div>

        {/* Decorative gold rule */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "6px",
            background: "#b08a3e",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
