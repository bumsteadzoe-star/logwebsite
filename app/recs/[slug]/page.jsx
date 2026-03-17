import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import PostCard from '@/components/PostCard'
import Footer from '@/components/Footer'
import StudyAbroadPost from '@/components/StudyAbroadPost'
import posts from '@/data/posts'

export const revalidate = 3600

export async function generateStaticParams() {
  return posts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)
  if (!post) return {}
  const image = post.coverImage || '/images/film1.jpg'
  return {
    title: `${post.title} — LOG`,
    description: post.description,
    openGraph: {
      title: `${post.title} — LOG`,
      description: post.description,
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      images: [image],
    },
  }
}


export default async function PostPage({ params }) {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)
  if (!post) notFound()

  if (post.type === 'study-abroad') {
    return (
      <>
        <Navbar />
        <main style={{ backgroundColor: '#EBE5DC' }}>
          <StudyAbroadPost post={post} />
        </main>
        <Footer />
      </>
    )
  }

  const publishedPosts = posts.filter(p => p.published)
  const related = publishedPosts.filter(p => p.slug !== post.slug && p.city === post.city).slice(0, 3)
  const otherRelated = publishedPosts.filter(p => p.slug !== post.slug && p.city !== post.city).slice(0, 3 - related.length)
  const relatedPosts = [...related, ...otherRelated]

  const fallbackImage = `https://placehold.co/1400x800/C4A882/1A1A1A?text=${encodeURIComponent(post.city)}`

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: '#EBE5DC' }}>

        {/* Hero image */}
        <div
          style={{
            position: 'relative',
            height: '70vh',
            minHeight: '480px',
            overflow: 'hidden',
            backgroundColor: '#1A1A1A',
          }}
        >
          <img
            src={post.coverImage || fallbackImage}
            alt={post.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'sepia(0.1) saturate(0.88) contrast(1.05)',
            }}
          />
          {/* Dark overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(26,26,26,0.75) 0%, rgba(26,26,26,0.2) 50%, transparent 100%)',
            }}
          />
          {/* Film grain */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E\")",
              backgroundRepeat: 'repeat',
              backgroundSize: '180px 180px',
              mixBlendMode: 'overlay',
              opacity: 0.5,
              pointerEvents: 'none',
            }}
          />

          {/* Overlaid title */}
          <div
            style={{
              position: 'absolute',
              bottom: '3rem',
              left: '3rem',
              right: '3rem',
              zIndex: 10,
            }}
          >
            <span
              style={{
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
              }}
            >
              {post.city}
            </span>
            <h1
              style={{
                fontFamily: 'var(--font-space-grotesk), sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                lineHeight: 0.95,
                color: '#EBE5DC',
                letterSpacing: '-0.04em',
                maxWidth: '800px',
              }}
            >
              {post.title}
            </h1>
          </div>
        </div>

        {/* Article body */}
        <div
          className="article-body-pad"
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            padding: '5rem 3rem 4rem',
          }}
        >
          {/* Byline */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '3rem',
              paddingBottom: '2rem',
              borderBottom: '1px solid rgba(26,26,26,0.1)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-courier), monospace',
                  fontSize: '0.75rem',
                  color: '#6B6560',
                }}
              >
                featuring {post.author}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              {post.stars && (
                <span
                  style={{
                    fontFamily: 'var(--font-courier), monospace',
                    fontSize: '0.78rem',
                    color: '#1B502F',
                    letterSpacing: '0.04em',
                  }}
                >
                  {post.stars} ★
                </span>
              )}
              <span
                style={{
                  fontFamily: 'var(--font-courier), monospace',
                  fontSize: '0.72rem',
                  color: 'rgba(107,101,96,0.6)',
                }}
              >
                {new Date(post.date).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })}
              </span>
            </div>
          </div>

          {/* Lead */}
          <p
            style={{
              fontFamily: 'var(--font-space-grotesk), sans-serif',
              fontWeight: 500,
              fontSize: '1.2rem',
              lineHeight: 1.65,
              color: '#1A1A1A',
              marginBottom: '2rem',
              letterSpacing: '-0.01em',
            }}
          >
            {post.description}
          </p>

          {/* Body */}
          {Array.isArray(post.body) ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {post.body.map((block, i) => {
                if (block.type === 'paragraph') {
                  return (
                    <p
                      key={i}
                      style={{
                        fontFamily: 'var(--font-space-grotesk), sans-serif',
                        fontWeight: 400,
                        fontSize: '1.05rem',
                        lineHeight: 1.8,
                        color: '#2d2d2d',
                        margin: 0,
                      }}
                    >
                      {block.text}
                    </p>
                  )
                }
                if (block.type === 'image') {
                  return (
                    <figure key={i} style={{ margin: '1rem 0' }}>
                      <img
                        src={block.src}
                        alt={block.caption || ''}
                        style={{
                          width: '100%',
                          display: 'block',
                          filter: 'sepia(0.08) saturate(0.92) contrast(1.03)',
                        }}
                      />
                      {block.caption && (
                        <figcaption
                          style={{
                            fontFamily: 'var(--font-courier), monospace',
                            fontSize: '0.65rem',
                            letterSpacing: '0.1em',
                            color: '#6B6560',
                            marginTop: '0.6rem',
                            textTransform: 'uppercase',
                          }}
                        >
                          {block.caption}
                        </figcaption>
                      )}
                    </figure>
                  )
                }
                return null
              })}
            </div>
          ) : null}

          {/* Location links */}
          {post.locationLinks && post.locationLinks.length > 0 && (
            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(26,26,26,0.1)' }}>
              <p
                style={{
                  fontFamily: 'var(--font-courier), monospace',
                  fontSize: '0.65rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#6B6560',
                  marginBottom: '1.25rem',
                }}
              >
                spots in this rec
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {post.locationLinks.map(({ name, url }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--font-space-grotesk), sans-serif',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      color: '#1B502F',
                      borderBottom: '1px solid rgba(27,80,47,0.35)',
                      paddingBottom: '1px',
                      display: 'inline-block',
                      width: 'fit-content',
                    }}
                  >
                    {name} →
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Back link */}
          <div style={{ marginTop: '4rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(26,26,26,0.1)' }}>
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

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div
            className="related-posts-pad"
            style={{
              padding: '5rem 3rem 8rem',
              borderTop: '1px solid rgba(26,26,26,0.1)',
            }}
          >
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
              <p
                style={{
                  fontFamily: 'var(--font-courier), monospace',
                  fontSize: '0.68rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#6B6560',
                  marginBottom: '2.5rem',
                }}
              >
                more from the feed
              </p>
              <div
                className="related-posts-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                  gap: '2rem',
                }}
              >
                {relatedPosts.map(p => (
                  <PostCard key={p.slug} post={p} />
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
