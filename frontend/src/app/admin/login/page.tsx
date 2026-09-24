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

    


    if (error) {
      setError("Email ou senha incorretos.");
      setLoading(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <section className="max-w-sm mx-auto px-6 py-32">
      <h1 className="font-serif text-2xl text-offwhite mb-8 text-center">
        Acesso Administrativo
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm text-offwhiteDim mb-1.5">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full bg-bgElevated border border-gold/20 rounded-md px-4 py-3 text-offwhite focus-ring focus:border-gold/50"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm text-offwhiteDim mb-1.5">
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
        {error && <p className="text-sm text-red-400">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full px-6 py-3 bg-gold text-bg font-medium rounded-md hover:bg-goldSoft transition-colors focus-ring disabled:opacity-60"
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </section>
  );
}
