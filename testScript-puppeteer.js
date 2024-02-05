// To write to file at the end
import fs from 'fs';

// import puppeteer from "puppeteer";
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
  await page.setUserAgent(customUA[getRandomInt(customUA.length - 1)]);

  // On this new page:

  // Set Cookies

  const cookies = [
    {
      "domain": ".coches.net",
      "expirationDate": 1714270606,
      "hostOnly": false,
      "httpOnly": false,
      "name": "_gcl_au",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "1.1.1047956731.1706494606",
      "id": 1
    },
    {
      "domain": ".coches.net",
      "expirationDate": 1706531050,
      "hostOnly": false,
      "httpOnly": false,
      "name": "_hjSession_48459",
      "path": "/",
      "sameSite": "no_restriction",
      "secure": true,
      "session": false,
      "storeId": "0",
      "value": "eyJpZCI6IjE5ODcxZjA5LTFlNDQtNGNiMy04ZTg3LTQyMmI2NzgzYTY5NiIsImMiOjE3MDY1Mjg5NzU5NzQsInMiOjAsInIiOjAsInNiIjoxLCJzciI6MCwic2UiOjAsImZzIjowLCJzcCI6MH0=",
      "id": 2
    },
    {
      "domain": ".coches.net",
      "expirationDate": 1738065195,
      "hostOnly": false,
      "httpOnly": false,
      "name": "_hjSessionUser_48459",
      "path": "/",
      "sameSite": "no_restriction",
      "secure": true,
      "session": false,
      "storeId": "0",
      "value": "eyJpZCI6Ijg1MGQwNjcyLTJjZmYtNWJlOS04NzRhLTkzODhkN2E2ZDQ5NiIsImNyZWF0ZWQiOjE3MDY0OTQ2MDYzMTAsImV4aXN0aW5nIjp0cnVlfQ==",
      "id": 3
    },
    {
      "domain": ".coches.net",
      "expirationDate": 1738065195,
      "hostOnly": false,
      "httpOnly": false,
      "name": "ajs_anonymous_id",
      "path": "/",
      "sameSite": "lax",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "533b3a1d-860f-48b3-91f6-1bf7d57fc804",
      "id": 4
    },
    {
      "domain": ".coches.net",
      "expirationDate": 1741054606.613491,
      "hostOnly": false,
      "httpOnly": false,
      "name": "AMCV_05FF6243578784B37F000101%40AdobeOrg",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "-408604571%7CMCIDTS%7C19752%7CMCMID%7C21231419700539832671974101633690671480%7CMCAAMLH-1707099406%7C6%7CMCAAMB-1707099406%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1706501806s%7CNONE%7CMCAID%7CNONE%7CvVersion%7C4.6.0",
      "id": 5
    },
    {
      "domain": ".coches.net",
      "hostOnly": false,
      "httpOnly": false,
      "name": "AMCVS_05FF6243578784B37F000101%40AdobeOrg",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": true,
      "storeId": "0",
      "value": "1",
      "id": 6
    },
    {
      "domain": ".coches.net",
      "expirationDate": 1738065195.249601,
      "hostOnly": false,
      "httpOnly": false,
      "name": "borosTcf",
      "path": "/",
      "sameSite": "lax",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "eyJwb2xpY3lWZXJzaW9uIjoyLCJjbXBWZXJzaW9uIjoxLCJwdXJwb3NlIjp7ImNvbnNlbnRzIjp7IjEiOnRydWUsIjIiOnRydWUsIjMiOnRydWUsIjQiOnRydWUsIjUiOnRydWUsIjYiOnRydWUsIjciOnRydWUsIjgiOnRydWUsIjkiOnRydWUsIjEwIjp0cnVlfX0sInNwZWNpYWxGZWF0dXJlcyI6eyIxIjp0cnVlfX0=",
      "id": 7
    },
    {
      "domain": ".coches.net",
      "expirationDate": 1740693205,
      "hostOnly": false,
      "httpOnly": false,
      "name": "cto_bundle",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "77XHOV9TMkglMkJrejNCUUhNMFBXUjFkMTY1OFZLQ0d5bGdkS3oxZVhCcFRrSUZtTWZuZ3daWUdseHFuaU81NVAyVExBaXFQSzglMkJyNXVRR3VRY0dmZmh3SmJvUWxTczBxeEx1SDhBWXhXbm5nNTlhTXlMZnhtZ1RzenoxYWs2NXVIb3RzUHdQMFI3UW9lbkxBYndBOWhvJTJGUm1oZnclM0QlM0Q",
      "id": 8
    },
    {
      "domain": ".coches.net",
      "expirationDate": 1709121194.481826,
      "hostOnly": false,
      "httpOnly": false,
      "name": "reese84",
      "path": "/",
      "sameSite": "lax",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "3:TvPkbEzYD/EUHdNk7ywpTQ==:W5iV25eaG++w0cuE7lC19zIVq6WHTUl/3vv9Qy27AhfR9r5QqKdsQ0Dj525L21GhEVbuOgTon0L4czFutcdcdYB1ybME0Ywd9sxh4L+2Kkz3CsyGXvp56kozzoA+FTjE78OTcHl+tT3wDCYqL0I1hnQ6LHErZINxxJbhW5KRhr3JrTyP7EZWX1J9txhR8KqFe6u1QnX9Ak5ohRxE1KYhJbfbDR2Z5imu0NKjgV2NltuW0nmJpueO5H38YpJT52iwQ8cMGwSyQeMMvkVs95wRujAqM5tjb76yWve3Ehli84Ip8D7BU9ZZmAqqbsXZ3Se8+VHheGiIod3V4Lrkym/NFWW9vrm3MC/QwXTBHNWbFlgnTaPpCJG3ZTPl92uUVjttX3AT70D9mw6qxJ1lUGQ6I+AfEW7cqxhT12uO6q5QBSN2OD7KbOh+BZWZkvgoOCeVZAceLr806rXW4/kM2OyC3g==:ALEeM5mYm9PTuAlFoGiRffNn81ZQhlAo6C9HTFkKR08=",
      "id": 9
    },
    {
      "domain": "www.coches.net",
      "hostOnly": true,
      "httpOnly": false,
      "name": "ajs_anonymous_id",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": true,
      "storeId": "0",
      "value": "533b3a1d-860f-48b3-91f6-1bf7d57fc804",
      "id": 10
    },
    {
      "domain": "www.coches.net",
      "expirationDate": 1706615594,
      "hostOnly": true,
      "httpOnly": false,
      "name": "cfg",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "1",
      "id": 11
    }
  ];



  await page.setCookie(...cookies);

  // - open the "https://www.coches.net/fichas_tecnicas/" website
  // - wait until the dom content is loaded (HTML is ready)
  await page.goto("https://www.coches.net/fichas_tecnicas/", {
    waitUntil: "domcontentloaded",
  });

  await page.waitForSelector("#didomi-notice-agree-button")

  await page.click("#didomi-notice-agree-button");

  const brands = await page.evaluate(() => {
    // Fetch the first element with class "quote"
    const brandList = document.querySelectorAll("section.mt-SharedSectionWrapper.mt-SharedSectionWrapper--hasBackground:nth-of-type(2) a");

    return Array.from(brandList).map((brand) => {
      // Fetch the sub-elements from the previously fetched quote element
      // Get the displayed text and return it (`.innerText`)
      const brandName = brand.innerText;
      const link = brand.href;

      return { brandName, link };

    });

  });

  let jsonBrands = JSON.stringify(brands);

  fs.writeFile('allBrandLinks.json', jsonBrands, 'utf8', function (err) {
    if (err) throw err;
    console.log('complete');
  });

};


getBrands();