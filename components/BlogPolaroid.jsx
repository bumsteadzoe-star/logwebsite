'use client'

export default function BlogPolaroid({ post }) {
  return (
    <a
      href={`/recs/${post.slug}`}
      className="blog-polaroid"
      style={{
        display: 'block',
        width: '100%',
        backgroundColor: '#FFFFFF',
        padding: '12px 12px 0',
        boxShadow: '0 12px 48px rgba(26,26,26,0.2)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        textDecoration: 'none',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 24px 64px rgba(26,26,26,0.28)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 12px 48px rgba(26,26,26,0.2)';
      }}
    >
      <img
        src={post.coverImage}
        alt={post.title}
        style={{
          width: '100%',
          height: '398px',
          objectFit: 'cover',
          display: 'block',
          filter: 'sepia(0.08) saturate(0.92) contrast(1.03)',
        }}
      />
      <div style={{ padding: '1rem 0.75rem 1.25rem' }}>
        <p
          style={{
            fontFamily: 'var(--font-courier), monospace',
            fontSize: '0.62rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#6B6560',
            marginBottom: '0.4rem',
          }}
        >
          {post.city}
        </p>
        <p
          style={{
            fontFamily: 'var(--font-space-grotesk), sans-serif',
            fontWeight: 700,
            fontSize: '1rem',
            lineHeight: 1.25,
            color: '#1A1A1A',
            letterSpacing: '-0.02em',
            marginBottom: '0.5rem',
          }}
        >
          {post.title}
        </p>
        <p
          style={{
            fontFamily: 'var(--font-courier), monospace',
            fontSize: '0.62rem',
            letterSpacing: '0.1em',
            color: '#6B6560',
          }}
        >
          {post.author}
        </p>
      </div>
    </a>
  )
}
