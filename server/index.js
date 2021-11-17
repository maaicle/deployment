const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

const port = process.env.PORT || 4006;

app.listen(port, () => {
    console.log(`Docked at port ${port}`);
});