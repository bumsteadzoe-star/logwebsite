import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BlogPolaroid from '@/components/BlogPolaroid'
import posts from '@/data/posts'

export const revalidate = 3600

export const metadata = {
  title: 'recs — LOG',
  description: 'curated spots, honest takes, and places worth logging.',
}

export default function RecsPage() {
  const publishedPosts = posts.filter(p => p.published)

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: '#EBE5DC', minHeight: '100vh' }}>

        {/* Hero / header — photo background, heading centered */}
        <div
          style={{
            position: 'relative',
            height: '42vh',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '64px',
          }}
        >
          <img
            src="/images/film6.jpg"
            alt=""
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              pointerEvents: 'none',
            }}
          />
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.32) 100%)',
              pointerEvents: 'none',
            }}
          />
          <h1
            style={{
              position: 'relative',
              zIndex: 1,
              fontFamily: 'var(--font-space-grotesk), sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              lineHeight: 0.88,
              letterSpacing: '-0.045em',
              color: '#EBE5DC',
              textAlign: 'center',
              margin: 0,
            }}
          >
            Recs
          </h1>
        </div>

        {/* Subtext */}
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '4rem 3rem 0',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-space-grotesk), sans-serif',
              fontWeight: 400,
              fontSize: '1rem',
              lineHeight: 1.7,
              color: '#6B6560',
            }}
          >
            Recommendations from the friends of Log.
          </p>
        </div>

        {/* Blog posts */}
        <div
          className="recs-posts-pad"
          style={{
            padding: '4rem 3rem 8rem',
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}
        >
          {publishedPosts.map(post => (
            <BlogPolaroid key={post.slug} post={post} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
