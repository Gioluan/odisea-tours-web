import type { Metadata } from "next";
import { Archivo, Archivo_Black, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

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
    default: "Odisea Tours — Group Travel, Crafted in Spain Since 2005",
    template: "%s · Odisea Tours",
  },
  description:
    "Cinematic group travel across Spain and Europe. Soccer, cultural, corporate and adventure tours designed by locals who have quietly been perfecting the craft for twenty years.",
  icons: {
    icon: "/brand/favicons/Browser.png",
    apple: "/brand/favicons/iPhone.png",
  },
  openGraph: {
    title: "Odisea Tours — Group Travel Since 2005",
    description:
      "Cinematic group travel across Spain. Twenty years in the making.",
    url: "https://odisea-tours.com",
    siteName: "Odisea Tours",
    type: "website",
    locale: "en_US",
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
        <Reveal />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
