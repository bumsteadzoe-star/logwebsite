import { ogImagePublicUrl } from '../../../../lib/ogImageUrl'

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
    const u = ogImagePublicUrl(String(imgRaw))
    if (u) imageUrl = u
  }

  return {
    metadataBase: new URL(SITE),
    title,
    description: 'Open this place in the Log app.',
    alternates: { canonical: `${SITE}/share/business/${id}` },
    openGraph: {
      title,
      description: 'Open this place in the Log app.',
      images: [{ url: imageUrl }],
    },
    twitter: { card: 'summary_large_image', title, images: [imageUrl] },
  }
}

export default async function BusinessBridgePage({ params }) {
  const { id } = await params
  const appStoreUrl =
    process.env.NEXT_PUBLIC_IOS_APP_STORE_URL ||
    'https://apps.apple.com/us/app/log/id0000000000'

  const inline = `
    (function () {
      var scheme = 'log://share/business/' + encodeURIComponent(${JSON.stringify(id)});
      window.location.href = scheme;
      setTimeout(function () { window.location.href = ${JSON.stringify(appStoreUrl)}; }, 2500);
    })();`

  return (
    <>
      <script suppressHydrationWarning dangerouslySetInnerHTML={{ __html: inline }} />
      <div style={{ textAlign: 'center', marginTop: '40vh', fontFamily: 'system-ui, sans-serif' }}>
        <h1>Opening place…</h1>
      </div>
    </>
  )
}
