const express = require('express'); //Import express
const passport = require('passport'); //Import passport
const GoogleStrategy = require('passport-google-oauth20').Strategy; //Import strategy
const keys = require('./config/keys');

const app = express(); //Generate new express app

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log('access token', accessToken);
    console.log('refresh token', refreshToken);
    console.log('profile', profile);
 
}));

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google'));


const PORT = process.env.PORT || 5000; //Web deploy app uses whatever port is dynamically given, if not defaults to por: 5000
app.listen(PORT);