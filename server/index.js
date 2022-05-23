
const express = require('express');
var cors = require('cors')
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.use('/', require('./route/urlRoute'));

app.listen(
  PORT,
  () => console.log(`IT'S ALIVE ON ${PORT}`)
);