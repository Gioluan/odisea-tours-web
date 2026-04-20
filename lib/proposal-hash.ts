/**
 * Password hashing for proposal access codes.
 * Uses PBKDF2 via Web Crypto (works in browsers, Edge, and Node 18+).
 *
 * The salted, high-iteration hash is safe to expose in a public Firestore doc:
 * brute-forcing a 6-char alphanumeric code (32^6 = 1B combos) at 100K iterations
 * would take 30+ days on a modern CPU.
 */

const ITERATIONS = 100_000;
const HASH_LEN = 32;
const SALT_LEN = 16;

function toHex(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function fromHex(hex: string): Uint8Array {
  const out = new Uint8Array(hex.length / 2);
  for (let i = 0; i < out.length; i++) out[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
  return out;
}

async function pbkdf2(password: string, salt: Uint8Array): Promise<ArrayBuffer> {
  const enc = new TextEncoder();
  const passBuf = enc.encode(password);
  const key = await crypto.subtle.importKey(
    "raw",
    passBuf.buffer.slice(passBuf.byteOffset, passBuf.byteOffset + passBuf.byteLength) as ArrayBuffer,
    { name: "PBKDF2" },
    false,
    ["deriveBits"],
  );
  const saltBuf = salt.buffer.slice(salt.byteOffset, salt.byteOffset + salt.byteLength) as ArrayBuffer;
  return crypto.subtle.deriveBits(
    { name: "PBKDF2", hash: "SHA-256", salt: saltBuf, iterations: ITERATIONS },
    key,
    HASH_LEN * 8,
  );
}

/** Produce a hash string like "pbkdf2$<iter>$<saltHex>$<hashHex>". */
export async function hashPassword(password: string): Promise<string> {
  const salt = crypto.getRandomValues(new Uint8Array(SALT_LEN));
  const hash = await pbkdf2(password, salt);
  const saltHex = toHex(salt.buffer.slice(salt.byteOffset, salt.byteOffset + salt.byteLength) as ArrayBuffer);
  return `pbkdf2$${ITERATIONS}$${saltHex}$${toHex(hash)}`;
}

/** Constant-time compare two hex strings. */
function timingSafeEqualHex(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/** Verify a candidate password against a stored hash string. */
export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  if (!stored || !stored.startsWith("pbkdf2$")) return false;
  const [, , saltHex, hashHex] = stored.split("$");
  if (!saltHex || !hashHex) return false;
  const salt = fromHex(saltHex);
  const derived = toHex(await pbkdf2(password, salt));
  return timingSafeEqualHex(derived, hashHex);
}
