import Link from "next/link";
import type { Metadata } from "next";
import { FAQ_GROUPS, FAQ_FLAT } from "@/content/faq";

export const metadata: Metadata = {
  title: "FAQ: Spain Soccer Tours, School Trips & Group Travel | Odisea Tours",
  description:
    "Honest answers to the questions every coach and parent asks before booking a Spain soccer tour: pricing, what's included, group sizes, training partners, safety, booking and cancellation.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ: Spain Soccer Tours & Group Travel | Odisea Tours",
    description:
      "Pricing, what's included, group sizes, training partners and booking terms. Answered by Odisea Tours, operating Spain group travel since 2005.",
    url: "https://odisea-tours.com/faq",
    type: "article",
  },
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_FLAT.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://odisea-tours.com/" },
    { "@type": "ListItem", position: 2, name: "FAQ", item: "https://odisea-tours.com/faq" },
  ],
};

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function FaqPage() {
  return (
    <main className="bg-paper text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* HERO */}
      <section className="bg-ink text-paper pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto">
          <nav aria-label="Breadcrumb" className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/70 mb-6">
            <Link href="/" className="hover:text-gold">Odisea Tours</Link>
            <span className="mx-2">/</span>
            <span className="text-paper/50">FAQ</span>
          </nav>
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/70 mb-6">
            Frequently asked questions
          </div>
          <h1 className="font-display text-[clamp(2.4rem,6vw,5rem)] uppercase leading-[0.95] max-w-[20ch]">
            The questions every <span className="font-display-italic text-gold">coach and parent</span> asks first.
          </h1>
          <p className="mt-6 max-w-[60ch] text-paper/85 text-lg leading-relaxed">
            Twenty years of running Spain group tours has narrowed the conversation down to about fifteen questions. They are answered honestly below, with the same numbers we share on the planning call.
          </p>
        </div>
      </section>

      {/* TABLE OF CONTENTS */}
      <section className="paper-texture py-12 md:py-16 px-6 md:px-10 border-b border-ink/10">
        <div className="max-w-[1100px] mx-auto">
          <div className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/55 mb-4">On this page</div>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-2">
            {FAQ_GROUPS.map((g) => (
              <a
                key={g.title}
                href={`#${slugify(g.title)}`}
                className="link-rule text-ink/85 hover:text-gold-deep py-1"
              >
                {g.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* GROUPS */}
      {FAQ_GROUPS.map((group, gi) => (
        <section
          key={group.title}
          id={slugify(group.title)}
          className={`${gi % 2 === 0 ? "bg-paper" : "paper-texture"} py-20 md:py-24 px-6 md:px-10 scroll-mt-24`}
        >
          <div className="max-w-[1000px] mx-auto">
            <div className="rule-label font-mono-editorial text-[0.62rem] tracking-[0.28em] uppercase text-ink/55 mb-6">
              0{gi + 1} / {group.title}
            </div>
            <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.8rem)] uppercase leading-[1.05] max-w-[24ch]">
              {group.title}.
            </h2>

            <div className="mt-12 border-t border-ink/15">
              {group.items.map((item) => (
                <article key={item.q} className="border-b border-ink/15 py-8 md:py-10">
                  <h3 className="font-display text-xl md:text-2xl uppercase leading-[1.15] max-w-[32ch]">
                    {item.q}
                  </h3>
                  <p className="mt-4 text-ink-soft leading-relaxed max-w-[68ch] text-[1.02rem]">
                    {item.a}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-ink text-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="rule-label font-mono-editorial text-[0.62rem] tracking-[0.28em] uppercase text-paper/70 mb-6">
            Question we did not answer?
          </div>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,3.2rem)] uppercase leading-[1.05] max-w-[22ch] mx-auto">
            Ask the people who run the trips.
          </h2>
          <p className="mt-6 max-w-[54ch] mx-auto text-paper/80 leading-relaxed">
            A 15 minute call with our team is enough to answer anything specific to your group, your dates and your roster. Same-day reply, every working day.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/plan-your-tour" className="btn-editorial on-dark">Plan a tour</Link>
            <Link href="/contact" className="btn-editorial on-dark">Contact Odisea</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
