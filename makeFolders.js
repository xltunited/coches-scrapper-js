// Get links to traverse per brand
import brands from './allBrandLinks.json' assert { type: "json" };

// To write to file at the end
import fs from 'fs';

for (let brand of brands) {

    let folderName = brand.brandName;

    fs.mkdirSync(folderName);

}