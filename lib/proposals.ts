import { cookies } from "next/headers";

export const COOKIE_PREFIX = "p_";
export const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 7; // 7 days

export async function hasAccess(slug: string): Promise<boolean> {
  const store = await cookies();
  return store.get(COOKIE_PREFIX + slug)?.value === "1";
}

export async function grantAccess(slug: string) {
  const store = await cookies();
  store.set(COOKIE_PREFIX + slug, "1", {
    httpOnly: true,
    sameSite: "lax",
    maxAge: COOKIE_MAX_AGE_SECONDS,
    path: "/",
    secure: process.env.NODE_ENV === "production",
  });
}
