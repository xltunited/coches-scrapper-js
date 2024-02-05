// Get links to traverse per brand
import brands from './allBrandLinks.json' assert { type: "json" };

// To write to file at the end
import fs from 'fs';

let htmlsToDownload = [];

for (let brand of brands) {

    let models = brand.models;

    for (let model of models) {

        for (let version of model) {

            if (("versions" in version)) {

                for (let variants of version.versions) {

                    htmlsToDownload.push(variants.versionLink)

                }

            }

        }

    }

}

let jsonArray = JSON.stringify(htmlsToDownload);

fs.writeFile('./allLinks.json', jsonArray, 'utf8', function (err) {
    if (err) throw err;
    console.log('complete');
});