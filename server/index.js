const express = require('express'); //Import express
const passport = require('passport'); //Import passport
const GoogleStrategy = require('passport-google-oauth20').Strategy; //Import strategy
const keys = require('./config/keys');

const app = express(); //Generate new express app

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    googleClientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, accessToken => {
    console.log(accessToken);
}));

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

const PORT = process.env.PORT || 5000; //Web deploy app uses whatever port is dynamically given, if not defaults to por: 5000
app.listen(PORT);