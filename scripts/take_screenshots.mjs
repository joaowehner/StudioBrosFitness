import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/screenshots');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function run() {
  console.log('Launching system Chrome...');
  const browser = await chromium.launch({ headless: true, channel: 'chrome' });

  // 1. Desktop
  console.log('Capturing Desktop 1440px...');
  const pageDesktop = await browser.newPage({
    viewport: { width: 1440, height: 900 },
  });
  await pageDesktop.goto('http://localhost:3005', { waitUntil: 'networkidle' });
  await pageDesktop.screenshot({ path: path.join(outDir, 'desktop_hero.png') });
  await pageDesktop.screenshot({ path: path.join(outDir, 'desktop_full.png'), fullPage: true });

  // 2. Mobile
  console.log('Capturing Mobile 375px...');
  const pageMobile = await browser.newPage({
    viewport: { width: 375, height: 812 },
    isMobile: true,
  });
  await pageMobile.goto('http://localhost:3005', { waitUntil: 'networkidle' });
  await pageMobile.screenshot({ path: path.join(outDir, 'mobile_hero.png') });
  await pageMobile.screenshot({ path: path.join(outDir, 'mobile_full.png'), fullPage: true });

  // 3. Tablet
  console.log('Capturing Tablet 768px...');
  const pageTablet = await browser.newPage({
    viewport: { width: 768, height: 1024 },
  });
  await pageTablet.goto('http://localhost:3005', { waitUntil: 'networkidle' });
  await pageTablet.screenshot({ path: path.join(outDir, 'tablet_full.png'), fullPage: true });

  await browser.close();
  console.log('All screenshots captured successfully!');
}

run().catch((err) => {
  console.error('Error taking screenshots:', err);
  process.exit(1);
});
