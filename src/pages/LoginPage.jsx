import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/dashboard'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Please fill in all fields.')
      return
    }

    setLoading(true)

    try {
      await login(email, password)
      navigate(from, { replace: true })
    } catch (err) {
      if (err.message?.includes('Email not confirmed')) {
        setError('Please verify your email before logging in. Check your inbox for the verification link.')
      } else if (err.message?.includes('Invalid login credentials')) {
        setError('Invalid email or password. Please try again.')
      } else {
        setError(err.message || 'Login failed. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <h2 style={{ color: '#ffffff', fontSize: '24px', fontWeight: 800, marginBottom: '8px', textAlign: 'center' }}>
        Welcome Back
      </h2>
      <p style={{ color: '#a0a0a0', fontSize: '14px', textAlign: 'center', marginBottom: '32px' }}>
        Sign in to access your trading dashboard
      </p>

      {error && (
        <div style={{ background: 'rgba(255,0,0,0.1)', border: '1px solid rgba(255,0,0,0.3)', borderRadius: '8px', padding: '12px', marginBottom: '20px', color: '#ff6b6b', fontSize: '14px' }}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="etca-form-group">
          <label className="etca-label" htmlFor="email">Email Address</label>
          <input id="email" type="email" className="etca-input" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="etca-form-group">
          <label className="etca-label" htmlFor="password">Password</label>
          <input id="password" type="password" className="etca-input" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="etca-btn-primary" style={{ width: '100%', marginTop: '8px' }} disabled={loading}>
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>

      <p style={{ color: '#a0a0a0', fontSize: '14px', textAlign: 'center', marginTop: '24px' }}>
        Don't have an account?{' '}
        <Link to="/register" style={{ color: '#d4af37', fontWeight: 600 }}>Register</Link>
      </p>
    </>
  )
}
