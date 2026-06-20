import { Outlet, Link } from 'react-router-dom'
import { LogoLink } from '../common/Logo'

export default function AuthLayout() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        background: '#0a0a0a',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(212,175,55,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 24px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{ marginBottom: '40px' }}>
          <LogoLink size={44} />
        </div>
        <div
          style={{
            width: '100%',
            maxWidth: '440px',
            background: '#1a1a1a',
            border: '1px solid rgba(212,175,55,0.2)',
            borderRadius: '16px',
            padding: '40px',
          }}
        >
          <Outlet />
        </div>
        <p style={{ color: '#666666', fontSize: '14px', marginTop: '24px' }}>
          <Link to="/" style={{ color: '#d4af37' }}>
            ← Back to Home
          </Link>
        </p>
      </div>
    </div>
  )
}
