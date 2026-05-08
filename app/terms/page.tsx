import Link from "next/link";
import type { Metadata } from "next";

const SITE = "https://odisea-tours.com";
const LAST_UPDATED = "2026-05-06";

export const metadata: Metadata = {
  title: "Booking Terms & Conditions | Odisea Tours",
  description:
    "Booking terms for Odisea Tours group travel in Spain. Operated by Ground Agents Solutions S.L. (CIF B40274763), Benicassim, Castellón, Spain. Since 2005.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Booking Terms & Conditions | Odisea Tours",
    description:
      "The terms that apply to every Odisea Tours group booking. Plain English, governed by Spanish law.",
    url: `${SITE}/terms`,
    type: "article",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: "Terms & Conditions", item: `${SITE}/terms` },
  ],
};

const SECTIONS = [
  { id: "parties", label: "01. Who you are contracting with" },
  { id: "third-parties", label: "02. Third-party operators" },
  { id: "booking", label: "03. Booking and confirmation" },
  { id: "payments", label: "04. Payments and deposits" },
  { id: "cancellation", label: "05. Cancellation and refunds" },
  { id: "changes", label: "06. Changes to your tour" },
  { id: "insurance", label: "07. Travel insurance" },
  { id: "documents", label: "08. Passports, visas and entry requirements" },
  { id: "conduct", label: "09. Group leader and participant conduct" },
  { id: "liability", label: "10. Our liability" },
  { id: "force-majeure", label: "11. Force majeure" },
  { id: "complaints", label: "12. Complaints" },
  { id: "data", label: "13. Data protection" },
  { id: "law", label: "14. Governing law" },
];

export default function TermsPage() {
  return (
    <main className="bg-paper text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* HERO */}
      <section className="bg-ink text-paper pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto">
          <nav
            aria-label="Breadcrumb"
            className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/70 mb-6"
          >
            <Link href="/" className="hover:text-gold">
              Odisea Tours
            </Link>
            <span className="mx-2">/</span>
            <span className="text-paper/50">Terms &amp; Conditions</span>
          </nav>
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/70 mb-6">
            Booking terms
          </div>
          <h1 className="font-display text-[clamp(2.4rem,6vw,5rem)] uppercase leading-[0.95] max-w-[22ch]">
            The agreement between{" "}
            <span className="font-display-italic text-gold">your group and ours.</span>
          </h1>
          <p className="mt-6 max-w-[64ch] text-paper/85 text-lg leading-relaxed">
            These terms apply to every group booking made with Odisea Tours. They are written in plain English and governed by Spanish law. The specific commercial terms of your trip (price, deposit schedule, cancellation deadlines and inclusions) are confirmed in your written booking proposal, which forms part of this contract.
          </p>
          <p className="mt-6 font-mono-editorial text-[0.62rem] tracking-[0.26em] uppercase text-paper/55">
            Last updated · {new Date(LAST_UPDATED).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" })}
          </p>
        </div>
      </section>

      {/* TABLE OF CONTENTS */}
      <section className="paper-texture py-12 md:py-14 px-6 md:px-10 border-b border-ink/10">
        <div className="max-w-[1100px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/55 mb-6">
            On this page
          </div>
          <ol className="grid md:grid-cols-2 gap-x-10 gap-y-2">
            {SECTIONS.map((s) => (
              <li key={s.id} className="border-b border-ink/10 py-2">
                <a
                  href={`#${s.id}`}
                  className="font-mono-editorial text-[0.7rem] tracking-[0.18em] uppercase text-ink/75 hover:text-gold-deep"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* BODY */}
      <article className="paper-texture py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-[820px] mx-auto space-y-14 text-[1.02rem] leading-[1.7] text-ink/85">
          <Section id="parties" title="01. Who you are contracting with">
            <p>
              Odisea Tours is the trading name of <strong>Ground Agents Solutions, S.L.</strong>, a Spanish limited company registered in the Castellón Mercantile Registry, CIF <strong>B40274763</strong>, with registered address at c/José Bellido Mor, 12560 Benicassim, Castellón, Spain.
            </p>
            <p>
              We act as the organiser of the package travel arrangements described in your booking proposal, in accordance with Spanish Royal Decree-Law 23/2018 of 21 December (transposing EU Directive 2015/2302 on package travel and linked travel arrangements). The operational components of every tour (accommodation, ground transport, stadium tours, training sessions, clinics, cultural activities, food and beverage providers and any sports or adventure activities) are delivered by independent third-party operators. Our role is to design the tour, contract those operators on your behalf and coordinate them in the field. See section 02 below for the detail.
            </p>
            <p>
              In these terms, &quot;<strong>you</strong>&quot; means the lead booker who signs the proposal, and on whose behalf you make the booking for every member of your group. &quot;<strong>We</strong>&quot;, &quot;<strong>us</strong>&quot; and &quot;<strong>Odisea</strong>&quot; mean Ground Agents Solutions, S.L.
            </p>
          </Section>

          <Section id="third-parties" title="02. Third-party operators">
            <p>
              Odisea designs and coordinates your tour, but the on-the-ground services that make up your itinerary are operated by independent specialist providers. Each of those providers operates under their own terms and conditions and carries their own civil liability and operator insurance for the services they deliver. Without limiting the generality of this clause, this includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-gold-deep">
              <li>
                <strong>Stadium tours and football experiences</strong> (FC Barcelona / Spotify Camp Nou, Real Madrid / Santiago Bernabéu, Valencia CF / Mestalla, RCD Espanyol, Atlético de Madrid and others). These are operated by the clubs themselves through their official tour and hospitality programmes; Odisea purchases the tickets and coordinates the visit, but the experience inside the stadium is run entirely by the club.
              </li>
              <li>
                <strong>Football clinics, training sessions and friendly fixtures</strong> with Spanish clubs, federations and academies. These are run by the host club, federation or academy under their own coaching staff, facility rules and insurance.
              </li>
              <li>
                <strong>Sports and adventure activities</strong> that may form part of your tour (for example horse riding, cycling, kayaking, sailing, hiking with a guide). When included, these are subcontracted to specialist licensed operators in Spain who provide their own qualified instructors, equipment and operator liability insurance.
              </li>
              <li>
                <strong>Ground transport</strong> (private coaches, minibuses, transfer vehicles). These are provided by licensed Spanish transport operators who carry the compulsory passenger insurance required by Spanish and EU regulation.
              </li>
              <li>
                <strong>Accommodation</strong> (hotels, residences, hostels). The hotelier is responsible for the safety and condition of their premises and the conduct of their staff.
              </li>
              <li>
                <strong>Restaurants, cultural venues and ticketed attractions</strong>. Each is responsible for their own premises and service.
              </li>
            </ul>
            <p>
              <strong>What this means for your group.</strong> Where loss, injury or damage is caused by a third-party operator, the operator is responsible for it under their own contract and insurance. We will assist you in pursuing a claim against them and will share the documentation you need, but we are not the responsible party. We recommend that we are contacted as soon as anything goes wrong, so that we can help you resolve it on the spot or escalate it with the operator.
            </p>
            <p>
              <strong>Active participation in sports.</strong> Where members of your group take part in football, training, fixtures, tournaments or any other physical activity, they participate as athletes at their own risk in the same way they would in their home country. The host club, academy or activity operator is responsible for the safety of the session within the bounds of their own duty of care and insurance. Each participant must hold comprehensive sports and travel insurance covering the activities of the trip (see section 07).
            </p>
          </Section>

          <Section id="booking" title="03. Booking and confirmation">
            <p>
              A booking is made when you sign the written proposal we send you and pay the deposit set out in it. From that moment a binding contract exists between your group and Odisea on the terms of the proposal and these conditions.
            </p>
            <p>
              The lead booker confirms that they are at least 18 years old, have authority to contract on behalf of every member of the group, and have shared these terms with them. The lead booker is responsible for collecting and forwarding any information we need (full names, dates of birth, passport numbers, dietary requirements, medical conditions and emergency contacts) by the deadlines set out in the proposal.
            </p>
            <p>
              We reserve the right to refuse a booking at our reasonable discretion, including where the proposed dates are no longer available, where a participant has a history of disruptive behaviour on a previous Odisea trip, or where we cannot operate the requested itinerary safely.
            </p>
          </Section>

          <Section id="payments" title="04. Payments and deposits">
            <p>
              The deposit, instalment dates and final balance for your trip are set out in your proposal. Unless your proposal says otherwise, the final balance is due no later than 60 days before the first day of travel. For bookings made within 60 days of departure, the full price is due at the time of booking.
            </p>
            <p>
              All prices are quoted in the currency of the proposal (typically euros). Bank transfer fees are paid by the sender. Card payments are processed through our payment provider and are subject to the surcharge, if any, disclosed at checkout.
            </p>
            <p>
              If a payment is not received by the deadline in your proposal, we will contact you. If the payment remains outstanding after a reasonable cure period, we may treat the booking as cancelled by you and apply the cancellation charges in section 04.
            </p>
          </Section>

          <Section id="cancellation" title="05. Cancellation and refunds">
            <p>
              Group tours involve advance commitments to hotels, coach operators, training facilities and ticketed events. The amount we can refund if you cancel depends on how close to departure the cancellation is made and on the supplier terms in force at that point.
            </p>
            <p>
              Your proposal sets out the specific cancellation schedule for your trip. As a general guide, the deposit is non-refundable once paid, and cancellation charges scale with proximity to departure (typically 25% of the trip price if cancelled 60 to 30 days before departure, 50% if cancelled 29 to 15 days before, and 100% within 14 days). The exact figures in your proposal apply.
            </p>
            <p>
              If we cancel your trip before departure for reasons other than force majeure (see section 10), you will receive a full refund of all sums paid to Odisea, or the option to transfer to an equivalent trip on alternative dates, at your choice.
            </p>
            <p>
              Individual participants who drop out after the booking is confirmed do not entitle the group to a refund unless we are able to resell the place. We will use reasonable efforts to do so.
            </p>
          </Section>

          <Section id="changes" title="06. Changes to your tour">
            <p>
              The itinerary in your proposal is the planned shape of the trip. From time to time we make changes to it for reasons including weather, fixture rescheduling at partner clubs, road closures, security advice or supplier availability. Where a change is minor we will let you know in good time. Where a change is significant (a change of resort area, a downgrade in accommodation category, or a reduction of more than one day at a confirmed training partner), you may either accept the change or cancel and receive a full refund.
            </p>
            <p>
              You may request changes to your booking up to the deadlines set out in your proposal. We will do our best to accommodate them, but we cannot guarantee availability and supplier change fees may apply.
            </p>
          </Section>

          <Section id="insurance" title="07. Travel insurance">
            <p>
              Comprehensive travel insurance is <strong>mandatory</strong> for every participant on every Odisea trip. Your insurance must cover, as a minimum: medical expenses and emergency repatriation, trip cancellation and curtailment, lost luggage and personal liability. For sports tours, the policy must additionally cover the specific activity that the participant will take part in (training, friendly fixtures, tournament play, and any sport or adventure activity included in the itinerary). For minors, the policy must accept the child as a covered participant.
            </p>
            <p>
              We are not authorised to sell or recommend a specific insurance product. The lead booker is responsible for confirming, in writing, that every member of the group holds adequate insurance from the date of booking to the date of return, and for sharing the insurer name and policy number with us no later than thirty (30) days before departure. A participant who arrives without valid insurance may be refused boarding of group transport, refused access to training and fixtures, or removed from the trip at the lead booker&apos;s expense, with no refund due.
            </p>
            <p>
              Travel insurance covers risks that are not covered by the operator insurance described in section 02 (such as personal accident, individual illness, theft of personal belongings and curtailment of the trip for personal reasons). The two insurances are complementary and both are required.
            </p>
          </Section>

          <Section id="documents" title="08. Passports, visas and entry requirements">
            <p>
              You are responsible for ensuring that every member of the group holds a passport valid for at least three months beyond the date of return, and any visa or other entry document required for travel to Spain (and to any other country in the itinerary). For US, Canadian, Australian, UK and EU passport holders, a Schengen visa is not required for short stays, but the EU Entry/Exit System (EES) and ETIAS authorisation may apply at the time of travel. Check current requirements with your nearest Spanish consulate.
            </p>
            <p>
              Minors travelling without both parents may need additional documentation to enter or leave Spain. We will flag this in your proposal where it applies, but the lead booker is responsible for the documentation itself.
            </p>
            <p>
              We are not liable for missed travel or denied entry caused by missing or invalid travel documents.
            </p>
          </Section>

          <Section id="conduct" title="09. Group leader and participant conduct">
            <p>
              Sports and school tours are run under the supervision of the group leader you nominate (typically the head coach, athletic director, teacher or department chair). The group leader is responsible for the safeguarding, discipline and welfare of the group during the trip, supported by Odisea&apos;s ground staff.
            </p>
            <p>
              Every participant agrees to behave reasonably, to follow the lawful instructions of the group leader, the Odisea team and our suppliers (drivers, hotel staff, training-venue staff), and to respect the laws and customs of Spain. We reserve the right to remove from the trip, at the lead booker&apos;s expense, any participant whose behaviour endangers others, causes serious damage to property, or significantly disrupts the running of the tour. No refund is due in that case.
            </p>
          </Section>

          <Section id="liability" title="10. Our liability">
            <p>
              We are responsible for the proper performance of the travel services included in your package, in line with Royal Decree-Law 23/2018. If a service is not performed or is performed poorly, we will use reasonable efforts to put it right at no extra cost. If we are unable to do so, you may be entitled to a price reduction or compensation, except where the failure is attributable to you, to a third party unconnected with the supply of services, or to unavoidable and extraordinary circumstances.
            </p>
            <p>
              Subject to the paragraph immediately below, we are not liable for loss, injury, illness or damage caused by the act or default of a third-party operator described in section 02, where that operator carries its own civil liability and operator insurance for the service it delivers. In those cases the participant&apos;s recourse is against the operator and, where applicable, against their own travel and sports insurance. We will provide reasonable assistance in identifying the responsible operator and supporting any claim.
            </p>
            <p>
              Our maximum liability for any non-personal-injury claim arising out of a booking is limited to three times the price paid for the affected participant&apos;s package, in accordance with Article 161.6 of Royal Decree-Law 23/2018. International conventions (Warsaw, Montreal, Athens) limit the liability of air, sea and rail carriers; where they apply, our liability is correspondingly limited.
            </p>
            <p>
              We do not exclude or limit liability for death or personal injury caused by our negligence, for fraud or fraudulent misrepresentation, or for any liability that cannot be excluded under Spanish law.
            </p>
          </Section>

          <Section id="force-majeure" title="11. Force majeure">
            <p>
              Neither party is liable for any failure or delay in performing its obligations caused by an unavoidable and extraordinary circumstance beyond its reasonable control. This includes (without limitation) war, civil unrest, terrorism, government action, labour disputes affecting third parties, natural disasters, fires, floods, epidemics, pandemics, public-health restrictions, airspace closures and adverse weather that materially affects the itinerary.
            </p>
            <p>
              In a force majeure situation we will work with you in good faith to find an alternative (rescheduling the trip, or substituting affected services with comparable ones) before considering the trip cancelled. Where supplier deposits cannot be recovered, those amounts are not refundable.
            </p>
          </Section>

          <Section id="complaints" title="12. Complaints">
            <p>
              If something goes wrong during the trip, please tell the Odisea ground team immediately so we can fix it on the spot. Most issues can be resolved within hours when raised in real time.
            </p>
            <p>
              If a problem is not resolved to your satisfaction during the trip, please write to{" "}
              <a href="mailto:bookings@odisea-tours.com" className="text-gold-deep underline underline-offset-2 hover:text-gold">
                bookings@odisea-tours.com
              </a>{" "}
              within 30 days of your return, with a description of the issue and any supporting evidence. We aim to acknowledge complaints within 5 working days and respond substantively within 28 days.
            </p>
            <p>
              Spanish residents may also use the European Online Dispute Resolution platform at{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-deep underline underline-offset-2 hover:text-gold"
              >
                ec.europa.eu/consumers/odr
              </a>
              .
            </p>
          </Section>

          <Section id="data" title="13. Data protection">
            <p>
              Ground Agents Solutions, S.L. is the data controller for personal data you share with us. We process the data of group members (names, dates of birth, passport details, medical and dietary information) only for the purpose of organising and running your trip, and we share it with suppliers (hotels, training partners, transport providers, insurers, emergency services) only as necessary for that purpose.
            </p>
            <p>
              You have the rights to access, rectify, erase, restrict, port and object to the processing of your personal data under the EU General Data Protection Regulation (Regulation 2016/679) and the Spanish Organic Law 3/2018. To exercise any of these rights, write to{" "}
              <a href="mailto:bookings@odisea-tours.com" className="text-gold-deep underline underline-offset-2 hover:text-gold">
                bookings@odisea-tours.com
              </a>
              . You also have the right to lodge a complaint with the Spanish Data Protection Agency (AEPD) at{" "}
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-deep underline underline-offset-2 hover:text-gold"
              >
                aepd.es
              </a>
              .
            </p>
          </Section>

          <Section id="law" title="14. Governing law">
            <p>
              This contract is governed by Spanish law. The courts of Castellón have exclusive jurisdiction over any dispute arising out of it, save where Spanish or EU consumer law gives you the right to bring proceedings before the courts of your country of residence.
            </p>
          </Section>

          {/* CONTACT BLOCK */}
          <aside className="border border-ink/15 p-8 md:p-10 mt-16">
            <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/55 mb-4">
              Questions about these terms
            </div>
            <p className="text-ink/85 leading-relaxed">
              Write to{" "}
              <a href="mailto:bookings@odisea-tours.com" className="text-gold-deep underline underline-offset-2 hover:text-gold">
                bookings@odisea-tours.com
              </a>{" "}
              or call <strong>+34 635 745 527</strong>. The shortest answer is usually a 15 minute call.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/plan-your-tour" className="btn-editorial">
                Plan a tour
              </Link>
              <Link href="/faq" className="btn-editorial">
                Practical FAQ
              </Link>
              <Link href="/contact" className="btn-editorial">
                Contact us
              </Link>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="font-display text-[clamp(1.4rem,2.6vw,2rem)] uppercase leading-[1.1] mb-5 text-ink">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
