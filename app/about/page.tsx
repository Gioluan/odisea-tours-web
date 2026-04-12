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
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 md:px-10 lg:px-14">
        <div className="max-w-[1680px] mx-auto">
          <div className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/60 mb-10">
            Chapter II · Origin
          </div>
          <h1 className="font-display text-[clamp(4rem,14vw,14rem)] leading-[0.82] tracking-[-0.04em]">
            A small team.
            <br />
            <span className="font-display-italic text-gold">
              A long time.
            </span>
          </h1>
        </div>
      </section>

      {/* Founder block */}
      <section className="paper-texture py-32 md:py-44">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14 grid md:grid-cols-12 gap-14">
          <div className="md:col-span-5">
            <div className="aspect-[3/4] relative overflow-hidden corner-ticks text-ink/30">
              <Image
                src="/photos/juan-sanchez-odisea-tours-director.jpg"
                alt="Juan Sánchez, Founder of Odisea Tours"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            <p className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/60 mt-4">
              Juan Sánchez · Founder · Benicassim
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/60 mb-8">
              <span>Why we started</span>
            </div>
            <p className="font-display text-[clamp(2rem,3.5vw,3.5rem)] leading-[1.02] tracking-[-0.02em] mb-10">
              I grew up on the Mediterranean coast, in a town most people
              couldn&apos;t find on a map. I always thought the way Spain was
              sold to the world was a little <span className="font-display-italic">too loud</span>.
            </p>
            <div className="space-y-6 text-lg text-ink/80 leading-relaxed max-w-xl">
              <p>
                Odisea Tours began in 2005 with a simple idea: host foreign
                groups the way we would want to be hosted. Quietly, thoroughly,
                with a real person on the other end of every question.
              </p>
              <p>
                We have never been the biggest agency in Spain. We have never
                wanted to be. We have been, for twenty years, the one you call
                when a trip matters. When it&apos;s a school team travelling
                abroad for the first time. When it&apos;s a company that
                can&apos;t afford a bad day. When a family is finally taking
                the trip they have talked about for a decade.
              </p>
              <p>
                The company is now six people, two offices, and several
                dozen freelance guides we have known for most of their
                careers. We still answer the phone ourselves.
              </p>
              <p className="pullquote text-2xl text-ink pt-4">
                — Juan, Founder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-ink text-paper py-32 md:py-44">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="flex items-end justify-between mb-20">
            <div>
              <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.3em] uppercase text-paper/60 mb-8">
                <span>Twenty Chapters</span>
              </div>
              <h2 className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.88] tracking-tight">
                A timeline,
                <br />
                <span className="font-display-italic text-gold">mostly quiet.</span>
              </h2>
            </div>
          </div>

          <div className="divide-y divide-paper/15 border-y border-paper/15">
            {TIMELINE.map((t) => (
              <div
                key={t.year}
                className="grid md:grid-cols-12 gap-8 py-10 md:py-14 reveal"
              >
                <div className="md:col-span-2 font-display-italic text-5xl md:text-6xl text-gold">
                  {t.year}
                </div>
                <h3 className="md:col-span-4 font-display text-3xl md:text-4xl tracking-tight">
                  {t.title}
                </h3>
                <p className="md:col-span-6 text-paper/75 leading-relaxed text-lg">
                  {t.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="paper-texture py-40">
        <div className="max-w-[1680px] mx-auto px-6 md:px-10 lg:px-14 text-center">
          <h2 className="font-display text-[clamp(3rem,9vw,9rem)] leading-[0.88] tracking-tight max-w-[14ch] mx-auto">
            Twenty more years
            <br />
            <span className="font-display-italic text-gold">begin with you.</span>
          </h2>
          <div className="mt-14">
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
