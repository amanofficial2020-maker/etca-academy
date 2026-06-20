import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { LogoLink } from '../common/Logo'
import { useAuth } from '../../context/AuthContext'

const PUBLIC_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/courses' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const handleAnchorClick = (e, href) => {
    if (isHome) {
      e.preventDefault()
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(10, 10, 10, 0.97)' : 'rgba(10, 10, 10, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled
          ? '1px solid rgba(212, 175, 55, 0.25)'
          : '1px solid rgba(212, 175, 55, 0.1)',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        className="etca-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px',
        }}
      >
        <LogoLink size={36} />

        <ul className="etca-nav-links">
          {isHome ? (
            <>
              <li><a href="#home" onClick={(e) => handleAnchorClick(e, '#home')}>Home</a></li>
              <li><a href="#about" onClick={(e) => handleAnchorClick(e, '#about')}>About</a></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><a href="#testimonials" onClick={(e) => handleAnchorClick(e, '#testimonials')}>Testimonials</a></li>
              <li><Link to="/contact">Contact</Link></li>
            </>
          ) : (
            PUBLIC_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className={({ isActive }) => (isActive ? 'active' : '')}>
                  {link.label}
                </NavLink>
              </li>
            ))
          )}
        </ul>

        <div className="etca-nav-cta" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {isAuthenticated ? (
            <>
              <Link
                to="/dashboard"
                style={{ color: '#a0a0a0', fontSize: '14px', fontWeight: 500 }}
              >
                {user?.name}
              </Link>
              <button
                onClick={logout}
                className="etca-btn-outline etca-btn-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" style={{ color: '#a0a0a0', fontSize: '14px', fontWeight: 500 }}>
                Login
              </Link>
              <Link to="/register" className="etca-btn-primary etca-btn-sm">
                Join Now
              </Link>
            </>
          )}
        </div>

        <button
          className="etca-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
          <span style={menuOpen ? { opacity: 0 } : {}} />
          <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
        </button>
      </div>

      <div className={`etca-mobile-menu ${menuOpen ? 'open' : ''}`}>
        {isHome ? (
          <>
            <a href="#home" onClick={(e) => handleAnchorClick(e, '#home')}>Home</a>
            <a href="#about" onClick={(e) => handleAnchorClick(e, '#about')}>About</a>
            <Link to="/courses" onClick={() => setMenuOpen(false)}>Courses</Link>
            <a href="#testimonials" onClick={(e) => handleAnchorClick(e, '#testimonials')}>Testimonials</a>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </>
        ) : (
          PUBLIC_LINKS.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))
        )}
        {isAuthenticated ? (
          <>
            <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
            <button onClick={logout} className="etca-btn-outline" style={{ marginTop: '16px' }}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
            <Link to="/register" className="etca-btn-primary" style={{ marginTop: '16px', textAlign: 'center' }} onClick={() => setMenuOpen(false)}>
              Join Now
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}
