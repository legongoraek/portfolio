import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [
    react(),
  ],
  site: 'https://luisenriquegongoraek.com',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ['svgo']
    }
  }
});