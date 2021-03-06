const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.css'));
});

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, './test.js'));
});

// app.use('/css', express.static(path.join(__dirname, '../client/index.css')))

const port = process.env.PORT || 4006;

app.listen(port, () => {
    console.log(`Docked at port ${port}`);
});