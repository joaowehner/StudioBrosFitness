import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F3C362" />
      <stop offset="50%" stop-color="#D4932B" />
      <stop offset="100%" stop-color="#996010" />
    </linearGradient>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#12171A" />
      <stop offset="100%" stop-color="#070A0B" />
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="112" fill="url(#bgGrad)" stroke="#D4932B" stroke-width="12" />
  <path d="M 160 110 H 280 C 340 110 380 145 380 195 C 380 230 355 255 320 265 C 365 275 395 305 395 355 C 395 410 350 445 285 445 H 160 Z M 225 168 V 242 H 272 C 300 242 320 228 320 205 C 320 182 300 168 272 168 Z M 225 298 V 387 H 282 C 312 387 334 372 334 342 C 334 312 312 298 282 298 Z" fill="url(#goldGrad)" />
</svg>`;

const publicDir = path.resolve('public');
fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svg, 'utf-8');

async function run() {
  const svgBuffer = Buffer.from(svg);
  await sharp(svgBuffer).resize(32, 32).toFile(path.join(publicDir, 'favicon.png'));
  await sharp(svgBuffer).resize(32, 32).toFile(path.join(publicDir, 'favicon.ico'));
  await sharp(svgBuffer).resize(180, 180).toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Icons created in public/');
}

run().catch(console.error);
