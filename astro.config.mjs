import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://legongoraek.me',
  output: 'static',

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },

  integrations: [
    icon({
      defaultStyle: 'width: 1.5em; height: 1.5em;'
    })
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});
