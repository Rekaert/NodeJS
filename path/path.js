//az útvonal modul segédprogramokat biztosít a fájlok és könyvtárak eléréséhez.

const path = require('path');

//megadok egy útvonalat
const thePath = 'This/Is/A/Demo/file.js';

console.log('Dirname : ' + path.dirname(thePath));
console.log('Last part : ' + path.basename(thePath));
console.log('Extension : ' + path.extname(thePath));
console.log('Is an absolute path? :' + path.isAbsolute(thePath));
//param: obj, egy útvonalat és egy fájlnevet, az útvonalat és a filenevet összefűzi egysztringgé
console.log('Format path : ' + path.format({
    dir: 'C\\Users\\Refsnes',
    base: 'demo_path.js'
}));