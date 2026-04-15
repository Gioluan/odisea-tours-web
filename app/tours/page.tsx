import Image from "next/image";
import Link from "next/link";
import { TOURS } from "@/content/tours";

export const metadata = {
  title: "Tour Experiences",
  description:
    "Seven tour experiences across Spain: European soccer pilgrimages, cultural journeys, Sabores de España, Flamenco and Moorish Spain, the Camino de Santiago, corporate retreats, and sport and adventure.",
};

export default function ToursIndex() {
  return (
    <>
      {/* Hero with background photo */}
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 bg-ink isolate overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/photos/it-pamplona.jpg"
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
          <div className="flex items-center justify-between font-mono-editorial text-[0.58rem] tracking-[0.28em] uppercase text-paper/70 mb-4">
            <span>Chapter I · Index</span>
            <span>07 Tour Experiences</span>
          </div>
          <h1 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.98] tracking-[-0.015em] max-w-[16ch]">
            Tour <span className="font-display-italic text-gold">Experiences.</span>
          </h1>
          <p className="mt-4 max-w-xl text-base md:text-lg text-paper/80 leading-snug">
            Seven ways to travel through Spain with us. Each one built from the ground up for groups, from a handful of friends to a corporate team of a hundred.
          </p>
        </div>
      </section>

      {/* List */}
      <section className="pb-16 md:pb-20 paper-texture">
        <div className="max-w-[1200px] mx-auto">
          {TOURS.map((tour, i) => (
            <Link
              key={tour.slug}
              href={`/tours/${tour.slug}`}
              className="group block border-t border-ink/15 relative isolate overflow-hidden"
            >
              {/* Mobile: full-row background photo + gradient */}
              <div className="absolute inset-0 -z-0 md:hidden">
                <Image
                  src={tour.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              </div>

              <div className="relative z-10 grid md:grid-cols-12 gap-3 md:gap-6 items-center px-6 md:px-10 lg:px-14 py-8 md:py-6 text-paper md:text-ink min-h-[180px] md:min-h-0">
                {/* Desktop thumbnail (always visible) */}
                <div className="hidden md:block md:col-span-3">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                      sizes="(max-width: 1200px) 25vw, 300px"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-ink/10 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                    <span className="absolute top-2 left-2 font-mono-editorial text-[0.52rem] tracking-[0.28em] uppercase bg-ink/70 backdrop-blur-sm text-paper px-1.5 py-0.5 rounded-sm">
                      Ch. {tour.chapter}
                    </span>
                  </div>
                </div>

                {/* Chapter label (mobile only, desktop uses badge above) */}
                <div className="md:hidden font-mono-editorial text-[0.55rem] tracking-[0.28em] uppercase opacity-70">
                  Ch. {tour.chapter}
                </div>

                <div className="md:col-span-4">
                  <h2 className="font-display text-2xl md:text-[1.75rem] leading-[1.1] tracking-tight group-hover:text-gold transition-colors duration-300">
                    {tour.title}{" "}
                    <span className="font-display-italic text-gold">
                      {tour.italicTitle}
                    </span>
                  </h2>
                </div>
                <p className="md:col-span-3 text-[0.95rem] leading-snug opacity-90 md:opacity-80 max-w-sm">
                  {tour.tagline}
                </p>
                <div className="md:col-span-2 font-mono-editorial text-[0.55rem] tracking-[0.28em] uppercase opacity-80 md:opacity-70 md:text-right">
                  <div>{tour.duration}</div>
                  <div className="mt-0.5">{tour.groupSize}</div>
                  <div className="mt-2 inline-flex items-center gap-2 group-hover:text-gold transition-colors duration-300">
                    Read
                    <svg width="18" height="8" viewBox="0 0 24 10" fill="none">
                      <path
                        d="M1 5 H23 M18 1 L23 5 L18 9"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {i === TOURS.length - 1 && (
                <div className="border-b border-ink/15" />
              )}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
