import brands from './allBrandLinks.json' assert { type: "json" };

import fs from 'fs';

for( let brand of brands) {

    brand.models = [];

    let step = { asda: "test"};

    brand.models.push(step);

}


let jsonBrands = JSON.stringify(brands);
  
fs.writeFile('allBrandLinks.json', jsonBrands, 'utf8', function(err) {
    if (err) throw err;
    console.log('complete');
});


console.log(brands);