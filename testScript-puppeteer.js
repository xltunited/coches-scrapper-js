// import puppeteer from "puppeteer";
import fs from 'fs';

import puppeteer from 'puppeteer-extra';

// Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

puppeteer.use(StealthPlugin())

// Add adblocker plugin to block all ads and trackers (saves bandwidth)
import AdblockerPlugin from 'puppeteer-extra-plugin-adblocker';
puppeteer.use(AdblockerPlugin({ blockTrackers: true }))

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const getBrands = async () => {
  // Start a Puppeteer session with:
  // - a visible browser (`headless: false` - easier to debug because you'll see the browser in action)
  // - no default viewport (`defaultViewport: null` - website page will in full width and height)
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  // Open a new page
  const page = await browser.newPage();

  const customUA = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15'
  ];


  // Set custom user agent
  await page.setUserAgent(customUA[getRandomInt(customUA.length-1)]);

  // On this new page:
  // - open the "https://www.coches.net/fichas_tecnicas/" website
  // - wait until the dom content is loaded (HTML is ready)
  await page.goto("https://www.coches.net/fichas_tecnicas/", {
    waitUntil: "domcontentloaded",
  });

  const brands = await page.evaluate(() => {
  // Fetch the first element with class "quote"
    const brandList = document.querySelectorAll("section.mt-SharedSectionWrapper.mt-SharedSectionWrapper--hasBackground:nth-of-type(2) a");

      return Array.from(brandList).map((brand) => {
        // Fetch the sub-elements from the previously fetched quote element
        // Get the displayed text and return it (`.innerText`)
        const brandName = brand.innerText;
        const link = brand.href;

        return { text, author };

      });

    });

    let jsonBrands = JSON.stringify(brands);

    fs.writeFile('allBrandLinks.json', jsonBrands, 'utf8', function(err) {
        if (err) throw err;
        console.log('complete');
    });

};


getBrands();