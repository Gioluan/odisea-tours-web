import Link from "next/link";

// The revenue unit. Every news/guide article funnels the US-coach reader toward
// an Odisea tour page. Defaults to the soccer pillar; a post can override via
// ctaTourHref / ctaTourLabel to point at softball, culinary, etc.
export default function TourCTA({
  href = "/soccer-tours-spain",
  label = "See how a Spain soccer tour works",
}: {
  href?: string;
  label?: string;
}) {
  return (
    <aside className="my-14 border border-ink/15 bg-ink/[0.03] px-8 py-10">
      <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.3em] uppercase text-ink/60 mb-4">
        <span>Bring your team to Spain</span>
      </div>
      <p className="font-display text-2xl md:text-3xl leading-[1.1] tracking-tight text-ink">
        Odisea Tours has run group soccer, softball and cultural tours across
        Spain <span className="font-display-italic text-gold">since 2005</span>.
      </p>
      <p className="mt-4 text-ink/80 leading-[1.7]">
        Training sessions with professional academy coaches, friendly matches
        against Spanish sides, and every logistic handled by our team on the
        ground. Built for US coaches bringing a group for the first time.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-6">
        <Link
          href={href}
          className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-gold-deep hover:text-gold underline underline-offset-2 transition-colors"
        >
          {label} →
        </Link>
        <Link
          href="/plan-your-tour"
          className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/60 hover:text-ink transition-colors"
        >
          Plan a trip →
        </Link>
      </div>
    </aside>
  );
}
