// DEPENDENCIES

const express = require('express');
const path = require('path');

// set up the Express App
const app = express();
// set up a PORT variable
const PORT = 5000;

// Routes

// display index.html on server
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

// FUNCTIONS

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// USER INTERACTIONS