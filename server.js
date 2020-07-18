const express = require('express');
const bodyParser = require('body-parser');

const product = require('./src/routes/products'); 
const app = express();

const config =  {
    dbUser: "test",
    dbPassword: "doyouknow5THINGS"
}

const mongoose = require('mongoose');
const mongoUri = `mongodb://${config.dbUser}:${config.dbPassword}@ds331758.mlab.com:31758/ul-tech-test-db`;
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', product);

const server = app.listen(process.env.PORT || 8080, function () {
    const port = server.address().port;
    console.log("App now running on port", port);
  });