/** Bump when OG pipeline changes so crawlers refetch (iMessage / Slack cache previews aggressively). */
export const OG_IMAGE_PIPELINE_VERSION = '6'

/**
 * Build a stable **public object** Storage URL (no `/render/image/` — no Supabase transform quota).
 *
 * @param {string | null | undefined} raw Full HTTPS URL, or a path/key under the `posts` bucket
 * @returns {string | null}
 */
export function ogImagePublicUrl(raw) {
  if (raw == null || typeof raw !== 'string') return null
  let u = raw.trim()
  if (!u) return null

  // Normalize any stored / previously generated render URLs back to object URLs (no query).
  if (u.includes('/render/image/')) {
    u = u.replace('/render/image/public/', '/object/public/')
    u = u.split('?')[0]
  }

  if (/^https?:\/\//i.test(u)) return u

  const base = process.env.NEXT_PUBLIC_SUPABASE_URL
  if (!base) return null
  const key = u.replace(/^\/+/, '')
  return `${base}/storage/v1/object/public/posts/${key}`
}

/**
 * URL to put in `og:image` / Twitter metadata: same-origin Next route that auto-orients EXIF
 * and crops to 1200×630 (fixes rotation vs raw `/object/public/` for many crawlers).
 * Only wraps Supabase **object/public** URLs; others returned unchanged.
 *
 * @param {string} siteOrigin e.g. `https://www.logsocial.app` (no trailing slash)
 * @param {string | null | undefined} raw passed to {@link ogImagePublicUrl}
 * @returns {string | null}
 */
export function ogImageForMetadata(siteOrigin, raw) {
  const publicUrl = ogImagePublicUrl(raw)
  if (!publicUrl) return null
  const base = process.env.NEXT_PUBLIC_SUPABASE_URL
  if (!base) return publicUrl
  let supabaseOrigin
  try {
    supabaseOrigin = new URL(base).origin
  } catch {
    return publicUrl
  }
  let u
  try {
    u = new URL(publicUrl)
  } catch {
    return publicUrl
  }
  if (u.origin !== supabaseOrigin || !u.pathname.startsWith('/storage/v1/object/public/')) {
    return publicUrl
  }
  const origin = siteOrigin.replace(/\/$/, '')
  return `${origin}/api/og-image?v=${encodeURIComponent(OG_IMAGE_PIPELINE_VERSION)}&src=${encodeURIComponent(publicUrl)}`
}
