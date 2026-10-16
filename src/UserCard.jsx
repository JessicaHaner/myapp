function UserCard({ name, age, profession, avatarUrl, isMentor, focus, children }) {
  return (
    <article className="card" style={{ background: '#111827', border: '1px solid #334155', borderRadius: '1rem', padding: '1rem', color: '#f8fafc' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <img
          src={avatarUrl}
          alt={name}
          style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover' }}
        />
        <div>
          <h3 style={{ margin: 0 }}>{name}</h3>
          <p style={{ margin: '0.25rem 0 0', color: '#94a3b8' }}>
            {age} anos · {profession}
          </p>
        </div>
      </div>

      {isMentor && <span style={{ display: 'inline-block', marginBottom: '0.75rem', color: '#5eead4', fontWeight: 700 }}>Mentor</span>}

      <p style={{ margin: '0.5rem 0', color: '#cbd5e1' }}>
        {focus}
      </p>

      {children}
    </article>
  );
}

export default UserCard;
