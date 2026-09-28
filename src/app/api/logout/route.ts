import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true }, { status: 200 });

  // Remove o cookie ao encerrar a sessão
  response.cookies.set("admin_session", "", {
    httpOnly: true,
    expires: new Date(0),
    path: "/",
  });

  return response;
}