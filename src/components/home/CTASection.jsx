import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <section
      style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #141414 0%, rgba(212,175,55,0.08) 50%, #141414 100%)',
        borderTop: '1px solid rgba(212,175,55,0.2)',
        borderBottom: '1px solid rgba(212,175,55,0.2)',
      }}
    >
      <div className="etca-container" style={{ textAlign: 'center' }}>
        <span className="etca-section-label">Ready to Begin?</span>
        <h2 className="etca-section-title" style={{ maxWidth: '700px', margin: '0 auto 16px' }}>
          Join the Elite Traders Community Today
        </h2>
        <p className="etca-section-sub" style={{ margin: '0 auto 40px', textAlign: 'center' }}>
          Take the first step toward financial freedom. Enroll in ETCA and learn from traders who have mastered the markets.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/register" className="etca-btn-primary">Join Academy Now</Link>
          <Link to="/courses" className="etca-btn-outline">Explore Courses</Link>
        </div>
        <p style={{ color: '#666666', fontSize: '14px', marginTop: '24px' }}>
          Contact us at{' '}
          <Link to="/contact" style={{ color: '#d4af37' }}>info@etca-academy.com</Link>
        </p>
      </div>
    </section>
  )
}
