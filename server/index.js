const express = require('express'); //Import express
const passport = require('passport'); //Import passport
const GoogleStrategy = require('passport-google-oauth20').Strategy; //Import strategy

const app= express(); //Generate new express app



passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 5000; //Web deploy app uses whatever port is dynamically given, if not defaults to por: 5000
app.listen(PORT);




 