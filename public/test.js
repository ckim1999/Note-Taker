// DEPENDENCIES

const express = require('express');
const path = require('path');

// set up the Express App
const app = express();
// set up a PORT variable
const PORT = 5000;

// Routes

// send the index.html into the local server
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
// send the notes.html into the local server
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));

// FUNCTIONS

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// USER INTERACTIONS