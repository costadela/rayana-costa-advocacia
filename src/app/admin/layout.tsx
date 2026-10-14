import AdminNavbar from "./AdminNavbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-offwhite flex flex-col">
      <AdminNavbar />
      <main className="flex-1">{children}</main>
      <footer className="border-t border-gold/10 bg-black py-6 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-xs text-offwhite/40">
          © {new Date().getFullYear()} Rayana Costa Advocacia. Painel Administrativo de Uso Interno.
        </div>
      </footer>
    </div>
  );
}
