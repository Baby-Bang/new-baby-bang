const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = new express();


const isUserExist = require('./server/routers/isUserExist');

const login = require('./server/routers/login');

const showDiaries = require('./server/routers/show-diaries');

const sign = require('./server/routers/sign');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));
app.use(session({
  secret: 'a',
  resave: true,
  saveUninitialized: true,
}));


app.use('/',isUserExist);

app.use('/', login);

app.use('/', showDiaries);

app.use('/', sign);

var server = app.listen(3000, function () {
  console.log('listening at port %s', server.address().port);
});

module.exports = server;