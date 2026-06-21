import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  adapter: vercel(),
  integrations: [
    react(),
    icon({
      defaultStyle: 'width: 1.5em; height: 1.5em;'
    })
  ],
  site: 'https://luisenriquegongoraek.com',
  output: 'hybrid',
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ['svgo']
    }
  }
});