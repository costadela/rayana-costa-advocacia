import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Obtém o cookie de sessão do administrador
  const adminSession = request.cookies.get("admin_session")?.value;

  // 1. Se o usuário estiver tentando acessar qualquer subrota de /admin (exceto a tela de login)
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    // Se NÃO tiver sessão ativa, redireciona imediatamente para o login
    if (!adminSession) {
      const loginUrl = new URL("/admin/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // 2. Se o usuário JÁ estiver autenticado e tentar acessar a tela de login, redireciona para o Dashboard
  if (pathname === "/admin/login" && adminSession) {
    const dashboardUrl = new URL("/admin", request.url);
    return NextResponse.redirect(dashboardUrl);
  }

  return NextResponse.next();
}

// Configuração para aplicar o middleware apenas às rotas administrativas
export const config = {
  matcher: ["/admin/:path*"],
};