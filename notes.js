const fs = require('fs');

var addNote = (title, body) => {
    console.log('Adding new note');
}

var listNotes = () => {
    console.log('Listing all note');
}

var readNote = (title) => {
    console.log('Reading note');
}

var removeNote = (title) => {
    console.log('Removing note');
}

module.exports = {
    addNote,
    listNotes,
    readNote,
    removeNote
}