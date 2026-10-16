export function Header({ brand, description, children }) {
  return (
    <header style={{ background: '#0f172a', color: '#f8fafc', borderBottom: '1px solid #1e293b' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', padding: '1rem 2rem' }}>
        <div>
          <strong style={{ display: 'block', fontSize: '1.25rem' }}>{brand}</strong>
          <small style={{ color: '#94a3b8' }}>{description}</small>
        </div>

        <nav style={{ display: 'flex', gap: '1rem' }}>
          {children}
        </nav>
      </div>
    </header>
  );
}
