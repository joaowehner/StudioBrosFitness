import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const outDir = path.resolve('public/screenshots/live');
fs.mkdirSync(outDir, { recursive: true });

async function run() {
  const browser = await chromium.launch({ headless: true, channel: 'msedge' });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
  });
  
  console.log('Navigating to live URL...');
  await page.goto('https://joaowehner.github.io/StudioBrosFitness/', { waitUntil: 'networkidle', timeout: 45000 });

  // Capture Hero Desktop
  await page.screenshot({ path: path.join(outDir, 'live_desktop_hero.png') });
  await page.screenshot({ path: path.join(outDir, 'live_desktop_full.png'), fullPage: true });

  // Hide fixed header so it doesn't overlay section screenshots
  await page.evaluate(() => {
    const header = document.querySelector('header');
    if (header) header.style.display = 'none';
  });

  const sections = [
    'studio',
    'servicos',
    'estrutura',
    'equipe',
    'unisaude',
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

  // Mobile Context
  const mobilePage = await browser.newPage({
    viewport: { width: 375, height: 812 },
    isMobile: true
  });
  await mobilePage.goto('https://joaowehner.github.io/StudioBrosFitness/', { waitUntil: 'networkidle', timeout: 45000 });
  await mobilePage.screenshot({ path: path.join(outDir, 'live_mobile_hero.png') });
  await mobilePage.screenshot({ path: path.join(outDir, 'live_mobile_full.png'), fullPage: true });

  await browser.close();
  console.log('All live screenshots captured successfully!');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
