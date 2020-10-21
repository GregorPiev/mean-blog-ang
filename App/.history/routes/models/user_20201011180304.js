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
})