/**
 * Build a stable **public object** Storage URL for Open Graph / Twitter cards.
 *
 * Using `/storage/v1/render/image/...` counts toward Supabase **Image Transformations**
 * billing (per origin image per billing period). Crawlers hit OG URLs often; prefer
 * `/object/public/...` so previews still work without transformation quota.
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
