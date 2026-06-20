const STATS = [
  { value: '500+', label: 'Students Trained' },
  { value: '7+', label: 'Years Experience' },
  { value: '3', label: 'Markets Covered', sub: 'Forex, Gold & Crypto' },
]

export default function StatsSection() {
  return (
    <section
      style={{
        background: '#141414',
        borderTop: '1px solid rgba(212,175,55,0.15)',
        borderBottom: '1px solid rgba(212,175,55,0.15)',
        padding: '60px 0',
      }}
    >
      <div className="etca-container">
        <div className="etca-stats-grid">
          {STATS.map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center', padding: '32px 24px' }}>
              <div
                style={{
                  fontSize: 'clamp(40px, 5vw, 56px)',
                  fontWeight: 900,
                  background: 'linear-gradient(135deg, #f0d060, #d4af37)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1,
                  marginBottom: '8px',
                }}
              >
                {stat.value}
              </div>
              <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '16px', marginBottom: '4px' }}>{stat.label}</div>
              {stat.sub && <div style={{ color: '#a0a0a0', fontSize: '13px' }}>{stat.sub}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
