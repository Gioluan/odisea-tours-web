import Image from "next/image";
import Link from "next/link";
import Marquee from "@/components/Marquee";
import HeroLetters from "@/components/HeroLetters";
import { TOURS } from "@/content/tours";
import { topJournalPosts } from "@/lib/tour-journal-map";

export default function Home() {
  const featuredPosts = topJournalPosts(3);
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative isolate min-h-[100svh] flex flex-col pt-20 overflow-hidden text-paper">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/photos/veterans-soccer-tour-spain-match-action.jpg"
            alt="An Odisea Tours youth soccer group on a match day in Spain"
            fill
            priority
            className="object-cover object-center kenburns"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ink/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/20 to-ink" />
        </div>

        {/* Top meta bar */}
        <div className="px-6 md:px-10 lg:px-14 pt-6 flex items-center justify-between font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/70">
          <span>40.4168° N / 3.7038° W</span>
          <span className="hidden md:inline">Volume I · Edition MMXXVI</span>
          <span>Est. 2005</span>
        </div>

        {/* Hero headline */}
        <div className="flex-1 flex items-center px-6 md:px-10 lg:px-14">
          <div className="max-w-[1400px] w-full">
            <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.3em] uppercase text-paper/70 mb-8">
              <span>Group Travel From Spain</span>
            </div>

            <h1 className="font-display uppercase text-[clamp(4rem,14vw,14rem)] leading-[0.82] tracking-[-0.015em]">
              <HeroLetters
                text="Travel is"
                delayStart={120}
              />
              <br />
              <HeroLetters
                text="how we"
                delayStart={520}
              />
              <br />
              <HeroLetters
                text="remember"
                italicWords={[0]}
                delayStart={900}
              />
            </h1>

            <div className="mt-12 grid md:grid-cols-12 gap-10 items-end">
              <p className="md:col-span-5 md:col-start-7 text-lg md:text-xl text-paper/85 max-w-md leading-relaxed">
                Odisea Tours has been quietly crafting group journeys through
                Spain for twenty years. Soccer pilgrimages, cultural odysseys,
                corporate retreats and adventures on the coast—
                <span className="font-display-italic"> all handled, all yours.</span>
              </p>
              <div className="md:col-span-5 flex flex-wrap gap-4">
                <Link href="/tours" className="btn-editorial on-dark">
                  Browse the Tours
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path d="M1 5 H13 M9 1 L13 5 L9 9" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                </Link>
                <Link href="/plan-your-tour" className="btn-editorial on-dark">
                  Plan Your Tour
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="px-6 md:px-10 lg:px-14 pb-6 flex items-end justify-between font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/70">
          <span className="flex items-center gap-3">
            <span className="w-8 h-px bg-current" />
            Scroll
          </span>
          <span>01 / 05</span>
        </div>
      </section>

      {/* ---------- MARQUEE ---------- */}
      <Marquee />

      {/* ---------- INTRO / CHAPTER I ---------- */}
      <section className="paper-texture py-16 md:py-20 relative">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14 grid md:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="md:col-span-5 relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm">
            <Image
              src="/photos/odisea-tours-group-barcelona-cathedral.jpg"
              alt="A group from Odisea Tours standing in front of Barcelona Cathedral"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <span className="absolute top-3 left-3 font-mono-editorial text-[0.52rem] tracking-[0.28em] uppercase bg-ink/70 backdrop-blur-sm text-paper px-2 py-0.5 rounded-sm">
              Chapter I · Our Quiet Craft
            </span>
          </div>
          <div className="md:col-span-7">
            <div className="flex items-baseline gap-4 mb-3">
              <span className="chapter-num text-4xl leading-none text-gold">I</span>
              <div className="rule-label font-mono-editorial text-[0.58rem] tracking-[0.28em] uppercase text-ink/60">
                <span>Our Quiet Craft</span>
              </div>
            </div>
            <p className="font-display text-[clamp(1.15rem,1.9vw,1.65rem)] leading-[1.35] tracking-[-0.01em] reveal">
              We are not an agency. We are a small team of
              <span className="font-display-italic"> Spaniards </span>
              who happen to love the country we were born in, and have spent
              two decades translating it, <span className="font-display-italic">honestly</span>, for the people who come to see it.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-[0.72rem] text-ink-muted font-mono-editorial">
              <div className="border-t border-ink/15 pt-3">
                <span className="text-ink font-display text-xl block mb-1">20</span>
                Years in the field
              </div>
              <div className="border-t border-ink/15 pt-3">
                <span className="text-ink font-display text-xl block mb-1">1,400+</span>
                Groups hosted
              </div>
              <div className="border-t border-ink/15 pt-3">
                <span className="text-ink font-display text-xl block mb-1">37</span>
                Spanish provinces
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHO IT'S FOR ---------- */}
      <section className="bg-paper py-16 md:py-20 border-t border-ink/10">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="rule-label font-mono-editorial text-[0.58rem] tracking-[0.28em] uppercase text-ink/60 mb-10">
            <span>Who we build tours for</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/15">
            {[
              {
                href: "/veterans",
                title: "Veterans & Adult Clubs",
                desc: "Fun-first tours with matches against local Spanish sides, iconic stadium visits, great hotels and the freedom to enjoy Spain together.",
                image: "/photos/veterans-soccer-tour-spain-match-action.jpg",
                label: "Over-35 clubs",
              },
              {
                href: "/youth",
                title: "Youth Clubs & Academies",
                desc: "Development-focused tours. Train at professional facilities, play Spanish youth teams, visit iconic stadiums.",
                image: "/photos/odisea-tours-professional-coaching.jpg",
                label: "U12 to U19",
              },
              {
                href: "/schools",
                title: "Schools & College Teams",
                desc: "Sport plus culture, perfectly balanced. La Liga, coaching, stadium tours and the best of Spain, all wrapped in end-to-end supervision.",
                image: "/photos/odisea-tours-group-barcelona-cathedral.jpg",
                label: "Educational tours",
              },
            ].map((a) => (
              <Link key={a.href} href={a.href} className="group bg-paper block reveal">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute top-3 left-3 font-mono-editorial text-[0.52rem] tracking-[0.28em] uppercase bg-ink/70 backdrop-blur-sm text-paper px-2 py-0.5 rounded-sm">
                    {a.label}
                  </span>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-display text-xl leading-tight tracking-tight text-ink group-hover:text-gold transition-colors mb-2">
                    {a.title}
                  </h3>
                  <p className="text-ink-muted text-sm leading-snug">
                    {a.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CHAPTER II · TOUR EXPERIENCES ---------- */}
      <section className="bg-ink text-paper py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
            <div>
              <div className="flex items-baseline gap-4 mb-3">
                <span className="chapter-num text-4xl leading-none text-gold">II</span>
                <div className="rule-label font-mono-editorial text-[0.58rem] tracking-[0.28em] uppercase text-paper/60">
                  <span>Tour Experiences</span>
                </div>
              </div>
              <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.6rem)] leading-[1] tracking-[-0.015em]">
                Seven kinds of <span className="font-display-italic text-gold">unforgettable.</span>
              </h2>
            </div>
            <p className="text-sm text-paper/60 leading-snug max-w-sm">
              Browse the full set. Each one built from the ground up for your group.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {TOURS.map((tour) => (
              <Link
                key={tour.slug}
                href={`/tours/${tour.slug}`}
                className="group block reveal"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm text-paper/50">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />
                  <div className="absolute top-3 left-3 right-3 flex items-start justify-between font-mono-editorial text-[0.52rem] tracking-[0.28em] uppercase text-paper/90">
                    <span className="truncate">No. {tour.chapter}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-mono-editorial text-[0.52rem] tracking-[0.28em] uppercase text-paper/70 mb-1">
                      {tour.duration}
                    </p>
                    <h3 className="font-display text-xl md:text-2xl leading-tight tracking-tight text-paper">
                      {tour.title}{" "}
                      <span className="font-display-italic text-gold">
                        {tour.italicTitle}
                      </span>
                    </h3>
                  </div>
                </div>
                <p className="mt-3 text-[0.95rem] text-paper/80 leading-snug max-w-md">
                  {tour.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FIELD NOTES PREVIEW (links into /journal for SEO topic clustering) ---------- */}
      <section className="bg-[#faf6ee] py-16 md:py-20 border-t border-ink/10">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="mb-10 flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className="flex items-baseline gap-4 mb-3">
                <span className="chapter-num text-4xl leading-none text-gold">III</span>
                <div className="rule-label font-mono-editorial text-[0.58rem] tracking-[0.28em] uppercase text-ink/60">
                  <span>From The Journal</span>
                </div>
              </div>
              <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.6rem)] leading-[1] tracking-[-0.015em]">
                The way we{" "}
                <span className="font-display-italic text-gold">actually plan</span> a trip.
              </h2>
            </div>
            <p className="text-sm text-ink/65 leading-snug max-w-sm">
              Twenty years of working notes. The questions coaches ask, the
              cities most tours miss, what a real Spain tour costs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/journal/${post.slug}`}
                className="group block reveal"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute top-3 left-3 font-mono-editorial text-[0.52rem] tracking-[0.28em] uppercase bg-ink/70 backdrop-blur-sm text-paper px-2 py-0.5 rounded-sm">
                    {post.category}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl md:text-2xl leading-tight tracking-tight group-hover:text-gold transition-colors">
                  {post.title}{" "}
                  <span className="font-display-italic text-gold">
                    {post.italicTitle}
                  </span>
                </h3>
                <p className="mt-2 text-sm text-ink/70 leading-snug">
                  {post.excerpt}
                </p>
                <p className="mt-3 font-mono-editorial text-[0.55rem] tracking-[0.28em] uppercase text-ink/55">
                  {post.readTime} read
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Link href="/journal" className="link-rule font-display text-base">
              Read all field notes →
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- INTERMISSION · FIELD NOTES (PHOTO GALLERY) ---------- */}
      <section className="paper-texture relative overflow-hidden">
        {/* Header band with background photo */}
        <div className="relative isolate overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/photos/flamenco-moorish-spain-hero.jpg"
              alt="Spain at sunset"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-ink/65" />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-ink/30" />
          </div>
          <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14 py-14 md:py-20 text-paper">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="chapter-num text-4xl leading-none text-gold">·</span>
                  <div className="rule-label font-mono-editorial text-[0.58rem] tracking-[0.28em] uppercase text-paper/70">
                    <span>Intermission · Field Notes</span>
                  </div>
                </div>
                <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.6rem)] leading-[1] tracking-[-0.015em]">
                  Twenty years, <span className="font-display-italic text-gold">in frames.</span>
                </h2>
              </div>
              <p className="max-w-sm text-sm text-paper/75 leading-snug">
                Unstaged. Unfiltered. Groups, stadiums and afternoons that have passed through our hands since 2005.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14 py-12 md:py-16">

          <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6">
            {GALLERY.map((photo, i) => (
              <div
                key={photo.src}
                className={`relative overflow-hidden corner-ticks text-ink/40 reveal ${photo.className}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  className="object-cover transition-transform duration-[1.6s] ease-out hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-ink/80 to-transparent">
                  <p className="font-mono-editorial text-[0.55rem] tracking-[0.28em] uppercase text-paper/90">
                    No. {String(i + 1).padStart(2, "0")} · {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CHAPTER III · PRINCIPLES ---------- */}
      <section className="py-16 md:py-20 paper-texture border-t border-ink/10">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="mb-10 flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className="flex items-baseline gap-4 mb-3">
                <span className="chapter-num text-4xl leading-none text-gold">III</span>
                <div className="rule-label font-mono-editorial text-[0.58rem] tracking-[0.28em] uppercase text-ink/60">
                  <span>What We Promise</span>
                </div>
              </div>
              <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.6rem)] leading-[1] tracking-[-0.015em]">
                Six things we would <span className="font-display-italic">never stop</span> doing.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-ink/15 border border-ink/15">
            {PRINCIPLES.map((p, i) => (
              <div
                key={p.title}
                className="bg-paper-warm p-6 md:p-8 reveal"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="font-mono-editorial text-[0.55rem] tracking-[0.28em] uppercase text-ink/50">
                    0{i + 1}
                  </span>
                  <svg width="20" height="20" viewBox="0 0 32 32" className="text-gold">
                    <path
                      d="M16 4 L19 13 L28 16 L19 19 L16 28 L13 19 L4 16 L13 13 Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-xl md:text-2xl leading-tight tracking-tight mb-2">
                  {p.title}
                </h3>
                <p className="text-ink-muted leading-snug text-[0.88rem]">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CHAPTER IV · TESTIMONIAL ---------- */}
      <section className="bg-paper py-16 md:py-20 relative border-t border-ink/10">
        <div className="max-w-[900px] mx-auto px-6 md:px-10 lg:px-14 text-center">
          <div className="rule-label justify-center font-mono-editorial text-[0.58rem] tracking-[0.28em] uppercase text-ink/60 mb-6 inline-flex">
            <span>Chapter IV · Word From a Traveler</span>
          </div>
          <blockquote className="font-display italic text-[clamp(1.25rem,2.3vw,1.9rem)] leading-[1.3] max-w-3xl mx-auto reveal">
            &ldquo;Everything was handled,{" "}
            <span className="not-italic font-display text-gold">every detail</span>
            , from the playing facilities to the hotel to the little dinner spots our boys still talk about. We have been on many trips. None like this.&rdquo;
          </blockquote>
          <div className="mt-8 flex flex-col items-center gap-1">
            <svg width="48" height="10" viewBox="0 0 60 12" className="text-gold">
              {[0, 12, 24, 36, 48].map((x) => (
                <path
                  key={x}
                  d={`M${x + 6} 1 L${x + 7.5} 4.5 L${x + 11} 5 L${x + 8.5} 7.5 L${x + 9} 11 L${x + 6} 9 L${x + 3} 11 L${x + 3.5} 7.5 L${x + 1} 5 L${x + 4.5} 4.5 Z`}
                  fill="currentColor"
                />
              ))}
            </svg>
            <p className="font-display text-lg mt-3">Jon Taylor</p>
            <p className="font-mono-editorial text-[0.55rem] tracking-[0.28em] uppercase text-ink/60">
              Colne Academy · United Kingdom
            </p>
          </div>
        </div>
      </section>

      {/* ---------- CHAPTER V · CTA ---------- */}
      <section className="bg-ink text-paper py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 stripes opacity-[0.04]" />
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14 relative">
          <div className="flex items-baseline gap-4 mb-4">
            <span className="chapter-num text-4xl leading-none text-gold">V</span>
            <div className="rule-label font-mono-editorial text-[0.58rem] tracking-[0.28em] uppercase text-paper/60">
              <span>The Invitation</span>
            </div>
          </div>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[0.95] tracking-[-0.005em] max-w-[22ch]">
            Tell us who you&apos;re bringing. <span className="font-display-italic text-gold">We&apos;ll build the rest.</span>
          </h2>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/plan-your-tour" className="btn-editorial on-dark">
              Start the Conversation
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M1 5 H13 M9 1 L13 5 L9 9" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </Link>
            <a href="mailto:bookings@odisea-tours.com" className="btn-editorial on-dark">
              bookings@odisea-tours.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

const GALLERY = [
  {
    src: "/photos/veterans-soccer-tour-real-madrid-bernabeu.jpg",
    caption: "Bernabéu · Madrid",
    className: "md:col-span-6 aspect-[4/5] md:aspect-[3/4]",
  },
  {
    src: "/photos/odisea-tours-match-vs-local-team.jpg",
    caption: "Match Day · vs. Local Side",
    className: "md:col-span-6 aspect-[4/5] md:aspect-[3/4]",
  },
  {
    src: "/photos/odisea-tours-youth-girls-celebrating.jpg",
    caption: "After the Whistle",
    className: "md:col-span-4 aspect-square",
  },
  {
    src: "/photos/veterans-soccer-tour-spanish-football-federation.jpg",
    caption: "Spanish FA · Training",
    className: "md:col-span-4 aspect-square",
  },
  {
    src: "/photos/veterans-soccer-tour-valencia-cf-match.jpg",
    caption: "Valencia CF",
    className: "md:col-span-4 aspect-square",
  },
  {
    src: "/photos/veterans-soccer-tour-barcelona-la-rambla.jpg",
    caption: "Las Ramblas · Barcelona",
    className: "md:col-span-7 aspect-[3/2]",
  },
  {
    src: "/photos/odisea-tours-professional-coaching.jpg",
    caption: "Coaching Clinic",
    className: "md:col-span-5 aspect-[3/2]",
  },
];

const PRINCIPLES = [
  {
    title: "Built around you.",
    description:
      "No canned itineraries. Every trip begins with a real conversation and a blank page. We shape the journey around your group, not the other way around.",
  },
  {
    title: "All-in, always.",
    description:
      "Hotels, meals, transfers, tickets, guides—priced once, held transparently, with no quiet surcharges when the bus gets stuck in traffic.",
  },
  {
    title: "Awake when you need us.",
    description:
      "A real person, in Spain, answering the phone. 24 hours a day, for the whole length of your trip. Not a chatbot. Not a forwarded line.",
  },
  {
    title: "Hosted by locals.",
    description:
      "Our guides grew up in the cities they show you. They know which bar to lean on and which tapas you actually have to try. You will feel it.",
  },
  {
    title: "Bent to your rhythm.",
    description:
      "The tour breathes with the group. Slower mornings, longer meals, one more museum if you want it. The itinerary serves you, not the clock.",
  },
  {
    title: "Licensed. Insured. Bonded.",
    description:
      "Ground Agents Solutions S.L.—twenty years registered in Spain. Every tour backed by full civil and travel-agency insurance. Quietly, carefully.",
  },
];
