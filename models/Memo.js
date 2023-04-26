const mongoose = require("mongoose");

const memoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    posted: {
        type: Date,
        required: true
    },
    subject: {
        type: Date,
        required: true
    },
    memo: {
        type: String,
        required: true
    },
    file: {
        type: String,
        required: false
    }
}, {timestamps: true})


module.exports = mongoose.model('Memo', memoSchema);