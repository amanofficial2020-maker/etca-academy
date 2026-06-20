import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '72px',
        background: `radial-gradient(ellipse at 20% 50%, rgba(212,175,55,0.08) 0%, transparent 60%),
                     radial-gradient(ellipse at 80% 20%, rgba(212,175,55,0.05) 0%, transparent 50%),
                     #0a0a0a`,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(212,175,55,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />
      <div className="etca-container" style={{ position: 'relative', zIndex: 1, padding: '80px 24px' }}>
        <div style={{ maxWidth: '780px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '50px',
              border: '1px solid rgba(212,175,55,0.4)',
              background: 'rgba(212,175,55,0.08)',
              marginBottom: '28px',
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#d4af37', display: 'inline-block' }} />
            <span style={{ color: '#d4af37', fontSize: '13px', fontWeight: 600, letterSpacing: '1px' }}>
              ELITE TRADERS COMMUNITY ACADEMY
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px', color: '#ffffff' }}>
            Master Trading{' '}
            <span style={{ background: 'linear-gradient(135deg, #f0d060, #d4af37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              With Confidence
            </span>
          </h1>

          <p style={{ fontSize: 'clamp(16px, 2.5vw, 20px)', color: '#a0a0a0', lineHeight: 1.7, marginBottom: '40px', maxWidth: '620px' }}>
            Learn Forex, Gold, Crypto, ICT and Smart Money Concepts from Basic to Advanced.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/register" className="etca-btn-primary">Join Academy</Link>
            <Link to="/courses" className="etca-btn-outline">View Courses</Link>
          </div>

          <div style={{ display: 'flex', gap: '32px', marginTop: '56px', flexWrap: 'wrap' }}>
            {['Forex', 'Gold', 'Crypto', 'ICT', 'SMC'].map((tag) => (
              <span key={tag} style={{ color: '#666666', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
