import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS } from "@/content/journal";

const SITE = "https://odisea-tours.com";

const CATEGORIES = {
  dispatches: {
    label: "Dispatches",
    title: "Dispatches: Stories from the Field",
    description:
      "Long reads on Spain's football grounds, food regions and walking routes. Written from the road by the Odisea Tours team.",
  },
  "field-notes": {
    label: "Field Notes",
    title: "Field Notes: Practical Guides for Group Travel",
    description:
      "Tour planning, costs, safeguarding and the unglamorous logistics behind every well-run group trip to Spain.",
  },
} as const;

type CategorySlug = keyof typeof CATEGORIES;

function categoryToSlug(label: string): CategorySlug | null {
  const slug = label.toLowerCase().replace(/\s+/g, "-");
  return slug in CATEGORIES ? (slug as CategorySlug) : null;
}

export function generateStaticParams() {
  return Object.keys(CATEGORIES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = CATEGORIES[slug as CategorySlug];
  if (!cat) return {};
  const url = `${SITE}/journal/category/${slug}`;
  return {
    title: cat.title,
    description: cat.description,
    alternates: { canonical: url },
    openGraph: {
      url,
      title: cat.title,
      description: cat.description,
      siteName: "Odisea Tours",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: cat.title,
      description: cat.description,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = CATEGORIES[slug as CategorySlug];
  if (!cat) notFound();

  const posts = POSTS.filter(
    (p) => categoryToSlug(p.category) === slug,
  ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "The Journal", item: `${SITE}/journal` },
      {
        "@type": "ListItem",
        position: 3,
        name: cat.label,
        item: `${SITE}/journal/category/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="pt-40 pb-12 px-6 md:px-10 lg:px-14 paper-texture">
        <div className="max-w-[1200px] mx-auto">
          <div className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/60 mb-6">
            <Link href="/journal" className="link-rule">
              ← The Journal
            </Link>
          </div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[-0.01em]">
            {cat.label}
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-ink/75 leading-snug">
            {cat.description}
          </p>
        </div>
      </section>

      <section className="pb-20 paper-texture">
        <div className="max-w-[1200px] mx-auto">
          {posts.map((post, i) => (
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
