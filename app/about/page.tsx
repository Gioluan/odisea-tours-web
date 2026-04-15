import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Origin",
  description:
    "A small team in Spain has quietly crafted group travel since 2005. This is who we are and why we do it.",
};

const TIMELINE = [
  {
    year: "2005",
    title: "A garage in Castellón",
    detail:
      "Juan starts Odisea Tours with a landline, a second-hand coach, and one French school group who had been let down by another agency. Three months later, they returned with a second booking.",
  },
  {
    year: "2009",
    title: "The first stadium pass",
    detail:
      "A youth coach from England asks us to arrange a training visit to La Masia. A ten-year relationship with FC Barcelona's academy staff begins.",
  },
  {
    year: "2014",
    title: "Ground Agents Solutions S.L.",
    detail:
      "We incorporate as a full Spanish tour operator—licensed, insured, bonded. The team grows to six. We open the Madrid office.",
  },
  {
    year: "2019",
    title: "A thousand groups",
    detail:
      "We pass the one-thousandth group mark. We celebrate quietly, with a paella for the team, on a beach outside Valencia.",
  },
  {
    year: "2022",
    title: "The pandemic year",
    detail:
      "Every group cancels. We refund every euro without hesitation. Twelve months later, eighty-percent of those clients come back. It is the proudest moment in the company's history.",
  },
  {
    year: "2026",
    title: "Twenty years in.",
    detail:
      "Still small. Still independent. Still answering the phone ourselves at 2am when a flight gets delayed in Dublin.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero with background photo */}
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 bg-ink isolate overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/photos/it-sarria.jpg"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ink/65" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14 text-paper">
          <div className="flex items-baseline gap-4 mb-3">
            <span className="chapter-num text-4xl leading-none text-gold">II</span>
            <div className="rule-label font-mono-editorial text-[0.58rem] tracking-[0.28em] uppercase text-paper/70">
              <span>Origin</span>
            </div>
          </div>
          <h1 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.98] tracking-[-0.015em] max-w-[20ch]">
            A small team. <span className="font-display-italic text-gold">A long time.</span>
          </h1>
          <p className="mt-4 max-w-xl text-base md:text-lg text-paper/80 leading-snug">
            Odisea Tours has quietly crafted group travel in Spain since 2005. This is who we are and why we do it.
          </p>
        </div>
      </section>

      {/* Founder block */}
      <section className="paper-texture py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14 md:grid md:grid-cols-12 md:gap-10 md:items-start">
          {/* Desktop portrait (full column) */}
          <div className="hidden md:block md:col-span-5">
            <div className="aspect-[3/4] relative overflow-hidden rounded-sm">
              <Image
                src="/photos/juan-sanchez-odisea-tours-director.jpg"
                alt="Juan Sánchez, Founder of Odisea Tours"
                fill
                className="object-cover"
                sizes="40vw"
              />
            </div>
            <p className="font-mono-editorial text-[0.55rem] tracking-[0.28em] uppercase text-ink/60 mt-3">
              Juan Sánchez · Founder · Benicassim
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="rule-label font-mono-editorial text-[0.58rem] tracking-[0.28em] uppercase text-ink/60 mb-4">
              <span>Why we started</span>
            </div>

            {/* Mobile byline row: small thumbnail + name */}
            <div className="flex items-center gap-3 mb-5 md:hidden">
              <div className="relative w-14 h-14 shrink-0 overflow-hidden rounded-full ring-1 ring-ink/15">
                <Image
                  src="/photos/juan-sanchez-odisea-tours-director.jpg"
                  alt="Juan Sánchez, Founder of Odisea Tours"
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <p className="font-display text-base leading-none text-ink">Juan Sánchez</p>
                <p className="font-mono-editorial text-[0.52rem] tracking-[0.28em] uppercase text-ink/55 mt-1">
                  Founder · Benicassim
                </p>
              </div>
            </div>

            <p className="font-display text-[clamp(1.2rem,2vw,1.7rem)] leading-[1.3] tracking-[-0.01em] mb-6">
              I grew up on the Mediterranean coast, in a town most people couldn&apos;t find on a map. I always thought the way Spain was sold to the world was a little <span className="font-display-italic">too loud</span>.
            </p>
            <div className="space-y-4 text-[0.95rem] text-ink/80 leading-snug max-w-xl">
              <p>
                Odisea Tours began in 2005 with a simple idea: host foreign groups the way we would want to be hosted. Quietly, thoroughly, with a real person on the other end of every question.
              </p>
              <p>
                We have never been the biggest agency in Spain. We have never wanted to be. We have been, for twenty years, the one you call when a trip matters. When it&apos;s a school team travelling abroad for the first time. When it&apos;s a company that can&apos;t afford a bad day. When a family is finally taking the trip they have talked about for a decade.
              </p>
              <p>
                The company is now six people, two offices, and several dozen freelance guides we have known for most of their careers. We still answer the phone ourselves.
              </p>
              <p className="font-display italic text-base text-ink pt-2">
                Juan, Founder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-ink text-paper py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="mb-8 flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className="rule-label font-mono-editorial text-[0.58rem] tracking-[0.28em] uppercase text-paper/60 mb-3">
                <span>Twenty Chapters</span>
              </div>
              <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.6rem)] leading-[1] tracking-[-0.015em]">
                A timeline, <span className="font-display-italic text-gold">mostly quiet.</span>
              </h2>
            </div>
          </div>

          <div className="divide-y divide-paper/15 border-y border-paper/15">
            {TIMELINE.map((t) => (
              <div
                key={t.year}
                className="grid md:grid-cols-12 gap-5 py-5 md:py-6 reveal items-baseline"
              >
                <div className="md:col-span-2 font-display-italic text-2xl md:text-3xl text-gold">
                  {t.year}
                </div>
                <h3 className="md:col-span-4 font-display text-lg md:text-xl tracking-tight leading-tight">
                  {t.title}
                </h3>
                <p className="md:col-span-6 text-paper/75 leading-snug text-[0.95rem]">
                  {t.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="paper-texture py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14 text-center">
          <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] leading-[1] tracking-tight max-w-[22ch] mx-auto">
            Twenty more years <span className="font-display-italic text-gold">begin with you.</span>
          </h2>
          <div className="mt-6">
            <Link href="/contact" className="btn-editorial">
              Bring Us Your Group
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path
                  d="M1 5 H13 M9 1 L13 5 L9 9"
                  stroke="currentColor"
                  strokeWidth="1.3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
