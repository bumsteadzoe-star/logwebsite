'use client'

import Link from 'next/link'

const GRAIN_SVG = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.12'/%3E%3C/svg%3E\")"

export default function PostCard({ post }) {
  const fallbackImage = `https://placehold.co/800x600/C4A882/1A1A1A?text=${encodeURIComponent(post.city)}`

  return (
    <Link href={`/recs/${post.slug}`} style={{ display: 'block' }}>
      <article
        style={{
          background: '#F5EFE6',
          borderRadius: '1px',
          overflow: 'hidden',
          border: '1px solid rgba(26,26,26,0.07)',
          transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-6px) rotate(-0.4deg)'
          e.currentTarget.style.boxShadow = '0 16px 48px rgba(26,26,26,0.14)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0) rotate(0deg)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        {/* Image area */}
        <div
          style={{
            position: 'relative',
            aspectRatio: '4 / 3',
            overflow: 'hidden',
            backgroundColor: '#C4A882',
          }}
        >
          <img
            src={post.coverImage || fallbackImage}
            alt={post.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              filter: 'sepia(0.08) saturate(0.9) contrast(1.04)',
            }}
          />

          {/* Film grain overlay on image */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: GRAIN_SVG,
              backgroundRepeat: 'repeat',
              backgroundSize: '160px 160px',
              mixBlendMode: 'multiply',
              pointerEvents: 'none',
              opacity: 0.7,
            }}
          />

          {/* City badge */}
          <div
            style={{
              position: 'absolute',
              top: '0.75rem',
              left: '0.75rem',
              background: '#1B502F',
              color: '#EBE5DC',
              fontFamily: 'var(--font-courier), monospace',
              fontSize: '0.62rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '0.28rem 0.6rem',
              borderRadius: '1px',
            }}
          >
            {post.city}
          </div>
        </div>

        {/* Card content */}
        <div style={{ padding: '1.25rem 1.25rem 1.5rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-courier), monospace',
              fontSize: '0.65rem',
              color: '#6B6560',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '0.6rem',
            }}
          >
            {post.category}
          </p>

          <h3
            style={{
              fontFamily: 'var(--font-space-grotesk), sans-serif',
              fontWeight: 700,
              fontSize: '1.1rem',
              lineHeight: 1.22,
              color: '#1A1A1A',
              letterSpacing: '-0.025em',
              marginBottom: '0.65rem',
            }}
          >
            {post.title}
          </h3>

          <p
            style={{
              fontFamily: 'var(--font-space-grotesk), sans-serif',
              fontSize: '0.875rem',
              lineHeight: 1.62,
              color: '#6B6560',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              marginBottom: '1.1rem',
            }}
          >
            {post.description}
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: '1px solid rgba(26,26,26,0.07)',
              paddingTop: '0.75rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-courier), monospace',
                fontSize: '0.72rem',
                color: '#6B6560',
              }}
            >
              by {post.author}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-courier), monospace',
                fontSize: '0.68rem',
                color: 'rgba(107,101,96,0.55)',
              }}
            >
              {new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
