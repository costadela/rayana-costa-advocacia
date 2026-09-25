"use client";

import Image from "next/image";

export default function Cursos() {
  function comprarLivro() {
    window.open("https://chk.eduzz.com/acgwm4ix", "_blank", "noopener,noreferrer");
  }

  return (
    <main className="min-h-screen bg-black">
      <section className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        <div className="mb-12">
          <p className="text-gold text-xs tracking-widest uppercase font-medium mb-2">
            Cursos e Publicações
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl text-offwhite font-medium">
            Materiais Exclusivos e Mentoria
          </h1>
          <p className="text-offwhite/85 text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
            Conteúdos práticos voltados para estudantes, advogados e examinandos da OAB que buscam direcionamento estratégico.
          </p>
        </div>

        <div className="space-y-8">
          
          {/* E-BOOK / LIVRO */}
          <div className="border border-gold/20 rounded-xl p-6 sm:p-8 bg-black grid sm:grid-cols-[140px_1fr] gap-6 sm:gap-8 items-center">
            
            {/* Capa do E-book */}
            <div className="relative aspect-[3/4] w-36 sm:w-full mx-auto sm:mx-0 rounded-lg overflow-hidden border border-gold/20 shadow-lg group">
              <Image
                src="/imagens/capa-livro.jpg"
                alt="Capa E-book Manual Prático de Execução Penal"
                fill
                sizes="140px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Detalhes do Livro */}
            <div className="space-y-4">
              <div>
                <span className="inline-block px-2.5 py-1 text-[11px] font-medium tracking-wider uppercase bg-gold/10 text-gold rounded border border-gold/20 mb-2">
                  E-book Digital
                </span>
                <h2 className="font-serif text-2xl text-offwhite font-medium">
                  Manual Prático de Execução Penal
                </h2>
              </div>

              <p className="text-offwhite/85 text-sm leading-relaxed">
                Guia prático e objetivo desenvolvido pela Dra. Rayana Costa para atuação técnica e descomplicada na fase de execução penal. Ideal para advogados criminalistas e estudantes.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-6 justify-between sm:justify-start">
                <div className="flex items-baseline gap-2.5">
                  <span className="text-xs text-offwhite/50 line-through">
                    R$ 99,00
                  </span>
                  <span className="font-serif text-2xl text-gold font-semibold">
                    R$ 57,00
                  </span>
                </div>

                <button
                  onClick={comprarLivro}
                  className="w-full sm:w-auto px-6 py-3 bg-gold text-bg font-medium rounded-md hover:bg-goldSoft transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-gold/20 focus-ring cursor-pointer"
                >
                  Garantir E-book
                </button>
              </div>
            </div>

          </div>
          {/* CURSO / MENTORIA PePOAB */}
          <div className="border border-gold/20 rounded-xl p-6 sm:p-8 bg-black relative overflow-hidden group">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-xl">
                <span className="inline-block px-2.5 py-1 text-[11px] font-medium tracking-wider uppercase bg-gold/10 text-gold rounded border border-gold/20">
                  Mentoria & Preparatório
                </span>
                <h2 className="font-serif text-2xl text-offwhite font-medium">
                  Mentoria PePOAB — Plano de Estudo Personalizado
                </h2>
                <p className="text-offwhite/85 text-sm leading-relaxed">
                  Aprovação na OAB não é sobre estudar mais, é sobre ter direção. Um plano 100% personalizado para a sua rotina, com acompanhamento de evolução e metas diárias até a prova.
                </p>
              </div>

              <div className="flex-shrink-0">
                <a
                  href="https://pepoab.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 border border-gold text-gold font-medium rounded-md hover:bg-gold hover:text-bg transition-all duration-300 focus-ring"
                >
                  Conhecer a Mentoria →
                </a>
              </div>
            </div>
          </div>

        </div>

        
      </section>
    </main>
  );
}