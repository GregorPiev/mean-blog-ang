const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/db');

const PostSchema = mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

const Post = module.exports = mongoose.model('Post', PostSchema);

module.exports.getPostByLogin = function (login, callback) {
    const query = { login: login };
    User.findOne(query, callback);
}

module.exports.getPostById = function (id, callback) {
    User.findById(id, callback);
}

module.exports.addPost = async function (newUser, callback) {
    try {
        const hashPassword = await bcrypt.hash(newUser.password, 10);
        newUser.password = hashPassword;
        newUser.save(callback);
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