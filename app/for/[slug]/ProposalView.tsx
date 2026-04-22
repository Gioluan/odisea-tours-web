import Image from "next/image";
import type { Proposal } from "@/content/proposals";

function initialsFromName(name: string) {
  const clean = name.replace(/\b(fc|sc|cf|fa|ac|club|academy|soccer|football|united|city)\b/gi, " ").trim();
  const parts = clean.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return name.slice(0, 2).toUpperCase();
  if (parts.length === 1) return parts[0].slice(0, 3).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function fmtEUR(n: number) {
  return "€" + Math.round(n).toLocaleString("en-US");
}

const ITINERARY = [
  {
    day: "Day 01",
    title: "Arrival in Barcelona",
    detail: "Airport welcome. Transfer to team hotel in the Gothic Quarter. Briefing dinner with your Spanish guide.",
  },
  {
    day: "Day 02",
    title: "FC Barcelona training",
    detail: "Training session at FC Barcelona facilities. Coaching led by official FC Barcelona staff. Afternoon: Camp Nou and La Masia academy visit.",
  },
  {
    day: "Day 03",
    title: "First fixture",
    detail: "Competitive friendly against an age-matched Spanish academy side. Match filmed and tagged per player for post-trip review.",
  },
  {
    day: "Day 04",
    title: "Transfer to Valencia",
    detail: "Coastal route with lunch stop. Check-in at Valencia team hotel. Optional families half-day: Gaudí architecture trail in Barcelona.",
  },
  {
    day: "Day 05",
    title: "Valencia CF training",
    detail: "Training at Valencia CF facilities. Coaching by official Valencia CF staff. Evening: Valencia old town walk with guide.",
  },
  {
    day: "Day 06",
    title: "Spanish FA headquarters",
    detail: "Transfer to Las Rozas. Check-in at RFEF headquarters, home base of the Spanish National Team. Training session on the same pitches La Roja uses.",
  },
  {
    day: "Day 07",
    title: "Final fixture and departure",
    detail: "Second friendly against Spanish opposition. Team awards. Transfer to Madrid airport. Farewell.",
  },
];

export default function ProposalView({ proposal }: { proposal: Proposal }) {
  const hero = proposal.hero_photo || "/photos/odisea-tours-girls-fcb-celebration-hero.jpg";
  const clubName = proposal.club_name;
  const price = proposal.price_per_player_eur;
  const logoUrl = proposal.logo_url;

  const waDigits = (proposal.contact_phone || "").replace(/[^\d]/g, "");
  const waLink = waDigits
    ? `https://wa.me/${waDigits}?text=${encodeURIComponent(`Hi ${proposal.contact_name}, about the Spain tour proposal for ${clubName}.`)}`
    : "#";
  const mailto = `mailto:${proposal.contact_email}?subject=${encodeURIComponent(`Spain tour proposal for ${clubName}`)}`;

  return (
    <main className="bg-paper text-ink">
      {/* HERO */}
      <section className="relative min-h-[100svh] text-paper overflow-hidden flex flex-col justify-between px-6 md:px-12 py-10 md:py-14">
        <div className="absolute inset-0">
          <Image
            src={hero}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover kenburns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 flex items-start justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-[76px] h-[76px] bg-paper rounded-md flex items-center justify-center text-ink overflow-hidden border border-paper/30 flex-shrink-0">
              {logoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={logoUrl} alt={`${clubName} logo`} className="w-full h-full object-contain p-2" />
              ) : (
                <span className="font-display text-xl">{initialsFromName(clubName)}</span>
              )}
            </div>
            <div>
              <div className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/70">
                A proposal prepared for
              </div>
              <div className="font-display text-lg md:text-2xl uppercase leading-tight mt-1">
                {clubName}
              </div>
            </div>
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
          <h1 className="font-display text-[clamp(3rem,11vw,10rem)] uppercase leading-[0.92]">
            <span className="block">Spain</span>
            <span className="block">
              <em className="font-display-italic text-gold">Soccer</em> Tour
            </span>
            <span className="mt-6 flex gap-3 flex-wrap font-mono-editorial text-[0.72rem] md:text-[0.88rem] tracking-[0.22em] uppercase leading-normal">
              <span className="border border-paper px-3 py-2">Boys</span>
              <span className="border border-paper px-3 py-2">Girls</span>
              <span className="border border-paper px-3 py-2">Families welcome</span>
            </span>
          </h1>
        </div>

        <div className="relative z-10 flex justify-between gap-6 flex-wrap font-mono-editorial text-[0.62rem] tracking-[0.28em] uppercase text-paper/60">
          <div>odisea-tours.com</div>
          <div>Barcelona · Valencia · Madrid</div>
          <div>{new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</div>
        </div>
      </section>

      {/* PITCH */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.68rem] tracking-[0.28em] uppercase text-ink-muted mb-8">
            01 / The offer
          </div>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,3.4rem)] uppercase leading-[1.02] max-w-[22ch]">
            A Spain soccer tour built with{" "}
            <em className="font-display-italic text-gold-deep">La Liga-linked</em> partners, for a price no operator in Europe can beat.
          </h2>
          <p className="mt-8 max-w-[68ch] text-[clamp(1.05rem,1.3vw,1.2rem)] leading-relaxed text-ink-soft">
            {clubName} plays, trains, and lives Spanish football from the inside: FC Barcelona facilities, Valencia CF coaching, and a night under the same roof as the Spanish National Team.
          </p>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-ink text-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.68rem] tracking-[0.28em] uppercase text-paper/70 mb-10">
            02 / The partners
          </div>
          <div className="grid md:grid-cols-3 border border-paper/25">
            {[
              { code: "FCB", name: "FC Barcelona", caption: "Official facilities · Official coaching", body: <>Training sessions are held <strong className="text-paper font-[800]">at FC Barcelona facilities</strong>. Your players are coached by <strong className="text-paper font-[800]">official FC Barcelona coaches</strong> on every session.</> },
              { code: "VCF", name: "Valencia CF", caption: "Official facilities · Official coaching", body: <>Training <strong className="text-paper font-[800]">at Valencia CF facilities</strong>, with <strong className="text-paper font-[800]">official Valencia CF coaching staff</strong> leading every drill.</> },
              { code: "RFEF", name: "Spanish FA", caption: "On-site accommodation", body: <>Your team <strong className="text-paper font-[800]">stays at the RFEF headquarters</strong>, home base of the Spanish National Team. A night where champions sleep.</> },
            ].map((p, i) => (
              <article key={p.code} className={`p-8 md:p-10 ${i < 2 ? "md:border-r border-paper/25" : ""} ${i > 0 ? "border-t md:border-t-0 border-paper/25" : ""}`}>
                <div className="w-16 h-16 bg-gold text-ink rounded-full flex items-center justify-center font-display text-sm tracking-wider mb-4">
                  {p.code}
                </div>
                <h3 className="font-display text-xl md:text-2xl uppercase">{p.name}</h3>
                <div className="font-mono-editorial text-[0.64rem] tracking-[0.24em] uppercase text-paper/60 mt-2">
                  {p.caption}
                </div>
                <p className="mt-4 max-w-[36ch] text-paper/75 text-[0.96rem] leading-relaxed">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.68rem] tracking-[0.28em] uppercase text-ink-muted mb-10">
            03 / What's included
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-ink/15 border border-ink/15">
            {[
              { img: "/photos/veterans-soccer-tour-camp-nou-barcelona.jpg", label: "Facilities", title: "Camp Nou + La Masia tour", body: "Stadium and academy visit. Your players walk the tunnel champions walked." },
              { img: "/photos/odisea-tours-professional-coaching.jpg", label: "Training", title: "Daily sessions with Spanish coaches", body: "Methodology straight from La Liga youth development. Not generic drills." },
              { img: "/photos/veterans-soccer-tour-valencia-cf-match.jpg", label: "Matches", title: "Fixtures vs Spanish academy teams", body: "Two or three friendlies against age-matched clubs. Filmed and tagged per player." },
              { img: "/photos/veterans-soccer-tour-spanish-football-federation.jpg", label: "Accommodation", title: "Spanish FA headquarters stay", body: "Train where the national team trains. Sleep where the national team sleeps." },
              { img: "/photos/odisea-tours-group-barcelona-cathedral.jpg", label: "Culture", title: "Barcelona + Gaudí half-day", body: "Families welcome. Real city, real food, real Spain. Not a theme park." },
              { img: "/photos/veterans-soccer-tour-real-madrid-bernabeu.jpg", label: "Optional", title: "Santiago Bernabéu stop", body: "Add Madrid for a 9th day. El Clásico rivalry, both sides, same tour." },
            ].map((f) => (
              <article key={f.title} className="bg-paper group">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={f.img}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-gold-deep mb-2">
                    {f.label}
                  </div>
                  <h4 className="font-display text-lg md:text-xl uppercase leading-[1.05]">{f.title}</h4>
                  <p className="mt-3 text-ink-muted text-[0.96rem] leading-relaxed">{f.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ITINERARY */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.68rem] tracking-[0.28em] uppercase text-ink-muted mb-10">
            04 / Sample 7-day itinerary
          </div>
          <ol className="border-t border-ink/15">
            {ITINERARY.map((d) => (
              <li key={d.day} className="grid grid-cols-[100px_1fr] md:grid-cols-[140px_1fr] gap-6 md:gap-8 py-6 border-b border-ink/15">
                <div className="font-mono-editorial text-[0.72rem] tracking-[0.22em] uppercase text-gold-deep pt-1">
                  {d.day.toUpperCase()}
                </div>
                <div>
                  <div className="font-display text-lg md:text-xl uppercase leading-[1.05]">{d.title}</div>
                  <p className="mt-2 text-ink-muted leading-relaxed max-w-[70ch]">{d.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-ink text-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-end">
          <div>
            <div className="rule-label font-mono-editorial text-[0.68rem] tracking-[0.28em] uppercase text-paper/70 mb-6">
              05 / Pricing
            </div>
            <h3 className="font-display text-[clamp(1.9rem,3.6vw,3.4rem)] uppercase leading-[1.02] max-w-[22ch]">
              Best all-in pricing in Europe for a tour at this level.
            </h3>
            <p className="mt-6 text-paper/75 leading-relaxed max-w-[56ch]">
              Flights excluded. Everything else included: hotels, meals, coach transport, Spanish guides, insurance, training, fixtures, stadium access, RFEF accommodation.
            </p>
          </div>
          <div className="relative bg-paper text-ink p-8 md:p-10 border border-paper/20">
            <span className="absolute -top-px -left-px w-10 h-10 border-t-2 border-l-2 border-gold" />
            <span className="absolute -bottom-px -right-px w-10 h-10 border-b-2 border-r-2 border-gold" />
            <div className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink-muted">
              Per player, all-in
            </div>
            <div className="font-display text-[clamp(2.4rem,3.4vw,3.4rem)] uppercase leading-none mt-2">
              {price ? fmtEUR(price) : "€ on request"}
            </div>
            <div className="font-mono-editorial text-[0.68rem] tracking-[0.24em] uppercase text-ink-muted mt-2">
              Group size {proposal.group_size} · {proposal.days} days
            </div>
            <ul className="mt-6 border-t border-ink/15">
              {["Boys & girls teams welcome", "Families travel on the same itinerary", "Deposit €500/player, balance 60 days out", "Price locked once confirmed"].map((item) => (
                <li key={item} className="py-3 border-b border-ink/15 font-mono-editorial text-[0.68rem] tracking-[0.22em] uppercase text-ink-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[960px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.68rem] tracking-[0.28em] uppercase text-ink-muted mb-6">
            06 / Next step
          </div>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,3.4rem)] uppercase leading-[1.02] max-w-[22ch]">
            One 15-minute call and we lock your dates.
          </h2>
          <p className="mt-6 text-lg leading-relaxed max-w-[56ch] text-ink-soft">
            Tell us your group size and month. We send a hard-number itinerary within 48 hours. No deposit until you say yes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={mailto} className="btn-editorial">Email {proposal.contact_email}</a>
            <a href={waLink} target="_blank" rel="noopener" className="btn-editorial">WhatsApp {proposal.contact_phone}</a>
            <a href="https://odisea-tours.com" target="_blank" rel="noopener" className="btn-editorial">odisea-tours.com</a>
          </div>

          <div className="mt-14 pt-8 border-t border-ink/15 flex items-center gap-6">
            <Image
              src="/photos/juan-sanchez-odisea-tours-director.jpg"
              alt="Juan Sanchez, Director"
              width={96}
              height={96}
              className="w-24 h-24 rounded-full object-cover border border-ink/20"
            />
            <div>
              <div className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink-muted">
                Your contact at Odisea Tours
              </div>
              <div className="font-display text-lg mt-1">{proposal.contact_name}</div>
              <div className="font-mono-editorial text-[0.68rem] tracking-[0.22em] uppercase text-ink-muted mt-1">
                Director, Ground Agents Solutions S.L.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-paper py-6 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto flex justify-between gap-4 flex-wrap font-mono-editorial text-[0.62rem] tracking-[0.28em] uppercase">
          <div>Odisea Tours · Since 2005</div>
          <div className="text-paper/60">Prepared for {clubName} · Confidential</div>
        </div>
      </footer>
    </main>
  );
}
