import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS, postBySlug } from "@/content/journal";

const SITE = "https://odisea-tours.com";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return {};
  const fullTitle = `${post.title}${post.italicTitle ? " " + post.italicTitle : ""}`.trim();
  const url = `${SITE}/journal/${post.slug}`;
  return {
    title: fullTitle,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: fullTitle,
      description: post.excerpt,
      url,
      siteName: "Odisea Tours",
      locale: "en_US",
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: ["Odisea Tours"],
      tags: [post.category, "youth soccer tours", "Spain", "football"],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: post.excerpt,
    },
  };
}

export default async function JournalPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();

  const others = POSTS.filter((p) => p.slug !== slug);
  const fullTitle = `${post.title}${post.italicTitle ? " " + post.italicTitle : ""}`.trim();
  const url = `${SITE}/journal/${post.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: fullTitle,
    description: post.excerpt,
    image: `${SITE}${post.cover}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Odisea Tours",
      url: SITE,
    },
    publisher: {
      "@type": "Organization",
      name: "Odisea Tours",
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/img/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    articleSection: post.category,
    keywords: [post.category, "youth soccer tours Spain", "football academy", "Spain sport tours"].join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "The Journal",
        item: `${SITE}/journal`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: fullTitle,
        item: url,
      },
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
            <Link href="/journal" className="link-rule">
              ← The Journal
            </Link>
            <span>{post.category}</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-[-0.005em]">
            {post.title}{" "}
            <span className="font-display-italic text-gold">
              {post.italicTitle}
            </span>
          </h1>
          <p className="mt-8 font-mono-editorial text-[0.65rem] tracking-[0.28em] uppercase text-ink/60">
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}{" "}
            · Odisea Tours
          </p>
        </div>
      </article>

      {/* Cover */}
      <div className="relative h-[55vh] md:h-[75vh] mb-24">
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
      <div className="max-w-[720px] mx-auto px-6 pb-32">
        <div className="font-display-italic text-3xl md:text-4xl leading-[1.15] mb-14 text-ink/80">
          {post.excerpt}
        </div>
        <div className="space-y-8 text-lg leading-[1.75] text-ink/85">
          {post.body.map((p, i) => (
            <p key={i} className={i === 0 ? "first-letter:font-display first-letter:text-7xl first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-[0.85] first-letter:text-gold" : ""}>
              {p}
            </p>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-ink/15 flex items-center justify-between font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/60">
          <Link href="/journal" className="link-rule">← All field notes</Link>
          <Link href="/contact" className="link-rule">Plan a trip →</Link>
        </div>
      </div>

      {/* Related */}
      {others.length > 0 && (
        <section className="paper-texture py-32">
          <div className="max-w-[1680px] mx-auto px-6 md:px-10 lg:px-14">
            <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.3em] uppercase text-ink/60 mb-14">
              <span>Keep Reading</span>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              {others.map((o) => (
                <Link key={o.slug} href={`/journal/${o.slug}`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden corner-ticks text-ink/40">
                    <Image
                      src={o.cover}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-[1.6s] group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-3xl tracking-tight">
                    {o.title}{" "}
                    <span className="font-display-italic text-gold">
                      {o.italicTitle}
                    </span>
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
