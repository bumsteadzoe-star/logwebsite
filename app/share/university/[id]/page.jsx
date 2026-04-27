import Script from 'next/script'

const SITE = 'https://www.logsocial.app'
const DEFAULT_OG_IMAGE = `${SITE}/images/film1.jpg`

export async function generateMetadata({ params, searchParams }) {
  const { id } = await params
  const sp = await searchParams
  const title = (sp.t || sp.title) ? `${sp.t || sp.title} - Log` : 'University on Log'
  const imgRaw = sp.img || sp.image
  
  let imageUrl = DEFAULT_OG_IMAGE
  if (imgRaw) {
    let transformed = imgRaw.replace('/object/public/', '/render/image/public/')
    imageUrl = `${transformed}${transformed.includes('?') ? '&' : '?'}width=1200&height=630&format=origin`
  }

  return {
    metadataBase: new URL(SITE),
    title,
    description: 'Open this university in the Log app.',
    alternates: { canonical: `${SITE}/share/university/${id}` },
    openGraph: { title, images: [{ url: imageUrl }] },
    twitter: { card: 'summary_large_image', images: [imageUrl] },
  }
}

export default async function UniversityBridgePage({ params }) {
  const { id } = await params
  const appStoreUrl = process.env.NEXT_PUBLIC_IOS_APP_STORE_URL || 'https://apps.apple.com/us/app/log/id0000000000'

  const inline = `
    (function () {
      var scheme = 'log://share/university/' + encodeURIComponent(${JSON.stringify(id)});
      window.location.href = scheme;
      setTimeout(function () { window.location.href = ${JSON.stringify(appStoreUrl)}; }, 2500);
    })();`

  return (
    <div style={{ textAlign: 'center', marginTop: '40vh', fontFamily: 'system-ui' }}>
      <h1>Opening University...</h1>
      <Script id="uni-js" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: inline }} />
    </div>
  )
}