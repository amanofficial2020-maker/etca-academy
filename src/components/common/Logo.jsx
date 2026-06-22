import { Link } from 'react-router-dom'
import logoImage from '../../assets/etca-logo.png'

export default function Logo({ size = 40, showSubtitle = true }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <img
        src={logoImage}
        alt="ETCA Logo"
        style={{
          width: size,
          height: size,
          objectFit: 'contain',
          flexShrink: 0,
        }}
      />

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