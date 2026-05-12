import { NextResponse } from 'next/server'
import { renderOgImageBuffer } from '../../../lib/ogImageSharp'

export const runtime = 'nodejs'

/**
 * Fetches a Supabase **object/public** image, applies EXIF orientation, and returns a
 * 1200×630 JPEG for Open Graph crawlers — without using Supabase `/render/image/` (transform quota).
 */
export async function GET(request) {
  const base = process.env.NEXT_PUBLIC_SUPABASE_URL
  if (!base) {
    return new NextResponse('Missing NEXT_PUBLIC_SUPABASE_URL', { status: 500 })
  }

  let supabaseOrigin
  try {
    supabaseOrigin = new URL(base).origin
  } catch {
    return new NextResponse('Invalid NEXT_PUBLIC_SUPABASE_URL', { status: 500 })
  }

  const src = request.nextUrl.searchParams.get('src')
  if (!src || typeof src !== 'string') {
    return new NextResponse('Missing src', { status: 400 })
  }

  const placeholderUrl = new URL('/images/film1.jpg', request.url).toString()

  let upstream
  try {
    upstream = new URL(src)
  } catch {
    return new NextResponse('Invalid src URL', { status: 400 })
  }

  if (upstream.origin !== supabaseOrigin) {
    return new NextResponse('Forbidden', { status: 403 })
  }
  if (!upstream.pathname.startsWith('/storage/v1/object/public/')) {
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
