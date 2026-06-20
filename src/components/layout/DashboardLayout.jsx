import { useState } from 'react'
import { NavLink, Outlet, Link } from 'react-router-dom'
import Logo from '../common/Logo'
import { useAuth } from '../../context/AuthContext'

const SIDEBAR_LINKS = [
  { to: '/dashboard', label: 'Dashboard', icon: '📊' },
  { to: '/courses', label: 'My Courses', icon: '📚' },
  { to: '/certificate/forex-trading', label: 'Certificates', icon: '🏆' },
  { to: '/blog', label: 'Blog', icon: '📝' },
  { to: '/contact', label: 'Support', icon: '💬' },
]

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { user, logout } = useAuth()

  return (
    <div className="etca-dashboard-layout">
      <aside className={`etca-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div style={{ padding: '0 24px 24px', borderBottom: '1px solid rgba(212,175,55,0.1)' }}>
          <Link to="/">
            <Logo size={32} showSubtitle={false} />
          </Link>
        </div>

        <nav style={{ marginTop: '16px' }}>
          {SIDEBAR_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `etca-sidebar-link ${isActive ? 'active' : ''}`}
              onClick={() => setSidebarOpen(false)}
            >
              <span>{link.icon}</span>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div style={{ padding: '24px', marginTop: 'auto', borderTop: '1px solid rgba(212,175,55,0.1)' }}>
          <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '14px', marginBottom: '4px' }}>
            {user?.name}
          </div>
          <div style={{ color: '#666666', fontSize: '12px', marginBottom: '12px' }}>{user?.email}</div>
          <button onClick={logout} className="etca-btn-outline etca-btn-sm" style={{ width: '100%' }}>
            Logout
          </button>
        </div>
      </aside>

      <div className="etca-dashboard-main">
        <div
          style={{
            display: 'none',
            marginBottom: '16px',
          }}
          className="mobile-sidebar-toggle"
        >
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="etca-btn-outline etca-btn-sm"
          >
            ☰ Menu
          </button>
        </div>
        <Outlet />
      </div>

      <style>{`
        @media (max-width: 900px) {
          .mobile-sidebar-toggle { display: block !important; }
        }
      `}</style>
    </div>
  )
}
