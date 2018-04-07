console.log('Start');
//fájl szisztem modul behúzása
const fs = require('fs');

//fájl elérési útvonala
let file = './03-fs/file.txt';

// https://nodejs.org/api/fs.html

//READ file

//Read file asyncronous
//kiteszi a LIBUV-be
fs.readFile(file, function (err, data) {
    if (err) {
        throw err
    } else {
        console.log("Asyncronous read: \n" + data.toString());
    }
})
console.log('Stop');

//file beolvasása szinkron
//A beolvasott file tartalmát stringgé alakítjuk
//sinkront fogja először lefuttatni
let data = fs.readFileSync(file);
console.log("Syncronous read: \n" + data.toString());

//a már meglévő fájl végéhez hozzá fog fűzni
//asyncron megy
fs.appendFile(file, 'Hello content', function (err) {
    if (err) throw err;
    console.log("Saved");

});

//open/close file
// async - open file, if is not exist, 
// megnyitja a filebe lementett útvonalat, w --> írásra (2. paramként egy flag lehet, Fyle System menüpont alatt a nodejs.orgon)
//write flag mindig felülírja a filet
//fd-be rakd bele ennek  a megnyitott filenak az azonosítóját, ezt a filét majd zárd be
const fd = fs.open(file, 'w', function (err, fd) {
    if (err) throw err;
    console.log('Opend!');

    fs.close(fd, function (err) {
        if (err) throw err;
        console.log("File closed successfully");
    });
});

//write file - fájlba tudunk írni
//a fájl tartalmát, ami benne volt, azt felülírjuk
//aszinkron művelet, megnyitja a filet, ha nem létezett a file, létrehozza
fs.writeFile(file, 'Write new content!', (err) => {
    if (err) throw err
    console.log('Opend!');
});
/*
//Rename - fájl átnevezése
//átnevezi a filet, teljes útvonalat adunk meg
//ha másik útvonalra rakom átmozgatja a filet
//nemcsak átnevezni, hanem átmozgatni is tudunk filet
fs.rename(file, './03-fs/newName.txt', (err) => {
    if (err) throw err
    console.log('Renamed complete!');
});

file = './03-fs/newName.txt';
*/

//átmásolja adott fájlt adott helyre adott néven
fs.copyFile(file, './03-fs/filecopy.txt', (err) => {
    if (err) throw err
    console.log('Copied to filecopy.txt');
});

//delete file
fs.unlink('./03-fs/filecopy.txt', (err) => {
    if (err) throw err
    console.log('successfully deleted');
});

//fájl statisztika lekérése
fs.stat(file, (err, stats) => {
    if (err) throw err;
    console.log(`stats: ${JSON.stringify(stats)}`);
});

//File CHMOD
//owner, group, other, 
//read, write, execute - 4, 2, 1
//a file jogosultságát változtatjuk meg
//egy fájlra jogosultságok kiadása: írás(2), olvasás(4), futtatási(1) jogosultság

fs.chmod(file, '777', (err) => {
    if (err) throw err;
    console.log('successfully modified privilegs');
});