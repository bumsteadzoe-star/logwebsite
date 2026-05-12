import { createClient } from '@supabase/supabase-js'
import { ogImageForMetadata } from '../../../../lib/ogImageUrl'

const SITE = 'https://www.logsocial.app'
const DEFAULT_OG_IMAGE = `${SITE}/images/film1.jpg`

function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) return null
  return createClient(url, key)
}

export async function generateMetadata({ params, searchParams }) {
  const { id } = await params
  const sp = await searchParams

  // We get these from the URL: ?table=trips&col=title
  const tableName = sp.table || 'trips' 
  const titleCol = sp.col || 'name'

  const supabase = getSupabaseAdmin()
  const { data: journal } = supabase
    ? await supabase.from(tableName).select(`${titleCol}, cover_url`).eq('id', id).single()
    : { data: null }

  const journalTitle = journal?.[titleCol]
  const title = journalTitle ? `${journalTitle} - Log` : 'Check out this Journal on Log'
  
  let imageUrl = DEFAULT_OG_IMAGE
  const cover = journal?.cover_url ? ogImageForMetadata(SITE, String(journal.cover_url)) : null
  if (cover) imageUrl = cover

  return {
    title,
    description: 'Follow this journal on the Log app.',
    openGraph: {
      title,
      images: [{ url: imageUrl }],
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
    <>
      <script suppressHydrationWarning dangerouslySetInnerHTML={{ __html: inline }} />
      <div style={{ fontFamily: 'system-ui, sans-serif', textAlign: 'center', marginTop: '40vh' }}>
        <h1>Opening Journal...</h1>
      </div>
    </>
  )
}
