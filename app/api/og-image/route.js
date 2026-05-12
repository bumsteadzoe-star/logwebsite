import { NextResponse } from 'next/server'
import { renderOgImageBuffer } from '../../../lib/ogImageSharp'
import { isSupabasePublicObjectUrlAllowed } from '../../../lib/supabaseStorageOrigins'

export const runtime = 'nodejs'

/**
 * Pasting from HTML often produces a literal `&amp;` between query params. Browsers split on `&`,
 * so the query becomes `v=6` and `amp;src=https...` — no `src` key. Normalize **first**, then parse.
 */
function resolveSrcParam(request) {
  let href = String(request.nextUrl?.href || request.url || '')
  href = href.replace(/&amp;/gi, '&')
  try {
    const u = new URL(href)
    const src = u.searchParams.get('src') || u.searchParams.get('url')
    if (src && String(src).trim()) return String(src).trim()
  } catch {
    /* ignore */
  }
  const q = href.indexOf('?')
  if (q === -1) return ''
  const qs = href.slice(q + 1)
  const params = new URLSearchParams(qs)
  const recovered = params.get('src') || params.get('url')
  return recovered && String(recovered).trim() ? String(recovered).trim() : ''
}

/**
 * Fetches a Supabase **object/public** image, applies EXIF orientation, and returns a
 * 1200×630 JPEG for Open Graph crawlers — without using Supabase `/render/image/` (transform quota).
 */
export async function GET(request) {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return new NextResponse('Missing NEXT_PUBLIC_SUPABASE_URL', { status: 500 })
  }

  const src = resolveSrcParam(request)
  if (!src) {
    return new NextResponse(
      [
        'Missing src query parameter.',
        '',
        'Copy the full og:image URL including everything after src= (your Supabase /object/public/… link).',
        'If you pasted from HTML source, replace &amp; with & between parameters.',
        '',
        'Example: /api/og-image?v=8&src=' + encodeURIComponent('https://YOUR_PROJECT/storage/v1/object/public/posts/…'),
      ].join('\n'),
      { status: 400, headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
    )
  }

  const placeholderUrl = new URL('/images/film1.jpg', request.url).toString()

  try {
    new URL(src)
  } catch {
    return new NextResponse('Invalid src URL', { status: 400 })
  }

  if (!isSupabasePublicObjectUrlAllowed(src)) {
    return new NextResponse('Forbidden', { status: 403 })
  }

  const res = await fetch(src, {
    cache: 'no-store',
    headers: {
      Accept: 'image/*,*/*;q=0.8',
      'User-Agent': 'LogOgImage/1.0 (compatible; +https://www.logsocial.app)',
    },
  })
  if (!res.ok) {
    return new NextResponse('Upstream fetch failed', { status: 502 })
  }

  const input = Buffer.from(await res.arrayBuffer())
  if (input.length < 32) {
    return new NextResponse('Empty upstream', { status: 502 })
  }

  try {
    const out = await renderOgImageBuffer(input)

    return new NextResponse(out, {
      status: 200,
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800',
      },
    })
  } catch (e) {
    console.error('og-image sharp error', e)
    return NextResponse.redirect(placeholderUrl, 302)
  }
}
