import { Link } from 'react-router-dom'

const FEATURES = [
  { icon: '🎯', title: 'Precision Training', desc: 'Structured curriculum from basics to pro level' },
  { icon: '👥', title: 'Live Community', desc: 'Trade alongside mentors and fellow students' },
  { icon: '📈', title: 'Real Strategies', desc: 'Battle-tested methods, not theory alone' },
  { icon: '🛡️', title: 'Risk First', desc: 'Capital preservation built into every lesson' },
]

export default function AboutSection() {
  return (
    <section id="about" className="etca-section" style={{ background: '#0a0a0a' }}>
      <div className="etca-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div>
            <span className="etca-section-label">About ETCA</span>
            <h2 className="etca-section-title">
              Where Elite Traders Are <span style={{ color: '#d4af37' }}>Built</span>
            </h2>
            <p className="etca-section-sub" style={{ marginBottom: '24px' }}>
              Elite Traders Community Academy is a premium trading education platform
              dedicated to transforming aspiring traders into confident, profitable market participants.
            </p>
            <p style={{ color: '#a0a0a0', lineHeight: 1.7, fontSize: '16px', marginBottom: '32px' }}>
              With over 7 years of real-market experience, our mentors teach proven
              strategies across Forex, Gold, and Crypto — including ICT and Smart Money
              Concepts used by institutional traders worldwide.
            </p>
            <Link to="/register" className="etca-btn-primary">Start Your Journey</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {FEATURES.map((item) => (
              <div key={item.title} className="etca-card" style={{ padding: '24px' }}>
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>{item.icon}</div>
                <div style={{ color: '#d4af37', fontWeight: 700, fontSize: '15px', marginBottom: '8px' }}>{item.title}</div>
                <div style={{ color: '#a0a0a0', fontSize: '13px', lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
