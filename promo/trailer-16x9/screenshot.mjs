import puppeteer from 'puppeteer';

const outDir = 'C:/Users/pusko/Downloads/SECOND BRAIN/wiki-trailer/assets';
const site = 'http://localhost:4568/Climate-Finance-Wiki';

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });

// ── Landing page: full-height for scroll ──
const landing = await browser.newPage();
await landing.setViewport({ width: 1920, height: 1080 });
await landing.goto(`${site}/`, { waitUntil: 'networkidle0', timeout: 20000 });
// Set heroIdx and reload to get a clean first case study
await landing.evaluate(() => localStorage.setItem('heroIdx', '0'));
await landing.reload({ waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 2000));
// Force all scroll-reveal elements to be visible for full-page screenshot
await landing.evaluate(() => {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('revealed'));
  document.querySelectorAll('.article-card, .term-entry').forEach(el => el.classList.add('revealed'));
});
await new Promise(r => setTimeout(r, 500));
await landing.screenshot({ path: `${outDir}/landing-full.png`, fullPage: true });
await landing.screenshot({ path: `${outDir}/landing-hero.png` });

// ── Landing "refreshed" variant: bump heroIdx for different case study ──
await landing.evaluate(() => localStorage.setItem('heroIdx', '1'));
await landing.reload({ waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 2000));
await landing.screenshot({ path: `${outDir}/landing-refreshed.png` });

// ── Green bonds article: full-height for scroll ──
const article = await browser.newPage();
await article.setViewport({ width: 1920, height: 1080 });
await article.goto(`${site}/instruments/green-bonds/`, { waitUntil: 'networkidle0', timeout: 20000 });
await new Promise(r => setTimeout(r, 2000));
await article.screenshot({ path: `${outDir}/article-full.png`, fullPage: true });
await article.screenshot({ path: `${outDir}/article-top.png` });

await browser.close();
console.log('All screenshots saved with correct styling.');
