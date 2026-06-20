import StarRating from '../common/StarRating'
import { TESTIMONIALS } from '../../data/testimonials'

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="etca-section" style={{ background: '#0a0a0a' }}>
      <div className="etca-container">
        <div style={{ textAlign: 'center' }}>
          <span className="etca-section-label">Success Stories</span>
          <h2 className="etca-section-title">Student Testimonials</h2>
          <p className="etca-section-sub" style={{ margin: '0 auto' }}>
            Hear from traders who transformed their results with ETCA.
          </p>
        </div>

        <div className="etca-testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="etca-card">
              <div style={{ fontSize: '48px', color: 'rgba(212,175,55,0.2)', lineHeight: 1, marginBottom: '16px', fontFamily: 'Georgia, serif' }}>"</div>
              <StarRating count={t.rating} />
              <p style={{ color: '#a0a0a0', fontSize: '15px', lineHeight: 1.7, margin: '16px 0 24px', fontStyle: 'italic' }}>{t.quote}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #d4af37, #b8960c)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    color: '#0a0a0a',
                    fontSize: '16px',
                    flexShrink: 0,
                  }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '15px' }}>{t.name}</div>
                  <div style={{ color: '#666666', fontSize: '13px' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
