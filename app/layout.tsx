import type { Metadata } from "next";
import { Archivo, Archivo_Black, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Analytics from "@/components/Analytics";

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-editorial",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://odisea-tours.com"),
  title: {
    default:
      "Youth Soccer Tours & Group Travel in Spain | Odisea Tours",
    template: "%s · Odisea Tours",
  },
  description:
    "Trusted by 1,400+ groups since 2005. Youth soccer tours, school trips, cultural journeys and corporate retreats across Spain, designed and run by locals on the ground in Castellón and Madrid.",
  keywords: [
    "youth soccer tours Spain",
    "school trip Spain",
    "group travel Spain",
    "Spain football tour operator",
    "stadium tour Camp Nou Bernabeu",
    "La Masia academy visit",
    "Spain cultural tours",
    "Camino de Santiago groups",
  ],
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/journal/rss.xml",
    },
  },
  icons: {
    icon: "/brand/favicons/Browser.png",
    apple: "/brand/favicons/iPhone.png",
  },
  openGraph: {
    title: "Youth Soccer Tours, School Trips & Group Travel in Spain",
    description:
      "Trusted by 1,400+ groups since 2005. Soccer, school, cultural and corporate group travel across Spain, designed by locals.",
    url: "https://odisea-tours.com",
    siteName: "Odisea Tours",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/photos/veterans-soccer-tour-camp-nou-barcelona.jpg",
        width: 1200,
        height: 630,
        alt: "Odisea Tours group at Camp Nou, Barcelona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Youth Soccer Tours & Group Travel in Spain | Odisea Tours",
    description:
      "Trusted by 1,400+ groups since 2005. Soccer, school, cultural and corporate group travel across Spain.",
    images: ["/photos/veterans-soccer-tour-camp-nou-barcelona.jpg"],
  },
  other: {
    "theme-color": "#11110f",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": "https://odisea-tours.com/#organization",
  name: "Odisea Tours",
  legalName: "Ground Agents Solutions S.L.",
  url: "https://odisea-tours.com",
  logo: "https://odisea-tours.com/brand/favicons/Browser.png",
  description:
    "Spain-based group travel operator running youth soccer tours, school trips, cultural journeys and corporate retreats across Spain and Europe. Operating since 2005.",
  foundingDate: "2005",
  areaServed: ["ES", "EU", "US", "AU", "GB"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "c/José Bellido Mor",
    addressLocality: "Benicassim",
    addressRegion: "Castellón",
    postalCode: "12560",
    addressCountry: "ES",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "bookings@odisea-tours.com",
      telephone: "+34-635-745-527",
      areaServed: ["US", "AU", "GB", "EU"],
      availableLanguage: ["English", "Spanish"],
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/odisea-tours",
    "https://www.facebook.com/odiseatoursEU/",
    "https://x.com/OdiseaTours",
    "https://www.instagram.com/Odisea_Tours/",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://odisea-tours.com/#website",
  url: "https://odisea-tours.com",
  name: "Odisea Tours",
  description:
    "Youth soccer tours, school trips, cultural journeys and corporate retreats across Spain. Since 2005.",
  publisher: { "@id": "https://odisea-tours.com/#organization" },
  inLanguage: "en-US",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://odisea-tours.com/journal?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${archivo.variable} ${instrument.variable} ${mono.variable}`}
    >
      <body className="bg-paper text-ink grain min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Analytics />
        <Reveal />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
