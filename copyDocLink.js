// Get links to traverse per brand
import brands from './allBrandLinks.json' assert { type: "json" };

// To write to file at the end
import fs from 'fs';

for (let brand of brands) {

    let folderName = brand.brandName;

    fs.copyFile('downloadDoc.html', './'+folderName +'/downloadDoc.html', (err) => {
        if (err) throw err;
        console.log('source.txt was copied to destination.txt');
    });

    fs.copyFile('makeLinks.js', './'+folderName +'/makeLinks.js', (err) => {
        if (err) throw err;
        console.log('source.txt was copied to destination.txt');
    });

}