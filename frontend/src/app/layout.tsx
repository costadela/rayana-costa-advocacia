//  layout.tsx  Estrutura raiz da página (HTML, Body, Fontes)

import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

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
  title: "Rayana Costa — Execução Penal",
  description: "Defesa criminal estratégica e discreta. OAB/MG 192.542.",
  icons: {
    icon: "/imagens/icon-favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
<nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gold/15">
          <div className="max-w-6xl mx-auto px-6 h-24 flex items-center justify-between">
            
            {/* Logótipo / Nome Principal */}
            <a href="/" className="group flex flex-col justify-center">
              <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-wide text-offwhite group-hover:text-gold transition-colors">
                Dra. Rayana Costa
              </span>
              <span className="text-xs text-gold tracking-[0.2em] uppercase font-medium pt-0.5">
                Execução Penal
              </span>
            </a>

            {/* Links de Navegação */}
            <div className="hidden sm:flex items-center gap-8 text-sm text-offwhite font-medium">
      <a href="/cursos" className="link-underline hover:text-gold transition-colors focus-ring">
  Cursos
</a>
              <a href="/projetos-sociais" className="link-underline hover:text-gold transition-colors focus-ring">
                Projetos Sociais
              </a>
              <a href="/contato" className="link-underline hover:text-gold transition-colors focus-ring">
                Contato
              </a>
            </div>

          </div>
        </nav>
        <main className="pt-16">{children}</main>

        <footer className="border-t border-gold/10 bg-black pt-16 pb-8">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-gold/10">
              
              {/* Coluna 1: Nome, Apresentação e Redes Sociais */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-serif text-lg text-offwhite font-medium">
                    Dra. Rayana Costa
                  </h3>
                  <p className="text-xs text-gold/80 pt-0.5">
                    OAB/MG 192.542
                  </p>
                </div>

                <p className="text-sm text-offwhite/80 leading-relaxed">
                  Advocacia Criminal estratégica e discreta. Defesa técnica especializada em todas as instâncias.
                </p>

                {/* Redes Sociais com Ícone do Instagram */}
                <div className="pt-2 space-y-2">
                  <p className="text-xs font-medium uppercase tracking-wider text-gold">
                    Redes Sociais
                  </p>
                  <div className="flex items-center gap-4 text-sm text-offwhite/80">
                    <a 
                      href="https://www.instagram.com/rayanacosta.adv" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-gold transition-colors flex items-center gap-2 group"
                    >
                      <svg 
                        className="w-4 h-4 fill-current text-offwhite/80 group-hover:text-gold transition-colors" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <span>@rayanacosta.adv</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Coluna 2: Informações de Contato */}
              <div className="space-y-3 text-sm text-offwhite/80">
                <h4 className="text-offwhite font-medium text-base">Contato</h4>
                <p className="flex items-center gap-2">
                  <span className="text-gold">WhatsApp:</span> 
                  <a href="https://wa.me/5532985094669" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                    (32) 98509-4669
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-gold">E-mail:</span> 
                  <a href="mailto:rayanascosta@gmail.com" className="hover:text-gold transition-colors">
                    rayanascosta@gmail.com
                  </a>
                </p>
                <p>
                  <span className="text-gold">Localização:</span> Juiz de Fora, MG
                </p>
              </div>

              {/* Coluna 3: Atendimento e Suporte */}
              <div className="space-y-3 text-sm text-offwhite/80">
                <h4 className="text-offwhite font-medium text-base">Atendimento</h4>
                <p>Segunda a Sexta, 10h – 17h</p>
                <p className="text-xs text-offwhite/60 pt-2">
                  Atendimento emergencial para prisões em flagrante mediante contato via WhatsApp.
                </p>
              </div>

            </div>

            {/* Linha Inferior: Copyright e Desenvolvedor */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-offwhite/80">
              <span>
                © {new Date().getFullYear()} Rayana Costa Advocacia. Todos os direitos reservados.
              </span>

              <div className="flex items-center gap-6">
                <span>
                  Desenvolvido por{" "}
                  <a 
                    href="https://vitorcostadela.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-gold transition-colors font-medium text-offwhite"
                  >
                    Vitor Costadela
                  </a>
                </span>
                <span>•</span>
                <a href="/admin/login" className="hover:text-gold transition-colors focus-ring">
                  Acesso Administrativo
                </a>
              </div>
            </div>

            {/* Bloco Discreto do Aviso Legal */}
            <div className="pt-6 border-t border-gold/5 mt-6 text-center sm:text-left">
              <p className="text-[10px] text-offwhite/30 leading-relaxed max-w-4xl">
                <strong>Aviso Legal:</strong> Este site é independente e não possui vínculo, patrocínio ou associação com a Meta Platforms, Inc. ou Google LLC. Os serviços prestados são privativos de advocacia, em estrita conformidade com a legislação vigente e o Código de Ética e Disciplina da OAB.
              </p>
            </div>

          </div>
        </footer>
      </body>
    </html>
  );
}