const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
    fullname : {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    activityDate: {
        type: Date,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    jobType: {      // afs, ts, se, RnD,  
        type: String,
        required: true
    },
    cases: {
        type: String,
        required: true
    },
    action: {
        type: String,
        required: true
    },
    solving: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    locationStatus: {
        type: String
    },
    status: {
        type: String,
    },
    target: {
        type: String,
    },
    pic: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true 
    },
    other: {
        type: String
    },
    file: {
        type: String
    },
    remaks: {
        type: String
    },
    rating: {
        type: String
    },
    coment: {
        type: String
    },
}, {timestamps: true})

module.exports = mongoose.model('Activity', activitySchema);