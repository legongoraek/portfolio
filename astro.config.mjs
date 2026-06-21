import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel/serverless';

const kleurColorsShim = fileURLToPath(new URL('./src/shims/kleur-colors.js', import.meta.url));

export default defineConfig({
  adapter: vercel(),
  integrations: [
    icon({
      defaultStyle: 'width: 1.5em; height: 1.5em;'
    })
  ],
  site: 'https://luisenriquegongoraek.com',
  output: 'hybrid',
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        'kleur/colors': kleurColorsShim,
      },
    },
    ssr: {
      external: ['svgo'],
      noExternal: ['cookie', 'kleur', 'kleur/colors']
    }
  }
});