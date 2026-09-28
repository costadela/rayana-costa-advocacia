import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createClient } from "@supabase/supabase-js";

// Inicializa o cliente do Supabase no lado do servidor
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "";

const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET() {
  try {
    // 1. Verifica se a requisição possui o cookie de sessão autenticado
    const cookieStore = await cookies();
    const adminSession = cookieStore.get("admin_session")?.value;

    if (!adminSession) {
      return NextResponse.json(
        { error: "Acesso não autorizado." },
        { status: 401 }
      );
    }

    // 2. Busca todos os leads ordenados do mais recente para o mais antigo
    const { data: leads, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Erro ao buscar leads no Supabase:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ leads }, { status: 200 });
  } catch (err) {
    console.error("Erro interno na rota GET /api/admin/leads:", err);
    return NextResponse.json(
      { error: "Erro interno no servidor." },
      { status: 500 }
    );
  }
}