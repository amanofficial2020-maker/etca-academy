import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '120px 24px',
        background: '#0a0a0a',
      }}
    >
      <div>
        <div style={{ fontSize: '80px', fontWeight: 900, color: '#d4af37', lineHeight: 1, marginBottom: '16px' }}>404</div>
        <h1 style={{ color: '#ffffff', fontSize: '28px', fontWeight: 700, marginBottom: '12px' }}>Page Not Found</h1>
        <p style={{ color: '#a0a0a0', fontSize: '16px', marginBottom: '32px' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="etca-btn-primary">Back to Home</Link>
      </div>
    </div>
  )
}
