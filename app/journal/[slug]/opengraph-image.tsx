import { ImageResponse } from "next/og";
import { POSTS, postBySlug } from "@/content/journal";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateImageMetadata() {
  return POSTS.map((p) => ({
    id: p.slug,
    alt: `${p.title} ${p.italicTitle ?? ""}`.trim(),
    size,
    contentType,
  }));
}

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) {
    return new ImageResponse(<div>Not found</div>, size);
  }

  const fullTitle = `${post.title}${post.italicTitle ? " " + post.italicTitle : ""}`.trim();

  return new ImageResponse(
    (
      <div
        style={{
          background: "#f4efe4",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          fontFamily: "serif",
          position: "relative",
          overflow: "hidden",
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
            color: "rgba(20,20,20,0.55)",
            fontFamily: "sans-serif",
            fontWeight: 600,
          }}
        >
          <div style={{ display: "flex" }}>Odisea Tours · The Journal</div>
          <div style={{ display: "flex" }}>{post.category}</div>
        </div>

        {/* Title block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            maxWidth: "1000px",
          }}
        >
          <div
            style={{
              fontSize: "82px",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-3px",
              color: "#141414",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <span>{post.title}</span>
            {post.italicTitle && (
              <span
                style={{
                  fontStyle: "italic",
                  color: "#b08a3e",
                  marginLeft: "18px",
                }}
              >
                {post.italicTitle}
              </span>
            )}
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "rgba(20,20,20,0.72)",
              maxWidth: "920px",
              lineHeight: 1.3,
              display: "flex",
            }}
          >
            {post.excerpt}
          </div>
        </div>

        {/* Bottom editorial bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(20,20,20,0.2)",
            paddingTop: "22px",
            fontSize: "15px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "rgba(20,20,20,0.55)",
            fontFamily: "sans-serif",
            fontWeight: 600,
          }}
        >
          <div style={{ display: "flex" }}>odisea-tours.com</div>
          <div style={{ display: "flex" }}>{post.readTime}</div>
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
