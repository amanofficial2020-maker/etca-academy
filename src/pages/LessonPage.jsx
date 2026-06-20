import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCourseBySlug, getLesson, getAllLessons } from '../data/courses'

export default function LessonPage() {
  const { slug, lessonId } = useParams()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('video')

  const course = getCourseBySlug(slug)
  const lessonData = getLesson(slug, lessonId)

  if (!course || !lessonData) {
    return (
      <div className="etca-container" style={{ padding: '120px 24px', textAlign: 'center' }}>
        <h1 style={{ color: '#ffffff', marginBottom: '16px' }}>Lesson Not Found</h1>
        <Link to="/courses" className="etca-btn-primary">Back to Courses</Link>
      </div>
    )
  }

  const { lesson, module } = lessonData
  const allLessons = getAllLessons(course)
  const currentIndex = allLessons.findIndex((l) => l.id === lessonId)
  const prevLesson = allLessons[currentIndex - 1]
  const nextLesson = allLessons[currentIndex + 1]

  return (
    <div style={{ paddingTop: '72px', minHeight: '100vh', background: '#0a0a0a' }}>
      <div style={{ background: '#141414', borderBottom: '1px solid rgba(212,175,55,0.15)', padding: '16px 24px' }}>
        <div className="etca-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <Link to={`/courses/${slug}`} style={{ color: '#d4af37', fontSize: '13px' }}>
              ← {course.title}
            </Link>
            <h1 style={{ color: '#ffffff', fontSize: '18px', fontWeight: 700, marginTop: '4px' }}>{lesson.title}</h1>
          </div>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="etca-btn-outline etca-btn-sm" style={{ display: 'none' }} id="lesson-menu-btn">
            ☰ Lessons
          </button>
        </div>
      </div>

      <div className="etca-lesson-layout">
        <aside className={`etca-lesson-sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div style={{ padding: '0 16px 16px', borderBottom: '1px solid rgba(212,175,55,0.1)' }}>
            <div style={{ color: '#d4af37', fontSize: '12px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
              {course.icon} {course.title}
            </div>
          </div>
          {course.modules.map((mod) => (
            <div key={mod.id}>
              <div style={{ padding: '12px 16px', color: '#666666', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
                {mod.title}
              </div>
              {mod.lessons.map((l) => (
                <Link
                  key={l.id}
                  to={`/courses/${slug}/lesson/${l.id}`}
                  onClick={() => setSidebarOpen(false)}
                  style={{
                    display: 'block',
                    padding: '10px 16px',
                    fontSize: '13px',
                    color: l.id === lessonId ? '#d4af37' : '#a0a0a0',
                    background: l.id === lessonId ? 'rgba(212,175,55,0.1)' : 'transparent',
                    borderLeft: l.id === lessonId ? '3px solid #d4af37' : '3px solid transparent',
                    transition: 'all 0.2s',
                  }}
                >
                  {l.title}
                  <span style={{ display: 'block', color: '#666666', fontSize: '11px', marginTop: '2px' }}>{l.duration}</span>
                </Link>
              ))}
            </div>
          ))}
        </aside>

        <div className="etca-lesson-content">
          <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
            {['video', 'notes'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: 600,
                  background: activeTab === tab ? 'rgba(212,175,55,0.15)' : 'transparent',
                  color: activeTab === tab ? '#d4af37' : '#a0a0a0',
                  border: activeTab === tab ? '1px solid rgba(212,175,55,0.3)' : '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {tab === 'video' ? '▶ Video Lesson' : '📄 PDF Notes'}
              </button>
            ))}
          </div>

          {activeTab === 'video' && (
            <>
              <div className="etca-video-player">
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '64px', marginBottom: '16px', opacity: 0.5 }}>▶</div>
                  <p style={{ color: '#a0a0a0', fontSize: '16px', marginBottom: '8px' }}>{lesson.title}</p>
                  <p style={{ color: '#666666', fontSize: '14px' }}>Duration: {lesson.duration} · Module: {module.title}</p>
                  <p style={{ color: '#666666', fontSize: '12px', marginTop: '12px' }}>
                    Video player placeholder — connect your video hosting service
                  </p>
                </div>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h2 style={{ color: '#ffffff', fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>{lesson.title}</h2>
                <p style={{ color: '#a0a0a0', lineHeight: 1.7, fontSize: '15px' }}>
                  In this lesson, you'll learn key concepts from the {module.title} module.
                  Watch the full video and review the PDF notes for comprehensive understanding.
                </p>
              </div>
            </>
          )}

          {activeTab === 'notes' && (
            <div className="etca-pdf-section">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <h2 style={{ color: '#d4af37', fontSize: '20px', fontWeight: 700, marginBottom: '4px' }}>
                    📄 {lesson.pdfTitle}
                  </h2>
                  <p style={{ color: '#666666', fontSize: '13px' }}>{course.title} · {lesson.title}</p>
                </div>
                <button className="etca-btn-outline etca-btn-sm">Download PDF</button>
              </div>
              <pre>{lesson.pdfContent}</pre>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.06)', flexWrap: 'wrap', gap: '12px' }}>
            {prevLesson ? (
              <Link to={`/courses/${slug}/lesson/${prevLesson.id}`} className="etca-btn-outline etca-btn-sm">
                ← {prevLesson.title}
              </Link>
            ) : <div />}
            {nextLesson ? (
              <Link to={`/courses/${slug}/lesson/${nextLesson.id}`} className="etca-btn-primary etca-btn-sm">
                {nextLesson.title} →
              </Link>
            ) : (
              <Link to={`/certificate/${slug}`} className="etca-btn-primary etca-btn-sm">
                Get Certificate →
              </Link>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #lesson-menu-btn { display: inline-flex !important; }
        }
      `}</style>
    </div>
  )
}
