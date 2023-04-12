const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


const JWT_SECRET = 'jwt-secret123';


async function register(username, password) {
    const existing = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });
    if(existing) {
        throw new Error('User is taken already')
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        hashedPassword
    });

    // TODO see assignments if registration create user session
    const token = createSession(user);

    return token;
}

async function login() {

}

function createSession(user) {
    const payload = {
        _id: user._id,
        username: user.username,
    };

    const token = jwt.sign(payload, JWT_SECRET);

    return token;
}

function verifyToken() {

}


module.exports = {
    register,
    login,
    verifyToken
}