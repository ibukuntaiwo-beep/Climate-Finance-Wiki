// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkWikilinks from './src/lib/remark-wikilinks.mjs';

export default defineConfig({
  site: 'https://climatefinancewiki.org',
  output: 'static',
  integrations: [sitemap()],
  build: {
    format: 'directory'
  },
  markdown: {
    remarkPlugins: [[remarkWikilinks, { base: '/' }]]
  }
});
