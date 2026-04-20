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
      { source: "/about", destination: "/team", permanent: true },
      { source: "/about-us", destination: "/team", permanent: true },
      { source: "/blog", destination: "/journal", permanent: true },
      { source: "/blog/:slug*", destination: "/journal/:slug*", permanent: true },
      { source: "/news", destination: "/journal", permanent: true },
      { source: "/news/:slug*", destination: "/journal/:slug*", permanent: true },
      { source: "/services", destination: "/tours", permanent: true },
      { source: "/sports-tours", destination: "/tours", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/barcelona", destination: "/destinations/barcelona", permanent: true },
      { source: "/madrid", destination: "/destinations/madrid", permanent: true },
      { source: "/valencia", destination: "/destinations/valencia", permanent: true },
      { source: "/barcelona-tours", destination: "/destinations/barcelona", permanent: true },
      { source: "/madrid-tours", destination: "/destinations/madrid", permanent: true },
      { source: "/valencia-tours", destination: "/destinations/valencia", permanent: true },
      { source: "/school-tours", destination: "/schools", permanent: true },
      { source: "/schools-tours", destination: "/schools", permanent: true },
      { source: "/youth-tours", destination: "/youth", permanent: true },
      { source: "/veteran-tours", destination: "/veterans", permanent: true },
      { source: "/veterans-tours", destination: "/veterans", permanent: true },
      { source: "/plan", destination: "/plan-your-tour", permanent: true },
      { source: "/plan-tour", destination: "/plan-your-tour", permanent: true },
      { source: "/book", destination: "/plan-your-tour", permanent: true },
      { source: "/booking", destination: "/plan-your-tour", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      { source: "/index", destination: "/", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
