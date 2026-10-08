import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAdminSessionValid } from "@/lib/admin-session";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const adminSession = request.cookies.get("admin_session")?.value;
  const isAuthenticated = await isAdminSessionValid(adminSession);

  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    if (!isAuthenticated) {
      const loginUrl = new URL("/admin/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  if (pathname === "/admin/login" && isAuthenticated) {
    const dashboardUrl = new URL("/admin", request.url);
    return NextResponse.redirect(dashboardUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};