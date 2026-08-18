/* 
 * ROUTE GROUP: (auth)
 * -------------------
 * 1. Just like (marketing), (auth) is a Route Group because of the parentheses.
 * 2. Pages inside here (like `/login`, `/register`) will be accessible directly at
 *    the root URL, completely ignoring the `(auth)` folder name in the browser URL.
 * 3. By placing this layout.tsx file here, we can define a completely different 
 *    visual structure (a centered card layout with no navigation bar) specifically 
 *    for authentication pages, coexisting alongside the marketing layout!
 */
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#f8fafc",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "380px",
          background: "white",
          padding: "2.5rem",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
