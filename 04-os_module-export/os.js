//a require nem a javascript része, szinkron fut, az import async megy
//Az os modul számos operációs rendszerrel kapcsolatos segédprogramot kínál
const os = require('os');

//a require segítségével egy másik fájl adatait be tudom húzni, saját packegeket tudok létrehozni
const user = require('./user.js');
//különböző adatokat tudhatunk meg saját magunkról
const userInfo = os.userInfo();
console.log(userInfo.username);
console.log(userInfo.uid); //saját azonosítónkat, windowsnál -1
console.log(userInfo.gid); //csoport azonosító, windowsnál -1
console.log(userInfo.shell); //windowsnál 0
console.log(userInfo.homedir); //home könyvtárat

console.log(user.age);
console.log(user.fullName);
console.log(user.userDatas());

//mivel a user egy sima obj., bármikor módosíthatom, a saySomthing
user.fullName = 'Alulu';
console.log(user.fullName);
console.log(user.userDatas());

console.log(user.saySomething);

user.saySomething = 'What?';
console.log(user.saySomething);

console.log(user.me(12)); //meghívom a függvényt, kiírja a isszatérési értéket (144)