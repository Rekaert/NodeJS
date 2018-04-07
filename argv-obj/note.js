const fs = require('fs');
const notesFile = './argv-obj/notes.json';

let noteObj = {

    getAll: () => {
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
    save: (notes) => {
        try {
            fs.writeFileSync(notesFile, JSON.stringify(notes));
        } catch (err) {
            console.log(err);
        }
    }

    getNote: (id, title = 'default title') => {
        let notes = getAll();
        let note = notes.filter(note => note.title === title);
        return note[0] || 'Not found';
    }

    addNote: (id, title = 'default title', body = 'default body') => {
        let notes = getAll(); //ebben benne van parsolva a json obj.
        let duplicateNotes = notes.filter(note => note.title === title);
        if (duplicateNotes.length === 0) {
            const note = {
                id,
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

    removeNote: (id, title = 'my custom title') => {
        let notes = getAll();
        notes = notes.filter(note => note.title !== title);
        save(notes);
        return notes.length;
    }

    //1.param: melyik titleval rendelkező objektuot szeretném módosítani
    //ahol a title ez, ott írd át a titlét erre, a bodyt pedi erre
    editNote: (id, oldtitle, title = "default title", body = "default body") => {
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
}
console.log(noteObj.addNote(1, 'first title', 'first body'));

module.exports = {
    noteObj: {
        getAll,
        getNote,
        addNote,
        removeNote,
        editNote
    }
}