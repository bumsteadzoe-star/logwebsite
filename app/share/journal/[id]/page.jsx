import Script from 'next/script'
import { createClient } from '@supabase/supabase-js'

const SITE = 'https://www.logsocial.app'
const DEFAULT_OG_IMAGE = `${SITE}/images/film1.jpg`

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export async function generateMetadata({ params, searchParams }) {
  const { id } = await params
  const sp = await searchParams

  // We get these from the URL: ?table=trips&col=title
  const tableName = sp.table || 'trips' 
  const titleCol = sp.col || 'name'

  // Fetch from the specific table
  const { data: journal } = await supabase
    .from(tableName)
    .select(`${titleCol}, cover_url`)
    .eq('id', id)
    .single()

  const journalTitle = journal?.[titleCol]
  const title = journalTitle ? `${journalTitle} - Log` : 'Check out this Journal on Log'
  
  let imageUrl = DEFAULT_OG_IMAGE
  if (journal?.cover_url) {
    // Pro Plan Render Transformation
    let transformed = journal.cover_url.replace('/object/public/', '/render/image/public/')
    const connector = transformed.includes('?') ? '&' : '?'
    imageUrl = `${transformed}${connector}width=1200&height=630&format=origin&quality=80`
  }

  return {
    title,
    description: 'Follow this journal on the Log app.',
    openGraph: {
      title,
      images: [{ url: imageUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      images: [imageUrl],
    },
  }
}

export default async function ShareJournalBridgePage({ params, searchParams }) {
  const { id } = await params
  const sp = await searchParams
  const appStoreUrl = process.env.NEXT_PUBLIC_IOS_APP_STORE_URL || 'https://apps.apple.com/us/app/log/id0000000000'

  const query = new URLSearchParams()
  if (sp.table) query.set('table', String(sp.table))
  if (sp.col) query.set('col', String(sp.col))
  if (sp.owner_id) query.set('owner_id', String(sp.owner_id))
  if (sp.trip_name) query.set('trip_name', String(sp.trip_name))
  const deepLinkQuery = query.toString()

  const inline = `
    (function () {
      var scheme = 'log://share/journal/' + encodeURIComponent(${JSON.stringify(id)}) + ${JSON.stringify(
        deepLinkQuery ? `?${deepLinkQuery}` : ''
      )};
      window.location.href = scheme;
      setTimeout(function () { window.location.href = ${JSON.stringify(appStoreUrl)}; }, 2500);
    })();`

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', textAlign: 'center', marginTop: '40vh' }}>
      <h1>Opening Journal...</h1>
      <Script id="journal-bridge" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: inline }} />
    </div>
  )
}
