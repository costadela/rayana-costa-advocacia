import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rayanacosta.adv.br"), 
  title: "Rayana Costa — Execução Penal",
  description: "Defesa criminal estratégica e humana. OAB/MG 192.542.",
  icons: {
    icon: "/icon-favicon.svg",
  },
  openGraph: {
    title: "Rayana Costa — Execução Penal",
    description: "Defesa criminal estratégica e humana. OAB/MG 192.542.",
    url: "https://rayanacosta.adv.br",
    siteName: "Rayana Costa Advocacia",
    images: [
      {
        url: "https://rayanacosta.adv.br/imagens/logo-escuro.jpg", 
        width: 1200,                 
        height: 630,
        alt: "Rayana Costa — Execução Penal",
      },
    ],
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${playfair.variable} ${poppins.variable} bg-black text-offwhite antialiased`}
    >
      <Navbar />
      <main className="pt-20 sm:pt-24">{children}</main>
      <Footer />
    </div>
  );
}