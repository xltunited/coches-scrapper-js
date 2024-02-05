// Get links to traverse per brand
import brands from './allBrandLinks.json' assert { type: "json" };

// To write to file at the end
import fs from 'fs';

for (let brand of brands) {

    let models = brand.models;

    let fileName = brand.brandName;

    let htmlsToDownload = [];

    for (let model of models) {

        for (let version of model) {

            if (("versions" in version)) {

                for (let variants of version.versions) {

                    htmlsToDownload.push(variants.versionLink)

                }

            }

        }

    }

    let jsonArray = JSON.stringify(htmlsToDownload);

    fs.writeFile('./brandVariants/' + fileName + '.json', jsonArray, 'utf8', function (err) {
        if (err) throw err;
        console.log('complete');
    });

}