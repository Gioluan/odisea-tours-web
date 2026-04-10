export interface Post {
  slug: string;
  title: string;
  italicTitle?: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  cover: string;
  body: string[];
}

export const POSTS: Post[] = [
  {
    slug: "how-to-plan-a-group-trip-to-spain",
    title: "How to plan a group trip to",
    italicTitle: "Spain",
    excerpt:
      "The quiet rules we have learned after twenty years of hosting schools, companies, and families across every corner of the country.",
    date: "2026-04-02",
    readTime: "8 min",
    category: "Field Notes",
    cover: "/img/tours/cultural.jpg",
    body: [
      "The hardest part of a group trip is not the booking. It is the deciding. A group of twenty-five people will want twenty-five different things, and the agency that tries to please everyone will please no one. The first rule we learned in 2005—and the one we still repeat to every new client—is this: pick a spine, and protect it.",
      "A spine is a single unifying idea. For a school team, it might be football: every day anchors around a training visit or a match. For a cultural tour, it might be food: every meal is the day's main event, and the sightseeing bends around it. Once the spine is set, every other decision becomes easier. The hotel is the one closest to the training ground. The bus leaves at the hour that gets you to the pintxos bar before the locals arrive.",
      "The second rule is less obvious: spend on what people will remember, save on what they will forget. Travelers remember the dinner on the terrace with the guitar player. They forget the mid-range rental car. So we book the rental car on a budget and the terrace dinner with the guitar player without apology.",
      "Rule three: always have a weather plan. Spain is sunny until it is not. Every good itinerary we build has a shadow itinerary—an indoor day we can swap in if the forecast changes. We never tell the group. We just switch quietly, and nobody notices except that the day was good.",
      "Rule four, and the one we feel most strongly about: let the group breathe. Twenty years of watching travelers in this country has taught us that the best moments are almost always the ones that weren't scheduled. The hour after lunch when everybody sat in the shade and nobody wanted to move. The wrong turn that led to a plaza nobody had heard of. Leave space for those moments. Build fewer items into the day. Your group will thank you in their photographs.",
      "And finally, the rule we hold above all the others: pick the agency you would trust to answer the phone at two in the morning. Because something, on every trip, goes sideways. A flight delay. A sick traveler. A closed restaurant. The measure of a group travel company is not what happens on the sunny days. It is what happens at 2am on the day that didn't go as planned. Call the agency once, before you book, and see how long it takes them to answer.",
    ],
  },
  {
    slug: "why-la-masia-is-still-the-best-football-visit-in-europe",
    title: "Why La Masia is still the best football",
    italicTitle: "visit in Europe",
    excerpt:
      "Every academy in Europe now runs a visitor program. Barcelona's is twenty years older, and it shows.",
    date: "2026-03-18",
    readTime: "6 min",
    category: "Dispatches",
    cover: "/img/tours/soccer.jpg",
    body: [
      "There are perhaps two dozen top football academies in Europe you can now visit as a group. Most are recent additions. Manchester City opened theirs in 2014. PSG's visitor program dates from 2019. Bayern Munich's new facility only started hosting outside groups in 2022. These are all very good programs. They are also, unmistakably, corporate operations.",
      "La Masia is different because it was never built for visitors. It was built to develop footballers, starting in 1979, and it still is—with an obsession that every agency who has ever brought a group through its gates will recognize the moment they step inside. The staff are not tour guides. They are coaches who have been told, today, that a group from Ohio will be visiting, and would they mind walking them around. Most of the time, they don't mind. Sometimes they bring a training session to a pause so a twelve-year-old from Cincinnati can meet the kid who might be the next Pedri.",
      "The visit itself is not polished. You will not be handed a glossy folder. There is no gift shop at the end. What you will get, if you arrange it through an agency that has actually spent time there, is a walk through grounds that feel like a monastery. A twenty-minute conversation with a technical director who still speaks about the club the way he did when he first arrived. And, if your group is quiet and interested, a seat at the side of a youth training session where you can watch the thing being built in real time.",
      "This is why we think La Masia is still the best football visit in Europe. Not because it is the shiniest—because it isn't. Because it is the only one that still feels, after forty-five years, like a place where the game is being taken seriously by people who don't seem to notice that tourists are watching.",
      "We have been taking school groups there since 2009. We still feel lucky every time we walk through the gate.",
    ],
  },
];

export function postBySlug(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
