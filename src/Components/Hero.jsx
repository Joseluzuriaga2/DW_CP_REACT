const Hero = () => (
  <section id="inicio" style={{
    minHeight: '100vh',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    textAlign: 'center',
    padding: '80px 24px 60px',
    background: 'linear-gradient(160deg, #0a1628 0%, #102040 50%, #0f1e3a 100%)',
    position: 'relative', overflow: 'hidden',
  }}>
    {/* Subtle circle accents */}
    <div style={{ position: 'absolute', top: -120, right: -120, width: 400, height: 400, borderRadius: '50%', background: 'rgba(37,99,235,0.06)', pointerEvents: 'none' }} />
    <div style={{ position: 'absolute', bottom: -80, left: -80, width: 300, height: 300, borderRadius: '50%', background: 'rgba(59,130,246,0.05)', pointerEvents: 'none' }} />

    <div style={{ maxWidth: 680, position: 'relative', zIndex: 1 }}>
      <span style={{
        display: 'inline-block', padding: '6px 16px', borderRadius: 20,
        background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(59,130,246,0.3)',
        fontSize: 12, fontWeight: 500, color: '#93c5fd', letterSpacing: '0.08em',
        textTransform: 'uppercase', marginBottom: 28,
      }}>
        Agencia Automotriz Premium
      </span>

      <h1 style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: 'clamp(38px, 6vw, 72px)',
        fontWeight: 600, lineHeight: 1.1,
        color: '#fff', marginBottom: 20,
      }}>
        El auto de tus sueños,<br />
        <span style={{ color: '#3b82f6' }}>a tu alcance</span>
      </h1>

      <p style={{
        fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8,
        maxWidth: 500, margin: '0 auto 40px',
      }}>
        Vehículos disponibles. Financiamiento flexible, garantía extendida y atención personalizada.
      </p>

      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="#modelos" style={{
          padding: '12px 32px', background: '#2563eb', borderRadius: 8,
          fontSize: 14, fontWeight: 500, color: '#fff', transition: 'background 0.2s',
        }}
        onMouseEnter={e => e.target.style.background = '#1d4ed8'}
        onMouseLeave={e => e.target.style.background = '#2563eb'}>
          Ver modelos
        </a>
        <a href="#contacto" style={{
          padding: '12px 32px', border: '1px solid rgba(59,130,246,0.4)', borderRadius: 8,
          fontSize: 14, fontWeight: 500, color: '#93c5fd', transition: 'all 0.2s',
        }}
        onMouseEnter={e => { e.target.style.borderColor = '#3b82f6'; e.target.style.color = '#fff' }}
        onMouseLeave={e => { e.target.style.borderColor = 'rgba(59,130,246,0.4)'; e.target.style.color = '#93c5fd' }}>
          Agendar prueba
        </a>
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', gap: 48, justifyContent: 'center', marginTop: 64, flexWrap: 'wrap' }}>
        {[['200+', 'Vehículos'], ['15 años', 'Experiencia'], ['98%', 'Satisfacción']].map(([n, l]) => (
          <div key={l}>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 30, fontWeight: 600, color: '#3b82f6' }}>{n}</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginTop: 4, letterSpacing: '0.06em' }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Hero
