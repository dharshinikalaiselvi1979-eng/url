export default function RegisterPage() {
  return (
    <>
      <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Create your account</h1>
      <form>
        <input
          type="email"
          placeholder="you@example.com"
          style={{ width: "100%", padding: "0.5rem", marginBottom: "0.75rem" }}
        />
        <input
          type="password"
          placeholder="Choose a password"
          style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
        />
        <button
          type="submit"
          style={{ width: "100%", padding: "0.5rem", background: "#0f172a", color: "white", border: 0, borderRadius: "6px" }}
        >
          Create account
        </button>
      </form>
    </>
  );
}
