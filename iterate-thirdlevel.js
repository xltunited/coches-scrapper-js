// Get links to traverse per brand
import brands from './allBrandLinks.json' assert { type: "json" };

for (let brand of brands) {

    let models = brand.models;

    for (let model of models) {

        for (let version of model) {

            if (!("versions" in version)) {



            }

            console.log("---------------------------------------");
            console.log(version.link);
            console.log("---------------------------------------");


        }

    }

}