const express = require('express'); //Import express
require('./services/passport');

const app = express(); //Generate new express app
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000; //Web deploy app uses whatever port is dynamically given, if not defaults to por: 5000
app.listen(PORT);