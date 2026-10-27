import { Link } from 'react-router-dom'
import logo from '../../assets/logo etca main icon.jpeg'

export function LogoLink({ size = 60 }) {
  return (
    <Link
      to="/"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        textDecoration: 'none'
      }}
    >
      <img
        src={logo}
        alt="ETCA Academy"
        style={{
          width: size,
          height: size,
          objectFit: 'contain',
          borderRadius: '8px'
        }}
      />

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