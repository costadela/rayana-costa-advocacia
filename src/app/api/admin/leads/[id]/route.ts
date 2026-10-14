import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createSupabaseAdminClient } from "@/lib/supabase/server";
import { isAdminSessionValid, SESSION_COOKIE_NAME } from "@/lib/admin-session";

const LEAD_STATUSES = ["novo", "contatado", "sem_resposta", "cliente"] as const;
type LeadStatus = (typeof LEAD_STATUSES)[number];

type RouteContext = {
  params: Promise<{ id: string }>;
};

function isLeadStatus(value: unknown): value is LeadStatus {
  return (
    typeof value === "string" &&
    LEAD_STATUSES.some((status) => status === value)
  );
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

async function hasAdminSession() {
  const cookieStore = await cookies();
  return isAdminSessionValid(cookieStore.get(SESSION_COOKIE_NAME)?.value);
}

export async function PATCH(request: Request, { params }: RouteContext) {
  try {
    if (!(await hasAdminSession())) {
      return NextResponse.json({ error: "Acesso não autorizado." }, { status: 401 });
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Corpo da requisição inválido." }, { status: 400 });
    }

    if (
      !isRecord(body) ||
      Object.keys(body).length !== 1 ||
      !("status" in body) ||
      !isLeadStatus(body.status)
    ) {
      return NextResponse.json(
        { error: "Informe somente um status válido para o lead." },
        { status: 400 }
      );
    }

    const { id } = await params;
    const supabaseAdmin = createSupabaseAdminClient();
    const { data, error } = await supabaseAdmin
      .from("leads")
      .update({ status: body.status })
      .eq("id", id)
      .select("id")
      .maybeSingle();

    if (error) {
      console.error("Erro ao atualizar status do lead no Supabase:", error);
      return NextResponse.json(
        { error: "Não foi possível atualizar o status do lead." },
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json({ error: "Lead não encontrado." }, { status: 404 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Erro interno na rota PATCH /api/admin/leads/[id]:", error);
    return NextResponse.json(
      { error: "Erro interno no servidor." },
      { status: 500 }
    );
  }
}

export async function DELETE(_request: Request, { params }: RouteContext) {
  try {
    if (!(await hasAdminSession())) {
      return NextResponse.json({ error: "Acesso não autorizado." }, { status: 401 });
    }

    const { id } = await params;
    const supabaseAdmin = createSupabaseAdminClient();
    const { data, error } = await supabaseAdmin
      .from("leads")
      .delete()
      .eq("id", id)
      .select("id")
      .maybeSingle();

    if (error) {
      console.error("Erro ao excluir lead no Supabase:", error);
      return NextResponse.json(
        { error: "Não foi possível excluir o lead." },
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json({ error: "Lead não encontrado." }, { status: 404 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Erro interno na rota DELETE /api/admin/leads/[id]:", error);
    return NextResponse.json(
      { error: "Erro interno no servidor." },
      { status: 500 }
    );
  }
}
