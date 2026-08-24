// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.get-vouch.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
  // `sharp` hangs indefinitely on this machine when its native binary loads
  // (native module load issue, not a code problem). The noop service skips
  // real-time resizing/format conversion; source photos are pre-resized to
  // web-friendly dimensions instead. Revisit once sharp is fixed locally.
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop',
    },
  },
});