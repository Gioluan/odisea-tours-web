import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { US_CITIES, usCityBySlug, type UsCity } from "@/content/us-cities";

type Props = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return US_CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const c = usCityBySlug(city);
  if (!c) {
    return { title: "City not found · Odisea Tours", robots: { index: false } };
  }
  const title = `Spain Soccer Tours from ${c.name} | Odisea Tours`;
  const description = c.og_summary;
  const canonical = `/usa/${c.slug}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: `https://odisea-tours.com${canonical}`,
      type: "article",
      images: [{ url: c.hero_photo, width: 1200, height: 630, alt: `Spain soccer tour for ${c.name} clubs` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [c.hero_photo],
    },
  };
}

function breadcrumbSchema(c: UsCity) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://odisea-tours.com/" },
      { "@type": "ListItem", position: 2, name: "Tours by US City", item: "https://odisea-tours.com/usa" },
      { "@type": "ListItem", position: 3, name: c.name, item: `https://odisea-tours.com/usa/${c.slug}` },
    ],
  };
}

function faqSchema(c: UsCity) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How long is the flight from ${c.name} to Spain?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${c.flight_hours_to_madrid} to Madrid and ${c.flight_hours_to_barcelona} to Barcelona. ${c.time_zone_note}`,
        },
      },
      {
        "@type": "Question",
        name: `What does a Spain soccer tour from ${c.name} include?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Training at Spanish FA headquarters, Valencia CF and FC Barcelona facilities, fixtures against Spanish academy opposition, 4-star accommodation, coach transport, bilingual Odisea guides, stadium tours and cultural programme for families. International flights excluded.",
        },
      },
      {
        "@type": "Question",
        name: `Who runs Odisea Tours?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ground Agents Solutions S.L., operating Spain group tours since 2005. Headquarters in Benicassim, Castellón, with ground teams in Madrid, Valencia and Barcelona.",
        },
      },
    ],
  };
}

export default async function UsCityPage({ params }: Props) {
  const { city } = await params;
  const c = usCityBySlug(city);
  if (!c) notFound();

  return (
    <main className="bg-paper text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(c)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(c)) }}
      />

      {/* HERO */}
      <section className="relative min-h-[70svh] text-paper flex items-end overflow-hidden pt-24 pb-14 px-6 md:px-12">
        <div className="absolute inset-0 -z-10">
          <Image
            src={c.hero_photo}
            alt={`Spain soccer tour group from ${c.name}, ${c.state}`}
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
            <Link href="/tours" className="hover:text-gold">Tours</Link>
            <span className="mx-2">/</span>
            <span className="text-paper/50">USA · {c.name}</span>
          </nav>
          <h1 className="font-display text-[clamp(2.4rem,6vw,5.2rem)] uppercase leading-[0.95] max-w-[22ch]">
            Spain Soccer Tours from <span className="font-display-italic text-gold">{c.name}</span>
          </h1>
          <p className="mt-6 max-w-[58ch] text-paper/85 text-lg leading-relaxed">
            {c.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/plan-your-tour" className="btn-editorial on-dark">Plan a tour from {c.name}</Link>
            <Link href="/tours/european-soccer-tours" className="btn-editorial on-dark">Soccer tour package</Link>
          </div>
        </div>
      </section>

      {/* FLIGHT + CONTEXT */}
      <section className="paper-texture py-20 md:py-24 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.62rem] tracking-[0.28em] uppercase text-ink/55 mb-6">
            01 / Flying from {c.metro}
          </div>
          <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.8rem)] uppercase leading-[1.05] max-w-[22ch]">
            The shortest route to a training session at <span className="font-display-italic text-gold-deep">Camp Nou</span>.
          </h2>

          <div className="mt-10 grid md:grid-cols-3 border border-ink/15">
            <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-ink/15">
              <div className="font-mono-editorial text-[0.6rem] tracking-[0.26em] uppercase text-ink/55">Airports</div>
              <div className="font-display text-xl uppercase mt-2">{c.airport_codes.join(" · ")}</div>
            </div>
            <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-ink/15">
              <div className="font-mono-editorial text-[0.6rem] tracking-[0.26em] uppercase text-ink/55">To Madrid</div>
              <div className="font-display text-xl uppercase mt-2">{c.flight_hours_to_madrid}</div>
            </div>
            <div className="p-6 md:p-8">
              <div className="font-mono-editorial text-[0.6rem] tracking-[0.26em] uppercase text-ink/55">To Barcelona</div>
              <div className="font-display text-xl uppercase mt-2">{c.flight_hours_to_barcelona}</div>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
              <div className="font-mono-editorial text-[0.6rem] tracking-[0.26em] uppercase text-ink/55 mb-3">Carriers we route groups with</div>
              <ul className="space-y-1.5 text-ink-soft">
                {c.nonstop_carriers.map((carrier) => (
                  <li key={carrier} className="flex gap-3"><span className="mt-[0.55rem] w-1.5 h-1.5 bg-gold flex-shrink-0" /><span>{carrier}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-mono-editorial text-[0.6rem] tracking-[0.26em] uppercase text-ink/55 mb-3">Time zone</div>
              <p className="text-ink-soft leading-relaxed">{c.time_zone_note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL SOCCER CONTEXT */}
      <section className="bg-paper py-20 md:py-24 px-6 md:px-10">
        <div className="max-w-[1000px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.62rem] tracking-[0.28em] uppercase text-ink/55 mb-6">
            02 / {c.name} soccer, meet Spain
          </div>
          <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.8rem)] uppercase leading-[1.05] max-w-[24ch]">
            Why {c.metro} clubs go beyond the domestic showcase circuit.
          </h2>
          <p className="mt-8 text-ink-soft leading-relaxed max-w-[68ch] text-[1.05rem]">
            {c.local_soccer_context}
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="border border-ink/15 p-6 md:p-8">
              <div className="font-mono-editorial text-[0.6rem] tracking-[0.26em] uppercase text-ink/55 mb-3">Clubs we serve in your area</div>
              <p className="text-ink-soft leading-relaxed">{c.sample_clubs_phrase}.</p>
            </div>
            <div className="border border-ink/15 p-6 md:p-8">
              <div className="font-mono-editorial text-[0.6rem] tracking-[0.26em] uppercase text-ink/55 mb-3">Ideal group types</div>
              <ul className="space-y-2 text-ink-soft">
                {c.ideal_audiences.map((a) => (
                  <li key={a} className="flex gap-3"><span className="mt-[0.55rem] w-1.5 h-1.5 bg-ink flex-shrink-0" /><span>{a}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SPAIN */}
      <section className="bg-ink text-paper py-20 md:py-24 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.62rem] tracking-[0.28em] uppercase text-paper/70 mb-6">
            03 / Three reasons {c.name} teams pick Spain
          </div>
          <div className="grid md:grid-cols-3 gap-0 border border-paper/20">
            {c.why_spain.map((reason, i) => (
              <div key={i} className={`p-8 md:p-10 ${i < 2 ? "md:border-r border-paper/20" : ""} ${i > 0 ? "border-t md:border-t-0 border-paper/20" : ""}`}>
                <div className="font-display text-4xl text-gold mb-4">0{i + 1}</div>
                <p className="text-paper/85 leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING PARTNERS */}
      <section className="bg-paper py-20 md:py-24 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.62rem] tracking-[0.28em] uppercase text-ink/55 mb-6">
            04 / Where your players train
          </div>
          <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.8rem)] uppercase leading-[1.05] max-w-[22ch]">
            Three official partners. <span className="font-display-italic text-gold-deep">No middleman.</span>
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-0 border border-ink/15">
            {[
              { src: "/badges/fc-barcelona.svg", name: "FC Barcelona", caption: "Joan Gamper facilities · Official FCB coaches" },
              { src: "/badges/valencia-cf.svg", name: "Valencia CF", caption: "Paterna training ground · Official Valencia CF staff" },
              { src: "/badges/rfef.svg", name: "Spanish FA", caption: "RFEF headquarters, Las Rozas · Accommodation + training" },
            ].map((b, i) => (
              <article key={b.name} className={`p-8 text-center flex flex-col items-center ${i < 2 ? "md:border-r border-ink/15" : ""} ${i > 0 ? "border-t md:border-t-0 border-ink/15" : ""}`}>
                <div className="w-28 h-28 p-4 mb-5 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.src} alt={`${b.name} badge`} className="w-full h-full object-contain" />
                </div>
                <h3 className="font-display text-lg uppercase">{b.name}</h3>
                <p className="font-mono-editorial text-[0.62rem] tracking-[0.22em] uppercase text-ink/55 mt-3 max-w-[30ch] leading-relaxed">{b.caption}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TOUR OPTIONS */}
      <section className="paper-texture py-20 md:py-24 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.62rem] tracking-[0.28em] uppercase text-ink/55 mb-6">
            05 / Tour formats that work from {c.name}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { href: "/tours/european-soccer-tours", title: "European Soccer Tours", body: "7 to 12 night soccer tours. FC Barcelona and Valencia CF training, games against Spanish academy opposition." },
              { href: "/youth", title: "Youth soccer programme", body: "Built for U12 to U19 clubs. Families welcome on the same itinerary." },
              { href: "/schools", title: "School & high school tours", body: "Term-time and summer programmes for high school varsity and private school teams." },
            ].map((t) => (
              <Link key={t.href} href={t.href} className="group border border-ink/15 p-8 hover:bg-ink hover:text-paper transition-colors">
                <div className="font-mono-editorial text-[0.6rem] tracking-[0.26em] uppercase text-ink/55 group-hover:text-paper/70 mb-3">Tour format</div>
                <h3 className="font-display text-xl uppercase leading-tight">{t.title}</h3>
                <p className="mt-4 text-ink-soft group-hover:text-paper/80 leading-relaxed">{t.body}</p>
                <span className="inline-block mt-5 font-mono-editorial text-[0.6rem] tracking-[0.26em] uppercase text-gold-deep group-hover:text-gold">Read more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="rule-label font-mono-editorial text-[0.62rem] tracking-[0.28em] uppercase text-paper/70 mb-6">
            06 / Next step
          </div>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,3.2rem)] uppercase leading-[1.05] max-w-[22ch] mx-auto">
            Tell us about your {c.name} club. We reply the same day.
          </h2>
          <p className="mt-6 max-w-[54ch] mx-auto text-paper/80 leading-relaxed">
            A 15 minute call is enough to shape a tour around your dates, your roster and your budget. You will have a hard-number itinerary within 48 hours.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/plan-your-tour" className="btn-editorial on-dark">Plan a tour from {c.name}</Link>
            <Link href="/contact" className="btn-editorial on-dark">Contact Odisea</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
