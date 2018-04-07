//A Node.js core API nagy része egy idiomatikus aszinkron eseményvezérelt architektúra köré épül fel, 
//amelyben bizonyos típusú objektumok (úgynevezett "kibocsátók/emitterek") rendszeresen 
//olyan eseményeket bocsátanak ki, amelyek function objektumokat ("listenereket/eseményfigyelőket") hívnak meg.
//Minden eseményt kibocsátó objektum az EventEmitter osztály példánya. 
//Ezek az objektumok egy eventEmitter.on () függvényt bocsátanak ki, 
//amely lehetővé teszi egy vagy több függvény csatolását az emitter objektum által kibocsátott elnevezett eseményekhez. 
//Az eventEmitter.on () metódus az eseményfigyelő függvények(listenerek) regisztrálására szolgál, 
//míg az eventEmitter.emit () metódus az esemény aktiválására szolgál.

const events = require('events');
const eventEmitter = new events.EventEmitter(); //új eseménykibocsájtó objektum létrehozása

//create an event handler --> event listener függvény:
const myEventHandler = function () {
    console.log('I hear a scream');
}

const myEventHandler2 = function () {
    console.log('Too late, she is dead');
}

//assign the event handler to an event:
//az emmitter az events modul amit behúzunk, annak a constructora
//a scream eseményhez hozzárendelem az eventHandler függvényt
//egy eseményhez több eseménykezelőt(eventhandlert) felvehetünk
//a scream eseményhez tömb szinten több eseményt is hozzárendelhetünk
//eventEmmitter.on(1.param: az esemény, amit figyelni kell, 2. param: az eseményt lekezelő függvény)
eventEmitter.on('scream', myEventHandler);
eventEmitter.on('scream', myEventHandler2);

//fire the 'scream' event:
//amikor kiváltódik a scream esemény, lefut a hozzárendelt eseménykezelő
//az eventEmitterel tudunk kiváltani saját eseményt
eventEmitter.emit('scream');