import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade e Uso de Imagem | Dra. Rayana Costa",
  description:
    "Informações sobre privacidade, uso institucional de imagem e canal direto para solicitações de alteração ou remoção.",
};

export default function PoliticaDePrivacidadePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-offwhite/90">
      <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-offwhite mb-8 border-b border-gold/20 pb-4">
        Política de Privacidade e Direitos de Imagem
      </h1>

      <section className="space-y-6 leading-relaxed text-sm sm:text-base">
        <p className="text-offwhite/80">
          Este site possui caráter estritamente institucional e informativo,
          dedicando seções específicas para registrar ações cidadãs e projetos
          sociais desenvolvidos de forma independente.
        </p>

        <h2 className="font-serif text-xl font-medium text-gold mt-8">
          1. Proteção e Respeito à Imagem
        </h2>
        <p className="text-offwhite/80">
          Todas as fotografias de projetos institucionais e ações sociais
          exibidas neste site são de autoria própria. Comprometemo-nos com a
          preservação da dignidade, privacidade e integridade visual de
          terceiros e pessoas em situação de vulnerabilidade. Por padrão,
          registros visuais que envolvem ambientes restritos, o sistema prisional
          ou terceiros passam por processos de descaracterização e desfoque
          visual (blur).
        </p>

        <h2 className="font-serif text-xl font-medium text-gold mt-8">
          2. Solicitação de Remoção ou Ajuste de Imagem
        </h2>
        <p className="text-offwhite/80">
          Se você se reconheceu em alguma imagem veiculada em nossos registros
          de projetos ou ações cidadãs — mesmo com o desfoque aplicável — e
          deseja a alteração, desfoque adicional ou remoção completa da
          fotografia, garantimos o atendimento imediato da sua solicitação.
        </p>

        <div className="bg-black/60 border border-gold/20 p-6 rounded-lg my-8 space-y-3">
          <h3 className="font-serif text-lg font-medium text-offwhite">
            Como solicitar a remoção ou ajuste?
          </h3>
          <p className="text-offwhite/80">
            Envie um e-mail informando o link ou contexto da página e a imagem
            em questão para o contato profissional:
          </p>
          <div>
            <a
              href="mailto:rayanascosta@gmail.com"
              className="text-gold font-medium underline hover:text-gold/80 transition-colors text-base"
            >
              rayanacosta.adv@hotmail.com
            </a>
          </div>
          <p className="text-xs text-offwhite/60">
            Sua solicitação será processada com prioridade e a imagem será
            ajustada ou removida prontamente.
          </p>
        </div>
      </section>
    </div>
  );
}