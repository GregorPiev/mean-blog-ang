const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/db');

const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
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

module.exports.addUser = async function (newUser, callback) {
    try {
        //bcrypt.genSalt(10, function (err, salt = 10) {
        console.log('Add User User:', newUser.password);
        // console.log('Add User Salt:', salt);
        const hashPassword = await bcrypt.hash(newUser.password, 10);
        //bcrypt.hash(newUser.password, salt, function (err, hash) {
        //if (err) throw err;
        newUser.password = hashPassword;
        newUser.save(callback)
        //}//);
        //});
    } catch (err) {
        console.log('Module User add error:', err)
    }


}

module.exports.comparePass = function (passFromUser, userDbPass, callback) {
    bcrypt.compare(passFromUser, userDbPass, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    })
}