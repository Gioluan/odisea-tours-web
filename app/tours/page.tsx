import Image from "next/image";
import Link from "next/link";
import { TOURS } from "@/content/tours";

export const metadata = {
  title: "Tours",
  description:
    "Four chapters of group travel across Spain: European soccer, cultural, corporate, and sport & adventure.",
};

export default function ToursIndex() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-24 px-6 md:px-10 lg:px-14">
        <div className="max-w-[1680px] mx-auto">
          <div className="flex items-end justify-between font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/60 mb-10">
            <span>Index · All Chapters</span>
            <span>04 Dispatches</span>
          </div>
          <h1 className="font-display text-[clamp(4rem,14vw,14rem)] leading-[0.82] tracking-[-0.04em]">
            The
            <br />
            <span className="font-display-italic text-gold">Dispatches.</span>
          </h1>
          <p className="mt-10 max-w-xl text-lg text-ink/75 leading-relaxed">
            Four ways to travel through Spain with us. Each one built from the
            ground up for groups—from a handful of friends to a corporate team
            of a hundred. Pick a chapter; we&apos;ll write the rest together.
          </p>
        </div>
      </section>

      {/* List */}
      <section className="pb-40">
        <div className="max-w-[1680px] mx-auto">
          {TOURS.map((tour, i) => (
            <Link
              key={tour.slug}
              href={`/tours/${tour.slug}`}
              className="group block border-t border-ink/15 relative"
            >
              <div className="grid md:grid-cols-12 gap-8 items-center px-6 md:px-10 lg:px-14 py-12 md:py-16 transition-colors duration-700 hover:bg-ink hover:text-paper">
                <div className="md:col-span-1 font-mono-editorial text-[0.6rem] tracking-[0.3em] uppercase opacity-60">
                  Ch. {tour.chapter}
                </div>
                <div className="md:col-span-5">
                  <h2 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.88] tracking-tight">
                    {tour.title}
                    <br />
                    <span className="font-display-italic text-gold">
                      {tour.italicTitle}
                    </span>
                  </h2>
                </div>
                <p className="md:col-span-4 pullquote text-xl md:text-2xl opacity-90 max-w-sm">
                  {tour.tagline}
                </p>
                <div className="md:col-span-2 font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase opacity-70 md:text-right">
                  <div>{tour.duration}</div>
                  <div className="mt-1">{tour.groupSize}</div>
                  <div className="mt-4 inline-flex items-center gap-2">
                    Read
                    <svg width="24" height="10" viewBox="0 0 24 10" fill="none">
                      <path
                        d="M1 5 H23 M18 1 L23 5 L18 9"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Image preview slides in on hover — desktop */}
              <div className="hidden md:block absolute top-0 right-0 bottom-0 w-[40%] overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <Image
                  src={tour.image}
                  alt=""
                  fill
                  className="object-cover scale-110"
                  sizes="40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-ink/70" />
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
