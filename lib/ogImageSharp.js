import sharp from 'sharp'

/**
 * EXIF orientation 1–8 → sharp ops (pixels are stored per tag; we transform to display upright).
 * @see https://sirv.com/help/resources/exif/
 * @param {number | undefined} o
 * @returns {import('sharp').Sharp}
 */
export function applyExifOrientationPipeline(input, o) {
  const base = sharp(input, { failOn: 'none', unlimited: true, sequentialRead: true })
  if (o == null || o === 1) {
    return base.rotate()
  }
  switch (o) {
    case 2:
      return base.flop()
    case 3:
      return base.rotate(180)
    case 4:
      return base.flip()
    case 5:
      return base.rotate(90).flop()
    case 6:
      return base.rotate(90)
    case 7:
      return base.rotate(90).flip()
    case 8:
      return base.rotate(270)
    default:
      return base.rotate()
  }
}

/**
 * Produce 1200×630 JPEG for OG: normalize orientation, then resize (two-step avoids some libvips edge cases).
 */
export async function renderOgImageBuffer(input) {
  const meta = await sharp(input, { failOn: 'none', unlimited: true }).metadata()
  const o = meta.orientation

  const normalized = await applyExifOrientationPipeline(input, o)
    .jpeg({ quality: 95, mozjpeg: true })
    .toBuffer()

  return sharp(normalized, { failOn: 'none' })
    .resize(1200, 630, { fit: 'cover', position: 'centre' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer()
}
