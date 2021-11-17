//dependencies
const router = require('express').Router();
const db = require('../db/db.json');
const {addNote, deleteNote} = require('../db/data.js');

//routes
router.get('/notes', (req, res) => {
    res.send(db);
});

router.post('/notes', (req, res) => {
    addNote(req.body);
    res.json();
});

router.delete('/notes/:id', (req, res) => {
    deleteNote(req.params);
    res.json();
});

//exports
module.exports = router;