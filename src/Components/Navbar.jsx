import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 40px',
      height: 64,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(10,22,40,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(37,99,235,0.2)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 20, fontWeight: 600, letterSpacing: '0.05em' }}>
        Auto<span style={{ color: '#3b82f6' }}>Elite</span>
      </span>

      <ul style={{ display: 'flex', listStyle: 'none', gap: 32, alignItems: 'center' }} className="nav-desktop">
        {['Inicio', 'Modelos', 'Nosotros', 'Contacto'].map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#3b82f6'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}>
              {l}
            </a>
          </li>
        ))}
        <li>
          <a href="#contacto" style={{
            padding: '8px 20px', background: '#2563eb', borderRadius: 6,
            fontSize: 13, fontWeight: 500, color: '#fff', transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.target.style.background = '#1d4ed8'}
          onMouseLeave={e => e.target.style.background = '#2563eb'}>
            Cotizar
          </a>
        </li>
      </ul>

      <button onClick={() => setOpen(!open)} className="nav-burger"
        style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          {[0,1,2].map(i => (
            <span key={i} style={{ display: 'block', width: 22, height: 2, background: '#3b82f6', borderRadius: 2 }} />
          ))}
        </div>
      </button>

      {open && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(10,22,40,0.97)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 36,
          zIndex: 99,
        }}>
          {['Inicio', 'Modelos', 'Nosotros', 'Contacto'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              style={{ fontFamily: 'Playfair Display, serif', fontSize: 28, color: 'rgba(255,255,255,0.85)' }}>
              {l}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 700px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}

export default Navbar