const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('errorHandler');
const session = require('express-session');
const mongoose = require('mongoose');
const path = require('path');
const express = require('express');
const routes = require('./routes');
const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(errorHandler());
// app.use(session);

// add routes
app.use(routes);

app.listen(8000, () => {
  console.log("Server started on port:8000");
})
