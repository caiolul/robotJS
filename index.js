const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://github.com/caiolul');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();



//3045140105502, 4025700001023, 7896019602419