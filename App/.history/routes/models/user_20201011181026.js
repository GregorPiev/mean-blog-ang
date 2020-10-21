const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../../config/db');

const UserSchema = mongoose.Schema({
    name: {
        type: string
    },
    email: {
        type: string,
        required: true
    },
    login: {
        type: string,
        required: true
    },
    password: {
        type: string,
        required: true
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserByLogin = function (login, callback) {
    const query = { login: login };
    User.findOne(query, callback);
}

module.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
}



