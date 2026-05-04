import Image from "next/image";

const CONTACT = {
  name: "Juan Sanchez",
  role: "Director, Odisea Tours",
  email: "juan@odisea-tours.com",
  phone: "+34 670 059 797",
  calendly: "https://calendly.com/juan-odisea-tours/30min",
};

const QUOTE =
  "Thank you to the Kearny FC families for considering Odisea Tours for your 2027 trip. We've been running soccer tours through Spain for more than twenty years, and we treat every group as one of our own. Whichever option you choose, I'll personally welcome you on arrival in Spain and make sure your trip is a success from start to finish. I'm available for any questions before, during, or after the tour. Just reach out anytime.";

const TOURS = [
  {
    key: "spain",
    badge: "Option A",
    flag: "Culture & family",
    title: "Spain Tour 2027",
    subtitle: "Madrid · Valencia · Barcelona",
    window: "26 Mar to 4 Apr 2027 (Easter)",
    days: "10 days · 9 nights",
    summary:
      "Spain's three great soccer cities. Coaching from RFEF, Valencia CF and FC Barcelona staff on their own training grounds, three friendly matches against local opposition, stadium tours of the Bernabéu, Mestalla and Camp Nou, plus a live La Liga fixture. Built around culture and family time as much as soccer.",
    highlights: [
      "Coached by RFEF, Valencia CF and FC Barcelona staff",
      "Sessions held at each club's own training ground",
      "Stadium tours: Bernabéu · Mestalla · Camp Nou",
      "3 friendly matches vs. local Spanish sides",
      "Live La Liga match attended",
      "Paella experience and city walks",
      "Free afternoons in each city",
    ],
    partners: [
      { src: "/decks/kearny-fc/assets/logos/rfef.png", alt: "RFEF" },
      { src: "/decks/kearny-fc/assets/logos/valencia-cf.svg", alt: "Valencia CF" },
      { src: "/decks/kearny-fc/assets/logos/fc-barcelona.png", alt: "FC Barcelona" },
    ],
    partnersLabel: "Spanish soccer partners",
    note: "Easter dates suggested, but this tour can run any time of year except July.",
    deckSrc: "/decks/kearny-fc/spain-tour-2027.html",
    pdfSrc: "/decks/kearny-fc/spain-tour-2027.pdf",
    pdfName: "Kearny FC Spain Tour 2027.pdf",
    image: "/decks/kearny-fc/assets/photos/bernabeu.jpg",
    imageCaption: "Santiago Bernabéu · Madrid",
  },
  {
    key: "donosti",
    badge: "Option B",
    flag: "Competition",
    title: "Donosti Cup 2027",
    subtitle: "Barcelona · San Sebastián · Barcelona",
    window: "Early July 2027",
    days: "10 days · 9 nights",
    summary:
      "One of Europe's biggest youth tournaments: 900+ teams, 30+ countries, real knockout soccer. Two nights in Barcelona for a session with FC Barcelona coaches at Joan Gamper and a preparation match, six nights in San Sebastián playing the Donosti Cup, then a final night back in Barcelona before flying home.",
    highlights: [
      "Coached by FC Barcelona staff at Joan Gamper",
      "Preparation match in Barcelona",
      "Six days at the Donosti Cup tournament",
      "Group stage, knockouts, opening + closing ceremonies",
      "Authentics Day fan zone and tournament gala",
      "La Concha bay, Old Town pintxos in San Sebastián",
    ],
    partners: [
      { src: "/decks/kearny-fc/assets/logos/fc-barcelona.png", alt: "FC Barcelona" },
      { src: "/decks/kearny-fc/assets/logos/donosti-cup.png", alt: "Donosti Cup" },
    ],
    partnersLabel: "Spanish soccer + tournament partners",
    note: "Dates mirror this year's Donosti Cup calendar; the 2027 edition will likely shift by a day or two when organizers publish official dates.",
    deckSrc: "/decks/kearny-fc/donosti-cup-2027.html",
    pdfSrc: "/decks/kearny-fc/donosti-cup-2027.pdf",
    pdfName: "Kearny FC Donosti Cup 2027.pdf",
    image: "/decks/kearny-fc/assets/photos/donostihappyfinal.jpg",
    imageCaption: "Donosti Cup · Trophy lift",
  },
];

const PRICING = [
  { label: "Player · roster", desc: "U10 to U18", price: "€1,999" },
  { label: "Adult", desc: "Parent · sibling 12+", price: "€1,799" },
  { label: "Child", desc: "Under 12, traveling family", price: "€1,250" },
  { label: "Extra coach", desc: "Beyond complimentary squad places", price: "€1,250" },
];

export default function KearnyView() {
  return (
    <main className="bg-paper text-ink">
      {/* HERO */}
      <section className="relative min-h-[88svh] text-paper overflow-hidden flex flex-col justify-between px-6 md:px-12 py-10 md:py-14">
        <div className="absolute inset-0">
          <Image
            src="/decks/kearny-fc/assets/photos/cover-floodlights.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover kenburns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/30 to-black/85" />
        </div>

        <div className="relative z-10 flex items-start justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-[90px] h-[90px] bg-paper rounded-md flex items-center justify-center border border-paper/30 flex-shrink-0 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/decks/kearny-fc/assets/kearny-fc.png"
                alt="Kearny FC"
                className="w-full h-full object-contain p-2"
              />
            </div>
            <div className="hidden sm:block w-px h-[64px] bg-paper/25" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/decks/kearny-fc/assets/odisea-color.png"
              alt="Odisea Tours"
              className="hidden sm:block h-[60px] w-auto"
            />
          </div>
          <div className="stamp text-paper/80">
            <div>
              <div>EST.</div>
              <div className="font-display text-base mt-0.5">2005</div>
              <div>20 YEARS</div>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex-1 flex items-center">
          <div>
            <div className="font-mono-editorial text-[0.72rem] tracking-[0.32em] uppercase text-gold mb-6">
              A Private Proposal &middot; Prepared for Kearny FC
            </div>
            <h1 className="font-display text-[clamp(2.6rem,9vw,8rem)] uppercase leading-[0.92]">
              <span className="block">Spain 2027</span>
              <span className="block">
                <em className="font-display-italic text-gold">Two tours,</em> one Spain.
              </span>
            </h1>
            <p className="mt-8 max-w-[60ch] text-paper/85 text-[clamp(1rem,1.4vw,1.18rem)] leading-relaxed">
              Two ten-day Spain tour options for the Kearny FC families. One is built around culture and family time. The other is built around competition. Same Odisea team on the ground, same care, same standards. Pricing is identical so the choice is about the experience you want.
            </p>
          </div>
        </div>

        <div className="relative z-10 flex justify-between gap-6 flex-wrap font-mono-editorial text-[0.62rem] tracking-[0.28em] uppercase text-paper/60">
          <div>odisea-tours.com</div>
          <div>Confidential &middot; Private link</div>
          <div>
            {new Date().toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>
        </div>
      </section>

      {/* JUAN WELCOME */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[980px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.68rem] tracking-[0.28em] uppercase text-ink-muted mb-10">
            01 / A personal welcome
          </div>
          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-14">
            <div className="flex-shrink-0">
              <div className="relative w-[180px] h-[220px] md:w-[220px] md:h-[260px] overflow-hidden border border-ink/15">
                <Image
                  src="/photos/juan-sanchez-odisea-tours-director.jpg"
                  alt="Juan Sanchez, Odisea Tours"
                  fill
                  sizes="(max-width: 768px) 180px, 220px"
                  className="object-cover"
                />
              </div>
              <div className="mt-4 font-mono-editorial text-[0.62rem] tracking-[0.28em] uppercase text-ink-muted">
                {CONTACT.name}
                <br />
                {CONTACT.role}
              </div>
            </div>
            <div>
              <div className="text-gold-deep font-display text-5xl leading-none mb-3">&ldquo;</div>
              <p className="text-[clamp(1.05rem,1.5vw,1.32rem)] leading-relaxed text-ink-soft max-w-[60ch]">
                {QUOTE}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${CONTACT.email}?subject=${encodeURIComponent("Spain 2027 tour for Kearny FC")}`}
                  className="btn-editorial"
                >
                  {CONTACT.email}
                </a>
                <a
                  href={CONTACT.calendly}
                  target="_blank"
                  rel="noopener"
                  className="btn-editorial"
                >
                  Book a 30-min call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TWO TOURS — comparison cards */}
      <section className="bg-ink text-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.68rem] tracking-[0.28em] uppercase text-paper/70 mb-10">
            02 / The two options
          </div>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,3.4rem)] uppercase leading-[1.02] max-w-[26ch] mb-16">
            Same operator. Same standards.{" "}
            <em className="font-display-italic text-gold">Two distinct trips.</em>
          </h2>
          <div className="grid md:grid-cols-2 gap-px bg-paper/20 border border-paper/20">
            {TOURS.map((t) => (
              <article key={t.key} className="bg-ink flex flex-col">
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-ink">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end gap-3 font-mono-editorial text-[0.58rem] tracking-[0.28em] uppercase text-paper/80">
                    <span>{t.imageCaption}</span>
                    <span className="text-gold">{t.badge}</span>
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-1">
                <div className="flex items-baseline justify-between mb-4">
                  <div className="font-mono-editorial text-[0.62rem] tracking-[0.28em] uppercase text-gold">
                    {t.badge} &middot; {t.flag}
                  </div>
                </div>
                <h3 className="font-display text-2xl md:text-3xl uppercase leading-tight">
                  {t.title}
                </h3>
                <div className="font-mono-editorial text-[0.7rem] tracking-[0.22em] uppercase text-paper/60 mt-2">
                  {t.subtitle}
                </div>
                <dl className="grid grid-cols-2 gap-4 mt-6 pb-6 border-b border-paper/15">
                  <div>
                    <dt className="font-mono-editorial text-[0.58rem] tracking-[0.28em] uppercase text-paper/55 mb-1">
                      Window
                    </dt>
                    <dd className="text-paper/90 text-sm">{t.window}</dd>
                  </div>
                  <div>
                    <dt className="font-mono-editorial text-[0.58rem] tracking-[0.28em] uppercase text-paper/55 mb-1">
                      Length
                    </dt>
                    <dd className="text-paper/90 text-sm">{t.days}</dd>
                  </div>
                </dl>
                <p className="mt-6 text-paper/80 text-[0.96rem] leading-relaxed">{t.summary}</p>
                <div className="mt-6 pt-6 border-t border-paper/15">
                  <div className="font-mono-editorial text-[0.58rem] tracking-[0.28em] uppercase text-paper/55 mb-3">
                    {t.partnersLabel}
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    {t.partners.map((p) => (
                      <div
                        key={p.src}
                        className="bg-paper/[0.06] border border-paper/15 px-3 py-2 flex items-center justify-center"
                        style={{ minWidth: 72 }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={p.src}
                          alt={p.alt}
                          className="h-9 w-auto object-contain"
                          style={{ maxWidth: 80 }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <ul className="mt-6 space-y-2">
                  {t.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-[0.92rem] text-paper/80 leading-relaxed pl-5 relative before:absolute before:left-0 before:top-[0.5em] before:w-2 before:h-[2px] before:bg-gold"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-mono-editorial text-[0.62rem] tracking-[0.18em] uppercase text-paper/50 leading-relaxed">
                  {t.note}
                </p>
                <div className="mt-auto pt-8 flex flex-wrap gap-3">
                  <a href={`#deck-${t.key}`} className="btn-editorial on-dark">
                    View deck
                  </a>
                  <a
                    href={t.pdfSrc}
                    download={t.pdfName}
                    className="btn-editorial on-dark"
                  >
                    Download PDF
                  </a>
                </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-start">
          <div>
            <div className="rule-label font-mono-editorial text-[0.68rem] tracking-[0.28em] uppercase text-ink-muted mb-6">
              03 / Pricing
            </div>
            <h3 className="font-display text-[clamp(1.9rem,3.6vw,3.4rem)] uppercase leading-[1.02] max-w-[24ch]">
              Same price on both tours, on purpose.
            </h3>
            <p className="mt-6 text-ink-soft leading-relaxed max-w-[58ch]">
              We aligned the Donosti Cup pricing to match the Spain Tour so the families' decision is about the experience, not the cost. Both trips are 10 days, 9 nights, with full board where it counts, all ground transport, training, and tournament/match access included. International flights are not included.
            </p>
            <p className="mt-4 font-mono-editorial text-[0.7rem] tracking-[0.22em] uppercase text-ink-muted leading-relaxed">
              Group basis: 100 PAX confirmed &middot; Currency: EUR &middot; One complimentary place per squad
            </p>
          </div>
          <div className="border border-ink/15 bg-paper-warm">
            {PRICING.map((row, i) => (
              <div
                key={row.label}
                className={`flex items-baseline justify-between gap-6 px-6 py-5 ${
                  i < PRICING.length - 1 ? "border-b border-ink/15" : ""
                } ${i === 0 ? "bg-gold/[0.06] border-l-2 border-l-gold" : ""}`}
              >
                <div>
                  <div className="font-display text-lg leading-tight">{row.label}</div>
                  <div className="font-mono-editorial text-[0.62rem] tracking-[0.22em] uppercase text-ink-muted mt-1">
                    {row.desc}
                  </div>
                </div>
                <div className="font-display text-2xl text-ink">{row.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DECKS */}
      {TOURS.map((t, idx) => (
        <section
          key={`deck-${t.key}`}
          id={`deck-${t.key}`}
          className={`${idx % 2 === 0 ? "bg-paper" : "paper-texture"} py-20 md:py-28 px-6 md:px-10`}
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="rule-label font-mono-editorial text-[0.68rem] tracking-[0.28em] uppercase text-ink-muted mb-6">
              {String(idx + 4).padStart(2, "0")} / {t.title} &middot; full deck
            </div>
            <div className="flex items-baseline justify-between gap-6 flex-wrap mb-8">
              <h3 className="font-display text-[clamp(1.6rem,3.2vw,3rem)] uppercase leading-[1.02]">
                {t.title}
              </h3>
              <a href={t.pdfSrc} download={t.pdfName} className="btn-editorial">
                Download PDF
              </a>
            </div>
            <div className="relative w-full bg-ink border border-ink/20" style={{ aspectRatio: "16 / 9" }}>
              <iframe
                src={t.deckSrc}
                title={`${t.title} interactive deck`}
                loading="lazy"
                className="absolute inset-0 w-full h-full"
                allow="fullscreen"
              />
            </div>
            <p className="mt-4 font-mono-editorial text-[0.62rem] tracking-[0.22em] uppercase text-ink-muted">
              Use the arrow keys, or click the controls at the bottom of the deck, to flip through slides.
            </p>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-ink text-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[960px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.68rem] tracking-[0.28em] uppercase text-paper/70 mb-6">
            06 / Next step
          </div>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,3.4rem)] uppercase leading-[1.02] max-w-[26ch]">
            Excited to welcome your family to Spain.
          </h2>
          <p className="mt-6 text-lg leading-relaxed max-w-[58ch] text-paper/80">
            Christopher David is your point of contact at Kearny FC for trip coordination and
            family registration. For any direct questions about either tour before you book, I&rsquo;m
            always available by email or WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${CONTACT.email}?subject=${encodeURIComponent("Spain 2027 tour for Kearny FC")}`}
              className="btn-editorial on-dark"
            >
              {CONTACT.email}
            </a>
            <a
              href={`https://wa.me/${CONTACT.phone.replace(/[^\d]/g, "")}?text=${encodeURIComponent(
                "Hi Juan, about the Spain 2027 tour for Kearny FC."
              )}`}
              target="_blank"
              rel="noopener"
              className="btn-editorial on-dark"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-paper border-t border-paper/10 py-6 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto flex justify-between gap-4 flex-wrap font-mono-editorial text-[0.62rem] tracking-[0.28em] uppercase">
          <div>Odisea Tours &middot; Since 2005</div>
          <div className="text-paper/60">Prepared for Kearny FC &middot; Confidential</div>
        </div>
      </footer>
    </main>
  );
}
