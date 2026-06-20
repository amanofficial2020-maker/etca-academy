import { Link, useParams } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getCourseBySlug } from '../data/courses'

export default function CertificatePage() {
  const { courseId } = useParams()
  const { user } = useAuth()
  const course = getCourseBySlug(courseId)

  if (!course) {
    return (
      <div className="etca-container" style={{ padding: '120px 24px', textAlign: 'center' }}>
        <h1 style={{ color: '#ffffff', marginBottom: '16px' }}>Certificate Not Found</h1>
        <Link to="/courses" className="etca-btn-primary">Back to Courses</Link>
      </div>
    )
  }

  const issueDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <div className="etca-page-header">
        <div className="etca-container">
          <span className="etca-section-label">Achievement</span>
          <h1>Certificate of Completion</h1>
          <p>Official ETCA certification for completing {course.title}</p>
        </div>
      </div>

      <section className="etca-section" style={{ background: '#0a0a0a' }}>
        <div className="etca-container" style={{ maxWidth: '800px' }}>
          <div
            style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #141414 100%)',
              border: '2px solid #d4af37',
              borderRadius: '16px',
              padding: '48px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-40px',
                right: '-40px',
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                background: 'rgba(212,175,55,0.05)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '-40px',
                left: '-40px',
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                background: 'rgba(212,175,55,0.05)',
              }}
            />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: '48px', marginBottom: '8px' }}>🏆</div>
              <div style={{ color: '#d4af37', fontSize: '12px', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '24px' }}>
                Certificate of Completion
              </div>

              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #d4af37, #b8960c)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  fontSize: '28px',
                  color: '#0a0a0a',
                  margin: '0 auto 24px',
                }}
              >
                E
              </div>

              <p style={{ color: '#a0a0a0', fontSize: '15px', marginBottom: '8px' }}>This certifies that</p>
              <h2 style={{ color: '#ffffff', fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, marginBottom: '8px' }}>
                {user?.name || 'ETCA Student'}
              </h2>
              <p style={{ color: '#a0a0a0', fontSize: '15px', marginBottom: '24px', lineHeight: 1.6 }}>
                has successfully completed the
              </p>
              <h3 style={{ color: '#d4af37', fontSize: 'clamp(18px, 3vw, 26px)', fontWeight: 800, marginBottom: '8px' }}>
                {course.icon} {course.title}
              </h3>
              <p style={{ color: '#666666', fontSize: '14px', marginBottom: '32px' }}>
                {course.level} · {course.duration} · Instructor: {course.instructor}
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap', marginBottom: '32px' }}>
                <div>
                  <div style={{ color: '#666666', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>Date Issued</div>
                  <div style={{ color: '#ffffff', fontSize: '14px', fontWeight: 600 }}>{issueDate}</div>
                </div>
                <div>
                  <div style={{ color: '#666666', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>Certificate ID</div>
                  <div style={{ color: '#ffffff', fontSize: '14px', fontWeight: 600 }}>ETCA-{course.id.toUpperCase()}-{Date.now().toString().slice(-6)}</div>
                </div>
              </div>

              <div style={{ borderTop: '1px solid rgba(212,175,55,0.2)', paddingTop: '24px' }}>
                <div style={{ color: '#d4af37', fontWeight: 800, fontSize: '16px', letterSpacing: '2px' }}>ETCA</div>
                <div style={{ color: '#666666', fontSize: '12px' }}>Elite Traders Community Academy</div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '32px', flexWrap: 'wrap' }}>
            <button className="etca-btn-primary etca-btn-sm" onClick={() => window.print()}>
              Print Certificate
            </button>
            <Link to={`/courses/${course.slug}`} className="etca-btn-outline etca-btn-sm">
              Back to Course
            </Link>
            <Link to="/dashboard" className="etca-btn-outline etca-btn-sm">
              Dashboard
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
