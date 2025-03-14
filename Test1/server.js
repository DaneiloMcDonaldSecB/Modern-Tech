const express = require('express');
const app = express();
const PORT = 8080;


app.get('/', (req, res) => {
    res.send('Welcome to the server. You can use /fetch, /save, or /delete routes.');
});


app.get('/fetch', (req, res) => {
    res.send('You have entered the fetch route');
});


app.post('/save', (req, res) => {
    res.send('You have entered the save route');
});


app.delete('/delete', (req, res) => {
    res.send('You have entered the delete route');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
