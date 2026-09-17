import { chromium } from 'playwright';
import path from 'path';

const outDir = path.resolve('public/screenshots');

async function run() {
  const browser = await chromium.launch({ headless: true, channel: 'chrome' });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
  });
  await page.goto('http://localhost:3005', { waitUntil: 'networkidle' });

  // Hide fixed header so it doesn't overlay section screenshots
  await page.evaluate(() => {
    const header = document.querySelector('header');
    if (header) header.style.display = 'none';
  });

  const sections = [
    'manifesto',
    'metodologia',
    'servicos',
    'estrutura',
    'equipe',
    'convenio',
    'depoimentos',
    'simulador',
    'localizacao',
    'faq',
  ];

  for (const id of sections) {
    const el = await page.$(`#${id}`);
    if (el) {
      await el.screenshot({ path: path.join(outDir, `section_${id}.png`) });
      console.log(`Captured #${id}`);
    } else {
      console.log(`Could not find #${id}`);
    }
  }

  // Also capture footer
  const footer = await page.$('footer');
  if (footer) {
    await footer.screenshot({ path: path.join(outDir, 'section_footer.png') });
    console.log('Captured footer');
  }

  await browser.close();
  console.log('All sections captured!');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
