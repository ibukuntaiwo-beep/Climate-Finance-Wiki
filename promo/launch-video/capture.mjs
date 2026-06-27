import { chromium } from 'playwright';
import { join } from 'path';

const ASSETS = join(import.meta.dirname, 'assets');
const SITE = 'https://climatefinancewiki.org';
const VP = { width: 1920, height: 1080 };

async function run() {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: VP, deviceScaleFactor: 1 });
  const page = await ctx.newPage();

  // ── 1. Landing page full-height screenshot (for scroll effect in Scene 2)
  console.log('Capturing landing page...');
  await page.goto(SITE, { waitUntil: 'networkidle', timeout: 30000 });
  // Wait for fonts to load
  await page.evaluate(() => document.fonts.ready);
  // Scroll through the entire page to trigger lazy/scroll-animated sections
  const pageHeight = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < pageHeight; y += 400) {
    await page.evaluate(scrollY => window.scrollTo(0, scrollY), y);
    await page.waitForTimeout(200);
  }
  // Wait at bottom for any final animations
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1500);
  // Scroll back to top
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);
  // Wait for all images (including newly loaded ones)
  await page.evaluate(async () => {
    const imgs = Array.from(document.querySelectorAll('img'));
    await Promise.all(imgs.map(img =>
      img.complete ? Promise.resolve() :
      new Promise(r => { img.onload = r; img.onerror = r; })
    ));
  });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: join(ASSETS, 'landing-full.png'), fullPage: true });
  await page.screenshot({ path: join(ASSETS, 'landing-hero.png'), fullPage: false });
  console.log('  landing-full.png + landing-hero.png');

  // ── 2. Find and capture the article index / categories section
  console.log('Looking for article index...');
  // Try common paths for an article index or browse page
  const indexPaths = ['/articles', '/browse', '/concepts', '/index', '/wiki'];
  let foundIndex = false;
  for (const p of indexPaths) {
    try {
      const resp = await page.goto(SITE + p, { waitUntil: 'networkidle', timeout: 15000 });
      if (resp && resp.ok()) {
        await page.waitForTimeout(1000);
        await page.screenshot({ path: join(ASSETS, 'article-index.png'), fullPage: false });
        await page.screenshot({ path: join(ASSETS, 'article-index-full.png'), fullPage: true });
        console.log(`  article-index.png (from ${p})`);
        foundIndex = true;
        break;
      }
    } catch { /* try next */ }
  }
  if (!foundIndex) console.log('  (no article index found, will use landing page)');

  // ── 3. Capture a sample article page (for scroll demo)
  console.log('Looking for a sample article...');
  await page.goto(SITE, { waitUntil: 'networkidle', timeout: 20000 });
  await page.waitForTimeout(1000);
  // Find article links on the page
  const articleLink = await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('a[href]'));
    const article = links.find(a => {
      const href = a.getAttribute('href') || '';
      return (href.includes('/concepts/') || href.includes('/instruments/') ||
              href.includes('/case-studies/') || href.includes('/frameworks/') ||
              href.includes('/actors/')) && !href.includes('#');
    });
    return article ? article.href : null;
  });
  if (articleLink) {
    await page.goto(articleLink, { waitUntil: 'networkidle', timeout: 15000 });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: join(ASSETS, 'article-page.png'), fullPage: false });
    await page.screenshot({ path: join(ASSETS, 'article-page-full.png'), fullPage: true });
    console.log(`  article-page.png (${articleLink})`);
  }

  // ── 4. Capture Editor's Recommendation / starter pack
  console.log('Looking for Editor\'s Recommendation...');
  await page.goto(SITE, { waitUntil: 'networkidle', timeout: 20000 });
  await page.waitForTimeout(1000);
  // Look for starter pack or recommendation section on landing page
  const recoSection = await page.evaluate(() => {
    const headings = Array.from(document.querySelectorAll('h2, h3, h4, [class*="recommend"], [class*="starter"], [class*="editor"]'));
    for (const h of headings) {
      const text = h.textContent.toLowerCase();
      if (text.includes('recommend') || text.includes('starter') || text.includes('editor') || text.includes('start here') || text.includes('new to')) {
        return { found: true, y: h.getBoundingClientRect().top + window.scrollY };
      }
    }
    return { found: false };
  });
  if (recoSection.found) {
    await page.evaluate(y => window.scrollTo({ top: y - 100, behavior: 'instant' }), recoSection.y);
    await page.waitForTimeout(500);
    await page.screenshot({ path: join(ASSETS, 'editor-reco.png'), fullPage: false });
    console.log('  editor-reco.png');
  } else {
    console.log('  (no editor recommendation section found on landing)');
  }

  // ── 5. Capture guided reading trails
  console.log('Looking for reading trails...');
  const trailPaths = [
    '/trails/follow-the-money', '/trails/greenwashing', '/trails/climate-policy',
    '/reading-trails', '/trails'
  ];
  let trailCount = 0;
  for (const p of trailPaths) {
    try {
      const resp = await page.goto(SITE + p, { waitUntil: 'networkidle', timeout: 10000 });
      if (resp && resp.ok()) {
        await page.waitForTimeout(1000);
        const name = p.split('/').filter(Boolean).pop() || 'trails';
        await page.screenshot({
          path: join(ASSETS, `trail-${name}.png`),
          fullPage: false
        });
        console.log(`  trail-${name}.png`);
        trailCount++;
      }
    } catch { /* try next */ }
  }
  if (trailCount === 0) {
    // Try finding trail links on the landing page
    await page.goto(SITE, { waitUntil: 'networkidle', timeout: 15000 });
    const trailLinks = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a[href]'));
      return links
        .filter(a => {
          const text = (a.textContent || '').toLowerCase();
          const href = (a.getAttribute('href') || '').toLowerCase();
          return text.includes('trail') || text.includes('follow the money') ||
                 text.includes('greenwashing') || href.includes('trail');
        })
        .map(a => a.href)
        .slice(0, 3);
    });
    for (let i = 0; i < trailLinks.length; i++) {
      try {
        await page.goto(trailLinks[i], { waitUntil: 'networkidle', timeout: 10000 });
        await page.waitForTimeout(1000);
        await page.screenshot({
          path: join(ASSETS, `trail-${i + 1}.png`),
          fullPage: false
        });
        console.log(`  trail-${i + 1}.png`);
      } catch { /* skip */ }
    }
  }

  // ── 6. Capture a case study page
  console.log('Looking for a case study...');
  await page.goto(SITE, { waitUntil: 'networkidle', timeout: 15000 });
  const caseLink = await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('a[href]'));
    const cs = links.find(a => (a.getAttribute('href') || '').includes('/case-studies/'));
    return cs ? cs.href : null;
  });
  if (caseLink) {
    await page.goto(caseLink, { waitUntil: 'networkidle', timeout: 15000 });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: join(ASSETS, 'case-study.png'), fullPage: false });
    await page.screenshot({ path: join(ASSETS, 'case-study-full.png'), fullPage: true });
    console.log(`  case-study.png (${caseLink})`);
  }

  await browser.close();
  console.log('\nDone. Assets saved to:', ASSETS);
}

run().catch(err => { console.error(err); process.exit(1); });
