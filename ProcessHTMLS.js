// To manipulate html
import cheerio from 'cheerio';

// To read and write files
import fs from 'fs';

fs.readFile('./ABARTH/download.htm', 'utf8', function(err, data) {

    if (err) throw err;

    var $ = cheerio.load(data);

    const informationTables = Array.from($('tbody')).slice(0, 3); 

    informationTables.forEach(function (table, index) { 

        console.log(table);

        const features = Array.from(table.find('tr'));

        features.forEach (function(feature, index2) {

            featureName = feature.querySelector("mt-ListModelDetails-tableItem").innerText;

            featureValue = feature.querySelector("mt-ListModelDetails-tableItem--strong").innerText;

            console.log('-------------------------');
            console.log(featureName, featureValue);
            console.log('-------------------------');

        });

   
        
        

    });

    
    

});