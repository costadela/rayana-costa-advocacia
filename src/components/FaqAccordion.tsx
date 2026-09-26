"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "O atendimento é realizado diretamente com a Dra. Rayana Costa?",
    a: "Sim. O atendimento é realizado de forma próxima e humanizada, diretamente pela advogada responsável pelo caso, com escuta individualizada, transparência e sigilo profissional.",
  },
  {
    q: "A saída temporária ainda existe?",
    a: "A saída temporária sofreu mudanças importantes nos últimos anos. A possibilidade do direito depende da situação do apenado, do crime praticado e da legislação aplicável ao caso, inclusive das regras vigentes na época do fato.",
  },
  {
    q: "Quando o apenado pode trabalhar durante o cumprimento da pena?",
    a: "A possibilidade de trabalho depende das condições do caso, do regime de cumprimento da pena e das regras aplicáveis à unidade prisional.",
  },
  {
    q: "Quando é possível pedir o Indulto de anos anteriores?",
    a: "Mesmo após algum tempo, pode ser possível reconhecer o direito ao indulto previsto em decretos anteriores. Para isso, é importante analisar a situação de cada pessoa e verificar se, na época, os requisitos para o benefício foram cumpridos.",
  },
  {
    q: "O que acontece quando há uma acusação de falta grave?",
    a: "A apuração de uma falta grave pode trazer consequências importantes para a execução da pena e para a análise de direitos. Nesses casos, é importante contar com acompanhamento jurídico para apresentar a defesa e acompanhar o procedimento.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="border-t border-gold/15 max-w-2xl">
      {FAQS.map((item, i) => {
        const isOpen = open === i;

        return (
          <div key={item.q} className="border-b border-gold/15">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 py-5 text-left transition-colors focus-ring group"
            >
              <span
                className={`font-serif text-base sm:text-lg font-medium transition-colors ${
                  isOpen ? "text-gold" : "text-offwhite group-hover:text-gold"
                }`}
              >
                {item.q}
              </span>
              <span
                className={`shrink-0 text-gold text-xl font-light leading-none transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            <div
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{ maxHeight: isOpen ? "350px" : "0px" }}
            >
              <div className="pb-6 pt-1">
                <div className="bg-white/[0.03] border-l-2 border-gold/40 rounded-r-lg p-4 sm:p-5">
                  <p className="font-sans text-offwhite/75 text-sm sm:text-base leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}