import ContactForm from "./ContactForm";

export const metadata = {
  title: "Inquire",
  description:
    "Tell us who you're bringing and we'll build the rest. bookings@odisea-tours.com",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-40 pb-16 px-6 md:px-10 lg:px-14">
        <div className="max-w-[1680px] mx-auto">
          <div className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/60 mb-10">
            Chapter IV · The Invitation
          </div>
          <h1 className="font-display text-[clamp(4rem,14vw,14rem)] leading-[0.82] tracking-[-0.01em]">
            Tell us
            <br />
            <span className="font-display-italic text-gold">
              the story.
            </span>
          </h1>
          <p className="mt-10 max-w-xl text-lg text-ink/75 leading-relaxed">
            A real person will read every word, usually within a few hours.
            No autoresponder, no sales dashboard. Just a conversation.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-[1680px] mx-auto px-6 md:px-10 lg:px-14 grid md:grid-cols-12 gap-14">
          <aside className="md:col-span-4 md:order-2">
            <div className="border border-ink/15 p-10 paper-texture sticky top-28">
              <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/60 mb-6">
                <span>Direct lines</span>
              </div>
              <dl className="space-y-6 text-sm">
                <div>
                  <dt className="font-mono-editorial text-[0.55rem] tracking-[0.28em] uppercase text-ink/50 mb-1">
                    Email
                  </dt>
                  <dd>
                    <a
                      href="mailto:bookings@odisea-tours.com"
                      className="link-rule font-display text-xl"
                    >
                      bookings@odisea-tours.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono-editorial text-[0.55rem] tracking-[0.28em] uppercase text-ink/50 mb-1">
                    Madrid Office
                  </dt>
                  <dd className="font-mono-editorial">+34 635 745 527</dd>
                </div>
                <div>
                  <dt className="font-mono-editorial text-[0.55rem] tracking-[0.28em] uppercase text-ink/50 mb-1">
                    Castellón Office
                  </dt>
                  <dd className="font-mono-editorial">+34 670 059 797</dd>
                </div>
                <div className="pt-4 border-t border-ink/15">
                  <dt className="font-mono-editorial text-[0.55rem] tracking-[0.28em] uppercase text-ink/50 mb-1">
                    Postal
                  </dt>
                  <dd className="leading-relaxed">
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
              <div className="mt-10 flex items-center justify-between font-mono-editorial text-[0.55rem] tracking-[0.28em] uppercase text-ink/50">
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
