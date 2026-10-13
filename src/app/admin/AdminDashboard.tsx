"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Lead = {
  id: string;
  nome: string;
  whatsapp: string;
  email: string;
  caso: string;
  status: "novo" | "contatado" | "sem_resposta" | "cliente";
  created_at: string;
};

const LEAD_STATUSES: Lead["status"][] = [
  "novo",
  "cliente",
  "contatado",
  "sem_resposta",
];

const STATUS_LABEL: Record<Lead["status"], string> = {
  novo: "Novo",
  contatado: "Mensagem enviada",
  sem_resposta: "Sem resposta",
  cliente: "Contratado",
};

const STATUS_COLOR: Record<Lead["status"], string> = {
  novo: "bg-red-500",
  contatado: "bg-blue-400",
  sem_resposta: "bg-gray-400",
  cliente: "bg-green-400",
};

export default function AdminDashboard() {
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("todos");
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [leadToDelete, setLeadToDelete] = useState<Lead | null>(null);
  const [deletingLead, setDeletingLead] = useState(false);
  const [actionError, setActionError] = useState("");

  useEffect(() => {
    let cancelled = false;

    fetch("/api/admin/leads")
      .then((res) => {
        if (!res.ok) throw new Error("Falha ao buscar dados");
        return res.json();
      })
      .then((data) => {
        if (!cancelled) {
          setLeads(Array.isArray(data.leads) ? data.leads : []);
        }
      })
      .catch((error: unknown) => {
        console.error("Erro ao carregar leads:", error);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  async function updateStatus(id: string, status: Lead["status"]) {
    setActionError("");
    try {
      const res = await fetch(`/api/admin/leads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Não foi possível atualizar o status.");
      }
      setLeads((prev) =>
        prev.map((lead) => (lead.id === id ? { ...lead, status } : lead))
      );
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
      setActionError(
        error instanceof Error ? error.message : "Não foi possível atualizar o status."
      );
    }
  }

  async function confirmDeleteLead() {
    if (!leadToDelete) return;

    setDeletingLead(true);
    setActionError("");
    try {
      const res = await fetch(`/api/admin/leads/${leadToDelete.id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Não foi possível excluir o lead.");
      }

      setLeads((prev) => prev.filter((lead) => lead.id !== leadToDelete.id));
      setLeadToDelete(null);
    } catch (error) {
      console.error("Erro ao excluir lead:", error);
      setActionError(
        error instanceof Error ? error.message : "Não foi possível excluir o lead."
      );
    } finally {
      setDeletingLead(false);
    }
  }

  async function confirmLogout() {
    try {
      await fetch("/api/logout", {
        method: "POST",
      });
    } catch (err) {
      console.error("Erro ao encerrar a sessão:", err);
    } finally {
      setShowLogoutModal(false);
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

  const filtered = leads.filter((l) => {
    const matchesSearch =
      l.nome.toLowerCase().includes(search.toLowerCase()) ||
      l.email.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = filterStatus === "todos" || l.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

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

        <div
          role="group"
          aria-label="Legenda dos status"
          className="flex flex-wrap gap-x-5 gap-y-2"
        >
          {LEAD_STATUSES.map((status) => (
            <span key={status} className="inline-flex items-center gap-2 text-xs text-offwhite/70">
              <span
                aria-hidden="true"
                className={`h-2.5 w-2.5 rounded-full ${STATUS_COLOR[status]}`}
              />
              {STATUS_LABEL[status]}
            </span>
          ))}
        </div>

        {actionError && (
          <p role="alert" className="text-sm text-red-400">
            {actionError}
          </p>
        )}

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
                  <th className="px-4 py-3 font-normal">Ações</th>
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
                      <label className="relative inline-flex items-center gap-2 rounded-md px-1 py-1 text-xs text-offwhite focus-within:ring-1 focus-within:ring-gold">
                        <span
                          aria-hidden="true"
                          className={`h-2.5 w-2.5 shrink-0 rounded-full ${STATUS_COLOR[lead.status]}`}
                        />
                        <span>{STATUS_LABEL[lead.status]}</span>
                        <select
                          aria-label={`Alterar status de ${lead.nome}`}
                          value={lead.status}
                          onChange={(e) => updateStatus(lead.id, e.target.value as Lead["status"])}
                          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                        >
                          {LEAD_STATUSES.map((status) => (
                            <option key={status} value={status}>
                              {STATUS_LABEL[status]}
                            </option>
                          ))}
                        </select>
                      </label>
                    </td>
                    <td className="px-4 py-4 align-top">
                      <button
                        type="button"
                        onClick={() => {
                          setActionError("");
                          setLeadToDelete(lead);
                        }}
                        className="text-xs text-red-400 hover:text-red-300 underline underline-offset-2 cursor-pointer whitespace-nowrap"
                      >
                        Excluir
                      </button>
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

      {leadToDelete && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-lead-title"
            className="bg-black border border-red-500/30 rounded-lg p-6 max-w-sm w-full space-y-4 shadow-2xl"
          >
            <h3 id="delete-lead-title" className="font-serif text-lg text-offwhite">
              Excluir lead?
            </h3>
            <p className="text-xs text-offwhite/70 leading-relaxed">
              O lead de {leadToDelete.nome} será removido permanentemente.
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setLeadToDelete(null)}
                disabled={deletingLead}
                className="px-4 py-2 border border-gold/20 text-offwhite/80 hover:text-offwhite rounded-md text-xs cursor-pointer disabled:opacity-50"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={confirmDeleteLead}
                disabled={deletingLead}
                className="px-4 py-2 bg-red-500/80 hover:bg-red-500 text-white font-medium rounded-md text-xs transition-colors cursor-pointer disabled:opacity-50"
              >
                {deletingLead ? "Excluindo..." : "Sim, excluir"}
              </button>
            </div>
          </div>
        </div>
      )}

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