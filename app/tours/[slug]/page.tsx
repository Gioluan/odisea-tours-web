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
      <section className="relative min-h-[92svh] flex flex-col pt-24">
        <div className="absolute inset-0 -z-10">
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

        <div className="flex-1 flex items-center px-6 md:px-10 lg:px-14 text-paper">
          <div className="max-w-[1680px] mx-auto w-full">
            <div className="flex items-center justify-between font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/70 mb-10">
              <Link href="/tours" className="link-rule">
                ← Back to Dispatches
              </Link>
              <span>Chapter {tour.chapter}</span>
              <span>{tour.coordinates}</span>
            </div>
            <h1 className="font-display text-[clamp(3.5rem,13vw,13rem)] leading-[0.82] tracking-[-0.01em] max-w-[14ch]">
              {tour.title}{" "}
              <span className="font-display-italic text-gold">
                {tour.italicTitle}
              </span>
            </h1>
            <p className="pullquote mt-8 text-3xl md:text-4xl max-w-2xl text-paper/90">
              {tour.tagline}
            </p>
            <div className="mt-16 flex flex-wrap gap-10 font-mono-editorial text-[0.62rem] tracking-[0.28em] uppercase">
              <div>
                <p className="text-paper/50 mb-1">Duration</p>
                <p className="text-paper text-sm">{tour.duration}</p>
              </div>
              <div>
                <p className="text-paper/50 mb-1">Group Size</p>
                <p className="text-paper text-sm">{tour.groupSize}</p>
              </div>
              <div>
                <p className="text-paper/50 mb-1">Season</p>
                <p className="text-paper text-sm">Year-round</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="paper-texture py-32 md:py-44">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14 grid md:grid-cols-12 gap-14">
          <div className="md:col-span-5">
            <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/60 mb-6">
              <span>The Story</span>
            </div>
            <p className="font-display text-[clamp(1.8rem,3vw,3rem)] leading-[1.05] tracking-[-0.02em]">
              {tour.description}
            </p>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/60 mb-8">
              <span>What&apos;s Included</span>
            </div>
            <ul className="space-y-5">
              {tour.includes.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-5 pb-5 border-b border-ink/15"
                >
                  <span className="font-mono-editorial text-[0.6rem] tracking-[0.3em] text-gold pt-1 shrink-0">
                    0{i + 1}
                  </span>
                  <span className="text-ink/85 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="bg-ink text-paper py-32 md:py-44">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="flex items-end justify-between mb-20">
            <div>
              <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.3em] uppercase text-paper/60 mb-8">
                <span>A Sample Itinerary</span>
              </div>
              <h2 className="font-display text-[clamp(3rem,7vw,7rem)] leading-[0.88] tracking-tight">
                Day by <span className="font-display-italic text-gold">day.</span>
              </h2>
            </div>
          </div>

          <div className="divide-y divide-paper/15 border-y border-paper/15">
            {tour.itinerary.map((d) => (
              <div
                key={d.day}
                className="grid md:grid-cols-12 gap-8 py-10 md:py-14 items-baseline reveal"
              >
                <div className="md:col-span-2 chapter-num text-6xl text-gold leading-none">
                  {d.day}
                </div>
                <h3 className="md:col-span-4 font-display text-3xl md:text-4xl tracking-tight">
                  {d.title}
                </h3>
                <p className="md:col-span-6 text-paper/70 leading-relaxed text-lg">
                  {d.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-wrap gap-5">
            <Link href="/contact" className="btn-editorial on-dark">
              Request This Dispatch
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
              className="btn-editorial on-dark"
            >
              bookings@odisea-tours.com
            </a>
          </div>
        </div>
      </section>

      {/* Other dispatches */}
      <section className="py-32 paper-texture">
        <div className="max-w-[1680px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.3em] uppercase text-ink/60 mb-14">
            <span>Keep Reading</span>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/tours/${o.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden corner-ticks text-ink/50">
                  <Image
                    src={o.image}
                    alt={o.title}
                    fill
                    className="object-cover transition-transform duration-[1.6s] group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="mt-5 font-display text-4xl tracking-tight">
                  {o.title}{" "}
                  <span className="font-display-italic text-gold">
                    {o.italicTitle}
                  </span>
                </h3>
                <p className="mt-2 font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/60">
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
