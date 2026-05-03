import Script from 'next/script'
import { createClient } from '@supabase/supabase-js'

const SITE = 'https://www.logsocial.app'
const DEFAULT_OG_IMAGE = `${SITE}/images/film1.jpg`

function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) return null
  return createClient(url, key)
}

function ogImageFromUrl(raw) {
  if (!raw || typeof raw !== 'string') return null
  const trimmed = raw.trim()
  if (!trimmed) return null
  const base =
    trimmed.startsWith('http')
      ? trimmed
      : `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/posts/${trimmed}`
  const renderBase = base.replace('/object/public/', '/render/image/public/')
  const connector = renderBase.includes('?') ? '&' : '?'
  return `${renderBase}${connector}width=1200&height=630&format=origin&quality=80`
}

export async function generateMetadata({ params, searchParams }) {
  const { id } = await params
  const sp = await searchParams

  const supabase = getSupabaseAdmin()
  const { data: post } = supabase
    ? await supabase.from('posts').select('title, caption, url').eq('id', id).single()
    : { data: null }

  const titleFromQuery = sp.t ? String(sp.t).trim() : ''
  const capFromQuery = sp.c ? String(sp.c).trim() : ''
  const imgFromQuery = sp.img ? String(sp.img).trim() : ''

  const titleLine = post?.title?.trim() || titleFromQuery
  const title = titleLine ? `${titleLine} — Log` : 'Check out this experience on Log'
  const description =
    (post?.caption && String(post.caption).trim()) ||
    capFromQuery ||
    'Open in the Log app to view this post.'

  const firstPhoto =
    post?.url?.split(',')[0]?.trim() || imgFromQuery
  let imageUrl = DEFAULT_OG_IMAGE
  const built = ogImageFromUrl(firstPhoto)
  if (built) imageUrl = built

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

export default async function SharePostBridgePage({ params }) {
  const { id } = await params
  const appStoreUrl =
    process.env.NEXT_PUBLIC_IOS_APP_STORE_URL ||
    'https://apps.apple.com/us/app/log/id0000000000'

  const inline = `
    (function () {
      var id = ${JSON.stringify(id)};
      var q = typeof window !== 'undefined' && window.location.search ? window.location.search : '';
      var scheme = 'log://share/' + encodeURIComponent(id) + q;
      window.location.href = scheme;
      setTimeout(function () {
        window.location.href = ${JSON.stringify(appStoreUrl)};
      }, 2500);
    })();`

  return (
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#fff',
        color: '#000',
      }}
    >
      <h1 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Opening Log…</h1>
      <p style={{ color: '#666' }}>If the app doesn&apos;t open, we&apos;ll take you to the App Store.</p>
      <Script id="log-share-post-bridge" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: inline }} />
    </div>
  )
}
