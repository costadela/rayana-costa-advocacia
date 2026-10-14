"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminNavbar() {
  const router = useRouter();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  async function confirmLogout() {
    try {
      await fetch("/api/logout", { method: "POST" });
    } catch (error) {
      console.error("Erro ao encerrar a sessão:", error);
    } finally {
      setShowLogoutModal(false);
      router.push("/admin/login");
      router.refresh();
    }
  }

  return (
    <>
      <header className="border-b border-gold/15 bg-black py-6 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="font-serif text-xl sm:text-2xl font-semibold text-offwhite">
              Dra. Rayana Costa
            </h1>
            <p className="text-[10px] text-gold tracking-[0.2em] uppercase font-medium">
              Painel Administrativo
            </p>
          </div>
          <button
            onClick={() => setShowLogoutModal(true)}
            className="px-4 py-2 border border-red-500/30 text-red-400 hover:bg-red-500/10 rounded-md text-xs font-medium transition-colors cursor-pointer"
          >
            Encerrar Sessão
          </button>
        </div>
      </header>

      {showLogoutModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="logout-title"
            className="bg-black border border-gold/30 rounded-lg p-6 max-w-sm w-full space-y-4 shadow-2xl"
          >
            <h2 id="logout-title" className="font-serif text-lg text-offwhite">
              Deseja realmente sair?
            </h2>
            <p className="text-xs text-offwhite/70 leading-relaxed">
              Sua sessão será encerrada e você precisará se autenticar novamente.
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 border border-gold/20 text-offwhite/80 hover:text-offwhite rounded-md text-xs cursor-pointer"
              >
                Cancelar
              </button>
              <button
                onClick={confirmLogout}
                className="px-4 py-2 bg-red-500/80 hover:bg-red-500 text-white font-medium rounded-md text-xs transition-colors cursor-pointer"
              >
                Sim, encerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
