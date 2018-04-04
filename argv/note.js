/*
const fs = require('fs');
const notesFile = './argv/notes.json';

const getAll = () => {
    let notes = [];
    try {
        //noteString-be elmentjük a fájlunk tartalmát, majd betesszük egy json filébe
        const noteString = fs.readFileSync(notesFile);
        notes = JSON.parse(noteString);
        let errors = [];
        if (notes.length == 2) {
            //throw-val bármilyen hibát ki tudunk váltani
            errors.push('Üres tömb hiba');
        }

        if (notes.length !== 0) {
            errors.push('0 hiba');
        }

        if (notes.length != 0) {
            throw errors;
        }
        //ez a rész csak akkor fut le, ha a try ágban vmi probléma merül fel
    } catch (err) {
        console.log(err);

        //ez a rész mindig lefut
    } finally {
        console.log('finally mindig lefut');
    }
    return notes;
}
console.log(getAll());

module.exports = {
    getAll
}
*/
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
    let duplicateNotes = notes.filter(note => note.title === title);
    if (duplicateNotes.length === 0) {
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

console.log(addNote('my custom title', 'my custom body'));

const removeNote = (title = 'my custom title') => {
    let notes = getAll();
    notes = notes.filter(note => note.title !== title);
    save(notes);
    return notes.length;
}
//console.log(removeNote('my custom title'));

//1.param: melyik titleval rendelkező objektuot szeretném módosítani
//ahol a title ez, ott írd át a titlét erre, a bodyt pedi erre
const editNote = (oldtitle, title = "default title", body = "default body") => {
    let notes = getAll();
    const index = notes.findIndex(note => note.title === oldtitle);
    let duplicateNotes = notes.filter(note => note.title === title);
    if (duplicateNotes.length === 0 && index !== -1) {
        notes[index].title = title;
        notes[index].body = body;
        save(notes);
        return notes[index];
    }
    return 'Data exists';

}

console.log(editNote('newtitle', 'title'));



module.exports = {
    getAll,
    getNote,
    addNote,
    removeNote,
    editNote
}