const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = new express();

const hello = require('./server/routers/hello-world');
const logIn=require('./server/routers/logIn');
const sign=require('./server/routers/sign');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));
app.use(session({
  secret: 'a',
  resave: true,
  saveUninitialized: true,
}));

app.use('/', hello);
app.use('/',logIn);
app.use('/',sign);
var server = app.listen(3000, function () {
  console.log('listening at port %s', server.address().port);
});

module.exports = server;