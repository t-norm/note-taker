const express = require('express');
const fs = require("fs");
const path = require("path");
const database = require("./db/db")
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("/api/notes", function (req, res) {
    res.json(database);
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});