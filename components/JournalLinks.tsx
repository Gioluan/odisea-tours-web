import Link from "next/link";
import { POSTS } from "@/content/journal";

type Props = {
  /** Editorial section label (e.g., "From the Journal") */
  label?: string;
  /** Big headline above the cards */
  title: string;
  /** Italicized accent that closes the headline */
  italicTail?: string;
  /** Optional one-line intro under the headline */
  intro?: string;
  /** Slugs of posts to surface, in order */
  slugs: string[];
  /** Light or dark background */
  variant?: "paper" | "ink";
};

export default function JournalLinks({
  label = "From the Journal",
  title,
  italicTail,
  intro,
  slugs,
  variant = "paper",
}: Props) {
  const posts = slugs
    .map((s) => POSTS.find((p) => p.slug === s))
    .filter((p): p is (typeof POSTS)[number] => Boolean(p));

  if (posts.length === 0) return null;

  const isDark = variant === "ink";

  return (
    <section
      className={`${
        isDark ? "bg-ink text-paper" : "paper-texture text-ink"
      } py-16 md:py-20 px-6 md:px-10`}
    >
      <div className="max-w-[1200px] mx-auto">
        <div
          className={`rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase mb-6 ${
            isDark ? "text-paper/60" : "text-ink/55"
          }`}
        >
          <span>{label}</span>
        </div>
        <h2
          className={`font-display text-[clamp(1.75rem,3.5vw,2.6rem)] uppercase leading-[1.05] max-w-[24ch] ${
            isDark ? "text-paper" : "text-ink"
          }`}
        >
          {title}
          {italicTail ? (
            <>
              {" "}
              <span className="font-display-italic text-gold">
                {italicTail}
              </span>
            </>
          ) : null}
        </h2>
        {intro ? (
          <p
            className={`mt-4 max-w-[60ch] leading-relaxed ${
              isDark ? "text-paper/75" : "text-ink-soft"
            }`}
          >
            {intro}
          </p>
        ) : null}

        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/journal/${p.slug}`}
                className={`group block border p-6 transition-colors ${
                  isDark
                    ? "border-paper/15 hover:bg-paper hover:text-ink"
                    : "border-ink/15 hover:bg-ink hover:text-paper"
                }`}
              >
                <div
                  className={`font-mono-editorial text-[0.58rem] tracking-[0.26em] uppercase mb-3 ${
                    isDark
                      ? "text-paper/55 group-hover:text-ink/55"
                      : "text-ink/55 group-hover:text-paper/65"
                  }`}
                >
                  {p.category} · {p.readTime}
                </div>
                <h3 className="font-display text-xl md:text-2xl uppercase leading-[1.15]">
                  {p.title}
                  {p.italicTitle ? (
                    <>
                      {" "}
                      <span className="font-display-italic text-gold">
                        {p.italicTitle}
                      </span>
                    </>
                  ) : null}
                </h3>
                <span
                  className={`inline-block mt-5 font-mono-editorial text-[0.58rem] tracking-[0.26em] uppercase ${
                    isDark
                      ? "text-gold group-hover:text-gold-deep"
                      : "text-gold-deep group-hover:text-gold"
                  }`}
                >
                  Read the field note →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
