import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, whatsapp, email, caso } = body;

    // Teste de inserção com retorno de erro detalhado
    const { data, error } = await supabaseServer
      .from("leads")
      .insert([{ nome, whatsapp, email, caso, status: "novo" }])
      .select();

    if (error) {
      console.error("Erro Supabase:", error);
      return NextResponse.json(
        { erro_supabase: error.message, detalhes: error },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("Erro interno:", err);
    return NextResponse.json(
      { erro_excecao: err?.message || String(err), stack: err?.stack },
      { status: 500 }
    );
  }
}