import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)
  const [resending, setResending] = useState(false)

  const { register, resendVerification } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError('')
    setSuccess('')

    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }

    setLoading(true)

    try {
      await register(name, email, password)

      setSuccess('Registration successful! Please check your email to verify your account before logging in.')
    } catch (err) {
      if (err.message?.includes('already registered') || err.message?.includes('already exists')) {
        setError('An account with this email already exists. Please log in instead.')
      } else {
        setError(err.message || 'Registration failed. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleResendVerification = async () => {
    if (!email) {
      setError('Please enter your email address first.')
      return
    }

    setResending(true)
    setError('')

    try {
      await resendVerification(email)
      setSuccess('Verification email resent! Please check your inbox.')
    } catch (err) {
      setError(err.message || 'Failed to resend verification email.')
    } finally {
      setResending(false)
    }
  }

  return (
    <>
      <h2 style={{ color: '#ffffff', fontSize: '24px', fontWeight: 800, marginBottom: '8px', textAlign: 'center' }}>
        Join ETCA Academy
      </h2>

      <p style={{ color: '#a0a0a0', fontSize: '14px', textAlign: 'center', marginBottom: '32px' }}>
        Create your account and start learning today
      </p>

      {error && (
        <div
          style={{
            background: 'rgba(255,0,0,0.1)',
            border: '1px solid rgba(255,0,0,0.3)',
            borderRadius: '8px',
            padding: '12px',
            marginBottom: '20px',
            color: '#ff6b6b',
            fontSize: '14px',
          }}
        >
          {error}
        </div>
      )}

      {success && (
        <div
          style={{
            background: 'rgba(212,175,55,0.1)',
            border: '1px solid rgba(212,175,55,0.3)',
            borderRadius: '8px',
            padding: '16px',
            marginBottom: '20px',
            color: '#d4af37',
            fontSize: '14px',
            textAlign: 'center',
          }}
        >
          <div style={{ marginBottom: '12px' }}>{success}</div>
          <button
            type="button"
            onClick={handleResendVerification}
            disabled={resending}
            style={{
              background: 'transparent',
              border: '1px solid #d4af37',
              color: '#d4af37',
              padding: '8px 16px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: 600,
            }}
          >
            {resending ? 'Resending...' : 'Resend Verification Email'}
          </button>
          <div style={{ marginTop: '12px' }}>
            <Link to="/login" style={{ color: '#d4af37', fontWeight: 600, textDecoration: 'underline' }}>
              Go to Login
            </Link>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="etca-form-group">
          <label className="etca-label" htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            className="etca-input"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="etca-form-group">
          <label className="etca-label" htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            className="etca-input"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="etca-form-group">
          <label className="etca-label" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="etca-input"
            placeholder="Min. 6 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="etca-form-group">
          <label className="etca-label" htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            className="etca-input"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="etca-btn-primary"
          style={{ width: '100%', marginTop: '8px' }}
          disabled={loading}
        >
          {loading ? 'Creating Account...' : 'Create Account'}
        </button>
      </form>

      <p
        style={{
          color: '#666666',
          fontSize: '12px',
          textAlign: 'center',
          marginTop: '16px',
          lineHeight: 1.6,
        }}
      >
        By registering, you agree to our terms. Trading involves risk.
      </p>

      <p
        style={{
          color: '#a0a0a0',
          fontSize: '14px',
          textAlign: 'center',
          marginTop: '16px',
        }}
      >
        Already have an account?{' '}
        <Link to="/login" style={{ color: '#d4af37', fontWeight: 600 }}>
          Sign In
        </Link>
      </p>
    </>
  )
}