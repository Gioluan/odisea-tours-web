"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const HERO_PHOTOS = [
  { src: "/photos/odisea-tours-group-barcelona-cathedral.jpg", alt: "School group at Barcelona Cathedral on educational sport tour", caption: "Culture meets sport -- Barcelona Cathedral" },
  { src: "/photos/veterans-soccer-tour-bernabeu-stadium.jpg", alt: "School group visiting Santiago Bernabeu stadium tour", caption: "Santiago Bernabeu stadium tour" },
  { src: "/photos/odisea-tours-coaching-session.jpg", alt: "Coaching session for school teams during Spain sport tour", caption: "Professional coaching sessions" },
  { src: "/photos/veterans-soccer-tour-camp-nou-stadium.jpg", alt: "School football tour Camp Nou stadium visit Barcelona", caption: "Camp Nou experience" },
];

const EXPERIENCES = [
  {
    num: "01",
    title: "Football Training",
    desc: "Professional coaching sessions adapted to your students' level. Fun, structured, and inspiring -- not boot camp.",
    highlight: "FC Barcelona / Valencia CF / Spanish FA",
  },
  {
    num: "02",
    title: "Stadium Tours",
    desc: "Walk through the tunnel at the Bernabeu. Stand pitchside at Camp Nou. Sit in the press room where legends give interviews.",
    highlight: "Bernabeu / Camp Nou / Mestalla / San Mames",
  },
  {
    num: "03",
    title: "Live La Liga & Futsal",
    desc: "Attend a La Liga match with your students. Watch FC Barcelona Futsal -- fast, skillful, and electric. Unforgettable atmosphere.",
    highlight: "La Liga / FC Barcelona Futsal / Youth games",
  },
  {
    num: "04",
    title: "Cultural Experiences",
    desc: "City tours, historical sites, local gastronomy, beach visits. Spain is a classroom -- we make sure your students experience it fully.",
    highlight: "Barcelona / Madrid / Valencia / Bilbao",
  },
  {
    num: "05",
    title: "Multi-Sport Options",
    desc: "Not just football. Add basketball, rugby, or other sports to your tour. We organize facilities, coaches, and local opposition for any sport.",
    highlight: "Basketball / Rugby / Futsal / Athletics",
  },
  {
    num: "06",
    title: "Tailored to Your School",
    desc: "Every itinerary is built around your curriculum, budget, dates, and student interests. No generic packages -- your tour, your way.",
    highlight: "Custom itinerary / Any budget / Any size",
  },
];

const WHY_SAFE = [
  { title: "Licensed & insured", desc: "Fully licensed tour operator. Comprehensive insurance. Risk assessments provided." },
  { title: "Bilingual staff 24/7", desc: "Professional bilingual guides physically with your group at all times. Airport to airport." },
  { title: "Vetted accommodation", desc: "We only use hotels and residences we've personally inspected. Group-friendly, safe locations." },
  { title: "Private transport", desc: "Dedicated private coach for your group. No public transport with 30+ students." },
  { title: "24/7 emergency contact", desc: "Direct line to our team in Spain. We're one call away, any time, any day." },
  { title: "Full documentation", desc: "Detailed itineraries, risk assessments, emergency procedures. Everything your school admin needs." },
];

const SAMPLE_WEEK = [
  { day: "Mon", city: "Madrid", items: ["Arrive Madrid", "City walking tour", "Welcome dinner"] },
  { day: "Tue", city: "Madrid", items: ["Spanish FA training", "Bernabeu stadium tour", "La Liga match"] },
  { day: "Wed", city: "Valencia", items: ["Transfer to Valencia", "Valencia city tour", "Beach afternoon"] },
  { day: "Thu", city: "Valencia", items: ["Valencia CF training", "Mestalla tour", "Match vs local team"] },
  { day: "Fri", city: "Barcelona", items: ["Transfer to Barcelona", "Gothic Quarter tour", "FC Barcelona Futsal game"] },
  { day: "Sat", city: "Barcelona", items: ["FCB training session", "Camp Nou visit", "Farewell dinner"] },
  { day: "Sun", city: "Barcelona", items: ["Beach morning", "Departures"] },
];

export default function SchoolsPage() {
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
            <span>School & College Sport Tours</span>
          </div>

          <h1 className="sr-only">School Football Tours to Spain: Educational Sport Travel</h1>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.98] text-paper max-w-3xl reveal">
            Sport, culture, and{" "}
            <span className="font-display-italic text-gold">memories for life.</span>
          </h2>

          <p className="mt-6 text-paper/60 max-w-xl text-base md:text-lg leading-relaxed reveal">
            The perfect mix of football, cultural immersion, and live sporting events.
            Stadium tours, La Liga matches, FC Barcelona Futsal, coaching sessions --
            all wrapped in the best of Spain.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 reveal">
            <Link href="/plan-your-tour" className="btn-editorial on-dark">
              Plan a School Tour
            </Link>
            <a href="#what-we-offer" className="link-rule text-paper/50 hover:text-paper text-sm transition-colors">
              What we offer
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

      {/* ── What We Offer ── */}
      <section id="what-we-offer" className="bg-paper py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="rule-label text-ink-muted font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase mb-8 reveal">
            <span>Chapter I</span>
          </div>
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.6rem)] leading-[1] text-ink max-w-2xl reveal">
            Sport + culture ={" "}
            <span className="font-display-italic text-gold">the perfect school trip.</span>
          </h2>
          <p className="mt-4 text-ink-muted max-w-xl leading-relaxed reveal">
            We don&apos;t overload your schedule. Every day has the right balance of sport,
            culture, and free time -- so students stay engaged without burning out.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 reveal">
            {EXPERIENCES.map((e) => (
              <div key={e.title} className="border-t border-ink/15 pt-5">
                <span className="font-mono-editorial text-gold text-[0.6rem] tracking-[0.28em] uppercase">{e.num}</span>
                <h3 className="font-display text-ink text-lg mt-2 mb-2">{e.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed mb-3">{e.desc}</p>
                <p className="font-mono-editorial text-gold text-[0.55rem] tracking-wider uppercase">{e.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Safety & Trust ── */}
      <section className="bg-paper-warm py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="rule-label text-ink-muted font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase mb-8 reveal">
            <span>Chapter II</span>
          </div>
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.6rem)] leading-[1] text-ink max-w-2xl reveal">
            Safe, organized,{" "}
            <span className="font-display-italic text-gold">professional.</span>
          </h2>
          <p className="mt-4 text-ink-muted max-w-xl leading-relaxed reveal">
            We know what school administrators need. Full documentation, risk assessments,
            vetted accommodation, and professional bilingual staff with your group at all times.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10 reveal">
            {WHY_SAFE.map((s) => (
              <div key={s.title} className="bg-paper-warm p-6">
                <span className="inline-block w-2 h-2 rounded-full bg-gold mb-4" />
                <h3 className="font-display text-ink text-base mb-2">{s.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sample Week ── */}
      <section className="bg-ink py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="rule-label text-paper/30 font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase mb-8 reveal">
            <span>Chapter III</span>
          </div>
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.6rem)] leading-[1] text-paper max-w-2xl reveal">
            7 days. 3 cities.{" "}
            <span className="font-display-italic text-gold">One incredible trip.</span>
          </h2>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 reveal">
            {SAMPLE_WEEK.map((day) => (
              <div key={day.day} className="border border-paper/10 p-4">
                <span className="font-mono-editorial text-gold text-[0.6rem] tracking-[0.28em] uppercase block mb-1">{day.day}</span>
                <span className="font-display text-paper text-sm block mb-3">{day.city}</span>
                <div className="space-y-1.5">
                  {day.items.map((item, i) => (
                    <div key={i} className="text-paper/50 text-[0.7rem] leading-tight">{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-paper/30 text-sm max-w-lg reveal">
            Includes: La Liga match, FC Barcelona Futsal, 2 stadium tours, 2 training sessions,
            2 cultural visits, match vs local team. Every tour is custom -- this is just a starting point.
          </p>
        </div>
      </section>

      {/* ── Photo + Text ── */}
      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden reveal">
              <Image
                src="/photos/odisea-tours-group-barcelona-cathedral.jpg"
                alt="School group at Barcelona Cathedral on educational sport tour"
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
                Not just a football tour.{" "}
                <span className="font-display-italic text-gold">A real education.</span>
              </h2>
              <p className="mt-6 text-ink-muted leading-relaxed">
                Spain is a classroom. Your students train with professional coaches in the
                morning, explore Gothic cathedrals and Roman ruins in the afternoon, and
                watch La Liga under the floodlights at night.
              </p>
              <p className="mt-4 text-ink-muted leading-relaxed">
                After 20 years organizing school tours, we know the balance that keeps
                students engaged, teachers happy, and administrators confident.
              </p>
              <div className="mt-8">
                <Link href="/plan-your-tour" className="btn-editorial">
                  Plan Your School Tour
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/photos/odisea-tours-group-barcelona-cathedral.jpg" alt="School group at Barcelona on educational sport tour" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="max-w-2xl">
            <div className="rule-label text-paper/30 font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase mb-8 reveal">
              <span>Start Planning</span>
            </div>
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.6rem)] leading-[1] text-paper reveal">
              The school trip they&apos;ll{" "}
              <span className="font-display-italic text-gold">never forget.</span>
            </h2>
            <p className="mt-6 text-paper/50 max-w-xl leading-relaxed reveal">
              Sport, culture, La Liga, stadium tours, coaching sessions -- all organized
              by a bilingual team with 20 years of experience. You bring the students.
              We handle everything else.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4 reveal">
              <Link href="/plan-your-tour" className="btn-editorial on-dark">
                Plan a School Tour
              </Link>
              <a
                href="mailto:bookings@odisea-tours.com"
                className="link-rule text-paper/50 hover:text-paper text-sm transition-colors"
              >
                bookings@odisea-tours.com
              </a>
              <a href="https://wa.me/34670059797" target="_blank" rel="noopener noreferrer" className="font-mono-editorial text-[0.6rem] tracking-[0.22em] uppercase text-paper/50 hover:text-paper transition-colors link-rule">WhatsApp us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
