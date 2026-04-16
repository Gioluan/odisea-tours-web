"use client";

import Image from "next/image";
import Link from "next/link";

const TEAM = [
  {
    name: "Aitor Corres",
    role: "Founder, Odisea Tours",
    region: "Middle East Specialist",
    initials: "AC",
    linkedin: "https://www.linkedin.com/in/aitorcorres",
    photo: "/photos/aitor-corres-odisea-tours.jpg",
    bio: "Founder of Odisea Tours, with deep roots across the Middle East. Aitor opens doors with federations, clubs and venues that other operators simply can't reach.",
  },
  {
    name: "Raul Sanz",
    role: "Lead Representative",
    region: "Certified Fitness & Health Instructor / Spain",
    initials: "RS",
    linkedin: "https://www.linkedin.com/in/ra%C3%BAl-sanz-crespo-6502273b/",
    photo: "/photos/raul-sanz-odisea-tours.jpg",
    bio: "Raul is the face of every tour on the ground in Spain. A certified fitness and health instructor, he keeps your players sharp from arrival to departure.",
  },
];

const TIMELINE = [
  {
    year: "2005",
    title: "A garage in Castellon",
    detail:
      "Juan starts Odisea Tours with a landline, a second-hand coach, and one French school group who had been let down by another agency. Three months later, they returned with a second booking.",
  },
  {
    year: "2009",
    title: "The first stadium pass",
    detail:
      "A youth coach from England asks us to arrange a training visit to La Masia. A ten-year relationship with FC Barcelona's academy staff begins.",
  },
  {
    year: "2014",
    title: "Ground Agents Solutions S.L.",
    detail:
      "We incorporate as a full Spanish tour operator, licensed, insured, bonded. The team grows to six. We open the Madrid office.",
  },
  {
    year: "2019",
    title: "A thousand groups",
    detail:
      "We pass the one-thousandth group mark. We celebrate quietly, with a paella for the team, on a beach outside Valencia.",
  },
  {
    year: "2022",
    title: "The pandemic year",
    detail:
      "Every group cancels. We refund every euro without hesitation. Twelve months later, eighty-percent of those clients come back. It is the proudest moment in the company's history.",
  },
  {
    year: "2026",
    title: "Twenty years in.",
    detail:
      "Still small. Still independent. Still answering the phone ourselves at 2am when a flight gets delayed in Dublin.",
  },
];

export default function TeamClient() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 bg-ink isolate overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/photos/it-sarria.jpg"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ink/65" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14 text-paper">
          <div className="flex items-baseline gap-4 mb-3">
            <span className="chapter-num text-4xl leading-none text-gold">II</span>
            <div className="rule-label font-mono-editorial text-[0.58rem] tracking-[0.28em] uppercase text-paper/70">
              <span>The Team</span>
            </div>
          </div>
          <h1 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.98] tracking-[-0.015em] max-w-[20ch]">
            A small team. <span className="font-display-italic text-gold">A long time.</span>
          </h1>
          <p className="mt-4 max-w-xl text-base md:text-lg text-paper/80 leading-snug">
            Local specialists on the ground in Spain since 2005. Still small. Still independent.
            Still answering the phone ourselves.
          </p>
        </div>
      </section>

      {/* ─── JUAN: FOUNDER ─── */}
      <section className="paper-texture py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14 md:grid md:grid-cols-12 md:gap-10 md:items-start">
          <div className="hidden md:block md:col-span-5 reveal">
            <div className="aspect-[3/4] relative overflow-hidden corner-ticks text-ink/25">
              <Image
                src="/photos/juan-sanchez-odisea-tours-director.jpg"
                alt="Juan Sanchez, Director of Odisea Tours"
                fill
                className="object-cover"
                sizes="40vw"
              />
            </div>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/juan-b-s%C3%A1nchez-8ab64744/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-editorial text-[0.6rem] tracking-[0.22em] uppercase text-ink-muted hover:text-ink transition-colors link-rule"
              >
                LinkedIn
              </a>
              <span className="text-ink/15">|</span>
              <a
                href="mailto:juan@odisea-tours.com"
                className="font-mono-editorial text-[0.6rem] tracking-[0.22em] uppercase text-ink-muted hover:text-ink transition-colors link-rule"
              >
                juan@odisea-tours.com
              </a>
            </div>
          </div>

          <div className="md:col-span-7 reveal">
            <div className="rule-label font-mono-editorial text-[0.58rem] tracking-[0.28em] uppercase text-ink/60 mb-4">
              <span>Director, Odisea Tours</span>
            </div>

            {/* Mobile byline */}
            <div className="flex items-center gap-3 mb-5 md:hidden">
              <div className="relative w-14 h-14 shrink-0 overflow-hidden rounded-full ring-1 ring-ink/15">
                <Image
                  src="/photos/juan-sanchez-odisea-tours-director.jpg"
                  alt="Juan Sanchez"
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <p className="font-display text-base leading-none text-ink">Juan Sanchez</p>
                <p className="font-mono-editorial text-[0.52rem] tracking-[0.28em] uppercase text-ink/55 mt-1">
                  Founder, Benicassim
                </p>
              </div>
            </div>

            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.6rem)] leading-[1] text-ink mb-8">
              Juan Sanchez
            </h2>
            <div className="space-y-4 text-ink-muted text-lg leading-[1.75]">
              <p>
                With over <strong className="text-ink">20 years organizing sport tours across Spain and Europe</strong>,
                Juan knows every pitch, every stadium contact, and every shortcut to make your tour unforgettable.
              </p>
              <p>
                As former <strong className="text-ink">Spanish Liaison Officer at InspireSport</strong>,
                he was responsible for organizing hundreds of tours per year, building the connections with
                FC Barcelona, Valencia CF, the Spanish FA, and clubs across the country that Odisea Tours clients benefit from today.
              </p>
              <p>
                His passion isn&apos;t sitting behind a desk. Juan is on the ground with your group,
                at the airport, at training, at the match, making sure every day exceeds expectations.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {["Football Tours", "Basketball Tours", "Rugby Tours", "Educational Tours", "Bilingual", "Spain & Europe", "20+ Years Experience"].map((tag) => (
                <span key={tag} className="font-mono-editorial text-[0.55rem] tracking-[0.22em] uppercase text-ink-muted border border-ink/15 px-3 py-1.5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="rule-label text-ink-muted mb-16 reveal">
            <span className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase">The team</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="bg-paper p-8 md:p-10 group reveal"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="shrink-0">
                    {member.photo ? (
                      <div className="w-20 h-20 overflow-hidden corner-ticks text-ink/20">
                        <Image
                          src={member.photo}
                          alt={`${member.name}, ${member.role}, Odisea Tours`}
                          width={80}
                          height={80}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ) : (
                      <div className="w-20 h-20 border border-ink/15 flex items-center justify-center font-display text-2xl text-ink-muted">
                        {member.initials}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-xl leading-[1.1] text-ink mb-1">
                      {member.name}
                    </h3>
                    <p className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-gold mb-1">
                      {member.role}
                    </p>
                    <p className="font-mono-editorial text-[0.55rem] tracking-[0.22em] uppercase text-ink-muted">
                      {member.region}
                    </p>
                  </div>
                </div>
                <p className="text-ink-muted text-base leading-relaxed mb-5">
                  {member.bio}
                </p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono-editorial text-[0.6rem] tracking-[0.22em] uppercase text-ink-muted hover:text-ink transition-colors link-rule"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="bg-ink text-paper py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="mb-8">
            <div className="rule-label font-mono-editorial text-[0.58rem] tracking-[0.28em] uppercase text-paper/60 mb-3">
              <span>Twenty Chapters</span>
            </div>
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.6rem)] leading-[1] tracking-[-0.015em]">
              A timeline, <span className="font-display-italic text-gold">mostly quiet.</span>
            </h2>
          </div>

          <div className="divide-y divide-paper/15 border-y border-paper/15">
            {TIMELINE.map((t) => (
              <div
                key={t.year}
                className="grid md:grid-cols-12 gap-5 py-5 md:py-6 reveal items-baseline"
              >
                <div className="md:col-span-2 font-display-italic text-2xl md:text-3xl text-gold">
                  {t.year}
                </div>
                <h3 className="md:col-span-4 font-display text-lg md:text-xl tracking-tight leading-tight">
                  {t.title}
                </h3>
                <p className="md:col-span-6 text-paper/75 leading-snug text-[0.95rem]">
                  {t.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src="/photos/veterans-soccer-tour-match-vs-spanish-team.jpg"
          alt="Post-match group photo on Odisea Tours soccer tour"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/80" />

        <div className="relative max-w-[720px] mx-auto px-6 md:px-10 text-center">
          <p className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/40 mb-6 reveal">
            Your tour starts here
          </p>
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.8rem)] leading-[0.92] text-paper mb-6 reveal">
            Twenty more years
            <br />
            begin with <span className="font-display-italic text-gold">you.</span>
          </h2>
          <p className="text-paper/50 text-lg max-w-xl mx-auto mb-10 reveal">
            Tell us about your team and we&apos;ll start designing your tour.
            No commitment, no obligation. Just real answers from people who actually run the trips.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal">
            <Link href="/plan-your-tour" className="btn-editorial on-dark">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              Plan Your Tour
            </Link>
            <a
              href="https://wa.me/34670059797"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-editorial text-[0.6rem] tracking-[0.22em] uppercase text-paper/50 hover:text-paper transition-colors link-rule"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
