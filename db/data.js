//dependencies
const fs = require('fs');
const db = require('./db.json');
const {nanoid} = require('nanoid');

//functions
const addNote = (note) => {
    note.id = nanoid();
    newDB = (db) ? newDB = db : newDB = []; 
    newDB.push(note);
    fs.writeFile('./db.json', JSON.stringify(newDB), err => {
        if (err) throw err;
    });
    return;
};

const deleteNote = (note) => {
    for (let i = 0; i < db.length; i++) {
        if (db[i].id === note.id) {
            db.splice(i, 1);
        }
    };
    return;
};

//exports
module.exports = {addNote, deleteNote};