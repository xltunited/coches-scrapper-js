// Get links to traverse per brand
import brands from './allBrandLinks.json' assert { type: "json" };

// To write to file at the end
import fs from 'fs';

console.log(brands[0].models[0][0].link)