import { Link } from 'react-router-dom'

export function LogoLink({ size = 36 }) {
  return (
    <Link
      to="/"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        textDecoration: 'none'
      }}
    >
      <div
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          background: '#d4af37',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#000',
          fontWeight: 'bold'
        }}
      >
        E
      </div>

      <span
        style={{
          color: '#ffffff',
          fontSize: '20px',
          fontWeight: 700
        }}
      >
        ETCA Academy
      </span>
    </Link>
  )
}

export default LogoLink