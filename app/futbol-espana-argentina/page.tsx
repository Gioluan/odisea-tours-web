import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE = "https://odisea-tours.com";
const CANONICAL = `${SITE}/futbol-espana-argentina`;

export const metadata: Metadata = {
  title: {
    absolute:
      "Fútbol España y Argentina: viajes para jóvenes futbolistas | Odisea Tours",
  },
  description:
    "Cómo llevar a un joven futbolista argentino a entrenar, competir y mostrarse en España. Giras de fútbol a España para clubes y academias de Argentina, organizadas por Odisea Tours desde 2005. Partidos contra equipos españoles y entrenamientos en clubes de primer nivel.",
  alternates: {
    canonical: CANONICAL,
    languages: { "es-AR": CANONICAL, es: CANONICAL, "x-default": CANONICAL },
  },
  openGraph: {
    title: "Fútbol España + Argentina | Odisea Tours",
    description:
      "Giras de fútbol a España para jóvenes futbolistas de Argentina: entrenar, competir y mostrarse ante el fútbol europeo. Organizado por Odisea Tours desde 2005.",
    url: CANONICAL,
    type: "website",
    locale: "es_ES",
    siteName: "Odisea Tours",
    images: [
      {
        url: "/photos/odisea-tours-youth-fcb-training-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Jóvenes futbolistas entrenando en un complejo de fútbol en España con Odisea Tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fútbol España + Argentina | Odisea Tours",
    description:
      "Giras de fútbol a España para jóvenes futbolistas de Argentina. Desde 2005.",
    images: ["/photos/odisea-tours-youth-fcb-training-hero.jpg"],
  },
};

const FAQS = [
  {
    q: "¿Cómo puede un joven futbolista argentino ir a probar a España?",
    a: "La vía más realista es viajar con un grupo organizado que combine entrenamientos de nivel, partidos contra equipos españoles de su edad y categoría, y visitas a clubes de referencia. Odisea Tours organiza estas giras desde 2005 y se encarga de toda la logística en España, con acompañamiento sobre el terreno. No prometemos fichajes: preparamos el escenario para que el jugador se muestre en el mejor contexto posible.",
  },
  {
    q: "¿Qué incluye una gira de fútbol a España para un club argentino?",
    a: "Una gira típica incluye alojamiento, transporte en autocar, entrenamientos, dos partidos amistosos por semana contra equipos españoles del nivel adecuado, días de estadio y acompañamiento bilingüe de principio a fin. Cada itinerario se ajusta a la edad, el nivel y el presupuesto del grupo.",
  },
  {
    q: "¿Contra quién se juega y dónde se entrena en España?",
    a: "Se entrena en complejos e instalaciones de clubes españoles de primer nivel, como Valencia CF y el Deportivo Alavés, además de días de estadio en entornos de referencia. Los partidos se disputan contra equipos españoles de academia o amateur, emparejados a la edad y el nivel de tu grupo, y se confirman por escrito antes de viajar.",
  },
  {
    q: "¿Cuánto cuesta y cuántos jugadores pueden viajar?",
    a: "El coste depende de la duración, la ciudad y el tamaño del grupo. Trabajamos con delegaciones desde una decena de jugadores hasta plantillas completas con cuerpo técnico y familias. Lo mejor es escribirnos con el número de viajeros, las edades y las fechas para armar un presupuesto por persona, sin sorpresas.",
  },
  {
    q: "¿Es seguro y hay acompañamiento en español?",
    a: "Sí. Un director de Odisea viaja con el grupo cada kilómetro, habla español, gestiona el país y está disponible las 24 horas. Los entrenamientos y las charlas se traducen cuando hace falta, aunque compartir el idioma hace que todo sea más natural para un grupo argentino.",
  },
  {
    q: "¿Ya han llevado a jóvenes argentinos a España?",
    a: "Sí. En 2021, Odisea Tours organizó la Gira Europea Valencia 2021, que llevó a once jóvenes de Tucumán a España, donde entrenaron, compitieron y visitaron Mestalla, el estadio del Valencia CF. Esa experiencia es el origen de nuestra alianza actual con BHM Fútbol Group.",
  },
];

export default function FutbolEspanaArgentinaPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Odisea Tours", item: SITE },
      {
        "@type": "ListItem",
        position: 2,
        name: "Fútbol España y Argentina",
        item: CANONICAL,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "es",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": CANONICAL,
    url: CANONICAL,
    name: "Fútbol España y Argentina: viajes para jóvenes futbolistas",
    inLanguage: "es",
    isPartOf: { "@type": "WebSite", name: "Odisea Tours", url: SITE },
    description:
      "Giras de fútbol a España para jóvenes futbolistas de Argentina, organizadas por Odisea Tours desde 2005.",
  };

  return (
    <div lang="es">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      {/* HERO */}
      <section className="relative isolate min-h-[82svh] flex items-end px-6 md:px-10 pb-16 pt-40 text-paper overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/photos/odisea-tours-youth-fcb-training-hero.jpg"
            alt="Jóvenes futbolistas entrenando en un complejo de fútbol en España"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/25 to-ink/90" />
        </div>
        <div className="relative z-10 max-w-[1100px] mx-auto w-full">
          <nav
            aria-label="Breadcrumb"
            className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/70 mb-6"
          >
            <Link href="/" className="hover:text-gold">
              Odisea Tours
            </Link>
            <span className="mx-2">/</span>
            <span className="text-paper/50">Fútbol España y Argentina</span>
          </nav>
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/70 mb-6">
            <span>Puente España + Argentina · Desde 2005</span>
          </div>
          <h1 className="font-display text-[clamp(2.3rem,6.2vw,5.2rem)] uppercase leading-[0.95] tracking-[-0.015em] max-w-[20ch]">
            Del potrero argentino <span className="font-display-italic text-gold">al fútbol español</span>
          </h1>
          <p className="mt-7 max-w-[62ch] text-paper/85 text-lg leading-relaxed">
            Un viaje de fútbol a España es la forma más directa de que un joven futbolista argentino entrene con nivel, compita contra equipos españoles y se muestre ante el fútbol europeo. Odisea Tours organiza estas giras desde 2005, y ahora, junto a BHM Fútbol Group, abre el camino para el talento del interior.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/plan-your-tour" className="btn-editorial on-dark">
              Organiza tu viaje a España
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M1 5 H13 M9 1 L13 5 L9 9" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </Link>
            <Link
              href="/journal/odisea-tours-bhm-futbol-group-alianza-argentina"
              className="btn-editorial on-dark"
            >
              Leer la alianza con BHM
            </Link>
          </div>
        </div>
      </section>

      {/* POR QUÉ ESPAÑA */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/55 mb-4">
              Capítulo I
            </div>
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[14ch]">
              Por qué <span className="font-display-italic text-gold">España</span>
            </h2>
          </div>
          <div className="md:col-span-8 space-y-5 text-ink-soft leading-relaxed text-lg max-w-[60ch]">
            <p>
              España y Argentina comparten idioma, cultura y una misma pasión por el fútbol desde hace más de un siglo. Para un chico argentino, formarse y competir en España no es un choque cultural: es una prolongación natural de su propia historia, con el balón de por medio.
            </p>
            <p>
              A eso se suma que España es una de las grandes escuelas del fútbol mundial. Es donde se construyó el juego de posición que hoy domina buena parte del fútbol europeo, y donde un jugador puede medirse contra rivales que juegan distinto, piensan distinto y exigen distinto. El vínculo cultural y el deportivo apuntan en la misma dirección.
            </p>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="bg-ink text-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/60 mb-6">
            Capítulo II · Cómo funciona
          </div>
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[26ch]">
            Cómo llevar a un jugador argentino <span className="font-display-italic text-gold">a España</span>
          </h2>
          <p className="mt-6 max-w-[60ch] text-paper/75 leading-relaxed">
            Una gira se explica en cuatro pasos. El resto lo ajustamos a la edad, el nivel y el presupuesto de cada grupo en la llamada de planificación.
          </p>
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {[
              {
                n: "01",
                t: "Entrenar con nivel",
                d: "Sesiones en instalaciones de clubes españoles de primer nivel, como Valencia CF y el Deportivo Alavés, y días de estadio en entornos de referencia.",
              },
              {
                n: "02",
                t: "Competir de verdad",
                d: "Dos partidos amistosos por semana contra equipos españoles de la edad y el nivel adecuados, confirmados por escrito antes de viajar.",
              },
              {
                n: "03",
                t: "Mostrarse",
                d: "El objetivo es que cada jugador se muestre en el mejor contexto posible, con partidos y entrenamientos que lo pongan a prueba ante el fútbol de base español.",
              },
              {
                n: "04",
                t: "Todo organizado",
                d: "Alojamiento, autocar, comidas, logística y acompañamiento bilingüe sobre el terreno, de principio a fin. Un precio por persona, sin sorpresas.",
              },
            ].map((s) => (
              <div key={s.n} className="border border-paper/15 p-8">
                <div className="font-display text-3xl text-gold leading-none mb-3">
                  {s.n}
                </div>
                <h3 className="font-display text-2xl uppercase leading-tight">
                  {s.t}
                </h3>
                <p className="mt-4 text-paper/80 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/55 mb-6">
            Capítulo III · Para quién
          </div>
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[22ch]">
            Clubes, academias y <span className="font-display-italic text-gold">familias</span>
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6 text-ink-soft leading-relaxed">
            <div className="border border-ink/15 p-7">
              <h3 className="font-display text-xl uppercase mb-3">Clubes y academias</h3>
              <p>Delegaciones juveniles que quieren medir a sus jugadores fuera de Argentina y darles una experiencia formativa de primer nivel.</p>
            </div>
            <div className="border border-ink/15 p-7">
              <h3 className="font-display text-xl uppercase mb-3">Proyectos de formación</h3>
              <p>Iniciativas del interior, como BHM Fútbol Group y la Fundación Arroyo El Tejar, que forman talento y buscan una vidriera internacional.</p>
            </div>
            <div className="border border-ink/15 p-7">
              <h3 className="font-display text-xl uppercase mb-3">Familias</h3>
              <p>Familias que quieren acompañar a sus hijos en una experiencia deportiva y cultural, con todo organizado y un adulto de Odisea sobre el terreno.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRECEDENTE / ALIANZA */}
      <section className="bg-ink text-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6 relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src="/photos/sarayaku-valencia-2021-mestalla.jpg"
              alt="Jóvenes de Tucumán en el césped de Mestalla, estadio del Valencia CF, en la Gira Europea Valencia 2021"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 520px"
            />
          </div>
          <div className="md:col-span-6">
            <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/60 mb-6">
              Capítulo IV · Ya ocurrió una vez
            </div>
            <h2 className="font-display text-[clamp(1.8rem,3.8vw,2.8rem)] uppercase leading-[1.02]">
              Valencia <span className="font-display-italic text-gold">2021</span>
            </h2>
            <p className="mt-6 text-paper/80 leading-relaxed">
              Esta no es una idea sobre el papel. En 2021, Odisea Tours organizó la Gira Europea Valencia 2021, que llevó a once jóvenes de Tucumán a España de la mano de Matías Ruiz, impulsor de lo que hoy es BHM Fútbol Group. Entrenaron, compitieron y pisaron el césped de Mestalla, el estadio del Valencia CF.
            </p>
            <p className="mt-4 text-paper/80 leading-relaxed">
              Esa experiencia es el origen de la alianza que hoy formaliza y amplía ese puente entre Argentina y España.
            </p>
            <Link
              href="/journal/odisea-tours-bhm-futbol-group-alianza-argentina"
              className="btn-editorial on-dark mt-8"
            >
              Leer la historia completa
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M1 5 H13 M9 1 L13 5 L9 9" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[820px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/55 mb-6">
            Preguntas frecuentes
          </div>
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] mb-10">
            Lo que suelen <span className="font-display-italic text-gold">preguntarnos</span>
          </h2>
          <div className="space-y-8">
            {FAQS.map((f, i) => (
              <div key={i} className="border-t border-ink/15 pt-6">
                <h3 className="font-display text-xl md:text-2xl tracking-tight text-ink mb-3">
                  {f.q}
                </h3>
                <p className="text-ink-soft leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-paper py-20 md:py-24 px-6 md:px-10 text-center">
        <div className="max-w-[720px] mx-auto">
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] uppercase leading-[1.02]">
            Llevemos a tus jugadores <span className="font-display-italic text-gold">a España</span>
          </h2>
          <p className="mt-5 text-paper/80 leading-relaxed max-w-[52ch] mx-auto">
            Cuéntanos el número de viajeros, las edades y las fechas, y te armamos un itinerario con ciudades, entrenamientos y precio por persona.
          </p>
          <div className="mt-9 flex flex-wrap gap-4 justify-center">
            <Link href="/plan-your-tour" className="btn-editorial on-dark">
              Organiza tu viaje
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M1 5 H13 M9 1 L13 5 L9 9" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </Link>
            <a
              href="https://bhmfutbol.com"
              target="_blank"
              rel="noopener"
              className="btn-editorial on-dark"
            >
              Conocer BHM Fútbol Group
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
