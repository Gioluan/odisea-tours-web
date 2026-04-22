const ITEMS = [
  "20 Years in the Field",
  "500+ Groups Guided",
  "37 Spanish Provinces",
  "La Liga Stadium Access",
  "Michelin Kitchens",
  "Flamenco Nights in Triana",
  "Bus + Rail + Private Transfer",
  "24/7 Local Concierge",
  "Founded in Castellón",
  "Bilingual Tour Leaders",
];

export default function Marquee() {
  return (
    <section className="relative bg-ink text-paper py-6 overflow-hidden border-y border-paper/10">
      <div className="flex whitespace-nowrap marquee-track">
        {[...Array(2)].map((_, dup) => (
          <div key={dup} className="flex shrink-0">
            {ITEMS.map((t, i) => (
              <span
                key={`${dup}-${i}`}
                className="flex items-center gap-8 px-8 font-display text-4xl md:text-5xl"
              >
                <span>{t}</span>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  className="text-gold shrink-0"
                  aria-hidden
                >
                  <path
                    d="M14 3 L17 11 L25 14 L17 17 L14 25 L11 17 L3 14 L11 11 Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
