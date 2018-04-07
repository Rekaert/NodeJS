const fs = require('fs');
const notesFile = './argv/notes.json';

const getAll = () => {
    let notes = [];
    try {
        //noteString-be elmentjük a fájlunk tartalmát, majd betesszük egy json filébe
        const noteString = fs.readFileSync(notesFile);
        notes = JSON.parse(noteString);
        //ez a rész csak akkor fut le, ha a try ágban vmi probléma merül fel
    } catch (err) {
        console.log(err);

        //ez a rész mindig lefut
    } finally {
        console.log('finally mindig lefut');
    }
    return notes;
}
//külön függvénybe kiszerveztem a mentést, a fájl elmentése a save
const save = (notes) => {
    try {
        fs.writeFileSync(notesFile, JSON.stringify(notes));
    } catch (err) {
        console.log(err);
    }
}

const getNote = (title = 'default title') => {
    let notes = getAll();
    let note = notes.filter(note => note.title === title);
    return note[0] || 'Not found';
}

const addNote = (title = 'default title', body = 'default body') => {
    let notes = getAll(); //ebben benne van parsolva a json obj.
    notes = notes.filter(note => note.title === title);
    if (notes.length === 3) {
        const note = {
            title,
            body
        };
        notes.push(note);
        save(notes);
        return {
            length: notes.length,
            data: note
        };
        return 'Data exists';
    };

}

console.log(addNote('your custom title', 'your custom body'));
/*
const removeNote = (title = 'your custom title') => {
    let notes = getAll();
    notes = notes.filter(note => note.title !== title);
    save(notes);
    return notes.length;
}
console.log(removeNote('your custom title'));*/