import Link from 'next/link'

const CATEGORY_ORDER = ['Food', 'Coffee', 'Nightlife', 'Activities', 'Nature']

const CATEGORY_ICONS = {
  Food: '◆',
  Coffee: '◆',
  Nightlife: '◆',
  Activities: '◆',
  Nature: '◆',
}

function StarRating({ rating }) {
  const max = 5
  const full = Math.floor(rating)
  const partial = rating % 1
  const empty = max - Math.ceil(rating)
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '2px' }}>
      {Array.from({ length: full }).map((_, i) => (
        <span key={`f${i}`} style={{ color: '#1B502F', fontSize: '0.7rem' }}>★</span>
      ))}
      {partial > 0 && (
        <span style={{ position: 'relative', display: 'inline-block', fontSize: '0.7rem' }}>
          <span style={{ color: 'rgba(26,26,26,0.15)' }}>★</span>
          <span style={{ position: 'absolute', left: 0, top: 0, width: `${partial * 100}%`, overflow: 'hidden', color: '#1B502F' }}>★</span>
        </span>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <span key={`e${i}`} style={{ color: 'rgba(26,26,26,0.15)', fontSize: '0.7rem' }}>★</span>
      ))}
      <span style={{
        fontFamily: 'var(--font-courier), monospace',
        fontSize: '0.68rem',
        color: '#6B6560',
        marginLeft: '4px',
        letterSpacing: '0.02em',
      }}>
        {rating.toFixed(1)}
      </span>
    </span>
  )
}

function ExternalLinkIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 10L10 2M10 2H4.5M10 2V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" />
    </svg>
  )
}

function RecCard({ rec }) {
  const hasPhoto = !!rec.photo

  if (hasPhoto) {
    return (
      <div className="rec-card-photo" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 0,
        backgroundColor: '#fff',
        overflow: 'hidden',
        boxShadow: '0 2px 16px rgba(26,26,26,0.07)',
      }}>
        <div className="rec-card-photo-img" style={{ position: 'relative', minHeight: '280px', overflow: 'hidden' }}>
          <img
            src={rec.photo}
            alt={rec.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              filter: 'sepia(0.06) saturate(0.9) contrast(1.04)',
            }}
          />
        </div>
        <div style={{
          padding: '2rem 2.25rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '1rem',
        }}>
          <div>
            <h3 style={{
              fontFamily: 'var(--font-space-grotesk), sans-serif',
              fontWeight: 700,
              fontSize: '1.3rem',
              letterSpacing: '-0.03em',
              color: '#1A1A1A',
              margin: '0 0 0.75rem',
              lineHeight: 1.1,
            }}>
              {rec.name}
            </h3>
            <p style={{
              fontFamily: 'var(--font-space-grotesk), sans-serif',
              fontWeight: 400,
              fontSize: '0.9rem',
              lineHeight: 1.7,
              color: '#3d3936',
              margin: 0,
            }}>
              {rec.thoughts}
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
            <StarRating rating={rec.rating} />
            {rec.website && (
              <a
                href={rec.website}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontFamily: 'var(--font-courier), monospace',
                  fontSize: '0.64rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#1B502F',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(27,80,47,0.3)',
                  paddingBottom: '1px',
                }}
              >
                website <ExternalLinkIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    )
  }

  // No photo variant
  return (
    <div style={{
      backgroundColor: '#fff',
      padding: '1.75rem 2.25rem',
      boxShadow: '0 2px 16px rgba(26,26,26,0.06)',
      borderLeft: '3px solid #1B502F',
    }}>
      <h3 style={{
        fontFamily: 'var(--font-space-grotesk), sans-serif',
        fontWeight: 700,
        fontSize: '1.2rem',
        letterSpacing: '-0.03em',
        color: '#1A1A1A',
        margin: '0 0 0.6rem',
        lineHeight: 1.15,
      }}>
        {rec.name}
      </h3>
      <p style={{
        fontFamily: 'var(--font-space-grotesk), sans-serif',
        fontWeight: 400,
        fontSize: '0.9rem',
        lineHeight: 1.72,
        color: '#3d3936',
        margin: '0 0 1rem',
      }}>
        {rec.thoughts}
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
        <StarRating rating={rec.rating} />
        {rec.website && (
          <a
            href={rec.website}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              fontFamily: 'var(--font-courier), monospace',
              fontSize: '0.64rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#1B502F',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(27,80,47,0.3)',
              paddingBottom: '1px',
            }}
          >
            website <ExternalLinkIcon />
          </a>
        )}
      </div>
    </div>
  )
}

function CategorySection({ category, recs }) {
  return (
    <div style={{ marginBottom: '4rem' }}>
      {/* Category header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1.75rem',
      }}>
        <span style={{
          fontFamily: 'var(--font-courier), monospace',
          fontSize: '0.62rem',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: '#1B502F',
          fontWeight: 700,
        }}>
          {category}
        </span>
        <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(27,80,47,0.18)' }} />
        <span style={{ color: 'rgba(27,80,47,0.35)', fontSize: '0.5rem' }}>◆</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {recs.map((rec) => (
          <RecCard key={rec.name} rec={rec} />
        ))}
      </div>
    </div>
  )
}

function TipCard({ tip, index }) {
  if (tip.photo) {
    return (
      <div className="tip-card-photo" style={{
        display: 'grid',
        gridTemplateColumns: '200px 1fr',
        gap: 0,
        backgroundColor: '#1B502F',
        overflow: 'hidden',
        boxShadow: '0 2px 20px rgba(26,26,26,0.12)',
      }}>
        <div style={{ position: 'relative', minHeight: '180px', overflow: 'hidden' }}>
          <img
            src={tip.photo}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              filter: 'sepia(0.1) saturate(0.85) contrast(1.06)',
            }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, transparent 60%, rgba(27,80,47,0.4) 100%)',
          }} />
        </div>
        <div style={{
          padding: '1.75rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '0.6rem',
        }}>
          <span style={{
            fontFamily: 'var(--font-courier), monospace',
            fontSize: '0.58rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(235,229,220,0.5)',
          }}>
            tip 0{index + 1}
          </span>
          <p style={{
            fontFamily: 'var(--font-space-grotesk), sans-serif',
            fontWeight: 600,
            fontSize: '1.05rem',
            lineHeight: 1.5,
            color: '#EBE5DC',
            margin: 0,
            letterSpacing: '-0.02em',
          }}>
            {tip.text}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      backgroundColor: '#1B502F',
      padding: '1.75rem 2rem',
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
      boxShadow: '0 2px 20px rgba(26,26,26,0.10)',
    }}>
      <span style={{
        fontFamily: 'var(--font-courier), monospace',
        fontSize: '0.58rem',
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: 'rgba(235,229,220,0.45)',
        whiteSpace: 'nowrap',
        flexShrink: 0,
      }}>
        tip 0{index + 1}
      </span>
      <div style={{ width: '1px', height: '2rem', backgroundColor: 'rgba(235,229,220,0.15)', flexShrink: 0 }} />
      <p style={{
        fontFamily: 'var(--font-space-grotesk), sans-serif',
        fontWeight: 600,
        fontSize: '1.05rem',
        lineHeight: 1.5,
        color: '#EBE5DC',
        margin: 0,
        letterSpacing: '-0.02em',
      }}>
        {tip.text}
      </p>
    </div>
  )
}

export default function StudyAbroadPost({ post }) {
  const groupedRecs = CATEGORY_ORDER.reduce((acc, cat) => {
    const catRecs = post.recs.filter(r => r.category === cat)
    if (catRecs.length > 0) acc[cat] = catRecs
    return acc
  }, {})

  // catch any categories not in CATEGORY_ORDER
  post.recs.forEach(r => {
    if (!groupedRecs[r.category]) groupedRecs[r.category] = []
    if (!groupedRecs[r.category].includes(r)) groupedRecs[r.category].push(r)
  })

  return (
    <>
      {/* Hero */}
      <div style={{
        position: 'relative',
        height: '55vh',
        minHeight: '380px',
        overflow: 'hidden',
        backgroundColor: '#1A1A1A',
      }}>
        <img
          src={post.coverImage}
          alt={post.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
            filter: 'contrast(1.04) brightness(1.02)',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(26,26,26,0.82) 0%, rgba(26,26,26,0.25) 55%, rgba(26,26,26,0.1) 100%)',
        }} />
        {/* Film grain */}
        <div aria-hidden style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          backgroundSize: '180px 180px',
          mixBlendMode: 'overlay',
          opacity: 0.5,
          pointerEvents: 'none',
        }} />

        <div style={{
          position: 'absolute',
          bottom: '3rem',
          left: '3rem',
          right: '3rem',
          zIndex: 10,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.1rem' }}>
            <span style={{
              display: 'inline-block',
              background: '#1B502F',
              color: '#EBE5DC',
              fontFamily: 'var(--font-courier), monospace',
              fontSize: '0.6rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '0.25rem 0.65rem',
            }}>
              {post.category}
            </span>
            <span style={{
              fontFamily: 'var(--font-courier), monospace',
              fontSize: '0.62rem',
              color: 'rgba(235,229,220,0.55)',
              letterSpacing: '0.08em',
            }}>
              {post.city}
            </span>
          </div>
          <h1 className="post-hero-title" style={{
            fontFamily: 'var(--font-space-grotesk), sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(2rem, 5vw, 3.75rem)',
            lineHeight: 0.95,
            color: '#EBE5DC',
            letterSpacing: '-0.04em',
            whiteSpace: 'nowrap',
            margin: '0 0 1rem',
          }}>
            {post.title}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{
              fontFamily: 'var(--font-courier), monospace',
              fontSize: '0.7rem',
              color: 'rgba(235,229,220,0.6)',
              letterSpacing: '0.04em',
            }}>
              featuring {post.author}
            </span>
            <span style={{ color: 'rgba(235,229,220,0.25)', fontSize: '0.5rem' }}>◆</span>
            <span style={{
              fontFamily: 'var(--font-courier), monospace',
              fontSize: '0.7rem',
              color: 'rgba(235,229,220,0.4)',
            }}>
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <div style={{ backgroundColor: '#EBE5DC' }}>
        <div className="post-article-pad" style={{
          maxWidth: '860px',
          margin: '0 auto',
          padding: '5rem 3rem 2rem',
        }}>

          {/* Intro blurb */}
          <div style={{
            marginBottom: '2rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid rgba(26,26,26,0.1)',
          }}>
            <p style={{
              fontFamily: 'var(--font-courier), monospace',
              fontSize: '0.62rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#6B6560',
              marginBottom: '1.25rem',
            }}>
              about this guide
            </p>
            <p style={{
              fontFamily: 'var(--font-space-grotesk), sans-serif',
              fontWeight: 400,
              fontSize: '1.12rem',
              lineHeight: 1.75,
              color: '#1A1A1A',
              margin: 0,
              letterSpacing: '-0.01em',
            }}>
              {post.intro}
            </p>
          </div>

          {/* Recs by category */}
          <div style={{ marginBottom: '2rem', marginTop: '2rem' }}>
            <p style={{
              fontFamily: 'var(--font-courier), monospace',
              fontSize: '0.62rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#6B6560',
              marginBottom: '3rem',
            }}>
              the recommendations
            </p>

            {Object.entries(groupedRecs).map(([category, recs]) => (
              <CategorySection key={category} category={category} recs={recs} />
            ))}
          </div>

        </div>

        {/* Tips — full-width dark section */}
        <div className="post-section-pad" style={{
          maxWidth: '860px',
          margin: '0 auto',
          padding: '0 3rem',
          marginBottom: '5rem',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1.75rem',
          }}>
            <span style={{
              fontFamily: 'var(--font-courier), monospace',
              fontSize: '0.62rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#6B6560',
            }}>
              {post.author.split(' ')[0]}'s Tips
            </span>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(26,26,26,0.1)' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {post.tips.map((tip, i) => (
              <TipCard key={i} tip={tip} index={i} />
            ))}
          </div>
        </div>

        {/* Closing + Maps link */}
        <div className="post-closing-pad" style={{
          maxWidth: '860px',
          margin: '0 auto',
          padding: '0 3rem 6rem',
        }}>
          <div style={{
            paddingTop: '3rem',
            borderTop: '1px solid rgba(26,26,26,0.1)',
          }}>
            <p style={{
              fontFamily: 'var(--font-space-grotesk), sans-serif',
              fontWeight: 400,
              fontSize: '1rem',
              lineHeight: 1.75,
              color: '#3d3936',
              marginBottom: '2rem',
            }}>
              {post.closing}
            </p>
            <a
              href={post.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="maps-link"
            >
              <MapPinIcon />
              Open Google Maps Collection
            </a>
          </div>
        </div>

        {/* Waitlist CTA */}
        <div style={{
          backgroundColor: '#1B502F',
          padding: '6rem 3rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Film grain */}
          <div aria-hidden style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
            opacity: 0.4,
            mixBlendMode: 'overlay',
            pointerEvents: 'none',
          }} />
          <div style={{ position: 'relative' }}>
            <p style={{
              fontFamily: 'var(--font-courier), monospace',
              fontSize: '0.62rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(235,229,220,0.45)',
              marginBottom: '1.5rem',
            }}>
              coming soon
            </p>
            <h2 style={{
              fontFamily: 'var(--font-space-grotesk), sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              lineHeight: 0.95,
              color: '#EBE5DC',
              letterSpacing: '-0.04em',
              marginBottom: '1.25rem',
            }}>
              Get more recs like {post.author.split(' ')[0]}'s.
            </h2>
            <p style={{
              fontFamily: 'var(--font-space-grotesk), sans-serif',
              fontWeight: 400,
              fontSize: '0.95rem',
              lineHeight: 1.65,
              color: 'rgba(235,229,220,0.6)',
              marginBottom: '2.5rem',
            }}>
              Join the waitlist to get notified when we launch.
            </p>
            <Link
              href="/join-the-waitlist"
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-space-grotesk), sans-serif',
                fontWeight: 600,
                fontSize: '0.82rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#1B502F',
                backgroundColor: '#EBE5DC',
                padding: '1rem 2.5rem',
                textDecoration: 'none',
              }}>
              Join the waitlist →
            </Link>
          </div>
        </div>

        {/* Back link */}
        <div style={{
          maxWidth: '860px',
          margin: '0 auto',
          padding: '3rem 3rem',
        }}>
          <Link
            href="/recs"
            style={{
              fontFamily: 'var(--font-space-grotesk), sans-serif',
              fontWeight: 600,
              fontSize: '0.82rem',
              letterSpacing: '0.05em',
              color: '#1B502F',
              borderBottom: '1.5px solid #1B502F',
              paddingBottom: '2px',
              textDecoration: 'none',
            }}
          >
            ← back to recs
          </Link>
        </div>
      </div>
    </>
  )
}
