import { NextResponse } from "next/server";
import { proposalBySlug } from "@/content/proposals";
import { grantAccess } from "@/lib/proposals";
import { verifyPassword } from "@/lib/proposal-hash";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  let body: { slug?: string; password?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const slug = typeof body.slug === "string" ? body.slug.trim() : "";
  const password = typeof body.password === "string" ? body.password : "";

  if (!slug || !password) {
    return NextResponse.json({ error: "Missing access code." }, { status: 400 });
  }

  const proposal = await proposalBySlug(slug);
  if (!proposal) {
    return NextResponse.json({ error: "Proposal not found." }, { status: 404 });
  }

  const candidate = password.trim();
  let ok = false;
  if (proposal.password_hash) {
    ok = await verifyPassword(candidate, proposal.password_hash);
  } else if (proposal.password) {
    ok = candidate === proposal.password;
  }

  if (!ok) {
    await new Promise((r) => setTimeout(r, 450));
    return NextResponse.json({ error: "Incorrect access code." }, { status: 401 });
  }

  await grantAccess(slug);
  return NextResponse.json({ ok: true });
}
