"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

/* ─── Hero slideshow photos ─── */
const HERO_PHOTOS = [
  {
    src: "/photos/veterans-soccer-tour-spain-match-action.jpg",
    alt: "Veterans playing against Real Madrid legends in Spain",
    caption: "Playing against Real Madrid legends",
  },
  {
    src: "/photos/veterans-soccer-tour-fc-barcelona-visit.jpg",
    alt: "Veteran soccer squad visiting FC Barcelona Ciutat Esportiva",
    caption: "FC Barcelona Ciutat Esportiva",
  },
  {
    src: "/photos/veterans-soccer-tour-real-madrid-bernabeu.jpg",
    alt: "Veterans in the Real Madrid Bernabeu press room",
    caption: "Santiago Bernabeu press room",
  },
  {
    src: "/photos/veterans-soccer-tour-spanish-football-federation.jpg",
    alt: "Veterans soccer coaches visiting the Spanish Football Federation",
    caption: "Spanish Football Federation visit",
  },
];

/* ─── Photo gallery for marquee ─── */
const GALLERY_PHOTOS = [
  { src: "/photos/veterans-soccer-tour-camp-nou-barcelona.jpg", alt: "Veterans at Camp Nou Barcelona", caption: "Camp Nou visit" },
  { src: "/photos/veterans-soccer-tour-match-vs-spanish-team.jpg", alt: "Veterans match against Spanish local team", caption: "Match vs local Spanish side" },
  { src: "/photos/veterans-soccer-tour-valencia-cf-match.jpg", alt: "Veterans soccer tour Valencia CF match", caption: "Valencia CF friendly" },
  { src: "/photos/odisea-tours-group-barcelona-cathedral.jpg", alt: "Odisea Tours group at Barcelona Cathedral", caption: "Barcelona culture" },
  { src: "/photos/veterans-soccer-tour-barcelona-la-rambla.jpg", alt: "Soccer tour group at La Rambla Barcelona", caption: "La Rambla stroll" },
  { src: "/photos/veterans-soccer-tour-camp-nou-stadium.jpg", alt: "Camp Nou stadium visit on soccer tour", caption: "Inside Camp Nou" },
];

/* ─── How it works ─── */
const STEPS = [
  { num: "01", title: "Tell us about your squad", desc: "Group size, level, dates, what you want to experience. Quick form, no commitment." },
  { num: "02", title: "We design your tour", desc: "Matches, stadiums, training, hotels, meals, transport. Built around your squad and budget." },
  { num: "03", title: "Show up and play", desc: "We meet you at the airport and stay with you every day. You just enjoy Spain." },
];

/* ─── What's included ─── */
const INCLUDED = [
  { title: "Matches vs local sides", desc: "Real fixtures on professional pitches against opponents matched to your level. Refs, kits, crowds." },
  { title: "Stadium tours", desc: "Camp Nou. Santiago Bernabeu. Mestalla. San Mames. Walk through the tunnel, sit in the press room." },
  { title: "Pro coaching sessions", desc: "Train with UEFA-licensed coaches at FC Barcelona, Valencia CF and Spanish FA facilities." },
  { title: "La Liga tickets", desc: "Watch Real Madrid, Barcelona, Atletico, Valencia, Athletic Club live in the stadium." },
  { title: "Hotels & meals", desc: "4-star hotels in central locations. Restaurants hand-picked by people who actually live here." },
  { title: "Airport transfers", desc: "Private coach pickup on arrival and drop-off on departure. No taxis, no confusion." },
];

export default function VeteransPage() {
  const [heroIndex, setHeroIndex] = useState(0);

  const nextHero = useCallback(() => {
    setHeroIndex((i) => (i + 1) % HERO_PHOTOS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextHero, 4500);
    return () => clearInterval(timer);
  }, [nextHero]);

  return (
    <>
      {/* ═══════════════════════════════════════════════════
          HERO - dark photo with editorial headline
      ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-[100dvh] flex items-end overflow-hidden">
        {/* Slideshow */}
        {HERO_PHOTOS.map((photo, i) => (
          <div
            key={photo.src}
            className="absolute inset-0 transition-opacity duration-[1200ms]"
            style={{ opacity: heroIndex === i ? 1 : 0 }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover kenburns"
              priority={i === 0}
              sizes="100vw"
            />
          </div>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-ink/65" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14 pb-20 pt-40">
          <p className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/50 mb-5 reveal">
            Veterans Football Tours to Spain
          </p>

          <h1 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.98] text-paper max-w-3xl reveal">
            Your squad. Spanish pitches.
            <br />
            <span className="font-display-italic text-gold">Memories that last.</span>
          </h1>

          <p className="mt-6 text-paper/60 text-lg sm:text-xl max-w-xl leading-relaxed reveal">
            Matches against local veteran sides, iconic stadium tours,
            professional coaching, La Liga tickets and the best of Spain.
            All organized on the ground by Odisea Tours since 2005.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-start gap-4 reveal">
            <Link href="/plan-your-tour" className="btn-editorial on-dark">
              Plan Your Veterans Tour
            </Link>
            <a
              href="https://wa.me/34670059797"
              target="_blank"
              rel="noopener noreferrer"
              className="link-rule text-paper/50 hover:text-paper transition-colors text-sm"
            >
              Or WhatsApp us directly
            </a>
          </div>

          {/* Slideshow dots + caption */}
          <div className="mt-14 flex items-center gap-4 reveal">
            <div className="flex items-center gap-2">
              {HERO_PHOTOS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setHeroIndex(i)}
                  className={`h-[3px] rounded-full transition-all duration-300 ${
                    heroIndex === i
                      ? "w-8 bg-gold"
                      : "w-3 bg-paper/20 hover:bg-paper/40"
                  }`}
                />
              ))}
            </div>
            <span className="font-mono-editorial text-[0.55rem] tracking-[0.2em] uppercase text-paper/30">
              {HERO_PHOTOS[heroIndex].caption}
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PHOTO MARQUEE
      ═══════════════════════════════════════════════════ */}
      <section className="bg-ink py-5 overflow-hidden">
        <div className="marquee-track">
          <div className="flex gap-3" style={{ width: "max-content", animation: "scroll 35s linear infinite" }}>
            {[...GALLERY_PHOTOS, ...GALLERY_PHOTOS].map((photo, i) => (
              <div key={i} className="relative w-44 h-28 overflow-hidden shrink-0 corner-ticks">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="176px"
                />
                <div className="absolute inset-0 bg-ink/20" />
                <span className="absolute bottom-1.5 left-2 font-mono-editorial text-[0.5rem] tracking-[0.18em] uppercase text-paper/50">
                  {photo.caption}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CHAPTER I - Play against Spanish legends
      ═══════════════════════════════════════════════════ */}
      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Photo */}
            <div className="relative aspect-[4/3] overflow-hidden corner-ticks reveal">
              <Image
                src="/photos/veterans-soccer-tour-spain-match-action.jpg"
                alt="Veterans playing football against Spanish legends"
                fill
                className="object-cover kenburns"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <span className="stamp absolute top-4 right-4">Match Day</span>
            </div>

            {/* Text */}
            <div className="reveal">
              <div className="rule-label text-ink-muted font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase mb-8">
                <span>Chapter I</span>
              </div>
              <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.6rem)] leading-[1] text-ink">
                Play against{" "}
                <span className="font-display-italic text-gold">Spanish legends</span>
              </h2>
              <p className="mt-5 text-ink-muted text-base leading-relaxed">
                Real matches on professional pitches against local veteran teams.
                Not a kickabout in a park. Proper fixtures with referees, full kits,
                and a crowd of locals who take the match as seriously as you do.
              </p>
              <p className="mt-4 text-ink-muted text-base leading-relaxed">
                Track every goal, every assist, every Man of the Match
                in Odisea Tours. Your all-time record lives here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CHAPTER II - Stadium experience (reversed)
      ═══════════════════════════════════════════════════ */}
      <section className="bg-paper-warm py-16 md:py-20 paper-texture">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text (left on desktop) */}
            <div className="lg:order-1 reveal">
              <div className="rule-label text-ink-muted font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase mb-8">
                <span>Chapter II</span>
              </div>
              <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.6rem)] leading-[1] text-ink">
                Live the{" "}
                <span className="font-display-italic text-gold">stadium experience</span>
              </h2>
              <p className="mt-5 text-ink-muted text-base leading-relaxed">
                Camp Nou. Santiago Bernabeu. Mestalla. San Mames.
                Walk through the tunnel, sit in the press room, stand on the pitch.
              </p>
              <p className="mt-4 text-ink-muted text-base leading-relaxed">
                The photos you take here go straight to Odisea Tours
                for the whole squad to see.
              </p>
            </div>

            {/* Photo (right on desktop) */}
            <div className="lg:order-2 relative aspect-[4/3] overflow-hidden corner-ticks reveal">
              <Image
                src="/photos/veterans-soccer-tour-bernabeu-stadium.jpg"
                alt="Veterans at the Santiago Bernabeu stadium in Madrid"
                fill
                className="object-cover kenburns"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <span className="stamp absolute top-4 right-4">Bernabeu</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CHAPTER III - Train where the pros train
      ═══════════════════════════════════════════════════ */}
      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Photo */}
            <div className="relative aspect-[4/3] overflow-hidden corner-ticks reveal">
              <Image
                src="/photos/veterans-soccer-tour-professional-training-ground.jpg"
                alt="Professional Spanish football training ground"
                fill
                className="object-cover kenburns"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <span className="stamp absolute top-4 right-4">Training</span>
            </div>

            {/* Text */}
            <div className="reveal">
              <div className="rule-label text-ink-muted font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase mb-8">
                <span>Chapter III</span>
              </div>
              <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.6rem)] leading-[1] text-ink">
                Train where the{" "}
                <span className="font-display-italic text-gold">pros train</span>
              </h2>
              <p className="mt-5 text-ink-muted text-base leading-relaxed">
                Professional-grade pitches, Spanish FA facilities,
                coaching sessions with licensed UEFA coaches.
                Not bad for a Tuesday morning.
              </p>
              <p className="mt-4 text-ink-muted text-base leading-relaxed">
                Odisea handles all the booking. You just lace up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHAT'S INCLUDED - ink background grid
      ═══════════════════════════════════════════════════ */}
      <section className="bg-ink py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="rule-label text-paper/30 font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase mb-8 reveal">
            <span>What you get</span>
          </div>
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.6rem)] leading-[1] text-paper mb-14 reveal">
            Everything your squad needs.{" "}
            <span className="font-display-italic text-gold">Nothing you don&apos;t.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-paper/10">
            {INCLUDED.map((item, i) => (
              <div
                key={i}
                className="bg-ink p-8 reveal"
              >
                <span className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-gold/70 block mb-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-paper text-lg mb-2">{item.title}</h3>
                <p className="text-paper/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          HOW IT WORKS - 3 steps
      ═══════════════════════════════════════════════════ */}
      <section id="how-it-works" className="bg-paper-warm py-16 md:py-20 paper-texture">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="rule-label text-ink-muted font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase mb-8 reveal">
            <span>How it works</span>
          </div>
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.6rem)] leading-[1] text-ink mb-14 reveal">
            Three steps.{" "}
            <span className="font-display-italic text-gold">Zero stress.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {STEPS.map((s, i) => (
              <div key={i} className="relative reveal">
                {/* Connector line (desktop only) */}
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-[60%] w-[80%] h-px bg-ink/10" />
                )}
                <span className="font-display text-[3rem] leading-none text-gold/20 block mb-2">
                  {s.num}
                </span>
                <h3 className="font-display text-ink text-xl mb-3">{s.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PARTNERS / TRUST BADGES - ink background
      ═══════════════════════════════════════════════════ */}
      <section className="bg-ink py-16 md:py-20 stripes">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14 text-center">
          <div className="rule-label text-paper/30 font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase mb-8 reveal">
            <span>On the ground since 2005</span>
          </div>
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.6rem)] leading-[1] text-paper mb-10 reveal">
            Why squads{" "}
            <span className="font-display-italic text-gold">trust Odisea</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 max-w-3xl mx-auto reveal">
            {[
              { value: "20+", label: "Years of experience" },
              { value: "100+", label: "Tours organized" },
              { value: "5+", label: "Countries served" },
              { value: "24/7", label: "Support on tour" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="font-display text-3xl sm:text-4xl text-gold block">{stat.value}</span>
                <span className="font-mono-editorial text-[0.55rem] tracking-[0.22em] uppercase text-paper/40 mt-2 block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-paper/30 reveal">
            {[
              "Licensed tour operator",
              "Spain-based operations",
              "Ground Agents Solutions S.L.",
            ].map((badge) => (
              <span key={badge} className="font-mono-editorial text-[0.55rem] tracking-[0.22em] uppercase">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA - full-bleed photo
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0">
          <Image
            src="/photos/veterans-soccer-tour-spanish-football-federation.jpg"
            alt="Veterans soccer tour group at Spanish Football Federation"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ink/75" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14 text-center">
          <p className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/40 mb-6 reveal">
            Start planning
          </p>

          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.98] text-paper max-w-2xl mx-auto mb-6 reveal">
            Your squad deserves a{" "}
            <span className="font-display-italic text-gold">proper tour.</span>
          </h2>

          <p className="text-paper/50 text-lg leading-relaxed max-w-xl mx-auto mb-10 reveal">
            Odisea Tours organizes everything on the ground.
            Matches against Spanish teams, stadium visits, training at professional
            facilities, hotels, transport, and the best local restaurants.
            You just show up and play.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 reveal">
            <Link href="/plan-your-tour" className="btn-editorial on-dark">
              Start Planning Your Tour
            </Link>
            <a
              href="https://wa.me/34670059797"
              target="_blank"
              rel="noopener noreferrer"
              className="link-rule text-paper/50 hover:text-paper transition-colors text-sm"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
