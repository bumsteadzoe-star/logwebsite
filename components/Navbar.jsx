'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'home', href: '/' },
  { label: 'recs', href: '/recs' },
  { label: 'study abroad', href: '/study-abroad' },
  { label: 'contact', href: 'mailto:explore@logsocial.app' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 2.75rem',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: scrolled ? 'rgba(235,229,220,0.95)' : 'rgba(235,229,220,0.55)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: scrolled ? '1px solid rgba(26,26,26,0.1)' : '1px solid rgba(235,229,220,0.15)',
        transition: 'background-color 0.35s ease, border-color 0.35s ease',
      }}
    >
      {/* Wordmark */}
      <Link
        href="/"
        style={{
          fontFamily: 'var(--font-space-grotesk), sans-serif',
          fontWeight: 700,
          fontSize: '1.25rem',
          letterSpacing: '-0.05em',
          color: '#1A1A1A',
          transition: 'color 0.35s ease',
          lineHeight: 1,
        }}
      >
        LOG
      </Link>

      {/* Desktop nav */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2.25rem' }}>
        {navLinks.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            style={{
              fontFamily: 'var(--font-space-grotesk), sans-serif',
              fontWeight: 500,
              fontSize: '0.82rem',
              letterSpacing: '0.03em',
              color: 'rgba(26,26,26,0.65)',
              transition: 'color 0.35s ease',
              textTransform: 'capitalize',
            }}
          >
            {label}
          </Link>
        ))}

        <Link
          href="/join-the-waitlist"
          style={{
            fontFamily: 'var(--font-space-grotesk), sans-serif',
            fontWeight: 600,
            fontSize: '0.78rem',
            letterSpacing: '0.05em',
            color: '#EBE5DC',
            backgroundColor: '#1B502F',
            padding: '0.55rem 1.2rem',
            borderRadius: '10px',
          }}
        >
          Join the Waitlist!
        </Link>
      </div>
    </header>
  )
}
