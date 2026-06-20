import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { COURSES, getAllLessons } from '../data/courses'

export default function DashboardPage() {
  const { user } = useAuth()

  const enrolledCourses = COURSES.filter((c) => user?.enrolledCourses?.includes(c.slug))

  const totalLessons = enrolledCourses.reduce(
    (acc, course) => acc + getAllLessons(course).length,
    0
  )
  const completedCount = user?.completedLessons?.length || 0
  const progress = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0

  return (
    <div>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
          Welcome back, {user?.name?.split(' ')[0]} 👋
        </h1>
        <p style={{ color: '#a0a0a0', fontSize: '15px' }}>
          Continue your trading education journey
        </p>
      </div>

      <div className="etca-grid-3" style={{ marginBottom: '40px' }}>
        {[
          { label: 'Enrolled Courses', value: enrolledCourses.length, icon: '📚' },
          { label: 'Lessons Completed', value: completedCount, icon: '✅' },
          { label: 'Overall Progress', value: `${progress}%`, icon: '📈' },
        ].map((stat) => (
          <div key={stat.label} className="etca-card" style={{ padding: '24px' }}>
            <div style={{ fontSize: '28px', marginBottom: '12px' }}>{stat.icon}</div>
            <div style={{ fontSize: '32px', fontWeight: 900, color: '#d4af37', marginBottom: '4px' }}>{stat.value}</div>
            <div style={{ color: '#a0a0a0', fontSize: '14px' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '20px' }}>
        My Courses
      </h2>

      {enrolledCourses.length === 0 ? (
        <div className="etca-card" style={{ textAlign: 'center', padding: '48px' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>📚</div>
          <p style={{ color: '#a0a0a0', marginBottom: '24px' }}>You haven't enrolled in any courses yet.</p>
          <Link to="/courses" className="etca-btn-primary">Browse Courses</Link>
        </div>
      ) : (
        <div className="etca-grid-auto">
          {enrolledCourses.map((course) => {
            const lessons = getAllLessons(course)
            const completed = lessons.filter((l) => user?.completedLessons?.includes(l.id)).length
            const courseProgress = lessons.length > 0 ? Math.round((completed / lessons.length) * 100) : 0

            return (
              <div key={course.slug} className="etca-card">
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{course.icon}</div>
                <h3 style={{ color: '#d4af37', fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>{course.title}</h3>
                <p style={{ color: '#a0a0a0', fontSize: '13px', marginBottom: '16px' }}>{course.instructor}</p>
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ color: '#a0a0a0', fontSize: '12px' }}>Progress</span>
                    <span style={{ color: '#d4af37', fontSize: '12px', fontWeight: 600 }}>{courseProgress}%</span>
                  </div>
                  <div style={{ height: '6px', background: '#141414', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${courseProgress}%`, background: 'linear-gradient(90deg, #d4af37, #f0d060)', borderRadius: '3px', transition: 'width 0.3s' }} />
                  </div>
                </div>
                <Link to={`/courses/${course.slug}`} className="etca-btn-outline etca-btn-sm" style={{ width: '100%', textAlign: 'center' }}>
                  Continue Learning
                </Link>
              </div>
            )
          })}
        </div>
      )}

      <div style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '20px' }}>
          Quick Actions
        </h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link to="/courses" className="etca-btn-outline etca-btn-sm">Browse All Courses</Link>
          <Link to="/certificate/forex-trading" className="etca-btn-outline etca-btn-sm">View Certificates</Link>
          <Link to="/blog" className="etca-btn-outline etca-btn-sm">Read Blog</Link>
        </div>
      </div>
    </div>
  )
}
