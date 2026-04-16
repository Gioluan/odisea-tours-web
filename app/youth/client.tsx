"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const HERO_PHOTOS = [
  { src: "/photos/odisea-tours-professional-coaching.jpg", alt: "Professional UEFA coaching session for youth soccer players in Spain", caption: "Professional coaching at top Spanish facilities" },
  { src: "/photos/veterans-soccer-tour-fc-barcelona-visit.jpg", alt: "Youth football tour group at FC Barcelona Ciutat Esportiva", caption: "FC Barcelona training ground" },
  { src: "/photos/odisea-tours-youth-girls-happy.jpg", alt: "Happy youth girls soccer team after match on Spain tour", caption: "Smiles after a great session" },
  { src: "/photos/odisea-tours-match-vs-local-team.jpg", alt: "Youth players walking out for match against Spanish local team", caption: "Match day walkout" },
];

const TRAINING_PARTNERS = [
  { name: "FC Barcelona", desc: "Train at Joan Gamper with FCB-certified coaches. Watch youth games. Visit the museum.", num: "01" },
  { name: "Valencia CF", desc: "Full-day sessions at Valencia CF facilities. Mestalla stadium tour. Certificate ceremony.", num: "02" },
  { name: "Spanish FA (RFEF)", desc: "Train where La Roja prepares for World Cups. The ultimate football experience.", num: "03" },
  { name: "Real Madrid CF", desc: "Santiago Bernabeu stadium tour. The most impressive football venue in the world.", num: "04" },
];

const WHAT_PARENTS_LOVE = [
  { title: "Families travel together", desc: "While players train at FC Barcelona, parents visit the museum, explore the city, enjoy the beach. Everyone has their own amazing experience." },
  { title: "Bilingual staff 24/7", desc: "Our team is physically with your group from airport to airport. English and Spanish. Any problem, any question -- we're right there." },
  { title: "Balance is everything", desc: "We don't over-schedule. Training mornings, free afternoons, cultural evenings. Your players arrive home energized, not exhausted." },
  { title: "Itineraries improve for free", desc: "A La Liga match becomes available? A special training opportunity opens up? We add it at no extra cost. Because we're local." },
  { title: "Transparent pricing", desc: "No hidden fees. No last-minute charges. We tell you exactly what's included and what's at your own cost. No surprises." },
  { title: "We handle everything", desc: "Hotels, transfers, pitch bookings, match opponents, stadium tickets, restaurant reservations. You focus on coaching." },
];

const SAMPLE_DAYS = [
  { time: "08:30", activity: "Breakfast at hotel" },
  { time: "09:30", activity: "Transfer to FC Barcelona training ground" },
  { time: "10:00", activity: "Training session with FCB coaches" },
  { time: "12:00", activity: "Parents: FCB Museum & Barca Store" },
  { time: "13:00", activity: "Lunch (own cost -- family time)" },
  { time: "15:00", activity: "Free afternoon -- beach, shopping, explore" },
  { time: "18:00", activity: "Match vs local Spanish youth team" },
  { time: "20:30", activity: "Group dinner at restaurant" },
];

export default function YouthPage() {
  const [heroIndex, setHeroIndex] = useState(0);

  const nextHero = useCallback(() => setHeroIndex((i) => (i + 1) % HERO_PHOTOS.length), []);
  useEffect(() => { const t = setInterval(nextHero, 4000); return () => clearInterval(t); }, [nextHero]);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[100dvh] flex items-end overflow-hidden">
        {HERO_PHOTOS.map((photo, i) => (
          <div key={photo.src} className="absolute inset-0 transition-opacity duration-[1.2s]" style={{ opacity: heroIndex === i ? 1 : 0 }}>
            <Image src={photo.src} alt={photo.alt} fill className="object-cover kenburns" priority={i === 0} sizes="100vw" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/25" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14 pb-20 md:pb-28 w-full">
          <div className="rule-label text-paper/50 font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase mb-6 reveal">
            <span>Youth Football Tours</span>
          </div>

          <h1 className="sr-only">Youth Football Tours to Spain for Clubs & Academies</h1>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.98] text-paper max-w-3xl reveal">
            Train with the{" "}
            <span className="font-display-italic text-gold">best in Spain.</span>
          </h2>

          <p className="mt-6 text-paper/60 max-w-xl text-base md:text-lg leading-relaxed reveal">
            FC Barcelona coaches. Valencia CF facilities. Spanish FA training grounds.
            Give your young players the football experience of a lifetime -- and give
            their families an unforgettable trip to Spain.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 reveal">
            <Link href="/plan-your-tour" className="btn-editorial on-dark">
              Plan a Youth Tour
            </Link>
            <a href="#training-partners" className="link-rule text-paper/50 hover:text-paper text-sm transition-colors">
              See training partners
            </a>
          </div>

          {/* Photo dots */}
          <div className="mt-10 flex items-center gap-2 reveal">
            {HERO_PHOTOS.map((_, i) => (
              <button
                key={i}
                onClick={() => setHeroIndex(i)}
                className={`rounded-full transition-all ${heroIndex === i ? "w-6 h-1.5 bg-gold" : "w-1.5 h-1.5 bg-paper/30"}`}
              />
            ))}
            <span className="ml-3 text-paper/30 font-mono-editorial text-[0.55rem] tracking-widest uppercase">
              {HERO_PHOTOS[heroIndex].caption}
            </span>
          </div>
        </div>
      </section>

      {/* ── Training Partners ── */}
      <section id="training-partners" className="bg-paper py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="rule-label text-ink-muted font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase mb-8 reveal">
            <span>Chapter I</span>
          </div>
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.6rem)] leading-[1] text-ink max-w-2xl reveal">
            Professional clubs.{" "}
            <span className="font-display-italic text-gold">Professional coaches.</span>
          </h2>
          <p className="mt-4 text-ink-muted max-w-xl leading-relaxed reveal">
            Your players train at the same facilities as La Liga professionals -- with
            coaches who develop the next generation of Spanish football.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-px bg-ink/10 border border-ink/10 reveal">
            {TRAINING_PARTNERS.map((p) => (
              <div key={p.name} className="bg-paper p-8">
                <span className="font-mono-editorial text-gold text-[0.6rem] tracking-[0.28em] uppercase">{p.num}</span>
                <h3 className="font-display text-ink text-xl mt-2 mb-3">{p.name}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-ink-muted text-sm reveal">
            Plus Real Madrid CF, Malaga CF, Espanyol, and more -- we tailor every tour to your group.
          </p>
        </div>
      </section>

      {/* ── What Parents Love ── */}
      <section className="bg-paper-warm py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="rule-label text-ink-muted font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase mb-8 reveal">
            <span>Chapter II</span>
          </div>
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.6rem)] leading-[1] text-ink max-w-2xl reveal">
            Your players develop.{" "}
            <span className="font-display-italic text-gold">Your families enjoy.</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 reveal">
            {WHAT_PARENTS_LOVE.map((f, i) => (
              <div key={f.title} className="border-t border-ink/15 pt-5">
                <span className="inline-block w-2 h-2 rounded-full bg-gold mb-4" />
                <h3 className="font-display text-ink text-base mb-2">{f.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sample Day ── */}
      <section className="bg-ink py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="rule-label text-paper/30 font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase mb-8 reveal">
            <span>Chapter III</span>
          </div>
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.6rem)] leading-[1] text-paper max-w-2xl reveal">
            Training, free time, match day --{" "}
            <span className="font-display-italic text-gold">perfectly balanced.</span>
          </h2>

          <div className="mt-12 max-w-xl reveal">
            {SAMPLE_DAYS.map((item, i) => (
              <div key={i} className="flex items-baseline gap-6 py-3 border-b border-paper/10 last:border-0">
                <span className="font-mono-editorial text-paper/30 text-[0.65rem] tracking-wider w-12 shrink-0">{item.time}</span>
                <span className="text-paper/80 text-sm">{item.activity}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-paper/30 text-sm max-w-lg reveal">
            Every itinerary is custom-built for your group. This is just an example --
            yours will be tailored to your players&apos; ages, level, and your families&apos; interests.
          </p>
        </div>
      </section>

      {/* ── Photo + Text ── */}
      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden reveal">
              <Image
                src="/photos/odisea-tours-youth-girls-happy.jpg"
                alt="Happy youth girls football team on Spain tour"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="corner-ticks" />
            </div>
            <div className="reveal">
              <div className="rule-label text-ink-muted font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase mb-8">
                <span>Chapter IV</span>
              </div>
              <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.6rem)] leading-[1] text-ink">
                They come home saying it was the{" "}
                <span className="font-display-italic text-gold">best trip of their lives.</span>
              </h2>
              <p className="mt-6 text-ink-muted leading-relaxed">
                Every tour we organize creates memories that last a lifetime. The training
                sessions push players to grow. The stadium visits inspire them. The matches
                test them. And the free time -- the beach, the food, the culture -- brings
                everyone together.
              </p>
              <p className="mt-4 text-ink-muted leading-relaxed">
                After 20 years and hundreds of youth tours, we know exactly how to build
                an itinerary that excites players, reassures parents, and makes coaches
                look like heroes.
              </p>
              <div className="mt-8">
                <Link href="/plan-your-tour" className="btn-editorial">
                  Plan Your Youth Tour
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/photos/odisea-tours-match-vs-local-team.jpg" alt="Youth match walkout on Spain football tour" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="max-w-2xl">
            <div className="rule-label text-paper/30 font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase mb-8 reveal">
              <span>Start Planning</span>
            </div>
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.6rem)] leading-[1] text-paper reveal">
              Give your players the experience they{" "}
              <span className="font-display-italic text-gold">deserve.</span>
            </h2>
            <p className="mt-6 text-paper/50 max-w-xl leading-relaxed reveal">
              FC Barcelona. Valencia CF. Spanish FA. Stadium tours. Matches against local
              teams. Beach days. Culture. All organized by someone with 20 years of
              experience who&apos;ll be with your group every step of the way.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4 reveal">
              <Link href="/plan-your-tour" className="btn-editorial on-dark">
                Plan Your Youth Tour
              </Link>
              <a
                href="https://wa.me/34670059797"
                target="_blank"
                rel="noopener noreferrer"
                className="link-rule text-paper/50 hover:text-paper text-sm transition-colors"
              >
                WhatsApp Juan
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
