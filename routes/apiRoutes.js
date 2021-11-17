//dependencies
const router = require('express').Router();
const db = require('../db/db.json');
const {addNote} = require('../db/data.js');

//routes
router.get('/notes', (req, res) => {
    res.send(db);
});

router.post('/notes', (req, res) => {
    addNote(req.body);
    res.json();
});

//exports
module.exports = router;