"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Lead = {
  id: string;
  nome: string;
  whatsapp: string;
  email: string;
  caso: string;
  status: "novo" | "contatado" | "sem_resposta" | "cliente";
  created_at: string;
};

const STATUS_LABEL: Record<Lead["status"], string> = {
  novo: "Novo",
  contatado: "Contatado",
  sem_resposta: "Sem resposta",
  cliente: "Cliente",
};

const STATUS_COLOR: Record<Lead["status"], string> = {
  novo: "text-gold border-gold/40",
  contatado: "text-blue-300 border-blue-300/40",
  sem_resposta: "text-offwhite/50 border-offwhite/30",
  cliente: "text-green-300 border-green-300/40",
};

export default function AdminDashboard() {
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("todos");
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  useEffect(() => {
    loadLeads();
  }, []);

  async function loadLeads() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/leads");
      if (!res.ok) throw new Error("Falha ao buscar dados");
      const data = await res.json();
      setLeads(Array.isArray(data.leads) ? data.leads : []);
    } catch (error) {
      setLeads([]);
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(id: string, status: Lead["status"]) {
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
    try {
      await fetch(`/api/admin/leads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
    } catch (err) {
      console.error("Erro ao atualizar status:", err);
    }
  }

  async function confirmLogout() {
    try {
      const supabase = createClient();
      await supabase.auth.signOut();
    } catch (err) {
      // Ignora erro local
    } finally {
      router.push("/admin/login");
      router.refresh();
    }
  }

  function exportCsv() {
    if (filtered.length === 0) return;

    const header = "Nome,WhatsApp,Email,Caso,Status,Data\n";
    const rows = filtered
      .map((l) =>
        [
          `"${l.nome.replace(/"/g, '""')}"`,
          `"${l.whatsapp}"`,
          `"${l.email}"`,
          `"${l.caso.replace(/"/g, '""')}"`,
          `"${STATUS_LABEL[l.status]}"`,
          `"${new Date(l.created_at).toLocaleString("pt-BR")}"`,
        ].join(",")
      )
      .join("\n");

    const blob = new Blob([header + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  const filtered = useMemo(() => {
    return leads.filter((l) => {
      const matchesSearch =
        l.nome.toLowerCase().includes(search.toLowerCase()) ||
        l.email.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = filterStatus === "todos" || l.status === filterStatus;
      return matchesSearch && matchesStatus;
    });
  }, [leads, search, filterStatus]);

  return (
    <div className="min-h-screen bg-black text-offwhite flex flex-col justify-between">
      {/* Topo Exclusivo da Área Restrita */}
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

      {/* Conteúdo do Dashboard */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-10 space-y-8">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl text-offwhite">Gerenciamento de Leads</h2>
          <p className="text-xs text-offwhite/60 pt-1">Acompanhe os contatos e clientes recebidos pelo site</p>
        </div>

        {/* Filtros e Busca */}
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nome ou e-mail"
            className="flex-1 bg-black border border-gold/20 rounded-md px-4 py-2.5 text-offwhite placeholder:text-offwhite/40 focus:outline-none focus:border-gold transition-colors text-sm"
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-black border border-gold/20 rounded-md px-4 py-2.5 text-offwhite focus:outline-none focus:border-gold transition-colors text-sm cursor-pointer"
          >
            <option value="todos">Todos os status</option>
            {Object.entries(STATUS_LABEL).map(([value, label]) => (
              <option key={value} value={value} className="bg-black text-offwhite">
                {label}
              </option>
            ))}
          </select>
          <button
            onClick={exportCsv}
            disabled={filtered.length === 0}
            className="px-5 py-2.5 border border-gold/40 text-gold rounded-md hover:bg-gold hover:text-black transition-colors text-sm font-medium disabled:opacity-30 cursor-pointer whitespace-nowrap"
          >
            Exportar CSV
          </button>
        </div>

        {/* Tabela de Leads */}
        {loading ? (
          <p className="text-offwhite/50 text-center py-12 text-sm">Carregando informações...</p>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16 border border-gold/15 rounded-lg bg-black">
            <p className="text-offwhite/60 text-sm">Nenhum lead encontrado.</p>
          </div>
        ) : (
          <div className="overflow-x-auto border border-gold/15 rounded-lg bg-black">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gold/15 text-left text-offwhite/60 bg-gold/5">
                  <th className="px-4 py-3 font-normal">Nome</th>
                  <th className="px-4 py-3 font-normal">Contato</th>
                  <th className="px-4 py-3 font-normal">Caso</th>
                  <th className="px-4 py-3 font-normal">Data</th>
                  <th className="px-4 py-3 font-normal">Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((lead) => (
                  <tr key={lead.id} className="border-b border-gold/10 last:border-0 hover:bg-gold/5 transition-colors">
                    <td className="px-4 py-4 text-offwhite font-medium align-top">{lead.nome}</td>
                    <td className="px-4 py-4 align-top">
                      <a
                        href={`https://wa.me/55${lead.whatsapp.replace(/\D/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold hover:underline block font-medium"
                      >
                        {lead.whatsapp}
                      </a>
                      <span className="text-offwhite/60 text-xs">{lead.email}</span>
                    </td>
                    <td className="px-4 py-4 text-offwhite/80 align-top max-w-xs">
                      <p className="line-clamp-2 text-xs leading-relaxed">{lead.caso}</p>
                    </td>
                    <td className="px-4 py-4 text-offwhite/60 align-top whitespace-nowrap text-xs">
                      {new Date(lead.created_at).toLocaleDateString("pt-BR")}
                    </td>
                    <td className="px-4 py-4 align-top">
                      <select
                        value={lead.status}
                        onChange={(e) => updateStatus(lead.id, e.target.value as Lead["status"])}
                        className={`bg-black border rounded-md px-2 py-1 text-xs cursor-pointer ${STATUS_COLOR[lead.status]}`}
                      >
                        {Object.entries(STATUS_LABEL).map(([value, label]) => (
                          <option key={value} value={value} className="bg-black text-offwhite">
                            {label}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>

      {/* Rodapé Interno */}
      <footer className="border-t border-gold/10 bg-black py-6 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-xs text-offwhite/40">
          © {new Date().getFullYear()} Rayana Costa Advocacia. Painel Administrativo de Uso Interno.
        </div>
      </footer>

      {/* Modal de Desconexão */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-black border border-gold/30 rounded-lg p-6 max-w-sm w-full space-y-4 shadow-2xl">
            <h3 className="font-serif text-lg text-offwhite">Deseja realmente sair?</h3>
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
    </div>
  );
}