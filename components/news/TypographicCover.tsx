// Typographic cover for hard news. Avoids third-party photo rights entirely:
// a headline on paper texture with a competition/club kicker, like a sports-desk
// front page. Two variants: "hero" (article top) and "card" (list/related grid).

export function CoverHero({
  kicker,
  title,
  date,
  readTime,
}: {
  kicker: string;
  title: string;
  date: string;
  readTime: string;
}) {
  return (
    <div className="relative overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0 opacity-[0.06] paper-texture" />
      <div className="relative max-w-[900px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="flex items-center gap-3 font-mono-editorial text-[0.6rem] tracking-[0.3em] uppercase text-gold mb-8">
          <span className="inline-block w-8 h-px bg-gold" />
          {kicker}
        </div>
        <h1 className="font-display text-[clamp(2.4rem,6vw,5rem)] leading-[0.95] tracking-[-0.01em] max-w-[20ch]">
          {title}
        </h1>
        <p className="mt-8 font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/55">
          {new Date(date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}{" "}
          · {readTime} · Odisea Tours Newsroom
        </p>
      </div>
    </div>
  );
}

export function CoverCard({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-ink text-paper corner-ticks">
      <div className="absolute inset-0 opacity-[0.06] paper-texture" />
      <div className="relative h-full flex flex-col justify-between p-6">
        <div className="font-mono-editorial text-[0.55rem] tracking-[0.3em] uppercase text-gold">
          {kicker}
        </div>
        <div className="font-display text-2xl md:text-3xl leading-[1.02] tracking-tight">
          {title}
        </div>
      </div>
    </div>
  );
}
