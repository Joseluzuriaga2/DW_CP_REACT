import { useState } from 'react'

const field = (label, name, type, placeholder) => ({ label, name, type, placeholder })

const ContactForm = () => {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', modelo: '', mensaje: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.nombre.trim() || form.nombre.trim().length < 3) e.nombre = 'Ingresa tu nombre completo'
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email inválido'
    if (!form.telefono || !/^\+?[\d\s\-]{7,}$/.test(form.telefono)) e.telefono = 'Teléfono inválido'
    if (!form.modelo) e.modelo = 'Selecciona un modelo'
    if (!form.mensaje.trim() || form.mensaje.trim().length < 10) e.mensaje = 'Mensaje demasiado corto'
    return e
  }

  const handleChange = e => {
    const { name, value } = e.target
    setForm(p => ({ ...p, [name]: value }))
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSent(true)
  }

  const inputStyle = (name) => ({
    width: '100%', padding: '11px 14px',
    background: 'rgba(10,22,40,0.7)',
    border: `1px solid ${errors[name] ? '#ef4444' : 'rgba(59,130,246,0.25)'}`,
    borderRadius: 7, color: '#fff', fontSize: 14, outline: 'none',
    transition: 'border-color 0.2s',
  })

  const labelStyle = (name) => ({
    display: 'block', fontSize: 12, fontWeight: 500,
    color: errors[name] ? '#f87171' : 'rgba(255,255,255,0.55)',
    marginBottom: 6, letterSpacing: '0.04em',
  })

  return (
    <section id="contacto" style={{
      padding: 'clamp(60px, 8vw, 100px) clamp(20px, 5vw, 80px)',
      background: '#0d1e38', borderTop: '1px solid rgba(37,99,235,0.1)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 600, color: '#fff', marginBottom: 12 }}>
            Contáctanos
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', maxWidth: 400, margin: '0 auto' }}>
            Escríbenos y un asesor se pondrá en contacto contigo en menos de 24 horas.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.6fr',
          gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start',
        }} className="contact-grid">

          {/* Info */}
          <div>
            {[
              { label: 'Dirección', value: 'Av. Amazonas N35-17, Quito' },
              { label: 'Teléfono', value: '+593 2 345 6789' },
              { label: 'Email', value: 'info@autoelite.ec' },
              { label: 'Horario', value: 'Lun–Sáb 9:00–19:00' },
            ].map(item => (
              <div key={item.label} style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 11, fontWeight: 500, color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>
                  {item.label}
                </div>
                <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)' }}>{item.value}</div>
              </div>
            ))}

            <div style={{ marginTop: 36, padding: '20px', background: 'rgba(37,99,235,0.1)', borderRadius: 10, border: '1px solid rgba(59,130,246,0.2)' }}>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
                También puedes visitar nuestro showroom. Te esperamos con café y sin compromisos.
              </p>
            </div>
          </div>

          {/* Form */}
          <div style={{
            background: 'rgba(16,32,64,0.5)', border: '1px solid rgba(59,130,246,0.15)',
            borderRadius: 12, padding: 'clamp(24px, 4vw, 40px)',
          }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 26, color: '#fff', marginBottom: 12 }}>
                  ¡Mensaje enviado!
                </h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 28 }}>
                  Gracias, {form.nombre.split(' ')[0]}. Te contactaremos pronto.
                </p>
                <button onClick={() => { setSent(false); setForm({ nombre:'', email:'', telefono:'', modelo:'', mensaje:'' }) }}
                  style={{
                    padding: '10px 24px', border: '1px solid rgba(59,130,246,0.4)', borderRadius: 7,
                    background: 'transparent', color: '#93c5fd', fontSize: 13, cursor: 'pointer',
                  }}>
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
                  {/* Nombre */}
                  <div>
                    <label style={labelStyle('nombre')}>Nombre completo</label>
                    <input name="nombre" value={form.nombre} onChange={handleChange}
                      placeholder="Juan Pérez" style={inputStyle('nombre')}
                      onFocus={e => e.target.style.borderColor = '#3b82f6'}
                      onBlur={e => e.target.style.borderColor = errors.nombre ? '#ef4444' : 'rgba(59,130,246,0.25)'} />
                    {errors.nombre && <p style={{ fontSize: 11, color: '#f87171', marginTop: 4 }}>{errors.nombre}</p>}
                  </div>
                  {/* Email */}
                  <div>
                    <label style={labelStyle('email')}>Correo electrónico</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange}
                      placeholder="juan@email.com" style={inputStyle('email')}
                      onFocus={e => e.target.style.borderColor = '#3b82f6'}
                      onBlur={e => e.target.style.borderColor = errors.email ? '#ef4444' : 'rgba(59,130,246,0.25)'} />
                    {errors.email && <p style={{ fontSize: 11, color: '#f87171', marginTop: 4 }}>{errors.email}</p>}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
                  {/* Teléfono */}
                  <div>
                    <label style={labelStyle('telefono')}>Teléfono</label>
                    <input name="telefono" type="tel" value={form.telefono} onChange={handleChange}
                      placeholder="+593 9 9999 9999" style={inputStyle('telefono')}
                      onFocus={e => e.target.style.borderColor = '#3b82f6'}
                      onBlur={e => e.target.style.borderColor = errors.telefono ? '#ef4444' : 'rgba(59,130,246,0.25)'} />
                    {errors.telefono && <p style={{ fontSize: 11, color: '#f87171', marginTop: 4 }}>{errors.telefono}</p>}
                  </div>
                  {/* Modelo */}
                  <div>
                    <label style={labelStyle('modelo')}>Modelo de interés</label>
                    <select name="modelo" value={form.modelo} onChange={handleChange}
                      style={{ ...inputStyle('modelo'), cursor: 'pointer', appearance: 'none' }}>
                      <option value="">Seleccionar...</option>
                      <option value="sedan">Sedán Ejecutivo</option>
                      <option value="suv">SUV Premium</option>
                      <option value="deportivo">Deportivo GT</option>
                      <option value="otro">Otro / Asesoría</option>
                    </select>
                    {errors.modelo && <p style={{ fontSize: 11, color: '#f87171', marginTop: 4 }}>{errors.modelo}</p>}
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label style={labelStyle('mensaje')}>Mensaje</label>
                  <textarea name="mensaje" value={form.mensaje} onChange={handleChange}
                    placeholder="¿En qué podemos ayudarte?" rows={4}
                    style={{ ...inputStyle('mensaje'), resize: 'none', lineHeight: 1.6 }}
                    onFocus={e => e.target.style.borderColor = '#3b82f6'}
                    onBlur={e => e.target.style.borderColor = errors.mensaje ? '#ef4444' : 'rgba(59,130,246,0.25)'} />
                  {errors.mensaje && <p style={{ fontSize: 11, color: '#f87171', marginTop: 4 }}>{errors.mensaje}</p>}
                </div>

                <button type="submit" style={{
                  padding: '13px', background: '#2563eb', border: 'none', borderRadius: 8,
                  color: '#fff', fontSize: 14, fontWeight: 500, cursor: 'pointer',
                  transition: 'background 0.2s', marginTop: 4,
                }}
                onMouseEnter={e => e.target.style.background = '#1d4ed8'}
                onMouseLeave={e => e.target.style.background = '#2563eb'}>
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
        select option { background: #0d1e38; }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.2); }
      `}</style>
    </section>
  )
}

export default ContactForm
