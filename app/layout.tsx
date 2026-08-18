/* 
 * ROOT LAYOUT
 * -----------
 * 1. This is the top-most layout that applies to every single page in the app.
 * 2. Notice that it does NOT contain any UI elements like a Header or Footer.
 * 3. Because the Root Layout is kept barebones, the `(marketing)` and `(auth)` 
 *    Route Groups can completely define their own unique layouts. 
 *    This is how multiple distinct layouts can cleanly coexist in one application!
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
