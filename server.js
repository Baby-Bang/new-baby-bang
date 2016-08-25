const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = new express();

const sessions = require('./server/routers/session');

const isUserExist = require('./server/routers/isUserExist');

const login = require('./server/routers/login');

const showDiaries = require('./server/routers/show-diaries');

const sign = require('./server/routers/sign');

const editorDiary = require('./server/routers/editor-diary');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));
app.use(session({
  secret: 'a',
  resave: true,
  saveUninitialized: true,
}));

app.use('/',sessions);
app.use('/',isUserExist);
app.use('/', login);
app.use('/', showDiaries);
app.use('/', sign);
app.use('/', editorDiary);

app.get('*', (req, res) => {
  "use strict";
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

var server = app.listen(3000, function () {
  console.log('listening at port %s', server.address().port);
});

module.exports = server;