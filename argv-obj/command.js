const yargs = require('yargs');
const note = require('./note');
//console.log(process.argv);
//const command = 'all';

const idOptions = {
    describe: 'Id of note',
    alias: 'i'
};

const titleOptions = {
    describe: 'Title of note',
    alias: 't'
};

const bodyOptions = {
    describe: 'Body of note',
    alias: 'b'
};

const argv = yargs
    .command('all', 'Get all notes')
    .command('get', 'Get a note', {
        id: idOptions,
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        id: idOptions,
        title: titleOptions
    })
    .command('add', 'Add a new note', {
        id: idOptions,
        title: titleOptions,
        body: bodyOptions
    })
    .command('edit', 'Edit a note', {
        id: idOptions,
        oldtitle: {
            describe: 'The old title of note',
            demandOptions: true,
            alias: 'ot'
        },
        title: titleOptions,
        body: bodyOptions
    })
    .help()
    .argv; //az argumentumokat szöveges obj-ként el tudjuk érni

const command = argv._[0]; //maga a parancs így érhető el


//eldöntöm, h. milyen parancs esetén melyik metódus fusson le
switch (command) {
    case 'add':
        noteObj.addNote(argv.id, argv.title, argv.body);
        break;
    case 'all':
        console.log(noteObj.getAll());
        break;
    case 'get':
        console.log(noteObj.getNote(argv.id, argv.title));
        break;
    case 'remove':
        console.log(noteObj.removeNote(argv.id, argv.title));
        break;
    case 'edit':
        console.log(noteObj.editNote(argv.id, argv.oldtitle, argv.title, argv.body));
        break;
    default:
        console.log('Unidentified command');
}