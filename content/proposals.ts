import data from "./proposals.json";

export type ProposalAudience = "uk_school" | "soccer_club" | "veterans";

export type Proposal = {
  slug: string;
  club_name: string;
  country?: string;
  city?: string;
  audience: ProposalAudience;
  logo_url?: string;
  price_per_player_eur: number;
  group_size: number;
  days: number;
  hero_photo?: string;
  contact_name: string;
  contact_email: string;
  contact_phone: string;
  password: string;
  created_at: string;
};

export const PROPOSALS = data as Proposal[];

export function proposalBySlug(slug: string): Proposal | undefined {
  return PROPOSALS.find((p) => p.slug === slug);
}
