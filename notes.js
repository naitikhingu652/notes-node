const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
}

var saveNote = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var logNote = (note) => {
    console.log('--------------------------');
    console.log(`Title : ${note.title}`);
    console.log(`Body  : ${note.body}`);
}

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    }

    var duplicateNotes = notes.filter((notes) => notes.title === title);

    if(duplicateNotes.length == 0) {
        notes.push(note);
        saveNote(notes);
        return note;
    }
}

var listNotes = () => {
    return fetchNotes();
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
    removeNote,
    logNote
}