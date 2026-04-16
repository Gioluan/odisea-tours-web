import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [640, 1080, 1920],
    imageSizes: [64, 128, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.odisea-tours.com" }],
        destination: "https://odisea-tours.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
