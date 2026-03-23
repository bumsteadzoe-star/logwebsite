'use client'

import BlogPolaroid from '@/components/BlogPolaroid'
import posts from '@/data/posts'

const pillars = [
  {
    number: '01',
    label: 'Discover',
    description:
      'Personalized experience suggestions based on your network. Find hidden gems, local spots, and recs from people you know.',
  },
  {
    number: '02',
    label: 'Share',
    description:
      'Keep in touch with friends, share the real experiences in your life, not just the highlights. Log your experiences and build a living record of your world.',
  },
  {
    number: '03',
    label: 'Experience',
    description:
      'Live in the moment, we automatically import your adventures and help you plan your next trips.',
  },
]

export default function ValueProps() {
  return (
    <section
      style={{
        backgroundColor: '#EBE5DC',
        padding: '2.25rem 3rem 5rem',
        borderTop: '1px solid rgba(26,26,26,0.1)',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Section label */}
        <p
          style={{
            fontFamily: 'var(--font-courier), monospace',
            fontWeight: 400,
            fontSize: '0.7rem',
            letterSpacing: '0.18em',
            color: '#6B6560',
            textTransform: 'uppercase',
            marginBottom: '4.5rem',
          }}
        >
          with log you can...
        </p>

        {/* Pillar grid */}
        <div
          className="value-pillars"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
          }}
        >
          {pillars.map((pillar, i) => (
            <div
              key={pillar.label}
              className={i === 0 ? 'value-pillar value-pillar-first' : 'value-pillar'}
              style={{
                padding: '0 3rem 2.5rem 0',
                borderLeft: i > 0 ? '1px solid rgba(26,26,26,0.1)' : 'none',
                paddingLeft: i > 0 ? '3rem' : '0',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-courier), monospace',
                  fontWeight: 400,
                  fontSize: '0.72rem',
                  letterSpacing: '0.1em',
                  color: '#1B502F',
                  display: 'block',
                  marginBottom: '1.75rem',
                }}
              >
                {pillar.number}
              </span>

              <h2
                style={{
                  fontFamily: 'var(--font-space-grotesk), sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(2.5rem, 4vw, 4.25rem)',
                  lineHeight: 0.88,
                  color: '#1A1A1A',
                  letterSpacing: '-0.04em',
                  marginBottom: '1.75rem',
                }}
              >
                {pillar.label}
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-space-grotesk), sans-serif',
                  fontWeight: 400,
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  color: '#6B6560',
                  maxWidth: '280px',
                }}
              >
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom feature section */}
        <div
          className="value-bottom"
          style={{
            marginTop: '5rem',
            paddingTop: '2.25rem',
            borderTop: '1px solid rgba(26,26,26,0.1)',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {/* Left 50%: text — centered within the left half */}
          <div className="value-bottom-left" style={{ flex: '0 0 50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.1rem' }}>
            <h2
              style={{
                fontFamily: 'var(--font-space-grotesk), sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(2.5rem, 4vw, 4.25rem)',
                lineHeight: 0.88,
                color: '#1A1A1A',
                letterSpacing: '-0.04em',
                textAlign: 'center',
              }}
            >
              Logs recent recs
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-courier), monospace',
                fontWeight: 400,
                fontSize: '0.75rem',
                letterSpacing: '0.14em',
                color: '#6B6560',
                textTransform: 'uppercase',
                textAlign: 'center',
              }}
            >
              from our friends
            </p>
            <a
              href="/recs"
              style={{
                fontFamily: 'var(--font-space-grotesk), sans-serif',
                fontWeight: 600,
                fontSize: '0.82rem',
                letterSpacing: '0.05em',
                color: '#1B502F',
                borderBottom: '1.5px solid #1B502F',
                paddingBottom: '2px',
                whiteSpace: 'nowrap',
                display: 'inline-block',
                marginTop: '0.5rem',
              }}
            >
              see the recs →
            </a>
          </div>

          {/* Right 50%: polaroid — left edge at center axis */}
          <div className="value-bottom-right" style={{ flex: '0 0 50%', display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
            <div className="value-polaroid" style={{ width: '510px', flexShrink: 0 }}>
              <BlogPolaroid post={posts[3]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
