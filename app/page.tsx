import Image from "next/image";
import Link from "next/link";
import Marquee from "@/components/Marquee";
import HeroLetters from "@/components/HeroLetters";
import { TOURS } from "@/content/tours";

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative isolate min-h-[100svh] flex flex-col pt-20 overflow-hidden text-paper">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/photos/veterans-soccer-tour-spain-match-action.jpg"
            alt=""
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
              <span>A Dispatch From Spain</span>
            </div>

            <h1 className="font-display text-[clamp(4rem,14vw,14rem)] leading-[0.82] tracking-[-0.04em]">
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
                <Link href="/contact" className="btn-editorial on-dark">
                  Request a Proposal
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
      <section className="paper-texture py-32 md:py-44 relative">
        <div className="absolute left-6 md:left-10 top-32 vlabel text-ink/40 hidden md:block">
          The Philosophy · 001
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-20 lg:px-28 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-2">
            <span className="chapter-num text-[7rem] leading-none text-gold">I</span>
          </div>
          <div className="md:col-span-9 md:col-start-4">
            <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.3em] uppercase text-ink/60 mb-8">
              <span>Our Quiet Craft</span>
            </div>
            <p className="font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] tracking-[-0.025em] reveal">
              We are not an agency. We are a small team of
              <span className="font-display-italic"> Spaniards </span>
              who happen to love the country we were born in, and have spent
              two decades translating it—
              <span className="font-display-italic">honestly</span>—for the
              people who come to see it.
            </p>
            <div className="mt-12 grid sm:grid-cols-3 gap-8 text-sm text-ink-muted font-mono-editorial">
              <div className="border-t border-ink/15 pt-4">
                <span className="text-ink font-display text-4xl block mb-2">20</span>
                Years in the field
              </div>
              <div className="border-t border-ink/15 pt-4">
                <span className="text-ink font-display text-4xl block mb-2">1,400+</span>
                Groups hosted
              </div>
              <div className="border-t border-ink/15 pt-4">
                <span className="text-ink font-display text-4xl block mb-2">37</span>
                Spanish provinces
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CHAPTER II · TOUR DISPATCHES ---------- */}
      <section className="bg-ink text-paper py-32 md:py-44 relative overflow-hidden">
        <div className="max-w-[1680px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="flex items-end justify-between mb-24 gap-10">
            <div>
              <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.3em] uppercase text-paper/60 mb-8">
                <span>Chapter II · The Dispatches</span>
              </div>
              <h2 className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.88] tracking-tight">
                Four kinds of
                <br />
                <span className="font-display-italic text-gold">unforgettable.</span>
              </h2>
            </div>
            <span className="chapter-num text-[7rem] text-paper/20 hidden md:block leading-none">II</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-24">
            {TOURS.map((tour, i) => (
              <Link
                key={tour.slug}
                href={`/tours/${tour.slug}`}
                className={`group block reveal ${i % 2 === 1 ? "md:mt-32" : ""}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden corner-ticks text-paper/50">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                  <div className="absolute top-5 left-5 right-5 flex items-start justify-between font-mono-editorial text-[0.58rem] tracking-[0.28em] uppercase text-paper/90">
                    <span>{tour.coordinates}</span>
                    <span>No. {tour.chapter}</span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/70 mb-2">
                      {tour.duration} · {tour.groupSize}
                    </p>
                    <h3 className="font-display text-5xl md:text-6xl leading-none tracking-tight text-paper">
                      {tour.title}
                      <br />
                      <span className="font-display-italic text-gold">
                        {tour.italicTitle}
                      </span>
                    </h3>
                  </div>
                </div>
                <p className="mt-6 pullquote text-2xl md:text-3xl text-paper/90 max-w-md">
                  {tour.tagline}
                </p>
                <p className="mt-5 text-paper/60 leading-relaxed max-w-md">
                  {tour.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-3 font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase link-rule">
                  Read the Dispatch
                  <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
                    <path d="M1 5 H19 M14 1 L19 5 L14 9" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- INTERMISSION · FIELD NOTES (PHOTO GALLERY) ---------- */}
      <section className="paper-texture py-32 md:py-44 relative overflow-hidden">
        <div className="max-w-[1680px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="flex items-end justify-between mb-20 gap-10">
            <div>
              <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.3em] uppercase text-ink/60 mb-8">
                <span>Intermission · Field Notes</span>
              </div>
              <h2 className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.88] tracking-tight">
                Twenty years,
                <br />
                <span className="font-display-italic text-gold">in frames.</span>
              </h2>
            </div>
            <p className="hidden md:block max-w-sm text-ink/70 leading-relaxed pb-4">
              Unstaged. Unfiltered. A sampling of the groups, stadiums, and
              afternoons that have passed through our hands since 2005.
            </p>
          </div>

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
      <section className="py-32 md:py-44 paper-texture">
        <div className="max-w-[1680px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid md:grid-cols-12 gap-12 mb-24">
            <div className="md:col-span-4">
              <span className="chapter-num text-[7rem] leading-none text-gold block">III</span>
              <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.3em] uppercase text-ink/60 mt-8">
                <span>What we promise</span>
              </div>
            </div>
            <h2 className="md:col-span-8 font-display text-[clamp(2.5rem,6vw,6rem)] leading-[0.95] tracking-tight">
              Six things we would
              <br />
              <span className="font-display-italic">never stop</span> doing.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-ink/15 border border-ink/15">
            {PRINCIPLES.map((p, i) => (
              <div
                key={p.title}
                className="bg-paper-warm p-10 md:p-14 reveal"
              >
                <div className="flex items-start justify-between mb-10">
                  <span className="font-mono-editorial text-[0.6rem] tracking-[0.3em] uppercase text-ink/50">
                    0{i + 1}
                  </span>
                  <svg width="32" height="32" viewBox="0 0 32 32" className="text-gold">
                    <path
                      d="M16 4 L19 13 L28 16 L19 19 L16 28 L13 19 L4 16 L13 13 Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-4xl leading-none tracking-tight mb-5">
                  {p.title}
                </h3>
                <p className="text-ink-muted leading-relaxed text-[0.95rem]">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CHAPTER IV · TESTIMONIAL ---------- */}
      <section className="bg-paper py-32 md:py-44 relative">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14 text-center">
          <div className="rule-label justify-center font-mono-editorial text-[0.6rem] tracking-[0.3em] uppercase text-ink/60 mb-12 inline-flex">
            <span>Chapter IV · Word From a Traveler</span>
          </div>
          <blockquote className="pullquote text-[clamp(2rem,5vw,5rem)] leading-[1.02] max-w-4xl mx-auto reveal">
            &ldquo;Everything was handled—
            <span className="not-italic font-display text-gold">every detail</span>
            —from the playing facilities to the hotel to the little dinner
            spots our boys still talk about. We have been on many trips.
            None like this.&rdquo;
          </blockquote>
          <div className="mt-14 flex flex-col items-center gap-2">
            <svg width="60" height="12" viewBox="0 0 60 12" className="text-gold">
              {[0, 12, 24, 36, 48].map((x) => (
                <path
                  key={x}
                  d={`M${x + 6} 1 L${x + 7.5} 4.5 L${x + 11} 5 L${x + 8.5} 7.5 L${x + 9} 11 L${x + 6} 9 L${x + 3} 11 L${x + 3.5} 7.5 L${x + 1} 5 L${x + 4.5} 4.5 Z`}
                  fill="currentColor"
                />
              ))}
            </svg>
            <p className="font-display text-2xl mt-4">Jon Taylor</p>
            <p className="font-mono-editorial text-[0.6rem] tracking-[0.3em] uppercase text-ink/60">
              Colne Academy · United Kingdom
            </p>
          </div>
        </div>
      </section>

      {/* ---------- CHAPTER V · CTA ---------- */}
      <section className="bg-ink text-paper py-40 relative overflow-hidden">
        <div className="absolute inset-0 stripes opacity-[0.04]" />
        <div className="max-w-[1680px] mx-auto px-6 md:px-10 lg:px-14 relative">
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.3em] uppercase text-paper/60 mb-14">
            <span>Chapter V · The Invitation</span>
          </div>
          <h2 className="font-display text-[clamp(3rem,11vw,12rem)] leading-[0.82] tracking-[-0.03em] max-w-[15ch]">
            Tell us who
            <br />
            you&apos;re bringing.
            <br />
            <span className="font-display-italic text-gold">We&apos;ll build the rest.</span>
          </h2>
          <div className="mt-16 flex flex-wrap gap-5">
            <Link href="/contact" className="btn-editorial on-dark">
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
