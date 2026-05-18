'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';

const InfiniteGallery = dynamic(
  () => import('./ui/InfiniteGallery'),
  {
    ssr: false,
    loading: () => <div style={{ position: 'absolute', inset: 0, backgroundColor: '#080e08' }} />,
  }
);

const filmImages = [
  '/images/film1.jpg',
  '/images/film2.jpg',
  '/images/film3.jpg',
  '/images/film4.jpg',
  '/images/film5.jpg',
  '/images/film6.jpg',
  '/images/film7.jpg',
  '/images/sunset1.jpg',
  '/images/waterfall1.jpg',
  '/images/new1.jpg',
  '/images/new2.jpg',
  '/images/batch3.jpg',
  '/images/batch4.jpg',
  '/images/batch5.jpg',
  '/images/new3.jpg',
  '/images/batch7.jpg',
];

export default function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '700px',
        overflow: 'hidden',
      }}
    >
      {/* 3D flythrough gallery background */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <InfiniteGallery
          images={filmImages}
          speed={0.55}
          visibleCount={16}
          fadeSettings={{
            fadeIn:  { start: 0.05, end: 0.10 },
            fadeOut: { start: 0.36, end: 0.39 },
          }}
          blurSettings={{
            blurIn:  { start: 0.0,  end: 0.08 },
            blurOut: { start: 0.35, end: 0.39 },
            maxBlur: 4.0,
          }}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Bottom-up gradient — grounds the text */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, rgba(6,12,7,0.92) 0%, rgba(6,12,7,0.6) 30%, rgba(6,12,7,0.2) 60%, rgba(6,12,7,0.05) 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      {/* Radial vignette for depth */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 120% 100% at 50% 50%, transparent 35%, rgba(4,8,5,0.5) 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      {/* Film grain */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          backgroundSize: '180px 180px',
          opacity: 0.4,
          mixBlendMode: 'overlay',
          zIndex: 3,
          pointerEvents: 'none',
        }}
      />

      {/* Hero content */}
      <div
        className="hero-content"
        style={{
          position: 'relative',
          zIndex: 10,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '0 3rem 4.5rem',
        }}
      >
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            alignItems: 'flex-end',
            gap: '2rem',
          }}
        >
          {/* Left: wordmark + tagline */}
          <div>
            <h1
              style={{
                fontFamily: 'var(--font-sigmar), sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(6.25rem, 17.5vw, 15.5rem)',
                lineHeight: 0.85,
                color: '#EBE5DC',
                letterSpacing: '-0.02em',
                margin: '0 0 1.25rem -0.055em',
              }}
            >
              LOG
            </h1>
            <p
              className="hero-tagline"
              style={{
                fontFamily: 'var(--font-space-grotesk), sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(1.05rem, 2.2vw, 1.45rem)',
                color: 'rgba(235,229,220,0.92)',
                letterSpacing: '0.01em',
                lineHeight: 1.45,
                whiteSpace: 'nowrap',
              }}
            >
              log your life.
            </p>
          </div>

          {/* Right: description + CTA */}
          <div
            className="hero-right"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '1.75rem',
            }}
          >
            <p
              className="hero-desc"
              style={{
                fontFamily: 'var(--font-space-grotesk), sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(0.82rem, 1.3vw, 1.0rem)',
                color: 'rgba(235,229,220,0.72)',
                lineHeight: 1.65,
                textAlign: 'right',
              }}
            >
              The app for sharing where you&apos;ve been,<br />
              what you loved, and what&apos;s worth knowing.
            </p>

            <a
              href="https://apps.apple.com/us/app/log-recs-from-friends/id6763411702"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta"
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-space-grotesk), sans-serif',
                fontWeight: 600,
                fontSize: '0.82rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#1A1A1A',
                backgroundColor: '#EBE5DC',
                padding: '1rem 2.25rem',
                borderRadius: '10px',
                whiteSpace: 'nowrap',
              }}
            >
              Download the app!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
