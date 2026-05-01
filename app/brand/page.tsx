import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Kit · Logos, Colors & Typography | Odisea Tours",
  description:
    "Press and partner brand assets for Odisea Tours: logo variants in PNG and SVG, color palette, typography, usage guidelines and contact for media inquiries.",
  alternates: { canonical: "/brand" },
  openGraph: {
    title: "Brand Kit | Odisea Tours",
    description:
      "Logos, colors, typography and usage rules for press, partners and travel agencies working with Odisea Tours.",
    url: "https://odisea-tours.com/brand",
    type: "article",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://odisea-tours.com/" },
    { "@type": "ListItem", position: 2, name: "Brand Kit", item: "https://odisea-tours.com/brand" },
  ],
};

type LogoVariant = {
  id: string;
  name: string;
  description: string;
  png: string;
  svg: string;
  bgClass: string;
  imgClass: string;
  labelTone: "light" | "dark";
};

const LOGOS: LogoVariant[] = [
  {
    id: "color",
    name: "Primary · Color on light",
    description: "Default mark. Use on paper, white or any light background where contrast holds.",
    png: "/brand/png/color.png",
    svg: "/brand/svg/color.svg",
    bgClass: "bg-paper",
    imgClass: "max-h-32 md:max-h-40",
    labelTone: "dark",
  },
  {
    id: "color-bg",
    name: "Primary · Color with background",
    description: "Self-contained lockup with brand background. For social avatars, embeds and tight crops.",
    png: "/brand/png/color-bg.png",
    svg: "/brand/svg/color-bg.svg",
    bgClass: "bg-paper-warm",
    imgClass: "max-h-40 md:max-h-48",
    labelTone: "dark",
  },
  {
    id: "black",
    name: "Mono · Black",
    description: "Single-color black mark. For print, stamps, document headers and any single-ink reproduction.",
    png: "/brand/png/black.png",
    svg: "/brand/svg/black.svg",
    bgClass: "bg-paper",
    imgClass: "max-h-32 md:max-h-40",
    labelTone: "dark",
  },
  {
    id: "white",
    name: "Mono · White",
    description: "Reverse mark for dark photography, ink backgrounds and video lower thirds.",
    png: "/brand/png/white.png",
    svg: "/brand/svg/white.svg",
    bgClass: "bg-ink",
    imgClass: "max-h-32 md:max-h-40",
    labelTone: "light",
  },
];

type Swatch = {
  name: string;
  hex: string;
  variable: string;
  role: string;
  textClass: string;
};

const SWATCHES: Swatch[] = [
  { name: "Paper", hex: "#F6F6F6", variable: "--paper", role: "Default canvas. Light cool neutral.", textClass: "text-ink" },
  { name: "Paper Warm", hex: "#EFECE4", variable: "--paper-warm", role: "Editorial sections. Cream tone for long-form.", textClass: "text-ink" },
  { name: "Ink", hex: "#111111", variable: "--ink", role: "Primary text and dark sections.", textClass: "text-paper" },
  { name: "Ink Soft", hex: "#1A1612", variable: "--ink-soft", role: "Slightly warm dark. Hero gradients.", textClass: "text-paper" },
  { name: "Ink Muted", hex: "#5A564E", variable: "--ink-muted", role: "Secondary text, captions, metadata.", textClass: "text-paper" },
  { name: "Gold", hex: "#FFB400", variable: "--gold", role: "Single-accent highlight. Used sparingly.", textClass: "text-ink" },
  { name: "Gold Deep", hex: "#C98A00", variable: "--gold-deep", role: "Aged-gold accent. Stamps and seals.", textClass: "text-paper" },
];

type FontEntry = {
  name: string;
  role: string;
  weight: string;
  preview: string;
  classes: string;
  notes: string;
};

const FONTS: FontEntry[] = [
  {
    name: "Archivo Black",
    role: "Logotype accent",
    weight: "400 (Black)",
    preview: "Odisea",
    classes: "font-display-italic text-7xl md:text-8xl",
    notes: "Reserved for the wordmark and the rare gold-highlighted accent word.",
  },
  {
    name: "Archivo ExtraBold",
    role: "Display headlines",
    weight: "800 ExtraBold · -0.02em tracking",
    preview: "Twenty Years on the Ground.",
    classes: "font-display text-5xl md:text-6xl",
    notes: "All H1s and section titles. Title case by default, uppercase for chapters.",
  },
  {
    name: "Archivo · Regular",
    role: "Body & long-form",
    weight: "400 Regular",
    preview: "Trusted by 500+ groups since 2005. Designed and run by locals on the ground in Castellón and Madrid.",
    classes: "text-lg md:text-xl leading-relaxed",
    notes: "Body copy, intro paragraphs, pull quotes. Generous line-height for editorial reading.",
  },
  {
    name: "JetBrains Mono",
    role: "Editorial captions",
    weight: "400 · 0.28em tracking · uppercase",
    preview: "Chapter II · Madrid · 40.4168° N",
    classes: "font-mono-editorial text-sm tracking-[0.28em] uppercase",
    notes: "Chapter labels, coordinates, metadata, fine print. Always uppercase, always tracked.",
  },
];

const DOS = [
  "Keep generous clear space, minimum the height of the 'O' on every side.",
  "Use the color mark first; reach for mono only when one ink is required.",
  "Reproduce the SVG wherever possible; PNGs are for fixed-size embeds only.",
  "Pair with full-bleed photography or paper-warm editorial backgrounds.",
];

const DONTS = [
  "Don't recolor, regradient, outline or add shadow to the mark.",
  "Don't stretch, skew, rotate or warp any part of the lockup.",
  "Don't place the color mark on busy photography without a paper plate behind it.",
  "Don't reconstruct the wordmark in another typeface. Only the supplied files are official.",
];

export default function BrandPage() {
  return (
    <main className="bg-paper text-ink">
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
            <span className="text-paper/50">Brand Kit</span>
          </nav>
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/70 mb-6">
            Press · Partners · Agencies
          </div>
          <h1 className="font-display text-[clamp(2.4rem,6vw,5rem)] uppercase leading-[0.95] max-w-[22ch]">
            Twenty years of <span className="font-display-italic text-gold">quiet craftsmanship</span>, in one folder.
          </h1>
          <p className="mt-6 max-w-[60ch] text-paper/85 text-lg leading-relaxed">
            Logos, colors, typography and the usage rules that keep the mark recognizable. Everything below is free to use for editorial coverage, partnership pages, agency commission listings and travel-trade directories. Please follow the simple rules at the bottom.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#logos" className="btn-editorial on-dark">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              Download Logos
            </a>
            <a href="mailto:bookings@odisea-tours.com?subject=Press%20%26%20Brand%20Inquiry" className="btn-editorial on-dark">
              Press Contact
            </a>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section id="logos" className="paper-texture py-20 md:py-28 px-6 md:px-12 border-b border-ink/10">
        <div className="max-w-[1280px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink-muted mb-6">
            <span>I · Logo</span>
          </div>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] uppercase leading-[0.95] max-w-[22ch] mb-4">
            Four marks. <span className="font-display-italic text-gold-deep">One identity.</span>
          </h2>
          <p className="max-w-[60ch] text-ink-muted text-lg leading-relaxed mb-14">
            Use the SVG when scaling matters. Use the PNG only when SVG isn&apos;t supported. The lockup itself doesn&apos;t change between the two.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {LOGOS.map((logo) => (
              <article
                key={logo.id}
                className="border border-ink/12 bg-paper flex flex-col"
              >
                <div className={`${logo.bgClass} p-12 md:p-16 flex items-center justify-center min-h-[260px] corner-ticks`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.svg}
                    alt={`Odisea Tours · ${logo.name}`}
                    className={`${logo.imgClass} w-auto`}
                  />
                </div>
                <div className="p-6 md:p-8 border-t border-ink/12">
                  <p className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink-muted mb-2">
                    Variant · {logo.id}
                  </p>
                  <h3 className="font-display text-2xl mb-2">{logo.name}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed mb-5">{logo.description}</p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={logo.svg}
                      download
                      className="font-mono-editorial text-[0.65rem] tracking-[0.22em] uppercase border border-ink px-4 py-2.5 hover:bg-ink hover:text-paper transition-colors"
                    >
                      Download SVG
                    </a>
                    <a
                      href={logo.png}
                      download
                      className="font-mono-editorial text-[0.65rem] tracking-[0.22em] uppercase border border-ink/40 text-ink-muted px-4 py-2.5 hover:border-ink hover:text-ink transition-colors"
                    >
                      Download PNG
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COLOR PALETTE */}
      <section className="bg-paper py-20 md:py-28 px-6 md:px-12 border-b border-ink/10">
        <div className="max-w-[1280px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink-muted mb-6">
            <span>II · Palette</span>
          </div>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] uppercase leading-[0.95] max-w-[22ch] mb-4">
            Paper, ink, <span className="font-display-italic text-gold-deep">a single note of gold.</span>
          </h2>
          <p className="max-w-[60ch] text-ink-muted text-lg leading-relaxed mb-14">
            Restrained on purpose. Gold appears once per page, never more. Everything else carries on paper and ink.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {SWATCHES.map((s) => (
              <div key={s.name} className="border border-ink/12 flex flex-col">
                <div
                  className={`${s.textClass} aspect-square flex flex-col justify-between p-4`}
                  style={{ backgroundColor: s.hex }}
                >
                  <span className="font-mono-editorial text-[0.55rem] tracking-[0.22em] uppercase opacity-70">
                    {s.variable}
                  </span>
                  <span className="font-display text-lg leading-tight">{s.name}</span>
                </div>
                <div className="p-3 bg-paper">
                  <p className="font-mono-editorial text-[0.65rem] tracking-[0.18em] uppercase text-ink mb-1">
                    {s.hex}
                  </p>
                  <p className="text-[0.7rem] text-ink-muted leading-snug">{s.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPOGRAPHY */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-12 border-b border-ink/10">
        <div className="max-w-[1280px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink-muted mb-6">
            <span>III · Typography</span>
          </div>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] uppercase leading-[0.95] max-w-[22ch] mb-4">
            Archivo at every weight. <span className="font-display-italic text-gold-deep">Mono for the margins.</span>
          </h2>
          <p className="max-w-[60ch] text-ink-muted text-lg leading-relaxed mb-14">
            The full family is free on Google Fonts. Use ExtraBold for display, Regular for body, JetBrains Mono only for editorial captions and metadata.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FONTS.map((f) => (
              <article key={f.name} className="bg-paper border border-ink/12 p-8 md:p-10">
                <div className="flex items-baseline justify-between gap-4 mb-6 pb-4 border-b border-ink/10">
                  <div>
                    <p className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink-muted mb-1">
                      {f.role}
                    </p>
                    <h3 className="font-display text-2xl">{f.name}</h3>
                  </div>
                  <p className="font-mono-editorial text-[0.6rem] tracking-[0.18em] text-ink-muted whitespace-nowrap">
                    {f.weight}
                  </p>
                </div>
                <p className={`${f.classes} text-ink mb-6 leading-tight break-words`}>{f.preview}</p>
                <p className="text-sm text-ink-muted leading-relaxed">{f.notes}</p>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="https://fonts.google.com/specimen/Archivo"
              target="_blank"
              rel="noopener"
              className="font-mono-editorial text-[0.65rem] tracking-[0.22em] uppercase border border-ink px-5 py-3 hover:bg-ink hover:text-paper transition-colors inline-block mr-3"
            >
              Archivo on Google Fonts
            </a>
            <a
              href="https://fonts.google.com/specimen/JetBrains+Mono"
              target="_blank"
              rel="noopener"
              className="font-mono-editorial text-[0.65rem] tracking-[0.22em] uppercase border border-ink/40 text-ink-muted px-5 py-3 hover:border-ink hover:text-ink transition-colors inline-block"
            >
              JetBrains Mono on Google Fonts
            </a>
          </div>
        </div>
      </section>

      {/* USAGE */}
      <section className="bg-paper py-20 md:py-28 px-6 md:px-12 border-b border-ink/10">
        <div className="max-w-[1280px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink-muted mb-6">
            <span>IV · Usage</span>
          </div>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] uppercase leading-[0.95] max-w-[22ch] mb-4">
            Four rules, then you&apos;re free.
          </h2>
          <p className="max-w-[60ch] text-ink-muted text-lg leading-relaxed mb-14">
            We&apos;re happy to be used. We just ask the mark stays recognizable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink-muted mb-4">
                Do
              </p>
              <ul className="space-y-4">
                {DOS.map((d, i) => (
                  <li key={i} className="flex gap-4 text-base leading-relaxed">
                    <span className="font-mono-editorial text-xs text-gold-deep pt-1.5 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink-muted mb-4">
                Don&apos;t
              </p>
              <ul className="space-y-4">
                {DONTS.map((d, i) => (
                  <li key={i} className="flex gap-4 text-base leading-relaxed">
                    <span className="font-mono-editorial text-xs text-ink-muted pt-1.5 flex-shrink-0">
                      ✕
                    </span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY FACTS */}
      <section className="bg-ink-soft text-paper py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/60 mb-6">
            <span>V · Boilerplate</span>
          </div>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] uppercase leading-[0.95] max-w-[22ch] mb-10">
            Company facts <span className="font-display-italic text-gold">for editors.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/60 mb-3">
                Short description (≈40 words)
              </p>
              <p className="text-paper/90 text-lg leading-relaxed">
                Odisea Tours is a Spain-based group travel operator running youth soccer tours, school trips, cultural journeys and corporate retreats across Spain and Europe. Designed and run by locals on the ground in Castellón and Madrid since 2005.
              </p>
            </div>
            <div>
              <p className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/60 mb-3">
                The facts
              </p>
              <dl className="space-y-3 font-mono-editorial text-sm">
                <div className="flex gap-4">
                  <dt className="text-paper/50 w-28 flex-shrink-0 uppercase tracking-[0.18em] text-[0.65rem] pt-0.5">Founded</dt>
                  <dd>2005</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="text-paper/50 w-28 flex-shrink-0 uppercase tracking-[0.18em] text-[0.65rem] pt-0.5">Legal</dt>
                  <dd>Ground Agents Solutions S.L. · CIF B40274763</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="text-paper/50 w-28 flex-shrink-0 uppercase tracking-[0.18em] text-[0.65rem] pt-0.5">Offices</dt>
                  <dd>Madrid · Castellón · Barcelona</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="text-paper/50 w-28 flex-shrink-0 uppercase tracking-[0.18em] text-[0.65rem] pt-0.5">Groups</dt>
                  <dd>500+ since 2005</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="text-paper/50 w-28 flex-shrink-0 uppercase tracking-[0.18em] text-[0.65rem] pt-0.5">Markets</dt>
                  <dd>US · UK · Australia · EU</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-paper/12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/60 mb-2">
                Press
              </p>
              <a href="mailto:bookings@odisea-tours.com" className="font-display text-xl link-rule">
                bookings@odisea-tours.com
              </a>
            </div>
            <div>
              <p className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/60 mb-2">
                Phone
              </p>
              <p className="font-mono-editorial text-sm">
                +34 635 745 527
                <br />
                +34 670 059 797
              </p>
            </div>
            <div>
              <p className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/60 mb-2">
                Social
              </p>
              <p className="font-mono-editorial text-sm">
                <a href="https://www.instagram.com/Odisea_Tours/" target="_blank" rel="noopener" className="link-rule">@Odisea_Tours</a>
                <br />
                <a href="https://www.linkedin.com/company/odisea-tours" target="_blank" rel="noopener" className="link-rule">LinkedIn</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
