import Image from "next/image";
import Link from "next/link";
import { POSTS } from "@/content/journal";

export const metadata = {
  title: "The Journal",
  description:
    "Field notes on group travel, Spain, and twenty years of quietly running tours.",
};

export default function JournalIndex() {
  return (
    <>
      <section className="pt-40 pb-24 px-6 md:px-10 lg:px-14">
        <div className="max-w-[1680px] mx-auto">
          <div className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/60 mb-10">
            Chapter III · The Journal
          </div>
          <h1 className="font-display text-[clamp(4rem,14vw,14rem)] leading-[0.82] tracking-[-0.01em]">
            Field
            <br />
            <span className="font-display-italic text-gold">Notes.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-ink/75 leading-relaxed">
            Slow dispatches on Spain, group travel, and the small things we
            have learned from two decades in the field. Written by the people
            who run the trips.
          </p>
        </div>
      </section>

      <section className="pb-40">
        <div className="max-w-[1680px] mx-auto">
          {POSTS.map((post, i) => (
            <Link
              key={post.slug}
              href={`/journal/${post.slug}`}
              className="group block border-t border-ink/15"
            >
              <div className="grid md:grid-cols-12 gap-8 items-center px-6 md:px-10 lg:px-14 py-12 md:py-14 transition-colors duration-700 hover:bg-ink hover:text-paper">
                <div className="md:col-span-2 font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase opacity-60">
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
                <h2 className="md:col-span-7 font-display text-[clamp(2rem,5vw,5rem)] leading-[0.92] tracking-tight">
                  {post.title}{" "}
                  <span className="font-display-italic text-gold">
                    {post.italicTitle}
                  </span>
                </h2>
                <div className="md:col-span-3 font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase opacity-70">
                  <div>{post.readTime} read</div>
                  <div className="mt-3 inline-flex items-center gap-2">
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
              {i === POSTS.length - 1 && <div className="border-b border-ink/15" />}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
