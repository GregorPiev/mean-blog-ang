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

module.exports.addPost = async function (newPost, callback) {
    try {
        newPost.save(callback);
    } catch (err) {
        console.log('Module Post add error:', err)
    }


}

