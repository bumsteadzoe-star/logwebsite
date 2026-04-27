import Script from 'next/script'
import { createClient } from '@supabase/supabase-js'

// 1. Setup constants - Using 'www' to prevent 308 redirect loops
const SITE = 'https://www.logsocial.app'
const DEFAULT_OG_IMAGE = `${SITE}/images/film1.jpg`

// 2. Initialize Supabase Admin (Server-side only)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

/**
 * GENERATE METADATA
 * Handles the logic for the iMessage preview card
 */
export async function generateMetadata({ params }) {
  const { id } = await params

  // Fetch the specific post data
  const { data: post } = await supabase
    .from('posts')
    .select('title, caption, url')
    .eq('id', id)
    .single()

  const title = post?.title ? `${post.title} — Log` : 'Check out this experience on Log'
  const description = post?.caption || 'Open in the Log app to view this post.'
  
  // 3. Image Logic: Comma-separation + URL Nesting + Rotation Fix
  const firstPhoto = post?.url?.split(',')[0]?.trim()
  let imageUrl = DEFAULT_OG_IMAGE

  if (firstPhoto) {
    // Check if it's already a full URL or just a file path
    const baseFileUrl = firstPhoto.startsWith('http') 
      ? firstPhoto 
      : `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/posts/${firstPhoto}`

    // Route through Render Engine to fix .heic and attempt rotation correction
    // NOTE: This works best on Supabase Pro. 
    // If on Free Tier, this URL might 404; if so, remove the .replace() line below.
    let transformedUrl = baseFileUrl.replace('/object/public/', '/render/image/public/')
    
    // Ensure we use the correct separator (? or &)
    const connector = transformedUrl.includes('?') ? '&' : '?'
    imageUrl = `${transformedUrl}${connector}width=1200&height=630&format=origin&quality=80`
  }

  return {
    metadataBase: new URL(SITE),
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${SITE}/share/${id}`,
      images: [{ url: imageUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  }
}

/**
 * PAGE COMPONENT
 * Handles the automatic redirect to the mobile app
 */
export default async function ShareBridgePage({ params }) {
  const { id } = await params
  const appStoreUrl = process.env.NEXT_PUBLIC_IOS_APP_STORE_URL || 'https://apps.apple.com/us/app/log/id0000000000'

  const inline = `
    (function () {
      var id = ${JSON.stringify(id)};
      var scheme = 'log://post/' + encodeURIComponent(id);
      window.location.href = scheme;
      setTimeout(function () {
        window.location.href = ${JSON.stringify(appStoreUrl)};
      }, 2500);
    })();`

  return (
    <div style={{ 
      fontFamily: 'system-ui, sans-serif', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      textAlign: 'center',
      backgroundColor: '#fff',
      color: '#000'
    }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Opening Log…</h1>
      <p style={{ color: '#666' }}>If the app doesn't open, we'll take you to the App Store.</p>
      
      <Script 
        id="log-share-bridge" 
        strategy="afterInteractive" 
        dangerouslySetInnerHTML={{ __html: inline }} 
      />
    </div>
  )
}