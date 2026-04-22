import Image from "next/image";
import type { PartnerProposal, PartnerProposalOption } from "@/content/partnerProposals";

function fmtUSD(n: number) {
  return "$" + Math.round(n).toLocaleString("en-US");
}

function initialsFromName(name: string) {
  const parts = name.replace(/\b(fc|sc|cf|fa|ac|club|academy|soccer|football|united|city|university|state)\b/gi, " ").trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return name.slice(0, 2).toUpperCase();
  if (parts.length === 1) return parts[0].slice(0, 3).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function OptionBlock({ option, index, commission }: { option: PartnerProposalOption; index: number; commission: number }) {
  const label = String(index + 1).padStart(2, "0");
  return (
    <section className={index % 2 === 0 ? "bg-paper py-20 md:py-28 px-6 md:px-10" : "paper-texture py-20 md:py-28 px-6 md:px-10"}>
      <div className="max-w-[1200px] mx-auto">
        <div className="rule-label font-mono-editorial text-[0.68rem] tracking-[0.28em] uppercase text-ink-muted mb-8">
          Option {label} / {option.club_name}
        </div>

        <div className="grid md:grid-cols-[220px_1fr] gap-8 md:gap-12 items-start">
          <div className="bg-paper flex items-center justify-center p-6 aspect-square border border-ink/15 shadow-sm">
            {option.logo_url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={option.logo_url} alt={`${option.club_name} logo`} className="w-full h-full object-contain" />
            ) : (
              <span className="font-display text-4xl text-ink">{initialsFromName(option.club_name)}</span>
            )}
          </div>

          <div>
            <h2 className="font-display text-[clamp(1.8rem,3.2vw,3rem)] uppercase leading-[1.02]">
              {option.club_name}
            </h2>
            <p className="mt-4 text-[clamp(1rem,1.2vw,1.15rem)] text-ink-soft leading-relaxed max-w-[56ch]">
              {option.tagline}
            </p>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-ink/15 pt-6">
              <div>
                <div className="font-mono-editorial text-[0.6rem] tracking-[0.26em] uppercase text-ink-muted">Cities</div>
                <div className="font-display text-base uppercase mt-1">{option.cities.join(" · ")}</div>
              </div>
              <div>
                <div className="font-mono-editorial text-[0.6rem] tracking-[0.26em] uppercase text-ink-muted">Nights</div>
                <div className="font-display text-base uppercase mt-1">{option.nights}</div>
              </div>
              <div>
                <div className="font-mono-editorial text-[0.6rem] tracking-[0.26em] uppercase text-ink-muted">Ideal group</div>
                <div className="font-display text-base uppercase mt-1">{option.group_size} pax</div>
                {option.group_size_note && (
                  <div className="font-mono-editorial text-[0.62rem] tracking-[0.14em] text-ink-muted mt-1 normal-case leading-snug">
                    {option.group_size_note}
                  </div>
                )}
              </div>
              <div>
                <div className="font-mono-editorial text-[0.6rem] tracking-[0.26em] uppercase text-ink-muted">Per player</div>
                <div className="font-display text-base uppercase mt-1">
                  {option.price_usd_per_person ? fmtUSD(option.price_usd_per_person) : "On request"}
                </div>
                <div className="font-mono-editorial text-[0.58rem] tracking-[0.2em] uppercase text-gold-deep mt-1">
                  Incl. {fmtUSD(commission)}/pax commission
                </div>
              </div>
            </div>

            {option.price_note && (
              <p className="mt-6 text-[0.92rem] text-ink-muted leading-relaxed max-w-[64ch] italic">
                {option.price_note}
              </p>
            )}
          </div>
        </div>

        {/* HIGHLIGHTS */}
        <div className="mt-14">
          <div className="font-mono-editorial text-[0.62rem] tracking-[0.26em] uppercase text-gold-deep mb-4">
            Tour highlights
          </div>
          <ul className="grid md:grid-cols-2 gap-x-10 gap-y-3">
            {option.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-ink-soft leading-relaxed">
                <span className="mt-[0.55rem] w-1.5 h-1.5 bg-gold flex-shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ITINERARY */}
        <div className="mt-14">
          <div className="font-mono-editorial text-[0.62rem] tracking-[0.26em] uppercase text-gold-deep mb-4">
            Sample itinerary
          </div>
          <ol className="border-t border-ink/15">
            {option.itinerary.map((d) => (
              <li key={d.day} className="grid grid-cols-[90px_1fr] md:grid-cols-[130px_1fr] gap-5 md:gap-8 py-5 border-b border-ink/15">
                <div className="font-mono-editorial text-[0.68rem] tracking-[0.22em] uppercase text-gold-deep pt-1">
                  {d.day.toUpperCase()}
                </div>
                <div>
                  <div className="font-display text-base md:text-lg uppercase leading-[1.05]">{d.title}</div>
                  <p className="mt-1.5 text-ink-muted leading-relaxed text-[0.95rem] max-w-[70ch]">{d.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* INCLUDED / EXCLUDED */}
        <div className="mt-14 grid md:grid-cols-2 gap-10">
          <div>
            <div className="font-mono-editorial text-[0.62rem] tracking-[0.26em] uppercase text-gold-deep mb-4">
              Included
            </div>
            <ul className="space-y-2">
              {option.included.map((i) => (
                <li key={i} className="flex gap-3 text-ink-soft leading-relaxed text-[0.95rem]">
                  <span className="mt-[0.45rem] w-1.5 h-1.5 bg-ink flex-shrink-0" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-mono-editorial text-[0.62rem] tracking-[0.26em] uppercase text-ink-muted mb-4">
              Not included
            </div>
            <ul className="space-y-2">
              {option.excluded.map((i) => (
                <li key={i} className="flex gap-3 text-ink-muted leading-relaxed text-[0.95rem]">
                  <span className="mt-[0.45rem] w-1.5 h-1.5 border border-ink/40 flex-shrink-0" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PartnerProposalView({ proposal }: { proposal: PartnerProposal }) {
  const hero = "/photos/odisea-tours-fcb-celebration-night.jpg";
  const waDigits = (proposal.contact_phone || "").replace(/[^\d]/g, "");
  const waLink = waDigits
    ? `https://wa.me/${waDigits}?text=${encodeURIComponent(`Hi ${proposal.contact_name}, about the Odisea partner proposal for ${proposal.partner_name}.`)}`
    : "#";
  const mailto = `mailto:${proposal.contact_email}?subject=${encodeURIComponent(`Partner proposal for ${proposal.partner_name}`)}`;

  const totalCommission = (pax: number) => proposal.commission_usd_per_player * pax;

  return (
    <main className="bg-paper text-ink">
      {/* HERO */}
      <section className="relative min-h-[100svh] text-paper overflow-hidden flex flex-col justify-between px-6 md:px-12 py-10 md:py-14">
        <div className="absolute inset-0">
          <Image src={hero} alt="" fill priority sizes="100vw" className="object-cover kenburns" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 flex items-start justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-[76px] h-[76px] bg-gold rounded-md flex flex-col items-center justify-center text-ink flex-shrink-0 px-1">
              <span className="font-mono-editorial text-[0.55rem] tracking-[0.18em] uppercase leading-none">Odisea</span>
              <span className="font-display text-[0.78rem] tracking-[0.08em] uppercase leading-none mt-1">Partner</span>
            </div>
            <div>
              <div className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/70">
                A partner proposal prepared for
              </div>
              <div className="font-display text-lg md:text-2xl uppercase leading-tight mt-1">
                {proposal.partner_name}
              </div>
              <div className="font-mono-editorial text-[0.62rem] tracking-[0.22em] uppercase text-paper/60 mt-1">
                {proposal.partner_title} · {proposal.partner_org}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="stamp text-gold -rotate-6">
              <div>
                <div>Confidential</div>
                <div className="font-display text-[0.78rem] mt-0.5 tracking-[0.18em]">ONLY FOR</div>
                <div className="font-display text-[0.72rem] mt-0.5 leading-tight tracking-[0.08em]">
                  {proposal.partner_name.toUpperCase()}
                </div>
              </div>
            </div>
            <div className="stamp text-paper/80 hidden md:inline-flex">
              <div>
                <div>EST.</div>
                <div className="font-display text-base mt-0.5">2005</div>
                <div>20 YEARS</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex-1 flex items-center">
          <h1 className="font-display text-[clamp(2.6rem,10vw,9rem)] uppercase leading-[0.92]">
            <span className="block">Spain</span>
            <span className="block"><em className="font-display-italic text-gold">Soccer</em> Tour</span>
            <span className="block font-display-italic text-gold-deep text-[0.6em]">Partnership</span>
            <span className="mt-6 flex gap-3 flex-wrap font-mono-editorial text-[0.72rem] md:text-[0.88rem] tracking-[0.22em] uppercase leading-normal">
              <span className="border border-paper px-3 py-2">2 club options</span>
              <span className="border border-paper px-3 py-2">{fmtUSD(proposal.commission_usd_per_player)}/player commission</span>
              <span className="border border-paper px-3 py-2">{proposal.territory}</span>
            </span>
          </h1>
        </div>

        <div className="relative z-10 flex justify-between gap-6 flex-wrap font-mono-editorial text-[0.62rem] tracking-[0.28em] uppercase text-paper/60">
          <div>odisea-tours.com</div>
          <div>Confidential · Partner use only</div>
          <div>{new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</div>
        </div>
      </section>

      {/* PARTNERSHIP OVERVIEW */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.68rem] tracking-[0.28em] uppercase text-ink-muted mb-8">
            01 / The partnership
          </div>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,3.4rem)] uppercase leading-[1.02] max-w-[26ch]">
            A partnership built on <em className="font-display-italic text-gold-deep">trust, credibility</em> and a fair share of every traveller you bring.
          </h2>
          <p className="mt-8 max-w-[68ch] text-[clamp(1.05rem,1.3vw,1.2rem)] leading-relaxed text-ink-soft">
            {proposal.partner_name} refers clubs, coaches and families in {proposal.territory} to Odisea Tours. Odisea operates the tour end-to-end: Spanish FA, Valencia CF, FC Barcelona training partnerships, hotels, transport, games against local Spanish opposition, and on-the-ground support.
          </p>

          <div className="mt-12 grid md:grid-cols-3 border border-ink/15">
            {[
              {
                k: "Commission",
                v: fmtUSD(proposal.commission_usd_per_player) + " / player",
                body: "Included in the per-player price quoted to the club. The family never sees it; you never have to negotiate it.",
              },
              {
                k: "Paid on deposit",
                v: "Same week",
                body: "We pay your commission in the same week every confirmed traveller pays their deposit. Not when they travel. Not net-60.",
              },
              {
                k: "Attribution",
                v: "Named partner",
                body: "Every lead quoting your name is locked to you for 12 months. No pooling, no \"who referred them first\" disputes.",
              },
            ].map((b, i) => (
              <div key={b.k} className={`p-8 ${i < 2 ? "md:border-r border-ink/15" : ""} ${i > 0 ? "border-t md:border-t-0 border-ink/15" : ""}`}>
                <div className="font-mono-editorial text-[0.6rem] tracking-[0.26em] uppercase text-ink-muted">{b.k}</div>
                <div className="font-display text-xl md:text-2xl uppercase mt-2 text-ink">{b.v}</div>
                <p className="mt-4 text-ink-soft text-[0.95rem] leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-ink-muted text-[0.92rem] leading-relaxed max-w-[72ch]">
            {proposal.commission_note}
          </p>
        </div>
      </section>

      {/* TRAINING PARTNERS / BADGES */}
      <section className="bg-ink text-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.68rem] tracking-[0.28em] uppercase text-paper/70 mb-8">
            02 / Training partners you can put your name on
          </div>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,3.4rem)] uppercase leading-[1.02] max-w-[24ch]">
            Official facilities. <em className="font-display-italic text-gold">Official coaches.</em> No middleman.
          </h2>
          <p className="mt-6 max-w-[62ch] text-paper/75 leading-relaxed">
            Every Odisea tour trains inside the same clubs that produce Spanish internationals. Not a license. Not a "partner of a partner". Direct relationships that let you tell a club director exactly what their players will do.
          </p>

          <div className="mt-14 grid md:grid-cols-3 gap-0 border border-paper/20">
            {[
              { src: "/badges/fc-barcelona.svg", name: "FC Barcelona", caption: "Training at Joan Gamper · Official FCB coaches" },
              { src: "/badges/valencia-cf.svg", name: "Valencia CF", caption: "Full sessions at VCF facilities · Official VCF staff" },
              { src: "/badges/rfef.svg", name: "Spanish FA", caption: "Accommodation + training at RFEF HQ, Las Rozas" },
            ].map((b, i) => (
              <article
                key={b.name}
                className={`p-10 flex flex-col items-center text-center ${i < 2 ? "md:border-r border-paper/20" : ""} ${i > 0 ? "border-t md:border-t-0 border-paper/20" : ""}`}
              >
                <div className="w-32 h-32 bg-paper rounded-md flex items-center justify-center p-4 mb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.src} alt={`${b.name} badge`} className="w-full h-full object-contain" />
                </div>
                <h3 className="font-display text-xl uppercase">{b.name}</h3>
                <div className="font-mono-editorial text-[0.62rem] tracking-[0.24em] uppercase text-paper/60 mt-3 max-w-[28ch]">
                  {b.caption}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OPTIONS */}
      <section className="bg-paper py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.68rem] tracking-[0.28em] uppercase text-ink-muted mb-6">
            03 / Two tours ready to quote
          </div>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,3.4rem)] uppercase leading-[1.02] max-w-[24ch]">
            Two clubs, two builds, <em className="font-display-italic text-gold-deep">same commission</em> on every traveller.
          </h2>
          <p className="mt-6 max-w-[62ch] text-ink-soft leading-relaxed">
            Both tours are live and buildable for 2026. Option 1 is a college-focused eight-night build for a 30-player university roster. Option 2 is the full 12-day family + squads package we ran for Hawaii Elite, identical format.
          </p>
        </div>
      </section>

      {proposal.options.map((opt, i) => (
        <OptionBlock key={opt.id} option={opt} index={i} commission={proposal.commission_usd_per_player} />
      ))}

      {/* COMMISSION MATH */}
      <section className="bg-ink text-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.68rem] tracking-[0.28em] uppercase text-paper/70 mb-8">
            04 / What your commission looks like
          </div>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,3.4rem)] uppercase leading-[1.02] max-w-[22ch]">
            {fmtUSD(proposal.commission_usd_per_player)} per player. <em className="font-display-italic text-gold">Every player.</em> Both tours.
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {proposal.options.map((opt) => (
              <div key={opt.id} className="bg-paper text-ink p-8 md:p-10 relative">
                <span className="absolute -top-px -left-px w-10 h-10 border-t-2 border-l-2 border-gold" />
                <span className="absolute -bottom-px -right-px w-10 h-10 border-b-2 border-r-2 border-gold" />
                <div className="font-mono-editorial text-[0.6rem] tracking-[0.26em] uppercase text-ink-muted">
                  {opt.club_name}
                </div>
                <div className="font-display text-[clamp(2rem,3vw,2.8rem)] uppercase leading-none mt-2">
                  {fmtUSD(totalCommission(opt.group_size))}
                </div>
                <div className="font-mono-editorial text-[0.7rem] tracking-[0.22em] uppercase text-ink-muted mt-2">
                  At {opt.group_size} pax · {fmtUSD(proposal.commission_usd_per_player)}/traveler
                </div>
                <div className="font-mono-editorial text-[0.6rem] tracking-[0.14em] uppercase text-ink-muted/80 mt-1">
                  Free-of-charge seats not included
                </div>
                <p className="mt-6 text-ink-soft text-[0.94rem] leading-relaxed">
                  {opt.group_size_note ? opt.group_size_note + "." : ""} Paid on deposit, in USD, by international wire or Wise.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[960px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.68rem] tracking-[0.28em] uppercase text-ink-muted mb-6">
            05 / Next step
          </div>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,3.4rem)] uppercase leading-[1.02] max-w-[24ch]">
            Check the proposals, select the dates.
          </h2>
          <p className="mt-6 text-lg leading-relaxed max-w-[60ch] text-ink-soft">
            Let&apos;s work on these tours to make them happen.
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
          <div className="text-paper/60">Prepared for {proposal.partner_name} · Confidential · Partner use only</div>
        </div>
      </footer>
    </main>
  );
}
