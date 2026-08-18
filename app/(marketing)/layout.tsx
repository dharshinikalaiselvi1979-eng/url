import Link from "next/link";

/* 
 * ROUTE GROUP: (marketing)
 * ------------------------
 * 1. The folder name is wrapped in parentheses, which tells Next.js this is a "Route Group".
 * 2. Organizational Purpose: It allows us to group related routes (like about, pricing) 
 *    in the codebase without affecting the URL structure. 
 *    (e.g., the URL is `/pricing`, NOT `/marketing/pricing`).
 * 3. Multiple Layouts Coexisting: Because this layout is inside the `(marketing)` folder,
 *    it ONLY applies to the pages within this group. It does not affect pages in other 
 *    groups like `(auth)`. This allows us to provide a unique Header and Footer just for 
 *    the marketing pages!
 */
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header style={{ padding: "1.5rem 2rem", background: "#0f172a", color: "white" }}>
        <nav style={{ display: "flex", gap: "1.5rem" }}>
          <Link href="/" style={{ color: "white", fontWeight: 700 }}>
            OurProduct
          </Link>
          <Link href="/about" style={{ color: "white" }}>About</Link>
          <Link href="/pricing" style={{ color: "white" }}>Pricing</Link>
          <Link href="/login" style={{ marginLeft: "auto", color: "white" }}>
            Sign in
          </Link>
        </nav>
      </header>
      <main style={{ maxWidth: "960px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        {children}
      </main>
      <footer style={{ padding: "2rem", background: "#f1f5f9", textAlign: "center" }}>
        © 2026 OurProduct
      </footer>
    </div>
  );
}
