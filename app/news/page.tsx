import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { allNews } from "@/lib/news";

const SITE = "https://odisea-tours.com";

export const metadata: Metadata = {
  title: "Spanish Football News in English — for US Coaches | Odisea Tours",
  description:
    "Daily Spanish football news, transfers and academy notes, written in English for US coaches and clubs. La Liga, the youth game, and what it means for teams touring Spain.",
  alternates: { canonical: "/news" },
  openGraph: {
    url: `${SITE}/news`,
    siteName: "Odisea Tours",
    locale: "en_US",
    title: "Spanish Football News in English — for US Coaches",
    description:
      "Daily Spanish football news, transfers and academy notes, written in English for US coaches and clubs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spanish Football News in English — for US Coaches",
    description:
      "Daily Spanish football news, transfers and academy notes, written in English for US coaches and clubs.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
    { "@type": "ListItem", position: 2, name: "News", item: `${SITE}/news` },
  ],
};

export default function NewsIndex() {
  const posts = allNews();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero */}
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 bg-ink isolate overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/photos/odisea-tours-match-action-01.jpg"
            alt="Spanish football news in English for US coaches"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ink/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14 text-paper">
          <div className="flex items-baseline gap-4 mb-3">
            <span className="chapter-num text-4xl leading-none text-gold">IV</span>
            <div className="rule-label font-mono-editorial text-[0.58rem] tracking-[0.28em] uppercase text-paper/70">
              <span>The Newsroom</span>
            </div>
          </div>
          <h1 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.98] tracking-[-0.015em] max-w-[18ch]">
            Spanish Football, in{" "}
            <span className="font-display-italic text-gold">English.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-paper/80 leading-snug">
            La Liga, the transfer market, and the youth game that produces it —
            reported in English for US coaches and clubs. Updated daily. Every
            story links back to the Spanish reporting it draws on.
          </p>
        </div>
      </section>

      {/* List */}
      <section className="pb-16 md:pb-20 paper-texture">
        <div className="max-w-[1200px] mx-auto">
          {posts.length === 0 && (
            <p className="px-6 md:px-14 py-16 font-mono-editorial text-[0.7rem] tracking-[0.2em] uppercase text-ink/50">
              First dispatches publishing shortly.
            </p>
          )}
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/news/${post.slug}`}
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
                  {post.title}
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
              {i === posts.length - 1 && <div className="border-b border-ink/15" />}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
