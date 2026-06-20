import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const { register } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
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
    register(name, email, password)
    navigate('/dashboard')
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
        <div style={{ background: 'rgba(255,0,0,0.1)', border: '1px solid rgba(255,0,0,0.3)', borderRadius: '8px', padding: '12px', marginBottom: '20px', color: '#ff6b6b', fontSize: '14px' }}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="etca-form-group">
          <label className="etca-label" htmlFor="name">Full Name</label>
          <input id="name" type="text" className="etca-input" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="etca-form-group">
          <label className="etca-label" htmlFor="email">Email Address</label>
          <input id="email" type="email" className="etca-input" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="etca-form-group">
          <label className="etca-label" htmlFor="password">Password</label>
          <input id="password" type="password" className="etca-input" placeholder="Min. 6 characters" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="etca-form-group">
          <label className="etca-label" htmlFor="confirmPassword">Confirm Password</label>
          <input id="confirmPassword" type="password" className="etca-input" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <button type="submit" className="etca-btn-primary" style={{ width: '100%', marginTop: '8px' }}>
          Create Account
        </button>
      </form>

      <p style={{ color: '#666666', fontSize: '12px', textAlign: 'center', marginTop: '16px', lineHeight: 1.6 }}>
        By registering, you agree to our terms. Trading involves risk.
      </p>

      <p style={{ color: '#a0a0a0', fontSize: '14px', textAlign: 'center', marginTop: '16px' }}>
        Already have an account?{' '}
        <Link to="/login" style={{ color: '#d4af37', fontWeight: 600 }}>Sign In</Link>
      </p>
    </>
  )
}
