const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const studentregSchema = new Schema({
    _id: {
        type: Number,
        required: true,
        unique: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    qualification1: {
        type: String,
        required: true
    },
    address: {
        currentAdd1:{type: String,required: true},
        currentState1: {type: String, required: true},
        currentDist1: {type: String, required: true},
        currentBloc1: {type: String, required: true}
    },
    alternate_address: {
        alterAdd2: {type: String},
        alterState2: {type: String},
        alterDist2: {type: String},
        alterBloc2: {type: String}
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    alternate_email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone_no: {
        type: Number,
        required: true
    },
    test_id: {
        type: String,
        unique: true,
    }
})

module.exports = mongoose.model('Students', studentregSchema);