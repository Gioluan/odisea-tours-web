import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { POSTS } from "@/content/journal";

export const metadata: Metadata = {
  title: "Spain Football Tour Blog: Guides, Tips & Field Notes",
  description:
    "Insider tips, destination guides, and planning advice for organizing football tours to Spain. Written by the Odisea Tours team from 20+ years on the ground.",
  alternates: { canonical: "/journal" },
  openGraph: {
    url: "https://odisea-tours.com/journal",
    title: "Spain Football Tour Blog: Guides, Tips & Field Notes",
    description:
      "Insider tips, destination guides, and planning advice for organizing football tours to Spain. Written by the Odisea Tours team from 20+ years on the ground.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://odisea-tours.com" },
    { "@type": "ListItem", position: 2, name: "The Journal", item: "https://odisea-tours.com/journal" },
  ],
};

export default function JournalIndex() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Hero with background photo */}
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 bg-ink isolate overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/photos/it-sevilla-alcazar.jpg"
            alt="Spain football tour field notes and travel guides"
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
            <span className="chapter-num text-4xl leading-none text-gold">III</span>
            <div className="rule-label font-mono-editorial text-[0.58rem] tracking-[0.28em] uppercase text-paper/70">
              <span>The Journal</span>
            </div>
          </div>
          <h1 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.98] tracking-[-0.015em] max-w-[16ch]">
            <span className="sr-only">Spain football tour blog: </span>Field <span className="font-display-italic text-gold">Notes.</span>
          </h1>
          <p className="mt-4 max-w-xl text-base md:text-lg text-paper/80 leading-snug">
            Slow notes on Spain, group travel, and the small things we have learned from two decades in the field. Written by the people who run the trips.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-20 paper-texture">
        <div className="max-w-[1200px] mx-auto">
          {POSTS.map((post, i) => (
            <Link
              key={post.slug}
              href={`/journal/${post.slug}`}
              className="group block border-t border-ink/15"
            >
              <div className="grid md:grid-cols-12 gap-5 items-center px-6 md:px-10 lg:px-14 py-6 md:py-7 transition-colors duration-500 hover:bg-ink hover:text-paper">
                <div className="md:col-span-2 font-mono-editorial text-[0.55rem] tracking-[0.28em] uppercase opacity-60">
                  {post.category}
                  <br />
                  <span className="opacity-60">
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h2 className="md:col-span-7 font-display text-xl md:text-2xl leading-tight tracking-tight">
                  {post.title}{" "}
                  <span className="font-display-italic text-gold">
                    {post.italicTitle}
                  </span>
                </h2>
                <div className="md:col-span-3 font-mono-editorial text-[0.55rem] tracking-[0.28em] uppercase opacity-70">
                  <div>{post.readTime} read</div>
                  <div className="mt-2 inline-flex items-center gap-2">
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
              {i === POSTS.length - 1 && <div className="border-b border-ink/15" />}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
