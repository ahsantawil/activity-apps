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
    location: {
        type: String,
        required: true
    },
    solving: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'Pending'
    },
    pic: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true 
    },
    remaks: {
        type: String
    },
    approve: {
        type: String,
        default: 'Proses'
    },
}, {timestamps: true})

module.exports = mongoose.model('Activity', activitySchema);