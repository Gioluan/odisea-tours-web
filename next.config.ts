import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Fewer breakpoints = fewer variants per image = fewer optimizer requests on route change
    deviceSizes: [640, 1080, 1920],
    imageSizes: [64, 128, 384],
    // Cache optimized images for a month so client-side nav reuses them
    minimumCacheTTL: 60 * 60 * 24 * 30,
    formats: ["image/webp"],
  },
};

export default nextConfig;
