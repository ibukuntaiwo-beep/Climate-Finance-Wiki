// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkWikilinks from './src/lib/remark-wikilinks.mjs';

export default defineConfig({
  site: 'https://climatefinancewiki.org',
  output: 'static',
  integrations: [sitemap()],
  redirects: {
    '/concepts/the-1.5c-threshold/': '/concepts/the-15c-threshold/',
    '/concepts/the-1-5-c-threshold/': '/concepts/the-15c-threshold/'
  },
  build: {
    format: 'directory'
  },
  markdown: {
    remarkPlugins: [[remarkWikilinks, { base: '/' }]]
  }
});
