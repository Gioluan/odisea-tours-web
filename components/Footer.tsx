"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  // Proposal pages at /for/*, /partners/*, /kearny-fc are chromeless access-granted documents.
  if (
    pathname?.startsWith("/for/") ||
    pathname?.startsWith("/partners/") ||
    pathname === "/kearny-fc"
  ) return null;
  return (
    <footer className="bg-ink text-paper pt-24 pb-10 relative overflow-hidden">
      {/* Top hairline with diamond */}
      <div className="max-w-[1680px] mx-auto px-6 md:px-10 lg:px-14">
        <div className="rule-label text-paper/50 font-mono-editorial text-[0.6rem] tracking-[0.3em] uppercase mb-20">
          <span>Fin · Chapter V · The Invitation</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          {/* Big wordmark — real brand logo */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/svg/color.svg"
              alt="Odisea Tours — Travel Specialists"
              className="w-full max-w-[640px] h-auto"
            />
            <p className="mt-10 font-display-italic text-2xl max-w-md text-paper/80">
              Twenty years of quiet craftsmanship.
              <br />
              One extraordinary journey at a time.
            </p>
          </div>

          {/* Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-10">
            <div>
              <p className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/50 mb-5">
                Navigate
              </p>
              <ul className="space-y-2.5 font-display text-xl">
                <li><Link href="/tours" className="link-rule">Tours</Link></li>
                <li><Link href="/veterans" className="link-rule">Veterans</Link></li>
                <li><Link href="/youth" className="link-rule">Youth</Link></li>
                <li><Link href="/schools" className="link-rule">Schools</Link></li>
                <li><Link href="/corporate-retreats" className="link-rule">Corporate Retreats</Link></li>
                <li><Link href="/team" className="link-rule">Team</Link></li>
                <li><Link href="/journal" className="link-rule">Journal</Link></li>
                <li><Link href="/plan-your-tour" className="link-rule">Plan a Tour</Link></li>
                <li><Link href="/usa" className="link-rule">US Clubs</Link></li>
                <li><Link href="/faq" className="link-rule">FAQ</Link></li>
                <li><Link href="/brand" className="link-rule">Brand Kit</Link></li>
                <li><Link href="/contact" className="link-rule">Contact</Link></li>
              </ul>

              <p className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/50 mt-10 mb-5">
                Destinations
              </p>
              <ul className="space-y-2.5 font-display text-xl">
                <li><Link href="/destinations" className="link-rule">All destinations</Link></li>
                <li><Link href="/destinations/barcelona" className="link-rule">Barcelona</Link></li>
                <li><Link href="/destinations/madrid" className="link-rule">Madrid</Link></li>
                <li><Link href="/destinations/valencia" className="link-rule">Valencia</Link></li>
              </ul>
            </div>

            <div>
              <p className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/50 mb-5">
                Contact
              </p>
              <ul className="space-y-2.5 text-sm text-paper/80 font-mono-editorial">
                <li>
                  <a href="mailto:bookings@odisea-tours.com" className="link-rule">
                    bookings@odisea-tours.com
                  </a>
                </li>
                <li>+34 670 059 797</li>
                <li className="pt-2">Madrid · Castellón · Barcelona</li>
              </ul>

              <p className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/50 mt-10 mb-5">
                Follow
              </p>
              <ul className="space-y-2.5 text-sm text-paper/80 font-mono-editorial">
                <li>
                  <a
                    href="https://www.instagram.com/odisea_tours/"
                    target="_blank"
                    rel="me noopener"
                    className="link-rule"
                  >
                    Instagram ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/odiseatoursEU/"
                    target="_blank"
                    rel="me noopener"
                    className="link-rule"
                  >
                    Facebook ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://g.page/r/CSYiUfmmYcrkEBE/review"
                    target="_blank"
                    rel="noopener"
                    className="link-rule"
                  >
                    Review us on Google ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-24 pt-8 border-t border-paper/12 flex flex-col md:flex-row gap-6 items-start md:items-end justify-between">
          <div className="flex items-center gap-6">
            <div className="stamp text-paper/70">
              EST.
              <br />
              2005
            </div>
            <div className="font-mono-editorial text-[0.6rem] tracking-[0.22em] uppercase text-paper/50 leading-relaxed">
              Ground Agents Solutions S.L.
              <br />
              CIF B40274763 · Benicassim, Spain
              <br />
              Licensed · Insured · Bonded
            </div>
          </div>

          <div className="flex flex-col md:items-end gap-3">
            <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono-editorial text-[0.6rem] tracking-[0.22em] uppercase">
              <Link href="/terms" className="text-paper/55 hover:text-gold transition-colors">
                Booking Terms
              </Link>
              <Link href="/faq" className="text-paper/55 hover:text-gold transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="text-paper/55 hover:text-gold transition-colors">
                Contact
              </Link>
            </div>
            <div className="font-mono-editorial text-[0.6rem] tracking-[0.22em] uppercase text-paper/40">
              © {new Date().getFullYear()} Odisea Tours. All journeys reserved.
            </div>
            <div className="font-mono-editorial text-[0.6rem] tracking-[0.22em] uppercase text-paper/30">
              AI search visibility by{" "}
              <a
                href="https://tripcite.com/reports/odisea-tours"
                target="_blank"
                rel="noopener"
                className="text-paper/55 hover:text-gold transition-colors"
              >
                Tripcite ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative coords */}
      <div className="absolute top-6 right-6 font-mono-editorial text-[0.55rem] tracking-[0.2em] text-paper/25 hidden md:block">
        40.4168° N / 3.7038° W
      </div>
    </footer>
  );
}
