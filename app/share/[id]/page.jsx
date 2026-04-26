import Script from 'next/script'

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://logsocial.app'
const DEFAULT_OG_IMAGE = `${SITE}/images/film1.jpg`

function firstString(value) {
  if (value == null) return ''
  if (Array.isArray(value)) return firstString(value[0])
  return String(value)
}

function absoluteOgImage(raw) {
  const s = firstString(raw).trim()
  if (!s) return DEFAULT_OG_IMAGE
  try {
    return new URL(s).href
  } catch {
    if (s.startsWith('/')) return `${SITE}${s}`
    return DEFAULT_OG_IMAGE
  }
}

export async function generateMetadata({ params, searchParams }) {
  const { id } = await params
  const sp = await searchParams

  const img = sp.img ?? sp.image ?? sp.og_image
  const titleRaw = sp.t ?? sp.title ?? sp.og_title
  const captionRaw = sp.c ?? sp.caption ?? sp.desc ?? sp.description ?? sp.og_description

  const line = firstString(titleRaw).trim()
  const title = line ? `${line} — Log` : 'Check out this experience on Log'
  const description = firstString(captionRaw).trim() || 'Open in the Log app to view this post.'
  const imageUrl = absoluteOgImage(img)

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
  const appStoreUrl =
    process.env.NEXT_PUBLIC_IOS_APP_STORE_URL ||
    'https://apps.apple.com/us/app/log/id0000000000'

  const inline = `
(function () {
  var id = ${JSON.stringify(id)};
  var scheme = 'log://post/' + encodeURIComponent(id);
  window.location.href = scheme;
  setTimeout(function () {
    window.location.href = ${JSON.stringify(appStoreUrl)};
  }, 2000);
})();`

  return (
    <>
      <p style={{ fontFamily: 'system-ui, sans-serif', padding: 24, margin: 0 }}>
        Opening Log…
      </p>
      <Script id="log-share-bridge" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: inline }} />
    </>
  )
}
