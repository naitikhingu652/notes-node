const fs = require('fs');
const notes = require('notes');

const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs.argv;

var command = argv._[0];

if(command === 'add') {
    console.log('Adding new note');
} else if(command === 'list') {
    console.log('Listing all note');
} else if(command === 'read') {
    console.log('Reading note');
} else if(command === 'list') {
    console.log('Removing note');
} else {
    console.log('Command not recognzed');
}
