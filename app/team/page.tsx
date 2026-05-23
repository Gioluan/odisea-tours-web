import type { Metadata } from "next";
import TeamClient from "./client";

const SITE = "https://odisea-tours.com";

export const metadata: Metadata = {
  title: "Meet the Odisea Tours Team — Spain, Middle East & USA",
  description:
    "The people behind every Odisea Tours sport tour. Local specialists in Spain, the Middle East and the USA — over 20 years of group sport tour experience.",
  alternates: { canonical: "/team" },
  openGraph: {
    url: "https://odisea-tours.com/team",
    title: "Meet the Odisea Tours Team",
    description:
      "Local specialists on the ground in Spain, the Middle East and the USA. Decades of combined experience organizing group sport tours.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet the Odisea Tours Team",
    description:
      "Local specialists on the ground in Spain, the Middle East and the USA. Decades of combined experience organizing group sport tours.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
    { "@type": "ListItem", position: 2, name: "The Team", item: `${SITE}/team` },
  ],
};

const juanPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE}/team#juan-sanchez`,
  name: "Juan Sanchez",
  givenName: "Juan",
  familyName: "Sanchez",
  jobTitle: "Founder and Director",
  description:
    "Founder and director of Odisea Tours with over 20 years organizing group sport and cultural tours across Spain and Europe. Former Spanish Liaison Officer at InspireSport, where he ran hundreds of tours per year and built the working relationships with FC Barcelona, Valencia CF and the Spanish Football Federation that Odisea Tours runs on today.",
  image: `${SITE}/photos/juan-sanchez-odisea-tours-director.jpg`,
  email: "juan@odisea-tours.com",
  telephone: "+34-670-059-797",
  worksFor: { "@id": `${SITE}/#organization` },
  url: `${SITE}/team`,
  sameAs: ["https://www.linkedin.com/in/juan-b-s%C3%A1nchez-8ab64744/"],
  knowsAbout: [
    "youth soccer tours Spain",
    "school football tours Spain",
    "FC Barcelona academy access",
    "Valencia CF academy access",
    "Spanish Football Federation (RFEF) training",
    "veterans football tours Spain",
    "stadium visits Camp Nou and Bernabéu",
    "group travel Spain",
    "Sabores de España culinary tours",
    "Camino de Santiago group tours",
  ],
  knowsLanguage: ["Spanish", "English"],
  workLocation: { "@type": "Place", name: "Castellón, Spain" },
};

const aitorPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE}/team#aitor-corres`,
  name: "Aitor Corres",
  givenName: "Aitor",
  familyName: "Corres",
  jobTitle: "Middle East Specialist",
  description:
    "Middle East specialist for Odisea Tours, with deep roots across the region and decades of group travel experience. Opens federation, club and venue access other operators cannot reach.",
  image: `${SITE}/photos/aitor-corres-odisea-tours.jpg`,
  worksFor: { "@id": `${SITE}/#organization` },
  url: `${SITE}/team`,
  sameAs: ["https://www.linkedin.com/in/aitorcorres"],
  knowsAbout: [
    "Middle East group travel",
    "sport tour operations",
    "destination management Spain",
    "federation and club relations",
  ],
  knowsLanguage: ["Spanish", "English"],
};

const raulPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE}/team#raul-sanz`,
  name: "Raul Sanz",
  givenName: "Raul",
  familyName: "Sanz",
  jobTitle: "Lead Representative, Spain",
  description:
    "Raul is the face of every Odisea Tours sport tour on the ground in Spain, from airport arrival to departure. Certified fitness and health instructor.",
  image: `${SITE}/photos/raul-sanz-odisea-tours.jpg`,
  worksFor: { "@id": `${SITE}/#organization` },
  url: `${SITE}/team`,
  sameAs: ["https://www.linkedin.com/in/ra%C3%BAl-sanz-crespo-6502273b/"],
  knowsAbout: [
    "on-ground sport tour operations Spain",
    "fitness and health instruction",
    "youth football coaching",
    "sport tour delivery",
    "Spanish football clubs and federations",
  ],
  knowsLanguage: ["Spanish", "English"],
  workLocation: { "@type": "Place", name: "Spain" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(juanPerson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aitorPerson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(raulPerson) }} />
      <TeamClient />
    </>
  );
}
