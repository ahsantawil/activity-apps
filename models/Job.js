const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    typejob: {
        type: String,
        required: true
    }
}, {timestamps: true})


module.exports = mongoose.model('Job', jobSchema);