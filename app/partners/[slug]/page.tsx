import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { partnerProposalBySlug } from "@/content/partnerProposals";
import { hasPartnerAccess } from "@/lib/partner-proposals";
import PasswordGate from "./PasswordGate";
import PartnerProposalView from "./PartnerProposalView";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const proposal = await partnerProposalBySlug(slug);
  if (!proposal) {
    return {
      title: "Partner proposal not found · Odisea Tours",
      robots: { index: false, follow: false },
    };
  }
  return {
    title: `Partner Proposal · ${proposal.partner_name}`,
    description: `A confidential partner proposal prepared for ${proposal.partner_name}.`,
    robots: { index: false, follow: false },
  };
}

export const dynamic = "force-dynamic";

export default async function PartnerProposalPage({ params }: Props) {
  const { slug } = await params;
  const proposal = await partnerProposalBySlug(slug);
  if (!proposal) notFound();

  const ok = await hasPartnerAccess(slug);
  if (!ok) {
    return <PasswordGate slug={slug} partnerName={proposal.partner_name} />;
  }
  const { password, password_hash, ...safe } = proposal;
  return <PartnerProposalView proposal={safe as typeof proposal} />;
}
