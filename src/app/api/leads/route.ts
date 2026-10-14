import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export async function POST(request: Request) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Corpo da requisição inválido." },
        { status: 400 }
      );
    }

    if (
      !isRecord(body) ||
      typeof body.nome !== "string" ||
      typeof body.whatsapp !== "string" ||
      typeof body.email !== "string" ||
      typeof body.caso !== "string"
    ) {
      return NextResponse.json(
        { error: "Informe nome, WhatsApp, e-mail e descrição do caso." },
        { status: 400 }
      );
    }

    const nome = body.nome.trim();
    const whatsapp = body.whatsapp.replace(/\D/g, "");
    const email = body.email.trim();
    const caso = body.caso.trim();

    if (
      nome.length < 3 ||
      nome.length > 200 ||
      whatsapp.length < 10 ||
      whatsapp.length > 11 ||
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      caso.length < 10 ||
      caso.length > 5000
    ) {
      return NextResponse.json(
        { error: "Um ou mais campos são inválidos." },
        { status: 400 }
      );
    }

    const { error } = await supabaseServer
      .from("leads")
      .insert([{ nome, whatsapp, email, caso, status: "novo" }]);

    if (error) {
      console.error("Erro ao inserir no Supabase:", error);
      return NextResponse.json(
        { error: "Não foi possível registrar o contato." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error("Erro na API de leads:", err);
    return NextResponse.json(
      { error: "Erro interno no servidor." },
      { status: 500 }
    );
  }
}