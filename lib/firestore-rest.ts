import crypto from "crypto";

/**
 * Minimal Firestore REST client for server routes, authenticated with the
 * odisea-tours service account in env FIREBASE_SERVICE_ACCOUNT (the JSON key,
 * as one line). Server-side only: it bypasses the security rules, so it must
 * never be reachable without its own checks (see app/api/stripe/webhook).
 */
type SA = { client_email: string; private_key: string; project_id: string };

let tokenCache: { token: string; exp: number } | null = null;

function sa(): SA {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (!raw) throw new Error("FIREBASE_SERVICE_ACCOUNT not configured");
  const j = JSON.parse(raw);
  return { client_email: j.client_email, private_key: j.private_key, project_id: j.project_id };
}

async function accessToken(): Promise<string> {
  if (tokenCache && tokenCache.exp > Date.now() + 60_000) return tokenCache.token;
  const s = sa();
  const now = Math.floor(Date.now() / 1000);
  const b64 = (o: object) => Buffer.from(JSON.stringify(o)).toString("base64url");
  const unsigned = `${b64({ alg: "RS256", typ: "JWT" })}.${b64({
    iss: s.client_email, scope: "https://www.googleapis.com/auth/datastore",
    aud: "https://oauth2.googleapis.com/token", iat: now, exp: now + 3600,
  })}`;
  const sig = crypto.createSign("RSA-SHA256").update(unsigned).sign(s.private_key).toString("base64url");
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: `${unsigned}.${sig}` }),
  });
  if (!res.ok) throw new Error("token " + res.status + " " + (await res.text()).slice(0, 200));
  const j = await res.json();
  tokenCache = { token: j.access_token, exp: Date.now() + (j.expires_in || 3600) * 1000 };
  return j.access_token;
}

function base() {
  return `https://firestore.googleapis.com/v1/projects/${sa().project_id}/databases/(default)/documents`;
}

// ── value encoding ──
type V = Record<string, unknown>;
export function toValue(v: unknown): V {
  if (v === null || v === undefined) return { nullValue: null };
  if (typeof v === "boolean") return { booleanValue: v };
  if (typeof v === "number") return Number.isInteger(v) ? { integerValue: String(v) } : { doubleValue: v };
  if (typeof v === "string") return { stringValue: v };
  if (Array.isArray(v)) return { arrayValue: { values: v.map(toValue) } };
  if (typeof v === "object") return { mapValue: { fields: toFields(v as Record<string, unknown>) } };
  return { stringValue: String(v) };
}
export function toFields(o: Record<string, unknown>) {
  const f: Record<string, V> = {};
  for (const [k, v] of Object.entries(o)) if (v !== undefined) f[k] = toValue(v);
  return f;
}
export function fromValue(v: any): unknown {
  if (!v) return null;
  if ("nullValue" in v) return null;
  if ("booleanValue" in v) return v.booleanValue;
  if ("integerValue" in v) return Number(v.integerValue);
  if ("doubleValue" in v) return v.doubleValue;
  if ("stringValue" in v) return v.stringValue;
  if ("timestampValue" in v) return v.timestampValue;
  if ("arrayValue" in v) return (v.arrayValue.values || []).map(fromValue);
  if ("mapValue" in v) return fromFields(v.mapValue.fields || {});
  return null;
}
export function fromFields(f: Record<string, any>) {
  const o: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(f || {})) o[k] = fromValue(v);
  return o;
}

export async function getDoc(path: string): Promise<{ data: Record<string, any>; updateTime: string } | null> {
  const res = await fetch(`${base()}/${path}`, { headers: { Authorization: `Bearer ${await accessToken()}` } });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`get ${path} ${res.status}`);
  const j = await res.json();
  return { data: fromFields(j.fields || {}), updateTime: j.updateTime };
}

/** Overwrites the listed top-level fields. With updateTime, fails if the doc changed since it was read. */
export async function patchDoc(path: string, fields: Record<string, unknown>, opts: { updateTime?: string; mustNotExist?: boolean } = {}) {
  const q = new URLSearchParams();
  Object.keys(fields).forEach(k => q.append("updateMask.fieldPaths", k));
  if (opts.updateTime) q.append("currentDocument.updateTime", opts.updateTime);
  if (opts.mustNotExist) q.append("currentDocument.exists", "false");
  const res = await fetch(`${base()}/${path}?${q}`, {
    method: "PATCH",
    headers: { Authorization: `Bearer ${await accessToken()}`, "Content-Type": "application/json" },
    body: JSON.stringify({ fields: toFields(fields) }),
  });
  if (!res.ok) {
    const err = new Error(`patch ${path} ${res.status}`) as Error & { status?: number };
    err.status = res.status;
    throw err;
  }
  return res.json();
}
