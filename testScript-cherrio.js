import axios from 'axios';
import cheerio from 'cheerio';
import fs from 'fs';

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

async function scrapeSite() {
	const url = `https://www.coches.net/fichas_tecnicas/`;
    const root = `https://www.coches.net`;

    const config = { 
        "headers": {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-US,en;q=0.9,es-US;q=0.8,es;q=0.7,de-DE;q=0.6,de;q=0.5,es-PE;q=0.4,es-ES;q=0.3",
            "Sec-Ch-Ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
            "Sec-Ch-Ua-Mobile": "?0",
            "Sec-Ch-Ua-Platform": "\"Windows\"",
            "Sec-Fetch-Dest": "document",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Site": "cross-site",
            "Sec-Fetch-User": "?1",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "X-Amzn-Trace-Id": "Root=1-65b0f66d-55771bd90ecfaa6d1a88f65e"
        }
    }; 

	const { data } = await axios.get(url, config);

    console.log(data);

    const $ = cheerio.load(data); 


    const links = [];

    const elementBody = $('section.mt-SharedSectionWrapper.mt-SharedSectionWrapper--hasBackground:nth-of-type(2) a');

    elementBody.each((index, element) => {

        const linkElement = $(element);

        const brand = linkElement.text();
        const link  = root + linkElement.attr("href");

        links.push({"brand" : brand, "link": link});

    });

    let jsonBrands = JSON.stringify(links);

   
    fs.writeFile('allBrandLinks.json', jsonBrands, 'utf8', function(err) {
        if (err) throw err;
        console.log('complete');
    });

    console.log(links);

	return links;
}

scrapeSite().then(result => {
	console.log(result);
}).catch(err => console.log(err));