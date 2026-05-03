import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Recs', href: '/recs' },
  { label: 'Study Abroad', href: '/study-abroad' },
  { label: 'Contact', href: 'mailto:explore@logsocial.app' },
  { label: 'Join the Waitlist!', href: '/join-the-waitlist' },
]

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#C4A882',
        padding: '4rem 3rem 3rem',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '3rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(26,26,26,0.12)',
          }}
        >
          {/* Wordmark + email */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-sigmar), sans-serif',
                fontWeight: 400,
                fontSize: '2rem',
                letterSpacing: '-0.01em',
                color: '#1A1A1A',
                lineHeight: 1,
                marginBottom: '0.75rem',
              }}
            >
              LOG
            </p>
            <a
              href="mailto:explore@logsocial.app"
              style={{
                fontFamily: 'var(--font-courier), monospace',
                fontWeight: 400,
                fontSize: '0.8rem',
                color: 'rgba(26,26,26,0.5)',
                letterSpacing: '0.01em',
              }}
            >
              explore@logsocial.app
            </a>
          </div>

          {/* Nav */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem' }}>
            <nav
              style={{
                display: 'flex',
                gap: '2rem',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              {navLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  style={{
                    fontFamily: 'var(--font-space-grotesk), sans-serif',
                    fontWeight: 500,
                    fontSize: '0.82rem',
                    letterSpacing: '0.02em',
                    color: '#1A1A1A',
                  }}
                >
                  {label}
                </Link>
              ))}
            </nav>
            <Link
              href="/terms-of-service"
              style={{
                fontFamily: 'var(--font-space-grotesk), sans-serif',
                fontWeight: 500,
                fontSize: '0.82rem',
                letterSpacing: '0.02em',
                color: '#1A1A1A',
              }}
            >
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-courier), monospace',
              fontWeight: 400,
              fontSize: '0.72rem',
              color: 'rgba(26,26,26,0.4)',
              letterSpacing: '0.01em',
            }}
          >
            © 2025 LOG. all rights reserved.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-courier), monospace',
              fontWeight: 400,
              fontSize: '0.72rem',
              color: 'rgba(26,26,26,0.4)',
            }}
          >
            Discover recommendations from friends.
          </p>
        </div>
      </div>
    </footer>
  )
}
