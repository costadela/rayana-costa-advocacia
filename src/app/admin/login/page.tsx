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
      const validEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
      const validPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

      if (email !== validEmail || password !== validPassword) {
        throw new Error("E-mail ou senha incorretos.");
      }

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
    <section className="max-w-sm mx-auto px-6 py-32">
      <h1 className="font-serif text-2xl text-offwhite mb-8 text-center">
        Acesso Administrativo
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm text-offwhiteDim mb-1.5 font-medium">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full bg-bgElevated border border-gold/20 rounded-md px-4 py-3 text-offwhite focus-ring focus:border-gold/50"
            placeholder="rayanascosta@gmail.com"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm text-offwhiteDim mb-1.5 font-medium">
            Senha
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="w-full bg-bgElevated border border-gold/20 rounded-md px-4 py-3 text-offwhite focus-ring focus:border-gold/50"
          />
        </div>

        {error && (
          <p className="text-sm text-red-400 font-medium text-center bg-red-500/10 border border-red-500/20 py-2 rounded-md">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full px-6 py-3.5 bg-gold text-bg font-semibold rounded-md hover:bg-goldSoft transition-all duration-300 focus-ring disabled:opacity-60 cursor-pointer text-xs uppercase tracking-wider mt-2"
        >
          {loading ? "A entrar..." : "Entrar"}
        </button>
      </form>
    </section>
  );
}