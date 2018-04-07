const path = require('path');

//megadok egy útvonalat
const thePath = 'C:/This/Is/A/Demo/hello.js';

console.log('Dirname : ' + path.dirname(thePath)); //visszaadja a könyvtárakat/mappákat/almappákat
console.log('Last part : ' + path.basename(thePath)); //file.js
console.log('Extension : ' + path.extname(thePath)); //.js
console.log('Is an absolute path? :' + path.isAbsolute(thePath)); //abszolút útvonal mert a gyökértől adom meg

let thePath2 = path.parse(thePath);
console.log(path.parse(thePath));
/* thePath2 = { 
    root: 'C:/',
    dir: 'C:/This/Is/A/Demo',
    base: 'hello.js',
    ext: '.js',
    name: 'hello' 
}*/

console.log(path.format(thePath2));

console.log('Format path : ' + path.format({
    dir: 'C:\\Users\\Refsnes',
    base: 'demo_path.js'
}));