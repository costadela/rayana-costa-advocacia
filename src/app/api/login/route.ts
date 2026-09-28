import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const envEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
    const envPassword = process.env.ADMIN_PASSWORD?.trim();

    if (!envEmail || !envPassword) {
      return NextResponse.json(
        { error: "Credenciais de administrador não configuradas no servidor." },
        { status: 500 }
      );
    }

    const inputEmail = email?.trim().toLowerCase();
    const inputPassword = password?.trim();

    if (inputEmail !== envEmail || inputPassword !== envPassword) {
      return NextResponse.json(
        { error: "E-mail ou senha incorretos." },
        { status: 401 }
      );
    }

    const response = NextResponse.json({ success: true }, { status: 200 });

    // Cookie de sessão seguro com validade de 2 horas (7200 segundos)
    response.cookies.set("admin_session", "authenticated", {
      httpOnly: true, // Impede que scripts no navegador leiam o cookie
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 2, // 2 horas de validade
      path: "/",
    });

    return response;
  } catch (err) {
    console.error("Erro no login:", err);
    return NextResponse.json(
      { error: "Erro interno no servidor." },
      { status: 500 }
    );
  }
}