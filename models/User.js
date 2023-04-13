const { Schema, model } = require('mongoose');


// TODO add User properties and validation according to assignment --> CHECK
const userSchema = new Schema({
    email: { 
        type: String, 
        required: true, 
        unique: true},
    username: { 
        type: String, 
        required: true, 
        unique: true, 
        match: [/^[a-zA-Z0-9]+$/i ,'Username may content only english letters and numbers']
    },
    hashedPassword: { 
        type: String, 
        required: true }
});

// Index
userSchema.index({ username: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

// Index
userSchema.index({ email: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;



// if there is requirement for email length
// username: { type: String, required: true, unique: true, minlength: [3, 'Username must be at least 3 characters long'] },