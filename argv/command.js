const yargs = require('yargs');
const note = require('./note');
//console.log(process.argv);
//const command = 'all';

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
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('edit', 'Edit a note', {
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
        note.addNote(argv.title, argv.body);
        break;
    case 'all':
        console.log(note.getAll());
        break;
    case 'get':
        console.log(note.getNote(argv.title));
        break;
    case 'remove':
        console.log(note.removeNote(argv.title));
        break;
    case 'edit':
        console.log(note.editNote(argv.oldtitle, argv.title, argv.body));
        break;
    default:
        console.log('Unidentified command');
}