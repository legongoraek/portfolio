import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://luisenriquegongoraek.com',
  output: 'hybrid',
  adapter: vercel(),

  integrations: [
    icon({
      defaultStyle: 'width: 1.5em; height: 1.5em;'
    })
  ],

  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: [
        'astro-icon',
        'es-module-lexer',
        'cookie',
        'kleur'
      ]
    }
  }
});