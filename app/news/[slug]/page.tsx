import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allNews, newsBySlug, relatedNews } from "@/lib/news";
import TourCTA from "@/components/news/TourCTA";

const SITE = "https://odisea-tours.com";

function renderParagraph(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (match) {
      const [, linkText, href] = match;
      const isExternal = href.startsWith("http");
      return (
        <a
          key={i}
          href={href}
          className="text-gold-deep hover:text-gold underline underline-offset-2 transition-colors"
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {linkText}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export function generateStaticParams() {
  return allNews().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = newsBySlug(slug);
  if (!post) return {};
  const url = `${SITE}/news/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url,
      siteName: "Odisea Tours",
      locale: "en_US",
      publishedTime: post.date,
      modifiedTime: post.dateModified ?? post.date,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function NewsArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = newsBySlug(slug);
  if (!post) notFound();

  const url = `${SITE}/news/${post.slug}`;
  const others = relatedNews(post.slug, post.category, 4);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.excerpt,
    image: [`${SITE}${post.cover}`],
    datePublished: post.date,
    dateModified: post.dateModified ?? post.date,
    inLanguage: "en",
    author: {
      "@type": "Organization",
      name: "Odisea Tours Newsroom",
      url: SITE,
    },
    publisher: {
      "@type": "Organization",
      name: "Odisea Tours",
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/brand/favicons/Browser.png`,
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    articleSection: post.category,
    keywords: post.tags.join(", "),
    // Attribution to the reporting we synthesized from, in our own words.
    citation: post.sources.map((s) => ({
      "@type": "CreativeWork",
      name: s.name,
      url: s.url,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "News", item: `${SITE}/news` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header */}
      <article className="pt-40 pb-24 px-6 md:px-10 lg:px-14">
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center justify-between font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/60 mb-10">
            <Link href="/news" className="link-rule">
              ← News
            </Link>
            <span>{post.category}</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.005em]">
            {post.title}
          </h1>
          <p className="mt-8 font-mono-editorial text-[0.65rem] tracking-[0.28em] uppercase text-ink/60">
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}{" "}
            · Odisea Tours Newsroom
          </p>
        </div>
      </article>

      {/* Cover */}
      <div className="relative h-[45vh] md:h-[60vh] mb-20">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* Body */}
      <div className="max-w-[720px] mx-auto px-6 pb-24">
        <div className="font-display-italic text-2xl md:text-3xl leading-[1.2] mb-12 text-ink/80">
          {post.excerpt}
        </div>
        <div className="space-y-7 text-lg leading-[1.75] text-ink/85">
          {(() => {
            let firstParagraphSeen = false;
            let ctaInserted = false;
            const out: React.ReactNode[] = [];
            post.body.forEach((p, i) => {
              if (p.startsWith("## ")) {
                // drop the tour CTA before the second section heading
                if (!ctaInserted && firstParagraphSeen) {
                  out.push(
                    <TourCTA
                      key="cta"
                      href={post.ctaTourHref}
                      label={post.ctaTourLabel}
                    />,
                  );
                  ctaInserted = true;
                }
                out.push(
                  <h2
                    key={i}
                    className="font-display text-3xl md:text-4xl tracking-tight text-ink !mt-14 !mb-2"
                  >
                    {p.slice(3)}
                  </h2>,
                );
                return;
              }
              const isFirst = !firstParagraphSeen;
              if (isFirst) firstParagraphSeen = true;
              out.push(
                <p
                  key={i}
                  className={
                    isFirst
                      ? "first-letter:font-display first-letter:text-7xl first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-[0.85] first-letter:text-gold"
                      : ""
                  }
                >
                  {renderParagraph(p)}
                </p>,
              );
            });
            if (!ctaInserted) {
              out.push(
                <TourCTA key="cta" href={post.ctaTourHref} label={post.ctaTourLabel} />,
              );
            }
            return out;
          })()}
        </div>

        {/* Sources — the legal receipts. Facts reported in our words, links out. */}
        {post.sources.length > 0 && (
          <section className="mt-14 pt-8 border-t border-ink/15">
            <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.3em] uppercase text-ink/60 mb-5">
              <span>Sources</span>
            </div>
            <p className="text-sm text-ink/60 leading-[1.6] mb-4">
              Odisea Tours reports these developments in our own words for a US
              coaching audience. Full original reporting:
            </p>
            <ul className="space-y-2">
              {post.sources.map((s, i) => (
                <li key={i}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="font-mono-editorial text-[0.7rem] tracking-[0.12em] text-gold-deep hover:text-gold underline underline-offset-2 transition-colors"
                  >
                    {s.name} →
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-14 pt-8 border-t border-ink/15 flex items-center justify-between font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/60">
          <Link href="/news" className="link-rule">
            ← All news
          </Link>
          <Link href="/plan-your-tour" className="link-rule">
            Plan a trip →
          </Link>
        </div>
      </div>

      {/* Related */}
      {others.length > 0 && (
        <section className="paper-texture py-28">
          <div className="max-w-[1680px] mx-auto px-6 md:px-10 lg:px-14">
            <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.3em] uppercase text-ink/60 mb-12">
              <span>More from the newsroom</span>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              {others.map((o) => (
                <Link key={o.slug} href={`/news/${o.slug}`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden corner-ticks text-ink/40">
                    <Image
                      src={o.cover}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-[1.6s] group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-2xl md:text-3xl tracking-tight">
                    {o.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
