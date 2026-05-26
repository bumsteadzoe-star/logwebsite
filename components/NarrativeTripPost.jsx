'use client'

import Link from 'next/link'

function StarRating({ rating }) {
  if (rating === null || rating === undefined) return null
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5
  const empty = 5 - full - (half ? 1 : 0)
  return (
    <span style={{ color: '#1B502F', fontSize: '0.75rem', letterSpacing: '0.05em' }}>
      {'★'.repeat(full)}{half ? '½' : ''}{'☆'.repeat(empty)}
      <span style={{ fontFamily: 'var(--font-courier), monospace', color: '#6B6560', marginLeft: '0.4rem', fontSize: '0.7rem' }}>
        {rating}/5
      </span>
    </span>
  )
}

function RecCard({ rec }) {
  return (
    <div style={{
      backgroundColor: '#F5EFE6',
      padding: '1.25rem 1.5rem',
      borderLeft: '3px solid #1B502F',
      marginBottom: '1rem',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem', gap: '1rem' }}>
        <p style={{
          fontFamily: 'var(--font-space-grotesk), sans-serif',
          fontWeight: 700,
          fontSize: '0.95rem',
          color: '#1A1A1A',
          letterSpacing: '-0.01em',
          margin: 0,
        }}>
          {rec.name}
        </p>
        {rec.rating !== null && rec.rating !== undefined && <StarRating rating={rec.rating} />}
      </div>
      {rec.photo && (
        <img
          src={rec.photo}
          alt={rec.name}
          style={{
            width: '100%',
            maxHeight: '320px',
            objectFit: 'cover',
            marginBottom: '0.75rem',
            filter: 'sepia(0.08) saturate(0.92) contrast(1.03)',
          }}
        />
      )}
      <p style={{
        fontFamily: 'var(--font-space-grotesk), sans-serif',
        fontSize: '0.9rem',
        lineHeight: 1.7,
        color: '#2d2d2d',
        margin: 0,
      }}>
        {rec.thoughts}
      </p>
      {rec.website && (
        <a
          href={rec.website}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            marginTop: '0.6rem',
            fontFamily: 'var(--font-courier), monospace',
            fontSize: '0.65rem',
            letterSpacing: '0.1em',
            color: '#1B502F',
            borderBottom: '1px solid rgba(27,80,47,0.4)',
          }}
        >
          website →
        </a>
      )}
    </div>
  )
}

function TipCard({ tip }) {
  return (
    <div style={{
      display: 'flex',
      gap: '1rem',
      paddingBottom: '1rem',
      borderBottom: '1px solid rgba(26,26,26,0.08)',
      marginBottom: '1rem',
    }}>
      <span style={{
        fontFamily: 'var(--font-courier), monospace',
        fontSize: '0.65rem',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: '#1B502F',
        whiteSpace: 'nowrap',
        paddingTop: '0.15rem',
        minWidth: '120px',
        flexShrink: 0,
      }}>
        {tip.label}
      </span>
      <p style={{
        fontFamily: 'var(--font-space-grotesk), sans-serif',
        fontSize: '0.9rem',
        lineHeight: 1.7,
        color: '#2d2d2d',
        margin: 0,
      }}>
        {tip.text}
      </p>
    </div>
  )
}

export default function NarrativeTripPost({ post }) {
  return (
    <div style={{ backgroundColor: '#EBE5DC', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{
        position: 'relative',
        height: '70vh',
        minHeight: '480px',
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
            filter: 'sepia(0.1) saturate(0.88) contrast(1.05)',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(26,26,26,0.75) 0%, rgba(26,26,26,0.2) 50%, transparent 100%)',
        }} />
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
          <span style={{
            display: 'inline-block',
            background: '#1B502F',
            color: '#EBE5DC',
            fontFamily: 'var(--font-courier), monospace',
            fontSize: '0.62rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '0.28rem 0.6rem',
            borderRadius: '1px',
            marginBottom: '1rem',
          }}>
            {post.city}
          </span>
          <h1 style={{
            fontFamily: 'var(--font-space-grotesk), sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            lineHeight: 0.95,
            color: '#EBE5DC',
            letterSpacing: '-0.04em',
            maxWidth: '800px',
          }}>
            {post.title}
          </h1>
        </div>
      </div>

      {/* Intro */}
      <div className="article-body-pad" style={{
        maxWidth: '780px',
        margin: '0 auto',
        padding: '5rem 3rem 2rem',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '3rem',
          paddingBottom: '2rem',
          borderBottom: '1px solid rgba(26,26,26,0.1)',
        }}>
          <span style={{
            fontFamily: 'var(--font-courier), monospace',
            fontSize: '0.75rem',
            color: '#6B6560',
          }}>
            featuring {post.author}
          </span>
          <span style={{
            fontFamily: 'var(--font-courier), monospace',
            fontSize: '0.72rem',
            color: 'rgba(107,101,96,0.6)',
          }}>
            {new Date(post.date).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })}
          </span>
        </div>

        {post.description && (
          <p style={{
            fontFamily: 'var(--font-space-grotesk), sans-serif',
            fontWeight: 500,
            fontSize: '1.2rem',
            lineHeight: 1.65,
            color: '#1A1A1A',
            marginBottom: '1.75rem',
            letterSpacing: '-0.01em',
          }}>
            {post.description}
          </p>
        )}

        {post.intro && (
          <p style={{
            fontFamily: 'var(--font-space-grotesk), sans-serif',
            fontSize: '1rem',
            lineHeight: 1.8,
            color: '#2d2d2d',
            marginBottom: '1rem',
          }}>
            {post.intro}
          </p>
        )}
      </div>

      {/* Sections */}
      {post.sections && post.sections.map((section, i) => (
        <div key={i} style={{
          maxWidth: '780px',
          margin: '0 auto',
          padding: '0 3rem',
          paddingTop: i === 0 ? '3rem' : '4rem',
        }}>
          {/* Section header */}
          <div style={{
            borderTop: '1px solid rgba(26,26,26,0.12)',
            paddingTop: '2.5rem',
            marginBottom: '2rem',
          }}>
            <h2 style={{
              fontFamily: 'var(--font-space-grotesk), sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              letterSpacing: '-0.03em',
              color: '#1A1A1A',
              margin: 0,
            }}>
              {section.city}
            </h2>
          </div>

          {/* Section photo */}
          {section.sectionPhoto && (
            <div style={{ marginBottom: '2rem' }}>
              <img
                src={section.sectionPhoto}
                alt={section.city}
                style={{
                  width: '100%',
                  maxHeight: '420px',
                  objectFit: 'cover',
                  filter: 'sepia(0.08) saturate(0.92) contrast(1.03)',
                }}
              />
            </div>
          )}

          {/* Overview */}
          {section.overview && (
            <div style={{ marginBottom: '2rem' }}>
              {section.overview.split('\n\n').map((para, j) => (
                <p key={j} style={{
                  fontFamily: 'var(--font-space-grotesk), sans-serif',
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  color: '#2d2d2d',
                  marginBottom: '1rem',
                  margin: j < section.overview.split('\n\n').length - 1 ? '0 0 1rem' : 0,
                }}>
                  {para}
                </p>
              ))}
            </div>
          )}

          {/* Recs */}
          {section.recs && section.recs.length > 0 && (
            <div style={{ marginBottom: '2rem' }}>
              <p style={{
                fontFamily: 'var(--font-courier), monospace',
                fontSize: '0.65rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#6B6560',
                marginBottom: '1.25rem',
              }}>
                recs
              </p>
              {section.recs.map((rec, j) => <RecCard key={j} rec={rec} />)}
            </div>
          )}

          {/* Tips */}
          {section.tips && section.tips.length > 0 && (
            <div style={{ marginBottom: '2rem' }}>
              <p style={{
                fontFamily: 'var(--font-courier), monospace',
                fontSize: '0.65rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#6B6560',
                marginBottom: '1.25rem',
              }}>
                tips
              </p>
              {section.tips.map((tip, j) => <TipCard key={j} tip={tip} />)}
            </div>
          )}
        </div>
      ))}

      {/* General Tips */}
      {post.generalTips && post.generalTips.length > 0 && (
        <div style={{
          maxWidth: '780px',
          margin: '0 auto',
          padding: '4rem 3rem 2rem',
          borderTop: '1px solid rgba(26,26,26,0.12)',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-space-grotesk), sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(1.4rem, 3vw, 2rem)',
            letterSpacing: '-0.03em',
            color: '#1A1A1A',
            marginBottom: '2rem',
          }}>
            General tips for Thailand
          </h2>
          {post.generalTips.map((tip, i) => <TipCard key={i} tip={tip} />)}
        </div>
      )}

      {/* Quick Ratings */}
      {post.quickRatings && post.quickRatings.length > 0 && (
        <div style={{
          maxWidth: '780px',
          margin: '0 auto',
          padding: '3rem 3rem 2rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-courier), monospace',
            fontSize: '0.65rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#6B6560',
            marginBottom: '2rem',
          }}>
            quick ratings
          </p>
          {post.quickRatings.map((group, i) => (
            <div key={i} style={{ marginBottom: '2rem' }}>
              <p style={{
                fontFamily: 'var(--font-space-grotesk), sans-serif',
                fontWeight: 700,
                fontSize: '0.85rem',
                color: '#1A1A1A',
                letterSpacing: '-0.01em',
                marginBottom: '0.75rem',
              }}>
                {group.city}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {group.items.map((item, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{
                      fontFamily: 'var(--font-space-grotesk), sans-serif',
                      fontSize: '0.85rem',
                      color: '#2d2d2d',
                      minWidth: '200px',
                    }}>
                      {item.name}
                    </span>
                    {item.rating !== null && item.rating !== undefined
                      ? <StarRating rating={item.rating} />
                      : item.note
                        ? <span style={{ fontFamily: 'var(--font-courier), monospace', fontSize: '0.65rem', color: '#6B6560' }}>{item.note}</span>
                        : null
                    }
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Closing & Maps */}
      {(post.closing || post.mapsLink) && (
        <div style={{
          maxWidth: '780px',
          margin: '0 auto',
          padding: '2rem 3rem 5rem',
          borderTop: '1px solid rgba(26,26,26,0.1)',
        }}>
          {post.closing && (
            <p style={{
              fontFamily: 'var(--font-space-grotesk), sans-serif',
              fontSize: '1rem',
              lineHeight: 1.8,
              color: '#2d2d2d',
              marginBottom: '1.5rem',
            }}>
              {post.closing}
            </p>
          )}
          {post.mapsLink && (
            <a
              href={post.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#1B502F',
                color: '#EBE5DC',
                fontFamily: 'var(--font-space-grotesk), sans-serif',
                fontWeight: 600,
                fontSize: '0.82rem',
                letterSpacing: '0.04em',
                padding: '0.75rem 1.5rem',
                textDecoration: 'none',
              }}
            >
              view google maps list →
            </a>
          )}
        </div>
      )}

      {/* Back link */}
      <div style={{
        maxWidth: '780px',
        margin: '0 auto',
        padding: '0 3rem 6rem',
        borderTop: '1px solid rgba(26,26,26,0.1)',
        paddingTop: '2.5rem',
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
          }}
        >
          ← back to recs
        </Link>
      </div>

    </div>
  )
}
