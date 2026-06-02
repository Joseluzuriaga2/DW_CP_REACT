const cars = [
  { name: 'Sedán Ejecutivo', desc: 'Confort y elegancia para el día a día.', price: 'Desde $28,000', tag: 'Popular' },
  { name: 'SUV Premium', desc: 'Espacio, potencia y tecnología avanzada.', price: 'Desde $45,000', tag: 'Destacado' },
  { name: 'Deportivo GT', desc: 'Rendimiento puro en cada curva.', price: 'Desde $62,000', tag: 'Exclusivo' },
]

const features = [
  { icon: '', title: 'Financiamiento flexible', desc: 'Planes desde 12 hasta 72 meses con tasas competitivas.' },
  { icon: '', title: 'Servicio certificado', desc: 'Taller propio con técnicos especializados por marca.' },
  { icon: '', title: 'Garantía extendida', desc: 'Hasta 5 años o 100,000 km de cobertura total.' },
  { icon: '', title: 'Test drive gratis', desc: 'Prueba el vehículo antes de tomar tu decisión.' },
]

const Features = () => (
  <>
    {/* Models */}
    <section id="modelos" style={{
      padding: 'clamp(60px, 8vw, 100px) clamp(20px, 5vw, 80px)',
      background: '#0d1e38',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 600, color: '#fff', marginBottom: 12 }}>
            Nuestros modelos
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', maxWidth: 440, margin: '0 auto' }}>
            Selección curada para cada estilo de vida y presupuesto.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          {cars.map(car => (
            <div key={car.name} style={{
              background: 'rgba(26,58,107,0.3)', border: '1px solid rgba(59,130,246,0.15)',
              borderRadius: 12, padding: '28px 24px', transition: 'all 0.3s',
              cursor: 'pointer',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.15)'; e.currentTarget.style.transform = 'translateY(0)' }}>
              {car.tag && (
                <span style={{
                  display: 'inline-block', padding: '3px 10px', borderRadius: 4,
                  background: 'rgba(37,99,235,0.25)', border: '1px solid rgba(59,130,246,0.3)',
                  fontSize: 11, fontWeight: 500, color: '#93c5fd', marginBottom: 16,
                }}>{car.tag}</span>
              )}
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, fontWeight: 600, color: '#fff', marginBottom: 8 }}>
                {car.name}
              </h3>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 20, lineHeight: 1.6 }}>
                {car.desc}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 18, fontWeight: 600, color: '#3b82f6' }}>{car.price}</span>
                <a href="#contacto" style={{
                  fontSize: 13, fontWeight: 500, color: '#93c5fd',
                  padding: '6px 14px', border: '1px solid rgba(59,130,246,0.3)', borderRadius: 6,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.target.style.background = '#2563eb'; e.target.style.color = '#fff' }}
                onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#93c5fd' }}>
                  Consultar →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why us */}
    <section id="nosotros" style={{
      padding: 'clamp(60px, 8vw, 100px) clamp(20px, 5vw, 80px)',
      background: '#0a1628',
      borderTop: '1px solid rgba(37,99,235,0.1)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 600, color: '#fff', marginBottom: 12 }}>
            ¿Por qué elegirnos?
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', maxWidth: 400, margin: '0 auto' }}>
            Más que vender autos, construimos una relación de confianza.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
          {features.map(f => (
            <div key={f.title} style={{
              padding: '28px 22px', borderRadius: 10,
              background: 'rgba(16,32,64,0.6)', border: '1px solid rgba(59,130,246,0.1)',
              transition: 'border-color 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(59,130,246,0.35)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(59,130,246,0.1)'}>
              <div style={{ fontSize: 28, marginBottom: 14 }}>{f.icon}</div>
              <h4 style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 8 }}>{f.title}</h4>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
)

export default Features
