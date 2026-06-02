const Footer = () => (
  <footer style={{
    background: '#071020',
    borderTop: '1px solid rgba(37,99,235,0.15)',
    padding: 'clamp(40px, 5vw, 64px) clamp(20px, 5vw, 80px) 28px',
  }}>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 40, marginBottom: 48 }} className="footer-grid">
        <div>
          <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, fontWeight: 600, color: '#fff', marginBottom: 14 }}>
            Auto<span style={{ color: '#3b82f6' }}>Elite</span>
          </div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.8, maxWidth: 260 }}>
            Tu agencia automotriz de confianza en Ecuador. Más de 15 años conectando personas con el vehículo perfecto.
          </p>
        </div>

        {[
          { title: 'Navegación', links: ['Inicio', 'Modelos', 'Nosotros', 'Contacto'] },
          { title: 'Servicios', links: ['Financiamiento', 'Garantía', 'Test Drive', 'Post-venta'] },
        ].map(col => (
          <div key={col.title}>
            <h4 style={{ fontSize: 12, fontWeight: 600, color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>
              {col.title}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {col.links.map(l => (
                <li key={l}>
                  <a href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.8)'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>
          © {new Date().getFullYear()} AutoElite. Todos los derechos reservados.
        </p>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>Quito, Ecuador</p>
      </div>
    </div>

    <style>{`
      @media (max-width: 640px) {
        .footer-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </footer>
)

export default Footer
