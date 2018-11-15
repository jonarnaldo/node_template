const bodyParser = require('bodyParser');
const cors = require('cors');
const errorHandler = require('errorHandler');
const session = require('express-session');
const mongoose = require('mongoose');
const path = require('path');
const express = require('express');
const routes = require('./routes');
const app = express();


app.use(bodyParser);
app.use(cors);
app.use(errorHandler);
app.use(session);
app.use(mongoose);
app.use(path);
app.use(express);

app.use(routes);

app.listen(8000, () => {
  console.log("Server started on port:8000");
})
