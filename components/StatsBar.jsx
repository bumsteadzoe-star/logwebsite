const questions = [
  'studying abroad?',
  'need recs?',
  'sharing your life?',
  'moving somewhere new?',
  'planning a trip?',
  'just exploring?',
]

const Dot = () => (
  <span
    aria-hidden
    style={{
      color: 'rgba(26,26,26,0.55)',
      marginInline: '2rem',
      fontWeight: 700,
      fontSize: '1.1em',
      flexShrink: 0,
    }}
  >
    ·
  </span>
)

export default function StatsBar() {
  const repeated = [...questions, ...questions, ...questions, ...questions]

  return (
    <section
      style={{
        backgroundColor: 'rgba(27,80,47,0.15)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)',
          overflow: 'hidden',
        }}
      >
      <div
        className="marquee-track"
        style={{
          display: 'flex',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          willChange: 'transform',
          animationDuration: '55s',
          paddingBlock: '2.1rem',
        }}
      >
        {repeated.map((q, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--font-space-grotesk), sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)',
              letterSpacing: '0.01em',
              color: '#1A1A1A',
              flexShrink: 0,
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            {q}
            <Dot />
          </span>
        ))}
      </div>
      </div>
    </section>
  )
}
