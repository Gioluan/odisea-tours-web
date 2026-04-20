import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { proposalBySlug } from "@/content/proposals";
import { hasAccess } from "@/lib/proposals";
import PasswordGate from "./PasswordGate";
import ProposalView from "./ProposalView";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const proposal = await proposalBySlug(slug);
  if (!proposal) {
    return {
      title: "Proposal not found · Odisea Tours",
      robots: { index: false, follow: false },
    };
  }
  return {
    title: `Spain Tour Proposal · ${proposal.club_name}`,
    description: `A personalised Spain sports tour proposal for ${proposal.club_name}.`,
    robots: { index: false, follow: false },
  };
}

export const dynamic = "force-dynamic";

export default async function ProposalPage({ params }: Props) {
  const { slug } = await params;
  const proposal = await proposalBySlug(slug);
  if (!proposal) notFound();

  const ok = await hasAccess(slug);
  if (!ok) {
    return <PasswordGate slug={slug} clubName={proposal.club_name} />;
  }
  const { password, password_hash, ...safe } = proposal;
  return <ProposalView proposal={safe as typeof proposal} />;
}
