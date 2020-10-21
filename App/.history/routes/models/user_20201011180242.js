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
    email: {
        type: string,
        required: true
    },

    email: {
        type: string,
        required: true
    },


})