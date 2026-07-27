import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { postsByLang } from "@/content/journal";

export const metadata: Metadata = {
  title: "Spain Football Tour Blog: Guides, Tips & Field Notes",
  description:
    "Insider tips, destination guides, and planning advice for organizing football tours to Spain. Written by the Odisea Tours team from 20+ years on the ground.",
  alternates: { canonical: "/journal" },
  openGraph: {
    images: [
      {
        url: "/photos/og-journal.jpg",
        width: 1200,
        height: 630,
        alt: "Travelers exploring Barcelona Cathedral on an Odisea Tours trip to Spain",
      },
    ],
    url: "https://odisea-tours.com/journal",
    title: "Spain Football Tour Blog: Guides, Tips & Field Notes",
    description:
      "Insider tips, destination guides, and planning advice for organizing football tours to Spain. Written by the Odisea Tours team from 20+ years on the ground.",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/photos/og-journal.jpg"],
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
          <div className="mt-6 flex flex-wrap gap-3 font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase">
            <Link
              href="/journal/category/dispatches"
              className="text-paper/80 hover:text-gold transition-colors link-rule"
            >
              Dispatches
            </Link>
            <span className="text-paper/30">·</span>
            <Link
              href="/journal/category/field-notes"
              className="text-paper/80 hover:text-gold transition-colors link-rule"
            >
              Field Notes
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20 paper-texture">
        <div className="max-w-[1200px] mx-auto">
          {postsByLang().map((group) => (
            <div key={group.lang}>
              <div
                className="flex items-center gap-3 px-6 md:px-10 lg:px-14 pt-10 pb-3 border-t border-ink/15"
                lang={group.lang}
              >
                <span className="font-display text-lg md:text-xl tracking-tight text-ink">
                  {group.label}
                </span>
                <span className="font-mono-editorial text-[0.55rem] tracking-[0.28em] uppercase text-ink/45">
                  {group.lang === "es" ? "Artículos en español" : "Articles in English"}
                </span>
              </div>
              {group.posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/journal/${post.slug}`}
                  className="group block border-t border-ink/15"
                  lang={group.lang}
                >
                  <div className="grid md:grid-cols-12 gap-5 items-center px-6 md:px-10 lg:px-14 py-6 md:py-7 transition-colors duration-500 hover:bg-ink hover:text-paper">
                    <div className="md:col-span-2 font-mono-editorial text-[0.55rem] tracking-[0.28em] uppercase opacity-60">
                      <span className="inline-block mb-1 px-1.5 py-0.5 border border-ink/25 rounded-sm not-italic tracking-[0.18em] text-ink/70 group-hover:border-paper/40 group-hover:text-paper/80">
                        {group.lang.toUpperCase()}
                      </span>
                      <br />
                      {post.category}
                      <br />
                      <span className="opacity-60">
                        {new Date(post.date).toLocaleDateString(
                          group.lang === "es" ? "es-ES" : "en-GB",
                          { day: "2-digit", month: "short", year: "numeric" }
                        )}
                      </span>
                    </div>
                    <h2 className="md:col-span-7 font-display text-xl md:text-2xl leading-tight tracking-tight">
                      {post.title}{" "}
                      <span className="font-display-italic text-gold">
                        {post.italicTitle}
                      </span>
                    </h2>
                    <div className="md:col-span-3 font-mono-editorial text-[0.55rem] tracking-[0.28em] uppercase opacity-70">
                      <div>{post.readTime} {group.lang === "es" ? "de lectura" : "read"}</div>
                      <div className="mt-2 inline-flex items-center gap-2">
                        {group.lang === "es" ? "Leer" : "Read"}
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
                </Link>
              ))}
            </div>
          ))}
          <div className="border-b border-ink/15" />
        </div>
      </section>
    </>
  );
}
