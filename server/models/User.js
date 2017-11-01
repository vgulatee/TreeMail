const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema({
    googleId: String
});

mongoode.model('users', userSchema);

