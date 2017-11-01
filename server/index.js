const express = require('express'); //Import express
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');

const app = express(); //Generate new express app
mongoose.connect(keys.mongoURI);
require('./routes/authRoutes')(app);

const PORT = process.env.PORT; //Web deploy app uses whatever port is dynamically given, if not defaults to por: 5000
app.listen(PORT);