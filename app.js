const express = require('express');
const path = require('path');

const app = express();

var HTTP_PORT = process.env.PORT || 8080;

app.use(express.static('public'));

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);