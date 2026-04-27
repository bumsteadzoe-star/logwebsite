// import Script from 'next/script'
// import { createClient } from '@supabase/supabase-js'

// const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://logsocial.app'
// const DEFAULT_OG_IMAGE = `${SITE}/images/film1.jpg`

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL,
//   process.env.SUPABASE_SERVICE_ROLE_KEY 
// )

// export async function generateMetadata({ params }) {
//   const { id } = await params

//   // 1. Fetch post data
//   const { data: post } = await supabase
//     .from('posts') 
//     .select('title, caption, url') // Adjust 'photos' to your actual column name
//     .eq('id', id)
//     .single()

//   // 2. Determine Title & Description
//   const title = post?.title ? `${post.title} — Log` : 'Check out this experience on Log'
//   const description = post?.caption || 'Open in the Log app to view this post.'
  
//   // 3. Handle Image Transformation
//   // Note: If post.photos is an array, we grab the first item
//   let photoPath = null;
//   if (post?.url) {
//     // Split by comma and take the first item, then trim whitespace
//     const urlArray = post.url.split(',');
//     photoPath = urlArray[0]?.trim();
//   }
  
//   // 4. Construct the Final Image URL
//   // We use the first path from your comma-separated list
//   const imageUrl = photoPath 
//     ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/render/image/public/posts/${photoPath}?width=1200&height=630&format=origin&quality=80`
//     : DEFAULT_OG_IMAGE

//   return {
//     metadataBase: new URL(SITE),
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       type: 'website',
//       url: `${SITE}/share/${id}`,
//       images: [{ url: imageUrl, width: 1200, height: 630 }],
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title,
//       description,
//       images: [imageUrl],
//     },
//   }
// }

// // Don't forget the Page component itself so the app actually opens!
// export default async function ShareBridgePage({ params }) {
//   const { id } = await params
//   const appStoreUrl = process.env.NEXT_PUBLIC_IOS_APP_STORE_URL || 'https://apps.apple.com/us/app/log/id0000000000'

//   const inline = `
//     (function () {
//       var id = ${JSON.stringify(id)};
//       var scheme = 'log://post/' + encodeURIComponent(id);
//       window.location.href = scheme;
//       setTimeout(function () {
//         window.location.href = ${JSON.stringify(appStoreUrl)};
//       }, 2000);
//     })();`

//   return (
//     <>
//       <p style={{ fontFamily: 'system-ui, sans-serif', padding: 24, margin: 0 }}>
//         Opening Log…
//       </p>
//       <Script id="log-share-bridge" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: inline }} />
//     </>
//   )
// }

import Script from 'next/script'
import { createClient } from '@supabase/supabase-js'

// 1. Setup constants - using 'www' to avoid the 308 redirect loop
const SITE = 'https://www.logsocial.app'
const DEFAULT_OG_IMAGE = `${SITE}/images/film1.jpg`

// 2. Initialize Supabase Admin
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export async function generateMetadata({ params }) {
  const { id } = await params

  // Fetch post data
  const { data: post } = await supabase
    .from('posts')
    .select('title, caption, url')
    .eq('id', id)
    .single()

  const title = post?.title ? `${post.title} — Log` : 'Check out this experience on Log'
  const description = post?.caption || 'Open in the Log app to view this post.'
  
  // 3. Intelligent Image Logic
  const firstPhoto = post?.url?.split(',')[0]?.trim()
  let imageUrl = DEFAULT_OG_IMAGE

  if (firstPhoto) {
    if (firstPhoto.startsWith('http')) {
      // FIX: Use the full URL if the DB already provides one
      imageUrl = firstPhoto
    } else {
      // Build path if DB only provides filename/path
      imageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/posts/${firstPhoto}`
    }

    // 4. THE HEIC WORKAROUND
    // iMessage cannot render .heic. If we see one, we route it 
    // through Supabase's render engine to force a compatible format.
    if (imageUrl.toLowerCase().endsWith('.heic')) {
      imageUrl = imageUrl.replace('/object/public/', '/render/image/public/') + '?width=1200&height=630&format=origin'
    }
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
      textAlign: 'center' 
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