import Link from 'next/link'

export default function WaitlistCTA() {
  return (
    <section
      className="waitlist-section"
      style={{
        backgroundColor: '#1B502F',
        padding: '9rem 3rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Film grain */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3CfeColorMatrix type=\'saturate\' values=\'0\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
          opacity: 0.4,
          mixBlendMode: 'overlay',
          pointerEvents: 'none',
        }}
      />

      {/* Subtle glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 0%, rgba(235,229,220,0.06) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <p
        style={{
          fontFamily: 'var(--font-courier), monospace',
          fontWeight: 400,
          fontSize: '0.68rem',
          letterSpacing: '0.2em',
          color: 'rgba(235,229,220,0.45)',
          textTransform: 'uppercase',
          marginBottom: '2rem',
          position: 'relative',
        }}
      >
        coming soon
      </p>

      <h2
        style={{
          fontFamily: 'var(--font-space-grotesk), sans-serif',
          fontWeight: 700,
          fontSize: 'clamp(3rem, 8vw, 7rem)',
          lineHeight: 0.88,
          color: '#EBE5DC',
          letterSpacing: '-0.045em',
          marginBottom: '2rem',
          maxWidth: '900px',
          position: 'relative',
        }}
      >
        Download the app.
      </h2>

      <p
        className="waitlist-desc"
        style={{
          fontFamily: 'var(--font-space-grotesk), sans-serif',
          fontWeight: 400,
          fontSize: '1rem',
          lineHeight: 1.7,
          color: 'rgba(235,229,220,0.6)',
          maxWidth: '700px',
          whiteSpace: 'nowrap',
          marginBottom: '3.5rem',
          position: 'relative',
        }}
      >
        Get early access and tell us what cities you want recs for first.
      </p>

      <a
        href="https://apps.apple.com/us/app/log-recs-from-friends/id6763411702"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          fontFamily: 'var(--font-space-grotesk), sans-serif',
          fontWeight: 600,
          fontSize: '0.82rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#1B502F',
          backgroundColor: '#EBE5DC',
          padding: '1.1rem 2.75rem',
          borderRadius: '10px',
          position: 'relative',
        }}
      >
        Download the app!
      </a>
    </section>
  )
}
