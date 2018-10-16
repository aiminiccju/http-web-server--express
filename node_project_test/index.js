const express = require('express');
const app = express();
const json1 = require('./package.json');

app.use(express.static('static'));

app.get('/json1.json', (req, res) => res.send(json1));

app.listen(3000, () => console.log('Example app listening on port 3000!'));

