import crypto from "crypto";

/**
 * Verifies a Firebase Auth ID token (project odisea-tours) without extra
 * dependencies: RS256 against Google's published securetoken certificates.
 * Used by /api/email/send (staff only) and /api/portal/notify (any portal
 * session). Returns the decoded payload, or null when the token is not valid.
 */
const PROJECT_ID = "odisea-tours";
const CERTS_URL =
  "https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com";

// Juan's CRM login. Keep in step with isStaff() in the CRM's firestore.rules.
export const STAFF_UIDS = new Set(["mN1vaWN1pjWzzdlBlxie8YyQAj02"]);

let certCache: { certs: Record<string, string>; expires: number } | null = null;

async function getCerts(): Promise<Record<string, string>> {
  if (certCache && certCache.expires > Date.now()) return certCache.certs;
  const res = await fetch(CERTS_URL);
  if (!res.ok) throw new Error("cert fetch " + res.status);
  const certs = (await res.json()) as Record<string, string>;
  const maxAge = Number(/max-age=(\d+)/.exec(res.headers.get("cache-control") || "")?.[1] || 3600);
  certCache = { certs, expires: Date.now() + maxAge * 1000 };
  return certs;
}

function b64urlJson(part: string) {
  return JSON.parse(Buffer.from(part, "base64url").toString("utf8"));
}

export type FirebaseTokenPayload = {
  uid: string;
  email?: string;
  provider?: string;
  [k: string]: unknown;
};

export async function verifyFirebaseToken(authHeader: string | null): Promise<FirebaseTokenPayload | null> {
  try {
    const m = /^Bearer\s+(.+)$/i.exec(authHeader || "");
    if (!m) return null;
    const [h, p, sig] = m[1].split(".");
    if (!h || !p || !sig) return null;
    const header = b64urlJson(h);
    const payload = b64urlJson(p);
    if (header.alg !== "RS256" || !header.kid) return null;

    const certs = await getCerts();
    const cert = certs[header.kid];
    if (!cert) return null;
    const ok = crypto.createVerify("RSA-SHA256").update(`${h}.${p}`).verify(cert, Buffer.from(sig, "base64url"));
    if (!ok) return null;

    const now = Math.floor(Date.now() / 1000);
    if (payload.aud !== PROJECT_ID) return null;
    if (payload.iss !== `https://securetoken.google.com/${PROJECT_ID}`) return null;
    if (typeof payload.exp !== "number" || payload.exp < now - 60) return null;
    if (typeof payload.iat !== "number" || payload.iat > now + 300) return null;
    if (!payload.sub || typeof payload.sub !== "string") return null;

    return {
      ...payload,
      uid: payload.sub,
      email: payload.email,
      provider: payload.firebase?.sign_in_provider,
    };
  } catch {
    return null;
  }
}
