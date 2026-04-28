import Script from 'next/script'

const SITE = 'https://www.logsocial.app'
const DEFAULT_OG_IMAGE = `${SITE}/images/film1.jpg`

export async function generateMetadata({ params, searchParams }) {
  const { id } = await params
  const sp = await searchParams
  const titleRaw = sp.t || sp.title
  const imgRaw = sp.img || sp.image
  const title = titleRaw ? `${titleRaw} - Log` : 'Check out this place'

  let imageUrl = DEFAULT_OG_IMAGE
  if (imgRaw) {
    let transformed = imgRaw.replace('/object/public/', '/render/image/public/')
    const connector = transformed.includes('?') ? '&' : '?'
    imageUrl = `${transformed}${connector}width=1200&height=630&format=origin&quality=80`
  }

  return {
    metadataBase: new URL(SITE),
    title,
    description: 'Open this place in the Log app.',
    alternates: { canonical: `${SITE}/share/business/${id}` },
    openGraph: { title, images: [{ url: imageUrl }] },
    twitter: { card: 'summary_large_image', images: [imageUrl] },
  }
}

export default async function BusinessBridgePage({ params }) {
  const { id } = await params
  const appStoreUrl = process.env.NEXT_PUBLIC_IOS_APP_STORE_URL || 'https://apps.apple.com/us/app/log/id0000000000'

  const inline = `
    (function () {
      var scheme = 'log://share/business/' + encodeURIComponent(${JSON.stringify(id)});
      window.location.href = scheme;
      setTimeout(function () { window.location.href = ${JSON.stringify(appStoreUrl)}; }, 2500);
    })();`

  return (
    <div style={{ textAlign: 'center', marginTop: '40vh', fontFamily: 'system-ui' }}>
      <h1>Opening Place...</h1>
      <Script id="biz-js" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: inline }} />
    </div>
  )
}