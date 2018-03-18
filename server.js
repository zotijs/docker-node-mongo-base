'use strict';

const express = require('express');
const mongoose = require('mongoose');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

//use mongoose
var Schema = mongoose.Schema; 
var Stuff = mongoose.model("Stuff", new Schema({}), "stuffcollection");

//DB setup
mongoose.connect('mongodb://mongo:27017/stuff');

app.get('/', (req, res) => {
  Stuff.find({}).then(function (records) {
    var html = '';

    records.forEach(function (record) {
      html += record.get('username') + ' says ' + record.get('says') + '</br>';
    });

    res.send(html);
  }).catch(function (err) {
    res.send(err);
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);