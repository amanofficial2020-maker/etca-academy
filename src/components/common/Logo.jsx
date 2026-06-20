import { Link } from 'react-router-dom'

export default function Logo({ size = 40, showSubtitle = true }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <div
        style={{
          width: size,
          height: size,
          borderRadius: '8px',
          background: 'linear-gradient(135deg, #d4af37, #b8960c)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 900,
          fontSize: size * 0.38,
          color: '#0a0a0a',
          letterSpacing: '-1px',
          flexShrink: 0,
        }}
      >
        E
      </div>
      <div>
        <div
          style={{
            fontWeight: 800,
            fontSize: size * 0.42,
            color: '#d4af37',
            letterSpacing: '2px',
            lineHeight: 1,
          }}
        >
          ETCA
        </div>
        {showSubtitle && (
          <div
            style={{
              fontSize: size * 0.22,
              color: '#a0a0a0',
              letterSpacing: '1px',
              lineHeight: 1.2,
              marginTop: '2px',
            }}
          >
            Elite Traders Community Academy
          </div>
        )}
      </div>
    </div>
  )
}

export function LogoLink({ size = 36 }) {
  return (
    <Link to="/">
      <Logo size={size} />
    </Link>
  )
}
