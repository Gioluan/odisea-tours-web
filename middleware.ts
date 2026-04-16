import { NextRequest, NextResponse } from "next/server";

const SITE_PASSWORD = process.env.SITE_PASSWORD || "AITOR";

export function middleware(req: NextRequest) {
  // Skip password for static assets, api routes, and the gate page itself
  const { pathname } = req.nextUrl;
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/brand") ||
    pathname.startsWith("/photos") ||
    pathname.startsWith("/badges") ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|webp|css|js|woff2?)$/)
  ) {
    return NextResponse.next();
  }

  // Check for auth cookie
  const authed = req.cookies.get("site-auth")?.value;
  if (authed === SITE_PASSWORD) {
    return NextResponse.next();
  }

  // Check if this is a password submission
  if (pathname === "/gate" && req.method === "GET") {
    return NextResponse.next();
  }

  // Redirect to gate
  const url = req.nextUrl.clone();
  url.pathname = "/gate";
  url.searchParams.set("next", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!gate).*)"],
};
