const fs = require('fs');
const notes = require('./notes');

const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs.argv;

var command = argv._[0];

if(command === 'add') {
    notes.addNote();
} else if(command === 'list') {
    notes.listNotes();
} else if(command === 'read') {
    notes.readNote();
} else if(command === 'remove') {
    notes.removeNote();
} else {
    console.log('Command not recognzed');
}
