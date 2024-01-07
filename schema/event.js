const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const EventSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});
const model = mongoose.model('Event', EventSchema);
module.exports =  model;