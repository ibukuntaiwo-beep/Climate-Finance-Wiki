import { chromium } from 'playwright';
import { join } from 'path';

const ASSETS = join(import.meta.dirname, 'assets');
const SITE = 'https://climatefinancewiki.org';
const VP = { width: 1920, height: 1080 };

async function run() {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: VP, deviceScaleFactor: 1 });
  const page = await ctx.newPage();

  // Find all case study links from the site
  console.log('Finding case study pages...');
  await page.goto(SITE, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1000);

  const caseLinks = await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('a[href]'));
    return links
      .filter(a => (a.getAttribute('href') || '').includes('/case-studies/'))
      .map(a => ({ href: a.href, text: a.textContent.trim() }))
      .filter((v, i, arr) => arr.findIndex(x => x.href === v.href) === i)
      .slice(0, 8);
  });

  console.log(`Found ${caseLinks.length} case studies:`, caseLinks.map(l => l.text).join(', '));

  // Already have Dieselgate (article-page.png), skip it and capture others
  const toCapture = caseLinks
    .filter(l => !l.href.includes('volkswagen-dieselgate'))
    .slice(0, 4);

  for (let i = 0; i < toCapture.length; i++) {
    const link = toCapture[i];
    console.log(`Capturing ${i + 1}/${toCapture.length}: ${link.text}...`);
    try {
      await page.goto(link.href, { waitUntil: 'networkidle', timeout: 15000 });
      await page.waitForTimeout(1000);
      await page.screenshot({
        path: join(ASSETS, `case-${i + 2}.png`),
        fullPage: false
      });
      console.log(`  → case-${i + 2}.png`);
    } catch (err) {
      console.log(`  ✗ Failed: ${err.message}`);
    }
  }

  // Rename existing Dieselgate as case-1
  await browser.close();
  console.log('\nDone. Rename article-page.png → case-1.png manually if needed.');
}

run().catch(err => { console.error(err); process.exit(1); });
