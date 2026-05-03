import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { guidelineSections, guidelineTocItems } from '@/data/community-guidelines'

export const metadata = {
  title: 'Community Guidelines | LOG',
  description: 'Community Guidelines for Log Social.',
}

export default function CommunityGuidelinesPage() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: 'var(--color-cream)', minHeight: '100vh' }}>
        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            padding: '120px 2rem 6rem',
          }}
        >
          {/* Page header */}
          <div style={{ marginBottom: '3rem' }}>
            <h1
              style={{
                fontFamily: 'var(--font-space-grotesk), sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                color: '#1A1A1A',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                marginBottom: '0.75rem',
              }}
            >
              Community Guidelines
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-courier), monospace',
                fontSize: '0.8rem',
                color: 'rgba(26,26,26,0.45)',
                letterSpacing: '0.01em',
              }}
            >
              Last updated April 29, 2025
            </p>
          </div>

          {/* Table of contents */}
          <div
            style={{
              marginBottom: '3.5rem',
              padding: '2rem',
              backgroundColor: 'rgba(26,26,26,0.04)',
              borderRadius: '4px',
              borderLeft: '3px solid #1B502F',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-space-grotesk), sans-serif',
                fontWeight: 600,
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#1B502F',
                marginBottom: '1rem',
              }}
            >
              Table of Contents
            </p>
            <ol
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '0.4rem',
              }}
            >
              {guidelineTocItems.map((item) => (
                <li key={item.anchor}>
                  <a
                    href={`#${item.anchor}`}
                    style={{
                      fontFamily: 'var(--font-courier), monospace',
                      fontSize: '0.75rem',
                      color: 'rgba(26,26,26,0.55)',
                      letterSpacing: '0.01em',
                      textDecoration: 'none',
                      display: 'block',
                      padding: '0.15rem 0',
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* Divider */}
          <div style={{ borderTop: '1px solid rgba(26,26,26,0.10)', marginBottom: '3.5rem' }} />

          {/* Sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {guidelineSections.map((section, i) => (
              <section key={i} id={section.anchor}>
                <h2
                  style={{
                    fontFamily: 'var(--font-space-grotesk), sans-serif',
                    fontWeight: 600,
                    fontSize: '1rem',
                    letterSpacing: '0.02em',
                    color: '#1A1A1A',
                    marginBottom: '1rem',
                    display: 'flex',
                    gap: '0.6rem',
                    alignItems: 'baseline',
                  }}
                >
                  {section.number && (
                    <span
                      style={{
                        color: '#1B502F',
                        fontFamily: 'var(--font-courier), monospace',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        flexShrink: 0,
                      }}
                    >
                      {section.number}.
                    </span>
                  )}
                  {section.title}
                </h2>
                {section.body && (
                  <div
                    style={{
                      fontFamily: 'var(--font-space-grotesk), sans-serif',
                      fontWeight: 400,
                      fontSize: '0.92rem',
                      lineHeight: 1.75,
                      color: 'rgba(26,26,26,0.82)',
                      whiteSpace: 'pre-wrap',
                    }}
                  >
                    {section.body}
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Bottom contact */}
          <div
            style={{
              marginTop: '4rem',
              paddingTop: '2.5rem',
              borderTop: '1px solid rgba(26,26,26,0.10)',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-courier), monospace',
                fontSize: '0.8rem',
                color: 'rgba(26,26,26,0.45)',
                letterSpacing: '0.01em',
              }}
            >
              Questions? Email us at{' '}
              <a
                href="mailto:explore@logsocial.app"
                style={{ color: '#1B502F', textDecoration: 'underline' }}
              >
                explore@logsocial.app
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
