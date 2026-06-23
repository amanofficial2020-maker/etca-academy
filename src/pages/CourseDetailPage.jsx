import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { getCourseBySlug, getAllLessons } from '../data/courses'
import StarRating from '../components/common/StarRating'
import paymentQr from '../assets/payment-qr.png'

export default function CourseDetailPage() {
  const { slug } = useParams()
  const course = getCourseBySlug(slug)
const [showPayment, setShowPayment] = useState(false)

  if (!course) {
    return (
      <div className="etca-container" style={{ padding: '120px 24px', textAlign: 'center' }}>
        <h1 style={{ color: '#ffffff', marginBottom: '16px' }}>Course Not Found</h1>
        <Link to="/courses" className="etca-btn-primary">Back to Courses</Link>
      </div>
    )
  }

  const allLessons = getAllLessons(course)
  const totalDuration = allLessons.length

  return (
    <>
      <div className="etca-page-header">
        <div className="etca-container">
          <Link to="/courses" style={{ color: '#d4af37', fontSize: '14px', marginBottom: '16px', display: 'inline-block' }}>
            ← All Courses
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <span style={{ fontSize: '48px' }}>{course.icon}</span>
            <div>
              <span className="etca-section-label">{course.level}</span>
              <h1>{course.title}</h1>
            </div>
          </div>
          <p>{course.description}</p>
          <div style={{ display: 'flex', gap: '24px', marginTop: '20px', flexWrap: 'wrap' }}>
            <StarRating count={Math.floor(course.rating)} />
            <span style={{ color: '#a0a0a0', fontSize: '14px' }}>{course.students} students enrolled</span>
            <span style={{ color: '#a0a0a0', fontSize: '14px' }}>⏱ {course.duration}</span>
            <span style={{ color: '#a0a0a0', fontSize: '14px' }}>👤 {course.instructor}</span>
            <span style={{ color: '#d4af37', fontSize: '18px', fontWeight: 800 }}>{course.price}</span>
          </div>
        </div>
      </div>

      <section className="etca-section" style={{ background: '#0a0a0a' }}>
        <div className="etca-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div>
              <h2 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 700, marginBottom: '24px' }}>
                Course Curriculum ({totalDuration} lessons)
              </h2>

              {course.modules.map((mod, modIndex) => (
                <div key={mod.id} style={{ marginBottom: '24px' }}>
                  <h3 style={{ color: '#d4af37', fontSize: '16px', fontWeight: 700, marginBottom: '12px', padding: '12px 16px', background: '#1a1a1a', borderRadius: '8px', border: '1px solid rgba(212,175,55,0.15)' }}>
                    Module {modIndex + 1}: {mod.title}
                  </h3>
                  <ul style={{ listStyle: 'none' }}>
                    {mod.lessons.map((lesson, lessonIndex) => (
                      <li key={lesson.id}>
                        <Link
                          to={`/courses/${course.slug}/lesson/${lesson.id}`}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '14px 16px',
                            borderBottom: '1px solid rgba(255,255,255,0.05)',
                            color: '#a0a0a0',
                            fontSize: '14px',
                            transition: 'color 0.2s, background 0.2s',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#d4af37'
                            e.currentTarget.style.background = 'rgba(212,175,55,0.05)'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = '#a0a0a0'
                            e.currentTarget.style.background = 'transparent'
                          }}
                        >
                          <span>
                            <span style={{ color: '#666666', marginRight: '12px' }}>{modIndex + 1}.{lessonIndex + 1}</span>
                            {lesson.title}
                          </span>
                          <span style={{ color: '#666666', fontSize: '12px' }}>{lesson.duration}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div>
              <div className="etca-card" style={{ position: 'sticky', top: '96px' }}>
                <h3 style={{ color: '#ffffff', fontSize: '18px', fontWeight: 700, marginBottom: '16px' }}>What You'll Learn</h3>
                <ul style={{ listStyle: 'none', marginBottom: '24px' }}>
                  {course.topics.map((topic) => (
                    <li key={topic} style={{ color: '#a0a0a0', fontSize: '14px', padding: '8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: '#d4af37' }}>✓</span>
                      {topic}
                    </li>
                  ))}
                </ul>
                <Link to={`/courses/${course.slug}/lesson/${allLessons[0]?.id}`} className="etca-btn-primary" style={{ width: '100%', textAlign: 'center', marginBottom: '12px' }}>
                  Start Learning
                </Link>
<button
  className="etca-btn-primary"
  style={{
    width: '100%',
    marginTop: '12px',
    marginBottom: '12px'
  }}
  onClick={() => setShowPayment(!showPayment)}
>
  Enroll Now — {course.price}
</button>
                {showPayment && (
<div
  style={{
    border: '1px solid rgba(212,175,55,0.3)',
    borderRadius: '12px',
    padding: '16px',
    marginTop: '12px',
    textAlign: 'center',
    background: '#111111'
  }}
>
  <h4 style={{ color: '#d4af37', marginBottom: '12px' }}>
    Enroll Now — {course.price}
  </h4>

<img
src={paymentQr}
alt="Payment QR"
style={{
width: '220px',
maxWidth: '100%',
borderRadius: '10px',
marginBottom: '12px'
}}
/>

  <p style={{ color: '#ffffff', fontWeight: 'bold' }}>
    UPI ID: 6263943267@axl
  </p>

  <p style={{ color: '#a0a0a0', fontSize: '14px' }}>
    Scan QR Code and complete payment
  </p>

<a
href="https://wa.me/916263943267"
target="_blank"
rel="noreferrer"
className="etca-btn-primary"
style={{
width: '100%',
display: 'block',
marginTop: '12px'
}}

>

Send Payment Screenshot
</a>

</div>
)}
