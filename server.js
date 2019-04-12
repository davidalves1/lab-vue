const express = require('express');
const history = require('connect-history-api-fallback');
const path = require('path');
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;
const root = path.resolve(__dirname, './');

const app = express();

app.use(function(req, res, next) { console.log(req.url); next(); });
app.use(history())
app.use(express.static(root + '/dist'));

app.listen(port, host);
