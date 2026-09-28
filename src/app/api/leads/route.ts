import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Inicializa o cliente do Supabase no lado do servidor
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "";

const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, whatsapp, email, caso } = body;

    // 1. Validação básica de presença dos dados no servidor
    if (!nome || !whatsapp || !email || !caso) {
      return NextResponse.json(
        { error: "Todos os campos obrigatórios devem ser preenchidos." },
        { status: 400 }
      );
    }

    // 2. Insere os dados na tabela 'leads' no Supabase
    const { data, error } = await supabase.from("leads").insert([
      {
        nome,
        whatsapp,
        email,
        caso,
        status: "novo",
      },
    ]);

    if (error) {
      console.error("Erro ao inserir lead no Supabase:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (err) {
    console.error("Erro interno na rota /api/leads:", err);
    return NextResponse.json(
      { error: "Erro interno no servidor." },
      { status: 500 }
    );
  }
}