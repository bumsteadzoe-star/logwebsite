const prompts = [
  'studying abroad?',
  'new city?',
  'need recs?',
  'sharing your life?',
  'planning a trip?',
  'moving somewhere new?',
  'exploring your neighborhood?',
  'building your feed?',
]

const Dot = () => (
  <span
    aria-hidden
    style={{
      color: '#C4A882',
      marginInline: '1.75rem',
      fontWeight: 400,
      flexShrink: 0,
    }}
  >
    ·
  </span>
)

export default function UseCaseHook() {
  const doubled = [...prompts, ...prompts]

  return (
    <section
      style={{
        backgroundColor: '#1A1A1A',
        paddingBlock: '5.5rem',
        overflow: 'hidden',
      }}
    >
      {/* Label */}
      <p
        style={{
          fontFamily: 'var(--font-courier), monospace',
          fontWeight: 400,
          fontSize: '0.68rem',
          letterSpacing: '0.2em',
          color: 'rgba(235,229,220,0.35)',
          textTransform: 'uppercase',
          paddingInline: '3rem',
          marginBottom: '2.5rem',
        }}
      >
        LOG is for you if you're...
      </p>

      {/* Marquee row 1 — left to right */}
      <div
        style={{
          display: 'flex',
          overflow: 'hidden',
          maskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
          marginBottom: '1.25rem',
        }}
      >
        <div
          className="marquee-track"
          style={{
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            willChange: 'transform',
          }}
        >
          {doubled.map((prompt, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'var(--font-space-grotesk), sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                letterSpacing: '-0.035em',
                color: i % 3 === 1 ? '#1B502F' : '#EBE5DC',
                flexShrink: 0,
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              {prompt}
              <Dot />
            </span>
          ))}
        </div>
      </div>

      {/* Marquee row 2 — right to left (reversed) */}
      <div
        style={{
          display: 'flex',
          overflow: 'hidden',
          maskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            willChange: 'transform',
            animation: 'marquee 38s linear infinite reverse',
          }}
        >
          {[...doubled].reverse().map((prompt, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'var(--font-space-grotesk), sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                letterSpacing: '-0.035em',
                color: i % 4 === 2 ? '#C4A882' : 'rgba(235,229,220,0.18)',
                flexShrink: 0,
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              {prompt}
              <Dot />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
