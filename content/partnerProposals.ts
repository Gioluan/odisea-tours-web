import { doc, getDoc } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import data from "./partner-proposals.json";

export type PartnerProposalOption = {
  id: string;
  club_name: string;
  logo_url?: string;
  tagline: string;
  cities: string[];
  nights: number;
  group_size: number;
  group_size_note?: string;
  price_usd_per_person: number | null;
  price_note?: string;
  highlights: string[];
  itinerary: { day: string; title: string; detail: string }[];
  included: string[];
  excluded: string[];
};

export type PartnerProposal = {
  slug: string;
  partner_name: string;
  partner_title: string;
  partner_org: string;
  territory: string;
  commission_usd_per_player: number;
  commission_note: string;
  contact_name: string;
  contact_email: string;
  contact_phone: string;
  password?: string;
  password_hash?: string;
  created_at: string;
  options: PartnerProposalOption[];
};

export const SEED_PARTNER_PROPOSALS = data as PartnerProposal[];

export async function partnerProposalBySlug(slug: string): Promise<PartnerProposal | undefined> {
  const db = getFirebaseDb();
  if (db) {
    try {
      const snap = await getDoc(doc(db, "odisea_partner_proposals", slug));
      if (snap.exists()) return snap.data() as PartnerProposal;
    } catch (e) {
      console.warn("Firestore partner proposal fetch failed, falling back to seed:", e);
    }
  }
  return SEED_PARTNER_PROPOSALS.find((p) => p.slug === slug);
}
