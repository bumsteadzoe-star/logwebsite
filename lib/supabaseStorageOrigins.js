/**
 * Supabase project URLs can use the default `*.supabase.co` host **or** a custom domain
 * (e.g. `auth.yourdomain.com`) for Storage public URLs. OG metadata and `/api/og-image`
 * must accept every origin your app writes into `posts.url`.
 *
 * Set `NEXT_PUBLIC_SUPABASE_STORAGE_EXTRA_ORIGINS` to comma-separated origins, e.g.:
 * `https://auth.logsocial.app`
 */
export function getSupabaseStorageAllowedOrigins() {
  /** @type {Set<string>} */
  const origins = new Set()
  const primary = process.env.NEXT_PUBLIC_SUPABASE_URL
  const extra = process.env.NEXT_PUBLIC_SUPABASE_STORAGE_EXTRA_ORIGINS || ''

  try {
    if (primary) origins.add(new URL(primary).origin)
  } catch {
    /* ignore */
  }

  for (const part of extra.split(/[,;\s]+/).map((s) => s.trim()).filter(Boolean)) {
    try {
      const withScheme = /^https?:\/\//i.test(part) ? part : `https://${part}`
      origins.add(new URL(withScheme).origin)
    } catch {
      /* skip bad entry */
    }
  }

  return origins
}

/** True if `urlStr` is a Supabase Storage **public object** URL on an allowed origin. */
export function isSupabasePublicObjectUrlAllowed(urlStr) {
  let u
  try {
    u = new URL(urlStr)
  } catch {
    return false
  }
  if (!u.pathname.startsWith('/storage/v1/object/public/')) return false
  return getSupabaseStorageAllowedOrigins().has(u.origin)
}
