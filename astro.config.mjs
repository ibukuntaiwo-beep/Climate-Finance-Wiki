// @ts-check
import { defineConfig } from 'astro/config';
import remarkWikilinks from './src/lib/remark-wikilinks.mjs';

export default defineConfig({
  site: 'https://climatefinancewiki.org',
  output: 'static',
  build: {
    format: 'directory'
  },
  markdown: {
    remarkPlugins: [[remarkWikilinks, { base: '/' }]]
  }
});
