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

    return Math.floor(Math.random() * 3000) + 2000;

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
        "expirationDate": 1706496406,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_hjSession_48459",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "eyJpZCI6IjQyNGYyZTMwLTZmY2EtNDBhNi05NzM4LTg2MGRiN2I5ZGIzMyIsImMiOjE3MDY0OTQ2MDYzMTEsInMiOjAsInIiOjAsInNiIjoxLCJzciI6MCwic2UiOjAsImZzIjoxLCJzcCI6MH0=",
        "id": 2
    },
    {
        "domain": ".coches.net",
        "expirationDate": 1738030606,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_hjSessionUser_48459",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "eyJpZCI6Ijg1MGQwNjcyLTJjZmYtNWJlOS04NzRhLTkzODhkN2E2ZDQ5NiIsImNyZWF0ZWQiOjE3MDY0OTQ2MDYzMTAsImV4aXN0aW5nIjpmYWxzZX0=",
        "id": 3
    },
    {
        "domain": ".coches.net",
        "expirationDate": 1738030606,
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
        "expirationDate": 1738030606.259192,
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
        "expirationDate": 1709086605.857422,
        "hostOnly": false,
        "httpOnly": false,
        "name": "reese84",
        "path": "/",
        "sameSite": "lax",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "3:i5fo9JlxBpaZa6AAKCmkjg==:rcbjViDiWwTSp7BtKfskR2xP2N+laQ8mG/3RDNs0obdzXgJx3JaFWXBVFgttW2nJbTtlFjzZnFW4tHDxkou3mnHEyVOTZHA3ocbHumz2KpGSeJ8dg8Wl1VTep+SM2D3BiTPEgoNaNPc2SI+v0wuRmCXoDtvPRIExyHPmXS88oZTEMEWV7hDmF2gQIWHcGbKoAjhgatGtCghGrO4pSWoFl3hnAsEJu8gjlOSjC0O6s1NCwFf0dvqFcje1Sp4ZiQZDjjXhFZFtyQi8gNESLiQXbRaiMfLRh0UoJ26nMc9NezdWMO504j1iqeAiB5ILhemo7NfQ+mnX/NCe9ZOs8BNStvjQqDI31uLtUbB0QNDpzg5hJU8IpNXqH2zlDEnRV+9qp27mS5YGqYWIfNPUx7TXHs/StjA19T15E2Hd5OyeOfpXs1KdMuXx7ojbrtglb9Gcs5S8inS6mcLWNYQyd6kxag==:dONUQ1sO5mx4w/wGJFklzxkrSDyBNzpR78cm/n0D97E=",
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
        "value": "533b3a1d-860f-48b3-91f6-1bf7d57fc804",
        "id": 9
    },
    {
        "domain": "www.coches.net",
        "expirationDate": 1706581005,
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

    await page.setExtraHTTPHeaders({
        // ':authority': 'www.coches.net',
        // ':method': 'GET',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9,es-US;q=0.8,es;q=0.7,de-DE;q=0.6,de;q=0.5,es-PE;q=0.4,es-ES;q=0.3',
        'cache-control': 'max-age=0',
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1'
    });

    await page.goto("https://www.coches.net/fichas_tecnicas/", {
        waitUntil: "domcontentloaded"
    });

    // await page.waitForSelector("#didomi-notice-agree-button")

    // await delay(2000);

    // await page.click("#didomi-notice-agree-button");

    // await delay(2000);
  
    // Loop through brand links
    for( let brand of brands) {
        
        if(!("models" in brand)){
            try {

                // Set custom user agent again to avoid detection
                // await page.setUserAgent(customUA[getRandomInt(customUA.length-1)]);
    
                await delay(randomTime());
    
                await page.setExtraHTTPHeaders({
                    // ':authority': 'www.coches.net',
                    // ':method': 'GET',
                    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                    'accept-encoding': getRandomInt().toString(),
                    'accept-language': 'en-US,en;q=0.9,es-US;q=0.8,es;q=0.7,de-DE;q=0.6,de;q=0.5,es-PE;q=0.4,es-ES;q=0.3',
                    'cache-control': 'max-age=0',
                    'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                    'sec-fetch-dest': 'document',
                    'sec-fetch-mode': 'navigate',
                    'sec-fetch-site': 'same-origin',
                    'sec-fetch-user': '?1',
                    'upgrade-insecure-requests': '1'
                })
    
                await page.setUserAgent(customUA[getRandomInt(customUA.length-1)]);
    
                await page.setCookie(...cookies);
            
                
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
    
                let jsonBrands = JSON.stringify(brands);
      
                fs.writeFile('allBrandLinks.json', jsonBrands, 'utf8', function(err) {
                    if (err) throw err;
                    console.log('complete');
                });
          
                console.log(data);
    
              } catch (err) {
                console.error(err);
            }

        }
        
        
    }

    let jsonBrands = JSON.stringify(brands);
  
    fs.writeFile('allBrandLinks.json', jsonBrands, 'utf8', function(err) {
        if (err) throw err;
        console.log('complete');
    });
  
};
    
getModels();
