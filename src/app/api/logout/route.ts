import { NextResponse } from "next/server";
import { SESSION_COOKIE_NAME } from "@/lib/admin-session";

export async function POST() {
  const response = NextResponse.json({ success: true }, { status: 200 });

  // Remove o cookie ao encerrar a sessão
  response.cookies.set(SESSION_COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: new Date(0),
    path: "/",
  });

  return response;
}