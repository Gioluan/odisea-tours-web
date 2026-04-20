import { doc, getDoc } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import data from "./proposals.json";

export type ProposalAudience = "uk_school" | "soccer_club" | "veterans";

export type Proposal = {
  slug: string;
  club_name: string;
  country?: string;
  city?: string;
  state?: string;
  league?: string;
  audience: ProposalAudience;
  logo_url?: string;
  price_per_player_eur: number;
  group_size: number;
  days: number;
  hero_photo?: string;
  decision_maker?: string;
  contact_name: string;
  contact_email: string;
  contact_phone: string;
  // Legacy plaintext (JSON seed)
  password?: string;
  // New hashed (Firestore)
  password_hash?: string;
  created_at: string;
};

export const SEED_PROPOSALS = data as Proposal[];

/**
 * Look up a proposal by slug. Firestore first (live-published from sales ops),
 * static JSON seed as fallback.
 */
export async function proposalBySlug(slug: string): Promise<Proposal | undefined> {
  const db = getFirebaseDb();
  if (db) {
    try {
      const snap = await getDoc(doc(db, "odisea_proposals", slug));
      if (snap.exists()) return snap.data() as Proposal;
    } catch (e) {
      console.warn("Firestore proposal fetch failed, falling back to seed:", e);
    }
  }
  return SEED_PROPOSALS.find((p) => p.slug === slug);
}
