import puppeteer from 'puppeteer';

const outDir = 'C:/Users/pusko/Downloads/SECOND BRAIN/wiki-trailer/assets';
const site = 'http://localhost:4568/Climate-Finance-Wiki';

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });

// Follow the Money: articles 1-3
const ftm = [
  { slug: 'concepts/climate-finance', name: 'ftm-1' },
  { slug: 'instruments/green-bonds', name: 'ftm-2' },
  { slug: 'instruments/the-greenium', name: 'ftm-3' },
];

// The Greenwashing Trail: articles 1-3
const gwt = [
  { slug: 'concepts/greenwashing', name: 'gwt-1' },
  { slug: 'concepts/greenwashing-typology', name: 'gwt-2' },
  { slug: 'case-studies/volkswagen-dieselgate', name: 'gwt-3' },
];

for (const article of [...ftm, ...gwt]) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto(`${site}/${article.slug}/`, { waitUntil: 'networkidle0', timeout: 20000 });
  await new Promise(r => setTimeout(r, 1500));
  // Force reveal elements visible
  await page.evaluate(() => {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('revealed'));
  });
  await new Promise(r => setTimeout(r, 300));
  await page.screenshot({ path: `${outDir}/${article.name}.png` });
  await page.close();
}

await browser.close();
console.log('Trail article screenshots saved.');
