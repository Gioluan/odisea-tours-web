import { NextResponse } from "next/server";

export function middleware() {
  return new NextResponse("Gone", {
    status: 410,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

export const config = {
  matcher: [
    "/item/:path*",
    "/featured_item/:path*",
    "/wp-content/:path*",
    "/wp-admin/:path*",
    "/wp-includes/:path*",
    "/wp-login.php",
    "/wp-login",
    "/xmlrpc.php",
  ],
};
