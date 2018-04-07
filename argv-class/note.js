const fs = require('fs');
const notesFile = './argv-class/notes.json';

class Note {

    static getAll() {
        let notes = [];
        try {
            //noteString-be elmentjük a fájlunk tartalmát, majd betesszük egy json filébe
            const noteString = fs.readFileSync(this.notesFile);
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
    static save(notes) {
        try {
            fs.writeFileSync(this.notesFile, JSON.stringify(notes));
        } catch (err) {
            console.log(err);
        }
    }

    static getNote(id, title = 'default title') {
        let notes = this.getAll();
        let note = notes.filter(note => note.title === title);
        return note[0] || 'Not found';
    }

    static addNote(id, title = 'default title', body = 'default body') {
        let notes = this.getAll(); //ebben benne van parsolva a json obj.
        let duplicateNotes = notes.filter(note => note.title === title);
        if (duplicateNotes.length === 0) {
            const note = {
                id,
                title,
                body
            };
            notes.push(note);
            this.save(notes);
            return {
                length: notes.length,
                data: note
            };
            return 'Data exists';
        };

    }

    static removeNote(id, title = 'my custom title') {
        let notes = this.getAll();
        notes = notes.filter(note => note.title !== title);
        this.save(notes);
        return notes.length;
    }

    //1.param: melyik titleval rendelkező objektuot szeretném módosítani
    //ahol a title ez, ott írd át a titlét erre, a bodyt pedi erre
    static editNote(id, oldtitle, title = "default title", body = "default body") {
        let notes = this.getAll();
        const index = notes.findIndex(note => note.title === oldtitle);
        let duplicateNotes = notes.filter(note => note.title === title);
        if (duplicateNotes.length === 0 && index !== -1) {
            notes[index].title = title;
            notes[index].body = body;
            this.save(notes);
            return notes[index];
        }
        return 'Data exists';

    }
}

let note1 = new Note();
console.log(note1.addNote(1));

module.exports = {
    Note
}