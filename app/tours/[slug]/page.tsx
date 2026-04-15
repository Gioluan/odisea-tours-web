import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TOURS, tourBySlug } from "@/content/tours";

export function generateStaticParams() {
  return TOURS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = tourBySlug(slug);
  if (!tour) return {};
  return {
    title: `${tour.title} ${tour.italicTitle ?? ""}`,
    description: tour.tagline,
  };
}

export default async function TourDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = tourBySlug(slug);
  if (!tour) notFound();

  const others = TOURS.filter((t) => t.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[66svh] flex flex-col pt-24 pb-14 bg-ink isolate overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            priority
            className="object-cover kenburns"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ink/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink" />
        </div>

        <div className="relative z-10 flex-1 flex items-end px-6 md:px-10 lg:px-14 text-paper">
          <div className="max-w-[1400px] mx-auto w-full">
            <div className="flex items-center justify-between font-mono-editorial text-[0.58rem] tracking-[0.28em] uppercase text-paper/70 mb-6">
              <Link href="/tours" className="link-rule">
                ← Back to Tour Experiences
              </Link>
              <span>Chapter {tour.chapter}</span>
              <span className="hidden sm:inline">{tour.coordinates}</span>
            </div>
            <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.92] tracking-[-0.01em] max-w-[18ch]">
              {tour.title}{" "}
              <span className="font-display-italic text-gold">
                {tour.italicTitle}
              </span>
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl text-paper/85 leading-snug">
              {tour.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-3 font-mono-editorial text-[0.58rem] tracking-[0.28em] uppercase">
              <div>
                <span className="text-paper/50">Duration: </span>
                <span className="text-paper">{tour.duration}</span>
              </div>
              <div>
                <span className="text-paper/50">Group size: </span>
                <span className="text-paper">{tour.groupSize}</span>
              </div>
              <div>
                <span className="text-paper/50">Season: </span>
                <span className="text-paper">Year-round</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="paper-texture py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="rule-label font-mono-editorial text-[0.58rem] tracking-[0.28em] uppercase text-ink/60 mb-4">
              <span>The Story</span>
            </div>
            <p className="font-display text-[clamp(1.2rem,1.8vw,1.55rem)] leading-[1.35] tracking-[-0.01em]">
              {tour.description}
            </p>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <div className="rule-label font-mono-editorial text-[0.58rem] tracking-[0.28em] uppercase text-ink/60 mb-5">
              <span>What&apos;s Included</span>
            </div>
            <ul className="space-y-2.5">
              {tour.includes.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-4 pb-2.5 border-b border-ink/10"
                >
                  <span className="font-mono-editorial text-[0.55rem] tracking-[0.3em] text-gold pt-1 shrink-0">
                    0{i + 1}
                  </span>
                  <span className="text-ink/85 text-[0.95rem] leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="bg-[#faf6ee] border-t border-ink/10 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="mb-10 flex items-end justify-between gap-6 flex-wrap">
            <div className="max-w-xl">
              <div className="rule-label font-mono-editorial text-[0.58rem] tracking-[0.3em] uppercase text-ink/55 mb-3">
                <span>Sample Itinerary</span>
              </div>
              <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.6rem)] leading-[1] tracking-[-0.015em]">
                Day by <span className="font-display-italic text-gold">day.</span>
              </h2>
            </div>
            <p className="text-sm text-ink/65 leading-snug max-w-sm">
              A sample shape of the trip. We adjust every itinerary to the group, the season and the dates.
            </p>
          </div>

          <ol className="space-y-7 md:space-y-9">
            {tour.itinerary.map((d, i) => {
              const reverse = i % 2 === 1;
              return (
                <li
                  key={d.day}
                  className="grid md:grid-cols-12 gap-5 md:gap-8 items-center reveal"
                >
                  {d.image ? (
                    <div
                      className={`md:col-span-5 ${
                        reverse ? "md:order-2" : ""
                      }`}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                        <Image
                          src={d.image}
                          alt={d.title}
                          fill
                          className="object-cover transition-transform duration-[1.5s] ease-out hover:scale-[1.04]"
                          sizes="(max-width: 768px) 100vw, 42vw"
                        />
                        <span className="absolute top-3 left-3 font-mono-editorial text-[0.52rem] tracking-[0.28em] uppercase bg-ink/70 backdrop-blur-sm text-paper px-2 py-0.5 rounded-sm">
                          Day {d.day}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`md:col-span-5 ${
                        reverse ? "md:order-2" : ""
                      }`}
                    >
                      <div
                        className="aspect-[4/3] rounded-sm border border-ink/12 flex items-center justify-center relative overflow-hidden"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(255,180,0,0.1), rgba(201,138,0,0.04))",
                        }}
                      >
                        <span className="font-display-italic text-gold/35 text-[clamp(4rem,9vw,8rem)] leading-none tracking-tighter">
                          {d.day}
                        </span>
                        <span className="absolute top-3 left-3 font-mono-editorial text-[0.52rem] tracking-[0.28em] uppercase text-ink/50">
                          Day {d.day}
                        </span>
                      </div>
                    </div>
                  )}

                  <div
                    className={`md:col-span-7 ${
                      reverse ? "md:order-1 md:pr-4" : "md:pl-4"
                    }`}
                  >
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="font-display-italic text-gold text-xl leading-none">
                        {d.day}
                      </span>
                      <span className="font-mono-editorial text-[0.55rem] tracking-[0.28em] uppercase text-ink/45">
                        Day {i + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl leading-[1.15] tracking-[-0.005em] mb-2 text-ink">
                      {d.title}
                    </h3>
                    <p className="text-ink/70 leading-[1.55] text-[0.95rem]">
                      {d.detail}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="mt-14 pt-8 border-t border-ink/12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <p className="font-display text-lg md:text-xl leading-snug max-w-md text-ink">
              Ready to turn this into <span className="font-display-italic text-gold">your trip?</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-editorial">
                Request This Experience
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path
                    d="M1 5 H13 M9 1 L13 5 L9 9"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                </svg>
              </Link>
              <a
                href="mailto:bookings@odisea-tours.com"
                className="btn-editorial"
              >
                bookings@odisea-tours.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other tour experiences */}
      <section className="py-16 md:py-20 paper-texture border-t border-ink/10">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="rule-label font-mono-editorial text-[0.58rem] tracking-[0.3em] uppercase text-ink/60 mb-8">
            <span>Keep Reading</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/tours/${o.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <Image
                    src={o.image}
                    alt={o.title}
                    fill
                    className="object-cover transition-transform duration-[1.2s] group-hover:scale-[1.06]"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
                <h3 className="mt-3 font-display text-xl md:text-2xl leading-tight tracking-tight">
                  {o.title}{" "}
                  <span className="font-display-italic text-gold">
                    {o.italicTitle}
                  </span>
                </h3>
                <p className="mt-1 font-mono-editorial text-[0.55rem] tracking-[0.28em] uppercase text-ink/55">
                  Chapter {o.chapter}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
