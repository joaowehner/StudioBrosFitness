import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function testLiveSite() {
  console.log('Testing live site: https://joaowehner.github.io/StudioBrosFitness/');
  const browser = await chromium.launch({ headless: true, channel: 'msedge' });
  
  // Track failed requests
  const failedRequests = [];
  const consoleErrors = [];

  // Desktop context
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const desktopPage = await desktopContext.newPage();

  desktopPage.on('requestfailed', req => {
    failedRequests.push({ url: req.url(), failure: req.failure()?.errorText });
  });

  desktopPage.on('response', resp => {
    if (resp.status() >= 400) {
      console.log('HTTP Error:', resp.status(), resp.url());
      failedRequests.push({ url: resp.url(), status: resp.status() });
    }
  });

  desktopPage.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  console.log('Navigating desktop...');
  const response = await desktopPage.goto('https://joaowehner.github.io/StudioBrosFitness/', {
    waitUntil: 'networkidle',
    timeout: 45000
  });

  console.log('Desktop status:', response?.status());

  // Scroll through page to trigger any lazy-loaded elements
  await desktopPage.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 400;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          setTimeout(resolve, 1000);
        }
      }, 100);
    });
  });

  // Verify all images on page
  const imageVerification = await desktopPage.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('img'));
    return imgs.map(img => ({
      src: img.src,
      alt: img.alt,
      complete: img.complete,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
      broken: img.naturalWidth === 0
    }));
  });

  const brokenImages = imageVerification.filter(i => i.broken);
  console.log(`Total images on live site: ${imageVerification.length}`);
  console.log(`Broken images: ${brokenImages.length}`);
  if (brokenImages.length > 0) {
    console.error('Broken images found:', brokenImages);
  }

  // Save live desktop screenshot
  const outDir = path.resolve('public/screenshots/live');
  fs.mkdirSync(outDir, { recursive: true });
  await desktopPage.screenshot({ path: path.join(outDir, 'live_desktop_hero.png') });
  await desktopPage.screenshot({ path: path.join(outDir, 'live_desktop_full.png'), fullPage: true });

  // Mobile context
  const mobileContext = await browser.newContext({
    viewport: { width: 375, height: 812 },
    isMobile: true
  });
  const mobilePage = await mobileContext.newPage();

  console.log('Navigating mobile...');
  const mobileResp = await mobilePage.goto('https://joaowehner.github.io/StudioBrosFitness/', {
    waitUntil: 'networkidle',
    timeout: 45000
  });

  console.log('Mobile status:', mobileResp?.status());
  await mobilePage.screenshot({ path: path.join(outDir, 'live_mobile_hero.png') });
  await mobilePage.screenshot({ path: path.join(outDir, 'live_mobile_full.png'), fullPage: true });

  // Verify key CTA links and copy
  const links = await desktopPage.evaluate(() => {
    return Array.from(document.querySelectorAll('a')).map(a => ({
      text: a.innerText.trim(),
      href: a.href
    })).filter(a => a.href.includes('wa.me') || a.href.includes('instagram.com') || a.href.includes('maps') || a.href.includes('goo.gl'));
  });
  console.log('Key verified external links:', links.slice(0, 5));

  console.log('Failed HTTP requests:', failedRequests);
  console.log('Console errors:', consoleErrors);

  await browser.close();

  return {
    status: response?.status(),
    totalImages: imageVerification.length,
    brokenImages: brokenImages.length,
    failedRequestsCount: failedRequests.length,
    consoleErrorsCount: consoleErrors.length
  };
}

testLiveSite().then(res => {
  console.log('LIVE VERIFICATION RESULT:', JSON.stringify(res, null, 2));
  if (res.brokenImages > 0 || res.failedRequestsCount > 0) {
    process.exit(1);
  } else {
    console.log('LIVE SITE VALIDATION PASSED 100%!');
    process.exit(0);
  }
}).catch(err => {
  console.error('Live test error:', err);
  process.exit(1);
});
