import { cookies } from "next/headers";

export const PARTNER_COOKIE_PREFIX = "pp_";
export const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 7; // 7 days

export async function hasPartnerAccess(slug: string): Promise<boolean> {
  const store = await cookies();
  return store.get(PARTNER_COOKIE_PREFIX + slug)?.value === "1";
}

export async function grantPartnerAccess(slug: string) {
  const store = await cookies();
  store.set(PARTNER_COOKIE_PREFIX + slug, "1", {
    httpOnly: true,
    sameSite: "lax",
    maxAge: COOKIE_MAX_AGE_SECONDS,
    path: "/",
    secure: process.env.NODE_ENV === "production",
  });
}
