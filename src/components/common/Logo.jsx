const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://etca-academy.vercel.app', {
    waitUntil: 'networkidle'
  });

  await page.screenshot({
    path: 'test.png',
    fullPage: true
  });

  await browser.close();

  console.log('Done');
})();