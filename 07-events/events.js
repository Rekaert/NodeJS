const events = require('events');
const eventEmitter = new events.EventEmitter();

//create an event handler:
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
eventEmitter.on('scream', myEventHandler);
eventEmitter.on('scream', myEventHandler2);

//fire the 'scream' event:
//amikor kiváltódik a scream esemény, lefut a hozzárendelt eseménykezelő
//az eventEmitterel tudunk kiváltani saját eseményt
eventEmitter.emit('scream');