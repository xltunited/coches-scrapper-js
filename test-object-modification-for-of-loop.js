import brands from './allBrandLinks.json' assert { type: "json" };

import fs from 'fs';

for( let brand of brands) {

    if(!("models" in brand)){ 

        brand.model = 'xd';

    } else {

        console.log(brand.models);
    }

}


let jsonBrands = JSON.stringify(brands);
  
fs.writeFile('allBrandLinks-example.json', jsonBrands, 'utf8', function(err) {
    if (err) throw err;
    console.log('complete');
});


console.log(brands);