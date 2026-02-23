import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tissue Therapy - Masaje Profesional en Narón",
  description: "Libérate del dolor muscular y recupera tu bienestar. Masaje de tejido profundo, tratamiento craneal y técnicas manuales profesionales en Narón, A Coruña. Reserva tu sesión hoy.",
  keywords: ["masaje profesional", "masaje tejido profundo", "técnicas manuales", "Narón", "A Coruña", "bienestar", "dolor muscular"],
  authors: [{ name: "Tissue Therapy" }],
  openGraph: {
    title: "Tissue Therapy - Masaje Profesional en Narón",
    description: "Libérate del dolor muscular y recupera tu bienestar con nuestros tratamientos personalizados.",
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: "/og-image-min.png",
        alt: "Tissue Therapy - Masaje Profesional",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`scroll-smooth ${cormorant.variable} ${outfit.variable}`}>
      <body className="antialiased font-body">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
