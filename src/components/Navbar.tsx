"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gold/15">
      <div className="max-w-6xl mx-auto px-6 h-20 sm:h-24 flex items-center justify-between">
        {/* Logótipo / Nome Principal */}
        <Link href="/" className="group flex flex-col justify-center">
          <span className="font-serif text-xl sm:text-3xl font-semibold tracking-wide text-offwhite group-hover:text-gold transition-colors">
            Dra. Rayana Costa
          </span>
          <span className="text-[10px] sm:text-xs text-gold tracking-[0.2em] uppercase font-medium pt-0.5">
            Execução Penal
          </span>
        </Link>

        {/* Links de Navegação Interna (Desktop) */}
        <div className="hidden sm:flex items-center gap-8 text-sm text-offwhite font-medium">
          <Link
            href="/"
            className="link-underline hover:text-gold transition-colors focus-ring"
          >
            Início
          </Link>
          <Link
            href="/cursos"
            className="link-underline hover:text-gold transition-colors focus-ring"
          >
            Cursos
          </Link>
          <Link
            href="/projetos-sociais"
            className="link-underline hover:text-gold transition-colors focus-ring"
          >
            Projetos Sociais
          </Link>
          <Link
            href="/contato"
            className="link-underline hover:text-gold transition-colors focus-ring"
          >
            Contato
          </Link>
        </div>

        {/* Botão Hambúrguer (Mobile) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden p-2 text-offwhite hover:text-gold transition-colors focus:outline-none"
          aria-label="Abrir Menu de Navegação"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menu Suspenso Deslizante (Mobile) */}
      {isMenuOpen && (
        <div className="sm:hidden bg-[#0e0e0d] border-b border-gold/15 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="block text-base text-offwhite hover:text-gold transition-colors py-1"
          >
            Início
          </Link>
          <Link
            href="/cursos"
            onClick={() => setIsMenuOpen(false)}
            className="block text-base text-offwhite hover:text-gold transition-colors py-1"
          >
            Cursos
          </Link>
          <Link
            href="/projetos-sociais"
            onClick={() => setIsMenuOpen(false)}
            className="block text-base text-offwhite hover:text-gold transition-colors py-1"
          >
            Projetos Sociais
          </Link>
          <Link
            href="/contato"
            onClick={() => setIsMenuOpen(false)}
            className="block text-base text-offwhite hover:text-gold transition-colors py-1"
          >
            Contato
          </Link>
        </div>
      )}
    </nav>
  );
}