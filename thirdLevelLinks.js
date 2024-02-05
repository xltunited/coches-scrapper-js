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

function randomTime() {

    return Math.floor(Math.random() * 4000) + 4000;

}

const customUA = [
    // 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
    // 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
    // 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
    // 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
    // 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
    // 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15',
    // 'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36'
];

const extraHeaders = {
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
};

// Set Cookies

const cookies = [
    {
        "domain": ".coches.net",
        "expirationDate": 1707107914,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_hjSession_48459",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": "1",
        "value": "eyJpZCI6IjRjNTY1Mzg1LTIwZmYtNDMwOS05ZmVhLTcxYjIxNjlhMzQwMyIsImMiOjE3MDcxMDYxMTQ0ODMsInMiOjAsInIiOjAsInNiIjowLCJzciI6MCwic2UiOjAsImZzIjoxLCJzcCI6MX0=",
        "id": 1
    },
    {
        "domain": ".coches.net",
        "expirationDate": 1738642114,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_hjSessionUser_48459",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": "1",
        "value": "eyJpZCI6ImZjYjc3MDkzLWQwM2QtNTQ3NS05NmM0LWNkNjQ3ZGZjY2U2NyIsImNyZWF0ZWQiOjE3MDcxMDYxMTQ0ODIsImV4aXN0aW5nIjpmYWxzZX0=",
        "id": 2
    },
    {
        "domain": ".coches.net",
        "expirationDate": 1738642114,
        "hostOnly": false,
        "httpOnly": false,
        "name": "ajs_anonymous_id",
        "path": "/",
        "sameSite": "lax",
        "secure": false,
        "session": false,
        "storeId": "1",
        "value": "03cef33a-be0a-4608-be3d-6876fa366c35",
        "id": 3
    },
    {
        "domain": ".coches.net",
        "expirationDate": 1738642114.413749,
        "hostOnly": false,
        "httpOnly": false,
        "name": "borosTcf",
        "path": "/",
        "sameSite": "lax",
        "secure": false,
        "session": false,
        "storeId": "1",
        "value": "eyJwb2xpY3lWZXJzaW9uIjoyLCJjbXBWZXJzaW9uIjoxLCJwdXJwb3NlIjp7ImNvbnNlbnRzIjp7fX0sInNwZWNpYWxGZWF0dXJlcyI6e319",
        "id": 4
    },
    {
        "domain": ".coches.net",
        "expirationDate": 1709698114.014996,
        "hostOnly": false,
        "httpOnly": false,
        "name": "reese84",
        "path": "/",
        "sameSite": "lax",
        "secure": false,
        "session": false,
        "storeId": "1",
        "value": "3:Frem8egocOk6U3hde+DIYw==:vaudMWdFyGq9v6K2ABGcgPeSydyL/L//DlKSWLvNpuxgVFW9qGCfK6nAMDXmrIgYefiHITuF1u4Yq0JoAm0agE/Vuv3i14aEt9OLyTOc2FSKXaIc+2Li4K0/wzsdg1Z5xe5pgamaP+wivZIrXBDAcaJy8ZudN7F+XkaEyWpWEcB93JWF4KrgMZDDSNFgg11tXQJHBtr0z0TBd6vUG0SFCXjYlWF0UK13zQH7dsqfmpiJ8AF5v1EQDxfO6aaP9/nvoCB287oEFvWj6sCXueMoO3BC/A83PNw28Ax3Hvaeg7pOCjfokEU+FB1lbRYLTLXz6Hqustf7sAzq5T0+qHQpY0tgu70rlRIgsudT7YTfHrEW82ysMBnTfQITeLNmCg5XYwkDiRrT8kYdy//1Zgs51+CcsA7MT1H02gMRHSv9UDYmX+w4kiqxDdEzVH2zDg7QupMkwYuciqtvpyrD/dz6S9JOWCY18a1/edWSTfrD/O0=:hciyCOpwpU2nU4X9k0rvpUXSTWTf90nZMAES/hD6oxc=",
        "id": 5
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
        "storeId": "1",
        "value": "03cef33a-be0a-4608-be3d-6876fa366c35",
        "id": 6
    },
    {
        "domain": "www.coches.net",
        "expirationDate": 1707192514,
        "hostOnly": true,
        "httpOnly": false,
        "name": "cfg",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": false,
        "storeId": "1",
        "value": "1",
        "id": 7
    }
];

const getVersions = async () => {
    // Start a Puppeteer session with:
    // - a visible browser (`headless: false` - easier to debug because you'll see the browser in action)
    // - no default viewport (`defaultViewport: null` - website page will in full width and height)
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    });

    // Open a new page
    const page = await browser.newPage();

    // Loop through version links

    for (let brand of brands) {

        let models = brand.models;

        for (let model of models) {

            for (let version of model) {

                if (!("versions" in version)) {

                    try {
                        await delay(randomTime());

                        // Set custom user agent
                        await page.setUserAgent(customUA[getRandomInt(customUA.length - 1)]);

                        // On this new page:

                        await page.setCookie(...cookies);

                        await page.setExtraHTTPHeaders(extraHeaders);

                        await page.goto(version.link, {
                            waitUntil: "domcontentloaded",
                            timeout: 0
                        });

                        await page.waitForSelector("tbody");


                        const versions = await page.evaluate(() => {


                            const versionList = document.querySelector("tbody");

                            const versionRows = Array.from(versionList.querySelectorAll("tr"));

                            let versionArray = [];

                            versionRows.forEach(function (row, index) {

                                const columns = Array.from(row.querySelectorAll(".react-AtomTable-cell"));

                                const year = columns[0].querySelector(".mt-ListVersions--withIcon").innerText;

                                const version = columns[1].querySelector("a").innerText;

                                const versionLink = columns[1].querySelector("a").href;

                                const fuelType = columns[2].querySelector(".mt-ListVersions--withIcon").innerText;

                                const power = columns[3].querySelector(".mt-ListVersions--withIcon").innerText;

                                const price = columns[4].querySelector("strong").innerText;

                                versionArray.push({ year, version, versionLink, fuelType, power, price });

                            });

                            return versionArray;

                        });

                        version.versions = versions;

                        let updatedObject = JSON.stringify(brands);

                        fs.writeFile('allBrandLinks.json', updatedObject, 'utf8', function (err) {
                            if (err) throw err;
                            console.log('complete');
                        });

                    }
                    catch (err) {
                        console.error(err);
                    }

                }

            }

        }

    }

    let jsonBrands = JSON.stringify(brands);

    fs.writeFile('allBrandLinks.json', jsonBrands, 'utf8', function (err) {
        if (err) throw err;
        console.log('complete');
    });

};

getVersions();
