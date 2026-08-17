export default function HomePage() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#333' }}>Build faster, ship sooner</h1>
      <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
        Marketing landing copy goes here. Welcome to our awesome platform!
      </p>
      <button style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Get Started
      </button>
    </div>
  );
}
