import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { US_STATES, usStateBySlug, type UsState } from "@/content/us-states";

type Props = { params: Promise<{ state: string }> };

const SITE = "https://odisea-tours.com";

export function generateStaticParams() {
  return US_STATES.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state } = await params;
  const s = usStateBySlug(state);
  if (!s) {
    return { title: "State not found · Odisea Tours", robots: { index: false } };
  }
  const title = `Spain Soccer Tours for ${s.name} Clubs and Schools | Odisea Tours`;
  const description = s.og_summary;
  const canonical = `/usa/states/${s.slug}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: `${SITE}${canonical}`,
      type: "article",
      images: [
        {
          url: s.hero_photo,
          width: 1200,
          height: 630,
          alt: `Spain soccer tour for ${s.name} clubs`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [s.hero_photo],
    },
  };
}

function breadcrumbSchema(s: UsState) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Spain Soccer Tours from the USA", item: `${SITE}/usa` },
      { "@type": "ListItem", position: 3, name: s.name, item: `${SITE}/usa/states/${s.slug}` },
    ],
  };
}

function faqSchema(s: UsState) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

function placeSchema(s: UsState) {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: `${s.name}, USA`,
    address: {
      "@type": "PostalAddress",
      addressRegion: s.abbreviation,
      addressCountry: "US",
    },
    description: s.og_summary,
  };
}

export default async function UsStatePage({ params }: Props) {
  const { state } = await params;
  const s = usStateBySlug(state);
  if (!s) notFound();

  return (
    <main className="bg-paper text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(s)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(s)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema(s)) }}
      />

      {/* HERO */}
      <section className="relative isolate min-h-[72svh] text-paper flex items-end overflow-hidden pt-24 pb-14 px-6 md:px-12">
        <div className="absolute inset-0 z-0">
          <Image
            src={s.hero_photo}
            alt={`Spain soccer tour group from ${s.name}`}
            fill
            priority
            sizes="100vw"
            className="object-cover kenburns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/30 to-ink/85" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto w-full">
          <nav aria-label="Breadcrumb" className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/70 mb-6">
            <Link href="/" className="hover:text-gold">Odisea Tours</Link>
            <span className="mx-2">/</span>
            <Link href="/soccer-tours-spain" className="hover:text-gold">Soccer Tours in Spain</Link>
            <span className="mx-2">/</span>
            <Link href="/usa" className="hover:text-gold">USA</Link>
            <span className="mx-2">/</span>
            <span className="text-paper/50">{s.name}</span>
          </nav>
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/70 mb-5">
            <span>{s.abbreviation} · State guide</span>
          </div>
          <h1 className="font-display text-[clamp(2.4rem,6vw,5.2rem)] uppercase leading-[0.95] max-w-[22ch]">
            Spain Soccer Tours for <span className="font-display-italic text-gold">{s.name}</span>
          </h1>
          <p className="mt-6 max-w-[62ch] text-paper/85 text-lg leading-relaxed">
            {s.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/plan-your-tour" className="btn-editorial on-dark">Plan a tour from {s.name}</Link>
            <Link href="/soccer-tours-spain" className="btn-editorial on-dark">Soccer Tours in Spain</Link>
          </div>
        </div>
      </section>

      {/* FLYING FROM STATE */}
      <section className="paper-texture py-20 md:py-24 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.62rem] tracking-[0.28em] uppercase text-ink/55 mb-6">
            01 / Flying from {s.name}
          </div>
          <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.8rem)] uppercase leading-[1.05] max-w-[22ch]">
            How {s.name} groups <span className="font-display-italic text-gold-deep">actually get there</span>.
          </h2>
          <p className="mt-8 text-ink-soft leading-relaxed max-w-[68ch] text-[1.05rem]">
            {s.flight_overview}
          </p>
          <div className="mt-10 border border-ink/15 p-7">
            <div className="font-mono-editorial text-[0.6rem] tracking-[0.26em] uppercase text-ink/55 mb-3">
              Gateway airports
            </div>
            <ul className="grid md:grid-cols-2 gap-2 text-ink-soft">
              {s.gateway_airports.map((a) => (
                <li key={a} className="flex gap-3">
                  <span className="mt-[0.55rem] w-1.5 h-1.5 bg-gold flex-shrink-0" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SOCCER LANDSCAPE */}
      <section className="bg-paper py-20 md:py-24 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.62rem] tracking-[0.28em] uppercase text-ink/55 mb-6">
            02 / The {s.name} soccer landscape
          </div>
          <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.8rem)] uppercase leading-[1.05] max-w-[24ch]">
            Where {s.name} soccer <span className="font-display-italic text-gold-deep">already plays</span>.
          </h2>
          <p className="mt-8 text-ink-soft leading-relaxed max-w-[70ch] text-[1.05rem]">
            {s.soccer_landscape}
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="border border-ink/15 p-7">
              <div className="font-mono-editorial text-[0.6rem] tracking-[0.26em] uppercase text-ink/55 mb-3">
                Major {s.name} soccer organisations
              </div>
              <ul className="space-y-2 text-ink-soft">
                {s.major_soccer_organisations.map((o) => (
                  <li key={o} className="flex gap-3">
                    <span className="mt-[0.55rem] w-1.5 h-1.5 bg-ink flex-shrink-0" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-ink/15 p-7">
              <div className="font-mono-editorial text-[0.6rem] tracking-[0.26em] uppercase text-ink/55 mb-3">
                Ideal group types
              </div>
              <ul className="space-y-2 text-ink-soft">
                {s.ideal_audiences.map((a) => (
                  <li key={a} className="flex gap-3">
                    <span className="mt-[0.55rem] w-1.5 h-1.5 bg-gold-deep flex-shrink-0" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CITIES WE SERVE */}
      {s.cities_we_serve.length > 0 && (
        <section className="bg-ink text-paper py-20 md:py-24 px-6 md:px-10">
          <div className="max-w-[1100px] mx-auto">
            <div className="rule-label font-mono-editorial text-[0.62rem] tracking-[0.28em] uppercase text-paper/70 mb-6">
              03 / Cities we serve in {s.name}
            </div>
            <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.8rem)] uppercase leading-[1.05] max-w-[22ch]">
              Detailed planning, <span className="font-display-italic text-gold">city by city</span>.
            </h2>
            <div className="mt-12 grid md:grid-cols-2 gap-5">
              {s.cities_we_serve.map((c) => {
                const hasOwnPage = !["honolulu", "kailua-kona"].includes(c.slug);
                const href = hasOwnPage ? `/usa/${c.slug}` : "/plan-your-tour";
                return (
                  <Link
                    key={c.slug}
                    href={href}
                    className="group block border border-paper/15 p-7 hover:bg-paper hover:text-ink transition-colors"
                  >
                    <div className="font-mono-editorial text-[0.6rem] tracking-[0.26em] uppercase text-paper/60 group-hover:text-ink/55 mb-3">
                      {hasOwnPage ? "Tour planning page" : "Planning by request"}
                    </div>
                    <h3 className="font-display text-2xl uppercase">{c.name}</h3>
                    <p className="mt-4 text-paper/80 group-hover:text-ink-soft leading-relaxed text-[0.97rem]">
                      {c.note}.
                    </p>
                    <span className="inline-block mt-5 font-mono-editorial text-[0.58rem] tracking-[0.26em] uppercase text-gold group-hover:text-gold-deep">
                      {hasOwnPage ? `Read the ${c.name} page →` : `Plan from ${c.name} →`}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* TRAINING PARTNERS */}
      <section className="bg-paper py-20 md:py-24 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.62rem] tracking-[0.28em] uppercase text-ink/55 mb-6">
            04 / Where your players train
          </div>
          <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.8rem)] uppercase leading-[1.05] max-w-[22ch]">
            Three training homes. <span className="font-display-italic text-gold-deep">No middleman.</span>
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-0 border border-ink/15">
            {[
              { src: "/badges/fc-barcelona.svg", name: "FC Barcelona", caption: "Joan Gamper facilities · FC Barcelona coaching staff" },
              { src: "/badges/valencia-cf.svg", name: "Valencia CF", caption: "Paterna training ground · Valencia CF coaching staff" },
              { src: "/badges/rfef.svg", name: "Spanish FA", caption: "RFEF headquarters, Las Rozas · Accommodation and training" },
            ].map((b, i) => (
              <article
                key={b.name}
                className={`p-8 text-center flex flex-col items-center ${i < 2 ? "md:border-r border-ink/15" : ""} ${i > 0 ? "border-t md:border-t-0 border-ink/15" : ""}`}
              >
                <div className="w-28 h-28 p-4 mb-5 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.src} alt={`${b.name} badge`} className="w-full h-full object-contain" />
                </div>
                <h3 className="font-display text-lg uppercase">{b.name}</h3>
                <p className="font-mono-editorial text-[0.62rem] tracking-[0.22em] uppercase text-ink/55 mt-3 max-w-[30ch] leading-relaxed">
                  {b.caption}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REAL CLIENTS */}
      <section className="paper-texture py-20 md:py-24 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.62rem] tracking-[0.28em] uppercase text-ink/55 mb-6">
            05 / {s.name} groups we have hosted
          </div>
          <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.8rem)] uppercase leading-[1.05] max-w-[24ch]">
            Real {s.name} programs, <span className="font-display-italic text-gold-deep">real itineraries</span>.
          </h2>
          <div className="mt-10 space-y-5 max-w-[68ch]">
            {s.real_clients.map((c) => (
              <div key={c} className="border-l-2 border-gold pl-6 py-2">
                <p className="text-ink-soft leading-relaxed text-[1.02rem]">{c}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-ink/55 text-sm max-w-[60ch] leading-relaxed">
            Specific club and program names beyond those listed are shared on the planning call, when relevant to your group's profile and only with the prior client's permission.
          </p>
        </div>
      </section>

      {/* WHY SPAIN */}
      <section className="bg-ink text-paper py-20 md:py-24 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.62rem] tracking-[0.28em] uppercase text-paper/70 mb-6">
            06 / Three reasons {s.name} teams pick Spain
          </div>
          <div className="grid md:grid-cols-3 gap-0 border border-paper/20">
            {s.why_state_picks_spain.map((reason, i) => (
              <div
                key={i}
                className={`p-8 md:p-10 ${i < 2 ? "md:border-r border-paper/20" : ""} ${i > 0 ? "border-t md:border-t-0 border-paper/20" : ""}`}
              >
                <div className="font-display text-4xl text-gold mb-4">0{i + 1}</div>
                <p className="text-paper/85 leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEST SEASONS */}
      <section className="bg-paper py-20 md:py-24 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.62rem] tracking-[0.28em] uppercase text-ink/55 mb-6">
            07 / When {s.name} teams travel
          </div>
          <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.8rem)] uppercase leading-[1.05] max-w-[20ch]">
            The travel windows that <span className="font-display-italic text-gold-deep">actually work</span>.
          </h2>
          <p className="mt-8 text-ink-soft leading-relaxed max-w-[68ch] text-[1.05rem]">
            {s.best_seasons}
          </p>
        </div>
      </section>

      {/* TOUR FORMATS */}
      <section className="paper-texture py-20 md:py-24 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.62rem] tracking-[0.28em] uppercase text-ink/55 mb-6">
            08 / Tour formats that work from {s.name}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { href: "/tours/european-soccer-tours", title: "European Soccer Tours", body: "7 to 12 night soccer tours. FC Barcelona and Valencia CF training, games against Spanish academy or amateur opposition." },
              { href: "/youth", title: "Youth soccer programme", body: "Built for U12 to U19 clubs. Families welcome on the same itinerary." },
              { href: "/schools", title: "School and high school tours", body: "Term-time and summer programmes for high school varsity and private school teams." },
            ].map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="group border border-ink/15 p-8 hover:bg-ink hover:text-paper transition-colors"
              >
                <div className="font-mono-editorial text-[0.6rem] tracking-[0.26em] uppercase text-ink/55 group-hover:text-paper/70 mb-3">
                  Tour format
                </div>
                <h3 className="font-display text-xl uppercase leading-tight">{t.title}</h3>
                <p className="mt-4 text-ink-soft group-hover:text-paper/80 leading-relaxed">
                  {t.body}
                </p>
                <span className="inline-block mt-5 font-mono-editorial text-[0.6rem] tracking-[0.26em] uppercase text-gold-deep group-hover:text-gold">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ink text-paper py-20 md:py-24 px-6 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.62rem] tracking-[0.28em] uppercase text-paper/70 mb-6">
            09 / Frequently asked from {s.name}
          </div>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,3rem)] uppercase leading-[1.05] max-w-[22ch]">
            Questions {s.name} coaches <span className="font-display-italic text-gold">ask first</span>.
          </h2>
          <div className="mt-12 divide-y divide-paper/15">
            {s.faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-6">
                  <h3 className="font-display text-lg md:text-xl uppercase leading-snug">{f.q}</h3>
                  <span
                    className="font-mono-editorial text-2xl text-gold transition-transform group-open:rotate-45 shrink-0"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-paper/80 leading-relaxed max-w-[68ch]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="rule-label font-mono-editorial text-[0.62rem] tracking-[0.28em] uppercase text-ink/55 mb-6 justify-center">
            <span>Step one</span>
          </div>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,3.2rem)] uppercase leading-[1.05] max-w-[22ch] mx-auto">
            Plan a tour from {s.name}. <span className="font-display-italic text-gold-deep">We reply the same day.</span>
          </h2>
          <p className="mt-6 max-w-[54ch] mx-auto text-ink-soft leading-relaxed">
            Tell us your squad size, age group, home metro and the window you are looking at. We come back inside seven days with a draft itinerary that names the hotels, the training facilities, the cities and the per-player number.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/plan-your-tour" className="btn-editorial">Plan a tour from {s.name}</Link>
            <Link href="/contact" className="btn-editorial">Talk to us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
