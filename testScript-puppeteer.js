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

  // Set Cookies
  // const cookies =   [
  //   {
  //       "name": "_gcl_au",
  //       "value": "1.1.1622887756.1706141122",
  //   },
  //   {
  //       "name": "_hjSession_48459",
  //       "value": "eyJpZCI6IjEyYjRiN2YzLWE3YmUtNDk0MC05YTEwLTBkNmY4ZmI1YzI1ZCIsImMiOjE3MDYxNDM0ODc4OTgsInMiOjAsInIiOjAsInNiIjoxLCJzciI6MCwic2UiOjAsImZzIjowLCJzcCI6MH0=",
  //   },
  //   {
  //       "name": "_hjSessionUser_48459",
  //       "value": "eyJpZCI6IjE0MjQ5ZDI4LTgxNWItNTU5Ni05ZWZjLTk2NjQ2NzI2ZDk1NiIsImNyZWF0ZWQiOjE3MDYxNDExMjIzMzYsImV4aXN0aW5nIjp0cnVlfQ==",
  //   },
  //   {
  //       "name": "ajs_anonymous_id",
  //       "value": "d2590e8f-2798-4b98-96a9-f101773ed0cc",
  //   },
  //   {
  //       "name": "AMCV_05FF6243578784B37F000101%40AdobeOrg",
  //       "value": "-408604571%7CMCIDTS%7C19748%7CMCMID%7C21231419700539832671974101633690671480%7CMCAAMLH-1706745922%7C6%7CMCAAMB-1706745922%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1706148322s%7CNONE%7CMCAID%7CNONE%7CvVersion%7C4.6.0",
  //   },
  //   {
  //       "name": "borosTcf",
  //       "value": "eyJwb2xpY3lWZXJzaW9uIjoyLCJjbXBWZXJzaW9uIjoxLCJwdXJwb3NlIjp7ImNvbnNlbnRzIjp7IjEiOnRydWUsIjIiOnRydWUsIjMiOnRydWUsIjQiOnRydWUsIjUiOnRydWUsIjYiOnRydWUsIjciOnRydWUsIjgiOnRydWUsIjkiOnRydWUsIjEwIjp0cnVlfX0sInNwZWNpYWxGZWF0dXJlcyI6eyIxIjp0cnVlfX0=",
  //   },
  //   {
  //       "name": "cto_bundle",
  //       "value": "3Gl0OV9TMkglMkJrejNCUUhNMFBXUjFkMTY1OGFuZ09FUHhrSFZqbkolMkJOeG5DdU1rZmRtOFBZYTZaJTJCVHZSOW5FT1QlMkJ5S0wyNDAyRDdTckVuYVVNa1FqdTNTdVd4ZnB1TU5WUXV4QTRaMXVZeFkxOTdIdjdKNllXdzclMkIzS0lIY1NSS1g5dWpMJTJCTzBSTDFZcUxacFR6WXBNSlduUmclM0QlM0Q",

  //   },
  //   {
  //       "name": "reese84",
  //       "value": "3:8aoHqkJSOy8XwLZ2t2S/OA==:LYMBUWAcVdLIQuMeSOkZQh6BsLQjUGzN06SkzLcrYDm/ye4p1J00XnzeJqRhJqcRTCr17MJfaYHFLwcHNSUPXAoho9K++9DRNPDYjZ3r8Kr0nKGj3cD1U06aJjilFc7el9xNz2eWy+/mnTcQI+xQoBXQAC3syrZC8oC2jRDLMQFsARa1iRaODzn4lBy1sk3Iz1QZMB0ksrD5XHnTkxKO24yI5W/k449LXyxbIctszYur7ZPdXgxpUTbzRJ6ll8TfpCe8LvwHp+7fUNi37poIdoZFfCVOPIrq/nCeUVUgA2yGqGnllIx1e2CxCiXc7lX9mXuLJPJktBpQkORB+KdVfx8YxGN1JG8EBXymrlTmlupc5j1AT4ogtBreptWSdjwv9dOcf1j9/H1ovKVask3cSnwsYAZZVqRLePaZfVatVEn5+uxVt4qX0YuwMGHGmILQ6akmerqNtLDXP4Qj/d4S6A==:XQYYg9ZeimHwTjQk3p+oFbwISJTM2XqYcXkpIy+1MAg=",
  //   },
  //   {

  //       "name": "ajs_anonymous_id",
  //       "value": "d2590e8f-2798-4b98-96a9-f101773ed0cc",
  //   },
  //   {
  //       "name": "cfg",
  //       "value": "1",
  //   }
  //   ];

  const cookies = [
    {
        "domain": ".coches.net",
        "expirationDate": 1713917122,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_gcl_au",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "1.1.1622887756.1706141122",
        "id": 1
    },
    {
        "domain": ".coches.net",
        "expirationDate": 1706146904,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_hjSession_48459",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "eyJpZCI6IjEyYjRiN2YzLWE3YmUtNDk0MC05YTEwLTBkNmY4ZmI1YzI1ZCIsImMiOjE3MDYxNDM0ODc4OTgsInMiOjAsInIiOjAsInNiIjoxLCJzciI6MCwic2UiOjAsImZzIjowLCJzcCI6MH0=",
        "id": 2
    },
    {
        "domain": ".coches.net",
        "expirationDate": 1737680608,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_hjSessionUser_48459",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "eyJpZCI6IjE0MjQ5ZDI4LTgxNWItNTU5Ni05ZWZjLTk2NjQ2NzI2ZDk1NiIsImNyZWF0ZWQiOjE3MDYxNDExMjIzMzYsImV4aXN0aW5nIjp0cnVlfQ==",
        "id": 3
    },
    {
        "domain": ".coches.net",
        "expirationDate": 1737680609,
        "hostOnly": false,
        "httpOnly": false,
        "name": "ajs_anonymous_id",
        "path": "/",
        "sameSite": "lax",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "d2590e8f-2798-4b98-96a9-f101773ed0cc",
        "id": 4
    },
    {
        "domain": ".coches.net",
        "expirationDate": 1740701122.39506,
        "hostOnly": false,
        "httpOnly": false,
        "name": "AMCV_05FF6243578784B37F000101%40AdobeOrg",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "-408604571%7CMCIDTS%7C19748%7CMCMID%7C21231419700539832671974101633690671480%7CMCAAMLH-1706745922%7C6%7CMCAAMB-1706745922%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1706148322s%7CNONE%7CMCAID%7CNONE%7CvVersion%7C4.6.0",
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
        "expirationDate": 1737680609.304054,
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
        "expirationDate": 1740308620,
        "hostOnly": false,
        "httpOnly": false,
        "name": "cto_bundle",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "3Gl0OV9TMkglMkJrejNCUUhNMFBXUjFkMTY1OGFuZ09FUHhrSFZqbkolMkJOeG5DdU1rZmRtOFBZYTZaJTJCVHZSOW5FT1QlMkJ5S0wyNDAyRDdTckVuYVVNa1FqdTNTdVd4ZnB1TU5WUXV4QTRaMXVZeFkxOTdIdjdKNllXdzclMkIzS0lIY1NSS1g5dWpMJTJCTzBSTDFZcUxacFR6WXBNSlduUmclM0QlM0Q",
        "id": 8
    },
    {
        "domain": ".coches.net",
        "expirationDate": 1708736608.907158,
        "hostOnly": false,
        "httpOnly": false,
        "name": "reese84",
        "path": "/",
        "sameSite": "lax",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "3:8aoHqkJSOy8XwLZ2t2S/OA==:LYMBUWAcVdLIQuMeSOkZQh6BsLQjUGzN06SkzLcrYDm/ye4p1J00XnzeJqRhJqcRTCr17MJfaYHFLwcHNSUPXAoho9K++9DRNPDYjZ3r8Kr0nKGj3cD1U06aJjilFc7el9xNz2eWy+/mnTcQI+xQoBXQAC3syrZC8oC2jRDLMQFsARa1iRaODzn4lBy1sk3Iz1QZMB0ksrD5XHnTkxKO24yI5W/k449LXyxbIctszYur7ZPdXgxpUTbzRJ6ll8TfpCe8LvwHp+7fUNi37poIdoZFfCVOPIrq/nCeUVUgA2yGqGnllIx1e2CxCiXc7lX9mXuLJPJktBpQkORB+KdVfx8YxGN1JG8EBXymrlTmlupc5j1AT4ogtBreptWSdjwv9dOcf1j9/H1ovKVask3cSnwsYAZZVqRLePaZfVatVEn5+uxVt4qX0YuwMGHGmILQ6akmerqNtLDXP4Qj/d4S6A==:XQYYg9ZeimHwTjQk3p+oFbwISJTM2XqYcXkpIy+1MAg=",
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
        "value": "d2590e8f-2798-4b98-96a9-f101773ed0cc",
        "id": 10
    },
    {
        "domain": "www.coches.net",
        "expirationDate": 1706231008,
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

    fs.writeFile('allBrandLinks.json', jsonBrands, 'utf8', function(err) {
        if (err) throw err;
        console.log('complete');
    });

};


getBrands();