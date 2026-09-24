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
  sem_resposta: "text-offwhiteDim border-offwhiteDim/40",
  cliente: "text-green-300 border-green-300/40",
};

export default function AdminDashboard() {
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("todos");

  useEffect(() => {
    loadLeads();
  }, []);

  async function loadLeads() {
    setLoading(true);
    const res = await fetch("/api/admin/leads");
    const data = await res.json();
    setLeads(data.leads || []);
    setLoading(false);
  }

  async function updateStatus(id: string, status: Lead["status"]) {
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
    await fetch(`/api/admin/leads/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
  }

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
  }

  function exportCsv() {
    const header = "Nome,WhatsApp,Email,Caso,Status,Data\n";
    const rows = filtered
      .map((l) =>
        [l.nome, l.whatsapp, l.email, `"${l.caso.replace(/"/g, '""')}"`, STATUS_LABEL[l.status], new Date(l.created_at).toLocaleString("pt-BR")].join(",")
      )
      .join("\n");
    const blob = new Blob([header + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "leads.csv";
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
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-10">
        <h1 className="font-serif text-3xl text-offwhite">Leads</h1>
        <button
          onClick={handleLogout}
          className="text-sm text-offwhiteDim hover:text-gold transition-colors focus-ring"
        >
          Sair
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por nome ou email"
          className="flex-1 bg-bgElevated border border-gold/20 rounded-md px-4 py-2.5 text-offwhite placeholder:text-offwhiteDim/50 focus-ring focus:border-gold/50"
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="bg-bgElevated border border-gold/20 rounded-md px-4 py-2.5 text-offwhite focus-ring focus:border-gold/50"
        >
          <option value="todos">Todos os status</option>
          {Object.entries(STATUS_LABEL).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <button
          onClick={exportCsv}
          className="px-5 py-2.5 border border-gold/40 text-gold rounded-md hover:bg-gold hover:text-bg transition-colors focus-ring whitespace-nowrap"
        >
          Exportar CSV
        </button>
      </div>

      {loading ? (
        <p className="text-offwhiteDim">Carregando...</p>
      ) : filtered.length === 0 ? (
        <p className="text-offwhiteDim">Nenhum lead encontrado.</p>
      ) : (
        <div className="overflow-x-auto border border-gold/10 rounded-lg">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gold/10 text-left text-offwhiteDim">
                <th className="px-4 py-3 font-normal">Nome</th>
                <th className="px-4 py-3 font-normal">Contato</th>
                <th className="px-4 py-3 font-normal">Caso</th>
                <th className="px-4 py-3 font-normal">Data</th>
                <th className="px-4 py-3 font-normal">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((lead) => (
                <tr key={lead.id} className="border-b border-gold/5 last:border-0">
                  <td className="px-4 py-4 text-offwhite align-top">{lead.nome}</td>
                  <td className="px-4 py-4 align-top">
                    <a
                      href={`https://wa.me/55${lead.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:underline block"
                    >
                      {lead.whatsapp}
                    </a>
                    <span className="text-offwhiteDim text-xs">{lead.email}</span>
                  </td>
                  <td className="px-4 py-4 text-offwhiteDim align-top max-w-xs">
                    <p className="line-clamp-2">{lead.caso}</p>
                  </td>
                  <td className="px-4 py-4 text-offwhiteDim align-top whitespace-nowrap">
                    {new Date(lead.created_at).toLocaleDateString("pt-BR")}
                  </td>
                  <td className="px-4 py-4 align-top">
                    <select
                      value={lead.status}
                      onChange={(e) =>
                        updateStatus(lead.id, e.target.value as Lead["status"])
                      }
                      className={`bg-bg border rounded-md px-2 py-1 text-xs focus-ring ${STATUS_COLOR[lead.status]}`}
                    >
                      {Object.entries(STATUS_LABEL).map(([value, label]) => (
                        <option key={value} value={value}>
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
    </section>
  );
}
