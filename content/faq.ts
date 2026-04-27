export type FaqItem = {
  q: string;
  a: string;
};

export type FaqGroup = {
  title: string;
  items: FaqItem[];
};

export const FAQ_GROUPS: FaqGroup[] = [
  {
    title: "Pricing & what's included",
    items: [
      {
        q: "How much does a Spain soccer tour cost?",
        a: "Our published soccer tour package is $3,495 per player for a 10 to 12 day European Soccer Tour. Cultural tours sit between €1,995 and €2,595 per traveller. Our youth softball tour is $2,895 per player. Final pricing depends on group size, season, hotel level and the specific cities on the itinerary. Larger groups bring the per-player number down. International flights are not included in any of our packages.",
      },
      {
        q: "What is included in the price?",
        a: "All accommodation (typically 4-star hotels and the Spanish FA headquarters), all meals per the itinerary, private coach transport throughout, bilingual Odisea guides who travel with the group, training sessions at FC Barcelona, Valencia CF and the Spanish FA, fixtures against Spanish academy opposition, stadium tours, match filming with per-player tagging, and travel insurance. Lunches marked 'at own cost' on the itinerary, optional La Liga match tickets, and personal expenses are excluded.",
      },
      {
        q: "Are international flights included?",
        a: "No. We exclude international flights so each family or club can use their preferred airline, frequent flyer programme or group flight desk. We do help groups time the tour around direct routes from major US metros (Iberia from LAX and MIA, American from DFW, multiple carriers from JFK).",
      },
      {
        q: "What is the deposit and payment schedule?",
        a: "Standard schedule: a deposit of $500 per player at booking, balance due 60 days before departure. Once the deposit is paid, the per-player price is locked in. We work with families on instalments where the club requests it.",
      },
    ],
  },
  {
    title: "Group logistics",
    items: [
      {
        q: "What is the minimum and maximum group size?",
        a: "Minimum 18 travellers, no hard maximum. We have run tours from a single 22-player squad up to 100-traveller programmes (3 squads plus families). Larger groups get better per-player pricing because our coach, hotel and training-facility costs spread over more travellers.",
      },
      {
        q: "Can families travel on the same itinerary as the players?",
        a: "Yes, and most clubs prefer it that way. The standard format runs the players through training and fixtures while a parallel cultural programme is available for families: stadium tours, Gaudí architecture in Barcelona, Valencia old town, Madrid panoramic tour, beach days. Everyone shares the same hotels, meals and coach.",
      },
      {
        q: "What ages can travel?",
        a: "We host every age group from U10 through college and adult amateur. Most of our youth soccer programmes run U12 through U19. We also run veterans' tours for adult amateur teams and corporate groups, and softball tours for high school and youth softball clubs.",
      },
      {
        q: "Do you cater to dietary restrictions, allergies and special needs?",
        a: "Yes. We collect dietary needs, allergies and accessibility requirements at the booking stage and brief every hotel and restaurant on the itinerary in advance. Halal, kosher, vegetarian, vegan, gluten-free and nut-free are all routine. Tell us during the planning call.",
      },
    ],
  },
  {
    title: "The soccer side",
    items: [
      {
        q: "Do players actually train inside FC Barcelona, Valencia CF and the Spanish FA?",
        a: "Yes. Training sessions are held at FC Barcelona's Joan Gamper facilities (the same complex used by the FCB academy), at Valencia CF's Paterna training ground, and at the Spanish Football Federation's headquarters in Las Rozas, Madrid. Sessions are run by official FC Barcelona and Valencia CF coaching staff. The Spanish FA stay includes accommodation on-site, where the senior Spanish national team also trains.",
      },
      {
        q: "Who organises the matches, and who is the opposition?",
        a: "We do, through twenty years of relationships with Spanish academy clubs and federations. Opposition is age-matched and competitive: typically Spanish academy sides, college-level clubs, or regional select teams depending on the level of the visiting group. Every match is filmed and tagged per player so coaches can review back home.",
      },
      {
        q: "Can we customize the itinerary or are these fixed packages?",
        a: "Every tour is customised. The published packages are starting points, not boxes. We adjust cities, training partners, hotel level, dates, length and the cultural programme around the group. The discipline that runs through every tour is the same; the route never is.",
      },
    ],
  },
  {
    title: "Booking & safety",
    items: [
      {
        q: "When should we book?",
        a: "For peak windows (school summer break, Easter, winter break) we recommend booking 8 to 12 months ahead so we can lock in training dates with FC Barcelona and Valencia CF, which fill quickly. Off-peak windows can be confirmed with 4 to 6 months notice.",
      },
      {
        q: "What is the cancellation policy?",
        a: "Deposits are non-refundable but transferrable to other travellers in the same group. Balance is fully refundable up to 90 days before departure, 50% refundable between 60 and 89 days, and non-refundable inside 60 days. We strongly recommend each family also carry independent trip-cancellation insurance.",
      },
      {
        q: "How safe are Odisea tours, and is travel insurance included?",
        a: "We have hosted youth groups in Spain since 2005 without a major incident. Every group has a bilingual Odisea guide on the ground end-to-end, 24/7 emergency contact, and a vetted hotel and transport stack. Group travel insurance covering medical and incident response is included in the package price. Trip-cancellation cover is the family's choice.",
      },
      {
        q: "How does language work? Will my players cope?",
        a: "Every Odisea guide is fully bilingual English and Spanish, and stays with the group from arrival to departure. Players do not need to speak Spanish. Coaching sessions at FC Barcelona, Valencia CF and the Spanish FA are delivered in English by staff used to international youth groups.",
      },
    ],
  },
];

export const FAQ_FLAT: FaqItem[] = FAQ_GROUPS.flatMap((g) => g.items);
