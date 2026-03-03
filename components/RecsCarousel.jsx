'use client';

import { useState } from 'react';

const carouselItems = [
  {
    id: 'car1',
    src: '/carouselphotos/car1.jpg',
    location: 'Malcapuya Island, Philippines',
    title: 'Fresh coconuts on the beach',
  },
  {
    id: 'car2',
    src: '/carouselphotos/car2.jpg',
    location: 'Tahoe, CA',
    title: 'Snowboarding at Palisades',
  },
  {
    id: 'car3',
    src: '/carouselphotos/car3.jpg',
    location: 'Cambridge, MA',
    title: 'Tour around Harvard',
    rotate: true,
  },
  {
    id: 'car4',
    src: '/carouselphotos/car4.jpg',
    location: 'New York City, NY',
    title: 'NYC bar hopping',
    rotate: true,
  },
  {
    id: 'car5',
    src: '/carouselphotos/car5.jpg',
    location: 'Bend, OR',
    title: 'Floating the river',
  },
  {
    id: 'car6',
    src: '/carouselphotos/car6.jpg',
    location: 'Monterey, CA',
    title: 'Tidepool exploring',
    rotate: true,
  },
  {
    id: 'car7',
    src: '/carouselphotos/car7.jpg',
    location: 'San Francisco, CA',
    title: 'Fredagain concert',
  },
  {
    id: 'car9',
    src: '/carouselphotos/car9.jpg',
    location: 'Tulum, Mexico',
    title: 'Cenote hopping',
    topCrop: true,
  },
];

// Triple for seamless infinite loop
const loopedItems = [...carouselItems, ...carouselItems, ...carouselItems];

const CARD_W = 310;
const CARD_H = 390;
const GAP = 20;

export default function RecsCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredKey, setHoveredKey] = useState(null);

  return (
    <section style={{ backgroundColor: '#EBE5DC', padding: '0 0 5rem', borderTop: '1px solid rgba(26,26,26,0.1)' }}>

      {/* Header */}
      <div style={{ padding: '2.25rem 3rem 2.75rem', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: 'var(--font-space-grotesk), sans-serif',
          fontWeight: 700,
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          letterSpacing: '-0.04em',
          color: '#1A1A1A',
          lineHeight: 0.95,
          margin: 0,
        }}>
          Log your experiences.
        </h2>
      </div>

      {/* Scrolling card strip */}
      <div style={{
        overflow: 'hidden',
        maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
      }}>
        <div
          style={{
            display: 'flex',
            gap: `${GAP}px`,
            width: 'max-content',
            paddingBlock: '1rem',
            animation: 'marquee-third 56s linear infinite',
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {loopedItems.map((item, i) => {
            const key = `${item.id}-${i}`;
            const isHovered = hoveredKey === key;

            return (
              <div
                key={key}
                draggable={false}
                onMouseEnter={() => { setIsPaused(true); setHoveredKey(key); }}
                onMouseLeave={() => { setIsPaused(false); setHoveredKey(null); }}
                style={{
                  flexShrink: 0,
                  width: `${CARD_W}px`,
                  height: `${CARD_H}px`,
                  borderRadius: '14px',
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: isHovered
                    ? '0 20px 56px rgba(26,26,26,0.28)'
                    : '0 8px 28px rgba(26,26,26,0.14)',
                  transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                  userSelect: 'none',
                  cursor: 'default',
                }}
              >
                {item.rotate ? (
                  // Rotated photo: swap img dimensions then rotate -90deg to correct orientation
                  <img
                    src={item.src}
                    alt={item.title}
                    draggable={false}
                    style={{
                      position: 'absolute',
                      width: `${CARD_H}px`,
                      height: `${CARD_W}px`,
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%) rotate(-270deg)',
                      objectFit: 'cover',
                      pointerEvents: 'none',
                      userSelect: 'none',
                    }}
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    draggable={false}
                    style={{
                      position: item.topCrop ? 'absolute' : 'static',
                      top: item.topCrop ? 0 : undefined,
                      left: item.topCrop ? 0 : undefined,
                      width: '100%',
                      height: item.topCrop ? '133%' : '100%',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      display: 'block',
                      pointerEvents: 'none',
                      userSelect: 'none',
                    }}
                  />
                )}

                {/* Hover overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(20,20,20,0.88) 0%, rgba(20,20,20,0.3) 55%, transparent 100%)',
                  opacity: isHovered ? 1 : 0,
                  transition: 'opacity 0.25s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.25rem',
                }}>
                  <p style={{
                    fontFamily: 'var(--font-courier), monospace',
                    fontSize: '0.58rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#C4A882',
                    marginBottom: '0.35rem',
                  }}>
                    {item.location}
                  </p>
                  <h3 style={{
                    fontFamily: 'var(--font-space-grotesk), sans-serif',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    lineHeight: 1.25,
                    color: '#EBE5DC',
                    margin: 0,
                  }}>
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
