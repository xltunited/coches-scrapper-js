// Get links to traverse per brand
import brands from './allBrandLinks.json' assert { type: "json" };

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

const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

function randomTime(){

    return Math.floor(Math.random() * 4000) + 4000;

}

const customUA = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15'
  ];

// Set Cookies

const cookies = [
    {
        "domain": ".coches.net",
        "expirationDate": 1713960016,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_gcl_au",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "1.1.1632282303.1706184017",
        "id": 1
    },
    {
        "domain": ".coches.net",
        "expirationDate": 1706185816,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_hjSession_48459",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "eyJpZCI6IjI1M2MzYTlmLTM5YWEtNGYxZC05ZTlhLTdhYzZmOTBhYmViMCIsImMiOjE3MDYxODQwMTY3MjUsInMiOjAsInIiOjAsInNiIjoxLCJzciI6MCwic2UiOjAsImZzIjoxLCJzcCI6MX0=",
        "id": 2
    },
    {
        "domain": ".coches.net",
        "expirationDate": 1737720016,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_hjSessionUser_48459",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "eyJpZCI6IjUxMjQyZDM3LTZlMWUtNTMyOC1iNzZlLTZhOTY0OTllYzQzMyIsImNyZWF0ZWQiOjE3MDYxODQwMTY3MjUsImV4aXN0aW5nIjpmYWxzZX0=",
        "id": 3
    },
    {
        "domain": ".coches.net",
        "expirationDate": 1737720016,
        "hostOnly": false,
        "httpOnly": false,
        "name": "ajs_anonymous_id",
        "path": "/",
        "sameSite": "lax",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "b3aa4517-6c70-4622-bf1c-54cae17e2731",
        "id": 4
    },
    {
        "domain": ".coches.net",
        "expirationDate": 1740744016.949047,
        "hostOnly": false,
        "httpOnly": false,
        "name": "AMCV_05FF6243578784B37F000101%40AdobeOrg",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "-408604571%7CMCIDTS%7C19748%7CMCMID%7C21231419700539832671974101633690671480%7CMCAAMLH-1706788816%7C6%7CMCAAMB-1706788816%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1706191216s%7CNONE%7CMCAID%7CNONE%7CvVersion%7C4.6.0",
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
        "expirationDate": 1737720016.526003,
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
        "expirationDate": 1708776016.349031,
        "hostOnly": false,
        "httpOnly": false,
        "name": "reese84",
        "path": "/",
        "sameSite": "lax",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "3:rF4XgIeY0u6RJpLHxAXVug==:HGefh2DO/jTwqtHfWVdbYfCtav3sDXe62sOwi4Ok9ptXXISktuvtSetf85yTVR39bkkzbDJP6GSbnjMH3Mv3EHpD77ENKDKnONn3sXk8rQAOvdwiZdU9n7/fGx6gNUbado4ZeBIkDKX0/gsWh+QMzFDLAMl7/S98X+syG/bWJHJliiYu7TImkAjdQU8/NHGyXouInzrERRbmnd9YfEPcsnT1YfyiGeAaxr8nAA2GOHABij81WEgZoYJqfxlkq8+sbIP0VWF6ie/cDB2zt9r8vtBSM0i1kzs4ezF2+M5Sbzrz0tGOTFx9h4thMPPM1siyaTeBeo8KivDPhg7J+1u0Bl6boLtND9tXwrXk9ii5ZsvkA+JqLD6w+w1qjaVlIw2hrYCGovHB1jU/9CxXXGENaawhM18G4MPiIVsfB9yBJJTU4NPw8vtcL/4/uo8usm+utuG/xJjIprUhQwUYcIYmpA==:uMf8ybnrufVu02/1D3FXqa6wiFBXzRT9mt5xx1g+kgg=",
        "id": 8
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
        "value": "b3aa4517-6c70-4622-bf1c-54cae17e2731",
        "id": 9
    },
    {
        "domain": "www.coches.net",
        "expirationDate": 1706270416,
        "hostOnly": true,
        "httpOnly": false,
        "name": "cfg",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "1",
        "id": 10
    }
    ];

const getModels = async () => {
    // Start a Puppeteer session with:
    // - a visible browser (`headless: false` - easier to debug because you'll see the browser in action)
    // - no default viewport (`defaultViewport: null` - website page will in full width and height)
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
    });
  
    // Open a new page
    const page = await browser.newPage();
  
  
    // Set custom user agent
    await page.setUserAgent(customUA[getRandomInt(customUA.length-1)]);
  
    // On this new page:
  
    await page.setCookie(...cookies);

    await page.goto("https://www.coches.net/fichas_tecnicas/", {
        waitUntil: "domcontentloaded"
    });

    await page.waitForSelector("#didomi-notice-agree-button")

    await delay(2000);

    await page.click("#didomi-notice-agree-button");

    await delay(2000);
  
    // Loop through brand links
    for( let brand of brands) {
        try {

            // Set custom user agent again to avoid detection
            await page.setUserAgent(customUA[getRandomInt(customUA.length-1)]);

            await delay(randomTime());
            
            await page.goto(brand.link, {
                waitUntil: "domcontentloaded",
                timeout: 0
            });
      
            const data = await page.evaluate(() => {
              
                const container = document.querySelector(".mt-LayoutBasicContainer");

                const sections = Array.from(container.querySelectorAll("section"));

                let modelsList = [];

                sections.splice(sections.length - 2);

                sections.forEach(function(element, index) {

                    // section title contains car description
                    const modelName = element.querySelector(".mt-TitleBasic-titleWrapper.mt-TitleBasic-titleWrapper--black.mt-TitleBasic-titleWrapper--left").innerText;

                    // get car cards
                    const models = element.querySelectorAll(".mt-ListModels-item");

                    const modelsObject = Array.from(models).map((model) => {
                        
                        // 
                        const versionName = model.querySelector(".mt-CardModelContent-description").innerText;
                        const link = model.querySelector("a.mt-CardModel").href;
                
                        return { modelName, versionName, link };
                
                    });

                    modelsList.push(modelsObject);

                });

                return modelsList;

            });

            brand.models = data;
      
            console.log(data);

          } catch (err) {
            console.error(err);
          }
    }

    let jsonBrands = JSON.stringify(brands);
  
    fs.writeFile('allBrandLinks.json', jsonBrands, 'utf8', function(err) {
        if (err) throw err;
        console.log('complete');
    });
  
};
    
getModels();
