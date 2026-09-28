import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, whatsapp, email, caso } = body;

    if (!nome || !whatsapp || !email || !caso) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseServer
      .from("leads")
      .insert([{ nome, whatsapp, email, caso, status: "novo" }]);

    if (error) {
      console.error("Erro ao inserir no Supabase:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Erro na API de leads:", err);
    return NextResponse.json(
      { error: "Erro interno no servidor." },
      { status: 500 }
    );
  }
}