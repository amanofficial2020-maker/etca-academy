import { Link } from 'react-router-dom'
import { COURSES } from '../data/courses'
import StarRating from '../components/common/StarRating'

export default function CoursesPage() {
  return (
    <>
      <div className="etca-page-header">
        <div className="etca-container">
          <span className="etca-section-label">Our Programs</span>
          <h1>Trading Courses</h1>
          <p>Master Forex, Gold, Crypto, ICT and Smart Money Concepts with expert-led programs.</p>
        </div>
      </div>

      <section className="etca-section" style={{ background: '#0a0a0a' }}>
        <div className="etca-container">
          <div className="etca-grid-auto">
            {COURSES.map((course) => (
              <div key={course.slug} className="etca-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{ fontSize: '36px' }}>{course.icon}</div>
                  <span style={{ background: 'rgba(212,175,55,0.15)', color: '#d4af37', fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: '20px' }}>
                    {course.level}
                  </span>
                </div>

                <h3 style={{ color: '#ffffff', fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>{course.title}</h3>
                <p style={{ color: '#a0a0a0', fontSize: '14px', lineHeight: 1.7, marginBottom: '16px', flex: 1 }}>{course.description}</p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <StarRating count={Math.floor(course.rating)} />
                  <span style={{ color: '#d4af37', fontSize: '13px', fontWeight: 600 }}>{course.rating}</span>
                  <span style={{ color: '#666666', fontSize: '13px' }}>({course.students} students)</span>
                </div>

                <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', flexWrap: 'wrap' }}>
                  <span style={{ color: '#666666', fontSize: '13px' }}>⏱ {course.duration}</span>
                  <span style={{ color: '#666666', fontSize: '13px' }}>👤 {course.instructor}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '20px' }}>
                  <span style={{ color: '#d4af37', fontSize: '22px', fontWeight: 800 }}>{course.price}</span>
                  <Link to={`/courses/${course.slug}`} className="etca-btn-primary etca-btn-sm">
                    View Course
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
