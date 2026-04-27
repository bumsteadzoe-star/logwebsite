import Script from 'next/script'

const SITE = 'https://www.logsocial.app'
const DEFAULT_OG_IMAGE = `${SITE}/images/film1.jpg`

export async function generateMetadata({ params, searchParams }) {
  const { id } = await params
  const sp = await searchParams
  const titleRaw = sp.t || sp.title
  const imgRaw = sp.img || sp.image
  const title = titleRaw ? `${titleRaw} — Log` : 'Check out this location'
  
  let imageUrl = DEFAULT_OG_IMAGE
  if (imgRaw) {
    let transformed = imgRaw.replace('/object/public/', '/render/image/public/')
    const connector = transformed.includes('?') ? '&' : '?'
    imageUrl = `${transformed}${connector}width=1200&height=630&format=origin&quality=80`
  }

  return {
    metadataBase: new URL(SITE),
    title,
    description: 'Open this location in the Log app.',
    alternates: { canonical: `${SITE}/share/location/${id}` },
    openGraph: { title, images: [{ url: imageUrl }] },
    twitter: { card: 'summary_large_image', images: [imageUrl] },
  }
}

export default async function LocationBridgePage({ params, searchParams }) {
  const { id } = await params
  const sp = await searchParams
  const appStoreUrl = process.env.NEXT_PUBLIC_IOS_APP_STORE_URL || 'https://apps.apple.com/us/app/log/id0000000000'
  
  const query = new URLSearchParams()
  if (sp.owner_id) query.set('owner_id', String(sp.owner_id))
  const deepLinkQuery = query.toString()

  const inline = `
    (function () {
      var scheme = 'log://share/location/' + encodeURIComponent(${JSON.stringify(id)}) + ${JSON.stringify(
        deepLinkQuery ? `?${deepLinkQuery}` : ''
      )};
      window.location.href = scheme;
      setTimeout(function () { window.location.href = ${JSON.stringify(appStoreUrl)}; }, 2500);
    })();`

  return (
    <div style={{ textAlign: 'center', marginTop: '40vh', fontFamily: 'system-ui' }}>
      <h1>Opening Location...</h1>
      <Script id="loc-js" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: inline }} />
    </div>
  )
}