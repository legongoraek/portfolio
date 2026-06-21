import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel/serverless';

const isDev = process.env.NODE_ENV !== 'production';

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
      alias: {},
    },
    ssr: {
      external: isDev ? ['svgo', 'cookie', 'kleur'] : ['svgo'],
      noExternal: isDev ? [] : ['cookie', 'kleur'],
    }
  }
});