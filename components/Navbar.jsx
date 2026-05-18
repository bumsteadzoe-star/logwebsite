'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'home', href: '/' },
  { label: 'recs', href: '/recs' },
  { label: 'Universities', href: '/study-abroad' },
  { label: 'contact', href: 'mailto:explore@logsocial.app' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolledRef = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      const isNowScrolled = window.scrollY > 60
      if (isNowScrolled !== scrolledRef.current) {
        scrolledRef.current = isNowScrolled
        setScrolled(isNowScrolled)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when route changes (link clicked)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className="nav-header"
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
          onClick={closeMenu}
          style={{
            fontFamily: 'var(--font-sigmar), sans-serif',
            fontWeight: 400,
            fontSize: '1.25rem',
            letterSpacing: '-0.01em',
            color: '#1A1A1A',
            transition: 'color 0.35s ease',
            lineHeight: 1,
          }}
        >
          LOG
        </Link>

        {/* Desktop nav */}
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '2.25rem' }}>
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

          <a
            href="https://apps.apple.com/us/app/log-recs-from-friends/id6763411702"
            target="_blank"
            rel="noopener noreferrer"
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
            Download the app!
          </a>
        </div>

        {/* Mobile hamburger button */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          style={{
            display: 'none',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '5px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
          }}
        >
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '2px',
              backgroundColor: '#1A1A1A',
              borderRadius: '2px',
              transition: 'transform 0.25s ease, opacity 0.25s ease',
              transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '2px',
              backgroundColor: '#1A1A1A',
              borderRadius: '2px',
              transition: 'opacity 0.25s ease',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '2px',
              backgroundColor: '#1A1A1A',
              borderRadius: '2px',
              transition: 'transform 0.25s ease, opacity 0.25s ease',
              transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </header>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          className="nav-mobile-menu"
          style={{
            display: 'none', // shown via CSS on mobile
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '1.5rem 1.5rem 2rem',
              gap: '0',
            }}
          >
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={closeMenu}
                style={{
                  fontFamily: 'var(--font-space-grotesk), sans-serif',
                  fontWeight: 500,
                  fontSize: '1.1rem',
                  letterSpacing: '0.01em',
                  color: '#1A1A1A',
                  textTransform: 'capitalize',
                  padding: '1rem 0',
                  borderBottom: '1px solid rgba(26,26,26,0.08)',
                }}
              >
                {label}
              </Link>
            ))}

            <a
              href="https://apps.apple.com/us/app/log-recs-from-friends/id6763411702"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              style={{
                display: 'block',
                marginTop: '1.5rem',
                fontFamily: 'var(--font-space-grotesk), sans-serif',
                fontWeight: 600,
                fontSize: '0.9rem',
                letterSpacing: '0.05em',
                textAlign: 'center',
                color: '#EBE5DC',
                backgroundColor: '#1B502F',
                padding: '1rem 1.5rem',
                borderRadius: '10px',
              }}
            >
              Download the app!
            </a>
          </div>
        </div>
      )}
    </>
  )
}
