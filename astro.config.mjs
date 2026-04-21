// @ts-check
import { defineConfig } from 'astro/config';
import remarkWikilinks from './src/lib/remark-wikilinks.mjs';

export default defineConfig({
  site: 'https://ibukuntaiwo-beep.github.io',
  base: '/Climate-Finance-Wiki',
  output: 'static',
  build: {
    format: 'directory'
  },
  markdown: {
    remarkPlugins: [remarkWikilinks]
  }
});
