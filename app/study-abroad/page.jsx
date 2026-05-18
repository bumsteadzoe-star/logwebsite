import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StudyAbroadForm from '@/components/StudyAbroadFormClient'

export const metadata = {
  title: 'study abroad — LOG',
  description: 'recs for studying abroad, from people who have been there.',
}

export default function StudyAbroadPage() {
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
          {/* Photo */}
          <img
            src="/images/film7.jpg"
            alt=""
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 85%',
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
            Universities
          </h1>
        </div>

        {/* Centered heading text */}
        <div
          className="study-intro"
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '1.5rem 3rem 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-space-grotesk), sans-serif',
              fontWeight: 700,
              fontSize: '1rem',
              lineHeight: 1.7,
              color: '#1A1A1A',
            }}
          >
            Request us to come to your university!
          </p>
        </div>

        {/* Form + benefits */}
        <div
          className="study-form-grid"
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '5rem 3rem 8rem',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '6rem',
            alignItems: 'start',
          }}
        >
          {/* Left: Benefits */}
          <div className="study-benefits">
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
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: 0, margin: 0 }}>
              {[
                '→ see everywhere friends have studied abroad',
                'community with your peers',
                'a place to share your experiences with friends',
              ].map(text => (
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
                    →
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
          <div className="study-form-col">
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
            <StudyAbroadForm />
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
