import fs from 'fs';

// Get links to traverse per brand
import brands from './allBrandLinks.json' assert { type: "json" };

fs.readdir('./salida', 'utf8', function(err, files) {

    files.forEach(element => {
        
        fs.readFile('./salida/'+element, 'utf8', function(err, data) {

            let dataObject = JSON.parse(data);

            //make key

            let key = dataObject[0].value + ' ' + dataObject[9].value;

            console.log(key);

            //find key

            loop1: for (let brand of brands) {

                let models = brand.models;
        
                loop2: for (let model of models) {

                    let versions = model;
        
                    loop3 :for(let version of versions){

                        // console.log(version);

                        let variants = version.versions;

                        if(Array.isArray(variants)) {

                            loop4 : for(let variant of variants) {

                                if(variant.version == key){
    
                                    console.log(true);
                                    console.log(variant.version);

                                    dataObject.unshift({
                                        "feature": "Precio",
                                        "value": variant.price

                                    });

                                    let updatedObject = JSON.stringify(dataObject);

                                    fs.writeFile('./salida/'+element, updatedObject, 'utf8', function (err) {
                                        if (err) throw err;
                                        console.log('complete');
                                    });

                                    break loop1;

                                }
                                
    
                            }

                        }

                        

                    }


                }

            }

        });

    });

});