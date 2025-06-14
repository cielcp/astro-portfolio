// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sanity({
      projectId: "rnk0k1nk",
      dataset: "production",
      useCdn: false, // for static builds
      // studioBasePath: '/studio' 
    }),
    react(),
  ],

  adapter: vercel()
});