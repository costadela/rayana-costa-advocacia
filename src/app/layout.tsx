import "@/app/globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Dra. Rayana Costa — Advocacia Criminal",
  description: "Advocacia & Consultoria Jurídica especializada em Execução Penal.",
  metadataBase: new URL("https://rayanacosta.adv.br"), 
  icons: {
    icon: "/icon.svg", 
  },
  openGraph: {
    title: "Dra. Rayana Costa — Advocacia & Consultoria Jurídica",
    description: "Atuação especializada em Execução Penal e Advocacia Criminal estratégica.",
    url: "https://rayanacosta.adv.br",
    siteName: "Rayana Costa Advocacia",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/logo.jpg", 
        width: 1200,
        height: 1200,
        alt: "Dra. Rayana Costa - Advocacia & Consultoria Jurídica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Rayana Costa — Advocacia & Consultoria Jurídica",
    description: "Atuação especializada em Execução Penal e Advocacia Criminal estratégica.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${playfair.variable} ${poppins.variable} bg-black text-offwhite antialiased`}
    >
      <body className="min-h-screen bg-black">{children}</body>
    </html>
  );
}