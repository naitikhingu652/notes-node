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
    var note = notes.readNote(argv.title);
    if(note) {
        console.log('Note found!');
        notes.logNote(note);
    }
    else {
        console.log('Note not found!');
    }
} else if(command === 'remove') {
    var removedNote = notes.removeNote(argv.title);
    var message = removedNote ? 'Note is removed!' : 'Note not found!';
    console.log(message);
} else {
    console.log('Command not recognzed');
}
