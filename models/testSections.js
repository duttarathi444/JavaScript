const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const sectionSchema = new Schema({
    _id: {
        type: String,
        required: true,
        unique: true
    },
    categories: {
        type: String,
    },
    position: {
        type: String
    },
    exam: {
        type: Object
    }
});
module.exports = mongoose.model('sections', sectionSchema);