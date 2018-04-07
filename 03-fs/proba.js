const fs = require('fs');

//fájl elérési útvonala
let file = './03-fs/file.txt';


fs.chmod(file, '777', (err) => {
    if (err) throw err;
    console.log('successfully modified privilegs');
});