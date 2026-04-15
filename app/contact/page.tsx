import Image from "next/image";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Inquire",
  description:
    "Tell us who you're bringing and we'll build the rest. bookings@odisea-tours.com",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero with background photo */}
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 bg-ink isolate overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/photos/it-santiago-obradoiro.jpg"
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
            <span className="chapter-num text-4xl leading-none text-gold">IV</span>
            <div className="rule-label font-mono-editorial text-[0.58rem] tracking-[0.28em] uppercase text-paper/70">
              <span>The Invitation</span>
            </div>
          </div>
          <h1 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.98] tracking-[-0.015em] max-w-[18ch]">
            Tell us <span className="font-display-italic text-gold">the story.</span>
          </h1>
          <p className="mt-4 max-w-xl text-base md:text-lg text-paper/80 leading-snug">
            A real person will read every word, usually within a few hours. No autoresponder, no sales dashboard. Just a conversation.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 paper-texture">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14 grid md:grid-cols-12 gap-10">
          <aside className="md:col-span-4 md:order-2">
            <div className="border border-ink/15 p-6 paper-texture sticky top-28">
              <div className="rule-label font-mono-editorial text-[0.55rem] tracking-[0.28em] uppercase text-ink/60 mb-4">
                <span>Direct lines</span>
              </div>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="font-mono-editorial text-[0.52rem] tracking-[0.28em] uppercase text-ink/50 mb-0.5">
                    Email
                  </dt>
                  <dd>
                    <a
                      href="mailto:bookings@odisea-tours.com"
                      className="link-rule font-display text-sm"
                    >
                      bookings@odisea-tours.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono-editorial text-[0.52rem] tracking-[0.28em] uppercase text-ink/50 mb-0.5">
                    Madrid Office
                  </dt>
                  <dd className="font-mono-editorial text-xs">+34 635 745 527</dd>
                </div>
                <div>
                  <dt className="font-mono-editorial text-[0.52rem] tracking-[0.28em] uppercase text-ink/50 mb-0.5">
                    Castellón Office
                  </dt>
                  <dd className="font-mono-editorial text-xs">+34 670 059 797</dd>
                </div>
                <div className="pt-3 border-t border-ink/15">
                  <dt className="font-mono-editorial text-[0.52rem] tracking-[0.28em] uppercase text-ink/50 mb-0.5">
                    Postal
                  </dt>
                  <dd className="leading-snug text-xs">
                    Ground Agents Solutions S.L.
                    <br />
                    c/José Bellido Mor
                    <br />
                    12560 Benicassim, Castellón
                    <br />
                    Spain
                  </dd>
                </div>
              </dl>
              <div className="mt-6 flex items-center justify-between font-mono-editorial text-[0.52rem] tracking-[0.28em] uppercase text-ink/50">
                <span>40.4168° N</span>
                <span>3.7038° W</span>
              </div>
            </div>
          </aside>

          <div className="md:col-span-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
