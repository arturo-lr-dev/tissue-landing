import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

export const metadata: Metadata = {
  title: "Tissue Therapy - Masaje Terapéutico Profesional en Narón",
  description: "Libérate del dolor muscular y recupera tu bienestar. Masaje terapéutico, tejido profundo y kinesioterapia en Narón, A Coruña. Reserva tu sesión hoy.",
  keywords: ["masaje terapéutico", "masaje tejido profundo", "kinesioterapia", "Narón", "A Coruña", "fisioterapia", "dolor muscular"],
  authors: [{ name: "Tissue Therapy" }],
  openGraph: {
    title: "Tissue Therapy - Masaje Terapéutico Profesional en Narón",
    description: "Libérate del dolor muscular y recupera tu bienestar con nuestros tratamientos personalizados.",
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: "/og-image.png",
        alt: "Tissue Therapy - Masaje Terapéutico Profesional",
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
    <html lang="es" className="scroll-smooth">
      <body className="antialiased font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
