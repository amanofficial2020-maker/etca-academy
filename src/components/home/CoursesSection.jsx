import { Link } from 'react-router-dom'
import { COURSES } from '../../data/courses'

export default function CoursesSection() {
  return (
    <section id="courses" className="etca-section" style={{ background: '#141414', borderTop: '1px solid rgba(212,175,55,0.1)' }}>
      <div className="etca-container">
        <div style={{ textAlign: 'center' }}>
          <span className="etca-section-label">Our Programs</span>
          <h2 className="etca-section-title">Trading Courses</h2>
          <p className="etca-section-sub" style={{ margin: '0 auto' }}>
            Comprehensive programs designed to take you from beginner to elite trader across every major market.
          </p>
        </div>

        <div className="etca-grid-auto" style={{ marginTop: '48px' }}>
          {COURSES.map((course) => (
            <div key={course.slug} className="etca-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '36px', marginBottom: '16px' }}>{course.icon}</div>
              <h3 style={{ color: '#d4af37', fontSize: '20px', fontWeight: 800, marginBottom: '12px' }}>{course.title}</h3>
              <p style={{ color: '#a0a0a0', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px', flex: 1 }}>{course.description}</p>
              <ul style={{ listStyle: 'none', marginBottom: '24px' }}>
                {course.topics.map((topic) => (
                  <li key={topic} style={{ color: '#ffffff', fontSize: '13px', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#d4af37', fontSize: '10px' }}>◆</span>
                    {topic}
                  </li>
                ))}
              </ul>
              <Link to={`/courses/${course.slug}`} className="etca-btn-outline etca-btn-sm" style={{ textAlign: 'center' }}>
                Enroll Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
