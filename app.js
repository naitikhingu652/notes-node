const fs = require('fs');
const notes = require('./notes');

const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs.argv;

var command = argv._[0];

if(command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log('Note created!');
        notes.logNote(note);
    }
    else {
        console.log('Note title taken!');
    }
} else if(command === 'list') {
    var allNotes = notes.listNotes();
    console.log(`Printing ${allNotes.length} note(s)!`);
    allNotes.forEach(note => {
        notes.logNote(note);
    });
} else if(command === 'read') {
    notes.readNote();
} else if(command === 'remove') {
    notes.removeNote();
} else {
    console.log('Command not recognzed');
}
