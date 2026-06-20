import { Link } from 'react-router-dom'
import Logo from '../common/Logo'
import { COURSES } from '../../data/courses'

const FOOTER_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/courses' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
  { label: 'Login', to: '/login' },
]

export default function Footer() {
  return (
    <footer
      style={{
        background: '#0a0a0a',
        borderTop: '1px solid rgba(212, 175, 55, 0.15)',
        padding: '60px 0 32px',
      }}
    >
      <div className="etca-container">
        <div className="etca-footer-grid">
          <div>
            <Logo size={32} />
            <p
              style={{
                color: '#a0a0a0',
                fontSize: '14px',
                lineHeight: 1.7,
                marginTop: '20px',
                maxWidth: '280px',
              }}
            >
              Elite Traders Community Academy — empowering traders worldwide
              with institutional-grade education and a supportive community.
            </p>
          </div>

          <div>
            <h4 style={footerHeadingStyle}>Quick Links</h4>
            <ul style={{ listStyle: 'none' }}>
              {FOOTER_LINKS.map((link) => (
                <li key={link.to} style={{ marginBottom: '10px' }}>
                  <Link to={link.to} style={footerLinkStyle}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={footerHeadingStyle}>Courses</h4>
            <ul style={{ listStyle: 'none' }}>
              {COURSES.map((c) => (
                <li key={c.slug} style={{ marginBottom: '10px' }}>
                  <Link to={`/courses/${c.slug}`} style={footerLinkStyle}>
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={footerHeadingStyle}>Contact</h4>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ color: '#a0a0a0', fontSize: '14px', marginBottom: '10px' }}>
                info@etca-academy.com
              </li>
              <li style={{ color: '#a0a0a0', fontSize: '14px', marginBottom: '10px' }}>
                Telegram Community
              </li>
              <li style={{ color: '#a0a0a0', fontSize: '14px' }}>Discord Server</li>
            </ul>
          </div>
        </div>

        <div
          style={{
            marginTop: '48px',
            paddingTop: '24px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p style={{ color: '#666666', fontSize: '13px' }}>
            © {new Date().getFullYear()} Elite Traders Community Academy. All rights reserved.
          </p>
          <p style={{ color: '#666666', fontSize: '13px' }}>
            Trading involves risk. Past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  )
}

const footerHeadingStyle = {
  color: '#d4af37',
  fontSize: '13px',
  fontWeight: 700,
  letterSpacing: '2px',
  textTransform: 'uppercase',
  marginBottom: '20px',
}

const footerLinkStyle = {
  color: '#a0a0a0',
  fontSize: '14px',
  transition: 'color 0.2s',
}
