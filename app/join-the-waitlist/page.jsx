'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const benefits = [
  { icon: '→', text: 'early app access' },
  { icon: '→', text: 'exclusive city guides and recommendations' },
  { icon: '→', text: 'request and be the first to know about every new rec' },
]

export default function JoinWaitlistPage() {
  const [form, setForm] = useState({ name: '', email: '', city: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/waitlist', {
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
  }

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: '#EBE5DC', minHeight: '100vh' }}>

        {/* Hero / header — photo background, heading centered */}
        <div
          style={{
            position: 'relative',
            height: '42vh',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '64px',
          }}
        >
          {/* Photo — show top half */}
          <img
            src="/images/film1.jpg"
            alt=""
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              pointerEvents: 'none',
            }}
          />
          {/* Subtle dark scrim for legibility */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.32) 100%)',
              pointerEvents: 'none',
            }}
          />
          {/* Centered heading */}
          <h1
            style={{
              position: 'relative',
              zIndex: 1,
              fontFamily: 'var(--font-space-grotesk), sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              lineHeight: 0.88,
              letterSpacing: '-0.045em',
              color: '#EBE5DC',
              textAlign: 'center',
              margin: 0,
            }}
          >
            Join the waitlist!
          </h1>
        </div>

        {/* Form + benefits */}
        <div
          className="waitlist-grid"
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '7rem 3rem 8rem',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '6rem',
            alignItems: 'start',
          }}
        >
          {/* Left: Benefits */}
          <div className="waitlist-benefits">
            <p
              style={{
                fontFamily: 'var(--font-courier), monospace',
                fontSize: '0.68rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#6B6560',
                marginBottom: '2.5rem',
              }}
            >
              what you get
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {benefits.map(({ icon, text }) => (
                <li
                  key={text}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                  }}
                >
                  <span
                    style={{
                      color: '#1B502F',
                      fontFamily: 'var(--font-space-grotesk), sans-serif',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      flexShrink: 0,
                      marginTop: '0.05em',
                    }}
                  >
                    {icon}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-space-grotesk), sans-serif',
                      fontWeight: 400,
                      fontSize: '1rem',
                      lineHeight: 1.6,
                      color: '#1A1A1A',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Form */}
          <div className="waitlist-form-col">
            {status === 'success' ? (
              <div>
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
                  You're on the list.
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
                  We'll reach out when LOG launches!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <p
                  style={{
                    fontFamily: 'var(--font-courier), monospace',
                    fontSize: '0.68rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#6B6560',
                    marginBottom: '2.5rem',
                  }}
                >
                  sign up
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginBottom: '3rem' }}>
                  <div>
                    <label
                      htmlFor="name"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-courier), monospace',
                        fontSize: '0.65rem',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: '#6B6560',
                        marginBottom: '0.5rem',
                      }}
                    >
                      name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="your name"
                      value={form.name}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-courier), monospace',
                        fontSize: '0.65rem',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: '#6B6560',
                        marginBottom: '0.5rem',
                      }}
                    >
                      email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="city"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-courier), monospace',
                        fontSize: '0.65rem',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: '#6B6560',
                        marginBottom: '0.5rem',
                      }}
                    >
                      What city do you want recs for?
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      required
                      placeholder="new york, tokyo, paris..."
                      value={form.city}
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
                  {status === 'loading' ? 'submitting...' : 'join the waitlist →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
