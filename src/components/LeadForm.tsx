"use client";

import { useState, FormEvent, ChangeEvent } from "react";

type Status = "idle" | "loading" | "success";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [whatsappValue, setWhatsappValue] = useState("");
  const [validationError, setValidationError] = useState("");

  // Função para aplicar máscara e limitar dígitos do telefone/WhatsApp
  function handleWhatsappChange(e: ChangeEvent<HTMLInputElement>) {
    let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for dígito

    // Limita ao máximo de 11 dígitos (DDD + 9 dígitos)
    if (value.length > 11) {
      value = value.slice(0, 11);
    }

    // Aplica a máscara dinâmica (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
    let formatted = value;
    if (value.length > 2) {
      formatted = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    }
    if (value.length > 7) {
      formatted = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    }

    setWhatsappValue(formatted);
    if (validationError) setValidationError("");
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setValidationError("");

    const form = e.currentTarget;
    const nome = (form.elements.namedItem("nome") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const caso = (form.elements.namedItem("caso") as HTMLTextAreaElement).value.trim();

    // 1. Validação do Número de Telefone (Apenas 10 ou 11 dígitos numéricos)
    const rawDigits = whatsappValue.replace(/\D/g, "");
    if (rawDigits.length < 10 || rawDigits.length > 11) {
      setValidationError("Por favor, insira um número de WhatsApp válido com DDD (10 ou 11 dígitos).");
      return;
    }

    // 2. Validação de E-mail via Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setValidationError("Por favor, informe um endereço de e-mail válido.");
      return;
    }

    // 3. Validação do Conteúdo do Caso
    if (caso.length < 10) {
      setValidationError("Por favor, descreva brevemente o seu caso (mínimo de 10 caracteres).");
      return;
    }

    setStatus("loading");

    // Redirecionamento direto para o WhatsApp
    const numeroWhatsApp = "5532985094669";
    const mensagem = `Olá, Dra. Rayana. Gostaria de uma análise preliminar do meu caso.

*Nome:* ${nome}
*WhatsApp:* ${whatsappValue}
*E-mail:* ${email}
*Resumo do caso:* ${caso}`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank", "noopener,noreferrer");

    setStatus("success");
    form.reset();
    setWhatsappValue("");
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-gold/30 bg-black/60 p-8 text-center space-y-4">
        <p className="font-serif text-xl text-offwhite">Mensagem recebida!</p>
        <p className="text-offwhite/80 text-sm max-w-md mx-auto leading-relaxed">
          Caso a conversa no WhatsApp não tenha aberto automaticamente, clique no botão abaixo para iniciar o atendimento imediato.
        </p>
        <div className="pt-2">
          <a
            href="https://wa.me/5532985094669"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gold text-bg font-semibold rounded-md hover:bg-goldSoft transition-all shadow-md"
          >
            Falar no WhatsApp agora
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" id="contato">
      <div>
        <label htmlFor="nome" className="block text-sm text-offwhite/90 mb-1.5 font-medium">
          Nome completo *
        </label>
        <input
          id="nome"
          name="nome"
          required
          minLength={3}
          className="w-full bg-black/60 border border-gold/20 rounded-md px-4 py-3 text-offwhite placeholder:text-offwhite/35 focus:outline-none focus:border-gold transition-colors"
          placeholder="Seu nome completo"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="whatsapp" className="block text-sm text-offwhite/90 mb-1.5 font-medium">
            WhatsApp *
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            required
            type="tel"
            value={whatsappValue}
            onChange={handleWhatsappChange}
            className="w-full bg-black/60 border border-gold/20 rounded-md px-4 py-3 text-offwhite placeholder:text-offwhite/35 focus:outline-none focus:border-gold transition-colors"
            placeholder="(32) 99999-9999"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-offwhite/90 mb-1.5 font-medium">
            E-mail *
          </label>
          <input
            id="email"
            name="email"
            required
            type="email"
            className="w-full bg-black/60 border border-gold/20 rounded-md px-4 py-3 text-offwhite placeholder:text-offwhite/35 focus:outline-none focus:border-gold transition-colors"
            placeholder="seu@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="caso" className="block text-sm text-offwhite/90 mb-1.5 font-medium">
          Conte brevemente sobre seu caso *
        </label>
        <textarea
          id="caso"
          name="caso"
          required
          minLength={10}
          rows={4}
          className="w-full bg-black/60 border border-gold/20 rounded-md px-4 py-3 text-offwhite placeholder:text-offwhite/35 focus:outline-none focus:border-gold transition-colors resize-none"
          placeholder="Descreva a situação com o máximo de detalhes possível"
        />
      </div>

      {validationError && (
        <p className="text-sm text-red-400 text-center font-medium bg-red-500/10 border border-red-500/20 py-2 rounded-md">
          {validationError}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mx-auto block px-8 py-3.5 bg-gold text-bg font-semibold rounded-md transition-all duration-300 hover:bg-goldSoft hover:scale-[1.03] hover:shadow-lg hover:shadow-gold/20 focus-ring disabled:opacity-60 disabled:hover:scale-100 cursor-pointer text-xs uppercase tracking-wider"
      >
        {status === "loading" ? "A redirecionar..." : "Quero falar com a advogada"}
      </button>

      <p className="text-xs text-center text-offwhite/60 pt-1">
        Atendimento confidencial. Seus dados não são compartilhados.
      </p>
    </form>
  );
}