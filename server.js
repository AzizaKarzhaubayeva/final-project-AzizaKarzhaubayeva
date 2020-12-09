const express = require('express');
const app = express();

const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const exphbs = require('express-handlebars');
const hbs = exphbs.create();

const session = require("express-session");
app.use(session({secret:"Shh it's a secret!"}));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

app.use(express.static('public'));
app.use(express.static('files'));

app.listen(1000,e=>{console.log("listening on port 1000")});