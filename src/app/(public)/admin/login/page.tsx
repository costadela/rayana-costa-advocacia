"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    try {
      // Envia e-mail e senha para a API backend
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "E-mail ou senha incorretos.");
      }

      // Redireciona para o painel após o login bem-sucedido
      router.push("/admin");
      router.refresh();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Ocorreu um erro ao realizar o login.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="min-h-[calc(100vh-16rem)] flex items-center justify-center px-6 py-12 bg-black">
      <div className="w-full max-w-sm border border-gold/15 bg-black p-8 rounded-lg shadow-xl space-y-6">
        <div className="text-center space-y-1">
          <h1 className="font-serif text-2xl text-offwhite font-medium">
            Acesso Administrativo
          </h1>
          <p className="text-xs text-offwhite/50">
            Informe suas credenciais para gerenciar os leads
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-xs text-offwhite/80 mb-1.5 font-medium">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full bg-black border border-gold/20 rounded-md px-3.5 py-2.5 text-sm text-offwhite placeholder:text-offwhite/30 focus:outline-none focus:border-gold transition-colors"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-xs text-offwhite/80 mb-1.5 font-medium">
              Senha
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full bg-black border border-gold/20 rounded-md px-3.5 py-2.5 text-sm text-offwhite focus:outline-none focus:border-gold transition-colors"
              placeholder="********"
            />
          </div>

          {error && (
            <p className="text-xs text-red-400 font-medium text-center bg-red-500/10 border border-red-500/20 py-2 rounded-md">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-gold text-black font-semibold rounded-md hover:bg-goldSoft transition-all duration-300 focus-ring disabled:opacity-60 cursor-pointer text-xs uppercase tracking-wider mt-2"
          >
            {loading ? "A entrar..." : "Entrar"}
          </button>
        </form>
      </div>
    </section>
  );
}