type Props = {
  /** Optional override for the city or geo (e.g. "Manchester", "Sydney", "your group"). Default: "your group". */
  audience?: string;
  /** "soccer" for US/AU, "football" for UK. Default: "soccer". */
  termFor?: "soccer" | "football";
  /** Light or dark background. Default: paper. */
  variant?: "paper" | "ink";
};

const ITEMS = [
  "Airport transfers, day one to day last",
  "Coach transport across Spain, with our own vetted drivers",
  "Four-star accommodation in our network, hand-picked for groups",
  "Training facility bookings at FC Barcelona's Joan Gamper, Valencia CF's Paterna and the Spanish FA at Las Rozas",
  "Coaching staff coordination and session planning",
  "Friendly fixtures against Spanish academy or amateur sides at the right age band",
  "Stadium tours, matchday access, behind-the-scenes credentials",
  "Breakfast and dinner daily, plus vetted lunch stops on the road",
  "Bilingual on-the-ground staff every day of the tour",
  "Cultural programme running parallel for travelling family members",
  "24/7 emergency phone line, with people who actually pick up",
  "Operator licensing and insurance transparency on request",
];

export default function GroundLogistics({
  audience = "your group",
  termFor = "soccer",
  variant = "paper",
}: Props) {
  const isInk = variant === "ink";
  const bg = isInk ? "bg-ink text-paper" : "bg-paper text-ink";
  const labelColor = isInk ? "text-paper/70" : "text-ink/55";
  const borderColor = isInk ? "border-paper/20" : "border-ink/15";
  const bodyColor = isInk ? "text-paper/85" : "text-ink-soft";
  const accentBlock = isInk ? "border-gold/40 bg-gold/5" : "border-gold-deep/40 bg-gold/10";

  return (
    <section className={`${bg} py-20 md:py-24 px-6 md:px-10`}>
      <div className="max-w-[1200px] mx-auto">
        <div className={`rule-label font-mono-editorial text-[0.62rem] tracking-[0.28em] uppercase ${labelColor} mb-6`}>
          What Odisea organises in Spain
        </div>
        <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.8rem)] uppercase leading-[1.05] max-w-[26ch]">
          Flights are not in the tour. <span className="font-display-italic text-gold-deep">Every ground logistic is.</span>
        </h2>

        <div className={`mt-6 max-w-[68ch] border-l-2 ${accentBlock} pl-5 py-4`}>
          <p className={`${bodyColor} leading-relaxed text-[1.02rem]`}>
            International flights are not in our package. You or your travel agent book them, which keeps our pricing transparent and lets {audience} use loyalty programmes and group fare brokers we would not have access to. The moment your squad lands in Spain, every detail is ours, end to end.
          </p>
        </div>

        <div className={`mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-0 border ${borderColor}`}>
          {ITEMS.map((item, i) => {
            const isLastCol = (i + 1) % 3 === 0;
            const isLastRowDesktop = i >= ITEMS.length - 3;
            return (
              <div
                key={item}
                className={`p-5 md:p-6 ${!isLastRowDesktop ? `border-b ${borderColor}` : ""} ${!isLastCol ? `lg:border-r ${borderColor}` : ""} ${(i + 1) % 2 === 0 ? "" : `md:border-r ${borderColor} lg:border-r-0`} ${isLastCol ? `lg:border-r-0` : ""}`}
              >
                <div className={`font-mono-editorial text-[0.6rem] tracking-[0.22em] uppercase ${isInk ? "text-gold" : "text-gold-deep"} mb-2`}>
                  0{i + 1}
                </div>
                <p className={`${bodyColor} text-[0.95rem] leading-relaxed`}>{item}</p>
              </div>
            );
          })}
        </div>

        <p className={`mt-8 text-[0.78rem] tracking-wide ${isInk ? "text-paper/60" : "text-ink/55"} max-w-[60ch] font-mono-editorial uppercase`}>
          {termFor === "football"
            ? "If you need flight guidance, we share the carrier shortlist and connection windows so your travel agent can ticket the air."
            : "If you need flight guidance, we share the carrier shortlist and connection windows so your travel agent can ticket the air."}
        </p>
      </div>
    </section>
  );
}
