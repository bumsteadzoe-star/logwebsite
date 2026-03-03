'use client'

import { useState } from 'react'

const inputStyle = {
  width: '100%',
  fontFamily: 'var(--font-space-grotesk), sans-serif',
  fontWeight: 400,
  fontSize: '1rem',
  color: '#1A1A1A',
  backgroundColor: 'transparent',
  border: 'none',
  borderBottom: '1.5px solid rgba(26,26,26,0.2)',
  padding: '0.75rem 0',
  outline: 'none',
  letterSpacing: '-0.01em',
  transition: 'border-color 0.2s',
  boxSizing: 'border-box',
}

const labelStyle = {
  display: 'block',
  fontFamily: 'var(--font-courier), monospace',
  fontSize: '0.65rem',
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: '#6B6560',
  marginBottom: '0.5rem',
}

export default function StudyAbroadForm() {
  const [form, setForm] = useState({ name: '', email: '', university: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/study-abroad', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center' }}>
        <p
          style={{
            fontFamily: 'var(--font-space-grotesk), sans-serif',
            fontWeight: 700,
            fontSize: '2rem',
            color: '#1B502F',
            letterSpacing: '-0.035em',
            marginBottom: '1rem',
          }}
        >
          Request received.
        </p>
        <p
          style={{
            fontFamily: 'var(--font-space-grotesk), sans-serif',
            fontWeight: 400,
            fontSize: '1rem',
            color: '#6B6560',
            lineHeight: 1.65,
          }}
        >
          We'll be in touch soon to launch LOG at your campus.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '480px', textAlign: 'left' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginBottom: '3rem' }}>
        <div>
          <label htmlFor="name" style={labelStyle}>name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="email" style={labelStyle}>.edu email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@university.edu"
            value={form.email}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="university" style={labelStyle}>your university</label>
          <input
            id="university"
            name="university"
            type="text"
            required
            placeholder="University name"
            value={form.university}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
      </div>

      {status === 'error' && (
        <p
          style={{
            fontFamily: 'var(--font-courier), monospace',
            fontSize: '0.75rem',
            color: '#b00',
            marginBottom: '1.5rem',
          }}
        >
          something went wrong. please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        style={{
          width: '100%',
          fontFamily: 'var(--font-space-grotesk), sans-serif',
          fontWeight: 600,
          fontSize: '0.85rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#EBE5DC',
          backgroundColor: status === 'loading' ? 'rgba(27,80,47,0.6)' : '#1B502F',
          padding: '1.1rem',
          border: 'none',
          borderRadius: '10px',
          cursor: status === 'loading' ? 'not-allowed' : 'pointer',
          transition: 'opacity 0.2s',
        }}
      >
        {status === 'loading' ? 'submitting...' : 'submit request →'}
      </button>
    </form>
  )
}
