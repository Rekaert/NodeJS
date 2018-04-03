//így használhatun bármilyen globálisan elérhető modult, a zárójelek közé mindig adott modul neve kell
const fs = require('fs');

//a const-hoz az appendFile hozzáadja 1. param: a fájl útvonala, amihez hozzáadja, 2. param a szöveg, amit hozzáad a fájlhoz, 3. param call back
//a paramétereket kiszervezhetjük változóba, a call bacekt átalakíthatjuk arrow functionná
fs.appendFile('./02-require/file.txt', 'File content \n', (err) => {
    if (err) throw err;
    console.log('Saved');
});