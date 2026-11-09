// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.integrae.com.cy',
  integrations: [sitemap()],
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
